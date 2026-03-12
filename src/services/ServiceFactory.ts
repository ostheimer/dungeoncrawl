/**
 * Factory for AI and music services.
 * In development without API keys, returns mock implementations for offline use.
 */

import type { IAIService, IMusicService } from './ai/AIServiceInterface';
import { MockAIService } from './ai/MockAIService';
import { WorkersAIService } from './ai/WorkersAIService';
import { MockMusicService } from './audio/MockMusicService';
import { LyriaService } from './audio/LyriaService';

const isDev = process.env.NODE_ENV === 'development';
const hasCfToken = Boolean(process.env.CF_API_TOKEN);
const hasLyriaKey = Boolean(process.env.LYRIA_API_KEY);

export function createAIService(): IAIService {
  if (isDev && !hasCfToken) {
    return new MockAIService();
  }
  return new WorkersAIService();
}

export function createMusicService(): IMusicService {
  if (isDev && !hasLyriaKey) {
    return new MockMusicService();
  }
  return new LyriaService();
}

export const useMockAI = isDev && !hasCfToken;
export const useMockMusic = isDev && !hasLyriaKey;
