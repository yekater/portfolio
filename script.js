// Parallax while scrolling
window.addEventListener('scroll', function() {
    const parallaxSections = document.querySelectorAll('.parallax');
    parallaxSections.forEach(section => {
        const scrollPosition = window.pageYOffset;
        const speed = section.dataset.speed || 0.5; // change a scrolling speed here
        section.style.backgroundPosition = `center ${-(scrollPosition * speed)}px`;
    });
});
