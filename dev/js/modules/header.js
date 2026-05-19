import { gsap } from "../gsap-setup.js";

export function initHeader() {
    const burgerBtn = document.querySelector("#burgerBtn");
    const mainNav = document.querySelector("#mainNav");
    const navItems = mainNav.querySelectorAll("li");

    // Match your lg breakpoint — adjust this value to match helpers.lg
    const desktopMQ = window.matchMedia("(min-width: 992px)");

    let isMenuOpen = false;

    function setMobileState() {
        // Only hide nav items on mobile
        if (!desktopMQ.matches) {
            gsap.set(navItems, { x: 40, opacity: 0 });
        } else {
            // Clear any inline GSAP styles on desktop so CSS takes over
            gsap.set(navItems, { clearProps: "all" });
        }
    }

    setMobileState();

    // Re-evaluate if the window is resized across the breakpoint
    desktopMQ.addEventListener("change", () => {
        isMenuOpen = false;
        burgerBtn.classList.remove("is-open");
        setMobileState();
    });

    burgerBtn.addEventListener("click", () => {
        if (!isMenuOpen) {
            isMenuOpen = true;
            burgerBtn.classList.add("is-open");

            gsap.to(mainNav, {
                height: "auto",
                duration: 0.5,
                ease: "power3.inOut",
            });

            gsap.to(navItems, {
                x: 0,
                opacity: 1,
                duration: 0.4,
                ease: "power3.out",
                stagger: 0.07,
                delay: 0.2,
            });

        } else {
            burgerBtn.classList.remove("is-open");

            gsap.to(navItems, {
                x: 40,
                opacity: 0,
                duration: 0.2,
                ease: "power3.in",
                stagger: 0.04,
            });

            gsap.to(mainNav, {
                height: 0,
                duration: 0.4,
                ease: "power3.inOut",
                onComplete: () => {
                    isMenuOpen = false;
                },
            });
        }
    });
}