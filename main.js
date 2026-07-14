const $=(s,c=document)=>c.querySelector(s);const $$=(s,c=document)=>[...c.querySelectorAll(s)];
const header=$("#siteHeader"),menuButton=$("#menuButton"),mobileMenu=$("#mobileMenu"),waTrigger=$("#whatsappTrigger"),waWidget=$("#whatsappWidget"),waClose=$("#closeWhatsapp"),waCta=$("#whatsappCta");
const setMenu=open=>{mobileMenu.classList.toggle("open",open);mobileMenu.setAttribute("aria-hidden",String(!open));menuButton.setAttribute("aria-expanded",String(open));document.body.classList.toggle("menu-open",open)};
addEventListener("scroll",()=>header.classList.toggle("scrolled",scrollY>24),{passive:true});menuButton.addEventListener("click",()=>setMenu(!mobileMenu.classList.contains("open")));$$("a",mobileMenu).forEach(a=>a.addEventListener("click",()=>setMenu(false)));
const setWhatsapp=open=>{waWidget.classList.toggle("open",open);waWidget.setAttribute("aria-hidden",String(!open));waTrigger.setAttribute("aria-expanded",String(open))};waTrigger.addEventListener("click",()=>setWhatsapp(!waWidget.classList.contains("open")));waClose.addEventListener("click",()=>setWhatsapp(false));
const translations = {
  es: {
    pageTitle: "Rodrigo Guarda Arquitecto",
    pageDescription: "Rodrigo Guarda Arquitectos: más de 24 años de trayectoria y 800.000 m² desarrollados en vivienda, proyectos inmobiliarios, comerciales e industriales.",

    navAreas: "Áreas",
    navProjects: "Proyectos",
    navStudio: "Estudio",
    navServices: "Servicios",
    navContact: "Contacto",

    heroTitle: "Arquitectura con visión, solidez y permanencia.",
    heroText: "Más de dos décadas transformando visión, técnica y experiencia en proyectos capaces de permanecer en el tiempo.",
    explore: "Scroll para explorar ↓",

    areasEyebrow: "Áreas de especialidad",
    areasTitle: "Distintas escalas. Un mismo estándar de excelencia.",
    areaHousing: "Vivienda",
    areaHousingText: "Viviendas concebidas desde la forma de habitar, el carácter del lugar y la identidad de cada cliente.",
    areaRealEstate: "Inmobiliario",
    areaRealEstateText: "Desarrollos residenciales y de uso mixto abordados con visión urbana, coordinación técnica y criterio de largo plazo.",
    areaCommercial: "Comercial",
    areaCommercialText: "Espacios donde arquitectura, identidad y operación convergen para crear valor y una experiencia consistente.",
    areaIndustrial: "Industrial",
    areaIndustrialText: "Infraestructura de alta exigencia, diseñada para responder con precisión, eficiencia y solidez operativa.",
    viewProjects: "Ver proyectos →",
    discoverMore: "Conocer más →",

    housingGalleryEyebrow: "Vivienda",
    housingGalleryTitle: "Vivir bien comienza con entender cómo se habita.",
    housingGalleryText: "Una arquitectura cercana, precisa y profundamente ligada a quienes la habitan. Cada vivienda nace de escuchar, comprender y traducir una forma de vida en espacio.",

    realEstateGalleryEyebrow: "Inmobiliaria",
    realEstateGalleryTitle: "Arquitectura que construye ciudad y proyecta valor.",
    realEstateGalleryText: "Proyectos desarrollados con una mirada integral: desde la visión arquitectónica hasta la coordinación técnica, la eficiencia del proyecto y su impacto en el entorno.",

    commercialGalleryEyebrow: "Comercial",
    commercialGalleryTitle: "Espacios que convierten identidad en experiencia.",
    commercialGalleryText: "Arquitectura comercial capaz de alinear marca, operación y experiencia. Espacios diseñados para funcionar con claridad y permanecer en la memoria.",

    industrialGalleryEyebrow: "Industrial",
    industrialGalleryTitle: "Solidez técnica para operaciones de alta exigencia.",
    industrialGalleryText: "Infraestructura proyectada desde el conocimiento técnico, la coordinación multidisciplinaria y una comprensión profunda de los procesos que debe sostener.",

    galleryOpen: "Ver galería completa",
    galleryClose: "Cerrar galería",

    studioEyebrow: "El estudio",
    studioRole: "Arquitecto",
    studioQuote: "La arquitectura debe responder al presente, pero también tener la solidez suficiente para seguir creando valor con el paso del tiempo.",
    studioQuoteRole: "Arquitecto",
    studioP1: "Durante más de 24 años, Rodrigo Guarda Arquitectos ha construido una trayectoria basada en la confianza, el rigor técnico y la capacidad de convertir desafíos complejos en decisiones claras.",
    studioP2: "La experiencia acumulada en vivienda, desarrollos inmobiliarios, proyectos comerciales e infraestructura industrial permite abordar cada encargo con una mirada amplia, estratégica y profundamente responsable.",
    studioP3: "Más de 800.000 m² desarrollados respaldan una forma de trabajar donde visión, estética, funcionalidad, coordinación y ejecución operan como una sola disciplina.",

    servicesEyebrow: "Capacidades",
    servicesTitle: "Visión respaldada por capacidad de ejecución.",
    service1: "Diseño arquitectónico",
    service1Text: "Definimos soluciones integrales a partir del propósito, el contexto y la experiencia de quienes usarán cada espacio.",
    service2: "Diseño conceptual",
    service2Text: "Construimos una visión rectora capaz de dar coherencia a la forma, la función, la materialidad y la identidad del proyecto.",
    service3: "Documentación técnica",
    service3Text: "Traducimos la visión arquitectónica en documentación precisa, coordinada y preparada para una ejecución confiable.",
    service4: "Coordinación de especialidades",
    service4Text: "Integramos disciplinas y equipos para anticipar riesgos, ordenar decisiones y proteger la calidad del resultado.",
    service5: "Supervisión de obra",
    service5Text: "Acompañamos la obra para resguardar la intención arquitectónica, la calidad técnica y la coherencia de cada decisión.",

    instagramTitle: "Arquitectura en proceso.",
    instagramText: "Proyectos, avances y momentos que muestran cómo una idea se transforma en una obra construida.",

    contactEyebrow: "Contacto",
    contactTitle: "Construyamos algo que permanezca.",
    location: "Estudio",
    contactData: "Contacto",
    social: "Redes",

    contactChatStatus: "En línea",
    contactChatMessage1: "Hola, soy Rodrigo. Gracias por conocer nuestro trabajo.",
    contactChatMessage2: "Cuéntame qué desafío tienes por delante. Una buena obra siempre comienza con una conversación clara.",
    contactChatPlaceholder: "Hola RG Arquitecto, quiero conversar sobre un proyecto.",
    today: "Hoy",

    whatsappStatus: "Normalmente responde en unos minutos",
    whatsappMessage: "Hola, gracias por escribir. ¿Quieres conversar sobre un proyecto?",
    whatsappButton: "Iniciar conversación",
    whatsappPrefill: "Hola Rodrigo, quiero conversar sobre un proyecto.",
    openWhatsapp: "Abrir WhatsApp",
    close: "Cerrar"
  },

  en: {
    pageTitle: "Rodrigo Guarda Architect",
    pageDescription: "Rodrigo Guarda Architects: over 24 years of experience and 800,000 m² developed across residential, real estate, commercial and industrial architecture.",

    navAreas: "Expertise",
    navProjects: "Projects",
    navStudio: "Studio",
    navServices: "Services",
    navContact: "Contact",

    heroTitle: "Architecture with vision, strength and permanence.",
    heroText: "Over two decades transforming vision, technical expertise and experience into projects designed to endure.",
    explore: "Scroll to explore ↓",

    areasEyebrow: "Areas of expertise",
    areasTitle: "Different scales. One standard of excellence.",
    areaHousing: "Residential",
    areaHousingText: "Homes shaped by the way people live, the character of each place and the identity of every client.",
    areaRealEstate: "Real estate",
    areaRealEstateText: "Residential and mixed-use developments approached through urban vision, technical coordination and long-term thinking.",
    areaCommercial: "Commercial",
    areaCommercialText: "Spaces where architecture, identity and operation converge to create value and a consistent experience.",
    areaIndustrial: "Industrial",
    areaIndustrialText: "High-performance infrastructure designed to respond with precision, efficiency and operational strength.",
    viewProjects: "View projects →",
    discoverMore: "Discover more →",

    housingGalleryEyebrow: "Residential",
    housingGalleryTitle: "Living well begins with understanding how people inhabit space.",
    housingGalleryText: "Architecture that is precise, personal and deeply connected to those who inhabit it. Every home begins by listening, understanding and translating a way of life into space.",

    realEstateGalleryEyebrow: "Real estate",
    realEstateGalleryTitle: "Architecture that builds cities and creates lasting value.",
    realEstateGalleryText: "Projects developed through an integrated perspective, from architectural vision and technical coordination to project efficiency and its impact on the surrounding context.",

    commercialGalleryEyebrow: "Commercial",
    commercialGalleryTitle: "Spaces that turn identity into experience.",
    commercialGalleryText: "Commercial architecture that aligns brand, operation and experience. Spaces designed to work clearly and remain memorable.",

    industrialGalleryEyebrow: "Industrial",
    industrialGalleryTitle: "Technical strength for high-demand operations.",
    industrialGalleryText: "Infrastructure shaped by technical expertise, multidisciplinary coordination and a deep understanding of the processes it must support.",

    galleryOpen: "View full gallery",
    galleryClose: "Close gallery",

    studioEyebrow: "The studio",
    studioRole: "Architect",
    studioQuote: "Architecture must respond to the present while remaining strong enough to continue creating value over time.",
    studioQuoteRole: "Architect",
    studioP1: "For more than 24 years, Rodrigo Guarda Architects has built a practice grounded in trust, technical rigor and the ability to turn complex challenges into clear decisions.",
    studioP2: "Experience across residential, real estate, commercial and industrial projects allows every commission to be approached with a broad, strategic and deeply responsible perspective.",
    studioP3: "More than 800,000 m² developed support a way of working in which vision, aesthetics, functionality, coordination and execution operate as one discipline.",

    servicesEyebrow: "Capabilities",
    servicesTitle: "Vision backed by the ability to execute.",
    service1: "Architectural design",
    service1Text: "We define integrated solutions based on purpose, context and the experience of those who will use each space.",
    service2: "Concept design",
    service2Text: "We build a guiding vision that gives coherence to form, function, materiality and project identity.",
    service3: "Technical documentation",
    service3Text: "We translate architectural vision into precise, coordinated documentation prepared for reliable execution.",
    service4: "Consultant coordination",
    service4Text: "We integrate disciplines and teams to anticipate risks, organize decisions and protect the quality of the outcome.",
    service5: "Construction supervision",
    service5Text: "We support the construction process to preserve architectural intent, technical quality and the coherence of every decision.",

    instagramTitle: "Architecture in progress.",
    instagramText: "Projects, progress and moments that reveal how an idea becomes a built work.",

    contactEyebrow: "Contact",
    contactTitle: "Let’s build something that endures.",
    location: "Studio",
    contactData: "Contact",
    social: "Social",

    contactChatStatus: "Online",
    contactChatMessage1: "Hello, I’m Rodrigo. Thank you for taking the time to discover our work.",
    contactChatMessage2: "Tell me about the challenge ahead. Every meaningful project begins with a clear conversation.",
    contactChatPlaceholder: "Hi RG Architect, I’d like to discuss a project.",
    today: "Today",

    whatsappStatus: "Usually replies within a few minutes",
    whatsappMessage: "Hello, thank you for reaching out. Would you like to discuss a project?",
    whatsappButton: "Start conversation",
    whatsappPrefill: "Hello Rodrigo, I would like to discuss a project.",
    openWhatsapp: "Open WhatsApp",
    close: "Close"
  }
}
function setLanguage(lang) {
  const d = translations[lang];

  if (!d) return;

  document.documentElement.lang = lang;

  $$("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (d[key]) {
      element.textContent = d[key];
    }
  });

  $$("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;

    if (d[key]) {
      element.setAttribute("aria-label", d[key]);
    }
  });

  document.title = d.pageTitle;

  const metaDescription = $('meta[name="description"]');

  if (metaDescription) {
    metaDescription.content = d.pageDescription;
  }

  if (waCta) {
    waCta.href =
      `https://wa.me/56996192400?text=${encodeURIComponent(d.whatsappPrefill)}`;
  }

  $$("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === lang;

    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  localStorage.setItem("preferredLanguage", lang);

  document.dispatchEvent(
    new CustomEvent("languagechange", {
      detail: { lang, dictionary: d }
    })
  );
}

$$('[data-lang]').forEach(btn=>btn.addEventListener('click',()=>setLanguage(btn.dataset.lang)));setLanguage(localStorage.getItem('preferredLanguage')||(navigator.language.toLowerCase().startsWith('en')?'en':'es'));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -6%'});$$('.reveal').forEach(el=>observer.observe(el));
if(matchMedia('(prefers-reduced-motion: reduce)').matches){$$('.reveal').forEach(el=>el.classList.add('visible'));document.documentElement.style.scrollBehavior='auto'}
const areaCards = document.querySelectorAll(".area-card");
const areaTouchQuery = window.matchMedia("(hover: none), (pointer: coarse)");

areaCards.forEach((card) => {
  card.addEventListener("pointerup", (event) => {
    if (!areaTouchQuery.matches) return;
    if (event.target.closest("a")) return;

    const activate = !card.classList.contains("is-active");

    areaCards.forEach((item) => {
      item.classList.remove("is-active");
    });

    if (activate) {
      card.classList.add("is-active");
    }
  });
});

document.addEventListener("pointerup", (event) => {
  if (!areaTouchQuery.matches) return;
  if (event.target.closest(".area-card")) return;

  areaCards.forEach((card) => {
    card.classList.remove("is-active");
  });
});

/* =========================================================
   GSAP / SCROLLTRIGGER
========================================================= */

if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function initBaseAnimations() {
    if (reduceMotion) return;

    gsap.utils
      .toArray(".section-intro, .studio-heading")
      .forEach((section) => {
        const parts = [
          section.querySelector(".chapter-index"),
          section.querySelector(".eyebrow"),
          section.querySelector("h2")
        ].filter(Boolean);

        gsap.from(parts, {
          y: 42,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true
          }
        });
      });

    const areaCardsForMotion = gsap.utils.toArray(".area-card");
    const mobileAreas = window.matchMedia("(max-width: 760px)").matches;

    if (mobileAreas) {
      gsap.set(areaCardsForMotion, {
        opacity: 1,
        x: 0,
        y: 0,
        clearProps: "clipPath,transform"
      });

      areaCardsForMotion.forEach((card) => {
        card.classList.add("visible");
      });
    } else {
      areaCardsForMotion.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            clipPath: "inset(0 100% 0 0)",
            opacity: 0.999
          },
          {
            clipPath: "inset(0 0% 0 0)",
            opacity: 1,
            duration: 1.15,
            delay: (index % 2) * 0.08,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: card,
              start: "top 86%",
              once: true,
              invalidateOnRefresh: true
            }
          }
        );
      });
    }

    const statementFrame = document.querySelector(".statement-frame");

    if (statementFrame) {
      gsap.fromTo(
        statementFrame,
        {
          clipPath: "inset(0 50% 0 50%)",
          opacity: 0
        },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 1.25,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: statementFrame,
            start: "top 82%",
            once: true
          }
        }
      );

      gsap.from(
        statementFrame.querySelectorAll(
          ":scope > .eyebrow, :scope > h2, :scope > p:last-child"
        ),
        {
          y: 36,
          opacity: 0,
          duration: 0.95,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: statementFrame,
            start: "top 72%",
            once: true
          }
        }
      );
    }

    gsap.utils.toArray(".work-item").forEach((item) => {
      gsap.from(item, {
        xPercent: -6,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          once: true
        }
      });
    });

    gsap.utils.toArray(".service-row").forEach((row, index) => {
      gsap.from(row.children, {
        y: 28,
        opacity: 0,
        duration: 0.75,
        stagger: 0.08,
        delay: Math.min(index * 0.025, 0.12),
        ease: "power3.out",
        scrollTrigger: {
          trigger: row,
          start: "top 88%",
          once: true
        }
      });
    });

    const contactRule = document.querySelector(".contact-rule");

    if (contactRule) {
      gsap.fromTo(
        contactRule,
        {
          scaleX: 0,
          transformOrigin: "left center"
        },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: contactRule,
            start: "top 88%",
            once: true
          }
        }
      );
    }
  }

  

  function initStudioPortrait() {
    const studio = document.querySelector("#estudio");
    const avatarFrame = document.querySelector(".studio-avatar-frame");
    const avatar = document.querySelector(".studio-avatar");
    const avatarLines = document.querySelectorAll(".studio-avatar-line");
    const caption = document.querySelector(".studio-avatar-caption");
    const quote = document.querySelector(".studio-quote");
    const quotePointer = document.querySelector(".studio-quote-pointer");
    const quoteParts = document.querySelectorAll(
      ".studio-quote-mark, .studio-quote blockquote > p, .studio-quote footer"
    );
    const copyParagraphs = document.querySelectorAll(".studio-copy p");

    if (!studio || !avatarFrame || !avatar || !quote) return;

    if (reduceMotion) {
      gsap.set(
        [
          avatarFrame,
          avatar,
          avatarLines,
          caption,
          quote,
          quotePointer,
          quoteParts,
          copyParagraphs
        ],
        {
          clearProps: "all"
        }
      );
      return;
    }

    const isMobileStudio = window.matchMedia(
      "(max-width: 960px)"
    ).matches;

    const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: studio,
    start: "top 82%",
    end: "top 20%",
    scrub: 1,
    invalidateOnRefresh: true
  }
});

timeline
  .fromTo(
    avatarFrame,
    {
      clipPath: "inset(100% 0 0 0)"
    },
    {
      clipPath: "inset(0% 0 0 0)",
      duration: 1,
      ease: "power4.inOut",
      immediateRender: false
    }
  )
  .fromTo(
    avatar,
    {
      scale: 1.12
    },
    {
      scale: 1,
      duration: 1.1,
      ease: "power3.out",
      immediateRender: false
    },
    "-=.8"
  )
  .to(
    avatarLines,
    {
      scaleX: 1,
      scaleY: 1,
      duration: 0.65,
      stagger: 0.1,
      ease: "power3.inOut"
    },
    "-=.55"
  )
  .from(
    caption,
    {
      y: 18,
      opacity: 0,
      duration: 0.4
    },
    "-=.25"
  );

    gsap.fromTo(
      quote,
      {
        y: isMobileStudio ? 130 : 0,
        x: isMobileStudio ? 0 : 90,
        scale: isMobileStudio ? 0.96 : 0.9,
        opacity: 0,
        clipPath: isMobileStudio
          ? "inset(100% 0 0 0)"
          : "inset(0 0 0 100%)"
      },
      {
        y: 0,
        x: 0,
        scale: 1,
        opacity: 1,
        clipPath: "inset(0 0 0 0%)",
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: quote,
          start: isMobileStudio ? "top 94%" : "top 82%",
          once: true
        }
      }
    );

    if (quotePointer) {
      gsap.from(quotePointer, {
        scaleX: isMobileStudio ? 1 : 0,
        scaleY: isMobileStudio ? 0 : 1,
        duration: 0.65,
        delay: 0.35,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: quote,
          start: "top 82%",
          once: true
        }
      });
    }

    gsap.from(quoteParts, {
      y: 24,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      delay: 0.35,
      ease: "power3.out",
      scrollTrigger: {
        trigger: quote,
        start: "top 82%",
        once: true
      }
    });

    gsap.from(copyParagraphs, {
      y: 42,
      opacity: 0,
      duration: 0.85,
      stagger: 0.14,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".studio-copy",
        start: "top 84%",
        once: true
      }
    });

    gsap.to(avatar, {
      yPercent: 5,
      ease: "none",
      scrollTrigger: {
        trigger: studio,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
  }

  function initEmbeddedContactChat() {
    const chat = document.querySelector("#contactChat");
    const typing = document.querySelector("#contactTyping");
    const delayedMessage = document.querySelector("#contactDelayedMessage");

    if (!chat || !typing || !delayedMessage) return;

    let hasPlayed = false;
    let typingTimer = null;

    function playConversation() {
      if (hasPlayed) return;
      hasPlayed = true;
      typing.style.display = "flex";
      delayedMessage.classList.remove("is-visible");

      typingTimer = window.setTimeout(() => {
        typing.style.display = "none";
        delayedMessage.classList.add("is-visible");
      }, 2200);
    }

    if (reduceMotion) {
      typing.style.display = "none";
      delayedMessage.classList.add("is-visible");
      gsap.set(chat, { opacity: 1, y: 0, scale: 1, clearProps: "visibility" });
      return;
    }

    ScrollTrigger.create({
      trigger: chat,
      start: "top 78%",
      once: true,
      onEnter: playConversation,
      onKill: () => {
        if (typingTimer) window.clearTimeout(typingTimer);
      }
    });

    const isMobileContact = window.matchMedia("(max-width: 960px)").matches;

    if (isMobileContact) {
      gsap.set(chat, {
        opacity: 1,
        y: 0,
        scale: 1,
        clearProps: "visibility,transform"
      });
    } else {
      gsap.from(chat, {
        y: 70,
        scale: 0.94,
        opacity: 0,
        duration: 1.05,
        ease: "power4.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: chat,
          start: "top 85%",
          once: true,
          invalidateOnRefresh: true
        }
      });

      gsap.from(
        chat.querySelectorAll(
          ".contact-chat__header > *, .contact-chat__message--incoming:first-of-type"
        ),
        {
          y: 18,
          opacity: 0,
          stagger: 0.07,
          duration: 0.65,
          delay: 0.25,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: chat,
            start: "top 85%",
            once: true,
            invalidateOnRefresh: true
          }
        }
      );
    }
  }

  function initHeroSequence() {
    const hero = document.querySelector("#heroSequence");
    const images = gsap.utils.toArray("[data-hero-image]");
    const progressItems = gsap.utils.toArray(".hero-progress span");
    const numberElement = document.querySelector("#heroSceneNumber");
    const labelElement = document.querySelector("#heroSceneLabel");
    const descriptionElement = document.querySelector("#heroSceneDescription");

    if (!hero || !images.length || !numberElement || !labelElement || !descriptionElement) {
      return;
    }

    const heroScenes = {
      es: [
        { number: "01", label: "Vivienda", description: "Arquitectura concebida desde la vida cotidiana, el lugar y quienes lo habitan." },
        { number: "02", label: "Inmobiliario", description: "Desarrollos de gran escala abordados con visión urbana, coordinación técnica y criterio de largo plazo." },
        { number: "03", label: "Comercial", description: "Espacios donde arquitectura, identidad y operación convergen para crear una experiencia consistente." },
        { number: "04", label: "Industrial", description: "Infraestructura de alta exigencia diseñada para operar con precisión, eficiencia y solidez." }
      ],
      en: [
        { number: "01", label: "Residential", description: "Architecture shaped by everyday life, the character of place and those who inhabit it." },
        { number: "02", label: "Real estate", description: "Large-scale developments approached through urban vision, technical coordination and long-term thinking." },
        { number: "03", label: "Commercial", description: "Spaces where architecture, identity and operation converge into a consistent experience." },
        { number: "04", label: "Industrial", description: "High-performance infrastructure designed to operate with precision, efficiency and strength." }
      ]
    };

    const cameraMoves = [
      { fromScale: 1.035, toScale: 1.14, x: 2.5, y: -2 },
      { fromScale: 1.12, toScale: 1.035, x: -3.5, y: 1.5 },
      { fromScale: 1.04, toScale: 1.13, x: 3, y: 2 },
      { fromScale: 1.11, toScale: 1.04, x: -2, y: -2.5 }
    ];

    const getScenes = () => {
      const lang = document.documentElement.lang || "es";
      return heroScenes[lang] || heroScenes.es;
    };

    const totalScenes = images.length;
    const transitionWindow = 0.46;
    let activeIndex = -1;

    gsap.set(images, {
      autoAlpha: 0,
      scale: 1.06,
      xPercent: 0,
      yPercent: 0,
      transformOrigin: "center center"
    });

    gsap.set(images[0], { autoAlpha: 1 });

    function renderSceneText(index, animate = true) {
      if (index === activeIndex) return;
      activeIndex = index;
      const scene = getScenes()[index];

      progressItems.forEach((item, itemIndex) => {
        item.classList.toggle("is-active", itemIndex === index);
      });

      if (!animate) {
        numberElement.textContent = scene.number;
        labelElement.textContent = scene.label;
        descriptionElement.textContent = scene.description;
        return;
      }

      gsap.timeline({ defaults: { overwrite: true } })
        .to([numberElement, labelElement, descriptionElement], {
          y: -12,
          opacity: 0,
          duration: 0.16,
          stagger: 0.018,
          ease: "power2.in"
        })
        .add(() => {
          numberElement.textContent = scene.number;
          labelElement.textContent = scene.label;
          descriptionElement.textContent = scene.description;
        })
        .set([numberElement, labelElement, descriptionElement], { y: 15 })
        .to([numberElement, labelElement, descriptionElement], {
          y: 0,
          opacity: 1,
          duration: 0.34,
          stagger: 0.035,
          ease: "power3.out"
        });
    }

    renderSceneText(0, false);

    const getScrollDistance = () =>
      window.innerHeight *
      (window.matchMedia("(max-width: 760px)").matches ? 0.3 : 0.4);

    ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      end: () => `+=${getScrollDistance()}`,
      pin: true,
      scrub: 0.06,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate(self) {
        const scenePosition = self.progress * totalScenes;
        const baseIndex = Math.min(totalScenes - 1, Math.floor(scenePosition));
        const localProgress = scenePosition - Math.floor(scenePosition);
        const nextIndex = Math.min(totalScenes - 1, baseIndex + 1);

        const fadeProgress = gsap.utils.clamp(
          0,
          1,
          (localProgress - (1 - transitionWindow)) / transitionWindow
        );

        images.forEach((image, index) => {
          let opacity = 0;
          if (index === baseIndex) opacity = 1 - fadeProgress;
          else if (index === nextIndex) opacity = fadeProgress;

          const move = cameraMoves[index];
          const sceneLocal =
            index === baseIndex ? localProgress :
            index === nextIndex ? fadeProgress : 0;

          gsap.set(image, {
            autoAlpha: opacity,
            scale: gsap.utils.interpolate(move.fromScale, move.toScale, sceneLocal),
            xPercent: move.x * sceneLocal,
            yPercent: move.y * sceneLocal
          });
        });

        renderSceneText(fadeProgress > 0.28 ? nextIndex : baseIndex);
      }
    });

    gsap.to(".hero-content", {
      yPercent: 7,
      opacity: 0.76,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: () => `+=${getScrollDistance()}`,
        scrub: 0.1,
        invalidateOnRefresh: true
      }
    });

    gsap.to(".hero-scene-info", {
      yPercent: -7,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: () => `+=${getScrollDistance()}`,
        scrub: 0.3,
        invalidateOnRefresh: true
      }
    });

    document.addEventListener("languagechange", () => {
      const scene = getScenes()[Math.max(activeIndex, 0)];
      if (!scene) return;

      numberElement.textContent = scene.number;
      labelElement.textContent = scene.label;
      descriptionElement.textContent = scene.description;
    });
  }

  initBaseAnimations();
  initStudioPortrait();
  initEmbeddedContactChat();
  initHeroSequence();

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
}
window.addEventListener("load", () => {
  if (window.ScrollTrigger) {
    ScrollTrigger.refresh(true);
  }
});

/* =========================================================
   PORTFOLIO GALLERIES
   Un único componente para Vivienda, Inmobiliaria y futuras áreas.
========================================================= */

const PORTFOLIO_GALLERIES = [
  {
    root: "#vivienda",
    folder: "vivienda",
    dynamic: false,
    collapsible: "#housingGalleryCollapsible",
    grid: ".housing-gallery__grid",
    fade: ".housing-gallery__fade",
    toggle: "#housingGalleryToggle",
    progress: "#housingMobileProgress",
    counter: "#housingMobileCounter"
  },

  {
    root: "#inmobiliaria",
    folder: "inmobiliaria",
    dynamic: true,
    filenames: [
      "download.avif",
      ...Array.from(
        { length: 35 },
        (_, index) => `download-${index + 1}.avif`
      )
    ],
    collapsible: "#inmobiliariaCollapsible",
    grid: "#inmobiliariaGrid",
    fade: ".editorial-gallery__fade",
    toggle: "#inmobiliariaToggle",
    progress: "#inmobiliariaProgress",
    counter: "#inmobiliariaCounter"
  },

  {
    root: "#comercial",
    folder: "comercial",
    dynamic: true,
    filenames: [
      "comercial1.jpg",
      "comercial2.jpg",
      "comercial3.jpg",
      "comercial4.jpg",
      "comercial5.jpg",
      "comercial6.jpg",
      "comercial7.jpg"
    ],
    collapsible: "#comercialCollapsible",
    grid: "#comercialGrid",
    fade: ".editorial-gallery__fade",
    toggle: "#comercialToggle",
    progress: "#comercialProgress",
    counter: "#comercialCounter"
  },

  {
    root: "#industrial",
    folder: "industrial",
    dynamic: true,
    filenames: [
      "guarda-industrial1.avif",
      "guarda-industrial2.avif",
      "guarda-industrial3.avif",
      "guarda-industrial4.avif",
      "guarda-industrial5.avif",
      "guarda-industrial6.avif",
      "guarda-industrial7.avif",
      "guarda-industrial8.avif",
      "guarda-industrial9.avif",
      "guarda-industrial10.avif",
      "guarda-industrial11.avif",
      "guarda-industrial12.avif",
      "guarda-industrial13.avif",
      "guarda-industrial14.avif",
      "guarda-industrial15.avif",
      "guarda-industrial16.avif",
      "guarda-industrial17.avif"
    ],
    collapsible: "#industrialCollapsible",
    grid: "#industrialGrid",
    fade: ".editorial-gallery__fade",
    toggle: "#industrialToggle",
    progress: "#industrialProgress",
    counter: "#industrialCounter"
  }
];

const PORTFOLIO_PATTERNS = [
  "a", "b", "c", "d", "e", "f",
  "g", "h", "i", "j", "k", "l"
];

function getGalleryElement(root, selector) {
  if (!selector) return null;

  /*
    Los IDs se consultan en document para mantener compatibilidad
    con el HTML actual. Las clases se buscan dentro de la sección.
  */
  return selector.startsWith("#")
    ? document.querySelector(selector)
    : root.querySelector(selector);
}

function extractPattern(element, index) {
  const patternClass = [...element.classList].find((className) =>
    /(?:housing|editorial)-gallery__item--[a-l]$/.test(className)
  );

  if (patternClass) {
    return patternClass.slice(-1);
  }

  return PORTFOLIO_PATTERNS[index % PORTFOLIO_PATTERNS.length];
}

function buildDynamicGallery(config, grid) {
  if (!config.dynamic || !grid || grid.children.length > 0) {
    return;
  }

  const fragment = document.createDocumentFragment();

  config.filenames.forEach((filename, index) => {
    const figure = document.createElement("figure");
    const image = document.createElement("img");

    figure.className = "portfolio-gallery__item reveal";
    figure.dataset.pattern =
      PORTFOLIO_PATTERNS[index % PORTFOLIO_PATTERNS.length];

    image.src = `./images/${config.folder}/${filename}`;
    image.alt = `Proyecto ${config.folder} Rodrigo Guarda ${index + 1}`;
    image.loading = index < 4 ? "eager" : "lazy";
    image.decoding = "async";

    image.addEventListener(
      "error",
      () => {
        figure.classList.add("is-image-missing");
        figure.setAttribute("aria-hidden", "true");
      },
      { once: true }
    );

    figure.appendChild(image);
    fragment.appendChild(figure);
  });

  grid.appendChild(fragment);
}

function normalizeGalleryMarkup(config) {
  const root = document.querySelector(config.root);

  if (!root) {
    return null;
  }

  const grid = getGalleryElement(root, config.grid);
  const collapsible = getGalleryElement(root, config.collapsible);
  const fade = getGalleryElement(root, config.fade);
  const toggle = getGalleryElement(root, config.toggle);
  const progress = getGalleryElement(root, config.progress);
  const counter = getGalleryElement(root, config.counter);

  if (!grid) {
    console.warn(`Galería sin grid: ${config.root}`);
    return null;
  }

  buildDynamicGallery(config, grid);

  root.classList.add("portfolio-gallery");
  grid.classList.add("portfolio-gallery__grid");
  collapsible?.classList.add("portfolio-gallery__collapsible");
  fade?.classList.add("portfolio-gallery__fade");
  toggle?.classList.add("portfolio-gallery__toggle");

  toggle?.parentElement?.classList.add(
    "portfolio-gallery__toggle-wrap"
  );

  const progressWrap =
    progress?.closest(
      ".housing-gallery__mobile-progress, " +
      ".editorial-gallery__mobile-progress"
    );

  progressWrap?.classList.add(
    "portfolio-gallery__mobile-progress"
  );

  progress?.parentElement?.classList.add(
    "portfolio-gallery__mobile-line"
  );

  const items = [...grid.children].filter(
    (element) => element.tagName === "FIGURE"
  );

  items.forEach((item, index) => {
    item.classList.add("portfolio-gallery__item");
    item.dataset.pattern = extractPattern(item, index);

    /*
      Los elementos creados dinámicamente nacen después de la primera
      pasada del IntersectionObserver.
    */
    if (
      item.classList.contains("reveal") &&
      typeof observer !== "undefined"
    ) {
      observer.observe(item);
    }
  });

  return {
    root,
    grid,
    collapsible,
    fade,
    toggle,
    progress,
    counter,
    items
  };
}

function formatGalleryCounter(current, total) {
  return (
    `${String(current).padStart(2, "0")} / ` +
    `${String(total).padStart(2, "0")}`
  );
}

function initPortfolioGallery(config) {
  const gallery = normalizeGalleryMarkup(config);

  if (!gallery) {
    return;
  }

  const {
    root,
    grid,
    collapsible,
    toggle,
    progress,
    counter,
    items
  } = gallery;

  const mobileQuery = window.matchMedia("(max-width: 760px)");
  const toggleLabel = toggle?.querySelector(
    "[data-i18n], span:first-child"
  );

  function setToggleState(expanded) {
    collapsible?.classList.toggle("is-expanded", expanded);

    if (toggle) {
      toggle.setAttribute("aria-expanded", String(expanded));
    }

    if (toggleLabel) {
      const lang = document.documentElement.lang || "es";
      const dictionary = translations[lang] || translations.es;

      toggleLabel.textContent = expanded
        ? dictionary.galleryClose
        : dictionary.galleryOpen;
    }
  }

  function updateMobileProgress() {
    if (!mobileQuery.matches || !items.length) {
      return;
    }

    const maxScroll = Math.max(
      0,
      grid.scrollWidth - grid.clientWidth
    );

    const ratio = maxScroll > 0
      ? grid.scrollLeft / maxScroll
      : 0;

    const activeIndex = Math.min(
      items.length - 1,
      Math.max(
        0,
        Math.round(ratio * (items.length - 1))
      )
    );

    if (progress) {
      progress.style.width =
        `${((activeIndex + 1) / items.length) * 100}%`;
    }

    if (counter) {
      counter.textContent = formatGalleryCounter(
        activeIndex + 1,
        items.length
      );
    }
  }

  toggle?.addEventListener("click", () => {
    const expanded =
      !collapsible?.classList.contains("is-expanded");

    setToggleState(expanded);

    /*
      Al cerrar, regresamos al comienzo de la sección para no dejar
      al usuario debajo de un bloque que acaba de reducir su altura.
    */
    if (!expanded) {
      window.setTimeout(() => {
        root.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 180);
    }

    window.setTimeout(() => {
      window.ScrollTrigger?.refresh();
    }, 1250);
  });

  grid.addEventListener(
    "scroll",
    updateMobileProgress,
    { passive: true }
  );

  mobileQuery.addEventListener("change", ({ matches }) => {
    /*
      En mobile siempre se muestra la galería completa como carrusel.
      Al volver a desktop recupera su estado colapsado por defecto.
    */
    if (matches) {
      collapsible?.classList.remove("is-expanded");
    } else {
      setToggleState(false);
      grid.scrollLeft = 0;
    }

    updateMobileProgress();
    window.ScrollTrigger?.refresh();
  });

  document.addEventListener("languagechange", () => {
    const expanded =
      collapsible?.classList.contains("is-expanded") || false;

    setToggleState(expanded);
  });

  window.addEventListener("resize", updateMobileProgress);

  setToggleState(false);
  updateMobileProgress();
}

PORTFOLIO_GALLERIES.forEach(initPortfolioGallery);

requestAnimationFrame(() => {
  window.ScrollTrigger?.refresh(true);
});


window.addEventListener("pageshow", () => {
  requestAnimationFrame(() => {
    window.ScrollTrigger?.refresh(true);
  });
});


/* =========================================================
   ARCHITECTURAL GRID
   La estructura se construye con el hero, respira durante
   el recorrido y desaparece al alcanzar el footer.
========================================================= */

function initArchitecturalGrid() {
  const grid = document.querySelector(
    ".architectural-grid, .construction-lines"
  );

  if (!grid || !window.gsap || !window.ScrollTrigger) {
    return;
  }

  const lines = gsap.utils.toArray("i", grid);

  if (!lines.length) {
    return;
  }

  /*
    Conserva compatibilidad con el HTML actual sin obligar
    a renombrar inmediatamente construction-lines.
  */
  grid.classList.add("architectural-grid");

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) {
    gsap.set(lines, {
      scaleY: 1,
      opacity: 1,
      x: 0,
      transformOrigin: "bottom center"
    });

    return;
  }

  gsap.set(grid, {
    autoAlpha: 1
  });

  gsap.set(lines, {
    scaleY: 0,
    opacity: 0,
    transformOrigin: "bottom center",
    force3D: true
  });

  /*
    Construcción inicial:
    cada eje comienza y termina en un momento ligeramente distinto.
    El progreso completo coincide con el final del hero fijado.
  */
  const buildTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#heroSequence",
      start: "top top",
      end: "bottom top",
      scrub: 0.45,
      invalidateOnRefresh: true
    }
  });

  const starts = [0, 0.11, 0.23, 0.37];
  const durations = [0.72, 0.82, 0.7, 0.63];

  lines.forEach((line, index) => {
    buildTimeline.to(
      line,
      {
        scaleY: 1,
        opacity: index === 0 || index === lines.length - 1
          ? 0.23
          : 0.18,
        duration: durations[index] ?? 0.72,
        ease: "none"
      },
      starts[index] ?? index * 0.1
    );
  });

  /*
    Respiración casi imperceptible.
    Se pausa durante la salida del footer para no competir con ella.
  */
  const breathingTweens = lines.map((line, index) =>
    gsap.to(line, {
      x: index % 2 === 0 ? 1.4 : -1.4,
      duration: 15 + index * 2.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: index * 0.65,
      force3D: true
    })
  );

  /*
    Al llegar al cierre, la retícula abandona el sitio hacia arriba.
  */
  const footer = document.querySelector(".footer");

  if (footer) {
    ScrollTrigger.create({
      trigger: footer,
      start: "top 92%",
      end: "bottom bottom",
      scrub: 0.6,

      onEnter: () => {
        breathingTweens.forEach((tween) => tween.pause());
      },

      onLeaveBack: () => {
        breathingTweens.forEach((tween) => tween.resume());
      },

      onUpdate(self) {
        const progress = self.progress;

        lines.forEach((line, index) => {
          const staggered = gsap.utils.clamp(
            0,
            1,
            (progress - index * 0.055) / 0.78
          );

          gsap.set(line, {
            yPercent: -110 * staggered,
            opacity:
              (index === 0 || index === lines.length - 1
                ? 0.23
                : 0.18) *
              (1 - staggered)
          });
        });
      }
    });
  }

  window.addEventListener("pageshow", () => {
    requestAnimationFrame(() => {
      window.ScrollTrigger?.refresh(true);
    });
  });
}

initArchitecturalGrid();