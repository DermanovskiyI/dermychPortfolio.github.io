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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/blog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/blog.js":
/*!************************************!*\
  !*** ./src/assets/scripts/blog.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/scrollDown */ \"./src/assets/scripts/modules/scrollDown.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbW9kdWxlcy9zY3JvbGxEb3duXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/scrollDown.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/modules/scrollDown.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar arrowDown = document.querySelector('.scroll-down');\n\n// console.log(arrowDown)\narrowDown.addEventListener('click', function (e) {\n    e.preventDefault();\n    window.scrollTo({\n        top: 1000,\n        behavior: \"smooth\"\n    });\n});\n\n// const scrollBtn = document.getElementById('scroll-btn');\n\n// scrollBtn.addEventListener('click', () => {\n//     window.scrollTo({\n//         top: 0,\n//         behavior: \"smooth\"\n//     });\n// })\n// document.addEventListener('scroll', () => {\n//     const currentCoords = window.pageYOffset;\n//     const coordWhileShowBtn = 100;\n//     if (currentCoords > coordWhileShowBtn) {\n//         scrollBtn.classList.remove('scroll--hidden');\n//     } else {\n//         scrollBtn.classList.add('scroll--hidden');\n//     }\n\n// })\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zY3JvbGxEb3duLmpzPzM5NjIiXSwibmFtZXMiOlsiYXJyb3dEb3duIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsWUFBWUMsU0FBU0MsYUFBVCxDQUF1QixjQUF2QixDQUFsQjs7QUFFQTtBQUNBRixVQUFVRyxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxVQUFDQyxDQUFELEVBQU07QUFDdENBLE1BQUVDLGNBQUY7QUFDQUMsV0FBT0MsUUFBUCxDQUFnQjtBQUNaQyxhQUFJLElBRFE7QUFFWkMsa0JBQVU7QUFGRSxLQUFoQjtBQUlILENBTkQ7O0FBU0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3Njcm9sbERvd24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcnJvd0Rvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLWRvd24nKVxyXG5cclxuLy8gY29uc29sZS5sb2coYXJyb3dEb3duKVxyXG5hcnJvd0Rvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgIHRvcDoxMDAwLFxyXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICB9KTtcclxufSlcclxuXHJcblxyXG4vLyBjb25zdCBzY3JvbGxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Nyb2xsLWJ0bicpO1xyXG5cclxuLy8gc2Nyb2xsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuLy8gICAgICAgICB0b3A6IDAsXHJcbi8vICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcclxuLy8gICAgIH0pO1xyXG4vLyB9KVxyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbi8vICAgICBjb25zdCBjdXJyZW50Q29vcmRzID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4vLyAgICAgY29uc3QgY29vcmRXaGlsZVNob3dCdG4gPSAxMDA7XHJcbi8vICAgICBpZiAoY3VycmVudENvb3JkcyA+IGNvb3JkV2hpbGVTaG93QnRuKSB7XHJcbi8vICAgICAgICAgc2Nyb2xsQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC0taGlkZGVuJyk7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgIHNjcm9sbEJ0bi5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtLWhpZGRlbicpO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gfSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/scrollDown.js\n");

/***/ })

/******/ });