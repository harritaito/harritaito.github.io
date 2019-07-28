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
      this.props.first ? iconClass += " " : null;
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
      }, ".isvg.jsx-872430500{height:'7em';width:'7em';display:'flex';}.project-icon.jsx-872430500{display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.project-icon.jsx-872430500 .isvg.jsx-872430500{height:7em;width:7em;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.project-icon.jsx-872430500 .square.jsx-872430500 svg.jsx-872430500{max-height:55%;}.project-icon.jsx-872430500 .round.jsx-872430500 svg.jsx-872430500{max-height:63%;}.project-icon.jsx-872430500 svg.jsx-872430500{-webkit-filter:url(../static/grayscale.svg#grayscale) contrast(0);filter:url(../static/grayscale.svg#grayscale) contrast(0);-webkit-filter:grayscale(1) contrast(0);-webkit-transition:all .5s ease;-o-transition:all .5s ease;-webkit-transition:all .5s ease;transition:all .5s ease;max-height:70%;max-width:120%;}.project-icon.jsx-872430500:hover{-webkit-filter:none;filter:none;-webkit-filter:grayscale(0%);cursor:pointer;}.ReactModalPortal.jsx-872430500>div.jsx-872430500{opacity:0;}.ReactModalPortal.jsx-872430500 .ReactModal__Overlay.jsx-872430500{-webkit-transition:opacity 200ms ease-in-out;-o-transition:opacity 200ms ease-in-out;-webkit-transition:opacity 200ms ease-in-out;transition:opacity 200ms ease-in-out;background:rgba(0,0,0,0.15);}.ReactModalPortal.jsx-872430500 .ReactModal__Overlay--after-open.jsx-872430500{opacity:1;}.ReactModalPortal.jsx-872430500 .ReactModal__Overlay--before-close.jsx-872430500{opacity:0;}.ReactModal__Content.jsx-872430500{padding:1em;}.modal-close-button.jsx-872430500{padding:0;border:0;height:1.5em;width:1.5em;position:absolute;right:1.5em;top:1.5em;background:#FAFAFA;}.modal-close-button.jsx-872430500 img.jsx-872430500{height:1.5em;width:1.5em;border:0;background:#FAFAFA;}.modal-close-button.jsx-872430500:hover{cursor:pointer;}.modal-close-button.jsx-872430500:focus{outline:none;}.modal-content.jsx-872430500{-webkit-transition:all 1s ease;-o-transition:all 1s ease;-webkit-transition:all 1s ease;transition:all 1s ease;}.modal-content.jsx-872430500 img.jsx-872430500{display:block;max-width:100%;margin:auto;max-height:300px;-webkit-transition:all 1s ease;-o-transition:all 1s ease;-webkit-transition:all 1s ease;transition:all 1s ease;}.modal-content.jsx-872430500 a.jsx-872430500{margin-right:.5em;}.modal-0-2.jsx-872430500 .loader.jsx-872430500{background:gray;}h2.jsx-872430500{display:block;font-size:1.5em;-webkit-margin-before:0.83em;-webkit-margin-after:0.83em;-webkit-margin-start:0px;-webkit-margin-end:0px;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaGg5NjM0M1xcRG9jdW1lbnRzXFxHaXRIdWJcXGhhcnJpdGFpdG8uZ2l0aHViLmlvXFxjb21wb25lbnRzXFxQcm9qZWN0SWNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0SG9CLEFBRzBCLEFBS08sQUFLVCxBQVdJLEFBSUosQUFJMkMsQUFlOUMsQUFNRixBQUltQyxBQVFuQyxBQUlBLEFBS0UsQUFLRixBQVlHLEFBUUUsQUFJRixBQUtrQixBQU1qQixBQVVJLEFBSUYsQUFHRixVQTdFaEIsQUFZQSxBQUlBLEFBVVcsQ0FsRUssQ0E2RGhCLENBdkVrQixBQXdGSixBQVlkLENBV2lCLEFBaUJDLENBM0dkLEFBSUosQUF1RUEsQ0E2QkEsRUFKQSxDQTVDZSxDQXhFSSxDQU1PLElBVHZCLEFBdUZRLElBdUJHLENBaUJpQixDQXhCSCxDQTdERyxBQWtDakIsRUFZTyxNQXhGakIsQ0FVZSxBQXFHQSxHQWxDQyxDQXpCc0IsUUFxQzFDLElBZXlCLENBUVEsQ0FnQkgsRUFyRmIsQ0FtQ0gsWUFDRixFQW5DWixRQW9DcUIsQ0EzQmtCLEVBNEVaLEVBaEJDLEtBN0d4QixTQTZFSixRQXdCQSxDQXlCeUIsR0F2SEUsQUF1R0YsU0F0RmlCLFdBdUd2QixDQXZIYyxnQkF3SGxDLFlBckdtQyxHQXVCRCxFQTZEakMsMEJBNURBLENBdEI2QiwyQkFFSCxZQXRCRSxzQkFDQyxzQkFzQlosZUFDQSxlQUNqQix5Q0F2QkkiLCJmaWxlIjoiQzpcXFVzZXJzXFxoaDk2MzQzXFxEb2N1bWVudHNcXEdpdEh1YlxcaGFycml0YWl0by5naXRodWIuaW9cXGNvbXBvbmVudHNcXFByb2plY3RJY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IElzdmcgZnJvbSAncmVhY3QtaW5saW5lc3ZnJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuaW1wb3J0IGNsb3NlIGZyb20gJy4uL3N0YXRpYy9tZWRpYS9pY29ucy9jbG9zZS5zdmcnO1xyXG5cclxuXHJcblxyXG5jbGFzcyBQcm9qZWN0SWNvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBtb2RhbE9wZW46IGZhbHNlLFxyXG4gICAgICBpbWFnZUxvYWRlZDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zaG93TW9kYWwgPSB0aGlzLnNob3dNb2RhbC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oaWRlTW9kYWwgPSB0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgbGluazogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgc3ZnOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc3F1YXJlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHJvdW5kOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGxpbmtzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICBmaXJzdDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICBsaW5rOiBcIlwiLFxyXG4gICAgc3ZnOiBcIlwiLFxyXG4gICAgYWx0OiBcIlwiLFxyXG4gICAgaW1hZ2U6IG51bGwsXHJcbiAgICBzcXVhcmU6IGZhbHNlLFxyXG4gICAgcm91bmQ6IGZhbHNlLFxyXG4gICAgbGlua3M6IFtdLFxyXG4gICAgZmlyc3Q6IGZhbHNlXHJcbiAgfTtcclxuXHJcbiAgc2hvd01vZGFsKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGFsT3BlbjogdHJ1ZSB9KTtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgTW9kYWwuc2V0QXBwRWxlbWVudCgnYm9keScpO1xyXG4gIH1cclxuXHJcbiAgaGlkZU1vZGFsKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGFsT3BlbjogZmFsc2UgfSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgbGV0IHNxdWFyZSA9IHRoaXMucHJvcHMuc3F1YXJlID8gXCJzcXVhcmVcIiA6IG51bGw7XHJcbiAgICBsZXQgcm91bmQgPSB0aGlzLnByb3BzLnJvdW5kID8gXCJyb3VuZFwiIDogbnVsbDtcclxuICAgIGxldCBtb2RhbFZpc2libGUgPSBcInZpc2libGVcIjtcclxuICAgIHRoaXMuc3RhdGUuaW1hZ2VMb2FkZWQgPyBtb2RhbFZpc2libGUgPSBcInZpc2libGVcIiA6IG51bGw7XHJcblxyXG4gICAgY29uc3QgbW9kYWxDdXN0b21TdHlsZXMgPSB7XHJcblxyXG4gICAgICBvdmVybGF5IDoge1xyXG4gICAgICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNzUpXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBwYWRkaW5nOiAnMWVtJyxcclxuICAgICAgICB3aWR0aDogJzgwdncnLFxyXG4gICAgICAgIG1heFdpZHRoOiBcIjQwMHB4XCIsXHJcbiAgICAgICAgdG9wOiBcIjBcIixcclxuICAgICAgICBsZWZ0OiBcIjBcIixcclxuICAgICAgICBib3R0b206IFwiMFwiLFxyXG4gICAgICAgIHJpZ2h0OiBcIjBcIixcclxuICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgIG1hcmdpbjogXCIxMHZoIGF1dG9cIixcclxuICAgICAgICB2aXNpYmlsaXR5OiBtb2RhbFZpc2libGUsXHJcbiAgICAgICAgYmFja2dyb3VuZDogXCIjRkFGQUZBXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgaWNvbkNsYXNzID0gXCJwcm9qZWN0LWljb24gY29sLXhzLTYgY29sLXNtLTMgY29sLW1kLTMgY29sLWxnLTMgY29sLXhsLTJcIjtcclxuICAgIHRoaXMucHJvcHMuZmlyc3QgPyBpY29uQ2xhc3MgKz0gXCIgXCIgOiBudWxsO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtpY29uQ2xhc3N9PlxyXG4gICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMuc2hvd01vZGFsfSBzdHlsZT17e21hcmdpbjoxMCwgaGVpZ2h0OiAnN2VtJywgd2lkdGg6ICc3ZW0nfX0+XHJcbiAgICAgICAgICA8b2JqZWN0PjxJc3ZnIHNyYz17dGhpcy5wcm9wcy5zdmd9IGFsdD17dGhpcy5wcm9wcy5hbHR9IGNsYXNzTmFtZT17c3F1YXJlIHx8IHJvdW5kfS8+PC9vYmplY3Q+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLm1vZGFsT3Blbn1cclxuICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXt0aGlzLmhpZGVNb2RhbH1cclxuICAgICAgICAgIGNsb3NlVGltZW91dE1TPXsyMDB9XHJcbiAgICAgICAgICBzdHlsZT17bW9kYWxDdXN0b21TdHlsZXN9XHJcbiAgICAgICAgICBjb250ZW50TGFiZWw9XCJNb2RhbFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhpZGVNb2RhbH0gY2xhc3NOYW1lPXtcIm1vZGFsLWNsb3NlLWJ1dHRvblwifT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Y2xvc2V9IGFsdD17XCJjbG9zZSBidXR0b25cIn0gc3R5bGU9e3tib3JkZXI6IDAsIGhlaWdodDogJzEsNWVtJywgd2lkdGg6ICcxLDVlbScsIGJhY2tncm91bmQ6ICcjRkFGQUZBJ319Lz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxoMj57dGhpcy5wcm9wcy50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5pbWFnZX0gYWx0PXt0aGlzLnByb3BzLmFsdH0gb25Mb2FkPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtpbWFnZUxvYWRlZDogdHJ1ZX0pfSBsb2FkZXI9ezxkaXYgY2xhc3NOYW1lPXtcImxvYWRlclwifT48L2Rpdj4gfS8+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogXCIxLjVlbVwifX0+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgKHRoaXMucHJvcHMubGlua3MpLm1hcChmdW5jdGlvbiAobGluaywgaW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGtleT17bGluay50aXRsZSArIFwibGlua1wiICsgaW5kZXh9IGhyZWY9e2xpbmsudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+e2xpbmsudGl0bGV9PGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdibG9jaycsIGhlaWdodDogOCwgd2lkdGg6ICc5OCUnLCBiYWNrZ3JvdW5kOiAncmdiYSgxMzksIDIwMCwgMjQ2LCAwLjU2NSknLCBtYXJnaW5Ub3A6IC05LCBtYXJnaW5MZWZ0OiAyfX0gLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5pc3ZnIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAnN2VtJzsgXHJcbiAgICAgICAgICAgIHdpZHRoOiAnN2VtJztcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvamVjdC1pY29uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnByb2plY3QtaWNvbiAuaXN2ZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogN2VtO1xyXG4gICAgICAgICAgICB3aWR0aDogN2VtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wcm9qZWN0LWljb24gLnNxdWFyZSBzdmcge1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA1NSU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAucHJvamVjdC1pY29uIC5yb3VuZCBzdmcge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDYzJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnByb2plY3QtaWNvbiBzdmcge1xyXG4gICAgICAgIGZpbHRlcjogdXJsKC4uL3N0YXRpYy9ncmF5c2NhbGUuc3ZnI2dyYXlzY2FsZSkgY29udHJhc3QoMCk7XHJcbiAgICAgICAgLyogRmlyZWZveCAzLjUrICovXHJcbiAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBjb250cmFzdCgwKTtcclxuICAgICAgICAvKiBHb29nbGUgQ2hyb21lICYgU2FmYXJpIDYrICovXHJcblxyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG5cclxuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcblxyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA3MCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucHJvamVjdC1pY29uOmhvdmVyIHtcclxuICAgICAgICBmaWx0ZXI6IG5vbmU7XHJcbiAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgwJSk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuUmVhY3RNb2RhbFBvcnRhbCA+IGRpdiB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLlJlYWN0TW9kYWxQb3J0YWwgLlJlYWN0TW9kYWxfX092ZXJsYXkge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBlYXNlLWluLW91dDtcclxuICAgICAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIC5SZWFjdE1vZGFsUG9ydGFsIC5SZWFjdE1vZGFsX19PdmVybGF5LS1hZnRlci1vcGVuIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuUmVhY3RNb2RhbFBvcnRhbCAuUmVhY3RNb2RhbF9fT3ZlcmxheS0tYmVmb3JlLWNsb3NlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLlJlYWN0TW9kYWxfX0NvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIC5tb2RhbC1jbG9zZS1idXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGhlaWdodDogMS41ZW07XHJcbiAgICAgICAgd2lkdGg6IDEuNWVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMS41ZW07XHJcbiAgICAgICAgdG9wOiAxLjVlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLm1vZGFsLWNsb3NlLWJ1dHRvbiBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMS41ZW07XHJcbiAgICAgICAgd2lkdGg6IDEuNWVtO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLm1vZGFsLWNsb3NlLWJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubW9kYWwtY2xvc2UtYnV0dG9uOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAubW9kYWwtY29udGVudCB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1vZGFsLWNvbnRlbnQgaW1nIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tb2RhbC1jb250ZW50IGEge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLjVlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1vZGFsLTAtMiAubG9hZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgICB9XHJcbiAgICAgIGgye1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgLXdlYmtpdC1tYXJnaW4tYmVmb3JlOiAwLjgzZW07XHJcbiAgICAgICAgLXdlYmtpdC1tYXJnaW4tYWZ0ZXI6IDAuODNlbTtcclxuICAgICAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogMHB4O1xyXG4gICAgICAgIC13ZWJraXQtbWFyZ2luLWVuZDogMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgIH1cclxuXHJcbiAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0SWNvbjtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\hh96343\\Documents\\GitHub\\harritaito.github.io\\components\\ProjectIcon.js */"));
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
//# sourceMappingURL=index.js.2557a6c51b5c30753c33.hot-update.js.map