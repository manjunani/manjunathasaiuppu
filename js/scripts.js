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

  if (btn) btn.hidden = repos.length <= shownCount;
}

async function loadRepos() {
  const cacheKey = 'msu_repos_v1';
  const cached = sessionStorage.getItem(cacheKey);

  if (cached) {
    try {
      allRepos = JSON.parse(cached);
      renderRepos(allRepos);
      return;
    } catch (_) { /* fall through */ }
  }

  try {
    const res = await fetch('https://api.github.com/users/manjunani/repos?per_page=100&sort=updated', {
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    });
    if (!res.ok) throw new Error('GitHub API error');
    const data = await res.json();

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

  // Add photo filenames here as you add images to assets/img/photos/
  const photoFiles = [];

  if (photoFiles.length === 0) return;

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
  img.src = lightboxImages[lightboxIndex];
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

  overlay.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeNav(); return; }
    if (e.key !== 'Tab') return;
    const focusable = [...overlay.querySelectorAll('button, a')];
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
  }, { rootMargin: `-64px 0px -60% 0px` });

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
