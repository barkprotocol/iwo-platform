"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@solana+wallet-adapter-nightly@0.1.16_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_";
exports.ids = ["vendor-chunks/@solana+wallet-adapter-nightly@0.1.16_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-nightly@0.1.16_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-nightly/lib/esm/adapter.js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@solana+wallet-adapter-nightly@0.1.16_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-nightly/lib/esm/adapter.js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NightlyWalletAdapter: () => (/* binding */ NightlyWalletAdapter),\n/* harmony export */   NightlyWalletName: () => (/* binding */ NightlyWalletName)\n/* harmony export */ });\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-base@0.9.23_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-base/lib/esm/signer.js\");\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-base@0.9.23_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-base/lib/esm/adapter.js\");\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-base@0.9.23_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-base/lib/esm/errors.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ \"(ssr)/./node_modules/.pnpm/@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.esm.js\");\n\n\nconst NightlyWalletName = 'Nightly';\nclass NightlyWalletAdapter extends _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.BaseMessageSignerWalletAdapter {\n    constructor() {\n        super();\n        this.name = NightlyWalletName;\n        this.url = 'https://nightly.app';\n        this.icon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ4IDk2Qzc0LjUwOTcgOTYgOTYgNzQuNTA5NyA5NiA0OEM5NiAyMS40OTAzIDc0LjUwOTcgMCA0OCAwQzIxLjQ5MDMgMCAwIDIxLjQ5MDMgMCA0OEMwIDc0LjUwOTcgMjEuNDkwMyA5NiA0OCA5NloiIGZpbGw9IiM2RDczRjgiLz4KPHBhdGggZD0iTTQ4IDg1LjYzNTZDNDggODUuNjM1NiA1Mi40NTMzIDg1LjYzNTYgNTUuNDQgODIuNTg2N0M1OC45MTU1IDc5LjI4MDEgNTcuMzUxMSA3NS40MzEyIDYyLjI3NTUgNzEuNDMxMkM2Ni45ODY2IDY3LjY0NDUgNzIuOTI0NCA3MC4zMzc5IDcyLjkyNDQgNzAuMzM3OUM3Ny4wMjIyIDYyLjEyNDUgNzQuNzkxMSA1Mi41NjkgNzQuNzkxMSA1Mi41NjlDODEuNzY4OCAzNC4yNTc5IDc1Ljk2NDQgMjEuMTU1NyA3NC40NDQ0IDE3LjM2MDFDNjkuNDQ4OCAyNC4zMzc5IDYzLjE5MTEgMjkuMTczNCA1NS43OTU1IDMyLjQwOUM1My4yMjY2IDMxLjcwNjggNTAuNTk1NSAzMS4zMzM0IDQ4IDMxLjM2MDFDNDUuNDEzMyAzMS4zMzM0IDQyLjc3MzMgMzEuNzA2OCA0MC4yMDQ0IDMyLjQwOUMzMi44MTc3IDI5LjE2NDUgMjYuNTUxMSAyNC4zMzc5IDIxLjU1NTUgMTcuMzYwMUMyMC4wMzU1IDIxLjE1NTcgMTQuMjMxMSAzNC4yNTc5IDIxLjIwODkgNTIuNTY5QzIxLjIwODkgNTIuNTY5IDE4Ljk3NzggNjIuMTI0NSAyMy4wNzU1IDcwLjMzNzlDMjMuMDc1NSA3MC4zMzc5IDI5LjAxMzMgNjcuNjQ0NSAzMy43MjQ0IDcxLjQzMTJDMzguNjU3NyA3NS40MzEyIDM3LjA4NDQgNzkuMjgwMSA0MC41NiA4Mi41ODY3QzQzLjU0NjYgODUuNjM1NiA0OCA4NS42MzU2IDQ4IDg1LjYzNTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDIuNDc5OSA2NS4yOThDNDIuMjkzMyA1OS4yMTggMzYuMzAyMSA1Ny4yNjI0IDMyLjIxMzMgNTkuODIyNEMzMi4yMTMzIDU5LjgyMjQgMzIuODUzMyA2Mi40MzU4IDM1LjgzOTkgNjMuNzUxM0MzOC4yNzU1IDY0LjgyNjkgMzkuMzI0NCA2My4zODY5IDQyLjQ3OTkgNjUuMjk4WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNMjIuNDk3NyAyMy4wOTM1QzIwLjA4ODggMzEuNTQ2OCAyMS4xMjg4IDQyLjI0MDIgMjQuOTMzMyA1MC4wMjY5QzI4LjgyNjYgNDcuMjcxMyAzMi45MTU1IDQzLjAxMzUgMzUuMDkzMyAzOC41MDY5QzI5Ljk2NDQgMzQuNzExMyAyNS42NjIyIDMxLjEwMjQgMjIuNDk3NyAyMy4wOTM1WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNNTMuNTE5OSA2NS4yOThDNTMuNzA2NiA1OS4yMTggNTkuNjk3NyA1Ny4yNjI0IDYzLjc4NjYgNTkuODIyNEM2My43ODY2IDU5LjgyMjQgNjMuMTQ2NiA2Mi40MzU4IDYwLjE1OTkgNjMuNzUxM0M1Ny43MjQzIDY0LjgyNjkgNTYuNjc1NSA2My4zODY5IDUzLjUxOTkgNjUuMjk4WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNNzMuNTAyMiAyMy4wOTM1Qzc1LjkxMTEgMzEuNTQ2OCA3NC44NzExIDQyLjI0MDIgNzEuMDY2NiA1MC4wMjY5QzY3LjE3MzMgNDcuMjcxMyA2My4wODQ0IDQzLjAxMzUgNjAuOTA2NiAzOC41MDY5QzY2LjAzNTUgMzQuNzExMyA3MC4zMzc3IDMxLjEwMjQgNzMuNTAyMiAyMy4wOTM1WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNNDcuOTk5OSA4NS4zMDY5QzUwLjE0MDQgODUuMzA2OSA1MS44NzU1IDgzLjc3ODcgNTEuODc1NSA4MS44OTM2QzUxLjg3NTUgODAuMDA4NCA1MC4xNDA0IDc4LjQ4MDIgNDcuOTk5OSA3OC40ODAyQzQ1Ljg1OTUgNzguNDgwMiA0NC4xMjQ0IDgwLjAwODQgNDQuMTI0NCA4MS44OTM2QzQ0LjEyNDQgODMuNzc4NyA0NS44NTk1IDg1LjMwNjkgNDcuOTk5OSA4NS4zMDY5WiIgZmlsbD0iIzdCODFGOSIvPgo8L3N2Zz4K';\n        this.supportedTransactionVersions = new Set(['legacy', 0]);\n        this._readyState = typeof window === 'undefined' || typeof document === 'undefined'\n            ? _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletReadyState.Unsupported\n            : _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletReadyState.NotDetected;\n        this._connecting = false;\n        this._publicKey = null;\n        this._wallet = null;\n        if (this._readyState !== _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletReadyState.Unsupported) {\n            (0,_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.scopePollingDetectionStrategy)(() => {\n                if (window?.nightly?.solana) {\n                    this._readyState = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletReadyState.Installed;\n                    this.emit('readyStateChange', this._readyState);\n                    return true;\n                }\n                return false;\n            });\n        }\n    }\n    get connecting() {\n        return this._connecting;\n    }\n    get readyState() {\n        return this._readyState;\n    }\n    get publicKey() {\n        return this._publicKey;\n    }\n    async connect() {\n        try {\n            if (this.connected || this.connecting)\n                return;\n            if (this._readyState !== _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletReadyState.Installed)\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletNotReadyError();\n            this._connecting = true;\n            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n            const wallet = window.nightly.solana;\n            try {\n                await wallet.connect();\n            }\n            catch (error) {\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletConnectionError(error?.message, error);\n            }\n            if (wallet.publicKey.toString() === '11111111111111111111111111111111')\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletAccountError();\n            let publicKey;\n            try {\n                publicKey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(wallet.publicKey.toBytes());\n            }\n            catch (error) {\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletPublicKeyError(error?.message, error);\n            }\n            this._wallet = wallet;\n            this._publicKey = publicKey;\n            this.emit('connect', publicKey);\n        }\n        catch (error) {\n            this.emit('error', error);\n            throw error;\n        }\n        finally {\n            this._connecting = false;\n        }\n    }\n    async disconnect() {\n        const wallet = this._wallet;\n        if (wallet) {\n            this._wallet = null;\n            this._publicKey = null;\n            try {\n                await wallet.disconnect();\n            }\n            catch (error) {\n                this.emit('error', new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletDisconnectedError());\n            }\n        }\n        this.emit('disconnect');\n    }\n    async signTransaction(transaction) {\n        try {\n            const wallet = this._wallet;\n            if (!wallet)\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletNotConnectedError();\n            try {\n                return (await wallet.signTransaction(transaction));\n            }\n            catch (error) {\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletSignTransactionError(error?.message, error);\n            }\n        }\n        catch (error) {\n            this.emit('error', error);\n            throw error;\n        }\n    }\n    async signAllTransactions(transactions) {\n        try {\n            const wallet = this._wallet;\n            if (!wallet)\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletNotConnectedError();\n            try {\n                return (await wallet.signAllTransactions(transactions));\n            }\n            catch (error) {\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletSignTransactionError(error?.message, error);\n            }\n        }\n        catch (error) {\n            this.emit('error', error);\n            throw error;\n        }\n    }\n    async signMessage(message) {\n        try {\n            const wallet = this._wallet;\n            if (!wallet)\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletNotConnectedError();\n            try {\n                return wallet.signMessage(new TextDecoder().decode(message));\n            }\n            catch (error) {\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletSignTransactionError(error?.message, error);\n            }\n        }\n        catch (error) {\n            this.emit('error', error);\n            throw error;\n        }\n    }\n}\n//# sourceMappingURL=adapter.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNvbGFuYSt3YWxsZXQtYWRhcHRlci1uaWdodGx5QDAuMS4xNl9Ac29sYW5hK3dlYjMuanNAMS45OC4wX2J1ZmZlcnV0aWxANC4wLjhfdXRmLTgtdmFsaWRhdGVANS4wLjEwXy9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1uaWdodGx5L2xpYi9lc20vYWRhcHRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbVM7QUFDdlA7QUFDckM7QUFDQSxtQ0FBbUMsdUZBQThCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQSxjQUFjLHlFQUFnQjtBQUM5QixjQUFjLHlFQUFnQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMseUVBQWdCO0FBQ2pELFlBQVksMEZBQTZCO0FBQ3pDO0FBQ0EsdUNBQXVDLHlFQUFnQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMseUVBQWdCO0FBQ3JELDBCQUEwQiw0RUFBbUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOEVBQXFCO0FBQy9DO0FBQ0E7QUFDQSwwQkFBMEIsMkVBQWtCO0FBQzVDO0FBQ0E7QUFDQSxnQ0FBZ0Msc0RBQVM7QUFDekM7QUFDQTtBQUNBLDBCQUEwQiw2RUFBb0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZ0ZBQXVCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0ZBQXVCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1GQUEwQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdGQUF1QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtRkFBMEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnRkFBdUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUZBQTBCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL3dvcmtzcGFjZXMvaXdvLXBsYXRmb3JtL25vZGVfbW9kdWxlcy8ucG5wbS9Ac29sYW5hK3dhbGxldC1hZGFwdGVyLW5pZ2h0bHlAMC4xLjE2X0Bzb2xhbmErd2ViMy5qc0AxLjk4LjBfYnVmZmVydXRpbEA0LjAuOF91dGYtOC12YWxpZGF0ZUA1LjAuMTBfL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLW5pZ2h0bHkvbGliL2VzbS9hZGFwdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNZXNzYWdlU2lnbmVyV2FsbGV0QWRhcHRlciwgc2NvcGVQb2xsaW5nRGV0ZWN0aW9uU3RyYXRlZ3ksIFdhbGxldEFjY291bnRFcnJvciwgV2FsbGV0Q29ubmVjdGlvbkVycm9yLCBXYWxsZXREaXNjb25uZWN0ZWRFcnJvciwgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IsIFdhbGxldE5vdFJlYWR5RXJyb3IsIFdhbGxldFB1YmxpY0tleUVycm9yLCBXYWxsZXRSZWFkeVN0YXRlLCBXYWxsZXRTaWduVHJhbnNhY3Rpb25FcnJvciwgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLWJhc2UnO1xuaW1wb3J0IHsgUHVibGljS2V5IH0gZnJvbSAnQHNvbGFuYS93ZWIzLmpzJztcbmV4cG9ydCBjb25zdCBOaWdodGx5V2FsbGV0TmFtZSA9ICdOaWdodGx5JztcbmV4cG9ydCBjbGFzcyBOaWdodGx5V2FsbGV0QWRhcHRlciBleHRlbmRzIEJhc2VNZXNzYWdlU2lnbmVyV2FsbGV0QWRhcHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IE5pZ2h0bHlXYWxsZXROYW1lO1xuICAgICAgICB0aGlzLnVybCA9ICdodHRwczovL25pZ2h0bHkuYXBwJztcbiAgICAgICAgdGhpcy5pY29uID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9UWWlJR2hsYVdkb2REMGlPVFlpSUhacFpYZENiM2c5SWpBZ01DQTVOaUE1TmlJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNEtQSEJoZEdnZ1pEMGlUVFE0SURrMlF6YzBMalV3T1RjZ09UWWdPVFlnTnpRdU5UQTVOeUE1TmlBME9FTTVOaUF5TVM0ME9UQXpJRGMwTGpVd09UY2dNQ0EwT0NBd1F6SXhMalE1TURNZ01DQXdJREl4TGpRNU1ETWdNQ0EwT0VNd0lEYzBMalV3T1RjZ01qRXVORGt3TXlBNU5pQTBPQ0E1TmxvaUlHWnBiR3c5SWlNMlJEY3pSamdpTHo0S1BIQmhkR2dnWkQwaVRUUTRJRGcxTGpZek5UWkRORGdnT0RVdU5qTTFOaUExTWk0ME5UTXpJRGcxTGpZek5UWWdOVFV1TkRRZ09ESXVOVGcyTjBNMU9DNDVNVFUxSURjNUxqSTRNREVnTlRjdU16VXhNU0EzTlM0ME16RXlJRFl5TGpJM05UVWdOekV1TkRNeE1rTTJOaTQ1T0RZMklEWTNMalkwTkRVZ056SXVPVEkwTkNBM01DNHpNemM1SURjeUxqa3lORFFnTnpBdU16TTNPVU0zTnk0d01qSXlJRFl5TGpFeU5EVWdOelF1TnpreE1TQTFNaTQxTmprZ056UXVOemt4TVNBMU1pNDFOamxET0RFdU56WTRPQ0F6TkM0eU5UYzVJRGMxTGprMk5EUWdNakV1TVRVMU55QTNOQzQwTkRRMElERTNMak0yTURGRE5qa3VORFE0T0NBeU5DNHpNemM1SURZekxqRTVNVEVnTWprdU1UY3pOQ0ExTlM0M09UVTFJRE15TGpRd09VTTFNeTR5TWpZMklETXhMamN3TmpnZ05UQXVOVGsxTlNBek1TNHpNek0wSURRNElETXhMak0yTURGRE5EVXVOREV6TXlBek1TNHpNek0wSURReUxqYzNNek1nTXpFdU56QTJPQ0EwTUM0eU1EUTBJRE15TGpRd09VTXpNaTQ0TVRjM0lESTVMakUyTkRVZ01qWXVOVFV4TVNBeU5DNHpNemM1SURJeExqVTFOVFVnTVRjdU16WXdNVU15TUM0d016VTFJREl4TGpFMU5UY2dNVFF1TWpNeE1TQXpOQzR5TlRjNUlESXhMakl3T0RrZ05USXVOVFk1UXpJeExqSXdPRGtnTlRJdU5UWTVJREU0TGprM056Z2dOakl1TVRJME5TQXlNeTR3TnpVMUlEY3dMak16TnpsRE1qTXVNRGMxTlNBM01DNHpNemM1SURJNUxqQXhNek1nTmpjdU5qUTBOU0F6TXk0M01qUTBJRGN4TGpRek1USkRNemd1TmpVM055QTNOUzQwTXpFeUlETTNMakE0TkRRZ056a3VNamd3TVNBME1DNDFOaUE0TWk0MU9EWTNRelF6TGpVME5qWWdPRFV1TmpNMU5pQTBPQ0E0TlM0Mk16VTJJRFE0SURnMUxqWXpOVFphSWlCbWFXeHNQU0ozYUdsMFpTSXZQZ284Y0dGMGFDQmtQU0pOTkRJdU5EYzVPU0EyTlM0eU9UaEROREl1TWprek15QTFPUzR5TVRnZ016WXVNekF5TVNBMU55NHlOakkwSURNeUxqSXhNek1nTlRrdU9ESXlORU16TWk0eU1UTXpJRFU1TGpneU1qUWdNekl1T0RVek15QTJNaTQwTXpVNElETTFMamd6T1RrZ05qTXVOelV4TTBNek9DNHlOelUxSURZMExqZ3lOamtnTXprdU16STBOQ0EyTXk0ek9EWTVJRFF5TGpRM09Ua2dOalV1TWprNFdpSWdabWxzYkQwaUl6ZENPREZHT1NJdlBnbzhjR0YwYUNCa1BTSk5Nakl1TkRrM055QXlNeTR3T1RNMVF6SXdMakE0T0RnZ016RXVOVFEyT0NBeU1TNHhNamc0SURReUxqSTBNRElnTWpRdU9UTXpNeUExTUM0d01qWTVRekk0TGpneU5qWWdORGN1TWpjeE15QXpNaTQ1TVRVMUlEUXpMakF4TXpVZ016VXVNRGt6TXlBek9DNDFNRFk1UXpJNUxqazJORFFnTXpRdU56RXhNeUF5TlM0Mk5qSXlJRE14TGpFd01qUWdNakl1TkRrM055QXlNeTR3T1RNMVdpSWdabWxzYkQwaUl6ZENPREZHT1NJdlBnbzhjR0YwYUNCa1BTSk5OVE11TlRFNU9TQTJOUzR5T1RoRE5UTXVOekEyTmlBMU9TNHlNVGdnTlRrdU5qazNOeUExTnk0eU5qSTBJRFl6TGpjNE5qWWdOVGt1T0RJeU5FTTJNeTQzT0RZMklEVTVMamd5TWpRZ05qTXVNVFEyTmlBMk1pNDBNelU0SURZd0xqRTFPVGtnTmpNdU56VXhNME0xTnk0M01qUXpJRFkwTGpneU5qa2dOVFl1TmpjMU5TQTJNeTR6T0RZNUlEVXpMalV4T1RrZ05qVXVNams0V2lJZ1ptbHNiRDBpSXpkQ09ERkdPU0l2UGdvOGNHRjBhQ0JrUFNKTk56TXVOVEF5TWlBeU15NHdPVE0xUXpjMUxqa3hNVEVnTXpFdU5UUTJPQ0EzTkM0NE56RXhJRFF5TGpJME1ESWdOekV1TURZMk5pQTFNQzR3TWpZNVF6WTNMakUzTXpNZ05EY3VNamN4TXlBMk15NHdPRFEwSURRekxqQXhNelVnTmpBdU9UQTJOaUF6T0M0MU1EWTVRelkyTGpBek5UVWdNelF1TnpFeE15QTNNQzR6TXpjM0lETXhMakV3TWpRZ056TXVOVEF5TWlBeU15NHdPVE0xV2lJZ1ptbHNiRDBpSXpkQ09ERkdPU0l2UGdvOGNHRjBhQ0JrUFNKTk5EY3VPVGs1T1NBNE5TNHpNRFk1UXpVd0xqRTBNRFFnT0RVdU16QTJPU0ExTVM0NE56VTFJRGd6TGpjM09EY2dOVEV1T0RjMU5TQTRNUzQ0T1RNMlF6VXhMamczTlRVZ09EQXVNREE0TkNBMU1DNHhOREEwSURjNExqUTRNRElnTkRjdU9UazVPU0EzT0M0ME9EQXlRelExTGpnMU9UVWdOemd1TkRnd01pQTBOQzR4TWpRMElEZ3dMakF3T0RRZ05EUXVNVEkwTkNBNE1TNDRPVE0yUXpRMExqRXlORFFnT0RNdU56YzROeUEwTlM0NE5UazFJRGcxTGpNd05qa2dORGN1T1RrNU9TQTROUzR6TURZNVdpSWdabWxzYkQwaUl6ZENPREZHT1NJdlBnbzhMM04yWno0Syc7XG4gICAgICAgIHRoaXMuc3VwcG9ydGVkVHJhbnNhY3Rpb25WZXJzaW9ucyA9IG5ldyBTZXQoWydsZWdhY3knLCAwXSk7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFdhbGxldFJlYWR5U3RhdGUuVW5zdXBwb3J0ZWRcbiAgICAgICAgICAgIDogV2FsbGV0UmVhZHlTdGF0ZS5Ob3REZXRlY3RlZDtcbiAgICAgICAgdGhpcy5fY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wdWJsaWNLZXkgPSBudWxsO1xuICAgICAgICB0aGlzLl93YWxsZXQgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5fcmVhZHlTdGF0ZSAhPT0gV2FsbGV0UmVhZHlTdGF0ZS5VbnN1cHBvcnRlZCkge1xuICAgICAgICAgICAgc2NvcGVQb2xsaW5nRGV0ZWN0aW9uU3RyYXRlZ3koKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3c/Lm5pZ2h0bHk/LnNvbGFuYSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gV2FsbGV0UmVhZHlTdGF0ZS5JbnN0YWxsZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgncmVhZHlTdGF0ZUNoYW5nZScsIHRoaXMuX3JlYWR5U3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGNvbm5lY3RpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW5nO1xuICAgIH1cbiAgICBnZXQgcmVhZHlTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWR5U3RhdGU7XG4gICAgfVxuICAgIGdldCBwdWJsaWNLZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wdWJsaWNLZXk7XG4gICAgfVxuICAgIGFzeW5jIGNvbm5lY3QoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQgfHwgdGhpcy5jb25uZWN0aW5nKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZWFkeVN0YXRlICE9PSBXYWxsZXRSZWFkeVN0YXRlLkluc3RhbGxlZClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Tm90UmVhZHlFcnJvcigpO1xuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGluZyA9IHRydWU7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gd2luZG93Lm5pZ2h0bHkuc29sYW5hO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCB3YWxsZXQuY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldENvbm5lY3Rpb25FcnJvcihlcnJvcj8ubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdhbGxldC5wdWJsaWNLZXkudG9TdHJpbmcoKSA9PT0gJzExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExJylcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0QWNjb3VudEVycm9yKCk7XG4gICAgICAgICAgICBsZXQgcHVibGljS2V5O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwdWJsaWNLZXkgPSBuZXcgUHVibGljS2V5KHdhbGxldC5wdWJsaWNLZXkudG9CeXRlcygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRQdWJsaWNLZXlFcnJvcihlcnJvcj8ubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fd2FsbGV0ID0gd2FsbGV0O1xuICAgICAgICAgICAgdGhpcy5fcHVibGljS2V5ID0gcHVibGljS2V5O1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdjb25uZWN0JywgcHVibGljS2V5KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBkaXNjb25uZWN0KCkge1xuICAgICAgICBjb25zdCB3YWxsZXQgPSB0aGlzLl93YWxsZXQ7XG4gICAgICAgIGlmICh3YWxsZXQpIHtcbiAgICAgICAgICAgIHRoaXMuX3dhbGxldCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9wdWJsaWNLZXkgPSBudWxsO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCB3YWxsZXQuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBXYWxsZXREaXNjb25uZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtaXQoJ2Rpc2Nvbm5lY3QnKTtcbiAgICB9XG4gICAgYXN5bmMgc2lnblRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB3YWxsZXQgPSB0aGlzLl93YWxsZXQ7XG4gICAgICAgICAgICBpZiAoIXdhbGxldClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChhd2FpdCB3YWxsZXQuc2lnblRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0U2lnblRyYW5zYWN0aW9uRXJyb3IoZXJyb3I/Lm1lc3NhZ2UsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBzaWduQWxsVHJhbnNhY3Rpb25zKHRyYW5zYWN0aW9ucykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gdGhpcy5fd2FsbGV0O1xuICAgICAgICAgICAgaWYgKCF3YWxsZXQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoYXdhaXQgd2FsbGV0LnNpZ25BbGxUcmFuc2FjdGlvbnModHJhbnNhY3Rpb25zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0U2lnblRyYW5zYWN0aW9uRXJyb3IoZXJyb3I/Lm1lc3NhZ2UsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBzaWduTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB3YWxsZXQgPSB0aGlzLl93YWxsZXQ7XG4gICAgICAgICAgICBpZiAoIXdhbGxldClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdhbGxldC5zaWduTWVzc2FnZShuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUobWVzc2FnZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldFNpZ25UcmFuc2FjdGlvbkVycm9yKGVycm9yPy5tZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZGFwdGVyLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-nightly@0.1.16_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-nightly/lib/esm/adapter.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-nightly@0.1.16_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-nightly/lib/esm/index.js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@solana+wallet-adapter-nightly@0.1.16_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-nightly/lib/esm/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NightlyWalletAdapter: () => (/* reexport safe */ _adapter_js__WEBPACK_IMPORTED_MODULE_0__.NightlyWalletAdapter),\n/* harmony export */   NightlyWalletName: () => (/* reexport safe */ _adapter_js__WEBPACK_IMPORTED_MODULE_0__.NightlyWalletName)\n/* harmony export */ });\n/* harmony import */ var _adapter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter.js */ \"(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-nightly@0.1.16_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-nightly/lib/esm/adapter.js\");\n\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNvbGFuYSt3YWxsZXQtYWRhcHRlci1uaWdodGx5QDAuMS4xNl9Ac29sYW5hK3dlYjMuanNAMS45OC4wX2J1ZmZlcnV0aWxANC4wLjhfdXRmLTgtdmFsaWRhdGVANS4wLjEwXy9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1uaWdodGx5L2xpYi9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZCO0FBQzdCIiwic291cmNlcyI6WyIvd29ya3NwYWNlcy9pd28tcGxhdGZvcm0vbm9kZV9tb2R1bGVzLy5wbnBtL0Bzb2xhbmErd2FsbGV0LWFkYXB0ZXItbmlnaHRseUAwLjEuMTZfQHNvbGFuYSt3ZWIzLmpzQDEuOTguMF9idWZmZXJ1dGlsQDQuMC44X3V0Zi04LXZhbGlkYXRlQDUuMC4xMF8vbm9kZV9tb2R1bGVzL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItbmlnaHRseS9saWIvZXNtL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYWRhcHRlci5qcyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-nightly@0.1.16_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-nightly/lib/esm/index.js\n");

/***/ })

};
;