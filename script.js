const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot follows cursor exactly
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline follows with slight delay (animation)
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Hover effects via class toggling
document.querySelectorAll('a, button, .feature-card').forEach(item => {
    item.addEventListener('mouseenter', () => {
        document.body.classList.add('hovering');
    });
    
    item.addEventListener('mouseleave', () => {
        document.body.classList.remove('hovering');
    });
});
