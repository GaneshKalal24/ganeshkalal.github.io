const backdrop = document.getElementById("backdrop");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.getElementById("closeBtn");

document.getElementById("year").textContent = new Date().getFullYear();

/* ========= CONTENT (EDIT ANYTIME) ========= */
const content = {
  summary: {
    title: "Professional Summary",
    html: `
      <p>
        Project Engineer specialising in <strong>demolition, remediation and infrastructure delivery</strong> across complex
        live environments. Strong capability in <strong>planning and sequencing</strong>, subcontractor management,
        QA/QC controls, and compliance-driven delivery.
      </p>

      <div class="kv">
        <div class="kvc"><div class="k">Strengths</div><div class="v">Site Delivery • Sequencing • Stakeholders</div></div>
        <div class="kvc"><div class="k">Focus Areas</div><div class="v">Demolition • Remediation • Civil Works</div></div>
      </div>

      <h3>What I deliver on site</h3>
      <ul>
        <li><strong>Safe execution</strong> through SWMS/JSA controls, permits, isolations, exclusions, and verification before work.</li>
        <li><strong>QA/QC discipline</strong> using ITPs, hold/witness points, inspections, evidence capture and NCR close-out.</li>
        <li><strong>Program control</strong> via daily planning, constraints management, and clear progress reporting.</li>
        <li><strong>Stakeholder alignment</strong> with clients, consultants, utilities, and local authorities when required.</li>
        <li><strong>Clean close-out</strong> with handover packs, disposal dockets/manifests, photos, and as-built records.</li>
      </ul>

      <h3>Professional development</h3>
      <ul>
        <li>NER process in progress; working toward <strong>CPEng</strong> and <strong>RPEV</strong>.</li>
        <li>Continuous improvement in Australian standards, QA systems, and safety leadership.</li>
      </ul>
    `
  },

  software: {
    title: "Software Stack",
    html: `
      <p>Tools I use to plan, coordinate, document and deliver work packages.</p>

      <h3>Planning / Reporting</h3>
      <div class="tags">
        <span class="tag">MS Excel</span>
        <span class="tag">MS Project (if applicable)</span>
        <span class="tag">PowerPoint</span>
        <span class="tag">Daily reports</span>
        <span class="tag">Lookaheads</span>
      </div>

      <h3>Engineering / Drafting</h3>
      <div class="tags">
        <span class="tag">AutoCAD (if applicable)</span>
        <span class="tag">Bluebeam / PDF markups</span>
        <span class="tag">As-builts</span>
        <span class="tag">Set-out records</span>
      </div>

      <h3>Project Controls / QA</h3>
      <div class="tags">
        <span class="tag">ITPs</span>
        <span class="tag">Checklists</span>
        <span class="tag">NCRs</span>
        <span class="tag">Handover packs</span>
        <span class="tag">Document control</span>
      </div>

      <p><strong>Note:</strong> If you tell me your actual software list, I’ll replace the placeholders perfectly.</p>
    `
  },

  expertise: {
    title: "Expertise",
    html: `
      <p>Core technical and delivery capabilities (written in hiring-manager language).</p>

      <h3>Demolition & Remediation</h3>
      <ul>
        <li>Method planning, sequencing and interface control in constrained sites.</li>
        <li>Isolation planning, exclusion zones, access management and traffic control.</li>
        <li>Environmental controls: dust suppression, noise management, runoff protection.</li>
        <li>Hazardous waste segregation, tracking, dockets/manifests and compliant disposal.</li>
      </ul>

      <h3>Construction Delivery</h3>
      <ul>
        <li>Subcontractor management: pre-starts, supervision support, productivity tracking.</li>
        <li>Short-interval planning, daily targets, constraints log and progress reporting.</li>
        <li>RFIs / clarifications raised early to reduce rework and programme impact.</li>
      </ul>

      <h3>QA/QC</h3>
      <ul>
        <li>ITPs with hold/witness points, inspections, evidence capture and close-out.</li>
        <li>NCR identification early + corrective actions tracked to closure.</li>
        <li>Handover packs built progressively (not left until the end).</li>
      </ul>
    `
  },

  projects: {
    title: "Key Projects",
    html: `
      <p>Examples of project types and what I contributed (we’ll tailor these to your exact CV).</p>

      <h3>Industrial Demolition + Waste Management</h3>
      <ul>
        <li>Developed demolition sequencing aligned to site constraints and safety controls.</li>
        <li>Managed waste streams: segregation plan, tracking records, compliant disposal documentation.</li>
        <li>Coordinated subcontractors, access, permits and daily workfront planning.</li>
      </ul>

      <h3>Remediation Support Works</h3>
      <ul>
        <li>Implemented site controls and coordinated verification/sampling activities.</li>
        <li>QA/QC controls: inspections, hold points, evidence capture and close-out.</li>
        <li>Maintained clear stakeholder communication for progress and constraints.</li>
      </ul>

      <h3>Infrastructure / Civil Package Delivery</h3>
      <ul>
        <li>Progress reporting, constraints management and programme alignment.</li>
        <li>Subcontractor coordination and inspection/record keeping.</li>
        <li>As-built updates and handover documentation.</li>
      </ul>

      <p><strong>Next:</strong> If you paste your CV, I’ll replace these with your real project names + measurable outcomes.</p>
    `
  },

  career: {
    title: "Career History",
    html: `
      <p>Timeline-style summary. Replace company names/dates to match your resume.</p>

      <h3>Project Engineer — Demolition / Remediation (2023 — Present)</h3>
      <ul>
        <li>Planned demolition sequencing, controlled interfaces, and supported safe execution on site.</li>
        <li>Managed subcontractors, daily pre-starts, permits, access and workfront planning.</li>
        <li>QA/QC: ITPs, inspections, NCR close-out, and progressive handover documentation.</li>
      </ul>

      <h3>Site / Project Engineer — Civil Works (2021 — 2023)</h3>
      <ul>
        <li>Site engineering: RFIs, as-builts, coordination with designers and stakeholders.</li>
        <li>Progress tracking, cost awareness, and daily reporting for delivery certainty.</li>
      </ul>

      <p><strong>Tip:</strong> Once you share your real experience text, I will rewrite this with strong action + outcome bullets.</p>
    `
  },

  education: {
    title: "Education",
    html: `
      <h3>Degree / Qualification</h3>
      <ul>
        <li><strong>[Your Degree]</strong> — [University], [Year]</li>
        <li>Key focus: Structures / Construction / Project Delivery (edit as needed)</li>
      </ul>

      <h3>Professional Membership & Development</h3>
      <ul>
        <li><strong>MIEAust</strong> (Member, Engineers Australia)</li>
        <li>NER process in progress; pathway toward <strong>CPEng</strong> and <strong>RPEV</strong></li>
      </ul>
    `
  },

  licenses: {
    title: "Licenses",
    html: `
      <p>Add your exact tickets here (we can format them cleanly into groups).</p>

      <h3>Safety / Site</h3>
      <div class="tags">
        <span class="tag">White Card</span>
        <span class="tag">First Aid (if applicable)</span>
        <span class="tag">WHS / Site Inductions</span>
      </div>

      <h3>High-Risk / Plant (if applicable)</h3>
      <div class="tags">
        <span class="tag">EWP</span>
        <span class="tag">Dogging</span>
        <span class="tag">Rigging</span>
        <span class="tag">Forklift</span>
      </div>

      <p><strong>Send me your real list</strong> and I’ll replace the placeholders exactly.</p>
    `
  },

  contact: {
    title: "Contact",
    html: `
      <p>Fast ways to reach me:</p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:ganesh.r.kalal24@gmail.com">ganesh.r.kalal24@gmail.com</a></li>
        <li><strong>Phone:</strong> <a href="tel:+61424121941">0424 121 941</a></li>
        <li><strong>Location:</strong> Melbourne, VIC</li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com" target="_blank" rel="noopener">Add your profile link</a></li>
      </ul>

      <p>If you want, I can add a simple contact form too (still static, no backend).</p>
    `
  }
};
/* ========================================= */

function openModal(key){
  const c = content[key];
  if(!c) return;

  modalTitle.textContent = c.title;
  modalBody.innerHTML = c.html;

  backdrop.hidden = false;
  modal.hidden = false;

  // trap focus lightly
  closeBtn.focus();
  document.body.style.overflow = "hidden";
}

function closeModal(){
  modal.hidden = true;
  backdrop.hidden = true;
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-open]").forEach(el=>{
  el.addEventListener("click", ()=>{
    openModal(el.getAttribute("data-open"));
  });
});

closeBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", (e)=>{
  if(e.key === "Escape" && !modal.hidden) closeModal();
});
