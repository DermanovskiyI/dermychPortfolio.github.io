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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/about.js":
/*!*************************************!*\
  !*** ./src/assets/scripts/about.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/example */ \"./src/assets/scripts/modules/example.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYWJvdXQuanM/ZDdmNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL2Fib3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9tb2R1bGVzL2V4YW1wbGVcIjtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/about.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/example.js":
/*!***********************************************!*\
  !*** ./src/assets/scripts/modules/example.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nymaps.ready(init);\n\nfunction init() {\n    var myMap = new ymaps.Map(\"map\", {\n        center: [55.99025818, 37.21285228],\n        zoom: 12,\n        controls: ['zoomControl', 'searchControl']\n    }, {\n        searchControlProvider: 'yandex#search'\n    }),\n\n\n    // Создаем геообъект с типом геометрии \"Точка\".\n    myGeoObject = new ymaps.GeoObject({\n        // Описание геометрии.\n        geometry: {\n            type: \"Point\",\n            coordinates: [55.99025818, 37.21285228]\n        }\n\n    }, {\n        // Опции.\n        // Иконка метки будет растягиваться под размер ее содержимого.\n        preset: 'islands#blackStretchyIcon',\n        // Метку можно перемещать.\n        draggable: true\n    });\n\n    myMap.geoObjects.add(new ymaps.Placemark([55.99025818, 37.21285228], {\n        balloonContent: 'ЗДАРОВА',\n        iconCaption: 'АГА'\n    }, {\n        preset: 'islands#blueCircleDotIconWithCaption',\n        iconCaptionMaxWidth: '500'\n    }));\n\n    myMap.behaviors\n    // Отключаем выключенное поведение:\n    //  - scrollZoom - зум по скроллу\n    .disable(['scrollZoom']);\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9leGFtcGxlLmpzP2VhMzYiXSwibmFtZXMiOlsieW1hcHMiLCJyZWFkeSIsImluaXQiLCJteU1hcCIsIk1hcCIsImNlbnRlciIsInpvb20iLCJjb250cm9scyIsInNlYXJjaENvbnRyb2xQcm92aWRlciIsIm15R2VvT2JqZWN0IiwiR2VvT2JqZWN0IiwiZ2VvbWV0cnkiLCJ0eXBlIiwiY29vcmRpbmF0ZXMiLCJwcmVzZXQiLCJkcmFnZ2FibGUiLCJnZW9PYmplY3RzIiwiYWRkIiwiUGxhY2VtYXJrIiwiYmFsbG9vbkNvbnRlbnQiLCJpY29uQ2FwdGlvbiIsImljb25DYXB0aW9uTWF4V2lkdGgiLCJiZWhhdmlvcnMiLCJkaXNhYmxlIl0sIm1hcHBpbmdzIjoiOztBQUNBQSxNQUFNQyxLQUFOLENBQVlDLElBQVo7O0FBR0EsU0FBU0EsSUFBVCxHQUFnQjtBQUNaLFFBQUlDLFFBQVEsSUFBSUgsTUFBTUksR0FBVixDQUFjLEtBQWQsRUFBcUI7QUFDekJDLGdCQUFRLENBQUMsV0FBRCxFQUFjLFdBQWQsQ0FEaUI7QUFFekJDLGNBQU0sRUFGbUI7QUFHekJDLGtCQUFVLENBQUMsYUFBRCxFQUFnQixlQUFoQjtBQUhlLEtBQXJCLEVBSUw7QUFDQ0MsK0JBQXVCO0FBRHhCLEtBSkssQ0FBWjs7O0FBUUE7QUFDSUMsa0JBQWMsSUFBSVQsTUFBTVUsU0FBVixDQUFvQjtBQUM5QjtBQUNBQyxrQkFBVTtBQUNOQyxrQkFBTSxPQURBO0FBRU5DLHlCQUFhLENBQUMsV0FBRCxFQUFjLFdBQWQ7QUFGUDs7QUFGb0IsS0FBcEIsRUFPWDtBQUNDO0FBQ0E7QUFDQUMsZ0JBQVEsMkJBSFQ7QUFJQztBQUNBQyxtQkFBVztBQUxaLEtBUFcsQ0FUbEI7O0FBeUJBWixVQUFNYSxVQUFOLENBRUtDLEdBRkwsQ0FFUyxJQUFJakIsTUFBTWtCLFNBQVYsQ0FBb0IsQ0FBQyxXQUFELEVBQWMsV0FBZCxDQUFwQixFQUFnRDtBQUNqREMsd0JBQWdCLFNBRGlDO0FBRWpEQyxxQkFBYTtBQUZvQyxLQUFoRCxFQUdGO0FBQ0NOLGdCQUFRLHNDQURUO0FBRUNPLDZCQUFxQjtBQUZ0QixLQUhFLENBRlQ7O0FBV0lsQixVQUFNbUI7QUFDTjtBQUNBO0FBRkEsS0FHQ0MsT0FIRCxDQUdTLENBQUMsWUFBRCxDQUhUO0FBSVAiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9leGFtcGxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnltYXBzLnJlYWR5KGluaXQpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwibWFwXCIsIHtcclxuICAgICAgICAgICAgY2VudGVyOiBbNTUuOTkwMjU4MTgsIDM3LjIxMjg1MjI4XSxcclxuICAgICAgICAgICAgem9vbTogMTIsXHJcbiAgICAgICAgICAgIGNvbnRyb2xzOiBbJ3pvb21Db250cm9sJywgJ3NlYXJjaENvbnRyb2wnXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc2VhcmNoQ29udHJvbFByb3ZpZGVyOiAneWFuZGV4I3NlYXJjaCdcclxuICAgICAgICB9KSxcclxuXHJcbiAgICAvLyDQodC+0LfQtNCw0LXQvCDQs9C10L7QvtCx0YrQtdC60YIg0YEg0YLQuNC/0L7QvCDQs9C10L7QvNC10YLRgNC40LggXCLQotC+0YfQutCwXCIuXHJcbiAgICAgICAgbXlHZW9PYmplY3QgPSBuZXcgeW1hcHMuR2VvT2JqZWN0KHtcclxuICAgICAgICAgICAgLy8g0J7Qv9C40YHQsNC90LjQtSDQs9C10L7QvNC10YLRgNC40LguXHJcbiAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXHJcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogWzU1Ljk5MDI1ODE4LCAzNy4yMTI4NTIyOF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAvLyDQntC/0YbQuNC4LlxyXG4gICAgICAgICAgICAvLyDQmNC60L7QvdC60LAg0LzQtdGC0LrQuCDQsdGD0LTQtdGCINGA0LDRgdGC0Y/Qs9C40LLQsNGC0YzRgdGPINC/0L7QtCDRgNCw0LfQvNC10YAg0LXQtSDRgdC+0LTQtdGA0LbQuNC80L7Qs9C+LlxyXG4gICAgICAgICAgICBwcmVzZXQ6ICdpc2xhbmRzI2JsYWNrU3RyZXRjaHlJY29uJyxcclxuICAgICAgICAgICAgLy8g0JzQtdGC0LrRgyDQvNC+0LbQvdC+INC/0LXRgNC10LzQtdGJ0LDRgtGMLlxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgIFxyXG5cclxuICAgIG15TWFwLmdlb09iamVjdHNcclxuXHJcbiAgICAgICAgLmFkZChuZXcgeW1hcHMuUGxhY2VtYXJrKFs1NS45OTAyNTgxOCwgMzcuMjEyODUyMjhdLCB7XHJcbiAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiAn0JfQlNCQ0KDQntCS0JAnLFxyXG4gICAgICAgICAgICBpY29uQ2FwdGlvbjogJ9CQ0JPQkCdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHByZXNldDogJ2lzbGFuZHMjYmx1ZUNpcmNsZURvdEljb25XaXRoQ2FwdGlvbicsXHJcbiAgICAgICAgICAgIGljb25DYXB0aW9uTWF4V2lkdGg6ICc1MDAnXHJcbiAgICAgICAgfSkpO1xyXG5cclxuXHJcbiAgICAgICAgbXlNYXAuYmVoYXZpb3JzXHJcbiAgICAgICAgLy8g0J7RgtC60LvRjtGH0LDQtdC8INCy0YvQutC70Y7Rh9C10L3QvdC+0LUg0L/QvtCy0LXQtNC10L3QuNC1OlxyXG4gICAgICAgIC8vICAtIHNjcm9sbFpvb20gLSDQt9GD0Lwg0L/QviDRgdC60YDQvtC70LvRg1xyXG4gICAgICAgIC5kaXNhYmxlKFsnc2Nyb2xsWm9vbSddKVxyXG59XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/example.js\n");

/***/ })

/******/ });