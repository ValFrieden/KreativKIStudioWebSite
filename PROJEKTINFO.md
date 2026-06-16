# KreativKI Studio – Website

## Über das Projekt

Ein-Seiten-Website (Single Page Application) für **KreativKI Studio** – ein Anbieter von KI-gestützten Kreativlösungen (Bilder, Videos, Musik). Die Seite ist komplett in einer einzigen `index.html` realisiert: HTML + CSS + JavaScript (kein Framework, keine Build-Tools).

**Live:** `https://kreativki.studio` (via GitHub Pages, CNAME)

## Technologie

- **Reine HTML/CSS/JS** – eine Datei (`index.html`)
- **Three.js** – 3D-Hintergrund (Knoten, Orbitale, Teilchen)
- **Kein Framework**, kein Bundler, kein Backend
- **Mehrsprachig** – Deutsch (default), Russisch, Englisch – via `data-i18n`-Attributen und einem zentralen Übersetzungsobjekt
- **GitHub Pages** – Deployment via `gh-pages`-Branch

## Struktur

```
index.html          ← alles (Style, HTML, JavaScript, i18n)
media/              ← Bilder (.jpg, .png) und Videos (.mp4) für Showcase/Portfolio
CNAME               ← GitHub Pages Custom Domain
```

## Sektionen der Seite

| Sektion | ID | Beschreibung |
|---------|----|-------------|
| Hero | `#hero` | Startbereich mit 3D-Hintergrund + Call-to-Action |
| Leistungen | `#services` | 7 Service-Karten (Bild, Video, Audio, Restore, Produkt, Custom, Web) |
| Showcase | `#showcase` | Karussell mit Vorher/Nachher-Vergleichen (Bilder) |
| Bildbearbeitung | `#davor-danach` | 12 Slides Vorher/Nachher – Bilder + Videos, Karussell |
| Portfolio | `#portfolio` | 11 Slides – Bilder + Videos, Karussell |
| Musik | `#music` | Genre-Tabs + Audio-Player mit Visualizer-Canvas |
| Pakete | `#pricing` | 4 Pricing Cards |
| Über uns | `#about` | Statistik + Beschreibung |
| Kontakt | `#contact` | Kontakt-CTA + WhatsApp-Button |
| Footer | `#footer` | Links, Copyright |

## Karussells

Es gibt 3 horizontale Karussells mit `scroll-snap` + Autoplay:

1. **`#baCarousel`** – Vorher/Nachher (nur Bilder, nur "Danach"-Spalte), rotiert alle 6s
2. **`#editCarousel`** – 12 Vorher/Nachher-Slides (Bilder + Videos), rotiert alle 6.5s
3. **`#portfolioCarousel`** – Portfolio-Slides (Bilder + Videos), rotiert alle 5s

Autoplay pausiert bei `mousedown`/`touchstart`, setzt nach 10s Inaktivität fort.
Videodauer wird dynamisch ermittelt; falls unbekannt → Fallback-Intervall.

## Besonderheiten

- Three.js-Hintergrund pausiert bei Tab-Wechsel (Batteriesparen auf Mobil)
- Lightbox für Vollbild-Ansicht von Bildern und Videos
- WhatsApp-Floating-Button (fest positioniert)
- Scroll-Animationen (`reveal`, `reveal-left`, `reveal-right`, `reveal-scale`)
- Alle Texte über i18n-Objekt übersetzbar

## Mobile

- Breakpoints: 768px, 480px, 360px
- Touch-Hover-Verhalten via `@media (hover: none)` – alle `:hover`-Effekte auf `:active` umgeleitet
- Hamburger-Menü auf Mobil
- `playsinline` + `muted` für Video-Autoplay auf iOS/Android

## Bekannte Baustellen

- Mobile Video-Preview in Karussells: `<video>`-Elemente werden teils nicht korrekt dargestellt, weil `max-height` + `aspect-ratio` auf Flex-Container mit `overflow-x: auto` kollabieren. Fix siehe `plans/mobile-video-preview-fix.md`.

---

## ⚠️ Wichtige Arbeitsregel

**Vor jeder Code-Änderung muss ein Plan geschrieben werden.**

1. **Analysieren** – Relevante Dateien lesen, Problem verstehen
2. **Fragen stellen** – Unklarheiten klären, nicht raten
3. **Plan schreiben** → `C:\Users\Valeri\.claude\plans\*.md` mit:
   - Problem/Ursache (2-3 Sätze)
   - Lösungsansatz (Optionen mit Vor-/Nachteilen)
   - Betroffene Dateien
4. **Plan vorlegen** – Erst nach OK wird implementiert

Ziel: Tokens sparen, kein sinnloser Code.

**Jede Iterration verbraucht Tokens – sei sparsam.**
- Vor dem Schreiben von Code erst einen Plan machen (s.o.)
- Nicht raten, sondern nachfragen bei Unklarheiten
- Nicht auf Verdacht herumprobieren, sondern gezielt das Problem eingrenzen
- Vor dem Ändern prüfen, ob die Änderung wirklich nötig ist

---

## Pflege der PROJEKTINFO.md

Jedes Mal, wenn im Gespräch oder bei einer Änderung eine **wichtige Information** auftaucht, die für das Projektverständnis relevant ist, wird sie **sofort in diese Datei eingetragen** – nicht erst später und nicht nur im Kopf behalten.

Dazu gehören:
- Neue Features oder Sektionen
- Technische Entscheidungen und Architektur
- Bekannte Probleme und Workarounds
- Deployment-Details
- Alles, was beim nächsten Arbeiten am Projekt hilfreich wäre

Die Datei ist das zentrale Gedächtnis für das Projekt – sie lebt und wächst mit.

---

## Wichtige Prüfregel

**Jede Änderung muss auf Desktop UND Mobil getestet werden.**

Viele Layout-Probleme treten nur auf einem der beiden Viewports auf (z.B. Audio-Player außerhalb des Viewports auf Mobil, oder Video-Autoplay auf Desktop). Änderungen am CSS oder an der HTML-Struktur können auf dem anderen Viewport unerwartete Nebeneffekte haben.

- Desktop-Test: 1280×800 Viewport
- Mobil-Test: 390×844 Viewport (iPhone 14 Pro) mit Touch-User-Agent
- Automatisierte Tests in `mobile-test.js` decken beide ab
- Im Zweifel: `node mobile-test.js` laufen lassen

## Änderungshistorie

- **2026-06-16** – Mobile Video-Preview-Fix: `min-height` für Videos in Karussells auf Mobil (editCarousel + portfolioCarousel)
- **2026-06-16** – Autoplay wartet auf Video-Ende: `ended`-Event statt `setInterval`, loop wird temporär deaktiviert
- **2026-06-16** – Music-Player-Reihenfolge: Audio-Controls vor Visualizer gesetzt + JS-Scroll-Fix für Nav-Sprung zur Music-Section
