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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/andynystrom/Desktop/projects/spotify-recommends/pages/index.js\";\n\n\n\nfunction Home() {\n  const {\n    0: trackPlaying,\n    1: settrackPlaying\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    async function fetchTrack() {\n      const data = await fetch('api/spotify');\n      settrackPlaying(await data.json());\n    }\n\n    fetchTrack();\n  }, []);\n  if (trackPlaying.length === 0) return 'Loading Spotify data.';\n  console.log(trackPlaying);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-1487819211\" + \" \" + \"page\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        className: \"jsx-1487819211\",\n        children: \"Now Playing on Spotify\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      className: \"jsx-1487819211\",\n      children: \"NOW PLAYING\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: trackPlaying.albumImageUrl,\n      className: \"jsx-1487819211\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {\n      className: \"jsx-1487819211\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 47\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-1487819211\" + \" \" + \"artist\",\n      children: [\"artist: \", trackPlaying.artist]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-1487819211\" + \" \" + \"title\",\n      children: [\"title: \", trackPlaying.title]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-1487819211\" + \" \" + \"album\",\n      children: [\"album: \", trackPlaying.album]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"1487819211\",\n      children: \"@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;1,400&display=swap');.page.jsx-1487819211{font-family:'Josefin Sans',sans-serif;padding:1rem;margin:1rem;}h1.jsx-1487819211{margin:1rem 0rem 1rem 0rem;}img.jsx-1487819211{width:100%;max-width:60rem;}.artist.jsx-1487819211{font-size:1.5rem;margin:1rem 0rem 1rem 0rem;}.title.jsx-1487819211{font-size:1.5rem;margin:1rem 0rem 1rem 0rem;}.album.jsx-1487819211{font-size:1.5rem;margin:1rem 0rem 1rem 0rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5bnlzdHJvbS9EZXNrdG9wL3Byb2plY3RzL3Nwb3RpZnktcmVjb21tZW5kcy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QmtCLEFBR3dILEFBQ3RFLEFBS1osQUFHaEIsQUFJTSxBQUlBLEFBSUEsV0FYRCxNQUlXLEFBSUEsQUFJQSxVQWY3QixBQUlBLFdBVGUsTUFhZixBQUlBLEFBSUEsT0FwQmMsWUFDZCIsImZpbGUiOiIvVXNlcnMvYW5keW55c3Ryb20vRGVza3RvcC9wcm9qZWN0cy9zcG90aWZ5LXJlY29tbWVuZHMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt0cmFja1BsYXlpbmcsIHNldHRyYWNrUGxheWluZ10gPSB1c2VTdGF0ZShbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVHJhY2soKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2FwaS9zcG90aWZ5JylcbiAgICAgIHNldHRyYWNrUGxheWluZyhhd2FpdCBkYXRhLmpzb24oKSlcbiAgICB9XG4gICAgZmV0Y2hUcmFjaygpO1xuICB9LCBbXSlcblxuICBpZiAodHJhY2tQbGF5aW5nLmxlbmd0aCA9PT0gMCkgcmV0dXJuICdMb2FkaW5nIFNwb3RpZnkgZGF0YS4nXG5cbiAgY29uc29sZS5sb2codHJhY2tQbGF5aW5nKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ob3cgUGxheWluZyBvbiBTcG90aWZ5PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoMT5OT1cgUExBWUlORzwvaDE+XG4gICAgICA8aW1nIHNyYz17dHJhY2tQbGF5aW5nLmFsYnVtSW1hZ2VVcmx9IC8+PGJyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdFwiPmFydGlzdDoge3RyYWNrUGxheWluZy5hcnRpc3R9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+dGl0bGU6IHt0cmFja1BsYXlpbmcudGl0bGV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsYnVtXCI+YWxidW06IHt0cmFja1BsYXlpbmcuYWxidW19PC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wYWdlIHtcbiAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbCx3Z2h0QDAsMTAwOzAsNDAwOzEsNDAwJmRpc3BsYXk9c3dhcCcpO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgbWFyZ2luOiAxcmVtIDByZW0gMXJlbSAwcmVtO1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MHJlbTtcbiAgICAgICAgfVxuICAgICAgICAuYXJ0aXN0IHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICBtYXJnaW46IDFyZW0gMHJlbSAxcmVtIDByZW07XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICBtYXJnaW46IDFyZW0gMHJlbSAxcmVtIDByZW07XG4gICAgICAgIH1cbiAgICAgICAgLmFsYnVtIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICBtYXJnaW46IDFyZW0gMHJlbSAxcmVtIDByZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2RpdiA+XG4gIClcbn1cbiJdfQ== */\\n/*@ sourceURL=/Users/andynystrom/Desktop/projects/spotify-recommends/pages/index.js */\"\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJ0cmFja1BsYXlpbmciLCJzZXR0cmFja1BsYXlpbmciLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoVHJhY2siLCJkYXRhIiwiZmV0Y2giLCJqc29uIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImFsYnVtSW1hZ2VVcmwiLCJhcnRpc3QiLCJ0aXRsZSIsImFsYnVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0IsUUFBTTtBQUFBLE9BQUNDLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsbUJBQWVDLFVBQWYsR0FBNEI7QUFDMUIsWUFBTUMsSUFBSSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxhQUFELENBQXhCO0FBQ0FMLHFCQUFlLENBQUMsTUFBTUksSUFBSSxDQUFDRSxJQUFMLEVBQVAsQ0FBZjtBQUNEOztBQUNESCxjQUFVO0FBQ1gsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLE1BQUlKLFlBQVksQ0FBQ1EsTUFBYixLQUF3QixDQUE1QixFQUErQixPQUFPLHVCQUFQO0FBRS9CQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVYsWUFBWjtBQUVBLHNCQUNFO0FBQUEsd0NBQWUsTUFBZjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFO0FBQUssU0FBRyxFQUFFQSxZQUFZLENBQUNXLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFLMEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMMUMsZUFNRTtBQUFBLDBDQUFlLFFBQWY7QUFBQSw2QkFBaUNYLFlBQVksQ0FBQ1ksTUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFPRTtBQUFBLDBDQUFlLE9BQWY7QUFBQSw0QkFBK0JaLFlBQVksQ0FBQ2EsS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFRRTtBQUFBLDBDQUFlLE9BQWY7QUFBQSw0QkFBK0JiLFlBQVksQ0FBQ2MsS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1Q0QiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3RyYWNrUGxheWluZywgc2V0dHJhY2tQbGF5aW5nXSA9IHVzZVN0YXRlKFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUcmFjaygpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnYXBpL3Nwb3RpZnknKVxuICAgICAgc2V0dHJhY2tQbGF5aW5nKGF3YWl0IGRhdGEuanNvbigpKVxuICAgIH1cbiAgICBmZXRjaFRyYWNrKCk7XG4gIH0sIFtdKVxuXG4gIGlmICh0cmFja1BsYXlpbmcubGVuZ3RoID09PSAwKSByZXR1cm4gJ0xvYWRpbmcgU3BvdGlmeSBkYXRhLidcblxuICBjb25zb2xlLmxvZyh0cmFja1BsYXlpbmcpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk5vdyBQbGF5aW5nIG9uIFNwb3RpZnk8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGgxPk5PVyBQTEFZSU5HPC9oMT5cbiAgICAgIDxpbWcgc3JjPXt0cmFja1BsYXlpbmcuYWxidW1JbWFnZVVybH0gLz48YnIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0XCI+YXJ0aXN0OiB7dHJhY2tQbGF5aW5nLmFydGlzdH08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj50aXRsZToge3RyYWNrUGxheWluZy50aXRsZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxidW1cIj5hbGJ1bToge3RyYWNrUGxheWluZy5hbGJ1bX08L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FuczppdGFsLHdnaHRAMCwxMDA7MCw0MDA7MSw0MDAmZGlzcGxheT1zd2FwJyk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBtYXJnaW46IDFyZW0gMHJlbSAxcmVtIDByZW07XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5hcnRpc3Qge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIG1hcmdpbjogMXJlbSAwcmVtIDFyZW0gMHJlbTtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIG1hcmdpbjogMXJlbSAwcmVtIDFyZW0gMHJlbTtcbiAgICAgICAgfVxuICAgICAgICAuYWxidW0ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIG1hcmdpbjogMXJlbSAwcmVtIDFyZW0gMHJlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2ID5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

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