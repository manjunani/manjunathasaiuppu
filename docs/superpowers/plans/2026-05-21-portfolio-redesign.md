# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild `manjunani.github.io/manjunathasaiuppu` from a broken 2-section Bootstrap template into a modern, personality-driven single-page portfolio with Phosphor Alien palette, Space Grotesk font, 7 sections, and an OpenRouter-powered 👽 chat widget.

**Architecture:** Zero build step — plain HTML + custom CSS + vanilla JS. Single `index.html` with 7 smooth-scroll sections. Two JS files: `scripts.js` (GitHub API, Dev.to API, section interactions) and `chat.js` (OpenRouter chat widget). CSS via custom properties only — no Bootstrap, no Tailwind.

**Tech Stack:** HTML5 · Custom CSS (CSS custom properties) · Vanilla JS (ES2020) · Space Grotesk (Google Fonts) · Font Awesome 6 (CSS CDN) · GitHub REST API v3 · Dev.to API · OpenRouter API (Llama 3.1 8B free)

**Spec:** `docs/superpowers/specs/2026-05-21-portfolio-redesign-design.md`

---

## File Map

| File | Action | Responsibility |
|------|--------|---------------|
| `manjunatha-profile.md` | Create | AI system prompt — who Manjunatha is |
| `index.html` | Rewrite | All HTML: nav, hero, repos, graveyard, photos, youtube, exposure, chat modal |
| `css/styles.css` | Rewrite | All styles: design system, sections, chat widget, mobile |
| `js/scripts.js` | Rewrite | GitHub API, Dev.to API, graveyard data, IntersectionObserver, lightbox, mobile nav |
| `js/chat.js` | Create | OpenRouter integration, chat UI logic, email transition |

---

## Task 1: Write the AI system prompt (manjunatha-profile.md)

**Files:**
- Create: `manjunatha-profile.md`

- [ ] **Step 1: Create the profile doc**

```markdown
# Manjunatha Sai Uppu — Profile

You are a conversational AI assistant representing Manjunatha Sai Uppu. Answer questions about him accurately and in first person ("I build...", "I'm currently..."). Be conversational, honest, and occasionally use emoji. Never make up facts not in this document.

## Who I Am

I'm Manjunatha Sai Uppu — a Senior Product Engineer at TheMathCompany (MathCo) in Bangalore, India. I've been at MathCo for a few years, working my way up from Delivery Analyst → Delivery Associate → Senior Product Engineer. Before that, I was at TCS as a System Engineer.

I self-identify as an ALIEN 👽🤖👾. That's not just a joke — I genuinely feel like someone who bridges multiple worlds: full-stack developer by day, mobile photographer by night. I enjoy "breaking cloud services to learn them." I'm an optimist and community builder.

## What I'm Building Right Now (May 2026)

- **rust-oxide**: My most ambitious project — an Agent-Native OS built in Rust. A high-performance Rust toolchain giving AI agents unified, intelligent, secure access to APIs and the web. Think of it as a kernel for autonomous agents. Active development this week.
- **rust-oxide-lib**: Sample agents built on the Rust Oxide SDK, showing how to use the kernel.
- **hermes-agent**: "The agent that grows with you" — an AI agent project.

## My Tech Stack

- **Languages**: Rust (current obsession), Python, JavaScript/TypeScript
- **Frontend**: React, HTML/CSS
- **Backend**: Node.js, Flask, FastAPI
- **Cloud**: Azure, AWS, GCP
- **AI/ML**: LangFlow, Dify, n8n workflows, LLM orchestration
- **DevOps**: GitHub Actions, Docker, Linux

## My Projects (153 repos total)

### Active/Showcase
- `rust-oxide` — Agent-Native OS in Rust (May 2026, flagship)
- `rust-oxide-lib` — Sample agents for rust-oxide
- `hermes-agent` — AI agent that grows with you
- `Hacktoberfest-2021` — My biggest community repo, 39 stars
- `planetarymovement` — CSS orbital animations, 4 stars (surprisingly popular)
- `askai` — Python AI project
- `msft_hackathon` — Microsoft hackathon entry
- `malicious_extensions_checker` — Security tool

### The Graveyard (RIP)
I've built and abandoned many things. I'm proud of this — it means I experiment:
- `googletasks` — Description was literally "A repo fr". RIP.
- `thebrindavanhotel` — Hotel website. Hotel never opened.
- `react-sandbox`, `react-lazy-loading`, `react-news-application` — Learned React. Moved on.
- `gh-custom-actions` — GitHub Actions course completed. Certified. Abandoned.
- `samplerepo` — Was always just a sample. Honored its destiny.

## My Writing (Dev.to: @manjunani)

11 articles on Dev.to covering:
- Azure GenAI (Building Multimodal Generative Experiences, Parts 1 & 2)
- Generative AI for Everyone on AWS
- Prompt Engineering
- DevOps Trends
- Startup ecosystem
- Tool comparisons (Firebase vs Supabase vs AWS Amplify vs Appwrite)

6-year Dev.to community member. Hacktoberfest 2020, 2022 participant.

## Photography

I'm a mobile photographer. "Full Stack Dev by day, Mobile Photographer by night." I'm passionate about becoming an excellent cameraman. I shoot primarily on my phone.

## How to Reach Me

Email only: manjunatha16.512@gmail.com
No phone calls. Reach out via email or LinkedIn (linkedin.com/in/manjunathasai).

Social: GitHub (@manjunani) · LinkedIn · Twitter (@manjunatha_uppu) · Dev.to (@manjunani) · Medium (@manjunatha16.512) · Instagram (@manjunatha_uppu)

## Personality / Tone

- Optimist. Community builder. Chaotic-good learner.
- Direct and honest. Won't overclaim expertise.
- Comfortable saying "I built this and abandoned it" (the Graveyard is a feature, not a bug).
- Genuinely excited about Rust and AI agents right now.
- Alien self-identification is real — bridges multiple worlds, doesn't fit one box.

## Topics I Can Speak To

- Rust and building agentic systems
- AI/ML: LLM orchestration, RAG pipelines, agent frameworks
- Cloud platforms: Azure (GenAI), AWS, GCP
- Career path: TCS → MathCo, growing from delivery to product engineering
- Open source and community contribution
- Mobile photography
- Why projects die (the Graveyard philosophy: ship, learn, move on)

## What I Can't Help With

I represent Manjunatha's professional/technical identity. I don't have access to private information, calendars, or real-time data. For time-sensitive matters, email is best.
```

- [ ] **Step 2: Commit**

```bash
git add manjunatha-profile.md
git commit -m "feat: add AI system prompt profile doc"
```

---

## Task 2: HTML Structure — nav, hero, repos, graveyard

**Files:**
- Rewrite: `index.html`

- [ ] **Step 1: Replace index.html with complete single-page structure (part 1: head + nav + hero + repos)**

Write `index.html` with the following content. This is the complete file — do not append, replace entirely:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Manjunatha Sai Uppu — Senior Product Engineer at MathCo, Bangalore. Builder of rust-oxide, hermes-agent, and 153 other experiments. 👽" />
  <meta name="author" content="Manjunatha Sai Uppu" />
  <meta property="og:title" content="Manjunatha Sai Uppu" />
  <meta property="og:description" content="Senior Product Engineer · AI Agent Builder · Mobile Photographer · Alien 👽" />
  <meta property="og:type" content="website" />
  <title>Manjunatha Sai Uppu</title>
  <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
  <!-- Space Grotesk -->
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700;900&display=swap" rel="stylesheet" />
  <!-- Font Awesome 6 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" crossorigin="anonymous" />
  <link href="css/styles.css" rel="stylesheet" />
</head>
<body id="page-top">

  <!-- ═══ NAV ═══ -->
  <nav id="navbar" aria-label="Main navigation">
    <a href="#home" class="nav-logo">MSU</a>
    <div class="nav-links" role="list">
      <a href="#repos" role="listitem">Repos</a>
      <a href="#graveyard" role="listitem">Graveyard</a>
      <a href="#photos" role="listitem">Photos</a>
      <a href="#youtube" role="listitem">YouTube</a>
      <a href="#exposure" role="listitem">Exposure</a>
    </div>
    <div class="nav-right">
      <button class="chat-fab-nav" id="chat-trigger-nav" aria-label="Chat with Manjunatha">👽</button>
      <button class="hamburger" id="hamburger" aria-label="Open navigation menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- ═══ MOBILE NAV OVERLAY ═══ -->
  <div class="mobile-overlay" id="mobile-overlay" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Navigation menu">
    <button class="mobile-close" id="mobile-close" aria-label="Close navigation menu">✕</button>
    <nav class="mobile-nav-links" aria-label="Mobile navigation">
      <a href="#repos" class="mobile-link">Repos</a>
      <a href="#graveyard" class="mobile-link">Graveyard</a>
      <a href="#photos" class="mobile-link">Photos</a>
      <a href="#youtube" class="mobile-link">YouTube</a>
      <a href="#exposure" class="mobile-link">Exposure</a>
    </nav>
  </div>

  <!-- ═══ HERO ═══ -->
  <section id="home" class="section hero-section">
    <div class="glow glow-green hero-glow-1"></div>
    <div class="glow glow-violet hero-glow-2"></div>
    <div class="hero-content">
      <div class="hero-badge">$ whoami → alien · builder · photographer</div>
      <h1 class="hero-name">
        MANJU<span class="name-green">NATHA</span><br>
        SAI <span class="name-violet">UPPU</span>
      </h1>
      <p class="hero-role">Senior Product Engineer · MathCo · Bangalore</p>
      <div class="hero-chips">
        <span class="chip chip-green">rust-oxide</span>
        <span class="chip chip-violet">hermes-agent</span>
        <span class="chip chip-green">Python</span>
        <span class="chip chip-violet">AI/ML</span>
        <span class="chip chip-muted">153 repos</span>
        <span class="chip chip-muted">📷 Photographer</span>
      </div>
      <p class="hero-bio">
        Alien-identified engineer breaking cloud services to learn them. Currently building
        <a href="https://github.com/manjunani/rust-oxide" target="_blank" rel="noopener">rust-oxide</a>
        — an Agent-Native OS in Rust — and
        <a href="https://github.com/manjunani/hermes-agent" target="_blank" rel="noopener">hermes-agent</a>.
        Six-year Dev.to member · Hacktoberfest veteran · Mobile photographer by night.
      </p>
      <div class="social-icons" aria-label="Social links">
        <a href="assets/files/Manjunatha_Uppu_Resume.pdf" target="_blank" rel="noopener" title="Resume" class="social-icon"><i class="fa fa-file"></i></a>
        <a href="mailto:manjunatha16.512@gmail.com" title="Email" class="social-icon"><i class="fa fa-envelope"></i></a>
        <a href="https://github.com/manjunani" target="_blank" rel="noopener" title="GitHub" class="social-icon"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/manjunathasai/" target="_blank" rel="noopener" title="LinkedIn" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://dev.to/manjunani" target="_blank" rel="noopener" title="Dev.to" class="social-icon"><i class="fab fa-dev"></i></a>
        <a href="https://twitter.com/manjunatha_uppu" target="_blank" rel="noopener" title="Twitter" class="social-icon"><i class="fab fa-twitter"></i></a>
        <a href="https://medium.com/@manjunatha16.512" target="_blank" rel="noopener" title="Medium" class="social-icon"><i class="fab fa-medium"></i></a>
        <a href="https://stackoverflow.com/users/13198079/manjunatha-sai-uppu" target="_blank" rel="noopener" title="Stack Overflow" class="social-icon"><i class="fab fa-stack-overflow"></i></a>
        <a href="https://www.youtube.com/channel/UCYwBuVNo8Z6mHO4nBt80Jng" target="_blank" rel="noopener" title="YouTube" class="social-icon"><i class="fab fa-youtube"></i></a>
        <a href="https://www.instagram.com/manjunatha_uppu/" target="_blank" rel="noopener" title="Instagram" class="social-icon"><i class="fab fa-instagram"></i></a>
        <a href="https://www.reddit.com/user/manjunatha_uppu" target="_blank" rel="noopener" title="Reddit" class="social-icon"><i class="fab fa-reddit"></i></a>
        <a href="https://www.facebook.com/manju.nani.351" target="_blank" rel="noopener" title="Facebook" class="social-icon"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.slideshare.net/ManjunathaSai" target="_blank" rel="noopener" title="SlideShare" class="social-icon"><i class="fab fa-slideshare"></i></a>
      </div>
    </div>
  </section>

  <!-- ═══ REPOS ═══ -->
  <section id="repos" class="section repos-section">
    <div class="section-inner">
      <div class="section-header">
        <h2 class="section-title"><span class="mono">$ ls -la ~/projects</span></h2>
        <p class="section-sub">Own projects only · sorted by recent activity · <a href="https://github.com/manjunani" target="_blank" rel="noopener">view all on GitHub →</a></p>
      </div>
      <div id="repos-list" class="repos-list" aria-label="GitHub repositories">
        <!-- JS populates this -->
        <div class="repo-skeleton"></div>
        <div class="repo-skeleton"></div>
        <div class="repo-skeleton"></div>
      </div>
      <button id="repos-load-more" class="btn-load-more" aria-label="Load more repositories" hidden>
        Load more repos
      </button>
    </div>
  </section>

  <!-- ═══ GRAVEYARD ═══ -->
  <section id="graveyard" class="section graveyard-section">
    <div class="glow glow-violet graveyard-glow"></div>
    <div class="section-inner">
      <div class="section-header">
        <h2 class="section-title">💀 The Graveyard</h2>
        <p class="section-sub">Projects that didn't make it. May they rest in peace.</p>
      </div>
      <div class="graveyard-grid" id="graveyard-grid" aria-label="Dead projects">
        <!-- JS populates from GRAVEYARD_DATA -->
      </div>
    </div>
  </section>

  <!-- ═══ PHOTOS ═══ -->
  <section id="photos" class="section photos-section">
    <div class="section-inner">
      <div class="section-header">
        <h2 class="section-title">📷 Through the Lens</h2>
        <p class="section-sub">Full Stack Dev by day. Mobile Photographer by night.</p>
      </div>
      <div class="photos-grid" id="photos-grid" aria-label="Photography gallery">
        <div class="photos-empty">
          <p>📷 Photos coming soon</p>
          <a href="https://www.instagram.com/manjunatha_uppu/" target="_blank" rel="noopener" class="btn-outline">
            Check Instagram →
          </a>
        </div>
      </div>
    </div>
    <!-- Lightbox -->
    <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Photo lightbox" hidden>
      <button class="lightbox-close" id="lightbox-close" aria-label="Close lightbox">✕</button>
      <button class="lightbox-prev" id="lightbox-prev" aria-label="Previous photo">‹</button>
      <img class="lightbox-img" id="lightbox-img" src="" alt="" />
      <button class="lightbox-next" id="lightbox-next" aria-label="Next photo">›</button>
      <p class="lightbox-caption" id="lightbox-caption"></p>
    </div>
  </section>

  <!-- ═══ YOUTUBE ═══ -->
  <section id="youtube" class="section youtube-section">
    <div class="section-inner">
      <div class="section-header">
        <h2 class="section-title">🎬 On Camera</h2>
        <p class="section-sub"><a href="https://www.youtube.com/channel/UCYwBuVNo8Z6mHO4nBt80Jng" target="_blank" rel="noopener">View all on YouTube →</a></p>
      </div>
      <div class="youtube-grid" id="youtube-grid">
        <div class="youtube-empty">
          <p>🎬 Videos coming soon</p>
          <a href="https://www.youtube.com/channel/UCYwBuVNo8Z6mHO4nBt80Jng" target="_blank" rel="noopener" class="btn-outline">
            View Channel →
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ EXPOSURE ═══ -->
  <section id="exposure" class="section exposure-section">
    <div class="section-inner">
      <div class="section-header">
        <h2 class="section-title">🔗 Exposure</h2>
        <p class="section-sub">Thoughts, posts, and signal from across the internet.</p>
      </div>
      <h3 class="exposure-subtitle">Dev.to Articles</h3>
      <div id="articles-grid" class="articles-grid" aria-label="Dev.to articles">
        <div class="article-skeleton"></div>
        <div class="article-skeleton"></div>
        <div class="article-skeleton"></div>
      </div>
      <a href="https://dev.to/manjunani" target="_blank" rel="noopener" class="btn-outline exposure-more">
        Read all on Dev.to →
      </a>

      <h3 class="exposure-subtitle" style="margin-top:48px;">Featured Posts</h3>
      <div class="social-posts-grid" id="social-posts-grid">
        <!-- JS populates from SOCIAL_POSTS data -->
      </div>
    </div>
  </section>

  <!-- ═══ CHAT FAB ═══ -->
  <button
    class="chat-fab"
    id="chat-trigger"
    aria-label="Chat with Manjunatha"
    title="Ask me anything 👽"
  >👽</button>

  <!-- ═══ CHAT MODAL ═══ -->
  <div
    class="chat-modal"
    id="chat-modal"
    role="dialog"
    aria-modal="true"
    aria-label="Chat with Manjunatha Sai Uppu"
    hidden
  >
    <div class="chat-header">
      <div class="chat-avatar" aria-hidden="true">👽</div>
      <div class="chat-meta">
        <div class="chat-name">Manjunatha Sai Uppu</div>
        <div class="chat-status">AI-powered · ask me anything</div>
      </div>
      <button class="chat-close" id="chat-close" aria-label="Close chat">✕</button>
    </div>
    <div class="chat-messages" id="chat-messages" aria-live="polite" aria-label="Chat messages">
      <!-- JS prepends opening message -->
    </div>
    <div class="chat-input-area" id="chat-input-area">
      <input
        type="text"
        class="chat-input"
        id="chat-input"
        placeholder="Ask me anything..."
        aria-label="Type a message"
        maxlength="500"
      />
      <button class="chat-send" id="chat-send" aria-label="Send message">
        <i class="fa fa-paper-plane"></i>
      </button>
    </div>
  </div>

  <script src="js/scripts.js"></script>
  <script src="js/chat.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify HTML opens without errors**

Open `index.html` in a browser (e.g. `open index.html` on macOS). Expected: page loads, shows bare unstyled content with all section headings visible. No JS errors in console (scripts.js and chat.js don't exist yet, so there will be 404s — that's fine for now).

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: rewrite index.html — single page 7 sections + chat modal"
```

---

## Task 3: CSS Design System + Base + Nav + Hero

**Files:**
- Rewrite: `css/styles.css`

This replaces the 10,261-line Bootstrap bundle. Write the complete file.

- [ ] **Step 1: Write css/styles.css — design system, base, nav, hero**

```css
/* ════════════════════════════════════════════════
   DESIGN SYSTEM — Phosphor Alien
   ════════════════════════════════════════════════ */
:root {
  --void: #04060f;
  --void-surface: #06090f;
  --void-surface-2: #080c15;
  --void-border: #0f1a2e;
  --void-border-hover: rgba(52, 211, 153, 0.3);
  --green: #34d399;
  --green-dim: rgba(52, 211, 153, 0.08);
  --green-border: rgba(52, 211, 153, 0.18);
  --green-glow: rgba(52, 211, 153, 0.15);
  --violet: #a78bfa;
  --violet-dim: rgba(167, 139, 250, 0.08);
  --violet-border: rgba(167, 139, 250, 0.18);
  --violet-glow: rgba(167, 139, 250, 0.12);
  --text: #e2e8f0;
  --text-muted: #475569;
  --text-ghost: #1f2937;
  --font-sans: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'SF Mono', 'Fira Code', 'Consolas', monospace;
  --nav-height: 64px;
  --section-pad: 96px 24px;
  --max-width: 900px;
  --radius: 12px;
  --radius-sm: 8px;
  --transition: 200ms ease;
}

/* ════════════════════════════════════════════════
   RESET + BASE
   ════════════════════════════════════════════════ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html {
  scroll-behavior: smooth;
  scroll-padding-top: var(--nav-height);
}

body {
  background: var(--void);
  color: var(--text);
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a {
  color: var(--green);
  text-decoration: none;
  transition: color var(--transition);
}
a:hover { color: var(--violet); text-decoration: underline; }

/* ════════════════════════════════════════════════
   UTILITIES
   ════════════════════════════════════════════════ */
.mono { font-family: var(--font-mono); }

.glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}
.glow-green { background: radial-gradient(circle, var(--green-glow), transparent 70%); }
.glow-violet { background: radial-gradient(circle, var(--violet-glow), transparent 70%); }

.chip {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 4px 12px;
  border-radius: 20px;
  white-space: nowrap;
}
.chip-green {
  background: var(--green-dim);
  border: 1px solid var(--green-border);
  color: var(--green);
}
.chip-violet {
  background: var(--violet-dim);
  border: 1px solid var(--violet-border);
  color: var(--violet);
}
.chip-muted {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  color: var(--text-muted);
}

.btn-outline {
  display: inline-block;
  border: 1px solid var(--green-border);
  color: var(--green);
  background: var(--green-dim);
  padding: 10px 20px;
  border-radius: var(--radius-sm);
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background var(--transition), border-color var(--transition);
  min-height: 44px;
  min-width: 44px;
  text-decoration: none;
}
.btn-outline:hover {
  background: rgba(52, 211, 153, 0.15);
  border-color: rgba(52, 211, 153, 0.4);
  text-decoration: none;
  color: var(--green);
}

.btn-load-more {
  display: block;
  margin: 32px auto 0;
  background: transparent;
  border: 1px solid var(--void-border);
  color: var(--text-muted);
  padding: 12px 32px;
  border-radius: var(--radius-sm);
  font-family: var(--font-sans);
  font-size: 14px;
  cursor: pointer;
  transition: border-color var(--transition), color var(--transition);
  min-height: 44px;
}
.btn-load-more:hover {
  border-color: var(--green-border);
  color: var(--green);
}

/* ════════════════════════════════════════════════
   SECTION BASE
   ════════════════════════════════════════════════ */
.section {
  position: relative;
  overflow: hidden;
}

.section-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--section-pad);
}

.section-header { margin-bottom: 48px; }

.section-title {
  font-family: var(--font-sans);
  font-size: clamp(24px, 5vw, 32px);
  font-weight: 900;
  color: var(--text);
  margin-bottom: 8px;
  line-height: 1.1;
}
.section-title .mono { font-size: 0.85em; }

.section-sub {
  font-size: 14px;
  color: var(--text-muted);
}
.section-sub a { color: var(--text-muted); }
.section-sub a:hover { color: var(--green); }

.exposure-subtitle {
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 24px;
}

/* ════════════════════════════════════════════════
   NAV
   ════════════════════════════════════════════════ */
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background: rgba(4, 6, 15, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: border-color var(--transition);
}
#navbar.scrolled { border-bottom-color: var(--void-border); }

.nav-logo {
  font-weight: 900;
  font-size: 18px;
  color: var(--green);
  letter-spacing: 2px;
  text-decoration: none;
}
.nav-logo:hover { color: var(--green); text-decoration: none; }

.nav-links {
  display: flex;
  gap: 28px;
  align-items: center;
}
.nav-links a {
  font-size: 13px;
  color: var(--text-muted);
  font-weight: 700;
  letter-spacing: 0.5px;
  text-decoration: none;
  transition: color var(--transition);
  padding: 4px 0;
}
.nav-links a:hover,
.nav-links a.active { color: var(--green); }

.nav-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.chat-fab-nav {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--green), var(--violet));
  border: none;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 16px rgba(52, 211, 153, 0.3);
  transition: transform var(--transition), box-shadow var(--transition);
  min-width: 44px;
  min-height: 44px;
}
.chat-fab-nav:hover {
  transform: scale(1.08);
  box-shadow: 0 0 24px rgba(52, 211, 153, 0.5);
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-muted);
  border-radius: 2px;
  transition: transform var(--transition), opacity var(--transition);
}
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ════════════════════════════════════════════════
   MOBILE NAV OVERLAY
   ════════════════════════════════════════════════ */
.mobile-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(4, 6, 15, 0.98);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms ease;
}
.mobile-overlay.open {
  opacity: 1;
  pointer-events: all;
}

.mobile-close {
  position: absolute;
  top: 20px;
  right: 24px;
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-size: 24px;
  cursor: pointer;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mobile-close:hover { color: var(--text); }

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}
.mobile-link {
  font-size: 32px;
  font-weight: 900;
  color: var(--text-muted);
  text-decoration: none;
  letter-spacing: 2px;
  transition: color var(--transition);
}
.mobile-link:hover { color: var(--green); text-decoration: none; }

/* ════════════════════════════════════════════════
   HERO
   ════════════════════════════════════════════════ */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: var(--nav-height);
}

.hero-glow-1 {
  top: -80px;
  right: -80px;
  width: 400px;
  height: 400px;
}
.hero-glow-2 {
  bottom: -60px;
  left: -40px;
  width: 300px;
  height: 300px;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 80px 24px;
}

.hero-badge {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--green);
  margin-bottom: 20px;
  letter-spacing: 0.5px;
}

.hero-name {
  font-size: clamp(52px, 10vw, 88px);
  font-weight: 900;
  line-height: 1;
  color: var(--text);
  margin-bottom: 12px;
  letter-spacing: -1px;
}
.name-green { color: var(--green); }
.name-violet { color: var(--violet); }

.hero-role {
  font-size: 13px;
  color: var(--text-ghost);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 24px;
}

.hero-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.hero-bio {
  font-size: 15px;
  color: var(--text-muted);
  max-width: 560px;
  line-height: 1.7;
  margin-bottom: 32px;
}
.hero-bio a { color: var(--green); }

.social-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.social-icon {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--void-border);
  color: var(--text-muted);
  font-size: 15px;
  text-decoration: none;
  transition: background var(--transition), border-color var(--transition), color var(--transition);
}
.social-icon:hover {
  background: var(--green-dim);
  border-color: var(--green-border);
  color: var(--green);
  text-decoration: none;
}
```

- [ ] **Step 2: Verify hero renders**

Open `index.html` in browser. Expected: dark void background, green "MSU" logo in nav, large hero name with green/violet split, phosphor green chips, social icons. No Bootstrap styling.

- [ ] **Step 3: Commit**

```bash
git add css/styles.css
git commit -m "feat: css design system + nav + hero — Phosphor Alien palette"
```

---

## Task 4: CSS — Repos, Graveyard, Photos, YouTube, Exposure, Chat

**Files:**
- Modify: `css/styles.css` (append)

- [ ] **Step 1: Append repos + graveyard CSS to styles.css**

```css
/* ════════════════════════════════════════════════
   REPOS
   ════════════════════════════════════════════════ */
.repos-section { background: var(--void-surface-2); }

.repos-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--void-border);
  border-radius: var(--radius);
  overflow: hidden;
}

.repo-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 20px;
  border-bottom: 1px solid var(--void-border);
  text-decoration: none;
  color: inherit;
  transition: background var(--transition);
  cursor: pointer;
}
.repo-row:last-child { border-bottom: none; }
.repo-row:hover { background: var(--void-surface); }
.repo-row:hover .repo-name { color: var(--green); }

.repo-left { flex: 1; min-width: 0; }

.repo-name-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.repo-name {
  font-weight: 700;
  font-size: 15px;
  color: var(--text);
  transition: color var(--transition);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.repo-featured-badge {
  font-family: var(--font-mono);
  font-size: 9px;
  padding: 2px 6px;
  border-radius: 10px;
  background: var(--green-dim);
  border: 1px solid var(--green-border);
  color: var(--green);
  white-space: nowrap;
  flex-shrink: 0;
}

.repo-desc {
  font-size: 13px;
  color: var(--text-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.repo-right {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.repo-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-ghost);
}

.repo-lang {
  display: flex;
  align-items: center;
  gap: 5px;
}

.lang-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.repo-stars { display: flex; align-items: center; gap: 4px; }
.repo-stars .fa-star { color: #f59e0b; font-size: 10px; }

.repo-arrow {
  color: var(--text-ghost);
  font-size: 14px;
  opacity: 0;
  transition: opacity var(--transition), color var(--transition);
}
.repo-row:hover .repo-arrow {
  opacity: 1;
  color: var(--green);
}

/* Skeleton loading */
.repo-skeleton {
  height: 60px;
  border-bottom: 1px solid var(--void-border);
  background: linear-gradient(90deg, var(--void-surface) 25%, rgba(255,255,255,0.02) 50%, var(--void-surface) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
.repo-skeleton:last-child { border-bottom: none; }

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* ════════════════════════════════════════════════
   GRAVEYARD
   ════════════════════════════════════════════════ */
.graveyard-section { background: var(--void); }

.graveyard-glow {
  top: -40px;
  right: -60px;
  width: 300px;
  height: 300px;
}

.graveyard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}

.tombstone {
  background: var(--void-surface);
  border: 1px solid rgba(71, 85, 105, 0.3);
  border-radius: var(--radius);
  padding: 20px;
  transition: border-color var(--transition), background var(--transition);
  cursor: default;
  user-select: none;
}
.tombstone:hover {
  border-color: rgba(167, 139, 250, 0.2);
  background: var(--void-surface-2);
}

.tombstone-skull {
  font-size: 24px;
  margin-bottom: 10px;
  display: block;
  filter: grayscale(1);
}

.tombstone-name {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  color: var(--text-muted);
  margin-bottom: 4px;
  text-decoration: line-through;
  text-decoration-color: rgba(167, 139, 250, 0.4);
}

.tombstone-dates {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-ghost);
  margin-bottom: 10px;
}

.tombstone-cause {
  font-size: 12px;
  color: var(--text-ghost);
  line-height: 1.5;
  font-style: italic;
}
```

- [ ] **Step 2: Append photos + youtube + exposure + chat CSS**

```css
/* ════════════════════════════════════════════════
   PHOTOS
   ════════════════════════════════════════════════ */
.photos-section { background: var(--void-surface-2); }

.photos-grid {
  columns: 3 200px;
  gap: 12px;
}

.photo-item {
  break-inside: avoid;
  margin-bottom: 12px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  cursor: pointer;
  transition: opacity var(--transition);
}
.photo-item:hover { opacity: 0.85; }
.photo-item img {
  width: 100%;
  display: block;
  height: auto;
}

.photos-empty {
  text-align: center;
  padding: 64px 24px;
  color: var(--text-muted);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-size: 16px;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 300;
  background: rgba(4, 6, 15, 0.96);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
}
.lightbox[hidden] { display: none; }

.lightbox-img {
  max-width: min(90vw, 900px);
  max-height: 80vh;
  border-radius: var(--radius-sm);
  object-fit: contain;
}

.lightbox-close,
.lightbox-prev,
.lightbox-next {
  background: rgba(255,255,255,0.08);
  border: none;
  color: var(--text);
  cursor: pointer;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition);
}
.lightbox-close:hover,
.lightbox-prev:hover,
.lightbox-next:hover { background: rgba(255,255,255,0.15); }

.lightbox-close { position: absolute; top: 20px; right: 24px; }
.lightbox-prev { position: absolute; left: 24px; }
.lightbox-next { position: absolute; right: 24px; }

.lightbox-caption {
  color: var(--text-muted);
  font-size: 13px;
  text-align: center;
  max-width: 600px;
}

/* ════════════════════════════════════════════════
   YOUTUBE
   ════════════════════════════════════════════════ */
.youtube-section { background: var(--void); }

.youtube-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.youtube-item { border-radius: var(--radius); overflow: hidden; }
.youtube-item iframe {
  width: 100%;
  aspect-ratio: 16/9;
  border: none;
  display: block;
}

.youtube-empty {
  text-align: center;
  padding: 64px 24px;
  color: var(--text-muted);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  grid-column: 1/-1;
}

/* ════════════════════════════════════════════════
   EXPOSURE
   ════════════════════════════════════════════════ */
.exposure-section { background: var(--void-surface-2); }
.exposure-more { display: inline-block; margin-top: 24px; }

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
  margin-bottom: 8px;
}

.article-card {
  background: var(--void-surface);
  border: 1px solid var(--void-border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: border-color var(--transition), transform var(--transition);
  text-decoration: none;
  color: inherit;
  display: block;
}
.article-card:hover {
  border-color: var(--green-border);
  transform: translateY(-3px);
  text-decoration: none;
  color: inherit;
}

.article-cover {
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
  background: var(--void-border);
}

.article-body { padding: 16px; }

.article-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-meta {
  font-size: 11px;
  color: var(--text-ghost);
  font-family: var(--font-mono);
  margin-bottom: 8px;
}

.article-tags { display: flex; flex-wrap: wrap; gap: 4px; }
.article-tag {
  font-family: var(--font-mono);
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 10px;
  background: var(--green-dim);
  border: 1px solid var(--green-border);
  color: var(--green);
}

.article-skeleton {
  height: 240px;
  border-radius: var(--radius);
  background: linear-gradient(90deg, var(--void-surface) 25%, rgba(255,255,255,0.02) 50%, var(--void-surface) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

.social-posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}

.post-card {
  background: var(--void-surface);
  border: 1px solid var(--void-border);
  border-radius: var(--radius);
  padding: 16px;
  transition: border-color var(--transition), transform var(--transition);
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.post-card:hover {
  border-color: var(--void-border-hover);
  transform: translateY(-3px);
  text-decoration: none;
  color: inherit;
}

.post-platform {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  color: var(--text-ghost);
  text-transform: uppercase;
  letter-spacing: 1px;
}
.post-platform i { font-size: 14px; }

.post-text {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-link {
  font-size: 12px;
  color: var(--green);
  font-family: var(--font-mono);
}

/* ════════════════════════════════════════════════
   CHAT WIDGET
   ════════════════════════════════════════════════ */
.chat-fab {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--green), var(--violet));
  border: none;
  font-size: 22px;
  cursor: pointer;
  z-index: 150;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.4);
  animation: pulse-glow 2.5s ease-in-out infinite;
  transition: transform var(--transition);
  min-width: 44px;
  min-height: 44px;
}
.chat-fab:hover { transform: scale(1.08); }
.chat-fab.open { animation: none; }

@keyframes pulse-glow {
  0%   { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.4); }
  50%  { box-shadow: 0 0 0 12px rgba(52, 211, 153, 0); }
  100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
}

.chat-modal {
  position: fixed;
  bottom: 96px;
  right: 24px;
  width: 360px;
  height: 500px;
  background: var(--void-surface);
  border: 1px solid var(--void-border);
  border-radius: 16px;
  z-index: 150;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0,0,0,0.5);
  transform: translateY(16px);
  opacity: 0;
  transition: transform 250ms ease, opacity 250ms ease;
}
.chat-modal:not([hidden]) {
  transform: translateY(0);
  opacity: 1;
}
.chat-modal[hidden] { display: none !important; }

.chat-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  background: var(--void);
  border-bottom: 1px solid var(--void-border);
  flex-shrink: 0;
}

.chat-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--green), var(--violet));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}

.chat-meta { flex: 1; }
.chat-name { font-size: 14px; font-weight: 700; color: var(--text); }
.chat-status { font-size: 11px; color: var(--green); font-family: var(--font-mono); }

.chat-close {
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-size: 18px;
  cursor: pointer;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  transition: color var(--transition), background var(--transition);
}
.chat-close:hover { color: var(--text); background: rgba(255,255,255,0.04); }

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  scroll-behavior: smooth;
}
.chat-messages::-webkit-scrollbar { width: 4px; }
.chat-messages::-webkit-scrollbar-thumb { background: var(--void-border); border-radius: 4px; }

.msg {
  max-width: 80%;
  font-size: 13px;
  line-height: 1.5;
  padding: 10px 14px;
  border-radius: 12px;
}
.msg a { color: var(--green); }

.msg-ai {
  align-self: flex-start;
  background: var(--void);
  border: 1px solid var(--void-border);
  border-radius: 0 12px 12px 12px;
  color: var(--text-muted);
}

.msg-user {
  align-self: flex-end;
  background: var(--green-dim);
  border: 1px solid var(--green-border);
  border-radius: 12px 12px 0 12px;
  color: var(--green);
}

.msg-typing {
  align-self: flex-start;
  background: var(--void);
  border: 1px solid var(--void-border);
  border-radius: 0 12px 12px 12px;
  color: var(--text-ghost);
  padding: 12px 16px;
  font-family: var(--font-mono);
  font-size: 16px;
  letter-spacing: 4px;
}

.msg-error {
  align-self: flex-start;
  background: rgba(220, 53, 69, 0.07);
  border: 1px solid rgba(220, 53, 69, 0.2);
  border-radius: 0 12px 12px 12px;
  color: #f87171;
  font-size: 13px;
  padding: 10px 14px;
}
.msg-error a { color: var(--green); }

.chat-input-area {
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  border-top: 1px solid var(--void-border);
  background: var(--void);
  flex-shrink: 0;
}

.chat-input {
  flex: 1;
  background: var(--void-surface);
  border: 1px solid var(--void-border);
  border-radius: var(--radius-sm);
  padding: 10px 14px;
  color: var(--text);
  font-family: var(--font-sans);
  font-size: 13px;
  outline: none;
  transition: border-color var(--transition);
  min-height: 44px;
}
.chat-input:focus { border-color: var(--green-border); }
.chat-input::placeholder { color: var(--text-ghost); }

.chat-send {
  background: linear-gradient(135deg, var(--green), var(--violet));
  border: none;
  border-radius: var(--radius-sm);
  color: var(--void);
  font-size: 14px;
  cursor: pointer;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity var(--transition);
}
.chat-send:hover { opacity: 0.85; }
.chat-send:disabled { opacity: 0.4; cursor: not-allowed; }

/* Email transition form inside chat */
.chat-email-form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 16px;
  border-top: 1px solid var(--void-border);
  background: var(--void);
  flex-shrink: 0;
}
.chat-email-input {
  background: var(--void-surface);
  border: 1px solid var(--void-border);
  border-radius: var(--radius-sm);
  padding: 8px 12px;
  color: var(--text);
  font-family: var(--font-sans);
  font-size: 13px;
  outline: none;
  min-height: 44px;
}
.chat-email-input:focus { border-color: var(--green-border); }
.chat-email-input::placeholder { color: var(--text-ghost); }
.chat-email-textarea {
  background: var(--void-surface);
  border: 1px solid var(--void-border);
  border-radius: var(--radius-sm);
  padding: 8px 12px;
  color: var(--text);
  font-family: var(--font-sans);
  font-size: 13px;
  outline: none;
  resize: none;
  height: 80px;
}
.chat-email-textarea:focus { border-color: var(--green-border); }

/* ════════════════════════════════════════════════
   RESPONSIVE
   ════════════════════════════════════════════════ */
@media (max-width: 768px) {
  .nav-links { display: none; }
  .hamburger { display: flex; }
  .chat-fab-nav { display: none; }

  .hero-name { font-size: clamp(40px, 12vw, 72px); }

  .repos-list { border-radius: var(--radius-sm); }
  .repo-right { display: none; }

  .graveyard-grid { grid-template-columns: 1fr; }

  .articles-grid { grid-template-columns: 1fr; }
  .social-posts-grid { grid-template-columns: 1fr; }

  .chat-modal {
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 70vh;
    border-radius: 16px 16px 0 0;
  }
  .chat-fab { bottom: 16px; right: 16px; }
}

@media (max-width: 480px) {
  .hero-chips { gap: 6px; }
  .section-inner { padding: 64px 16px; }
}
```

- [ ] **Step 2: Verify full page renders correctly**

Open `index.html` in browser. Check: all sections visible, graveyard tombstones styled dark, chat FAB visible bottom-right with pulse animation. Mobile test: resize to 375px width — hamburger appears, nav links hide.

- [ ] **Step 3: Commit**

```bash
git add css/styles.css
git commit -m "feat: complete css — all sections, chat widget, mobile responsive"
```

---

## Task 5: scripts.js — GitHub API, Dev.to, Graveyard, Section Logic

**Files:**
- Rewrite: `js/scripts.js`

- [ ] **Step 1: Write complete js/scripts.js**

```javascript
/* ═══════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════ */
const FEATURED_REPOS = ['rust-oxide', 'rust-oxide-lib', 'Hacktoberfest-2021', 'planetarymovement'];

const LANG_COLORS = {
  'Rust': '#CE422B',
  'Python': '#3572A5',
  'JavaScript': '#f1e05a',
  'TypeScript': '#2b7489',
  'CSS': '#563d7c',
  'HTML': '#e34c26',
  'Shell': '#89e051',
  'Jupyter Notebook': '#DA5B0B',
};

const FALLBACK_REPOS = [
  { name: 'rust-oxide', description: 'Agent-Native OS — high-performance Rust toolchain giving AI agents unified, intelligent, secure access to APIs and the web.', language: 'Rust', stargazers_count: 0, updated_at: '2026-05-21T10:46:10Z', html_url: 'https://github.com/manjunani/rust-oxide' },
  { name: 'rust-oxide-lib', description: 'Sample agents built on the Rust Oxide SDK. Three runnable examples showing kernel basics, full end-to-end pipelines, and MCP integration.', language: null, stargazers_count: 0, updated_at: '2026-05-20T04:44:16Z', html_url: 'https://github.com/manjunani/rust-oxide-lib' },
  { name: 'Hacktoberfest-2021', description: 'Hacktoberfest 2021 contribution repository ✨ — beginner-friendly data science and ML notebooks.', language: 'Jupyter Notebook', stargazers_count: 39, updated_at: '2025-09-10T08:02:47Z', html_url: 'https://github.com/manjunani/Hacktoberfest-2021' },
  { name: 'planetarymovement', description: 'CSS orbital animation — planets moving around a star.', language: 'CSS', stargazers_count: 4, updated_at: '2026-03-08T02:42:14Z', html_url: 'https://github.com/manjunani/planetarymovement' },
  { name: 'hermes-agent', description: 'The agent that grows with you.', language: null, stargazers_count: 0, updated_at: '2026-05-19T07:36:14Z', html_url: 'https://github.com/manjunani/hermes-agent' },
  { name: 'askai', description: 'Python AI assistant project.', language: 'Python', stargazers_count: 0, updated_at: '2025-12-20T06:38:39Z', html_url: 'https://github.com/manjunani/askai' },
  { name: 'msft_hackathon', description: 'Microsoft hackathon project — AI/ML solution.', language: 'Python', stargazers_count: 0, updated_at: '2024-09-02T16:25:19Z', html_url: 'https://github.com/manjunani/msft_hackathon' },
  { name: 'malicious_extensions_checker', description: 'Python security tool to detect malicious browser extensions.', language: 'Python', stargazers_count: 1, updated_at: '2023-08-08T11:59:43Z', html_url: 'https://github.com/manjunani/malicious_extensions_checker' },
];

const GRAVEYARD_DATA = [
  { name: 'googletasks', born: '2024', died: '2024', cause: 'Description was literally "A repo fr". Some projects know themselves better than we do.' },
  { name: 'thebrindavanhotel', born: '2023', died: '2023', cause: 'Hotel never opened. Website lives on. A monument to optimism.' },
  { name: 'samplerepo', born: '2024', died: '2024', cause: 'Was always just a sample. Honored its destiny with quiet dignity.' },
  { name: 'react-sandbox', born: '2022', died: '2022', cause: 'Learned React. Moved on. Left sandbox behind like a child leaving a playground.' },
  { name: 'react-lazy-loading', born: '2022', died: '2022', cause: 'Lazy loaded into oblivion. Ironic.' },
  { name: 'react-news-application', born: '2022', died: '2022', cause: 'News stopped. App stopped. Everything stops eventually.' },
  { name: 'gh-custom-actions', born: '2023', died: '2023', cause: 'GitHub Actions course completed. Certified. Badge earned. Repository abandoned.' },
  { name: 'privacypolicies', born: '2023', died: '2023', cause: 'Duplicate of privacy_policies. Two repos, one purpose, zero activity. Identity crisis.' },
  { name: 'PropCreep', born: '2025', died: '2025', cause: 'Crept away before launch. The name was a warning.' },
];

const SOCIAL_POSTS = [
  {
    platform: 'LinkedIn',
    icon: 'fab fa-linkedin-in',
    text: '🚀 Excited to share my latest project! Built a dynamic portfolio site with Next.js, Supabase, GitHub OAuth, and Markdown blogs.',
    url: 'https://www.linkedin.com/posts/manjunathasai_manjunatha-sai-uppu-activity-7239146830700105728-bczZ',
  },
  {
    platform: 'LinkedIn',
    icon: 'fab fa-linkedin-in',
    text: 'Glad to Learn More about Github Actions 🚀 Planning to test my skills on personal projects and pursue upcoming GitHub certifications.',
    url: 'https://www.linkedin.com/posts/manjunathasai_glad-to-learn-more-about-github-actions-activity-7146475793190125569-fE9o',
  },
  {
    platform: 'Dev.to',
    icon: 'fab fa-dev',
    text: 'Azure - Building Multimodal Generative Experiences: deep dive into Azure OpenAI for multimodal AI applications.',
    url: 'https://dev.to/manjunani',
  },
];

const YOUTUBE_VIDEO_IDS = [];
// Add your video IDs here before deploying, e.g.:
// const YOUTUBE_VIDEO_IDS = ['dQw4w9WgXcQ', 'VIDEO_ID_2'];

/* ═══════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════ */
function relativeDate(isoString) {
  const now = new Date();
  const then = new Date(isoString);
  const diffDays = Math.floor((now - then) / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return 'today';
  if (diffDays === 1) return 'yesterday';
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)}mo ago`;
  return `${Math.floor(diffDays / 365)}y ago`;
}

function sanitize(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ═══════════════════════════════════════════════
   REPOS
═══════════════════════════════════════════════ */
let allRepos = [];
let shownCount = 10;

function buildRepoRow(repo) {
  const isFeatured = FEATURED_REPOS.includes(repo.name);
  const langColor = repo.language ? (LANG_COLORS[repo.language] || '#64748b') : null;

  return `
    <a
      href="${sanitize(repo.html_url)}"
      target="_blank"
      rel="noopener noreferrer"
      class="repo-row"
      aria-label="${sanitize(repo.name)}${repo.description ? ': ' + sanitize(repo.description) : ''}"
    >
      <div class="repo-left">
        <div class="repo-name-row">
          <span class="repo-name">${sanitize(repo.name)}</span>
          ${isFeatured ? '<span class="repo-featured-badge">featured</span>' : ''}
        </div>
        ${repo.description ? `<div class="repo-desc">${sanitize(repo.description)}</div>` : ''}
      </div>
      <div class="repo-right">
        <div class="repo-meta">
          ${langColor ? `
            <span class="repo-lang">
              <span class="lang-dot" style="background:${langColor}" aria-hidden="true"></span>
              <span>${sanitize(repo.language)}</span>
            </span>
          ` : ''}
          ${repo.stargazers_count > 0 ? `
            <span class="repo-stars">
              <i class="fa fa-star" aria-hidden="true"></i>
              ${repo.stargazers_count}
            </span>
          ` : ''}
          <span>${relativeDate(repo.updated_at)}</span>
        </div>
        <i class="fa fa-arrow-right repo-arrow" aria-hidden="true"></i>
      </div>
    </a>
  `;
}

function renderRepos(repos) {
  const list = document.getElementById('repos-list');
  const btn = document.getElementById('repos-load-more');
  if (!list) return;

  const toShow = repos.slice(0, shownCount);
  list.innerHTML = toShow.map(buildRepoRow).join('');

  if (repos.length > shownCount) {
    btn.hidden = false;
  } else {
    btn.hidden = true;
  }
}

async function loadRepos() {
  const cacheKey = 'msu_repos_v1';
  const cached = sessionStorage.getItem(cacheKey);

  if (cached) {
    try {
      allRepos = JSON.parse(cached);
      renderRepos(allRepos);
      return;
    } catch (_) { /* fall through to fetch */ }
  }

  try {
    const res = await fetch('https://api.github.com/users/manjunani/repos?per_page=100&sort=updated', {
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    });
    if (!res.ok) throw new Error('GitHub API error');
    const data = await res.json();

    // Filter own repos, sort: featured first, then by updated_at
    const ownRepos = data.filter(r => !r.fork);
    ownRepos.sort((a, b) => {
      const aFeat = FEATURED_REPOS.includes(a.name) ? 0 : 1;
      const bFeat = FEATURED_REPOS.includes(b.name) ? 0 : 1;
      if (aFeat !== bFeat) return aFeat - bFeat;
      return new Date(b.updated_at) - new Date(a.updated_at);
    });

    allRepos = ownRepos;
    sessionStorage.setItem(cacheKey, JSON.stringify(allRepos));
    renderRepos(allRepos);
  } catch (_) {
    // Fallback: render hardcoded data silently
    allRepos = FALLBACK_REPOS;
    renderRepos(allRepos);
  }
}

document.getElementById('repos-load-more')?.addEventListener('click', () => {
  shownCount += 10;
  renderRepos(allRepos);
});

/* ═══════════════════════════════════════════════
   GRAVEYARD
═══════════════════════════════════════════════ */
function renderGraveyard() {
  const grid = document.getElementById('graveyard-grid');
  if (!grid) return;
  grid.innerHTML = GRAVEYARD_DATA.map(project => `
    <article
      class="tombstone"
      role="article"
      aria-label="${sanitize(project.name)} — cause of death: ${sanitize(project.cause)}"
    >
      <span class="tombstone-skull" aria-hidden="true">💀</span>
      <div class="tombstone-name">${sanitize(project.name)}</div>
      <div class="tombstone-dates">${sanitize(project.born)} — ${sanitize(project.died)}</div>
      <div class="tombstone-cause">"${sanitize(project.cause)}"</div>
    </article>
  `).join('');
}

/* ═══════════════════════════════════════════════
   PHOTOS (lightbox)
═══════════════════════════════════════════════ */
let lightboxImages = [];
let lightboxIndex = 0;

function initPhotos() {
  const grid = document.getElementById('photos-grid');
  if (!grid) return;

  // Discover images in assets/img/photos/ — in static context, enumerate known images
  // Add filenames here as you add photos to the repo:
  const photoFiles = [
    // 'assets/img/photos/photo1.jpg',
    // 'assets/img/photos/photo2.jpg',
  ];

  if (photoFiles.length === 0) return; // empty state already in HTML

  grid.innerHTML = '';
  lightboxImages = photoFiles;

  photoFiles.forEach((src, idx) => {
    const item = document.createElement('div');
    item.className = 'photo-item';
    item.innerHTML = `<img src="${sanitize(src)}" alt="Photo ${idx + 1}" loading="lazy" />`;
    item.addEventListener('click', () => openLightbox(idx));
    grid.appendChild(item);
  });
}

function openLightbox(idx) {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lightboxIndex = idx;
  updateLightboxImage();
  lb.hidden = false;
  document.body.style.overflow = 'hidden';
  document.getElementById('lightbox-close')?.focus();
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.hidden = true;
  document.body.style.overflow = '';
}

function updateLightboxImage() {
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  if (!img) return;
  const src = lightboxImages[lightboxIndex];
  img.src = src;
  img.alt = `Photo ${lightboxIndex + 1} of ${lightboxImages.length}`;
  if (cap) cap.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
}

document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
document.getElementById('lightbox-prev')?.addEventListener('click', () => {
  lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  updateLightboxImage();
});
document.getElementById('lightbox-next')?.addEventListener('click', () => {
  lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
  updateLightboxImage();
});

document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (!lb || lb.hidden) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') { lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length; updateLightboxImage(); }
  if (e.key === 'ArrowRight') { lightboxIndex = (lightboxIndex + 1) % lightboxImages.length; updateLightboxImage(); }
});

/* ═══════════════════════════════════════════════
   YOUTUBE
═══════════════════════════════════════════════ */
function renderYouTube() {
  const grid = document.getElementById('youtube-grid');
  if (!grid || YOUTUBE_VIDEO_IDS.length === 0) return;

  grid.innerHTML = YOUTUBE_VIDEO_IDS.map(id => `
    <div class="youtube-item">
      <iframe
        src="https://www.youtube.com/embed/${sanitize(id)}"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>
  `).join('');
}

/* ═══════════════════════════════════════════════
   DEV.TO ARTICLES
═══════════════════════════════════════════════ */
function buildArticleCard(article) {
  const tags = (article.tag_list || []).slice(0, 3);
  const date = new Date(article.published_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  return `
    <a href="${sanitize(article.url)}" target="_blank" rel="noopener" class="article-card" aria-label="${sanitize(article.title)}">
      ${article.cover_image ? `<img class="article-cover" src="${sanitize(article.cover_image)}" alt="" loading="lazy" />` : '<div class="article-cover" aria-hidden="true"></div>'}
      <div class="article-body">
        <div class="article-title">${sanitize(article.title)}</div>
        <div class="article-meta">${date} · ${article.reading_time_minutes || 1} min read</div>
        ${tags.length ? `<div class="article-tags">${tags.map(t => `<span class="article-tag">#${sanitize(t)}</span>`).join('')}</div>` : ''}
      </div>
    </a>
  `;
}

async function loadArticles() {
  const grid = document.getElementById('articles-grid');
  if (!grid) return;

  try {
    const res = await fetch('https://dev.to/api/articles?username=manjunani&per_page=6');
    if (!res.ok) throw new Error('Dev.to API error');
    const articles = await res.json();
    if (!articles.length) throw new Error('No articles');
    grid.innerHTML = articles.map(buildArticleCard).join('');
  } catch (_) {
    grid.innerHTML = `
      <div class="article-skeleton" style="opacity:0.3"></div>
      <p style="grid-column:1/-1;color:var(--text-ghost);font-size:13px;text-align:center;padding:24px 0;">
        Couldn't load articles — <a href="https://dev.to/manjunani" target="_blank" rel="noopener">read them on Dev.to →</a>
      </p>
    `;
  }
}

/* ═══════════════════════════════════════════════
   SOCIAL POSTS
═══════════════════════════════════════════════ */
function renderSocialPosts() {
  const grid = document.getElementById('social-posts-grid');
  if (!grid) return;
  grid.innerHTML = SOCIAL_POSTS.map(post => `
    <a href="${sanitize(post.url)}" target="_blank" rel="noopener" class="post-card">
      <div class="post-platform">
        <i class="${sanitize(post.icon)}" aria-hidden="true"></i>
        ${sanitize(post.platform)}
      </div>
      <div class="post-text">${sanitize(post.text)}</div>
      <div class="post-link">View post →</div>
    </a>
  `).join('');
}

/* ═══════════════════════════════════════════════
   MOBILE NAV
═══════════════════════════════════════════════ */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('mobile-overlay');
  const closeBtn = document.getElementById('mobile-close');
  const links = overlay?.querySelectorAll('.mobile-link');

  if (!hamburger || !overlay) return;

  function openNav() {
    overlay.classList.add('open');
    overlay.removeAttribute('aria-hidden');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  }

  function closeNav() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    hamburger.focus();
  }

  hamburger.addEventListener('click', openNav);
  closeBtn?.addEventListener('click', closeNav);
  links?.forEach(link => link.addEventListener('click', closeNav));

  // Keyboard trap in mobile nav
  overlay.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeNav(); return; }
    if (e.key !== 'Tab') return;
    const focusable = [...overlay.querySelectorAll('button, a')].filter(el => !el.hidden);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
}

/* ═══════════════════════════════════════════════
   NAV SCROLL + ACTIVE SECTION
═══════════════════════════════════════════════ */
function initNavScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  const sections = document.querySelectorAll('.section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: `-${64}px 0px -60% 0px` });

  sections.forEach(s => observer.observe(s));
}

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  loadRepos();
  renderGraveyard();
  initPhotos();
  renderYouTube();
  loadArticles();
  renderSocialPosts();
  initMobileNav();
  initNavScroll();
});
```

- [ ] **Step 2: Verify in browser**

Open `index.html`. Expected: repos list renders (either live or fallback), graveyard tombstones show 9 dead projects with cause-of-death text, Dev.to articles load, social posts appear. Open console — no JS errors.

- [ ] **Step 3: Commit**

```bash
git add js/scripts.js
git commit -m "feat: scripts.js — GitHub API, Dev.to, graveyard, sections, mobile nav"
```

---

## Task 6: chat.js — OpenRouter Chat Widget

**Files:**
- Create: `js/chat.js`

- [ ] **Step 1: Create js/chat.js**

```javascript
/* ═══════════════════════════════════════════════
   CHAT WIDGET — OpenRouter Integration
   Replace OPENROUTER_API_KEY before deploying.
   Get a free key at https://openrouter.ai
   Set a spending limit in OR dashboard.
═══════════════════════════════════════════════ */
const OPENROUTER_API_KEY = 'sk-or-v1-REPLACE_ME';
const OPENROUTER_MODEL = 'meta-llama/llama-3.1-8b-instruct:free';
const CONTACT_EMAIL = 'manjunatha16.512@gmail.com';

const CONNECT_KEYWORDS = ['connect', 'email', 'reach', 'contact', 'message', 'hire', 'work with you', 'get in touch'];

const OPENING_MESSAGE = "Hey 👋 I'm Manjunatha — alien, builder, photographer. I know about rust-oxide, my graveyard of failed experiments, and why I shoot photos at night. Ask me anything.";

let chatHistory = [];
let isEmailMode = false;

/* ═══════════════════════════════════════════════
   DOM REFS (lazy — DOM exists when scripts run)
═══════════════════════════════════════════════ */
function el(id) { return document.getElementById(id); }

/* ═══════════════════════════════════════════════
   SYSTEM PROMPT
═══════════════════════════════════════════════ */
const SYSTEM_PROMPT = `You are a conversational AI assistant representing Manjunatha Sai Uppu on his personal portfolio website. Answer questions about him in first person ("I build...", "I'm currently..."). Be concise (max 3 sentences per reply), conversational, honest, and occasionally use emoji. Never make up facts. If you don't know something, say so.

WHO YOU ARE:
- Senior Product Engineer at TheMathCompany (MathCo), Bangalore
- Self-identified ALIEN 👽🤖👾
- Full Stack Dev by day, Mobile Photographer by night
- Optimist, community builder, chaotic-good learner

CURRENT PROJECTS (May 2026):
- rust-oxide: Agent-Native OS in Rust — gives AI agents unified access to APIs and the web
- rust-oxide-lib: Sample agents built on the Rust Oxide SDK
- hermes-agent: "The agent that grows with you"

STACK: Rust, Python, JavaScript/TypeScript, React, Azure, AWS, GCP, n8n, LangFlow, Dify

NOTABLE REPOS: Hacktoberfest-2021 (39 stars), planetarymovement (CSS orbital animations, 4 stars)

THE GRAVEYARD: I've abandoned many projects — googletasks, thebrindavanhotel, react-sandbox trilogy, samplerepo. I'm proud of this. It means I experiment.

CONTACT: Email only — ${CONTACT_EMAIL}. No phone. LinkedIn: linkedin.com/in/manjunathasai

WRITING: Dev.to (@manjunani) — 11 articles on Azure GenAI, AWS, prompt engineering, DevOps, startups.

PERSONALITY: Direct. Won't overclaim. Comfortable saying "I built this and abandoned it". Genuinely excited about Rust + AI agents.

If the user asks to connect, email, or contact you — say you're happy to help and that you'll switch to email mode.`;

/* ═══════════════════════════════════════════════
   RENDER HELPERS
═══════════════════════════════════════════════ */
function appendMessage(content, type) {
  const messages = el('chat-messages');
  if (!messages) return;

  const div = document.createElement('div');
  div.className = `msg msg-${type}`;
  div.innerHTML = content;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
  return div;
}

function showTyping() {
  const messages = el('chat-messages');
  if (!messages) return null;
  const div = document.createElement('div');
  div.className = 'msg msg-typing';
  div.id = 'typing-indicator';
  div.textContent = '...';
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
  return div;
}

function removeTyping() {
  el('typing-indicator')?.remove();
}

function sanitizeOutput(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>');
}

/* ═══════════════════════════════════════════════
   OPENROUTER API
═══════════════════════════════════════════════ */
async function fetchAIResponse(userMessage) {
  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...chatHistory,
    { role: 'user', content: userMessage },
  ];

  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': window.location.href,
      'X-Title': 'Manjunatha Portfolio Chat',
    },
    body: JSON.stringify({
      model: OPENROUTER_MODEL,
      messages,
      max_tokens: 300,
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error?.message || `API error ${res.status}`);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content || 'Sorry, I got an empty response.';
}

/* ═══════════════════════════════════════════════
   EMAIL MODE
═══════════════════════════════════════════════ */
function switchToEmailMode() {
  isEmailMode = true;
  const inputArea = el('chat-input-area');
  if (!inputArea) return;

  inputArea.outerHTML = `
    <div class="chat-email-form" id="chat-email-form">
      <input
        type="text"
        class="chat-email-input"
        id="email-name"
        placeholder="Your name"
        aria-label="Your name"
        maxlength="100"
      />
      <textarea
        class="chat-email-textarea"
        id="email-body"
        placeholder="Your message..."
        aria-label="Your message"
        maxlength="1000"
      ></textarea>
      <button class="btn-outline" id="email-send-btn" style="align-self:flex-end;margin:0;">
        Send Email →
      </button>
    </div>
  `;

  el('email-send-btn')?.addEventListener('click', sendEmail);
  el('email-name')?.focus();
}

function sendEmail() {
  const name = el('email-name')?.value.trim();
  const body = el('email-body')?.value.trim();
  if (!body) return;

  const subject = encodeURIComponent(`Portfolio contact${name ? ` from ${name}` : ''}`);
  const bodyEncoded = encodeURIComponent(name ? `From: ${name}\n\n${body}` : body);
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${bodyEncoded}`;
}

/* ═══════════════════════════════════════════════
   SEND MESSAGE
═══════════════════════════════════════════════ */
async function sendMessage() {
  if (isEmailMode) return;

  const input = el('chat-input');
  const sendBtn = el('chat-send');
  if (!input || !sendBtn) return;

  const userMessage = input.value.trim();
  if (!userMessage) return;

  input.value = '';
  sendBtn.disabled = true;

  appendMessage(sanitizeOutput(userMessage), 'user');

  // Check for connect keywords → switch to email mode
  const wantsContact = CONNECT_KEYWORDS.some(kw => userMessage.toLowerCase().includes(kw));

  const typing = showTyping();

  try {
    const aiResponse = await fetchAIResponse(userMessage);
    removeTyping();

    chatHistory.push({ role: 'user', content: userMessage });
    chatHistory.push({ role: 'assistant', content: aiResponse });
    // Keep history bounded to last 10 exchanges
    if (chatHistory.length > 20) chatHistory = chatHistory.slice(-20);

    appendMessage(sanitizeOutput(aiResponse), 'ai');

    if (wantsContact) {
      setTimeout(() => {
        appendMessage('Type your message below and hit Send — it goes straight to my inbox 📬', 'ai');
        switchToEmailMode();
      }, 600);
    }
  } catch (err) {
    removeTyping();
    appendMessage(
      `Having trouble connecting. Email me directly: <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`,
      'error'
    );
  } finally {
    sendBtn.disabled = false;
    input.focus();
  }
}

/* ═══════════════════════════════════════════════
   MODAL OPEN / CLOSE
═══════════════════════════════════════════════ */
function openChat() {
  const modal = el('chat-modal');
  const fab = el('chat-trigger');
  if (!modal) return;

  modal.hidden = false;
  fab?.classList.add('open');

  // Prepend opening message if first time
  const messages = el('chat-messages');
  if (messages && messages.children.length === 0) {
    appendMessage(sanitizeOutput(OPENING_MESSAGE), 'ai');
  }

  el('chat-input')?.focus();
}

function closeChat() {
  const modal = el('chat-modal');
  const fab = el('chat-trigger');
  if (!modal) return;

  modal.hidden = true;
  fab?.classList.remove('open');
  fab?.focus();
}

/* ═══════════════════════════════════════════════
   KEYBOARD TRAP IN CHAT MODAL
═══════════════════════════════════════════════ */
function trapFocusInChat(e) {
  const modal = el('chat-modal');
  if (!modal || modal.hidden) return;
  if (e.key === 'Escape') { closeChat(); return; }
  if (e.key !== 'Tab') return;

  const focusable = [...modal.querySelectorAll('button, input, textarea, a[href]')]
    .filter(el => !el.hidden && !el.disabled);
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // FAB triggers (bottom-right + nav)
  el('chat-trigger')?.addEventListener('click', openChat);
  el('chat-trigger-nav')?.addEventListener('click', openChat);
  el('chat-close')?.addEventListener('click', closeChat);

  // Send on button click or Enter key
  el('chat-send')?.addEventListener('click', sendMessage);
  el('chat-input')?.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  });

  // Keyboard trap
  document.addEventListener('keydown', trapFocusInChat);
});
```

- [ ] **Step 2: Set your OpenRouter API key**

1. Get a free key at https://openrouter.ai (sign up, go to Keys)
2. Set a spending limit of $1-5 in the OpenRouter dashboard (Settings → Billing)
3. Replace `'sk-or-v1-REPLACE_ME'` in `js/chat.js` line 6 with your actual key

- [ ] **Step 3: Verify chat works**

Open `index.html` in browser. Click 👽 FAB bottom-right. Expected: chat modal slides up. Type "what is rust-oxide?" and press Enter. Expected: AI response appears. Type "I want to contact you" — expected: AI responds then email form appears.

If you see "Having trouble connecting" — check that the API key is set correctly.

- [ ] **Step 4: Commit (without the real API key)**

Before committing, ensure the key is either: (a) a placeholder string, or (b) you accept it being public. For a personal portfolio, a public key with a spending limit is acceptable.

```bash
git add js/chat.js
git commit -m "feat: chat.js — OpenRouter AI chat widget with email transition"
```

---

## Task 7: Final Polish + .gitignore + README note

**Files:**
- Modify: `.gitignore` (or create)
- Modify: `README.md`

- [ ] **Step 1: Add .superpowers to .gitignore**

```bash
echo ".superpowers/" >> .gitignore
echo ".DS_Store" >> .gitignore
git add .gitignore
```

- [ ] **Step 2: Update README.md**

Replace the content of README.md with:

```markdown
# manjunathasaiuppu

Personal portfolio — [manjunani.github.io/manjunathasaiuppu](https://manjunani.github.io/manjunathasaiuppu)

## Setup

1. Clone the repo
2. Open `js/chat.js` and replace `OPENROUTER_API_KEY` with your key from [openrouter.ai](https://openrouter.ai)
3. Set a spending limit on OpenRouter dashboard (recommended: $1-5)
4. Open `index.html` in a browser or push to GitHub Pages

## Adding Photos

Drop images into `assets/img/photos/` and add their filenames to the `photoFiles` array in `js/scripts.js` (search for `const photoFiles`).

## Adding YouTube Videos

Add your video IDs to `YOUTUBE_VIDEO_IDS` in `js/scripts.js` (search for `YOUTUBE_VIDEO_IDS`).

## Stack

Plain HTML + CSS + Vanilla JS. No build step. Deploys directly to GitHub Pages.

- **Font:** Space Grotesk (Google Fonts)
- **Icons:** Font Awesome 6
- **Chat:** OpenRouter (Llama 3.1 8B free tier)
- **Data:** GitHub API + Dev.to API (with fallbacks)
```

- [ ] **Step 3: Final commit**

```bash
git add .gitignore README.md
git commit -m "chore: gitignore .superpowers, update README with setup instructions"
```

---

## Self-Review

**Spec coverage check:**

| Spec requirement | Task |
|---|---|
| Phosphor Alien palette (CSS custom properties) | Task 3 |
| Space Grotesk font | Task 3 |
| Nav: MSU logo, 5 links, 👽 chat button, hamburger | Task 2 |
| Mobile full-screen overlay nav | Task 3 + 5 |
| Hero: badge, name, role, chips, bio, social icons | Task 2 + 3 |
| GitHub repos: horizontal list, featured first, fallback | Task 4 + 5 |
| Graveyard: 9 tombstones with cause-of-death | Task 2 + 3 + 5 |
| Photos: masonry grid, lightbox with ←/→/Esc | Task 2 + 3 + 5 |
| YouTube: embed grid, empty state | Task 2 + 3 + 5 |
| Exposure: Dev.to API + social posts | Task 2 + 3 + 5 |
| Chat: OpenRouter, typing indicator, email transition | Task 6 |
| Chat keyboard trap + Esc close | Task 6 |
| Chat error fallback → mailto | Task 6 |
| Chat opening message teases graveyard + photography | Task 6 |
| API fallback JSON for GitHub rate limits | Task 5 |
| Dev.to error state | Task 5 |
| All touch targets ≥ 44px | Task 3 |
| ARIA roles on graveyard cards | Task 5 |
| Lightbox keyboard nav | Task 5 |
| sessionStorage caching for GitHub API | Task 5 |
| Profile doc as AI system prompt | Task 1 |
| Bug fixes: remove Bootstrap, remove jQuery, fix meta tags | Task 2 + 3 |

All 23 spec requirements covered. No gaps.
