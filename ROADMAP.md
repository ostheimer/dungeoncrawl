# Roadmap -- Dungeon Crawl

> Letzte Aktualisierung: 11. Maerz 2026

## Legende

- [ ] Offen
- [x] Abgeschlossen
- [~] In Arbeit

---

## Phase 0: Planung & Setup

- [x] Spielkonzept definieren
- [x] Technologie-Stack evaluieren und entscheiden (Phaser 3 + Next.js 15 + Cloudflare)
- [x] Architektur-Plan erstellen (PLAN.md)
- [x] Viralitaets- und Vermarktungsstrategie definieren
- [x] Monetarisierungsmodell festlegen
- [x] Marktchancen analysieren
- [x] Offline-Strategie definieren (Vorab-Generierung + Cache, kein lokales LLM)
- [x] Mock-Layer aufsetzen (lokale AI- und Musik-Mocks ohne externe Services)
- [x] Projekt initialisieren (Next.js + Phaser + @opennextjs/cloudflare)
- [ ] Cloudflare-Ressourcen anlegen (D1, KV, R2)
- [x] Grundlegende Projektstruktur anlegen
- [ ] Mehrsprachigkeit einrichten (next-intl, de/en)
- [ ] Cloudflare Pages Deployment aufsetzen
- [ ] CI/CD Pipeline konfigurieren (Vitest + Playwright)

## Phase 1: Fundament (Woche 1-2)

- [ ] Phaser 3 in Next.js einbetten (dynamischer Import, SSR-safe)
- [ ] Game-Config: Pixel-Art-Modus, Mobile-Skalierung
- [ ] Event-Bus fuer React-Phaser-Kommunikation
- [ ] Boot/Preload Scenes mit Asset-Loader
- [ ] PWA-Manifest und Service Worker Grundgeruest
- [ ] wrangler.toml + open-next.config.ts Konfiguration

## Phase 2: Dungeon-Kern (Woche 3-5)

- [ ] DungeonGrid Datenstruktur (Zellen, Waende, Tueren)
- [ ] Prozeduraler Dungeon-Generator (BSP-Algorithmus)
- [ ] Field-of-View Berechnung (Sichtkegel auf Grid)
- [ ] First-Person Dungeon-Renderer (geschichtete 2D-Sprites)
- [ ] Wand-Rendering nach Entfernung (nah/mittel/fern)
- [ ] Rasterbewegung (vor/zurueck/drehen)
- [ ] Tueren oeffnen/schliessen
- [ ] Basis-Placeholder-Grafiken
- [ ] Unit-Tests fuer Dungeon-Logik

## Phase 3: Kampf & Magie (Woche 6-8)

- [ ] Echtzeit-Kampfsystem mit Abklingzeiten
- [ ] Schadensberechnung (Waffen, Ruestung, Koerperteile)
- [ ] Monster-KI (Pathfinding, Angriffsverhalten)
- [ ] Monster-Rendering (Sprites nach Entfernung)
- [ ] Runen-Magiesystem (25 Sprueche aus Runen-Kombinationen)
- [ ] Spruch-Effekte (Feuerbaelle, Heilung, Licht, etc.)
- [ ] Charakter-System (4 Klassen-Pfade, Stats, Progression)
- [ ] Status-Effekte (Gift, Erschoepfung, Verwundung)
- [ ] Inventar-System (Drag-and-Drop, Ausruestungsslots)
- [ ] Ressourcen-Management (Hunger, Durst, Ausdauer)

## Phase 4: Mobile Steuerung (Woche 6-8, parallel)

- [ ] Swipe-Navigation (vor/zurueck/links/rechts)
- [ ] Tap-Interaktion (Waende, Monster, Items)
- [ ] Drag-and-Drop Inventar (Touch-optimiert)
- [ ] Runen-Gesten-Erkennung (Wisch-Muster)
- [ ] Optionales virtuelles D-Pad
- [ ] Kontext-sensitive Aktionsbuttons
- [ ] Touch-Zonen-Kalibrierung

## Phase 5: KI-Integration (Woche 9-12)

- [ ] Cloudflare Workers AI Client einrichten
- [ ] KI-Dungeon-Generierung (Workers AI: Llama 3.2 3B verfeinert BSP-Layout)
- [ ] KI-Dungeon-Master (Workers AI: Narrative Texte, Raumbeschreibungen)
- [ ] Dynamic Difficulty Adjustment (Spieler-Metrik-Tracking + Workers AI)
- [ ] Lyria API Client fuer Musik-Generierung (via Cloudflare Worker Proxy)
- [ ] Adaptives Musik-System (Stimmung -> Prompt -> Track)
- [ ] Tone.js Fallback fuer prozedurale Ambient-Sounds
- [ ] KI-Response-Caching (Cloudflare KV)

## Phase 6: Offline-Modus & Persistenz (Woche 10-11)

- [ ] Content-Pool-Manager (Vorab-Generierung im Hintergrund)
- [ ] IndexedDB fuer lokale Content-Pools und Savegames
- [ ] Service Worker fuer Asset-Caching und Offline-Shell
- [ ] Offline-Fallback-Kette (Pool -> Templates -> lokaler Generator)
- [ ] Online-Zurueckkehr-Sync (SyncManager)
- [ ] Cloudflare D1 fuer Cloud-Savegames und Leaderboards
- [ ] Cloudflare R2 fuer gecachte Musik-Tracks

## Phase 7: Pixel-Art & Audio (Woche 11-14)

- [ ] Wand-Sprite-Sets (Katakomben-Theme)
- [ ] Monster-Sprites (6-8 Basis-Monster)
- [ ] Item-Icons (50+ Gegenstaende)
- [ ] Charakter-Portraets (8+ Charaktere)
- [ ] Runen-Symbole (24 Stueck)
- [ ] UI-Elemente (Rahmen, Buttons, Balken)
- [ ] Sound-Effekte (Schritte, Kampf, Magie, Tueren)
- [ ] Vorab-generierte Musik-Tracks (Fallback-Pool via Lyria)

## Phase 8: Viralitaet & Polish (Woche 13-15)

- [ ] Screenshot/Share-Funktion
- [ ] "Todesanzeigen" mit KI-Text
- [ ] Taegliche Herausforderungen (Daily Dungeon)
- [ ] Dungeon-Seed-Sharing
- [ ] "Geister" anderer Spieler (asynchron)
- [ ] Landing Page (Marketing, SEO)
- [ ] Performance-Optimierung (Texture Atlases, Object Pooling)
- [ ] Barrierefreiheit (Schriftgroesse, Kontrast, Screenreader-Basics)

## Phase 9: Launch (Woche 16)

- [ ] Beta-Test mit 20-50 Spielern
- [ ] Bug-Fixes aus Beta
- [ ] Presskit erstellen (presskit.gg)
- [ ] TikTok/Instagram Launch-Videos
- [ ] Reddit-Posts (r/indiegaming, r/gamedev)
- [ ] Product Hunt Launch
- [ ] itch.io Veroeffentlichung
- [ ] Cloudflare Pages Production Deployment

## Phase 10: Post-Launch

- [ ] Spieler-Feedback auswerten
- [ ] Woechentliche Challenge-Dungeons (Live-Ops)
- [ ] Zweites Dungeon-Theme (Hoehlen)
- [ ] Capacitor-Integration fuer App Store/Play Store
- [ ] Monetarisierung aktivieren (Ads, Battle Pass)
- [ ] Weitere Sprachen (FR, ES, JP)
- [ ] Multiplayer-Exploration (asynchron)
