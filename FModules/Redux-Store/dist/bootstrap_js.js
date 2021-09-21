"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkRedux_Store"] = self["webpackChunkRedux_Store"] || []).push([["bootstrap_js"],{

/***/ "./DateCounterStore/actions.js":
/*!*************************************!*\
  !*** ./DateCounterStore/actions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"increment_date\": () => (/* binding */ increment_date),\n/* harmony export */   \"decrement_date\": () => (/* binding */ decrement_date)\n/* harmony export */ });\nconst INCREMENT_DATE = \"INCREMENT_DATE\";\nconst DECREMENT_DATE = \"DECREMENT_DATE\";\nconst increment_date = payload => ({\n  type: INCREMENT_DATE,\n  payload\n});\nconst decrement_date = payload => ({\n  type: DECREMENT_DATE,\n  payload\n});\n\n//# sourceURL=webpack://Redux-Store/./DateCounterStore/actions.js?");

/***/ }),

/***/ "./DateCounterStore/reducer.js":
/*!*************************************!*\
  !*** ./DateCounterStore/reducer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DateCounterReducer\": () => (/* binding */ DateCounterReducer)\n/* harmony export */ });\nconst DateCounterReducer = (state = {\n  date: Date.now()\n}, action) => {\n  const ms = 3600 * 60 * 24 * 100;\n  const load = parseInt(action.payload);\n\n  switch (action.type) {\n    case 'INCREMENT_DATE':\n      return { ...state,\n        date: state.date + load * ms\n      };\n\n    case 'DECREMENT_DATE':\n      return { ...state,\n        date: state.date - load * ms\n      };\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://Redux-Store/./DateCounterStore/reducer.js?");

/***/ }),

/***/ "./NumberCounterStore/actions.js":
/*!***************************************!*\
  !*** ./NumberCounterStore/actions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"increment_one\": () => (/* binding */ increment_one),\n/* harmony export */   \"decrement_one\": () => (/* binding */ decrement_one)\n/* harmony export */ });\nconst INCREMENT_ONE = \"INCREMENT_ONE\";\nconst DECREMENT_ONE = \"DECREMENT_ONE\";\nconst increment_one = {\n  type: INCREMENT_ONE\n};\nconst decrement_one = {\n  type: DECREMENT_ONE\n};\n\n//# sourceURL=webpack://Redux-Store/./NumberCounterStore/actions.js?");

/***/ }),

/***/ "./NumberCounterStore/reducer.js":
/*!***************************************!*\
  !*** ./NumberCounterStore/reducer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CounterReducer\": () => (/* binding */ CounterReducer)\n/* harmony export */ });\nconst CounterReducer = (state = {\n  value: 0\n}, action) => {\n  switch (action.type) {\n    case 'INCREMENT_ONE':\n      return { ...state,\n        value: state.value + 1\n      };\n\n    case 'DECREMENT_ONE':\n      return { ...state,\n        value: state.value - 1\n      };\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://Redux-Store/./NumberCounterStore/reducer.js?");

/***/ }),

/***/ "./actions.js":
/*!********************!*\
  !*** ./actions.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DateCounterStore_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateCounterStore/actions */ \"./DateCounterStore/actions.js\");\n/* harmony import */ var _NumberCounterStore_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NumberCounterStore/actions */ \"./NumberCounterStore/actions.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ ..._DateCounterStore_actions__WEBPACK_IMPORTED_MODULE_0__,\n  ..._NumberCounterStore_actions__WEBPACK_IMPORTED_MODULE_1__\n});\n\n//# sourceURL=webpack://Redux-Store/./actions.js?");

/***/ }),

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?255a\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var _remoteentry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remoteentry */ \"./remoteentry.js\");\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_remoteentry__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), document.getElementById('root'));\n\n//# sourceURL=webpack://Redux-Store/./bootstrap.js?");

/***/ }),

/***/ "./remoteentry.js":
/*!************************!*\
  !*** ./remoteentry.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?255a\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"webpack/sharing/consume/default/react-redux/react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ \"./store.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ \"./actions.js\");\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectors */ \"./selectors.js\");\n\n\n\n\n\n\nconst StoreApp = props => {\n  const [a, seta] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);\n  const clonedChilds = react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(props.children, child => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {\n      actions: _actions__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      selectors: _selectors__WEBPACK_IMPORTED_MODULE_4__\n    });\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n    store: _store__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }, clonedChilds);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoreApp);\n\n//# sourceURL=webpack://Redux-Store/./remoteentry.js?");

/***/ }),

/***/ "./selectors.js":
/*!**********************!*\
  !*** ./selectors.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"number\": () => (/* binding */ number),\n/* harmony export */   \"date\": () => (/* binding */ date)\n/* harmony export */ });\nconst number = state => state.CounterReducer.value;\nconst date = state => state.DateCounterReducer.date;\n\n//# sourceURL=webpack://Redux-Store/./selectors.js?");

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store),\n/* harmony export */   \"actions\": () => (/* reexport module object */ _actions__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   \"selectors\": () => (/* reexport module object */ _selectors__WEBPACK_IMPORTED_MODULE_3__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _DateCounterStore_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateCounterStore/reducer */ \"./DateCounterStore/reducer.js\");\n/* harmony import */ var _NumberCounterStore_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NumberCounterStore/reducer */ \"./NumberCounterStore/reducer.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"./actions.js\");\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ \"./selectors.js\");\n\n\n\n\n\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_4__.combineReducers)({\n  DateCounterReducer: _DateCounterStore_reducer__WEBPACK_IMPORTED_MODULE_0__.DateCounterReducer,\n  CounterReducer: _NumberCounterStore_reducer__WEBPACK_IMPORTED_MODULE_1__.CounterReducer\n});\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_4__.createStore)(rootReducer);\n\n\n//# sourceURL=webpack://Redux-Store/./store.js?");

/***/ })

}]);