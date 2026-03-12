/**
 * Real AI service using Cloudflare Workers AI.
 * Used in production when CF_API_TOKEN is set.
 */

import type { IAIService } from './AIServiceInterface';
import type {
  DungeonConfig,
  DungeonData,
  GameContext,
  NarrativeResponse,
  PlayerMetrics,
  DifficultyAdjustment,
} from './types';

export class WorkersAIService implements IAIService {
  private getApiUrl(path: string): string {
    if (typeof window !== 'undefined') {
      return `/api/ai/${path}`;
    }
    const base = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    return `${base}/api/ai/${path}`;
  }

  async generateDungeon(config: DungeonConfig): Promise<DungeonData> {
    const res = await fetch(this.getApiUrl('generate-dungeon'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config),
    });
    if (!res.ok) throw new Error(`Dungeon API error: ${res.status}`);
    return res.json() as Promise<DungeonData>;
  }

  async generateNarrative(context: GameContext): Promise<NarrativeResponse> {
    const res = await fetch(this.getApiUrl('narrative'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(context),
    });
    if (!res.ok) throw new Error(`Narrative API error: ${res.status}`);
    return res.json() as Promise<NarrativeResponse>;
  }

  async adjustDifficulty(metrics: PlayerMetrics): Promise<DifficultyAdjustment> {
    const res = await fetch(this.getApiUrl('difficulty'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(metrics),
    });
    if (!res.ok) throw new Error(`Difficulty API error: ${res.status}`);
    return res.json() as Promise<DifficultyAdjustment>;
  }
}
