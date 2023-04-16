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


const carouselSlides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function moveCarousel() {
  carouselSlides[currentSlide].style.left = '-100%';
  currentSlide = (currentSlide + 1) % carouselSlides.length;
  carouselSlides[currentSlide].style.left = '0';
}

setInterval(moveCarousel, 3000);


document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 10,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
    });
  });
  
