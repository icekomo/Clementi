import { gsap } from "../gsap-setup.js";

export function initContact() {
    /* ============================================
           Contact
============================================ */

    const overlay = document.getElementById("contact-overlay");
    const openBtn = document.getElementById("contact-btn");
    const closeBtn = document.getElementById("close-btn");

    function openContact() {
        gsap.set(overlay, { display: "block" });
        gsap.fromTo(
            overlay,
            { opacity: 0 },
            { opacity: 1, duration: 0.4, ease: "power2.out" }
        );
    }

    function closeContact() {
        gsap.to(overlay, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => gsap.set(overlay, { display: "none" })
        });
    }

    openBtn.addEventListener("click", openContact);
    closeBtn.addEventListener("click", closeContact);

    // Close on backdrop click
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeContact();
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeContact();
    });
}
