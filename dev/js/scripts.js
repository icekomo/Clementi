// import { initBurger } from "./modules/burger.js";
import { initCardflip } from "./modules/card-flip.js";
import { initContact } from "./modules/contact.js";
import { initHeader } from "./modules/header.js";
// import { initParallax } from "./modules/parallax.js";
import { initSlideshow } from "./modules/slideshow.js";
import { initBioModal } from "./modules/bio-modal.js";
import { initGetStarted } from "./modules/get-started.js";
import { initScrollTrigger } from "./modules/scrollTrigger.js";
import { initGearAnimation } from "./modules/gear-animation.js";



document.addEventListener("DOMContentLoaded", () => {
    initCardflip();
    initContact();
    initHeader();
    // initParallax();
    initSlideshow();
    initBioModal();
    initGetStarted();
    initScrollTrigger();
    initGearAnimation();
});