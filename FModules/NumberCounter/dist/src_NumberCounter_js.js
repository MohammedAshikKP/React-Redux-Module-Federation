"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_asda_asd"] = self["webpackChunk_asda_asd"] || []).push([["src_NumberCounter_js"],{

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://@asda/asd/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/Components/Button/Button.js":
/*!*****************************************!*\
  !*** ./src/Components/Button/Button.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?255a\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.css */ \"./src/Components/Button/Button.css\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nconst Button = ({\n  displayText,\n  ...rest\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", _extends({\n    className: \"btn\"\n  }, rest), displayText);\n};\n\n//# sourceURL=webpack://@asda/asd/./src/Components/Button/Button.js?");

/***/ }),

/***/ "./src/Components/Button/index.js":
/*!****************************************!*\
  !*** ./src/Components/Button/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ \"./src/Components/Button/Button.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Button__WEBPACK_IMPORTED_MODULE_0__.Button);\n\n//# sourceURL=webpack://@asda/asd/./src/Components/Button/index.js?");

/***/ }),

/***/ "./src/Components/RedColouredH1/RedColouredH1.js":
/*!*******************************************************!*\
  !*** ./src/Components/RedColouredH1/RedColouredH1.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RedColouredH1\": () => (/* binding */ RedColouredH1)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?255a\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst RedColouredH1 = ({\n  number\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    style: {\n      color: 'red'\n    }\n  }, number);\n};\n\n//# sourceURL=webpack://@asda/asd/./src/Components/RedColouredH1/RedColouredH1.js?");

/***/ }),

/***/ "./src/Components/RedColouredH1/index.js":
/*!***********************************************!*\
  !*** ./src/Components/RedColouredH1/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _RedColouredH1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RedColouredH1 */ \"./src/Components/RedColouredH1/RedColouredH1.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_RedColouredH1__WEBPACK_IMPORTED_MODULE_0__.RedColouredH1);\n\n//# sourceURL=webpack://@asda/asd/./src/Components/RedColouredH1/index.js?");

/***/ }),

/***/ "./src/CustomSystem.js":
/*!*****************************!*\
  !*** ./src/CustomSystem.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?255a\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Loader = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"loading..\");\n\nconst loadComponent = async (scope, module) => {\n  await __webpack_require__.I('default');\n  const container = window[scope]; // or get the container somewhere else\n\n  await container.init(__webpack_require__.S.default);\n  const factory = await window[scope].get(module);\n  const Module = factory();\n  return Module;\n};\n\nconst useDynamicScript = args => {\n  const [ready, setReady] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);\n  const [failed, setFailed] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {\n    if (!args.url) {\n      return;\n    }\n\n    const element = document.createElement('script');\n    element.src = args.url;\n    element.type = 'text/javascript';\n    element.async = true;\n    setReady(false);\n    setFailed(false);\n\n    element.onload = () => {\n      console.log(`Dynamic Script Loaded: ${args.url}`);\n      setReady(true);\n    };\n\n    element.onerror = () => {\n      console.error(`Dynamic Script Error: ${args.url}`);\n      setReady(false);\n      setFailed(true);\n    };\n\n    document.head.appendChild(element);\n    return () => {\n      console.log(`Dynamic Script Removed: ${args.url}`);\n      document.head.removeChild(element);\n    };\n  }, [args.url]);\n  return {\n    ready,\n    failed\n  };\n};\n\nconst System = async props => {\n  const {\n    ready,\n    failed\n  } = useDynamicScript({\n    url: 'http://localhost:4004/remoteEntry.js'\n  });\n\n  if (!ready) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Loader, null);\n  }\n\n  if (failed) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Failed to load dynamic script:http://localhost:4004/remoteEntry.js\");\n  }\n\n  const Component = await loadComponent('ReduxStore', './Store');\n  console.log('---------', Component);\n  return Component;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (System);\n\n//# sourceURL=webpack://@asda/asd/./src/CustomSystem.js?");

/***/ }),

/***/ "./src/NumberCounter.js":
/*!******************************!*\
  !*** ./src/NumberCounter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NumberCounter\": () => (/* binding */ NumberCounter),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?255a\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"webpack/sharing/consume/default/react-redux/react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Button */ \"./src/Components/Button/index.js\");\n/* harmony import */ var _Components_RedColouredH1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/RedColouredH1 */ \"./src/Components/RedColouredH1/index.js\");\n/* harmony import */ var _CustomSystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomSystem */ \"./src/CustomSystem.js\");\n\n\n\n\n\nconst NumberCounter = props => {\n  console.log('Number ', (0,_CustomSystem__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()); //  console.log(\"bbb\",store|| 'no store');\n  // const dispatch = useDispatch();\n  // const number = useSelector(selectors.number)\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_RedColouredH1__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    number: 22\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    displayText: \"Inc\",\n    onClick: () => console.log()\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    displayText: \"Dec\",\n    onClick: () => console.log()\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberCounter);\n\n//# sourceURL=webpack://@asda/asd/./src/NumberCounter.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Components/Button/Button.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Components/Button/Button.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".btn {\\n    display: inline-block;\\n    border: none;\\n    padding: 1rem 2rem;\\n    margin: 0;\\n    text-decoration: none;\\n    background: #0069ed;\\n    color: #ffffff;\\n    font-family: sans-serif;\\n    font-size: 1rem;\\n    cursor: pointer;\\n    text-align: center;\\n    transition: background 250ms ease-in-out, \\n                transform 150ms ease;\\n    -webkit-appearance: none;\\n    -moz-appearance: none;\\n}\\n\\n.btn:hover,\\n.btn:focus {\\n    background: #0053ba;\\n}\\n\\n.btn:focus {\\n    outline: 1px solid #fff;\\n    outline-offset: -4px;\\n}\\n\\n.btn:active {\\n    transform: scale(0.99);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://@asda/asd/./src/Components/Button/Button.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/Components/Button/Button.css":
/*!******************************************!*\
  !*** ./src/Components/Button/Button.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Button_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Button.css */ \"./node_modules/css-loader/dist/cjs.js!./src/Components/Button/Button.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Button_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Button_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_Button_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_Button_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://@asda/asd/./src/Components/Button/Button.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://@asda/asd/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://@asda/asd/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://@asda/asd/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://@asda/asd/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://@asda/asd/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://@asda/asd/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

}]);