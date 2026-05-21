/* ═══════════════════════════════════════════════
   CHAT WIDGET — OpenRouter Integration
   Replace OPENROUTER_API_KEY before deploying.
   Get a free key at https://openrouter.ai
   Set a spending limit in OR dashboard.
═══════════════════════════════════════════════ */
const OPENROUTER_API_KEY = '__OPENROUTER_API_KEY__';
const OPENROUTER_MODEL = 'openai/gpt-oss-120b:free';
const CONTACT_EMAIL = 'manjunatha16.512@gmail.com';

const CONNECT_KEYWORDS = ['connect', 'email', 'reach', 'contact', 'message', 'hire', 'work with you', 'get in touch'];

const OPENING_MESSAGE = "Hey 👋 I'm Manjunatha — alien, builder, photographer. I know about rust-oxide, my graveyard of failed experiments, and why I shoot photos at night. Ask me anything.";

let chatHistory = [];
let isEmailMode = false;

function el(id) { return document.getElementById(id); }

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

CONTACT: Email only — manjunatha16.512@gmail.com. No phone. LinkedIn: linkedin.com/in/manjunathasai

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
      <input type="text" class="chat-email-input" id="email-name" placeholder="Your name" aria-label="Your name" maxlength="100" />
      <textarea class="chat-email-textarea" id="email-body" placeholder="Your message..." aria-label="Your message" maxlength="1000"></textarea>
      <button class="btn-outline" id="email-send-btn" style="align-self:flex-end;margin:0;">Send Email →</button>
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

  const wantsContact = CONNECT_KEYWORDS.some(kw => userMessage.toLowerCase().includes(kw));

  showTyping();

  try {
    const aiResponse = await fetchAIResponse(userMessage);
    removeTyping();

    chatHistory.push({ role: 'user', content: userMessage });
    chatHistory.push({ role: 'assistant', content: aiResponse });
    if (chatHistory.length > 20) chatHistory = chatHistory.slice(-20);

    appendMessage(sanitizeOutput(aiResponse), 'ai');

    if (wantsContact) {
      setTimeout(() => {
        appendMessage('Type your message below and hit Send — it goes straight to my inbox 📬', 'ai');
        switchToEmailMode();
      }, 600);
    }
  } catch (_) {
    removeTyping();
    appendMessage(
      `Having trouble connecting. Email me directly: <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`,
      'error'
    );
  } finally {
    sendBtn.disabled = false;
    input?.focus();
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
   KEYBOARD TRAP
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
  el('chat-trigger')?.addEventListener('click', openChat);
  el('chat-trigger-nav')?.addEventListener('click', openChat);
  el('chat-close')?.addEventListener('click', closeChat);

  el('chat-send')?.addEventListener('click', sendMessage);
  el('chat-input')?.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  });

  document.addEventListener('keydown', trapFocusInChat);
});
