const scrollSections = document.querySelectorAll('.scroll-section');

function checkScroll() {
  scrollSections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop <= screenHeight / 1.3) {
      section.style.opacity = '1';
    } else {
      section.style.opacity = '0';
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);
