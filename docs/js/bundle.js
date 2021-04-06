/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/ConsoleLogIt.js":
/*!********************************!*\
  !*** ./src/js/ConsoleLogIt.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConsoleLogIt)
/* harmony export */ });
function ConsoleLogIt(message) {
    console.log(message);
}

/***/ }),

/***/ "./src/js/GenerateTable.js":
/*!*********************************!*\
  !*** ./src/js/GenerateTable.js ***!
  \*********************************/
/***/ ((module) => {

class GenerateTable {
    generateTableHead(table, data) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
    }

    generateTable(table, data) {
        for (let element of data) {
            let row = table.insertRow();
            // console.log(element);
            let key;
            for (key in element) {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
            }
        }
    }
}
module.exports = GenerateTable;

/***/ }),

/***/ "./src/js/TestJs.js":
/*!**************************!*\
  !*** ./src/js/TestJs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestJS)
/* harmony export */ });
function TestJS() {
    console.log("Loaded");
}

/***/ }),

/***/ "./src/js/getJSON.js":
/*!***************************!*\
  !*** ./src/js/getJSON.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getJSON)
/* harmony export */ });
function getJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TestJs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestJs.js */ "./src/js/TestJs.js");
/* harmony import */ var _ConsoleLogIt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleLogIt.js */ "./src/js/ConsoleLogIt.js");
/* harmony import */ var _getJSON__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getJSON */ "./src/js/getJSON.js");



const Table = __webpack_require__(/*! ./GenerateTable */ "./src/js/GenerateTable.js");

(0,_TestJs_js__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)("", function (data) {
    console.log(data);
});

(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('http://localhost:8000/api/v1/cities',
    function(err, records) {
        if (err !== null) {
            alert('Something went wrong with the API: ' + err);
        } else {
            let table = document.querySelector("table");
            let data = Object.keys((records.data[0]));
            let dataRecords = records.data;
            let create = new Table();
            create.generateTableHead(table, data);
            create.generateTable(table, dataRecords);
        }

    });
(0,_ConsoleLogIt_js__WEBPACK_IMPORTED_MODULE_1__.default)("Everything has been generated");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL0NvbnNvbGVMb2dJdC5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL0dlbmVyYXRlVGFibGUuanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy8uL3NyYy9qcy9UZXN0SnMuanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy8uL3NyYy9qcy9nZXRKU09OLmpzIiwid2VicGFjazovL3VudGl0bGVkMTMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3VudGl0bGVkMTMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0I7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDRmdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOaUM7QUFDWTtBQUNiO0FBQ2hDLGNBQWMsbUJBQU8sQ0FBQyxrREFBaUI7O0FBRXZDLG1EQUFNO0FBQ04saURBQU87QUFDUDtBQUNBLENBQUM7O0FBRUQsaURBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMLHlEQUFZLGtDIiwiZmlsZSI6ImpzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnNvbGVMb2dJdChtZXNzYWdlKSB7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG59IiwiY2xhc3MgR2VuZXJhdGVUYWJsZSB7XG4gICAgZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpIHtcbiAgICAgICAgbGV0IHRoZWFkID0gdGFibGUuY3JlYXRlVEhlYWQoKTtcbiAgICAgICAgbGV0IHJvdyA9IHRoZWFkLmluc2VydFJvdygpO1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgZGF0YSkge1xuICAgICAgICAgICAgbGV0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShrZXkpO1xuICAgICAgICAgICAgdGguYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVUYWJsZSh0YWJsZSwgZGF0YSkge1xuICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGxldCByb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgICAgICAgbGV0IGtleTtcbiAgICAgICAgICAgIGZvciAoa2V5IGluIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlbGVtZW50W2tleV0pO1xuICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IEdlbmVyYXRlVGFibGU7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdEpTKCkge1xuICAgIGNvbnNvbGUubG9nKFwiTG9hZGVkXCIpO1xufSIsImV4cG9ydCBkZWZhdWx0ICBmdW5jdGlvbiBnZXRKU09OKHVybCwgY2FsbGJhY2spIHtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzdGF0dXMgPSB4aHIuc3RhdHVzO1xuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHhoci5yZXNwb25zZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayhzdGF0dXMsIHhoci5yZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHhoci5zZW5kKCk7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRlc3RKUyBmcm9tIFwiLi9UZXN0SnMuanNcIjtcbmltcG9ydCBDb25zb2xlTG9nSXQgZnJvbSBcIi4vQ29uc29sZUxvZ0l0LmpzXCI7XG5pbXBvcnQgZ2V0SlNPTiBmcm9tIFwiLi9nZXRKU09OXCI7XG5jb25zdCBUYWJsZSA9IHJlcXVpcmUoJy4vR2VuZXJhdGVUYWJsZScpO1xuXG5UZXN0SlMoKTtcbmdldEpTT04oXCJcIiwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbn0pO1xuXG5nZXRKU09OKCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3YxL2NpdGllcycsXG4gICAgZnVuY3Rpb24oZXJyLCByZWNvcmRzKSB7XG4gICAgICAgIGlmIChlcnIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIHRoZSBBUEk6ICcgKyBlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRhYmxlXCIpO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBPYmplY3Qua2V5cygocmVjb3Jkcy5kYXRhWzBdKSk7XG4gICAgICAgICAgICBsZXQgZGF0YVJlY29yZHMgPSByZWNvcmRzLmRhdGE7XG4gICAgICAgICAgICBsZXQgY3JlYXRlID0gbmV3IFRhYmxlKCk7XG4gICAgICAgICAgICBjcmVhdGUuZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpO1xuICAgICAgICAgICAgY3JlYXRlLmdlbmVyYXRlVGFibGUodGFibGUsIGRhdGFSZWNvcmRzKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG5Db25zb2xlTG9nSXQoXCJFdmVyeXRoaW5nIGhhcyBiZWVuIGdlbmVyYXRlZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9