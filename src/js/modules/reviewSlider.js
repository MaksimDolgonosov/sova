export default function reviewSlider() {
    const slides = document.querySelectorAll(".about__reviews-item");
    const dots = document.querySelectorAll(".about__reviews-dots span");
    let slideIndex = 0;
    showSlide(slideIndex);
    dots[0].style.backgroundColor = "azure";

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            dots.forEach(item => {
                item.style.backgroundColor = "transparent";
            });
            dots[i].style.backgroundColor = "azure";
            slideIndex = i;
            showSlide(i);
        });
    });


    // slides.forEach(slide => {
    //     slide.classList.add("animate__slideInRight");
    // });

    function showSlide(i) {
        hideSlides();
        try {
            slides[i].classList.add("animate__slideInRight");
            slides[i].style.display = "flex";
        } catch (e) { }

    }

    function hideSlides() {
        slides.forEach(slide => {
            slide.style.display = "none";
            slide.classList.remove("animate__slideInRight");
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

    // setInterval(nextSlide, 6000);

}