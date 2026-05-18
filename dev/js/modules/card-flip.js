/* ============================================
           Who Card Filp
============================================ */
import { gsap } from "../gsap-setup.js";

export function initCardflip() {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;

    document.querySelectorAll(".card-wrapper").forEach((wrapper) => {
        const inner = wrapper.querySelector(".card-inner");
        let flipped = false;

        if (isTouchDevice) {
            wrapper.addEventListener("click", () => {
                flipped = !flipped;
                gsap.to(inner, {
                    rotationY: flipped ? 180 : 0,
                    duration: 0.55,
                    ease: "power2.inOut",
                });
            });
        } else {
            wrapper.addEventListener("mouseenter", () => {
                gsap.to(inner, {
                    rotationY: 180,
                    duration: 0.55,
                    ease: "power2.inOut",
                });
            });

            wrapper.addEventListener("mouseleave", () => {
                gsap.to(inner, {
                    rotationY: 0,
                    duration: 0.55,
                    ease: "power2.inOut",
                });
            });
        }
    });
}
