module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(47);


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Row__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var PageNotFound = function (_Component) {
  _inherits(PageNotFound, _Component);

  function PageNotFound() {
    _classCallCheck(this, PageNotFound);

    return _possibleConstructorReturn(this, (PageNotFound.__proto__ || Object.getPrototypeOf(PageNotFound)).apply(this, arguments));
  }

  _createClass(PageNotFound, [{
    key: 'render',
    value: function render() {

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-3629116385' + ' ' + 'PageNotFound container'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', {
          className: 'jsx-3629116385' + ' ' + 'confetti'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'h3',
            {
              className: 'jsx-3629116385' + ' ' + 'col-xs-12 col-sm-12 col-md-12 col-lg-offset-3 col-lg-6 col-xl-6'
            },
            'Oops, nothing here!'
          ) }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'p',
            {
              className: 'jsx-3629116385' + ' ' + 'col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6'
            },
            'Feel free to chill out, or ',
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
              { prefetch: true, href: '/' },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'a',
                {
                  className: 'jsx-3629116385'
                },
                'head back to the home page.',
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { style: { content: '', display: 'block', height: 8, width: '98%', background: 'rgba(139, 200, 246, 0.565)', marginTop: -9, marginLeft: 2 }, className: 'jsx-3629116385'
                })
              )
            )
          ) }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3629116385',
          css: ['.PageNotFound.jsx-3629116385{height:100vh;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;background-color:rgba(255,255,255,0.6),;}', '.confetti.jsx-3629116385{position:absolute;top:0;left:0;height:100%;width:100%;background:url(\'../static/media/confetti.svg\');background-size:cover;z-index:-1;opacity:.55;}']
        })
      );
    }
  }]);

  return PageNotFound;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PageNotFound);

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Row = function (_Component) {
  _inherits(Row, _Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  _createClass(Row, [{
    key: 'render',
    value: function render() {

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: this.props.className + " row" },
        this.props.content
      );
    }
  }]);

  return Row;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Row.defaultProps = {
  content: {},
  className: ""
};


/* harmony default export */ __webpack_exports__["a"] = (Row);

/***/ })

/******/ });