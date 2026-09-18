const warEffectsData = {
  uk: [
    {
      id: "brain",
      icon: "🧠",
      title: "Мозок і мислення",
      subtitle: "«Туман у голові», проблеми з пам'яттю, неможливість зосередитися.",
      color: "from-purple-50 to-indigo-50/80 dark:from-purple-950/25 dark:to-indigo-950/15 dark:bg-[#181424]",
      border: "border-purple-200 hover:border-purple-400 dark:border-purple-500/30 dark:hover:border-purple-400/60",
      iconBg: "bg-purple-100 dark:bg-purple-900/40",
      accentColor: "text-purple-800 dark:text-purple-300",
      badgeColor: "bg-purple-100 text-purple-900 dark:bg-purple-900/40 dark:text-purple-200",
      headerGradient: "from-purple-100 to-indigo-50 dark:from-purple-950/60 dark:to-[#171324]",
      article: {
        intro:
          "Хронічний стрес змінює структуру роботи мозку. Це не метафора — це нейробіологія. Розуміння того, що відбувається, допомагає зняти провину за «непродуктивність».",
        blocks: [
          {
            icon: "🔬",
            label: "Що відбувається в мозку під час тривалого стресу",
            type: "paragraphs",
            content: [
              "Мигдалеподібне тіло (амигдала) — центр страху і загрози — перебуває в гіперактивному стані. Воно постійно сканує середовище на небезпеку і надсилає сигнали тривоги навіть тоді, коли прямої загрози немає.",
              "Префронтальна кора — зона, відповідальна за логіку, планування, концентрацію та самоконтроль — отримує менше ресурсів. Мозок вважає: якщо є загроза виживанню, планувати відпустку чи писати звіт — не пріоритет.",
              "Гіпокамп — центр пам'яті — страждає від хронічно підвищеного кортизолу. Звідси «провали» в пам'яті, забуті зустрічі, відчуття, що слова вилітають з голови.",
            ],
          },
          {
            icon: "📋",
            label: "Як це виглядає у житті",
            type: "list",
            items: [
              "Важко дочитати навіть коротку статтю до кінця",
              "Забуваєш, навіщо зайшов/ла в кімнату",
              "Прості рішення (що приготувати на обід) викликають ступор",
              "Відчуття «вати» або «туману» в голові",
              "Складно планувати далі, ніж на один день уперед",
            ],
          },
          {
            icon: "💡",
            label: "Що допомагає відновити роботу мозку",
            type: "tips",
            items: [
              { icon: "📝", text: "Зовнішній мозок: записуй усе — списки справ, покупки, ідеї. Не навантажуй пам'ять тим, що можна записати." },
              { icon: "⏱️", text: "Монозадачність: одна справа за раз. Мультизадачність спалює і без того дефіцитний ресурс." },
              { icon: "🚶", text: "Рух на свіжому повітрі: навіть 20 хвилин спокійної ходьби знижують кортизол і стимулюють нейропластичність." },
              { icon: "💤", text: "Сон — головний пріоритет: мозок «очищується» від токсинів тільки під час глибокого сну." },
              { icon: "🧩", text: "Знизь планку: прийняти, що зараз ти працюєш на 60–70% від звичного — це реалізм, а не лінь." },
            ],
          },
        ],
      },
    },
    {
      id: "sleep",
      icon: "🌙",
      title: "Сон",
      subtitle: "Безсоння, поверхневий сон, тривожні пробудження, нічні кошмари.",
      color: "from-blue-50 to-indigo-50/80 dark:from-blue-950/25 dark:to-indigo-950/15 dark:bg-[#181424]",
      border: "border-blue-200 hover:border-blue-400 dark:border-blue-500/30 dark:hover:border-blue-400/60",
      iconBg: "bg-blue-100 dark:bg-blue-900/40",
      accentColor: "text-blue-800 dark:text-blue-300",
      badgeColor: "bg-blue-100 text-blue-900 dark:bg-blue-900/40 dark:text-blue-200",
      headerGradient: "from-blue-100 to-indigo-50 dark:from-blue-950/60 dark:to-[#171324]",
      article: {
        intro:
          "Сон — це не просто відпочинок. Це час, коли мозок переробляє емоції, відновлює тіло і консолідує пам'ять. Стрес руйнує цей процес на фізіологічному рівні.",
        blocks: [
          {
            icon: "🔬",
            label: "Чому сон руйнується під час стресу",
            type: "paragraphs",
            content: [
              "В умовах постійної небезпеки нервова система залишається «на варті» навіть уночі. Рівень кортизолу та адреналіну залишається підвищеним — тому мозок не може перейти в стан глибокого сну.",
              "Нічні пробудження, яскраві тривожні сновидіння, відчуття втоми зранку — типові симптоми гіперзбудження нервової системи.",
              "Недосип підсилює тривогу та дратівливість — формується замкнене коло.",
            ],
          },
          {
            icon: "📋",
            label: "Як це виглядає у житті",
            type: "list",
            items: [
              "Лягаєш спати, але думки «крутяться» і не вимикаються",
              "Прокидаєшся о 3–4 ранку і довго не можеш заснути знову",
              "Вранці відчуваєш себе більш втомленим/ою, ніж увечері",
              "Яскраві або тривожні сни, що залишають відчуття важкості",
              "Вдень хочеться спати, але вночі сон не приходить",
            ],
          },
          {
            icon: "💡",
            label: "Що допомагає покращити сон",
            type: "tips",
            items: [
              { icon: "🕯️", text: "Режим: лягай і вставай в один час — це стабілізує циркадний ритм." },
              { icon: "📵", text: "Відклади телефон за 60 хвилин до сну. Новини блокують мелатонін." },
              { icon: "🌡️", text: "Прохолодна кімната (18–20°C) сигналізує мозку про нічний режим." },
              { icon: "📓", text: "За 30 хвилин до сну запиши все, що турбує — вивантаж голову." },
              { icon: "🫁", text: "Дихання 4-7-8 перед сном активує парасимпатичну нервову систему." },
            ],
          },
        ],
      },
    },
    {
      id: "relationships",
      icon: "❤️",
      title: "Стосунки",
      subtitle: "Віддалення, конфлікти, складність говорити про почуття.",
      color: "from-rose-50 to-pink-50/80 dark:from-rose-950/25 dark:to-pink-950/15 dark:bg-[#181424]",
      border: "border-rose-200 hover:border-rose-400 dark:border-rose-500/30 dark:hover:border-rose-400/60",
      iconBg: "bg-rose-100 dark:bg-rose-900/40",
      accentColor: "text-rose-800 dark:text-rose-300",
      badgeColor: "bg-rose-100 text-rose-900 dark:bg-rose-900/40 dark:text-rose-200",
      headerGradient: "from-rose-100 to-pink-50 dark:from-rose-950/60 dark:to-[#171324]",
      article: {
        intro:
          "Війна впливає не лише на окрему людину — вона проникає у стосунки між людьми, змінює спілкування, близькість і здатність бути поруч.",
        blocks: [
          {
            icon: "🔬",
            label: "Що відбувається зі стосунками під час стресу",
            type: "paragraphs",
            content: [
              "Коли кожен член сім'ї переживає власний стрес, стає важко бути емоційно доступним для іншого. Люди замикаються у собі через брак ресурсу.",
              "Хронічна тривога підвищує дратівливість, тому конфлікти через дрібниці стають частішими.",
              "Іноді виникає відчуття відчуженості навіть від найближчих людей — це нормальна реакція виживання.",
            ],
          },
          {
            icon: "📋",
            label: "Як це виглядає у житті",
            type: "list",
            items: [
              "Не хочеться говорити про те, що відчуваєш — легше мовчати",
              "Дрібні конфлікти виходять з-під контролю",
              "Відчуваєш себе самотнім/ою поряд із близькими",
              "Важко приймати турботу або просити про допомогу",
              "Не знаєш, як підтримати когось, коли сам/сама виснажений/а",
            ],
          },
          {
            icon: "💡",
            label: "Що допомагає зберегти близькість",
            type: "tips",
            items: [
              { icon: "🗣️", text: "Говори про стан, а не звинувачуй: «Я зараз дуже втомлений/а»." },
              { icon: "🤝", text: "Маленькі спільні ритуали — кава вранці чи вечірня прогулянка." },
              { icon: "💬", text: "Запитай близького «Як ти?» і просто вислухай без порад." },
              { icon: "🔇", text: "Якщо потрібно побути на самоті — скажи про це чесно і м'яко." },
              { icon: "👨‍👩‍👧", text: "Консультація з психологом допоможе повернути порозуміння." },
            ],
          },
        ],
      },
    },
    {
      id: "body",
      icon: "🍽️",
      title: "Тіло",
      subtitle: "Апетит, напруження, втома, фізичні реакції на стрес.",
      color: "from-emerald-50 to-green-50/80 dark:from-emerald-950/25 dark:to-green-950/15 dark:bg-[#181424]",
      border: "border-emerald-200 hover:border-emerald-400 dark:border-emerald-500/30 dark:hover:border-emerald-400/60",
      iconBg: "bg-emerald-100 dark:bg-emerald-900/40",
      accentColor: "text-emerald-800 dark:text-emerald-300",
      badgeColor: "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-200",
      headerGradient: "from-emerald-100 to-green-50 dark:from-emerald-950/60 dark:to-[#171324]",
      article: {
        intro:
          "Тіло і психіка — єдина система. Те, що відбувається в голові, завжди відображається у тілі. І навпаки.",
        blocks: [
          {
            icon: "🔬",
            label: "Як стрес проявляється у тілі",
            type: "paragraphs",
            content: [
              "Хронічний стрес тримає тіло в режимі «бийся або тікай». М'язи постійно напружені, травлення сповільнене, імунітет пригнічений.",
              "Кортизол впливає на апетит: у одних він різко знижується, в інших з'являється потяг до солодкого.",
              "Часті головні болі, спазми в шиї та спині — це соматичне вираження тривоги.",
            ],
          },
          {
            icon: "📋",
            label: "Як це виглядає у житті",
            type: "list",
            items: [
              "Постійне напруження в плечах, шиї або щелепі",
              "Головні болі без очевидної медичної причини",
              "Зниження або різке підвищення апетиту",
              "Часті застуди через знижений імунітет",
              "Відчуття важкості в грудях або «клубка» в горлі",
            ],
          },
          {
            icon: "💡",
            label: "Як допомогти тілу",
            type: "tips",
            items: [
              { icon: "🚶", text: "15–20 хвилин ходьби спалюють гормони стресу." },
              { icon: "🫁", text: "Дихання животом розслабляє діафрагму та м'язи спини." },
              { icon: "🛁", text: "Теплий душ або ванна знімають спазми судин і м'язів." },
              { icon: "🍎", text: "Регулярне тепле пиття та проста збалансована їжа." },
              { icon: "🤲", text: "Самомасаж шиї та плечей зменшує соматичний блок." },
            ],
          },
        ],
      },
    },
    {
      id: "work",
      icon: "💼",
      title: "Робота",
      subtitle: "Втрата мотивації, труднощі з концентрацією, відкладання справ.",
      color: "from-amber-50 to-yellow-50/80 dark:from-amber-950/25 dark:to-yellow-950/15 dark:bg-[#181424]",
      border: "border-amber-200 hover:border-amber-400 dark:border-amber-500/30 dark:hover:border-amber-400/60",
      iconBg: "bg-amber-100 dark:bg-amber-900/40",
      accentColor: "text-amber-800 dark:text-amber-300",
      badgeColor: "bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-200",
      headerGradient: "from-amber-100 to-yellow-50 dark:from-amber-950/60 dark:to-[#171324]",
      article: {
        intro:
          "Продуктивність під час війни не може бути такою ж, як у мирний час. Твій організм витрачає колосальну енергію на адаптацію.",
        blocks: [
          {
            icon: "🔬",
            label: "Чому важко працювати під час стресу",
            type: "paragraphs",
            content: [
              "Мозок у режимі загрози відключає енергозатратні процеси планування та абстрактного мислення.",
              "Прокрастинація під час стресу — це не лінь, а захисний щит перевантаженої психіки.",
              "Втрата відчуття сенсу завдань («навіщо це?») — природна екзистенційна реакція на війну.",
            ],
          },
          {
            icon: "📋",
            label: "Як це виглядає у житті",
            type: "list",
            items: [
              "Сидиш перед екраном і не можеш почати навіть просте завдання",
              "Робота, яка займала годину, тепер розтягується на пів дня",
              "Постійне відчуття провини за низьку швидкість",
              "Відсутність задоволення від завершених проєктів",
              "Емоційне вигорання від повсякденної рутини",
            ],
          },
          {
            icon: "💡",
            label: "Як повернути продуктивність",
            type: "tips",
            items: [
              { icon: "📌", text: "Вибери тільки 1 головне завдання на робочий день." },
              { icon: "⏱️", text: "Працюй блоками по 20 хвилин із обов'язковими перервами." },
              { icon: "🧩", text: "Розбий велике завдання на крихітні мікро-кроки." },
              { icon: "🎯", text: "Хвали себе за будь-яку виконану дію без знецінення." },
              { icon: "💬", text: "Чесно комунікуй реалістичні дедлайни з колегами." },
            ],
          },
        ],
      },
    },
    {
      id: "future",
      icon: "🌫️",
      title: "Майбутнє",
      subtitle: "Відчуття невизначеності, провина за відпочинок, втрата планів.",
      color: "from-slate-50 to-gray-50/80 dark:from-slate-900/40 dark:to-gray-900/30 dark:bg-[#181424]",
      border: "border-slate-200 hover:border-slate-400 dark:border-slate-700/60 dark:hover:border-slate-500/80",
      iconBg: "bg-slate-100 dark:bg-slate-800/70",
      accentColor: "text-slate-800 dark:text-slate-200",
      badgeColor: "bg-slate-100 text-slate-800 dark:bg-slate-800/60 dark:text-slate-200",
      headerGradient: "from-slate-100 to-gray-50 dark:from-slate-900/70 dark:to-[#171324]",
      article: {
        intro:
          "Невизначеність — одне з найважчих психологічних навантажень. Мозок прагне контролю, але війна змушує жити в горизонті кількох годин.",
        blocks: [
          {
            icon: "🔬",
            label: "Чому майбутнє лякає під час війни",
            type: "paragraphs",
            content: [
              "Війна руйнує звичні життєві орієнтири і відчуття передбачуваності.",
              "Провина вцілілого змушує відчувати сором за будь-які особисті плани чи мрії.",
              "Звуження горизонту планування — це природний захисний механізм від розчарувань.",
            ],
          },
          {
            icon: "📋",
            label: "Як це виглядає у житті",
            type: "list",
            items: [
              "«Немає сенсу щось планувати, все одно все зруйнується»",
              "Страх купувати речі або починати навчання",
              "Сором перед тими, хто втратив дім чи близьких",
              "Думки про майбутній рік викликають паралізуючу тривогу",
              "Відчуття замороженого, відкладеного на потім життя",
            ],
          },
          {
            icon: "💡",
            label: "Як повернути відчуття перспективи",
            type: "tips",
            items: [
              { icon: "📅", text: "Плануй не на роки, а на найближчі 2–3 дні." },
              { icon: "🌱", text: "Фокусуйся на зоні свого прямого впливу прямо зараз." },
              { icon: "💆", text: "Дозволь собі відпочинок — зберегти себе означає зберегти країну." },
              { icon: "🤝", text: "Донати та допомога іншим повертають відчуття сенсу." },
              { icon: "📖", text: "Фіксуй маленькі щоденні перемоги у щоденнику." },
            ],
          },
        ],
      },
    },
  ],

  en: [
    {
      id: "brain",
      icon: "🧠",
      title: "Brain & Cognition",
      subtitle: "«Brain fog», memory lapses, difficulty focusing on simple tasks.",
      color: "from-purple-50 to-indigo-50/80 dark:from-purple-950/25 dark:to-indigo-950/15 dark:bg-[#181424]",
      border: "border-purple-200 hover:border-purple-400 dark:border-purple-500/30 dark:hover:border-purple-400/60",
      iconBg: "bg-purple-100 dark:bg-purple-900/40",
      accentColor: "text-purple-800 dark:text-purple-300",
      badgeColor: "bg-purple-100 text-purple-900 dark:bg-purple-900/40 dark:text-purple-200",
      headerGradient: "from-purple-100 to-indigo-50 dark:from-purple-950/60 dark:to-[#171324]",
      article: {
        intro:
          "Chronic survival stress fundamentally rewires brain pathways. Understanding these neurobiological shifts helps release the guilt of reduced productivity.",
        blocks: [
          {
            icon: "🔬",
            label: "What happens in the brain during sustained trauma",
            type: "paragraphs",
            content: [
              "The amygdala — the alarm and threat processor — enters chronic hyperactivation, scanning continuously for danger even in peaceful moments.",
              "The prefrontal cortex — responsible for reasoning, sustained focus, and self-regulation — receives fewer resources, as survival takes total metabolic priority.",
              "The hippocampus — critical for memory consolidation — is dampened by sustained high cortisol, explaining memory blanks and mental haziness.",
            ],
          },
          {
            icon: "📋",
            label: "How it manifests in daily life",
            type: "list",
            items: [
              "Struggling to finish reading even a short news article",
              "Entering a room and forgetting what you came for",
              "Elementary choices (what to cook) feeling paralyzing",
              "A heavy feeling of mental fog or numbness",
              "Inability to plan further than twenty-four hours ahead",
            ],
          },
          {
            icon: "💡",
            label: "Evidence-based tools for cognitive recovery",
            type: "tips",
            items: [
              { icon: "📝", text: "Externalize memory: write everything down immediately into lists or phone notes." },
              { icon: "⏱️", text: "Mono-tasking: tackle one single task at a time; multitasking drains limited glycogen." },
              { icon: "🚶", text: "Gentle walking: 20 minutes in fresh air reduces circulating cortisol levels." },
              { icon: "💤", text: "Prioritize sleep: the glymphatic system cleanses cellular waste only during deep rest." },
              { icon: "🧩", text: "Lower expectations: operating at 60% capacity right now is realistic survival wisdom." },
            ],
          },
        ],
      },
    },
    {
      id: "sleep",
      icon: "🌙",
      title: "Sleep Architecture",
      subtitle: "Insomnia, fragmented sleep, sudden adrenaline awakenings, nightmares.",
      color: "from-blue-50 to-indigo-50/80 dark:from-blue-950/25 dark:to-indigo-950/15 dark:bg-[#181424]",
      border: "border-blue-200 hover:border-blue-400 dark:border-blue-500/30 dark:hover:border-blue-400/60",
      iconBg: "bg-blue-100 dark:bg-blue-900/40",
      accentColor: "text-blue-800 dark:text-blue-300",
      badgeColor: "bg-blue-100 text-blue-900 dark:bg-blue-900/40 dark:text-blue-200",
      headerGradient: "from-blue-100 to-indigo-50 dark:from-blue-950/60 dark:to-[#171324]",
      article: {
        intro:
          "Sleep is not passive downtime. It is when the brain metabolizes emotional trauma and repairs bodily systems. War dysregulates this cycle at a somatic level.",
        blocks: [
          {
            icon: "🔬",
            label: "Why sleep breaks down under threat",
            type: "paragraphs",
            content: [
              "When threat is existential, nighttime cortisol and noradrenaline remain elevated, preventing the shift into slow-wave restorative sleep.",
              "Nocturnal awakenings at 3–4 AM and visceral nightmares are classical signs of autonomic hyperarousal.",
              "Sleep debt exacerbates daytime anxiety, producing an exhausting vicious loop.",
            ],
          },
          {
            icon: "📋",
            label: "How it manifests in daily life",
            type: "list",
            items: [
              "Lying in bed with racing, unstoppable thoughts",
              "Waking at 3 AM with heart racing and unable to fall back asleep",
              "Waking up feeling significantly more exhausted than before sleeping",
              "Vivid nightmares that leave a heavy emotional residue",
              "Severe daytime drowsiness coupled with nighttime vigilance",
            ],
          },
          {
            icon: "💡",
            label: "Practical sleep stabilization practices",
            type: "tips",
            items: [
              { icon: "🕯️", text: "Consistent rhythm: maintain identical waking times to calibrate circadian clocks." },
              { icon: "📵", text: "Put screens away 60 minutes prior to bedtime to enable natural melatonin release." },
              { icon: "🌡️", text: "A cool room (18–20°C) signals the hypothalamus that nighttime recovery has started." },
              { icon: "📓", text: "Worry dump: write down lingering concerns 30 minutes before bed." },
              { icon: "🫁", text: "4-7-8 breathing lying down triggers the parasympathetic calming response." },
            ],
          },
        ],
      },
    },
    {
      id: "relationships",
      icon: "❤️",
      title: "Relationships",
      subtitle: "Emotional withdrawal, short tempers, friction with close partners.",
      color: "from-rose-50 to-pink-50/80 dark:from-rose-950/25 dark:to-pink-950/15 dark:bg-[#181424]",
      border: "border-rose-200 hover:border-rose-400 dark:border-rose-500/30 dark:hover:border-rose-400/60",
      iconBg: "bg-rose-100 dark:bg-rose-900/40",
      accentColor: "text-rose-800 dark:text-rose-300",
      badgeColor: "bg-rose-100 text-rose-900 dark:bg-rose-900/40 dark:text-rose-200",
      headerGradient: "from-rose-100 to-pink-50 dark:from-rose-950/60 dark:to-[#171324]",
      article: {
        intro:
          "War does not just impact isolated individuals; it infiltrates family dynamics, communication habits, and our capacity for tenderness.",
        blocks: [
          {
            icon: "🔬",
            label: "Interpersonal dynamics under survival pressure",
            type: "paragraphs",
            content: [
              "When both partners carry depleted nervous systems, mutual empathy diminishes simply due to lack of bio-emotional reserves.",
              "Chronic alarm heightens defensive reactions, turning trivial misunderstandings into explosive confrontations.",
              "Feeling alienated even around loved ones is a common dissociative protective response.",
            ],
          },
          {
            icon: "📋",
            label: "How it manifests in daily life",
            type: "list",
            items: [
              "Reluctance to talk about feelings — withdrawal feels safer",
              "Small domestic irritations quickly spiraling out of control",
              "Feeling profoundly lonely while in the same room with family",
              "Difficulty accepting affection or asking for help",
              "Feeling unable to support someone when your own cup is completely empty",
            ],
          },
          {
            icon: "💡",
            label: "Approaches to protect closeness",
            type: "tips",
            items: [
              { icon: "🗣️", text: "Describe state, avoid blame: «I feel exhausted right now» instead of accusations." },
              { icon: "🤝", text: "Maintain tiny shared anchors: morning tea or a silent walk together." },
              { icon: "💬", text: "Ask «How are you?» and simply hold space without offering unsolicited fixes." },
              { icon: "🔇", text: "Communicate clearly when you need solitude: «I need thirty minutes to recharge»." },
              { icon: "👨‍👩‍👧", text: "Professional counseling can offer valuable neutral ground to rebuild mutual safety." },
            ],
          },
        ],
      },
    },
    {
      id: "body",
      icon: "🍽️",
      title: "Somatic Body Responses",
      subtitle: "Appetite swings, muscular tightness, exhaustion, heart palpitations.",
      color: "from-emerald-50 to-green-50/80 dark:from-emerald-950/25 dark:to-green-950/15 dark:bg-[#181424]",
      border: "border-emerald-200 hover:border-emerald-400 dark:border-emerald-500/30 dark:hover:border-emerald-400/60",
      iconBg: "bg-emerald-100 dark:bg-emerald-900/40",
      accentColor: "text-emerald-800 dark:text-emerald-300",
      badgeColor: "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-200",
      headerGradient: "from-emerald-100 to-green-50 dark:from-emerald-950/60 dark:to-[#171324]",
      article: {
        intro:
          "The mind and body form one indivisible biological circuit. Psychological terror inevitably manifests in physical tissues, and bodily care directly calms the mind.",
        blocks: [
          {
            icon: "🔬",
            label: "How chronic threat manifests somatically",
            type: "paragraphs",
            content: [
              "Fight-or-flight hormones keep muscles permanently braced, contract gut motility, and suppress immune cell responsiveness.",
              "Elevated cortisol disrupts appetite regulation, causing either complete food aversion or intense cravings for quick sugar.",
              "Recurrent tension headaches, jaw clenching, and neck spasms are typical somatic expressions of unprocessed stress.",
            ],
          },
          {
            icon: "📋",
            label: "How it manifests in daily life",
            type: "list",
            items: [
              "Chronic tightness in shoulders, neck, or teeth grinding",
              "Recurring tension headaches without apparent neurological pathology",
              "Eating much less than usual, or compulsive emotional eating",
              "Frequent infections or sluggish recovery from common colds",
              "A persistent sensation of chest tightness or a lump in the throat",
            ],
          },
          {
            icon: "💡",
            label: "Practical somatic grounding tools",
            type: "tips",
            items: [
              { icon: "🚶", text: "15–20 minutes of steady walking burns off accumulated stress neurochemicals." },
              { icon: "🫁", text: "Diaphragmatic belly breathing directly releases tension along the spine." },
              { icon: "🛁", text: "Warm water or showers vasodilate blood vessels, signaling muscular safety." },
              { icon: "🍎", text: "Eat warm, simple foods regularly; skipping meals spikes adrenaline." },
              { icon: "🤲", text: "Gentle self-massage of neck and temples helps unlock somatic tension." },
            ],
          },
        ],
      },
    },
    {
      id: "work",
      icon: "💼",
      title: "Work & Functionality",
      subtitle: "Loss of motivation, procrastination, severe cognitive drag.",
      color: "from-amber-50 to-yellow-50/80 dark:from-amber-950/25 dark:to-yellow-950/15 dark:bg-[#181424]",
      border: "border-amber-200 hover:border-amber-400 dark:border-amber-500/30 dark:hover:border-amber-400/60",
      iconBg: "bg-amber-100 dark:bg-amber-900/40",
      accentColor: "text-amber-800 dark:text-amber-300",
      badgeColor: "bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-200",
      headerGradient: "from-amber-100 to-yellow-50 dark:from-amber-950/60 dark:to-[#171324]",
      article: {
        intro:
          "Wartime workplace productivity cannot match peacetime baselines. Your organism spends immense subconscious energy simply navigating collective stress.",
        blocks: [
          {
            icon: "🔬",
            label: "Why cognitive work stalls under chronic crisis",
            type: "paragraphs",
            content: [
              "Evolution prioritizes physical survival over complex executive planning and creative work.",
              "Procrastination in high-stress environments is not laziness; it is a defensive circuit avoiding mental overwhelm.",
              "Questioning the purpose of tasks («what is the point of this?») is a normal existential response to war.",
            ],
          },
          {
            icon: "📋",
            label: "How it manifests in daily life",
            type: "list",
            items: [
              "Sitting frozen in front of your screen, unable to type the first word",
              "Tasks that took one hour taking three to four hours to accomplish",
              "Persistent guilt over falling behind or moving too slowly",
              "Absence of satisfaction even after completing major milestones",
              "Exhaustion simply from keeping up with everyday workplace communications",
            ],
          },
          {
            icon: "💡",
            label: "Strategies to sustain workable focus",
            type: "tips",
            items: [
              { icon: "📌", text: "Define just 1 non-negotiable priority per workday." },
              { icon: "⏱️", text: "Work in brief 20-minute sprints followed by strict mental rest intervals." },
              { icon: "🧩", text: "Deconstruct complex tasks into atomic, effortless sub-steps." },
              { icon: "🎯", text: "Acknowledge every tiny completed action without self-deprecation." },
              { icon: "💬", text: "Communicate realistic timelines openly with team members." },
            ],
          },
        ],
      },
    },
    {
      id: "future",
      icon: "🌫️",
      title: "The Future & Perspective",
      subtitle: "Chronic uncertainty, survivor's guilt, inability to plan.",
      color: "from-slate-50 to-gray-50/80 dark:from-slate-900/40 dark:to-gray-900/30 dark:bg-[#181424]",
      border: "border-slate-200 hover:border-slate-400 dark:border-slate-700/60 dark:hover:border-slate-500/80",
      iconBg: "bg-slate-100 dark:bg-slate-800/70",
      accentColor: "text-slate-800 dark:text-slate-200",
      badgeColor: "bg-slate-100 text-slate-800 dark:bg-slate-800/60 dark:text-slate-200",
      headerGradient: "from-slate-100 to-gray-50 dark:from-slate-900/70 dark:to-[#171324]",
      article: {
        intro:
          "Uncertainty is among the heaviest psychological burdens. Our brains evolved to seek patterns and predictability, which war ruthlessly shatters.",
        blocks: [
          {
            icon: "🔬",
            label: "Why the future feels terrifying during war",
            type: "paragraphs",
            content: [
              "War invalidates long-term roadmaps, leaving us feeling stripped of control over our destiny.",
              "Survivor's guilt imposes profound shame whenever we contemplate personal joy or future goals.",
              "Collapsing our planning horizon down to days is an adaptive shield against constant heartbreak.",
            ],
          },
          {
            icon: "📋",
            label: "How it manifests in daily life",
            type: "list",
            items: [
              "«Why bother planning when everything can change in a second?»",
              "Feeling intense guilt whenever resting or enjoying personal time",
              "Inability to imagine where you will be in six months or a year",
              "Thoughts of long-term milestones inducing panic rather than excitement",
              "Feeling as though your real life has been paused indefinitely",
            ],
          },
          {
            icon: "💡",
            label: "Practices to rebuild internal agency",
            type: "tips",
            items: [
              { icon: "📅", text: "Plan in micro-horizons: focus on the upcoming 48 hours rather than next year." },
              { icon: "🌱", text: "Focus entirely on actions strictly within your direct sphere of control." },
              { icon: "💆", text: "Embrace rest without apology: staying functional is your service to your community." },
              { icon: "🤝", text: "Small acts of solidarity and donations restore meaning and counteract helplessness." },
              { icon: "📖", text: "Record brief daily affirmations of gratitude in your journal." },
            ],
          },
        ],
      },
    },
  ],

  de: [
    {
      id: "brain",
      icon: "🧠",
      title: "Gehirn & Denken",
      subtitle: "«Gehirnnebel», Gedächtnislücken, Schwierigkeiten sich zu konzentrieren.",
      color: "from-purple-50 to-indigo-50/80 dark:from-purple-950/25 dark:to-indigo-950/15 dark:bg-[#181424]",
      border: "border-purple-200 hover:border-purple-400 dark:border-purple-500/30 dark:hover:border-purple-400/60",
      iconBg: "bg-purple-100 dark:bg-purple-900/40",
      accentColor: "text-purple-800 dark:text-purple-300",
      badgeColor: "bg-purple-100 text-purple-900 dark:bg-purple-900/40 dark:text-purple-200",
      headerGradient: "from-purple-100 to-indigo-50 dark:from-purple-950/60 dark:to-[#171324]",
      article: {
        intro:
          "Dauerhafter Kriegsstress verändert die Funktionsweise des Gehirns. Dies ist reine Neurobiologie — das Verständnis hilft, Schuldgefühle wegen verminderter Leistung abzubauen.",
        blocks: [
          {
            icon: "🔬",
            label: "Was im Gehirn unter anhaltendem Stress geschieht",
            type: "paragraphs",
            content: [
              "Die Amygdala — das Gefahrenzentrum — verharrt im Daueralarm und scannt die Umwelt ununterbrochen nach Bedrohungen ab.",
              "Der präfrontale Kortex — zuständig für Logik, Konzentration und Planung — erhält weniger Energie, da das nackte Überleben Vorrang hat.",
              "Der Hippocampus leidet unter chronisch erhöhtem Cortisol, was Gedächtnislücken und Wortfindungsstörungen erklärt.",
            ],
          },
          {
            icon: "📋",
            label: "Wie sich das im Alltag zeigt",
            type: "list",
            items: [
              "Selbst kurze Artikel können kaum bis zum Ende gelesen werden",
              "Man betritt einen Raum und vergisst, was man wollte",
              "Einfache Entscheidungen (was man kochen soll) lösen Blockaden aus",
              "Gefühl von Watte oder Nebel im Kopf",
              "Unfähigkeit, weiter als einen Tag im Voraus zu planen",
            ],
          },
          {
            icon: "💡",
            label: "Was dem Gehirn bei der Regeneration hilft",
            type: "tips",
            items: [
              { icon: "📝", text: "Externes Gedächtnis: Schreibe alles auf — entlaste den Kopf von Speicheraufgaben." },
              { icon: "⏱️", text: "Monotasking: Immer nur eine einzige Aufgabe bearbeiten; Multitasking erschöpft die Reserven." },
              { icon: "🚶", text: "Bewegung an der frischen Luft: 20 Minuten Gehen senken den Cortisolspiegel nachweislich." },
              { icon: "💤", text: "Schlaf als oberste Priorität: Das Gehirn reinigt sich nur im Tiefschlaf von toxischen Stoffen." },
              { icon: "🧩", text: "Ansprüche senken: Zu akzeptieren, dass man derzeit mit 60% Kraft arbeitet, ist Selbstschutz." },
            ],
          },
        ],
      },
    },
    {
      id: "sleep",
      icon: "🌙",
      title: "Schlaf",
      subtitle: "Schlaflosigkeit, unruhiger Schlaf, nächtliches Aufschrecken, Alpträume.",
      color: "from-blue-50 to-indigo-50/80 dark:from-blue-950/25 dark:to-indigo-950/15 dark:bg-[#181424]",
      border: "border-blue-200 hover:border-blue-400 dark:border-blue-500/30 dark:hover:border-blue-400/60",
      iconBg: "bg-blue-100 dark:bg-blue-900/40",
      accentColor: "text-blue-800 dark:text-blue-300",
      badgeColor: "bg-blue-100 text-blue-900 dark:bg-blue-900/40 dark:text-blue-200",
      headerGradient: "from-blue-100 to-indigo-50 dark:from-blue-950/60 dark:to-[#171324]",
      article: {
        intro:
          "Schlaf ist aktive Erholung: Hier verarbeitet das Gehirn Traumata und erneuert Zellen. Bedrohung stört diesen Prozess auf physiologischer Ebene.",
        blocks: [
          {
            icon: "🔬",
            label: "Warum Schlaf in Krisenzeiten leidet",
            type: "paragraphs",
            content: [
              "Das Nervensystem bleibt auch nachts in Alarmbereitschaft. Cortisol- und Adrenalinwerte sinken abends nicht tief genug ab.",
              "Nächtliches Erwachen um 3–4 Uhr und intensive Alpträume sind typische Zeichen von autonomer Übererregung.",
              "Schlafmangel verstärkt wiederum die Tagesangst — ein Teufelskreis entsteht.",
            ],
          },
          {
            icon: "📋",
            label: "Wie sich das im Alltag zeigt",
            type: "list",
            items: [
              "Man geht ins Bett, doch die Gedanken kreisen pausenlos",
              "Erwachen mitten in der Nacht ohne wieder einschlafen zu können",
              "Morgens fühlt man sich noch erschöpfter als am Vorabend",
              "Belastende Träume, die ein schweres Gefühl hinterlassen",
              "Tagsüber Müdigkeit, nachts jedoch quälende Schlaflosigkeit",
            ],
          },
          {
            icon: "💡",
            label: "Hilfen für besseren Schlaf",
            type: "tips",
            items: [
              { icon: "🕯️", text: "Feste Aufstehzeiten stabilisieren die innere Uhr des Körpers." },
              { icon: "📵", text: "Mindestens 60 Minuten vor dem Schlafen keine Nachrichten oder Bildschirme mehr." },
              { icon: "🌡️", text: "Kühle Raumtemperaturen (18–20°C) signalisieren dem Gehirn Ruhe." },
              { icon: "📓", text: "Sorgengedanken vor dem Schlafengehen auf Papier niederschreiben." },
              { icon: "🫁", text: "Die 4-7-8 Atemtechnik im Liegen aktiviert das vegetative Beruhigungssystem." },
            ],
          },
        ],
      },
    },
    {
      id: "relationships",
      icon: "❤️",
      title: "Beziehungen",
      subtitle: "Rückzug, Streitigkeiten, Schwierigkeiten Gefühle auszusprechen.",
      color: "from-rose-50 to-pink-50/80 dark:from-rose-950/25 dark:to-pink-950/15 dark:bg-[#181424]",
      border: "border-rose-200 hover:border-rose-400 dark:border-rose-500/30 dark:hover:border-rose-400/60",
      iconBg: "bg-rose-100 dark:bg-rose-900/40",
      accentColor: "text-rose-800 dark:text-rose-300",
      badgeColor: "bg-rose-100 text-rose-900 dark:bg-rose-900/40 dark:text-rose-200",
      headerGradient: "from-rose-100 to-pink-50 dark:from-rose-950/60 dark:to-[#171324]",
      article: {
        intro:
          "Krieg trifft nicht nur Einzelne — er dringt in Partnerschaften und Freundschaften ein, verändert Nähe und Belastbarkeit.",
        blocks: [
          {
            icon: "🔬",
            label: "Was unter Dauerbelastung in Partnerschaften passiert",
            type: "paragraphs",
            content: [
              "Wenn jeder mit seinem eigenen Trauma kämpft, fehlt oft die Kraft, für den anderen emotional verfügbar zu sein.",
              "Chronische Alarmbereitschaft steigert Reizbarkeit, sodass Nichtigkeiten eskalieren können.",
              "Sich selbst von den Nächsten entfremdet zu fühlen, ist eine natürliche seelische Schutzreaktion.",
            ],
          },
          {
            icon: "📋",
            label: "Wie sich das im Alltag zeigt",
            type: "list",
            items: [
              "Kein Bedürfnis über Gefühle zu reden — Schweigen fällt leichter",
              "Kleine Missverständnisse eskalieren unerwartet",
              "Gefühl von Einsamkeit trotz der Anwesenheit von Partnern",
              "Schwierigkeit Hilfe oder Zuwendung anzunehmen",
              "Überforderung damit, andere zu trösten, während man selbst am Limit ist",
            ],
          },
          {
            icon: "💡",
            label: "Wege zur Wahrung von Verbundenheit",
            type: "tips",
            items: [
              { icon: "🗣️", text: "Über den eigenen Zustand sprechen: «Ich bin gerade erschöpft» statt Vorwürfen." },
              { icon: "🤝", text: "Kleine gemeinsame Rituale pflegen — ein Tee am Morgen oder ein kurzer Spaziergang." },
              { icon: "💬", text: "Aufmerksam fragen «Wie geht es dir?» und einfach wertfrei zuhören." },
              { icon: "🔇", text: "Ehrlich mitteilen, wenn man kurz Raum für sich allein benötigt." },
              { icon: "👨‍👩‍👧", text: "Paarberatung hilft, destruktive Konfliktspiralen gemeinsam zu verstehen." },
            ],
          },
        ],
      },
    },
    {
      id: "body",
      icon: "🍽️",
      title: "Körper",
      subtitle: "Appetitlosigkeit, Verspannungen, Erschöpfung, Herzklopfen.",
      color: "from-emerald-50 to-green-50/80 dark:from-emerald-950/25 dark:to-green-950/15 dark:bg-[#181424]",
      border: "border-emerald-200 hover:border-emerald-400 dark:border-emerald-500/30 dark:hover:border-emerald-400/60",
      iconBg: "bg-emerald-100 dark:bg-emerald-900/40",
      accentColor: "text-emerald-800 dark:text-emerald-300",
      badgeColor: "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-200",
      headerGradient: "from-emerald-100 to-green-50 dark:from-emerald-950/60 dark:to-[#171324]",
      article: {
        intro:
          "Körper und Seele bilden eine untrennbare Einheit. Seelischer Schmerz schlägt sich im Gewebe nieder — und körperliche Fürsorge beruhigt die Seele.",
        blocks: [
          {
            icon: "🔬",
            label: "Wie sich Stress im Körper festsetzt",
            type: "paragraphs",
            content: [
              "Chronischer Stress versetzt die Muskulatur in Dauerspannung, verlangsamt die Verdauung und schwächt das Immunsystem.",
              "Cortisol manipuliert den Appetit — manche verspüren Ekel vor Nahrung, andere Heißhunger auf Zucker.",
              "Spannungskopfschmerzen und Zähneknirschen sind klassische psychosomatische Entladungen.",
            ],
          },
          {
            icon: "📋",
            label: "Wie sich das im Alltag zeigt",
            type: "list",
            items: [
              "Ständige Verkrampfung in Nacken, Schultern oder Kiefer",
              "Kopfschmerzen ohne organischen Befund",
              "Deutliche Appetitschwankungen",
              "Häufige Infektanfälligkeit durch geschwächtes Immunsystem",
              "Engegefühl in der Brust oder ein Kloß im Hals",
            ],
          },
          {
            icon: "💡",
            label: "Wohltuende somatische Hilfe",
            type: "tips",
            items: [
              { icon: "🚶", text: "15–20 Minuten zügiges Spazierengehen baut Stresshormone ab." },
              { icon: "🫁", text: "Tiefes Bauchatmen entkrampft Zwerchfell und Rückenmuskeln." },
              { icon: "🛁", text: "Warmes Baden oder Duschen weitet Gefäße und lockert Gewebe." },
              { icon: "🍎", text: "Regelmäßige warme Mahlzeiten stabilisieren den Blutzuckerspiegel." },
              { icon: "🤲", text: "Sanfte Selbstmassage von Nacken und Schläfen löst Blockaden." },
            ],
          },
        ],
      },
    },
    {
      id: "work",
      icon: "💼",
      title: "Arbeit & Funktionieren",
      subtitle: "Motivationsverlust, Aufschieberitis, schwere mentale Trägheit.",
      color: "from-amber-50 to-yellow-50/80 dark:from-amber-950/25 dark:to-yellow-950/15 dark:bg-[#181424]",
      border: "border-amber-200 hover:border-amber-400 dark:border-amber-500/30 dark:hover:border-amber-400/60",
      iconBg: "bg-amber-100 dark:bg-amber-900/40",
      accentColor: "text-amber-800 dark:text-amber-300",
      badgeColor: "bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-200",
      headerGradient: "from-amber-100 to-yellow-50 dark:from-amber-950/60 dark:to-[#171324]",
      article: {
        intro:
          "Berufliche Leistungsfähigkeit im Krieg kann nicht dem Friedensstandard entsprechen. Dein Organismus verbraucht gewaltige Energie für die seelische Anpassung.",
        blocks: [
          {
            icon: "🔬",
            label: "Warum Arbeiten unter Stress so mühsam ist",
            type: "paragraphs",
            content: [
              "Das Gehirn drosselt abstrakte und zukunftsorientierte Denkprozesse zugunsten des akuten Überlebens.",
              "Aufschieben ist unter extremen Belastungen keine Faulheit, sondern ein Schutzschild vor Überforderung.",
              "Sinnkrisen bezüglich der Arbeit sind eine natürliche Reaktion auf existentielle Erschütterungen.",
            ],
          },
          {
            icon: "📋",
            label: "Wie sich das im Alltag zeigt",
            type: "list",
            items: [
              "Man starrt auf den Monitor und kann nicht einmal die einfachste Mail beginnen",
              "Aufgaben, die früher eine Stunde dauerten, ziehen sich über Stunden",
              "Ständiges schlechtes Gewissen wegen langsamen Vorankommens",
              "Gleichgültigkeit gegenüber Erfolgen oder Lob",
              "Erschöpfung allein durch alltägliche Dienstkommunikation",
            ],
          },
          {
            icon: "💡",
            label: "Schritte zu machbarem Funktionieren",
            type: "tips",
            items: [
              { icon: "📌", text: "Lege täglich genau 1 unaufschiebbare Hauptaufgabe fest." },
              { icon: "⏱️", text: "Arbeite in 20-Minuten-Phasen mit strikten Pausen dazwischen." },
              { icon: "🧩", text: "Zerlege große Vorhaben in winzige, sofort machbare Teilschritte." },
              { icon: "🎯", text: "Erkenne jede bewältigte Kleinigkeit an, statt dich abzuwerten." },
              { icon: "💬", text: "Kommuniziere realistische Fristen transparent mit Kollegen." },
            ],
          },
        ],
      },
    },
    {
      id: "future",
      icon: "🌫️",
      title: "Zukunft & Perspektive",
      subtitle: "Ungewissheit, Schuldgefühle bei Erholung, Verlust von Plänen.",
      color: "from-slate-50 to-gray-50/80 dark:from-slate-900/40 dark:to-gray-900/30 dark:bg-[#181424]",
      border: "border-slate-200 hover:border-slate-400 dark:border-slate-700/60 dark:hover:border-slate-500/80",
      iconBg: "bg-slate-100 dark:bg-slate-800/70",
      accentColor: "text-slate-800 dark:text-slate-200",
      badgeColor: "bg-slate-100 text-slate-800 dark:bg-slate-800/60 dark:text-slate-200",
      headerGradient: "from-slate-100 to-gray-50 dark:from-slate-900/70 dark:to-[#171324]",
      article: {
        intro:
          "Ungewissheit ist eine der schwersten seelischen Belastungen. Das menschliche Gehirn sehnt sich nach Vorhersehbarkeit, die der Krieg radikal zerstört.",
        blocks: [
          {
            icon: "🔬",
            label: "Warum die Zukunft im Krieg Angst macht",
            type: "paragraphs",
            content: [
              "Verlässliche Lebenspläne brechen weg und damit das Gefühl von Kontrolle über das eigene Schicksal.",
              "Überlebensschuld lässt Menschen Scham empfinden, wenn sie an eigene Wünsche oder Erholung denken.",
              "Die Verkürzung des Zeithorizonts auf wenige Tage ist ein Schutzmechanismus gegen Enttäuschungen.",
            ],
          },
          {
            icon: "📋",
            label: "Wie sich das im Alltag zeigt",
            type: "list",
            items: [
              "«Wozu planen, wenn sich ohnehin alles jederzeit ändern kann?»",
              "Schuldgefühle beim Lachen oder Ausruhen",
              "Unfähigkeit, sich in sechs Monaten oder einem Jahr vorzustellen",
              "Gedanken an die Zukunft wecken Panik statt Vorfreude",
              "Gefühl eines auf unbestimmte Zeit eingefrorenen Lebens",
            ],
          },
          {
            icon: "💡",
            label: "Wie man wieder Handlungsspielraum gewinnt",
            type: "tips",
            items: [
              { icon: "📅", text: "Plane in kleinen Zeitfenstern: nur für die kommenden 48 Stunden." },
              { icon: "🌱", text: "Konzentriere dich auf Dinge, die du im Hier und Jetzt kontrollieren kannst." },
              { icon: "💆", text: "Gönne dir Erholung: Dich selbst zu bewahren ist dein Dienst an der Gemeinschaft." },
              { icon: "🤝", text: "Spenden und gegenseitige Hilfe schenken Sinn und mindern Hilflosigkeit." },
              { icon: "📖", text: "Halte kleine positive Lichtblicke täglich schriftlich fest." },
            ],
          },
        ],
      },
    },
  ],
};

export const getWarEffects = (locale = "uk") => {
  return warEffectsData[locale] || warEffectsData.uk;
};

export const warEffects = warEffectsData.uk;
