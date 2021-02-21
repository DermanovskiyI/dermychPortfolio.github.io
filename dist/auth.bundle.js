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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/auth.js":
/*!************************************!*\
  !*** ./src/assets/scripts/auth.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconsole.log('auth mode loaded');\n\nvar authbtn = document.querySelector('.btn--auth');\nvar welcome = document.querySelector('.welcome__container');\n\nauthbtn.addEventListener('click', function (e) {\n    e.preventDefault();\n    if (e.target.classList.contains('btn--auth')) {\n        welcome.classList.toggle('welcome__container--rotated');\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJhdXRoYnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2VsY29tZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsUUFBUUMsR0FBUixDQUFZLGtCQUFaOztBQUdBLElBQU1DLFVBQVVDLFNBQVNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBaEI7QUFDQSxJQUFNQyxVQUFVRixTQUFTQyxhQUFULENBQXVCLHFCQUF2QixDQUFoQjs7QUFFQUYsUUFBUUksZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBU0MsQ0FBVCxFQUFZO0FBQzFDQSxNQUFFQyxjQUFGO0FBQ0EsUUFBR0QsRUFBRUUsTUFBRixDQUFTQyxTQUFULENBQW1CQyxRQUFuQixDQUE0QixXQUE1QixDQUFILEVBQTZDO0FBQ3pDTixnQkFBUUssU0FBUixDQUFrQkUsTUFBbEIsQ0FBeUIsNkJBQXpCO0FBRUg7QUFHSixDQVJEIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL2F1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnYXV0aCBtb2RlIGxvYWRlZCcpO1xyXG5cclxuXHJcbmNvbnN0IGF1dGhidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1hdXRoJyk7XHJcbmNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VsY29tZV9fY29udGFpbmVyJyk7XHJcblxyXG5hdXRoYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tLWF1dGgnKSkge1xyXG4gICAgICAgIHdlbGNvbWUuY2xhc3NMaXN0LnRvZ2dsZSgnd2VsY29tZV9fY29udGFpbmVyLS1yb3RhdGVkJylcclxuXHJcbiAgICB9XHJcbiAgXHJcblxyXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ })

/******/ });