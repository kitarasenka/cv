// Всё содержимое сайта — здесь. Чтобы поменять текст или добавить проект,
// правь только этот блок: HTML и стили трогать не нужно.

// CV пока только на английском — обе кнопки отдают его. Появится RU-версия — поменяй ru.
const CV = {
  ru: 'cv/Kiryl_Tarasenka_CV_EN.pdf',
  en: 'cv/Kiryl_Tarasenka_CV_EN.pdf',
};

const UI = {
  ru: {
    'nav.products': 'Продукты',
    'nav.bots': 'Телеграм-боты',
    'nav.infra': 'Инфраструктура',
    'hero.hello': 'Привет, я',
    'hero.name': 'Кирилл Тарасенко',
    'hero.role': 'Senior Software Engineer · React Native · 9+ лет',
    'hero.about': 'Днём строю кроссплатформенные приложения на React Native. В остальное время делаю свои продукты от идеи до продакшена: карту автобусов, десктопный Git-клиент, браузерную игру и десяток Telegram-ботов — всё крутится на моей собственной панели деплоя.',
    'hero.cv': 'Скачать CV',
    'stats.products': 'продукта',
    'stats.bots': 'ботов',
    'stats.infra': 'своя PaaS',
    'bots.lead': 'Маленькие инструменты, которые решают одну задачу и делают это хорошо.',
    'card.open': 'Открыть',
    'footer.text': 'Кирилл Тарасенко · Батуми',
  },
  en: {
    'nav.products': 'Products',
    'nav.bots': 'Telegram bots',
    'nav.infra': 'Infrastructure',
    'hero.hello': "Hi, I'm",
    'hero.name': 'Kiryl Tarasenka',
    'hero.role': 'Senior Software Engineer · React Native · 9+ years',
    'hero.about': 'By day I build cross-platform apps with React Native. The rest of the time I ship my own products from idea to production: a live bus map, a desktop Git client, a browser game and a dozen Telegram bots — all running on my own deployment panel.',
    'hero.cv': 'Download CV',
    'stats.products': 'products',
    'stats.bots': 'bots',
    'stats.infra': 'own PaaS',
    'bots.lead': 'Small tools that do one job and do it well.',
    'card.open': 'Open',
    'footer.text': 'Kiryl Tarasenka · Batumi',
  },
};

const PRODUCTS = [
  {
    emoji: '🚌',
    name: 'BatBus',
    image: 'assets/img/batbus.jpg',
    icon: 'assets/img/batbus-icon.png',
    tags: ['Telegram Mini App', 'Maps', 'Subscriptions'],
    links: [
      { label: 'batbus.app', href: 'https://batbus.app' },
      { label: '@bat_bus_bot', href: 'https://t.me/bat_bus_bot' },
    ],
    text: {
      ru: 'Telegram Mini App с картой автобусов Батуми: живые маршруты, планировщик, будильник на остановку, избранные места. Платная подписка.',
      en: 'A Telegram Mini App with a live map of Batumi buses: real-time routes, a trip planner, a stop alarm and saved places. Paid subscription.',
    },
  },
  {
    emoji: '🌱',
    name: 'Twig',
    image: 'assets/img/twig.webp',
    icon: 'assets/img/twig-icon.png',
    tags: ['Electron', 'React', 'macOS · Windows · Linux'],
    links: [{ label: 'kitarasenka.github.io/twig', href: 'https://kitarasenka.github.io/twig' }],
    text: {
      ru: 'Десктопный Git-клиент: граф коммитов в центре, консоль со всеми реальными git-командами.',
      en: 'A desktop Git client: the commit graph front and centre, plus a console showing every real git command it runs.',
    },
  },
  {
    emoji: '🌳',
    name: { ru: 'Сад-призрак', en: 'Ghost Garden' },
    image: 'assets/img/garden.jpg',
    tags: ['Tower defense', 'Browser', 'Co-op'],
    links: [{ label: 'go-coop.app', href: 'https://go-coop.app' }],
    text: {
      ru: 'Браузерная tower defense: сажаешь деревья, защищаешь Древо жизни от насекомых. 25 волн, погода, кооп на двоих по ссылке.',
      en: 'A browser tower defense: plant trees and protect the Tree of Life from insects. 25 waves, weather, and two-player co-op via a link.',
    },
  },
];

const BOTS = [
  {
    emoji: '🎭',
    name: 'Mafia Club',
    handles: ['xcity_mafia_bot', 'clan_mafia_bot'],
    text: {
      ru: 'Запись на игровые вечера: карточки-репосты, ники, «приду позже», управление клубом.',
      en: 'Sign-ups for game nights: shareable cards, nicknames, “coming late”, club management.',
    },
  },
  {
    emoji: '✈️',
    name: 'TripPay',
    handles: ['trip_pay_me_bot'],
    text: {
      ru: 'Совместные траты в поездке: планирование, учёт, кто кому сколько должен.',
      en: 'Shared trip expenses: planning, tracking, and who owes whom how much.',
    },
  },
  {
    emoji: '📣',
    name: 'All Notificator',
    handles: ['ftn_notificator_bot'],
    text: {
      ru: 'Достучаться до всех в группе, даже без username: личка каждому + окна «не беспокоить».',
      en: 'Reach everyone in a group, even without a username: a DM to each member plus do-not-disturb windows.',
    },
  },
  {
    emoji: '🛡',
    name: 'Captcha',
    handles: ['laba_captcha_bot'],
    text: {
      ru: 'Капча на входе в чат и на заявки, чистит за собой служебные сообщения.',
      en: 'A captcha for chat joins and join requests that cleans up its service messages.',
    },
  },
  {
    emoji: '🔎',
    name: 'Searcher',
    handles: ['laboratorybar_batumi_bot'],
    text: {
      ru: 'Алерты по ключевым словам: следит за источниками и пингует, когда тема всплыла.',
      en: 'Keyword alerts: watches sources and pings you when a topic comes up.',
    },
  },
  {
    emoji: '🌐',
    name: 'Translator',
    handles: ['wh_translator_bot'],
    text: {
      ru: 'Переводчик прямо в чате.',
      en: 'A translator right inside the chat.',
    },
  },
  {
    emoji: '🔗',
    name: 'tg-dis-connector',
    handles: ['dis_tg_connector_bot'],
    text: {
      ru: 'Мост Discord ⇄ Telegram с автопереводом в обе стороны (DE/RU).',
      en: 'A Discord ⇄ Telegram bridge with two-way auto-translation (DE/RU).',
    },
  },
  {
    emoji: '📨',
    name: 'tg_poster',
    handles: ['bar_poster_bot'],
    text: {
      ru: 'Userbot, разносит объявления по барахолкам по расписанию.',
      en: 'A userbot that posts listings to flea-market chats on a schedule.',
    },
  },
  {
    emoji: '🎧',
    name: 'Tuna',
    handles: ['tuna_player_bot'],
    text: {
      ru: 'Кидаешь ссылку на YouTube, получаешь аудио, которое играет в фоне и с локскрина.',
      en: 'Send a YouTube link, get audio that keeps playing in the background and from the lock screen.',
    },
  },
];

const INFRA = [
  {
    emoji: '⚙️',
    name: 'Nodex',
    tags: ['PM2', 'Metrics', 'Logs', 'Git-push deploy'],
    text: {
      ru: 'Своя PM2-панель: метрики, логи, автодеплой с git-пуша и отчёты в Телеграм. На ней живёт всё вышеперечисленное.',
      en: 'My own PM2 panel: metrics, logs, auto-deploy on git push and reports to Telegram. Everything above runs on it.',
    },
  },
];

// ---------------------------------------------------------------------------

const $ = (sel) => document.querySelector(sel);
const pick = (value, lang) => (typeof value === 'object' ? value[lang] : value);
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>';

function renderProducts(lang) {
  $('#products-list').innerHTML = PRODUCTS.map((p, i) => `
    <article class="product reveal" style="--i:${i}">
      <div class="product__media">
        <img src="${p.image}" alt="${esc(pick(p.name, lang))}" loading="lazy">
      </div>
      <div class="product__body">
        <h3 class="product__name">
          ${p.icon ? `<img class="product__icon" src="${p.icon}" alt="">` : `<span class="product__emoji">${p.emoji}</span>`}
          ${esc(pick(p.name, lang))}
        </h3>
        <p>${esc(p.text[lang])}</p>
        <ul class="tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
        <div class="links">
          ${p.links.map((l) => `<a href="${l.href}" target="_blank" rel="noopener">${esc(l.label)} ${ARROW}</a>`).join('')}
        </div>
      </div>
    </article>`).join('');
}

function renderBots(lang) {
  $('#bots-list').innerHTML = BOTS.map((b, i) => `
    <article class="bot reveal" style="--i:${i % 3}">
      <div class="bot__head">
        <span class="bot__emoji">${b.emoji}</span>
        <h3>${esc(b.name)}</h3>
      </div>
      <p>${esc(b.text[lang])}</p>
      <div class="links">
        ${b.handles.map((h) => `<a href="https://t.me/${h}" target="_blank" rel="noopener">@${h} ${ARROW}</a>`).join('')}
      </div>
    </article>`).join('');
}

function renderInfra(lang) {
  $('#infra-list').innerHTML = INFRA.map((n) => `
    <article class="infra reveal">
      <span class="infra__emoji">${n.emoji}</span>
      <div>
        <h3>${esc(n.name)}</h3>
        <p>${esc(n.text[lang])}</p>
        <ul class="tags">${n.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      </div>
    </article>`).join('');
}

function renderStats(lang) {
  const t = UI[lang];
  const items = [
    [PRODUCTS.length, t['stats.products']],
    [BOTS.length, t['stats.bots']],
    [INFRA.length, t['stats.infra']],
  ];
  $('#stats').innerHTML = items.map(([n, label]) => `<li><b data-count="${n}">${n}</b><span>${esc(label)}</span></li>`).join('');
}

function detectLang() {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (UI[fromUrl]) return fromUrl;
  try {
    const saved = localStorage.getItem('lang');
    if (UI[saved]) return saved;
  } catch {}
  return /^(ru|be|uk|kk)\b/i.test(navigator.language || '') ? 'ru' : 'en';
}

function setLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = UI[lang][el.dataset.i18n];
  });
  document.querySelectorAll('.lang button').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  });
  $('.lang').dataset.active = lang;
  ['#cv-link', '#cv-link-footer'].forEach((id) => { $(id).href = CV[lang]; });

  renderStats(lang);
  renderProducts(lang);
  renderBots(lang);
  renderInfra(lang);
  observeReveals();

  try { localStorage.setItem('lang', lang); } catch {}
}

// Появление блоков при скролле
const io = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 })
  : null;

function observeReveals() {
  document.querySelectorAll('.reveal:not(.is-in)').forEach((el) => {
    if (io) io.observe(el); else el.classList.add('is-in');
  });
}

// Фото слегка наклоняется за курсором
function initTilt() {
  const photo = $('#photo');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !matchMedia('(pointer: fine)').matches) return;
  let raf = 0;
  window.addEventListener('pointermove', (e) => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const r = photo.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;
      const y = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
      photo.style.setProperty('--rx', `${(-y * 14).toFixed(2)}deg`);
      photo.style.setProperty('--ry', `${(x * 14).toFixed(2)}deg`);
    });
  });
}

document.querySelectorAll('.lang button').forEach((b) => {
  b.addEventListener('click', () => setLang(b.dataset.lang));
});

setLang(detectLang());
initTilt();
requestAnimationFrame(() => document.body.classList.add('is-ready'));
