/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  --padding: 15px;
  --color-primary: #98c1d9;
  --color-accent: #cfcfcf;
  --color-background: #ffffff;
  --color-icons: #908e8e;
  --padding-span: 5px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--padding);
  justify-content: center;
  align-items: center;
  padding: var(--padding) max(30%, 100px);
  text-align: center;
  border-bottom: solid 1px var(--color-accent);
}

#refresh {
  border: none;
  color: var(--color-icons);
  background-color: transparent;
  font-size: 20px;
}

#refresh:hover {
  cursor: pointer;
}

#form-container {
  position: relative;
  width: 100%;
}

.form-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  gap: 10px;
  outline: solid var(--color-accent) 1px;
  border-radius: 50px;
  padding: 1px;
  padding-right: 10px;
}

.form-group > * {
  font-size: 16px;
  border: none;
}

.form-group > input {
  border-bottom-left-radius: 25px;
  border-top-left-radius: 25px;
  padding-left: 10px;
  width: 100%;
}

.form-group > button {
  transform: rotate(45deg);
  font-size: 20px;
  border-radius: 50px;
  color: var(--color-icons);
  background-color: transparent;
}

.form-group > button:hover {
  cursor: pointer;
}

#search-suggestions {
  width: 100%;
  position: absolute;
  margin-top: 5px;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
}

#search-suggestions:has(.search-result) {
  border-radius: 10px;
  border: solid 1px var(--color-accent);
}

.search-result {
  height: 25px;
  margin: 3px;
}

.search-result:hover {
  cursor: pointer;
}

div#body-container {
  text-align: center;
  padding: var(--padding);
}

/* Current Weather Styles */
#current-weather {
  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-template-columns: repeat(4, 1fr);
  gap: var(--padding);
  justify-items: center;
  width: min(95%, 500px);
  min-height: 200px;
  margin: auto;
  padding: var(--padding);
  border-radius: var(--padding);
}

#location {
  grid-row: 1 / span 1;
  grid-column: 1 / span 4;
}

#current-conditions {
  grid-row: 2 / span 1;
  grid-column: 1 / span 2;
}

#conditions-icon {
  grid-row: 3 / span 1;
  grid-column: 1 / span 1;
}

#temp-container {
  grid-row: 3 / span 1;
  grid-column: 2 / span 1;
}

#weather-details {
  grid-row: 2 / span 2;
  grid-column: 3 / span 2;

  display: flex;
  flex-direction: column;
}

#weather-details > div {
  padding: var(--padding-span);
}

/* Forecast styles */
#forecast-container {
  width: min(95%, 700px);
  margin: auto;
  padding: var(--padding);
  border-radius: var(--padding);
}

#forecast {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: var(--padding);
}

.day {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 10px;
  justify-items: center;
  align-items: center;
  border-radius: 15px;
}

.day-date {
  grid-row: 1 / span 1;
  grid-column: 1 / span 2;
}

.day-date > span {
  margin: var(--padding-span);
}

.day-icon {
  grid-row: 2 / span 2;
  grid-column: 1 / span 1;
}

.condition {
  grid-row: 4 / span 1;
  grid-column: 1 / span 2;
}

.hilo {
  grid-row: 2 / span 1;
  grid-column: 2 / span 1;
}

.hilo > span {
  margin: 5px;
}

.chance-of-rain {
  grid-row: 3 / span 1;
  grid-column: 2 / span 1;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--padding);
  background-color: white;
  text-align: center;
}
`, "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;EACE,4DAA4D;EAC5D,eAAe;EACf,wBAAwB;EACxB,uBAAuB;EACvB,2BAA2B;EAC3B,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,uCAAuC;EACvC,kBAAkB;EAClB,4CAA4C;AAC9C;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,oBAAoB;EACpB,SAAS;EACT,sCAAsC;EACtC,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,+BAA+B;EAC/B,4BAA4B;EAC5B,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,wBAAwB;EACxB,eAAe;EACf,mBAAmB;EACnB,yBAAyB;EACzB,6BAA6B;AAC/B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,yCAAyC;EACzC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,qCAAqC;AACvC;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA,2BAA2B;AAC3B;EACE,aAAa;EACb,0CAA0C;EAC1C,qCAAqC;EACrC,mBAAmB;EACnB,qBAAqB;EACrB,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;EACZ,uBAAuB;EACvB,6BAA6B;AAC/B;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;;EAEvB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA,oBAAoB;AACpB;EACE,sBAAsB;EACtB,YAAY;EACZ,uBAAuB;EACvB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mCAAmC;EACnC,SAAS;EACT,qBAAqB;EACrB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;AACzB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;AACzB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,SAAS;EACT,OAAO;EACP,QAAQ;EACR,uBAAuB;EACvB,uBAAuB;EACvB,kBAAkB;AACpB","sourcesContent":[":root {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  --padding: 15px;\n  --color-primary: #98c1d9;\n  --color-accent: #cfcfcf;\n  --color-background: #ffffff;\n  --color-icons: #908e8e;\n  --padding-span: 5px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nnav {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: var(--padding);\n  justify-content: center;\n  align-items: center;\n  padding: var(--padding) max(30%, 100px);\n  text-align: center;\n  border-bottom: solid 1px var(--color-accent);\n}\n\n#refresh {\n  border: none;\n  color: var(--color-icons);\n  background-color: transparent;\n  font-size: 20px;\n}\n\n#refresh:hover {\n  cursor: pointer;\n}\n\n#form-container {\n  position: relative;\n  width: 100%;\n}\n\n.form-group {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: stretch;\n  gap: 10px;\n  outline: solid var(--color-accent) 1px;\n  border-radius: 50px;\n  padding: 1px;\n  padding-right: 10px;\n}\n\n.form-group > * {\n  font-size: 16px;\n  border: none;\n}\n\n.form-group > input {\n  border-bottom-left-radius: 25px;\n  border-top-left-radius: 25px;\n  padding-left: 10px;\n  width: 100%;\n}\n\n.form-group > button {\n  transform: rotate(45deg);\n  font-size: 20px;\n  border-radius: 50px;\n  color: var(--color-icons);\n  background-color: transparent;\n}\n\n.form-group > button:hover {\n  cursor: pointer;\n}\n\n#search-suggestions {\n  width: 100%;\n  position: absolute;\n  margin-top: 5px;\n  background-color: var(--color-background);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#search-suggestions:has(.search-result) {\n  border-radius: 10px;\n  border: solid 1px var(--color-accent);\n}\n\n.search-result {\n  height: 25px;\n  margin: 3px;\n}\n\n.search-result:hover {\n  cursor: pointer;\n}\n\ndiv#body-container {\n  text-align: center;\n  padding: var(--padding);\n}\n\n/* Current Weather Styles */\n#current-weather {\n  display: grid;\n  grid-template-rows: repeat(3, min-content);\n  grid-template-columns: repeat(4, 1fr);\n  gap: var(--padding);\n  justify-items: center;\n  width: min(95%, 500px);\n  min-height: 200px;\n  margin: auto;\n  padding: var(--padding);\n  border-radius: var(--padding);\n}\n\n#location {\n  grid-row: 1 / span 1;\n  grid-column: 1 / span 4;\n}\n\n#current-conditions {\n  grid-row: 2 / span 1;\n  grid-column: 1 / span 2;\n}\n\n#conditions-icon {\n  grid-row: 3 / span 1;\n  grid-column: 1 / span 1;\n}\n\n#temp-container {\n  grid-row: 3 / span 1;\n  grid-column: 2 / span 1;\n}\n\n#weather-details {\n  grid-row: 2 / span 2;\n  grid-column: 3 / span 2;\n\n  display: flex;\n  flex-direction: column;\n}\n\n#weather-details > div {\n  padding: var(--padding-span);\n}\n\n/* Forecast styles */\n#forecast-container {\n  width: min(95%, 700px);\n  margin: auto;\n  padding: var(--padding);\n  border-radius: var(--padding);\n}\n\n#forecast {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  margin: var(--padding);\n}\n\n.day {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr;\n  gap: 10px;\n  justify-items: center;\n  align-items: center;\n  border-radius: 15px;\n}\n\n.day-date {\n  grid-row: 1 / span 1;\n  grid-column: 1 / span 2;\n}\n\n.day-date > span {\n  margin: var(--padding-span);\n}\n\n.day-icon {\n  grid-row: 2 / span 2;\n  grid-column: 1 / span 1;\n}\n\n.condition {\n  grid-row: 4 / span 1;\n  grid-column: 1 / span 2;\n}\n\n.hilo {\n  grid-row: 2 / span 1;\n  grid-column: 2 / span 1;\n}\n\n.hilo > span {\n  margin: 5px;\n}\n\n.chance-of-rain {\n  grid-row: 3 / span 1;\n  grid-column: 2 / span 1;\n}\n\nfooter {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: var(--padding);\n  background-color: white;\n  text-align: center;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/components/api.js":
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// IIFE api module to acces Weather API
// https://www.weatherapi.com/
const api = (() => {
  const API_KEY = "45bc423c9aed4a3e993200235241002";

  const getWeather = async (query) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}&aqi=no`,
        { mode: "cors" }
      );

      if (!response.ok) throw `Response status ${response.status}`;

      const data = await response.json();
      const weather = {
        conditions: data.current.condition, // contains text, icon, code
        feelslikef: data.current.feelslike_f,
        feelslikec: data.current.feelslike_c,
        humidity: data.current.humidity,
        location: data.location.name,
        region: data.location.region,
        tempf: data.current.temp_f,
        tempc: data.current.temp_c,
        windmph: data.current.wind_mph,
        winddir: data.current.wind_dir,
        vis: data.current.vis_miles,
      };
      return weather;
    } catch (error) {
      throw Error(error);
    }
  };

  const getForecast = async (query) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=3&aqi=no&alerts=no`
      );

      if (!response.ok) throw `Response status: ${response.status}`;

      const data = await response.json();
      const forecast = [];

      data.forecast.forecastday.forEach((day) => {
        const dailyForecast = {
          date: day.date,
          hi: day.day.maxtemp_f,
          lo: day.day.mintemp_f,
          humidity: day.day.avghumidity,
          chanceofrain: day.day.daily_chance_of_rain,
          condition: day.day.condition,
        };

        forecast.push(dailyForecast);
      });

      return forecast;
    } catch (error) {
      throw Error(error);
    }
  };

  const getSuggestions = async (query) => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${query}`
    );

    try {
      if (!response.ok) throw `Response status ${response.status}`;

      let results = [];

      const data = await response.json();
      data.forEach((obj) => {
        const result = {
          location: obj.name,
          region: obj.region,
          url: obj.url,
        };

        results.push(result);
      });

      return results;
    } catch (error) {
      throw new Error(error);
    }
  };

  return { getWeather, getForecast, getSuggestions };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);


/***/ }),

/***/ "./src/components/utilities.js":
/*!*************************************!*\
  !*** ./src/components/utilities.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const utilities = (() => {
  const getDay = (input) => {
    const week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const date = new Date(input);
    const index = date.getUTCDay();
    const day = week[index];

    return day;
  };

  const parseDate = (input) => {
    const date = new Date(input);
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    return `${month}/${day}`;
  };

  const removeChildren = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.lastChild);
    }
  };

  return { getDay, parseDate, removeChildren };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utilities);


/***/ }),

/***/ "./src/components/view.js":
/*!********************************!*\
  !*** ./src/components/view.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/components/utilities.js");


const view = (() => {
  // constants
  const name = document.getElementById("name");
  const region = document.getElementById("region");
  const currentConditions = document.getElementById("current-conditions");
  const conditionsIcon = document.getElementById("conditions-icon");
  const temp = document.getElementById("temp");
  const feelLike = document.getElementById("feels-like");
  const wind = document.getElementById("wind");
  const humidity = document.getElementById("humidity");
  const vis = document.getElementById("vis");
  const forecastElement = document.getElementById("forecast");
  const searchInput = document.getElementById("query");
  const searchForm = document.getElementById("search-form");
  const searchSuggestions = document.getElementById("search-suggestions");

  const updateWeather = (weather) => {
    _utilities__WEBPACK_IMPORTED_MODULE_0__["default"].removeChildren(searchSuggestions);
    name.innerHTML = weather.location;
    name.setAttribute("data-location", weather.location);
    name.setAttribute("data-region", weather.region);
    region.innerHTML = weather.region;
    currentConditions.innerHTML = weather.conditions.text;
    conditionsIcon.src = weather.conditions.icon;
    temp.innerHTML = Math.trunc(weather.tempf) + "°F";
    feelLike.innerHTML = "Feels like " + Math.trunc(weather.feelslikef) + "°F";
    wind.innerHTML = "Wind speed: " + Math.trunc(weather.windmph) + " mph";
    humidity.innerHTML = "Humidity: " + Math.trunc(weather.humidity) + "%";
    vis.innerHTML = "Visibility: " + Math.trunc(weather.vis) + " miles";
  };

  const updateForecast = (forecast) => {
    _utilities__WEBPACK_IMPORTED_MODULE_0__["default"].removeChildren(forecastElement);

    forecast.forEach((day) => {
      const dayElement = document.createElement("div");
      dayElement.classList.add("day");
      forecastElement.appendChild(dayElement);

      // Build and append weekday and date
      const dateElement = document.createElement("div");
      dateElement.classList.add("day-date");
      dayElement.appendChild(dateElement);

      const weekday = document.createElement("span");
      weekday.textContent = _utilities__WEBPACK_IMPORTED_MODULE_0__["default"].getDay(day.date);
      dateElement.appendChild(weekday);

      const date = document.createElement("span");
      date.textContent = _utilities__WEBPACK_IMPORTED_MODULE_0__["default"].parseDate(day.date);
      dateElement.appendChild(date);

      // condition icon
      const icon = document.createElement("img");
      icon.classList.add("day-icon");
      icon.src = day.condition.icon;
      dayElement.appendChild(icon);

      // condition text
      const condition = document.createElement("div");
      condition.classList.add("condition");
      condition.textContent = day.condition.text;
      dayElement.appendChild(condition);

      // hilo
      const hilo = document.createElement("div");
      hilo.classList.add("hilo");
      dayElement.appendChild(hilo);
      // hi span
      const hi = document.createElement("span");
      hi.textContent = Math.trunc(day.hi) + "°F";
      hilo.appendChild(hi);
      // lo span
      const lo = document.createElement("span");
      lo.textContent = Math.trunc(day.lo) + "°F";
      hilo.appendChild(lo);

      // change of rain
      const chanceOfRain = document.createElement("div");
      chanceOfRain.classList.add("chance-of-rain");
      chanceOfRain.textContent = day.chanceofrain + "% chance of rain";
      dayElement.appendChild(chanceOfRain);
    });
  };

  const updateResults = (results) => {
    _utilities__WEBPACK_IMPORTED_MODULE_0__["default"].removeChildren(searchSuggestions);

    results.forEach((result) => {
      const resultElement = document.createElement("div");
      resultElement.textContent = `${result.location}, ${result.region}`;
      resultElement.setAttribute("data-url", result.url);
      resultElement.classList.add("search-result");
      resultElement.onclick = (event) => {
        searchInput.value = event.target.getAttribute("data-url");
        searchForm.requestSubmit();

        _utilities__WEBPACK_IMPORTED_MODULE_0__["default"].removeChildren(searchSuggestions);
      };
      searchSuggestions.appendChild(resultElement);
    });
  };

  return { updateWeather, updateForecast, updateResults };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/api */ "./src/components/api.js");
/* harmony import */ var _components_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/view */ "./src/components/view.js");
// Style imports


// Module imports



document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("query");
  searchForm.oninput = async (event) => {
    const query = event.target.value;
    if (query === "") return;
    const results = await _components_api__WEBPACK_IMPORTED_MODULE_1__["default"].getSuggestions(query);
    _components_view__WEBPACK_IMPORTED_MODULE_2__["default"].updateResults(results);
  };

  const searchButton = document.getElementById("search-form");
  searchButton.onsubmit = async (event) => {
    event.preventDefault();
    const query = event.target.elements["query"].value;

    // wait for async function to resolve and store response data
    try {
      // Call api and await both calls to resolve
      const data = await Promise.all([
        _components_api__WEBPACK_IMPORTED_MODULE_1__["default"].getWeather(query),
        _components_api__WEBPACK_IMPORTED_MODULE_1__["default"].getForecast(query),
      ]);

      // Destructure data more semantic naming
      const [weather, forecast] = data;

      _components_view__WEBPACK_IMPORTED_MODULE_2__["default"].updateWeather(weather);
      _components_view__WEBPACK_IMPORTED_MODULE_2__["default"].updateForecast(forecast);
      event.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const refreshButton = document.getElementById("refresh");
  refreshButton.onclick = async () => {
    const name = document.getElementById("name").getAttribute("data-location");
    const region = document.getElementById("name").getAttribute("data-region");

    const query = name + ", " + region;
    const weather = await _components_api__WEBPACK_IMPORTED_MODULE_1__["default"].getWeather(query);
    _components_view__WEBPACK_IMPORTED_MODULE_2__["default"].updateWeather(weather);
  };
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLCtFQUErRSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9B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QUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNvQjs7QUFFcEI7QUFDbUM7QUFDRTs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix1REFBRztBQUM3QixJQUFJLHdEQUFJO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFHO0FBQ1gsUUFBUSx1REFBRztBQUNYOztBQUVBO0FBQ0E7O0FBRUEsTUFBTSx3REFBSTtBQUNWLE1BQU0sd0RBQUk7QUFDVjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsdURBQUc7QUFDN0IsSUFBSSx3REFBSTtBQUNSO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvdmlldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIC0tcGFkZGluZzogMTVweDtcbiAgLS1jb2xvci1wcmltYXJ5OiAjOThjMWQ5O1xuICAtLWNvbG9yLWFjY2VudDogI2NmY2ZjZjtcbiAgLS1jb2xvci1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAtLWNvbG9yLWljb25zOiAjOTA4ZThlO1xuICAtLXBhZGRpbmctc3BhbjogNXB4O1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IHZhcigtLXBhZGRpbmcpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZykgbWF4KDMwJSwgMTAwcHgpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1jb2xvci1hY2NlbnQpO1xufVxuXG4jcmVmcmVzaCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWljb25zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI3JlZnJlc2g6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNmb3JtLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZ2FwOiAxMHB4O1xuICBvdXRsaW5lOiBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpIDFweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uZm9ybS1ncm91cCA+ICoge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmZvcm0tZ3JvdXAgPiBpbnB1dCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtLWdyb3VwID4gYnV0dG9uIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1pY29ucyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1ncm91cCA+IGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3NlYXJjaC1zdWdnZXN0aW9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNzZWFyY2gtc3VnZ2VzdGlvbnM6aGFzKC5zZWFyY2gtcmVzdWx0KSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWNvbG9yLWFjY2VudCk7XG59XG5cbi5zZWFyY2gtcmVzdWx0IHtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW46IDNweDtcbn1cblxuLnNlYXJjaC1yZXN1bHQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdiNib2R5LWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZyk7XG59XG5cbi8qIEN1cnJlbnQgV2VhdGhlciBTdHlsZXMgKi9cbiNjdXJyZW50LXdlYXRoZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdhcDogdmFyKC0tcGFkZGluZyk7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IG1pbig5NSUsIDUwMHB4KTtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXBhZGRpbmcpO1xufVxuXG4jbG9jYXRpb24ge1xuICBncmlkLXJvdzogMSAvIHNwYW4gMTtcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDQ7XG59XG5cbiNjdXJyZW50LWNvbmRpdGlvbnMge1xuICBncmlkLXJvdzogMiAvIHNwYW4gMTtcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XG59XG5cbiNjb25kaXRpb25zLWljb24ge1xuICBncmlkLXJvdzogMyAvIHNwYW4gMTtcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XG59XG5cbiN0ZW1wLWNvbnRhaW5lciB7XG4gIGdyaWQtcm93OiAzIC8gc3BhbiAxO1xuICBncmlkLWNvbHVtbjogMiAvIHNwYW4gMTtcbn1cblxuI3dlYXRoZXItZGV0YWlscyB7XG4gIGdyaWQtcm93OiAyIC8gc3BhbiAyO1xuICBncmlkLWNvbHVtbjogMyAvIHNwYW4gMjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jd2VhdGhlci1kZXRhaWxzID4gZGl2IHtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy1zcGFuKTtcbn1cblxuLyogRm9yZWNhc3Qgc3R5bGVzICovXG4jZm9yZWNhc3QtY29udGFpbmVyIHtcbiAgd2lkdGg6IG1pbig5NSUsIDcwMHB4KTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcGFkZGluZyk7XG59XG5cbiNmb3JlY2FzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbjogdmFyKC0tcGFkZGluZyk7XG59XG5cbi5kYXkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xuICBnYXA6IDEwcHg7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmRheS1kYXRlIHtcbiAgZ3JpZC1yb3c6IDEgLyBzcGFuIDE7XG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xufVxuXG4uZGF5LWRhdGUgPiBzcGFuIHtcbiAgbWFyZ2luOiB2YXIoLS1wYWRkaW5nLXNwYW4pO1xufVxuXG4uZGF5LWljb24ge1xuICBncmlkLXJvdzogMiAvIHNwYW4gMjtcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XG59XG5cbi5jb25kaXRpb24ge1xuICBncmlkLXJvdzogNCAvIHNwYW4gMTtcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XG59XG5cbi5oaWxvIHtcbiAgZ3JpZC1yb3c6IDIgLyBzcGFuIDE7XG4gIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAxO1xufVxuXG4uaGlsbyA+IHNwYW4ge1xuICBtYXJnaW46IDVweDtcbn1cblxuLmNoYW5jZS1vZi1yYWluIHtcbiAgZ3JpZC1yb3c6IDMgLyBzcGFuIDE7XG4gIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAxO1xufVxuXG5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0REFBNEQ7RUFDNUQsZUFBZTtFQUNmLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFD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cEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgLS1wYWRkaW5nOiAxNXB4O1xcbiAgLS1jb2xvci1wcmltYXJ5OiAjOThjMWQ5O1xcbiAgLS1jb2xvci1hY2NlbnQ6ICNjZmNmY2Y7XFxuICAtLWNvbG9yLWJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAtLWNvbG9yLWljb25zOiAjOTA4ZThlO1xcbiAgLS1wYWRkaW5nLXNwYW46IDVweDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogdmFyKC0tcGFkZGluZyk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKSBtYXgoMzAlLCAxMDBweCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdmFyKC0tY29sb3ItYWNjZW50KTtcXG59XFxuXFxuI3JlZnJlc2gge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWljb25zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jcmVmcmVzaDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNmb3JtLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZvcm0tZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGdhcDogMTBweDtcXG4gIG91dGxpbmU6IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCkgMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5mb3JtLWdyb3VwID4gKiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5mb3JtLWdyb3VwID4gaW5wdXQge1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjVweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZvcm0tZ3JvdXAgPiBidXR0b24ge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1pY29ucyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmZvcm0tZ3JvdXAgPiBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2VhcmNoLXN1Z2dlc3Rpb25zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzZWFyY2gtc3VnZ2VzdGlvbnM6aGFzKC5zZWFyY2gtcmVzdWx0KSB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tY29sb3ItYWNjZW50KTtcXG59XFxuXFxuLnNlYXJjaC1yZXN1bHQge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luOiAzcHg7XFxufVxcblxcbi5zZWFyY2gtcmVzdWx0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZGl2I2JvZHktY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmcpO1xcbn1cXG5cXG4vKiBDdXJyZW50IFdlYXRoZXIgU3R5bGVzICovXFxuI2N1cnJlbnQtd2VhdGhlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdhcDogdmFyKC0tcGFkZGluZyk7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogbWluKDk1JSwgNTAwcHgpO1xcbiAgbWluLWhlaWdodDogMjAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXBhZGRpbmcpO1xcbn1cXG5cXG4jbG9jYXRpb24ge1xcbiAgZ3JpZC1yb3c6IDEgLyBzcGFuIDE7XFxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gNDtcXG59XFxuXFxuI2N1cnJlbnQtY29uZGl0aW9ucyB7XFxuICBncmlkLXJvdzogMiAvIHNwYW4gMTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xcbn1cXG5cXG4jY29uZGl0aW9ucy1pY29uIHtcXG4gIGdyaWQtcm93OiAzIC8gc3BhbiAxO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XFxufVxcblxcbiN0ZW1wLWNvbnRhaW5lciB7XFxuICBncmlkLXJvdzogMyAvIHNwYW4gMTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAxO1xcbn1cXG5cXG4jd2VhdGhlci1kZXRhaWxzIHtcXG4gIGdyaWQtcm93OiAyIC8gc3BhbiAyO1xcbiAgZ3JpZC1jb2x1bW46IDMgLyBzcGFuIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3dlYXRoZXItZGV0YWlscyA+IGRpdiB7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLXNwYW4pO1xcbn1cXG5cXG4vKiBGb3JlY2FzdCBzdHlsZXMgKi9cXG4jZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gIHdpZHRoOiBtaW4oOTUlLCA3MDBweCk7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXBhZGRpbmcpO1xcbn1cXG5cXG4jZm9yZWNhc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBtYXJnaW46IHZhcigtLXBhZGRpbmcpO1xcbn1cXG5cXG4uZGF5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXG4gIGdhcDogMTBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4uZGF5LWRhdGUge1xcbiAgZ3JpZC1yb3c6IDEgLyBzcGFuIDE7XFxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG59XFxuXFxuLmRheS1kYXRlID4gc3BhbiB7XFxuICBtYXJnaW46IHZhcigtLXBhZGRpbmctc3Bhbik7XFxufVxcblxcbi5kYXktaWNvbiB7XFxuICBncmlkLXJvdzogMiAvIHNwYW4gMjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xcbn1cXG5cXG4uY29uZGl0aW9uIHtcXG4gIGdyaWQtcm93OiA0IC8gc3BhbiAxO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XFxufVxcblxcbi5oaWxvIHtcXG4gIGdyaWQtcm93OiAyIC8gc3BhbiAxO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDE7XFxufVxcblxcbi5oaWxvID4gc3BhbiB7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuLmNoYW5jZS1vZi1yYWluIHtcXG4gIGdyaWQtcm93OiAzIC8gc3BhbiAxO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDE7XFxufVxcblxcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIElJRkUgYXBpIG1vZHVsZSB0byBhY2NlcyBXZWF0aGVyIEFQSVxuLy8gaHR0cHM6Ly93d3cud2VhdGhlcmFwaS5jb20vXG5jb25zdCBhcGkgPSAoKCkgPT4ge1xuICBjb25zdCBBUElfS0VZID0gXCI0NWJjNDIzYzlhZWQ0YTNlOTkzMjAwMjM1MjQxMDAyXCI7XG5cbiAgY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChxdWVyeSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7QVBJX0tFWX0mcT0ke3F1ZXJ5fSZhcWk9bm9gLFxuICAgICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICAgICk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IGBSZXNwb25zZSBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9YDtcblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnN0IHdlYXRoZXIgPSB7XG4gICAgICAgIGNvbmRpdGlvbnM6IGRhdGEuY3VycmVudC5jb25kaXRpb24sIC8vIGNvbnRhaW5zIHRleHQsIGljb24sIGNvZGVcbiAgICAgICAgZmVlbHNsaWtlZjogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mLFxuICAgICAgICBmZWVsc2xpa2VjOiBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MsXG4gICAgICAgIGh1bWlkaXR5OiBkYXRhLmN1cnJlbnQuaHVtaWRpdHksXG4gICAgICAgIGxvY2F0aW9uOiBkYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgICAgIHJlZ2lvbjogZGF0YS5sb2NhdGlvbi5yZWdpb24sXG4gICAgICAgIHRlbXBmOiBkYXRhLmN1cnJlbnQudGVtcF9mLFxuICAgICAgICB0ZW1wYzogZGF0YS5jdXJyZW50LnRlbXBfYyxcbiAgICAgICAgd2luZG1waDogZGF0YS5jdXJyZW50LndpbmRfbXBoLFxuICAgICAgICB3aW5kZGlyOiBkYXRhLmN1cnJlbnQud2luZF9kaXIsXG4gICAgICAgIHZpczogZGF0YS5jdXJyZW50LnZpc19taWxlcyxcbiAgICAgIH07XG4gICAgICByZXR1cm4gd2VhdGhlcjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRGb3JlY2FzdCA9IGFzeW5jIChxdWVyeSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSV9LRVl9JnE9JHtxdWVyeX0mZGF5cz0zJmFxaT1ubyZhbGVydHM9bm9gXG4gICAgICApO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBgUmVzcG9uc2Ugc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc3QgZm9yZWNhc3QgPSBbXTtcblxuICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheS5mb3JFYWNoKChkYXkpID0+IHtcbiAgICAgICAgY29uc3QgZGFpbHlGb3JlY2FzdCA9IHtcbiAgICAgICAgICBkYXRlOiBkYXkuZGF0ZSxcbiAgICAgICAgICBoaTogZGF5LmRheS5tYXh0ZW1wX2YsXG4gICAgICAgICAgbG86IGRheS5kYXkubWludGVtcF9mLFxuICAgICAgICAgIGh1bWlkaXR5OiBkYXkuZGF5LmF2Z2h1bWlkaXR5LFxuICAgICAgICAgIGNoYW5jZW9mcmFpbjogZGF5LmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbixcbiAgICAgICAgICBjb25kaXRpb246IGRheS5kYXkuY29uZGl0aW9uLFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvcmVjYXN0LnB1c2goZGFpbHlGb3JlY2FzdCk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGZvcmVjYXN0O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFN1Z2dlc3Rpb25zID0gYXN5bmMgKHF1ZXJ5KSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL3NlYXJjaC5qc29uP2tleT0ke0FQSV9LRVl9JnE9JHtxdWVyeX1gXG4gICAgKTtcblxuICAgIHRyeSB7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBgUmVzcG9uc2Ugc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWA7XG5cbiAgICAgIGxldCByZXN1bHRzID0gW107XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBkYXRhLmZvckVhY2goKG9iaikgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgbG9jYXRpb246IG9iai5uYW1lLFxuICAgICAgICAgIHJlZ2lvbjogb2JqLnJlZ2lvbixcbiAgICAgICAgICB1cmw6IG9iai51cmwsXG4gICAgICAgIH07XG5cbiAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGdldFdlYXRoZXIsIGdldEZvcmVjYXN0LCBnZXRTdWdnZXN0aW9ucyB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpO1xuIiwiY29uc3QgdXRpbGl0aWVzID0gKCgpID0+IHtcbiAgY29uc3QgZ2V0RGF5ID0gKGlucHV0KSA9PiB7XG4gICAgY29uc3Qgd2VlayA9IFtcbiAgICAgIFwiU3VuZGF5XCIsXG4gICAgICBcIk1vbmRheVwiLFxuICAgICAgXCJUdWVzZGF5XCIsXG4gICAgICBcIldlZG5lc2RheVwiLFxuICAgICAgXCJUaHVyc2RheVwiLFxuICAgICAgXCJGcmlkYXlcIixcbiAgICAgIFwiU2F0dXJkYXlcIixcbiAgICBdO1xuXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGlucHV0KTtcbiAgICBjb25zdCBpbmRleCA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgY29uc3QgZGF5ID0gd2Vla1tpbmRleF07XG5cbiAgICByZXR1cm4gZGF5O1xuICB9O1xuXG4gIGNvbnN0IHBhcnNlRGF0ZSA9IChpbnB1dCkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShpbnB1dCk7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCkgKyAxO1xuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgIHJldHVybiBgJHttb250aH0vJHtkYXl9YDtcbiAgfTtcblxuICBjb25zdCByZW1vdmVDaGlsZHJlbiA9IChwYXJlbnQpID0+IHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQubGFzdENoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0RGF5LCBwYXJzZURhdGUsIHJlbW92ZUNoaWxkcmVuIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB1dGlsaXRpZXM7XG4iLCJpbXBvcnQgdXRpbGl0aWVzIGZyb20gXCIuL3V0aWxpdGllc1wiO1xuXG5jb25zdCB2aWV3ID0gKCgpID0+IHtcbiAgLy8gY29uc3RhbnRzXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIik7XG4gIGNvbnN0IHJlZ2lvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVnaW9uXCIpO1xuICBjb25zdCBjdXJyZW50Q29uZGl0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC1jb25kaXRpb25zXCIpO1xuICBjb25zdCBjb25kaXRpb25zSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZGl0aW9ucy1pY29uXCIpO1xuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wXCIpO1xuICBjb25zdCBmZWVsTGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHMtbGlrZVwiKTtcbiAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luZFwiKTtcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImh1bWlkaXR5XCIpO1xuICBjb25zdCB2aXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpc1wiKTtcbiAgY29uc3QgZm9yZWNhc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JlY2FzdFwiKTtcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1ZXJ5XCIpO1xuICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtZm9ybVwiKTtcbiAgY29uc3Qgc2VhcmNoU3VnZ2VzdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1zdWdnZXN0aW9uc1wiKTtcblxuICBjb25zdCB1cGRhdGVXZWF0aGVyID0gKHdlYXRoZXIpID0+IHtcbiAgICB1dGlsaXRpZXMucmVtb3ZlQ2hpbGRyZW4oc2VhcmNoU3VnZ2VzdGlvbnMpO1xuICAgIG5hbWUuaW5uZXJIVE1MID0gd2VhdGhlci5sb2NhdGlvbjtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZShcImRhdGEtbG9jYXRpb25cIiwgd2VhdGhlci5sb2NhdGlvbik7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJlZ2lvblwiLCB3ZWF0aGVyLnJlZ2lvbik7XG4gICAgcmVnaW9uLmlubmVySFRNTCA9IHdlYXRoZXIucmVnaW9uO1xuICAgIGN1cnJlbnRDb25kaXRpb25zLmlubmVySFRNTCA9IHdlYXRoZXIuY29uZGl0aW9ucy50ZXh0O1xuICAgIGNvbmRpdGlvbnNJY29uLnNyYyA9IHdlYXRoZXIuY29uZGl0aW9ucy5pY29uO1xuICAgIHRlbXAuaW5uZXJIVE1MID0gTWF0aC50cnVuYyh3ZWF0aGVyLnRlbXBmKSArIFwiwrBGXCI7XG4gICAgZmVlbExpa2UuaW5uZXJIVE1MID0gXCJGZWVscyBsaWtlIFwiICsgTWF0aC50cnVuYyh3ZWF0aGVyLmZlZWxzbGlrZWYpICsgXCLCsEZcIjtcbiAgICB3aW5kLmlubmVySFRNTCA9IFwiV2luZCBzcGVlZDogXCIgKyBNYXRoLnRydW5jKHdlYXRoZXIud2luZG1waCkgKyBcIiBtcGhcIjtcbiAgICBodW1pZGl0eS5pbm5lckhUTUwgPSBcIkh1bWlkaXR5OiBcIiArIE1hdGgudHJ1bmMod2VhdGhlci5odW1pZGl0eSkgKyBcIiVcIjtcbiAgICB2aXMuaW5uZXJIVE1MID0gXCJWaXNpYmlsaXR5OiBcIiArIE1hdGgudHJ1bmMod2VhdGhlci52aXMpICsgXCIgbWlsZXNcIjtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVGb3JlY2FzdCA9IChmb3JlY2FzdCkgPT4ge1xuICAgIHV0aWxpdGllcy5yZW1vdmVDaGlsZHJlbihmb3JlY2FzdEVsZW1lbnQpO1xuXG4gICAgZm9yZWNhc3QuZm9yRWFjaCgoZGF5KSA9PiB7XG4gICAgICBjb25zdCBkYXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRheVwiKTtcbiAgICAgIGZvcmVjYXN0RWxlbWVudC5hcHBlbmRDaGlsZChkYXlFbGVtZW50KTtcblxuICAgICAgLy8gQnVpbGQgYW5kIGFwcGVuZCB3ZWVrZGF5IGFuZCBkYXRlXG4gICAgICBjb25zdCBkYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkYXRlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGF5LWRhdGVcIik7XG4gICAgICBkYXlFbGVtZW50LmFwcGVuZENoaWxkKGRhdGVFbGVtZW50KTtcblxuICAgICAgY29uc3Qgd2Vla2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgd2Vla2RheS50ZXh0Q29udGVudCA9IHV0aWxpdGllcy5nZXREYXkoZGF5LmRhdGUpO1xuICAgICAgZGF0ZUVsZW1lbnQuYXBwZW5kQ2hpbGQod2Vla2RheSk7XG5cbiAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGRhdGUudGV4dENvbnRlbnQgPSB1dGlsaXRpZXMucGFyc2VEYXRlKGRheS5kYXRlKTtcbiAgICAgIGRhdGVFbGVtZW50LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgICAvLyBjb25kaXRpb24gaWNvblxuICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJkYXktaWNvblwiKTtcbiAgICAgIGljb24uc3JjID0gZGF5LmNvbmRpdGlvbi5pY29uO1xuICAgICAgZGF5RWxlbWVudC5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgICAgLy8gY29uZGl0aW9uIHRleHRcbiAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25kaXRpb24uY2xhc3NMaXN0LmFkZChcImNvbmRpdGlvblwiKTtcbiAgICAgIGNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGRheS5jb25kaXRpb24udGV4dDtcbiAgICAgIGRheUVsZW1lbnQuYXBwZW5kQ2hpbGQoY29uZGl0aW9uKTtcblxuICAgICAgLy8gaGlsb1xuICAgICAgY29uc3QgaGlsbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBoaWxvLmNsYXNzTGlzdC5hZGQoXCJoaWxvXCIpO1xuICAgICAgZGF5RWxlbWVudC5hcHBlbmRDaGlsZChoaWxvKTtcbiAgICAgIC8vIGhpIHNwYW5cbiAgICAgIGNvbnN0IGhpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBoaS50ZXh0Q29udGVudCA9IE1hdGgudHJ1bmMoZGF5LmhpKSArIFwiwrBGXCI7XG4gICAgICBoaWxvLmFwcGVuZENoaWxkKGhpKTtcbiAgICAgIC8vIGxvIHNwYW5cbiAgICAgIGNvbnN0IGxvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBsby50ZXh0Q29udGVudCA9IE1hdGgudHJ1bmMoZGF5LmxvKSArIFwiwrBGXCI7XG4gICAgICBoaWxvLmFwcGVuZENoaWxkKGxvKTtcblxuICAgICAgLy8gY2hhbmdlIG9mIHJhaW5cbiAgICAgIGNvbnN0IGNoYW5jZU9mUmFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjaGFuY2VPZlJhaW4uY2xhc3NMaXN0LmFkZChcImNoYW5jZS1vZi1yYWluXCIpO1xuICAgICAgY2hhbmNlT2ZSYWluLnRleHRDb250ZW50ID0gZGF5LmNoYW5jZW9mcmFpbiArIFwiJSBjaGFuY2Ugb2YgcmFpblwiO1xuICAgICAgZGF5RWxlbWVudC5hcHBlbmRDaGlsZChjaGFuY2VPZlJhaW4pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVJlc3VsdHMgPSAocmVzdWx0cykgPT4ge1xuICAgIHV0aWxpdGllcy5yZW1vdmVDaGlsZHJlbihzZWFyY2hTdWdnZXN0aW9ucyk7XG5cbiAgICByZXN1bHRzLmZvckVhY2goKHJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICByZXN1bHRFbGVtZW50LnRleHRDb250ZW50ID0gYCR7cmVzdWx0LmxvY2F0aW9ufSwgJHtyZXN1bHQucmVnaW9ufWA7XG4gICAgICByZXN1bHRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdXJsXCIsIHJlc3VsdC51cmwpO1xuICAgICAgcmVzdWx0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLXJlc3VsdFwiKTtcbiAgICAgIHJlc3VsdEVsZW1lbnQub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXVybFwiKTtcbiAgICAgICAgc2VhcmNoRm9ybS5yZXF1ZXN0U3VibWl0KCk7XG5cbiAgICAgICAgdXRpbGl0aWVzLnJlbW92ZUNoaWxkcmVuKHNlYXJjaFN1Z2dlc3Rpb25zKTtcbiAgICAgIH07XG4gICAgICBzZWFyY2hTdWdnZXN0aW9ucy5hcHBlbmRDaGlsZChyZXN1bHRFbGVtZW50KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4geyB1cGRhdGVXZWF0aGVyLCB1cGRhdGVGb3JlY2FzdCwgdXBkYXRlUmVzdWx0cyB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdmlldztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIFN0eWxlIGltcG9ydHNcbmltcG9ydCBcIi4vbWFpbi5jc3NcIjtcblxuLy8gTW9kdWxlIGltcG9ydHNcbmltcG9ydCBhcGkgZnJvbSBcIi4vY29tcG9uZW50cy9hcGlcIjtcbmltcG9ydCB2aWV3IGZyb20gXCIuL2NvbXBvbmVudHMvdmlld1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1ZXJ5XCIpO1xuICBzZWFyY2hGb3JtLm9uaW5wdXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBxdWVyeSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBpZiAocXVlcnkgPT09IFwiXCIpIHJldHVybjtcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgYXBpLmdldFN1Z2dlc3Rpb25zKHF1ZXJ5KTtcbiAgICB2aWV3LnVwZGF0ZVJlc3VsdHMocmVzdWx0cyk7XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtZm9ybVwiKTtcbiAgc2VhcmNoQnV0dG9uLm9uc3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBxdWVyeSA9IGV2ZW50LnRhcmdldC5lbGVtZW50c1tcInF1ZXJ5XCJdLnZhbHVlO1xuXG4gICAgLy8gd2FpdCBmb3IgYXN5bmMgZnVuY3Rpb24gdG8gcmVzb2x2ZSBhbmQgc3RvcmUgcmVzcG9uc2UgZGF0YVxuICAgIHRyeSB7XG4gICAgICAvLyBDYWxsIGFwaSBhbmQgYXdhaXQgYm90aCBjYWxscyB0byByZXNvbHZlXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBhcGkuZ2V0V2VhdGhlcihxdWVyeSksXG4gICAgICAgIGFwaS5nZXRGb3JlY2FzdChxdWVyeSksXG4gICAgICBdKTtcblxuICAgICAgLy8gRGVzdHJ1Y3R1cmUgZGF0YSBtb3JlIHNlbWFudGljIG5hbWluZ1xuICAgICAgY29uc3QgW3dlYXRoZXIsIGZvcmVjYXN0XSA9IGRhdGE7XG5cbiAgICAgIHZpZXcudXBkYXRlV2VhdGhlcih3ZWF0aGVyKTtcbiAgICAgIHZpZXcudXBkYXRlRm9yZWNhc3QoZm9yZWNhc3QpO1xuICAgICAgZXZlbnQudGFyZ2V0LnJlc2V0KCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVmcmVzaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVmcmVzaFwiKTtcbiAgcmVmcmVzaEJ1dHRvbi5vbmNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIikuZ2V0QXR0cmlidXRlKFwiZGF0YS1sb2NhdGlvblwiKTtcbiAgICBjb25zdCByZWdpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIikuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZWdpb25cIik7XG5cbiAgICBjb25zdCBxdWVyeSA9IG5hbWUgKyBcIiwgXCIgKyByZWdpb247XG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGFwaS5nZXRXZWF0aGVyKHF1ZXJ5KTtcbiAgICB2aWV3LnVwZGF0ZVdlYXRoZXIod2VhdGhlcik7XG4gIH07XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==