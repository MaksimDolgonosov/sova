export default function hamburger() {

    const hamburger = document.querySelector(".header__hamburger");
    const menu = document.querySelector(".header__items__mobile");

    hamburger.addEventListener("click", () => {
        if (hamburger.classList.contains("header__hamburger")) {
            hamburger.classList.remove("header__hamburger");
            hamburger.classList.add("header__hamburger-active");
            menu.classList.remove("header__items__mobile");
            menu.classList.add("header__items__mobile-active");
        } else {
            hamburger.classList.remove("header__hamburger-active");
            hamburger.classList.add("header__hamburger");
            menu.classList.remove("header__items__mobile-active");
            menu.classList.add("header__items__mobile");
        }
    });

}