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
eval("\n\n__webpack_require__(/*! ./modules/scrollDown */ \"./src/assets/scripts/modules/scrollDown.js\");\n\n__webpack_require__(/*! ./modules/hamburger */ \"./src/assets/scripts/modules/hamburger.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbW9kdWxlcy9zY3JvbGxEb3duXCI7XHJcbmltcG9ydCBcIi4vbW9kdWxlcy9oYW1idXJnZXJcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/hamburger.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/modules/hamburger.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar hamburger = document.querySelector('.hamburger');\nvar hamburgerMenu = document.querySelector('.hamburger__menu');\nvar popup = document.getElementById('popup');\nvar body = document.querySelector('body');\n\nhamburger.addEventListener('click', function (e) {\n    if (e.target.classList.contains('hamburger__menu') || e.target.classList.contains('hamburger')) {\n        hamburgerMenu.classList.toggle('hamburger__menu--animated');\n        popup.classList.toggle('popup--active');\n        body.classList.toggle('body--without-scroll');\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9oYW1idXJnZXIuanM/ZTQ5ZCJdLCJuYW1lcyI6WyJoYW1idXJnZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYW1idXJnZXJNZW51IiwicG9wdXAiLCJnZXRFbGVtZW50QnlJZCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFlBQVlDLFNBQVNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBbEI7QUFDQSxJQUFNQyxnQkFBZ0JGLFNBQVNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQXRCO0FBQ0EsSUFBTUUsUUFBUUgsU0FBU0ksY0FBVCxDQUF3QixPQUF4QixDQUFkO0FBQ0EsSUFBTUMsT0FBT0wsU0FBU0MsYUFBVCxDQUF1QixNQUF2QixDQUFiOztBQUVBRixVQUFVTyxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxVQUFTQyxDQUFULEVBQVk7QUFDNUMsUUFBR0EsRUFBRUMsTUFBRixDQUFTQyxTQUFULENBQW1CQyxRQUFuQixDQUE0QixpQkFBNUIsS0FBa0RILEVBQUVDLE1BQUYsQ0FBU0MsU0FBVCxDQUFtQkMsUUFBbkIsQ0FBNEIsV0FBNUIsQ0FBckQsRUFBK0Y7QUFDM0ZSLHNCQUFjTyxTQUFkLENBQXdCRSxNQUF4QixDQUErQiwyQkFBL0I7QUFDQVIsY0FBTU0sU0FBTixDQUFnQkUsTUFBaEIsQ0FBdUIsZUFBdkI7QUFDQU4sYUFBS0ksU0FBTCxDQUFlRSxNQUFmLENBQXNCLHNCQUF0QjtBQUNIO0FBRUosQ0FQRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2hhbWJ1cmdlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKTtcclxuY29uc3QgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXJfX21lbnUnKTtcclxuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAnKTtcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHJcbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaGFtYnVyZ2VyX19tZW51JykgfHwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoYW1idXJnZXInKSkge1xyXG4gICAgICAgIGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaGFtYnVyZ2VyX19tZW51LS1hbmltYXRlZCcpO1xyXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC50b2dnbGUoJ3BvcHVwLS1hY3RpdmUnKTtcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2JvZHktLXdpdGhvdXQtc2Nyb2xsJyk7XHJcbiAgICB9XHJcblxyXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/hamburger.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/scrollDown.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/modules/scrollDown.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar arrowDown = document.querySelector('.scroll-down');\n\n// console.log(arrowDown)\narrowDown.addEventListener('click', function (e) {\n    e.preventDefault();\n    window.scrollTo({\n        top: window.innerHeight,\n        behavior: \"smooth\"\n    });\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zY3JvbGxEb3duLmpzPzM5NjIiXSwibmFtZXMiOlsiYXJyb3dEb3duIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiaW5uZXJIZWlnaHQiLCJiZWhhdmlvciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxZQUFZQyxTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBQWxCOztBQUVBO0FBQ0FGLFVBQVVHLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFVBQUNDLENBQUQsRUFBTTtBQUN0Q0EsTUFBRUMsY0FBRjtBQUNBQyxXQUFPQyxRQUFQLENBQWdCO0FBQ1pDLGFBQUtGLE9BQU9HLFdBREE7QUFFWkMsa0JBQVU7QUFGRSxLQUFoQjtBQUlILENBTkQiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zY3JvbGxEb3duLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXJyb3dEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbC1kb3duJylcclxuXHJcbi8vIGNvbnNvbGUubG9nKGFycm93RG93bilcclxuYXJyb3dEb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICB0b3A6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4gICAgfSk7XHJcbn0pXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/scrollDown.js\n");

/***/ })

/******/ });