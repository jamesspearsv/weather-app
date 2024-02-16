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
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}&aqi=no`,
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
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=3&aqi=no&alerts=no`,
        { mode: "cors" }
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
      `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${query}`,
      { mode: "cors" }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLCtFQUErRSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9B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Q0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ29COztBQUVwQjtBQUNtQztBQUNFOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHVEQUFHO0FBQzdCLElBQUksd0RBQUk7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQUc7QUFDWCxRQUFRLHVEQUFHO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQSxNQUFNLHdEQUFJO0FBQ1YsTUFBTSx3REFBSTtBQUNWO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQix1REFBRztBQUM3QixJQUFJLHdEQUFJO0FBQ1I7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL3NyYy9tYWluLmNzcz9kZGQzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy92aWV3LmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgLS1wYWRkaW5nOiAxNXB4O1xuICAtLWNvbG9yLXByaW1hcnk6ICM5OGMxZDk7XG4gIC0tY29sb3ItYWNjZW50OiAjY2ZjZmNmO1xuICAtLWNvbG9yLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC0tY29sb3ItaWNvbnM6ICM5MDhlOGU7XG4gIC0tcGFkZGluZy1zcGFuOiA1cHg7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogdmFyKC0tcGFkZGluZyk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKSBtYXgoMzAlLCAxMDBweCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWNvbG9yLWFjY2VudCk7XG59XG5cbiNyZWZyZXNoIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0tY29sb3ItaWNvbnMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jcmVmcmVzaDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2Zvcm0tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBnYXA6IDEwcHg7XG4gIG91dGxpbmU6IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCkgMXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiAxcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5mb3JtLWdyb3VwID4gKiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZm9ybS1ncm91cCA+IGlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tZ3JvdXAgPiBidXR0b24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWljb25zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWdyb3VwID4gYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jc2VhcmNoLXN1Z2dlc3Rpb25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3NlYXJjaC1zdWdnZXN0aW9uczpoYXMoLnNlYXJjaC1yZXN1bHQpIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tY29sb3ItYWNjZW50KTtcbn1cblxuLnNlYXJjaC1yZXN1bHQge1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbjogM3B4O1xufVxuXG4uc2VhcmNoLXJlc3VsdDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2I2JvZHktY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcbn1cblxuLyogQ3VycmVudCBXZWF0aGVyIFN0eWxlcyAqL1xuI2N1cnJlbnQtd2VhdGhlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1pbi1jb250ZW50KTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiB2YXIoLS1wYWRkaW5nKTtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB3aWR0aDogbWluKDk1JSwgNTAwcHgpO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcGFkZGluZyk7XG59XG5cbiNsb2NhdGlvbiB7XG4gIGdyaWQtcm93OiAxIC8gc3BhbiAxO1xuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gNDtcbn1cblxuI2N1cnJlbnQtY29uZGl0aW9ucyB7XG4gIGdyaWQtcm93OiAyIC8gc3BhbiAxO1xuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcbn1cblxuI2NvbmRpdGlvbnMtaWNvbiB7XG4gIGdyaWQtcm93OiAzIC8gc3BhbiAxO1xuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMTtcbn1cblxuI3RlbXAtY29udGFpbmVyIHtcbiAgZ3JpZC1yb3c6IDMgLyBzcGFuIDE7XG4gIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAxO1xufVxuXG4jd2VhdGhlci1kZXRhaWxzIHtcbiAgZ3JpZC1yb3c6IDIgLyBzcGFuIDI7XG4gIGdyaWQtY29sdW1uOiAzIC8gc3BhbiAyO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiN3ZWF0aGVyLWRldGFpbHMgPiBkaXYge1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLXNwYW4pO1xufVxuXG4vKiBGb3JlY2FzdCBzdHlsZXMgKi9cbiNmb3JlY2FzdC1jb250YWluZXIge1xuICB3aWR0aDogbWluKDk1JSwgNzAwcHgpO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmcpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1wYWRkaW5nKTtcbn1cblxuI2ZvcmVjYXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luOiB2YXIoLS1wYWRkaW5nKTtcbn1cblxuLmRheSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XG4gIGdhcDogMTBweDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uZGF5LWRhdGUge1xuICBncmlkLXJvdzogMSAvIHNwYW4gMTtcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XG59XG5cbi5kYXktZGF0ZSA+IHNwYW4ge1xuICBtYXJnaW46IHZhcigtLXBhZGRpbmctc3Bhbik7XG59XG5cbi5kYXktaWNvbiB7XG4gIGdyaWQtcm93OiAyIC8gc3BhbiAyO1xuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMTtcbn1cblxuLmNvbmRpdGlvbiB7XG4gIGdyaWQtcm93OiA0IC8gc3BhbiAxO1xuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcbn1cblxuLmhpbG8ge1xuICBncmlkLXJvdzogMiAvIHNwYW4gMTtcbiAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDE7XG59XG5cbi5oaWxvID4gc3BhbiB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uY2hhbmNlLW9mLXJhaW4ge1xuICBncmlkLXJvdzogMyAvIHNwYW4gMTtcbiAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDE7XG59XG5cbmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDREQUE0RDtFQUM1RCxlQUFlO0VBQ2Ysd0JB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QXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAtLXBhZGRpbmc6IDE1cHg7XFxuICAtLWNvbG9yLXByaW1hcnk6ICM5OGMxZDk7XFxuICAtLWNvbG9yLWFjY2VudDogI2NmY2ZjZjtcXG4gIC0tY29sb3ItYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIC0tY29sb3ItaWNvbnM6ICM5MDhlOGU7XFxuICAtLXBhZGRpbmctc3BhbjogNXB4O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1wYWRkaW5nKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmcpIG1heCgzMCUsIDEwMHB4KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1jb2xvci1hY2NlbnQpO1xcbn1cXG5cXG4jcmVmcmVzaCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItaWNvbnMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNyZWZyZXNoOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2Zvcm0tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZm9ybS1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZ2FwOiAxMHB4O1xcbiAgb3V0bGluZTogc29saWQgdmFyKC0tY29sb3ItYWNjZW50KSAxcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZzogMXB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLmZvcm0tZ3JvdXAgPiAqIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmZvcm0tZ3JvdXAgPiBpbnB1dCB7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNXB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZm9ybS1ncm91cCA+IGJ1dHRvbiB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWljb25zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZm9ybS1ncm91cCA+IGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzZWFyY2gtc3VnZ2VzdGlvbnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3NlYXJjaC1zdWdnZXN0aW9uczpoYXMoLnNlYXJjaC1yZXN1bHQpIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1jb2xvci1hY2NlbnQpO1xcbn1cXG5cXG4uc2VhcmNoLXJlc3VsdCB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW46IDNweDtcXG59XFxuXFxuLnNlYXJjaC1yZXN1bHQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5kaXYjYm9keS1jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZyk7XFxufVxcblxcbi8qIEN1cnJlbnQgV2VhdGhlciBTdHlsZXMgKi9cXG4jY3VycmVudC13ZWF0aGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ2FwOiB2YXIoLS1wYWRkaW5nKTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiBtaW4oOTUlLCA1MDBweCk7XFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmcpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcGFkZGluZyk7XFxufVxcblxcbiNsb2NhdGlvbiB7XFxuICBncmlkLXJvdzogMSAvIHNwYW4gMTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiA0O1xcbn1cXG5cXG4jY3VycmVudC1jb25kaXRpb25zIHtcXG4gIGdyaWQtcm93OiAyIC8gc3BhbiAxO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XFxufVxcblxcbiNjb25kaXRpb25zLWljb24ge1xcbiAgZ3JpZC1yb3c6IDMgLyBzcGFuIDE7XFxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMTtcXG59XFxuXFxuI3RlbXAtY29udGFpbmVyIHtcXG4gIGdyaWQtcm93OiAzIC8gc3BhbiAxO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDE7XFxufVxcblxcbiN3ZWF0aGVyLWRldGFpbHMge1xcbiAgZ3JpZC1yb3c6IDIgLyBzcGFuIDI7XFxuICBncmlkLWNvbHVtbjogMyAvIHNwYW4gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jd2VhdGhlci1kZXRhaWxzID4gZGl2IHtcXG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctc3Bhbik7XFxufVxcblxcbi8qIEZvcmVjYXN0IHN0eWxlcyAqL1xcbiNmb3JlY2FzdC1jb250YWluZXIge1xcbiAgd2lkdGg6IG1pbig5NSUsIDcwMHB4KTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmcpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcGFkZGluZyk7XFxufVxcblxcbiNmb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIG1hcmdpbjogdmFyKC0tcGFkZGluZyk7XFxufVxcblxcbi5kYXkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xcbiAgZ2FwOiAxMHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5kYXktZGF0ZSB7XFxuICBncmlkLXJvdzogMSAvIHNwYW4gMTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xcbn1cXG5cXG4uZGF5LWRhdGUgPiBzcGFuIHtcXG4gIG1hcmdpbjogdmFyKC0tcGFkZGluZy1zcGFuKTtcXG59XFxuXFxuLmRheS1pY29uIHtcXG4gIGdyaWQtcm93OiAyIC8gc3BhbiAyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XFxufVxcblxcbi5jb25kaXRpb24ge1xcbiAgZ3JpZC1yb3c6IDQgLyBzcGFuIDE7XFxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG59XFxuXFxuLmhpbG8ge1xcbiAgZ3JpZC1yb3c6IDIgLyBzcGFuIDE7XFxuICBncmlkLWNvbHVtbjogMiAvIHNwYW4gMTtcXG59XFxuXFxuLmhpbG8gPiBzcGFuIHtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4uY2hhbmNlLW9mLXJhaW4ge1xcbiAgZ3JpZC1yb3c6IDMgLyBzcGFuIDE7XFxuICBncmlkLWNvbHVtbjogMiAvIHNwYW4gMTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSUlGRSBhcGkgbW9kdWxlIHRvIGFjY2VzIFdlYXRoZXIgQVBJXG4vLyBodHRwczovL3d3dy53ZWF0aGVyYXBpLmNvbS9cbmNvbnN0IGFwaSA9ICgoKSA9PiB7XG4gIGNvbnN0IEFQSV9LRVkgPSBcIjQ1YmM0MjNjOWFlZDRhM2U5OTMyMDAyMzUyNDEwMDJcIjtcblxuICBjb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKHF1ZXJ5KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7QVBJX0tFWX0mcT0ke3F1ZXJ5fSZhcWk9bm9gLFxuICAgICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICAgICk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IGBSZXNwb25zZSBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9YDtcblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnN0IHdlYXRoZXIgPSB7XG4gICAgICAgIGNvbmRpdGlvbnM6IGRhdGEuY3VycmVudC5jb25kaXRpb24sIC8vIGNvbnRhaW5zIHRleHQsIGljb24sIGNvZGVcbiAgICAgICAgZmVlbHNsaWtlZjogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mLFxuICAgICAgICBmZWVsc2xpa2VjOiBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MsXG4gICAgICAgIGh1bWlkaXR5OiBkYXRhLmN1cnJlbnQuaHVtaWRpdHksXG4gICAgICAgIGxvY2F0aW9uOiBkYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgICAgIHJlZ2lvbjogZGF0YS5sb2NhdGlvbi5yZWdpb24sXG4gICAgICAgIHRlbXBmOiBkYXRhLmN1cnJlbnQudGVtcF9mLFxuICAgICAgICB0ZW1wYzogZGF0YS5jdXJyZW50LnRlbXBfYyxcbiAgICAgICAgd2luZG1waDogZGF0YS5jdXJyZW50LndpbmRfbXBoLFxuICAgICAgICB3aW5kZGlyOiBkYXRhLmN1cnJlbnQud2luZF9kaXIsXG4gICAgICAgIHZpczogZGF0YS5jdXJyZW50LnZpc19taWxlcyxcbiAgICAgIH07XG4gICAgICByZXR1cm4gd2VhdGhlcjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRGb3JlY2FzdCA9IGFzeW5jIChxdWVyeSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtBUElfS0VZfSZxPSR7cXVlcnl9JmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vYCxcbiAgICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgICApO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBgUmVzcG9uc2Ugc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc3QgZm9yZWNhc3QgPSBbXTtcblxuICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheS5mb3JFYWNoKChkYXkpID0+IHtcbiAgICAgICAgY29uc3QgZGFpbHlGb3JlY2FzdCA9IHtcbiAgICAgICAgICBkYXRlOiBkYXkuZGF0ZSxcbiAgICAgICAgICBoaTogZGF5LmRheS5tYXh0ZW1wX2YsXG4gICAgICAgICAgbG86IGRheS5kYXkubWludGVtcF9mLFxuICAgICAgICAgIGh1bWlkaXR5OiBkYXkuZGF5LmF2Z2h1bWlkaXR5LFxuICAgICAgICAgIGNoYW5jZW9mcmFpbjogZGF5LmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbixcbiAgICAgICAgICBjb25kaXRpb246IGRheS5kYXkuY29uZGl0aW9uLFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvcmVjYXN0LnB1c2goZGFpbHlGb3JlY2FzdCk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGZvcmVjYXN0O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFN1Z2dlc3Rpb25zID0gYXN5bmMgKHF1ZXJ5KSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9zZWFyY2guanNvbj9rZXk9JHtBUElfS0VZfSZxPSR7cXVlcnl9YCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgYFJlc3BvbnNlIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gO1xuXG4gICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgZGF0YS5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgIGxvY2F0aW9uOiBvYmoubmFtZSxcbiAgICAgICAgICByZWdpb246IG9iai5yZWdpb24sXG4gICAgICAgICAgdXJsOiBvYmoudXJsLFxuICAgICAgICB9O1xuXG4gICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBnZXRXZWF0aGVyLCBnZXRGb3JlY2FzdCwgZ2V0U3VnZ2VzdGlvbnMgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcbiIsImNvbnN0IHV0aWxpdGllcyA9ICgoKSA9PiB7XG4gIGNvbnN0IGdldERheSA9IChpbnB1dCkgPT4ge1xuICAgIGNvbnN0IHdlZWsgPSBbXG4gICAgICBcIlN1bmRheVwiLFxuICAgICAgXCJNb25kYXlcIixcbiAgICAgIFwiVHVlc2RheVwiLFxuICAgICAgXCJXZWRuZXNkYXlcIixcbiAgICAgIFwiVGh1cnNkYXlcIixcbiAgICAgIFwiRnJpZGF5XCIsXG4gICAgICBcIlNhdHVyZGF5XCIsXG4gICAgXTtcblxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShpbnB1dCk7XG4gICAgY29uc3QgaW5kZXggPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIGNvbnN0IGRheSA9IHdlZWtbaW5kZXhdO1xuXG4gICAgcmV0dXJuIGRheTtcbiAgfTtcblxuICBjb25zdCBwYXJzZURhdGUgPSAoaW5wdXQpID0+IHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoaW5wdXQpO1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpICsgMTtcbiAgICBjb25zdCBkYXkgPSBkYXRlLmdldFVUQ0RhdGUoKTtcbiAgICByZXR1cm4gYCR7bW9udGh9LyR7ZGF5fWA7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlQ2hpbGRyZW4gPSAocGFyZW50KSA9PiB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGdldERheSwgcGFyc2VEYXRlLCByZW1vdmVDaGlsZHJlbiB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdXRpbGl0aWVzO1xuIiwiaW1wb3J0IHV0aWxpdGllcyBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuY29uc3QgdmlldyA9ICgoKSA9PiB7XG4gIC8vIGNvbnN0YW50c1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpO1xuICBjb25zdCByZWdpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZ2lvblwiKTtcbiAgY29uc3QgY3VycmVudENvbmRpdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtY29uZGl0aW9uc1wiKTtcbiAgY29uc3QgY29uZGl0aW9uc0ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmRpdGlvbnMtaWNvblwiKTtcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcFwiKTtcbiAgY29uc3QgZmVlbExpa2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZlZWxzLWxpa2VcIik7XG4gIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmRcIik7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJodW1pZGl0eVwiKTtcbiAgY29uc3QgdmlzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aXNcIik7XG4gIGNvbnN0IGZvcmVjYXN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yZWNhc3RcIik7XG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWVyeVwiKTtcbiAgY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWZvcm1cIik7XG4gIGNvbnN0IHNlYXJjaFN1Z2dlc3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtc3VnZ2VzdGlvbnNcIik7XG5cbiAgY29uc3QgdXBkYXRlV2VhdGhlciA9ICh3ZWF0aGVyKSA9PiB7XG4gICAgdXRpbGl0aWVzLnJlbW92ZUNoaWxkcmVuKHNlYXJjaFN1Z2dlc3Rpb25zKTtcbiAgICBuYW1lLmlubmVySFRNTCA9IHdlYXRoZXIubG9jYXRpb247XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWxvY2F0aW9uXCIsIHdlYXRoZXIubG9jYXRpb24pO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKFwiZGF0YS1yZWdpb25cIiwgd2VhdGhlci5yZWdpb24pO1xuICAgIHJlZ2lvbi5pbm5lckhUTUwgPSB3ZWF0aGVyLnJlZ2lvbjtcbiAgICBjdXJyZW50Q29uZGl0aW9ucy5pbm5lckhUTUwgPSB3ZWF0aGVyLmNvbmRpdGlvbnMudGV4dDtcbiAgICBjb25kaXRpb25zSWNvbi5zcmMgPSB3ZWF0aGVyLmNvbmRpdGlvbnMuaWNvbjtcbiAgICB0ZW1wLmlubmVySFRNTCA9IE1hdGgudHJ1bmMod2VhdGhlci50ZW1wZikgKyBcIsKwRlwiO1xuICAgIGZlZWxMaWtlLmlubmVySFRNTCA9IFwiRmVlbHMgbGlrZSBcIiArIE1hdGgudHJ1bmMod2VhdGhlci5mZWVsc2xpa2VmKSArIFwiwrBGXCI7XG4gICAgd2luZC5pbm5lckhUTUwgPSBcIldpbmQgc3BlZWQ6IFwiICsgTWF0aC50cnVuYyh3ZWF0aGVyLndpbmRtcGgpICsgXCIgbXBoXCI7XG4gICAgaHVtaWRpdHkuaW5uZXJIVE1MID0gXCJIdW1pZGl0eTogXCIgKyBNYXRoLnRydW5jKHdlYXRoZXIuaHVtaWRpdHkpICsgXCIlXCI7XG4gICAgdmlzLmlubmVySFRNTCA9IFwiVmlzaWJpbGl0eTogXCIgKyBNYXRoLnRydW5jKHdlYXRoZXIudmlzKSArIFwiIG1pbGVzXCI7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlRm9yZWNhc3QgPSAoZm9yZWNhc3QpID0+IHtcbiAgICB1dGlsaXRpZXMucmVtb3ZlQ2hpbGRyZW4oZm9yZWNhc3RFbGVtZW50KTtcblxuICAgIGZvcmVjYXN0LmZvckVhY2goKGRheSkgPT4ge1xuICAgICAgY29uc3QgZGF5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXlcIik7XG4gICAgICBmb3JlY2FzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF5RWxlbWVudCk7XG5cbiAgICAgIC8vIEJ1aWxkIGFuZCBhcHBlbmQgd2Vla2RheSBhbmQgZGF0ZVxuICAgICAgY29uc3QgZGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGF0ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRheS1kYXRlXCIpO1xuICAgICAgZGF5RWxlbWVudC5hcHBlbmRDaGlsZChkYXRlRWxlbWVudCk7XG5cbiAgICAgIGNvbnN0IHdlZWtkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHdlZWtkYXkudGV4dENvbnRlbnQgPSB1dGlsaXRpZXMuZ2V0RGF5KGRheS5kYXRlKTtcbiAgICAgIGRhdGVFbGVtZW50LmFwcGVuZENoaWxkKHdlZWtkYXkpO1xuXG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBkYXRlLnRleHRDb250ZW50ID0gdXRpbGl0aWVzLnBhcnNlRGF0ZShkYXkuZGF0ZSk7XG4gICAgICBkYXRlRWxlbWVudC5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgICAgLy8gY29uZGl0aW9uIGljb25cbiAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiZGF5LWljb25cIik7XG4gICAgICBpY29uLnNyYyA9IGRheS5jb25kaXRpb24uaWNvbjtcbiAgICAgIGRheUVsZW1lbnQuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICAgIC8vIGNvbmRpdGlvbiB0ZXh0XG4gICAgICBjb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoXCJjb25kaXRpb25cIik7XG4gICAgICBjb25kaXRpb24udGV4dENvbnRlbnQgPSBkYXkuY29uZGl0aW9uLnRleHQ7XG4gICAgICBkYXlFbGVtZW50LmFwcGVuZENoaWxkKGNvbmRpdGlvbik7XG5cbiAgICAgIC8vIGhpbG9cbiAgICAgIGNvbnN0IGhpbG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaGlsby5jbGFzc0xpc3QuYWRkKFwiaGlsb1wiKTtcbiAgICAgIGRheUVsZW1lbnQuYXBwZW5kQ2hpbGQoaGlsbyk7XG4gICAgICAvLyBoaSBzcGFuXG4gICAgICBjb25zdCBoaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgaGkudGV4dENvbnRlbnQgPSBNYXRoLnRydW5jKGRheS5oaSkgKyBcIsKwRlwiO1xuICAgICAgaGlsby5hcHBlbmRDaGlsZChoaSk7XG4gICAgICAvLyBsbyBzcGFuXG4gICAgICBjb25zdCBsbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgbG8udGV4dENvbnRlbnQgPSBNYXRoLnRydW5jKGRheS5sbykgKyBcIsKwRlwiO1xuICAgICAgaGlsby5hcHBlbmRDaGlsZChsbyk7XG5cbiAgICAgIC8vIGNoYW5nZSBvZiByYWluXG4gICAgICBjb25zdCBjaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2hhbmNlT2ZSYWluLmNsYXNzTGlzdC5hZGQoXCJjaGFuY2Utb2YtcmFpblwiKTtcbiAgICAgIGNoYW5jZU9mUmFpbi50ZXh0Q29udGVudCA9IGRheS5jaGFuY2VvZnJhaW4gKyBcIiUgY2hhbmNlIG9mIHJhaW5cIjtcbiAgICAgIGRheUVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hhbmNlT2ZSYWluKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVSZXN1bHRzID0gKHJlc3VsdHMpID0+IHtcbiAgICB1dGlsaXRpZXMucmVtb3ZlQ2hpbGRyZW4oc2VhcmNoU3VnZ2VzdGlvbnMpO1xuXG4gICAgcmVzdWx0cy5mb3JFYWNoKChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcmVzdWx0RWxlbWVudC50ZXh0Q29udGVudCA9IGAke3Jlc3VsdC5sb2NhdGlvbn0sICR7cmVzdWx0LnJlZ2lvbn1gO1xuICAgICAgcmVzdWx0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXVybFwiLCByZXN1bHQudXJsKTtcbiAgICAgIHJlc3VsdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlYXJjaC1yZXN1bHRcIik7XG4gICAgICByZXN1bHRFbGVtZW50Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS11cmxcIik7XG4gICAgICAgIHNlYXJjaEZvcm0ucmVxdWVzdFN1Ym1pdCgpO1xuXG4gICAgICAgIHV0aWxpdGllcy5yZW1vdmVDaGlsZHJlbihzZWFyY2hTdWdnZXN0aW9ucyk7XG4gICAgICB9O1xuICAgICAgc2VhcmNoU3VnZ2VzdGlvbnMuYXBwZW5kQ2hpbGQocmVzdWx0RWxlbWVudCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgdXBkYXRlV2VhdGhlciwgdXBkYXRlRm9yZWNhc3QsIHVwZGF0ZVJlc3VsdHMgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHZpZXc7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBTdHlsZSBpbXBvcnRzXG5pbXBvcnQgXCIuL21haW4uY3NzXCI7XG5cbi8vIE1vZHVsZSBpbXBvcnRzXG5pbXBvcnQgYXBpIGZyb20gXCIuL2NvbXBvbmVudHMvYXBpXCI7XG5pbXBvcnQgdmlldyBmcm9tIFwiLi9jb21wb25lbnRzL3ZpZXdcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWVyeVwiKTtcbiAgc2VhcmNoRm9ybS5vbmlucHV0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcXVlcnkgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgaWYgKHF1ZXJ5ID09PSBcIlwiKSByZXR1cm47XG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGFwaS5nZXRTdWdnZXN0aW9ucyhxdWVyeSk7XG4gICAgdmlldy51cGRhdGVSZXN1bHRzKHJlc3VsdHMpO1xuICB9O1xuXG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWZvcm1cIik7XG4gIHNlYXJjaEJ1dHRvbi5vbnN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcXVlcnkgPSBldmVudC50YXJnZXQuZWxlbWVudHNbXCJxdWVyeVwiXS52YWx1ZTtcblxuICAgIC8vIHdhaXQgZm9yIGFzeW5jIGZ1bmN0aW9uIHRvIHJlc29sdmUgYW5kIHN0b3JlIHJlc3BvbnNlIGRhdGFcbiAgICB0cnkge1xuICAgICAgLy8gQ2FsbCBhcGkgYW5kIGF3YWl0IGJvdGggY2FsbHMgdG8gcmVzb2x2ZVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgYXBpLmdldFdlYXRoZXIocXVlcnkpLFxuICAgICAgICBhcGkuZ2V0Rm9yZWNhc3QocXVlcnkpLFxuICAgICAgXSk7XG5cbiAgICAgIC8vIERlc3RydWN0dXJlIGRhdGEgbW9yZSBzZW1hbnRpYyBuYW1pbmdcbiAgICAgIGNvbnN0IFt3ZWF0aGVyLCBmb3JlY2FzdF0gPSBkYXRhO1xuXG4gICAgICB2aWV3LnVwZGF0ZVdlYXRoZXIod2VhdGhlcik7XG4gICAgICB2aWV3LnVwZGF0ZUZvcmVjYXN0KGZvcmVjYXN0KTtcbiAgICAgIGV2ZW50LnRhcmdldC5yZXNldCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlZnJlc2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZnJlc2hcIik7XG4gIHJlZnJlc2hCdXR0b24ub25jbGljayA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtbG9jYXRpb25cIik7XG4gICAgY29uc3QgcmVnaW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtcmVnaW9uXCIpO1xuXG4gICAgY29uc3QgcXVlcnkgPSBuYW1lICsgXCIsIFwiICsgcmVnaW9uO1xuICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCBhcGkuZ2V0V2VhdGhlcihxdWVyeSk7XG4gICAgdmlldy51cGRhdGVXZWF0aGVyKHdlYXRoZXIpO1xuICB9O1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=