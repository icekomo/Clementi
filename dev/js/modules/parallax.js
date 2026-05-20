import { gsap, ScrollTrigger } from "../gsap-setup.js";

export function initParallax() {

    /* ============================================
        Home — background-image parallax
    ============================================ */
        ScrollTrigger.create({
            trigger: "#home",
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing:false,
            scrub: true
            //markers:true
        });



        ScrollTrigger.create({
            trigger: "#slideshow",
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing:false,
            scrub: true
            //markers:true
        });



//     gsap.to("#home", {
//         backgroundPositionY: "60%",
//         ease: "none",
// ,
//     });

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