const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

// Particle Trail System
document.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // 1. Move the singularity (core)
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // 2. Move the probability field (follows loosely)
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 400, fill: "forwards" });

    // 3. Spawn Quantum Particles (Trail)
    // Only spawn if mouse velocity is high enough (optional optimization, but let's just do it on move for smoothness)
    if (Math.random() > 0.5) { // 50% chance to spawn per move event to avoid clutter
        createParticle(posX, posY);
    }
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('quantum-particle');
    document.body.appendChild(particle);

    // Randomize position slightly for "uncertainty"
    const randomX = (Math.random() - 0.5) * 10;
    const randomY = (Math.random() - 0.5) * 10;
    
    particle.style.left = `${x + randomX}px`;
    particle.style.top = `${y + randomY}px`;

    // Animation: Fade out and expand
    const animation = particle.animate([
        { transform: 'translate(-50%, -50%) scale(0.5)', opacity: 0.8 },
        { transform: 'translate(-50%, -50%) scale(0)', opacity: 0 }
    ], {
        duration: 800,
        easing: 'cubic-bezier(0, .9, .57, 1)'
    });

    animation.onfinish = () => particle.remove();
}

// Hover effects
document.querySelectorAll('a, button, .feature-card').forEach(item => {
    item.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
    item.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
});
