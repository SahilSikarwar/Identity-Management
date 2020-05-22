module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    style: {
      marginTop: "1%"
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, null, __jsx("img", {
    src: "/static/Identity.png"
  }))), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, null, "Home")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
    position: "right"
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/user/new"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, null, "Add wallet")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/company/newrequest"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, null, "Add Request")))));
});

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx("div", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("link", {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
  })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), props.children));
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      centered: true,
      columns: 4
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      textAlign: "center"
    }, "User")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"], null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      route: `/user/new`
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
      style: {
        cursor: "pointer"
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      name: "plus",
      size: "large"
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Header, null, "Add Wallet"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Description, null, "Create A New User Space")))), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      route: `/user/addlicence`
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
      style: {
        cursor: "pointer"
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      name: "address card",
      size: "large"
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Header, null, "Add Licence"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Description, null, "Store Your Documents")))), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      route: `/user/request/view`
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
      style: {
        cursor: "pointer"
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      name: "tasks",
      size: "large"
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Header, null, "View Requests"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Description, null, "View Your Document Requests")))))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      textAlign: "center"
    }, "Company")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"], null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      route: `/company/newrequest`
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
      style: {
        cursor: "pointer"
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      name: "handshake",
      size: "large"
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Header, null, "Request Document Access"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Description, null, "Create New Request To Fetch User Data")))), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      route: `/company/viewrequest`
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
      style: {
        cursor: "pointer"
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      name: "folder open",
      size: "large"
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Header, null, "View Access Requests"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Description, null, "View Your Access Request List"))))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes")(); // defining different routes as per the requirement of the project


routes.add("/user/new", "/user/new").add("/user/addlicence", "/user/addlicence").add("/company/newrequest", "/company/newrequest").add("/company/viewrequest", "/company/viewrequest").add("/user/viewrequest", "/user/view").add("/company/:address", "/company/viewdocument");
module.exports = routes;

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sahil/Documents/Project/Capstone/Identity-Management/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map