// import { initBurger } from "./modules/burger.js";
import { initCardflip } from "./modules/card-flip.js";
import { initContact } from "./modules/contact.js";
import { initHeader } from "./modules/header.js";
import { initParallax } from "./modules/parallax.js";
import { initSlideshow } from "./modules/slideshow.js";


document.addEventListener("DOMContentLoaded", () => {
    initCardflip();
    initContact();
    initHeader();
    initParallax();
    initSlideshow();
});