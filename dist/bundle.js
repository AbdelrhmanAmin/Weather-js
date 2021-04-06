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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/api */ \"./src/logic/api.js\");\n\n\n(0,_logic_api__WEBPACK_IMPORTED_MODULE_0__.default)()\n\n//# sourceURL=webpack://Weather-js/./src/index.js?");

/***/ }),

/***/ "./src/logic/api.js":
/*!**************************!*\
  !*** ./src/logic/api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getWeather = async (city = 'Alexandria') => {\n  const content = document.querySelector('#content');\n  const input = document.querySelector('#City');\n  const btn = document.querySelector('.find');\n  const C = document.querySelector('#C');\n  const F = document.querySelector('#F');\n  const name = document.createElement('h1');\n  const temp = document.createElement('strong')\n  let result;\n  btn.addEventListener('click', async () => {\n    city = input.value;\n    C.checked = true;\n    F.checked = false;\n    result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=79778be970abf18815ab93fec0ff6394`, {\n      mode: 'cors'\n    })\n    result = await result.json()\n    name.innerHTML = result.name;\n    temp.innerHTML = parseInt(result.main.temp);\n    content.appendChild(name)\n    content.appendChild(temp)\n  })\n  if (result === undefined) {\n        result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=79778be970abf18815ab93fec0ff6394`, {\n      mode: 'cors'\n    })\n    result = await result.json()\n    name.innerHTML = result.name;\n    temp.innerHTML = parseInt(result.main.temp);\n    content.appendChild(name)\n    content.appendChild(temp)\n  }\n  C.addEventListener('click', () => {\n    let formula = (parseInt(result.main.temp) * 1.8 ) + 32;\n    console.log(formula, temp.innerHTML, 'C', result.main)\n    if (C.checked === true && parseInt(temp.innerHTML) === parseInt(formula)) {\n      temp.innerHTML = parseInt((temp.innerHTML - 32) / 1.8);\n      content.appendChild(temp)\n    }\n  })\n  F.addEventListener('click', () => {\n    let formula = (parseInt(result.main.temp) * 1.8 ) + 32;\n    if (F.checked === true && parseInt(temp.innerHTML) !== parseInt(formula)) {\n      console.log(formula, temp.innerHTML, \"F\",  result.main)\n      temp.innerHTML = (parseInt(result.main.temp) * 1.8) + 32;\n      content.appendChild(temp)\n    }\n  })\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);\n\n//# sourceURL=webpack://Weather-js/./src/logic/api.js?");

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