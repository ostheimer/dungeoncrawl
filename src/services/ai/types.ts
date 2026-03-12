/**
 * Shared types for AI and music services.
 * Used by both mock and real implementations.
 */

export interface DungeonConfig {
  width: number;
  height: number;
  level: number;
  theme: string;
  seed?: number;
}

export interface DungeonCellData {
  x: number;
  y: number;
  type: string;
  walls?: Record<string, unknown>;
}

export interface DungeonData {
  width: number;
  height: number;
  theme: string;
  cells: DungeonCellData[];
  monsters: { type: string; x: number; y: number; behavior?: string }[];
  items: { type: string; x: number; y: number }[];
  puzzles?: { description: string; solution: string; cells: unknown[] }[];
  narrative?: { introduction: string; hints: string[] };
}

export type NarrativeTrigger =
  | 'room_enter'
  | 'door_open'
  | 'secret_found'
  | 'combat_start'
  | 'combat_end'
  | 'puzzle_interact'
  | 'character_death'
  | 'level_change'
  | 'exploration_tick';

export interface GameContext {
  trigger: NarrativeTrigger;
  roomType?: string;
  theme?: string;
  inCombat?: boolean;
  characterName?: string;
  level?: number;
  [key: string]: unknown;
}

export interface NarrativeResponse {
  narrative: string;
  mood: 'tense' | 'calm' | 'dangerous' | 'mysterious' | 'triumphant';
  hint?: string;
}

export interface PlayerMetrics {
  deathCount: number;
  averageRoomTime: number;
  combatEfficiency: number;
  resourceManagement: number;
  explorationThoroughness: number;
  puzzleSolveRate: number;
  spellUsageFrequency: number;
  sessionLength: number;
  sessionCount: number;
}

export interface DifficultyAdjustment {
  monsterStrength: number;
  monsterDensity: number;
  lootQuality: number;
  healItemFrequency: number;
  trapDifficulty: number;
  puzzleComplexity: 'simple' | 'moderate' | 'complex';
  narrativeIntensity: 'relaxed' | 'normal' | 'intense';
}

export type MusicMood =
  | 'exploration'
  | 'combat'
  | 'boss'
  | 'victory'
  | 'death'
  | 'mystery'
  | 'safe';

export interface MusicRequest {
  mood: MusicMood;
  intensity: number;
  theme: string;
  instruments?: string[];
}
