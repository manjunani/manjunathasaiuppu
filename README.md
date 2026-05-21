# manjunathasaiuppu

Personal portfolio — [manjunani.github.io/manjunathasaiuppu](https://manjunani.github.io/manjunathasaiuppu)

## Setup

1. Clone the repo
2. Open `js/chat.js` and replace `OPENROUTER_API_KEY` with your key from [openrouter.ai](https://openrouter.ai)
3. Set a spending limit on OpenRouter dashboard (recommended: $1–5)
4. Open `index.html` in a browser or push to GitHub Pages

## Adding Photos

Drop images into `assets/img/photos/` and add their filenames to the `photoFiles` array in `js/scripts.js` (search for `const photoFiles`).

## Adding YouTube Videos

Add your video IDs to `YOUTUBE_VIDEO_IDS` in `js/scripts.js` (search for `YOUTUBE_VIDEO_IDS`).

## Stack

Plain HTML + CSS + Vanilla JS. No build step. Deploys directly to GitHub Pages.

- **Font:** Space Grotesk (Google Fonts)
- **Icons:** Font Awesome 6 (CSS CDN)
- **Chat:** OpenRouter (Llama 3.1 8B free tier)
- **Data:** GitHub API + Dev.to API (with fallbacks)
- **Palette:** Phosphor Alien — void black · phosphor green · ghost violet
