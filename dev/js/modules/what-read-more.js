export function initWhatReadMore() {
/* ============================================
           What Cards — Read More
============================================ */
 
    const buttons = document.querySelectorAll("#what-cards .read-more");
    if (!buttons.length) return;
 
    // --- Toggle — open state lives on .what-card (styled in _what.scss) ---
    function toggleCard(btn) {
        const card = btn.closest(".what-card");
        const isOpen = card.classList.toggle("is-open");
 
        btn.setAttribute("aria-expanded", isOpen);
        btn.textContent = isOpen ? "Read less" : "Read more";
    }
 
    buttons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            toggleCard(btn);
        });
    });
}
 