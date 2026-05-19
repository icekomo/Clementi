import { initBurger } from "./modules/burger.js";
import { initCardflip } from "./modules/card-flip.js";
import { initContact } from "./modules/contact.js";
import { initHeader } from "./modules/header.js";
import { initParallax } from "./modules/parallax.js";


document.addEventListener("DOMContentLoaded", () => {
    initBurger();
    initCardflip();
    initContact();
    initHeader();
    initParallax();
});