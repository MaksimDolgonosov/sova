export default function reviewSlider() {
    const slidesWrapper = document.querySelector(".about__reviews");
    const slides = document.querySelectorAll(".about__reviews-item");
    const dots = document.querySelectorAll(".about__reviews-dots span");
    let slideIndex = 0;
    showSlide(slideIndex);
    try {
        dots[slideIndex].style.backgroundColor = "azure";
    } catch (e) { }


    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            dots.forEach(item => {
                item.style.backgroundColor = "transparent";
            });
            slideIndex = i;
            dots[slideIndex].style.backgroundColor = "azure";

            showSlide(slideIndex);
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
            dots[i].style.backgroundColor = "azure";
        } catch (e) { }

    }

    function hideSlides() {
        slides.forEach(slide => {
            slide.style.display = "none";
            slide.classList.remove("animate__slideInRight");
        });
        dots.forEach(item => {
            item.style.backgroundColor = "transparent";
        });
    }

    function nextSlide() {
        if (slideIndex >= slides.length - 1) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
        showSlide(slideIndex);
        try {
            dots[slideIndex].style.backgroundColor = "azure";
        } catch (e) { }
    }

    // setInterval(nextSlide, 5000);

    let interval = setInterval(() => nextSlide(), 5000);

    try {
        slidesWrapper.addEventListener("mouseover", () => {
            clearInterval(interval);
        });
    } catch (e) { }

    try {
        slidesWrapper.addEventListener("mouseout", () => {
            interval = setInterval(() => nextSlide(), 5000);
        });
    } catch (e) { }

}