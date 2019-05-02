webpackHotUpdate("main",{

/***/ "./src/components/layout/DashPeople.js":
/*!*********************************************!*\
  !*** ./src/components/layout/DashPeople.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashPeople; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cards_CardPeople__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards/CardPeople */ "./src/components/layout/cards/CardPeople.js");
/* harmony import */ var _Images_DeathStar_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/DeathStar.jpg */ "./src/components/Images/DeathStar.jpg");
/* harmony import */ var _Images_DeathStar_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Images_DeathStar_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-animated-css */ "./node_modules/react-animated-css/lib/index.js");
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_animated_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/benjaminclevenger/swinfo/swinforeact/src/components/layout/DashPeople.js";






class DashPeople extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      url: "https://swapi.co/api/people/",
      people: null
    };
  }

  async componentDidMount() {
    const res = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.state.url);
    this.setState({
      people: res.data["results"]
    });
    console.log(this.state.people.length);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, this.state.people ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, this.state.people.map(people => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cards_CardPeople__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: people.name,
      name: people.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animated_css__WEBPACK_IMPORTED_MODULE_5__["Animated"], {
      AnimationIn: "swing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "",
      src: _Images_DeathStar_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })));
  }

}

/***/ })

})
//# sourceMappingURL=main.d9821108012c74d13ad5.hot-update.js.map