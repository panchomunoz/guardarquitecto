(() => {
  const loader = document.querySelector("#siteLoader");

  if (!loader) return;

  const STORAGE_KEY = "rg-safe-loader-seen";
  const MAX_VISIBLE_TIME = 1800;

  let removed = false;
  let fallbackTimer = null;

  function removeLoader() {
    if (removed) return;

    removed = true;

    if (fallbackTimer) {
      window.clearTimeout(fallbackTimer);
    }

    document.body.classList.remove("is-loading");
    loader.classList.add("is-leaving");

    window.setTimeout(() => {
      loader.remove();
      window.ScrollTrigger?.refresh(true);
    }, 650);
  }

  /*
    Failsafe absoluto:
    aunque GSAP no cargue o exista un error posterior,
    el loader jamás puede bloquear el sitio.
  */
  fallbackTimer = window.setTimeout(
    removeLoader,
    MAX_VISIBLE_TIME
  );

  const alreadySeen =
    sessionStorage.getItem(STORAGE_KEY) === "1";

  if (alreadySeen) {
    removeLoader();
    return;
  }

  sessionStorage.setItem(STORAGE_KEY, "1");
  document.body.classList.add("is-loading");

  const logo = loader.querySelector(".site-loader__logo");
  const line = loader.querySelector(".site-loader__line");
  const label = loader.querySelector(".site-loader__label");

  if (!window.gsap) {
    removeLoader();
    return;
  }

  const timeline = gsap.timeline({
    defaults: {
      ease: "power3.out"
    },
    onComplete: removeLoader
  });

  timeline
    .fromTo(
      line,
      {
        scaleY: 0,
        opacity: 0
      },
      {
        scaleY: 1,
        opacity: 1,
        duration: 0.65
      }
    )
    .fromTo(
      logo,
      {
        y: 18,
        opacity: 0,
        scale: 0.97
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.58
      },
      "-=.38"
    )
    .fromTo(
      label,
      {
        y: 10,
        opacity: 0
      },
      {
        y: 0,
        opacity: 0.62,
        duration: 0.4
      },
      "-=.22"
    )
    .to(
      [logo, label],
      {
        y: -12,
        opacity: 0,
        duration: 0.34,
        ease: "power2.in"
      },
      "+=.18"
    )
    .to(
      line,
      {
        scaleY: 0,
        opacity: 0,
        transformOrigin: "top center",
        duration: 0.35,
        ease: "power2.in"
      },
      "-=.24"
    );
})();
