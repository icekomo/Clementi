import { gsap } from "../gsap-setup.js";

export function initBioModal() {
/* ============================================
           Bio Modal
============================================ */

    const overlay = document.getElementById("bio-overlay");
    const closeBtn = document.getElementById("bio-close-btn");

    // --- Tags in bio-modal.kit that get populated ---
    const modalName  = document.getElementById("bio-name");
    const modalTitle = document.getElementById("bio-title");
    const modalP1    = document.getElementById("bio-p-1");
    const modalP2    = document.getElementById("bio-p-2");
    const modalP3    = document.getElementById("bio-p-3");
    const modalP4    = document.getElementById("bio-p-4");

    // --- Load & cache bios.xml ---
    let bioData = {};

    function getText(person, tag) {
        const el = person.getElementsByTagName(tag)[0];
        return el ? el.textContent : "";
    }

    fetch("xml/bios.xml")
        .then(function(res) { return res.text(); })
        .then(function(text) {
            console.log("XML loaded:", text);
            console.log("bioData:", bioData);
            const xml = new DOMParser().parseFromString(text, "application/xml");
            const people = xml.querySelectorAll("person");
            people.forEach(function(person) {
                const id = person.getAttribute("id");
                bioData[id] = {
                    name:  getText(person, "name"),
                    title: getText(person, "title"),
                    p1:    getText(person, "p-1"),
                    p2:    getText(person, "p-2"),
                    p3:    getText(person, "p-3"),
                    p4:    getText(person, "p-4"),
                };
            });
        });

    // --- Populate modal from cached data ---
    function populateBio(id) {
        const bio = bioData[id];
        if (!bio) return;

        modalName.textContent  = bio.name;
        modalTitle.textContent = bio.title;
        modalP1.textContent    = bio.p1;
        modalP2.textContent    = bio.p2;
        modalP3.textContent    = bio.p3;
        modalP4.textContent    = bio.p4;
    }

    // --- Open / close ---
    function openBio() {
        gsap.set(overlay, { display: "block" });
        gsap.fromTo(
            overlay,
            { opacity: 0 },
            { opacity: 1, duration: 0.4, ease: "power2.out" }
        );
    }

    function closeBio() {
        gsap.to(overlay, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: function() { gsap.set(overlay, { display: "none" }); }
        });
    }

    // --- Trigger — read data-bio from the button ---
    document.querySelectorAll(".read-bio-btn").forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            e.stopPropagation();
            populateBio(btn.dataset.bio);
            openBio();
        });
    });

    closeBtn.addEventListener("click", closeBio);

    overlay.addEventListener("click", function(e) {
        if (e.target === overlay) closeBio();
    });

    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") closeBio();
    });
}