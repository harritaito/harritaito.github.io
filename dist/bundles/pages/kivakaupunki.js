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
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
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
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(61);


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-collapse"
var external__react_collapse_ = __webpack_require__(23);
var external__react_collapse__default = /*#__PURE__*/__webpack_require__.n(external__react_collapse_);

// EXTERNAL MODULE: external "react-visibility-sensor"
var external__react_visibility_sensor_ = __webpack_require__(21);
var external__react_visibility_sensor__default = /*#__PURE__*/__webpack_require__.n(external__react_visibility_sensor_);

// EXTERNAL MODULE: external "react-medium-image-zoom"
var external__react_medium_image_zoom_ = __webpack_require__(24);
var external__react_medium_image_zoom__default = /*#__PURE__*/__webpack_require__.n(external__react_medium_image_zoom_);

// EXTERNAL MODULE: external "react-inlinesvg"
var external__react_inlinesvg_ = __webpack_require__(3);
var external__react_inlinesvg__default = /*#__PURE__*/__webpack_require__.n(external__react_inlinesvg_);

// EXTERNAL MODULE: ./components/Button.js
var Button = __webpack_require__(25);

// EXTERNAL MODULE: ./components/ProjectPage.js + 1 modules
var ProjectPage = __webpack_require__(26);

// EXTERNAL MODULE: ./components/Process.js
var Process = __webpack_require__(27);

// EXTERNAL MODULE: ./components/ProjectStats.js
var ProjectStats = __webpack_require__(31);

// EXTERNAL MODULE: ./components/ProjectSection.js
var ProjectSection = __webpack_require__(32);

// EXTERNAL MODULE: ./components/Row.js
var Row = __webpack_require__(5);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(2);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "react-images"
var external__react_images_ = __webpack_require__(62);
var external__react_images__default = /*#__PURE__*/__webpack_require__.n(external__react_images_);

// CONCATENATED MODULE: ./components/Lightbox.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Lightbox_MyLightbox = function (_Component) {
  _inherits(MyLightbox, _Component);

  function MyLightbox() {
    _classCallCheck(this, MyLightbox);

    var _this = _possibleConstructorReturn(this, (MyLightbox.__proto__ || Object.getPrototypeOf(MyLightbox)).call(this));

    _this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    };

    _this.closeLightbox = _this.closeLightbox.bind(_this);
    _this.gotoNext = _this.gotoNext.bind(_this);
    _this.gotoPrevious = _this.gotoPrevious.bind(_this);
    _this.gotoImage = _this.gotoImage.bind(_this);
    _this.handleClickImage = _this.handleClickImage.bind(_this);
    return _this;
  }

  _createClass(MyLightbox, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        lightboxIsOpen: nextProps.open,
        currentImage: nextProps.index
      });
    }
  }, {
    key: 'closeLightbox',
    value: function closeLightbox() {
      this.setState({
        currentImage: 0,
        lightboxIsOpen: false
      });
    }
  }, {
    key: 'gotoPrevious',
    value: function gotoPrevious() {
      this.setState({
        currentImage: this.state.currentImage - 1
      });
    }
  }, {
    key: 'gotoNext',
    value: function gotoNext() {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    }
  }, {
    key: 'gotoImage',
    value: function gotoImage(index) {
      this.setState({
        currentImage: index
      });
    }
  }, {
    key: 'handleClickImage',
    value: function handleClickImage() {
      if (this.state.currentImage === this.props.images.length - 1) return;

      this.gotoNext();
    }
  }, {
    key: 'render',
    value: function render() {

      return external__react__default.a.createElement(external__react_images__default.a, {
        images: this.props.images,
        currentImage: this.state.currentImage,
        isOpen: this.state.lightboxIsOpen,
        onClickImage: this.handleClickImage,
        onClickNext: this.gotoNext,
        onClickPrev: this.gotoPrevious,
        onClickThumbnail: this.gotoImage,
        onClose: this.closeLightbox,
        showThumbnails: this.props.showThumbnails,
        backdropClosesModal: true
      });
    }
  }]);

  return MyLightbox;
}(external__react_["Component"]);

Lightbox_MyLightbox.defaultProps = {
  index: 0,
  open: external__prop_types__default.a.bool.isRequired,
  images: []
};


/* harmony default export */ var Lightbox = (Lightbox_MyLightbox);
// EXTERNAL MODULE: ./components/Video.js
var Video = __webpack_require__(22);

// EXTERNAL MODULE: ./components/Callout.js
var Callout = __webpack_require__(33);

// EXTERNAL MODULE: external "victory"
var external__victory_ = __webpack_require__(63);
var external__victory__default = /*#__PURE__*/__webpack_require__.n(external__victory_);

// CONCATENATED MODULE: ./components/ChartTheme.js
/*
  "material" theme (VictoryTheme.material)
  Try changing the theme. You could start with `colors` or `fontSize`.
*/

var yellow200 = "#FFF59D";
var deepOrange600 = "#F4511E";
var lime300 = "#DCE775";
var lightGreen500 = "#8BC34A";
var teal700 = "#00796B";
var cyan900 = "#006064";
var colors = [deepOrange600, yellow200, lime300, lightGreen500, teal700, cyan900];
var blueGrey50 = "#ECEFF1";
var blueGrey300 = "#90A4AE";
var blueGrey700 = "#455A64";
var grey900 = "#212121";
var sansSerif = "'Circular Std', 'Helvetica Neue', Helvetica, sans-serif";
var letterSpacing = "normal";
var fontSize = 20;

var padding = 8;
var baseProps = {
  width: 350,
  height: 350,
  padding: 50
};

var baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize: fontSize,
  letterSpacing: letterSpacing,
  padding: padding,
  fill: blueGrey700
};

var centeredLabelStyles = Object.assign({ textAnchor: "middle" }, baseLabelStyles);

var strokeDasharray = "10, 5";
var strokeLinecap = "round";
var strokeLinejoin = "round";

var theme = {
  area: Object.assign({
    style: {
      data: {
        fill: grey900
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  axis: Object.assign({
    style: {
      axis: {
        fill: "transparent",
        stroke: blueGrey300,
        strokeWidth: 2,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin
      },
      axisLabel: Object.assign({}, centeredLabelStyles, {
        padding: padding,
        stroke: "transparent"
      }),
      grid: {
        fill: "transparent",
        stroke: blueGrey50,
        strokeDasharray: strokeDasharray,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: blueGrey300,
        strokeWidth: 1,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin
      },
      tickLabels: Object.assign({}, baseLabelStyles, {
        fill: blueGrey700,
        stroke: "transparent"
      })
    }
  }, baseProps),
  bar: Object.assign({
    style: {
      data: {
        fill: blueGrey700,
        padding: padding,
        stroke: "transparent",
        strokeWidth: 0,
        width: 5
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  candlestick: Object.assign({
    style: {
      data: {
        stroke: blueGrey700
      },
      labels: centeredLabelStyles
    },
    candleColors: {
      positive: "#ffffff",
      negative: blueGrey700
    }
  }, baseProps),
  chart: baseProps,
  errorbar: Object.assign({
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: blueGrey700,
        strokeWidth: 2
      },
      labels: Object.assign({}, centeredLabelStyles, {
        stroke: "transparent",
        strokeWidth: 0
      })
    }
  }, baseProps),
  group: Object.assign({
    colorScale: colors
  }, baseProps),
  line: Object.assign({
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: blueGrey700,
        strokeWidth: 2
      },
      labels: Object.assign({}, baseLabelStyles, {
        stroke: "transparent",
        strokeWidth: 0,
        textAnchor: "start"
      })
    }
  }, baseProps),
  pie: Object.assign({
    colorScale: colors,
    style: {
      data: {
        padding: padding,
        stroke: blueGrey50,
        strokeWidth: 1
      },
      labels: Object.assign({}, baseLabelStyles, {
        padding: 20,
        stroke: "transparent",
        strokeWidth: 0
      })
    }
  }, baseProps),
  scatter: Object.assign({
    style: {
      data: {
        fill: blueGrey700,
        opacity: 1,
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: Object.assign({}, centeredLabelStyles, {
        stroke: "transparent"
      })
    }
  }, baseProps),
  stack: Object.assign({
    colorScale: colors
  }, baseProps),
  tooltip: Object.assign({
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: centeredLabelStyles,
      flyout: {
        stroke: blueGrey700,
        strokeWidth: 1,
        fill: "#f0f0f0"
      }
    },
    flyoutProps: {
      cornerRadius: 10,
      pointerLength: 10
    }
  }, baseProps),
  voronoi: Object.assign({
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: centeredLabelStyles
    }
  }, baseProps)
};

/* harmony default export */ var ChartTheme = (theme);
// CONCATENATED MODULE: ./components/PolarChart.js
var PolarChart__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function PolarChart__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PolarChart__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function PolarChart__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var PolarChart_PolarChart = function (_Component) {
  PolarChart__inherits(PolarChart, _Component);

  function PolarChart() {
    PolarChart__classCallCheck(this, PolarChart);

    return PolarChart__possibleConstructorReturn(this, (PolarChart.__proto__ || Object.getPrototypeOf(PolarChart)).apply(this, arguments));
  }

  PolarChart__createClass(PolarChart, [{
    key: 'render',
    value: function render() {

      var graphStyle = "col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3";
      this.props.first ? graphStyle += " col-lg-offset-1dot5 col-xl-offset-1dot5" : null;

      return external__react__default.a.createElement(
        'span',
        {
          className: 'jsx-85398853' + ' ' + (graphStyle + " PolarChart" || '')
        },
        external__react__default.a.createElement(
          external__victory_["VictoryChart"],
          { polar: true, theme: ChartTheme, domain: { x: [0, 4], y: [0, 7] } },
          external__react__default.a.createElement(external__victory_["VictoryPolarAxis"], { dependentAxis: true,
            style: { axis: { stroke: "none" } },
            tickFormat: function tickFormat() {
              return null;
            }
          }),
          external__react__default.a.createElement(external__victory_["VictoryPolarAxis"], null),
          external__react__default.a.createElement(external__victory_["VictoryArea"], {
            data: this.props.data,
            style: {
              data: { fill: "#12a42d" }
            }
          })
        ),
        external__react__default.a.createElement(
          'p',
          {
            className: 'jsx-85398853' + ' ' + "graph-label"
          },
          this.props.caption
        ),
        external__react__default.a.createElement(style__default.a, {
          styleId: '85398853',
          css: ['.PolarChart.jsx-85398853 .graph-label.jsx-85398853{text-align:center;margin-top:-15px;font-weight:500;}']
        })
      );
    }
  }]);

  return PolarChart;
}(external__react_["Component"]);

PolarChart_PolarChart.defaultProps = {
  data: null,
  caption: "",
  first: false
};


/* harmony default export */ var components_PolarChart = (PolarChart_PolarChart);
// EXTERNAL MODULE: ./static/media/kivakaupunki/hero.jpg
var hero = __webpack_require__(64);
var hero_default = /*#__PURE__*/__webpack_require__.n(hero);

// EXTERNAL MODULE: ./static/media/kivakaupunki/api.png
var api = __webpack_require__(65);
var api_default = /*#__PURE__*/__webpack_require__.n(api);

// EXTERNAL MODULE: ./static/media/kivakaupunki/sketches/Startscreen.jpg
var Startscreen = __webpack_require__(66);
var Startscreen_default = /*#__PURE__*/__webpack_require__.n(Startscreen);

// EXTERNAL MODULE: ./static/media/kivakaupunki/sketches/Location.jpg
var Location = __webpack_require__(67);
var Location_default = /*#__PURE__*/__webpack_require__.n(Location);

// EXTERNAL MODULE: ./static/media/kivakaupunki/sketches/Topic.jpg
var Topic = __webpack_require__(68);
var Topic_default = /*#__PURE__*/__webpack_require__.n(Topic);

// EXTERNAL MODULE: ./static/media/kivakaupunki/sketches/Topic_2.jpg
var Topic_2 = __webpack_require__(69);
var Topic_2_default = /*#__PURE__*/__webpack_require__.n(Topic_2);

// EXTERNAL MODULE: ./static/media/kivakaupunki/sketches/Comment.jpg
var Comment = __webpack_require__(70);
var Comment_default = /*#__PURE__*/__webpack_require__.n(Comment);

// EXTERNAL MODULE: ./static/media/kivakaupunki/sketches/End.jpg
var End = __webpack_require__(71);
var End_default = /*#__PURE__*/__webpack_require__.n(End);

// EXTERNAL MODULE: ./static/media/home/vr.jpg
var vr = __webpack_require__(7);
var vr_default = /*#__PURE__*/__webpack_require__.n(vr);

// CONCATENATED MODULE: ./pages/kivakaupunki.js
var kivakaupunki__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function kivakaupunki__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function kivakaupunki__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function kivakaupunki__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }































var kivakaupunki_Aikakone = function (_Component) {
  kivakaupunki__inherits(Aikakone, _Component);

  function Aikakone() {
    kivakaupunki__classCallCheck(this, Aikakone);

    var _this = kivakaupunki__possibleConstructorReturn(this, (Aikakone.__proto__ || Object.getPrototypeOf(Aikakone)).call(this));

    _this.state = {
      lightboxIsOpen: false,
      index: 0,
      researchOpen: false,
      insightsOpen: false,
      environmentOpen: false,
      evaluateOpen: false,
      resultsOpen: false
    };

    _this.openLightbox = _this.openLightbox.bind(_this);
    _this.closeLightbox = _this.closeLightbox.bind(_this);
    _this.collapseResearch = _this.collapseResearch.bind(_this);
    _this.collapseInsights = _this.collapseInsights.bind(_this);
    _this.collapseEnvironment = _this.collapseEnvironment.bind(_this);
    _this.collapseEvaluate = _this.collapseEvaluate.bind(_this);
    _this.collapseResults = _this.collapseResults.bind(_this);
    return _this;
  }

  kivakaupunki__createClass(Aikakone, [{
    key: 'openLightbox',
    value: function openLightbox(index, event) {
      this.setState({
        lightboxIsOpen: true,
        index: index
      });
    }
  }, {
    key: 'closeLightbox',
    value: function closeLightbox() {
      this.setState({
        lightboxIsOpen: false
      });
    }
  }, {
    key: 'collapseResearch',
    value: function collapseResearch() {
      this.closeLightbox();
      this.setState({
        researchOpen: !this.state.researchOpen
      });
    }
  }, {
    key: 'collapseInsights',
    value: function collapseInsights() {
      this.closeLightbox();
      this.setState({
        insightsOpen: !this.state.insightsOpen
      });
    }
  }, {
    key: 'collapseEnvironment',
    value: function collapseEnvironment() {
      this.closeLightbox();
      this.setState({
        environmentOpen: !this.state.environmentOpen
      });
    }
  }, {
    key: 'collapseEvaluate',
    value: function collapseEvaluate() {
      this.closeLightbox();
      this.setState({
        evaluateOpen: !this.state.evaluateOpen
      });
    }
  }, {
    key: 'collapseResults',
    value: function collapseResults() {
      this.closeLightbox();
      this.setState({
        resultsOpen: !this.state.resultsOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {

      var pStyle = "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6";
      var quoteStyle = "quote col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-offset-4 col-xl-4";

      var steps = [{
        title: "Research",
        processes: ["Ideation", "Opendata Brainstorming", "Getting inspired"]
      }, {
        title: "Design",
        processes: ["Use Case", "Sketches", "Mockups"]
      }, {
        title: "Prototype",
        processes: ["Back-end", "Front-end", "Deployment"]
      }, {
        title: "Evaluate",
        processes: ["Heuristics"]
      }];

      var images = [Startscreen_default.a, Location_default.a, Topic_2_default.a, Comment_default.a, Topic_default.a, End_default.a];

      var self = this;

      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-3232291908' + ' ' + 'KivaKaupunki'
        },
        external__react__default.a.createElement(ProjectPage["a" /* default */], {
          title: "Kiva Kaupunki",
          hero: hero_default.a,
          heroAlt: "map",
          description: "User location and comments about surroundings put to a map",
          navbarColor: "blue",
          content: external__react__default.a.createElement(
            'span',
            {
              className: 'jsx-3232291908'
            },
            external__react__default.a.createElement(ProjectSection["a" /* default */], {
              title: "Problem",
              content: external__react__default.a.createElement(
                'span',
                {
                  className: 'jsx-3232291908'
                },
                external__react__default.a.createElement(Row["a" /* default */], { content: external__react__default.a.createElement(
                    'p',
                    {
                      className: 'jsx-3232291908' + ' ' + (pStyle || '')
                    },
                    external__react__default.a.createElement(
                      'b',
                      {
                        className: 'jsx-3232291908'
                      },
                      'The Living Lab Bus (LLB) project consortium arranged a Student Software Competition, for developing an application that (in short) benefits bus passengers, with monetary prices.'
                    ),
                    ' Limitations of application: must be original work and unpublished, must benefit bus passengers somehow, must be a web application, must utilize at least one publicly available API, must be developed using LLB Developer Kit (https://github.com/llb-uta/development-kit) and submitted through LLB Developer Portal (https://llb.sis.uta.fi/portal/). https://llb.sis.uta.fi'
                  ) })
              )
            }),
            external__react__default.a.createElement(ProjectSection["a" /* default */], {
              title: "Solution",
              content: external__react__default.a.createElement(
                'span',
                {
                  className: 'jsx-3232291908'
                },
                external__react__default.a.createElement(Row["a" /* default */], { content: external__react__default.a.createElement(
                    'p',
                    {
                      className: 'jsx-3232291908' + ' ' + (pStyle || '')
                    },
                    'Kiva kaupunki, named in Finnish for the catchy K-sound is an application through which user input about geolocation can be collected and visualized on a map. These comments can be either positive or negative in nature and they work to bring location knowledge to city officials as well as for the public, so actions can be made to make our surroundings even better.'
                  ) }),
                external__react__default.a.createElement(Row["a" /* default */], { className: 'one-margin-top', content: external__react__default.a.createElement(
                    external__react_visibility_sensor__default.a,
                    null,
                    function (_ref) {
                      var isVisible = _ref.isVisible;
                      return external__react__default.a.createElement('div', {
                        className: 'jsx-3232291908' + ' ' + (pStyle || '')
                      });
                    }
                  ) })
              )
            }),
            external__react__default.a.createElement(ProjectSection["a" /* default */], {
              title: "Process",
              content: external__react__default.a.createElement(
                'span',
                {
                  className: 'jsx-3232291908'
                },
                external__react__default.a.createElement(Row["a" /* default */], { content: external__react__default.a.createElement(
                    'p',
                    {
                      className: 'jsx-3232291908' + ' ' + (pStyle || '')
                    },
                    'Project was very condensed and we had very little freetime to work on it.'
                  ) }),
                external__react__default.a.createElement(Row["a" /* default */], { content: external__react__default.a.createElement(
                    'div',
                    {
                      className: 'jsx-3232291908' + ' ' + 'col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10 col-xl-offset-2 col-xl-8'
                    },
                    external__react__default.a.createElement(Process["a" /* default */], {
                      steps: steps })
                  ) })
              )
            }),
            external__react__default.a.createElement(ProjectSection["a" /* default */], {
              title: "Logistics",
              content: external__react__default.a.createElement(ProjectStats["a" /* default */], {
                team: ["1 Designer", "1 Developer"],
                responsibilities: ["Service Design", "Interaction Design", "UX Design", "UI Design"],
                time: "April ’17 – June ’17"
              })
            }),
            external__react__default.a.createElement(ProjectSection["a" /* default */], {
              title: "Ideation",
              content: external__react__default.a.createElement(Row["a" /* default */], { content: external__react__default.a.createElement(
                  'p',
                  {
                    className: 'jsx-3232291908' + ' ' + (pStyle || '')
                  },
                  external__react__default.a.createElement(
                    'p',
                    {
                      className: 'jsx-3232291908'
                    },
                    'We sat together for brainstorming, we pondered what was possible to accomplish in the timeframe available. Ideas were thrown around and topics discussed from useful, playful and full games, but schedule restrictions limited all of them. '
                  ),
                  external__react__default.a.createElement(
                    'p',
                    {
                      className: 'jsx-3232291908'
                    },
                    'We also tried to get an idea of bus capabilities, unfortunately these were poorly communicated by LLB partner VTT. Pasi, the developer, had also done a lot of work with open data so finding something motivating from his standpoint was important. '
                  )
                ) })
            }),
            external__react__default.a.createElement(ProjectSection["a" /* default */], {
              title: "Research",
              content: external__react__default.a.createElement(
                'span',
                {
                  className: 'jsx-3232291908'
                },
                external__react__default.a.createElement(Row["a" /* default */], { content: external__react__default.a.createElement(
                    'p',
                    {
                      className: 'jsx-3232291908' + ' ' + (pStyle || '')
                    },
                    external__react__default.a.createElement(
                      'p',
                      {
                        className: 'jsx-3232291908'
                      },
                      'I did most of the research on concept. Disconcerting was the lack of new API\u2019s related to public transport as Pasi had little interest to work with the ones he was already familiar. Not to waste time, I went ahead by looking what kind of open data ideas have in past done in Finland. I made the call of instead of finding a great API we could try to make a data set gathering application and to make this data open.'
                    ),
                    external__react__default.a.createElement(
                      'p',
                      {
                        className: 'jsx-3232291908'
                      },
                      'Concepts in avoindata.fi inspired me a lot. There where concepts that were inquiries to collect data about cities that had a location tagged on to the comments collected.'
                    ),
                    external__react__default.a.createElement(
                      'p',
                      {
                        className: 'jsx-3232291908'
                      },
                      'They had collected location, subject and a comment. This was made so planning officials could take better notice on some of the things in their cities from the perspectives of the citizens. This idea felt like the perfect one to scale up to the potential audiences of LLB in cities of Tampere, Helsinki and Turku.'
                    )
                  ) })
              )

            }),
            external__react__default.a.createElement(ProjectSection["a" /* default */], {
              title: "Design",
              content: external__react__default.a.createElement(
                'span',
                {
                  className: 'jsx-3232291908'
                },
                external__react__default.a.createElement(Row["a" /* default */], { content: external__react__default.a.createElement(
                    'p',
                    {
                      className: 'jsx-3232291908' + ' ' + (pStyle || '')
                    },
                    external__react__default.a.createElement(
                      'p',
                      {
                        className: 'jsx-3232291908'
                      },
                      'I started out by making couple user stories. After that I figured out what screens would be necessary. I draw quick pencil drafts of the screens, with the focus of user interactions available.'
                    ),
                    external__react__default.a.createElement(
                      'p',
                      {
                        className: 'jsx-3232291908'
                      },
                      'Simplicity was the goal for the concept what is in itself a glorified webform.'
                    ),
                    external__react__default.a.createElement(
                      'p',
                      {
                        className: 'jsx-3232291908'
                      },
                      'In the use case, user opens LLB platform and our app within it in a location he or she feels like they have something to say about or want to share with others. This can be either negative or positive comment. User shares their location with the GPS on, chooses a topic from eight choices and then goes on to write the comment and sends it in.'
                    )
                  ) }),
                external__react__default.a.createElement(Row["a" /* default */], { content: external__react__default.a.createElement(
                    'ul',
                    {
                      className: 'jsx-3232291908' + ' ' + (pStyle + " list" || '')
                    },
                    external__react__default.a.createElement(
                      'li',
                      {
                        className: 'jsx-3232291908'
                      },
                      'Focus should be put on clear representation of the users task to be acomplished, status of the task and fow to navigate forward to acomplish the whole job to be done.'
                    ),
                    external__react__default.a.createElement(
                      'li',
                      {
                        className: 'jsx-3232291908'
                      },
                      'Create the Unity environment and framework for user testing'
                    )
                  ) }),
                external__react__default.a.createElement(Row["a" /* default */], { content: external__react__default.a.createElement(
                    'h4',
                    {
                      className: 'jsx-3232291908' + ' ' + (pStyle || '')
                    },
                    'User Interface Design'
                  ) }),
                external__react__default.a.createElement(Row["a" /* default */], { content: external__react__default.a.createElement(
                    'p',
                    {
                      className: 'jsx-3232291908' + ' ' + (pStyle || '')
                    },
                    'I made a more honed UI mockup on my Ipad Air with an app called Pixelmator, while sunbathing in Sorsapuisto. For the style of the mockups I tried to find inspiration from different Instagram accounts and utilized the Design Guidelines made available from by the LLB team.'
                  ) }),
                external__react__default.a.createElement(Lightbox, {
                  images: [{
                    src: Startscreen_default.a,
                    caption: 'Start greeting scene of app'

                  }, {
                    src: Location_default.a,
                    caption: 'Location tagging by gps or by selecting and tapping.'
                  }, {
                    src: Topic_default.a,
                    caption: 'Second screen, notice the return button'
                  }, {
                    src: Topic_2_default.a,
                    caption: 'Comment categories'
                  }, {
                    src: Comment_default.a,
                    caption: 'Comment input'
                  }, {
                    src: End_default.a,
                    caption: 'Final thank you screen'
                  }],
                  open: this.state.lightboxIsOpen,
                  index: this.state.index
                }),
                external__react__default.a.createElement(Row["a" /* default */], { className: 'one-margin-top', content: images.map(function (image, index) {
                    return external__react__default.a.createElement(
                      'div',
                      { key: "sketch" + index, onClick: function onClick(e) {
                          return self.openLightbox(index, e);
                        },
                        className: 'jsx-3232291908' + ' ' + "col-xs-4 col-sm-4 col-md-2 col-lg-2 col-xl-2"
                      },
                      external__react__default.a.createElement('img', { src: image, alt: '', className: 'jsx-3232291908' + ' ' + 'mini-image'
                      })
                    );
                  }) }),
                external__react__default.a.createElement(Row["a" /* default */], { content: external__react__default.a.createElement(
                    'p',
                    {
                      className: 'jsx-3232291908' + ' ' + ("caption " + pStyle || '')
                    },
                    'My mockups of the screens of the application'
                  ) }),
                external__react__default.a.createElement(Row["a" /* default */], { content: external__react__default.a.createElement(
                    'div',
                    { onClick: this.collapseEnvironment, className: 'jsx-3232291908' + ' ' + 'col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6 button-wrapper'
                    },
                    external__react__default.a.createElement(Button["a" /* default */], {
                      label: this.state.environmentOpen ? "Hide Use Case Description" : "See Use Case Description",
                      color: "outline blue"
                    })
                  ) }),
                external__react__default.a.createElement(
                  external__react_collapse_["Collapse"],
                  { isOpened: this.state.environmentOpen },
                  external__react__default.a.createElement(Row["a" /* default */], { content: external__react__default.a.createElement(
                      'h4',
                      {
                        className: 'jsx-3232291908' + ' ' + (pStyle || '')
                      },
                      'USE CASE DESCRIPTION'
                    ) }),
                  external__react__default.a.createElement(Row["a" /* default */], { content: external__react__default.a.createElement(
                      'p',
                      {
                        className: 'jsx-3232291908' + ' ' + (pStyle || '')
                      },
                      'A woman steps on a bus on her way to Hatanp\xE4\xE4 arboretum. She intends to enjoy the sight of beautiful flowers and read a book by the lake. During the bus ride, she sees a little girl crossing the road on a crossing. The girl manages to cross the road but it looks like she feared high traffic. Woman thinks that something should be done to make this specific crossing safer as she also has felt unsafe crossing it on her dog walks. Instead of passing on this thought she decides to do something about it as there is now an easy way to act. She goes home screen in her smartphone and touches the living lab buss icon, now she selects Kiva Kaupunki from the main screen of the application. She selects the crossing location on the app, selects the topic of "Difficult to walk on foot" and goes on to write a comment about the crossing. Application announces that the comment has been saved and will be available soon on the map. The woman continues her journey to location and decides to share also a comment on about arboretum on arriving there, as it is one of her favorite places to visit.'
                    ) })
                )
              )
            }),
            external__react__default.a.createElement(ProjectSection["a" /* default */], {
              title: "Prototype",
              content: external__react__default.a.createElement(
                'span',
                {
                  className: 'jsx-3232291908'
                },
                external__react__default.a.createElement(Row["a" /* default */], { content: external__react__default.a.createElement(
                    'p',
                    {
                      className: 'jsx-3232291908' + ' ' + (pStyle || '')
                    },
                    external__react__default.a.createElement(
                      'p',
                      {
                        className: 'jsx-3232291908'
                      },
                      'The plan was to make the app, collect data and make a map data visualization when sufficient data has been collected and then pushing out and update with a feature for the users to inspect the map.'
                    ),
                    external__react__default.a.createElement(
                      'p',
                      {
                        className: 'jsx-3232291908'
                      },
                      'On May 25 Pasi annouced the Heroku backend he had established at as a very basic CRUD API, with POST adding, GET getting all and id:GET getting a unique entry.'
                    )
                  ) }),
                external__react__default.a.createElement(Row["a" /* default */], { content: external__react__default.a.createElement(
                    'div',
                    {
                      className: 'jsx-3232291908' + ' ' + (pStyle || '')
                    },
                    external__react__default.a.createElement(external__react_medium_image_zoom__default.a, {
                      image: {
                        src: api_default.a,
                        alt: 'Screen capture of our game environment with a controller, a blue ball, and a yellow circle goal in the distance',
                        className: 'feature-image'
                      },
                      zoomImage: {
                        src: api_default.a,
                        alt: 'Screen capture of our game environment with a controller, a blue ball, and a yellow circle goal in the distance'
                      }
                    })
                  ) }),
                external__react__default.a.createElement(Row["a" /* default */], { content: external__react__default.a.createElement(
                    'p',
                    {
                      className: 'jsx-3232291908' + ' ' + ("caption " + pStyle || '')
                    },
                    'It can be confirmed here that the api has a location, topic and comment.'
                  ) }),
                external__react__default.a.createElement(Row["a" /* default */], { content: external__react__default.a.createElement(
                    'p',
                    {
                      className: 'jsx-3232291908' + ' ' + (pStyle || '')
                    },
                    'June 7 we decided to use ReactJs to implement the app as Pasi is more familiar with it. I worked on the CSS styling and the HTML/REACTJS layout of the app  based on the mockups I made. On June 14, the final deadline of the course, Pasi and I work out the kinks in the app and I sent it in for the approval to the LLB Developer Portal.'
                  ) })
              )
            }),
            external__react__default.a.createElement(ProjectSection["a" /* default */], {
              title: "Evaluate",
              content: external__react__default.a.createElement(
                'span',
                {
                  className: 'jsx-3232291908'
                },
                external__react__default.a.createElement(Row["a" /* default */], { content: external__react__default.a.createElement(
                    'p',
                    {
                      className: 'jsx-3232291908' + ' ' + (pStyle || '')
                    },
                    'Usability heuristical analysis was performed me due to time constraints.'
                  ) }),
                external__react__default.a.createElement(Row["a" /* default */], { content: external__react__default.a.createElement(
                    'p',
                    {
                      className: 'jsx-3232291908' + ' ' + (pStyle || '')
                    },
                    'Visibility on system status is clear as communicated by headlines, top right corner indicator and existance of back button. The system does it\'s best to use users\' language if possible. Emergency exit is always possible as application exists in browser. Screens are consistent and try to fit the flatdesign and atleast LLB standards. Unfortunately error messages were not implemented. Recognition over recall is implied by clear systems states and guidance on questions. System is flexible as user is able to skip and complete the task without filling out everything. The design is as minimalistic as possible and gives out and aesthetic appearance. Unfortunately errors are not handled properly, help and documentation are non existant, but on LLB right top corner there is a feedback form link with topics defined by us the developers.'
                  ) })
              )
            }),
            external__react__default.a.createElement(ProjectSection["a" /* default */], {
              title: "Conclusion",
              content: external__react__default.a.createElement(
                'span',
                {
                  className: 'jsx-3232291908'
                },
                external__react__default.a.createElement(Row["a" /* default */], { content: external__react__default.a.createElement(
                    'p',
                    {
                      className: 'jsx-3232291908' + ' ' + (pStyle || '')
                    },
                    '"With different pros and cons the jury found on multiple apps, the jury chairman decided to divide the first prize between the three teams. Thus, each team will receive 200 \u20AC and a diploma."'
                  ) }),
                external__react__default.a.createElement(Row["a" /* default */], { content: external__react__default.a.createElement(
                    'p',
                    {
                      className: 'jsx-3232291908' + ' ' + (pStyle || '')
                    },
                    'We won the competition, but not in a satisfactory way. From the start, we had a confident team together, we were sure to produce something. We had a solid concept, but because of our day jobs too little time was reserved for software development. ',
                    external__react__default.a.createElement(
                      'b',
                      {
                        className: 'jsx-3232291908'
                      },
                      ' I learned that every project should start, by appointing project manager title, so that there would be someone who is responsible for scheduling. '
                    )
                  )
                }),
                external__react__default.a.createElement(Row["a" /* default */], { content: external__react__default.a.createElement(
                    'p',
                    {
                      className: 'jsx-3232291908' + ' ' + (pStyle || '')
                    },
                    'A lot of confidence was gained as we truly can make awesome things together and thus learned to value each other\'s skills and professionalism. We hope we can tackle more projects together in the future.'
                  )
                })
              )
            }),
            external__react__default.a.createElement(ProjectSection["a" /* default */], {
              title: "Links",
              content: external__react__default.a.createElement(Row["a" /* default */], { content: external__react__default.a.createElement(
                  'p',
                  {
                    className: 'jsx-3232291908' + ' ' + (pStyle + " links" || '')
                  },
                  external__react__default.a.createElement(
                    'a',
                    { href: 'https://github.com/paaplo/lblkk', className: 'jsx-3232291908'
                    },
                    'Github',
                    external__react__default.a.createElement('div', { style: { content: '', display: 'block', height: 8, width: '98%', background: 'rgba(139, 200, 246, 0.565)', marginTop: -9, marginLeft: 2 }, className: 'jsx-3232291908'
                    })
                  ),
                  external__react__default.a.createElement(
                    'a',
                    { href: 'http://www.pasikuparinen.fi/', className: 'jsx-3232291908'
                    },
                    'Pasi Kuparinen',
                    external__react__default.a.createElement('div', { style: { content: '', display: 'block', height: 8, width: '98%', background: 'rgba(139, 200, 246, 0.565)', marginTop: -9, marginLeft: 2 }, className: 'jsx-3232291908'
                    })
                  )
                ) })
            })
          )
        }),
        external__react__default.a.createElement(style__default.a, {
          styleId: '3232291908',
          css: ['.KivaKaupunki.jsx-3232291908 .Evaluate.jsx-3232291908 .callout.jsx-3232291908 img.jsx-3232291908{height:60px;}', '.KivaKaupunki.jsx-3232291908 .charts.jsx-3232291908{margin-bottom:2.5em;}', '.KivaKaupunki.jsx-3232291908 .legend.jsx-3232291908{display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}', '.KivaKaupunki.jsx-3232291908 .legend.jsx-3232291908 p.jsx-3232291908{width:150px;text-align:left;margin:0;}', '.KivaKaupunki.jsx-3232291908 .nav.jsx-3232291908 .navbar-link.jsx-3232291908:hover{color:#1e95ed;}', '.KivaKaupunki.jsx-3232291908 .nav.jsx-3232291908 .navbar-link.jsx-3232291908:hover a.jsx-3232291908{color:#1e95ed;}', '.KivaKaupunki.jsx-3232291908 .nav.jsx-3232291908 .navbar-link.jsx-3232291908:hover svg.jsx-3232291908{fill:#1e95ed;}', '.KivaKaupunki.jsx-3232291908 b.jsx-3232291908{color:#1e95ed;}', '.KivaKaupunki.jsx-3232291908 .highlight.jsx-3232291908{color:#1e95ed;font-weight:bold;}', '.KivaKaupunki.jsx-3232291908 p.jsx-3232291908 a.jsx-3232291908::after{background:rgba(18,164,45,0.565);}', '#phoneEmoji.jsx-3232291908{-webkit-transform:scale(-1,1);-ms-transform:scale(-1,1);-webkit-transform:scale(-1,1);-ms-transform:scale(-1,1);transform:scale(-1,1);display:inline-block;}', '.feature-image.jsx-3232291908{max-width:100%;height:auto;margin:.75em 0;-webkit-box-shadow:0 0.5em 1em 0 rgba(0,0,0,0.30);box-shadow:0 0.5em 1em 0 rgba(0,0,0,0.30);}', 'iframe.jsx-3232291908{margin:.75em 0;-webkit-box-shadow:0 0.5em 1em 0 rgba(0,0,0,0.30);box-shadow:0 0.5em 1em 0 rgba(0,0,0,0.30);}', '.mini-image.jsx-3232291908{-webkit-box-shadow:0 0.25em .5em 0 rgba(0,0,0,0.15);box-shadow:0 0.25em .5em 0 rgba(0,0,0,0.15);max-width:100%;height:auto;margin:.75em 0;}', '.mini-image.jsx-3232291908:hover{cursor:pointer;}']
        })
      );
    }
  }]);

  return Aikakone;
}(external__react_["Component"]);

/* harmony default export */ var kivakaupunki = __webpack_exports__["default"] = (kivakaupunki_Aikakone);

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("react-images");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("victory");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/hero-133a8a08314c5648775b504dc088067e.jpg";

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Startscreen-e412d5d813190ee990be93b914f1361b.jpg";

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Location-242750b4fddb07af1d7ef9bfb71861d0.jpg";

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Topic-73289c245454d46146377e3a856ac603.jpg";

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Topic_2-9bfdcbe95aabb787c18c8bc0c2a5fa90.jpg";

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Comment-b8936ec7e5baff3ed1ff5d8695053240.jpg";

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/End-85d25385cca43be419f8af63a0e5b7b0.jpg";

/***/ })
/******/ ]);