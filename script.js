// ======= Mobile menu =======
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

toggle?.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => links.classList.remove("open"));
});

// ======= Footer year =======
document.getElementById("year").textContent = new Date().getFullYear();

// ======= Share link placeholder =======
const shareBox = document.getElementById("shareBox");
const host = window.location.host;
if (host && host.includes("github.io")) {
  shareBox.textContent = `https://${host}`;
}

// ======= Copy link button =======
document.getElementById("copyLink")?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(shareBox.textContent.trim());
    alert("Copied!");
  } catch {
    alert("Copy failed — please copy manually.");
  }
});

// ======= Prefilled email button =======
const emailBtn = document.getElementById("emailBtn");
if (emailBtn) {
  const subject = encodeURIComponent("Project Opportunity — Digital CV");
  const body = encodeURIComponent(
    "Hi Ganesh,\n\nI reviewed your digital CV and would like to connect about a role.\n\nBest regards,\n"
  );
  emailBtn.href = `mailto:ganesh.r.kalal24@gmail.com?subject=${subject}&body=${body}`;
}

// ======= Skill search =======
const searchInput = document.getElementById("skillSearch");
const clearBtn = document.getElementById("clearSearch");
const tags = Array.from(document.querySelectorAll("#skillTags .tag"));

function applySkillFilter(q) {
  const query = q.trim().toLowerCase();
  tags.forEach(tag => {
    const hit = tag.textContent.toLowerCase().includes(query);
    tag.style.display = (!query || hit) ? "inline-flex" : "none";
  });
}

searchInput?.addEventListener("input", (e) => applySkillFilter(e.target.value));
clearBtn?.addEventListener("click", () => {
  searchInput.value = "";
  applySkillFilter("");
  searchInput.focus();
});

// ======= Ask Me interactive content =======
const topics = {
  demo: {
    title: "Demolition methods",
    bullets: [
      "Method statements + sequencing aligned to constraints",
      "Permits, isolations, exclusion zones, traffic management",
      "Plant selection, lifts planning, and interface control",
      "Daily coordination with subcontractors and supervisors",
      "Close-out: photos, as-builts, handover documentation"
    ]
  },
  haz: {
    title: "Hazardous waste & EPA / authorities",
    bullets: [
      "Waste stream identification + segregation plan",
      "Tracking: dockets, manifests, disposal records",
      "Liaison with EPA / local authorities where required",
      "Environmental controls: dust, runoff, noise, monitoring",
      "Documented compliance through the job lifecycle"
    ]
  },
  qa: {
    title: "QA/QC & ITPs",
    bullets: [
      "ITPs with hold/witness points and inspection records",
      "NCRs raised early and closed with evidence",
      "Material compliance checks and traceability",
      "Handover packs built progressively (not at the end)",
      "Clear communication to crews on acceptance criteria"
    ]
  },
  safety: {
    title: "Safety / CoR",
    bullets: [
      "SWMS/JSA review + pre-start briefings",
      "High-risk permits and controls verified before work",
      "CoR mindset: load, transport, and site interface checks",
      "Incident prevention: observations + corrective actions",
      "Housekeeping, exclusion zones, signage, PPE"
    ]
  },
  stake: {
    title: "Stakeholders",
    bullets: [
      "Clear client updates: risks, progress, next constraints",
      "Coordination with consultants, authorities, and utilities",
      "Subcontractor alignment: scope, schedule, access, QA",
      "RFI/clarifications handled early to avoid rework",
      "Calm communication under pressure"
    ]
  },
  delivery: {
    title: "Delivery outcomes",
    bullets: [
      "Program-driven planning with realistic daily targets",
      "Cost awareness: variations, productivity, procurement",
      "Site-first problem solving + fast escalation when needed",
      "Quality and safety not traded off for speed",
      "Reliable close-out and handover"
    ]
  }
};

const askTitle = document.getElementById("askTitle");
const askBullets = document.getElementById("askBullets");
const askChipButtons = Array.from(document.querySelectorAll(".ask-chip"));

function setTopic(key) {
  const t = topics[key];
  if (!t) return;

  askChipButtons.forEach(b => b.classList.toggle("active", b.dataset.topic === key));
  askTitle.textContent = t.title;
  askBullets.innerHTML = t.bullets.map(x => `<li>${x}</li>`).join("");
}

askChipButtons.forEach(btn => {
  btn.addEventListener("click", () => setTopic(btn.dataset.topic));
});

// ======= Flip cards: tap-to-flip on mobile =======
document.querySelectorAll(".flip-card").forEach(card => {
  card.addEventListener("click", () => {
    // toggle flipped state for touch devices
    card.classList.toggle("is-flipped");
  });
});

// ======= Scroll reveal animations =======
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.12 });

reveals.forEach(el => io.observe(el));
