/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/aboutSlider.js":
/*!***************************************!*\
  !*** ./src/js/modules/aboutSlider.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return aboutSlider; });
function aboutSlider() {
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
    } catch (e) {}
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

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hamburger; });
function hamburger() {
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

/***/ }),

/***/ "./src/js/modules/zoomIn.js":
/*!**********************************!*\
  !*** ./src/js/modules/zoomIn.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return zoomIn; });
function zoomIn() {
  const icons = document.querySelectorAll(".promo__icon");
  showIcons(icons[0], 2000);
  showIcons(icons[1], 2500);
  showIcons(icons[2], 3000);

  function showIcons(icon, time) {
    setTimeout(() => {
      try {
        icon.classList.add("animate__bounceInUp");
        icon.style.opacity = "1";
      } catch (e) {}
    }, time);
  }
}

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");
/* harmony import */ var _modules_zoomIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/zoomIn */ "./src/js/modules/zoomIn.js");
/* harmony import */ var _modules_aboutSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/aboutSlider */ "./src/js/modules/aboutSlider.js");



window.addEventListener("DOMContentLoaded", () => {
  new WOW().init();
  let rellax = new Rellax('.rellax');
  Object(_modules_hamburger__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_zoomIn__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_aboutSlider__WEBPACK_IMPORTED_MODULE_2__["default"])();
  window.addEventListener("resize", () => {
    try {
      if (window.innerWidth < 993) {
        rellax.destroy();
      } else {
        rellax.refresh();
      }
    } catch (e) {}
  });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map