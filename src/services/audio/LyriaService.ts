/**
 * Real music service using Lyria API (Vertex AI).
 * Used in production when LYRIA_API_KEY is set.
 */

import type { IMusicService } from '../ai/AIServiceInterface';
import type { MusicRequest } from '../ai/types';

export class LyriaService implements IMusicService {
  private getApiUrl(): string {
    if (typeof window !== 'undefined') {
      return '/api/ai/music';
    }
    const base = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    return `${base}/api/ai/music`;
  }

  async generateTrack(request: MusicRequest): Promise<ArrayBuffer> {
    const res = await fetch(this.getApiUrl(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
    });
    if (!res.ok) throw new Error(`Music API error: ${res.status}`);
    return res.arrayBuffer();
  }

  async getTrackForMood(mood: string): Promise<string> {
    const buf = await this.generateTrack({
      mood: mood as MusicRequest['mood'],
      intensity: 0.5,
      theme: 'dungeon',
    });
    if (buf.byteLength === 0) return '';
    const blob = new Blob([buf], { type: 'audio/ogg' });
    return URL.createObjectURL(blob);
  }
}
