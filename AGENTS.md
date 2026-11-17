# dungeoncrawl

Mobile-first Dungeon-Crawler (First-Person, Rasterbewegung, Echtzeit-Kampf) mit KI-Dungeon-Master und adaptiver Musik. Phase 0: Planung und Mock-Layer; Phaser ist in `package.json` eingetragen, aber noch nicht eingebunden (nur Next.js-Grundgerüst in `src/app/`).

- Stack: Next.js 15 (App Router, TypeScript), Phaser 3, `@opennextjs/cloudflare`; geplanter Hosting-Weg Cloudflare Pages/Workers AI/D1/KV/R2. Plan in `PLAN.md`, Status in `ROADMAP.md`; beide sind lang, nur bei Bedarf lesen.
- Befehle: `npm run dev` (Port 3000), `npm run build`, `npm run lint`. Tests gibt es noch keine.
- Mock-Umschaltung in `src/services/ServiceFactory.ts`: Im Dev-Modus ohne `CF_API_TOKEN` läuft die KI über `MockAIService`, ohne `LYRIA_API_KEY` die Musik über `MockMusicService`. Sobald die Variable gesetzt ist (oder bei `NODE_ENV` ungleich `development`), wird der echte Dienst angesprochen.
- Es gibt weder Workflow noch `wrangler`-Konfiguration im Repo und die Cloudflare-Ressourcen sind laut ROADMAP noch nicht angelegt: Ein Merge löst keinen Deploy aus.
- Sprachen laut Plan: Deutsch (Standard) und Englisch; `next-intl` ist als Abhängigkeit eingetragen, aber laut ROADMAP noch nicht eingerichtet.
