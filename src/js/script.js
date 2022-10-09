
import hamburger from "./modules/hamburger";
import zoomIn from "./modules/zoomIn";



window.addEventListener("DOMContentLoaded", () => {
    new WOW().init();
    let rellax = new Rellax('.rellax');
    hamburger();
    zoomIn();



    window.addEventListener("resize", () => {
        if (window.innerWidth < 993) {
            rellax.destroy();
        } else {
            rellax.refresh();
        }
    });

});
