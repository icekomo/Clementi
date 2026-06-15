import { initCardflip } from "./modules/card-flip.js";
import { initContact } from "./modules/contact.js";
import { initHeader } from "./modules/header.js";
import { initSlideshow } from "./modules/slideshow.js";
import { initBioModal } from "./modules/bio-modal.js";
import { initGetStarted } from "./modules/get-started.js";
import { initScrollTrigger } from "./modules/scrollTrigger.js";
import { initGearAnimation } from "./modules/gears-animation.js";
import { initHomeTitles } from "./modules/home-titles.js";

document.addEventListener("DOMContentLoaded", () => {
    initCardflip();
    initContact();
    initHeader();
    initSlideshow();
    initBioModal();
    initGetStarted();
    initScrollTrigger();
    initGearAnimation();
    initHomeTitles();
});