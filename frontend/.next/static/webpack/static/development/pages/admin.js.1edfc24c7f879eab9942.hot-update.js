webpackHotUpdate("static/development/pages/admin.js",{

/***/ "./components/styles/ComponentPadding.js":
/*!***********************************************!*\
  !*** ./components/styles/ComponentPadding.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var ComponentPadding = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ComponentPadding",
  componentId: "sc-1w69lnh-0"
})(["padding:20px;"]);
/* harmony default export */ __webpack_exports__["default"] = (ComponentPadding);

/***/ }),

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CreateItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CreateItem */ "./components/CreateItem.js");
/* harmony import */ var _components_styles_ComponentPadding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/styles/ComponentPadding */ "./components/styles/ComponentPadding.js");
/* harmony import */ var _components_AlternateHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AlternateHeader */ "./components/AlternateHeader.js");
/* harmony import */ var _components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PleaseSignIn */ "./components/PleaseSignIn.js");
var _jsxFileName = "/Users/williamblake/Desktop/range-front/frontend/pages/admin.js";






var Admin = function Admin(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AlternateHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_ComponentPadding__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CreateItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Admin);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/admin")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=admin.js.1edfc24c7f879eab9942.hot-update.js.map