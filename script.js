"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-navigation");
  const navigationLinks = document.querySelectorAll(".site-navigation a");
  const progressBar = document.querySelector(".scroll-progress span");
  const journey = document.querySelector("[data-journey]");
  const journeyProgress = document.querySelector(".journey-progress span");
  const revealElements = document.querySelectorAll(".reveal");
  const faqItems = document.querySelectorAll(".faq-list details");
  const currentYear = document.querySelector("#current-year");
  const quoteDialog = document.querySelector("#quote-dialog");
  const quoteForm = document.querySelector("#quote-form");
  const openQuoteButtons = document.querySelectorAll("[data-open-quote]");
  const closeQuoteButton = document.querySelector("[data-close-quote]");
  const systemVisual = document.querySelector(".system-visual");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  body.classList.add("is-enhanced");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  function closeNavigation() {
    if (!menuToggle || !navigation) {
      return;
    }

    menuToggle.classList.remove("is-active");
    navigation.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    body.classList.remove("menu-open");
  }

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const isOpen = !navigation.classList.contains("is-open");

      menuToggle.classList.toggle("is-active", isOpen);
      navigation.classList.toggle("is-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      body.classList.toggle("menu-open", isOpen);
    });

    navigationLinks.forEach((link) => {
      link.addEventListener("click", closeNavigation);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1020) {
        closeNavigation();
      }
    });
  }

  function updateScrollEffects() {
    const scrollTop = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (header) {
      header.classList.toggle("is-scrolled", scrollTop > 28);
    }

    if (progressBar) {
      const progress = pageHeight > 0 ? Math.min(scrollTop / pageHeight, 1) : 0;
      progressBar.style.width = `${progress * 100}%`;
    }

    if (journey && journeyProgress) {
      const bounds = journey.getBoundingClientRect();
      const start = window.innerHeight * 0.72;
      const distance = bounds.height + window.innerHeight * 0.3;
      const progress = Math.max(0, Math.min(1, (start - bounds.top) / Math.max(distance, 1)));

      journeyProgress.style.height = `${progress * 100}%`;
    }
  }

  let scrollTicking = false;

  window.addEventListener("scroll", () => {
    if (scrollTicking) {
      return;
    }

    scrollTicking = true;
    window.requestAnimationFrame(() => {
      updateScrollEffects();
      scrollTicking = false;
    });
  }, { passive: true });

  updateScrollEffects();

  if ("IntersectionObserver" in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -7% 0px"
    });

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

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

  if (systemVisual && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    systemVisual.addEventListener("pointermove", (event) => {
      const bounds = systemVisual.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;

      systemVisual.style.transform = `perspective(1000px) rotateX(${y * -2.5}deg) rotateY(${x * 3.5}deg)`;
    });

    systemVisual.addEventListener("pointerleave", () => {
      systemVisual.style.transform = "";
    });
  }

  if (!quoteDialog || !quoteForm) {
    return;
  }

  const formSteps = Array.from(quoteForm.querySelectorAll(".form-step"));
  const progressSteps = Array.from(quoteDialog.querySelectorAll(".quote-progress span"));
  let currentStep = 1;

  function formElement(name) {
    return quoteForm.elements.namedItem(name);
  }

  function clearErrors() {
    quoteForm.querySelectorAll(".form-error").forEach((element) => {
      element.textContent = "";
    });
  }

  function showStep(step) {
    currentStep = Math.max(1, Math.min(step, formSteps.length));

    formSteps.forEach((formStep) => {
      formStep.classList.toggle("is-active", Number(formStep.dataset.step) === currentStep);
    });

    progressSteps.forEach((progressStep, index) => {
      const number = index + 1;
      progressStep.classList.toggle("is-active", number === currentStep);
      progressStep.classList.toggle("is-complete", number < currentStep);
    });

    clearErrors();

    const activeHeading = formSteps[currentStep - 1]?.querySelector("h3");
    if (activeHeading) {
      activeHeading.setAttribute("tabindex", "-1");
      activeHeading.focus({ preventScroll: true });
    }
  }

  function selectedServices() {
    return Array.from(quoteForm.querySelectorAll('input[name="service"]:checked'))
      .map((input) => input.value);
  }

  function validateStep(step) {
    clearErrors();

    if (step === 1 && selectedServices().length === 0) {
      quoteForm.querySelector('[data-error="services"]').textContent = "Choose at least one service or select ‘Not sure yet’.";
      return false;
    }

    if (step === 2) {
      const detailFields = ["fullName", "businessName", "city", "phone"];
      const invalidField = detailFields
        .map(formElement)
        .find((field) => !field || !field.value.trim());

      if (invalidField) {
        quoteForm.querySelector('[data-error="details"]').textContent = "Please complete all four details.";
        invalidField?.focus();
        return false;
      }
    }

    if (step === 3) {
      const priority = formElement("priority");
      const message = formElement("message");

      if (!priority?.value || !message?.value.trim()) {
        quoteForm.querySelector('[data-error="problem"]').textContent = "Choose a priority and briefly describe the situation.";
        (!priority?.value ? priority : message)?.focus();
        return false;
      }
    }

    return true;
  }

  function openQuoteDialog() {
    showStep(1);
    if (typeof quoteDialog.showModal === "function") {
      quoteDialog.showModal();
    } else {
      quoteDialog.setAttribute("open", "");
    }
    body.classList.add("dialog-open");
    quoteDialog.querySelector(".dialog-close")?.focus();
  }

  function closeQuoteDialog() {
    if (typeof quoteDialog.close === "function") {
      quoteDialog.close();
    } else {
      quoteDialog.removeAttribute("open");
    }
    body.classList.remove("dialog-open");
  }

  openQuoteButtons.forEach((button) => {
    button.addEventListener("click", openQuoteDialog);
  });

  closeQuoteButton?.addEventListener("click", closeQuoteDialog);

  quoteDialog.addEventListener("click", (event) => {
    if (event.target === quoteDialog) {
      closeQuoteDialog();
    }
  });

  quoteDialog.addEventListener("close", () => {
    body.classList.remove("dialog-open");
  });

  quoteForm.querySelectorAll("[data-next]").forEach((button) => {
    button.addEventListener("click", () => {
      if (validateStep(currentStep)) {
        showStep(currentStep + 1);
      }
    });
  });

  quoteForm.querySelectorAll("[data-back]").forEach((button) => {
    button.addEventListener("click", () => showStep(currentStep - 1));
  });

  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validateStep(3)) {
      return;
    }

    const lines = [
      "Hello VisionMatrix Tech,",
      "",
      "I would like to discuss a digital project.",
      "",
      `Name: ${formElement("fullName").value.trim()}`,
      `Business: ${formElement("businessName").value.trim()}`,
      `City: ${formElement("city").value.trim()}`,
      `Phone: ${formElement("phone").value.trim()}`,
      `Services: ${selectedServices().join(", ")}`,
      `Priority: ${formElement("priority").value}`,
      `Situation: ${formElement("message").value.trim()}`
    ];

    const whatsappUrl = `https://wa.me/919966196013?text=${encodeURIComponent(lines.join("\n"))}`;
    const whatsappWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (whatsappWindow) {
      whatsappWindow.opener = null;
    }
  });
});
