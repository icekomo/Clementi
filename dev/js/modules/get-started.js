import { gsap } from "../gsap-setup.js";

export function initGetStarted() {
    /* ============================================
           Get Started
    ============================================ */

    const arrows = gsap.utils.toArray("#steps-container .arrow");
    const TOTAL = 10;
    const lgBreakpoint = 1024;

function buildTimeline() {
    const isDesktop = window.innerWidth >= lgBreakpoint;
    const tl = gsap.timeline({ repeat: -1 });

    // remove gsap.set — the from() handles initial opacity

    const staggerGap = (TOTAL * 0.5) / arrows.length;

    arrows.forEach((arrow, i) => {
        const startTime = i * staggerGap;

        tl.from(
            arrow,
            {
                autoAlpha: 0,
                x: isDesktop ? -30 : 0,
                y: isDesktop ? 0 : -30,
                duration: 0.6,
                ease: "power2.out",
            },
            startTime
        );
    });

    tl.to(
        arrows,
        { autoAlpha: 0, duration: 1, ease: "power1.in" },
        TOTAL * 0.5
    );
    tl.set({}, {}, TOTAL);

    return tl;
}

    let tl = buildTimeline();

    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            tl.kill();
            tl = buildTimeline();
        }, 250);
    });
}
