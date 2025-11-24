import { Project, Skill, SocialLink, EducationItem, Invention, LocalizedString } from './types';
import { Github, Linkedin, Mail } from 'lucide-react';

export const PORTFOLIO_OWNER = "Mathys QUIER";

// --- TRANSLATIONS UI ---
export const UI_TRANSLATIONS = {
    nav: {
        home: { fr: "Accueil", en: "Home", es: "Inicio", de: "Start", jp: "ホーム", cn: "首页" },
        about: { fr: "À Propos", en: "About", es: "Sobre mí", de: "Über", jp: "私について", cn: "关于" },
        education: { fr: "Parcours", en: "Education", es: "Educación", de: "Bildung", jp: "教育", cn: "教育" },
        projects: { fr: "Projets", en: "Projects", es: "Proyectos", de: "Projekte", jp: "プロジェクト", cn: "项目" },
        skills: { fr: "Skills", en: "Skills", es: "Habilidades", de: "Fähigkeiten", jp: "スキル", cn: "技能" },
        contact: { fr: "Contact", en: "Contact", es: "Contacto", de: "Kontakt", jp: "連絡先", cn: "联系" },
        labs: { fr: "Labs", en: "Labs", es: "Laboratorio", de: "Labor", jp: "ラボ", cn: "实验室" }
    },
    hero: {
        welcome: { fr: "Bienvenue dans mon univers", en: "Welcome to my universe", es: "Bienvenido a mi universo", de: "Willkommen in meinem Universum", jp: "ようこそ", cn: "欢迎" },
        cta: { fr: "Explorer les Projets", en: "Explore Projects", es: "Explorar Proyectos", de: "Projekte erkunden", jp: "プロジェクトを見る", cn: "浏览项目" },
        scroll: { fr: "Défiler", en: "Scroll", es: "Desplazarse", de: "Scrollen", jp: "スクロール", cn: "滚动" }
    },
    about: {
        title_small: { fr: "À Propos", en: "About Me", es: "Sobre Mí", de: "Über Mich", jp: "私について", cn: "关于我" },
        title_big: { fr: "L'architecte de votre", en: "The architect of your", es: "El arquitecto de su", de: "Der Architekt Ihrer", jp: "あなたの", cn: "您的" },
        title_colored: { fr: "Vision Numérique", en: "Digital Vision", es: "Visión Digital", de: "Digitalen Vision", jp: "デジタルビジョン", cn: "数字愿景" },
        quote: { fr: "Le code est la poésie d'un monde logique.", en: "Code is the poetry of a logical world.", es: "El código es la poesía de un mundo lógico.", de: "Code ist die Poesie einer logischen Welt.", jp: "コードは論理的な世界の詩である。", cn: "代码是逻辑世界的诗。" },
        available: { fr: "Disponible", en: "Available", es: "Disponible", de: "Verfügbar", jp: "利用可能", cn: "可用" }
    },
    education: {
        subtitle: { fr: "Chronologie des données", en: "Data Timeline", es: "Cronología de datos", de: "Daten-Zeitlinie", jp: "データタイムライン", cn: "数据时间轴" },
        title: { fr: "PARCOURS", en: "ACADEMIC", es: "TRAYECTORIA", de: "AKADEMISCHER", jp: "学術的", cn: "学术" },
        title_colored: { fr: "ACADÉMIQUE", en: "JOURNEY", es: "ACADÉMICA", de: "WERDEGANG", jp: "経歴", cn: "历程" },
        close: { fr: "Fermer le dossier", en: "Close File", es: "Cerrar Archivo", de: "Datei schließen", jp: "ファイルを閉じる", cn: "关闭文件" }
    },
    projects: {
        title: { fr: "Projets", en: "Recent", es: "Proyectos", de: "Aktuelle", jp: "最近の", cn: "近期" },
        title_colored: { fr: "Récents", en: "Projects", es: "Recientes", de: "Projekte", jp: "プロジェクト", cn: "项目" },
        subtitle: { fr: "Une sélection de mes travaux les plus ambitieux.", en: "A selection of my most ambitious work.", es: "Una selección de mis trabajos más ambiciosos.", de: "Eine Auswahl meiner ehrgeizigsten Arbeiten.", jp: "最も野心的な作品のセレクション。", cn: "我最雄心勃勃的作品精選。" },
        all: { fr: "Tous", en: "All", es: "Todos", de: "Alle", jp: "すべて", cn: "全部" }
    },
    skills: {
        title: { fr: "Arsenal", en: "Technical", es: "Arsenal", de: "Technisches", jp: "技術", cn: "技术" },
        title_colored: { fr: "Technique", en: "Arsenal", es: "Técnico", de: "Arsenal", jp: "アーセナル", cn: "武库" },
        subtitle: { fr: "Les outils et technologies que je maîtrise.", en: "The tools and technologies I master.", es: "Las herramientas y tecnologías que domino.", de: "Die Werkzeuge und Technologien, die ich beherrsche.", jp: "私が習得しているツールと技術。", cn: "我掌握的工具和技术。" },
        mastery: { fr: "Maîtrise", en: "Mastery", es: "Dominio", de: "Beherrschung", jp: "習熟度", cn: "熟练度" },
        learning: { fr: "En apprentissage", en: "Learning", es: "Aprendiendo", de: "Lernen", jp: "学習中", cn: "学习中" },
        warning_title: { fr: "Attention : Initialisation en cours", en: "Warning: Initialization in progress", es: "Atención: Inicialización en curso", de: "Warnung: Initialisierung läuft", jp: "警告：初期化中", cn: "警告：正在初始化" },
        warning_text: { fr: "Certains modules neuronaux sont encore en phase d'apprentissage intensif.", en: "Some neural modules are still in intensive learning phase.", es: "Algunos módulos neuronales están aún en fase de aprendizaje intensivo.", de: "Einige neuronale Module befinden sich noch in der intensiven Lernphase.", jp: "一部のニューラルモジュールはまだ集中的な学習段階にあります。", cn: "某些神经模块仍处于强化学习阶段。" }
    },
    labs: {
        title: { fr: "DEV", en: "PERSONAL", es: "DESARROLLO", de: "PERSÖNLICHE", jp: "個人", cn: "个人" },
        title_colored: { fr: "PERSONNEL", en: "DEV", es: "PERSONAL", de: "ENTWICKLUNG", jp: "開発", cn: "开发" },
        subtitle: { fr: "Mes expérimentations et prototypes.", en: "My experiments and prototypes.", es: "Mis experimentos y prototipos.", de: "Meine Experimente und Prototypen.", jp: "私の実験とプロトタイプ。", cn: "我的实验和原型。" },
        view_doc: { fr: "Voir la documentation", en: "View Documentation", es: "Ver documentación", de: "Dokumentation ansehen", jp: "ドキュメントを見る", cn: "查看文档" },
        features: { fr: "Fonctionnalités", en: "Features", es: "Características", de: "Funktionen", jp: "特徴", cn: "功能" },
        stack: { fr: "Stack Technique", en: "Tech Stack", es: "Stack Técnico", de: "Tech Stack", jp: "技術スタック", cn: "技术栈" },
        desc: { fr: "Description du projet", en: "Project Description", es: "Descripción del proyecto", de: "Projektbeschreibung", jp: "プロジェクトの説明", cn: "项目描述" }
    },
    contact: {
        title: { fr: "Démarrons un", en: "Let's Start a", es: "Iniciemos un", de: "Starten wir ein", jp: "始めましょう", cn: "开始一个" },
        title_colored: { fr: "Projet", en: "Project", es: "Proyecto", de: "Projekt", jp: "プロジェクト", cn: "项目" },
        subtitle: { fr: "Vous avez une idée ? Je suis là.", en: "Have an idea? I'm here.", es: "¿Tienes una idea? Estoy aquí.", de: "Haben Sie eine Idee? Ich bin hier.", jp: "アイデアがありますか？私はここにいます。", cn: "有想法吗？我在这里。" },
        name: { fr: "Nom", en: "Name", es: "Nombre", de: "Name", jp: "名前", cn: "姓名" },
        email: { fr: "Email", en: "Email", es: "Correo", de: "E-Mail", jp: "メール", cn: "邮箱" },
        message: { fr: "Message", en: "Message", es: "Mensaje", de: "Nachricht", jp: "メッセージ", cn: "留言" },
        send: { fr: "Envoyer le message", en: "Send Message", es: "Enviar mensaje", de: "Nachricht senden", jp: "メッセージを送信", cn: "发送消息" },
        sending: { fr: "Envoi...", en: "Sending...", es: "Enviando...", de: "Senden...", jp: "送信中...", cn: "发送中..." },
        success: { fr: "Redirection Mail...", en: "Redirecting...", es: "Redirigiendo...", de: "Umleiten...", jp: "リダイレクト...", cn: "重定向..." },
        error: { fr: "Erreur", en: "Error", es: "Error", de: "Fehler", jp: "エラー", cn: "错误" }
    }
};

export const HERO_TAGLINE: LocalizedString = {
    fr: "Créateur d'expériences numériques immersives.",
    en: "Creator of immersive digital experiences.",
    es: "Creador de experiencias digitales inmersivas.",
    de: "Schöpfer immersiver digitaler Erlebnisse.",
    jp: "没入型デジタル体験のクリエイター。",
    cn: "沉浸式数字体验的创造者。"
};

export const ABOUT_TEXT: LocalizedString = {
    fr: `Je suis un développeur passionné spécialisé dans la création d'interfaces web modernes et interactives. 
J'aime combiner le design créatif avec une ingénierie robuste pour construire des applications qui ne sont pas seulement fonctionnelles, 
mais aussi agréables à utiliser.`,
    en: `I am a passionate developer specializing in creating modern and interactive web interfaces.
I love combining creative design with robust engineering to build applications that are not only functional,
but also enjoyable to use.`,
    es: `Soy un desarrollador apasionado especializado en la creación de interfaces web modernas e interactivas.
Me encanta combinar el diseño creativo con una ingeniería robusta para construir aplicaciones que no solo sean funcionales,
sino también agradables de usar.`,
    de: `Ich bin ein leidenschaftlicher Entwickler, der sich auf die Erstellung moderner und interaktiver Webinterfaces spezialisiert hat.
Ich liebe es, kreatives Design mit robuster Technik zu kombinieren, um Anwendungen zu entwickeln, die nicht nur funktional,
sondern auch angenehm zu bedienen sind.`,
    jp: `私は、モダンでインタラクティブなウェブインターフェースの作成を専門とする情熱的な開発者です。
創造的なデザインと堅牢なエンジニアリングを組み合わせて、機能的であるだけでなく、
使い心地の良いアプリケーションを構築することが大好きです。`,
    cn: `我是一名热情的开发人员，专注于创建现代且交互式的Web界面。
我喜欢将创意设计与强大的工程技术相结合，构建不仅功能齐全，
而且使用愉悦的应用程序。`
};

// NOTE TO USER: Place your images in a 'public/images' folder in your project root.
// Example: public/images/my-project.png
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Neon E-Commerce",
    description: {
        fr: "Une plateforme de vente en ligne ultra-rapide avec un design NFT.",
        en: "An ultra-fast online sales platform with an NFT design.",
        es: "Una plataforma de ventas en línea ultrarrápida con un diseño NFT.",
        de: "Eine ultraschnelle Online-Verkaufsplattform mit einem NFT-Design.",
        jp: "NFTデザインを備えた超高速オンライン販売プラットフォーム。",
        cn: "具有NFT设计的超快速在线销售平台。"
    },
    tags: ["React", "Three.js", "Tailwind"],
    imageUrl: "/images/project1.png", // Placeholder for local image
    link: "#"
  },
  {
    id: 2,
    title: "AI Dashboard Analytics",
    description: {
        fr: "Tableau de bord visualisant des données complexes en temps réel assisté par l'IA Gemini.",
        en: "Dashboard visualizing complex data in real-time assisted by Gemini AI.",
        es: "Panel de control que visualiza datos complejos en tiempo real asistido por Gemini AI.",
        de: "Dashboard zur Visualisierung komplexer Daten in Echtzeit, unterstützt durch Gemini AI.",
        jp: "Gemini AIによって支援されたリアルタイムの複雑なデータを視覚化するダッシュボード。",
        cn: "由Gemini AI辅助实时可视化复杂数据的仪表板。"
    },
    tags: ["TypeScript", "D3.js", "Gemini API"],
    imageUrl: "/images/project2.png", // Placeholder for local image
    link: "#"
  },
  {
    id: 4,
    title: "Crypto Tracker",
    description: {
        fr: "Suivi en temps réel des cryptomonnaies avec alertes intelligentes.",
        en: "Real-time cryptocurrency tracking with smart alerts.",
        es: "Seguimiento de criptomonedas en tiempo real con alertas inteligentes.",
        de: "Echtzeit-Verfolgung von Kryptowährungen mit intelligenten Warnungen.",
        jp: "スマートアラート付きのリアルタイム暗号通貨追跡。",
        cn: "具有智能警报的实时加密货币跟踪。"
    },
    tags: ["WebSocket", "Chart.js", "Firebase"],
    imageUrl: "/images/project4.png", // Placeholder for local image
    link: "#"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 1,
    degree: { fr: "Brevet des collèges", en: "Secondary School Diploma", es: "Diploma de Educación Secundaria", de: "Realschulabschluss", jp: "中学校卒業", cn: "初中毕业证书" },
    institution: "Collèges Molière",
    period: "2023 - 2024",
    description: {
        fr: "Spécialisation en Intelligence Artificielle et développement Web Avancé. Major de promotion sur le projet de fin d'études.",
        en: "Specialization in Artificial Intelligence and Advanced Web Development. Valedictorian on the final project.",
        es: "Especialización en Inteligencia Artificial y Desarrollo Web Avanzado. Mejor de la promoción en el proyecto final.",
        de: "Spezialisierung auf Künstliche Intelligenz und fortgeschrittene Webentwicklung. Jahrgangsbester im Abschlussprojekt.",
        jp: "人工知能と高度なウェブ開発を専門としています。最終プロジェクトで首席。",
        cn: "专攻人工智能和高级Web开发。毕业设计全班第一。"
    },
    details: {
      modules: ["Deep Learning & Neural Networks", "Architecture Microservices", "Advanced React Patterns", "Cloud Computing (AWS/Azure)"],
      skillsAcquired: ["Leadership technique", "Gestion de projet agile", "Conception de systèmes complexes"],
      achievements: ["Major de promotion 2024", "Hackathon Winner: AI for Good", "Thèse: 'L'IA générative dans l'UX moderne'"]
    }
  },
  {
    id: 2,
    degree: { fr: "Bachelor Développement Web", en: "Bachelor Web Development", es: "Grado en Desarrollo Web", de: "Bachelor Webentwicklung", jp: "ウェブ開発学士", cn: "Web开发学士" },
    institution: "Tech Institute of Paris",
    period: "2019 - 2022",
    description: {
        fr: "Apprentissage intensif des fondamentaux du web, algorithmique et design UI/UX.",
        en: "Intensive learning of web fundamentals, algorithms, and UI/UX design.",
        es: "Aprendizaje intensivo de los fundamentos web, algoritmos y diseño UI/UX.",
        de: "Intensives Erlernen der Web-Grundlagen, Algorithmen und UI/UX-Design.",
        jp: "ウェブの基礎、アルゴリズム、UI/UXデザインの集中学習。",
        cn: "深入学习Web基础、算法和UI/UX设计。"
    },
    details: {
      modules: ["Algorithmique avancée", "Bases de données SQL/NoSQL", "UX/UI Design Principles", "Développement Mobile (React Native)"],
      skillsAcquired: ["Fullstack Development", "Git Workflow", "Responsive Design"],
      achievements: ["Développeur Lead sur le projet étudiant de 3ème année", "Certification Scrum Master"]
    }
  },
];

export const SKILLS: Skill[] = [
  { 
    name: "Python", 
    level: 25, 
    category: 'backend',
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
  },
  { 
    name: "Gemini API", 
    level: 30, 
    category: 'tools',
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg"
  },
  { 
    name: "HTML5", 
    level: 28, 
    category: 'frontend',
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
  },
  { 
    name: "CSS3", 
    level: 25, 
    category: 'frontend',
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
  },
  { 
    name: "Git", 
    level: 22, 
    category: 'tools',
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
  },
  { 
    name: "React", 
    level: 18, 
    category: 'frontend',
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
  },
  { 
    name: "Next.js", 
    level: 15, 
    category: 'frontend',
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
  },
  { 
    name: "TypeScript", 
    level: 15, 
    category: 'frontend',
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
  },
  { 
    name: "Tailwind", 
    level: 20, 
    category: 'frontend',
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
  },
  { 
    name: "Node.js", 
    level: 15, 
    category: 'backend',
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
  },
];

export const SOCIALS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/Quier-Mathys", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/mathys-quier-b15a432aa/", icon: Linkedin },
  { name: "Email", url: "mathys.quier.pro@gmail.com", icon: Mail },
];

// Personal Labs Data
export const INVENTIONS: Invention[] = [
  {
    id: 'lab-1',
    title: 'Portfolio V1.0',
    type: 'Software',
    status: 'Prototype',
    description: {
        fr: "Une vitrine numérique immersive démontrant mes compétences en développement frontend et UI/UX. Ce site combine React, Three.js et l'IA Gemini pour créer une expérience interactive unique, incluant un mode sombre/clair et un support multilingue.",
        en: "An immersive digital showcase demonstrating my frontend and UI/UX development skills. This site combines React, Three.js, and Gemini AI to create a unique interactive experience, including dark/light mode and multilingual support.",
        es: "Un escaparate digital inmersivo que demuestra mis habilidades de desarrollo frontend y UI/UX. Este sitio combina React, Three.js e IA Gemini para crear una experiencia interactiva única.",
        de: "Ein immersives digitales Schaufenster, das meine Frontend- und UI/UX-Entwicklungsfähigkeiten demonstriert. Diese Website kombiniert React, Three.js und Gemini AI.",
        jp: "フロントエンドおよびUI/UX開発スキルを実証する没入型デジタルショーケース。このサイトは、React、Three.js、Gemini AIを組み合わせています。",
        cn: "展示我的前端和UI/UX开发技能的沉浸式数字展示柜。该网站结合了React、Three.js和Gemini AI，创造独特的交互式体验。"
    },
    image: '/images/lab1.png', // Placeholder for local image
    techStack: ['React', 'TypeScript', 'Tailwind', 'Gemini API'],
    features: [
        { fr: 'Interface Réactive & 3D', en: 'Responsive & 3D Interface', es: 'Interfaz Responsiva y 3D', de: 'Responsive & 3D-Schnittstelle', jp: 'レスポンシブ＆3Dインターフェース', cn: '响应式和3D界面' },
        { fr: 'Assistant IA Intégré', en: 'Integrated AI Assistant', es: 'Asistente de IA Integrado', de: 'Integrierter KI-Assistent', jp: '統合AIアシスタント', cn: '集成AI助手' },
        { fr: 'Internationalisation (i18n)', en: 'Internationalization (i18n)', es: 'Internacionalización', de: 'Internationalisierung', jp: '国際化', cn: '国际化' }
    ]
  },
  {
    id: 'lab-2',
    title: 'Holo-Deck UI',
    type: 'Concept',
    status: 'Alpha',
    description: {
        fr: 'Exploration d\'interface utilisateur en réalité augmentée pour le web de demain. Focus sur le glassmorphism et les interactions gestuelles.',
        en: 'Exploration of augmented reality user interface for the web of tomorrow. Focus on glassmorphism and gestural interactions.',
        es: 'Exploración de interfaz de usuario de realidad aumentada para la web del mañana. Enfoque en glassmorphism e interacciones gestuales.',
        de: 'Erkundung der Augmented-Reality-Benutzeroberfläche für das Web von morgen. Fokus auf Glassmorphismus und Gesteninteraktionen.',
        jp: '明日のウェブのための拡張現実ユーザーインターフェースの探求。グラスモーフィズムとジェスチャーインタラクションに焦点を当てています。',
        cn: '探索面向未来的增强现实网络用户界面。专注于玻璃拟态和手势交互。'
    },
    image: '/images/lab2.png', // Placeholder for local image
    techStack: ['CSS Houdini', 'Framer Motion', 'WebGL'],
    features: [
        { fr: 'Composants Glassmorphism', en: 'Glassmorphism Components', es: 'Componentes Glassmorphism', de: 'Glassmorphismus-Komponenten', jp: 'グラスモーフィズムコンポーネント', cn: '玻璃拟态组件' },
        { fr: 'Navigation spatiale', en: 'Spatial Navigation', es: 'Navegación espacial', de: 'Räumliche Navigation', jp: '空間ナビゲーション', cn: '空間ナビゲーション' },
        { fr: 'Thème adaptatif', en: 'Adaptive Theme', es: 'Tema adaptativo', de: 'Adaptives Thema', jp: '適応型テーマ', cn: '自适应主题' }
    ]
  },
  {
    id: 'lab-3',
    title: 'Smart Home Gateway',
    type: 'Hardware',
    status: 'Active',
    description: {
        fr: 'Passerelle IoT sécurisée utilisant un Raspberry Pi pour unifier tous les protocoles domotiques (Zigbee, Z-Wave, WiFi) en une seule interface.',
        en: 'Secure IoT gateway using a Raspberry Pi to unify all home automation protocols (Zigbee, Z-Wave, WiFi) into a single interface.',
        es: 'Pasarela IoT segura utilizando una Raspberry Pi para unificar todos los protocolos de domótica (Zigbee, Z-Wave, WiFi) en una sola interfaz.',
        de: 'Sicheres IoT-Gateway mit einem Raspberry Pi zur Vereinheitlichung aller Hausautomationsprotokolle (Zigbee, Z-Wave, WiFi) in einer einzigen Schnittstelle.',
        jp: 'Raspberry Piを使用して、すべてのホームオートメーションプロトコル（Zigbee、Z-Wave、WiFi）を単一のインターフェースに統合する安全なIoTゲートウェイ。',
        cn: '使用Raspberry Pi的安全IoT网关，将所有家庭自动化协议（Zigbee、Z-Wave、WiFi）统一到一个接口中。'
    },
    image: '/images/lab3.png', // Placeholder for local image
    techStack: ['Python', 'MQTT', 'Raspberry Pi'],
    features: [
        { fr: 'Chiffrement E2E', en: 'E2E Encryption', es: 'Cifrado E2E', de: 'E2E-Verschlüsselung', jp: 'E2E暗号化', cn: '端到端加密' },
        { fr: 'Dashboard Local', en: 'Local Dashboard', es: 'Panel Local', de: 'Lokales Dashboard', jp: 'ローカルダッシュボード', cn: '本地仪表板' },
        { fr: 'Support Home Assistant', en: 'Home Assistant Support', es: 'Soporte Home Assistant', de: 'Home Assistant Unterstützung', jp: 'Home Assistantサポート', cn: 'Home Assistant支持' }
    ]
  }
];