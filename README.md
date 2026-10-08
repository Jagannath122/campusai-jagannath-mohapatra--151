<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# CampusAI College Help Desk

CampusAI is a responsive, frontend-only React application. Gemini requests stream directly from the browser using the Google GenAI SDK. Support tickets are saved in the current browser's local storage; they are not sent to college staff or shared across devices.

## Requirements

Node.js

## Run locally

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env` and set `VITE_GEMINI_API_KEY` to a **Gemini Developer API key** created in [Google AI Studio](https://aistudio.google.com/apikey), not an OAuth token or service-account credential. Restart the development server after changing `.env`.
3. Start the Vite development server with `npm run dev`.
4. Create a production build with `npm run build`.

> **API key warning:** Vite embeds `VITE_*` variables in the browser bundle. Use a dedicated Gemini API key with API restrictions and strict quotas; do not use a private or production server key. Anyone using the deployed app can inspect its browser requests.
