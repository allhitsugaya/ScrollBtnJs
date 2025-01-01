document.addEventListener("DOMContentLoaded", function() {
    const i = document.querySelector('.fas.fa-chevron-up');

    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 300) {
            i.style.opacity = "1";
            i.style.pointerEvents = "auto";
        } else {
            i.style.opacity = "0";
            i.style.pointerEvents = "none";
        }
    });

    i.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
