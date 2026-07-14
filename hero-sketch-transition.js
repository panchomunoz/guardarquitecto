(() => {
  const gsapReady = Boolean(window.gsap);

  function initHeroSketchTransition() {
    const sketch = document.querySelector("#heroTransitionSketch");
    const path = sketch?.querySelector("path");
    const progressItems = [...document.querySelectorAll(".hero-progress span")];

    if (!sketch || !path || !progressItems.length || !gsapReady) {
      return;
    }

    const paths = [
      "M40 520 C180 455 270 565 410 470 C535 385 670 455 930 300",
      "M30 420 C210 510 300 340 470 430 C610 505 745 355 950 400",
      "M55 560 C190 390 360 520 500 350 C650 190 780 370 940 245",
      "M45 360 C220 260 340 470 520 390 C690 315 790 465 950 330"
    ];

    let lastIndex = -1;
    let animation = null;

    function play(index) {
      if (index === lastIndex) return;

      lastIndex = index;

      if (animation) {
        animation.kill();
      }

      path.setAttribute("d", paths[index % paths.length]);

      const length = path.getTotalLength();

      gsap.set(sketch, {
        autoAlpha: 1
      });

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 0
      });

      animation = gsap.timeline({
        defaults: {
          overwrite: true
        }
      });

      animation
        .to(path, {
          strokeDashoffset: 0,
          opacity: 0.48,
          duration: 0.34,
          ease: "power2.out"
        })
        .to(path, {
          strokeDashoffset: -length * 0.18,
          opacity: 0,
          duration: 0.28,
          ease: "power2.in"
        }, "+=.05")
        .set(sketch, {
          autoAlpha: 0
        });
    }

    /*
      Detecta el cambio de escena que ya controla tu hero actual.
      No toca ni duplica ScrollTrigger.
    */
    const observer = new MutationObserver(() => {
      const activeIndex = progressItems.findIndex((item) =>
        item.classList.contains("is-active")
      );

      if (activeIndex >= 0) {
        play(activeIndex);
      }
    });

    progressItems.forEach((item) => {
      observer.observe(item, {
        attributes: true,
        attributeFilter: ["class"]
      });
    });

    const initialIndex = progressItems.findIndex((item) =>
      item.classList.contains("is-active")
    );

    if (initialIndex >= 0) {
      lastIndex = initialIndex;
    }
  }

  window.addEventListener("DOMContentLoaded", initHeroSketchTransition);
})();
