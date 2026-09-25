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
  linkedin: 'https://www.linkedin.com/in/kiryl-tarasenka-825449175',
  github: 'kitarasenka',
};

const UI = {
  ru: {
    'nav.apps': 'Приложения',
    'nav.skills': 'Навыки',
    'nav.experience': 'Опыт',
    'nav.projects': 'Пет-проекты',
    'nav.contact': 'Связаться',
    'hero.hello': 'Привет, я Кирилл Тарасенко',
    'hero.role': 'Senior React Native Engineer',
    'hero.about': '9+ лет делаю iOS- и Android-приложения на React Native: health-tech, e‑commerce, банкинг, ed-tech. Был тимлидом, переводил нативные приложения на React Native внутри живых продуктов, выпускал в App Store и Google Play.',
    'hero.cv': 'Скачать CV',
    'hero.write': 'Написать',
    'hero.shipped': 'Что я выпустил',
    'stats.years': 'лет в разработке',
    'stats.commercial': 'коммерческих проектов',
    'stats.lead': 'в роли тимлида',
    'apps.eyebrow': 'Приложения в сторах',
    'apps.title': 'Приложения, которые я вёл как тимлид',
    'apps.lead': 'Роль, команда, что сделал лично — и где скачать.',
    'apps.did': 'Что сделал',
    'apps.team': 'Команда',
    'apps.note': 'Рейтинги и установки — из App Store и Google Play на сентябрь 2026.',
    'skills.eyebrow': 'Навыки',
    'skills.title': 'Что умею — и где это делал',
    'skills.where': 'Где',
    'skills.stack': 'Стек',
    'exp.eyebrow': 'Опыт',
    'exp.title': 'Весь коммерческий опыт',
    'exp.lead': 'Клиенты EPAM под NDA, поэтому вместо названий — отрасль. Подробности — в CV.',
    'exp.stores': 'В сторах',
    'projects.eyebrow': 'Пет-проекты',
    'projects.title': 'От идеи до продакшена — в одиночку',
    'projects.lead': 'Это то, что я делаю в свободное время: сам придумываю, проектирую, пишу, деплою и поддерживаю. BatBus работает по платной подписке.',
    'pets.projects': 'пет-проектов',
    'pets.users': 'пользователей BatBus',
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
    'meta.title': 'Кирилл Тарасенко — Senior React Native Engineer',
    'meta.description': 'Кирилл Тарасенко — Senior React Native Engineer, 9+ лет. Тимлид Pulsebit (1M+ установок), Mustread и CleverMe; 15 коммерческих iOS- и Android-приложений.',
  },
  en: {
    'nav.apps': 'Apps',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Pet projects',
    'nav.contact': 'Contact',
    'hero.hello': "Hi, I'm Kiryl Tarasenka",
    'hero.role': 'Senior React Native Engineer',
    'hero.about': 'For 9+ years I have been building iOS and Android apps in React Native: health-tech, e‑commerce, banking and ed-tech. I have led app teams, moved native apps to React Native inside live products and shipped to the App Store and Google Play.',
    'hero.cv': 'Download CV',
    'hero.write': 'Get in touch',
    'hero.shipped': 'What I have shipped',
    'stats.years': 'years in development',
    'stats.commercial': 'commercial projects',
    'stats.lead': 'as team lead',
    'apps.eyebrow': 'Apps in the stores',
    'apps.title': 'Apps I led as team lead',
    'apps.lead': 'The role, the team, what I did myself, and where to get the app.',
    'apps.did': 'What I did',
    'apps.team': 'Team',
    'apps.note': 'Ratings and installs from the App Store and Google Play, September 2026.',
    'skills.eyebrow': 'Skills',
    'skills.title': 'What I do, and where I have done it',
    'skills.where': 'Where',
    'skills.stack': 'Stack',
    'exp.eyebrow': 'Experience',
    'exp.title': 'Every commercial project',
    'exp.lead': 'EPAM clients are under NDA, so they are listed by industry. The CV has the details.',
    'exp.stores': 'In the stores',
    'projects.eyebrow': 'Pet projects',
    'projects.title': 'From idea to production, solo',
    'projects.lead': 'This is what I build in my spare time: I come up with it, design it, write it, deploy it and keep it running. BatBus runs on a paid subscription.',
    'pets.projects': 'pet projects',
    'pets.users': 'BatBus users',
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
    'meta.title': 'Kiryl Tarasenka — Senior React Native Engineer',
    'meta.description': 'Kiryl Tarasenka — Senior React Native Engineer, 9+ years. Team lead on Pulsebit (1M+ installs), Mustread and CleverMe; 15 commercial iOS and Android apps.',
  },
};

// Цифры в первом экране. commercial и lead считаются сами из EXPERIENCE.
const STATS = [
  { value: 9, suffix: '+', key: 'stats.years' },
  { value: 'commercial', key: 'stats.commercial' },
  { value: 'lead', key: 'stats.lead' },
];

// Сводка над пет-проектами. projects и services считаются сами из списков ниже.
// Строки кода и коммиты не показываем: для найма они ничего не говорят.
const PET_STATS = [
  { value: 'projects', key: 'pets.projects' },
  { value: 17, suffix: 'K+', key: 'pets.users' },
  { value: 'services', key: 'pets.services' },
];

// Главная витрина: коммерческие приложения в сторах, где я был тимлидом.
// id совпадает с проектом в EXPERIENCE. Первая цифра в stats попадает в первый экран.
// Рейтинги и установки — со страниц App Store / Google Play на 25.09.2026.
// В Google Play CleverMe и Mustread больше нет — поэтому только App Store.
const APPS = [
  {
    id: 'pulsebit',
    name: 'Pulsebit',
    aka: { ru: 'раньше — Reflectio: AI Mood Tracker', en: 'formerly Reflectio: AI Mood Tracker' },
    icon: 'assets/img/pulsebit-icon.jpg',
    kind: { ru: 'Health-tech · AI', en: 'Health-tech · AI' },
    stats: [
      { value: 1, suffix: 'M+', label: { ru: 'установок в Google Play', en: 'installs on Google Play' } },
      { value: 4.5, suffix: '★', label: { ru: 'App Store · 22K оценок', en: 'App Store · 22K ratings' } },
    ],
    did: {
      ru: [
        'Руководил командой из трёх RN-разработчиков: планирование, код-ревью, собеседования, менторинг джунов',
        'Писал core-фичи и нативные модули на Kotlin и Swift: пульс, ML-анализ настроения и стресса',
        'Сделал библиотеки, которые потом взяли другие проекты компании',
      ],
      en: [
        'Led a team of three React Native developers: planning, code review, hiring interviews, mentoring juniors',
        'Built core features and native modules in Kotlin and Swift: heart rate, ML mood and stress analysis',
        'Wrote libraries that other company apps then adopted',
      ],
    },
    tags: ['Reanimated', 'Kotlin', 'Swift', 'ML'],
    stores: {
      appStore: 'https://apps.apple.com/us/app/reflectio-ai-mood-tracker/id1581114201',
      googlePlay: 'https://play.google.com/store/apps/details?id=com.reflectio.io&hl=en_US&gl=US',
    },
  },
  {
    id: 'mustread',
    name: 'Mustread',
    aka: { ru: 'сейчас — Horror Games & Chat Stories', en: 'now Horror Games & Chat Stories' },
    icon: 'assets/img/mustread-icon.jpg',
    kind: { ru: 'Истории в чате', en: 'Chat stories' },
    stats: [
      { value: 4.5, suffix: '★', label: { ru: 'App Store · 41K оценок', en: 'App Store · 41K ratings' } },
    ],
    did: {
      ru: [
        'Первая роль тимлида: планирование и оценка спринтов для команды из трёх разработчиков',
        'Архитектура, аналитика и встроенные покупки',
        'Релизы в App Store и Google Play',
      ],
      en: [
        'My first team lead role: sprint planning and estimation for a team of three developers',
        'Architecture, analytics and in-app purchases',
        'Releases to the App Store and Google Play',
      ],
    },
    tags: ['Redux', 'Firebase', 'Billing'],
    stores: {
      appStore: 'https://apps.apple.com/us/app/mustread-scary-chat-stories/id1382123330',
    },
  },
  {
    id: 'cleverme',
    name: 'CleverMe',
    aka: { ru: 'Brain training', en: 'Brain training' },
    icon: 'assets/img/cleverme-icon.jpg',
    kind: { ru: 'Ed-tech · игры', en: 'Ed-tech · games' },
    stats: [
      { value: 4.4, suffix: '★', label: { ru: 'рейтинг в App Store', en: 'App Store rating' } },
    ],
    did: {
      ru: [
        'Руководил командой и заложил архитектуру приложения на MobX',
        'Связал React Native с Unity, чтобы мини-игры работали внутри приложения',
        'Сам написал одну из мини-игр на Unity',
      ],
      en: [
        'Led the team and designed the app architecture on MobX',
        'Connected React Native with Unity so the mini-games run inside the app',
        'Built one of the mini-games in Unity myself',
      ],
    },
    tags: ['MobX', 'Unity', 'Firebase'],
    stores: {
      appStore: 'https://apps.apple.com/us/app/cleverme-brain-training/id1524003892',
    },
  },
];

// Навыки с доказательствами: where — id проектов из EXPERIENCE или PRODUCTS.
const SKILLS = [
  {
    icon: '👥',
    title: { ru: 'Лидерство', en: 'Team leadership' },
    text: {
      ru: 'Тимлид на четырёх приложениях: архитектура, планирование спринтов, код-ревью, собеседования, менторинг джунов. Замещал лида в большой ретейл-программе.',
      en: 'Team lead on four apps: architecture, sprint planning, code review, hiring interviews and mentoring juniors. Stood in for the lead on a large retail program.',
    },
    where: ['pulsebit', 'mustread', 'cleverme', 'faces', 'retail'],
  },
  {
    icon: '🧭',
    title: { ru: 'Архитектура и миграции', en: 'Architecture and migrations' },
    text: {
      ru: 'Переводил нативные приложения на React Native внутри живых продуктов (brownfield), работал с дизайн-системой и white label, переписывал legacy, строил модульную архитектуру.',
      en: 'Moved native apps to React Native inside live products (brownfield), worked with a design system and white label, rewrote legacy code, built a modular architecture.',
    },
    where: ['retail', 'fashion', 'sqvr', 'dbo-managers'],
  },
  {
    icon: '🧩',
    title: { ru: 'Нативный iOS и Android', en: 'Native iOS and Android' },
    text: {
      ru: 'Нативные модули и виджеты на Swift, Objective-C и Kotlin, подключённые к React Native.',
      en: 'Native modules and widgets in Swift, Objective-C and Kotlin, bridged into React Native.',
    },
    where: ['pulsebit', 'widgetio', 'habio'],
  },
  {
    icon: '🎮',
    title: { ru: 'React Native + Unity', en: 'React Native + Unity' },
    text: {
      ru: 'Встраивал Unity-игры в React Native-приложения, делал мост между ними, сам написал игру на Unity.',
      en: 'Embedded Unity games in React Native apps, built the bridge between them and wrote a Unity game myself.',
    },
    where: ['cleverme', 'mindmelt'],
  },
  {
    icon: '🧠',
    title: { ru: 'ML в мобильных приложениях', en: 'ML in mobile apps' },
    text: {
      ru: 'Определение настроения и стресса по записям и пульсу пользователя, перенос лица с фото на видео через Firebase ML.',
      en: 'Mood and stress detection from the user’s reflections and heart rate; putting a face from a photo onto video with Firebase ML.',
    },
    where: ['pulsebit', 'faces'],
  },
  {
    icon: '💳',
    title: { ru: 'Платежи, подписки, аналитика', en: 'Payments, subscriptions, analytics' },
    text: {
      ru: 'Платёжные шлюзы, встроенные покупки и подписки, аналитика (Firebase, Branch, AppsFlyer, UXCam), релизы в оба стора.',
      en: 'Payment gateways, in-app purchases and subscriptions, analytics (Firebase, Branch, AppsFlyer, UXCam), releases to both stores.',
    },
    where: ['hospitality', 'mustread', 'habio', 'synctuition', 'batbus'],
  },
  {
    icon: '♿',
    title: { ru: 'Доступность и UI', en: 'Accessibility and UI' },
    text: {
      ru: 'Скринридеры, клавиатура, динамический шрифт, тёмная и светлая темы. Библиотеки компонентов и плавные анимации на Reanimated и Lottie.',
      en: 'Screen readers, keyboard navigation, dynamic type, dark and light themes. Component libraries and smooth animations with Reanimated and Lottie.',
    },
    where: ['fashion', 'habio', 'pulsebit'],
  },
  {
    icon: '🤖',
    title: { ru: 'AI-native разработка', en: 'AI-native development' },
    text: {
      ru: 'Claude Code и GitHub Copilot — в ежедневной работе. С ними же в одиночку делаю свои продукты: от Telegram Mini App до десктопного Git-клиента.',
      en: 'Claude Code and GitHub Copilot are part of my daily work. With them I build my own products solo, from a Telegram Mini App to a desktop Git client.',
    },
    where: ['hospitality', 'batbus', 'twig'],
  },
];

const STACK = [
  'React Native', 'TypeScript', 'React', 'Redux', 'MobX', 'Zustand', 'React Query',
  'Reanimated', 'React Navigation', 'GraphQL', 'Apollo', 'REST', 'WebSockets', 'Firebase',
  'Node.js', 'Next.js', 'Electron', 'Swift', 'Kotlin', 'Objective-C', 'Unity', 'Fastlane',
  'Jest', 'Detox', 'Telegram Mini Apps', 'Claude Code',
];

// Весь коммерческий опыт, от новых к старым. Длительность — в месяцах.
// lead: true — был тимлидом (считается в первом экране).
const EXPERIENCE = [
  {
    company: 'EPAM Systems',
    period: '2023 – 2026',
    projects: [
      {
        id: 'fashion',
        name: { ru: 'Fashion e‑commerce', en: 'Fashion e‑commerce' },
        role: { ru: 'Инженер', en: 'Engineer' },
        months: 3,
        what: { ru: 'Европейская платформа моды и lifestyle-товаров.', en: 'A European fashion and lifestyle platform.' },
        did: {
          ru: 'Вёл перенос экрана согласий из нативного кода в новое React Native-приложение (brownfield). Доступность: скринридеры, клавиатура, динамический шрифт, тёмная и светлая темы.',
          en: 'Led the move of the consent screen from native code into the new React Native app (brownfield). Accessibility: screen readers, keyboard navigation, dynamic type, dark and light themes.',
        },
        tags: ['TypeScript', 'Brownfield', 'Accessibility'],
      },
      {
        id: 'hospitality',
        name: { ru: 'Отели и развлечения', en: 'Hotels and attractions' },
        role: { ru: 'Разработчик', en: 'Developer' },
        months: 15,
        what: { ru: 'Приложение для отелей и развлечений технологической компании из ОАЭ.', en: 'An app for hotels and attractions, built for a UAE technology company.' },
        did: {
          ru: 'Сделал оплату через шлюз Telr, сторис, рилсы с офферами и диплинки, ускорил списки. Проводил демо и собирал обратную связь заказчика.',
          en: 'Built payments through the Telr gateway, stories, reels with offers and deep links, and sped up lists. Ran demos and gathered client feedback.',
        },
        tags: ['Zustand', 'React Query', 'Firebase', 'Payments'],
      },
      {
        id: 'retail',
        name: { ru: 'Ретейл: переход на React Native', en: 'Retail re-platforming' },
        role: { ru: 'Ключевой инженер, замещал тимлида', en: 'Key engineer, acting team lead' },
        months: 14,
        what: { ru: 'Программа для сети супермаркетов в Европе: перевод нативных приложений на React Native.', en: 'A program for a European supermarket group: moving its native apps to React Native.' },
        did: {
          ru: 'Делал фичи на новом стеке: дизайн-система, white label, feature toggles и A/B-тесты. Решал архитектурные задачи по производительности, замещал тимлида.',
          en: 'Built features on the new stack: design system, white label, feature toggles and A/B tests. Solved architecture and performance problems and stood in for the team lead.',
        },
        tags: ['Brownfield', 'Design system', 'White label', 'A/B'],
      },
    ],
  },
  {
    company: 'SQVR',
    period: '2023',
    projects: [
      {
        id: 'sqvr',
        name: 'SQVR',
        role: { ru: 'Senior', en: 'Senior' },
        months: 4,
        what: { ru: 'Управление многоквартирными домами и посёлками: жители, управляющие, подрядчики.', en: 'Property management for apartment buildings and villages: residents, managers, contractors.' },
        did: {
          ru: 'Выбирал архитектуру, переписывал legacy-код, делал код-ревью, работал напрямую с заказчиком и дизайнером.',
          en: 'Chose the architecture, rewrote legacy code, reviewed code and worked directly with the client and the designer.',
        },
        tags: ['MobX', 'GraphQL', 'socket.io', 'Fastlane'],
      },
    ],
  },
  {
    company: 'Finstek',
    period: '2022 – 2023',
    projects: [
      {
        id: 'finstek',
        name: { ru: 'Торговая платформа', en: 'Trading platform' },
        role: { ru: 'Senior', en: 'Senior' },
        months: 3,
        what: { ru: 'Мобильное приложение торговой платформы, команда 20+ человек.', en: 'The mobile app of a trading platform, a team of 20+.' },
        did: {
          ru: 'Настраивал iOS- и Android-сборки, обрабатывал потоковые данные с сервера через socket.io, работал с бизнес-аналитиками.',
          en: 'Set up the iOS and Android builds, handled real-time server data over socket.io and worked with business analysts.',
        },
        tags: ['MobX', 'socket.io'],
      },
    ],
  },
  {
    company: 'Wowmaking',
    period: '2019 – 2022',
    projects: [
      {
        id: 'pulsebit',
        name: 'Pulsebit (Reflectio)',
        role: { ru: 'Тимлид', en: 'Team lead' },
        lead: true,
        months: 15,
        what: { ru: 'Трекер настроения и стресса по записям пользователя и пульсу.', en: 'A mood and stress tracker based on the user’s reflections and heart rate.' },
        did: {
          ru: 'Руководил командой, писал core-фичи и нативные модули на Kotlin и Swift, делал библиотеки для других проектов, проводил собеседования и менторил джунов.',
          en: 'Led the team, built core features and native modules in Kotlin and Swift, wrote libraries for other projects, interviewed candidates and mentored juniors.',
        },
        tags: ['Reanimated', 'Kotlin', 'Swift', 'ML'],
      },
      {
        id: 'habio',
        name: 'Habio',
        role: { ru: 'Senior', en: 'Senior' },
        months: 3,
        what: { ru: 'Трекер привычек.', en: 'A habit tracker.' },
        did: {
          ru: 'Сделал библиотеку компонентов, встроил виджеты в приложение и настроил биллинг.',
          en: 'Built the component library, embedded widgets into the app and set up billing.',
        },
        tags: ['Reanimated', 'Lottie', 'Detox'],
      },
      {
        id: 'widgetio',
        name: 'Widgetio',
        role: { ru: 'Senior', en: 'Senior' },
        months: 2,
        what: { ru: 'Кастомные виджеты для iOS 14+.', en: 'Custom widgets for iOS 14+.' },
        did: {
          ru: 'Написал нативные виджеты на Swift и Objective-C.',
          en: 'Wrote the native widgets in Swift and Objective-C.',
        },
        tags: ['WidgetKit', 'Swift', 'Objective-C'],
      },
      {
        id: 'cleverme',
        name: 'CleverMe',
        role: { ru: 'Тимлид', en: 'Team lead' },
        lead: true,
        months: 4,
        what: { ru: 'Мини-игры для тренировки мозга.', en: 'Brain-training mini-games.' },
        did: {
          ru: 'Руководил командой, заложил архитектуру, связал React Native с Unity и сам сделал игру на Unity.',
          en: 'Led the team, designed the architecture, connected React Native with Unity and built a Unity game myself.',
        },
        tags: ['MobX', 'Unity'],
      },
      {
        id: 'faces',
        name: 'Faces',
        role: { ru: 'Тимлид', en: 'Team lead' },
        lead: true,
        months: 3,
        what: { ru: 'Лицо с фото на видео — как маски в TikTok.', en: 'A face from a photo on a video, like TikTok masks.' },
        did: {
          ru: 'Руководил командой, встроил ML-модели через Firebase ML, переделывал библиотеки под требования бизнеса.',
          en: 'Led the team, integrated ML models through Firebase ML and reworked libraries to fit business needs.',
        },
        tags: ['Firebase ML', 'Redux'],
      },
      {
        id: 'mindmelt',
        name: 'MindMelt',
        role: { ru: 'Senior', en: 'Senior' },
        months: 2,
        what: { ru: 'Антистресс-игрушки: слаймы и поп-иты.', en: 'Anti-stress toys: slimes and pop-its.' },
        did: {
          ru: 'Спроектировал архитектуру, встроил Unity в React Native, онбордил нового разработчика.',
          en: 'Designed the architecture, embedded Unity into React Native and onboarded a new developer.',
        },
        tags: ['Unity', 'react-native-unity'],
      },
      {
        id: 'mustread',
        name: 'Mustread',
        role: { ru: 'Тимлид', en: 'Team lead' },
        lead: true,
        months: 8,
        what: { ru: 'Истории от пользователей в формате чата.', en: 'User stories told in a chat format.' },
        did: {
          ru: 'Первая роль тимлида: планирование и оценка спринтов, архитектура, аналитика, биллинг, релизы в оба стора.',
          en: 'My first team lead role: sprint planning and estimation, architecture, analytics, billing, releases to both stores.',
        },
        tags: ['Redux', 'Firebase'],
      },
    ],
  },
  {
    company: 'Qulix Systems',
    period: '2017 – 2019',
    projects: [
      {
        id: 'synctuition',
        name: 'Synctuition',
        role: { ru: 'Middle', en: 'Middle' },
        months: 6,
        what: { ru: 'Медитации с уникальными аудиотреками.', en: 'Meditation with unique audio tracks.' },
        did: {
          ru: 'Выпускал приложение в App Store и Google Play, настраивал покупки и аналитику (Branch, AppsFlyer, UXCam), проводил демо заказчику на английском.',
          en: 'Released the app to the App Store and Google Play, set up purchases and analytics (Branch, AppsFlyer, UXCam), ran demos for the client in English.',
        },
        tags: ['Redux', 'Saga', 'Analytics'],
      },
      {
        id: 'dbo-managers',
        name: { ru: 'Банк: приложение для менеджеров', en: 'Bank: app for managers' },
        role: { ru: 'Middle', en: 'Middle' },
        months: 12,
        what: { ru: 'iPad-приложение для менеджеров банка.', en: 'An iPad app for bank managers.' },
        did: {
          ru: 'Модульная архитектура: независимые модули дашборда собирались в одно приложение. Четыре команды, около 50 человек.',
          en: 'A modular architecture: independent dashboard modules combined into one app. Four teams, about 50 people.',
        },
        tags: ['Modular', 'iPad'],
      },
      {
        id: 'dbo-retail',
        name: { ru: 'Мобильный банк', en: 'Mobile banking' },
        role: { ru: 'Junior', en: 'Junior' },
        months: 8,
        what: { ru: 'Мобильный банк для частных клиентов.', en: 'Mobile banking for retail customers.' },
        did: {
          ru: 'Первый опыт с React Native и Scrum: фичи по требованиям, оценка задач, работа с аналитиками.',
          en: 'My first React Native and Scrum project: features to spec, estimates, work with analysts.',
        },
        tags: ['Scrum'],
      },
    ],
  },
];

// showcase: true — продукт попадает в «Что я выпустил» в первом экране (с первой цифрой из stats).
const PRODUCTS = [
  {
    id: 'batbus',
    showcase: true,
    emoji: '🚌',
    name: 'BatBus',
    image: 'assets/img/batbus.jpg',
    imagePosition: 'center',
    icon: 'assets/img/batbus-icon.png',
    tags: ['Telegram Mini App', 'Maps', 'Subscriptions'],
    stats: [
      // Пользователи, MAU/WAU и сессии — из админки BatBus (экран «Пользователи»), на 25.09.2026.
      // null — метрика не показывается.
      { value: 17186, label: { ru: 'пользователей всего', en: 'users all time' } },
      { value: 7585, label: { ru: 'пользователей в месяц (MAU)', en: 'monthly users (MAU)' } },
      { value: 2329, label: { ru: 'пользователей в неделю (WAU)', en: 'weekly users (WAU)' } },
      { value: 30037, label: { ru: 'сессий за 30 дней', en: 'sessions in 30 days' } },
      { value: 9, label: { ru: 'языков', en: 'languages' } },
      { value: 1.1, suffix: { ru: '\u00a0с', en: 's' }, label: { ru: 'средний запуск', en: 'avg launch time' } },
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
    id: 'twig',
    emoji: '🌱',
    name: 'Twig',
    image: 'assets/img/twig.webp',
    icon: 'assets/img/twig-icon.png',
    tags: ['Electron', 'React', 'macOS · Windows · Linux'],
    stats: [
      { value: 3, label: { ru: 'ОС', en: 'platforms' } },
    ],
    links: [{ label: 'kitarasenka.github.io/twig', href: 'https://kitarasenka.github.io/twig' }],
    text: {
      ru: 'Десктопный Git-клиент: граф коммитов в центре, консоль со всеми реальными git-командами.',
      en: 'A desktop Git client: the commit graph front and centre, plus a console showing every real git command it runs.',
    },
  },
  {
    id: 'garden',
    emoji: '🌳',
    name: { ru: 'Сад-призрак', en: 'Ghost Garden' },
    image: 'assets/img/garden.jpg',
    tags: ['Tower defense', 'Browser', 'Co-op'],
    stats: [
      { value: 25, label: { ru: 'волн', en: 'waves' } },
      { value: 2, label: { ru: 'игрока в коопе', en: 'co-op players' } },
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
  apple: '<path d="M12 7c-1-1-2.4-1.5-3.8-1.2C5.6 6.3 4 8.7 4 11.5c0 4 2.8 9.5 5.3 9.5 1 0 1.7-.6 2.7-.6s1.7.6 2.7.6c2.5 0 5.3-5.5 5.3-9.5 0-2.8-1.6-5.2-4.2-5.7-1.4-.3-2.8.2-3.8 1.2zM12 7c0-2 1-3.5 3-4" />',
  play: '<path d="M6 3.5v17l14-8.5z" />',
  github: '<path d="M9 19c-4 1.5-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.8 2.3 5.8 2.6 5.8 2.6a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.4 9c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2v3.5" />',
};
const icon = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;

const ownCount = () => PRODUCTS.length + BOTS.length + INFRA.length;
// На Nodex живут BatBus и все боты.
const servicesCount = () => BOTS.length + 1;
const allJobs = () => EXPERIENCE.flatMap((c) => c.projects);
const STAT_COUNTERS = {
  projects: ownCount,
  services: servicesCount,
  commercial: () => allJobs().length,
  lead: () => allJobs().filter((p) => p.lead).length,
};
const statValue = (v) => (STAT_COUNTERS[v] ? STAT_COUNTERS[v]() : v);

const decimalsOf = (n) => (String(n).split('.')[1] || '').length;
const formatNum = (n, lang, d = decimalsOf(n)) =>
  Number(n).toLocaleString(lang === 'ru' ? 'ru-RU' : 'en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
const months = (n, lang) => (lang === 'ru' ? `${n} мес.` : `${n} mo`);

// Значение метрики: число со счётчиком + суффикс.
function metricValue(m, lang) {
  const n = statValue(m.value);
  const suffix = typeof m.suffix === 'object' ? m.suffix[lang] : (m.suffix || '');
  return `<span data-count="${n}">${formatNum(n, lang)}</span>${esc(suffix)}`;
}

function metricItems(list, lang) {
  return (list || []).filter((m) => m.value != null).map((m) => {
    const label = m.key ? UI[lang][m.key] : m.label[lang];
    return `<li><b>${metricValue(m, lang)}</b><span>${esc(label)}</span></li>`;
  }).join('');
}

function metrics(list, lang, cls) {
  const items = metricItems(list, lang);
  return items ? `<ul class="${cls}">${items}</ul>` : '';
}

// Куда ведёт упоминание проекта: на карточку опыта или пет-проекта.
function projectRef(id, lang) {
  const job = allJobs().find((p) => p.id === id);
  if (job) return { name: pick(job.name, lang), href: `#exp-${id}` };
  const prod = PRODUCTS.find((p) => p.id === id);
  if (prod) return { name: pick(prod.name, lang), href: `#prod-${id}` };
  return null;
}

function storeLinks(stores) {
  return [
    stores.appStore && `<a class="store" href="${stores.appStore}" target="_blank" rel="noopener">${icon('apple')} App Store</a>`,
    stores.googlePlay && `<a class="store" href="${stores.googlePlay}" target="_blank" rel="noopener">${icon('play')} Google Play</a>`,
  ].filter(Boolean).join('');
}

function renderStats(lang) {
  $('#stats').innerHTML = metricItems(STATS, lang);
}

function renderShowcase(lang) {
  const items = [
    ...APPS.map((a) => ({ icon: a.icon, name: a.name, kind: a.kind[lang], stat: a.stats[0], href: `#app-${a.id}` })),
    ...PRODUCTS.filter((p) => p.showcase).map((p) => ({
      icon: p.icon, name: pick(p.name, lang), kind: p.tags[0], stat: p.stats[0], href: `#prod-${p.id}`,
    })),
  ];
  $('#showcase').innerHTML = items.map((it) => `
    <li><a href="${it.href}">
      <img src="${it.icon}" alt="" loading="lazy">
      <span class="showcase__name"><b>${esc(it.name)}</b><small>${esc(it.kind)}</small></span>
      <span class="showcase__stat"><b>${metricValue(it.stat, lang)}</b><small>${esc(it.stat.label[lang])}</small></span>
    </a></li>`).join('');
}

function renderApps(lang) {
  const t = UI[lang];
  $('#apps-list').innerHTML = APPS.map((a, i) => {
    const job = allJobs().find((p) => p.id === a.id);
    return `
    <article class="app spot reveal" id="app-${a.id}" style="--i:${i}">
      <div class="app__head">
        <img class="app__icon" src="${a.icon}" alt="">
        <div>
          <h3>${esc(a.name)}</h3>
          <p class="app__aka">${esc(a.aka[lang])}</p>
        </div>
      </div>
      <ul class="chips">
        <li class="chip chip--accent">${esc(job.role[lang])}</li>
        <li class="chip">${months(job.months, lang)}</li>
        <li class="chip">${esc(a.kind[lang])}</li>
      </ul>
      ${metrics(a.stats, lang, 'metrics')}
      <p class="app__label">${esc(t['apps.did'])}</p>
      <ul class="did">${a.did[lang].map((d) => `<li>${esc(d)}</li>`).join('')}</ul>
      <ul class="tags">${a.tags.map((tag) => `<li>${esc(tag)}</li>`).join('')}</ul>
      <div class="stores">${storeLinks(a.stores)}</div>
    </article>`;
  }).join('');
}

function renderSkills(lang) {
  const t = UI[lang];
  $('#skills-list').innerHTML = SKILLS.map((s, i) => `
    <article class="skill spot reveal" style="--i:${i % 2}">
      <span class="skill__icon">${s.icon}</span>
      <div>
        <h3>${esc(s.title[lang])}</h3>
        <p>${esc(s.text[lang])}</p>
        <p class="skill__where"><span>${esc(t['skills.where'])}:</span>
          ${s.where.map((id) => projectRef(id, lang)).filter(Boolean)
            .map((r) => `<a href="${r.href}">${esc(r.name)}</a>`).join('')}
        </p>
      </div>
    </article>`).join('');
  $('#stack').innerHTML = STACK.map((s) => `<li>${esc(s)}</li>`).join('');
}

function renderExperience(lang) {
  const t = UI[lang];
  $('#exp-list').innerHTML = EXPERIENCE.map((c) => `
    <section class="exp__company reveal">
      <header class="exp__co">
        <h3>${esc(c.company)}</h3>
        <span>${esc(c.period)}</span>
      </header>
      <ol class="exp__list">
        ${c.projects.map((p) => {
          const app = APPS.find((a) => a.id === p.id);
          return `
          <li class="exp__item" id="exp-${p.id}">
            <div class="exp__top">
              <h4>${esc(pick(p.name, lang))}</h4>
              <span class="chip${p.lead ? ' chip--accent' : ''}">${esc(p.role[lang])}</span>
              <span class="exp__dur">${months(p.months, lang)}</span>
            </div>
            <p class="exp__what">${esc(p.what[lang])}</p>
            <p>${esc(p.did[lang])}</p>
            <div class="exp__foot">
              <ul class="tags">${p.tags.map((tag) => `<li>${esc(tag)}</li>`).join('')}</ul>
              ${app ? `<a class="exp__app" href="#app-${app.id}">${esc(t['exp.stores'])} ↑</a>` : ''}
            </div>
          </li>`;
        }).join('')}
      </ol>
    </section>`).join('');
}

function renderPetStats(lang) {
  $('#pet-stats').innerHTML = metrics(PET_STATS, lang, 'pet-stats__list');
}

function renderProducts(lang) {
  $('#products-list').innerHTML = PRODUCTS.map((p) => `
    <article class="product spot reveal" id="prod-${p.id}">
      <div class="product__media"${p.imagePosition ? ` style="--pos:${p.imagePosition}"` : ''}>
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

const SITE_URL = 'https://kitarasenka.github.io/cv/';

// Заголовок, description и canonical под язык: поисковик рендерит ?lang=ru отдельной страницей.
function setMeta(lang) {
  const t = UI[lang];
  document.title = t['meta.title'];
  $('meta[name="description"]').content = t['meta.description'];
  let canonical = $('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.append(canonical);
  }
  canonical.href = lang === 'en' ? SITE_URL : `${SITE_URL}?lang=${lang}`;
}

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  setMeta(lang);
  $$('[data-i18n]').forEach((el) => { el.textContent = UI[lang][el.dataset.i18n]; });
  $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  $('.lang').dataset.active = lang;
  $('#cv-link').href = CV[lang];

  renderStats(lang);
  renderShowcase(lang);
  renderApps(lang);
  renderSkills(lang);
  renderExperience(lang);
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
  const d = decimalsOf(el.dataset.count);
  const start = performance.now();
  const dur = 1400;
  const tick = (now) => {
    const k = Math.min(1, (now - start) / dur);
    const v = target * (1 - Math.pow(1 - k, 3));
    el.textContent = formatNum(k < 1 ? v : target, currentLang, d);
    if (k < 1) requestAnimationFrame(tick);
  };
  el.textContent = formatNum(0, currentLang, d);
  requestAnimationFrame(tick);
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

$$('.lang button').forEach((b) => b.addEventListener('click', () => {
  setLang(b.dataset.lang);
  // Ссылка из адресной строки открывается на том же языке.
  const url = new URL(location.href);
  if (b.dataset.lang === 'en') url.searchParams.delete('lang'); else url.searchParams.set('lang', b.dataset.lang);
  history.replaceState(null, '', url);
}));

setLang(detectLang());
initSpotlight();
initProgress();
initCopy();
requestAnimationFrame(() => document.body.classList.add('is-ready'));
