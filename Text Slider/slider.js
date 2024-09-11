let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.classList.remove('prev');
        dots[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            dots[i].classList.add('active');
        } else if (i === currentSlideIndex) {
            slide.classList.add('prev');
        }
    });
    currentSlideIndex = index;
}

function nextSlide() {
    let nextSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(nextSlideIndex);
}

function currentSlide(index) {
    showSlide(index - 1);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlideIndex); // Show the first slide initially
});
