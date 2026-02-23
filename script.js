const resumeData = {
    summary: {
        title: "Professional Summary",
        body: "Project Engineer delivering large-scale industrial demolition and major infrastructure projects within Tier-1 environments[cite: 6]. Experienced in demolition sequencing, subcontractor coordination, and QA compliance[cite: 7]. Member of Engineers Australia (MIEAust)[cite: 9]."
    },
    tech: {
        title: "Technical Stack",
        body: "<b>Management:</b> MS Project, Primavera P6, Procore, Oracle NetSuite [cite: 66].<br><b>Engineering:</b> AutoCAD, Civil 3D, SpaceGass, Microstran, Bluebeam[cite: 67, 68]."
    },
    projects: {
        title: "Key Project Highlights",
        body: `<b>ExxonMobil Altona Refinery ($65M+)</b>: Managing staged demolition and controlled explosive works while maintaining live operations[cite: 12, 14].<br><br>
               <b>Rio Tinto Bauxite Refinery ($250M+)</b>: Australia's largest industrial demolition. Delivering precision explosive works and heavy structural dismantling[cite: 17].<br><br>
               <b>West Gate Freeway Upgrade</b>: QA verification of crash barriers and precast noise walls[cite: 21].`
    }
};

function openSection(key) {
    const overlay = document.getElementById('demo-overlay');
    const structure = document.querySelector('.structure');
    
    // 1. Show Demolition Animation
    overlay.hidden = false;
    setTimeout(() => structure.classList.add('implode'), 100);

    // 2. Open Detail View after "Collapse"
    setTimeout(() => {
        document.getElementById('modalTitle').innerText = resumeData[key].title;
        document.getElementById('modalBody').innerHTML = resumeData[key].body;
        
        overlay.hidden = true;
        structure.classList.remove('implode');
        
        document.getElementById('modal').hidden = false;
        document.getElementById('backdrop').hidden = false;
    }, 1500);
}

function closeModal() {
    document.getElementById('modal').hidden = true;
    document.getElementById('backdrop').hidden = true;
}
