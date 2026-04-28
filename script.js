const slidesRoot = document.getElementById("slides");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageJumpBtn = document.getElementById("pageJumpBtn");
const pageJumpPanel = document.getElementById("pageJumpPanel");
const printBtn = document.getElementById("printBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const langBtn = document.getElementById("langBtn");
const voiceBtn = document.getElementById("voiceBtn");
const voiceSettingsBtn = document.getElementById("voiceSettingsBtn");
const videoBtn = document.getElementById("videoBtn");
const videoModal = document.getElementById("videoModal");
const videoBackdrop = document.getElementById("videoBackdrop");
const closeVideoBtn = document.getElementById("closeVideoBtn");
const projectVideo = document.getElementById("projectVideo");
const videoTitle = document.getElementById("videoTitle");
const voiceModal = document.getElementById("voiceModal");
const voiceBackdrop = document.getElementById("voiceBackdrop");
const closeVoiceBtn = document.getElementById("closeVoiceBtn");
const voiceTitle = document.getElementById("voiceTitle");
const zhVoiceSelect = document.getElementById("zhVoiceSelect");
const enVoiceSelect = document.getElementById("enVoiceSelect");
const previewVoiceBtn = document.getElementById("previewVoiceBtn");
const resetVoiceBtn = document.getElementById("resetVoiceBtn");
const voiceTip = document.getElementById("voiceTip");

const deckContent = {
  zh: {
    nav: {
      prev: "← 上一页",
      next: "下一页 →",
      fullscreen: "全屏",
      print: "导出PDF",
      video: "播放影片",
      closeVideo: "关闭",
      videoTitle: "项目影片",
      voiceSettings: "语音设置",
      closeVoice: "关闭",
      voiceSettingsTitle: "语音设置",
      previewVoice: "试听当前页",
      resetVoice: "恢复自动推荐",
      voiceTip: "可在英文声音中选择“豆包英文音色（分页音频）”，其余情况下建议优先选择包含 Siri / Neural / Enhanced 的语音。",
      zhVoiceLabel: "中文声音",
      enVoiceLabel: "英文声音",
    },
    slides: [
      {
        type: "cover",
        tag: "融合生命（Convergent Life）下的生物设计实践",
        title: "CircaGuard",
        subtitle: "基于生物节律与AI的青少年睡眠干预系统",
        keywords: "昼夜节律 · AI · 生物发光 · 青少年健康",
      },
      {
        type: "bullets",
        title: "青少年睡眠危机正在发生",
        bullets: ["75% 青少年睡眠不足", "平均睡眠仅 7.2 小时", "超过 60% 存在“社会时差”"],
        highlight: "这不是自律问题，而是生物节律与社会制度的冲突。",
      },
      {
        type: "bullets",
        title: "当前干预方式存在明显局限",
        bullets: [
          "APP：缺乏真实环境监测",
          "可穿戴设备：难以直接改变行为",
          "药物：不适用于青少年长期管理",
          "教育劝导：依从性较低",
        ],
        highlight: "被忽略的关键：昼夜节律 + 光环境。",
      },
      {
        type: "grid",
        title: "CircaGuard 是一个生物数字闭环系统",
        cards: [
          { title: "生物层", text: "昼夜节律 / 褪黑素 / 真菌节律" },
          { title: "数字层", text: "AI预测 / 计算机视觉 / 个性化干预" },
          { title: "物理层", text: "仿生荧光蘑菇节律台灯" },
        ],
        highlight: "用“系统”而不是“工具”解决问题。",
      },
      {
        type: "flow",
        title: "闭环干预流程",
        flow: "数据采集 → AI节律建模 → 个性化方案 → 光环境干预 → 实时反馈 → 持续优化",
        bullets: ["昼夜节律预测", "光环境识别", "动态干预调整"],
      },
      {
        type: "bullets",
        title: "为什么是蘑菇？",
        bullets: [
          "仿生荧光蘑菇作为核心载体",
          "具备天然昼夜节律启发",
          "520nm 生物光，降低对褪黑素抑制风险",
          "形态亲和，提高青少年使用接受度",
        ],
        highlight: "不是装饰，而是具有生物学依据的设计。",
      },
      {
        type: "timeline",
        title: "基于一天的节律干预",
        timeline: [
          "早晨：高照度冷光，提升清醒度",
          "夜晚：低色温暖光，保护褪黑素",
          "深夜：仿生微光，兼顾安全与助眠",
        ],
        highlight: "不强迫行为，而是调整生物节律。",
      },
      {
        type: "bullets",
        title: "系统为何有效？",
        bullets: [
          "顺应青春期节律后移特征",
          "精准控制光照时序与强度",
          "AI实现个体差异适配",
          "生物 + 数字 + 物理闭环协同",
        ],
        highlight: "从机制层面重建节律系统。",
      },
      {
        type: "grid",
        title: "多层级社会价值",
        cards: [
          { title: "个体", text: "提升睡眠、情绪与学习效率" },
          { title: "家庭", text: "改善作息冲突与健康管理" },
          { title: "学校", text: "支持节律友好教育环境" },
        ],
      },
      {
        type: "bullets",
        title: "符合 Biodesign Challenge 核心理念",
        bullets: [
          "生物真实参与：真菌节律",
          "数字系统支撑：AI + 计算机视觉",
          "物理原型落地：节律台灯",
        ],
        highlight: "生物不仅是灵感，而是系统本身。",
      },
      {
        type: "closing",
        title: "重新设计夜晚",
        sentence: "就是重新设计一代人的未来。",
        mark: "CircaGuard",
        highlight: "让生物节律回归自然",
      },
      {
        type: "bullets",
        title: "设计反思：从产品到系统",
        bullets: [
          "在阶段性评审中，我们收到了一个关键反馈：这个方案是否可以不局限于单一产品，而构建成一个系统？",
          "青少年睡眠并不是单点行为问题，而是涉及生物节律、行为习惯与环境光照的系统问题。",
          "单一设备难以形成持续影响，问题不应被定义为“设计一盏灯”，而应被定义为“设计一个节律干预系统”。",
        ],
        highlight: "系统性问题需要系统级方案。",
      },
      {
        type: "flow",
        title: "从产品到闭环系统",
        flow: "感知 → 分析 → 干预 → 反馈",
        bullets: [
          "生物层：昼夜节律 / 褪黑素",
          "数字层：AI分析 / 节律预测",
          "物理层：光环境干预",
          "通过持续反馈实现节律优化，从“工具”转向“系统”",
        ],
      },
      {
        type: "bullets",
        title: "数据从哪里来？",
        bullets: [
          "手机 APP：作息记录、主观反馈",
          "可穿戴设备：睡眠时长、活动节律、心率等",
          "卧室灯与环境传感：光照、使用时段、环境变化",
          "学校空间系统：时间表、环境照度、空间状态",
        ],
        highlight: "用户数据 → 节律画像 → 个性化干预",
      },
      {
        type: "bullets",
        title: "APP 不只是控制器，而是系统中枢",
        bullets: [
          "APP 承担四个核心功能：数据入口、节律分析、可视化反馈、干预联动",
          "用户可以看到睡眠统计、节律偏移趋势、日常提醒与建议",
          "APP 还能呈现个体层与空间层的联动状态",
        ],
        mockup: {
          src: "./assets/app-mockup.png",
          alt: "CircaGuard APP 示例样机",
          caption: "APP界面",
          position: "right",
        },
        highlight: "APP 是个体节律管理平台。",
      },
      {
        type: "bullets",
        title: "灯不仅是设备，也是节律沟通界面",
        bullets: [
          "状态稳定：柔和、自然变化",
          "熬夜风险升高：提前进入暖暗提醒",
          "夜间拖延明显：出现低打扰的节律提示",
          "晨间起床困难：渐进式唤醒光",
        ],
        highlight: "灯光环境成为内在节律状态的外部可视化。",
      },
      {
        type: "bullets",
        title: "从设备到空间系统",
        bullets: [
          "进一步反馈提出：这个系统是否可以扩展为“空间中的光环境系统”？",
          "光本质上是环境变量，单一设备影响有限",
          "空间才是节律真正发生作用的载体",
          "CircaGuard 最终演化为个体层 + 空间层 + 系统层的多层级节律光环境系统",
        ],
        highlight: "从单个工具转向环境基础设施。",
      },
      {
        type: "grid",
        title: "系统构成：家庭与学校的双场景协同",
        cards: [
          { title: "个体层｜家庭卧室", text: "个体化夜间干预 / 长期数据积累 / 节律闭环调节" },
          { title: "空间层｜学校教室", text: "公共环境辅助 / 日间节律支持 / 群体光环境优化" },
          { title: "系统层｜AI调度与联动", text: "多设备连接 / 统一分析与反馈 / 构建完整节律生态" },
        ],
        highlight: "家庭负责个体闭环，学校负责空间辅助。",
      },
      {
        type: "grid",
        title: "应用场景：卧室与教室",
        cards: [
          { title: "家庭卧室", text: "睡前降低光刺激 / 夜间控制蓝光暴露 / 清晨渐进唤醒 / 建立个人节律档案" },
          { title: "学校教室", text: "早晨高照度冷光 / 白天中性光支持专注 / 下午缓解疲劳 / 面向群体而非个体监控" },
          { title: "节律媒介", text: "光成为连接个体与环境的节律媒介" },
        ],
      },
      {
        type: "closing",
        title: "结语",
        sentence: "CircaGuard 的演化路径是：产品到系统，再到空间。",
        mark: "CircaGuard",
        highlight: "通过可持续的节律基础设施，重新设计夜晚，也重新设计未来。",
      },
      {
        type: "closing",
        title: "CircaGuard",
        sentence: "重新设计夜晚，也重新设计未来。",
        emphasis: true,
      },
    ],
  },
  en: {
    nav: {
      prev: "← Previous",
      next: "Next →",
      fullscreen: "Fullscreen",
      print: "Export PDF",
      video: "Play Video",
      closeVideo: "Close",
      videoTitle: "Project Video",
      voiceSettings: "Voice Settings",
      closeVoice: "Close",
      voiceSettingsTitle: "Voice Settings",
      previewVoice: "Preview Current Slide",
      resetVoice: "Reset Auto Pick",
      voiceTip: "You can choose 'Doubao EN Voice Pack (Per-slide Audio)' under English voices. Otherwise, prefer Siri / Neural / Enhanced voices for a more natural tone.",
      zhVoiceLabel: "Chinese Voice",
      enVoiceLabel: "English Voice",
    },
    slides: [
      {
        type: "cover",
        tag: "A biodesign practice under Convergent Life",
        title: "CircaGuard",
        subtitle: "An AI + circadian intervention system for adolescent sleep",
        keywords: "Circadian Rhythm · AI · Bioluminescence · Youth Health",
      },
      {
        type: "bullets",
        title: "An adolescent sleep crisis is already here",
        bullets: [
          "75% of adolescents are sleep deprived",
          "Average sleep duration is only 7.2 hours",
          "More than 60% show social jetlag",
        ],
        highlight: "This is not a self-discipline issue, but a conflict between biology and social timing.",
      },
      {
        type: "bullets",
        title: "Current interventions have clear limitations",
        bullets: [
          "Apps: no real environmental sensing",
          "Wearables: track data but rarely shift behavior",
          "Medication: not suitable for long-term youth use",
          "Education only: low adherence",
        ],
        highlight: "The core gap is circadian rhythm + light environment.",
      },
      {
        type: "grid",
        title: "CircaGuard is a bio-digital closed-loop system",
        cards: [
          { title: "Biological layer", text: "Circadian rhythm / melatonin / fungal rhythm" },
          { title: "Digital layer", text: "AI prediction / computer vision / personalization" },
          { title: "Physical layer", text: "Biomimetic luminous mushroom lamp" },
        ],
        highlight: "It solves the problem as a system, not as a standalone tool.",
      },
      {
        type: "flow",
        title: "Closed-loop intervention logic",
        flow: "Data capture → AI rhythm modeling → Personalized plan → Light intervention → Real-time feedback → Continuous optimization",
        bullets: ["Circadian prediction", "Light environment recognition", "Dynamic intervention adjustment"],
      },
      {
        type: "bullets",
        title: "Why a mushroom-inspired carrier?",
        bullets: [
          "Biomimetic luminous mushroom as core medium",
          "Inspired by natural rhythmic behavior",
          "520nm light lowers melatonin suppression risk",
          "Friendly form improves adolescent acceptance",
        ],
        highlight: "Not decoration, but evidence-based biodesign.",
      },
      {
        type: "timeline",
        title: "A full-day rhythm intervention experience",
        timeline: [
          "Morning: bright cool light for alertness",
          "Evening: warm low-CCT light to protect melatonin",
          "Late night: soft biomimetic glow for safe sleep support",
        ],
        highlight: "The system does not force behavior; it reshapes the rhythm context.",
      },
      {
        type: "bullets",
        title: "Why does the system work?",
        bullets: [
          "Aligned with adolescent phase-delay biology",
          "Precise timing and intensity of light signals",
          "AI adapts to individual differences",
          "Bio + digital + physical loop in synergy",
        ],
        highlight: "It rebuilds rhythm regulation at mechanism level.",
      },
      {
        type: "grid",
        title: "Multi-level social value",
        cards: [
          { title: "Individual", text: "Better sleep, mood, and learning performance" },
          { title: "Family", text: "Improved routines and home health management" },
          { title: "School", text: "Supports rhythm-friendly education environments" },
        ],
      },
      {
        type: "bullets",
        title: "Aligned with Biodesign Challenge values",
        bullets: [
          "Real biological participation: fungal rhythm logic",
          "Digital intelligence backbone: AI + computer vision",
          "Tangible implementation: rhythm intervention lamp",
        ],
        highlight: "Biology is not just inspiration; it is part of the system.",
      },
      {
        type: "closing",
        title: "Redesigning the night",
        sentence: "means redesigning the future of a generation.",
        mark: "CircaGuard",
        highlight: "Bring circadian rhythm back to nature",
      },
      {
        type: "bullets",
        title: "Design Reflection: from product to system",
        bullets: [
          "In the review, we received a key question: can this project move beyond a single product and become a system?",
          "Adolescent sleep is not a single-point behavior problem, but a systemic issue shaped by biology, behavior, and environmental light.",
          "One device alone cannot create sustained impact, so the task is not to design one lamp, but to design a circadian intervention system.",
        ],
        highlight: "Systemic problems require system-level solutions.",
      },
      {
        type: "flow",
        title: "From product to closed-loop system",
        flow: "Sensing → Analysis → Intervention → Feedback",
        bullets: [
          "Biological layer: circadian rhythm / melatonin",
          "Digital layer: AI analysis / rhythm prediction",
          "Physical layer: light-environment intervention",
          "Continuous feedback turns a tool into a system",
        ],
      },
      {
        type: "bullets",
        title: "Where does the data come from?",
        bullets: [
          "Mobile app: schedule logging and self-reported feedback",
          "Wearables: sleep duration, activity rhythm, heart rate, and more",
          "Bedroom lamp and environmental sensing: light exposure, usage timing, and changes in context",
          "School spatial system: timetable, ambient illumination, and space status",
        ],
        highlight: "User data → rhythm profile → personalized intervention",
      },
      {
        type: "bullets",
        title: "The app is not just a controller, but the system hub",
        bullets: [
          "The app serves four core roles: data input, rhythm analysis, visual feedback, and intervention coordination",
          "Users can view sleep statistics, circadian shift trends, and daily reminders",
          "It also presents the linkage between personal and spatial layers",
        ],
        mockup: {
          src: "./assets/app-mockup.png",
          alt: "CircaGuard app mockup",
          caption: "APP Interface",
          position: "right",
        },
        highlight: "The app becomes a personal rhythm management platform.",
      },
      {
        type: "bullets",
        title: "The lamp is not only a device, but a communication interface",
        bullets: [
          "Stable rhythm: soft and natural transitions",
          "Higher risk of staying up late: earlier warm-dim reminder",
          "Nighttime delay: subtle low-interruption circadian prompts",
          "Difficult mornings: gradual wake-up light",
        ],
        highlight: "Lighting becomes an external visualization of the internal rhythm state.",
      },
      {
        type: "bullets",
        title: "From device to spatial system",
        bullets: [
          "A further question emerged: can this system expand into a light environment system at the scale of space?",
          "Light is fundamentally an environmental variable, and one device has limited influence",
          "Space is the real carrier through which rhythm is experienced",
          "CircaGuard therefore evolves into a multi-layer system across personal, spatial, and system levels",
        ],
        highlight: "From a single tool to environmental infrastructure.",
      },
      {
        type: "grid",
        title: "System architecture: coordination between home and school",
        cards: [
          { title: "Personal layer | Home bedroom", text: "Individual nighttime intervention / long-term data accumulation / closed-loop rhythm regulation" },
          { title: "Spatial layer | School classroom", text: "Public environmental support / daytime rhythm assistance / group lighting optimization" },
          { title: "System layer | AI coordination", text: "Multi-device connection / unified analysis and feedback / complete circadian ecosystem" },
        ],
        highlight: "Home supports the personal loop, while school provides spatial support.",
      },
      {
        type: "grid",
        title: "Application scenarios: bedroom and classroom",
        cards: [
          { title: "Home bedroom", text: "Reduce pre-sleep stimulation / control nighttime blue light / gradual wake-up / build a personal rhythm profile" },
          { title: "School classroom", text: "Bright cool light in the morning / neutral daytime light for focus / reduce fatigue in the afternoon / group-oriented rather than individual monitoring" },
          { title: "Rhythm medium", text: "Light becomes the medium connecting individual state and environment" },
        ],
      },
      {
        type: "closing",
        title: "Conclusion",
        sentence: "The evolution path of CircaGuard is: product to system, then to space.",
        mark: "CircaGuard",
        highlight: "Through sustainable circadian infrastructure, we hope to redesign the night and redesign the future.",
      },
      {
        type: "closing",
        title: "CircaGuard",
        sentence: "Redesign the night, redesign the future.",
        emphasis: true,
      },
    ],
  },
};

const narration = {
  zh: [
    "大家好，我们的项目是 CircaGuard，一个基于生物节律与AI的青少年睡眠干预系统，属于融合生命框架下的生物设计实践。",
    "当前，青少年睡眠危机正在加剧。数据显示，75%的青少年睡眠不足，平均睡眠时间只有7.2小时，超过60%存在“社会时差”。这并不是自律问题，而是生物节律与社会制度之间的结构性冲突。",
    "现有干预方式存在明显局限。APP无法感知真实环境，可穿戴设备难以改变行为，药物不适用于青少年，而教育劝导的依从性也较低。它们共同忽略了一个关键变量：昼夜节律与光环境。",
    "CircaGuard 是一个生物—数字—物理的闭环系统。在生物层，我们关注昼夜节律与褪黑素；在数字层，通过AI进行预测与干预；在物理层，则通过仿生荧光蘑菇台灯进行环境调节。我们试图用“系统”而不是“工具”解决问题。",
    "系统形成一个持续优化的闭环：从数据采集开始，通过AI建模生成个性化方案，再进行光环境干预，并根据反馈不断调整。其核心能力是节律预测、环境识别与动态干预。",
    "我们选择仿生荧光蘑菇作为核心载体。因为它本身具有节律性，并能发出约520纳米的生物光，这种光不会抑制褪黑素分泌。同时，其形态也更具亲和力。它不仅是一个设计符号，而是有生物学依据的介入方式。",
    "在用户的一天中，系统进行节律引导：早晨使用高照度冷光提升清醒度；夜晚转为低色温暖光保护褪黑素；深夜提供柔和微光辅助入睡。我们不是强迫用户改变行为，而是引导身体回归节律。",
    "CircaGuard 的有效性来源于三个方面：顺应青春期节律变化、精准控制光照时序，以及AI驱动的个性化干预。通过生物、数字与物理的整合，我们从根本上重建节律系统。",
    "该系统具有多层级价值：对个体，可以提升睡眠质量、情绪与学习效率；对家庭，有助于建立更健康的作息；对学校，则支持节律友好的教育环境。",
    "这个项目也回应了 Biodesign Challenge 的核心理念。在这里，生物不仅是灵感来源，而是直接参与系统运行的一部分。",
    "重新设计夜晚，其实是在重新设计一代人的未来。CircaGuard，让生物节律回归自然。",
    "在中期评审中，我们收到了一个非常重要的反馈，就是这个方案是否可以从一个产品扩展为一个系统。这促使我们重新思考问题的本质。青少年睡眠问题并不是一个单点产品可以解决的问题，而是一个涉及生物、行为和环境的系统性问题。",
    "因此，我们将方案扩展为一个闭环系统。它不再只是一个发光装置，而是一个可以感知、分析、干预并持续反馈的节律系统。生物层、数字层和物理层共同构成它的核心结构。",
    "提出的最关键问题之一，就是系统如何获取用户数据。没有数据，就无法判断用户当前的节律状态，也无法实现真正有效的个性化干预。因此，我们将数据采集明确为系统设计的基础。",
    "APP 应该能够帮助分析用户数据，并提供可视化 dashboard。这一点非常重要。因此在更新后的方案中，APP 不再只是遥控器，而是整个系统的数据中心、分析中心和反馈中心。",
    "同时我们也在思考灯能否成为一种沟通工具，而不仅仅是照明设备。基于这个反馈，我们把灯重新定义为一种持续存在但低打扰的节律提示终端，让环境本身能够传达身体状态。",
    "在进一步讨论中，我们收到第二个关键反馈，就是是否可以把这个系统扩展到空间尺度。这使我们意识到，光并不只是产品属性，而是环境变量。因此，真正有效的节律干预需要从设备走向空间。",
    "最终，我们将系统明确为家庭与学校双场景协同结构。家庭卧室负责个体化、持续性的闭环干预；学校教室则作为公共环境辅助系统，在白天帮助稳定节律状态。两者共同构成一个更完整的节律生态。",
    "在应用层面，我们将个体层聚焦在家庭卧室，将空间层聚焦在学校教室。卧室是最直接发生睡眠行为的地方，适合进行个体化干预；教室则是最重要的公共学习环境，适合提供节律友好的空间支持。",
    "最终，这个项目从一个产品演变为一个系统，再进一步扩展为空间基础设施。为了让它更可实施，我们也提出了分阶段落地路径，先从个体层系统开始，再逐步扩展到学校空间层。",
    "重新设计夜晚，也重新设计未来。",
  ],
  en: [
    "Hello everyone, our project is CircaGuard, an adolescent sleep intervention system based on circadian rhythm and AI, developed as a biodesign practice under the Convergent Life framework.",
    "At present, the adolescent sleep crisis is intensifying. Data shows that 75% of adolescents are sleep-deprived, with an average sleep duration of only 7.2 hours, and over 60% experience social jet lag. This is not a self-discipline issue, but a structural conflict between biological rhythms and social systems.",
    "Current interventions have clear limitations. Apps cannot sense real environments, wearables struggle to change behavior, medication is unsuitable for adolescents, and educational persuasion has low adherence. They all overlook one key variable: circadian rhythm and the light environment.",
    "CircaGuard is a bio-digital-physical closed-loop system. At the biological layer, we focus on circadian rhythm and melatonin; at the digital layer, we use AI for prediction and intervention; at the physical layer, we regulate the environment through a biomimetic bioluminescent mushroom lamp. We aim to solve the problem with a system, not just a tool.",
    "The system forms a continuously optimized loop: starting from data collection, generating personalized plans through AI modeling, then applying light-environment intervention, and continuously adjusting based on feedback. Its core capabilities are rhythm prediction, environmental recognition, and dynamic intervention.",
    "We chose a biomimetic bioluminescent mushroom as the core medium. It has intrinsic rhythmic characteristics and can emit bio-light at around 520 nm, which does not suppress melatonin secretion. At the same time, its form is more approachable. It is not just a design symbol, but a biologically grounded intervention method.",
    "Throughout the user's day, the system provides rhythm guidance: bright cool light in the morning to increase alertness; warm low-color-temperature light at night to protect melatonin; and gentle dim light late at night to support sleep. We do not force behavior change; we guide the body back to its rhythm.",
    "The effectiveness of CircaGuard comes from three aspects: aligning with adolescent circadian shifts, precisely controlling light timing, and AI-driven personalized intervention. Through the integration of biological, digital, and physical layers, we rebuild the rhythm system at its foundation.",
    "This system has multi-level value: for individuals, it improves sleep quality, mood, and learning efficiency; for families, it helps establish healthier routines; and for schools, it supports rhythm-friendly educational environments.",
    "This project also responds to the core vision of the Biodesign Challenge. Here, biology is not only a source of inspiration, but an active part of system operation.",
    "To redesign the night is to redesign the future of a generation. CircaGuard brings circadian rhythm back to nature.",
    "During the mid-term review, we received a very important piece of feedback: whether this proposal could be expanded from a product into a system. This prompted us to rethink the nature of the problem. Adolescent sleep is not a single-point product problem, but a systemic issue involving biology, behavior, and environment.",
    "Therefore, we expanded the proposal into a closed-loop system. It is no longer just a lighting device, but a rhythm system that can sense, analyze, intervene, and continuously provide feedback. Its core structure is jointly formed by biological, digital, and physical layers.",
    "One of the most critical questions raised is how the system obtains user data. Without data, it is impossible to determine the user's current rhythm state, and truly effective personalized intervention cannot be achieved. Therefore, we define data collection as the foundation of system design.",
    "The app should help analyze user data and provide a visual dashboard. This is very important. Therefore, in the updated proposal, the app is no longer just a remote controller, but the data center, analysis center, and feedback center of the whole system.",
    "At the same time, we are also considering whether the lamp can become a communication tool rather than only a lighting device. Based on this feedback, we redefine the lamp as a continuously present but low-interruption rhythm guidance terminal, allowing the environment itself to convey bodily state.",
    "In further discussion, we received a second key piece of feedback: whether this system could be expanded to a spatial scale. This made us realize that light is not only a product attribute, but an environmental variable. Therefore, truly effective circadian intervention must move from device scale to spatial scale.",
    "Ultimately, we define the system as a dual-scenario coordinated structure between home and school. The home bedroom supports individualized and continuous closed-loop intervention, while school classrooms serve as a public environmental support system to stabilize circadian states during the day. Together, they form a more complete rhythm ecosystem.",
    "At the application level, we focus the personal layer on home bedrooms and the spatial layer on school classrooms. Bedrooms are where sleep behavior occurs most directly and are suitable for individualized intervention; classrooms are the most important public learning environments and are suitable for rhythm-friendly spatial support.",
    "In the end, this project evolves from a product into a system, and further into spatial infrastructure. To make it more implementable, we also propose a phased deployment path: starting with the personal-layer system, then gradually expanding to the school spatial layer.",
    "Redesign the night, redesign the future.",
  ],
};

let current = 0;
let lang = "zh";
let slides = [];
let voiceOn = false;
const speechReady = "speechSynthesis" in window;
let speechVoices = [];
let speechQueueId = 0;
const VOICE_PREF_KEY = "circaguard_voice_preferences_v1";
const DOUBAO_EN_URI = "__doubao_en_pack__";
const doubaoEnAudio = new Audio();
doubaoEnAudio.preload = "auto";
const voicePreferences = {
  zh: null,
  en: null,
};

function itemList(items) {
  return `<ul class="reveal">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderMockup(mockup) {
  if (!mockup || !mockup.src) {
    return "";
  }

  return `
    <figure class="slide-mockup reveal">
      <img src="${mockup.src}" alt="${mockup.alt || "App mockup"}" loading="lazy" />
      ${mockup.caption ? `<figcaption>${mockup.caption}</figcaption>` : ""}
    </figure>`;
}

function renderSlide(slide, index) {
  if (slide.type === "cover") {
    return `
      <section class="slide cover-slide ${index === current ? "active" : ""}">
        <p class="tag reveal">${slide.tag}</p>
        <h1 class="reveal">${slide.title}</h1>
        <h2 class="reveal">${slide.subtitle}</h2>
        <p class="keywords reveal">${slide.keywords}</p>
      </section>`;
  }

  if (slide.type === "grid") {
    return `
      <section class="slide ${index === current ? "active" : ""}">
        <h3 class="reveal">${slide.title}</h3>
        <div class="grid reveal">
          ${slide.cards
            .map(
              (card) => `<article><h4>${card.title}</h4><p>${card.text}</p></article>`
            )
            .join("")}
        </div>
        ${slide.highlight ? `<p class="highlight reveal">${slide.highlight}</p>` : ""}
      </section>`;
  }

  if (slide.type === "flow") {
    return `
      <section class="slide ${index === current ? "active" : ""}">
        <h3 class="reveal">${slide.title}</h3>
        <p class="flow reveal">${slide.flow}</p>
        ${itemList(slide.bullets)}
      </section>`;
  }

  if (slide.type === "timeline") {
    return `
      <section class="slide ${index === current ? "active" : ""}">
        <h3 class="reveal">${slide.title}</h3>
        <div class="timeline reveal">
          ${slide.timeline.map((item) => `<p>${item}</p>`).join("")}
        </div>
        <p class="highlight reveal">${slide.highlight}</p>
      </section>`;
  }

  if (slide.type === "metrics") {
    return `
      <section class="slide ${index === current ? "active" : ""}">
        <h3 class="reveal">${slide.title}</h3>
        <div class="metrics reveal">
          ${slide.metrics
            .map((item) => `<p><span>${item.value}</span>${item.label}</p>`)
            .join("")}
        </div>
        <p class="highlight reveal">${slide.highlight}</p>
      </section>`;
  }

  if (slide.type === "closing") {
    return `
      <section class="slide ${index === current ? "active" : ""}">
        ${slide.title ? `<h3 class="reveal">${slide.title}</h3>` : ""}
        <p class="closing reveal ${slide.emphasis ? "closing-emphasis" : ""}">${slide.sentence}</p>
        ${slide.mark ? `<h2 class="reveal">${slide.mark}</h2>` : ""}
        ${slide.highlight ? `<p class="highlight reveal">${slide.highlight}</p>` : ""}
      </section>`;
  }

  if (slide.mockup && slide.mockup.position === "right") {
    return `
      <section class="slide ${index === current ? "active" : ""} with-side-mockup">
        <div class="slide-split">
          <div class="slide-split-left">
            <h3 class="reveal">${slide.title}</h3>
            ${itemList(slide.bullets)}
            ${slide.highlight ? `<p class="highlight reveal">${slide.highlight}</p>` : ""}
          </div>
          <div class="slide-split-right">
            ${renderMockup(slide.mockup)}
          </div>
        </div>
      </section>`;
  }

  return `
    <section class="slide ${index === current ? "active" : ""}">
      <h3 class="reveal">${slide.title}</h3>
      ${itemList(slide.bullets)}
      ${renderMockup(slide.mockup)}
      ${slide.highlight ? `<p class="highlight reveal">${slide.highlight}</p>` : ""}
    </section>`;
}

function mountSlides() {
  const content = deckContent[lang];
  slidesRoot.innerHTML = content.slides.map((slide, i) => renderSlide(slide, i)).join("");
  slides = Array.from(document.querySelectorAll(".slide"));
  prevBtn.textContent = content.nav.prev;
  nextBtn.textContent = content.nav.next;
  fullscreenBtn.textContent = content.nav.fullscreen;
  printBtn.textContent = content.nav.print;
  videoBtn.textContent = content.nav.video;
  closeVideoBtn.textContent = content.nav.closeVideo;
  videoTitle.textContent = content.nav.videoTitle;
  voiceSettingsBtn.textContent = content.nav.voiceSettings;
  closeVoiceBtn.textContent = content.nav.closeVoice;
  voiceTitle.textContent = content.nav.voiceSettingsTitle;
  previewVoiceBtn.textContent = content.nav.previewVoice;
  resetVoiceBtn.textContent = content.nav.resetVoice;
  voiceTip.textContent = content.nav.voiceTip;
  document.querySelector("label[for='zhVoiceSelect']").textContent = content.nav.zhVoiceLabel;
  document.querySelector("label[for='enVoiceSelect']").textContent = content.nav.enVoiceLabel;
  langBtn.textContent = lang === "zh" ? "EN" : "中";
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  pageJumpBtn.textContent = lang === "zh" ? "页码" : "Pages";
  pageJumpBtn.title = lang === "zh" ? "跳转到指定页面" : "Jump to specific page";
  closePageJumpPanel();
  buildPageJumpPanel();
  updateVoiceButton();
  renderVoiceSelectOptions();
}

function render() {
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === current);
  });
  counter.textContent = `${current + 1} / ${slides.length}`;
  progress.style.width = `${((current + 1) / slides.length) * 100}%`;
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === slides.length - 1;
  updatePageJumpActive();
  speakCurrentSlide();
}

function go(step) {
  const next = current + step;
  if (next < 0 || next >= slides.length) return;
  current = next;
  render();
}

prevBtn.addEventListener("click", () => go(-1));
nextBtn.addEventListener("click", () => go(1));

pageJumpBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  if (pageJumpPanel.hasAttribute("hidden")) {
    openPageJumpPanel();
  } else {
    closePageJumpPanel();
  }
});

langBtn.addEventListener("click", () => {
  lang = lang === "zh" ? "en" : "zh";
  mountSlides();
  render();
});

voiceBtn.addEventListener("click", () => {
  if (!speechReady) return;
  voiceOn = !voiceOn;
  updateVoiceButton();
  if (voiceOn) {
    speakCurrentSlide();
  } else {
    stopNarration();
  }
});

voiceSettingsBtn.addEventListener("click", () => {
  openVoiceModal();
});

closeVoiceBtn.addEventListener("click", () => {
  closeVoiceModal();
});

voiceBackdrop.addEventListener("click", () => {
  closeVoiceModal();
});

previewVoiceBtn.addEventListener("click", () => {
  const previous = voiceOn;
  voiceOn = true;
  speakCurrentSlide();
  voiceOn = previous;
  updateVoiceButton();
});

resetVoiceBtn.addEventListener("click", () => {
  voicePreferences.zh = null;
  voicePreferences.en = null;
  saveVoicePreferences();
  renderVoiceSelectOptions();
  if (voiceOn) speakCurrentSlide();
});

zhVoiceSelect.addEventListener("change", () => {
  voicePreferences.zh = zhVoiceSelect.value || null;
  saveVoicePreferences();
  if (lang === "zh" && voiceOn) speakCurrentSlide();
});

enVoiceSelect.addEventListener("change", () => {
  voicePreferences.en = enVoiceSelect.value || null;
  saveVoicePreferences();
  if (lang === "en" && voiceOn) speakCurrentSlide();
});

fullscreenBtn.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen?.();
  } else {
    document.documentElement.requestFullscreen?.();
  }
});

videoBtn.addEventListener("click", () => {
  openVideoModal();
});

closeVideoBtn.addEventListener("click", () => {
  closeVideoModal();
});

videoBackdrop.addEventListener("click", () => {
  closeVideoModal();
});

projectVideo.addEventListener("ended", () => {
  closeVideoModal({ backToCover: true });
});

printBtn.addEventListener("click", () => {
  stopNarration();
  window.print();
});

window.addEventListener("keydown", (event) => {
  if ((isVideoModalOpen() || isVoiceModalOpen()) && event.key !== "Escape") return;
  if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
    event.preventDefault();
    go(1);
  } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    go(-1);
  } else if (event.key.toLowerCase() === "home") {
    current = 0;
    render();
  } else if (event.key.toLowerCase() === "end") {
    current = slides.length - 1;
    render();
  } else if (event.key.toLowerCase() === "f") {
    fullscreenBtn.click();
  } else if (event.key.toLowerCase() === "p" && (event.ctrlKey || event.metaKey)) {
    event.preventDefault();
    printBtn.click();
  } else if (event.key.toLowerCase() === "l") {
    langBtn.click();
  } else if (event.key.toLowerCase() === "v") {
    event.preventDefault();
    voiceBtn.click();
  } else if (event.key.toLowerCase() === "m") {
    event.preventDefault();
    videoBtn.click();
  } else if (event.key.toLowerCase() === "k") {
    event.preventDefault();
    voiceSettingsBtn.click();
  } else if (event.key === "Escape" && isVideoModalOpen()) {
    event.preventDefault();
    closeVideoModal();
  } else if (event.key === "Escape" && isVoiceModalOpen()) {
    event.preventDefault();
    closeVoiceModal();
  } else if (event.key === "Escape" && !pageJumpPanel.hasAttribute("hidden")) {
    event.preventDefault();
    closePageJumpPanel();
  }
});

document.addEventListener("click", (event) => {
  if (pageJumpPanel.hasAttribute("hidden")) return;
  if (pageJumpPanel.contains(event.target) || pageJumpBtn.contains(event.target)) return;
  closePageJumpPanel();
});

function refreshVoices() {
  if (!speechReady) return;
  speechVoices = window.speechSynthesis.getVoices();
  renderVoiceSelectOptions();
}

function pickVoice() {
  if (!speechVoices.length) return null;
  const preferredURI = voicePreferences[lang];
  if (preferredURI) {
    const exact = speechVoices.find((voice) => voice.voiceURI === preferredURI);
    if (exact) return exact;
  }
  const allowedPrefixes = lang === "zh" ? ["zh-CN", "zh", "cmn"] : ["en-US", "en-GB", "en"];
  const candidates = speechVoices.filter((voice) =>
    allowedPrefixes.some((prefix) => voice.lang.toLowerCase().startsWith(prefix.toLowerCase()))
  );
  if (!candidates.length) return null;

  const preferredNameHints =
    lang === "zh"
      ? ["siri", "tingting", "xiaoxiao", "yunxi", "neural", "premium", "enhanced"]
      : ["siri", "samantha", "ava", "alloy", "aria", "neural", "premium", "enhanced"];
  const avoidNameHints = ["compact", "espeak", "robot", "synthetic", "mono"];

  const scoreVoice = (voice) => {
    const name = voice.name.toLowerCase();
    let score = 0;
    if (voice.localService) score += 2;
    if (voice.default) score += 1;
    if (preferredNameHints.some((hint) => name.includes(hint))) score += 6;
    if (avoidNameHints.some((hint) => name.includes(hint))) score -= 6;
    return score;
  };

  return candidates.sort((a, b) => scoreVoice(b) - scoreVoice(a))[0] || null;
}

function isDoubaoEnSelected() {
  return lang === "en" && voicePreferences.en === DOUBAO_EN_URI;
}

function playDoubaoEnglishSlide() {
  const slideNum = current + 1;
  const src = `./assets/doubao-en/slide${slideNum}.m4a`;
  if (doubaoEnAudio.src !== new URL(src, window.location.href).href) {
    doubaoEnAudio.src = src;
  }
  doubaoEnAudio.currentTime = 0;
  const playPromise = doubaoEnAudio.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }
}

function stopNarration() {
  speechQueueId += 1;
  doubaoEnAudio.pause();
  doubaoEnAudio.currentTime = 0;
  if (speechReady) {
    window.speechSynthesis.cancel();
  }
}

function splitIntoSpeechChunks(text) {
  return text
    .split(/(?<=[。！？.!?])\s+/u)
    .map((part) => part.trim())
    .filter(Boolean);
}

function speakCurrentSlide() {
  if (!voiceOn) return;
  const text = narration[lang][current];
  if (!text) return;
  stopNarration();
  if (isDoubaoEnSelected()) {
    playDoubaoEnglishSlide();
    return;
  }
  if (!speechReady) return;
  const queueId = speechQueueId;
  const chunks = splitIntoSpeechChunks(text);
  const chosenVoice = pickVoice();
  const profile = lang === "zh"
    ? { rate: 0.95, pitch: 1.02, volume: 1 }
    : { rate: 0.96, pitch: 1.0, volume: 1 };

  chunks.forEach((chunk, idx) => {
    const utterance = new SpeechSynthesisUtterance(chunk);
    utterance.lang = lang === "zh" ? "zh-CN" : "en-US";
    utterance.rate = profile.rate;
    utterance.pitch = profile.pitch;
    utterance.volume = profile.volume;
    if (chosenVoice) utterance.voice = chosenVoice;
    utterance.onstart = () => {
      if (queueId !== speechQueueId) {
        window.speechSynthesis.cancel();
      }
    };
    // 在句子之间留一点停顿感，减少“播报器”感。
    if (idx < chunks.length - 1) {
      utterance.onend = () => {
        if (queueId !== speechQueueId) return;
      };
    }
    window.speechSynthesis.speak(utterance);
  });
}

function updateVoiceButton() {
  if (!speechReady) {
    voiceBtn.disabled = true;
    voiceBtn.classList.remove("active");
    voiceBtn.textContent = lang === "zh" ? "语音：不可用" : "Voice: N/A";
    return;
  }
  voiceBtn.disabled = false;
  voiceBtn.classList.toggle("active", voiceOn);
  if (lang === "zh") {
    voiceBtn.textContent = voiceOn ? "语音：开" : "语音：关";
    voiceBtn.title = "语音讲解开关（快捷键 V）";
    voiceSettingsBtn.title = "语音设置（快捷键 K）";
  } else {
    voiceBtn.textContent = voiceOn ? "Voice: On" : "Voice: Off";
    voiceBtn.title = "Voice narration toggle (key V)";
    voiceSettingsBtn.title = "Voice settings (key K)";
  }
}

function isVideoModalOpen() {
  return !videoModal.hasAttribute("hidden");
}

function isVoiceModalOpen() {
  return !voiceModal.hasAttribute("hidden");
}

function openVideoModal() {
  stopNarration();
  videoModal.removeAttribute("hidden");
  requestAnimationFrame(() => videoModal.classList.add("show"));
  const playPromise = projectVideo.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }
}

function closeVideoModal(options = {}) {
  const { backToCover = false } = options;
  videoModal.classList.remove("show");
  projectVideo.pause();
  projectVideo.currentTime = 0;
  if (backToCover) {
    current = 0;
    render();
  }
  window.setTimeout(() => {
    if (!videoModal.classList.contains("show")) {
      videoModal.setAttribute("hidden", "");
    }
  }, 180);
}

function openVoiceModal() {
  voiceModal.removeAttribute("hidden");
  requestAnimationFrame(() => voiceModal.classList.add("show"));
}

function openPageJumpPanel() {
  pageJumpPanel.removeAttribute("hidden");
}

function closePageJumpPanel() {
  pageJumpPanel.setAttribute("hidden", "");
}

function buildPageJumpPanel() {
  if (!pageJumpPanel) return;
  pageJumpPanel.innerHTML = slides
    .map(
      (_, index) =>
        `<button type="button" data-page="${index}" class="${index === current ? "active" : ""}">${index + 1}</button>`
    )
    .join("");
  pageJumpPanel.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = Number(btn.dataset.page);
      if (Number.isFinite(target) && target >= 0 && target < slides.length) {
        current = target;
        render();
      }
      closePageJumpPanel();
    });
  });
}

function updatePageJumpActive() {
  if (!pageJumpPanel || pageJumpPanel.hasAttribute("hidden")) return;
  pageJumpPanel.querySelectorAll("button").forEach((btn) => {
    btn.classList.toggle("active", Number(btn.dataset.page) === current);
  });
}

function closeVoiceModal() {
  voiceModal.classList.remove("show");
  window.setTimeout(() => {
    if (!voiceModal.classList.contains("show")) {
      voiceModal.setAttribute("hidden", "");
    }
  }, 180);
}

function renderVoiceSelectOptions() {
  if (!zhVoiceSelect || !enVoiceSelect) return;
  const zhVoices = speechVoices.filter((voice) =>
    ["zh-cn", "zh", "cmn"].some((prefix) => voice.lang.toLowerCase().startsWith(prefix))
  );
  const enVoices = speechVoices.filter((voice) =>
    ["en-us", "en-gb", "en"].some((prefix) => voice.lang.toLowerCase().startsWith(prefix))
  );

  zhVoiceSelect.innerHTML = buildVoiceOptions(zhVoices, voicePreferences.zh, { includeDoubao: false });
  enVoiceSelect.innerHTML = buildVoiceOptions(enVoices, voicePreferences.en, { includeDoubao: true });
}

function buildVoiceOptions(voices, selectedURI, options = {}) {
  const { includeDoubao = false } = options;
  const autoLabel = lang === "zh" ? "自动推荐" : "Auto";
  const optionHtml = [`<option value="">${autoLabel}</option>`];
  if (includeDoubao) {
    const doubaoLabel = lang === "zh" ? "豆包英文音色（分页音频）" : "Doubao EN Voice Pack (Per-slide Audio)";
    const selected = selectedURI === DOUBAO_EN_URI ? " selected" : "";
    optionHtml.push(`<option value="${DOUBAO_EN_URI}"${selected}>${doubaoLabel}</option>`);
  }
  voices.forEach((voice) => {
    const selected = selectedURI === voice.voiceURI ? " selected" : "";
    optionHtml.push(
      `<option value="${escapeHtml(voice.voiceURI)}"${selected}>${escapeHtml(
        `${voice.name} (${voice.lang})`
      )}</option>`
    );
  });
  return optionHtml.join("");
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function loadVoicePreferences() {
  try {
    const raw = localStorage.getItem(VOICE_PREF_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    voicePreferences.zh = typeof parsed.zh === "string" ? parsed.zh : null;
    voicePreferences.en = typeof parsed.en === "string" ? parsed.en : null;
  } catch (error) {
    // Ignore corrupted local storage and keep defaults.
  }
}

function saveVoicePreferences() {
  localStorage.setItem(VOICE_PREF_KEY, JSON.stringify(voicePreferences));
}

loadVoicePreferences();
refreshVoices();
if (speechReady) {
  window.speechSynthesis.addEventListener("voiceschanged", refreshVoices);
}
mountSlides();
render();
