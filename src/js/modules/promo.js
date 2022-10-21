export default function promo() {
    const promoWrapper = document.querySelector(".promo");
    const main = ["../img/interier/main1.jpg", "../img/interier/main2Cut.jpg"];
    const mainMobile = ["../img/interier/cups.jpg", "../img/interier/main-mobile.jpg"];
    let i = 0;

    if (window.innerWidth < 769) {
        try {
            promoWrapper.style.backgroundImage = `url(${mainMobile[0]})`;
        } catch (e) { }

        setInterval(() => changePromoWrapper(mainMobile), 14000);
    } else {
        try {
            promoWrapper.style.backgroundImage = `url(${main[0]})`;
        } catch (e) { }

        setInterval(() => changePromoWrapper(main), 12000);
    }

    function changePromoWrapper(selector) {
        if (i >= main.length - 1) {
            i = 0;
        } else {
            i++;
        }
        try {
            promoWrapper.style.backgroundImage = `url(${selector[i]})`;
        }catch(e){}
        
    }

}