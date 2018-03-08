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
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
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
/* 7 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/vr-5b86a9557cdb2d8ecee6a7058e7497e2.jpg";

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_plx__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_plx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_plx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_inlinesvg__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_inlinesvg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_inlinesvg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_media_icons_arrow_slim_svg__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_media_icons_arrow_slim_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__static_media_icons_arrow_slim_svg__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Project = function (_Component) {
  _inherits(Project, _Component);

  function Project() {
    _classCallCheck(this, Project);

    return _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).apply(this, arguments));
  }

  _createClass(Project, [{
    key: 'render',
    value: function render() {

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-3937020838' + ' ' + (this.props.title + " Project" || '')
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-3937020838' + ' ' + 'row'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-3937020838' + ' ' + 'col-xs-12 col-sm-10 col-md-10 col-lg-offset-0 col-lg-8 col-xl-offset-1 col-xl-7'
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: this.props.image, alt: this.props.alt, className: 'jsx-3937020838' + ' ' + 'project-image'
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-3937020838' + ' ' + 'row'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-3937020838' + ' ' + 'col-xs-12 col-sm-offset-2 col-sm-10 col-md-offset-4 col-md-8 col-lg-offset-6 col-lg-6 col-xl-5'
            },
            this.props.parallax ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_react_plx___default.a,
              {
                className: 'plx',
                animateWhenNotInViewport: true,
                parallaxData: [{
                  start: this.props.percentage,
                  duration: this.props.parallax ? '9%' : "0%",
                  properties: [{
                    startValue: 0,
                    endValue: this.props.endValue,
                    property: 'translateY',
                    unit: "px"
                  }, {
                    startValue: 0,
                    endValue: 1,
                    property: 'opacity'
                  }]
                }]
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                { prefetch: true, href: this.props.link },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'div',
                  {
                    className: 'jsx-3937020838' + ' ' + 'project-link-container'
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                      className: 'jsx-3937020838' + ' ' + ("project-blurb " + this.props.color || '')
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'h2',
                      {
                        className: 'jsx-3937020838'
                      },
                      this.props.title
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'p',
                      {
                        className: 'jsx-3937020838'
                      },
                      this.props.description
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'div',
                      {
                        className: 'jsx-3937020838' + ' ' + 'bottom'
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        {
                          className: 'jsx-3937020838' + ' ' + ("next navbar-link " + this.props.color || '')
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                          { prefetch: true, href: this.props.link },
                          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'a',
                            {
                              className: 'jsx-3937020838'
                            },
                            'Case Study'
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_inlinesvg___default.a, { className: "next-arrow", src: __WEBPACK_IMPORTED_MODULE_6__static_media_icons_arrow_slim_svg___default.a })
                      )
                    )
                  )
                )
              )
            ) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
              { prefetch: true, href: this.props.link },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-3937020838' + ' ' + 'project-link-container'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'div',
                  {
                    className: 'jsx-3937020838' + ' ' + 'project-blurb'
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'h2',
                    {
                      className: 'jsx-3937020838'
                    },
                    this.props.title
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                      className: 'jsx-3937020838'
                    },
                    this.props.description
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                      className: 'jsx-3937020838' + ' ' + 'bottom'
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'div',
                      {
                        className: 'jsx-3937020838' + ' ' + ("next navbar-link " + this.props.color || '')
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                        { prefetch: true, href: this.props.link },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          'a',
                          {
                            className: 'jsx-3937020838'
                          },
                          'Case Study'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_inlinesvg___default.a, { className: "next-arrow", src: __WEBPACK_IMPORTED_MODULE_6__static_media_icons_arrow_slim_svg___default.a })
                    )
                  )
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3937020838',
          css: ['.Project.jsx-3937020838{margin-top:12em;margin-bottom:12em;}', '.project-link-container.jsx-3937020838{color:inherit;}', '.Project.jsx-3937020838:hover .project-image.jsx-3937020838{-webkit-box-shadow:0 0.75em 1.25em 0 rgba(0,0,0,0.30);box-shadow:0 0.75em 1.25em 0 rgba(0,0,0,0.30);}', '.Project.jsx-3937020838:hover .project-blurb.jsx-3937020838{-webkit-box-shadow:0 1.5em 2.5em 0 rgba(0,0,0,0.30);box-shadow:0 1.5em 2.5em 0 rgba(0,0,0,0.30);}', '.project-image.jsx-3937020838{display:block;-o-object-fit:cover;object-fit:cover;max-width:100%;height:auto;padding:0;overflow:hidden;-webkit-box-shadow:0 0.5em 1em 0 rgba(0,0,0,0.30);box-shadow:0 0.5em 1em 0 rgba(0,0,0,0.30);-webkit-transition:-webkit-box-shadow .5s ease;-webkit-transition:-webkit-box-shadow .5s ease;transition:-webkit-box-shadow .5s ease;-o-transition:box-shadow .5s ease;-webkit-transition:box-shadow .5s ease;transition:box-shadow .5s ease;-webkit-transition:box-shadow .5s ease,-webkit-box-shadow .5s ease;transition:box-shadow .5s ease,-webkit-box-shadow .5s ease;}', '.plx.jsx-3937020838{opacity:0;}', '.project-blurb.jsx-3937020838{background-color:white;padding:1em 1.5em;overflow:hidden;-webkit-box-shadow:0 1em 2em 0 rgba(0,0,0,0.30);box-shadow:0 1em 2em 0 rgba(0,0,0,0.30);height:auto;margin-top:-10em;-webkit-transition:all .6s ease;-o-transition:all .6s ease;-webkit-transition:all .6s ease;transition:all .6s ease;position:relative;}', '.project-blurb.green.jsx-3937020838:hover{background-color:#0BAB28;}', '.project-blurb.blue.jsx-3937020838:hover{background-color:#1e95ed;}', '.project-blurb.red.jsx-3937020838:hover{background-color:#fa5858;}', '.project-blurb.purple.jsx-3937020838:hover{background-color:#9157ff;}', '.project-blurb.jsx-3937020838:hover{color:#FAFAFA;}', '.Project.jsx-3937020838 .project-blurb.jsx-3937020838:hover .next.jsx-3937020838 a.jsx-3937020838{color:#FAFAFA;}', '.Project.jsx-3937020838 .project-blurb.jsx-3937020838:hover .next.jsx-3937020838 svg.jsx-3937020838{fill:#FAFAFA;}', '.project-blurb.jsx-3937020838:hover .next-arrow.jsx-3937020838{-webkit-transform:translateX(5px);-ms-transform:translateX(5px);-webkit-transform:translateX(5px);-ms-transform:translateX(5px);transform:translateX(5px);}', '.bottom.jsx-3937020838{display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}', '.bottom.jsx-3937020838 .next.jsx-3937020838{display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:.5em 0 1em;}', '.bottom.jsx-3937020838 .next.jsx-3937020838 a.jsx-3937020838{-webkit-transition:all .6s ease;-o-transition:all .6s ease;-webkit-transition:all .6s ease;transition:all .6s ease;}', '.bottom.jsx-3937020838 .next-arrow.jsx-3937020838{width:1em;height:1em;margin-left:4px;-webkit-transition:all .4s linear;-o-transition:all .4s linear;-webkit-transition:all .4s linear;transition:all .4s linear;display:block;}', '.bottom.jsx-3937020838 .next-arrow.jsx-3937020838 svg.jsx-3937020838{-webkit-transition:all .6s ease;-o-transition:all .6s ease;-webkit-transition:all .6s ease;transition:all .6s ease;}', '.project-blurb.jsx-3937020838 .next.green.jsx-3937020838 a.jsx-3937020838{color:#12a42d;}', '.project-blurb.jsx-3937020838 .green.jsx-3937020838 .next-arrow.jsx-3937020838 svg.jsx-3937020838{fill:#12a42d;}', '.project-blurb.jsx-3937020838 .next.blue.jsx-3937020838 a.jsx-3937020838{color:#1e95ed;}', '.project-blurb.jsx-3937020838 .blue.jsx-3937020838 .next-arrow.jsx-3937020838 svg.jsx-3937020838{fill:#1e95ed;}', '.project-blurb.jsx-3937020838 .next.red.jsx-3937020838 a.jsx-3937020838{color:#fa5858;}', '.project-blurb.jsx-3937020838 .red.jsx-3937020838 .next-arrow.jsx-3937020838 svg.jsx-3937020838{fill:#fa5858;}', '.project-blurb.jsx-3937020838 .purple.jsx-3937020838 a.jsx-3937020838{color:#9157ff;}', '.project-blurb.jsx-3937020838 .purple.jsx-3937020838 .next-arrow.jsx-3937020838 svg.jsx-3937020838{fill:#9157ff;}', '@media only screen and (max-width:575px){.plx.jsx-3937020838{margin-top:35vh;}}', '@media only screen and (max-width:767px) and (min-width:576px){.plx.jsx-3937020838{margin-top:150px;}}', '@media only screen and (max-width:992px) and (min-width:768px){.plx.jsx-3937020838{margin-top:100px;}}']
        })
      );
    }
  }]);

  return Project;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Project.defaultProps = {
  title: "",
  description: "",
  link: "",
  image: "",
  alt: "",
  color: "",
  parallax: true,
  endValue: -100
};


/* harmony default export */ __webpack_exports__["a"] = (Project);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-plx");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/tachi-96411c0bd75e266a9727fb1a649dfe78.jpg";

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
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
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Video = function (_Component) {
  _inherits(Video, _Component);

  function Video() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Video);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Video.__proto__ || Object.getPrototypeOf(Video)).call.apply(_ref, [this].concat(args))), _this), _this.playVideo = function () {
      _this._video.play();
    }, _this.stopVideo = function () {
      _this._video.pause();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Video, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      nextProps.autoplay ? this.playVideo() : this.stopVideo();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'span',
        {
          className: 'jsx-1928367904'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'video',
          { ref: function ref(video) {
              _this2._video = video;
            }, preload: 'meta', muted: true, loop: true, className: 'jsx-1928367904' + ' ' + ("video " + this.props.className || '')
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('source', { src: this.props.webMsrc, type: 'video/webm', className: 'jsx-1928367904'
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('source', { src: this.props.mp4src, type: 'video/mp4', className: 'jsx-1928367904'
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'p',
            {
              className: 'jsx-1928367904'
            },
            'Your browser does not support the video tag. You can alternatively ',
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'a',
              { href: this.props.mp4src, className: 'jsx-1928367904'
              },
              'download'
            ),
            ' the video.'
          )
        ),
        this.props.caption ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          {
            className: 'jsx-1928367904' + ' ' + "caption"
          },
          this.props.caption
        ) : null,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1928367904',
          css: ['.video.jsx-1928367904{width:100%;margin:.75em auto;-webkit-box-shadow:0 0.5em 1em 0 rgba(0,0,0,0.30);box-shadow:0 0.5em 1em 0 rgba(0,0,0,0.30);}', '.video.jsx-1928367904+.caption.jsx-1928367904{margin-bottom:1em;}', '.video.vertical-video.jsx-1928367904{max-height:520px;width:auto;margin:auto;display:block;}']
        })
      );
    }
  }]);

  return Video;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Video.defaultProps = {
  autoplay: false,
  webMsrc: "",
  mp4src: "",
  caption: "",
  controls: false
};


/* harmony default export */ __webpack_exports__["a"] = (Video);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-collapse");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-medium-image-zoom");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'isLinkInternal',
    value: function isLinkInternal() {
      if (this.props.link.indexOf("://") === -1) return true;

      return window.location.host === this.props.link.host;
    }
  }, {
    key: 'render',
    value: function render() {

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-1112324076' + ' ' + ("button " + this.props.color || '')
        },
        this.props.link ? this.isLinkInternal() ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
          { prefetch: true, href: this.props.link },
          this.props.label
        ) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'a',
          { href: this.props.link, target: '_blank', rel: 'noopener noreferrer', className: 'jsx-1112324076'
          },
          this.props.label
        ) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'a',
          {
            className: 'jsx-1112324076'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'span',
            {
              className: 'jsx-1112324076'
            },
            this.props.label
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1112324076',
          css: ['.button.jsx-1112324076 a.jsx-1112324076{display:inline-block;position:relative;border-radius:26px;padding:.5em 1.5em;color:#FAFAFA;text-decoration:none;-webkit-transition:all .6s linear;-o-transition:all .6s linear;-webkit-transition:all .6s linear;transition:all .6s linear;font-weight:500;}', '.button.jsx-1112324076 a.jsx-1112324076:hover{cursor:pointer;}', '.button.outline.jsx-1112324076 a.jsx-1112324076{color:#696a6d;padding:0;}', '.button.outline.jsx-1112324076 a.jsx-1112324076 span.jsx-1112324076{position:relative;display:inline-block;padding:.3em 1.3em;}', '.button.outline.jsx-1112324076 a.jsx-1112324076::before{border:2px solid #696a6d;border-radius:26px;width:100%;height:100%;content:\'\';top:-2px;left:-2px;position:absolute;}', '.button.outline.blue.jsx-1112324076 a.jsx-1112324076:hover span.jsx-1112324076{color:#1e95ed;}', '.button.outline.blue.jsx-1112324076 a.jsx-1112324076:hover.jsx-1112324076::before{border-color:#1e95ed;}', '.button.outline.green.jsx-1112324076 a.jsx-1112324076:hover span.jsx-1112324076{color:#12a42d;}', '.button.outline.green.jsx-1112324076 a.jsx-1112324076:hover.jsx-1112324076::before{border-color:#12a42d;}', '.button.outline.red.jsx-1112324076 a.jsx-1112324076:hover span.jsx-1112324076{color:#fa5858;}', '.button.outline.red.jsx-1112324076 a.jsx-1112324076:hover.jsx-1112324076::before{border-color:#fa5858;}', '.button.outline.purple.jsx-1112324076 a.jsx-1112324076:hover span.jsx-1112324076{color:#9157ff;}', '.button.outline.purple.jsx-1112324076 a.jsx-1112324076:hover.jsx-1112324076::before{border-color:#9157ff;}']
        })
      );
    }
  }]);

  return Button;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Button.defaultProps = {
  label: "Button",
  color: "green"
};


/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(2);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "react-visibility-sensor"
var external__react_visibility_sensor_ = __webpack_require__(21);
var external__react_visibility_sensor__default = /*#__PURE__*/__webpack_require__.n(external__react_visibility_sensor_);

// EXTERNAL MODULE: ./components/Video.js
var Video = __webpack_require__(22);

// EXTERNAL MODULE: ./components/Navbar.js
var Navbar = __webpack_require__(18);

// EXTERNAL MODULE: ./components/Project.js
var Project = __webpack_require__(8);

// EXTERNAL MODULE: ./static/media/home/vr.jpg
var vr = __webpack_require__(7);
var vr_default = /*#__PURE__*/__webpack_require__.n(vr);

// EXTERNAL MODULE: ./static/media/home/tachi.jpg
var tachi = __webpack_require__(10);
var tachi_default = /*#__PURE__*/__webpack_require__.n(tachi);

// CONCATENATED MODULE: ./components/Projects.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Projects_Projects = function Projects() {
  var _this = this;

  _classCallCheck(this, Projects);

  this.projects = [{
    name: "Kiva Kaupunki",
    description: "From thoughts to action...",
    image: vr_default.a,
    link: "/kivakaupunki",
    alt: "Application for city reporting",
    color: "blue"
  }, {
    name: "Aikakone",
    description: "Dementia/Alzheimer diseases increasing and growing ..",
    image: tachi_default.a,
    link: "/aikakone",
    alt: "Concept service for people with memory deseaces",
    color: "purple"
  }];

  this.getIndexOfProject = function (project) {
    return _this.projects.findIndex(function (x) {
      return x.name === project;
    });
  };

  this.getNextProject = function (project) {

    var index = _this.getIndexOfProject(project);

    if (index + 1 > _this.projects.length - 1) {
      return _this.projects[0];
    }

    return _this.projects[index + 1];
  };

  this.getPrevProject = function (project) {

    var index = _this.getIndexOfProject(project);

    if (index - 1 < 0) {
      return _this.projects[_this.projects.length - 1];
    }

    return _this.projects[index - 1];
  };

  this.getRandomProject = function () {
    var random = Math.floor(Math.random() * Math.floor(_this.projects.length));
    return _this.projects[random];
  };

  this.getProjectsMinusCurrent = function (project) {

    var modProjects = _this.projects.slice();
    var index = _this.getIndexOfProject(project);
    if (index > -1) modProjects.splice(index, 1);

    return modProjects;
  };
};

/* harmony default export */ var components_Projects = (Projects_Projects);
// CONCATENATED MODULE: ./components/ProjectPage.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function ProjectPage__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var ProjectPage_ProjectPage = function (_Component) {
  _inherits(ProjectPage, _Component);

  function ProjectPage(props) {
    ProjectPage__classCallCheck(this, ProjectPage);

    var _this = _possibleConstructorReturn(this, (ProjectPage.__proto__ || Object.getPrototypeOf(ProjectPage)).call(this, props));

    var proj = new components_Projects();

    _this.state = {
      nextProject: proj.getNextProject(props.title)
    };

    _this.pStyle = "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6";
    return _this;
  }

  _createClass(ProjectPage, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-2812372975' + ' ' + ("project-page container " + this.props.title || '')
        },
        external__react__default.a.createElement(Navbar["a" /* default */], { nextProjectName: this.state.nextProject.name, nextProjectLink: this.state.nextProject.link, color: this.props.navbarColor }),
        external__react__default.a.createElement(
          'div',
          {
            className: 'jsx-2812372975' + ' ' + 'header row'
          },
          external__react__default.a.createElement(
            'h1',
            {
              className: 'jsx-2812372975' + ' ' + (this.pStyle || '')
            },
            this.props.title
          )
        ),
        external__react__default.a.createElement(
          'div',
          {
            className: 'jsx-2812372975' + ' ' + 'row subtitle'
          },
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-2812372975' + ' ' + (this.pStyle || '')
            },
            this.props.description
          )
        ),
        external__react__default.a.createElement(
          'div',
          {
            className: 'jsx-2812372975' + ' ' + 'row'
          },
          external__react__default.a.createElement(
            'div',
            {
              className: 'jsx-2812372975' + ' ' + 'col-sm-12 col-md-12 col-xs-12 col-lg-12 col-xl-12'
            },
            this.props.video ? external__react__default.a.createElement(
              external__react_visibility_sensor__default.a,
              null,
              function (_ref) {
                var isVisible = _ref.isVisible;
                return external__react__default.a.createElement(
                  'div',
                  {
                    className: 'jsx-2812372975'
                  },
                  external__react__default.a.createElement(Video["a" /* default */], {
                    autoplay: isVisible,
                    src: _this2.props.hero,
                    caption: null })
                );
              }
            ) : external__react__default.a.createElement('img', {
              src: this.props.hero,
              alt: this.props.heroAlt,
              loader: external__react__default.a.createElement('div', {
                className: 'jsx-2812372975' + ' ' + "loader"
              }),
              className: 'jsx-2812372975' + ' ' + 'hero-image'
            })
          )
        ),
        external__react__default.a.createElement(
          'div',
          { id: 'reading-content', className: 'jsx-2812372975' + ' ' + 'content'
          },
          this.props.content
        ),
        external__react__default.a.createElement(
          'div',
          {
            className: 'jsx-2812372975' + ' ' + 'row next-project'
          },
          external__react__default.a.createElement(
            'h3',
            {
              className: 'jsx-2812372975' + ' ' + (this.pStyle || '')
            },
            'Next Project'
          )
        ),
        external__react__default.a.createElement(Project["a" /* default */], {
          title: this.state.nextProject.name,
          description: this.state.nextProject.description,
          link: this.state.nextProject.link,
          image: this.state.nextProject.image,
          alt: this.state.nextProject.alt,
          color: this.state.nextProject.color,
          percentage: '0%' }),
        external__react__default.a.createElement(style__default.a, {
          styleId: '2812372975',
          css: ['.project-page.jsx-2812372975{padding:3em 0 1em;}', '.project-page.jsx-2812372975 h1.jsx-2812372975{margin:0 auto;}', '.project-page.jsx-2812372975 .subtitle.jsx-2812372975{font-size:2em;}', '.project-page.jsx-2812372975 .subtitle.jsx-2812372975 p.jsx-2812372975{margin-top:.5em;}', '.hero-image.jsx-2812372975{display:block;-o-object-fit:cover;object-fit:cover;width:100%;height:auto;max-height:20em;-webkit-box-shadow:0 0.5em 1em 0 rgba(0,0,0,0.30);box-shadow:0 0.5em 1em 0 rgba(0,0,0,0.30);}', '.project-page.jsx-2812372975 .loader.jsx-2812372975{width:100%;height:20em;max-height:20em;-webkit-animation-duration:1s;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;-webkit-animation-name:placeHolderShimmer-jsx-2812372975;animation-name:placeHolderShimmer-jsx-2812372975;-webkit-animation-timing-function:linear;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:#f6f7f8;background:-webkit-gradient(linear,left top,right top,color-stop(8%,#eeeeee),color-stop(18%,#dddddd),color-stop(33%,#eeeeee));background:-webkit-linear-gradient(left,#eeeeee 8%,#dddddd 18%,#eeeeee 33%);background:-o-linear-gradient(left,#eeeeee 8%,#dddddd 18%,#eeeeee 33%);background:linear-gradient(to right,#eeeeee 8%,#dddddd 18%,#eeeeee 33%);}', '@-webkit-keyframes placeHolderShimmer{0%.jsx-2812372975{background-position:-25% 0;}100%.jsx-2812372975{background-position:125% 0;}}', '@-webkit-keyframes placeHolderShimmer-jsx-2812372975{0%{background-position:-25% 0;}100%{background-position:125% 0;}}', '@keyframes placeHolderShimmer-jsx-2812372975{0%{background-position:-25% 0;}100%{background-position:125% 0;}}', '.project-page.jsx-2812372975 .next-project.jsx-2812372975 h3.jsx-2812372975{font-weight:bold;margin:3rem auto .5rem;}', '.project-page.jsx-2812372975 .Project.jsx-2812372975{margin-top:2em;margin-bottom:0;}']
        })
      );
    }
  }]);

  return ProjectPage;
}(external__react_["Component"]);

ProjectPage_ProjectPage.defaultProps = {
  title: "",
  description: "",
  content: undefined,
  hero: "",
  heroAlt: "",
  video: false,
  navbarColor: ""
};


/* harmony default export */ var components_ProjectPage = __webpack_exports__["a"] = (ProjectPage_ProjectPage);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_media_icons_first_svg__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_media_icons_first_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__static_media_icons_first_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_media_icons_middle_svg__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_media_icons_middle_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_media_icons_middle_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_media_icons_last_svg__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_media_icons_last_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__static_media_icons_last_svg__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Process = function (_Component) {
  _inherits(Process, _Component);

  function Process() {
    _classCallCheck(this, Process);

    return _possibleConstructorReturn(this, (Process.__proto__ || Object.getPrototypeOf(Process)).apply(this, arguments));
  }

  _createClass(Process, [{
    key: 'render',
    value: function render() {

      var stepsLength = this.props.steps.length;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'span',
        {
          className: 'jsx-3565747866' + ' ' + 'Process'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'ul',
          {
            className: 'jsx-3565747866' + ' ' + 'timeline'
          },
          this.props.steps.map(function (step, index) {

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              { key: "step" + index, className: 'jsx-3565747866' + ' ' + 'step'
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-3565747866' + ' ' + 'time'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', {
                  src: index === 0 ? __WEBPACK_IMPORTED_MODULE_3__static_media_icons_first_svg___default.a : index === stepsLength - 1 ? __WEBPACK_IMPORTED_MODULE_5__static_media_icons_last_svg___default.a : __WEBPACK_IMPORTED_MODULE_4__static_media_icons_middle_svg___default.a,
                  alt: index + " step",
                  className: 'jsx-3565747866'
                })
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'li',
                { key: index, className: 'jsx-3565747866' + ' ' + 'step-details'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'h5',
                  {
                    className: 'jsx-3565747866' + ' ' + 'step-header'
                  },
                  step.title
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'ul',
                  {
                    className: 'jsx-3565747866' + ' ' + 'step-info'
                  },
                  step.processes.map(function (process, index) {
                    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'li',
                      { key: step.title + "desc" + index, className: 'jsx-3565747866'
                      },
                      process
                    );
                  })
                )
              )
            );
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3565747866',
          css: ['.Process.jsx-3565747866 ul.jsx-3565747866,.Process.jsx-3565747866 li.jsx-3565747866{list-style:none;padding:0;position:relative;}', '.Process.jsx-3565747866 .timeline.jsx-3565747866{display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:2.5em;}', '.Process.jsx-3565747866 .timeline.jsx-3565747866 .step.jsx-3565747866{display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:0.5em;}', '.Process.jsx-3565747866 .timeline.jsx-3565747866 .time.jsx-3565747866{display:inline-block;margin-right:.5em;}', '.Process.jsx-3565747866 .timeline.jsx-3565747866 .step-header.jsx-3565747866{margin-top:0;margin-bottom:.5rem;}', '.Process.jsx-3565747866 .timeline.jsx-3565747866 .step-info.jsx-3565747866 li.jsx-3565747866{margin:.4rem 0;font-size:.75em;}', '@media only screen and (min-width:320px) and (max-width:787px){.Process.jsx-3565747866 .timeline.jsx-3565747866{-ms-flex-pack:start;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;}.Process.jsx-3565747866 .timeline.jsx-3565747866 .step.jsx-3565747866{min-width:176px;}}', '@media only screen and (max-width:431px){.Process.jsx-3565747866 .timeline.jsx-3565747866 img.jsx-3565747866{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}}']
        })
      );
    }
  }]);

  return Process;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Process.defaultProps = {
  steps: undefined
};


/* harmony default export */ __webpack_exports__["a"] = (Process);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMzQgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ2LjIgKDQ0NDk2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5maXJzdDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iZmlyc3QiIHN0cm9rZT0iIzMyMkYyRiIgc3Ryb2tlLXdpZHRoPSIzIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0zIiBjeD0iMTAiIGN5PSIxMCIgcj0iOC41Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtNCIgeD0iMjAuNSIgeT0iMTAiIHdpZHRoPSI1IiBoZWlnaHQ9IjEiPjwvcmVjdD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMzQgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ2LjIgKDQ0NDk2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCA3PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IkNhc2UtU3R1ZHkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJIb21lLUNvcHktMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2OS4wMDAwMDAsIC05MjAuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC03IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNjkuMDAwMDAwLCA5MjAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTQtQ29weSIgc3Ryb2tlPSIjMzIyRjJGIiBzdHJva2Utd2lkdGg9IjMiIHg9IjEuNSIgeT0iMTAiIHdpZHRoPSI1IiBoZWlnaHQ9IjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtNC1Db3B5LTIiIHN0cm9rZT0iIzMyMkYyRiIgc3Ryb2tlLXdpZHRoPSIzIiB4PSIyNy41IiB5PSIxMCIgd2lkdGg9IjUiIGhlaWdodD0iMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC00IiBmaWxsPSIjMzIyRjJGIiBjeD0iMTciIGN5PSIxMCIgcj0iMTAiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC01IiBmaWxsPSIjRkZGRkZGIiBjeD0iMTciIGN5PSIxMCIgcj0iNyI+PC9jaXJjbGU+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMzQgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ2LjIgKDQ0NDk2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5sYXN0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsYXN0IiBzdHJva2U9IiMzMjJGMkYiIHN0cm9rZS13aWR0aD0iMyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC05IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMyIgY3g9IjE3IiBjeT0iMTAiIHI9IjguNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTQtQ29weSIgeD0iMS41IiB5PSIxMCIgd2lkdGg9IjUiIGhlaWdodD0iMSI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ProjectStats = function (_Component) {
  _inherits(ProjectStats, _Component);

  function ProjectStats() {
    _classCallCheck(this, ProjectStats);

    return _possibleConstructorReturn(this, (ProjectStats.__proto__ || Object.getPrototypeOf(ProjectStats)).apply(this, arguments));
  }

  _createClass(ProjectStats, [{
    key: 'render',
    value: function render() {

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-663070749' + ' ' + 'row stats'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-663070749' + ' ' + 'col-xs-4 col-sm-4 col-md-offset-1 col-md-3 col-lg-offset-2dot5 col-lg-2dot3 col-xl-offset-3 col-xl-2'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'h5',
            {
              className: 'jsx-663070749'
            },
            'Team'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'ul',
            {
              className: 'jsx-663070749'
            },
            this.props.team.map(function (teammate, index) {
              return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'li',
                { key: "teammate" + index, className: 'jsx-663070749'
                },
                teammate
              );
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-663070749' + ' ' + 'col-xs-4 col-sm-4 col-md-3 col-lg-2dot3 col-xl-2'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'h5',
            {
              className: 'jsx-663070749'
            },
            'Time Frame'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'ul',
            {
              className: 'jsx-663070749'
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'li',
              {
                className: 'jsx-663070749'
              },
              this.props.time
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-663070749' + ' ' + 'col-xs-4 col-sm-4 col-md-3 col-lg-2dot3 col-xl-2'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'h5',
            {
              className: 'jsx-663070749'
            },
            'My Role'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'ul',
            {
              className: 'jsx-663070749'
            },
            this.props.responsibilities.map(function (role, index) {
              return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'li',
                { key: "role" + index, className: 'jsx-663070749'
                },
                role
              );
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '663070749',
          css: ['.stats.jsx-663070749 ul.jsx-663070749{list-style:none;padding-left:0;}', '.stats.jsx-663070749 ul.jsx-663070749 li.jsx-663070749{line-height:1.4em;margin:0.25em 0;}']
        })
      );
    }
  }]);

  return ProjectStats;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

ProjectStats.defaultProps = {
  team: undefined,
  responsibilities: undefined,
  time: undefined
};


/* harmony default export */ __webpack_exports__["a"] = (ProjectStats);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ProjectSection = function (_Component) {
  _inherits(ProjectSection, _Component);

  function ProjectSection() {
    _classCallCheck(this, ProjectSection);

    return _possibleConstructorReturn(this, (ProjectSection.__proto__ || Object.getPrototypeOf(ProjectSection)).apply(this, arguments));
  }

  _createClass(ProjectSection, [{
    key: 'render',
    value: function render() {

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-2739616611' + ' ' + ("project-section " + this.props.title || '')
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-2739616611' + ' ' + 'row'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'h3',
            {
              className: 'jsx-2739616611' + ' ' + 'col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6'
            },
            this.props.title
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-2739616611' + ' ' + 'project-section-content'
          },
          this.props.content
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '2739616611',
          css: ['.project-section.jsx-2739616611 h3.jsx-2739616611{font-weight:bold;margin:3rem auto .5rem;}', '.project-section.jsx-2739616611 .quote.jsx-2739616611{font-style:italic;font-size:1.25em;}', '.project-section.jsx-2739616611 .feature-image.jsx-2739616611{max-width:100%;height:auto;margin:.75em 0;-webkit-box-shadow:0 0.5em 1em 0 rgba(0,0,0,0.30);box-shadow:0 0.5em 1em 0 rgba(0,0,0,0.30);}', '.project-section.jsx-2739616611 iframe.jsx-2739616611{margin:.75em 0;-webkit-box-shadow:0 0.5em 1em 0 rgba(0,0,0,0.30);box-shadow:0 0.5em 1em 0 rgba(0,0,0,0.30);}', '.project-section.jsx-2739616611 .mini-image.jsx-2739616611{-webkit-box-shadow:0 0.25em .5em 0 rgba(0,0,0,0.15);box-shadow:0 0.25em .5em 0 rgba(0,0,0,0.15);max-width:100%;height:auto;margin:.75em 0;}', '.project-section.jsx-2739616611 .mini-image.jsx-2739616611:hover{cursor:pointer;}', '.project-section.jsx-2739616611 .caption.jsx-2739616611{font-size:.875em;text-align:center;}', '.project-section.jsx-2739616611 .callouts.jsx-2739616611{margin:1em 0;}', '.project-section.jsx-2739616611 .list.jsx-2739616611{padding-left:2.5em;padding-right:2.5em;margin-top:0;}', '.project-section.jsx-2739616611 .list.jsx-2739616611 li.jsx-2739616611{margin:0.5em 0;line-height:1.4em;}', '.project-section.jsx-2739616611 .video-holder.jsx-2739616611{margin-bottom:2em;}', '.project-section.jsx-2739616611 .aspect-keeper.jsx-2739616611{position:relative;padding-bottom:56.25%;height:0;display:block;max-width:100%;}', '.project-section.jsx-2739616611 .links.jsx-2739616611 a.jsx-2739616611{margin-right:1em;margin-bottom:.5em;}', '.project-section.jsx-2739616611 .tall-image.jsx-2739616611{max-height:400px;margin-left:auto;display:block;margin-right:auto;}', '.aspect-keeper.jsx-2739616611 iframe.jsx-2739616611{position:absolute;top:0;left:0;width:100%;height:100%;}', '.button-wrapper.jsx-2739616611{text-align:center;margin:1em 0;}']
        })
      );
    }
  }]);

  return ProjectSection;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

ProjectSection.defaultProps = {
  title: undefined,
  content: undefined
};


/* harmony default export */ __webpack_exports__["a"] = (ProjectSection);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_reveal__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_reveal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_reveal__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Callout = function (_Component) {
  _inherits(Callout, _Component);

  function Callout() {
    _classCallCheck(this, Callout);

    return _possibleConstructorReturn(this, (Callout.__proto__ || Object.getPrototypeOf(Callout)).apply(this, arguments));
  }

  _createClass(Callout, [{
    key: 'render',
    value: function render() {

      var layout = "";

      if (this.props.number === 2) {
        layout = this.props.title + " callout col-xs-offset-2 col-xs-8 col-sm-4 col-md-4 col-lg-3 col-xl-3";
        this.props.first ? layout += "col-sm-offset-2 col-md-offset-2 col-lg-offset-3 col-xl-offset-3" : layout += " col-sm-offset-0 col-md-offset-0 col-lg-offset-0 col-xl-offset-0";
      }

      if (this.props.number === 3) {
        layout = this.props.title + " callout col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-4 col-md-4 col-lg-3 col-xl-3";
        this.props.first ? layout += " col-lg-offset-1dot5 col-xl-offset-1dot5" : null;
        this.props.middle ? layout += " col-md-offset-0" : null;
        !this.props.first || !this.props.middle ? layout += " col-md-offset-0 col-lg-offset-0 col-xl-offset-0" : null;
      }

      if (this.props.number === 4) {
        layout = this.props.title + " callout col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-6 col-md-3 col-lg-2 col-xl-2";
        this.props.first ? layout += " col-lg-offset-2 col-xl-offset-2" : layout += " col-lg-offset-0 col-xl-offset-0";
      }

      if (this.props.number === 5) {
        layout = this.props.title + " callout col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-6 col-md-4 col-lg-2 col-xl-2";
        this.props.first ? layout += " col-lg-offset-1 col-xl-offset-1" : null;
        this.props.middle ? layout += " col-sm-offset-3 col-md-offset-0" : null;
        this.props.middleOffset ? layout += " col-md-offset-2" : null;
        !this.props.first || !this.props.middle ? layout += " col-md-offset-0 col-lg-offset-0 col-xl-offset-0" : null;
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_react_reveal__["Zoom"],
        { delay: this.props.delay, className: layout },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-2353178182' + ' ' + ("callout-image-container " + this.props.className || '')
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: this.props.image, alt: this.props.altText, className: 'jsx-2353178182'
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h5',
          {
            className: 'jsx-2353178182'
          },
          this.props.title
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          {
            className: 'jsx-2353178182'
          },
          this.props.description
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '2353178182',
          css: ['.callout.jsx-2353178182 .callout-image-container.jsx-2353178182{height:75px;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:1em auto;}', '.callout.jsx-2353178182 .callout-text.jsx-2353178182 img.jsx-2353178182{height:60px;}', '.callout.jsx-2353178182 img.jsx-2353178182{max-height:75px;display:block;max-width:100px;}', '.callout.jsx-2353178182 h5.jsx-2353178182{text-align:center;}', '.callout.jsx-2353178182 p.jsx-2353178182{text-align:center;}', '.callout.Audio.jsx-2353178182 img.jsx-2353178182{max-width:70px;}', '.callout.Popup.jsx-2353178182 img.jsx-2353178182{max-width:80px;}']
        })
      );
    }
  }]);

  return Callout;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Callout.defaultProps = {
  image: "",
  altText: "#",
  title: "Test",
  description: "",
  first: false,
  middle: false,
  middleOffset: false,
  number: 3,
  delay: 0
};


/* unused harmony default export */ var _unused_webpack_default_export = (Callout);

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("react-reveal");

/***/ }),
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
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(51);


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_collapse__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_collapse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_collapse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_medium_image_zoom__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_medium_image_zoom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_medium_image_zoom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_inlinesvg__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_inlinesvg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_inlinesvg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Button__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ProjectPage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Process__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_ProjectStats__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ProjectSection__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Row__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Callout__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Video__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__static_media_aikakone_hero_jpg__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__static_media_aikakone_hero_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__static_media_aikakone_hero_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__static_media_aikakone_menu_jpg__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__static_media_aikakone_menu_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__static_media_aikakone_menu_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__static_media_aikakone_aikakone_jpg__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__static_media_aikakone_aikakone_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__static_media_aikakone_aikakone_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__static_media_aikakone_profile_jpg__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__static_media_aikakone_profile_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__static_media_aikakone_profile_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__static_media_aikakone_elamankaari_jpg__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__static_media_aikakone_elamankaari_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__static_media_aikakone_elamankaari_jpg__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }























var Aikakone = function (_Component) {
  _inherits(Aikakone, _Component);

  function Aikakone() {
    _classCallCheck(this, Aikakone);

    var _this = _possibleConstructorReturn(this, (Aikakone.__proto__ || Object.getPrototypeOf(Aikakone)).call(this));

    _this.state = {
      researchOpen: false,
      presentOpen: false,
      discussOpen: false,
      deployOpen: false
    };

    _this.collapseResearch = _this.collapseResearch.bind(_this);
    _this.collapsePresent = _this.collapsePresent.bind(_this);
    _this.collapseDiscuss = _this.collapseDiscuss.bind(_this);
    _this.collapseDeploy = _this.collapseDeploy.bind(_this);
    return _this;
  }

  _createClass(Aikakone, [{
    key: 'collapseResearch',
    value: function collapseResearch() {
      this.setState({
        researchOpen: !this.state.researchOpen
      });
    }
  }, {
    key: 'collapsePresent',
    value: function collapsePresent() {
      this.setState({
        presentOpen: !this.state.presentOpen
      });
    }
  }, {
    key: 'collapseDiscuss',
    value: function collapseDiscuss() {
      this.setState({
        discussOpen: !this.state.discussOpen
      });
    }
  }, {
    key: 'collapseDeploy',
    value: function collapseDeploy() {
      this.setState({
        deployOpen: !this.state.deployOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {

      var pStyle = "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6";
      var quoteStyle = "quote col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-offset-4 col-xl-4";

      var steps = [{
        title: "Research",
        processes: ["Business approach", "Existing Solutions", "Academic studys", "Location visits", "Semi-structured Interviews", "User Needs"]
      }, {
        title: "Design",
        processes: ["Screens"]
      }, {
        title: "Prototype",
        processes: ["Use Cases", "User Testing"]
      }];

      var compareStylesScroll = { borderRight: "3px dotted red" };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-1397831780' + ' ' + 'Aikakone'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_ProjectPage__["a" /* default */], {
          title: "Aikakone",
          hero: __WEBPACK_IMPORTED_MODULE_14__static_media_aikakone_hero_jpg___default.a,
          heroAlt: "Ideation on canvas.",
          description: "Interaction around throwbacks creates happiness",
          navbarColor: "purple",
          content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'span',
            {
              className: 'jsx-1397831780'
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_ProjectSection__["a" /* default */], {
              title: "Problem",
              content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'span',
                {
                  className: 'jsx-1397831780'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                      className: 'jsx-1397831780' + ' ' + (pStyle || '')
                    },
                    'Elderly adults suffering dementia/Alzheimer diseases require brain-activating stimulus and entertainment.'
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                      className: 'jsx-1397831780' + ' ' + (pStyle || '')
                    },
                    'The number of old people is increasing all the time, as is the number of people suffering from memory diseases. Providing individual high-quality care for everybody is the challenge that has been recognized widely.'
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                      className: 'jsx-1397831780' + ' ' + (pStyle || '')
                    },
                    'Especially the fulfilment of the mental needs of the elderly and their psychological well-being has been a subject of lively debate in public over the last few years. In the case of Alzheimer patients, difficulties in creating a connection and a lack of motivation towards activities make this a particularly difficult task.'
                  ) })
              )
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_ProjectSection__["a" /* default */], {
              title: "Solution",
              content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'span',
                {
                  className: 'jsx-1397831780'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                      className: 'jsx-1397831780' + ' ' + (pStyle || '')
                    },
                    'Facilitating connection between people with memory disorder and caregivers is at the very core of Time Machine. We aim at creating meaningful connections and building a bridge between generations, which benefits also healthy older adults.'
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                      className: 'jsx-1397831780' + ' ' + (pStyle || '')
                    },
                    'This we do by taking the elderly person back to the old times. We use the unique approach of combining pictures, sounds and texts all telling the same tale, which provides multisensory stimuli that retrieve memories more efficiently than a mere picture or a sound.'
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                      className: 'jsx-1397831780' + ' ' + (pStyle || '')
                    },
                    'This kind of conversation inspired by old photos, sounds and music, is called reminiscence therapy. It has been scientifically shown to decrease depression in older adults. It improves self-esteem, as the persons can act as an expert on their own life instead of being mere objects of care.'
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                      className: 'jsx-1397831780' + ' ' + (pStyle || '')
                    },
                    'Time Machine can be used anywhere, anytime and with anyone - with a healthy senior citizen as well as a strongly demented person. As a web-service, it can be utilized even with bed-tied patients or with a group of people by a TV set.'
                  ) })
              )
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_ProjectSection__["a" /* default */], {
              title: "Process",
              content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'span',
                {
                  className: 'jsx-1397831780'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                      className: 'jsx-1397831780' + ' ' + (pStyle || '')
                    },
                    'In Futurice & University of Tampere, Let\u2019s Re-Design Health Services -course, the client company Espericare ltd gave a clear goal of achieving some kind of entertainment type off service for stimulus purposes for the residents, residents who have severe conditions of memory decease. The workshop course would organize students into random teams and we would all design service concepts to present at the end of the course.'
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                      className: 'jsx-1397831780' + ' ' + (pStyle || '')
                    },
                    'In Service Creation we followed Futurice Ltd\u2019s Open Source Lean Service Design canvases on organized sessions, this process was supported with expeditions to client company Espericare Ltd premises and meetings on our own, here\u2019s roughly how it went:'
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                      className: 'jsx-1397831780' + ' ' + 'col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10 col-xl-offset-2 col-xl-8'
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Process__["a" /* default */], {
                      steps: steps })
                  ) })
              )
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_ProjectSection__["a" /* default */], {
              title: "Logistics",
              content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_ProjectStats__["a" /* default */], {
                team: ["4 Designers"],
                responsibilities: ["Service Design", "UX Research", "Interaction Design", "User Testing"],
                time: "April'16 - June'17"
              })
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_ProjectSection__["a" /* default */], {
              title: "Research",
              content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'span',
                {
                  className: 'jsx-1397831780'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                      className: 'jsx-1397831780' + ' ' + (pStyle || '')
                    },
                    'Already after the first session we visited a facility of the client company Espericare, Villa Niemi, in Nokia. We got impressions of the facilities, took pictures, drew a floor plan of the area users inhabit and interviewed the staff and residents. We would return later to do more structured interviews and perform a test with paper prototypes.'
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                      className: 'jsx-1397831780' + ' ' + (pStyle || '')
                    },
                    'Then own our own we looked at existing market solutions, concepts of entertainment and ways to spend time with people with memory diseases. An interesting idea was reminiscence therapy. A form of therapy that has been shown to improve the attitude of caregivers towards their patients. This is assumed to be due to caregivers\u2019 increased knowledge of their patients\u2019 backgrounds and personalities. Often in care homes, the turnover of personnel is quite high, which makes the need of a tool for such familiarization even more pressing.'
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                      className: 'jsx-1397831780' + ' ' + (pStyle || '')
                    },
                    'In our vision, as a result of well-performed care, the elderly are surrounded by people who know them by their individual qualities, not just by their diagnoses. Every day brings the elderly meaningful interaction and positive moments that include a caring human contact.'
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'h4',
                    {
                      className: 'jsx-1397831780' + ' ' + (pStyle || '')
                    },
                    'Key takeways from location visits, interviews and user needs'
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                      className: 'jsx-1397831780' + ' ' + (pStyle || '')
                    },
                    'Residents are not able to tell about themselves so nurses have a hard time to get to know them and their history. Introduction to new nurses about the resident\u2019s preferences is relies almost completely to coffeetabletalk. Family and friends of the residents want to do something for the resident\u2019s benefit. It was hard for the nurses to get the residents excited about existing entertainment and stimuli options. Stimuli session should be something that is quickly started, because time to perform stimulus is scattered in to small time windows during shifts. Some of the residents were in poor health and spend most of their time in their own rooms.'
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { onClick: this.collapseResearch, className: 'jsx-1397831780' + ' ' + 'col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6 button-wrapper'
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Button__["a" /* default */], {
                      label: this.state.researchOpen ? "Hide Preferences of Residents" : "See Preferences of Residents",
                      color: "outline purple"
                    })
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_collapse__["Collapse"],
                  { isOpened: this.state.researchOpen },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'h4',
                      {
                        className: 'jsx-1397831780' + ' ' + (pStyle || '')
                      },
                      'Preferences of Residents'
                    ) }),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'ol',
                      {
                        className: 'jsx-1397831780' + ' ' + (pStyle + " list" || '')
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'li',
                        {
                          className: 'jsx-1397831780'
                        },
                        'Music, listened and sung'
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'li',
                        {
                          className: 'jsx-1397831780'
                        },
                        'Doing things together, interacting'
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'li',
                        {
                          className: 'jsx-1397831780'
                        },
                        'Telling about themselves'
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'li',
                        {
                          className: 'jsx-1397831780'
                        },
                        'Remeniscing about the times past and looking at old pictures'
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'li',
                        {
                          className: 'jsx-1397831780'
                        },
                        'Looking pictures of children and animals'
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'li',
                        {
                          className: 'jsx-1397831780'
                        },
                        'Watching TV, different subject matter preferences'
                      )
                    ) })
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'ul',
                    {
                      className: 'jsx-1397831780' + ' ' + (pStyle + " list" || '')
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'b',
                      {
                        className: 'jsx-1397831780'
                      },
                      'Things that came up in the research:'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'li',
                      {
                        className: 'jsx-1397831780'
                      },
                      'Dementia/Alzheimer diseases increasing and growing concern about quality of health care systems'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'li',
                      {
                        className: 'jsx-1397831780'
                      },
                      'Elderly adults suffering dementia/Alzheimer diseases require brain-activating stimulus and entertainment'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'li',
                      {
                        className: 'jsx-1397831780'
                      },
                      'Nurses don\u2019t have sufficient time to engage individually and it\u2019s difficult to get patients excited in common activities'
                    )
                  ) })
              )
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_ProjectSection__["a" /* default */], {
              title: "Design",
              content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'span',
                {
                  className: 'jsx-1397831780'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                      className: 'jsx-1397831780' + ' ' + (pStyle || '')
                    },
                    'Design was strongly influenced by our research phase, in fact it can be directly derived from it.'
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                      className: 'jsx-1397831780' + ' ' + (pStyle || '')
                    },
                    'We introduced Aikakone (Timemachine) a tool for reminiscence therapy and entertainment with features of shared history (Aikakone), personal history (El\xE4m\xE4nkaari), profile of and elderly person (Profiili), pictures of aikakone in categories (Kuvat), musicplayed with old enjoyable tunes (Musiikki), animal, baby and other videos in Videot.'
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                      className: 'jsx-1397831780' + ' ' + (pStyle || '')
                    },
                    'Instead of old people using the service alone by themselves, a facilitator uses it with them. This person can be a nurse, a relative, a friend or a voluntary worker. By encouraging the involvement of these people, the service may even multiply the quality time spent with the elderly.'
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'h4',
                    {
                      className: 'jsx-1397831780' + ' ' + (pStyle || '')
                    },
                    'User Interface'
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                      className: 'jsx-1397831780' + ' ' + (pStyle || '')
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'b',
                      {
                        className: 'jsx-1397831780'
                      },
                      'The course was service design focused, so creating the MVP design was critical to accomplishing the course project.'
                    ),
                    ' Here the first ever draft of concept, done in PowerPoint of all the possible design tools available.'
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { className: "one-margin-top", content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                      className: 'jsx-1397831780' + ' ' + "col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_15__static_media_aikakone_menu_jpg___default.a, alt: 'Menu of Aikakone', className: 'jsx-1397831780' + ' ' + 'feature-image acclaim'
                    })
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                      className: 'jsx-1397831780' + ' ' + ("caption " + pStyle || '')
                    },
                    'First look of the menu of Aikakone.'
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { className: "one-margin-top", content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                      className: 'jsx-1397831780' + ' ' + "col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_16__static_media_aikakone_aikakone_jpg___default.a, alt: 'Using Aikakone', className: 'jsx-1397831780' + ' ' + 'feature-image acclaim'
                    })
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                      className: 'jsx-1397831780' + ' ' + ("caption " + pStyle || '')
                    },
                    'Main focus of Aikakone was to present common memories that would resonate with elderly persons with memory disabilities and spark a conversation with a nurse, family member or a volunteer. With multimodal output of a visual and related auditive que for the elderly. The text is mostly for the companion to provide context and words to encourage conversation about the subject as nurses are often fairly young and unfamiliar with such subjects.'
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { className: "one-margin-top", content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                      className: 'jsx-1397831780' + ' ' + "col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_17__static_media_aikakone_profile_jpg___default.a, alt: 'Profile of elderly people', className: 'jsx-1397831780' + ' ' + 'feature-image acclaim'
                    })
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                      className: 'jsx-1397831780' + ' ' + ("caption " + pStyle || '')
                    },
                    'Profile offers for new nurses a glimpse to the character\u2019s of the people they interact with. Filled in by family members and added to by nurses. Profile expedites the process of real caring and connecting between new staff and residents.'
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { className: "one-margin-top", content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                      className: 'jsx-1397831780' + ' ' + "col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_18__static_media_aikakone_elamankaari_jpg___default.a, alt: 'El\xE4m\xE4nkaari or lifespan view', className: 'jsx-1397831780' + ' ' + 'feature-image acclaim'
                    })
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                      className: 'jsx-1397831780' + ' ' + ("caption " + pStyle || '')
                    },
                    'El\xE4m\xE4nkaari a feature that has the lifespan of induvidual user'
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                      className: 'jsx-1397831780' + ' ' + (pStyle || '')
                    },
                    'In nursing homes, time is often scattered in small fragments. Our service can be used efficiently also in short times like 20 minutes, which enables nurses to provide patients with more stimuli with the same amount of resources as before.'
                  ) }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_ProjectSection__["a" /* default */], {
                  title: "Prototype",
                  content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'span',
                    {
                      className: 'jsx-1397831780'
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        {
                          className: 'jsx-1397831780' + ' ' + (pStyle || '')
                        },
                        'In the spirit of lean, I suggested to the team while we were still doing research that we try reminiscence idea. I performed this by printing out images from different decades from the web and engaged the elderly in talks after they had a moment to themselves to take the image in. I sat close next to them on a bed to be on the same side and in ease. The talks went fine, I had a decent success of guiding their attention to the image and got a reminiscence response from them and shared a few laughs.'
                      ) }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        {
                          className: 'jsx-1397831780' + ' ' + (pStyle || '')
                        },
                        'Close to the end of the course we visited Villa Niemi to perform prototyping of our PowerPoint made MVP. We let the nurses get a feel to the concept by making the PowerPoint presentation to work like an app, they would get to \u201Ctest\u201D Aikakone in a guided session.'
                      ) }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        {
                          className: 'jsx-1397831780' + ' ' + (pStyle || '')
                        },
                        'One of us would then interview them about feasibility, how would they use this kind of application, what would be most important and how well would it suite for stimulation purposes. We also asked them to reflect on when and for how long would they see themselves using the application with an elderly person.'
                      ) })
                  )
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_ProjectSection__["a" /* default */], {
                  title: "Conclusion",
                  content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'span',
                    {
                      className: 'jsx-1397831780'
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        {
                          className: 'jsx-1397831780' + ' ' + (pStyle || '')
                        },
                        'Lean Service Creation (LSC) canvases got us thinking about the to be created service from an outside-in perspective, the first one\u2019s are about business goals and limitations and segmentation to concept and value proposition, even thinking about customer engagement.  LSC gave us a huge amount of confidence for continuing the project towards forming of a startup. It helped us easily into a local accelerator program.'
                      ) }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h4',
                        {
                          className: 'jsx-1397831780' + ' ' + (pStyle || '')
                        },
                        'More of the story'
                      ) }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        {
                          className: 'jsx-1397831780' + ' ' + (pStyle || '')
                        },
                        'After positive feedback from Futurice, course mates and most importantly Usability tests, we stuck together and started developing the concept in to a working software. We entered into an incubator program and with encouraging, but cautious feedback from mentors we were on track for forming a company. More or less this was inadequately executed. In hindsight our mental states approached the project more from a hobby project. The fact that teams were randomized in the course factored into our team chemistry and sparks flew once in a while. Everybody believed in the product, but the team was off and so we called quits after 8 months of development and user testing. Oct \u201816 \u2013 May \u201917 Push to market ultimately failed. Team decided to go its separate ways.'
                      ) })
                  )
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_ProjectSection__["a" /* default */], {
                  title: "Links",
                  content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'p',
                      {
                        className: 'jsx-1397831780' + ' ' + (pStyle + " links" || '')
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'a',
                        { href: 'http://leanservicecreation.com', className: 'jsx-1397831780'
                        },
                        'Lean Service Creation',
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { style: { content: '', display: 'block', height: 8, width: '98%', background: 'rgba(139, 200, 246, 0.565)', marginTop: -9, marginLeft: 2 }, className: 'jsx-1397831780'
                        })
                      )
                    ) })
                })
              )
            })
          )
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1397831780',
          css: ['.Aikakone.jsx-1397831780 .project-section.jsx-1397831780 .feature-image.aikakone-preview.jsx-1397831780,.Aikakone.jsx-1397831780 .project-section.jsx-1397831780 .feature-image.solution.jsx-1397831780{-webkit-box-shadow:none;box-shadow:none;}', '.Aikakone.jsx-1397831780 .project-section.jsx-1397831780 .inline-svg.jsx-1397831780{display:-ms-inline-flexbox;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}', '.Aikakone.jsx-1397831780 .project-section.jsx-1397831780 .inline-svg.jsx-1397831780 svg.jsx-1397831780{height:15px;}', '.Aikakone.jsx-1397831780 .project-section.jsx-1397831780 .acclaim.jsx-1397831780{-webkit-box-shadow:noneh;box-shadow:none;}', '.Aikakone.jsx-1397831780 .nav.jsx-1397831780 .navbar-link.jsx-1397831780:hover{color:#1e95ed;}', '.Aikakone.jsx-1397831780 .nav.jsx-1397831780 .navbar-link.jsx-1397831780:hover a.jsx-1397831780{color:#1e95ed;}', '.Aikakone.jsx-1397831780 .nav.jsx-1397831780 .navbar-link.jsx-1397831780:hover svg.jsx-1397831780{fill:#1e95ed;}', '.Aikakone.jsx-1397831780 b.jsx-1397831780{color:#1e95ed;}', '.Aikakone.jsx-1397831780 .highlight.jsx-1397831780{color:#1e95ed;font-weight:bold;}', '.Aikakone.jsx-1397831780 p.jsx-1397831780 a.jsx-1397831780::after{background:rgba(30,149,237,0.565);}', '.feature-image.jsx-1397831780{max-width:100%;height:auto;margin:.75em 0;-webkit-box-shadow:0 0.5em 1em 0 rgba(0,0,0,0.30);box-shadow:0 0.5em 1em 0 rgba(0,0,0,0.30);}', 'iframe.jsx-1397831780{margin:.75em 0;-webkit-box-shadow:0 0.5em 1em 0 rgba(0,0,0,0.30);box-shadow:0 0.5em 1em 0 rgba(0,0,0,0.30);}', '.mini-image.jsx-1397831780{-webkit-box-shadow:0 0.25em .5em 0 rgba(0,0,0,0.15);box-shadow:0 0.25em .5em 0 rgba(0,0,0,0.15);max-width:100%;height:auto;margin:.75em 0;}', '.mini-image.jsx-1397831780:hover{cursor:pointer;}']
        })
      );
    }
  }]);

  return Aikakone;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Aikakone);

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/hero-eed5691d458276d9585ab30f1d87e36b.jpg";

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/menu-ea9e12606ea20ad54d9177d5d2aefe44.jpg";

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/aikakone-fa659522bd0e1fe73dddee27797881f5.jpg";

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/profile-c01010d7d13cf134bb16e04ea8b750d2.jpg";

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/elamankaari-99f54752549c08ba300ccc5802b4ccdf.jpg";

/***/ })
/******/ ]);