export function initSubModularAnimation() {
    const m1Color = document.getElementById("m1-color");
    const m1Text = document.getElementById("m1-text");
    const mb1Color = document.getElementById("mb1-color");
    const mb1Text = document.getElementById("mb1-text");

    if (!m1Color || !m1Text || !mb1Color || !mb1Text) return;

    // Get the SVG's bounding box height to use as the wipe distance
    const svgEl = m1Color.closest("svg");
    const svgHeight = svgEl ? svgEl.viewBox.baseVal.height : 588;

    // Master timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#modular-container",
            start: "top 75%",
            toggleActions: "play none none none",
        },
    });

    // ─── Step 1: m1-color wipes in from bottom ───────────────────────────────
    // Clip the element by translating it up from below its natural position.
    // We set the initial Y offset to 100% of the element's own height so it
    // starts completely off-screen (below), then animate Y back to 0.
    gsap.set(m1Color, { yPercent: 100 });

    tl.to(m1Color, {
        yPercent: 0,
        duration: 0.9,
        ease: "power3.out",
    });

    // ─── Step 2: m1-text fades in and slides down from 100px above ───────────
    gsap.set(m1Text, { autoAlpha: 0, y: -100 });

    tl.to(
        m1Text,
        {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
        },
        ">0.1" // slight pause after step 1 finishes
    );

    // ─── Step 3: mb1-color wipes in from bottom ──────────────────────────────
    gsap.set(mb1Color, { yPercent: 100 });

    tl.to(
        mb1Color,
        {
            yPercent: 0,
            duration: 0.9,
            ease: "power3.out",
        },
        ">0.15"
    );

    // ─── Step 4: mb1-text fades in and slides down from 100px above ──────────
    gsap.set(mb1Text, { autoAlpha: 0, y: -100 });

    tl.to(
        mb1Text,
        {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
        },
        ">0.1"
    );
}