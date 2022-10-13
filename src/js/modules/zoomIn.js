export default function zoomIn() {
    const icons = document.querySelectorAll(".promo__icon");


        showIcons(icons[0], 2000);
        showIcons(icons[1], 2500);
        showIcons(icons[2], 3000);

    function showIcons(icon, time) {
        setTimeout(() => {
            try {
                icon.classList.add("animate__bounceInUp");
                icon.style.opacity = "1";
            } catch (e) { }

        }, time);
    }


}