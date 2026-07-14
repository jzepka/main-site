const horizontalScrollSections = document.querySelectorAll('.horizontal-scroll-wrapper');

horizontalScrollSections.forEach(section => {
    section.addEventListener('wheel', (event) => {
        event.preventDefault();
        section.scrollLeft += event.deltaY;
    });
});