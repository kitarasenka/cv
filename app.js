// Всё содержимое сайта — здесь. Чтобы поменять текст или добавить проект,
// правь только эти блоки: HTML и стили трогать не нужно.

// CV пока только на английском — обе кнопки отдают его. Появится RU-версия — поменяй ru.
const CV = {
  ru: 'cv/Kiryl_Tarasenka_CV_EN.pdf',
  en: 'cv/Kiryl_Tarasenka_CV_EN.pdf',
};

// Пустая строка — кнопка не показывается.
const CONTACTS = {
  telegram: 'marstut',
  email: 'tarasenka.kiryl@gmail.com',
  linkedin: '',
  github: 'kitarasenka',
};

const UI = {
  ru: {
    'nav.skills': 'Сильные стороны',
    'nav.projects': 'Пет-проекты',
    'nav.contact': 'Связаться',
    'hero.hello': 'Привет, я Кирилл Тарасенко',
    'hero.role': 'Senior React Native Engineer',
    'hero.build': 'Делаю приложения для',
    'hero.rotate': ['iOS', 'Android', 'Web', 'Telegram'],
    'hero.about': '9+ лет строю кроссплатформенные приложения — от банкинга и e‑commerce до health‑tech. Вёл команды, переводил нативные приложения на React Native, довожу фичи до сторов. А в свободное время запускаю собственные пет-проекты.',
    'hero.cv': 'Скачать CV',
    'hero.write': 'Написать',
    'stats.years': 'лет в разработке',
    'stats.lead': 'проекта в роли тимлида',
    'stats.own': 'своих проектов в продакшене',
    'skills.eyebrow': 'Чем я полезен команде',
    'skills.title': 'Беру задачу — и довожу до релиза',
    'projects.eyebrow': 'Пет-проекты',
    'projects.title': 'От идеи до продакшена — в одиночку',
    'projects.lead': 'Это то, что я делаю в свободное время: сам придумываю, проектирую, пишу, деплою и поддерживаю. BatBus работает по платной подписке.',
    'pets.note': 'На сентябрь 2026. Цифры по коду и коммитам — из git.',
    'pets.projects': 'пет-проектов',
    'pets.loc': 'строк кода',
    'pets.commits': 'коммитов',
    'pets.services': 'сервисов на своей PaaS',
    'bots.title': 'Telegram-боты',
    'bots.lead': 'Маленькие инструменты, которые решают одну задачу и делают это хорошо.',
    'infra.title': 'Инфраструктура',
    'contact.eyebrow': 'Контакты',
    'contact.title': 'Давайте сделаем что‑то классное вместе',
    'contact.lead': 'Быстрее всего — в Telegram. Резюме со всеми деталями — по кнопке.',
    'contact.copy': 'Скопировать',
    'contact.copied': 'Email скопирован',
    'footer.text': 'Кирилл Тарасенко · Батуми',
  },
  en: {
    'nav.skills': 'Strengths',
    'nav.projects': 'Pet projects',
    'nav.contact': 'Contact',
    'hero.hello': "Hi, I'm Kiryl Tarasenka",
    'hero.role': 'Senior React Native Engineer',
    'hero.build': 'I build apps for',
    'hero.rotate': ['iOS', 'Android', 'Web', 'Telegram'],
    'hero.about': 'For 9+ years I have been building cross-platform apps, from banking and e‑commerce to health‑tech. I have led teams, migrated native apps to React Native and shipped features to the stores. In my spare time I launch pet projects of my own.',
    'hero.cv': 'Download CV',
    'hero.write': 'Get in touch',
    'stats.years': 'years in development',
    'stats.lead': 'projects as team lead',
    'stats.own': 'own projects in production',
    'skills.eyebrow': 'What I bring to a team',
    'skills.title': 'I take a task and ship it',
    'projects.eyebrow': 'Pet projects',
    'projects.title': 'From idea to production, solo',
    'projects.lead': 'This is what I build in my spare time: I come up with it, design it, write it, deploy it and keep it running. BatBus runs on a paid subscription.',
    'pets.note': 'As of September 2026. Code and commit numbers come from git.',
    'pets.projects': 'pet projects',
    'pets.loc': 'lines of code',
    'pets.commits': 'commits',
    'pets.services': 'services on my own PaaS',
    'bots.title': 'Telegram bots',
    'bots.lead': 'Small tools that do one job and do it well.',
    'infra.title': 'Infrastructure',
    'contact.eyebrow': 'Contact',
    'contact.title': "Let's build something great together",
    'contact.lead': 'Telegram is the fastest way to reach me. The CV has all the details.',
    'contact.copy': 'Copy',
    'contact.copied': 'Email copied',
    'footer.text': 'Kiryl Tarasenka · Batumi',
  },
};

// Цифры в шапке. own считается сам из списков проектов ниже.
const STATS = [
  { value: 9, suffix: '+', key: 'stats.years' },
  { value: 3, key: 'stats.lead' },
  { value: 'own', key: 'stats.own' },
];

// Сводка над пет-проектами. Цифры — из git (скрипт .claude/skills/update-cv/stats.py).
// projects и services считаются сами из списков ниже.
const PET_STATS = [
  { value: 'projects', key: 'pets.projects' },
  { value: 170, suffix: 'K+', key: 'pets.loc' },
  { value: 880, suffix: '+', key: 'pets.commits' },
  { value: 'services', key: 'pets.services' },
];

const STRENGTHS = [
  {
    icon: '📱',
    title: { ru: 'Кроссплатформа под ключ', en: 'Cross-platform, end to end' },
    text: {
      ru: 'iOS, Android и Web из одной кодовой базы на React Native. Довожу до App Store и Google Play: сборки на Fastlane, аналитика, платежи, вход через Apple, Google и Facebook.',
      en: 'iOS, Android and Web from one React Native codebase, all the way to the App Store and Google Play: Fastlane builds, analytics, payments, Apple, Google and Facebook sign-in.',
    },
  },
  {
    icon: '🧭',
    title: { ru: 'Архитектура и миграции', en: 'Architecture and migrations' },
    text: {
      ru: 'Переводил нативные и веб-приложения на React Native внутри живых продуктов (brownfield). Работал с Backend-Driven UI, дизайн-системами и white label.',
      en: 'Migrated native and web apps to React Native inside live products (brownfield). Worked with Backend-Driven UI, design systems and white-label setups.',
    },
  },
  {
    icon: '👥',
    title: { ru: 'Лидерство', en: 'Leadership' },
    text: {
      ru: 'Вёл команды как тимлид: архитектура, код-ревью, демо для заказчика, общение с дизайном, бэкендом и бизнесом. Замещал лида в большой программе.',
      en: 'Led teams as a team lead: architecture, code review, client demos, working with design, backend and business. Stood in for the lead on a large program.',
    },
  },
  {
    icon: '⚡',
    title: { ru: 'Скорость и доступность', en: 'Performance and accessibility' },
    text: {
      ru: 'Оптимизация производительности и анимаций на Reanimated. Доступность: скринридеры, клавиатура, динамический шрифт, тёмная и светлая темы. Тесты на Jest и Detox.',
      en: 'Performance tuning and Reanimated animations. Accessibility: screen readers, keyboard navigation, dynamic type, dark and light themes. Tests with Jest and Detox.',
    },
  },
  {
    icon: '🤖',
    title: { ru: 'AI-native разработка', en: 'AI-native development' },
    text: {
      ru: 'Claude Code и GitHub Copilot — в ежедневной работе: быстрее доставка, аккуратнее рефакторинг, лучше документация. Прошёл курсы Anthropic по работе с LLM.',
      en: 'Claude Code and GitHub Copilot are part of my daily work: faster delivery, cleaner refactoring, better docs. Completed Anthropic courses on working with LLMs.',
    },
  },
  {
    icon: '🚀',
    title: { ru: 'Продуктовое мышление', en: 'Product mindset' },
    text: {
      ru: 'Сам запускаю продукты от идеи до пользователей: BatBus с платной подпиской, Git-клиент, браузерная игра, девять ботов и собственная платформа деплоя.',
      en: 'I launch products myself, from idea to real users: BatBus with a paid subscription, a Git client, a browser game, nine bots and my own deployment platform.',
    },
  },
];

const STACK = [
  'React Native', 'TypeScript', 'React', 'Redux', 'MobX', 'Zustand', 'React Query',
  'Reanimated', 'React Navigation', 'GraphQL', 'Apollo', 'REST', 'WebSockets', 'Firebase',
  'Node.js', 'Next.js', 'Electron', 'Swift', 'Kotlin', 'Fastlane', 'Jest', 'Detox',
  'Telegram Mini Apps', 'Claude Code',
];

const PRODUCTS = [
  {
    emoji: '🚌',
    name: 'BatBus',
    image: 'assets/img/batbus.jpg',
    icon: 'assets/img/batbus-icon.png',
    tags: ['Telegram Mini App', 'Maps', 'Subscriptions'],
    stats: [
      { value: 28, label: { ru: 'маршрутов', en: 'routes' } },
      { value: 578, label: { ru: 'остановок', en: 'stops' } },
      { value: 9, label: { ru: 'языков', en: 'languages' } },
      { value: 516, label: { ru: 'коммитов', en: 'commits' } },
    ],
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
    stats: [
      { value: 3, label: { ru: 'ОС', en: 'platforms' } },
      { value: 32, suffix: 'K', label: { ru: 'строк кода', en: 'lines of code' } },
      { value: 55, label: { ru: 'коммитов', en: 'commits' } },
    ],
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
    stats: [
      { value: 25, label: { ru: 'волн', en: 'waves' } },
      { value: 2, label: { ru: 'игрока в коопе', en: 'co-op players' } },
      { value: 27, suffix: 'K', label: { ru: 'строк кода', en: 'lines of code' } },
      { value: 40, label: { ru: 'коммитов', en: 'commits' } },
    ],
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
    stats: [
      { value: 'services', label: { ru: 'сервисов', en: 'services' } },
      { value: 786, label: { ru: 'коммитов в монорепо', en: 'commits in the monorepo' } },
      { value: 113, suffix: 'K', label: { ru: 'строк в монорепо', en: 'lines in the monorepo' } },
    ],
    text: {
      ru: 'Своя PM2-панель: метрики, логи, автодеплой с git-пуша и отчёты в Телеграм. На ней живёт всё вышеперечисленное.',
      en: 'My own PM2 panel: metrics, logs, auto-deploy on git push and reports to Telegram. Everything above runs on it.',
    },
  },
];


// ---------------------------------------------------------------------------

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const pick = (value, lang) => (typeof value === 'object' ? value[lang] : value);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(pointer: fine)').matches;

const ICONS = {
  arrow: '<path d="M7 17 17 7M8 7h9v9" />',
  download: '<path d="M12 3v12m0 0-5-5m5 5 5-5M4 19h16" />',
  telegram: '<path d="m21 4-3 16-6-5-3 3v-5l9-8-11 6-4-2z" />',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />',
  copy: '<rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" />',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 11v5M8 8v.01M12 16v-5m0 2a2 2 0 0 1 4 0v3" />',
  github: '<path d="M9 19c-4 1.5-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.8 2.3 5.8 2.6 5.8 2.6a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.4 9c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2v3.5" />',
};
const icon = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;

const ownCount = () => PRODUCTS.length + BOTS.length + INFRA.length;
// На Nodex живут BatBus и все боты.
const servicesCount = () => BOTS.length + 1;
const statValue = (v) => (v === 'projects' ? ownCount() : v === 'services' ? servicesCount() : v);

function metrics(list, lang, cls) {
  if (!list || !list.length) return '';
  return `<ul class="${cls}">${list.map((m) => {
    const label = m.key ? UI[lang][m.key] : m.label[lang];
    return `<li><b><span data-count="${statValue(m.value)}">${statValue(m.value)}</span>${m.suffix || ''}</b><span>${esc(label)}</span></li>`;
  }).join('')}</ul>`;
}

function renderPetStats(lang) {
  $('#pet-stats').innerHTML = metrics(PET_STATS, lang, 'pet-stats__list');
}

function renderStats(lang) {
  $('#stats').innerHTML = STATS.map((s) => {
    const n = s.value === 'own' ? ownCount() : s.value;
    return `<li><b><span data-count="${n}">${n}</span>${s.suffix || ''}</b><span>${esc(UI[lang][s.key])}</span></li>`;
  }).join('');
}

function renderRotator(lang) {
  const words = UI[lang]['hero.rotate'];
  $('#rotator').innerHTML = words.map((w, i) => `<span class="${i === 0 ? 'is-on' : ''}">${esc(w)}</span>`).join('');
  fitRotator();
}

// Ширина плашки подстраивается под текущее слово — без дыры после короткого «iOS».
function fitRotator() {
  const on = $('#rotator .is-on');
  if (on) $('#rotator').style.width = `${on.offsetWidth}px`;
}

function renderStack() {
  const row = STACK.map((t) => `<li>${esc(t)}</li>`).join('');
  // Дважды — чтобы лента крутилась бесшовно.
  $('#stack').innerHTML = `<ul>${row}</ul><ul aria-hidden="true">${row}</ul>`;
}

function renderStrengths(lang) {
  $('#strengths-list').innerHTML = STRENGTHS.map((s, i) => `
    <article class="strength spot reveal" style="--i:${i % 3}">
      <span class="strength__icon">${s.icon}</span>
      <h3>${esc(s.title[lang])}</h3>
      <p>${esc(s.text[lang])}</p>
    </article>`).join('');
}

function renderProducts(lang) {
  $('#products-list').innerHTML = PRODUCTS.map((p) => `
    <article class="product spot reveal">
      <div class="product__media">
        <img src="${p.image}" alt="${esc(pick(p.name, lang))}" loading="lazy">
      </div>
      <div class="product__body">
        <h3 class="product__name">
          ${p.icon ? `<img class="product__icon" src="${p.icon}" alt="">` : `<span class="product__emoji">${p.emoji}</span>`}
          ${esc(pick(p.name, lang))}
        </h3>
        <p>${esc(p.text[lang])}</p>
        ${metrics(p.stats, lang, 'metrics')}
        <ul class="tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
        <div class="links">
          ${p.links.map((l) => `<a href="${l.href}" target="_blank" rel="noopener">${esc(l.label)} ${icon('arrow')}</a>`).join('')}
        </div>
      </div>
    </article>`).join('');
}

function renderBots(lang) {
  $('#bots-list').innerHTML = BOTS.map((b, i) => `
    <article class="bot spot reveal" style="--i:${i % 3}">
      <div class="bot__head">
        <span class="bot__emoji">${b.emoji}</span>
        <h3>${esc(b.name)}</h3>
      </div>
      <p>${esc(b.text[lang])}</p>
      <div class="links">
        ${b.handles.map((h) => `<a href="https://t.me/${h}" target="_blank" rel="noopener">@${h} ${icon('arrow')}</a>`).join('')}
      </div>
    </article>`).join('');
}

function renderInfra(lang) {
  $('#infra-list').innerHTML = INFRA.map((n) => `
    <article class="infra spot reveal">
      <span class="infra__emoji">${n.emoji}</span>
      <div>
        <h3>${esc(n.name)}</h3>
        <p>${esc(n.text[lang])}</p>
        ${metrics(n.stats, lang, 'metrics')}
        <ul class="tags">${n.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      </div>
    </article>`).join('');
}

function renderContacts(lang) {
  const t = UI[lang];
  const items = [];
  if (CONTACTS.telegram) {
    items.push(`<a class="btn btn--primary magnetic" href="https://t.me/${CONTACTS.telegram}" target="_blank" rel="noopener">${icon('telegram')} Telegram</a>`);
  }
  if (CONTACTS.email) {
    items.push(`<span class="email">
      <a class="btn btn--ghost magnetic" href="mailto:${CONTACTS.email}">${icon('mail')} ${esc(CONTACTS.email)}</a>
      <button class="email__copy" type="button" data-copy="${esc(CONTACTS.email)}" aria-label="${esc(t['contact.copy'])}" title="${esc(t['contact.copy'])}">${icon('copy')}</button>
    </span>`);
  }
  if (CONTACTS.linkedin) {
    items.push(`<a class="btn btn--ghost magnetic" href="${CONTACTS.linkedin}" target="_blank" rel="noopener">${icon('linkedin')} LinkedIn</a>`);
  }
  items.push(`<a class="btn btn--ghost magnetic" href="${CV[lang]}" download>${icon('download')} ${esc(t['hero.cv'])}</a>`);
  $('#contact-actions').innerHTML = items.join('');

  $('#hero-write').href = CONTACTS.telegram ? `https://t.me/${CONTACTS.telegram}` : '#contact';
  $('#footer-links').innerHTML = [
    CONTACTS.telegram && `<a href="https://t.me/${CONTACTS.telegram}" target="_blank" rel="noopener" aria-label="Telegram">${icon('telegram')}</a>`,
    CONTACTS.email && `<a href="mailto:${CONTACTS.email}" aria-label="Email">${icon('mail')}</a>`,
    CONTACTS.linkedin && `<a href="${CONTACTS.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon('linkedin')}</a>`,
    CONTACTS.github && `<a href="https://github.com/${CONTACTS.github}" target="_blank" rel="noopener" aria-label="GitHub">${icon('github')}</a>`,
  ].filter(Boolean).join('');
}

function detectLang() {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (UI[fromUrl]) return fromUrl;
  try {
    const saved = localStorage.getItem('lang');
    if (UI[saved]) return saved;
  } catch {}
  // Английский — основной язык сайта, русский только по выбору.
  return 'en';
}

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  $$('[data-i18n]').forEach((el) => { el.textContent = UI[lang][el.dataset.i18n]; });
  $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  $('.lang').dataset.active = lang;
  $('#cv-link').href = CV[lang];

  renderStats(lang);
  renderRotator(lang);
  renderStrengths(lang);
  renderPetStats(lang);
  renderProducts(lang);
  renderBots(lang);
  renderInfra(lang);
  renderContacts(lang);
  observeReveals();
  initMagnetic();

  try { localStorage.setItem('lang', lang); } catch {}
}

// Появление блоков при скролле + счётчики
const io = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        e.target.querySelectorAll('[data-count]').forEach(countUp);
        io.unobserve(e.target);
      });
    }, { threshold: 0.12 })
  : null;

function observeReveals() {
  $$('.reveal:not(.is-in)').forEach((el) => {
    if (io) io.observe(el); else el.classList.add('is-in');
  });
}

function countUp(el) {
  const target = Number(el.dataset.count);
  if (reduceMotion || !target) return;
  const start = performance.now();
  const dur = 1400;
  const tick = (now) => {
    const k = Math.min(1, (now - start) / dur);
    el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(tick);
  };
  el.textContent = '0';
  requestAnimationFrame(tick);
}

// Сменяющееся слово в «Делаю приложения для …»
function initRotator() {
  if (reduceMotion) return;
  setInterval(() => {
    const spans = $('#rotator').children;
    if (!spans.length) return;
    const i = [...spans].findIndex((s) => s.classList.contains('is-on'));
    spans[i].classList.remove('is-on');
    spans[i].classList.add('is-off');
    setTimeout(() => spans[i] && spans[i].classList.remove('is-off'), 600);
    spans[(i + 1) % spans.length].classList.add('is-on');
    fitRotator();
  }, 2200);
}

// Подсветка карточек за курсором
function initSpotlight() {
  if (!finePointer) return;
  document.addEventListener('pointermove', (e) => {
    const card = e.target.closest('.spot');
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
}

// Кнопки слегка тянутся к курсору
function initMagnetic() {
  if (!finePointer || reduceMotion) return;
  $$('.magnetic:not([data-mag])').forEach((el) => {
    el.dataset.mag = '1';
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.25;
      const y = (e.clientY - r.top - r.height / 2) * 0.35;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
}

// Фото слегка наклоняется за курсором
function initTilt() {
  const photo = $('#photo');
  if (reduceMotion || !finePointer) return;
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

// Полоса прогресса прокрутки
function initProgress() {
  const bar = $('#progress');
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  };
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
}

// Копирование email
function initCopy() {
  let timer = 0;
  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-copy]');
    if (!btn) return;
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
    } catch {
      return;
    }
    const toast = $('#toast');
    toast.textContent = UI[currentLang]['contact.copied'];
    toast.classList.add('is-on');
    clearTimeout(timer);
    timer = setTimeout(() => toast.classList.remove('is-on'), 1800);
  });
}

$$('.lang button').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));

renderStack();
setLang(detectLang());
initRotator();
initSpotlight();
initTilt();
initProgress();
initCopy();
document.fonts && document.fonts.ready.then(fitRotator);
requestAnimationFrame(() => document.body.classList.add('is-ready'));
