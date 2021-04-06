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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/api */ \"./src/logic/api.js\");\n/* harmony import */ var _logic_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/display */ \"./src/logic/display.js\");\n\n\n\nlet unit = 'metric';\nconst content = document.querySelector('#content');\nconst input = document.querySelector('#City');\nconst btn = document.querySelector('.find');\nconst form = document.querySelector('.form');\nconst C = document.querySelector('#C');\nconst F = document.querySelector('#F');\n\nconst currentTab = async (location) => {\n  let result;\n  document.getElementById('content').innerHTML = '';\n  result = await (0,_logic_api__WEBPACK_IMPORTED_MODULE_0__.default)(location, unit)\n  ;(0,_logic_display__WEBPACK_IMPORTED_MODULE_1__.default)(result)\n  btn.addEventListener('click', async () => {\n    result = await (0,_logic_api__WEBPACK_IMPORTED_MODULE_0__.default)(input.value, unit)\n    C.checked = true;\n    F.checked = false;\n    document.getElementById('content').innerHTML = '';\n    if (result.cod == '400' || result.cod == '404') {\n      input.value = ''\n      document.querySelector('.jumbotron').style.cssText =\"background:transparent !important\"\n      document.body.style.backgroundImage = 'url(https://media3.giphy.com/media/bR9c6Kc721ylG/giphy.gif)';\n      document.body.style.backgroundRepeat = \"repeat\";\n      document.body.style.backgroundColor = \"red\";\n      form.style.display = 'none'\n      document.body.style.color = 'white'\n      input.style.color = 'black';\n    } else {\n      document.querySelector('.jumbotron').style.cssText =\"background: #EEEEEE !important\"\n      document.body.style.backgroundImage = '';\n      document.body.style.backgroundColor = \"white\";\n      form.style.display = 'block'\n      document.body.style.color = 'black'\n    }\n    (0,_logic_display__WEBPACK_IMPORTED_MODULE_1__.default)(result)\n  })\n  C.addEventListener('click', async () => {\n    unit = 'metric';\n    if (input.value !== '') {\n      result = await (0,_logic_api__WEBPACK_IMPORTED_MODULE_0__.default)(input.value, unit);\n    } else {\n      result = await (0,_logic_api__WEBPACK_IMPORTED_MODULE_0__.default)(location, unit)\n    }\n    document.getElementById('content').innerHTML = '';\n    (0,_logic_display__WEBPACK_IMPORTED_MODULE_1__.default)(result)\n  })\n  F.addEventListener('click', async () => {\n    unit = 'imperial';\n    if (input.value !== '') {\n      result = await (0,_logic_api__WEBPACK_IMPORTED_MODULE_0__.default)(input.value, unit);\n    } else {\n      result = await (0,_logic_api__WEBPACK_IMPORTED_MODULE_0__.default)(location, unit)\n    }\n    document.getElementById('content').innerHTML = '';\n    (0,_logic_display__WEBPACK_IMPORTED_MODULE_1__.default)(result)\n  })\n}\ncurrentTab()\n\n//# sourceURL=webpack://Weather-js/./src/index.js?");

/***/ }),

/***/ "./src/logic/api.js":
/*!**************************!*\
  !*** ./src/logic/api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getWeather = async (city = 'Alexandria', unit = 'metric') => {\n  \n  try {\n      let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=79778be970abf18815ab93fec0ff6394`, {\n      mode: 'cors'\n    })\n    result = await result.json()\n    return result\n  } catch (error) {\n    return getWeather()\n    }\n  }\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);\n\n//# sourceURL=webpack://Weather-js/./src/logic/api.js?");

/***/ }),

/***/ "./src/logic/display.js":
/*!******************************!*\
  !*** ./src/logic/display.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst display = (result) => {\n  const content = document.querySelector('#content');\n  const name = document.createElement('h2');\n  const div = document.createElement('div');\n  const temp = document.createElement('strong');\n  const img = document.createElement('img');\n  name.innerHTML = result.name;\n  temp.innerHTML = parseInt(result.main.temp);\n  temp.style.cssText = 'font-size:30px; margin-right: 5px; font-weight:500'\n  div.style.cssText = 'display: flex; align-items:center'\n  img.src=`https://www.countryflags.io/${result.sys.country}/shiny/32.png`\n  content.appendChild(name)\n  div.appendChild(temp)\n  div.appendChild(img)\n  content.appendChild(div)\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n\n\n//# sourceURL=webpack://Weather-js/./src/logic/display.js?");

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