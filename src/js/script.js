
import hamburger from "./modules/hamburger";
import scrolling from "./modules/scrolling";



window.addEventListener("DOMContentLoaded", () => {

    let rellax = new Rellax('.rellax');
    hamburger();
    scrolling();



    window.addEventListener("resize", () => {
        if (window.innerWidth < 993) {
            rellax.destroy();
        } else {
            rellax.refresh();
        }
    });

});
