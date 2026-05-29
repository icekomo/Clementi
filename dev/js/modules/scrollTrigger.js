import { gsap, ScrollTrigger } from "../gsap-setup.js";

export function initScrollTrigger() {

    /* ============================================
        Home — background-image parallax
    ============================================ */
        ScrollTrigger.create({
            trigger: "#home",
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true
            //markers:true
        });



        ScrollTrigger.create({
            trigger: "#slideshow",
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
            scrub: true,
            invalidateOnRefresh: true
            //markers:true
        });



//     gsap.to("#home", {
//         backgroundPositionY: "60%",
//         ease: "none",
// ,
//     });

    /* ============================================
        Overview — content slides in from left,
        svg slides in from right @ 992px+
    ============================================ */
    ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {

            gsap.from("#overview-content", {
                x: "-80px",
                opacity: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#overview",
                    start: "top 75%",
                    end: "top 50%",
                    scrub: true,
                    toggleActions: "play none none none"
                    //markers: true
                }
            });

            gsap.from("#overview-svg", {
                x: "80px",
                opacity: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#overview",
                    start: "top 75%",
                    end: "top 50%",
                    scrub: true,
                    toggleActions: "play none none none"
                    //markers: true
                }
            });

        }
    });


    /* ============================================
        Force refresh after fonts/images settle
    ============================================ */
    window.addEventListener("load", () => {
        setTimeout(() => ScrollTrigger.refresh(), 100);
    });


    /* ============================================
        Overview — slides up over the hero
    ============================================ */
    // gsap.from("#overview", {
    //     y: "30%",
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: "#overview",
    //         start: "top bottom",  // when overview enters the viewport
    //         end: "top top",       // when overview reaches the top
    //         scrub: true,
    //         markers: true
    //     },
    // });
}