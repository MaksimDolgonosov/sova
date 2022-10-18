export default function aboutSlider() {

    const slides = document.querySelectorAll(".about__wrapper-slider-item");
    let slideIndex = 0;
    showSlide(slideIndex);

    slides.forEach(slide => {
        slide.classList.add("fade");
    });

    function showSlide(i) {
        hideSlides();
        try {
            slides[i].style.display = "block";
        } catch (e) { }

    }

    function hideSlides() {
        slides.forEach(slide => {
            slide.style.display = "none";
        });
    }

    function nextSlide() {
        if (slideIndex >= slides.length - 1) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
        showSlide(slideIndex);
    }

    setInterval(nextSlide, 6000);
}