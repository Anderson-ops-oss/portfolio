particlesJS("particles-js", {
    particles: {
        number: { value: 150, density: { enable: true, value_area: 800 } },
        color: { value: ["#00ffcc", "#ff00ff", "#00ccff"] }, 
        shape: { type: "circle" },
        opacity: { value: 0.7, random: true },
        size: { value: 4, random: true },
        line_linked: { enable: true, distance: 120, color: "#00ffcc", opacity: 0.5, width: 1.5 },
        move: { enable: true, speed: 5, direction: "none", random: true, out_mode: "out" }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { repulse: { distance: 150, duration: 0.4 }, push: { particles_nb: 6 } }
    },
    retina_detect: true
});

document.querySelectorAll('.scroll-to').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
