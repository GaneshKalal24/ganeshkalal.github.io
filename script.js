const content = {
    summary: {
        title: "Professional Summary",
        html: `<ul><li>Project Engineer with expertise in industrial demolition and infrastructure[cite: 6].</li>
               <li>Experienced in sequencing, procurement, and QA compliance[cite: 7].</li>
               <li>Exposure to explosive demolition in live operational facilities[cite: 8].</li></ul>`
    },
    projects: {
        title: "Key Project Highlights",
        html: `<strong>ExxonMobil Altona Refinery ($65M+)</strong><br>Managing staged demolition and controlled explosive works[cite: 11, 14].<br><br>
               <strong>Rio Tinto Bauxite Refinery ($250M+)</strong><br>Australia's largest industrial demolition project[cite: 16, 17].`
    },
    expertise: {
        title: "Core Competencies",
        html: `<ul><li>Demolition Planning & Methodology [cite: 26]</li><li>Hazardous Waste Management [cite: 27]</li><li>P6 Scheduling & Cost Control [cite: 28]</li></ul>`
    }
};

function openModal(key) {
    document.getElementById('modalTitle').innerText = content[key].title;
    document.getElementById('modalBody').innerHTML = content[key].html;
    document.getElementById('modal').hidden = false;
    document.getElementById('backdrop').hidden = false;
}

function closeModal() {
    document.getElementById('modal').hidden = true;
    document.getElementById('backdrop').hidden = true;
}

// THE DEMOLITION ANIMATION LOGIC
function triggerDemolition() {
    const bldg = document.getElementById('building');
    bldg.classList.add('detonate');
    
    setTimeout(() => {
        bldg.classList.remove('detonate');
        bldg.classList.add('collapse');
        alert("Explosive charges initiated. Controlled collapse in progress.");
    }, 1000);

    // Reset after 4 seconds
    setTimeout(() => {
        bldg.classList.remove('collapse');
        alert("Site cleared. Building demolished successfully.");
    }, 4000);
}
