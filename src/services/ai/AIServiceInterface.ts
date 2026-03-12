/**
 * AI and music service interfaces.
 * All game code uses these interfaces; mock or real implementation is chosen by ServiceFactory.
 */

import type {
  DungeonConfig,
  DungeonData,
  GameContext,
  NarrativeResponse,
  PlayerMetrics,
  DifficultyAdjustment,
  MusicRequest,
} from './types';

export interface IAIService {
  generateDungeon(config: DungeonConfig): Promise<DungeonData>;
  generateNarrative(context: GameContext): Promise<NarrativeResponse>;
  adjustDifficulty(metrics: PlayerMetrics): Promise<DifficultyAdjustment>;
}

export interface IMusicService {
  generateTrack(request: MusicRequest): Promise<ArrayBuffer>;
  getTrackForMood(mood: string): Promise<string>;
}
