'use client';

import { useEffect, useState } from 'react';
import { createAIService, createMusicService, useMockAI, useMockMusic } from '@/services/ServiceFactory';

export default function Home() {
  const [narrative, setNarrative] = useState<string>('');
  const [dungeon, setDungeon] = useState<string>('');
  const [musicPath, setMusicPath] = useState<string>('');

  useEffect(() => {
    const ai = createAIService();
    const music = createMusicService();

    ai.generateNarrative({ trigger: 'room_enter', theme: 'catacombs' }).then((r) => setNarrative(r.narrative));
    ai.generateDungeon({ width: 8, height: 8, level: 1, theme: 'catacombs' }).then((d) =>
      setDungeon(`${d.theme}, ${d.cells.length} Zellen, ${d.monsters.length} Monster`)
    );
    music.getTrackForMood('exploration').then(setMusicPath);
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Dungeon Crawl</h1>
      <p>
        <strong>Lokaler Modus:</strong> {useMockAI ? 'Mock AI aktiv' : 'Workers AI'} /{' '}
        {useMockMusic ? 'Mock Musik aktiv' : 'Lyria'}
      </p>
      <section style={{ marginTop: '1.5rem' }}>
        <h2>Narrative (Mock)</h2>
        <p style={{ color: '#888' }}>{narrative || 'Lade…'}</p>
      </section>
      <section style={{ marginTop: '1rem' }}>
        <h2>Dungeon (Mock)</h2>
        <p style={{ color: '#888' }}>{dungeon || 'Lade…'}</p>
      </section>
      <section style={{ marginTop: '1rem' }}>
        <h2>Musik-Pfad</h2>
        <p style={{ color: '#888' }}>{musicPath || 'Lade…'}</p>
      </section>
      <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
        Starte mit <code>npm run dev</code>. Ohne CF_API_TOKEN und LYRIA_API_KEY laufen alle Dienste lokal ueber Mocks.
      </p>
    </main>
  );
}
