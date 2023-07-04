/*********This creates the rendering of each section of the page as you scroll */
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


/***********This creates the slides show of just showing one image at a time */
const carouselSlides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function moveCarousel() {
  carouselSlides[currentSlide].style.left = '-100%';
  currentSlide = (currentSlide + 1) % carouselSlides.length;
  carouselSlides[currentSlide].style.left = '0';
}

setInterval(moveCarousel, 3000);



/**********This creates the carosule that shows multiple photos across the screen at once. */
const carousel2 = document.querySelector('.carousel2');
const carousel2Slides = document.querySelector('.carousel2-slides');
let imageIndex = 0;

// Clone the first five images and append them to the end of the carousel
for (let i = 0; i < 5; i++) {
    const clonedImage = carousel2Slides.children[i].cloneNode(true);
    carousel2Slides.appendChild(clonedImage);
}

function moveRight() {
    imageIndex++;
    carousel2Slides.style.transition = 'transform 0.5s';
    carousel2Slides.style.transform = `translateX(-${imageIndex * (100 / 5)}%)`;

    // When the last cloned image is displayed, reset the image index and translateX property
    if (imageIndex === carousel2Slides.children.length - 5) {
        setTimeout(() => {
            carousel2Slides.style.transition = 'none';
            carousel2Slides.style.transform = 'translateX(0)';
            imageIndex = 0;
        }, 500);
    }
}

setInterval(moveRight, 4050); // Adjust the timing as needed


/******This is the section that allows you to manually scroll through the testimonials */
let currentTestimonial = 0;
const testimonials = document.getElementsByClassName('testimonial-slide');

function changeTestimonial(direction) {
  testimonials[currentTestimonial].classList.remove('active');
  currentTestimonial += direction;

  if (currentTestimonial < 0) {
    currentTestimonial = testimonials.length - 1;
  } else if (currentTestimonial >= testimonials.length) {
    currentTestimonial = 0;
  }

  testimonials[currentTestimonial].classList.add('active');

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const description = document.getElementById('description').value;
  
    if (!fname || !lname || !email || !subject || !description) {
      alert('All fields must be filled out');
      return;
    }
  
    if (!validator.isEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }
  
    // You'd need to replace these with your actual EmailJS service ID and template ID
    emailjs.send('service_ID', 'template_ID', {
      from_name: fname + ' ' + lname,
      to_name: 'Your Name',
      message: `Subject: ${subject}\n\nDescription: ${description}`,
      reply_to: email
    })
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(err) {
      console.log('FAILED...', err);
    });
  });
  
}


