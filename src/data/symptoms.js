const symptomsData = {
  uk: [
    {
      id: "anxiety",
      icon: "⚡",
      title: "Тривога",
      short: "Постійне напруження, очікування небезпеки, важко розслабитись.",
      color: "from-amber-50/90 to-yellow-50/70 border-amber-200 hover:border-amber-400 dark:from-amber-950/25 dark:to-yellow-950/15 dark:border-amber-500/30 dark:hover:border-amber-400/60 dark:bg-[#181424]",
      iconBg: "bg-amber-100 dark:bg-amber-900/40",
      accentColor: "text-amber-800 dark:text-amber-300",
      badgeColor: "bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-200",
      meaning: {
        title: "Що це може означати",
        content: [
          "Тривога — це природна реакція організму на загрозу. Під час війни нервова система переходить у режим «постійної бойової готовності», навіть коли прямої небезпеки немає.",
          "Це не слабкість і не дефект. Твоє тіло намагається захистити тебе, виділяючи адреналін і кортизол, щоб ти був/ла готовий/а реагувати.",
          "Проблема виникає тоді, коли тривога стає хронічною і заважає спати, їсти, працювати або спілкуватися.",
        ],
      },
      actions: {
        title: "Що можна зробити прямо зараз",
        items: [
          { icon: "🫁", text: "Спробуй дихальну вправу 4-7-8: вдих на 4 секунди, затримка на 7, видих на 8. Повтори 4 рази." },
          { icon: "🦶", text: "Заземлення «5-4-3-2-1»: знайди очима 5 речей навколо, доторкнись до 4, почуй 3 звуки, відчуй 2 запахи, зроби 1 глибокий вдих." },
          { icon: "📵", text: "Обмеж новини: виділи 2 фіксованих проміжки на день (наприклад, 10:00 і 18:00) для перегляду новин, не більше 20 хвилин кожен." },
          { icon: "🚶", text: "Фізичний рух: прогулянка, легка розминка або прибирання допомагають вивести надлишок гормонів стресу." },
          { icon: "☕", text: "Зменш кофеїн: кава і енергетики підсилюють тривожність, імітуючи фізіологічні симптоми стресу." },
        ],
      },
      help: {
        title: "Коли варто звернутися по допомогу",
        items: [
          "Тривога триває тижнями і не знижується навіть у безпечному середовищі",
          "З'являються панічні атаки (раптове серцебиття, брак повітря, страх смерті)",
          "Тривога заважає виходити з дому, працювати або піклуватися про себе",
          "З'являються нав'язливі думки, які неможливо зупинити",
        ],
      },
    },
    {
      id: "exhaustion",
      icon: "🔋",
      title: "Виснаження",
      short: "Постійна втома, немає сил навіть на прості речі, відчуття «порожнечі».",
      color: "from-blue-50/90 to-sky-50/70 border-blue-200 hover:border-blue-400 dark:from-blue-950/25 dark:to-sky-950/15 dark:border-blue-500/30 dark:hover:border-blue-400/60 dark:bg-[#181424]",
      iconBg: "bg-blue-100 dark:bg-blue-900/40",
      accentColor: "text-blue-800 dark:text-blue-300",
      badgeColor: "bg-blue-100 text-blue-900 dark:bg-blue-900/40 dark:text-blue-200",
      meaning: {
        title: "Що це може означати",
        content: [
          "Емоційне та фізичне виснаження — це наслідок тривалого функціонування в умовах хронічного стресу. Організм просто вичерпав свої запаси адаптаційної енергії.",
          "Виснаження часто плутають з лінню, але це принципово різні речі: лінь — це коли не хочеться, а виснаження — це коли дуже хочеться, але фізично немає ресурсу.",
          "Це нормальний сигнал тіла: «Зупинись. Мені потрібен ремонт».",
        ],
      },
      actions: {
        title: "Що можна зробити",
        items: [
          { icon: "🛑", text: "Легалізуй відпочинок: дозволь собі не робити нічого без почуття провини. Відпочинок — це не нагорода, а базова потреба." },
          { icon: "📋", text: "Зменш список справ до 1–3 пріоритетних на день. Маленькі перемоги відновлюють відчуття контролю." },
          { icon: "🍽️", text: "Звертай увагу на базове: їжа, вода, сон. При виснаженні тіло часто ігнорує голод та спрагу." },
          { icon: "🌿", text: "Знайди маленьку «зарядку» — те, що дає хоча б трохи сил: музика, природа, кава в тиші." },
          { icon: "🤝", text: "Попроси про допомогу. Виснажена людина не зобов'язана справлятись сама." },
        ],
      },
      help: {
        title: "Коли варто звернутися по допомогу",
        items: [
          "Втома не проходить навіть після відпочинку і триває більше місяця",
          "З'являються труднощі з виконанням базових гігієнічних процедур",
          "Виснаження супроводжується відчуттям безнадійності або байдужості до всього",
          "Втрата ваги, апетиту або різкі зміни у сні",
        ],
      },
    },
    {
      id: "sleep",
      icon: "🌙",
      title: "Проблеми зі сном",
      short: "Важко заснути, прокидання вночі або постійна втома.",
      color: "from-indigo-50/90 to-blue-50/70 border-indigo-200 hover:border-indigo-400 dark:from-indigo-950/25 dark:to-blue-950/15 dark:border-indigo-500/30 dark:hover:border-indigo-400/60 dark:bg-[#181424]",
      iconBg: "bg-indigo-100 dark:bg-indigo-900/40",
      accentColor: "text-indigo-800 dark:text-indigo-300",
      badgeColor: "bg-indigo-100 text-indigo-900 dark:bg-indigo-900/40 dark:text-indigo-200",
      meaning: {
        title: "Що це може означати",
        content: [
          "Порушення сну — один з найпоширеніших симптомів стресу і тривоги. Нервова система, яка перебуває в стані готовності, «не дозволяє» тілу розслабитись.",
          "Можливі причини: тривожні думки перед сном, гіперзбудження нервової системи, зміна режиму через зовнішні обставини.",
          "Хронічний недосип, своєю чергою, посилює тривогу і виснаження — виникає замкнене коло.",
        ],
      },
      actions: {
        title: "Що можна зробити",
        items: [
          { icon: "🕯️", text: "Дотримуйся режиму: лягай і прокидайся в один і той самий час, навіть у вихідні." },
          { icon: "📵", text: "За годину до сну відклади телефон. Синє світло і новини заважають виробленню мелатоніну." },
          { icon: "🛁", text: "Ритуал перед сном: тепла вода, читання, спокійна музика — сигнали для мозку." },
          { icon: "🫁", text: "Техніка 4-7-8 або прогресивна м'язова релаксація перед сном знижують збудження." },
          { icon: "📓", text: "Запиши тривожні думки перед сном у блокнот — це «вивільняє» голову." },
        ],
      },
      help: {
        title: "Коли варто звернутися по допомогу",
        items: [
          "Проблеми зі сном тривають більше місяця і не реагують на зміни режиму",
          "Регулярні нічні кошмари або повторювані сновидіння про травматичні події",
          "Денна сонливість заважає роботі або безпеці (особливо при водінні)",
          "Сон не приносить відновлення протягом тривалого часу",
        ],
      },
    },
    {
      id: "anger",
      icon: "🔴",
      title: "Злість",
      short: "Дратують люди, звуки або ситуації, які раніше не турбували.",
      color: "from-rose-50/90 to-red-50/70 border-rose-200 hover:border-rose-400 dark:from-rose-950/25 dark:to-red-950/15 dark:border-rose-500/30 dark:hover:border-rose-400/60 dark:bg-[#181424]",
      iconBg: "bg-rose-100 dark:bg-rose-900/40",
      accentColor: "text-rose-800 dark:text-rose-300",
      badgeColor: "bg-rose-100 text-rose-900 dark:bg-rose-900/40 dark:text-rose-200",
      meaning: {
        title: "Що це може означати",
        content: [
          "Злість — це нормальна реакція на несправедливість, втрату або безсилля. Під час війни злість часто перекриває страх або біль.",
          "Підвищена дратівливість може бути симптомом хронічного стресу або виснаження.",
          "Важливо: злість на ситуацію — нормально. Але якщо вона спрямовується на близьких, це сигнал звернути увагу на свій стан.",
        ],
      },
      actions: {
        title: "Що можна зробити",
        items: [
          { icon: "⏸️", text: "Пауза: коли відчуваєш спалах злості — зупинись, порахуй до 10, зроби глибокий вдих." },
          { icon: "🏃", text: "Фізичне навантаження: злість — це енергія. Прогулянка або пробіжка допомагають зняти спалах." },
          { icon: "✍️", text: "Напиши про те, що тебе злить — виклади все на папір і знищ його." },
          { icon: "💬", text: "Поговори про злість: «Мене зараз дуже злить...» — вже знижує внутрішню напругу." },
          { icon: "🔍", text: "Запитай себе: що стоїть за злістю? Часто це страх або безсилля." },
        ],
      },
      help: {
        title: "Коли варто звернутися по допомогу",
        items: [
          "Злість виходить з-під контролю і ти завдаєш шкоди собі або стосункам",
          "З'являються думки або імпульси до фізичного насилля",
          "Злість супроводжується тривалим відчуттям ненависті до себе або інших",
          "Дратівливість посилилась після конкретної травматичної події",
        ],
      },
    },
    {
      id: "apathy",
      icon: "🩵",
      title: "Байдужість",
      short: "Ніби нічого не радує і не хочеться нічого робити.",
      color: "from-cyan-50/90 to-sky-50/70 border-cyan-200 hover:border-cyan-400 dark:from-cyan-950/25 dark:to-sky-950/15 dark:border-cyan-500/30 dark:hover:border-cyan-400/60 dark:bg-[#181424]",
      iconBg: "bg-cyan-100 dark:bg-cyan-900/40",
      accentColor: "text-cyan-800 dark:text-cyan-300",
      badgeColor: "bg-cyan-100 text-cyan-900 dark:bg-cyan-900/40 dark:text-cyan-200",
      meaning: {
        title: "Що це може означати",
        content: [
          "Байдужість або «емоційне оніміння» — захисна реакція. Коли занадто багато болю або страху, мозок «вимикає» емоції.",
          "Це може бути симптомом вигорання або дисоціації після важких потрясінь.",
          "Байдужість — не риса характеру. Це тимчасовий стан захисту.",
        ],
      },
      actions: {
        title: "Що можна зробити",
        items: [
          { icon: "🌱", text: "Починай з мікро-дій: не «прибрати квартиру», а «помити одну чашку»." },
          { icon: "☀️", text: "Виходь на денне світло щодня на 10–15 хвилин — це біологічно регулює настрій." },
          { icon: "📞", text: "Підтримуй контакт з близькими, навіть якщо здається, що сил немає." },
          { icon: "🎯", text: "Знайди одну маленьку справу для когось іншого." },
          { icon: "🎵", text: "Музика і тактильні відчуття допомагають повернути контакт із тілом." },
        ],
      },
      help: {
        title: "Коли варто звернутися по допомогу",
        items: [
          "Байдужість триває більше 2 тижнів і не змінюється",
          "З'являється відчуття, що краще не існувати",
          "Ти перестав/ла піклуватися про їжу та сон",
          "Відчуття повної відірваності від реальності",
        ],
      },
    },
    {
      id: "concentration",
      icon: "🟣",
      title: "Проблеми з концентрацією",
      short: "Важко читати, працювати, запам'ятовувати або доводити справи до кінця.",
      color: "from-purple-50/90 to-violet-50/70 border-purple-200 hover:border-purple-400 dark:from-purple-950/25 dark:to-violet-950/15 dark:border-purple-500/30 dark:hover:border-purple-400/60 dark:bg-[#181424]",
      iconBg: "bg-purple-100 dark:bg-purple-900/40",
      accentColor: "text-purple-800 dark:text-purple-300",
      badgeColor: "bg-purple-100 text-purple-900 dark:bg-purple-900/40 dark:text-purple-200",
      meaning: {
        title: "Що це може означати",
        content: [
          "При хронічному стресі префронтальна кора отримує менше ресурсів, бо мозок зайнятий скануванням загроз.",
          "Труднощі з концентрацією і відчуття туману — нейробіологічна реакція на тривалу небезпеку.",
          "Це природна властивість мозку в умовах невизначеності, а не втрата інтелектуальних здібностей.",
        ],
      },
      actions: {
        title: "Що можна зробити",
        items: [
          { icon: "⏱️", text: "Техніка Помодоро: 25 хвилин зосередження → 5 хвилин відпочинку." },
          { icon: "📝", text: "Записуй усе важливе — не перевантажуй оперативну пам'ять." },
          { icon: "📵", text: "Прибери відволікаючі сповіщення та стрічки новин під час роботи." },
          { icon: "🧩", text: "Розбивай завдання на найменші конкретні кроки." },
          { icon: "💧", text: "Пий воду та стеж за сном — зневоднення різко погіршує мислення." },
        ],
      },
      help: {
        title: "Коли варто звернутися по допомогу",
        items: [
          "«Туман у голові» триває місяцями і не проходить після відпочинку",
          "Проблеми з концентрацією загрожують безпеці чи роботі",
          "З'являються помітні провали в пам'яті щодо недавніх подій",
          "Симптоми різко виникли після сильного потрясіння",
        ],
      },
    },
  ],

  en: [
    {
      id: "anxiety",
      icon: "⚡",
      title: "Anxiety",
      short: "Persistent tension, bracing for danger, inability to physically relax.",
      color: "from-amber-50/90 to-yellow-50/70 border-amber-200 hover:border-amber-400 dark:from-amber-950/25 dark:to-yellow-950/15 dark:border-amber-500/30 dark:hover:border-amber-400/60 dark:bg-[#181424]",
      iconBg: "bg-amber-100 dark:bg-amber-900/40",
      accentColor: "text-amber-800 dark:text-amber-300",
      badgeColor: "bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-200",
      meaning: {
        title: "What this means biologically",
        content: [
          "Anxiety is the autonomic nervous system's adaptive alarm. During wartime, neural circuitry locks into a persistent high-alert stance even when no immediate missile threat is present.",
          "It is neither weakness nor a character flaw. Your biology is actively attempting to preserve your life through surges of adrenaline and cortisol.",
          "The challenge emerges when acute alarm transitions into chronic distress, sabotaging sleep, appetite, work, and interpersonal connections.",
        ],
      },
      actions: {
        title: "Actions you can take right now",
        items: [
          { icon: "🫁", text: "Practice 4-7-8 breathing: inhale 4s, hold 7s, slow exhale 8s. Repeat 4 times to stimulate the vagus nerve." },
          { icon: "🦶", text: "5-4-3-2-1 Grounding: identify 5 objects, touch 4 textures, listen for 3 sounds, smell 2 scents, take 1 deep breath." },
          { icon: "📵", text: "News intake boundaries: schedule 2 fixed twenty-minute windows per day (e.g. 10:00 & 18:00) to check reliable updates." },
          { icon: "🚶", text: "Physical movement: brisk walking or stretching metabolizes excess adrenaline and cortisol." },
          { icon: "☕", text: "Reduce stimulants: excess caffeine mimics physical panic markers like rapid heartbeat and trembling." },
        ],
      },
      help: {
        title: "When to seek professional support",
        items: [
          "Anxiety persists for weeks without easing, even in secure environments",
          "Frequent panic attacks occur (sudden tachycardia, hyperventilation, sense of impending doom)",
          "Anxiety prevents leaving home, performing work, or maintaining basic nutrition",
          "Obsessive looping thoughts that feel impossible to interrupt",
        ],
      },
    },
    {
      id: "exhaustion",
      icon: "🔋",
      title: "Exhaustion & Depletion",
      short: "Deep chronic fatigue, lack of energy for basic tasks, feeling empty.",
      color: "from-blue-50/90 to-sky-50/70 border-blue-200 hover:border-blue-400 dark:from-blue-950/25 dark:to-sky-950/15 dark:border-blue-500/30 dark:hover:border-blue-400/60 dark:bg-[#181424]",
      iconBg: "bg-blue-100 dark:bg-blue-900/40",
      accentColor: "text-blue-800 dark:text-blue-300",
      badgeColor: "bg-blue-100 text-blue-900 dark:bg-blue-900/40 dark:text-blue-200",
      meaning: {
        title: "What this means biologically",
        content: [
          "Physical and emotional burnout is the predictable consequence of sustained survival mobilization. The body has simply expended its neurochemical reserves.",
          "Exhaustion is often wrongly criticized as laziness: laziness is not wanting to do something, whereas burnout is desperately wanting to act but having zero physiological fuel.",
          "It is your body's legitimate biological emergency brake: «Halt. We must repair.»",
        ],
      },
      actions: {
        title: "Actions you can take",
        items: [
          { icon: "🛑", text: "Legitimize rest: allow yourself downtime without guilt. Rest is a non-negotiable biological necessity." },
          { icon: "📋", text: "Trim daily goals to 1–3 realistic priorities. Small completions restore a sense of mastery." },
          { icon: "🍽️", text: "Anchor basic physiology: prioritize water, warm food, and sleep. Burnout frequently mutes hunger cues." },
          { icon: "🌿", text: "Find gentle micro-restoratives: instrumental music, a hot shower, or sitting quietly in sunlight." },
          { icon: "🤝", text: "Ask for support. An exhausted human was never designed to endure a national crisis alone." },
        ],
      },
      help: {
        title: "When to seek professional support",
        items: [
          "Fatigue does not ease after weekends or sleep and persists over a month",
          "Experiencing difficulty maintaining basic self-hygiene or nutrition",
          "Exhaustion is accompanied by pervasive apathy or hopelessness",
          "Sudden significant weight fluctuations or complete insomnia",
        ],
      },
    },
    {
      id: "sleep",
      icon: "🌙",
      title: "Sleep Disruption",
      short: "Difficulty falling asleep, nocturnal panic awakenings, unrestful sleep.",
      color: "from-indigo-50/90 to-blue-50/70 border-indigo-200 hover:border-indigo-400 dark:from-indigo-950/25 dark:to-blue-950/15 dark:border-indigo-500/30 dark:hover:border-indigo-400/60 dark:bg-[#181424]",
      iconBg: "bg-indigo-100 dark:bg-indigo-900/40",
      accentColor: "text-indigo-800 dark:text-indigo-300",
      badgeColor: "bg-indigo-100 text-indigo-900 dark:bg-indigo-900/40 dark:text-indigo-200",
      meaning: {
        title: "What this means biologically",
        content: [
          "Sleep disturbances are among the most pervasive indicators of collective trauma. A hyper-vigilant nervous system refuses to fully surrender consciousness.",
          "Root drivers include intrusive late-night ruminations, autonomic hyperarousal, and disrupted circadian cues.",
          "Chronic sleep deficit in turn magnifies daily anxiety and cognitive fog, trapping the mind in a draining loop.",
        ],
      },
      actions: {
        title: "Actions you can take",
        items: [
          { icon: "🕯️", text: "Consistent sleep schedule: wake up at the exact same hour every morning, including weekends." },
          { icon: "📵", text: "Screen curfew: put devices away 60 minutes before sleeping to allow melatonin synthesis." },
          { icon: "🛁", text: "Pre-sleep ritual: warm bath, gentle reading, or ambient sounds prime the mind for safety." },
          { icon: "🫁", text: "Progressive muscle relaxation or 4-7-8 breathing lying in bed calms autonomic tension." },
          { icon: "📓", text: "Worry dump: write looping thoughts into a notepad to mentally close the day." },
        ],
      },
      help: {
        title: "When to seek professional support",
        items: [
          "Severe insomnia persists for more than four consecutive weeks",
          "Recurrent traumatic nightmares disrupt nighttime recovery",
          "Daytime drowsiness poses safety hazards (such as during driving)",
          "Sleep consistently fails to provide physical or emotional restoration",
        ],
      },
    },
    {
      id: "anger",
      icon: "🔴",
      title: "Anger & Irritability",
      short: "Short temper, sensory hypersensitivity, sudden flares of resentment.",
      color: "from-rose-50/90 to-red-50/70 border-rose-200 hover:border-rose-400 dark:from-rose-950/25 dark:to-red-950/15 dark:border-rose-500/30 dark:hover:border-rose-400/60 dark:bg-[#181424]",
      iconBg: "bg-rose-100 dark:bg-rose-900/40",
      accentColor: "text-rose-800 dark:text-rose-300",
      badgeColor: "bg-rose-100 text-rose-900 dark:bg-rose-900/40 dark:text-rose-200",
      meaning: {
        title: "What this means biologically",
        content: [
          "Anger is a normal physiological protest against injustice, helplessness, and boundary violations. In war, anger often protects against intolerable grief or terror.",
          "High irritability is often symptomatic of an overwhelmed autonomic system running on empty.",
          "While situational rage is understandable, directing it toward family or self is a clear call to tend to your boundaries.",
        ],
      },
      actions: {
        title: "Actions you can take",
        items: [
          { icon: "⏸️", text: "Tactical pause: when rage flares, pause, count to 10 slowly, and take three long belly exhales." },
          { icon: "🏃", text: "Physical discharge: anger is mobilised motor energy. A run, fast walk, or pushups safely discharge it." },
          { icon: "✍️", text: "Unsent rage letter: pour your rawest frustrations onto paper, then shred it." },
          { icon: "💬", text: "State naming: saying «I feel overwhelmed right now» diffuses defensive escalation." },
          { icon: "🔍", text: "Curious inquiry: ask yourself what lies under the anger — usually it is fear, exhaustion, or grief." },
        ],
      },
      help: {
        title: "When to seek professional support",
        items: [
          "Anger feels uncontrollable and results in damaging relationships or self-harm",
          "Intrusive impulses or urges toward violence emerge",
          "Rage is coupled with persistent feelings of self-loathing or contempt",
          "Irritability escalated markedly after a specific traumatic event",
        ],
      },
    },
    {
      id: "apathy",
      icon: "🩵",
      title: "Emotional Numbness & Apathy",
      short: "Absence of joy, feeling detached, lack of motivation to engage in life.",
      color: "from-cyan-50/90 to-sky-50/70 border-cyan-200 hover:border-cyan-400 dark:from-cyan-950/25 dark:to-sky-950/15 dark:border-cyan-500/30 dark:hover:border-cyan-400/60 dark:bg-[#181424]",
      iconBg: "bg-cyan-100 dark:bg-cyan-900/40",
      accentColor: "text-cyan-800 dark:text-cyan-300",
      badgeColor: "bg-cyan-100 text-cyan-900 dark:bg-cyan-900/40 dark:text-cyan-200",
      meaning: {
        title: "What this means biologically",
        content: [
          "Apathy or emotional numbness is the mind's emergency anesthesia. When pain and shock become unbearable, the psyche turns down the emotional amplifier.",
          "It is a recognized manifestation of burnout, depression, or protective dissociation after shock.",
          "Numbness does not mean you have turned cold; it is a temporary biological bunker.",
        ],
      },
      actions: {
        title: "Actions you can take",
        items: [
          { icon: "🌱", text: "Micro-steps: instead of cleaning the entire apartment, wash just one cup. Action precedes motivation." },
          { icon: "☀️", text: "Natural daylight: spend 10–15 minutes outside in sunlight every morning to help regulate neurotransmitters." },
          { icon: "📞", text: "Low-demand connection: maintain contact with trusted friends, even if only sending simple emojis." },
          { icon: "🎯", text: "Perform one tiny generous gesture for someone else to re-awaken purposeful agency." },
          { icon: "🎵", text: "Sensory activation: music, warm tea, tactile textures gently re-awaken feeling." },
        ],
      },
      help: {
        title: "When to seek professional support",
        items: [
          "Numbness lasts longer than two weeks without any shift",
          "Persistent thoughts that life is meaningless or wishes to disappear",
          "Complete cessation of personal hygiene, nutrition, or mobility",
          "Profound dissociation where reality feels unreal or detached",
        ],
      },
    },
    {
      id: "concentration",
      icon: "🟣",
      title: "Cognitive Fog & Concentration",
      short: "Difficulty reading, forgetfulness, struggling to finish everyday tasks.",
      color: "from-purple-50/90 to-violet-50/70 border-purple-200 hover:border-purple-400 dark:from-purple-950/25 dark:to-violet-950/15 dark:border-purple-500/30 dark:hover:border-purple-400/60 dark:bg-[#181424]",
      iconBg: "bg-purple-100 dark:bg-purple-900/40",
      accentColor: "text-purple-800 dark:text-purple-300",
      badgeColor: "bg-purple-100 text-purple-900 dark:bg-purple-900/40 dark:text-purple-200",
      meaning: {
        title: "What this means biologically",
        content: [
          "Under persistent survival threat, the prefrontal cortex loses metabolic priority to emergency brainstem reflexes.",
          "Cognitive haziness and memory blanks are typical neurological consequences of living in crisis, not a loss of intellectual capacity.",
          "Recognizing this frees you from the unfair expectation of performing at peacetime capacity.",
        ],
      },
      actions: {
        title: "Actions you can take",
        items: [
          { icon: "⏱️", text: "Pomodoro rhythm: 25 minutes of single-task focus followed by 5 minutes of total mental rest." },
          { icon: "📝", text: "Write everything down immediately; do not burden working memory with daily logistics." },
          { icon: "📵", text: "Mute non-essential notifications and newsfeeds while focusing on work." },
          { icon: "🧩", text: "Deconstruct intimidating tasks into bite-sized, concrete micro-steps." },
          { icon: "💧", text: "Hydration & sleep: even mild dehydration noticeably degrades cognitive processing speed." },
        ],
      },
      help: {
        title: "When to seek professional support",
        items: [
          "Severe brain fog persists for months despite attempts to rest",
          "Cognitive lapses jeopardize occupational security or physical safety",
          "Experiencing distinct memory gaps regarding recent events",
          "Cognitive symptoms arose abruptly following acute trauma",
        ],
      },
    },
  ],

  de: [
    {
      id: "anxiety",
      icon: "⚡",
      title: "Angst",
      short: "Ständige Anspannung, Warten auf Gefahr, Unfähigkeit sich zu entspannen.",
      color: "from-amber-50/90 to-yellow-50/70 border-amber-200 hover:border-amber-400 dark:from-amber-950/25 dark:to-yellow-950/15 dark:border-amber-500/30 dark:hover:border-amber-400/60 dark:bg-[#181424]",
      iconBg: "bg-amber-100 dark:bg-amber-900/40",
      accentColor: "text-amber-800 dark:text-amber-300",
      badgeColor: "bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-200",
      meaning: {
        title: "Was das biologisch bedeutet",
        content: [
          "Angst ist die gesunde Schutzreaktion des Körpers auf Gefahr. Im Krieg verharrt das Nervensystem in dauerhafter Alarmbereitschaft, selbst in ruhigen Momenten.",
          "Es ist weder Schwäche noch Makel. Dein Körper versucht dich durch Adrenalin und Cortisol reaktionsfähig zu halten.",
          "Ein Problem entsteht erst, wenn der Alarm chronisch wird und Schlaf, Ernährung und Alltag beeinträchtigt.",
        ],
      },
      actions: {
        title: "Was du jetzt tun kannst",
        items: [
          { icon: "🫁", text: "4-7-8 Atemübung: 4s einatmen, 7s halten, 8s langsam ausatmen. Viermal wiederholen." },
          { icon: "🦶", text: "5-4-3-2-1 Erdung: 5 Dinge sehen, 4 ertasten, 3 Geräusche hören, 2 riechen, 1 tief durchatmen." },
          { icon: "📵", text: "Nachrichten dosieren: Maximal zweimal täglich 20 Minuten für verlässliche Updates reservieren." },
          { icon: "🚶", text: "Körperliche Bewegung: Spazierengehen baut überschüssige Stresshormone effektiv ab." },
          { icon: "☕", text: "Koffein reduzieren: Zu viel Kaffee ahmt körperliche Paniksymptome nach." },
        ],
      },
      help: {
        title: "Wann professionelle Hilfe nötig ist",
        items: [
          "Die Angst hält über Wochen an und flaut auch an sicheren Orten nicht ab",
          "Panikattacken mit Herzrasen, Atemnot und Todesangst treten auf",
          "Angst hindert dich am Verlassen der Wohnung oder an der Selbstversorgung",
          "Kreisende Zwangsgedanken lassen sich nicht mehr stoppen",
        ],
      },
    },
    {
      id: "exhaustion",
      icon: "🔋",
      title: "Erschöpfung",
      short: "Dauermüdigkeit, keine Kraft für einfache Dinge, innere Leere.",
      color: "from-blue-50/90 to-sky-50/70 border-blue-200 hover:border-blue-400 dark:from-blue-950/25 dark:to-sky-950/15 dark:border-blue-500/30 dark:hover:border-blue-400/60 dark:bg-[#181424]",
      iconBg: "bg-blue-100 dark:bg-blue-900/40",
      accentColor: "text-blue-800 dark:text-blue-300",
      badgeColor: "bg-blue-100 text-blue-900 dark:bg-blue-900/40 dark:text-blue-200",
      meaning: {
        title: "Was das biologisch bedeutet",
        content: [
          "Körperliche und seelische Erschöpfung ist die natürliche Folge von Dauerstress. Der Körper hat seine Reserven verbraucht.",
          "Erschöpfung wird oft fälschlich mit Faulheit verwechselt: Faulheit ist keine Lust zu haben, Erschöpfung bedeutet zu wollen, aber keine Kraft mehr zu besitzen.",
          "Es ist das Stoppsignal deines Körpers: «Wir brauchen dringend Regeneration.»",
        ],
      },
      actions: {
        title: "Was du tun kannst",
        items: [
          { icon: "🛑", text: "Erholung erlauben: Gönne dir Pausen ohne schlechtes Gewissen. Ruhe ist ein Grundbedürfnis." },
          { icon: "📋", text: "Tagesplan auf 1–3 Prioritäten kürzen. Kleine Erfolge stärken die Selbstwirksamkeit." },
          { icon: "🍽️", text: "Grundlegendes sichern: Trinken, warmes Essen und Schlaf. Erschöpfung dämpft oft das Hungergefühl." },
          { icon: "🌿", text: "Kleine Kraftquellen suchen: Musik hören, ein heißes Bad nehmen oder in der Sonne sitzen." },
          { icon: "🤝", text: "Um Hilfe bitten. Niemand muss eine solche Krise allein durchstehen." },
        ],
      },
      help: {
        title: "Wann professionelle Hilfe nötig ist",
        items: [
          "Müdigkeit bessert sich auch nach Ruhephasen über einen Monat nicht",
          "Grundlegende Alltagshygiene und Ernährung fallen schwer",
          "Erschöpfung wird von tiefer Hoffnungslosigkeit begleitet",
          "Starke Gewichtsveränderungen oder vollständige Schlaflosigkeit",
        ],
      },
    },
    {
      id: "sleep",
      icon: "🌙",
      title: "Schlafprobleme",
      short: "Einschlafschwierigkeiten, nächtliches Erwachen, mangelnde Erholung.",
      color: "from-indigo-50/90 to-blue-50/70 border-indigo-200 hover:border-indigo-400 dark:from-indigo-950/25 dark:to-blue-950/15 dark:border-indigo-500/30 dark:hover:border-indigo-400/60 dark:bg-[#181424]",
      iconBg: "bg-indigo-100 dark:bg-indigo-900/40",
      accentColor: "text-indigo-800 dark:text-indigo-300",
      badgeColor: "bg-indigo-100 text-indigo-900 dark:bg-indigo-900/40 dark:text-indigo-200",
      meaning: {
        title: "Was das biologisch bedeutet",
        content: [
          "Schlafstörungen gehören zu den häufigsten Reaktionen auf Krisen. Ein überreiztes Nervensystem weigert sich loszulassen.",
          "Gründe sind abendliches Gedankenkreisen, innere Unruhe und veränderte Schlafrhythmen.",
          "Schlafmangel steigert wiederum Tagesangst und Erschöpfung — ein Teufelskreis entsteht.",
        ],
      },
      actions: {
        title: "Was du tun kannst",
        items: [
          { icon: "🕯️", text: "Feste Aufstehzeiten einhalten — auch an Wochenenden stabilisiert dies den Rhythmus." },
          { icon: "📵", text: "Eine Stunde vor dem Schlafengehen Bildschirme meiden, um Melatonin freizusetzen." },
          { icon: "🛁", text: "Abendritual: warmes Duschen, ruhige Musik oder Lesen stimmen auf Ruhe ein." },
          { icon: "🫁", text: "Atemübungen oder Muskelentspannung im Bett beruhigen den Herzschlag." },
          { icon: "📓", text: "Sorgen vor dem Einschlafen kurz in ein Notizbuch schreiben." },
        ],
      },
      help: {
        title: "Wann professionelle Hilfe nötig ist",
        items: [
          "Schwere Schlafstörungen bestehen seit mehr als vier Wochen",
          "Wiederkehrende Alpträume belasten den Tag",
          "Tagesmüdigkeit gefährdet die Arbeit oder das Autofahren",
          "Schlaf bringt über lange Zeit keinerlei Erholung",
        ],
      },
    },
    {
      id: "anger",
      icon: "🔴",
      title: "Wut & Gereiztheit",
      short: "Dünnhäutigkeit, Lärmempfindlichkeit, plötzliche Wutausbrüche.",
      color: "from-rose-50/90 to-red-50/70 border-rose-200 hover:border-rose-400 dark:from-rose-950/25 dark:to-red-950/15 dark:border-rose-500/30 dark:hover:border-rose-400/60 dark:bg-[#181424]",
      iconBg: "bg-rose-100 dark:bg-rose-900/40",
      accentColor: "text-rose-800 dark:text-rose-300",
      badgeColor: "bg-rose-100 text-rose-900 dark:bg-rose-900/40 dark:text-rose-200",
      meaning: {
        title: "Was das biologisch bedeutet",
        content: [
          "Wut ist eine gesunde Reaktion auf Unrecht, Verlust und Ohnmacht. Im Krieg schützt Wut oft vor lähmender Trauer.",
          "Erhöhte Gereiztheit zeigt meist an, dass die seelischen Akkus leer sind.",
          "Wichtig: Wut auf die Lage ist verständlich. Richtet sie sich jedoch gegen Nächste, braucht man dringend Entlastung.",
        ],
      },
      actions: {
        title: "Was du tun kannst",
        items: [
          { icon: "⏸️", text: "Stopp-Moment: Bei Wutanflügen kurz innehalten, bis 10 zählen und lang ausatmen." },
          { icon: "🏃", text: "Körperliche Entladung: Wut ist Energie. Ein zügiger Lauf oder Liegestütze bauen Druck ab." },
          { icon: "✍️", text: "Wutbrief schreiben und anschließend vernichten, um den Kopf frei zu bekommen." },
          { icon: "💬", text: "Ehrlich aussprechen: «Ich bin gerade völlig überreizt» verhindert Streit." },
          { icon: "🔍", text: "Hinterfragen: Oft verbirgt sich hinter Wut verletzte Hilflosigkeit oder Angst." },
        ],
      },
      help: {
        title: "Wann professionelle Hilfe nötig ist",
        items: [
          "Wutausbrüche geraten außer Kontrolle und gefährden Beziehungen",
          "Gewaltimpulse tauchen auf",
          "Anhaltender Selbsthass oder Hass auf andere dominiert das Fühlen",
          "Gereiztheit trat nach einem traumatischen Ereignis schlagartig auf",
        ],
      },
    },
    {
      id: "apathy",
      icon: "🩵",
      title: "Gleichgültigkeit & Taubheit",
      short: "Keine Freude mehr empfinden, innerlich wie betäubt sein.",
      color: "from-cyan-50/90 to-sky-50/70 border-cyan-200 hover:border-cyan-400 dark:from-cyan-950/25 dark:to-sky-950/15 dark:border-cyan-500/30 dark:hover:border-cyan-400/60 dark:bg-[#181424]",
      iconBg: "bg-cyan-100 dark:bg-cyan-900/40",
      accentColor: "text-cyan-800 dark:text-cyan-300",
      badgeColor: "bg-cyan-100 text-cyan-900 dark:bg-cyan-900/40 dark:text-cyan-200",
      meaning: {
        title: "Was das biologisch bedeutet",
        content: [
          "Emotionale Taubheit ist die seelische Narkose. Bei zu viel Schmerz schaltet das Gehirn die Gefühle leise.",
          "Es kann ein Zeichen von Überlastung, Burnout oder schützender Dissoziation sein.",
          "Taubheit ist kein Wesenszug, sondern ein vorübergehender Schutzraum.",
        ],
      },
      actions: {
        title: "Was du tun kannst",
        items: [
          { icon: "🌱", text: "In Minischritten handeln: Statt der ganzen Wohnung erst einmal eine Tasse spülen." },
          { icon: "☀️", text: "Täglich 10–15 Minuten ins Tageslicht gehen — das stabilisiert die Neurobiologie." },
          { icon: "📞", text: "Kontakt zu Vertrauten halten, selbst wenn es nur ein kurzes Lebenszeichen ist." },
          { icon: "🎯", text: "Eine kleine Gefälligkeit für andere tun, um Sinn zu spüren." },
          { icon: "🎵", text: "Düfte, Musik und angenehme Texturen regen die Sinne behutsam an." },
        ],
      },
      help: {
        title: "Wann professionelle Hilfe nötig ist",
        items: [
          "Gleichgültigkeit hält unverändert länger als zwei Wochen an",
          "Lebensüberdruss oder der Wunsch zu verschwinden kommen auf",
          "Essen, Trinken und Körperpflege werden vernachlässigt",
          "Vollständiges Gefühl der Entfremdung von der Realität",
        ],
      },
    },
    {
      id: "concentration",
      icon: "🟣",
      title: "Konzentrationsprobleme",
      short: "Schwierigkeiten beim Lesen, Arbeiten und Behalten von Informationen.",
      color: "from-purple-50/90 to-violet-50/70 border-purple-200 hover:border-purple-400 dark:from-purple-950/25 dark:to-violet-950/15 dark:border-purple-500/30 dark:hover:border-purple-400/60 dark:bg-[#181424]",
      iconBg: "bg-purple-100 dark:bg-purple-900/40",
      accentColor: "text-purple-800 dark:text-purple-300",
      badgeColor: "bg-purple-100 text-purple-900 dark:bg-purple-900/40 dark:text-purple-200",
      meaning: {
        title: "Was das biologisch bedeutet",
        content: [
          "Bei Dauerstress erhält der logische Denkapparat weniger Energie, weil das Gehirn mit Gefahrenabwehr beschäftigt ist.",
          "Gehirnnebel und Vergesslichkeit sind natürliche Begleiterscheinungen anhaltender Bedrohung.",
          "Es ist keine Einbuße von Intelligenz, sondern ein Ausnahmezustand des Nervensystems.",
        ],
      },
      actions: {
        title: "Was du tun kannst",
        items: [
          { icon: "⏱️", text: "Pomodoro-Methode: 25 Minuten fokussieren, dann 5 Minuten echte Bildschirmpause." },
          { icon: "📝", text: "Alles Wichtige aufschreiben, um das Arbeitsgedächtnis zu entlasten." },
          { icon: "📵", text: "Benachrichtigungen und Newsfeeds während konzentrierter Arbeit stummschalten." },
          { icon: "🧩", text: "Große Aufgaben in kleinste, machbare Teilschritte zerlegen." },
          { icon: "💧", text: "Ausreichend Wasser trinken — schon leichte Dehydration mindert die Denkleistung." },
        ],
      },
      help: {
        title: "Wann professionelle Hilfe nötig ist",
        items: [
          "Der Nebel im Kopf hält über Monate trotz Erholungsversuchen an",
          "Konzentrationsstörungen gefährden die berufliche Sicherheit",
          "Auffällige Gedächtnislücken bei jüngsten Ereignissen treten auf",
          "Symptome begannen schlagartig nach einem akuten Trauma",
        ],
      },
    },
  ],
};

export const getSymptoms = (locale = "uk") => {
  return symptomsData[locale] || symptomsData.uk;
};

export const symptoms = symptomsData.uk;
