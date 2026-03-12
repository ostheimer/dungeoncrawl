/**
 * Mock music service for local development without Lyria API.
 * Returns URLs to bundled OGG tracks in public/assets/audio/music/.
 * Same tracks can be used as fallback in production when Lyria is unavailable.
 */

import type { IMusicService } from '../ai/AIServiceInterface';
import type { MusicRequest } from '../ai/types';

const MOOD_TO_PATH: Record<string, string> = {
  exploration: '/assets/audio/music/exploration.ogg',
  combat: '/assets/audio/music/combat.ogg',
  boss: '/assets/audio/music/combat.ogg',
  victory: '/assets/audio/music/safe.ogg',
  death: '/assets/audio/music/safe.ogg',
  mystery: '/assets/audio/music/exploration.ogg',
  safe: '/assets/audio/music/safe.ogg',
};

export class MockMusicService implements IMusicService {
  /**
   * In mock mode we do not generate audio; we return empty ArrayBuffer.
   * The game should use getTrackForMood() to play bundled files instead.
   */
  async generateTrack(_request: MusicRequest): Promise<ArrayBuffer> {
    return new ArrayBuffer(0);
  }

  /**
   * Returns the public URL path to a pre-bundled track for the given mood.
   * Place OGG files in public/assets/audio/music/ (exploration.ogg, combat.ogg, safe.ogg).
   */
  async getTrackForMood(mood: string): Promise<string> {
    const path = MOOD_TO_PATH[mood] ?? MOOD_TO_PATH.exploration;
    return path;
  }
}
