const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Render project cards from projects.js ---------- */
function renderProjects() {
  const grid = document.getElementById("project-grid");

  projects.forEach((p, i) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    card.style.setProperty("--rd", i % 3); // stagger within each row

    const media = p.image
      ? `<img src="${p.image}" alt="Screenshot of ${p.title}" loading="lazy" />`
      : `<span class="project-emoji">${p.emoji || "💻"}</span>`;

    const tags = (p.tags || [])
      .map((t) => `<span class="tag">${t}</span>`)
      .join("");

    const links = [
      p.demo && `<a href="${p.demo}" target="_blank" rel="noopener">Live demo</a>`,
      p.github && `<a href="${p.github}" target="_blank" rel="noopener">Source code</a>`,
    ]
      .filter(Boolean)
      .join("");

    card.innerHTML = `
      <div class="project-media">${media}</div>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="project-tags">${tags}</div>
      ${links ? `<div class="project-links">${links}</div>` : ""}
    `;

    grid.appendChild(card);
  });
}

/* ---------- Render skill chips from projects.js ---------- */
function renderSkills() {
  const cloud = document.getElementById("skills-cloud");

  skills.forEach((s, i) => {
    const chip = document.createElement("span");
    chip.className = "skill-chip reveal";
    chip.style.setProperty("--rd", i % 6);
    chip.textContent = s;
    cloud.appendChild(chip);
  });
}

/* ---------- Scroll-reveal animations ---------- */
function setupReveals() {
  const els = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );

  els.forEach((el) => observer.observe(el));
}

/* ---------- Nav background on scroll + hero parallax ---------- */
function setupScrollEffects() {
  const nav = document.getElementById("nav");
  const hero = document.getElementById("hero-content");
  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      const y = window.scrollY;
      nav.classList.toggle("scrolled", y > 24);

      // Hero drifts up and fades as you scroll past it (Apple-style)
      if (!reduceMotion && y < window.innerHeight) {
        hero.style.transform = `translateY(${y * 0.3}px)`;
        hero.style.opacity = Math.max(0, 1 - y / (window.innerHeight * 0.65));
      }

      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- Cursor spotlight on project cards ---------- */
function setupSpotlight() {
  if (reduceMotion) return;

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    });
  });
}

/* ---------- Init ---------- */
renderProjects();
renderSkills();
setupReveals();
setupScrollEffects();
setupSpotlight();

document.getElementById("year").textContent = new Date().getFullYear();
