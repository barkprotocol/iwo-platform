"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@solana+wallet-adapter-onto@0.1.7_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_";
exports.ids = ["vendor-chunks/@solana+wallet-adapter-onto@0.1.7_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-onto@0.1.7_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-onto/lib/esm/adapter.js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@solana+wallet-adapter-onto@0.1.7_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-onto/lib/esm/adapter.js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OntoWalletAdapter: () => (/* binding */ OntoWalletAdapter),\n/* harmony export */   OntoWalletName: () => (/* binding */ OntoWalletName)\n/* harmony export */ });\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-base@0.9.23_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-base/lib/esm/signer.js\");\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-base@0.9.23_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-base/lib/esm/adapter.js\");\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-base@0.9.23_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-base/lib/esm/errors.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ \"(ssr)/./node_modules/.pnpm/@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.esm.js\");\n\n\nconst OntoWalletName = 'ONTO';\nclass OntoWalletAdapter extends _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.BaseMessageSignerWalletAdapter {\n    constructor(config = {}) {\n        super();\n        this.name = OntoWalletName;\n        this.url = 'https://onto.app';\n        this.icon = 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyODggMjg4Ij4KICA8dGl0bGU+T05UTyBMT0dPXzI4OHgyODg8L3RpdGxlPgogIDxnIGlkPSJMT0dPIj4KICAgIDxwYXRoIGlkPSLlvaLnirbnu5PlkIgiIGQ9Ik0zMCwxMS4xNSw3MS4xOSw1Mi4zMkExMTUsMTE1LDAsMCwxLDI1OCwxMzguNjdMMjU4LDE0MlYyNzYuODVsLTQxLjE5LTQxLjE2QTExNSwxMTUsMCwwLDEsMzAuMDUsMTQ5LjM0TDMwLDE0NlptMjguMTcsNjhWMTQ2YTg2Ljc5LDg2Ljc5LDAsMCwwLDEzNS4xNSw3MmwyLjIzLTEuNTVMNjMuNjcsODQuNjVaTTk0LjY4LDcwbC0yLjIzLDEuNTVMMjI0LjMzLDIwMy4zNmw1LjUsNS41VjE0MkE4Ni43OSw4Ni43OSwwLDAsMCw5NC42OCw3MFoiLz4KICA8L2c+Cjwvc3ZnPg==';\n        this.supportedTransactionVersions = null;\n        this._readyState = typeof window === 'undefined' || typeof document === 'undefined'\n            ? _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletReadyState.Unsupported\n            : _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletReadyState.NotDetected;\n        this._connecting = false;\n        this._wallet = null;\n        this._publicKey = null;\n        if (this._readyState !== _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletReadyState.Unsupported) {\n            (0,_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.scopePollingDetectionStrategy)(() => {\n                if (window.onto?.solana?.isONTO) {\n                    this._readyState = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletReadyState.Installed;\n                    this.emit('readyStateChange', this._readyState);\n                    return true;\n                }\n                return false;\n            });\n        }\n    }\n    get publicKey() {\n        return this._publicKey;\n    }\n    get connecting() {\n        return this._connecting;\n    }\n    get connected() {\n        return !!this._wallet?.isConnected;\n    }\n    get readyState() {\n        return this._readyState;\n    }\n    async connect() {\n        try {\n            if (this.connected || this.connecting)\n                return;\n            if (this._readyState !== _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletReadyState.Installed)\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletNotReadyError();\n            this._connecting = true;\n            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n            const wallet = window.onto.solana;\n            let account;\n            try {\n                account = await wallet.getAccount();\n            }\n            catch (error) {\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletAccountError(error?.message, error);\n            }\n            let publicKey;\n            try {\n                publicKey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(account);\n            }\n            catch (error) {\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletPublicKeyError(error?.message, error);\n            }\n            this._wallet = wallet;\n            this._publicKey = publicKey;\n            this.emit('connect', publicKey);\n        }\n        catch (error) {\n            this.emit('error', error);\n            throw error;\n        }\n        finally {\n            this._connecting = false;\n        }\n    }\n    async disconnect() {\n        const wallet = this._wallet;\n        if (wallet) {\n            this._wallet = null;\n            this._publicKey = null;\n            try {\n                await wallet.disconnect();\n            }\n            catch (error) {\n                this.emit('error', new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletDisconnectionError(error?.message, error));\n            }\n        }\n        this.emit('disconnect');\n    }\n    async signTransaction(transaction) {\n        try {\n            const wallet = this._wallet;\n            if (!wallet)\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletNotConnectedError();\n            try {\n                return (await wallet.signTransaction(transaction)) || transaction;\n            }\n            catch (error) {\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletSignTransactionError(error?.message, error);\n            }\n        }\n        catch (error) {\n            this.emit('error', error);\n            throw error;\n        }\n    }\n    async signAllTransactions(transactions) {\n        try {\n            const wallet = this._wallet;\n            if (!wallet)\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletNotConnectedError();\n            try {\n                return (await wallet.signAllTransactions(transactions)) || transactions;\n            }\n            catch (error) {\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletSignTransactionError(error?.message, error);\n            }\n        }\n        catch (error) {\n            this.emit('error', error);\n            throw error;\n        }\n    }\n    async signMessage(message) {\n        try {\n            const wallet = this._wallet;\n            if (!wallet)\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletNotConnectedError();\n            try {\n                const { signature } = await wallet.signMessage(message);\n                return signature;\n            }\n            catch (error) {\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletSignMessageError(error?.message, error);\n            }\n        }\n        catch (error) {\n            this.emit('error', error);\n            throw error;\n        }\n    }\n}\n//# sourceMappingURL=adapter.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNvbGFuYSt3YWxsZXQtYWRhcHRlci1vbnRvQDAuMS43X0Bzb2xhbmErd2ViMy5qc0AxLjk4LjBfYnVmZmVydXRpbEA0LjAuOF91dGYtOC12YWxpZGF0ZUA1LjAuMTBfL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLW9udG8vbGliL2VzbS9hZGFwdGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFxUztBQUN6UDtBQUNyQztBQUNBLGdDQUFnQyx1RkFBOEI7QUFDckUsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0EsY0FBYyx5RUFBZ0I7QUFDOUIsY0FBYyx5RUFBZ0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHlFQUFnQjtBQUNqRCxZQUFZLDBGQUE2QjtBQUN6QztBQUNBLHVDQUF1Qyx5RUFBZ0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHlFQUFnQjtBQUNyRCwwQkFBMEIsNEVBQW1CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkVBQWtCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzREFBUztBQUN6QztBQUNBO0FBQ0EsMEJBQTBCLDZFQUFvQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxpRkFBd0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnRkFBdUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUZBQTBCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0ZBQXVCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1GQUEwQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdGQUF1QjtBQUNqRDtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwrRUFBc0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvd29ya3NwYWNlcy9pd28tcGxhdGZvcm0vbm9kZV9tb2R1bGVzLy5wbnBtL0Bzb2xhbmErd2FsbGV0LWFkYXB0ZXItb250b0AwLjEuN19Ac29sYW5hK3dlYjMuanNAMS45OC4wX2J1ZmZlcnV0aWxANC4wLjhfdXRmLTgtdmFsaWRhdGVANS4wLjEwXy9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1vbnRvL2xpYi9lc20vYWRhcHRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlTWVzc2FnZVNpZ25lcldhbGxldEFkYXB0ZXIsIHNjb3BlUG9sbGluZ0RldGVjdGlvblN0cmF0ZWd5LCBXYWxsZXRBY2NvdW50RXJyb3IsIFdhbGxldERpc2Nvbm5lY3Rpb25FcnJvciwgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IsIFdhbGxldE5vdFJlYWR5RXJyb3IsIFdhbGxldFB1YmxpY0tleUVycm9yLCBXYWxsZXRSZWFkeVN0YXRlLCBXYWxsZXRTaWduTWVzc2FnZUVycm9yLCBXYWxsZXRTaWduVHJhbnNhY3Rpb25FcnJvciwgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLWJhc2UnO1xuaW1wb3J0IHsgUHVibGljS2V5IH0gZnJvbSAnQHNvbGFuYS93ZWIzLmpzJztcbmV4cG9ydCBjb25zdCBPbnRvV2FsbGV0TmFtZSA9ICdPTlRPJztcbmV4cG9ydCBjbGFzcyBPbnRvV2FsbGV0QWRhcHRlciBleHRlbmRzIEJhc2VNZXNzYWdlU2lnbmVyV2FsbGV0QWRhcHRlciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gT250b1dhbGxldE5hbWU7XG4gICAgICAgIHRoaXMudXJsID0gJ2h0dHBzOi8vb250by5hcHAnO1xuICAgICAgICB0aGlzLmljb24gPSAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCcFpEMGlUR0Y1WlhKZk1TSWdaR0YwWVMxdVlXMWxQU0pNWVhsbGNpQXhJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSFpwWlhkQ2IzZzlJakFnTUNBeU9EZ2dNamc0SWo0S0lDQThkR2wwYkdVK1QwNVVUeUJNVDBkUFh6STRPSGd5T0RnOEwzUnBkR3hsUGdvZ0lEeG5JR2xrUFNKTVQwZFBJajRLSUNBZ0lEeHdZWFJvSUdsa1BTTGx2YUxuaXJibnU1UGxrSWdpSUdROUlrMHpNQ3d4TVM0eE5TdzNNUzR4T1N3MU1pNHpNa0V4TVRVc01URTFMREFzTUN3eExESTFPQ3d4TXpndU5qZE1NalU0TERFME1sWXlOell1T0RWc0xUUXhMakU1TFRReExqRTJRVEV4TlN3eE1UVXNNQ3d3TERFc016QXVNRFVzTVRRNUxqTTBURE13TERFME5scHRNamd1TVRjc05qaFdNVFEyWVRnMkxqYzVMRGcyTGpjNUxEQXNNQ3d3TERFek5TNHhOU3czTW13eUxqSXpMVEV1TlRWTU5qTXVOamNzT0RRdU5qVmFUVGswTGpZNExEY3diQzB5TGpJekxERXVOVFZNTWpJMExqTXpMREl3TXk0ek5tdzFMalVzTlM0MVZqRTBNa0U0Tmk0M09TdzROaTQzT1N3d0xEQXNNQ3c1TkM0Mk9DdzNNRm9pTHo0S0lDQThMMmMrQ2p3dmMzWm5QZz09JztcbiAgICAgICAgdGhpcy5zdXBwb3J0ZWRUcmFuc2FjdGlvblZlcnNpb25zID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gV2FsbGV0UmVhZHlTdGF0ZS5VbnN1cHBvcnRlZFxuICAgICAgICAgICAgOiBXYWxsZXRSZWFkeVN0YXRlLk5vdERldGVjdGVkO1xuICAgICAgICB0aGlzLl9jb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3dhbGxldCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3B1YmxpY0tleSA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLl9yZWFkeVN0YXRlICE9PSBXYWxsZXRSZWFkeVN0YXRlLlVuc3VwcG9ydGVkKSB7XG4gICAgICAgICAgICBzY29wZVBvbGxpbmdEZXRlY3Rpb25TdHJhdGVneSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5vbnRvPy5zb2xhbmE/LmlzT05UTykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gV2FsbGV0UmVhZHlTdGF0ZS5JbnN0YWxsZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgncmVhZHlTdGF0ZUNoYW5nZScsIHRoaXMuX3JlYWR5U3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHB1YmxpY0tleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3B1YmxpY0tleTtcbiAgICB9XG4gICAgZ2V0IGNvbm5lY3RpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW5nO1xuICAgIH1cbiAgICBnZXQgY29ubmVjdGVkKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl93YWxsZXQ/LmlzQ29ubmVjdGVkO1xuICAgIH1cbiAgICBnZXQgcmVhZHlTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWR5U3RhdGU7XG4gICAgfVxuICAgIGFzeW5jIGNvbm5lY3QoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQgfHwgdGhpcy5jb25uZWN0aW5nKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZWFkeVN0YXRlICE9PSBXYWxsZXRSZWFkeVN0YXRlLkluc3RhbGxlZClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Tm90UmVhZHlFcnJvcigpO1xuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGluZyA9IHRydWU7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gd2luZG93Lm9udG8uc29sYW5hO1xuICAgICAgICAgICAgbGV0IGFjY291bnQ7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGFjY291bnQgPSBhd2FpdCB3YWxsZXQuZ2V0QWNjb3VudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldEFjY291bnRFcnJvcihlcnJvcj8ubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHB1YmxpY0tleTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcHVibGljS2V5ID0gbmV3IFB1YmxpY0tleShhY2NvdW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRQdWJsaWNLZXlFcnJvcihlcnJvcj8ubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fd2FsbGV0ID0gd2FsbGV0O1xuICAgICAgICAgICAgdGhpcy5fcHVibGljS2V5ID0gcHVibGljS2V5O1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdjb25uZWN0JywgcHVibGljS2V5KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBkaXNjb25uZWN0KCkge1xuICAgICAgICBjb25zdCB3YWxsZXQgPSB0aGlzLl93YWxsZXQ7XG4gICAgICAgIGlmICh3YWxsZXQpIHtcbiAgICAgICAgICAgIHRoaXMuX3dhbGxldCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9wdWJsaWNLZXkgPSBudWxsO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCB3YWxsZXQuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBXYWxsZXREaXNjb25uZWN0aW9uRXJyb3IoZXJyb3I/Lm1lc3NhZ2UsIGVycm9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0KCdkaXNjb25uZWN0Jyk7XG4gICAgfVxuICAgIGFzeW5jIHNpZ25UcmFuc2FjdGlvbih0cmFuc2FjdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gdGhpcy5fd2FsbGV0O1xuICAgICAgICAgICAgaWYgKCF3YWxsZXQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoYXdhaXQgd2FsbGV0LnNpZ25UcmFuc2FjdGlvbih0cmFuc2FjdGlvbikpIHx8IHRyYW5zYWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldFNpZ25UcmFuc2FjdGlvbkVycm9yKGVycm9yPy5tZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgc2lnbkFsbFRyYW5zYWN0aW9ucyh0cmFuc2FjdGlvbnMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHdhbGxldCA9IHRoaXMuX3dhbGxldDtcbiAgICAgICAgICAgIGlmICghd2FsbGV0KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGF3YWl0IHdhbGxldC5zaWduQWxsVHJhbnNhY3Rpb25zKHRyYW5zYWN0aW9ucykpIHx8IHRyYW5zYWN0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRTaWduVHJhbnNhY3Rpb25FcnJvcihlcnJvcj8ubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIHNpZ25NZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHdhbGxldCA9IHRoaXMuX3dhbGxldDtcbiAgICAgICAgICAgIGlmICghd2FsbGV0KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHNpZ25hdHVyZSB9ID0gYXdhaXQgd2FsbGV0LnNpZ25NZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzaWduYXR1cmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0U2lnbk1lc3NhZ2VFcnJvcihlcnJvcj8ubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWRhcHRlci5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-onto@0.1.7_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-onto/lib/esm/adapter.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-onto@0.1.7_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-onto/lib/esm/index.js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@solana+wallet-adapter-onto@0.1.7_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-onto/lib/esm/index.js ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OntoWalletAdapter: () => (/* reexport safe */ _adapter_js__WEBPACK_IMPORTED_MODULE_0__.OntoWalletAdapter),\n/* harmony export */   OntoWalletName: () => (/* reexport safe */ _adapter_js__WEBPACK_IMPORTED_MODULE_0__.OntoWalletName)\n/* harmony export */ });\n/* harmony import */ var _adapter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter.js */ \"(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-onto@0.1.7_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-onto/lib/esm/adapter.js\");\n\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNvbGFuYSt3YWxsZXQtYWRhcHRlci1vbnRvQDAuMS43X0Bzb2xhbmErd2ViMy5qc0AxLjk4LjBfYnVmZmVydXRpbEA0LjAuOF91dGYtOC12YWxpZGF0ZUA1LjAuMTBfL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLW9udG8vbGliL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkI7QUFDN0IiLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL2l3by1wbGF0Zm9ybS9ub2RlX21vZHVsZXMvLnBucG0vQHNvbGFuYSt3YWxsZXQtYWRhcHRlci1vbnRvQDAuMS43X0Bzb2xhbmErd2ViMy5qc0AxLjk4LjBfYnVmZmVydXRpbEA0LjAuOF91dGYtOC12YWxpZGF0ZUA1LjAuMTBfL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLW9udG8vbGliL2VzbS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2FkYXB0ZXIuanMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-onto@0.1.7_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-onto/lib/esm/index.js\n");

/***/ })

};
;