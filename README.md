# Dungeon Crawl

Ein mobile-first Dungeon-Crawl-Spiel im klassischen First-Person-Rasterbewegung-Stil mit Pixel-Art-Grafik, tiefer KI-Integration und adaptiver Musik.

## Ueberblick

Klassischer First-Person-Dungeon-Crawler mit Echtzeit-Kampf, inspiriert von den Echtzeit-Rollenspielen der spaeten 1980er. Der Spieler steuert eine Gruppe von bis zu vier Abenteurern durch prozedural generierte, KI-verfeinerte Verliese. Ein KI-Dungeon-Master erzaehlt die Geschichte dynamisch und passt die Schwierigkeit an den individuellen Spieler an.

## Tech Stack

- **Game Engine**: Phaser 3.90+ (HTML5, WebGL)
- **App Shell**: Next.js 15 (App Router, TypeScript)
- **KI**: Cloudflare Workers AI (Llama 3.2, Mistral) fuer Dungeon-Generierung, Narrative, DDA
- **Musik**: Lyria API (Vertex AI) fuer adaptive KI-Musik + Tone.js Fallback
- **Hosting**: Cloudflare (Pages, Workers AI, D1, KV, R2)
- **Offline**: Vorab-Generierung + IndexedDB Cache (kein lokales LLM)
- **Sprachen**: Deutsch (Standard), Englisch

## Dokumentation

- **[PLAN.md](PLAN.md)** -- Vollstaendiger technischer Plan, Architektur, Framework-Evaluation, KI-Integration, Offline-Strategie, Viralitaets-Strategie, Vermarktung und Marktchancen
- **[ROADMAP.md](ROADMAP.md)** -- Entwicklungs-Roadmap mit aktuellem Status aller Aufgaben

## Projekt-Status

**Phase 0: Planung & Mock-Layer** -- Technologie-Stack evaluiert, Architektur definiert. Mock-Layer implementiert: lokales Testen ohne externe Services (Workers AI, Lyria) moeglich.

## Schnellstart

```bash
npm install
npm run dev
```

Starte unter http://localhost:3000. Ohne `CF_API_TOKEN` und `LYRIA_API_KEY` laufen KI und Musik lokal ueber Mocks (siehe Startseite).

Mit echten Services (Internet noetig):

```bash
CF_API_TOKEN=xxx LYRIA_API_KEY=xxx npm run dev
```

Cloudflare-Ressourcen (optional, fuer Deployment):

```bash
wrangler d1 create dungeoncrawl-db
wrangler kv namespace create CACHE
wrangler r2 bucket create dungeoncrawl-assets
```

## Lizenz

Siehe [LICENSE](LICENSE).
