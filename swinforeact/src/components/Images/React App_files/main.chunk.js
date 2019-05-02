(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n  min-height: 100vh;\n}\n\n.App-logo {\n  animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n  pointer-events: none;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_layout_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout/Navbar */ "./src/components/layout/Navbar.js");
/* harmony import */ var _components_layout_DashHome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layout/DashHome */ "./src/components/layout/DashHome.js");
/* harmony import */ var _components_layout_DashPeople__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/DashPeople */ "./src/components/layout/DashPeople.js");
/* harmony import */ var _components_layout_DashPlanets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/DashPlanets */ "./src/components/layout/DashPlanets.js");
/* harmony import */ var _components_layout_DashSpecies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout/DashSpecies */ "./src/components/layout/DashSpecies.js");
/* harmony import */ var _src_components_Images_Background_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Images/Background.png */ "./src/components/Images/Background.png");
/* harmony import */ var _src_components_Images_Background_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_components_Images_Background_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/benjaminclevenger/swinfo/swinforeact/src/App.js";










class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      style: {
        background: "url(".concat(_src_components_Images_Background_png__WEBPACK_IMPORTED_MODULE_7___default.a, ")")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/",
      component: _components_layout_DashHome__WEBPACK_IMPORTED_MODULE_3__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/people",
      component: _components_layout_DashPeople__WEBPACK_IMPORTED_MODULE_4__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/planets",
      component: _components_layout_DashPlanets__WEBPACK_IMPORTED_MODULE_5__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/species",
      component: _components_layout_DashSpecies__WEBPACK_IMPORTED_MODULE_6__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Images/ATAT.jpg":
/*!****************************************!*\
  !*** ./src/components/Images/ATAT.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ATAT.8a59aa63.jpg";

/***/ }),

/***/ "./src/components/Images/Background.png":
/*!**********************************************!*\
  !*** ./src/components/Images/Background.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Background.e4c761cc.png";

/***/ }),

/***/ "./src/components/Images/DeathStar.jpg":
/*!*********************************************!*\
  !*** ./src/components/Images/DeathStar.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/DeathStar.d9bcb7d8.jpg";

/***/ }),

/***/ "./src/components/Images/LukeImg.jpeg":
/*!********************************************!*\
  !*** ./src/components/Images/LukeImg.jpeg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/components/Images/MilFalcon.jpg":
/*!*********************************************!*\
  !*** ./src/components/Images/MilFalcon.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/MilFalcon.b6fb30e7.jpg";

/***/ }),

/***/ "./src/components/Images/ReturnoftheJedi.jpeg":
/*!****************************************************!*\
  !*** ./src/components/Images/ReturnoftheJedi.jpeg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ReturnoftheJedi.6ae3dedb.jpeg";

/***/ }),

/***/ "./src/components/Images/Tattooine.jpeg":
/*!**********************************************!*\
  !*** ./src/components/Images/Tattooine.jpeg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/components/Images/Twilek.jpg":
/*!******************************************!*\
  !*** ./src/components/Images/Twilek.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Twilek.a0fd763d.jpg";

/***/ }),

/***/ "./src/components/layout/DashHome.js":
/*!*******************************************!*\
  !*** ./src/components/layout/DashHome.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashHome; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App */ "./src/App.js");
/* harmony import */ var _layout_cards_CardHome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/cards/CardHome */ "./src/components/layout/cards/CardHome.js");
/* harmony import */ var _Images_LukeImg_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/LukeImg.jpeg */ "./src/components/Images/LukeImg.jpeg");
/* harmony import */ var _Images_LukeImg_jpeg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Images_LukeImg_jpeg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Images_Tattooine_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Images/Tattooine.jpeg */ "./src/components/Images/Tattooine.jpeg");
/* harmony import */ var _Images_Tattooine_jpeg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Images_Tattooine_jpeg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Images_Twilek_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Images/Twilek.jpg */ "./src/components/Images/Twilek.jpg");
/* harmony import */ var _Images_Twilek_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Images_Twilek_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Images_ReturnoftheJedi_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Images/ReturnoftheJedi.jpeg */ "./src/components/Images/ReturnoftheJedi.jpeg");
/* harmony import */ var _Images_ReturnoftheJedi_jpeg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Images_ReturnoftheJedi_jpeg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Images_MilFalcon_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Images/MilFalcon.jpg */ "./src/components/Images/MilFalcon.jpg");
/* harmony import */ var _Images_MilFalcon_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Images_MilFalcon_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Images_ATAT_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Images/ATAT.jpg */ "./src/components/Images/ATAT.jpg");
/* harmony import */ var _Images_ATAT_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Images_ATAT_jpg__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/benjaminclevenger/swinfo/swinforeact/src/components/layout/DashHome.js";









class DashHome extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_cards_CardHome__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "People",
      imageUrl: _Images_LukeImg_jpeg__WEBPACK_IMPORTED_MODULE_3___default.a,
      linkUrl: "/people",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_cards_CardHome__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "Species",
      imageUrl: _Images_Twilek_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
      linkUrl: "/species",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_cards_CardHome__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "Films",
      imageUrl: _Images_ReturnoftheJedi_jpeg__WEBPACK_IMPORTED_MODULE_6___default.a,
      linkUrl: "/films",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_cards_CardHome__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "Planets",
      imageUrl: _Images_Tattooine_jpeg__WEBPACK_IMPORTED_MODULE_4___default.a,
      linkUrl: "/planets",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_cards_CardHome__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "Vehicles",
      imageUrl: _Images_ATAT_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
      linkUrl: "/vehicles",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_cards_CardHome__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "Starships",
      imageUrl: _Images_MilFalcon_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
      linkUrl: "/starships",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })));
  }

}

/***/ }),

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

/***/ }),

/***/ "./src/components/layout/DashPlanets.js":
/*!**********************************************!*\
  !*** ./src/components/layout/DashPlanets.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashPlanets; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/benjaminclevenger/swinfo/swinforeact/src/components/layout/DashPlanets.js";

class DashPlanets extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, "Planets");
  }

}

/***/ }),

/***/ "./src/components/layout/DashSpecies.js":
/*!**********************************************!*\
  !*** ./src/components/layout/DashSpecies.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashSpecies; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/benjaminclevenger/swinfo/swinforeact/src/components/layout/DashSpecies.js";

class DashSpecies extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, "Species");
  }

}

/***/ }),

/***/ "./src/components/layout/Navbar.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Navbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/benjaminclevenger/swinfo/swinforeact/src/components/layout/Navbar.js";

class Navbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: "navbar navbar-expand-lg navbar-dark bg-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "navbar-brand",
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "Star Wars Info"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "navbar-toggler",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarText",
      "aria-controls": "navbarText",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "navbar-toggler-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "collapse navbar-collapse",
      id: "navbarText",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "navbar-nav mr-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav-link",
      href: "/people",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "People ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sr-only",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "(current)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav-link",
      href: "/planets",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Planets ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sr-only",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "(current)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav-link",
      href: "/species",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Species ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sr-only",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "(current)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav-link",
      href: "/films",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Films ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sr-only",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "(current)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav-link",
      href: "/starships",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Starships ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sr-only",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "(current)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav-link",
      href: "/vehicles",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Vehicles ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sr-only",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "(current)")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "navbar-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Everything there is to know about the Star Wars World"))));
  }

}

/***/ }),

/***/ "./src/components/layout/cards/CardHome.js":
/*!*************************************************!*\
  !*** ./src/components/layout/cards/CardHome.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardHome; });
/* harmony import */ var _Users_benjaminclevenger_swinfo_swinforeact_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../App */ "./src/App.js");

var _jsxFileName = "/Users/benjaminclevenger/swinfo/swinforeact/src/components/layout/cards/CardHome.js";

function _templateObject2() {
  const data = Object(_Users_benjaminclevenger_swinfo_swinforeact_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-decoration: none;\n  color: black;\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none;\n  }\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_benjaminclevenger_swinfo_swinforeact_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px rgba(0, 0, 0, 0.24);\n  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n  margin: 10px\n  &:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.5), 0 10px 10px rgba(0, 0, 0, 0.5);\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}





const Card = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
const StyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"])(_templateObject2());
class CardHome extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      name: "",
      imageUrl: "",
      linkUrl: ""
    };
  }

  componentDidMount() {
    const _this$props = this.props,
          name = _this$props.name,
          imageUrl = _this$props.imageUrl,
          linkUrl = _this$props.linkUrl;
    this.setState({
      name,
      imageUrl,
      linkUrl
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-md-4 col-sm-6 md-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLink, {
      to: this.state.linkUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Card, {
      className: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: this.state.imageUrl,
      className: "card-img-top",
      alt: "Loading...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
      className: "text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, this.state.name))));
  }

}

/***/ }),

/***/ "./src/components/layout/cards/CardPeople.js":
/*!***************************************************!*\
  !*** ./src/components/layout/cards/CardPeople.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardPeople; });
/* harmony import */ var _Users_benjaminclevenger_swinfo_swinforeact_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../App */ "./src/App.js");

var _jsxFileName = "/Users/benjaminclevenger/swinfo/swinforeact/src/components/layout/cards/CardPeople.js";

function _templateObject2() {
  const data = Object(_Users_benjaminclevenger_swinfo_swinforeact_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    text-decoration: none;\n    color: black;\n    &:focus,\n    &:hover,\n    &:visited,\n    &:link,\n    &:active {\n      text-decoration: none;\n    }\n  "]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_benjaminclevenger_swinfo_swinforeact_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px rgba(0, 0, 0, 0.24);\n    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n    margin: 10px\n    &:hover {\n      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.5), 0 10px 10px rgba(0, 0, 0, 0.5);\n    }\n  "]);

  _templateObject = function () {
    return data;
  };

  return data;
}





const Card = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
const StyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"])(_templateObject2());
class CardPeople extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      name: ""
    };
  }

  componentDidMount() {
    const name = this.props.name;
    this.setState({
      name
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-md-3 col-sm-6 md-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Card, {
      className: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
      className: "card-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, this.state.name)));
  }

}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/Users/benjaminclevenger/swinfo/swinforeact/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/benjaminclevenger/swinfo/swinforeact/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/benjaminclevenger/swinfo/swinforeact/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map