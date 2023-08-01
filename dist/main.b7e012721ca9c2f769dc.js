/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Roboto/Roboto-Regular.ttf */ "./src/assets/Roboto/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Roboto/Roboto-Bold.ttf */ "./src/assets/Roboto/Roboto-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

@font-face {
    font-family: 'Roboto';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}), url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

body {
    width: 100%;
    min-height: 100vh;
    line-height: 1.3rem;
    font-family:'Roboto' ,Arial, Helvetica, sans-serif;
    padding-top: 6rem;
    background-color: azure;
    padding: 6rem 0;
}

.content {
    width: 100%;
    display: flex;
    align-items: top;
    flex-direction: column;
}

a {
    text-decoration: none;
    color: black;
}

nav {
    background-color: yellow;
    display: flex;
    padding: .5rem;
    justify-content: center;
    width: 100%;
    position: fixed;
    top: 0;
}

ul {
    display: flex;
    list-style: none;
    gap: 2rem;
}

nav ul li {
    padding: .5rem;
    
}

nav ul li a:hover {
   color: white;
}

 div#home {
   width: 100%;
   height: 65vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   /* text-align: center; */
}

#home h2 {
    margin-bottom: 3rem;
}

section#about > div {
    display: flex;
    padding: 0 7rem;
    justify-content: center;
    align-items: top;
    flex-wrap: wrap;
}

div#about h2 {
    margin-bottom: 2rem;
}

div#info {
  width: 100%;
  height: 90vh;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

div#menu {
   width: 100%;
   height: auto;
   padding: 0 8rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: end;
}

#menu > h2 {
    margin-bottom: 3rem;
}

div#about {
  display: flex;
  flex-direction: row;
  align-items: center;
}

div#about > img {
    width: 10rem;
}

.home-top img {
    width: 9rem;
}

.home-top {
   display: flex;
   align-items: center;
}
.contact {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 1rem;
}


.contact-left {
  flex: auto;
  flex-basis: 50%;
  display: flex;
  justify-content: start;
  align-items: start;
  padding: 0 2rem;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
}

.info-box {
    background-color: yellow;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: .3rem;
    border-radius: .5rem;
}

.contact-right {
    flex: auto;
    flex-basis: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.contact-right img {
    width: 35rem;
}

.home-card {
    height: auto; 
    width: 25%;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, .4);
    font-size: 1rem;
    padding: 1rem;
    cursor: pointer;
    transition: background-color,color .2s;
}

.home-card:hover {
    background-color: rgb(167, 167, 45);
    color: white;
}

.home-card p {
    display: block;
}

.cards {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    min-width: 8rem;
}

hr {
    margin: .5rem 0;
}

.product-cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
  grid-auto-rows: auto;
  gap: 1rem;
}

.product-card {
  margin: .2rem;
  border: 1px solid;
  transition: box-shadow,border .2s;
}

.product-card:hover {
  box-shadow: 1px 1px 2px rgba(0, 0, 0, .4);
  border: none;
}

.product-card img {
    width: 100%;
}

.product-card  > div {
    padding: .5rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

.contact-left img {
    width: 10rem;
}

h2 {
    margin-top: 1rem;
}

div#menu h2 {
    margin-top: 4rem;
}

.about-tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 65vh;
}

.about-tab h2 {
    margin-bottom: 2rem;
}

.about-tab > div {
    display: flex;
}

.menu {
    padding: 0 8rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
}

/* .menu > h2 {
    margin-top: 6rem;
} */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    src: url(./assets/Roboto/Roboto-Regular.ttf), url(./assets/Roboto/Roboto-Bold.ttf);\r\n}\r\n\r\nbody {\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    line-height: 1.3rem;\r\n    font-family:'Roboto' ,Arial, Helvetica, sans-serif;\r\n    padding-top: 6rem;\r\n    background-color: azure;\r\n    padding: 6rem 0;\r\n}\r\n\r\n.content {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: top;\r\n    flex-direction: column;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\nnav {\r\n    background-color: yellow;\r\n    display: flex;\r\n    padding: .5rem;\r\n    justify-content: center;\r\n    width: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n}\r\n\r\nul {\r\n    display: flex;\r\n    list-style: none;\r\n    gap: 2rem;\r\n}\r\n\r\nnav ul li {\r\n    padding: .5rem;\r\n    \r\n}\r\n\r\nnav ul li a:hover {\r\n   color: white;\r\n}\r\n\r\n div#home {\r\n   width: 100%;\r\n   height: 65vh;\r\n   display: flex;\r\n   flex-direction: column;\r\n   align-items: center;\r\n   /* text-align: center; */\r\n}\r\n\r\n#home h2 {\r\n    margin-bottom: 3rem;\r\n}\r\n\r\nsection#about > div {\r\n    display: flex;\r\n    padding: 0 7rem;\r\n    justify-content: center;\r\n    align-items: top;\r\n    flex-wrap: wrap;\r\n}\r\n\r\ndiv#about h2 {\r\n    margin-bottom: 2rem;\r\n}\r\n\r\ndiv#info {\r\n  width: 100%;\r\n  height: 90vh;\r\n  font-size: 2rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\ndiv#menu {\r\n   width: 100%;\r\n   height: auto;\r\n   padding: 0 8rem;\r\n   display: flex;\r\n   flex-direction: column;\r\n   align-items: center;\r\n   justify-content: end;\r\n}\r\n\r\n#menu > h2 {\r\n    margin-bottom: 3rem;\r\n}\r\n\r\ndiv#about {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n\r\ndiv#about > img {\r\n    width: 10rem;\r\n}\r\n\r\n.home-top img {\r\n    width: 9rem;\r\n}\r\n\r\n.home-top {\r\n   display: flex;\r\n   align-items: center;\r\n}\r\n.contact {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    gap: 1rem;\r\n}\r\n\r\n\r\n.contact-left {\r\n  flex: auto;\r\n  flex-basis: 50%;\r\n  display: flex;\r\n  justify-content: start;\r\n  align-items: start;\r\n  padding: 0 2rem;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n.info-box {\r\n    background-color: yellow;\r\n    padding: 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .3rem;\r\n    border-radius: .5rem;\r\n}\r\n\r\n.contact-right {\r\n    flex: auto;\r\n    flex-basis: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.contact-right img {\r\n    width: 35rem;\r\n}\r\n\r\n.home-card {\r\n    height: auto; \r\n    width: 25%;\r\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, .4);\r\n    font-size: 1rem;\r\n    padding: 1rem;\r\n    cursor: pointer;\r\n    transition: background-color,color .2s;\r\n}\r\n\r\n.home-card:hover {\r\n    background-color: rgb(167, 167, 45);\r\n    color: white;\r\n}\r\n\r\n.home-card p {\r\n    display: block;\r\n}\r\n\r\n.cards {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n    flex-wrap: wrap;\r\n    min-width: 8rem;\r\n}\r\n\r\nhr {\r\n    margin: .5rem 0;\r\n}\r\n\r\n.product-cards {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));\r\n  grid-auto-rows: auto;\r\n  gap: 1rem;\r\n}\r\n\r\n.product-card {\r\n  margin: .2rem;\r\n  border: 1px solid;\r\n  transition: box-shadow,border .2s;\r\n}\r\n\r\n.product-card:hover {\r\n  box-shadow: 1px 1px 2px rgba(0, 0, 0, .4);\r\n  border: none;\r\n}\r\n\r\n.product-card img {\r\n    width: 100%;\r\n}\r\n\r\n.product-card  > div {\r\n    padding: .5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .5rem;\r\n}\r\n\r\n.contact-left img {\r\n    width: 10rem;\r\n}\r\n\r\nh2 {\r\n    margin-top: 1rem;\r\n}\r\n\r\ndiv#menu h2 {\r\n    margin-top: 4rem;\r\n}\r\n\r\n.about-tab {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: 65vh;\r\n}\r\n\r\n.about-tab h2 {\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.about-tab > div {\r\n    display: flex;\r\n}\r\n\r\n.menu {\r\n    padding: 0 8rem;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n/* .menu > h2 {\r\n    margin-top: 6rem;\r\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   days: () => (/* binding */ days),
/* harmony export */   description: () => (/* binding */ description),
/* harmony export */   introText: () => (/* binding */ introText),
/* harmony export */   salads: () => (/* binding */ salads)
/* harmony export */ });
const introText = `Welcome to Petite, a cozy and inviting restaurant that offers a unique dining experience. Our menu features an eclectic mix of dishes inspired by global cuisines, all made with the freshest, high-quality ingredients. Our intimate atmosphere, attentive service, and delicious cuisine make us the perfect destination for a romantic dinner, a family gathering, or a night out with friends.`;

const days = [
   ' Sunday: 8am - 8pm',
   ' Monday: 6am - 6pm',
   ' Tuesday: 6am - 6pm',
    'Wednesday: 6am - 6pm',
  '  Thursday: 6am - 10pm',
  '  Friday: 6am - 10pm',
   ' Saturday: 8am - 10pm',
];

const description = `
Whether you're looking for an intimate dinner for two or a lively gathering with friends, Petite is the perfect choice. Come and experience our unique blend of flavors, hospitality, and ambiance for yourself. We look forward to welcoming you!
`;

const salads = [
   {
     name: "Classic Caesar Salad",
     description: "Crisp romaine lettuce, garlic croutons, shaved Parmesan cheese, and our house-made Caesar dressing. A timeless favorite that's always in season!",
   },
   {
     name: "Mediterranean Salad",
     description: "Fresh mixed greens, cherry tomatoes, sliced cucumbers, red onion, Kalamata olives, and crumbled feta cheese, all tossed in a tangy red wine vinaigrette. Satisfying and packed with flavor!",
   },
   {
     name: "Kale and Quinoa Salad",
     description: "Tender kale leaves, fluffy quinoa, sliced almonds, dried cranberries, and crumbled goat cheese, all tossed in a zesty lemon vinaigrette. A superfood-packed salad that's as nutritious as it is delicious!",
   },
   {
     name: "Tex-Mex Salad",
     description: "Mixed greens, grilled chicken, black beans, roasted corn, diced avocado, and tortilla strips, all tossed in a spicy chipotle ranch dressing. A hearty and satisfying salad that's perfect for lunch or dinner!",
   },
   {
     name: "Asian Sesame Salad",
     description: "Crisp lettuce, shredded red cabbage, shredded carrots, sliced almonds, and crispy wonton strips, all tossed in a sweet and savory sesame dressing. A refreshing salad with an Asian-inspired twist!",
   },
   {
     name: "Caprese Salad",
     description: "Fresh sliced tomatoes, creamy mozzarella cheese, and fragrant basil leaves, all drizzled with balsamic glaze and extra-virgin olive oil. A simple and delicious salad that's perfect for summer!",
   }
 ];

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _assets_hd2_removebg_preview_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/hd2-removebg-preview.png */ "./src/assets/hd2-removebg-preview.png");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _assets_re2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/re2.jpg */ "./src/assets/re2.jpg");
/* harmony import */ var _assets_sa1_avif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/sa1.avif */ "./src/assets/sa1.avif");
/* harmony import */ var _assets_sa2_avif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/sa2.avif */ "./src/assets/sa2.avif");
/* harmony import */ var _assets_sa3_avif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/sa3.avif */ "./src/assets/sa3.avif");
/* harmony import */ var _assets_sa4_avif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/sa4.avif */ "./src/assets/sa4.avif");
/* harmony import */ var _assets_sa5_avif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/sa5.avif */ "./src/assets/sa5.avif");
/* harmony import */ var _assets_sa6_avif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/sa6.avif */ "./src/assets/sa6.avif");













const homeSection = (function() {
    function homeSectionTop() {
        const div = document.createElement('div');
        div.classList.add('home-top');
        const image = document.createElement('img');
        image.alt = 'logo image';
        image.src = _assets_hd2_removebg_preview_png__WEBPACK_IMPORTED_MODULE_0__;
        const p = document.createElement('p');
        p.innerText = 'Petite Restaurant';
        div.append(image);
        div.append(p);
        return div;
    }

    function homeSectionCards() {
       function HomeCard(title, text) {
        this.title = title;
          this.text = text;
       }
       
       const cards = document.createElement('div')
       cards.classList.add('cards');

       const cardInfoList = [
         new HomeCard('Hello',_constants__WEBPACK_IMPORTED_MODULE_1__.introText),
         new HomeCard('Working Hours',_constants__WEBPACK_IMPORTED_MODULE_1__.days),
         new HomeCard('Address','Address: 14122 Brundish Chinhoyi Zimbabwe'),
       ];

       const homeCards = cardInfoList.map(item => {
          const div = document.createElement('div');
          div.classList.add('home-card');
          const h2 = document.createElement('h2');
          h2.innerText = item.title;
          const hr = document.createElement('hr');
          div.append(h2, hr);
          if(Array.isArray(item.text)) {
             item.text.forEach(i => {
                const p = document.createElement('p');
                p.innerText = i;
                div.append(p);
             });
             return div;
          };

          
           const p = document.createElement('p');
           p.innerText = item.text
           div.append(p);
           return div;
       });
       homeCards.forEach(item => {
          cards.append(item);
       });
       return cards;
    }
    return { homeSectionTop, homeSectionCards };
})();

const contactSection = (function (){
    const div = document.createElement('div');
    div.classList.add('contact');

    function contactLeft() {
        const contactLeft = document.createElement('div');
        contactLeft.classList.add('contact-left');
         const logoTopImage = document.createElement('img');
         logoTopImage.alt = 'logo image';
         logoTopImage.src = _assets_hd2_removebg_preview_png__WEBPACK_IMPORTED_MODULE_0__;
         contactLeft.append(logoTopImage);
        const p = document.createElement('p');
        p.innerText = _constants__WEBPACK_IMPORTED_MODULE_1__.description;
        contactLeft.append(p);

        const infoBox = document.createElement('div');
        infoBox.classList.add('info-box');
        const emailP = document.createElement('p');
        emailP.innerText = 'Email: sibandadonty@gmail.com';
        const addressP = document.createElement('p');
        addressP.innerText = 'Address: 14122 Brundish Chinhoyi Zimbabwe';
        const phoneP = document.createElement('p');
        phoneP.innerText = 'Phone: 0787645731';
        infoBox.append(addressP, emailP, phoneP);
        contactLeft.appendChild(infoBox);
        return contactLeft;
    }

    function contactRight() {
        const contactRight = document.createElement('div');
        contactRight.classList.add('contact-right');
        const image = document.createElement('img');
        image.alt = 'about us image';
        image.src = _assets_re2_jpg__WEBPACK_IMPORTED_MODULE_2__;
        contactRight.append(image);
        return contactRight;
    }

    return {
       contactLeft,
       contactRight
    }
})()

const menuSection = (function(){
    function Product(name, image, description) {
       this.name = name;
       this.image = image;
       this.description = description;
    }
    const imagesList = [_assets_sa1_avif__WEBPACK_IMPORTED_MODULE_3__, _assets_sa2_avif__WEBPACK_IMPORTED_MODULE_4__, _assets_sa3_avif__WEBPACK_IMPORTED_MODULE_5__, _assets_sa4_avif__WEBPACK_IMPORTED_MODULE_6__, _assets_sa5_avif__WEBPACK_IMPORTED_MODULE_7__, _assets_sa6_avif__WEBPACK_IMPORTED_MODULE_8__];
    const productsInfoList = _constants__WEBPACK_IMPORTED_MODULE_1__.salads.map((salad, i) => {
        
        const prod = new Product(salad.name,imagesList[i] , salad.description);
        return prod; 
    });

    const productsDiv = document.createElement('div');
    productsDiv.classList.add('product-cards');
    
    for (let i = 0; i < productsInfoList.length; i++) {
        const data =  productsInfoList[i];
        const product = document.createElement('div');
        const image = document.createElement('img');
        image.alt = 'product image';
        image.src = data.image;
        const div = document.createElement('div');
        const name = document.createElement('h2');
        name.innerText = data.name;
        const p = document.createElement('p');
        p.innerText = productsInfoList[i].description;
        const hr = document.createElement('hr');
        div.append(name,hr ,p);
        product.append(image,div);
        product.classList.add('product-card');
        productsDiv.append(product);
    }

    return { productsDiv };
})()

function createLayout() {
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');
    const div = document.createElement('div');
    div.id = 'target';
    div.append(renderMenuSection());
    contentDiv.append(navBar(), div);
    document.querySelector('body').append(contentDiv);
}

function navBar() {
    function ListItem(text,id) {
        this.text = text;
        this.id = id;
    }
    
    const navItems = [
        new ListItem('Menu', 'menu'),
        new ListItem('Info', 'info'),
        new ListItem('About-Us', 'about'),
    ]

    const bar = document.createElement('nav');
    const ul = document.createElement('ul');
    navItems.forEach((item,index)=> {
       const li = document.createElement('li');
       const a = document.createElement('a');
       a.href = '#' + item.id;
       a.innerText = item.text;
       a.classList.add(`nav-item-${index}`)
       li.append(a);
       ul.append(li)
    });
    bar.append(ul);
    return bar;
}

function renderHomeSection() {
    const div = document.createElement('div');
    div.id = 'home';
    const heading = document.createElement('h2');
    heading.innerText = 'Infomation';
    const homeSectionCards = homeSection.homeSectionCards();
    div.append(heading ,homeSectionCards);
    return div;
}

function renderAboutSection() {
    const sectione = document.createElement('div');
    sectione.classList.add('about-tab')
    const aboutSectionLeft = contactSection.contactLeft();
    const aboutSectionRight = contactSection.contactRight();
    const wrapper =document.createElement('div');
    const logoTopImage = document.createElement('img');
    logoTopImage.alt = 'logo image';
    logoTopImage.src = _assets_hd2_removebg_preview_png__WEBPACK_IMPORTED_MODULE_0__;
    wrapper.append(aboutSectionLeft, aboutSectionRight);
    const heading4 = document.createElement('h2');
    heading4.innerText = 'About-Us';
    heading4.id = 'about';
    sectione.append(heading4,wrapper);
    return sectione;
}

function renderMenuSection() {
    const div = document.createElement('div');
    div.classList.add('menu');
    const heading2 = document.createElement('h2');
    heading2.innerText = 'Menu';
    heading2.id = 'menu';
    div.append(heading2,menuSection.productsDiv);
    return div;
}

function switchScreen() {

   function splitHref(hrefLink) {
      const arr = hrefLink.split('#');
      return arr[1];
   }
   
   function shuffle(item) {
    const clickedItem = splitHref(item);
    switch (clickedItem) {
        case 'home':
             return renderHomeSection();
        case 'menu':
             return renderMenuSection();
        case 'about':
             return renderAboutSection();
        default:
            return renderHomeSection();
    }
   }
    document.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', (e) => {
        document.getElementById('target').innerHTML = null;
        console.log(e.target.href)
        document.getElementById('target').append(shuffle(e.target.href));
       });
    });
}

function pageLoad() {
    createLayout();
    switchScreen();
 }


/***/ }),

/***/ "./src/assets/Roboto/Roboto-Bold.ttf":
/*!*******************************************!*\
  !*** ./src/assets/Roboto/Roboto-Bold.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f80816a5455d171f948d.ttf";

/***/ }),

/***/ "./src/assets/Roboto/Roboto-Regular.ttf":
/*!**********************************************!*\
  !*** ./src/assets/Roboto/Roboto-Regular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/assets/hd2-removebg-preview.png":
/*!*********************************************!*\
  !*** ./src/assets/hd2-removebg-preview.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b46fb9a1075d96e91bd4.png";

/***/ }),

/***/ "./src/assets/re2.jpg":
/*!****************************!*\
  !*** ./src/assets/re2.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b507d796787e73745c8d.jpg";

/***/ }),

/***/ "./src/assets/sa1.avif":
/*!*****************************!*\
  !*** ./src/assets/sa1.avif ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e715df8d03e6a8446a7.avif";

/***/ }),

/***/ "./src/assets/sa2.avif":
/*!*****************************!*\
  !*** ./src/assets/sa2.avif ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f566768453d7e3483672.avif";

/***/ }),

/***/ "./src/assets/sa3.avif":
/*!*****************************!*\
  !*** ./src/assets/sa3.avif ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f566768453d7e3483672.avif";

/***/ }),

/***/ "./src/assets/sa4.avif":
/*!*****************************!*\
  !*** ./src/assets/sa4.avif ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d31c4638988f8ced3311.avif";

/***/ }),

/***/ "./src/assets/sa5.avif":
/*!*****************************!*\
  !*** ./src/assets/sa5.avif ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9ab281efedda295b7b6.avif";

/***/ }),

/***/ "./src/assets/sa6.avif":
/*!*****************************!*\
  !*** ./src/assets/sa6.avif ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d8576db7bdf4ac004e5.avif";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");



const run = () => (0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])();
       
run();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iN2UwMTI3MjFjYTljMmY3NjlkYy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlKQUFxRDtBQUNqRyw0Q0FBNEMsMklBQWtEO0FBQzlGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DLFNBQVMsbUNBQW1DO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsU0FBUyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdB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QTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2dCO0FBQ3JDO0FBQ0Esa0JBQWtCLGtEQUFjO0FBQ2hDO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL1JvYm90by9Sb2JvdG8tQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjNyZW07XHJcbiAgICBmb250LWZhbWlseTonUm9ib3RvJyAsQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmctdG9wOiA2cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XHJcbiAgICBwYWRkaW5nOiA2cmVtIDA7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiB0b3A7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxubmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG5uYXYgdWwgbGkge1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbiAgICBcclxufVxyXG5cclxubmF2IHVsIGxpIGE6aG92ZXIge1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiBkaXYjaG9tZSB7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBoZWlnaHQ6IDY1dmg7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxufVxyXG5cclxuI2hvbWUgaDIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxufVxyXG5cclxuc2VjdGlvbiNhYm91dCA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMCA3cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogdG9wO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG5kaXYjYWJvdXQgaDIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuZGl2I2luZm8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOTB2aDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmRpdiNtZW51IHtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGhlaWdodDogYXV0bztcclxuICAgcGFkZGluZzogMCA4cmVtO1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxufVxyXG5cclxuI21lbnUgPiBoMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG5kaXYjYWJvdXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5kaXYjYWJvdXQgPiBpbWcge1xyXG4gICAgd2lkdGg6IDEwcmVtO1xyXG59XHJcblxyXG4uaG9tZS10b3AgaW1nIHtcclxuICAgIHdpZHRoOiA5cmVtO1xyXG59XHJcblxyXG4uaG9tZS10b3Age1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jb250YWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuXHJcbi5jb250YWN0LWxlZnQge1xyXG4gIGZsZXg6IGF1dG87XHJcbiAgZmxleC1iYXNpczogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgcGFkZGluZzogMCAycmVtO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5mby1ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAuM3JlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG59XHJcblxyXG4uY29udGFjdC1yaWdodCB7XHJcbiAgICBmbGV4OiBhdXRvO1xyXG4gICAgZmxleC1iYXNpczogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhY3QtcmlnaHQgaW1nIHtcclxuICAgIHdpZHRoOiAzNXJlbTtcclxufVxyXG5cclxuLmhvbWUtY2FyZCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87IFxyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgLjQpO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IsY29sb3IgLjJzO1xyXG59XHJcblxyXG4uaG9tZS1jYXJkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjcsIDE2NywgNDUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaG9tZS1jYXJkIHAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jYXJkcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1pbi13aWR0aDogOHJlbTtcclxufVxyXG5cclxuaHIge1xyXG4gICAgbWFyZ2luOiAuNXJlbSAwO1xyXG59XHJcblxyXG4ucHJvZHVjdC1jYXJkcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIxcmVtLCAxZnIpKTtcclxuICBncmlkLWF1dG8tcm93czogYXV0bztcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNhcmQge1xyXG4gIG1hcmdpbjogLjJyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyxib3JkZXIgLjJzO1xyXG59XHJcblxyXG4ucHJvZHVjdC1jYXJkOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIC40KTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNhcmQgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZHVjdC1jYXJkICA+IGRpdiB7XHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAuNXJlbTtcclxufVxyXG5cclxuLmNvbnRhY3QtbGVmdCBpbWcge1xyXG4gICAgd2lkdGg6IDEwcmVtO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG5kaXYjbWVudSBoMiB7XHJcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG59XHJcblxyXG4uYWJvdXQtdGFiIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNjV2aDtcclxufVxyXG5cclxuLmFib3V0LXRhYiBoMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4uYWJvdXQtdGFiID4gZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICAgIHBhZGRpbmc6IDAgOHJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLyogLm1lbnUgPiBoMiB7XHJcbiAgICBtYXJnaW4tdG9wOiA2cmVtO1xyXG59ICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIscUZBQWtGO0FBQ3RGOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0RBQWtEO0lBQ2xELGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsTUFBTTtBQUNWOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjOztBQUVsQjs7QUFFQTtHQUNHLFlBQVk7QUFDZjs7Q0FFQztHQUNFLFdBQVc7R0FDWCxZQUFZO0dBQ1osYUFBYTtHQUNiLHNCQUFzQjtHQUN0QixtQkFBbUI7R0FDbkIsd0JBQXdCO0FBQzNCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7R0FDRyxXQUFXO0dBQ1gsWUFBWTtHQUNaLGVBQWU7R0FDZixhQUFhO0dBQ2Isc0JBQXNCO0dBQ3RCLG1CQUFtQjtHQUNuQixvQkFBb0I7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7R0FDRyxhQUFhO0dBQ2IsbUJBQW1CO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTO0FBQ2I7OztBQUdBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZixhQUFhO0lBQ2IsZUFBZTtJQUNmLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsWUFBWTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTs7R0FFR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBzcmM6IHVybCguL2Fzc2V0cy9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmKSwgdXJsKC4vYXNzZXRzL1JvYm90by9Sb2JvdG8tQm9sZC50dGYpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4zcmVtO1xcclxcbiAgICBmb250LWZhbWlseTonUm9ib3RvJyAsQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDZyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcclxcbiAgICBwYWRkaW5nOiA2cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiB0b3A7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBsaSB7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIGxpIGE6aG92ZXIge1xcclxcbiAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuIGRpdiNob21lIHtcXHJcXG4gICB3aWR0aDogMTAwJTtcXHJcXG4gICBoZWlnaHQ6IDY1dmg7XFxyXFxuICAgZGlzcGxheTogZmxleDtcXHJcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZSBoMiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24jYWJvdXQgPiBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiAwIDdyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogdG9wO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbmRpdiNhYm91dCBoMiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbmRpdiNpbmZvIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbmRpdiNtZW51IHtcXHJcXG4gICB3aWR0aDogMTAwJTtcXHJcXG4gICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgcGFkZGluZzogMCA4cmVtO1xcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudSA+IGgyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2I2Fib3V0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZGl2I2Fib3V0ID4gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS10b3AgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDlyZW07XFxyXFxufVxcclxcblxcclxcbi5ob21lLXRvcCB7XFxyXFxuICAgZGlzcGxheTogZmxleDtcXHJcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uY29udGFjdCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNvbnRhY3QtbGVmdCB7XFxyXFxuICBmbGV4OiBhdXRvO1xcclxcbiAgZmxleC1iYXNpczogNTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICBwYWRkaW5nOiAwIDJyZW07XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tYm94IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IC4zcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtcmlnaHQge1xcclxcbiAgICBmbGV4OiBhdXRvO1xcclxcbiAgICBmbGV4LWJhc2lzOiA1MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1yaWdodCBpbWcge1xcclxcbiAgICB3aWR0aDogMzVyZW07XFxyXFxufVxcclxcblxcclxcbi5ob21lLWNhcmQge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87IFxcclxcbiAgICB3aWR0aDogMjUlO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIC40KTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IsY29sb3IgLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1jYXJkOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NywgMTY3LCA0NSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtY2FyZCBwIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5jYXJkcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIG1pbi13aWR0aDogOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaHIge1xcclxcbiAgICBtYXJnaW46IC41cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0LWNhcmRzIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjFyZW0sIDFmcikpO1xcclxcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0LWNhcmQge1xcclxcbiAgbWFyZ2luOiAuMnJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyxib3JkZXIgLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC1jYXJkOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgLjQpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC1jYXJkIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC1jYXJkICA+IGRpdiB7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1sZWZ0IGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYjbWVudSBoMiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDRyZW07XFxyXFxufVxcclxcblxcclxcbi5hYm91dC10YWIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDY1dmg7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC10YWIgaDIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdGFiID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgICBwYWRkaW5nOiAwIDhyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLm1lbnUgPiBoMiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDZyZW07XFxyXFxufSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGludHJvVGV4dCA9IGBXZWxjb21lIHRvIFBldGl0ZSwgYSBjb3p5IGFuZCBpbnZpdGluZyByZXN0YXVyYW50IHRoYXQgb2ZmZXJzIGEgdW5pcXVlIGRpbmluZyBleHBlcmllbmNlLiBPdXIgbWVudSBmZWF0dXJlcyBhbiBlY2xlY3RpYyBtaXggb2YgZGlzaGVzIGluc3BpcmVkIGJ5IGdsb2JhbCBjdWlzaW5lcywgYWxsIG1hZGUgd2l0aCB0aGUgZnJlc2hlc3QsIGhpZ2gtcXVhbGl0eSBpbmdyZWRpZW50cy4gT3VyIGludGltYXRlIGF0bW9zcGhlcmUsIGF0dGVudGl2ZSBzZXJ2aWNlLCBhbmQgZGVsaWNpb3VzIGN1aXNpbmUgbWFrZSB1cyB0aGUgcGVyZmVjdCBkZXN0aW5hdGlvbiBmb3IgYSByb21hbnRpYyBkaW5uZXIsIGEgZmFtaWx5IGdhdGhlcmluZywgb3IgYSBuaWdodCBvdXQgd2l0aCBmcmllbmRzLmA7XHJcblxyXG5leHBvcnQgY29uc3QgZGF5cyA9IFtcclxuICAgJyBTdW5kYXk6IDhhbSAtIDhwbScsXHJcbiAgICcgTW9uZGF5OiA2YW0gLSA2cG0nLFxyXG4gICAnIFR1ZXNkYXk6IDZhbSAtIDZwbScsXHJcbiAgICAnV2VkbmVzZGF5OiA2YW0gLSA2cG0nLFxyXG4gICcgIFRodXJzZGF5OiA2YW0gLSAxMHBtJyxcclxuICAnICBGcmlkYXk6IDZhbSAtIDEwcG0nLFxyXG4gICAnIFNhdHVyZGF5OiA4YW0gLSAxMHBtJyxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZXNjcmlwdGlvbiA9IGBcclxuV2hldGhlciB5b3UncmUgbG9va2luZyBmb3IgYW4gaW50aW1hdGUgZGlubmVyIGZvciB0d28gb3IgYSBsaXZlbHkgZ2F0aGVyaW5nIHdpdGggZnJpZW5kcywgUGV0aXRlIGlzIHRoZSBwZXJmZWN0IGNob2ljZS4gQ29tZSBhbmQgZXhwZXJpZW5jZSBvdXIgdW5pcXVlIGJsZW5kIG9mIGZsYXZvcnMsIGhvc3BpdGFsaXR5LCBhbmQgYW1iaWFuY2UgZm9yIHlvdXJzZWxmLiBXZSBsb29rIGZvcndhcmQgdG8gd2VsY29taW5nIHlvdSFcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBzYWxhZHMgPSBbXHJcbiAgIHtcclxuICAgICBuYW1lOiBcIkNsYXNzaWMgQ2Flc2FyIFNhbGFkXCIsXHJcbiAgICAgZGVzY3JpcHRpb246IFwiQ3Jpc3Agcm9tYWluZSBsZXR0dWNlLCBnYXJsaWMgY3JvdXRvbnMsIHNoYXZlZCBQYXJtZXNhbiBjaGVlc2UsIGFuZCBvdXIgaG91c2UtbWFkZSBDYWVzYXIgZHJlc3NpbmcuIEEgdGltZWxlc3MgZmF2b3JpdGUgdGhhdCdzIGFsd2F5cyBpbiBzZWFzb24hXCIsXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICBuYW1lOiBcIk1lZGl0ZXJyYW5lYW4gU2FsYWRcIixcclxuICAgICBkZXNjcmlwdGlvbjogXCJGcmVzaCBtaXhlZCBncmVlbnMsIGNoZXJyeSB0b21hdG9lcywgc2xpY2VkIGN1Y3VtYmVycywgcmVkIG9uaW9uLCBLYWxhbWF0YSBvbGl2ZXMsIGFuZCBjcnVtYmxlZCBmZXRhIGNoZWVzZSwgYWxsIHRvc3NlZCBpbiBhIHRhbmd5IHJlZCB3aW5lIHZpbmFpZ3JldHRlLiBTYXRpc2Z5aW5nIGFuZCBwYWNrZWQgd2l0aCBmbGF2b3IhXCIsXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICBuYW1lOiBcIkthbGUgYW5kIFF1aW5vYSBTYWxhZFwiLFxyXG4gICAgIGRlc2NyaXB0aW9uOiBcIlRlbmRlciBrYWxlIGxlYXZlcywgZmx1ZmZ5IHF1aW5vYSwgc2xpY2VkIGFsbW9uZHMsIGRyaWVkIGNyYW5iZXJyaWVzLCBhbmQgY3J1bWJsZWQgZ29hdCBjaGVlc2UsIGFsbCB0b3NzZWQgaW4gYSB6ZXN0eSBsZW1vbiB2aW5haWdyZXR0ZS4gQSBzdXBlcmZvb2QtcGFja2VkIHNhbGFkIHRoYXQncyBhcyBudXRyaXRpb3VzIGFzIGl0IGlzIGRlbGljaW91cyFcIixcclxuICAgfSxcclxuICAge1xyXG4gICAgIG5hbWU6IFwiVGV4LU1leCBTYWxhZFwiLFxyXG4gICAgIGRlc2NyaXB0aW9uOiBcIk1peGVkIGdyZWVucywgZ3JpbGxlZCBjaGlja2VuLCBibGFjayBiZWFucywgcm9hc3RlZCBjb3JuLCBkaWNlZCBhdm9jYWRvLCBhbmQgdG9ydGlsbGEgc3RyaXBzLCBhbGwgdG9zc2VkIGluIGEgc3BpY3kgY2hpcG90bGUgcmFuY2ggZHJlc3NpbmcuIEEgaGVhcnR5IGFuZCBzYXRpc2Z5aW5nIHNhbGFkIHRoYXQncyBwZXJmZWN0IGZvciBsdW5jaCBvciBkaW5uZXIhXCIsXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICBuYW1lOiBcIkFzaWFuIFNlc2FtZSBTYWxhZFwiLFxyXG4gICAgIGRlc2NyaXB0aW9uOiBcIkNyaXNwIGxldHR1Y2UsIHNocmVkZGVkIHJlZCBjYWJiYWdlLCBzaHJlZGRlZCBjYXJyb3RzLCBzbGljZWQgYWxtb25kcywgYW5kIGNyaXNweSB3b250b24gc3RyaXBzLCBhbGwgdG9zc2VkIGluIGEgc3dlZXQgYW5kIHNhdm9yeSBzZXNhbWUgZHJlc3NpbmcuIEEgcmVmcmVzaGluZyBzYWxhZCB3aXRoIGFuIEFzaWFuLWluc3BpcmVkIHR3aXN0IVwiLFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgbmFtZTogXCJDYXByZXNlIFNhbGFkXCIsXHJcbiAgICAgZGVzY3JpcHRpb246IFwiRnJlc2ggc2xpY2VkIHRvbWF0b2VzLCBjcmVhbXkgbW96emFyZWxsYSBjaGVlc2UsIGFuZCBmcmFncmFudCBiYXNpbCBsZWF2ZXMsIGFsbCBkcml6emxlZCB3aXRoIGJhbHNhbWljIGdsYXplIGFuZCBleHRyYS12aXJnaW4gb2xpdmUgb2lsLiBBIHNpbXBsZSBhbmQgZGVsaWNpb3VzIHNhbGFkIHRoYXQncyBwZXJmZWN0IGZvciBzdW1tZXIhXCIsXHJcbiAgIH1cclxuIF07IiwiaW1wb3J0IGxvZ29JbWFnZSBmcm9tICcuL2Fzc2V0cy9oZDItcmVtb3ZlYmctcHJldmlldy5wbmcnO1xyXG5pbXBvcnQgeyBpbnRyb1RleHQgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGRheXMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCBhYm91dFVzSW1hZ2UgZnJvbSAnLi9hc3NldHMvcmUyLmpwZyc7XHJcbmltcG9ydCB7IGRlc2NyaXB0aW9uIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgU2ExIGZyb20gJy4vYXNzZXRzL3NhMS5hdmlmJztcclxuaW1wb3J0IFNhMiBmcm9tICcuL2Fzc2V0cy9zYTIuYXZpZic7XHJcbmltcG9ydCBTYTMgZnJvbSAnLi9hc3NldHMvc2EzLmF2aWYnO1xyXG5pbXBvcnQgU2E0IGZyb20gJy4vYXNzZXRzL3NhNC5hdmlmJztcclxuaW1wb3J0IHNhNSBmcm9tICcuL2Fzc2V0cy9zYTUuYXZpZic7XHJcbmltcG9ydCBTYTYgZnJvbSAnLi9hc3NldHMvc2E2LmF2aWYnO1xyXG5pbXBvcnQgeyBzYWxhZHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBob21lU2VjdGlvbiA9IChmdW5jdGlvbigpIHtcclxuICAgIGZ1bmN0aW9uIGhvbWVTZWN0aW9uVG9wKCkge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdob21lLXRvcCcpO1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1hZ2UuYWx0ID0gJ2xvZ28gaW1hZ2UnO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IGxvZ29JbWFnZTtcclxuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHAuaW5uZXJUZXh0ID0gJ1BldGl0ZSBSZXN0YXVyYW50JztcclxuICAgICAgICBkaXYuYXBwZW5kKGltYWdlKTtcclxuICAgICAgICBkaXYuYXBwZW5kKHApO1xyXG4gICAgICAgIHJldHVybiBkaXY7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaG9tZVNlY3Rpb25DYXJkcygpIHtcclxuICAgICAgIGZ1bmN0aW9uIEhvbWVDYXJkKHRpdGxlLCB0ZXh0KSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgY2FyZHMuY2xhc3NMaXN0LmFkZCgnY2FyZHMnKTtcclxuXHJcbiAgICAgICBjb25zdCBjYXJkSW5mb0xpc3QgPSBbXHJcbiAgICAgICAgIG5ldyBIb21lQ2FyZCgnSGVsbG8nLGludHJvVGV4dCksXHJcbiAgICAgICAgIG5ldyBIb21lQ2FyZCgnV29ya2luZyBIb3VycycsZGF5cyksXHJcbiAgICAgICAgIG5ldyBIb21lQ2FyZCgnQWRkcmVzcycsJ0FkZHJlc3M6IDE0MTIyIEJydW5kaXNoIENoaW5ob3lpIFppbWJhYndlJyksXHJcbiAgICAgICBdO1xyXG5cclxuICAgICAgIGNvbnN0IGhvbWVDYXJkcyA9IGNhcmRJbmZvTGlzdC5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdob21lLWNhcmQnKTtcclxuICAgICAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICAgIGgyLmlubmVyVGV4dCA9IGl0ZW0udGl0bGU7XHJcbiAgICAgICAgICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XHJcbiAgICAgICAgICBkaXYuYXBwZW5kKGgyLCBocik7XHJcbiAgICAgICAgICBpZihBcnJheS5pc0FycmF5KGl0ZW0udGV4dCkpIHtcclxuICAgICAgICAgICAgIGl0ZW0udGV4dC5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgICAgIHAuaW5uZXJUZXh0ID0gaTtcclxuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmQocCk7XHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgIHJldHVybiBkaXY7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgcC5pbm5lclRleHQgPSBpdGVtLnRleHRcclxuICAgICAgICAgICBkaXYuYXBwZW5kKHApO1xyXG4gICAgICAgICAgIHJldHVybiBkaXY7XHJcbiAgICAgICB9KTtcclxuICAgICAgIGhvbWVDYXJkcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgY2FyZHMuYXBwZW5kKGl0ZW0pO1xyXG4gICAgICAgfSk7XHJcbiAgICAgICByZXR1cm4gY2FyZHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBob21lU2VjdGlvblRvcCwgaG9tZVNlY3Rpb25DYXJkcyB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgY29udGFjdFNlY3Rpb24gPSAoZnVuY3Rpb24gKCl7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XHJcblxyXG4gICAgZnVuY3Rpb24gY29udGFjdExlZnQoKSB7XHJcbiAgICAgICAgY29uc3QgY29udGFjdExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250YWN0TGVmdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWxlZnQnKTtcclxuICAgICAgICAgY29uc3QgbG9nb1RvcEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgIGxvZ29Ub3BJbWFnZS5hbHQgPSAnbG9nbyBpbWFnZSc7XHJcbiAgICAgICAgIGxvZ29Ub3BJbWFnZS5zcmMgPSBsb2dvSW1hZ2U7XHJcbiAgICAgICAgIGNvbnRhY3RMZWZ0LmFwcGVuZChsb2dvVG9wSW1hZ2UpO1xyXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgcC5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICBjb250YWN0TGVmdC5hcHBlbmQocCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZm9Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpbmZvQm94LmNsYXNzTGlzdC5hZGQoJ2luZm8tYm94Jyk7XHJcbiAgICAgICAgY29uc3QgZW1haWxQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGVtYWlsUC5pbm5lclRleHQgPSAnRW1haWw6IHNpYmFuZGFkb250eUBnbWFpbC5jb20nO1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3NQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGFkZHJlc3NQLmlubmVyVGV4dCA9ICdBZGRyZXNzOiAxNDEyMiBCcnVuZGlzaCBDaGluaG95aSBaaW1iYWJ3ZSc7XHJcbiAgICAgICAgY29uc3QgcGhvbmVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHBob25lUC5pbm5lclRleHQgPSAnUGhvbmU6IDA3ODc2NDU3MzEnO1xyXG4gICAgICAgIGluZm9Cb3guYXBwZW5kKGFkZHJlc3NQLCBlbWFpbFAsIHBob25lUCk7XHJcbiAgICAgICAgY29udGFjdExlZnQuYXBwZW5kQ2hpbGQoaW5mb0JveCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhY3RMZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbnRhY3RSaWdodCgpIHtcclxuICAgICAgICBjb25zdCBjb250YWN0UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250YWN0UmlnaHQuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1yaWdodCcpO1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1hZ2UuYWx0ID0gJ2Fib3V0IHVzIGltYWdlJztcclxuICAgICAgICBpbWFnZS5zcmMgPSBhYm91dFVzSW1hZ2U7XHJcbiAgICAgICAgY29udGFjdFJpZ2h0LmFwcGVuZChpbWFnZSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhY3RSaWdodDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgY29udGFjdExlZnQsXHJcbiAgICAgICBjb250YWN0UmlnaHRcclxuICAgIH1cclxufSkoKVxyXG5cclxuY29uc3QgbWVudVNlY3Rpb24gPSAoZnVuY3Rpb24oKXtcclxuICAgIGZ1bmN0aW9uIFByb2R1Y3QobmFtZSwgaW1hZ2UsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaW1hZ2VzTGlzdCA9IFtTYTEsIFNhMiwgU2EzLCBTYTQsIHNhNSwgU2E2XTtcclxuICAgIGNvbnN0IHByb2R1Y3RzSW5mb0xpc3QgPSBzYWxhZHMubWFwKChzYWxhZCwgaSkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHByb2QgPSBuZXcgUHJvZHVjdChzYWxhZC5uYW1lLGltYWdlc0xpc3RbaV0gLCBzYWxhZC5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgcmV0dXJuIHByb2Q7IFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2R1Y3RzRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtY2FyZHMnKTtcclxuICAgIFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9kdWN0c0luZm9MaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9ICBwcm9kdWN0c0luZm9MaXN0W2ldO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGltYWdlLmFsdCA9ICdwcm9kdWN0IGltYWdlJztcclxuICAgICAgICBpbWFnZS5zcmMgPSBkYXRhLmltYWdlO1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIG5hbWUuaW5uZXJUZXh0ID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgcC5pbm5lclRleHQgPSBwcm9kdWN0c0luZm9MaXN0W2ldLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcclxuICAgICAgICBkaXYuYXBwZW5kKG5hbWUsaHIgLHApO1xyXG4gICAgICAgIHByb2R1Y3QuYXBwZW5kKGltYWdlLGRpdik7XHJcbiAgICAgICAgcHJvZHVjdC5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWNhcmQnKTtcclxuICAgICAgICBwcm9kdWN0c0Rpdi5hcHBlbmQocHJvZHVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHNEaXYgfTtcclxufSkoKVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGF5b3V0KCkge1xyXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudERpdi5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5pZCA9ICd0YXJnZXQnO1xyXG4gICAgZGl2LmFwcGVuZChyZW5kZXJNZW51U2VjdGlvbigpKTtcclxuICAgIGNvbnRlbnREaXYuYXBwZW5kKG5hdkJhcigpLCBkaXYpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZChjb250ZW50RGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmF2QmFyKCkge1xyXG4gICAgZnVuY3Rpb24gTGlzdEl0ZW0odGV4dCxpZCkge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBuYXZJdGVtcyA9IFtcclxuICAgICAgICBuZXcgTGlzdEl0ZW0oJ01lbnUnLCAnbWVudScpLFxyXG4gICAgICAgIG5ldyBMaXN0SXRlbSgnSW5mbycsICdpbmZvJyksXHJcbiAgICAgICAgbmV3IExpc3RJdGVtKCdBYm91dC1VcycsICdhYm91dCcpLFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgbmF2SXRlbXMuZm9yRWFjaCgoaXRlbSxpbmRleCk9PiB7XHJcbiAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgYS5ocmVmID0gJyMnICsgaXRlbS5pZDtcclxuICAgICAgIGEuaW5uZXJUZXh0ID0gaXRlbS50ZXh0O1xyXG4gICAgICAgYS5jbGFzc0xpc3QuYWRkKGBuYXYtaXRlbS0ke2luZGV4fWApXHJcbiAgICAgICBsaS5hcHBlbmQoYSk7XHJcbiAgICAgICB1bC5hcHBlbmQobGkpXHJcbiAgICB9KTtcclxuICAgIGJhci5hcHBlbmQodWwpO1xyXG4gICAgcmV0dXJuIGJhcjtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVySG9tZVNlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5pZCA9ICdob21lJztcclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgaGVhZGluZy5pbm5lclRleHQgPSAnSW5mb21hdGlvbic7XHJcbiAgICBjb25zdCBob21lU2VjdGlvbkNhcmRzID0gaG9tZVNlY3Rpb24uaG9tZVNlY3Rpb25DYXJkcygpO1xyXG4gICAgZGl2LmFwcGVuZChoZWFkaW5nICxob21lU2VjdGlvbkNhcmRzKTtcclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckFib3V0U2VjdGlvbigpIHtcclxuICAgIGNvbnN0IHNlY3Rpb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzZWN0aW9uZS5jbGFzc0xpc3QuYWRkKCdhYm91dC10YWInKVxyXG4gICAgY29uc3QgYWJvdXRTZWN0aW9uTGVmdCA9IGNvbnRhY3RTZWN0aW9uLmNvbnRhY3RMZWZ0KCk7XHJcbiAgICBjb25zdCBhYm91dFNlY3Rpb25SaWdodCA9IGNvbnRhY3RTZWN0aW9uLmNvbnRhY3RSaWdodCgpO1xyXG4gICAgY29uc3Qgd3JhcHBlciA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBsb2dvVG9wSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGxvZ29Ub3BJbWFnZS5hbHQgPSAnbG9nbyBpbWFnZSc7XHJcbiAgICBsb2dvVG9wSW1hZ2Uuc3JjID0gbG9nb0ltYWdlO1xyXG4gICAgd3JhcHBlci5hcHBlbmQoYWJvdXRTZWN0aW9uTGVmdCwgYWJvdXRTZWN0aW9uUmlnaHQpO1xyXG4gICAgY29uc3QgaGVhZGluZzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgaGVhZGluZzQuaW5uZXJUZXh0ID0gJ0Fib3V0LVVzJztcclxuICAgIGhlYWRpbmc0LmlkID0gJ2Fib3V0JztcclxuICAgIHNlY3Rpb25lLmFwcGVuZChoZWFkaW5nNCx3cmFwcGVyKTtcclxuICAgIHJldHVybiBzZWN0aW9uZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTWVudVNlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcbiAgICBjb25zdCBoZWFkaW5nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBoZWFkaW5nMi5pbm5lclRleHQgPSAnTWVudSc7XHJcbiAgICBoZWFkaW5nMi5pZCA9ICdtZW51JztcclxuICAgIGRpdi5hcHBlbmQoaGVhZGluZzIsbWVudVNlY3Rpb24ucHJvZHVjdHNEaXYpO1xyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gc3dpdGNoU2NyZWVuKCkge1xyXG5cclxuICAgZnVuY3Rpb24gc3BsaXRIcmVmKGhyZWZMaW5rKSB7XHJcbiAgICAgIGNvbnN0IGFyciA9IGhyZWZMaW5rLnNwbGl0KCcjJyk7XHJcbiAgICAgIHJldHVybiBhcnJbMV07XHJcbiAgIH1cclxuICAgXHJcbiAgIGZ1bmN0aW9uIHNodWZmbGUoaXRlbSkge1xyXG4gICAgY29uc3QgY2xpY2tlZEl0ZW0gPSBzcGxpdEhyZWYoaXRlbSk7XHJcbiAgICBzd2l0Y2ggKGNsaWNrZWRJdGVtKSB7XHJcbiAgICAgICAgY2FzZSAnaG9tZSc6XHJcbiAgICAgICAgICAgICByZXR1cm4gcmVuZGVySG9tZVNlY3Rpb24oKTtcclxuICAgICAgICBjYXNlICdtZW51JzpcclxuICAgICAgICAgICAgIHJldHVybiByZW5kZXJNZW51U2VjdGlvbigpO1xyXG4gICAgICAgIGNhc2UgJ2Fib3V0JzpcclxuICAgICAgICAgICAgIHJldHVybiByZW5kZXJBYm91dFNlY3Rpb24oKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gcmVuZGVySG9tZVNlY3Rpb24oKTtcclxuICAgIH1cclxuICAgfVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpLmZvckVhY2goYSA9PiB7XHJcbiAgICAgICAgYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhcmdldCcpLmlubmVySFRNTCA9IG51bGw7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaHJlZilcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFyZ2V0JykuYXBwZW5kKHNodWZmbGUoZS50YXJnZXQuaHJlZikpO1xyXG4gICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZUxvYWQoKSB7XHJcbiAgICBjcmVhdGVMYXlvdXQoKTtcclxuICAgIHN3aXRjaFNjcmVlbigpO1xyXG4gfVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgaGVscGVyRnVjdGlvbnMgZnJvbSAnLi91dGlscyc7XHJcblxyXG5jb25zdCBydW4gPSAoKSA9PiBoZWxwZXJGdWN0aW9ucygpO1xyXG4gICAgICAgXHJcbnJ1bigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=