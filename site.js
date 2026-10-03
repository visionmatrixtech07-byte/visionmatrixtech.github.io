(() => {
  const phone = "+919966196013";
  const whatsapp = "https://wa.me/919966196013?text=Hello%20VisionMatrix%20Tech%2C%20I%27d%20like%20to%20discuss%20a%20digital%20system%20for%20my%20business.";
  const logoRoot = "assets/logos/";
  const tools = {
    appsheet: { name: "AppSheet", src: `${logoRoot}appsheet.svg` },
    flutter: { name: "Flutter", src: `${logoRoot}flutter.svg` },
    whatsapp: { name: "WhatsApp Business", src: `${logoRoot}whatsapp-from-brand-card.png` },
    googleads: { name: "Google Ads", src: `${logoRoot}googleads.svg` },
    maps: { name: "Google Maps", src: `${logoRoot}googlemaps.svg` },
    meta: { name: "Meta Ads", src: `${logoRoot}meta.svg` }
  };

  const systems = {
    care: {
      name: "Appointments & care",
      tools: ["whatsapp", "maps"],
      boundary: "The system supports discovery, enquiries and appointment follow-through. It does not replace a hospital HIS, EMR, clinical records, diagnostic reporting or medical billing platform. Any sensitive-data workflow is scoped and reviewed before implementation.",
      tiers: {
        Standard: [
          "A mobile-first website that explains services, location, practitioners and how to prepare for a visit.",
          "Clear call, WhatsApp and appointment-enquiry paths, with a form designed around the information your team actually needs.",
          "Google Business Profile and Maps details organised to make local discovery and directions easier.",
          "A practical local-search foundation, service-area information and basic enquiry-source tracking where supported.",
          "A clean handover of the agreed pages, contact paths and admin access."
        ],
        Growth: [
          "One enquiry pipeline for new requests, appointment status, assigned staff member and the next action.",
          "Confirmation and reminder steps shaped around your current booking process and chosen tools.",
          "Follow-up checkpoints for missed enquiries, cancellations and no-shows, subject to staff review.",
          "A considered review and return-visit workflow, with consent and service context respected.",
          "Team setup, practical training and an owner view of pending appointments and follow-ups."
        ],
        Enterprise: [
          "A discovery-led structure for multiple departments, locations, service lines and enquiry sources.",
          "Role-based access, lead routing and escalation rules designed around the organisation’s team structure.",
          "Management views for enquiry flow, appointment status, source mix and outstanding follow-up.",
          "Feasibility review for connecting existing booking, CRM or hospital systems—without promising replacement.",
          "A phased rollout plan with documented responsibilities, training and support defined in the project scope."
        ]
      }
    },
    sales: {
      name: "Sales & dealerships",
      tools: ["appsheet", "whatsapp", "googleads", "meta"],
      boundary: "The focus is the customer-facing enquiry and follow-up layer. Existing dealer or OEM DMS/CRM systems remain in place unless a specific connection is technically validated and agreed.",
      tiers: {
        Standard: [
          "A mobile-ready sales presence for products, projects, locations, offers and the questions buyers ask first.",
          "Direct call, WhatsApp and enquiry paths, with source information captured where the selected setup supports it.",
          "Google Business Profile and Maps details organised for showroom, branch or project discovery.",
          "A starter lead register with clear stages and a place to record the latest customer conversation.",
          "Basic search visibility and a simple owner view of incoming enquiries."
        ],
        Growth: [
          "A central lead pipeline with owner assignment, reassignment, stage, latest remark and next follow-up date.",
          "Stages tailored to the real sales journey: enquiry, visit/demo, quotation, negotiation, won or lost.",
          "Reminders and overdue visibility so the next call does not depend on memory alone.",
          "A structured way to record lost reasons and revisit older opportunities when appropriate.",
          "Team and manager views for lead ownership, ageing, source and pending action—plus setup guidance."
        ],
        Enterprise: [
          "A multi-branch or multi-team model with role hierarchy, permissions and business-specific pipelines.",
          "Advanced routing, reassignment and escalation for unattended or ageing enquiries.",
          "Branch, team and salesperson views with campaign/source attribution where data is available.",
          "A feasibility-led path to connect existing CRM, DMS, ERP or sales systems without assuming they can be replaced.",
          "A controlled discovery and pilot plan before complex migration, integration or multi-location rollout."
        ]
      }
    },
    education: {
      name: "Education & enrollment",
      tools: ["appsheet", "whatsapp", "maps", "googleads", "meta"],
      boundary: "This is an admissions-enquiry and follow-up layer, not a school ERP, LMS, fee, attendance or examination system. Student and parent data needs are reviewed before any workflow is chosen.",
      tiers: {
        Standard: [
          "A mobile-first institute presence for courses, programmes, faculty, facilities, dates and common questions.",
          "Admission enquiry, call and WhatsApp paths that give prospective students a clear next step.",
          "Google Business Profile and Maps details organised for campus and local course discovery.",
          "A practical local-search foundation and source tracking where the chosen setup supports it.",
          "A clear handover of pages, enquiry routes and the agreed admin workflow."
        ],
        Growth: [
          "A shared enquiry list with counsellor ownership, course interest, enquiry status and next action.",
          "Stages for course questions, counselling, campus/demo visit, application and admission outcome.",
          "Follow-up reminders and a careful re-contact workflow for enquiries that have gone quiet.",
          "A view of enquiry volume, pending counsellor actions and course/source patterns.",
          "Staff onboarding and a workflow that fits the institution’s actual admissions process."
        ],
        Enterprise: [
          "A multi-campus structure for programmes, departments, counsellors and authorised teams.",
          "Role-based ownership, routing and escalation across campuses or admission functions.",
          "Campus, course and counsellor visibility for enquiry ageing and admissions progress.",
          "A privacy and access review for student/parent data, plus a feasibility check for existing ERP or admission tools.",
          "A discovery-led pilot and rollout plan; custom migration and integrations are scoped separately."
        ]
      }
    },
    retail: {
      name: "Retail & commerce",
      tools: ["appsheet", "whatsapp", "maps", "googleads", "meta"],
      boundary: "Catalogue, ordering and retention work is bounded by the agreed scope. POS, ERP, accounting, advanced inventory, custom loyalty wallets and deep marketplace integrations are not assumed to be included.",
      tiers: {
        Standard: [
          "A mobile-friendly catalogue or storefront with organised categories, product details and availability notes.",
          "Product enquiries linked to WhatsApp, store calls, directions or a visit request.",
          "Google Business Profile and Maps details aligned with the store’s location and customer information.",
          "A clean product discovery path with practical local-search and basic traffic-source setup.",
          "Admin guidance for keeping product information and contact details current."
        ],
        Growth: [
          "A usable customer and enquiry register with product interest and follow-up status.",
          "Simple customer segments for product categories, repeat interest or campaign relevance.",
          "Workflows for new arrivals, seasonal updates, review requests and prior-customer reactivation.",
          "Basic WhatsApp follow-up or campaign steps where consent and the selected platform permit them.",
          "An owner view of enquiries, customer interests and repeat-customer activity."
        ],
        Enterprise: [
          "A multi-location catalogue and customer structure with branch-aware access and responsibilities.",
          "Central customer visibility with useful segments for branches, product interests and reactivation.",
          "Campaign and retention workflows with performance views for locations and customer groups.",
          "A feasibility review for existing ecommerce, POS, ERP or inventory connections before any integration promise.",
          "A documented rollout plan; points wallets, large migrations and deep inventory sync require separate scope."
        ]
      }
    },
    local: {
      name: "Local services",
      tools: ["appsheet", "whatsapp", "maps", "googleads"],
      boundary: "The core workflow covers service requests and job follow-through. GPS/fleet management, payroll, spare-parts inventory and custom technician apps are not automatically part of a standard system.",
      tiers: {
        Standard: [
          "A mobile-first service website with clear services, service areas, working details and trust signals.",
          "Call, WhatsApp and service-request paths that capture the issue and useful location details.",
          "Google Business Profile and Maps details structured for local discovery and directions.",
          "A review/testimonial presentation and a practical foundation for local search visibility.",
          "A simple way to see the source and status of new service requests where supported."
        ],
        Growth: [
          "A shared job list with customer, service location, job status and the next action in view.",
          "Scheduling and technician/team assignment based on the operating process you approve.",
          "Reminders for pending visits, quotations, approvals, completion and customer follow-up.",
          "Customer history, review requests and repeat-service reminders for appropriate services.",
          "A basic operations dashboard and setup guidance for the people handling requests."
        ],
        Enterprise: [
          "A multi-team or branch structure with supervisor roles, permissions and service-area ownership.",
          "Advanced assignment, overdue visibility, job ageing and escalation rules.",
          "Branch and technician views for workload, job status and follow-up responsibilities.",
          "A more structured repeat-service or maintenance schedule around agreed operational rules.",
          "Discovery and technical checks for existing CRM, ERP, accounting or field-service connections."
        ]
      }
    },
    professional: {
      name: "Professional & B2B",
      tools: ["appsheet", "whatsapp", "googleads", "meta"],
      boundary: "The system organises enquiries and client-development work; it does not generate or approve professional advice. Legal, financial, medical and other consequential content remains subject to the responsible professional’s review.",
      tiers: {
        Standard: [
          "A professional website that clearly presents services, expertise, team and relevant proof.",
          "A consultation or enquiry path that captures the context needed for a useful first conversation.",
          "Call, WhatsApp and location options, including Google Business Profile where relevant.",
          "A practical local-search foundation and basic source visibility for incoming opportunities.",
          "A clean page and enquiry handover that the firm can maintain."
        ],
        Growth: [
          "A lead and opportunity pipeline with qualification, owner, stage and next action.",
          "Meeting, proposal and quotation checkpoints that match the firm’s own sales process.",
          "Reminders for follow-up, decision status, onboarding and renewal dates where appropriate.",
          "A way to record won/lost outcomes and revisit older opportunities with a clear reason.",
          "A manager view of pipeline stages, ageing, source and outstanding follow-up."
        ],
        Enterprise: [
          "Multiple teams or pipelines with account-level tracking, ownership rules and access controls.",
          "Advanced routing, reassignment and escalation for opportunities that need timely attention.",
          "Visibility into opportunity ageing, renewal dates, team activity and source attribution.",
          "Automation for approved templates and repeatable processes, with human review for consequential content.",
          "A feasibility-led integration plan for existing CRM, ERP or document workflows."
        ]
      }
    },
    hospitality: {
      name: "Hospitality & guest experience",
      tools: ["appsheet", "whatsapp", "maps", "googleads", "meta"],
      boundary: "Reservation enquiries and guest follow-up can be organised around your current setup. Live room inventory, real-time availability, payment processing and automated booking confirmation depend on a suitable booking/PMS platform and are not assumed.",
      tiers: {
        Standard: [
          "A mobile-first venue or stay website for menu, rooms, events, facilities, location and practical details.",
          "Gallery and review presentation that helps guests understand the experience before they arrive.",
          "Reservation, event and stay enquiries with call, WhatsApp and directions paths.",
          "Google Business Profile and Maps details structured for local discovery.",
          "A useful search foundation and clear handover for keeping guest-facing information fresh."
        ],
        Growth: [
          "A structured reservation or event-enquiry list with date, party size, status and next action.",
          "Confirmation and reminder steps that fit the way your team handles requests today.",
          "Guest/enquiry ownership, cancellation or no-show status and follow-up visibility where useful.",
          "Review requests and opted-in repeat-guest communication with service context respected.",
          "A management view of enquiry sources, pending responses and guest follow-through."
        ],
        Enterprise: [
          "A multi-property or outlet structure with central visibility and role-based access.",
          "Property-level views for enquiries, guest segments, source mix and follow-up ownership.",
          "Advanced guest communication and reputation workflows scoped to approved consent and data practices.",
          "A technical feasibility review for existing PMS, booking engine or channel-manager connections.",
          "A discovery, pilot and rollout plan; live inventory, custom booking engines and deep integrations require separate scope."
        ]
      }
    }
  };

  const icon = (key) => tools[key];

  function renderSystemDetails() {
    const key = document.body.dataset.service;
    const system = systems[key];
    const main = document.querySelector("main");
    const cta = main?.querySelector(".cta-section");
    if (!system || !main || !cta) return;

    const section = document.createElement("section");
    section.className = "page-section package-section";
    section.id = "packages";
    section.setAttribute("aria-labelledby", "package-heading");
    section.innerHTML = `
      <div class="container">
        <div class="page-section-title package-heading">
          <p class="section-label">Three levels · one clear journey</p>
          <h2 id="package-heading">${system.name}, built around your team.</h2>
          <p>Open a level to see what it includes. Every scope starts with the customer journey and the systems you already use.</p>
        </div>
        <div class="tier-list" aria-label="${system.name} service levels"></div>
        <div class="tool-panel">
          <div><p class="section-label">Tools and platforms</p><h3>Chosen to fit the work—not forced into every project.</h3></div>
          <div class="tool-logos" aria-label="Platforms that may fit this system"></div>
          <p class="tool-note">Platform names and marks identify third-party products that may be used or connected when suitable. They do not imply sponsorship or endorsement. Existing systems are assessed first; integrations depend on technical fit and agreed scope.</p>
        </div>
        <aside class="fit-panel package-boundary"><span class="fit-symbol" aria-hidden="true">i</span><div><h3>Scope, fit and boundaries</h3><p>${system.boundary}</p></div></aside>
      </div>`;

    const tierList = section.querySelector(".tier-list");
    Object.entries(system.tiers).forEach(([name, items], index) => {
      const details = document.createElement("details");
      details.className = `tier-card tier-${name.toLowerCase()}`;
      details.open = index === 0;
      const summary = document.createElement("summary");
      summary.innerHTML = `<span class="tier-number">0${index + 1}</span><span class="tier-title"><strong>${name}</strong><small>${items.length} considered inclusions</small></span><span class="tier-plus" aria-hidden="true"></span>`;
      const list = document.createElement("ul");
      list.className = "tier-features";
      items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        list.append(li);
      });
      details.append(summary, list);
      tierList.append(details);
    });

    const toolList = section.querySelector(".tool-logos");
    [...new Set(system.tools)].forEach((key) => {
      const tool = icon(key);
      if (!tool) return;
      const item = document.createElement("div");
      item.className = "tool-logo";
      const image = document.createElement("img");
      image.src = tool.src;
      image.alt = "";
      image.loading = "lazy";
      item.append(image, document.createElement("span"));
      item.lastElementChild.textContent = tool.name;
      toolList.append(item);
    });

    main.insertBefore(section, cta);
    tierList.addEventListener("toggle", (event) => {
      if (!event.target.open) return;
      tierList.querySelectorAll("details[open]").forEach((other) => {
        if (other !== event.target) other.open = false;
      });
    }, true);
  }

  function addContactActions() {
    document.querySelectorAll(".nav").forEach((nav) => {
      const existing = nav.querySelector(".header-call");
      if (!existing) {
        const link = document.createElement("a");
        link.className = "button button-call header-call";
        link.href = `tel:${phone}`;
        link.textContent = "Call";
        link.setAttribute("aria-label", "Call VisionMatrix Tech at +91 99661 96013");
        nav.append(link);
      }
    });

    document.querySelectorAll(".page-hero > .container > div:first-child").forEach((hero) => {
      const primary = hero.querySelector("a.button");
      if (primary && !hero.querySelector(".hero-call")) {
        const call = document.createElement("a");
        call.className = "button button-call hero-call";
        call.href = `tel:${phone}`;
        call.textContent = "Call us";
        const actions = hero.querySelector(".hero-actions");
        if (actions) actions.append(call);
        else primary.after(call);
      }
    });

    document.querySelectorAll(".mobile-contact").forEach((bar) => {
      bar.innerHTML = `
        <a class="mobile-action mobile-whatsapp" href="${whatsapp}" aria-label="Open WhatsApp chat with VisionMatrix Tech">
          <img src="${logoRoot}whatsapp-from-brand-card.png" alt="" width="23" height="23"><span>WhatsApp</span>
        </a>
        <a class="mobile-action mobile-call" href="tel:${phone}" aria-label="Call VisionMatrix Tech at +91 99661 96013">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.03-.24c1.13.37 2.34.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.23.2 2.44.57 3.57a1 1 0 0 1-.24 1.03L6.6 10.8z"/></svg><span>Call</span>
        </a>`;
    });
  }

  function upgradeNavigationAndFooters() {
    document.querySelectorAll(".nav").forEach((nav) => {
      const menu = nav.querySelector(".nav-links");
      if (!menu) return;
      menu.id ||= "primary-navigation";
      const button = document.createElement("button");
      button.className = "nav-toggle";
      button.type = "button";
      button.textContent = "Menu";
      button.setAttribute("aria-controls", menu.id);
      button.setAttribute("aria-expanded", "false");
      button.addEventListener("click", () => {
        const isOpen = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!isOpen));
        menu.classList.toggle("is-open", !isOpen);
      });
      menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
        button.setAttribute("aria-expanded", "false");
        menu.classList.remove("is-open");
      }));
      nav.append(button);
    });

    document.querySelectorAll(".brand img").forEach((image) => {
      image.src = "visionmatrix-mark.png";
      image.width = 64;
      image.height = 52;
      image.alt = "";
    });

    document.querySelectorAll(".footer-main").forEach((footer) => {
      const links = footer.querySelector(".footer-links");
      if (links) {
        [
          ["Insights", "insights.html"],
          ["Privacy", "privacy.html"],
          ["Terms", "terms.html"],
          ["Refunds", "refund-policy.html"]
        ].forEach(([label, href]) => {
          if (!links.querySelector(`a[href="${href}"]`)) {
            const link = document.createElement("a");
            link.href = href;
            link.textContent = label;
            links.append(link);
          }
        });
      }
      const siteFooter = footer.closest(".site-footer");
      if (siteFooter && !siteFooter.querySelector(".footer-contact")) {
        const contact = document.createElement("div");
        contact.className = "footer-contact";
        contact.innerHTML = `
          <a href="mailto:contact@visionmatrixtech.com">contact@visionmatrixtech.com</a>
          <a href="tel:${phone}">+91 99661 96013</a>
          <a href="https://www.instagram.com/VisionMatrix_Tech/" rel="noopener"><img src="${logoRoot}instagram.svg" alt="">Instagram · @VisionMatrix_Tech</a>
          <a href="https://www.linkedin.com/search/results/companies/?keywords=Vision%20Matrix%20Tech" rel="noopener"><img src="${logoRoot}linkedin.svg" alt="">LinkedIn · Vision Matrix Tech</a>`;
        footer.after(contact);
        const bottom = siteFooter.querySelector(".footer-bottom");
        if (bottom && !siteFooter.querySelector(".business-registrations")) {
          const registration = document.createElement("div");
          registration.className = "business-registrations";
          registration.textContent = "GSTIN 29BBIPC0686A1ZY · Udyam Registration UDYAM-KR-19-0058400";
          bottom.after(registration);
        }
      }
    });
  }

  function revealOnScroll() {
    const items = document.querySelectorAll(".solution-card, .friction-card, .capability, .process-step, .about-band, .benefit-card, .capability-item, .fit-panel, .tier-card, .brand-logo, .blog-card, .content-card");
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.body.classList.add("motion-ready");
    const observer = new IntersectionObserver((entries, current) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          current.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });
    items.forEach((item, index) => {
      item.classList.add("reveal");
      item.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
      observer.observe(item);
    });
  }

  renderSystemDetails();
  upgradeNavigationAndFooters();
  addContactActions();
  revealOnScroll();
})();
