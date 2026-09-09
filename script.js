"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const loader = document.querySelector(".page-loader");
  const loaderNumber = document.querySelector(".loader-number");
  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-button");
  const navigation = document.querySelector(".main-navigation");
  const navigationLinks = document.querySelectorAll(".main-navigation a");
  const scrollProgress = document.querySelector(".scroll-progress");
  const pointerGlow = document.querySelector(".pointer-glow");
  const titleLines = document.querySelectorAll(".title-line > span");
  const heroRevealElements = document.querySelectorAll(".hero-reveal");
  const revealElements = document.querySelectorAll(".reveal");
  const magneticButtons = document.querySelectorAll(".magnetic-button");
  const interactiveCards = document.querySelectorAll(".interactive-card");
  const faqItems = document.querySelectorAll(".faq details");
  const heroVisual = document.querySelector(".hero-visual");
  const visualCore = document.querySelector(".visual-core");
  const pathSection = document.querySelector(".customer-path");
  const pathProgress = document.querySelector(".path-line > span");
  const currentYear = document.querySelector("#current-year");
  const canvas = document.querySelector("#hero-canvas");

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  function finishLoading() {
    body.classList.remove("is-loading");

    if (!loader) {
      revealHero();
      return;
    }

    loader.classList.add("is-hidden");

    window.setTimeout(() => {
      loader.remove();
      revealHero();
    }, reduceMotion ? 0 : 950);
  }

  function revealHero() {
    titleLines.forEach((line, index) => {
      window.setTimeout(() => {
        line.style.transition = "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)";
        line.style.transform = "translateY(0)";
      }, reduceMotion ? 0 : index * 100);
    });

    heroRevealElements.forEach((element, index) => {
      window.setTimeout(() => {
        element.style.transition =
          "opacity 0.7s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, reduceMotion ? 0 : 220 + index * 90);
    });
  }

  if (reduceMotion) {
    finishLoading();
  } else {
    let loadingValue = 0;

    const loadingTimer = window.setInterval(() => {
      loadingValue += Math.ceil(Math.random() * 8);

      if (loadingValue >= 100) {
        loadingValue = 100;
        window.clearInterval(loadingTimer);

        window.setTimeout(finishLoading, 180);
      }

      if (loaderNumber) {
        loaderNumber.textContent = String(loadingValue).padStart(2, "0");
      }
    }, 70);
  }

  function closeNavigation() {
    if (!menuButton || !navigation) {
      return;
    }

    menuButton.classList.remove("is-active");
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    body.classList.remove("navigation-open");
  }

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.classList.toggle("is-active");

      navigation.classList.toggle("is-open", isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );

      body.classList.toggle("navigation-open", isOpen);
    });

    navigationLinks.forEach((link) => {
      link.addEventListener("click", closeNavigation);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeNavigation();
      }
    });
  }

  function updateScrollEffects() {
    const scrollTop = window.scrollY;
    const pageHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    if (header) {
      header.classList.toggle("is-scrolled", scrollTop > 30);
    }

    if (scrollProgress) {
      const progress = pageHeight > 0 ? scrollTop / pageHeight : 0;
      scrollProgress.style.width = `${Math.min(progress * 100, 100)}%`;
    }

    if (pathSection && pathProgress) {
      const sectionTop = pathSection.offsetTop;
      const sectionHeight = pathSection.offsetHeight;
      const start = sectionTop - window.innerHeight * 0.7;
      const end = sectionTop + sectionHeight - window.innerHeight * 0.35;
      const progress = Math.max(
        0,
        Math.min(1, (scrollTop - start) / Math.max(end - start, 1))
      );

      pathProgress.style.height = `${progress * 100}%`;
    }
  }

  updateScrollEffects();

  window.addEventListener("scroll", updateScrollEffects, {
    passive: true
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealElements.forEach((element) => {
    if (reduceMotion) {
      element.classList.add("is-visible");
    } else {
      revealObserver.observe(element);
    }
  });

  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) {
        return;
      }

      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.open = false;
        }
      });
    });
  });

  if (
    pointerGlow &&
    window.matchMedia("(pointer: fine)").matches &&
    !reduceMotion
  ) {
    window.addEventListener("pointermove", (event) => {
      pointerGlow.style.left = `${event.clientX}px`;
      pointerGlow.style.top = `${event.clientY}px`;
    });

    document.querySelectorAll("a, button, summary").forEach((element) => {
      element.addEventListener("pointerenter", () => {
        pointerGlow.classList.add("is-active");
      });

      element.addEventListener("pointerleave", () => {
        pointerGlow.classList.remove("is-active");
      });
    });
  }

  magneticButtons.forEach((button) => {
    button.addEventListener("pointermove", (event) => {
      if (reduceMotion || window.innerWidth < 900) {
        return;
      }

      const bounds = button.getBoundingClientRect();
      const x = event.clientX - bounds.left - bounds.width / 2;
      const y = event.clientY - bounds.top - bounds.height / 2;

      button.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
    });

    button.addEventListener("pointerleave", () => {
      button.style.transform = "";
    });
  });

  interactiveCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      if (reduceMotion || window.innerWidth < 900) {
        return;
      }

      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;

      card.style.transform = `
        perspective(900px)
        rotateX(${y * -3}deg)
        rotateY(${x * 4}deg)
        translateY(-4px)
      `;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });

  if (heroVisual && visualCore && !reduceMotion) {
    heroVisual.addEventListener("pointermove", (event) => {
      const bounds = heroVisual.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;

      visualCore.style.transform = `
        translate(-50%, -50%)
        rotateX(${y * -8}deg)
        rotateY(${x * 10}deg)
      `;
    });

    heroVisual.addEventListener("pointerleave", () => {
      visualCore.style.transform = "translate(-50%, -50%)";
    });
  }

  if (canvas && !reduceMotion) {
    const context = canvas.getContext("2d");
    const pointer = {
      x: window.innerWidth * 0.7,
      y: window.innerHeight * 0.4,
      targetX: window.innerWidth * 0.7,
      targetY: window.innerHeight * 0.4
    };

    let particles = [];
    let canvasWidth = 0;
    let canvasHeight = 0;
    let deviceScale = 1;

    function createParticles() {
      const particleCount = Math.min(
        80,
        Math.max(32, Math.floor(canvasWidth / 18))
      );

      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        radius: Math.random() * 1.3 + 0.35,
        velocityX: (Math.random() - 0.5) * 0.14,
        velocityY: (Math.random() - 0.5) * 0.14,
        opacity: Math.random() * 0.45 + 0.12
      }));
    }

    function resizeCanvas() {
      const bounds = canvas.getBoundingClientRect();

      canvasWidth = bounds.width;
      canvasHeight = bounds.height;
      deviceScale = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = canvasWidth * deviceScale;
      canvas.height = canvasHeight * deviceScale;

      context.setTransform(
        deviceScale,
        0,
        0,
        deviceScale,
        0,
        0
      );

      createParticles();
    }

    function animateParticles() {
      pointer.x += (pointer.targetX - pointer.x) * 0.05;
      pointer.y += (pointer.targetY - pointer.y) * 0.05;

      context.clearRect(0, 0, canvasWidth, canvasHeight);

      particles.forEach((particle, index) => {
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;

        if (particle.x < 0) {
          particle.x = canvasWidth;
        }

        if (particle.x > canvasWidth) {
          particle.x = 0;
        }

        if (particle.y < 0) {
          particle.y = canvasHeight;
        }

        if (particle.y > canvasHeight) {
          particle.y = 0;
        }

        const distanceX = pointer.x - particle.x;
        const distanceY = pointer.y - particle.y;
        const distance = Math.hypot(distanceX, distanceY);

        if (distance < 150) {
          const force = (150 - distance) * 0.0006;
          particle.x -= distanceX * force;
          particle.y -= distanceY * force;
        }

        context.beginPath();
        context.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );

        context.fillStyle =
          index % 6 === 0
            ? `rgba(41, 216, 255, ${particle.opacity})`
            : `rgba(255, 255, 255, ${particle.opacity})`;

        context.fill();
      });

      window.requestAnimationFrame(animateParticles);
    }

    window.addEventListener("pointermove", (event) => {
      const bounds = canvas.getBoundingClientRect();

      pointer.targetX = event.clientX - bounds.left;
      pointer.targetY = event.clientY - bounds.top;
    });

    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();
    window.requestAnimationFrame(animateParticles);
  }
});
