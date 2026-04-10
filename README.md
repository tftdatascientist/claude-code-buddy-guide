# Claude Code /buddy — Kompletny Przewodnik

Kompletny przewodnik po `/buddy` — wirtualnym zwierzaku w Claude Code. 18 gatunków, 5 poziomow rzadkosci, architektura anti-cheat i osobowosc napedzana przez LLM.

**Live:** https://claude-code-buddy.netlify.app

## Stack

- **Framework:** [Astro 5](https://astro.build/) (static output, zero client JS)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) + custom design tokens
- **Hosting:** [Netlify](https://www.netlify.com/) (free tier, CDN)
- **Design System:** Google Stitch (MCP) — dark terminal aesthetic

## Sekcje

| # | Sekcja | Opis |
|---|--------|------|
| 1 | Hero | ASCII pet z shimmer, gradient h1, CTA |
| 2 | Sticky Nav | 12 anchor linkow, backdrop-blur |
| 3 | Historia | Timeline 4 wpisy (wyciek kodu, launch) |
| 4 | Wymagania | Wersja CC, subskrypcja, terminal |
| 5 | 18 Gatunkow | Grid kart z emoji + nazwy |
| 6 | Rzadkosc | 5 animowanych paskow (Common-Legendary) |
| 7 | Staty | 5 atrybutow osobowosci + przykladowe karty |
| 8 | Architektura | Bones vs Soul — dwie warstwy systemu |
| 9 | Komendy | 6 komend /buddy |
| 10 | Wyglad | Oczy, czapki, animacja sprite'ow |
| 11 | Shiny | Wariant 1:10000, rainbow shimmer |
| 12 | Easter Eggs | 5 ciekawostek z kodu zrodlowego |
| 13 | Community | 6 projektow spolecznosci |
| 14 | FAQ | 6 pytan i odpowiedzi |

## Uruchomienie lokalne

```bash
npm install
npm run dev
# http://localhost:4321
```

## Build

```bash
npm run build
# Output: dist/
```

## Deploy

```bash
netlify deploy --prod --dir=dist
```

## Design

- **Paleta:** dark mode (#0a0a0f), purple (#c084fc), indigo (#818cf8), pink (#f472b6)
- **Typografia:** JetBrains Mono (headlines/code), Outfit (body), Space Grotesk (accent)
- **Efekty:** floating gradient blobs, grain noise overlay, shimmer na ASCII pet, hover glow na kartach
- **A11y:** `prefers-reduced-motion: reduce`, semantic HTML, WCAG AA kontrast

## Zrodlo tresci

Cala tresc pochodzi z jednoplikowego HTML (`doc/claude-code-buddy-guide.html`) — kompletny przewodnik po funkcji `/buddy` w Claude Code, opracowany na podstawie wycieku kodu zrodlowego (31.03.2026), oficjalnych aktualizacji Anthropic i analizy spolecznosci.

---

Zbudowane z [Claude Code](https://claude.com/claude-code) + [Stitch MCP](https://stitch.withgoogle.com/)
