
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools,ScrollTrigger,DrawSVGPlugin,MorphSVGPlugin);

/* ============================================
           Burger Button
============================================ */

document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    console.log("DOM is ready!");

    const burgerBtn = document.querySelector('#burgerBtn');
    const mainNav = document.querySelector('#mainNav');
    const topLine = document.querySelector('#top');
    const bottomLine = document.querySelector('#bottom');
    const middleLine = document.querySelector('#middle');

   
    // Set initial off-screen position
    const mm = gsap.matchMedia();

    mm.add("(max-width: 991px)", () => {
        var menuisHidden = true;

        gsap.set(mainNav, { x: '100vw' });
        gsap.set(topLine,{transformOrigin: "center center"})
        gsap.set(bottomLine,{transformOrigin: "center center"})

        const burgerTl = gsap.timeline({ paused: true });
        burgerBtn.addEventListener("click", openCloseMenu);

        burgerTl
        .to(middleLine, { duration: 0.4, scaleX: 0 })
        .to(topLine,    { duration: 0.4, y: 8,  rotation: 45,  transformOrigin: "center center" }, "<")
        .to(bottomLine, { duration: 0.4, y: -9, rotation: -45, transformOrigin: "center center" }, "<");

        function openCloseMenu(){
            if(menuisHidden == true){

                burgerTl.play();

                //show menu
                gsap.to(mainNav, {
                    x: '0',
                    duration: 0.4,
                    ease: 'power2.out'
                });
                menuisHidden = false;
                console.log("show menu");
            }else{
                burgerTl.reverse();

                // hide menu
                gsap.to(mainNav, {
                    x: '100vw',
                    duration: 0.35,
                    ease: 'power2.in'
                });
                menuisHidden = true;
                console.log("hide menu");
            }
        }
    })

/* ============================================
           Who Card Filp
============================================ */

  const isTouchDevice = window.matchMedia('(hover: none)').matches;

  document.querySelectorAll('.card-wrapper').forEach(wrapper => {
    const inner = wrapper.querySelector('.card-inner');
    let flipped = false;

    if (isTouchDevice) {
      wrapper.addEventListener('click', () => {
        flipped = !flipped;
        gsap.to(inner, {
          rotationY: flipped ? 180 : 0,
          duration: 0.55,
          ease: 'power2.inOut'
        });
      });
    } else {
      wrapper.addEventListener('mouseenter', () => {
        gsap.to(inner, { rotationY: 180, duration: 0.55, ease: 'power2.inOut' });
      });

      wrapper.addEventListener('mouseleave', () => {
        gsap.to(inner, { rotationY: 0, duration: 0.55, ease: 'power2.inOut' });
      });
    }
  });


/* ============================================
           Contact
============================================ */

  const overlay = document.getElementById('contact-overlay');
  const openBtn = document.getElementById('contact-btn');
  const closeBtn = document.getElementById('close-btn');

  function openContact() {
    gsap.set(overlay, { display: 'block' });
    gsap.fromTo(overlay,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: 'power2.out' }
    );
  }

  function closeContact() {
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => gsap.set(overlay, { display: 'none' })
    });
  }

  openBtn.addEventListener('click', openContact);
  closeBtn.addEventListener('click', closeContact);

  // Close on backdrop click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeContact();
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeContact();
  });

/* ============================================
           Header
============================================ */

  const header = document.querySelector('#site-header');

  header.addEventListener('mouseenter', () => {
      gsap.to(header, {
          backgroundColor: 'rgba(255, 255, 255, 1)',
          duration: 0.3,
          ease: 'power2.out'
      });
  });

  header.addEventListener('mouseleave', () => {
      gsap.to(header, {
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          duration: 0.3,
          ease: 'power2.out'
      });
  });



});

