import { gsap } from "../gsap-setup.js";

export function initHeader() {
    /* ============================================
           Header
    ============================================ */

    const header = document.querySelector("#site-header");
    const burgerBtn = document.querySelector("#burgerBtn");

    // --- State ---
    let isHovered = false;
    let isMenuOpen = false;
    let lastScrollY = window.scrollY;
    let scrollDirection = null; // 'down' | 'up'

    // --- Helpers ---
    function expandHeader() {
        gsap.to(header, {
            padding: "24px",
            backgroundColor: "rgba(255, 255, 255, 1)",
            duration: 0.4,
            ease: "power2.out",
        });
    }

    function shrinkHeader() {
        gsap.to(header, {
            padding: "12px 24px",
            backgroundColor: "rgba(255, 255, 255, 0.75)",
            duration: 0.4,
            ease: "power2.out",
        });
    }

    // --- Burger Toggle ---
    burgerBtn.addEventListener("click", () => {
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            gsap.to(header, {
                height: "400px",
                duration: 0.5,
                ease: "power3.inOut",
            });
        } else {
            gsap.to(header, {
                height: "auto",
                duration: 0.4,
                ease: "power3.inOut",
            });
        }

        burgerBtn.classList.toggle("is-open", isMenuOpen);
    });

    // --- Scroll ---
    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;
        scrollDirection = currentScrollY > lastScrollY ? "down" : "up";
        lastScrollY = currentScrollY;

        if (isHovered || isMenuOpen) return; // don't fight hover or open menu state

        if (scrollDirection === "down" && currentScrollY > 60) {
            shrinkHeader();
        } else {
            expandHeader();
        }
    });

    // --- Hover ---
    header.addEventListener("mouseenter", () => {
        isHovered = true;
        expandHeader();
    });

    header.addEventListener("mouseleave", () => {
        isHovered = false;
        // Re-evaluate: if still scrolled down, go back to shrunk
        if (!isMenuOpen && scrollDirection === "down" && lastScrollY > 60) {
            shrinkHeader();
        }
    });
}