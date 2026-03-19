# Financial App (Figma implementation)

This workspace contains a **TypeScript** implementation of the Figma screen (`Medium version`, node `6716:970`).

## Setup

Install dependencies:

```bash
npm install
```

## Development

Run the development server:

```bash
npm run dev
```

Then open the URL shown in the terminal (typically `http://localhost:5173/`).

## Build

Build for production:

```bash
npm run build
```

The output will be in the `dist` folder.

## Preview Production Build

Preview the production build:

```bash
npm run preview
```

## Project Structure

- `src/main.ts` - Main TypeScript entry point with all interactive functionality
- `index.html` - Main HTML file
- `styles.css` - Stylesheet
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite build configuration

## Notes

- **Assets**: All image URLs point to `./assets/`. The repo only includes `statusbar-time.svg`. To load the rest, run the export once (no manual download):

  1. Copy `.env.example` to `.env`.
  2. Set `FIGMA_FILE_KEY` (from the Figma file URL) and `FIGMA_ACCESS_TOKEN` (Figma → Settings → Account → Personal access tokens).
  3. Run: `npm run export-figma-assets`

  The script fetches all assets from Figma via the API and saves them into `assets/`. After that, `npm run dev` serves everything; no separate server on port 3845 is needed.

# cursor-paper-test
