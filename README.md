# Kmuc_Soft

Ein modernes Next.js 14+ Projekt mit TypeScript und Soft-UI/Neumorphism-Design.

## Features

- Next.js 14+ mit App Router
- TypeScript
- Soft-UI / Neumorphism Design
- Responsive Layout
- Kontaktformular mit Validierung
- Typsichere Environment-Variablen
- SEO-optimiert
- Barrierefreiheit berücksichtigt

## Installation

Klone das Repository und installiere die Abhängigkeiten:

```bash
git clone https://github.com/marius4lui/Kmuc_Soft.git
cd Kmuc_Soft
npm install
```

## Environment-Variablen einrichten

Erstelle eine `.env.local` Datei basierend auf der `.env.example`:

```bash
cp .env.example .env.local
```

Passe die Werte in `.env.local` nach deinen Bedürfnissen an.

## Entwicklung starten

Starte den Entwicklungsserver:

```bash
npm run dev
```

Das Projekt ist nun unter [http://localhost:3000](http://localhost:3000) verfügbar.

## Produktion Build

Erstelle einen optimierten Build für die Produktion:

```bash
npm run build
```

Teste den Build lokal:

```bash
npm run start
```

## Deployment

### Vercel

Das Projekt ist optimiert für das Deployment auf Vercel:

1. Push dein Repository zu GitHub
2. Importiere das Projekt in Vercel
3. Konfiguriere die Environment-Variablen
4. Deploye

### Andere Plattformen

Für andere Plattformen:

1. Erstelle einen Produktions-Build: `npm run build`
2. Starte die Anwendung: `npm run start`
3. Stelle sicher, dass alle Environment-Variablen korrekt konfiguriert sind

## Anpassung

### Farben ändern

Die Farbpalette kann in `app/globals.css` angepasst werden:

```css
:root {
  --color-bg: #f5f7fa;
  --color-surface: #ffffff;
  --color-primary: #5b6eed;
  --color-primary-hover: #4a5de0;
  --color-accent: #ffb347;
  --color-accent-hover: #ff9e20;
  --color-text: #1e2330;
  --color-subtext: #596078;
  /* Weitere Variablen... */
}
```

### Unternehmensinformationen

Die Unternehmensinformationen werden über Environment-Variablen gesteuert. Diese können in der `.env.local` Datei angepasst werden.

### Komponentenstruktur erweitern

Um neue Komponenten hinzuzufügen:

1. Erstelle eine neue Datei unter `/components`
2. Importiere und nutze bestehende Styles
3. Achte auf konsistentes Design (Soft-UI)

## Projektstruktur

- `/app` - Next.js App Router Seiten und Layouts
- `/components` - Wiederverwendbare UI-Komponenten
- `/lib` - Hilfsfunktionen und Utilities
- `/public` - Statische Assets

## Lizenz

MIT
# Kmuc_Soft
# Kmuc_Soft
# Kmuc_Soft
