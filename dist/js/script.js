!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function n(){const e=document.querySelectorAll(".about__wrapper-slider-item");let t=0;function r(t){e.forEach(e=>{e.style.display="none"});try{e[t].style.display="block"}catch(e){}}r(t),e.forEach(e=>{e.classList.add("fade")}),setInterval((function(){t>=e.length-1?t=0:t++,r(t)}),6e3)}function o(){const e=document.querySelector(".about__reviews"),t=document.querySelectorAll(".about__reviews-item"),r=document.querySelectorAll(".about__reviews-dots span");let n=0;o(n);try{r[n].style.backgroundColor="azure"}catch(e){}function o(e){t.forEach(e=>{e.style.display="none",e.classList.remove("animate__slideInRight")}),r.forEach(e=>{e.style.backgroundColor="transparent"});try{t[e].classList.add("animate__slideInRight"),t[e].style.display="flex",r[e].style.backgroundColor="azure"}catch(e){}}function a(){n>=t.length-1?n=0:n++,o(n);try{r[n].style.backgroundColor="azure"}catch(e){}}r.forEach((e,t)=>{e.addEventListener("click",()=>{r.forEach(e=>{e.style.backgroundColor="transparent"}),n=t,r[n].style.backgroundColor="azure",o(n)})});let c=setInterval(()=>a(),5e3);try{e.addEventListener("mouseover",()=>{clearInterval(c)})}catch(e){}try{e.addEventListener("mouseout",()=>{c=setInterval(()=>a(),5e3)})}catch(e){}}r.r(t),function(){const e=document.querySelector(".promo"),t=["../img/interier/main1.jpg","../img/interier/main2Cut.jpg"],r=["../img/interier/cups.jpg","../img/interier/main-mobile.jpg"];let n=0;if(window.innerWidth<769){try{e.style.backgroundImage="url(".concat(r[0],")")}catch(e){}setInterval(()=>o(r),14e3)}else{try{e.style.backgroundImage="url(".concat(t[0],")")}catch(e){}setInterval(()=>o(t),12e3)}function o(r){n>=t.length-1?n=0:n++;try{e.style.backgroundImage="url(".concat(r[n],")")}catch(e){}}}(),window.addEventListener("DOMContentLoaded",()=>{(new WOW).init();let e=new Rellax(".rellax");!function(){const e=document.querySelector(".header__hamburger"),t=document.querySelector(".header__items__mobile");e.addEventListener("click",()=>{e.classList.contains("header__hamburger")?(e.classList.remove("header__hamburger"),e.classList.add("header__hamburger-active"),t.classList.remove("header__items__mobile"),t.classList.add("header__items__mobile-active")):(e.classList.remove("header__hamburger-active"),e.classList.add("header__hamburger"),t.classList.remove("header__items__mobile-active"),t.classList.add("header__items__mobile"))})}(),function(){const e=document.querySelectorAll(".promo__icon");function t(e,t){setTimeout(()=>{try{e.classList.add("animate__bounceInUp"),e.style.opacity="1"}catch(e){}},t)}t(e[0],2e3),t(e[1],2500),t(e[2],3e3)}(),n(),o(),window.addEventListener("resize",()=>{try{window.innerWidth<993?e.destroy():e.refresh()}catch(e){}})})}]);