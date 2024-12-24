document.addEventListener("DOMContentLoaded", function() {
    const fadeIns = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing after animating
            }
        });
    }, { threshold: 0.1 });

    fadeIns.forEach(fadeIn => observer.observe(fadeIn));
});
