import { gsap } from "../gsap-setup.js";

export function initGearAnimation() {

    /* ============================================
        Utility
        Returns an SVG coordinate string "cx cy".
        Pass as svgOrigin on any tween — works for
        both rotation and scale on SVG elements.
    ============================================ */

    function getOrigin(el) {
        const bbox = el.getBBox();
        const cx = bbox.x + bbox.width  / 2;
        const cy = bbox.y + bbox.height / 2;
        return `${cx} ${cy}`;
    }

    function buildRotation(id, duration, direction = 1) {
        const el = document.querySelector(id);
        if (!el) return null;

        const tl = gsap.timeline({ id: `rotate-${id}` });

        tl.to(el, {
            rotation: 360 * direction,
            duration,
            ease: "none",
            repeat: -1,
            svgOrigin: getOrigin(el),
        });

        return tl;
    }


    /* ============================================
        Per-gear timeline functions
    ============================================ */

    function eCtdInd() {
        return buildRotation("#eCTD\\ IND", 60, 1);
    }

    function cmc() {
        return buildRotation("#CMC", 45, -1);
    }

    function toxicology() {
        return buildRotation("#Toxicology", 50, -1);
    }

    function clinicalProtocol() {
        return buildRotation("#Clinical\\ Protocol", 55, -1);
    }

    function documentManagement() {
        return buildRotation("#Document\\ Management", 40, 1);
    }

    function glp() {
        return buildRotation("#GLP", 25, 1);
    }

    function monitoringAudits() {
        return buildRotation("#Monitoring\\ Audits", 30, -1);
    }

    function fdaMeetings() {
        return buildRotation("#FDA\\ Meetings", 20, -1);
    }


    /* ============================================
        Fade-in timeline
    ============================================ */

    function fadeInGears() {
        const pairs = [
            ["#eCTD\\ IND",             "#ect\\ text"],
            ["#CMC",                     "#cmc\\ text"],
            ["#Toxicology",              "#toxt\\ text"],
            ["#Clinical\\ Protocol",     "#clincial\\ text"],
            ["#Document\\ Management",   "#doc\\ text"],
            ["#FDA\\ Meetings",          "#fda\\ text"],
            ["#GLP",                     "#glp\\ text"],
            ["#Monitoring\\ Audits",     "#monitor\\ text"],
        ];

        const tl = gsap.timeline({ id: "fadeInGears" });

        pairs.forEach(([gear, key]) => {
            gsap.set([gear, key], { autoAlpha: 0 });
        });

        pairs.forEach(([gear, key], i) => {
            tl.to(
                [gear, key],
                { autoAlpha: 1, duration: 1.2, ease: "power2.out" },
                i * 1.0
            );
        });

        return tl;
    }


    /* ============================================
        Master timeline
    ============================================ */

    const master = gsap.timeline({ id: "gearAnimationMaster" });

    [
        eCtdInd(),
        cmc(),
        toxicology(),
        clinicalProtocol(),
        documentManagement(),
        glp(),
        monitoringAudits(),
        fdaMeetings(),
        fadeInGears(),
    ]
    .filter(Boolean)
    .forEach(tl => master.add(tl, 0));

    return master;

}