/**
 * Mock AI service for local development without Workers AI.
 * Uses template data from mock-data/*.json and deterministic selection.
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
import type { NarrativeTrigger } from './types';

interface NarrativesData {
  [key: string]: string[];
}

interface DungeonTemplate {
  id: string;
  width: number;
  height: number;
  theme: string;
  cells: { x: number; y: number; type: string }[];
  monsters: { type: string; x: number; y: number; behavior?: string }[];
  items: { type: string; x: number; y: number }[];
  start?: { x: number; y: number };
  stairsDown?: { x: number; y: number };
}

export class MockAIService implements IAIService {
  private narratives: NarrativesData | null = null;
  private dungeonTemplates: DungeonTemplate[] | null = null;
  private deathMessages: string[] | null = null;
  private narrativeIndex = 0;
  private dungeonIndex = 0;
  private deathIndex = 0;

  private async loadNarratives(): Promise<NarrativesData> {
    if (this.narratives) return this.narratives;
    const data = await import('./mock-data/narratives.json');
    this.narratives = data.default as NarrativesData;
    return this.narratives;
  }

  private async loadDungeonTemplates(): Promise<DungeonTemplate[]> {
    if (this.dungeonTemplates) return this.dungeonTemplates;
    const data = await import('./mock-data/dungeon-templates.json');
    this.dungeonTemplates = data.default as DungeonTemplate[];
    return this.dungeonTemplates;
  }

  private async loadDeathMessages(): Promise<string[]> {
    if (this.deathMessages) return this.deathMessages;
    const data = await import('./mock-data/death-messages.json');
    this.deathMessages = data.default as string[];
    return this.deathMessages;
  }

  async generateDungeon(config: DungeonConfig): Promise<DungeonData> {
    const templates = await this.loadDungeonTemplates();
    if (templates.length === 0) {
      return this.fallbackDungeon(config);
    }
    const seed = config.seed ?? Date.now();
    const idx = Math.abs(seed) % templates.length;
    const t = templates[idx];
    return {
      width: config.width || t.width,
      height: config.height || t.height,
      theme: config.theme || t.theme,
      cells: t.cells.map((c) => ({ ...c, walls: {} })),
      monsters: t.monsters.map((m) => ({
        type: m.type,
        x: m.x,
        y: m.y,
        behavior: m.behavior,
      })),
      items: t.items.map((i) => ({ type: i.type, x: i.x, y: i.y })),
      narrative: {
        introduction: `Mock-Dungeon: ${t.theme}, Level ${config.level}. Lokaler Modus.`,
        hints: ['Nutze die Mock-Daten zum Testen.', 'Echte KI kommt mit Workers AI.'],
      },
    };
  }

  private fallbackDungeon(config: DungeonConfig): DungeonData {
    const w = Math.max(5, config.width || 8);
    const h = Math.max(5, config.height || 8);
    const cells: { x: number; y: number; type: string; walls?: Record<string, unknown> }[] = [];
    for (let x = 1; x < w - 1; x++) {
      for (let y = 1; y < h - 1; y++) {
        cells.push({ x, y, type: 'floor' });
      }
    }
    return {
      width: w,
      height: h,
      theme: config.theme || 'catacombs',
      cells,
      monsters: [{ type: 'rat', x: Math.floor(w / 2), y: Math.floor(h / 2), behavior: 'patrol' }],
      items: [{ type: 'torch', x: 1, y: 1 }],
      narrative: {
        introduction: 'Ein einfacher Fallback-Dungeon. Keine externen Services.',
        hints: [],
      },
    };
  }

  async generateNarrative(context: GameContext): Promise<NarrativeResponse> {
    const data = await this.loadNarratives();
    const trigger = (context.trigger ?? 'room_enter') as NarrativeTrigger;
    const list = data[trigger] ?? data.room_enter;
    if (!list || list.length === 0) {
      return {
        narrative: 'Die Stille des Verlieses umgibt euch.',
        mood: 'calm',
        hint: undefined,
      };
    }
    const idx = this.narrativeIndex % list.length;
    this.narrativeIndex += 1;
    const narrative = list[idx];
    const moods: NarrativeResponse['mood'][] = ['calm', 'tense', 'mysterious', 'dangerous', 'triumphant'];
    const mood = moods[idx % moods.length];
    return {
      narrative,
      mood,
      hint: idx % 3 === 0 ? 'Vielleicht verbirgt sich hier ein Geheimnis.' : undefined,
    };
  }

  async adjustDifficulty(_metrics: PlayerMetrics): Promise<DifficultyAdjustment> {
    return {
      monsterStrength: 1.0,
      monsterDensity: 1.0,
      lootQuality: 1.0,
      healItemFrequency: 1.0,
      trapDifficulty: 1.0,
      puzzleComplexity: 'moderate',
      narrativeIntensity: 'normal',
    };
  }

  /** Optional: get a death message for character death screen (mock). */
  async getDeathMessage(_characterName?: string): Promise<string> {
    const messages = await this.loadDeathMessages();
    const msg = messages[this.deathIndex % messages.length];
    this.deathIndex += 1;
    return msg;
  }
}
