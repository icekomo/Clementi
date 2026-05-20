import { gsap } from "../gsap-setup.js";

export function initHeader() {
    const burgerBtn = document.querySelector("#burgerBtn");
    const mainNav = document.querySelector("#mainNav");
    const navItems = mainNav.querySelectorAll("li");
    const navLinks = mainNav.querySelectorAll("a, button");
    const topLine = document.querySelector("#top");
    const bottomLine = document.querySelector("#bottom");
    const middleLine = document.querySelector("#middle");

    const desktopMQ = window.matchMedia("(min-width: 992px)");

    let isMenuOpen = false;

    // Burger icon timeline
    const burgerTl = gsap.timeline({ paused: true });
    gsap.set(topLine, { transformOrigin: "center center" });
    gsap.set(bottomLine, { transformOrigin: "center center" });

    burgerTl
        .to(middleLine, { duration: 0.4, scaleX: 0 })
        .to(topLine, { duration: 0.4, y: 8, rotation: 45, transformOrigin: "center center" }, "<")
        .to(bottomLine, { duration: 0.4, y: -9, rotation: -45, transformOrigin: "center center" }, "<");

    function openMenu() {
        isMenuOpen = true;

        burgerTl.play();

        gsap.set(mainNav, { height: 0 });
        gsap.set(navItems, { x: 40, opacity: 0 });

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
    }

    function closeMenu() {
        isMenuOpen = false;

        burgerTl.reverse();

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
        });
    }

    function setMobileState() {
        if (!desktopMQ.matches) {
            gsap.set(mainNav, { height: 0 });
            gsap.set(navItems, { x: 40, opacity: 0 });
        } else {
            gsap.set(mainNav, { clearProps: "all" });
            gsap.set(navItems, { clearProps: "all" });
            burgerTl.pause(0); // reset burger icon to hamburger
        }
    }

    setMobileState();

    desktopMQ.addEventListener("change", () => {
        isMenuOpen = false;
        setMobileState();
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (!desktopMQ.matches && isMenuOpen) {
                closeMenu();
            }
        });
    });

    burgerBtn.addEventListener("click", () => {
        if (!isMenuOpen) {
            openMenu();
        } else {
            closeMenu();
        }
    });
}