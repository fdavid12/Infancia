// script.js

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.classList.add("oculto");
        observer.observe(section);
    });

    // Slider automático
    const track = document.querySelector(".slider-track");
    if (track) {
        const slides = Array.from(track.children);
        let currentIndex = 0;

        function showNextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        setInterval(showNextSlide, 4000);
    }
});

// Detecta si el elemento está en la pantalla
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight - 100 &&
        rect.bottom >= 0
    );
}

function handleScroll() {
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach(el => {
        if (isInViewport(el)) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);


