"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@walletconnect+environment@1.0.1";
exports.ids = ["vendor-chunks/@walletconnect+environment@1.0.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@walletconnect+environment@1.0.1/node_modules/@walletconnect/environment/dist/cjs/crypto.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@walletconnect+environment@1.0.1/node_modules/@walletconnect/environment/dist/cjs/crypto.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isBrowserCryptoAvailable = exports.getSubtleCrypto = exports.getBrowerCrypto = void 0;\nfunction getBrowerCrypto() {\n    return (global === null || global === void 0 ? void 0 : global.crypto) || (global === null || global === void 0 ? void 0 : global.msCrypto) || {};\n}\nexports.getBrowerCrypto = getBrowerCrypto;\nfunction getSubtleCrypto() {\n    const browserCrypto = getBrowerCrypto();\n    return browserCrypto.subtle || browserCrypto.webkitSubtle;\n}\nexports.getSubtleCrypto = getSubtleCrypto;\nfunction isBrowserCryptoAvailable() {\n    return !!getBrowerCrypto() && !!getSubtleCrypto();\n}\nexports.isBrowserCryptoAvailable = isBrowserCryptoAvailable;\n//# sourceMappingURL=crypto.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrZW52aXJvbm1lbnRAMS4wLjEvbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2Vudmlyb25tZW50L2Rpc3QvY2pzL2NyeXB0by5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQ0FBZ0MsR0FBRyx1QkFBdUIsR0FBRyx1QkFBdUI7QUFDcEY7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyIsInNvdXJjZXMiOlsiL3dvcmtzcGFjZXMvaXdvLXBsYXRmb3JtL25vZGVfbW9kdWxlcy8ucG5wbS9Ad2FsbGV0Y29ubmVjdCtlbnZpcm9ubWVudEAxLjAuMS9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvZW52aXJvbm1lbnQvZGlzdC9janMvY3J5cHRvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc0Jyb3dzZXJDcnlwdG9BdmFpbGFibGUgPSBleHBvcnRzLmdldFN1YnRsZUNyeXB0byA9IGV4cG9ydHMuZ2V0QnJvd2VyQ3J5cHRvID0gdm9pZCAwO1xuZnVuY3Rpb24gZ2V0QnJvd2VyQ3J5cHRvKCkge1xuICAgIHJldHVybiAoZ2xvYmFsID09PSBudWxsIHx8IGdsb2JhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ2xvYmFsLmNyeXB0bykgfHwgKGdsb2JhbCA9PT0gbnVsbCB8fCBnbG9iYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdsb2JhbC5tc0NyeXB0bykgfHwge307XG59XG5leHBvcnRzLmdldEJyb3dlckNyeXB0byA9IGdldEJyb3dlckNyeXB0bztcbmZ1bmN0aW9uIGdldFN1YnRsZUNyeXB0bygpIHtcbiAgICBjb25zdCBicm93c2VyQ3J5cHRvID0gZ2V0QnJvd2VyQ3J5cHRvKCk7XG4gICAgcmV0dXJuIGJyb3dzZXJDcnlwdG8uc3VidGxlIHx8IGJyb3dzZXJDcnlwdG8ud2Via2l0U3VidGxlO1xufVxuZXhwb3J0cy5nZXRTdWJ0bGVDcnlwdG8gPSBnZXRTdWJ0bGVDcnlwdG87XG5mdW5jdGlvbiBpc0Jyb3dzZXJDcnlwdG9BdmFpbGFibGUoKSB7XG4gICAgcmV0dXJuICEhZ2V0QnJvd2VyQ3J5cHRvKCkgJiYgISFnZXRTdWJ0bGVDcnlwdG8oKTtcbn1cbmV4cG9ydHMuaXNCcm93c2VyQ3J5cHRvQXZhaWxhYmxlID0gaXNCcm93c2VyQ3J5cHRvQXZhaWxhYmxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3J5cHRvLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@walletconnect+environment@1.0.1/node_modules/@walletconnect/environment/dist/cjs/crypto.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@walletconnect+environment@1.0.1/node_modules/@walletconnect/environment/dist/cjs/env.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@walletconnect+environment@1.0.1/node_modules/@walletconnect/environment/dist/cjs/env.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isBrowser = exports.isNode = exports.isReactNative = void 0;\nfunction isReactNative() {\n    return (typeof document === \"undefined\" &&\n        typeof navigator !== \"undefined\" &&\n        navigator.product === \"ReactNative\");\n}\nexports.isReactNative = isReactNative;\nfunction isNode() {\n    return (typeof process !== \"undefined\" &&\n        typeof process.versions !== \"undefined\" &&\n        typeof process.versions.node !== \"undefined\");\n}\nexports.isNode = isNode;\nfunction isBrowser() {\n    return !isReactNative() && !isNode();\n}\nexports.isBrowser = isBrowser;\n//# sourceMappingURL=env.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrZW52aXJvbm1lbnRAMS4wLjEvbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2Vudmlyb25tZW50L2Rpc3QvY2pzL2Vudi5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxpQkFBaUIsR0FBRyxjQUFjLEdBQUcscUJBQXFCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIiLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL2l3by1wbGF0Zm9ybS9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrZW52aXJvbm1lbnRAMS4wLjEvbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2Vudmlyb25tZW50L2Rpc3QvY2pzL2Vudi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaXNCcm93c2VyID0gZXhwb3J0cy5pc05vZGUgPSBleHBvcnRzLmlzUmVhY3ROYXRpdmUgPSB2b2lkIDA7XG5mdW5jdGlvbiBpc1JlYWN0TmF0aXZlKCkge1xuICAgIHJldHVybiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgIHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09IFwiUmVhY3ROYXRpdmVcIik7XG59XG5leHBvcnRzLmlzUmVhY3ROYXRpdmUgPSBpc1JlYWN0TmF0aXZlO1xuZnVuY3Rpb24gaXNOb2RlKCkge1xuICAgIHJldHVybiAodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgdHlwZW9mIHByb2Nlc3MudmVyc2lvbnMgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgdHlwZW9mIHByb2Nlc3MudmVyc2lvbnMubm9kZSAhPT0gXCJ1bmRlZmluZWRcIik7XG59XG5leHBvcnRzLmlzTm9kZSA9IGlzTm9kZTtcbmZ1bmN0aW9uIGlzQnJvd3NlcigpIHtcbiAgICByZXR1cm4gIWlzUmVhY3ROYXRpdmUoKSAmJiAhaXNOb2RlKCk7XG59XG5leHBvcnRzLmlzQnJvd3NlciA9IGlzQnJvd3Nlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVudi5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@walletconnect+environment@1.0.1/node_modules/@walletconnect/environment/dist/cjs/env.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@walletconnect+environment@1.0.1/node_modules/@walletconnect/environment/dist/cjs/index.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@walletconnect+environment@1.0.1/node_modules/@walletconnect/environment/dist/cjs/index.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst tslib_1 = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js\");\ntslib_1.__exportStar(__webpack_require__(/*! ./crypto */ \"(ssr)/./node_modules/.pnpm/@walletconnect+environment@1.0.1/node_modules/@walletconnect/environment/dist/cjs/crypto.js\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./env */ \"(ssr)/./node_modules/.pnpm/@walletconnect+environment@1.0.1/node_modules/@walletconnect/environment/dist/cjs/env.js\"), exports);\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrZW52aXJvbm1lbnRAMS4wLjEvbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2Vudmlyb25tZW50L2Rpc3QvY2pzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQixtQkFBTyxDQUFDLHNGQUFPO0FBQy9CLHFCQUFxQixtQkFBTyxDQUFDLHdJQUFVO0FBQ3ZDLHFCQUFxQixtQkFBTyxDQUFDLGtJQUFPO0FBQ3BDIiwic291cmNlcyI6WyIvd29ya3NwYWNlcy9pd28tcGxhdGZvcm0vbm9kZV9tb2R1bGVzLy5wbnBtL0B3YWxsZXRjb25uZWN0K2Vudmlyb25tZW50QDEuMC4xL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9lbnZpcm9ubWVudC9kaXN0L2Nqcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jcnlwdG9cIiksIGV4cG9ydHMpO1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZW52XCIpLCBleHBvcnRzKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@walletconnect+environment@1.0.1/node_modules/@walletconnect/environment/dist/cjs/index.js\n");

/***/ })

};
;