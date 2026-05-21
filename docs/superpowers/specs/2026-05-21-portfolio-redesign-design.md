# Portfolio Redesign — Design Spec
**Date:** 2026-05-21  
**Status:** Approved for planning  
**Repo:** `manjunani/manjunathasaiuppu` (GitHub Pages)

---

## 1. Overview

Complete redesign of `manjunani.github.io/manjunathasaiuppu` from a broken 2-section Bootstrap template into a modern, personality-driven personal portfolio. The site must feel like the person — alien, builder, photographer, optimist — not a generic developer CV.

**Primary goal:** Visitors understand who Manjunatha is within 5 seconds, can explore his work, and can reach him without friction.

---

## 2. Identity Foundation

Research-derived profile (also committed as `manjunatha-profile.md`):

- **Name:** Manjunatha Sai Uppu
- **Role:** Senior Product Engineer at TheMathCompany (MathCo), Bangalore
- **Previous:** TCS (System Engineer → Assistant System Engineer)
- **Self-identity:** "ALIEN" — his own words across LinkedIn and GitHub bio
- **Dual identity:** Full Stack Dev by day · Mobile Photographer by night
- **Personality:** Optimist · community builder · chaotic-good learner ("breaking cloud services to learn them")
- **Currently shipping (May 2026):** `rust-oxide` (Agent-Native OS in Rust) · `rust-oxide-lib` · `hermes-agent`
- **Stack:** Rust · Python · JavaScript/TypeScript · React · Azure · AWS · GCP · n8n · LangFlow
- **Repos:** 153 total — serial tinkerer. 39-star Hacktoberfest-2021, 4-star planetarymovement
- **Writing:** Dev.to (11 articles) — Azure GenAI, AWS AI, prompt engineering, startup ecosystem
- **GitHub:** manjunani · **Dev.to:** manjunani · **YouTube:** UCYwBuVNo8Z6mHO4nBt80Jng

---

## 3. Design System

### 3.1 Palette — "Phosphor Alien"

| Token | Value | Usage |
|---|---|---|
| `--void` | `#04060f` | Page background |
| `--void-surface` | `#06090f` | Cards, surfaces |
| `--void-border` | `#0f1a2e` | Borders, separators |
| `--green` | `#34d399` | Primary accent, links, CTA, active states |
| `--green-dim` | `rgba(52,211,153,0.08)` | Tag backgrounds, subtle fills |
| `--green-border` | `rgba(52,211,153,0.18)` | Tag borders |
| `--violet` | `#a78bfa` | Secondary accent, hover states, AI chat |
| `--violet-dim` | `rgba(167,139,250,0.08)` | Violet tag backgrounds |
| `--text` | `#e2e8f0` | Body text |
| `--text-muted` | `#475569` | Secondary text, descriptions |
| `--text-ghost` | `#1f2937` | Very muted labels |
| `--glow-green` | `rgba(52,211,153,0.15)` | Radial glow backgrounds |
| `--glow-violet` | `rgba(167,139,250,0.12)` | Radial glow backgrounds |

### 3.2 Typography

- **Display/Hero:** `'Space Grotesk', sans-serif` — geometric, techy, free via Google Fonts. Weight 900. Tight line-height (1.0–1.1). Load: `<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700;900&display=swap" rel="stylesheet">`
- **Body:** `'Space Grotesk', sans-serif`, weight 400, line-height 1.6
- **Mono/Code:** `'SF Mono', 'Fira Code', monospace` — badges, terminal-style labels, chip text, section titles like `$ ls -la ~/projects`
- **Scale:** Hero 48–56px · Section titles 28px · Card titles 15px · Body 13px · Labels 11px

### 3.3 Motion

- Page load: sections fade-in + slide-up (staggered 80ms per section)
- Nav: sticky, blur backdrop on scroll
- Cards: `transform: translateY(-3px)` on hover, 200ms ease
- Glows: static radial gradients (no animation — keeps it fast)
- Chat modal: slide-up from bottom-right, 250ms ease
- Scroll: native smooth-scroll (`scroll-behavior: smooth`)

### 3.4 Component Patterns

**Tag/Chip:**
```css
/* green variant */
background: var(--green-dim); border: 1px solid var(--green-border);
color: var(--green); padding: 3px 10px; border-radius: 20px; font-size: 11px;
font-family: monospace;
```

**Card:**
```css
background: var(--void-surface); border: 1px solid var(--void-border);
border-radius: 12px; padding: 20px;
transition: transform 200ms ease, border-color 200ms ease;
```
On hover: `border-color: rgba(52,211,153,0.3)` + `translateY(-3px)`

**Glow blob (decorative):**
```css
position: absolute; border-radius: 50%;
background: radial-gradient(circle, var(--glow-green), transparent 70%);
pointer-events: none;
```
**Glow blob constraint:** Max 2 per section. Opacity ≤ 0.15. Never animate. Sections with no natural glow get none — do not add blobs as filler.

---

## 4. Architecture

**Type:** Static multi-section single-page application  
**Host:** GitHub Pages (`manjunani.github.io/manjunathasaiuppu`)  
**Build:** Zero build step — plain HTML + CSS + vanilla JS  
**Files:**

```
index.html                  ← single page, all sections
css/
  styles.css                ← complete rewrite (custom CSS only, no Bootstrap)
js/
  scripts.js                ← rewrite: GitHub API + Dev.to API + chat widget
  chat.js                   ← OpenRouter chat logic (separate for clarity)
assets/
  img/
    favicon.ico
    image.jpg
    photos/                 ← mobile photography images (added as needed)
  files/
    Manjunatha_Uppu_Resume.pdf
manjunatha-profile.md       ← AI system prompt, committed to repo
docs/superpowers/specs/     ← this file
```

---

## 5. Sections (Single Page, Scroll Order)

### 5.1 Navigation

- Sticky top nav, `position: fixed`, `backdrop-filter: blur(12px)`
- Left: `MSU` logo in `--green`, font-weight 900
- Center: section links → `Repos · Graveyard · Photos · YouTube · Exposure`
- Right: floating 👽 chat icon button (opens chat modal)
- Active section highlight via IntersectionObserver
- Mobile: hamburger → **full-screen overlay** covering entire viewport. Links large (32px), vertically centered. Fade in 200ms. `Esc` closes. `Tab` cycles links. Background: `--void` at 98% opacity.

### 5.2 Hero (`#home`)

```
$ whoami → alien · builder · photographer          ← monospace badge, green
MANJUNATHA                                         ← 900 weight, white
SAI UPPU                                           ← green + violet split
Senior Product Engineer · MathCo · Bangalore       ← muted uppercase
```

- Radial glow blobs (green top-right, violet bottom-left)
- Skill chips: `rust-oxide · hermes-agent · Python · AI/ML · 153 repos · 📷 Photographer`
- Social icons row: GitHub · LinkedIn · Dev.to · Twitter · Medium · Stack Overflow · YouTube · Instagram · Reddit · Slideshare · Facebook · Email · Resume PDF
- Short bio paragraph: pulled from identity foundation above

### 5.3 GitHub Repos (`#repos`)

- Section title: `$ ls -la ~/projects` or `Open Source`
- Live fetch from `https://api.github.com/users/manjunani/repos?per_page=100&sort=updated`
- **Filter:** `fork === false` only (own work)
- **Sort:** by `updated_at` descending
- **Pinned/featured:** `rust-oxide`, `rust-oxide-lib`, `Hacktoberfest-2021`, `planetarymovement` — shown first with a "Featured" badge
- **Layout: horizontal list** — NOT a 3-column card grid. Each repo is a full-width row:
  ```
  rust-oxide                           Rust  ★0  3 days ago  →
  Agent-Native OS: high-performance Rust toolchain for AI agents
  ```
  - Left: large bold repo name (16px, Space Grotesk 700) + description below (13px, muted)
  - Right: language dot + name · star count · relative date · external link arrow
  - Full-width border-bottom separator. Hover: row background lifts to `--void-surface`, name turns `--green`
- **Language color dots:** Rust=#CE422B, Python=#3572A5, JavaScript=#f1e05a, TypeScript=#2b7489, CSS=#563d7c, HTML=#e34c26
- Show 10 repos by default, "Load more" appends next 10
- **Fallback data** (rendered if GitHub API fails or rate-limits):
  ```javascript
  const FALLBACK_REPOS = [
    { name: 'rust-oxide', description: 'Agent-Native OS — high-performance Rust toolchain for AI agents', language: 'Rust', stargazers_count: 0, updated_at: '2026-05-21', html_url: 'https://github.com/manjunani/rust-oxide' },
    { name: 'rust-oxide-lib', description: 'Sample agents built on the Rust Oxide SDK', language: null, stargazers_count: 0, updated_at: '2026-05-20', html_url: 'https://github.com/manjunani/rust-oxide-lib' },
    { name: 'Hacktoberfest-2021', description: 'Hacktoberfest 2021 contribution repository ✨', language: 'Jupyter Notebook', stargazers_count: 39, updated_at: '2025-09-10', html_url: 'https://github.com/manjunani/Hacktoberfest-2021' },
    { name: 'planetarymovement', description: 'CSS orbital animations', language: 'CSS', stargazers_count: 4, updated_at: '2026-03-08', html_url: 'https://github.com/manjunani/planetarymovement' },
    { name: 'hermes-agent', description: 'The agent that grows with you', language: null, stargazers_count: 0, updated_at: '2026-05-19', html_url: 'https://github.com/manjunani/hermes-agent' },
    { name: 'askai', description: 'Python AI project', language: 'Python', stargazers_count: 0, updated_at: '2025-12-20', html_url: 'https://github.com/manjunani/askai' },
    { name: 'msft_hackathon', description: 'Microsoft hackathon project', language: 'Python', stargazers_count: 0, updated_at: '2024-09-02', html_url: 'https://github.com/manjunani/msft_hackathon' },
    { name: 'malicious_extensions_checker', description: 'Security tool for checking malicious browser extensions', language: 'Python', stargazers_count: 1, updated_at: '2023-08-08', html_url: 'https://github.com/manjunani/malicious_extensions_checker' },
  ];
  ```

### 5.4 Graveyard (`#graveyard`)

**Concept:** A darkly humorous memorial for dead projects. Each card is a tombstone.

- Section header: `💀 The Graveyard` — *"Projects that didn't make it. May they rest in peace."*
- Background: slightly darker surface than other sections
- Tombstone cards (pre-curated, not live API):

| Project | Born | Died | Cause of Death |
|---|---|---|---|
| `googletasks` | 2024 | 2024 | *"Description was literally 'A repo fr'"* |
| `thebrindavanhotel` | 2023 | 2023 | *"Hotel never opened. Website lives on."* |
| `samplerepo` | 2024 | 2024 | *"Was always just a sample. Honored its destiny."* |
| `react-sandbox` | 2022 | 2022 | *"Learned React. Moved on. Left sandbox behind."* |
| `react-lazy-loading` | 2022 | 2022 | *"Lazy loaded into oblivion."* |
| `react-news-application` | 2022 | 2022 | *"News stopped. App stopped."* |
| `gh-custom-actions` + docker | 2023 | 2023 | *"GitHub Actions course completed. Certified. Abandoned."* |
| `privacypolicies` | 2023 | 2023 | *"Duplicate of privacy_policies. Identity crisis."* |
| `PropCreep` | 2025 | 2025 | *"Crept away before launch."* |

- Card style: desaturated green border → gray, skull emoji, faded text, strikethrough repo name on hover
- Easter egg: clicking a tombstone plays a subtle bell/chime sound (optional, toggle)

### 5.5 Photos (`#photos`)

- Section header: `📷 Through the Lens` — *"Full Stack Dev by day. Mobile Photographer by night."*
- Masonry grid (CSS columns: 3 desktop, 2 tablet, 1 mobile)
- Source: `assets/img/photos/` directory — images committed to repo
- On click: lightbox overlay (vanilla JS, no library)
- Caption: optional, from filename or alt text
- Empty state: placeholder cards with message "Photos coming soon — check Instagram"

### 5.6 YouTube (`#youtube`)

- Section header: `🎬 On Camera`
- YouTube channel: `UCYwBuVNo8Z6mHO4nBt80Jng`
- Implementation: hardcoded video embeds (avoid YouTube Data API quota complexity)
  - 4–6 featured videos as `<iframe>` embeds in a 2-column grid
  - Lazy-loaded (`loading="lazy"`)
- "View all on YouTube →" link to channel
- Video cards: thumbnail + title + link (non-embed fallback if iframes blocked)

### 5.7 Exposure (`#exposure`)

- Section header: `🔗 Exposure` — *"Thoughts, posts, and signal from across the internet."*
- Two sub-sections:

**Dev.to Articles** (live API):
- Fetch `https://dev.to/api/articles?username=manjunani`
- Card: cover image · title · tags · reading time · published date · link
- Show 6 most recent, "Read all on Dev.to →" link

**Featured Social Posts** (curated, hardcoded):
- LinkedIn posts (link + screenshot/preview text)
- Best Instagram photography posts (link cards)
- Key tweets if any
- Format: compact link cards with platform icon + caption preview + external link

---

## 6. Chat Widget — "Talk to Manjunatha"

### 6.1 Trigger

- Fixed position: `bottom: 24px; right: 24px`
- Button: 52×52px circle, gradient green→violet, `👽` emoji center
- Glow pulse animation: `box-shadow: 0 0 0 0 rgba(52,211,153,0.4)` → keyframe expand+fade
- Click → chat modal slides up from bottom-right

### 6.2 Modal

- Width: 360px, height: 500px (mobile: full width, 70vh)
- Header: avatar (👽 gradient circle) · "Manjunatha Sai Uppu" · "AI-powered · ask me anything" status
- Message area: scrollable, alternating AI (left) and user (right) bubbles
- Input: text field + Send button (gradient)
- Opening message (hardcoded): *"Hey 👋 I'm Manjunatha — alien, builder, photographer. I know about rust-oxide, my graveyard of failed experiments, and why I shoot photos at night. Ask me anything."*

### 6.3 OpenRouter Integration

**API key handling:** Never commit the key. In `chat.js`, set it as:
```javascript
// SETUP: Get your free key at https://openrouter.ai
// Set spending limit in OR dashboard to protect against abuse
const OPENROUTER_API_KEY = 'sk-or-v1-...'; // replace before deploy
```
Document in README: "Replace `OPENROUTER_API_KEY` in `js/chat.js` before deploying."

```javascript
// chat.js
const OPENROUTER_API_KEY = 'sk-or-...'; // replace before deploy
const MODEL = 'meta-llama/llama-3.1-8b-instruct:free'; // free tier

async function sendMessage(userMessage, history) {
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://manjunani.github.io',
      'X-Title': 'Manjunatha Portfolio Chat'
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT }, // from manjunatha-profile.md
        ...history,
        { role: 'user', content: userMessage }
      ],
      max_tokens: 300,
      temperature: 0.7
    })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error?.message || 'API error');
  return data;
}

// Error fallback in the catch block:
// "Having trouble connecting — email me directly at manjunatha16.512@gmail.com"
// Show as a chat message bubble with mailto link.
```

### 6.4 Email Transition

Trigger keywords: "connect", "email", "reach you", "contact", "message you", "hire"

When triggered:
1. AI responds: *"Sure! Type your message below and hit Send — it goes straight to my inbox 📬"*
2. Input area transforms into: name field + message textarea + Send button
3. Send fires: `window.location.href = 'mailto:manjunatha16.512@gmail.com?subject=...&body=...'`

### 6.5 System Prompt (`manjunatha-profile.md`)

Full profile committed to repo. Contents:
- Professional background (MathCo, TCS)
- Current projects (rust-oxide, hermes-agent, rust-oxide-lib)
- Tech stack and expertise levels
- Personality traits (alien self-id, optimist, photographer, chaotic-good learner)
- Writing topics (Azure GenAI, AWS, DevOps, startups)
- Graveyard story (serial experimenter)
- How to connect (email only, no phone)
- Tone instructions: conversational, honest, first-person, can use occasional emoji

---

## 7. Bug Fixes vs Current Code

| Bug | File | Fix |
|---|---|---|
| Articles fetched but never rendered | `js/scripts.js:13` | Rewrite render logic (replaced by full redesign) |
| Duplicate `<script>` tag (line 82) | `index.html:82` | Remove |
| No `<nav>` despite comment | `index.html:21` | Add proper nav |
| Empty `<meta description>` + `<meta author>` | `index.html:7-8` | Fill with real content |
| Font Awesome loaded via JS (slow) | `index.html:12` | Switch to CSS CDN link |
| jQuery loaded after scripts.js | `index.html:77-78` | Remove jQuery entirely (not needed) |
| 10,261-line bundled CSS | `css/styles.css` | Replace with custom CSS (~400 lines) |

---

## 8. Constraints

- **No build step** — plain HTML/CSS/JS only, must deploy directly to GitHub Pages
- **No framework** — vanilla JS, no React/Vue/Svelte
- **No backend** — all API calls client-side (GitHub API, Dev.to API, OpenRouter)
- **GitHub API rate limit** — unauthenticated: 60 req/hr. Cache responses in `sessionStorage`
- **OpenRouter key** — exposed client-side intentionally (personal site, set spending limit on OR dashboard)
- **CSS** — custom properties only, no Bootstrap, no Tailwind
- **Accessibility:**
  - Chat modal: `role="dialog"`, `aria-modal="true"`, keyboard trap (`Tab` cycles within modal, `Esc` closes), focus returns to trigger button on close
  - Photos lightbox: `←/→` arrow keys cycle images, `Esc` closes
  - Graveyard tombstone cards: `role="article"`, `aria-label="[repo name] — cause of death: [text]"`
  - All touch targets minimum 44×44px (chat button, nav links, send button, load more)
  - Contrast: `--green` (#34d399) on `--void` (#04060f) = 9.1:1 ✓ WCAG AAA

---

## 9. Out of Scope

- Server-side rendering
- Authentication
- CMS or admin panel
- Analytics (can add later via script tag)
- PWA/service worker

---

## 10. Interaction States

| Feature | Loading | Empty | Error | Success |
|---|---|---|---|---|
| GitHub Repos | Skeleton rows (3 animated placeholders) | — (fallback JSON always present) | Render `FALLBACK_REPOS` silently | Live data rendered as horizontal list |
| Dev.to Articles | Skeleton cards (3) | "No articles yet — check Dev.to →" link | "Couldn't load articles — read them on Dev.to →" with link | Cards rendered |
| Chat widget | "..." typing indicator bubble | Opening message always shown (hardcoded) | "Having trouble connecting — email me directly at manjunatha16.512@gmail.com" with mailto link | AI response bubble |
| Photos | — | "📷 Photos coming soon — check Instagram →" with link | — | Masonry grid |
| YouTube | — | "🎬 No videos loaded — view channel →" with link | Fallback: thumbnail cards linking to YouTube (not embeds) | iFrame embeds |

---

## 11. Not in Scope (Design Review Deferred)

- `DESIGN.md` — will be created post-ship from spec's design system section
- YouTube video IDs — hardcode your actual video IDs from channel `UCYwBuVNo8Z6mHO4nBt80Jng` before deploying; spec uses placeholder `VIDEO_ID_1..6`
- Easter egg bell sound on Graveyard — optional, implement last
- Analytics — add script tag post-launch
- PWA / service worker

---

## 12. Success Criteria

1. Visitor lands and within 5s knows: who Manjunatha is, what he builds, how to reach him
2. GitHub repos section loads live data, shows rust-oxide first
3. Graveyard section is darkly funny, not embarrassing
4. Chat widget responds sensibly to "what's rust-oxide?" and "how do I contact you?"
5. Photos section renders grid (even if initially empty with placeholder)
6. Dev.to articles render (fixing the current broken fetch)
7. Site scores green on contrast ratios (--green on --void passes WCAG AA)
8. Mobile responsive at 375px, 768px, 1280px+
