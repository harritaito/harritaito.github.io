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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-inlinesvg");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 5 */
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

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMV9fXy0xNDEyMDk0MzkxIiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDkuMjUgNS42OSI+PHRpdGxlPmFycm93LXNsaW08L3RpdGxlPjxwb2x5Z29uIHBvaW50cz0iNi44MSAyLjg2IDQuODUgNC45NyA0LjMzIDQuNDkgNS42IDMuMTIgMC4zOCAzLjEyIDAuMzggMi4zNyA1LjYgMi4zNyA0LjQyIDEuMDkgNC45NCAwLjYxIDYuODEgMi42MiA2LjgxIDIuODYiPjwvcG9seWdvbj48L3N2Zz4="

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-inlinesvg"
var external__react_inlinesvg_ = __webpack_require__(3);
var external__react_inlinesvg__default = /*#__PURE__*/__webpack_require__.n(external__react_inlinesvg_);

// EXTERNAL MODULE: ./static/media/social/dribbble.svg
var dribbble = __webpack_require__(12);
var dribbble_default = /*#__PURE__*/__webpack_require__.n(dribbble);

// EXTERNAL MODULE: ./static/media/social/github.svg
var github = __webpack_require__(13);
var github_default = /*#__PURE__*/__webpack_require__.n(github);

// EXTERNAL MODULE: ./static/media/social/twitter.svg
var twitter = __webpack_require__(14);
var twitter_default = /*#__PURE__*/__webpack_require__.n(twitter);

// EXTERNAL MODULE: ./static/media/social/medium.svg
var medium = __webpack_require__(15);
var medium_default = /*#__PURE__*/__webpack_require__.n(medium);

// EXTERNAL MODULE: ./static/media/social/linkedin.svg
var linkedin = __webpack_require__(16);
var linkedin_default = /*#__PURE__*/__webpack_require__.n(linkedin);

// EXTERNAL MODULE: ./static/media/social/instagram.svg
var instagram = __webpack_require__(17);
var instagram_default = /*#__PURE__*/__webpack_require__.n(instagram);

// CONCATENATED MODULE: ./components/Social.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Social_Social = function (_Component) {
  _inherits(Social, _Component);

  function Social() {
    _classCallCheck(this, Social);

    return _possibleConstructorReturn(this, (Social.__proto__ || Object.getPrototypeOf(Social)).apply(this, arguments));
  }

  _createClass(Social, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'p',
        {
          className: 'jsx-1874601048' + ' ' + 'col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 social'
        },
        external__react__default.a.createElement(
          'a',
          { href: 'http://dribbble.com/harritaito', rel: 'noopener noreferrer', target: '_blank', id: 'dribbble', className: 'jsx-1874601048'
          },
          external__react__default.a.createElement(
            'span',
            {
              className: 'jsx-1874601048' + ' ' + 'isvg loaded'
            },
            external__react__default.a.createElement(
              'svg',
              { xmlns: 'http://www.w3.org/2000/svg', width: '2500', height: '2500', viewBox: '0 0 1000 1000', className: 'jsx-1874601048'
              },
              external__react__default.a.createElement('path', { d: 'M0 500c0-90.667 22.334-174.333 67-251 44.667-76.667 105.334-137.333 182-182C325.667 22.333 409.334 0 500 0c90.667 0 174.334 22.333 251 67 76.667 44.667 137.334 105.333 182 182 44.667 76.667 67 160.333 67 251s-22.333 174.333-67 251c-44.666 76.667-105.333 137.333-182 182-76.666 44.667-160.333 67-251 67-90.666 0-174.333-22.333-251-67-76.666-44.667-137.333-105.333-182-182C22.334 674.333 0 590.667 0 500zm83 0c0 104 35 195.667 105 275 32-62.667 82.667-122.333 152-179 69.334-56.667 137-92.333 203-107-10-23.333-19.666-44.333-29-63-114.666 36.667-238.666 55-372 55-26 0-45.333-.333-58-1 0 2.667-.166 6-.5 10-.333 4-.5 7.333-.5 10zm13-103c14.667 1.333 36.334 2 65 2 111.334 0 217-15 317-45-50.666-90-106.333-165-167-225-52.666 26.667-97.833 63.667-135.5 111-37.666 47.333-64.166 99.667-79.5 157zm149 432c75.334 58.667 160.334 88 255 88 49.334 0 98.334-9.333 147-28-13.333-114-39.333-224.333-78-331-61.333 13.333-123.166 47-185.5 101C321.167 713 275 769.667 245 829zM398 97c58.667 60.667 113 136.333 163 227 90.667-38 159-86.333 205-145-77.333-64-166-96-266-96-34 0-68 4.667-102 14zm199 298c10 21.333 21.334 48.333 34 81 49.334-4.667 103-7 161-7 41.334 0 82.334 1 123 3-5.333-90.667-38-171.333-98-242-43.333 64.667-116.666 119.667-220 165zm59 151c34 98.667 57 200 69 304 52.667-34 95.667-77.667 129-131 33.334-53.333 53.334-111 60-173-48.666-3.333-93-5-133-5-36.666 0-78.333 1.667-125 5z', className: 'jsx-1874601048'
              })
            )
          )
        ),
        external__react__default.a.createElement(
          'a',
          { href: 'http://github.com/harritaito', rel: 'noopener noreferrer', target: '_blank', id: 'github', className: 'jsx-1874601048'
          },
          external__react__default.a.createElement(
            'span',
            {
              className: 'jsx-1874601048' + ' ' + 'isvg loaded'
            },
            external__react__default.a.createElement(
              'svg',
              { version: '1.1', id: 'Capa_1___1024855102', xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px', width: '438.549px', height: '438.549px', viewBox: '0 0 438.549 438.549', className: 'jsx-1874601048'
              },
              external__react__default.a.createElement('path', { d: 'M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996\t\tc2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906C438.536,184.851,428.728,148.168,409.132,114.573z', className: 'jsx-1874601048'
              })
            )
          )
        ),
        external__react__default.a.createElement(
          'a',
          { href: 'http://twitter.com/harritaito', rel: 'noopener noreferrer', target: '_blank', id: 'twitter', className: 'jsx-1874601048'
          },
          external__react__default.a.createElement(
            'span',
            {
              className: 'jsx-1874601048' + ' ' + 'isvg loaded'
            },
            external__react__default.a.createElement(
              'svg',
              { version: '1.1', id: 'Capa_1___618110062', xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px', viewBox: '0 0 612 612', className: 'jsx-1874601048'
              },
              external__react__default.a.createElement('path', { d: 'M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z', className: 'jsx-1874601048'
              })
            )
          )
        ),
        external__react__default.a.createElement(
          'a',
          { href: 'http://linkedin.com/in/harrihalonen', rel: 'noopener noreferrer', target: '_blank', id: 'linkedin', className: 'jsx-1874601048'
          },
          external__react__default.a.createElement(
            'span',
            {
              className: 'jsx-1874601048' + ' ' + 'isvg loaded'
            },
            external__react__default.a.createElement(
              'svg',
              { version: '1.1', id: 'Capa_1___1651385545', xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px', width: '430.117px', height: '430.117px', viewBox: '0 0 430.117 430.117', className: 'jsx-1874601048'
              },
              external__react__default.a.createElement('path', { id: 'LinkedIn___1651385545', d: 'M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558zM5.477,420.56h92.184v-277.32H5.477V420.56z', className: 'jsx-1874601048'
              })
            )
          )
        ),
        external__react__default.a.createElement(
          'a',
          { href: 'https://medium.com/@harrihalonen', rel: 'noopener noreferrer', target: '_blank', id: 'medium', className: 'jsx-1874601048'
          },
          external__react__default.a.createElement(
            'span',
            {
              className: 'jsx-1874601048' + ' ' + 'isvg loaded'
            },
            external__react__default.a.createElement(
              'svg',
              { width: '195px', height: '195px', viewBox: '0 0 195 195', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', className: 'jsx-1874601048'
              },
              external__react__default.a.createElement('rect', { id: 'medium-rectangle___-1074724007', fill: '#12100E', x: '0', y: '0', width: '195', height: '195', className: 'jsx-1874601048'
              }),
              external__react__default.a.createElement('path', { d: 'M46.5340803,65.2157554 C46.6968378,63.6076572 46.0836,62.018231 44.8828198,60.93592 L32.6512605,46.2010582 L32.6512605,44 L70.6302521,44 L99.9859944,108.380952 L125.794585,44 L162,44 L162,46.2010582 L151.542017,56.2281011 C150.640424,56.9153477 150.193188,58.0448862 150.380019,59.1628454 L150.380019,132.837155 C150.193188,133.955114 150.640424,135.084652 151.542017,135.771899 L161.755369,145.798942 L161.755369,148 L110.38282,148 L110.38282,145.798942 L120.963119,135.527337 C122.002801,134.487948 122.002801,134.182246 122.002801,132.592593 L122.002801,73.0417402 L92.585901,147.755438 L88.6106443,147.755438 L54.3622782,73.0417402 L54.3622782,123.115814 C54.0767278,125.221069 54.7759199,127.3406 56.2581699,128.863022 L70.0186741,145.55438 L70.0186741,147.755438 L31,147.755438 L31,145.55438 L44.7605042,128.863022 C46.2319621,127.338076 46.8903838,125.204485 46.5340803,123.115814 L46.5340803,65.2157554 Z', id: 'Shape___-1074724007', fill: '#FFFFFF', className: 'jsx-1874601048'
              })
            )
          )
        ),
        external__react__default.a.createElement(
          'a',
          { href: 'https://instagram.com/harritaito', rel: 'noopener noreferrer', target: '_blank', id: 'instagram', className: 'jsx-1874601048'
          },
          external__react__default.a.createElement(
            'span',
            {
              className: 'jsx-1874601048' + ' ' + 'isvg loaded'
            },
            external__react__default.a.createElement(
              'svg',
              { width: '504px', height: '504px', viewBox: '0 0 504 504', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', className: 'jsx-1874601048'
              },
              external__react__default.a.createElement('path', { d: 'M252,45.471 C319.266,45.471 327.233,45.727 353.797,46.939 C378.359,48.06 391.698,52.164 400.576,55.613 C412.334,60.183 420.727,65.643 429.542,74.458 C438.357,83.273 443.817,91.666 448.386,103.424 C451.836,112.302 455.94,125.641 457.061,150.202 C458.273,176.767 458.529,184.734 458.529,252 C458.529,319.266 458.273,327.233 457.061,353.797 C455.94,378.359 451.836,391.698 448.386,400.576 C443.817,412.334 438.357,420.727 429.542,429.542 C420.727,438.357 412.334,443.817 400.576,448.386 C391.698,451.836 378.359,455.94 353.797,457.061 C327.237,458.273 319.27,458.529 252,458.529 C184.73,458.529 176.763,458.273 150.203,457.061 C125.641,455.94 112.302,451.836 103.425,448.386 C91.666,443.817 83.273,438.357 74.458,429.542 C65.643,420.727 60.183,412.334 55.614,400.576 C52.164,391.698 48.06,378.359 46.939,353.798 C45.727,327.233 45.471,319.266 45.471,252 C45.471,184.734 45.727,176.767 46.939,150.203 C48.06,125.641 52.164,112.302 55.614,103.424 C60.183,91.666 65.643,83.273 74.458,74.458 C83.273,65.643 91.666,60.183 103.425,55.613 C112.302,52.164 125.641,48.06 150.202,46.939 C176.767,45.727 184.734,45.471 252,45.471 M252,0.079 C183.582,0.079 175.004,0.369 148.134,1.595 C121.319,2.819 103.007,7.077 86.982,13.305 C70.416,19.743 56.367,28.357 42.362,42.362 C28.357,56.367 19.743,70.416 13.305,86.982 C7.077,103.007 2.819,121.319 1.595,148.134 C0.369,175.003 0.08,183.582 0.08,252 C0.08,320.418 0.369,328.997 1.595,355.866 C2.819,382.681 7.077,400.993 13.305,417.018 C19.743,433.583 28.357,447.633 42.362,461.638 C56.367,475.643 70.416,484.257 86.982,490.695 C103.007,496.923 121.319,501.181 148.134,502.405 C175.004,503.631 183.582,503.92 252,503.92 C320.418,503.92 328.997,503.631 355.866,502.405 C382.681,501.181 400.993,496.923 417.018,490.695 C433.584,484.257 447.633,475.643 461.638,461.638 C475.643,447.633 484.257,433.584 490.695,417.018 C496.923,400.993 501.181,382.681 502.405,355.866 C503.631,328.997 503.921,320.418 503.921,252 C503.921,183.582 503.631,175.003 502.405,148.134 C501.181,121.319 496.923,103.007 490.695,86.982 C484.257,70.416 475.643,56.367 461.638,42.362 C447.633,28.357 433.584,19.743 417.018,13.305 C400.993,7.077 382.681,2.819 355.866,1.595 C328.997,0.369 320.418,0.079 252,0.079', id: 'Fill-1___-1790076780', className: 'jsx-1874601048'
              }),
              external__react__default.a.createElement('path', { d: 'M252,122.635 C180.554,122.635 122.635,180.554 122.635,252 C122.635,323.446 180.554,381.365 252,381.365 C323.446,381.365 381.365,323.446 381.365,252 C381.365,180.554 323.446,122.635 252,122.635 Z M252,335.974 C205.623,335.974 168.026,298.377 168.026,252 C168.026,205.623 205.623,168.026 252,168.026 C298.377,168.026 335.974,205.623 335.974,252 C335.974,298.377 298.377,335.974 252,335.974 L252,335.974 Z', id: 'Fill-2___-1790076780', className: 'jsx-1874601048'
              }),
              external__react__default.a.createElement('path', { d: 'M416.706,117.524 C416.706,134.22 403.172,147.755 386.476,147.755 C369.78,147.755 356.245,134.22 356.245,117.524 C356.245,100.828 369.78,87.294 386.476,87.294 C403.172,87.294 416.706,100.828 416.706,117.524', id: 'Fill-3___-1790076780', className: 'jsx-1874601048'
              })
            )
          )
        ),
        external__react__default.a.createElement(style__default.a, {
          styleId: '1874601048',
          css: ['.social.jsx-1874601048{text-align:right;}', '.social.jsx-1874601048 a.jsx-1874601048{text-decoration:none;}', '.social.jsx-1874601048 a.jsx-1874601048::after{display:none;}', '.social.jsx-1874601048 svg.jsx-1874601048{width:20px;height:20px;fill:#1F1E1E;margin-left:.75em;}', '.social.jsx-1874601048 path.jsx-1874601048,footer.jsx-1874601048 .social.jsx-1874601048 rect.jsx-1874601048{-webkit-transition:fill .4s ease;-o-transition:fill .4s ease;-webkit-transition:fill .4s ease;transition:fill .4s ease;}', '#resume.jsx-1874601048 svg.jsx-1874601048:hover{fill:#8C7AE5;}', '#dribbble.jsx-1874601048 svg.jsx-1874601048:hover{fill:#ea4c89;}', '#github.jsx-1874601048 svg.jsx-1874601048:hover{fill:#9d7bf2;}', '#medium.jsx-1874601048 svg.jsx-1874601048:hover rect.jsx-1874601048{fill:#00ab6c !important;}', '#twitter.jsx-1874601048 svg.jsx-1874601048:hover{fill:rgb(29,161,242);}', '#linkedin.jsx-1874601048 svg.jsx-1874601048:hover{fill:#0077B5;}', '#instagram.jsx-1874601048 svg.jsx-1874601048:hover{fill:#e95950;}', '#untappd.jsx-1874601048 svg.jsx-1874601048:hover{fill:#ffcc09;}', '#mal.jsx-1874601048 svg.jsx-1874601048:hover{fill:#2D50A1;}', '@media only screen and (max-width:575px){.social.jsx-1874601048{text-align:center;}}']
        })
      );
    }
  }]);

  return Social;
}(external__react_["Component"]);

/* harmony default export */ var components_Social = (Social_Social);
// CONCATENATED MODULE: ./components/Footer.js




var Footer_Footer = function Footer() {
  return external__react__default.a.createElement(
    "footer",
    {
      className: "jsx-1987340185" + " " + "row footer"
    },
    external__react__default.a.createElement(
      "p",
      {
        className: "jsx-1987340185" + " " + "col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"
      },
      "Made with \u231A by Harri"
    ),
    external__react__default.a.createElement(components_Social, null),
    external__react__default.a.createElement(style__default.a, {
      styleId: "1987340185",
      css: [".footer.jsx-1987340185{margin-top:5em;}", "@media only screen and (max-width:575px){.footer.jsx-1987340185{text-align:center;}}"]
    })
  );
};

/* harmony default export */ var components_Footer = __webpack_exports__["a"] = (Footer_Footer);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAwIiBoZWlnaHQ9IjI1MDAiIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wIDUwMGMwLTkwLjY2NyAyMi4zMzQtMTc0LjMzMyA2Ny0yNTEgNDQuNjY3LTc2LjY2NyAxMDUuMzM0LTEzNy4zMzMgMTgyLTE4MkMzMjUuNjY3IDIyLjMzMyA0MDkuMzM0IDAgNTAwIDBjOTAuNjY3IDAgMTc0LjMzNCAyMi4zMzMgMjUxIDY3IDc2LjY2NyA0NC42NjcgMTM3LjMzNCAxMDUuMzMzIDE4MiAxODIgNDQuNjY3IDc2LjY2NyA2NyAxNjAuMzMzIDY3IDI1MXMtMjIuMzMzIDE3NC4zMzMtNjcgMjUxYy00NC42NjYgNzYuNjY3LTEwNS4zMzMgMTM3LjMzMy0xODIgMTgyLTc2LjY2NiA0NC42NjctMTYwLjMzMyA2Ny0yNTEgNjctOTAuNjY2IDAtMTc0LjMzMy0yMi4zMzMtMjUxLTY3LTc2LjY2Ni00NC42NjctMTM3LjMzMy0xMDUuMzMzLTE4Mi0xODJDMjIuMzM0IDY3NC4zMzMgMCA1OTAuNjY3IDAgNTAwem04MyAwYzAgMTA0IDM1IDE5NS42NjcgMTA1IDI3NSAzMi02Mi42NjcgODIuNjY3LTEyMi4zMzMgMTUyLTE3OSA2OS4zMzQtNTYuNjY3IDEzNy05Mi4zMzMgMjAzLTEwNy0xMC0yMy4zMzMtMTkuNjY2LTQ0LjMzMy0yOS02My0xMTQuNjY2IDM2LjY2Ny0yMzguNjY2IDU1LTM3MiA1NS0yNiAwLTQ1LjMzMy0uMzMzLTU4LTEgMCAyLjY2Ny0uMTY2IDYtLjUgMTAtLjMzMyA0LS41IDcuMzMzLS41IDEwem0xMy0xMDNjMTQuNjY3IDEuMzMzIDM2LjMzNCAyIDY1IDIgMTExLjMzNCAwIDIxNy0xNSAzMTctNDUtNTAuNjY2LTkwLTEwNi4zMzMtMTY1LTE2Ny0yMjUtNTIuNjY2IDI2LjY2Ny05Ny44MzMgNjMuNjY3LTEzNS41IDExMS0zNy42NjYgNDcuMzMzLTY0LjE2NiA5OS42NjctNzkuNSAxNTd6bTE0OSA0MzJjNzUuMzM0IDU4LjY2NyAxNjAuMzM0IDg4IDI1NSA4OCA0OS4zMzQgMCA5OC4zMzQtOS4zMzMgMTQ3LTI4LTEzLjMzMy0xMTQtMzkuMzMzLTIyNC4zMzMtNzgtMzMxLTYxLjMzMyAxMy4zMzMtMTIzLjE2NiA0Ny0xODUuNSAxMDFDMzIxLjE2NyA3MTMgMjc1IDc2OS42NjcgMjQ1IDgyOXpNMzk4IDk3YzU4LjY2NyA2MC42NjcgMTEzIDEzNi4zMzMgMTYzIDIyNyA5MC42NjctMzggMTU5LTg2LjMzMyAyMDUtMTQ1LTc3LjMzMy02NC0xNjYtOTYtMjY2LTk2LTM0IDAtNjggNC42NjctMTAyIDE0em0xOTkgMjk4YzEwIDIxLjMzMyAyMS4zMzQgNDguMzMzIDM0IDgxIDQ5LjMzNC00LjY2NyAxMDMtNyAxNjEtNyA0MS4zMzQgMCA4Mi4zMzQgMSAxMjMgMy01LjMzMy05MC42NjctMzgtMTcxLjMzMy05OC0yNDItNDMuMzMzIDY0LjY2Ny0xMTYuNjY2IDExOS42NjctMjIwIDE2NXptNTkgMTUxYzM0IDk4LjY2NyA1NyAyMDAgNjkgMzA0IDUyLjY2Ny0zNCA5NS42NjctNzcuNjY3IDEyOS0xMzEgMzMuMzM0LTUzLjMzMyA1My4zMzQtMTExIDYwLTE3My00OC42NjYtMy4zMzMtOTMtNS0xMzMtNS0zNi42NjYgMC03OC4zMzMgMS42NjctMTI1IDV6Ij48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4="

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzFfX18xMDI0ODU1MTAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDM4LjU0OXB4IiBoZWlnaHQ9IjQzOC41NDlweCIgdmlld0JveD0iMCAwIDQzOC41NDkgNDM4LjU0OSI+DQoJPHBhdGggZD0iTTQwOS4xMzIsMTE0LjU3M2MtMTkuNjA4LTMzLjU5Ni00Ni4yMDUtNjAuMTk0LTc5Ljc5OC03OS44QzI5NS43MzYsMTUuMTY2LDI1OS4wNTcsNS4zNjUsMjE5LjI3MSw1LjM2NWMtMzkuNzgxLDAtNzYuNDcyLDkuODA0LTExMC4wNjMsMjkuNDA4Yy0zMy41OTYsMTkuNjA1LTYwLjE5Miw0Ni4yMDQtNzkuOCw3OS44QzkuODAzLDE0OC4xNjgsMCwxODQuODU0LDAsMjI0LjYzYzAsNDcuNzgsMTMuOTQsOTAuNzQ1LDQxLjgyNywxMjguOTA2YzI3Ljg4NCwzOC4xNjQsNjMuOTA2LDY0LjU3MiwxMDguMDYzLDc5LjIyN2M1LjE0LDAuOTU0LDguOTQ1LDAuMjgzLDExLjQxOS0xLjk5NgkJYzIuNDc1LTIuMjgyLDMuNzExLTUuMTQsMy43MTEtOC41NjJjMC0wLjU3MS0wLjA0OS01LjcwOC0wLjE0NC0xNS40MTdjLTAuMDk4LTkuNzA5LTAuMTQ0LTE4LjE3OS0wLjE0NC0yNS40MDZsLTYuNTY3LDEuMTM2Yy00LjE4NywwLjc2Ny05LjQ2OSwxLjA5Mi0xNS44NDYsMWMtNi4zNzQtMC4wODktMTIuOTkxLTAuNzU3LTE5Ljg0Mi0xLjk5OWMtNi44NTQtMS4yMzEtMTMuMjI5LTQuMDg2LTE5LjEzLTguNTU5Yy01Ljg5OC00LjQ3My0xMC4wODUtMTAuMzI4LTEyLjU2LTE3LjU1NmwtMi44NTUtNi41N2MtMS45MDMtNC4zNzQtNC44OTktOS4yMzMtOC45OTItMTQuNTU5Yy00LjA5My01LjMzMS04LjIzMi04Ljk0NS0xMi40MTktMTAuODQ4bC0xLjk5OS0xLjQzMWMtMS4zMzItMC45NTEtMi41NjgtMi4wOTgtMy43MTEtMy40MjljLTEuMTQyLTEuMzMxLTEuOTk3LTIuNjYzLTIuNTY4LTMuOTk3Yy0wLjU3Mi0xLjMzNS0wLjA5OC0yLjQzLDEuNDI3LTMuMjg5YzEuNTI1LTAuODU5LDQuMjgxLTEuMjc2LDguMjgtMS4yNzZsNS43MDgsMC44NTNjMy44MDcsMC43NjMsOC41MTYsMy4wNDIsMTQuMTMzLDYuODUxYzUuNjE0LDMuODA2LDEwLjIyOSw4Ljc1NCwxMy44NDYsMTQuODQyYzQuMzgsNy44MDYsOS42NTcsMTMuNzU0LDE1Ljg0NiwxNy44NDdjNi4xODQsNC4wOTMsMTIuNDE5LDYuMTM2LDE4LjY5OSw2LjEzNmM2LjI4LDAsMTEuNzA0LTAuNDc2LDE2LjI3NC0xLjQyM2M0LjU2NS0wLjk1Miw4Ljg0OC0yLjM4MywxMi44NDctNC4yODVjMS43MTMtMTIuNzU4LDYuMzc3LTIyLjU1OSwxMy45ODgtMjkuNDFjLTEwLjg0OC0xLjE0LTIwLjYwMS0yLjg1Ny0yOS4yNjQtNS4xNGMtOC42NTgtMi4yODYtMTcuNjA1LTUuOTk2LTI2LjgzNS0xMS4xNGMtOS4yMzUtNS4xMzctMTYuODk2LTExLjUxNi0yMi45ODUtMTkuMTI2Yy02LjA5LTcuNjE0LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc5Yy0zLjkwMS0xMi4zNzQtNS44NTItMjYuNjQ4LTUuODUyLTQyLjgyNmMwLTIzLjAzNSw3LjUyLTQyLjYzNywyMi41NTctNTguODE3Yy03LjA0NC0xNy4zMTgtNi4zNzktMzYuNzMyLDEuOTk3LTU4LjI0YzUuNTItMS43MTUsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1M2MxMC44NSw0LjI4MywxOC43OTQsNy45NTIsMjMuODQsMTAuOTk0YzUuMDQ2LDMuMDQxLDkuMDg5LDUuNjE4LDEyLjEzNSw3LjcwOGMxNy43MDUtNC45NDcsMzUuOTc2LTcuNDIxLDU0LjgxOC03LjQyMXMzNy4xMTcsMi40NzQsNTQuODIzLDcuNDIxbDEwLjg0OS02Ljg0OWM3LjQxOS00LjU3LDE2LjE4LTguNzU4LDI2LjI2Mi0xMi41NjVjMTAuMDg4LTMuODA1LDE3LjgwMi00Ljg1MywyMy4xMzQtMy4xMzhjOC41NjIsMjEuNTA5LDkuMzI1LDQwLjkyMiwyLjI3OSw1OC4yNGMxNS4wMzYsMTYuMTgsMjIuNTU5LDM1Ljc4NywyMi41NTksNTguODE3YzAsMTYuMTc4LTEuOTU4LDMwLjQ5Ny01Ljg1Myw0Mi45NjZjLTMuOSwxMi40NzEtOC45NDEsMjIuNDU3LTE1LjEyNSwyOS45NzljLTYuMTkxLDcuNTIxLTEzLjkwMSwxMy44NS0yMy4xMzEsMTguOTg2Yy05LjIzMiw1LjE0LTE4LjE4Miw4Ljg1LTI2Ljg0LDExLjEzNmMtOC42NjIsMi4yODYtMTguNDE1LDQuMDA0LTI5LjI2Myw1LjE0NmM5Ljg5NCw4LjU2MiwxNC44NDIsMjIuMDc3LDE0Ljg0Miw0MC41Mzl2NjAuMjM3YzAsMy40MjIsMS4xOSw2LjI3OSwzLjU3Miw4LjU2MmMyLjM3OSwyLjI3OSw2LjEzNiwyLjk1LDExLjI3NiwxLjk5NWM0NC4xNjMtMTQuNjUzLDgwLjE4NS00MS4wNjIsMTA4LjA2OC03OS4yMjZjMjcuODgtMzguMTYxLDQxLjgyNS04MS4xMjYsNDEuODI1LTEyOC45MDZDNDM4LjUzNiwxODQuODUxLDQyOC43MjgsMTQ4LjE2OCw0MDkuMTMyLDExNC41NzN6Ij48L3BhdGg+DQo8L3N2Zz4="

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzFfX182MTgxMTAwNjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2MTIgNjEyIj4NCgkJPHBhdGggZD0iTTYxMiwxMTYuMjU4Yy0yMi41MjUsOS45ODEtNDYuNjk0LDE2Ljc1LTcyLjA4OCwxOS43NzJjMjUuOTI5LTE1LjUyNyw0NS43NzctNDAuMTU1LDU1LjE4NC02OS40MTFjLTI0LjMyMiwxNC4zNzktNTEuMTY5LDI0LjgyLTc5Ljc3NSwzMC40OGMtMjIuOTA3LTI0LjQzNy01NS40OS0zOS42NTgtOTEuNjMtMzkuNjU4Yy02OS4zMzQsMC0xMjUuNTUxLDU2LjIxNy0xMjUuNTUxLDEyNS41MTNjMCw5LjgyOCwxLjEwOSwxOS40MjcsMy4yNTEsMjguNjA2QzE5Ny4wNjUsMjA2LjMyLDEwNC41NTYsMTU2LjMzNyw0Mi42NDEsODAuMzg2Yy0xMC44MjMsMTguNTEtMTYuOTgsNDAuMDc4LTE2Ljk4LDYzLjEwMWMwLDQzLjU1OSwyMi4xODEsODEuOTkzLDU1LjgzNSwxMDQuNDc5Yy0yMC41NzUtMC42ODgtMzkuOTI2LTYuMzQ4LTU2Ljg2Ny0xNS43NTZ2MS41NjhjMCw2MC44MDYsNDMuMjkxLDExMS41NTQsMTAwLjY5MywxMjMuMTA0Yy0xMC41MTcsMi44My0yMS42MDcsNC4zOTgtMzMuMDgsNC4zOThjLTguMTA3LDAtMTUuOTQ3LTAuODAzLTIzLjYzNC0yLjMzM2MxNS45ODUsNDkuOTA3LDYyLjMzNiw4Ni4xOTksMTE3LjI1Myw4Ny4xOTRjLTQyLjk0NywzMy42NTQtOTcuMDk5LDUzLjY1NS0xNTUuOTE2LDUzLjY1NWMtMTAuMTM0LDAtMjAuMTE2LTAuNjEyLTI5Ljk0NC0xLjcyMWM1NS41NjcsMzUuNjgxLDEyMS41MzYsNTYuNDg1LDE5Mi40MzgsNTYuNDg1YzIzMC45NDgsMCwzNTcuMTg4LTE5MS4yOTEsMzU3LjE4OC0zNTcuMTg4bC0wLjQyMS0xNi4yNTNDNTczLjg3MiwxNjMuNTI2LDU5NS4yMTEsMTQxLjQyMiw2MTIsMTE2LjI1OHoiPjwvcGF0aD4NCjwvc3ZnPg=="

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTk1cHgiIGhlaWdodD0iMTk1cHgiIHZpZXdCb3g9IjAgMCAxOTUgMTk1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0ibWVkaXVtLXJlY3RhbmdsZV9fXy0xMDc0NzI0MDA3IiBmaWxsPSIjMTIxMDBFIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTk1IiBoZWlnaHQ9IjE5NSI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ2LjUzNDA4MDMsNjUuMjE1NzU1NCBDNDYuNjk2ODM3OCw2My42MDc2NTcyIDQ2LjA4MzYsNjIuMDE4MjMxIDQ0Ljg4MjgxOTgsNjAuOTM1OTIgTDMyLjY1MTI2MDUsNDYuMjAxMDU4MiBMMzIuNjUxMjYwNSw0NCBMNzAuNjMwMjUyMSw0NCBMOTkuOTg1OTk0NCwxMDguMzgwOTUyIEwxMjUuNzk0NTg1LDQ0IEwxNjIsNDQgTDE2Miw0Ni4yMDEwNTgyIEwxNTEuNTQyMDE3LDU2LjIyODEwMTEgQzE1MC42NDA0MjQsNTYuOTE1MzQ3NyAxNTAuMTkzMTg4LDU4LjA0NDg4NjIgMTUwLjM4MDAxOSw1OS4xNjI4NDU0IEwxNTAuMzgwMDE5LDEzMi44MzcxNTUgQzE1MC4xOTMxODgsMTMzLjk1NTExNCAxNTAuNjQwNDI0LDEzNS4wODQ2NTIgMTUxLjU0MjAxNywxMzUuNzcxODk5IEwxNjEuNzU1MzY5LDE0NS43OTg5NDIgTDE2MS43NTUzNjksMTQ4IEwxMTAuMzgyODIsMTQ4IEwxMTAuMzgyODIsMTQ1Ljc5ODk0MiBMMTIwLjk2MzExOSwxMzUuNTI3MzM3IEMxMjIuMDAyODAxLDEzNC40ODc5NDggMTIyLjAwMjgwMSwxMzQuMTgyMjQ2IDEyMi4wMDI4MDEsMTMyLjU5MjU5MyBMMTIyLjAwMjgwMSw3My4wNDE3NDAyIEw5Mi41ODU5MDEsMTQ3Ljc1NTQzOCBMODguNjEwNjQ0MywxNDcuNzU1NDM4IEw1NC4zNjIyNzgyLDczLjA0MTc0MDIgTDU0LjM2MjI3ODIsMTIzLjExNTgxNCBDNTQuMDc2NzI3OCwxMjUuMjIxMDY5IDU0Ljc3NTkxOTksMTI3LjM0MDYgNTYuMjU4MTY5OSwxMjguODYzMDIyIEw3MC4wMTg2NzQxLDE0NS41NTQzOCBMNzAuMDE4Njc0MSwxNDcuNzU1NDM4IEwzMSwxNDcuNzU1NDM4IEwzMSwxNDUuNTU0MzggTDQ0Ljc2MDUwNDIsMTI4Ljg2MzAyMiBDNDYuMjMxOTYyMSwxMjcuMzM4MDc2IDQ2Ljg5MDM4MzgsMTI1LjIwNDQ4NSA0Ni41MzQwODAzLDEyMy4xMTU4MTQgTDQ2LjUzNDA4MDMsNjUuMjE1NzU1NCBaIiBpZD0iU2hhcGVfX18tMTA3NDcyNDAwNyIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICA8L3N2Zz4="

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzFfX18xNjUxMzg1NTQ1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcieD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI0MzAuMTE3cHgiIGhlaWdodD0iNDMwLjExN3B4IiB2aWV3Qm94PSIwIDAgNDMwLjExNyA0MzAuMTE3Ij4NCgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggaWQ9IkxpbmtlZEluX19fMTY1MTM4NTU0NSIgZD0iTTQzMC4xMTcsMjYxLjU0M1Y0MjAuNTZoLTkyLjE4OFYyNzIuMTkzYzAtMzcuMjcxLTEzLjMzNC02Mi43MDctNDYuNzAzLTYyLjcwN2MtMjUuNDczLDAtNDAuNjMyLDE3LjE0Mi00Ny4zMDEsMzMuNzI0Yy0yLjQzMiw1LjkyOC0zLjA1OCwxNC4xNzktMy4wNTgsMjIuNDc3VjQyMC41NmgtOTIuMjE5YzAsMCwxLjI0Mi0yNTEuMjg1LDAtMjc3LjMyaDkyLjIxdjM5LjMwOWMtMC4xODcsMC4yOTQtMC40MywwLjYxMS0wLjYwNiwwLjg5NmgwLjYwNnYtMC44OTZjMTIuMjUxLTE4Ljg2OSwzNC4xMy00NS44MjQsODMuMTAyLTQ1LjgyNEMzODQuNjMzLDEzNi43MjQsNDMwLjExNywxNzYuMzYxLDQzMC4xMTcsMjYxLjU0M3ogTTUyLjE4Myw5LjU1OEMyMC42MzUsOS41NTgsMCwzMC4yNTEsMCw1Ny40NjNjMCwyNi42MTksMjAuMDM4LDQ3Ljk0LDUwLjk1OSw0Ny45NGgwLjYxNmMzMi4xNTksMCw1Mi4xNTktMjEuMzE3LDUyLjE1OS00Ny45NEMxMDMuMTI4LDMwLjI1MSw4My43MzQsOS41NTgsNTIuMTgzLDkuNTU4ek01LjQ3Nyw0MjAuNTZoOTIuMTg0di0yNzcuMzJINS40NzdWNDIwLjU2eiI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+"

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0cHgiIGhlaWdodD0iNTA0cHgiIHZpZXdCb3g9IjAgMCA1MDQgNTA0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUyLDQ1LjQ3MSBDMzE5LjI2Niw0NS40NzEgMzI3LjIzMyw0NS43MjcgMzUzLjc5Nyw0Ni45MzkgQzM3OC4zNTksNDguMDYgMzkxLjY5OCw1Mi4xNjQgNDAwLjU3Niw1NS42MTMgQzQxMi4zMzQsNjAuMTgzIDQyMC43MjcsNjUuNjQzIDQyOS41NDIsNzQuNDU4IEM0MzguMzU3LDgzLjI3MyA0NDMuODE3LDkxLjY2NiA0NDguMzg2LDEwMy40MjQgQzQ1MS44MzYsMTEyLjMwMiA0NTUuOTQsMTI1LjY0MSA0NTcuMDYxLDE1MC4yMDIgQzQ1OC4yNzMsMTc2Ljc2NyA0NTguNTI5LDE4NC43MzQgNDU4LjUyOSwyNTIgQzQ1OC41MjksMzE5LjI2NiA0NTguMjczLDMyNy4yMzMgNDU3LjA2MSwzNTMuNzk3IEM0NTUuOTQsMzc4LjM1OSA0NTEuODM2LDM5MS42OTggNDQ4LjM4Niw0MDAuNTc2IEM0NDMuODE3LDQxMi4zMzQgNDM4LjM1Nyw0MjAuNzI3IDQyOS41NDIsNDI5LjU0MiBDNDIwLjcyNyw0MzguMzU3IDQxMi4zMzQsNDQzLjgxNyA0MDAuNTc2LDQ0OC4zODYgQzM5MS42OTgsNDUxLjgzNiAzNzguMzU5LDQ1NS45NCAzNTMuNzk3LDQ1Ny4wNjEgQzMyNy4yMzcsNDU4LjI3MyAzMTkuMjcsNDU4LjUyOSAyNTIsNDU4LjUyOSBDMTg0LjczLDQ1OC41MjkgMTc2Ljc2Myw0NTguMjczIDE1MC4yMDMsNDU3LjA2MSBDMTI1LjY0MSw0NTUuOTQgMTEyLjMwMiw0NTEuODM2IDEwMy40MjUsNDQ4LjM4NiBDOTEuNjY2LDQ0My44MTcgODMuMjczLDQzOC4zNTcgNzQuNDU4LDQyOS41NDIgQzY1LjY0Myw0MjAuNzI3IDYwLjE4Myw0MTIuMzM0IDU1LjYxNCw0MDAuNTc2IEM1Mi4xNjQsMzkxLjY5OCA0OC4wNiwzNzguMzU5IDQ2LjkzOSwzNTMuNzk4IEM0NS43MjcsMzI3LjIzMyA0NS40NzEsMzE5LjI2NiA0NS40NzEsMjUyIEM0NS40NzEsMTg0LjczNCA0NS43MjcsMTc2Ljc2NyA0Ni45MzksMTUwLjIwMyBDNDguMDYsMTI1LjY0MSA1Mi4xNjQsMTEyLjMwMiA1NS42MTQsMTAzLjQyNCBDNjAuMTgzLDkxLjY2NiA2NS42NDMsODMuMjczIDc0LjQ1OCw3NC40NTggQzgzLjI3Myw2NS42NDMgOTEuNjY2LDYwLjE4MyAxMDMuNDI1LDU1LjYxMyBDMTEyLjMwMiw1Mi4xNjQgMTI1LjY0MSw0OC4wNiAxNTAuMjAyLDQ2LjkzOSBDMTc2Ljc2Nyw0NS43MjcgMTg0LjczNCw0NS40NzEgMjUyLDQ1LjQ3MSBNMjUyLDAuMDc5IEMxODMuNTgyLDAuMDc5IDE3NS4wMDQsMC4zNjkgMTQ4LjEzNCwxLjU5NSBDMTIxLjMxOSwyLjgxOSAxMDMuMDA3LDcuMDc3IDg2Ljk4MiwxMy4zMDUgQzcwLjQxNiwxOS43NDMgNTYuMzY3LDI4LjM1NyA0Mi4zNjIsNDIuMzYyIEMyOC4zNTcsNTYuMzY3IDE5Ljc0Myw3MC40MTYgMTMuMzA1LDg2Ljk4MiBDNy4wNzcsMTAzLjAwNyAyLjgxOSwxMjEuMzE5IDEuNTk1LDE0OC4xMzQgQzAuMzY5LDE3NS4wMDMgMC4wOCwxODMuNTgyIDAuMDgsMjUyIEMwLjA4LDMyMC40MTggMC4zNjksMzI4Ljk5NyAxLjU5NSwzNTUuODY2IEMyLjgxOSwzODIuNjgxIDcuMDc3LDQwMC45OTMgMTMuMzA1LDQxNy4wMTggQzE5Ljc0Myw0MzMuNTgzIDI4LjM1Nyw0NDcuNjMzIDQyLjM2Miw0NjEuNjM4IEM1Ni4zNjcsNDc1LjY0MyA3MC40MTYsNDg0LjI1NyA4Ni45ODIsNDkwLjY5NSBDMTAzLjAwNyw0OTYuOTIzIDEyMS4zMTksNTAxLjE4MSAxNDguMTM0LDUwMi40MDUgQzE3NS4wMDQsNTAzLjYzMSAxODMuNTgyLDUwMy45MiAyNTIsNTAzLjkyIEMzMjAuNDE4LDUwMy45MiAzMjguOTk3LDUwMy42MzEgMzU1Ljg2Niw1MDIuNDA1IEMzODIuNjgxLDUwMS4xODEgNDAwLjk5Myw0OTYuOTIzIDQxNy4wMTgsNDkwLjY5NSBDNDMzLjU4NCw0ODQuMjU3IDQ0Ny42MzMsNDc1LjY0MyA0NjEuNjM4LDQ2MS42MzggQzQ3NS42NDMsNDQ3LjYzMyA0ODQuMjU3LDQzMy41ODQgNDkwLjY5NSw0MTcuMDE4IEM0OTYuOTIzLDQwMC45OTMgNTAxLjE4MSwzODIuNjgxIDUwMi40MDUsMzU1Ljg2NiBDNTAzLjYzMSwzMjguOTk3IDUwMy45MjEsMzIwLjQxOCA1MDMuOTIxLDI1MiBDNTAzLjkyMSwxODMuNTgyIDUwMy42MzEsMTc1LjAwMyA1MDIuNDA1LDE0OC4xMzQgQzUwMS4xODEsMTIxLjMxOSA0OTYuOTIzLDEwMy4wMDcgNDkwLjY5NSw4Ni45ODIgQzQ4NC4yNTcsNzAuNDE2IDQ3NS42NDMsNTYuMzY3IDQ2MS42MzgsNDIuMzYyIEM0NDcuNjMzLDI4LjM1NyA0MzMuNTg0LDE5Ljc0MyA0MTcuMDE4LDEzLjMwNSBDNDAwLjk5Myw3LjA3NyAzODIuNjgxLDIuODE5IDM1NS44NjYsMS41OTUgQzMyOC45OTcsMC4zNjkgMzIwLjQxOCwwLjA3OSAyNTIsMC4wNzkiIGlkPSJGaWxsLTFfX18tMTc5MDA3Njc4MCI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI1MiwxMjIuNjM1IEMxODAuNTU0LDEyMi42MzUgMTIyLjYzNSwxODAuNTU0IDEyMi42MzUsMjUyIEMxMjIuNjM1LDMyMy40NDYgMTgwLjU1NCwzODEuMzY1IDI1MiwzODEuMzY1IEMzMjMuNDQ2LDM4MS4zNjUgMzgxLjM2NSwzMjMuNDQ2IDM4MS4zNjUsMjUyIEMzODEuMzY1LDE4MC41NTQgMzIzLjQ0NiwxMjIuNjM1IDI1MiwxMjIuNjM1IFogTTI1MiwzMzUuOTc0IEMyMDUuNjIzLDMzNS45NzQgMTY4LjAyNiwyOTguMzc3IDE2OC4wMjYsMjUyIEMxNjguMDI2LDIwNS42MjMgMjA1LjYyMywxNjguMDI2IDI1MiwxNjguMDI2IEMyOTguMzc3LDE2OC4wMjYgMzM1Ljk3NCwyMDUuNjIzIDMzNS45NzQsMjUyIEMzMzUuOTc0LDI5OC4zNzcgMjk4LjM3NywzMzUuOTc0IDI1MiwzMzUuOTc0IEwyNTIsMzM1Ljk3NCBaIiBpZD0iRmlsbC0yX19fLTE3OTAwNzY3ODAiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00MTYuNzA2LDExNy41MjQgQzQxNi43MDYsMTM0LjIyIDQwMy4xNzIsMTQ3Ljc1NSAzODYuNDc2LDE0Ny43NTUgQzM2OS43OCwxNDcuNzU1IDM1Ni4yNDUsMTM0LjIyIDM1Ni4yNDUsMTE3LjUyNCBDMzU2LjI0NSwxMDAuODI4IDM2OS43OCw4Ny4yOTQgMzg2LjQ3Niw4Ny4yOTQgQzQwMy4xNzIsODcuMjk0IDQxNi43MDYsMTAwLjgyOCA0MTYuNzA2LDExNy41MjQiIGlkPSJGaWxsLTNfX18tMTc5MDA3Njc4MCI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+IA=="

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_headroom__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_headroom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_headroom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_reading_progress__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_reading_progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_reading_progress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_inlinesvg__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_inlinesvg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_inlinesvg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_media_icons_arrow_slim_svg__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_media_icons_arrow_slim_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__static_media_icons_arrow_slim_svg__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Navbar = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this));

    _this.state = {
      visible: true
    };
    return _this;
  }

  _createClass(Navbar, [{
    key: 'render',
    value: function render() {

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-2384145191' + ' ' + 'nav'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-2384145191' + ' ' + 'progress-bar'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_reading_progress___default.a, { className: this.props.color })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_react_headroom___default.a,
          { style: { position: 'fixed' } },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2384145191'
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'navbar',
              {
                className: 'jsx-2384145191' + ' ' + 'navbar'
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-2384145191' + ' ' + 'navbar-link'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                  { prefetch: true, href: '/' },
                  'Home'
                )
              ),
              this.props.nextProjectLink ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-2384145191' + ' ' + 'next navbar-link'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                  { prefetch: true, href: this.props.nextProjectLink },
                  this.props.nextProjectName
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_inlinesvg___default.a, { className: "next-arrow", src: __WEBPACK_IMPORTED_MODULE_7__static_media_icons_arrow_slim_svg___default.a })
              ) : null
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '2384145191',
          css: ['.headroom.jsx-2384145191{position:relative;top:0px;left:0px;right:0px;background:#FAFAFA;z-index:1 !important;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}', '.headroom--unfixed.jsx-2384145191{position:absolute !important;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}', '.headroom--scrolled.jsx-2384145191{-webkit-transition:-webkit-transform 200ms ease-in-out;-webkit-transition:transform 200ms ease-in-out;transition:transform 200ms ease-in-out;}', '.headroom--unpinned.jsx-2384145191{position:fixed;top:0px;left:0px;right:0px;z-index:1;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}', '.headroom--pinned.jsx-2384145191{position:fixed;top:0px;left:0px;right:0px;z-index:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}', '.headroom--unfixed.jsx-2384145191 .navbar.jsx-2384145191{-webkit-box-shadow:none;box-shadow:none;}', '.headroom--unfixed.jsx-2384145191 .progress-bar.jsx-2384145191{display:none;}', '.navbar.jsx-2384145191{padding-top:.6em;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-shadow:0 .2em .2em 0 rgba(0,0,0,0.10);box-shadow:0 .2em .2em 0 rgba(0,0,0,0.10);}', '.navbar-link.jsx-2384145191{display:inline-block;padding:.6em 2em .8em;-webkit-transition:all .2s linear;-o-transition:all .2s linear;-webkit-transition:all .2s linear;transition:all .2s linear;}', '.navbar.jsx-2384145191 .next.jsx-2384145191{padding:.6em 2em .8em 2em;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}', '.navbar.jsx-2384145191 .next.jsx-2384145191:hover{cursor:pointer;}', '.navbar.jsx-2384145191 .next.jsx-2384145191 a.jsx-2384145191{padding:0;}', '.navbar.jsx-2384145191 .next.jsx-2384145191 .next-arrow.jsx-2384145191{height:1em;width:1em;margin-left:4px;-webkit-transition:all .3s linear;-o-transition:all .3s linear;-webkit-transition:all .3s linear;transition:all .3s linear;margin-right:2em;}', '.navbar.jsx-2384145191 .next.jsx-2384145191:hover .next-arrow.jsx-2384145191{-webkit-transform:translateX(3px);-ms-transform:translateX(3px);-webkit-transform:translateX(3px);-ms-transform:translateX(3px);transform:translateX(3px);}', '.progress-bar.jsx-2384145191{-webkit-appearance:none;position:fixed;top:0;left:0;width:100vw;height:0.4rem;border:0;background-color:transparent;color:rgb(97,13,255);z-index:999;}', '.red.jsx-2384145191{color:#EC6565;}', '.blue.jsx-2384145191{color:#7CE1EC;}', '.green.jsx-2384145191{color:#12a42d;}', '.purple.jsx-2384145191{color:#9157ff;}', '.grey.jsx-2384145191{color:#747a75;}', '.navbar.jsx-2384145191 .progress-bar.jsx-2384145191{position:absolute;width:100%;}', 'progress.jsx-2384145191::-webkit-progress-bar{background:#FAFAFA;}', 'progress.jsx-2384145191::-webkit-progress-value{background:#9157ff;}', 'progress.jsx-2384145191::-moz-progress-bar{background:#9157ff;}', 'progress.red.jsx-2384145191::-webkit-progress-value{background-color:#fa5858;}', 'progress.red.jsx-2384145191::-moz-progress-bar{background-color:#fa5858;}', 'progress.blue.jsx-2384145191::-webkit-progress-value{background-color:#1e95ed;}', 'progress.blue.jsx-2384145191::-moz-progress-bar{background-color:#1e95ed;}', 'progress.green.jsx-2384145191::-webkit-progress-value{background-color:#12a42d;}', 'progress.green.jsx-2384145191::-moz-progress-bar{background-color:#12a42d;}', 'progress.grey.jsx-2384145191::-webkit-progress-value{background-color:#747a75;}', 'progress.grey.jsx-2384145191::-moz-progress-bar{background-color:#747a75;}']
        })
      );
    }
  }]);

  return Navbar;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Navbar.defaultProps = {
  nextProjectLink: "/",
  nextProjectName: "Next Project",
  color: ""
};


/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-headroom");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-reading-progress");

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(49);


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Row__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Footer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Navbar__ = __webpack_require__(18);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var About = function (_Component) {
  _inherits(About, _Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-793779645' + ' ' + 'About container'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Navbar__["a" /* default */], { nextProjectLink: null, nextProjectName: null, color: "grey" }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-793779645' + ' ' + "content"
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-793779645' + ' ' + 'my-photo-container col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-793779645' + ' ' + "my-photo"
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: '../static/media/about/me.jpg', alt: "Me", className: 'jsx-793779645'
                })
              )
            ) }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'h3',
              {
                className: 'jsx-793779645' + ' ' + 'col-xs-12 col-sm-12 col-md-12 col-lg-offset-3 col-lg-6 col-xl-6'
              },
              'Hey there!'
            ) }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'p',
              {
                className: 'jsx-793779645' + ' ' + 'about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6'
              },
              'Hi, I\'m glad you\u2019d like to get more familiar! Here\u2019s me in quick bulletpoints:'
            ) }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'ul',
              {
                className: 'jsx-793779645' + ' ' + 'about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6 list'
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'li',
                {
                  className: 'jsx-793779645'
                },
                'From Tampere, Finland ',
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'span',
                  { role: 'img', 'aria-label': 'basketball', className: 'jsx-793779645' + ' ' + 'emoji'
                  },
                  '\uD83D\uDE0A'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'li',
                {
                  className: 'jsx-793779645'
                },
                'I brew craft beer ',
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'span',
                  { role: 'img', 'aria-label': 'clinking beer glasses', className: 'jsx-793779645' + ' ' + 'emoji'
                  },
                  '\uD83C\uDF7B'
                ),
                'and love parings of wine and food ',
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'span',
                  { role: 'img', 'aria-label': 'wine glasss', className: 'jsx-793779645'
                  },
                  '\uD83C\uDF77'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'li',
                {
                  className: 'jsx-793779645'
                },
                'I\'m a non-fiction audiobook and podcast addict ',
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'span',
                  { span: true, role: 'img', 'aria-label': 'headphones', className: 'jsx-793779645' + ' ' + 'emoji'
                  },
                  '\uD83C\uDFA7'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'li',
                {
                  className: 'jsx-793779645'
                },
                'I love film and capturing a moment myself ',
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'span',
                  { role: 'img', 'aria-label': 'film', className: 'jsx-793779645' + ' ' + 'emoji'
                  },
                  '\uD83D\uDCFD'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'li',
                {
                  className: 'jsx-793779645'
                },
                'Lauri Markkanen fan ',
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'span',
                  { role: 'img', 'aria-label': 'basketball', className: 'jsx-793779645' + ' ' + 'emoji'
                  },
                  '\uD83C\uDFC0'
                )
              )
            ) }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'p',
              {
                className: 'jsx-793779645' + ' ' + 'about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6'
              },
              'Feel free to contact me in social media.'
            ) }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'p',
              {
                className: 'jsx-793779645' + ' ' + 'about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6'
              },
              'Thanks for visiting, it truly means a lot. If you have any suggestions hit up the "webmaster" (me) at hi [at] harritaito [dot] com . ',
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'span',
                { role: 'img', 'aria-label': 'vulcan salute', className: 'jsx-793779645' + ' ' + 'emoji'
                },
                '\uD83D\uDD96'
              )
            ) })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Footer__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '793779645',
          css: ['.About.jsx-793779645 .content.jsx-793779645{padding-top:60px;}', '.About.jsx-793779645 .content.jsx-793779645 .my-photo-container.jsx-793779645{text-align:center;}', '.About.jsx-793779645 .my-photo.jsx-793779645{height:275px;display:inline-block;width:275px;}', '.About.jsx-793779645 .my-photo.jsx-793779645 img.jsx-793779645{display:block;width:100%;border-radius:999px;}', '.About.jsx-793779645 h3.jsx-793779645{text-align:center;}', '.About.jsx-793779645 .list.jsx-793779645{padding-left:40px;margin-top:0;}', '.About.jsx-793779645 .nav.jsx-793779645 .navbar-link.jsx-793779645:hover{color:#747a75;}', '.About.jsx-793779645 .nav.jsx-793779645 .navbar-link.jsx-793779645:hover a.jsx-793779645{color:#747a75;}', '.About.jsx-793779645 .nav.jsx-793779645 .navbar-link.jsx-793779645:hover svg.jsx-793779645{fill:#747a75;}', '.About.jsx-793779645 .emoji.jsx-793779645{display:inline-block;margin-right:2px;}']
        })
      );
    }
  }]);

  return About;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })
/******/ ]);