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



areaCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;

    if (!isTouchDevice) return;

    const isActive = card.classList.contains("is-active");

    if (!isActive) {
      event.preventDefault();

      areaCards.forEach((item) => {
        item.classList.remove("is-active");
      });

      card.classList.add("is-active");
    }
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

    gsap.utils.toArray(".area-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.15,
          delay: (index % 2) * 0.08,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 86%",
            once: true
          }
        }
      );
    });

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
    const delayedMessage = document.querySelector(
      "#contactDelayedMessage"
    );

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
      return;
    }

    ScrollTrigger.create({
      trigger: chat,
      start: "top 76%",
      once: true,
      onEnter: playConversation,
      onKill: () => {
        if (typingTimer) window.clearTimeout(typingTimer);
      }
    });

    gsap.from(chat, {
      y: 70,
      scale: 0.94,
      opacity: 0,
      duration: 1.05,
      ease: "power4.out",
      scrollTrigger: {
        trigger: chat,
        start: "top 85%",
        once: true
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
        scrollTrigger: {
          trigger: chat,
          start: "top 85%",
          once: true
        }
      }
    );
  }

  function initHeroSequence() {
    const hero = document.querySelector("#heroSequence");
    const images = gsap.utils.toArray("[data-hero-image]");
    const progressItems = gsap.utils.toArray(
      ".hero-progress span"
    );

    const numberElement = document.querySelector(
      "#heroSceneNumber"
    );
    const labelElement = document.querySelector(
      "#heroSceneLabel"
    );
    const descriptionElement = document.querySelector(
      "#heroSceneDescription"
    );

    if (
      !hero ||
      images.length === 0 ||
      !numberElement ||
      !labelElement ||
      !descriptionElement
    ) {
      return;
    }

    const heroScenes = {
      es: [
        {
          number: "01",
          label: "Vivienda",
          description: "Arquitectura concebida desde la vida cotidiana, el lugar y quienes lo habitan."
        },
        {
          number: "02",
          label: "Inmobiliario",
          description: "Desarrollos de gran escala abordados con visión urbana, coordinación técnica y criterio de largo plazo."
        },
        {
          number: "03",
          label: "Comercial",
          description: "Espacios donde arquitectura, identidad y operación convergen para crear una experiencia consistente."
        },
        {
          number: "04",
          label: "Industrial",
          description: "Infraestructura de alta exigencia diseñada para operar con precisión, eficiencia y solidez."
        }
      ],
      en: [
        {
          number: "01",
          label: "Residential",
          description: "Architecture shaped by everyday life, the character of place and those who inhabit it."
        },
        {
          number: "02",
          label: "Real estate",
          description: "Large-scale developments approached through urban vision, technical coordination and long-term thinking."
        },
        {
          number: "03",
          label: "Commercial",
          description: "Spaces where architecture, identity and operation converge into a consistent experience."
        },
        {
          number: "04",
          label: "Industrial",
          description: "High-performance infrastructure designed to operate with precision, efficiency and strength."
        }
      ]
    };

    function getHeroScenes() {
      const lang = document.documentElement.lang || "es";
      return heroScenes[lang] || heroScenes.es;
    }

    let activeIndex = 0;

    gsap.set(images, {
      autoAlpha: 0,
      scale: 1.1
    });

    gsap.set(images[0], {
      autoAlpha: 1,
      scale: 1.04
    });

    function activateScene(index) {
      if (index === activeIndex) return;

      const previousIndex = activeIndex;
      activeIndex = index;

      gsap.to(images[previousIndex], {
        autoAlpha: 0,
        scale: 1.14,
        duration: 0.85,
        ease: "power3.inOut",
        overwrite: true
      });

      gsap.fromTo(
        images[index],
        {
          autoAlpha: 0,
          scale: 1.13
        },
        {
          autoAlpha: 1,
          scale: 1.04,
          duration: 1,
          ease: "power3.out",
          overwrite: true
        }
      );

      gsap.timeline()
        .to(
          [numberElement, labelElement, descriptionElement],
          {
            y: -14,
            opacity: 0,
            duration: 0.22,
            stagger: 0.025,
            ease: "power2.in"
          }
        )
        .add(() => {
          const scene = getHeroScenes()[index];
          numberElement.textContent = scene.number;
          labelElement.textContent = scene.label;
          descriptionElement.textContent = scene.description;
        })
        .set(
          [numberElement, labelElement, descriptionElement],
          { y: 18 }
        )
        .to(
          [numberElement, labelElement, descriptionElement],
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            stagger: 0.045,
            ease: "power3.out"
          }
        );

      progressItems.forEach((item, itemIndex) => {
        item.classList.toggle(
          "is-active",
          itemIndex === index
        );
      });
    }

    ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      end: () => `+=${window.innerHeight * 4}`,
      pin: true,
      scrub: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate(self) {
        const index = Math.min(
          images.length - 1,
          Math.floor(self.progress * images.length)
        );

        activateScene(index);
      }
    });


    document.addEventListener("languagechange", () => {
      const scene = getHeroScenes()[activeIndex];

      if (!scene) return;

      numberElement.textContent = scene.number;
      labelElement.textContent = scene.label;
      descriptionElement.textContent = scene.description;
    });

    images.forEach((image, index) => {
      gsap.to(image, {
        backgroundPosition: "50% 62%",
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: () => `+=${window.innerHeight * 4}`,
          scrub: 1 + index * 0.12,
          invalidateOnRefresh: true
        }
      });
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