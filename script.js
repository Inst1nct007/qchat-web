const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

// Quantum State
let isHovering = false;

document.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // 1. Singularity Jitter (Heisenberg Uncertainty Principle)
    // The core cursor vibrates slightly when moving
    const jitter = isHovering ? 0 : (Math.random() - 0.5) * 2; 

    cursorDot.style.left = `${posX + jitter}px`;
    cursorDot.style.top = `${posY + jitter}px`;

    // 2. Probability Field (smooth follow)
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 200, fill: "forwards" }); // Faster response for sharper feel

    // 3. Spawn Data Shards (Trail)
    // Create sharp trails - increased density
    if (Math.random() > 0.1) { // 90% chance to spawn (High density)
        createParticle(posX, posY);
    }
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('quantum-particle');
    document.body.appendChild(particle);

    // Particles scatter sharply
    const randomX = (Math.random() - 0.5) * 20;
    const randomY = (Math.random() - 0.5) * 20;
    
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    // Animation: Quick, sharp expansion and fade
    const animation = particle.animate([
        { transform: 'translate(-50%, -50%) scale(1) rotate(0deg)', opacity: 0.6 },
        { transform: `translate(${randomX}px, ${randomY}px) scale(0) rotate(90deg)`, opacity: 0 }
    ], {
        duration: 400,
        easing: 'steps(5)' // Digital/Glitchy feel
    });

    animation.onfinish = () => particle.remove();
}

// Hover effects REMOVED as requested
// The cursor will remain consistent regardless of what it hovers over.
