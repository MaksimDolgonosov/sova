
import hamburger from "./modules/hamburger";
import zoomIn from "./modules/zoomIn";
import aboutSlider from "./modules/aboutSlider";


window.addEventListener("DOMContentLoaded", () => {
    new WOW().init();
    let rellax = new Rellax('.rellax');
    hamburger();
    zoomIn();
    aboutSlider();



    window.addEventListener("resize", () => {
        try {
            if (window.innerWidth < 993) {
                rellax.destroy();
            } else {
                rellax.refresh();
            }
        } catch (e) { }

    });

});
