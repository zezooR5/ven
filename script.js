document.addEventListener("DOMContentLoaded", () => {
    // 3D Tilt Effect on Hero Bottle
    const heroImage = document.querySelector('.hero-image-container img');
    const heroContainer = document.querySelector('.hero-image-container');

    if (heroContainer && heroImage) {
        heroContainer.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
            heroImage.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1.05)`;
        });

        heroContainer.addEventListener('mouseleave', () => {
            heroImage.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
        });
    }

    // Advanced Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // Sleek Navbar behavior
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});
