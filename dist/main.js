/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/api */ \"./src/logic/api.js\");\n/* harmony import */ var _logic_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/display */ \"./src/logic/display.js\");\n\n\n\nlet unit = 'metric';\nconst input = document.querySelector('#City');\nconst btn = document.querySelector('.find');\nconst form = document.querySelector('.form');\nconst C = document.querySelector('#C');\nconst F = document.querySelector('#F');\nconst container = document.querySelector('.container');\n\nconst currentTab = async (location) => {\n  let result;\n  unit = 'metric';\n  document.getElementById('content').innerHTML = '';\n  result = await (0,_logic_api__WEBPACK_IMPORTED_MODULE_0__.default)(location, unit);\n  (0,_logic_display__WEBPACK_IMPORTED_MODULE_1__.default)(result);\n  btn.addEventListener('click', async () => {\n    unit = 'metric';\n    result = await (0,_logic_api__WEBPACK_IMPORTED_MODULE_0__.default)(input.value, unit);\n    C.checked = true;\n    F.checked = false;\n    document.getElementById('content').innerHTML = '';\n    if (result.cod === '400' || result.cod === '404') {\n      input.value = '';\n      document.body.style.backgroundImage = 'url(https://media3.giphy.com/media/bR9c6Kc721ylG/giphy.gif)';\n      document.body.style.backgroundRepeat = 'repeat';\n      document.body.style.backgroundColor = 'red';\n      form.style.cssText = 'display: none !important';\n      btn.className = 'btn-primary'\n      document.body.style.color = 'white';\n      input.style.color = 'black';\n      container.style.backgroundImage = ''\n    } else {\n      document.body.style.backgroundImage = '';\n      document.body.style.backgroundColor = 'white';\n      form.style.display = 'block';\n      document.body.style.color = 'black';\n    }\n    (0,_logic_display__WEBPACK_IMPORTED_MODULE_1__.default)(result);\n  });\n  C.addEventListener('click', async () => {\n    unit = 'metric';\n    result = await (0,_logic_api__WEBPACK_IMPORTED_MODULE_0__.default)(document.querySelector('.name').innerHTML, unit);\n    document.getElementById('content').innerHTML = '';\n    (0,_logic_display__WEBPACK_IMPORTED_MODULE_1__.default)(result, unit);\n  });\n  F.addEventListener('click', async () => {\n    unit = 'imperial';\n    result = await (0,_logic_api__WEBPACK_IMPORTED_MODULE_0__.default)(document.querySelector('.name').innerHTML, unit);\n    document.getElementById('content').innerHTML = '';\n    (0,_logic_display__WEBPACK_IMPORTED_MODULE_1__.default)(result, unit);\n  });\n};\ncurrentTab();\n\n\n//# sourceURL=webpack://Weather-js/./src/index.js?");

/***/ }),

/***/ "./src/logic/api.js":
/*!**************************!*\
  !*** ./src/logic/api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getWeather = async (city = 'Alexandria', unit = 'metric') => {\n  try {\n    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=79778be970abf18815ab93fec0ff6394`, {\n      mode: 'cors',\n    });\n    result = await result.json();\n    return result;\n  } catch (error) {\n    return getWeather();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);\n\n\n//# sourceURL=webpack://Weather-js/./src/logic/api.js?");

/***/ }),

/***/ "./src/logic/display.js":
/*!******************************!*\
  !*** ./src/logic/display.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst display = (result, unit = 'metric') => {\n  function toCelsius(f) {\n    return parseInt((5 / 9) * (f - 32), 10);\n  }\n  const content = document.querySelector('#content');\n  const container = document.querySelector('.container');\n  const name = document.createElement('h2');\n  name.className = 'name';\n  const div = document.createElement('div');\n  const temp = document.createElement('strong');\n  const img = document.createElement('img');\n  const icon = document.createElement('img');\n  name.innerHTML = result.name;\n  name.style.cssText = 'margin: 0; background-color: #FFFFF';\n  temp.innerHTML = parseInt(result.main.temp, 10);\n  temp.style.cssText = 'font-size:30px; margin-right: 5px; font-weight:500';\n  div.style.cssText = 'display: flex; align-items:center';\n  if (unit === 'metric') {\n    if (result.main.temp >= 25) {\n      container.style.cssText = 'background-size: cover; background-repeat: no-repeat; background-image: url(https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/d/1e/d1edbad6-3d14-11e8-a5b2-0bdd0b50fe9a/5acd456abcb5b.image.jpg?resize=1200%2C599)';\n    } else if (result.main.temp < 25 && result.main.temp >= 18) {\n      container.style.cssText = 'background-size: cover; background-repeat: no-repeat; background-image: url(https://wallpaperaccess.com/full/1540016.jpg)';\n    } else if (result.main.temp >= 10 && result.main.temp < 18){\n      container.style.cssText = 'background-size: cover; background-repeat: no-repeat; background-image: url(https://i.pinimg.com/originals/cb/6d/2c/cb6d2c974f71580b964c1f931e8b2aa3.jpg)';\n    } else {\n      container.style.cssText = ' background-size: cover; background-repeat: no-repeat; background-image: url(https://image.freepik.com/free-vector/winter-landscape-with-falling-snow-snowy-background_209425-650.jpg)';\n    }\n  } else {\n    if (toCelsius(result.main.temp) >= 25) {\n      container.style.cssText = 'background-size: cover; background-repeat: no-repeat; background-image: url(https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/d/1e/d1edbad6-3d14-11e8-a5b2-0bdd0b50fe9a/5acd456abcb5b.image.jpg?resize=1200%2C599)';\n    } else if (toCelsius(result.main.temp) < 25 && toCelsius(result.main.temp) >= 18) {\n      container.style.cssText = 'background-size: cover; background-repeat: no-repeat; background-image: url(https://wallpaperaccess.com/full/1540016.jpg)';\n    } else if(toCelsius(result.main.temp) >= 10 && toCelsius(result.main.temp) < 18){\n      container.style.cssText = 'background-size: cover; background-repeat: no-repeat; background-image: url(https://i.pinimg.com/originals/cb/6d/2c/cb6d2c974f71580b964c1f931e8b2aa3.jpg)';\n    } else{\n      container.style.cssText = ' background-size: cover; background-repeat: no-repeat; background-image: url(https://image.freepik.com/free-vector/winter-landscape-with-falling-snow-snowy-background_209425-650.jpg)';\n    }\n  }\n  img.src = `https://www.countryflags.io/${result.sys.country}/shiny/32.png`;\n  icon.src = `http://openweathermap.org/img/w/${result.weather[0].icon}.png`;\n  content.appendChild(name);\n  div.appendChild(temp);\n  div.appendChild(img);\n  div.appendChild(icon);\n  content.appendChild(div);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n\n//# sourceURL=webpack://Weather-js/./src/logic/display.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;