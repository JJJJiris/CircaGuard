const slidesRoot = document.getElementById("slides");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const printBtn = document.getElementById("printBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const langBtn = document.getElementById("langBtn");
const voiceBtn = document.getElementById("voiceBtn");
const videoBtn = document.getElementById("videoBtn");
const videoModal = document.getElementById("videoModal");
const videoBackdrop = document.getElementById("videoBackdrop");
const closeVideoBtn = document.getElementById("closeVideoBtn");
const projectVideo = document.getElementById("projectVideo");
const videoTitle = document.getElementById("videoTitle");

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
    "这个项目也回应了Biodesign Challenge的核心理念。在这里，生物不仅是灵感来源，而是直接参与系统运行的一部分。",
    "重新设计夜晚，其实是在重新设计一代人的未来。CircaGuard，让生物节律回归自然。",
  ],
  en: [
    "Hello everyone, my project is CircaGuard, a sleep intervention system for adolescents based on circadian rhythm and AI, developed under the framework of convergent life and biodesign.",
    "Today, a sleep crisis among adolescents is intensifying. 75% of teenagers suffer from insufficient sleep, averaging only 7.2 hours, and over 60% experience social jet lag. This is not a problem of discipline, but a structural conflict between biological rhythms and social systems.",
    "Current solutions have clear limitations. Apps lack real environmental awareness, wearables fail to change behavior, medication is unsuitable for adolescents, and educational approaches have low compliance. They all overlook a key factor: circadian rhythm and light environment.",
    "CircaGuard is a bio-digital-physical closed-loop system. At the biological level, it focuses on circadian rhythm and melatonin; at the digital level, AI enables prediction and intervention; and at the physical level, a biomimetic glowing mushroom lamp regulates the environment. We aim to solve the problem through a system, not just a tool.",
    "The system operates as a continuously evolving loop: data collection, AI-based rhythm modeling, personalized intervention, environmental adjustment, and real-time feedback. Its core capabilities include rhythm prediction, environmental sensing, and adaptive intervention.",
    "We chose a biomimetic glowing mushroom as the core medium. It naturally embodies rhythmic behavior and emits around 520nm bioluminescent light, which does not suppress melatonin. Its organic form also enhances user acceptance. It is not just symbolic, but biologically grounded.",
    "Throughout the day, the system guides the user's rhythm: bright cool light in the morning to boost alertness, warm low-temperature light at night to protect melatonin, and soft dim light late at night to support sleep. Instead of forcing behavior change, it gently realigns the body's rhythm.",
    "Its effectiveness comes from three aspects: aligning with adolescent circadian shifts, precise control of light timing, and AI-driven personalization. By integrating biological, digital, and physical layers, it reconstructs the rhythm system at its core.",
    "The system creates value on multiple levels: for individuals, it improves sleep, mood, and learning efficiency; for families, it supports healthier routines; and for schools, it enables rhythm-friendly learning environments.",
    "This project aligns with the core vision of the Biodesign Challenge. Here, biology is not just inspiration, but an active component of the system itself.",
    "To redesign the night is to redesign the future of a generation. CircaGuard brings circadian rhythm back to nature.",
  ],
};

let current = 0;
let lang = "zh";
let slides = [];
let voiceOn = false;
const speechReady = "speechSynthesis" in window;
let speechVoices = [];
let speechQueueId = 0;

function itemList(items) {
  return `<ul class="reveal">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
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
        <h3 class="reveal">${slide.title}</h3>
        <p class="closing reveal">${slide.sentence}</p>
        <h2 class="reveal">${slide.mark}</h2>
        <p class="highlight reveal">${slide.highlight}</p>
      </section>`;
  }

  return `
    <section class="slide ${index === current ? "active" : ""}">
      <h3 class="reveal">${slide.title}</h3>
      ${itemList(slide.bullets)}
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
  langBtn.textContent = lang === "zh" ? "EN" : "中";
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  updateVoiceButton();
}

function render() {
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === current);
  });
  counter.textContent = `${current + 1} / ${slides.length}`;
  progress.style.width = `${((current + 1) / slides.length) * 100}%`;
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === slides.length - 1;
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
  if (isVideoModalOpen() && event.key !== "Escape") return;
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
  } else if (event.key === "Escape" && isVideoModalOpen()) {
    event.preventDefault();
    closeVideoModal();
  }
});

function refreshVoices() {
  if (!speechReady) return;
  speechVoices = window.speechSynthesis.getVoices();
}

function pickVoice() {
  if (!speechVoices.length) return null;
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

function stopNarration() {
  if (!speechReady) return;
  speechQueueId += 1;
  window.speechSynthesis.cancel();
}

function splitIntoSpeechChunks(text) {
  return text
    .split(/(?<=[。！？.!?])\s+/u)
    .map((part) => part.trim())
    .filter(Boolean);
}

function speakCurrentSlide() {
  if (!speechReady || !voiceOn) return;
  const text = narration[lang][current];
  if (!text) return;
  stopNarration();
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
  } else {
    voiceBtn.textContent = voiceOn ? "Voice: On" : "Voice: Off";
    voiceBtn.title = "Voice narration toggle (key V)";
  }
}

function isVideoModalOpen() {
  return !videoModal.hasAttribute("hidden");
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

refreshVoices();
if (speechReady) {
  window.speechSynthesis.addEventListener("voiceschanged", refreshVoices);
}
mountSlides();
render();
