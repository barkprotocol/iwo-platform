"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@trezor+env-utils@1.2.1_react-native@0.76.5_@babel+core@7.26.0_@babel+preset-env@7.26.0_@babe_2e7rcpcsp4molhnt2zt3wi2o3q";
exports.ids = ["vendor-chunks/@trezor+env-utils@1.2.1_react-native@0.76.5_@babel+core@7.26.0_@babel+preset-env@7.26.0_@babe_2e7rcpcsp4molhnt2zt3wi2o3q"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@trezor+env-utils@1.2.1_react-native@0.76.5_@babel+core@7.26.0_@babel+preset-env@7.26.0_@babe_2e7rcpcsp4molhnt2zt3wi2o3q/node_modules/@trezor/env-utils/lib/envUtils.js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@trezor+env-utils@1.2.1_react-native@0.76.5_@babel+core@7.26.0_@babel+preset-env@7.26.0_@babe_2e7rcpcsp4molhnt2zt3wi2o3q/node_modules/@trezor/env-utils/lib/envUtils.js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.envUtils = exports.getJWSPublicKey = exports.getEnvironment = exports.isNative = exports.isDesktop = exports.isWeb = void 0;\nconst tslib_1 = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs\");\nconst ua_parser_js_1 = tslib_1.__importDefault(__webpack_require__(/*! ua-parser-js */ \"(ssr)/./node_modules/.pnpm/ua-parser-js@1.0.39/node_modules/ua-parser-js/src/ua-parser.js\"));\nconst jws_1 = __webpack_require__(/*! ./jws */ \"(ssr)/./node_modules/.pnpm/@trezor+env-utils@1.2.1_react-native@0.76.5_@babel+core@7.26.0_@babel+preset-env@7.26.0_@babe_2e7rcpcsp4molhnt2zt3wi2o3q/node_modules/@trezor/env-utils/lib/jws.js\");\nconst isWeb = () => process.env.SUITE_TYPE === 'web';\nexports.isWeb = isWeb;\nconst isDesktop = () => process.env.SUITE_TYPE === 'desktop';\nexports.isDesktop = isDesktop;\nconst isNative = () => false;\nexports.isNative = isNative;\nconst getEnvironment = () => {\n    if ((0, exports.isWeb)())\n        return 'web';\n    return 'desktop';\n};\nexports.getEnvironment = getEnvironment;\nlet userAgentParser;\nconst getUserAgent = () => window.navigator.userAgent;\nconst getUserAgentParser = () => {\n    if (!userAgentParser) {\n        const ua = getUserAgent();\n        userAgentParser = new ua_parser_js_1.default(ua);\n    }\n    return userAgentParser;\n};\nconst isAndroid = () => /Android/.test(getUserAgent());\nconst isChromeOs = () => /CrOS/.test(getUserAgent());\nconst getBrowserVersion = () => getUserAgentParser().getBrowser().version || '';\nconst getCommitHash = () => process.env.COMMITHASH || '';\nconst getOsVersion = () => getUserAgentParser().getOS().version || '';\nconst getSuiteVersion = () => process.env.VERSION || '';\nconst getBrowserName = () => {\n    const browserName = getUserAgentParser().getBrowser().name;\n    return (browserName === null || browserName === void 0 ? void 0 : browserName.toLowerCase()) || '';\n};\nconst isFirefox = () => getBrowserName() === 'firefox';\nconst getPlatform = () => window.navigator.platform;\nconst getPlatformLanguages = () => window.navigator.languages;\nconst getScreenWidth = () => window.screen.width;\nconst getScreenHeight = () => window.screen.height;\nconst getWindowWidth = () => window.innerWidth;\nconst getWindowHeight = () => window.innerHeight;\nconst getLocationOrigin = () => window.location.origin;\nconst getLocationHostname = () => window.location.hostname;\nconst getProcessPlatform = () => (typeof process !== 'undefined' ? process.platform : '');\nconst isMacOs = () => {\n    if (getProcessPlatform() === 'darwin')\n        return true;\n    if (typeof window === 'undefined')\n        return;\n    return getPlatform().startsWith('Mac');\n};\nconst isWindows = () => {\n    if (getProcessPlatform() === 'win32')\n        return true;\n    if (typeof window === 'undefined')\n        return;\n    return getPlatform().startsWith('Win');\n};\nconst isIOs = () => ['iPhone', 'iPad', 'iPod'].includes(getPlatform());\nconst isLinux = () => {\n    if (getProcessPlatform() === 'linux')\n        return true;\n    if (typeof window === 'undefined')\n        return;\n    if (isAndroid() || isChromeOs())\n        return false;\n    return getPlatform().startsWith('Linux');\n};\nconst isCodesignBuild = () => process.env.IS_CODESIGN_BUILD === 'true';\nconst getOsName = () => {\n    if (isWindows())\n        return 'windows';\n    if (isMacOs())\n        return 'macos';\n    if (isAndroid())\n        return 'android';\n    if (isChromeOs())\n        return 'chromeos';\n    if (isLinux())\n        return 'linux';\n    if (isIOs())\n        return 'ios';\n    return '';\n};\nconst getOsNameWeb = () => getUserAgentParser().getOS().name;\nconst getOsFamily = () => {\n    const osName = getUserAgentParser().getOS().name;\n    if (osName === 'Windows') {\n        return 'Windows';\n    }\n    if (osName === 'Mac OS') {\n        return 'MacOS';\n    }\n    return 'Linux';\n};\nconst getDeviceType = () => getUserAgentParser().getDevice().type;\nconst getJWSPublicKey = () => (isCodesignBuild() ? jws_1.publicKey.codesign : jws_1.publicKey.dev);\nexports.getJWSPublicKey = getJWSPublicKey;\nexports.envUtils = {\n    isWeb: exports.isWeb,\n    isDesktop: exports.isDesktop,\n    isNative: exports.isNative,\n    getEnvironment: exports.getEnvironment,\n    getUserAgent,\n    isAndroid,\n    isChromeOs,\n    getOsVersion,\n    getBrowserName,\n    getBrowserVersion,\n    getCommitHash,\n    getDeviceType,\n    getSuiteVersion,\n    isFirefox,\n    getPlatform,\n    getPlatformLanguages,\n    getScreenWidth,\n    getScreenHeight,\n    getWindowWidth,\n    getWindowHeight,\n    getLocationOrigin,\n    getLocationHostname,\n    getProcessPlatform,\n    isMacOs,\n    isWindows,\n    isIOs,\n    isLinux,\n    isCodesignBuild,\n    getOsName,\n    getOsNameWeb,\n    getOsFamily,\n    getJWSPublicKey: exports.getJWSPublicKey,\n};\n//# sourceMappingURL=envUtils.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHRyZXpvcitlbnYtdXRpbHNAMS4yLjFfcmVhY3QtbmF0aXZlQDAuNzYuNV9AYmFiZWwrY29yZUA3LjI2LjBfQGJhYmVsK3ByZXNldC1lbnZANy4yNi4wX0BiYWJlXzJlN3JjcGNzcDRtb2xobnQyenQzd2kybzNxL25vZGVfbW9kdWxlcy9AdHJlem9yL2Vudi11dGlscy9saWIvZW52VXRpbHMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCLEdBQUcsdUJBQXVCLEdBQUcsc0JBQXNCLEdBQUcsZ0JBQWdCLEdBQUcsaUJBQWlCLEdBQUcsYUFBYTtBQUMxSCxnQkFBZ0IsbUJBQU8sQ0FBQyxzRkFBTztBQUMvQiwrQ0FBK0MsbUJBQU8sQ0FBQywrR0FBYztBQUNyRSxjQUFjLG1CQUFPLENBQUMsNE1BQU87QUFDN0I7QUFDQSxhQUFhO0FBQ2I7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL2l3by1wbGF0Zm9ybS9ub2RlX21vZHVsZXMvLnBucG0vQHRyZXpvcitlbnYtdXRpbHNAMS4yLjFfcmVhY3QtbmF0aXZlQDAuNzYuNV9AYmFiZWwrY29yZUA3LjI2LjBfQGJhYmVsK3ByZXNldC1lbnZANy4yNi4wX0BiYWJlXzJlN3JjcGNzcDRtb2xobnQyenQzd2kybzNxL25vZGVfbW9kdWxlcy9AdHJlem9yL2Vudi11dGlscy9saWIvZW52VXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmVudlV0aWxzID0gZXhwb3J0cy5nZXRKV1NQdWJsaWNLZXkgPSBleHBvcnRzLmdldEVudmlyb25tZW50ID0gZXhwb3J0cy5pc05hdGl2ZSA9IGV4cG9ydHMuaXNEZXNrdG9wID0gZXhwb3J0cy5pc1dlYiA9IHZvaWQgMDtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCB1YV9wYXJzZXJfanNfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ1YS1wYXJzZXItanNcIikpO1xuY29uc3QgandzXzEgPSByZXF1aXJlKFwiLi9qd3NcIik7XG5jb25zdCBpc1dlYiA9ICgpID0+IHByb2Nlc3MuZW52LlNVSVRFX1RZUEUgPT09ICd3ZWInO1xuZXhwb3J0cy5pc1dlYiA9IGlzV2ViO1xuY29uc3QgaXNEZXNrdG9wID0gKCkgPT4gcHJvY2Vzcy5lbnYuU1VJVEVfVFlQRSA9PT0gJ2Rlc2t0b3AnO1xuZXhwb3J0cy5pc0Rlc2t0b3AgPSBpc0Rlc2t0b3A7XG5jb25zdCBpc05hdGl2ZSA9ICgpID0+IGZhbHNlO1xuZXhwb3J0cy5pc05hdGl2ZSA9IGlzTmF0aXZlO1xuY29uc3QgZ2V0RW52aXJvbm1lbnQgPSAoKSA9PiB7XG4gICAgaWYgKCgwLCBleHBvcnRzLmlzV2ViKSgpKVxuICAgICAgICByZXR1cm4gJ3dlYic7XG4gICAgcmV0dXJuICdkZXNrdG9wJztcbn07XG5leHBvcnRzLmdldEVudmlyb25tZW50ID0gZ2V0RW52aXJvbm1lbnQ7XG5sZXQgdXNlckFnZW50UGFyc2VyO1xuY29uc3QgZ2V0VXNlckFnZW50ID0gKCkgPT4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG5jb25zdCBnZXRVc2VyQWdlbnRQYXJzZXIgPSAoKSA9PiB7XG4gICAgaWYgKCF1c2VyQWdlbnRQYXJzZXIpIHtcbiAgICAgICAgY29uc3QgdWEgPSBnZXRVc2VyQWdlbnQoKTtcbiAgICAgICAgdXNlckFnZW50UGFyc2VyID0gbmV3IHVhX3BhcnNlcl9qc18xLmRlZmF1bHQodWEpO1xuICAgIH1cbiAgICByZXR1cm4gdXNlckFnZW50UGFyc2VyO1xufTtcbmNvbnN0IGlzQW5kcm9pZCA9ICgpID0+IC9BbmRyb2lkLy50ZXN0KGdldFVzZXJBZ2VudCgpKTtcbmNvbnN0IGlzQ2hyb21lT3MgPSAoKSA9PiAvQ3JPUy8udGVzdChnZXRVc2VyQWdlbnQoKSk7XG5jb25zdCBnZXRCcm93c2VyVmVyc2lvbiA9ICgpID0+IGdldFVzZXJBZ2VudFBhcnNlcigpLmdldEJyb3dzZXIoKS52ZXJzaW9uIHx8ICcnO1xuY29uc3QgZ2V0Q29tbWl0SGFzaCA9ICgpID0+IHByb2Nlc3MuZW52LkNPTU1JVEhBU0ggfHwgJyc7XG5jb25zdCBnZXRPc1ZlcnNpb24gPSAoKSA9PiBnZXRVc2VyQWdlbnRQYXJzZXIoKS5nZXRPUygpLnZlcnNpb24gfHwgJyc7XG5jb25zdCBnZXRTdWl0ZVZlcnNpb24gPSAoKSA9PiBwcm9jZXNzLmVudi5WRVJTSU9OIHx8ICcnO1xuY29uc3QgZ2V0QnJvd3Nlck5hbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgYnJvd3Nlck5hbWUgPSBnZXRVc2VyQWdlbnRQYXJzZXIoKS5nZXRCcm93c2VyKCkubmFtZTtcbiAgICByZXR1cm4gKGJyb3dzZXJOYW1lID09PSBudWxsIHx8IGJyb3dzZXJOYW1lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBicm93c2VyTmFtZS50b0xvd2VyQ2FzZSgpKSB8fCAnJztcbn07XG5jb25zdCBpc0ZpcmVmb3ggPSAoKSA9PiBnZXRCcm93c2VyTmFtZSgpID09PSAnZmlyZWZveCc7XG5jb25zdCBnZXRQbGF0Zm9ybSA9ICgpID0+IHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm07XG5jb25zdCBnZXRQbGF0Zm9ybUxhbmd1YWdlcyA9ICgpID0+IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VzO1xuY29uc3QgZ2V0U2NyZWVuV2lkdGggPSAoKSA9PiB3aW5kb3cuc2NyZWVuLndpZHRoO1xuY29uc3QgZ2V0U2NyZWVuSGVpZ2h0ID0gKCkgPT4gd2luZG93LnNjcmVlbi5oZWlnaHQ7XG5jb25zdCBnZXRXaW5kb3dXaWR0aCA9ICgpID0+IHdpbmRvdy5pbm5lcldpZHRoO1xuY29uc3QgZ2V0V2luZG93SGVpZ2h0ID0gKCkgPT4gd2luZG93LmlubmVySGVpZ2h0O1xuY29uc3QgZ2V0TG9jYXRpb25PcmlnaW4gPSAoKSA9PiB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xuY29uc3QgZ2V0TG9jYXRpb25Ib3N0bmFtZSA9ICgpID0+IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcbmNvbnN0IGdldFByb2Nlc3NQbGF0Zm9ybSA9ICgpID0+ICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgPyBwcm9jZXNzLnBsYXRmb3JtIDogJycpO1xuY29uc3QgaXNNYWNPcyA9ICgpID0+IHtcbiAgICBpZiAoZ2V0UHJvY2Vzc1BsYXRmb3JtKCkgPT09ICdkYXJ3aW4nKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHJldHVybjtcbiAgICByZXR1cm4gZ2V0UGxhdGZvcm0oKS5zdGFydHNXaXRoKCdNYWMnKTtcbn07XG5jb25zdCBpc1dpbmRvd3MgPSAoKSA9PiB7XG4gICAgaWYgKGdldFByb2Nlc3NQbGF0Zm9ybSgpID09PSAnd2luMzInKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHJldHVybjtcbiAgICByZXR1cm4gZ2V0UGxhdGZvcm0oKS5zdGFydHNXaXRoKCdXaW4nKTtcbn07XG5jb25zdCBpc0lPcyA9ICgpID0+IFsnaVBob25lJywgJ2lQYWQnLCAnaVBvZCddLmluY2x1ZGVzKGdldFBsYXRmb3JtKCkpO1xuY29uc3QgaXNMaW51eCA9ICgpID0+IHtcbiAgICBpZiAoZ2V0UHJvY2Vzc1BsYXRmb3JtKCkgPT09ICdsaW51eCcpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmIChpc0FuZHJvaWQoKSB8fCBpc0Nocm9tZU9zKCkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gZ2V0UGxhdGZvcm0oKS5zdGFydHNXaXRoKCdMaW51eCcpO1xufTtcbmNvbnN0IGlzQ29kZXNpZ25CdWlsZCA9ICgpID0+IHByb2Nlc3MuZW52LklTX0NPREVTSUdOX0JVSUxEID09PSAndHJ1ZSc7XG5jb25zdCBnZXRPc05hbWUgPSAoKSA9PiB7XG4gICAgaWYgKGlzV2luZG93cygpKVxuICAgICAgICByZXR1cm4gJ3dpbmRvd3MnO1xuICAgIGlmIChpc01hY09zKCkpXG4gICAgICAgIHJldHVybiAnbWFjb3MnO1xuICAgIGlmIChpc0FuZHJvaWQoKSlcbiAgICAgICAgcmV0dXJuICdhbmRyb2lkJztcbiAgICBpZiAoaXNDaHJvbWVPcygpKVxuICAgICAgICByZXR1cm4gJ2Nocm9tZW9zJztcbiAgICBpZiAoaXNMaW51eCgpKVxuICAgICAgICByZXR1cm4gJ2xpbnV4JztcbiAgICBpZiAoaXNJT3MoKSlcbiAgICAgICAgcmV0dXJuICdpb3MnO1xuICAgIHJldHVybiAnJztcbn07XG5jb25zdCBnZXRPc05hbWVXZWIgPSAoKSA9PiBnZXRVc2VyQWdlbnRQYXJzZXIoKS5nZXRPUygpLm5hbWU7XG5jb25zdCBnZXRPc0ZhbWlseSA9ICgpID0+IHtcbiAgICBjb25zdCBvc05hbWUgPSBnZXRVc2VyQWdlbnRQYXJzZXIoKS5nZXRPUygpLm5hbWU7XG4gICAgaWYgKG9zTmFtZSA9PT0gJ1dpbmRvd3MnKSB7XG4gICAgICAgIHJldHVybiAnV2luZG93cyc7XG4gICAgfVxuICAgIGlmIChvc05hbWUgPT09ICdNYWMgT1MnKSB7XG4gICAgICAgIHJldHVybiAnTWFjT1MnO1xuICAgIH1cbiAgICByZXR1cm4gJ0xpbnV4Jztcbn07XG5jb25zdCBnZXREZXZpY2VUeXBlID0gKCkgPT4gZ2V0VXNlckFnZW50UGFyc2VyKCkuZ2V0RGV2aWNlKCkudHlwZTtcbmNvbnN0IGdldEpXU1B1YmxpY0tleSA9ICgpID0+IChpc0NvZGVzaWduQnVpbGQoKSA/IGp3c18xLnB1YmxpY0tleS5jb2Rlc2lnbiA6IGp3c18xLnB1YmxpY0tleS5kZXYpO1xuZXhwb3J0cy5nZXRKV1NQdWJsaWNLZXkgPSBnZXRKV1NQdWJsaWNLZXk7XG5leHBvcnRzLmVudlV0aWxzID0ge1xuICAgIGlzV2ViOiBleHBvcnRzLmlzV2ViLFxuICAgIGlzRGVza3RvcDogZXhwb3J0cy5pc0Rlc2t0b3AsXG4gICAgaXNOYXRpdmU6IGV4cG9ydHMuaXNOYXRpdmUsXG4gICAgZ2V0RW52aXJvbm1lbnQ6IGV4cG9ydHMuZ2V0RW52aXJvbm1lbnQsXG4gICAgZ2V0VXNlckFnZW50LFxuICAgIGlzQW5kcm9pZCxcbiAgICBpc0Nocm9tZU9zLFxuICAgIGdldE9zVmVyc2lvbixcbiAgICBnZXRCcm93c2VyTmFtZSxcbiAgICBnZXRCcm93c2VyVmVyc2lvbixcbiAgICBnZXRDb21taXRIYXNoLFxuICAgIGdldERldmljZVR5cGUsXG4gICAgZ2V0U3VpdGVWZXJzaW9uLFxuICAgIGlzRmlyZWZveCxcbiAgICBnZXRQbGF0Zm9ybSxcbiAgICBnZXRQbGF0Zm9ybUxhbmd1YWdlcyxcbiAgICBnZXRTY3JlZW5XaWR0aCxcbiAgICBnZXRTY3JlZW5IZWlnaHQsXG4gICAgZ2V0V2luZG93V2lkdGgsXG4gICAgZ2V0V2luZG93SGVpZ2h0LFxuICAgIGdldExvY2F0aW9uT3JpZ2luLFxuICAgIGdldExvY2F0aW9uSG9zdG5hbWUsXG4gICAgZ2V0UHJvY2Vzc1BsYXRmb3JtLFxuICAgIGlzTWFjT3MsXG4gICAgaXNXaW5kb3dzLFxuICAgIGlzSU9zLFxuICAgIGlzTGludXgsXG4gICAgaXNDb2Rlc2lnbkJ1aWxkLFxuICAgIGdldE9zTmFtZSxcbiAgICBnZXRPc05hbWVXZWIsXG4gICAgZ2V0T3NGYW1pbHksXG4gICAgZ2V0SldTUHVibGljS2V5OiBleHBvcnRzLmdldEpXU1B1YmxpY0tleSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbnZVdGlscy5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@trezor+env-utils@1.2.1_react-native@0.76.5_@babel+core@7.26.0_@babel+preset-env@7.26.0_@babe_2e7rcpcsp4molhnt2zt3wi2o3q/node_modules/@trezor/env-utils/lib/envUtils.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@trezor+env-utils@1.2.1_react-native@0.76.5_@babel+core@7.26.0_@babel+preset-env@7.26.0_@babe_2e7rcpcsp4molhnt2zt3wi2o3q/node_modules/@trezor/env-utils/lib/index.js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@trezor+env-utils@1.2.1_react-native@0.76.5_@babel+core@7.26.0_@babel+preset-env@7.26.0_@babe_2e7rcpcsp4molhnt2zt3wi2o3q/node_modules/@trezor/env-utils/lib/index.js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getJWSPublicKey = exports.getOsFamily = exports.getOsNameWeb = exports.getOsName = exports.isCodesignBuild = exports.isLinux = exports.isIOs = exports.isWindows = exports.isMacOs = exports.getProcessPlatform = exports.getLocationHostname = exports.getLocationOrigin = exports.getWindowHeight = exports.getWindowWidth = exports.getScreenHeight = exports.getScreenWidth = exports.getPlatformLanguages = exports.getPlatform = exports.isFirefox = exports.getSuiteVersion = exports.getOsVersion = exports.getDeviceType = exports.getCommitHash = exports.getBrowserName = exports.getBrowserVersion = exports.isChromeOs = exports.isAndroid = exports.getUserAgent = exports.getEnvironment = exports.isNative = exports.isDesktop = exports.isWeb = void 0;\nconst envUtils_1 = __webpack_require__(/*! ./envUtils */ \"(ssr)/./node_modules/.pnpm/@trezor+env-utils@1.2.1_react-native@0.76.5_@babel+core@7.26.0_@babel+preset-env@7.26.0_@babe_2e7rcpcsp4molhnt2zt3wi2o3q/node_modules/@trezor/env-utils/lib/envUtils.js\");\nexports.isWeb = envUtils_1.envUtils.isWeb, exports.isDesktop = envUtils_1.envUtils.isDesktop, exports.isNative = envUtils_1.envUtils.isNative, exports.getEnvironment = envUtils_1.envUtils.getEnvironment, exports.getUserAgent = envUtils_1.envUtils.getUserAgent, exports.isAndroid = envUtils_1.envUtils.isAndroid, exports.isChromeOs = envUtils_1.envUtils.isChromeOs, exports.getBrowserVersion = envUtils_1.envUtils.getBrowserVersion, exports.getBrowserName = envUtils_1.envUtils.getBrowserName, exports.getCommitHash = envUtils_1.envUtils.getCommitHash, exports.getDeviceType = envUtils_1.envUtils.getDeviceType, exports.getOsVersion = envUtils_1.envUtils.getOsVersion, exports.getSuiteVersion = envUtils_1.envUtils.getSuiteVersion, exports.isFirefox = envUtils_1.envUtils.isFirefox, exports.getPlatform = envUtils_1.envUtils.getPlatform, exports.getPlatformLanguages = envUtils_1.envUtils.getPlatformLanguages, exports.getScreenWidth = envUtils_1.envUtils.getScreenWidth, exports.getScreenHeight = envUtils_1.envUtils.getScreenHeight, exports.getWindowWidth = envUtils_1.envUtils.getWindowWidth, exports.getWindowHeight = envUtils_1.envUtils.getWindowHeight, exports.getLocationOrigin = envUtils_1.envUtils.getLocationOrigin, exports.getLocationHostname = envUtils_1.envUtils.getLocationHostname, exports.getProcessPlatform = envUtils_1.envUtils.getProcessPlatform, exports.isMacOs = envUtils_1.envUtils.isMacOs, exports.isWindows = envUtils_1.envUtils.isWindows, exports.isIOs = envUtils_1.envUtils.isIOs, exports.isLinux = envUtils_1.envUtils.isLinux, exports.isCodesignBuild = envUtils_1.envUtils.isCodesignBuild, exports.getOsName = envUtils_1.envUtils.getOsName, exports.getOsNameWeb = envUtils_1.envUtils.getOsNameWeb, exports.getOsFamily = envUtils_1.envUtils.getOsFamily, exports.getJWSPublicKey = envUtils_1.envUtils.getJWSPublicKey;\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHRyZXpvcitlbnYtdXRpbHNAMS4yLjFfcmVhY3QtbmF0aXZlQDAuNzYuNV9AYmFiZWwrY29yZUA3LjI2LjBfQGJhYmVsK3ByZXNldC1lbnZANy4yNi4wX0BiYWJlXzJlN3JjcGNzcDRtb2xobnQyenQzd2kybzNxL25vZGVfbW9kdWxlcy9AdHJlem9yL2Vudi11dGlscy9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsdUJBQXVCLEdBQUcsbUJBQW1CLEdBQUcsb0JBQW9CLEdBQUcsaUJBQWlCLEdBQUcsdUJBQXVCLEdBQUcsZUFBZSxHQUFHLGFBQWEsR0FBRyxpQkFBaUIsR0FBRyxlQUFlLEdBQUcsMEJBQTBCLEdBQUcsMkJBQTJCLEdBQUcseUJBQXlCLEdBQUcsdUJBQXVCLEdBQUcsc0JBQXNCLEdBQUcsdUJBQXVCLEdBQUcsc0JBQXNCLEdBQUcsNEJBQTRCLEdBQUcsbUJBQW1CLEdBQUcsaUJBQWlCLEdBQUcsdUJBQXVCLEdBQUcsb0JBQW9CLEdBQUcscUJBQXFCLEdBQUcscUJBQXFCLEdBQUcsc0JBQXNCLEdBQUcseUJBQXlCLEdBQUcsa0JBQWtCLEdBQUcsaUJBQWlCLEdBQUcsb0JBQW9CLEdBQUcsc0JBQXNCLEdBQUcsZ0JBQWdCLEdBQUcsaUJBQWlCLEdBQUcsYUFBYTtBQUN0dUIsbUJBQW1CLG1CQUFPLENBQUMsc05BQVk7QUFDdkMsYUFBYSw4QkFBOEIsaUJBQWlCLGtDQUFrQyxnQkFBZ0IsaUNBQWlDLHNCQUFzQix1Q0FBdUMsb0JBQW9CLHFDQUFxQyxpQkFBaUIsa0NBQWtDLGtCQUFrQixtQ0FBbUMseUJBQXlCLDBDQUEwQyxzQkFBc0IsdUNBQXVDLHFCQUFxQixzQ0FBc0MscUJBQXFCLHNDQUFzQyxvQkFBb0IscUNBQXFDLHVCQUF1Qix3Q0FBd0MsaUJBQWlCLGtDQUFrQyxtQkFBbUIsb0NBQW9DLDRCQUE0Qiw2Q0FBNkMsc0JBQXNCLHVDQUF1Qyx1QkFBdUIsd0NBQXdDLHNCQUFzQix1Q0FBdUMsdUJBQXVCLHdDQUF3Qyx5QkFBeUIsMENBQTBDLDJCQUEyQiw0Q0FBNEMsMEJBQTBCLDJDQUEyQyxlQUFlLGdDQUFnQyxpQkFBaUIsa0NBQWtDLGFBQWEsOEJBQThCLGVBQWUsZ0NBQWdDLHVCQUF1Qix3Q0FBd0MsaUJBQWlCLGtDQUFrQyxvQkFBb0IscUNBQXFDLG1CQUFtQixvQ0FBb0MsdUJBQXVCO0FBQzF3RCIsInNvdXJjZXMiOlsiL3dvcmtzcGFjZXMvaXdvLXBsYXRmb3JtL25vZGVfbW9kdWxlcy8ucG5wbS9AdHJlem9yK2Vudi11dGlsc0AxLjIuMV9yZWFjdC1uYXRpdmVAMC43Ni41X0BiYWJlbCtjb3JlQDcuMjYuMF9AYmFiZWwrcHJlc2V0LWVudkA3LjI2LjBfQGJhYmVfMmU3cmNwY3NwNG1vbGhudDJ6dDN3aTJvM3Evbm9kZV9tb2R1bGVzL0B0cmV6b3IvZW52LXV0aWxzL2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0SldTUHVibGljS2V5ID0gZXhwb3J0cy5nZXRPc0ZhbWlseSA9IGV4cG9ydHMuZ2V0T3NOYW1lV2ViID0gZXhwb3J0cy5nZXRPc05hbWUgPSBleHBvcnRzLmlzQ29kZXNpZ25CdWlsZCA9IGV4cG9ydHMuaXNMaW51eCA9IGV4cG9ydHMuaXNJT3MgPSBleHBvcnRzLmlzV2luZG93cyA9IGV4cG9ydHMuaXNNYWNPcyA9IGV4cG9ydHMuZ2V0UHJvY2Vzc1BsYXRmb3JtID0gZXhwb3J0cy5nZXRMb2NhdGlvbkhvc3RuYW1lID0gZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGV4cG9ydHMuZ2V0V2luZG93SGVpZ2h0ID0gZXhwb3J0cy5nZXRXaW5kb3dXaWR0aCA9IGV4cG9ydHMuZ2V0U2NyZWVuSGVpZ2h0ID0gZXhwb3J0cy5nZXRTY3JlZW5XaWR0aCA9IGV4cG9ydHMuZ2V0UGxhdGZvcm1MYW5ndWFnZXMgPSBleHBvcnRzLmdldFBsYXRmb3JtID0gZXhwb3J0cy5pc0ZpcmVmb3ggPSBleHBvcnRzLmdldFN1aXRlVmVyc2lvbiA9IGV4cG9ydHMuZ2V0T3NWZXJzaW9uID0gZXhwb3J0cy5nZXREZXZpY2VUeXBlID0gZXhwb3J0cy5nZXRDb21taXRIYXNoID0gZXhwb3J0cy5nZXRCcm93c2VyTmFtZSA9IGV4cG9ydHMuZ2V0QnJvd3NlclZlcnNpb24gPSBleHBvcnRzLmlzQ2hyb21lT3MgPSBleHBvcnRzLmlzQW5kcm9pZCA9IGV4cG9ydHMuZ2V0VXNlckFnZW50ID0gZXhwb3J0cy5nZXRFbnZpcm9ubWVudCA9IGV4cG9ydHMuaXNOYXRpdmUgPSBleHBvcnRzLmlzRGVza3RvcCA9IGV4cG9ydHMuaXNXZWIgPSB2b2lkIDA7XG5jb25zdCBlbnZVdGlsc18xID0gcmVxdWlyZShcIi4vZW52VXRpbHNcIik7XG5leHBvcnRzLmlzV2ViID0gZW52VXRpbHNfMS5lbnZVdGlscy5pc1dlYiwgZXhwb3J0cy5pc0Rlc2t0b3AgPSBlbnZVdGlsc18xLmVudlV0aWxzLmlzRGVza3RvcCwgZXhwb3J0cy5pc05hdGl2ZSA9IGVudlV0aWxzXzEuZW52VXRpbHMuaXNOYXRpdmUsIGV4cG9ydHMuZ2V0RW52aXJvbm1lbnQgPSBlbnZVdGlsc18xLmVudlV0aWxzLmdldEVudmlyb25tZW50LCBleHBvcnRzLmdldFVzZXJBZ2VudCA9IGVudlV0aWxzXzEuZW52VXRpbHMuZ2V0VXNlckFnZW50LCBleHBvcnRzLmlzQW5kcm9pZCA9IGVudlV0aWxzXzEuZW52VXRpbHMuaXNBbmRyb2lkLCBleHBvcnRzLmlzQ2hyb21lT3MgPSBlbnZVdGlsc18xLmVudlV0aWxzLmlzQ2hyb21lT3MsIGV4cG9ydHMuZ2V0QnJvd3NlclZlcnNpb24gPSBlbnZVdGlsc18xLmVudlV0aWxzLmdldEJyb3dzZXJWZXJzaW9uLCBleHBvcnRzLmdldEJyb3dzZXJOYW1lID0gZW52VXRpbHNfMS5lbnZVdGlscy5nZXRCcm93c2VyTmFtZSwgZXhwb3J0cy5nZXRDb21taXRIYXNoID0gZW52VXRpbHNfMS5lbnZVdGlscy5nZXRDb21taXRIYXNoLCBleHBvcnRzLmdldERldmljZVR5cGUgPSBlbnZVdGlsc18xLmVudlV0aWxzLmdldERldmljZVR5cGUsIGV4cG9ydHMuZ2V0T3NWZXJzaW9uID0gZW52VXRpbHNfMS5lbnZVdGlscy5nZXRPc1ZlcnNpb24sIGV4cG9ydHMuZ2V0U3VpdGVWZXJzaW9uID0gZW52VXRpbHNfMS5lbnZVdGlscy5nZXRTdWl0ZVZlcnNpb24sIGV4cG9ydHMuaXNGaXJlZm94ID0gZW52VXRpbHNfMS5lbnZVdGlscy5pc0ZpcmVmb3gsIGV4cG9ydHMuZ2V0UGxhdGZvcm0gPSBlbnZVdGlsc18xLmVudlV0aWxzLmdldFBsYXRmb3JtLCBleHBvcnRzLmdldFBsYXRmb3JtTGFuZ3VhZ2VzID0gZW52VXRpbHNfMS5lbnZVdGlscy5nZXRQbGF0Zm9ybUxhbmd1YWdlcywgZXhwb3J0cy5nZXRTY3JlZW5XaWR0aCA9IGVudlV0aWxzXzEuZW52VXRpbHMuZ2V0U2NyZWVuV2lkdGgsIGV4cG9ydHMuZ2V0U2NyZWVuSGVpZ2h0ID0gZW52VXRpbHNfMS5lbnZVdGlscy5nZXRTY3JlZW5IZWlnaHQsIGV4cG9ydHMuZ2V0V2luZG93V2lkdGggPSBlbnZVdGlsc18xLmVudlV0aWxzLmdldFdpbmRvd1dpZHRoLCBleHBvcnRzLmdldFdpbmRvd0hlaWdodCA9IGVudlV0aWxzXzEuZW52VXRpbHMuZ2V0V2luZG93SGVpZ2h0LCBleHBvcnRzLmdldExvY2F0aW9uT3JpZ2luID0gZW52VXRpbHNfMS5lbnZVdGlscy5nZXRMb2NhdGlvbk9yaWdpbiwgZXhwb3J0cy5nZXRMb2NhdGlvbkhvc3RuYW1lID0gZW52VXRpbHNfMS5lbnZVdGlscy5nZXRMb2NhdGlvbkhvc3RuYW1lLCBleHBvcnRzLmdldFByb2Nlc3NQbGF0Zm9ybSA9IGVudlV0aWxzXzEuZW52VXRpbHMuZ2V0UHJvY2Vzc1BsYXRmb3JtLCBleHBvcnRzLmlzTWFjT3MgPSBlbnZVdGlsc18xLmVudlV0aWxzLmlzTWFjT3MsIGV4cG9ydHMuaXNXaW5kb3dzID0gZW52VXRpbHNfMS5lbnZVdGlscy5pc1dpbmRvd3MsIGV4cG9ydHMuaXNJT3MgPSBlbnZVdGlsc18xLmVudlV0aWxzLmlzSU9zLCBleHBvcnRzLmlzTGludXggPSBlbnZVdGlsc18xLmVudlV0aWxzLmlzTGludXgsIGV4cG9ydHMuaXNDb2Rlc2lnbkJ1aWxkID0gZW52VXRpbHNfMS5lbnZVdGlscy5pc0NvZGVzaWduQnVpbGQsIGV4cG9ydHMuZ2V0T3NOYW1lID0gZW52VXRpbHNfMS5lbnZVdGlscy5nZXRPc05hbWUsIGV4cG9ydHMuZ2V0T3NOYW1lV2ViID0gZW52VXRpbHNfMS5lbnZVdGlscy5nZXRPc05hbWVXZWIsIGV4cG9ydHMuZ2V0T3NGYW1pbHkgPSBlbnZVdGlsc18xLmVudlV0aWxzLmdldE9zRmFtaWx5LCBleHBvcnRzLmdldEpXU1B1YmxpY0tleSA9IGVudlV0aWxzXzEuZW52VXRpbHMuZ2V0SldTUHVibGljS2V5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@trezor+env-utils@1.2.1_react-native@0.76.5_@babel+core@7.26.0_@babel+preset-env@7.26.0_@babe_2e7rcpcsp4molhnt2zt3wi2o3q/node_modules/@trezor/env-utils/lib/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@trezor+env-utils@1.2.1_react-native@0.76.5_@babel+core@7.26.0_@babel+preset-env@7.26.0_@babe_2e7rcpcsp4molhnt2zt3wi2o3q/node_modules/@trezor/env-utils/lib/jws.js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@trezor+env-utils@1.2.1_react-native@0.76.5_@babel+core@7.26.0_@babel+preset-env@7.26.0_@babe_2e7rcpcsp4molhnt2zt3wi2o3q/node_modules/@trezor/env-utils/lib/jws.js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.publicKey = void 0;\nexports.publicKey = {\n    dev: `-----BEGIN PUBLIC KEY-----\nMFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEbSUHJlr17+NywPS/w+xMkp3dSD8eWXSuAfFKwonZPe5fL63kISipJC+eJP7Mad0WxgyJoiMsZCV6BZPK2jIFdg==\n-----END PUBLIC KEY-----`,\n    codesign: `-----BEGIN PUBLIC KEY-----\nMFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAES7MbBzU/v5BsljkTM8Mz0Jsk+Nn5n2wH\\no2/+MUI3TgCVdTbEHhn3HXaY7GJ6TLyWqxn+pIDY9wUUAyUqOStTUQ==\n-----END PUBLIC KEY-----`,\n};\n//# sourceMappingURL=jws.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHRyZXpvcitlbnYtdXRpbHNAMS4yLjFfcmVhY3QtbmF0aXZlQDAuNzYuNV9AYmFiZWwrY29yZUA3LjI2LjBfQGJhYmVsK3ByZXNldC1lbnZANy4yNi4wX0BiYWJlXzJlN3JjcGNzcDRtb2xobnQyenQzd2kybzNxL25vZGVfbW9kdWxlcy9AdHJlem9yL2Vudi11dGlscy9saWIvandzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL3dvcmtzcGFjZXMvaXdvLXBsYXRmb3JtL25vZGVfbW9kdWxlcy8ucG5wbS9AdHJlem9yK2Vudi11dGlsc0AxLjIuMV9yZWFjdC1uYXRpdmVAMC43Ni41X0BiYWJlbCtjb3JlQDcuMjYuMF9AYmFiZWwrcHJlc2V0LWVudkA3LjI2LjBfQGJhYmVfMmU3cmNwY3NwNG1vbGhudDJ6dDN3aTJvM3Evbm9kZV9tb2R1bGVzL0B0cmV6b3IvZW52LXV0aWxzL2xpYi9qd3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnB1YmxpY0tleSA9IHZvaWQgMDtcbmV4cG9ydHMucHVibGljS2V5ID0ge1xuICAgIGRldjogYC0tLS0tQkVHSU4gUFVCTElDIEtFWS0tLS0tXG5NRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRWJTVUhKbHIxNytOeXdQUy93K3hNa3AzZFNEOGVXWFN1QWZGS3dvblpQZTVmTDYza0lTaXBKQytlSlA3TWFkMFd4Z3lKb2lNc1pDVjZCWlBLMmpJRmRnPT1cbi0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLWAsXG4gICAgY29kZXNpZ246IGAtLS0tLUJFR0lOIFBVQkxJQyBLRVktLS0tLVxuTUZZd0VBWUhLb1pJemowQ0FRWUZLNEVFQUFvRFFnQUVTN01iQnpVL3Y1QnNsamtUTThNejBKc2srTm41bjJ3SFxcbm8yLytNVUkzVGdDVmRUYkVIaG4zSFhhWTdHSjZUTHlXcXhuK3BJRFk5d1VVQXlVcU9TdFRVUT09XG4tLS0tLUVORCBQVUJMSUMgS0VZLS0tLS1gLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWp3cy5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@trezor+env-utils@1.2.1_react-native@0.76.5_@babel+core@7.26.0_@babel+preset-env@7.26.0_@babe_2e7rcpcsp4molhnt2zt3wi2o3q/node_modules/@trezor/env-utils/lib/jws.js\n");

/***/ })

};
;