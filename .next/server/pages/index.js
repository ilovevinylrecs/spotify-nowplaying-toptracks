module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/andynystrom/Desktop/projects/spotify-nowplaying-toptracks/pages/index.js\";\n\n\nfunction Home() {\n  const {\n    0: nowPlaying,\n    1: setnowPlaying\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]);\n  const {\n    0: topTen,\n    1: settopTen\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    async function fetchTrack() {\n      const data = await fetch('api/now-playing');\n      setnowPlaying(await data.json());\n    }\n\n    fetchTrack();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    async function fetchtopTen() {\n      const data = await fetch('api/top-tracks');\n      settopTen(await data.json());\n    }\n\n    fetchtopTen();\n  }, []);\n  if (nowPlaying.length === 0) return 'not currently listening';\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-3543732323\" + \" \" + \"page\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-3543732323\" + \" \" + \"now_playing\",\n      children: \"NOW PLAYING\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: nowPlaying.albumImageUrl,\n      className: \"jsx-3543732323\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {\n      className: \"jsx-3543732323\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 45\n    }, this), \"artist:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-3543732323\" + \" \" + \"text\",\n      children: nowPlaying.artist\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }, this), \"title:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-3543732323\" + \" \" + \"text\",\n      children: nowPlaying.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }, this), \"album:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-3543732323\" + \" \" + \"text\",\n      children: nowPlaying.album\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-3543732323\" + \" \" + \"top_tracks\",\n      children: \"Top Tracks\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"3543732323\",\n      children: \".page.jsx-3543732323{font-family:monospace;padding:1rem;margin:1rem 1rem 0rem 2rem;}img.jsx-3543732323{width:75%;max-width:40rem;margin:0rem 0rem 1rem 0rem;}.now_playing.jsx-3543732323{font-size:2rem;font-weight:bold;margin:2rem 0rem 2rem 0rem;}.top_tracks.jsx-3543732323{font-size:2rem;font-weight:bold;margin:3rem 0rem 2rem 0rem;}.text.jsx-3543732323{font-size:1rem;font-weight:bold;margin:0.5rem 0rem 1rem 0rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5bnlzdHJvbS9EZXNrdG9wL3Byb2plY3RzL3Nwb3RpZnktbm93cGxheWluZy10b3B0cmFja3MvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENrQixBQUdpQyxBQUtaLEFBS0ssQUFLQSxBQUtBLFVBZEMsS0FLQyxBQUtBLEFBS0EsT0FwQkosSUFPaEIsTUFJOEIsQUFLQSxBQUtFLEdBbkJoQyxrQkFLQyxNQUtBLEFBS0EsRUFLQSxDQXBCQSIsImZpbGUiOiIvVXNlcnMvYW5keW55c3Ryb20vRGVza3RvcC9wcm9qZWN0cy9zcG90aWZ5LW5vd3BsYXlpbmctdG9wdHJhY2tzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtub3dQbGF5aW5nLCBzZXRub3dQbGF5aW5nXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbdG9wVGVuLCBzZXR0b3BUZW5dID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFRyYWNrKCkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdhcGkvbm93LXBsYXlpbmcnKVxuICAgICAgc2V0bm93UGxheWluZyhhd2FpdCBkYXRhLmpzb24oKSlcbiAgICB9XG4gICAgZmV0Y2hUcmFjaygpO1xuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNodG9wVGVuKCkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdhcGkvdG9wLXRyYWNrcycpXG4gICAgICBzZXR0b3BUZW4oYXdhaXQgZGF0YS5qc29uKCkpXG4gICAgfVxuICAgIGZldGNodG9wVGVuKCk7XG4gIH0sIFtdKVxuXG4gIGlmIChub3dQbGF5aW5nLmxlbmd0aCA9PT0gMCkgcmV0dXJuICdub3QgY3VycmVudGx5IGxpc3RlbmluZydcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vd19wbGF5aW5nXCI+XG4gICAgICAgIE5PVyBQTEFZSU5HXG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbWcgc3JjPXtub3dQbGF5aW5nLmFsYnVtSW1hZ2VVcmx9IC8+PGJyIC8+XG4gICAgICAgIGFydGlzdDogXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPntub3dQbGF5aW5nLmFydGlzdH08L2Rpdj5cbiAgICAgICAgdGl0bGU6IFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj57bm93UGxheWluZy50aXRsZX08L2Rpdj5cbiAgICAgICAgYWxidW06IFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj57bm93UGxheWluZy5hbGJ1bX08L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BfdHJhY2tzXCI+VG9wIFRyYWNrczwvZGl2PlxuXG5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucGFnZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgIG1hcmdpbjogMXJlbSAxcmVtIDByZW0gMnJlbVxuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwcmVtO1xuICAgICAgICAgIG1hcmdpbjogMHJlbSAwcmVtIDFyZW0gMHJlbVxuICAgICAgICB9XG4gICAgICAgIC5ub3dfcGxheWluZyB7XG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIG1hcmdpbjogMnJlbSAwcmVtIDJyZW0gMHJlbTtcbiAgICAgICAgfVxuICAgICAgICAudG9wX3RyYWNrcyB7XG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIG1hcmdpbjogM3JlbSAwcmVtIDJyZW0gMHJlbTtcbiAgICAgICAgfVxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIG1hcmdpbjogMC41cmVtIDByZW0gMXJlbSAwcmVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\\n/*@ sourceURL=/Users/andynystrom/Desktop/projects/spotify-nowplaying-toptracks/pages/index.js */\"\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJub3dQbGF5aW5nIiwic2V0bm93UGxheWluZyIsInVzZVN0YXRlIiwidG9wVGVuIiwic2V0dG9wVGVuIiwidXNlRWZmZWN0IiwiZmV0Y2hUcmFjayIsImRhdGEiLCJmZXRjaCIsImpzb24iLCJmZXRjaHRvcFRlbiIsImxlbmd0aCIsImFsYnVtSW1hZ2VVcmwiLCJhcnRpc3QiLCJ0aXRsZSIsImFsYnVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLHNEQUFRLENBQUMsRUFBRCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkYsc0RBQVEsQ0FBQyxFQUFELENBQXBDO0FBRUFHLHlEQUFTLENBQUMsTUFBTTtBQUNkLG1CQUFlQyxVQUFmLEdBQTRCO0FBQzFCLFlBQU1DLElBQUksR0FBRyxNQUFNQyxLQUFLLENBQUMsaUJBQUQsQ0FBeEI7QUFDQVAsbUJBQWEsQ0FBQyxNQUFNTSxJQUFJLENBQUNFLElBQUwsRUFBUCxDQUFiO0FBQ0Q7O0FBQ0RILGNBQVU7QUFDWCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUFELHlEQUFTLENBQUMsTUFBTTtBQUNkLG1CQUFlSyxXQUFmLEdBQTZCO0FBQzNCLFlBQU1ILElBQUksR0FBRyxNQUFNQyxLQUFLLENBQUMsZ0JBQUQsQ0FBeEI7QUFDQUosZUFBUyxDQUFDLE1BQU1HLElBQUksQ0FBQ0UsSUFBTCxFQUFQLENBQVQ7QUFDRDs7QUFDREMsZUFBVztBQUNaLEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQSxNQUFJVixVQUFVLENBQUNXLE1BQVgsS0FBc0IsQ0FBMUIsRUFBNkIsT0FBTyx5QkFBUDtBQUU3QixzQkFFRTtBQUFBLHdDQUFlLE1BQWY7QUFBQSw0QkFDRTtBQUFBLDBDQUFlLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUssU0FBRyxFQUFFWCxVQUFVLENBQUNZLGFBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFJd0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKeEMsMEJBTUk7QUFBQSwwQ0FBZSxNQUFmO0FBQUEsZ0JBQXVCWixVQUFVLENBQUNhO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSix5QkFRSTtBQUFBLDBDQUFlLE1BQWY7QUFBQSxnQkFBdUJiLFVBQVUsQ0FBQ2M7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKLHlCQVVJO0FBQUEsMENBQWUsTUFBZjtBQUFBLGdCQUF1QmQsVUFBVSxDQUFDZTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkosZUFZRTtBQUFBLDBDQUFlLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRjtBQWdERCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtub3dQbGF5aW5nLCBzZXRub3dQbGF5aW5nXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbdG9wVGVuLCBzZXR0b3BUZW5dID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFRyYWNrKCkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdhcGkvbm93LXBsYXlpbmcnKVxuICAgICAgc2V0bm93UGxheWluZyhhd2FpdCBkYXRhLmpzb24oKSlcbiAgICB9XG4gICAgZmV0Y2hUcmFjaygpO1xuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNodG9wVGVuKCkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdhcGkvdG9wLXRyYWNrcycpXG4gICAgICBzZXR0b3BUZW4oYXdhaXQgZGF0YS5qc29uKCkpXG4gICAgfVxuICAgIGZldGNodG9wVGVuKCk7XG4gIH0sIFtdKVxuXG4gIGlmIChub3dQbGF5aW5nLmxlbmd0aCA9PT0gMCkgcmV0dXJuICdub3QgY3VycmVudGx5IGxpc3RlbmluZydcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vd19wbGF5aW5nXCI+XG4gICAgICAgIE5PVyBQTEFZSU5HXG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbWcgc3JjPXtub3dQbGF5aW5nLmFsYnVtSW1hZ2VVcmx9IC8+PGJyIC8+XG4gICAgICAgIGFydGlzdDogXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPntub3dQbGF5aW5nLmFydGlzdH08L2Rpdj5cbiAgICAgICAgdGl0bGU6IFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj57bm93UGxheWluZy50aXRsZX08L2Rpdj5cbiAgICAgICAgYWxidW06IFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj57bm93UGxheWluZy5hbGJ1bX08L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BfdHJhY2tzXCI+VG9wIFRyYWNrczwvZGl2PlxuXG5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucGFnZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgIG1hcmdpbjogMXJlbSAxcmVtIDByZW0gMnJlbVxuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwcmVtO1xuICAgICAgICAgIG1hcmdpbjogMHJlbSAwcmVtIDFyZW0gMHJlbVxuICAgICAgICB9XG4gICAgICAgIC5ub3dfcGxheWluZyB7XG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIG1hcmdpbjogMnJlbSAwcmVtIDJyZW0gMHJlbTtcbiAgICAgICAgfVxuICAgICAgICAudG9wX3RyYWNrcyB7XG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIG1hcmdpbjogM3JlbSAwcmVtIDJyZW0gMHJlbTtcbiAgICAgICAgfVxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIG1hcmdpbjogMC41cmVtIDByZW0gMXJlbSAwcmVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });