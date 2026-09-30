export function initSubReadMore() {
/* ============================================
           Submission Card — Read More
============================================ */
 
    const card = document.getElementById("sub-card");
    if (!card) return;
 
    const btn = card.querySelector(".read-more");
    if (!btn) return;
 
    // --- Toggle — open state lives on #sub-card (styled in _submission.scss) ---
    btn.addEventListener("click", function() {
        const isOpen = card.classList.toggle("is-open");
 
        btn.setAttribute("aria-expanded", isOpen);
        btn.textContent = isOpen ? "Read less" : "Read more";
    });
}
 