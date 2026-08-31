// ===== Переводы (RU/EN) =====
const TRANSLATIONS = {
    ru: {
        'nav.about': 'Обо мне',
        'nav.experience': 'Опыт',
        'nav.education': 'Образование',
        'nav.courses': 'Курсы',
        'nav.skills': 'Навыки',
        'nav.projects': 'Проекты',
        'nav.infra': 'Инфраструктура',
        'nav.contacts': 'Контакты',

        'hero.greeting': 'Привет, я',
        'hero.title': 'ИТ-лидер команды разработки',

        'contact.telegram': 'Telegram',
        'contact.location': 'Москва, Россия',

        'about.title': 'Обо мне',
        'about.p1': 'ИТ-менеджер с общим опытом работы 8+ лет, из которых 4 года в IT. Специализируюсь на управлении командами разработки, ведении проектов (новых систем и сервисов), системном анализе, импортозамещении и внедрении AI-инструментов.',
        'about.p2': 'Текущие проекты — вывод новых кадровых сервисов банка ВТБ и перевод существующих на отечественный стек (PostgreSQL, Astra Linux, Kubernetes). Управляю командой из 16+ человек: архитекторы, системные аналитики, разработчики, тестировщики и DevOps. Внедрил релизную политику, менторю новых специалистов и веду проекты.',
        'about.p3': 'Изучаю инновационные технологии (и тестирую на собственной домашней инфраструктуре из 5 серверов) и научные открытия, смежные с ИТ. Разбираюсь в чужом коде: читаю, правлю неточности и дорабатываю — WEB-dev (HTML/CSS/REACT), Python, JavaScript. Использую Python и JavaScript для автоматизации личных рабочих процессов: скрипты интеграции с LLM API, обработка данных для AI-пайплайнов. Практический опыт написания кода для MVP AI-инструментов.',
        'about.p4': 'Защитил магистерскую диссертацию на тему «Социально-экономические последствия развития Цифровой экономики», рекомендован к аспирантуре.',
        'about.resultsTitle': 'Ключевые результаты',
        'about.r1': 'Банковские Кадровые сервисы: 65 сервисов → портал для 70 тыс. пользователей/мес., снижение обращений в HR в 8 раз',
        'about.r2': 'Импортозамещение: FIORI/OData → REST/Kafka + Astra Linux, переход в микросервисы',
        'about.r3': 'AI-инфраструктура: Локальные LLM (Ollama/VLLM), MCP, RAG — команда из 16 человек работает с AI ежедневно',
        'about.r4': 'Автоматизация: n8n: множество интеграций, экономия ~12 часов в неделю на рутине, автономия сотрудников по реализации автоматизаций под себя',
        'stat.label1': 'лет общего опыта',
        'stat.label2': 'года в ИТ',
        'stat.label3': 'человек в команде',

        'exp.title': 'Опыт работы',
        'exp1.role': 'ИТ-лидер',
        'exp1.date': 'Июль 2023 — настоящее время',
        'exp1.company': 'ООО "ГК ИННОТЕХ" (совместительство в ПАО Банк ВТБ) · Москва',
        'exp1.subtitle': 'Подразделение: Центр разработки ERP, Дивизион технологического развития внутренних процессов и платформы данных.',
        'exp1.li1': 'Системный аналитик в системе аутентификации пользователей',
        'exp1.li2': 'ИТ-лидер системы импортозамещения кадровых сервисов (переход с FIORI/OData → REST/Kafka, Ubuntu/RHEL/CentOS → Astra Linux (включая базовый образ))',
        'exp1.li3': 'Управление командой из 16+ человек: архитекторы (2), СА (4), разработчики (4), тестировщики (3), DevOps (2), scrum-мастер + подрядчики',
        'exp1.li4': 'Планирование спринтов и суперспринтов (включая работы со смежными командами), корректировка бэклога, эскалации',
        'exp1.li5': 'Менторство всех новых сотрудников в команде',
        'exp1.li6': 'соблюдение 152 ФЗ и внутренних нормативных актов',
        'exp1.achTitle': '<strong>Достижения:</strong>',
        'exp1.ach1': 'Масштабирование и импортозамещение: вывел на внутренний портал ~65 HR-сервисов (9 — в мобильное приложение), пользователей до 10 тыс./день. Перешёл с FIORI/OData на REST/Kafka, мигрировал на Astra Linux, развил микросервисную архитектуру. Снизил объём ручных обращений и подготовил платформу к AI-внедрениям',
        'exp1.ach2': 'Сложные интеграции: реализовал 5 HR-сервисов с подключением к 9 внутренним системам, автоматизировал кадровые процессы, повысил долю самообслуживания сотрудников',
        'exp1.ach3': 'AI-инфраструктура: внедрил локальный AI (Ollama, vLLM, RAG, MCP) и AI-ориентированную базу знаний на Docmost — команда получает информацию через AI-агентов, ускорил онбординг, поиск данных, частично автоматизировал написание документации',
        'exp1.ach4': 'Управление командой (16+ человек): архитекторы, аналитики, разработчики, QA, DevOps; планирование, бэклог, менторинг, внедрение AI-практик в процессы',
        'exp1.ach5': 'Метрики и документация: внедрил MAU/WAU/DAU, мониторинг сценариев и ошибок — решения на основе данных; организовал безопасную работу с знаниями в контуре, создал видео-инструкции для сложных сервисов',
        'exp1.stackTitle': '<strong>ТехСтек:</strong>',
        'exp1.stack': 'PostgreSQL, Tarantool, Redis · Kafka, RabbitMQ · Astra Linux, Kubernetes, Docker · Spring Boot (Java) · Ollama, vLLM, RAG, MCP · N8N, Activepieces · Docmost, DrawIO, Mermaid, PlantUML · CI/CD',

        'exp2.role': 'Технический писатель',
        'exp2.date': 'Октябрь 2022 — Март 2023 (6 мес.)',
        'exp2.company': 'НПЦ "БизнесАвтоматика" · Москва, pba.su',
        'exp2.li1': 'Разработка и редактирование проектной документации по ГОСТ 34, ГОСТ 19, ГОСТ 7, ГОСТ 2',
        'exp2.li2': 'Техническая графика: UML, BPMN, IDEF0 в Draw.io, MS Visio, LibreOffice Drawing',
        'exp2.li3': 'Сбор и анализ научно-технической информации (Excel, PowerPoint, Visary BI, Tableau Public)',
        'exp2.li4': 'Управление задачами команд через GitLab',
        'exp2.li5': 'Проверка реализации БД на соответствие ТЗ/ПЗ/ПМИ',
        'exp2.achTitle': '<strong>Достижения:</strong>',
        'exp2.ach1': 'Разработал сложное ТЗ на автоматизированную систему в сжатые сроки (актуализация 2 предыдущих работ)',
        'exp2.ach2': 'Подготовил Пояснительную записку технического проекта (3 апдейта системы в одной ПЗ)',

        'exp3.role': 'Ведущий специалист / Контролер',
        'exp3.date': 'Март 2022 — Октябрь 2022 (8 мес.)',
        'exp3.company': 'Префектура САО г. Москвы · Москва, sao.mos.ru',
        'exp3.li1': 'Экономические/финансовые проверки подведомственных учреждений и внутренний аудит',
        'exp3.li2': 'Проверка формирования Государственного задания, субсидий, Плана ФХД (1С, ЕАИСТ, ЕИС)',
        'exp3.li3': 'Написание отчётов о финансовых и кадровых проверках',
        'exp3.achTitle': '<strong>Достижения:</strong>',
        'exp3.ach1': 'Оптимизация структурных и подведомственных учреждений',
        'exp3.ach2': 'Внедрение YouGile для учёта задач и нарушений',

        'exp4.role': 'Предыдущий опыт',
        'exp4.date': 'Ноябрь 2016 — Июнь 2020',
        'exp4.li1': 'ФГБУ «Центр спортивной подготовки сборных команд России», Куратор паралимпийских видов спорта (курировал Зимнюю Паралимпиаду Токио 2020)',
        'exp4.li2': 'ВСЕРОССИЙСКОЕ ОБЩЕСТВО СЛЕПЫХ, Главный специалист отдела международных связей',
        'exp4.li3': 'Московский аналитический центр в сфере городского хозяйства, Аудитор',
        'exp4.li4': 'RENAULT RUS, Специалист отдела GR',

        'edu.title': 'Образование',
        'edu.card1.title': 'Магистр — Международные отношения, Мировая экономика и управление',
        'edu.card1.subtitle': '2018 / 2016',
        'edu.card1.body': 'Московский государственный университет им. М.В. Ломоносова (МГУ)',

        'courses.title': 'Курсы и повышение квалификации',
        'c1.title': 'Инновационные технологии адаптивной ФК',
        'c1.subtitle': '2021',
        'c1.body': 'ГАОУ ВО МГУСиТ',
        'c2.title': 'Федеральные стандарты бухгалтерского учёта',
        'c2.subtitle': '2019',
        'c2.body': 'ООО "Финансовый приоритет"',
        'c3.title': 'Ведомственный контроль финансово-хозяйственной деятельности',
        'c3.subtitle': '2019',
        'c3.body': 'МГУУ Правительства Москвы',
        'c4.title': 'Диалог и партнерство Цивилизаций',
        'c4.subtitle': '2016',
        'c4.body': 'Международный институт Питирима Сорокина',

        'skills.title': 'Навыки',
        'skill.cat1': 'СУБД и брокеры',
        'skill.cat2': 'Инфраструктура и DevOps',
        'skill.cat3': 'AI / ML стек',
        'skill.cat4': 'Аналитика и документация',
        'skill.cat5': 'Управление и процессы',
        'skill.cat6': 'Языки общения',
        'skill.ci': 'Сфера CI/CD',
        'skill.sprint': 'Планирование спринтов',
        'skill.release': 'Релизная политика',
        'skill.mentor': 'Менторство',
        'skill.escalation': 'Эскалирование',
        'skill.lang.ru': 'Русский — родной',
        'skill.lang.en': 'English — C1 (Advanced)',
        'skill.lang.fr': 'Français — A2',

        'infra.title': 'Инфраструктура',
        'infra.cat1': '🖥️ Сервер (Docker)',
        'infra.cat1.li1': '<strong>Ollama</strong> — локальные LLM/VLM',
        'infra.cat1.li2': '<strong>Kokoro</strong> — текст-в-речь (TTS)',
        'infra.cat1.li3': '<strong>Open WebUI</strong> + <strong>Open Terminal</strong>',
        'infra.cat1.li4': '<strong>Grafana</strong> + <strong>Beszel</strong> — мониторинг',
        'infra.cat1.li5': '<strong>Portainer</strong> — управление Docker',
        'infra.cat2': '📚 Продуктивность',
        'infra.cat2.li1': '<strong>Docmost</strong> + Meilisearch — wiki и поиск',
        'infra.cat2.li2': '<strong>NocoDB/PostgreSQL</strong> — базы данных',
        'infra.cat2.li3': '<strong>Blinko</strong> — закладки',
        'infra.cat2.li4': '<strong>Docmost</strong> — заметки',
        'infra.cat2.li5': '<strong>Memos</strong> — заметки',
        'infra.cat2.li6': '<strong>SearXNG</strong> — метапоисковик',
        'infra.cat2.li7': '<strong>Bookstack</strong> — документация',
        'infra.cat3': '🛠️ Разработка',
        'infra.cat3.li1': '<strong>OpenProject</strong> + <strong>PlantUML</strong>',
        'infra.cat3.li2': '<strong>CloudBeaver</strong> — СУБД через веб',
        'infra.cat3.li3': '<strong>Draw.io</strong> + <strong>Excalidraw</strong> — визуальное проектирование',
        'infra.cat3.li4': '<strong>n8n</strong> — автоматизация workflow',

        'projects.title': 'Проекты (GitHub)',
        'proj.link': 'Открыть репозиторий →',
        'proj1.name': 'LLM Second Brain',
        'proj1.desc': 'Self-hosted MCP-сервер долговременной памяти для LLM: хранит, суммаризирует и ищет заметки через векторизацию (Ollama).',
        'proj2.name': 'WebDev Portfolio',
        'proj2.desc': 'Портфолио веб-разработчика: HTML/CSS/JavaScript проекты.',
        'proj3.name': 'Resume',
        'proj3.desc': 'Этот сайт-резюме, размещённый на GitHub Pages.',

        'add.title': 'Дополнительная информация',
        'add.li1': 'Стажировка в <strong>РОСКОСМОСЕ</strong> (2014, 2015) — помощник экономиста',
        'add.li2': 'Кружок математического моделирования в университете',
        'add.li3': 'Участие в организации международных конференций «Глобалистика» (2014–2017)',
        'add.li4': 'Разработка законопроектов внедрения каршеринга в РФ (Renault Russia, 2016)',

        'contacts.title': 'Контакты',
        'contacts.email': 'Email',
        'contacts.phone': 'Телефон',

        'footer.text': '© {year} Орловский Олег. ИТ-менеджер.',
        'download.btn': 'Скачать резюме',

        'ui.theme.light': 'Переключить тему',
        'ui.theme.dark': 'Переключить тему',
        'ui.lang': 'Сменить язык'
    },

    en: {
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.education': 'Education',
        'nav.courses': 'Courses',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.infra': 'Infrastructure',
        'nav.contacts': 'Contacts',

        'hero.greeting': "Hi, I'm",
        'hero.title': 'IT Team Lead',

        'contact.telegram': 'Telegram',
        'contact.location': 'Moscow, Russia',

        'about.title': 'About me',
        'about.p1': 'IT manager with 8+ years of overall experience, 4 of them in IT. I specialize in leading development teams, running projects (new systems and services), system analysis, import substitution, and rolling out AI tools.',
        'about.p2': 'Current projects — launching new HR services for VTB Bank and migrating existing ones to a domestic stack (PostgreSQL, Astra Linux, Kubernetes). I manage a team of 16+: architects, system analysts, developers, QA, and DevOps. Introduced a release policy, mentor new specialists, and run the projects end-to-end.',
        'about.p3': 'I explore innovative technologies (testing them on my own 5-server home lab) and IT-adjacent scientific breakthroughs. I read, debug and refine code written by others — WEB-dev (HTML/CSS/REACT), Python, JavaScript. I use Python and JavaScript to automate my workflows: LLM API integration scripts, data processing for AI pipelines. Hands-on experience writing code for AI-tool MVPs.',
        'about.p4': "Defended a master's thesis on «Socio-economic consequences of the Digital economy development»; recommended for postgraduate studies.",
        'about.resultsTitle': 'Key results',
        'about.r1': 'Banking HR services: 65 services → a portal for 70k users/month, 8× fewer HR tickets',
        'about.r2': 'Import substitution: FIORI/OData → REST/Kafka + Astra Linux, move to microservices',
        'about.r3': 'AI infrastructure: local LLMs (Ollama/vLLM), MCP, RAG — a 16-person team uses AI daily',
        'about.r4': 'Automation: n8n — many integrations, ~12 hours/week saved on routine, autonomy for employees to build their own automations',
        'stat.label1': 'years total experience',
        'stat.label2': 'years in IT',
        'stat.label3': 'people on the team',

        'exp.title': 'Work experience',
        'exp1.role': 'IT Lead',
        'exp1.date': 'July 2023 — present',
        'exp1.company': 'LLC "GC INNOTECH" (concurrent employment at PJSC VTB Bank) · Moscow',
        'exp1.subtitle': 'Department: ERP Development Center, Division of technological development of internal processes and data platform.',
        'exp1.li1': 'System analyst on the user authentication system',
        'exp1.li2': 'IT lead of the HR services import-substitution program (FIORI/OData → REST/Kafka, Ubuntu/RHEL/CentOS → Astra Linux (including the base image))',
        'exp1.li3': 'Managing a 16+ person team: architects (2), SAs (4), developers (4), QA (3), DevOps (2), scrum master + contractors',
        'exp1.li4': 'Sprint and super-sprint planning (including cross-team work), backlog grooming, escalations',
        'exp1.li5': 'Mentoring every new hire on the team',
        'exp1.li6': 'compliance with Federal Law 152-FZ and internal regulations',
        'exp1.achTitle': '<strong>Achievements:</strong>',
        'exp1.ach1': 'Scale-up & import substitution: brought ~65 HR services to the internal portal (9 — into the mobile app), up to 10k users/day. Moved from FIORI/OData to REST/Kafka, migrated to Astra Linux, grew the microservice architecture. Cut manual tickets and prepped the platform for AI adoption',
        'exp1.ach2': 'Complex integrations: delivered 5 HR services connected to 9 internal systems, automated HR processes, increased employee self-service share',
        'exp1.ach3': 'AI infrastructure: rolled out local AI (Ollama, vLLM, RAG, MCP) and an AI-oriented knowledge base on Docmost — the team gets info via AI agents, faster onboarding and data search, partially automated doc writing',
        'exp1.ach4': 'Team management (16+): architects, analysts, developers, QA, DevOps; planning, backlog, mentoring, embedding AI practices into processes',
        'exp1.ach5': 'Metrics & documentation: introduced MAU/WAU/DAU, scenario and error monitoring — data-driven decisions; organized secure in-perimeter knowledge work, created video guides for complex services',
        'exp1.stackTitle': '<strong>Tech stack:</strong>',
        'exp1.stack': 'PostgreSQL, Tarantool, Redis · Kafka, RabbitMQ · Astra Linux, Kubernetes, Docker · Spring Boot (Java) · Ollama, vLLM, RAG, MCP · N8N, Activepieces · Docmost, DrawIO, Mermaid, PlantUML · CI/CD',

        'exp2.role': 'Technical writer',
        'exp2.date': 'October 2022 — March 2023 (6 mo.)',
        'exp2.company': 'NPC "BusinessAutomatica" · Moscow, pba.su',
        'exp2.li1': 'Authoring and editing project documentation per GOST 34, GOST 19, GOST 7, GOST 2',
        'exp2.li2': 'Technical graphics: UML, BPMN, IDEF0 in Draw.io, MS Visio, LibreOffice Drawing',
        'exp2.li3': 'Collecting and analyzing scientific & technical information (Excel, PowerPoint, Visary BI, Tableau Public)',
        'exp2.li4': 'Managing team tasks via GitLab',
        'exp2.li5': 'Verifying DB implementation against the spec / design / testing program',
        'exp2.achTitle': '<strong>Achievements:</strong>',
        'exp2.ach1': 'Authored a complex spec for an automated system on a tight deadline (refreshing 2 prior works)',
        'exp2.ach2': 'Prepared the technical-project explanatory note (3 system updates in one note)',

        'exp3.role': 'Lead specialist / Controller',
        'exp3.date': 'March 2022 — October 2022 (8 mo.)',
        'exp3.company': 'Prefecture of the Northern Administrative Okrug of Moscow · Moscow, sao.mos.ru',
        'exp3.li1': 'Economic/financial audits of subordinate institutions and internal audit',
        'exp3.li2': 'Reviewing State Assignment formation, subsidies, financial plan (1C, EAIST, EIS)',
        'exp3.li3': 'Writing reports on financial and HR audits',
        'exp3.achTitle': '<strong>Achievements:</strong>',
        'exp3.ach1': 'Optimization of structural and subordinate institutions',
        'exp3.ach2': 'Introduced YouGile for tracking tasks and violations',

        'exp4.role': 'Previous experience',
        'exp4.date': 'November 2016 — June 2020',
        'exp4.li1': 'Federal Center for Sports Training of Russian National Teams, Curator of Paralympic sports (curated the Tokyo 2020 Winter Paralympics)',
        'exp4.li2': 'ALL-RUSSIAN SOCIETY OF THE BLIND, Lead specialist, international relations department',
        'exp4.li3': 'Moscow Analytical Center for Urban Economy, Auditor',
        'exp4.li4': 'RENAULT RUS, GR department specialist',

        'edu.title': 'Education',
        'edu.card1.title': "Master's — International Relations, World Economy and Management",
        'edu.card1.subtitle': '2018 / 2016',
        'edu.card1.body': 'Lomonosov Moscow State University (MSU)',

        'courses.title': 'Courses & professional development',
        'c1.title': 'Innovative technologies of adaptive physical education',
        'c1.subtitle': '2021',
        'c1.body': 'GAOU VO MGUSiT',
        'c2.title': 'Federal accounting standards',
        'c2.subtitle': '2019',
        'c2.body': 'LLC "Financial Priority"',
        'c3.title': 'Departmental control of financial and economic activity',
        'c3.subtitle': '2019',
        'c3.body': 'Moscow City University of Management of the Moscow Government',
        'c4.title': 'Dialogue and Partnership of Civilizations',
        'c4.subtitle': '2016',
        'c4.body': 'Pitirim Sorokin International Institute',

        'skills.title': 'Skills',
        'skill.cat1': 'Databases & brokers',
        'skill.cat2': 'Infrastructure & DevOps',
        'skill.cat3': 'AI / ML stack',
        'skill.cat4': 'Analytics & documentation',
        'skill.cat5': 'Management & processes',
        'skill.cat6': 'Spoken languages',
        'skill.ci': 'CI/CD domain',
        'skill.sprint': 'Sprint planning',
        'skill.release': 'Release policy',
        'skill.mentor': 'Mentoring',
        'skill.escalation': 'Escalation',
        'skill.lang.ru': 'Russian — native',
        'skill.lang.en': 'English — C1 (Advanced)',
        'skill.lang.fr': 'Français — A2',

        'infra.title': 'Infrastructure',
        'infra.cat1': '🖥️ Server (Docker)',
        'infra.cat1.li1': '<strong>Ollama</strong> — local LLMs/VLMs',
        'infra.cat1.li2': '<strong>Kokoro</strong> — text-to-speech (TTS)',
        'infra.cat1.li3': '<strong>Open WebUI</strong> + <strong>Open Terminal</strong>',
        'infra.cat1.li4': '<strong>Grafana</strong> + <strong>Beszel</strong> — monitoring',
        'infra.cat1.li5': '<strong>Portainer</strong> — Docker management',
        'infra.cat2': '📚 Productivity',
        'infra.cat2.li1': '<strong>Docmost</strong> + Meilisearch — wiki & search',
        'infra.cat2.li2': '<strong>NocoDB/PostgreSQL</strong> — databases',
        'infra.cat2.li3': '<strong>Blinko</strong> — bookmarks',
        'infra.cat2.li4': '<strong>Docmost</strong> — notes',
        'infra.cat2.li5': '<strong>Memos</strong> — notes',
        'infra.cat2.li6': '<strong>SearXNG</strong> — meta-search',
        'infra.cat2.li7': '<strong>Bookstack</strong> — documentation',
        'infra.cat3': '🛠️ Development',
        'infra.cat3.li1': '<strong>OpenProject</strong> + <strong>PlantUML</strong>',
        'infra.cat3.li2': '<strong>CloudBeaver</strong> — DB via web',
        'infra.cat3.li3': '<strong>Draw.io</strong> + <strong>Excalidraw</strong> — visual design',
        'infra.cat3.li4': '<strong>n8n</strong> — workflow automation',

        'projects.title': 'Projects (GitHub)',
        'proj.link': 'Open repository →',
        'proj1.name': 'LLM Second Brain',
        'proj1.desc': 'Self-hosted MCP server for long-term memory: stores, summarizes and searches notes via vectorization (Ollama).',
        'proj2.name': 'WebDev Portfolio',
        'proj2.desc': 'Web developer portfolio: HTML/CSS/JavaScript projects.',
        'proj3.name': 'Resume',
        'proj3.desc': 'This resume website, hosted on GitHub Pages.',

        'add.title': 'Additional information',
        'add.li1': 'Internship at <strong>ROSCOSMOS</strong> (2014, 2015) — economist assistant',
        'add.li2': 'Mathematical modeling club at the university',
        'add.li3': 'Organizing international "Globalistics" conferences (2014–2017)',
        'add.li4': 'Drafting bills to introduce carsharing in the Russian Federation (Renault Russia, 2016)',

        'contacts.title': 'Contacts',
        'contacts.email': 'Email',
        'contacts.phone': 'Phone',

        'footer.text': '© {year} Oleg Orlovsky. IT manager.',
        'download.btn': 'Download CV',

        'ui.theme.light': 'Toggle theme',
        'ui.theme.dark': 'Toggle theme',
        'ui.lang': 'Switch language'
    }
};

// Ключи, значение которых содержит HTML (вставляем через innerHTML)
const HTML_KEYS = new Set([
    'exp1.achTitle', 'exp1.stackTitle', 'exp2.achTitle', 'exp3.achTitle',
    'add.li1',
    'infra.cat1.li1', 'infra.cat1.li2', 'infra.cat1.li3', 'infra.cat1.li4', 'infra.cat1.li5',
    'infra.cat2.li1', 'infra.cat2.li2', 'infra.cat2.li3', 'infra.cat2.li4', 'infra.cat2.li5', 'infra.cat2.li6', 'infra.cat2.li7',
    'infra.cat3.li1', 'infra.cat3.li2', 'infra.cat3.li3', 'infra.cat3.li4'
]);

// ===== Применение языка =====
function applyLang(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.ru;
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = dict[key];
        if (value === undefined) return;
        const finalValue = value.replace('{year}', new Date().getFullYear());
        if (HTML_KEYS.has(key)) {
            el.innerHTML = finalValue;
        } else {
            el.textContent = finalValue;
        }
    });

    // Кнопка переключения языка показывает целевой язык
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.textContent = lang === 'ru' ? 'EN' : 'RU';

    // Подсказки кнопок
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) themeBtn.setAttribute('aria-label', dict['ui.theme.light']);
    if (langBtn) langBtn.setAttribute('aria-label', dict['ui.lang']);
}

function initLang() {
    let lang = localStorage.getItem('lang');
    if (lang !== 'ru' && lang !== 'en') {
        lang = (navigator.language || 'ru').toLowerCase().startsWith('ru') ? 'ru' : 'en';
    }
    applyLang(lang);

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('lang') || 'ru';
            const next = current === 'ru' ? 'en' : 'ru';
            localStorage.setItem('lang', next);
            applyLang(next);
        });
    }
}

// ===== Переключение темы =====
function updateThemeIcon() {
    const theme = document.documentElement.getAttribute('data-theme') || 'light';
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function initTheme() {
    updateThemeIcon();

    // Следим за системной темой, если пользователь не выбирал вручную
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
            updateThemeIcon();
        }
    });

    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            updateThemeIcon();
        });
    }
}

// ===== Мобильное меню =====
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger && navLinks) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        });
    });
}

// ===== Анимация появления элементов (Intersection Observer) =====
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ===== Подсветка активного пункта навигации при скролле =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a:not(.nav-cta)');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
            navItems.forEach(item => {
                item.style.color = '';
                if (item.getAttribute('href') === `#${id}`) {
                    item.style.color = 'var(--primary)';
                }
            });
        }
    });
});

// ===== Инициализация =====
initLang();
initTheme();