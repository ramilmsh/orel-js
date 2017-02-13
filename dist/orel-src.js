var O =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

"using strict";
"use strict";
var Browser = (function () {
    function Browser(a) {
    }
    Browser.prototype.render = function () { };
    return Browser;
}());
var Scene = (function () {
    function Scene() {
    }
    return Scene;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Browser;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Ajax = (function () {
    function Ajax() {
    }
    /**
     * Interface to make requests to server
     * @param request: Request
     * @param request.url -> url to access the server API
     * @param request.qs -> object containing set of parameters
     * @param request.at -> parameters to add after "@"
     * @param request.q -> custom request after "?"
     *
     * @param request.success -> callback to execute upon success
     * @param request.error -> callback to execute upon error
     * @returns void
     */
    Ajax.ajax = function (request) {
        var XHR = new XMLHttpRequest(), url = request.url;
        if (request.hasOwnProperty("at"))
            url += '@' + request.at.join(",");
        if (request.hasOwnProperty("qs")) {
            url += '?';
            for (var key in request.qs)
                if (key[0] !== '_')
                    url += key + '=' + request.qs[key] + '&';
            url = url.slice(0, url.length - 1);
        }
        else if (request.hasOwnProperty("q"))
            url += '?' + request.q;
        XHR.onreadystatechange = function () {
            if (XHR.readyState === XMLHttpRequest.DONE) {
                if (XHR.status === 200)
                    request.success && request.success(JSON.parse(XHR.responseText));
                else
                    request.error && request.error(XHR);
            }
        };
        XHR.open("GET", url, true);
        XHR.send();
    };
    return Ajax;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Ajax;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

"using strict";
"use strict";
var Logger = (function () {
    function Logger() {
    }
    Logger.prototype.print = function (message) {
        this.log(message);
        console.log(message.msg);
    };
    Logger.prototype.warn = function (message) {
        this.log(message);
        console.warn(message.msg);
    };
    Logger.prototype.error = function (message) {
        this.log(message);
        console.error(message.msg);
    };
    Logger.prototype.log = function (message) {
        this.cache.push(message);
    };
    return Logger;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Logger;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"using strict";
"use strict";
var browser_1 = __webpack_require__(0);
exports.Browser = browser_1.default;
var logger_1 = __webpack_require__(2);
var ajax_1 = __webpack_require__(1);
var Utils = {
    Logger: logger_1.default,
    Ajax: ajax_1.default
};
exports.Utils = Utils;


/***/ })
/******/ ]);
//# sourceMappingURL=orel-src.js.map