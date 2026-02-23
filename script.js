const backdrop = document.getElementById("backdrop");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.getElementById("closeBtn");

document.getElementById("year").textContent = new Date().getFullYear();

const content = {
    summary: {
        title: "Professional Summary",
        html: `<p>Project Engineer delivering large-scale <strong>industrial demolition</strong> and <strong>major infrastructure</strong> packages within Tier-1 environments. Experienced in demolition sequencing, subcontractor coordination, and <strong>explosive demolition</strong> in live facilities.</p>
               <div class="kv"><div class="kvc"><div class="k">Member</div><div class="v">MIEAust</div></div><div class="kvc"><div class="k">Focus</div><div class="v">Induced Collapse / Heavy Mech</div></div></div>`
    },
    software: {
        title: "Software Stack",
        html: `<h3>Project Controls</h3><div class="tags"><span class="tag">Primavera P6</span><span class="tag">Procore</span><span class="tag">InEight</span><span class="tag">MS Project</span></div>
               <h3>Engineering</h3><div class="tags"><span class="tag">AutoCAD</span><span class="tag">SpaceGass</span><span class="tag">Civil 3D</span><span class="tag">Bluebeam</span></div>`
    },
    expertise: {
        title: "Expertise",
        html: `<ul><li><strong>Demolition:</strong> Methodology development, induced collapse, and controlled explosives.</li><li><strong>Project Delivery:</strong> Procurement, RFQs, cost control, and P6 scheduling.</li><li><strong>Compliance:</strong> ITPs, SWMS, and EPA hazardous waste management.</li></ul>`
    },
    projects: {
        title: "Key Project Highlights",
        html: `<h3>ExxonMobil Altona Refinery ($65M+)</h3><p>Managing staged demolition of refinery assets and <strong>controlled explosive works</strong>.</p>
               <h3>Rio Tinto Bauxite Refinery ($250M+)</h3><p>Australia’s largest industrial demolition. Precision explosive works and NORM decontamination.</p>
               <h3>West Gate Freeway Upgrade</h3><p>QA and installation of RC barriers and precast noise walls.</p>`
    },
    career: {
        title: "Career History",
        html: `<h3>Liberty Industrial (2024–Present)</h3><p>Project Engineer – Demolition & Infrastructure.</p>
               <h3>Indara Digital Infrastructures (2023–2024)</h3><p>Structural Engineer – Telecom Upgrades.</p>
               <h3>Clive Steele Partners (2021–2023)</h3><p>Graduate Structural Engineer.</p>`
    },
    education: {
        title: "Education",
        html: `<h3>Master of Engineering Science</h3><p>Swinburne University of Technology, VIC</p><h3>Bachelor of Civil Engineering</h3><p>University of Pune, India</p>`
    },
    licenses: {
        title: "Licenses",
        html: `<div class="tags"><span class="tag">White Card</span><span class="tag">Asbestos Safety</span><span class="tag">Working at Heights</span><span class="tag">Chain of Responsibility</span></div>`
    },
    contact: {
        title: "Contact",
        html: `<p>Email: <a href="mailto:ganesh.r.kalal24@gmail.com">ganesh.r.kalal24@gmail.com</a></p><p>Phone: 0424 121 941</p>`
    }
};

function openModal(key, element) {
    const c = content[key];
    if (!c) return;

    // Trigger demolition animation for specific tiles
    if (key === 'summary' || key === 'projects') {
        element.classList.add('demolish');
        setTimeout(() => {
            renderModal(c);
            element.classList.remove('demolish');
        }, 900);
    } else {
        renderModal(c);
    }
}

function renderModal(c) {
    modalTitle.textContent = c.title;
    modalBody.innerHTML = c.html;
    backdrop.hidden = false;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.hidden = true;
    backdrop.hidden = true;
    document.body.style.overflow = "";
}

document.querySelectorAll("[data-open]").forEach(el => {
    el.addEventListener("click", () => openModal(el.getAttribute("data-open"), el));
});

closeBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeModal(); });
