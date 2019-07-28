webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ProjectIcon.js":
/*!***********************************!*\
  !*** ./components/ProjectIcon.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-inlinesvg */ "./node_modules/react-inlinesvg/es/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "C:\\Users\\hh96343\\Documents\\GitHub\\harritaito.github.io\\components\\ProjectIcon.js";






/* babel-plugin-inline-import '../static/media/icons/close.svg' */
var close = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHRpdGxlPmNsb3NlPC90aXRsZT48cG9seWdvbiBwb2ludHM9IjE1Ljk0IDIuNTggMTMuNDIgMC4wNiA3Ljk2IDUuNTEgMi41IDAuMDYgLTAuMDIgMi41OCA1LjQzIDguMDQgLTAuMDIgMTMuNSAyLjUgMTYuMDIgNy45NiAxMC41NiAxMy40MiAxNi4wMiAxNS45NCAxMy41IDEwLjQ4IDguMDQgMTUuOTQgMi41OCIvPjwvc3ZnPg==";

var ProjectIcon =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProjectIcon, _Component);

  function ProjectIcon(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProjectIcon);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProjectIcon).call(this, props));
    _this.state = {
      modalOpen: false,
      imageLoaded: false
    };
    _this.showModal = _this.showModal.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.hideModal = _this.hideModal.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProjectIcon, [{
    key: "showModal",
    value: function showModal() {
      this.setState({
        modalOpen: true
      });
      document.body.style.overflow = "hidden";
      react_modal__WEBPACK_IMPORTED_MODULE_11___default.a.setAppElement('body');
    }
  }, {
    key: "hideModal",
    value: function hideModal() {
      this.setState({
        modalOpen: false
      });
      document.body.style.overflow = "auto";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var square = this.props.square ? "square" : null;
      var round = this.props.round ? "round" : null;
      var modalVisible = "visible";
      this.state.imageLoaded ? modalVisible = "visible" : null;
      var modalCustomStyles = {
        overlay: {
          overflowY: "scroll",
          position: "fixed",
          backgroundColor: "rgba(0, 0, 0, 0.75)"
        },
        content: {
          height: 'auto',
          position: 'relative',
          padding: '1em',
          width: '80vw',
          maxWidth: "400px",
          top: "0",
          left: "0",
          bottom: "0",
          right: "0",
          border: "none",
          margin: "10vh auto",
          visibility: modalVisible,
          background: "#FAFAFA"
        }
      };
      var iconClass = "project-icon col-xs-6 col-sm-3 col-md-3 col-lg-3 col-xl-2";
      this.props.first ? iconClass += " col-sm-offset-3 col-md-offset-3 col-xl-offset-4" : null;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-872430500" + " " + (iconClass || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: this.showModal,
        style: {
          margin: 10,
          height: '7em',
          width: '7em'
        },
        className: "jsx-872430500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("object", {
        className: "jsx-872430500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_inlinesvg__WEBPACK_IMPORTED_MODULE_10__["default"], {
        src: this.props.svg,
        alt: this.props.alt,
        className: square || round,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_11___default.a, {
        isOpen: this.state.modalOpen,
        onRequestClose: this.hideModal,
        closeTimeoutMS: 200,
        style: modalCustomStyles,
        contentLabel: "Modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-872430500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.hideModal,
        className: "jsx-872430500" + " " + "modal-close-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: close,
        alt: "close button",
        style: {
          border: 0,
          height: '1,5em',
          width: '1,5em',
          background: '#FAFAFA'
        },
        className: "jsx-872430500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-872430500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-872430500" + " " + "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, this.props.description, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: this.props.image,
        alt: this.props.alt,
        onLoad: function onLoad() {
          return _this2.setState({
            imageLoaded: true
          });
        },
        loader: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-872430500" + " " + "loader",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }),
        className: "jsx-872430500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginTop: "1.5em"
        },
        className: "jsx-872430500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, this.props.links.map(function (link, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          key: link.title + "link" + index,
          href: link.url,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "jsx-872430500",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, link.title, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            display: 'block',
            height: 8,
            width: '98%',
            background: 'rgba(139, 200, 246, 0.565)',
            marginTop: -9,
            marginLeft: 2
          },
          className: "jsx-872430500",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }));
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "872430500",
        __self: this
      }, ".isvg.jsx-872430500{height:'7em';width:'7em';display:'flex';}.project-icon.jsx-872430500{display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.project-icon.jsx-872430500 .isvg.jsx-872430500{height:7em;width:7em;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.project-icon.jsx-872430500 .square.jsx-872430500 svg.jsx-872430500{max-height:55%;}.project-icon.jsx-872430500 .round.jsx-872430500 svg.jsx-872430500{max-height:63%;}.project-icon.jsx-872430500 svg.jsx-872430500{-webkit-filter:url(../static/grayscale.svg#grayscale) contrast(0);filter:url(../static/grayscale.svg#grayscale) contrast(0);-webkit-filter:grayscale(1) contrast(0);-webkit-transition:all .5s ease;-o-transition:all .5s ease;-webkit-transition:all .5s ease;transition:all .5s ease;max-height:70%;max-width:120%;}.project-icon.jsx-872430500:hover{-webkit-filter:none;filter:none;-webkit-filter:grayscale(0%);cursor:pointer;}.ReactModalPortal.jsx-872430500>div.jsx-872430500{opacity:0;}.ReactModalPortal.jsx-872430500 .ReactModal__Overlay.jsx-872430500{-webkit-transition:opacity 200ms ease-in-out;-o-transition:opacity 200ms ease-in-out;-webkit-transition:opacity 200ms ease-in-out;transition:opacity 200ms ease-in-out;background:rgba(0,0,0,0.15);}.ReactModalPortal.jsx-872430500 .ReactModal__Overlay--after-open.jsx-872430500{opacity:1;}.ReactModalPortal.jsx-872430500 .ReactModal__Overlay--before-close.jsx-872430500{opacity:0;}.ReactModal__Content.jsx-872430500{padding:1em;}.modal-close-button.jsx-872430500{padding:0;border:0;height:1.5em;width:1.5em;position:absolute;right:1.5em;top:1.5em;background:#FAFAFA;}.modal-close-button.jsx-872430500 img.jsx-872430500{height:1.5em;width:1.5em;border:0;background:#FAFAFA;}.modal-close-button.jsx-872430500:hover{cursor:pointer;}.modal-close-button.jsx-872430500:focus{outline:none;}.modal-content.jsx-872430500{-webkit-transition:all 1s ease;-o-transition:all 1s ease;-webkit-transition:all 1s ease;transition:all 1s ease;}.modal-content.jsx-872430500 img.jsx-872430500{display:block;max-width:100%;margin:auto;max-height:300px;-webkit-transition:all 1s ease;-o-transition:all 1s ease;-webkit-transition:all 1s ease;transition:all 1s ease;}.modal-content.jsx-872430500 a.jsx-872430500{margin-right:.5em;}.modal-0-2.jsx-872430500 .loader.jsx-872430500{background:gray;}h2.jsx-872430500{display:block;font-size:1.5em;-webkit-margin-before:0.83em;-webkit-margin-after:0.83em;-webkit-margin-start:0px;-webkit-margin-end:0px;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaGg5NjM0M1xcRG9jdW1lbnRzXFxHaXRIdWJcXGhhcnJpdGFpdG8uZ2l0aHViLmlvXFxjb21wb25lbnRzXFxQcm9qZWN0SWNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0SG9CLEFBRzBCLEFBS08sQUFLVCxBQVdJLEFBSUosQUFJMkMsQUFlOUMsQUFNRixBQUltQyxBQVFuQyxBQUlBLEFBS0UsQUFLRixBQVlHLEFBUUUsQUFJRixBQUtrQixBQU1qQixBQVVJLEFBSUYsQUFHRixVQTdFaEIsQUFZQSxBQUlBLEFBVVcsQ0FsRUssQ0E2RGhCLENBdkVrQixBQXdGSixBQVlkLENBV2lCLEFBaUJDLENBM0dkLEFBSUosQUF1RUEsQ0E2QkEsRUFKQSxDQTVDZSxDQXhFSSxDQU1PLElBVHZCLEFBdUZRLElBdUJHLENBaUJpQixDQXhCSCxDQTdERyxBQWtDakIsRUFZTyxNQXhGakIsQ0FVZSxBQXFHQSxHQWxDQyxDQXpCc0IsUUFxQzFDLElBZXlCLENBUVEsQ0FnQkgsRUFyRmIsQ0FtQ0gsWUFDRixFQW5DWixRQW9DcUIsQ0EzQmtCLEVBNEVaLEVBaEJDLEtBN0d4QixTQTZFSixRQXdCQSxDQXlCeUIsR0F2SEUsQUF1R0YsU0F0RmlCLFdBdUd2QixDQXZIYyxnQkF3SGxDLFlBckdtQyxHQXVCRCxFQTZEakMsMEJBNURBLENBdEI2QiwyQkFFSCxZQXRCRSxzQkFDQyxzQkFzQlosZUFDQSxlQUNqQix5Q0F2QkkiLCJmaWxlIjoiQzpcXFVzZXJzXFxoaDk2MzQzXFxEb2N1bWVudHNcXEdpdEh1YlxcaGFycml0YWl0by5naXRodWIuaW9cXGNvbXBvbmVudHNcXFByb2plY3RJY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IElzdmcgZnJvbSAncmVhY3QtaW5saW5lc3ZnJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuaW1wb3J0IGNsb3NlIGZyb20gJy4uL3N0YXRpYy9tZWRpYS9pY29ucy9jbG9zZS5zdmcnO1xyXG5cclxuXHJcblxyXG5jbGFzcyBQcm9qZWN0SWNvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBtb2RhbE9wZW46IGZhbHNlLFxyXG4gICAgICBpbWFnZUxvYWRlZDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zaG93TW9kYWwgPSB0aGlzLnNob3dNb2RhbC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oaWRlTW9kYWwgPSB0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgbGluazogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgc3ZnOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc3F1YXJlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHJvdW5kOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGxpbmtzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICBmaXJzdDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICBsaW5rOiBcIlwiLFxyXG4gICAgc3ZnOiBcIlwiLFxyXG4gICAgYWx0OiBcIlwiLFxyXG4gICAgaW1hZ2U6IG51bGwsXHJcbiAgICBzcXVhcmU6IGZhbHNlLFxyXG4gICAgcm91bmQ6IGZhbHNlLFxyXG4gICAgbGlua3M6IFtdLFxyXG4gICAgZmlyc3Q6IGZhbHNlXHJcbiAgfTtcclxuXHJcbiAgc2hvd01vZGFsKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGFsT3BlbjogdHJ1ZSB9KTtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgTW9kYWwuc2V0QXBwRWxlbWVudCgnYm9keScpO1xyXG4gIH1cclxuXHJcbiAgaGlkZU1vZGFsKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGFsT3BlbjogZmFsc2UgfSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgbGV0IHNxdWFyZSA9IHRoaXMucHJvcHMuc3F1YXJlID8gXCJzcXVhcmVcIiA6IG51bGw7XHJcbiAgICBsZXQgcm91bmQgPSB0aGlzLnByb3BzLnJvdW5kID8gXCJyb3VuZFwiIDogbnVsbDtcclxuICAgIGxldCBtb2RhbFZpc2libGUgPSBcInZpc2libGVcIjtcclxuICAgIHRoaXMuc3RhdGUuaW1hZ2VMb2FkZWQgPyBtb2RhbFZpc2libGUgPSBcInZpc2libGVcIiA6IG51bGw7XHJcblxyXG4gICAgY29uc3QgbW9kYWxDdXN0b21TdHlsZXMgPSB7XHJcblxyXG4gICAgICBvdmVybGF5IDoge1xyXG4gICAgICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNzUpXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBwYWRkaW5nOiAnMWVtJyxcclxuICAgICAgICB3aWR0aDogJzgwdncnLFxyXG4gICAgICAgIG1heFdpZHRoOiBcIjQwMHB4XCIsXHJcbiAgICAgICAgdG9wOiBcIjBcIixcclxuICAgICAgICBsZWZ0OiBcIjBcIixcclxuICAgICAgICBib3R0b206IFwiMFwiLFxyXG4gICAgICAgIHJpZ2h0OiBcIjBcIixcclxuICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgIG1hcmdpbjogXCIxMHZoIGF1dG9cIixcclxuICAgICAgICB2aXNpYmlsaXR5OiBtb2RhbFZpc2libGUsXHJcbiAgICAgICAgYmFja2dyb3VuZDogXCIjRkFGQUZBXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgaWNvbkNsYXNzID0gXCJwcm9qZWN0LWljb24gY29sLXhzLTYgY29sLXNtLTMgY29sLW1kLTMgY29sLWxnLTMgY29sLXhsLTJcIjtcclxuICAgIHRoaXMucHJvcHMuZmlyc3QgPyBpY29uQ2xhc3MgKz0gXCIgY29sLXNtLW9mZnNldC0zIGNvbC1tZC1vZmZzZXQtMyBjb2wteGwtb2Zmc2V0LTRcIiA6IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2ljb25DbGFzc30+XHJcbiAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5zaG93TW9kYWx9IHN0eWxlPXt7bWFyZ2luOjEwLCBoZWlnaHQ6ICc3ZW0nLCB3aWR0aDogJzdlbSd9fT5cclxuICAgICAgICAgIDxvYmplY3Q+PElzdmcgc3JjPXt0aGlzLnByb3BzLnN2Z30gYWx0PXt0aGlzLnByb3BzLmFsdH0gY2xhc3NOYW1lPXtzcXVhcmUgfHwgcm91bmR9Lz48L29iamVjdD5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUubW9kYWxPcGVufVxyXG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuaGlkZU1vZGFsfVxyXG4gICAgICAgICAgY2xvc2VUaW1lb3V0TVM9ezIwMH1cclxuICAgICAgICAgIHN0eWxlPXttb2RhbEN1c3RvbVN0eWxlc31cclxuICAgICAgICAgIGNvbnRlbnRMYWJlbD1cIk1vZGFsXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGlkZU1vZGFsfSBjbGFzc05hbWU9e1wibW9kYWwtY2xvc2UtYnV0dG9uXCJ9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtjbG9zZX0gYWx0PXtcImNsb3NlIGJ1dHRvblwifSBzdHlsZT17e2JvcmRlcjogMCwgaGVpZ2h0OiAnMSw1ZW0nLCB3aWR0aDogJzEsNWVtJywgYmFja2dyb3VuZDogJyNGQUZBRkEnfX0vPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGgyPnt0aGlzLnByb3BzLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmltYWdlfSBhbHQ9e3RoaXMucHJvcHMuYWx0fSBvbkxvYWQ9eygpID0+IHRoaXMuc2V0U3RhdGUoe2ltYWdlTG9hZGVkOiB0cnVlfSl9IGxvYWRlcj17PGRpdiBjbGFzc05hbWU9e1wibG9hZGVyXCJ9PjwvZGl2PiB9Lz5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiBcIjEuNWVtXCJ9fT5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5saW5rcykubWFwKGZ1bmN0aW9uIChsaW5rLCBpbmRleCl7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGEga2V5PXtsaW5rLnRpdGxlICsgXCJsaW5rXCIgKyBpbmRleH0gaHJlZj17bGluay51cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj57bGluay50aXRsZX08ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2Jsb2NrJywgaGVpZ2h0OiA4LCB3aWR0aDogJzk4JScsIGJhY2tncm91bmQ6ICdyZ2JhKDEzOSwgMjAwLCAyNDYsIDAuNTY1KScsIG1hcmdpblRvcDogLTksIG1hcmdpbkxlZnQ6IDJ9fSAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmlzdmcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICc3ZW0nOyBcclxuICAgICAgICAgICAgd2lkdGg6ICc3ZW0nO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCdcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9qZWN0LWljb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucHJvamVjdC1pY29uIC5pc3ZnIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3ZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiA3ZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnByb2plY3QtaWNvbiAuc3F1YXJlIHN2ZyB7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDU1JTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgIC5wcm9qZWN0LWljb24gLnJvdW5kIHN2ZyB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNjMlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucHJvamVjdC1pY29uIHN2ZyB7XHJcbiAgICAgICAgZmlsdGVyOiB1cmwoLi4vc3RhdGljL2dyYXlzY2FsZS5zdmcjZ3JheXNjYWxlKSBjb250cmFzdCgwKTtcclxuICAgICAgICAvKiBGaXJlZm94IDMuNSsgKi9cclxuICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEpIGNvbnRyYXN0KDApO1xyXG4gICAgICAgIC8qIEdvb2dsZSBDaHJvbWUgJiBTYWZhcmkgNisgKi9cclxuXHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcblxyXG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuXHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDcwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEyMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wcm9qZWN0LWljb246aG92ZXIge1xyXG4gICAgICAgIGZpbHRlcjogbm9uZTtcclxuICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDAlKTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5SZWFjdE1vZGFsUG9ydGFsID4gZGl2IHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuUmVhY3RNb2RhbFBvcnRhbCAuUmVhY3RNb2RhbF9fT3ZlcmxheSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBlYXNlLWluLW91dDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLlJlYWN0TW9kYWxQb3J0YWwgLlJlYWN0TW9kYWxfX092ZXJsYXktLWFmdGVyLW9wZW4ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5SZWFjdE1vZGFsUG9ydGFsIC5SZWFjdE1vZGFsX19PdmVybGF5LS1iZWZvcmUtY2xvc2Uge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAuUmVhY3RNb2RhbF9fQ29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLm1vZGFsLWNsb3NlLWJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxLjVlbTtcclxuICAgICAgICB3aWR0aDogMS41ZW07XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxLjVlbTtcclxuICAgICAgICB0b3A6IDEuNWVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAubW9kYWwtY2xvc2UtYnV0dG9uIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxLjVlbTtcclxuICAgICAgICB3aWR0aDogMS41ZW07XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAubW9kYWwtY2xvc2UtYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tb2RhbC1jbG9zZS1idXR0b246Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgIC5tb2RhbC1jb250ZW50IHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubW9kYWwtY29udGVudCBpbWcge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1vZGFsLWNvbnRlbnQgYSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNWVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubW9kYWwtMC0yIC5sb2FkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgICAgIH1cclxuICAgICAgaDJ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAtd2Via2l0LW1hcmdpbi1iZWZvcmU6IDAuODNlbTtcclxuICAgICAgICAtd2Via2l0LW1hcmdpbi1hZnRlcjogMC44M2VtO1xyXG4gICAgICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgLXdlYmtpdC1tYXJnaW4tZW5kOiAwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgfVxyXG5cclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RJY29uO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\hh96343\\Documents\\GitHub\\harritaito.github.io\\components\\ProjectIcon.js */"));
    }
  }]);

  return ProjectIcon;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(ProjectIcon, "propTypes", {
  title: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired,
  link: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
  svg: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
  image: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  square: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  round: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  links: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array,
  first: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(ProjectIcon, "defaultProps", {
  title: "",
  description: "",
  link: "",
  svg: "",
  alt: "",
  image: null,
  square: false,
  round: false,
  links: [],
  first: false
});

/* harmony default export */ __webpack_exports__["default"] = (ProjectIcon);

/***/ })

})
//# sourceMappingURL=index.js.8f83a32c14cc7db8309a.hot-update.js.map