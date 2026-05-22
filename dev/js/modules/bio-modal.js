import { gsap } from "../gsap-setup.js";

export function initBioModal() {
/* ============================================
           Bio Modal
============================================ */

    const overlay = document.getElementById("bio-overlay");
    const closeBtn = document.getElementById("bio-close-btn");

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
            onComplete: () => gsap.set(overlay, { display: "none" })
        });
    }

 document.querySelectorAll(".read-bio-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        openBio();
    });
});

    closeBtn.addEventListener("click", closeBio);

    // Close on backdrop click
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeBio();
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeBio();
    });
}