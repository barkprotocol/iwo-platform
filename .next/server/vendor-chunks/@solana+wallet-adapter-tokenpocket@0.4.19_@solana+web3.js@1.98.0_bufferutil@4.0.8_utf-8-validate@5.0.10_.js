"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@solana+wallet-adapter-tokenpocket@0.4.19_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_";
exports.ids = ["vendor-chunks/@solana+wallet-adapter-tokenpocket@0.4.19_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-tokenpocket@0.4.19_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-tokenpocket/lib/esm/adapter.js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@solana+wallet-adapter-tokenpocket@0.4.19_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-tokenpocket/lib/esm/adapter.js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TokenPocketWalletAdapter: () => (/* binding */ TokenPocketWalletAdapter),\n/* harmony export */   TokenPocketWalletName: () => (/* binding */ TokenPocketWalletName)\n/* harmony export */ });\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-base@0.9.23_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-base/lib/esm/signer.js\");\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-base@0.9.23_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-base/lib/esm/adapter.js\");\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-base@0.9.23_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-base/lib/esm/errors.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ \"(ssr)/./node_modules/.pnpm/@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.esm.js\");\n\n\nconst TokenPocketWalletName = 'TokenPocket';\nclass TokenPocketWalletAdapter extends _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.BaseMessageSignerWalletAdapter {\n    constructor(config = {}) {\n        super();\n        this.name = TokenPocketWalletName;\n        this.url = 'https://tokenpocket.pro';\n        this.icon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGc+CjxwYXRoIGQ9Ik0xMDQxLjUyIDBILTI3VjEwMjRIMTA0MS41MlYwWiIgZmlsbD0iIzI5ODBGRSIvPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNDA4XzIyNSkiPgo8cGF0aCBkPSJNNDA2Ljc5NiA0MzguNjQzSDQwNi45MjdDNDA2Ljc5NiA0MzcuODU3IDQwNi43OTYgNDM2Ljk0IDQwNi43OTYgNDM2LjE1NFY0MzguNjQzWiIgZmlsbD0iIzI5QUVGRiIvPgo8cGF0aCBkPSJNNjY3LjYwMiA0NjMuNTMzSDUyMy4yNDlWNzI0LjA3NkM1MjMuMjQ5IDczNi4zODkgNTMzLjIwNCA3NDYuMzQ1IDU0NS41MTcgNzQ2LjM0NUg2NDUuMzMzQzY1Ny42NDcgNzQ2LjM0NSA2NjcuNjAyIDczNi4zODkgNjY3LjYwMiA3MjQuMDc2VjQ2My41MzNaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDUzLjU2MyAyNzdINDQ4LjcxNkgxOTAuMjY5QzE3Ny45NTUgMjc3IDE2OCAyODYuOTU1IDE2OCAyOTkuMjY5VjM4OS42NTNDMTY4IDQwMS45NjcgMTc3Ljk1NSA0MTEuOTIyIDE5MC4yNjkgNDExLjkyMkgyNTAuOTE4SDI3NS4wMjFWNDM4LjY0NFY3MjQuNzMxQzI3NS4wMjEgNzM3LjA0NSAyODQuOTc2IDc0NyAyOTcuMjg5IDc0N0gzOTIuMTI4QzQwNC40NDEgNzQ3IDQxNC4zOTYgNzM3LjA0NSA0MTQuMzk2IDcyNC43MzFWNDM4LjY0NFY0MzYuMTU2VjQxMS45MjJINDM4LjQ5OUg0NDguMzIzSDQ1My4xN0M0OTAuMzcyIDQxMS45MjIgNTIwLjYzMSAzODEuNjYzIDUyMC42MzEgMzQ0LjQ2MUM1MjEuMDI0IDMwNy4yNTkgNDkwLjc2NSAyNzcgNDUzLjU2MyAyNzdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNjY3LjczNSA0NjMuNTMzVjY0NS4zNUM2NzIuNzEzIDY0Ni41MjkgNjc3LjgyMSA2NDcuNDQ2IDY4My4wNjEgNjQ4LjIzMkM2OTAuMzk3IDY0OS4yOCA2OTcuOTk0IDY0OS45MzUgNzA1LjU5MiA2NTAuMDY2QzcwNS45ODUgNjUwLjA2NiA3MDYuMzc4IDY1MC4wNjYgNzA2LjkwMiA2NTAuMDY2VjUwNS40NUM2ODUuMDI2IDUwNC4wMDkgNjY3LjczNSA0ODUuODAxIDY2Ny43MzUgNDYzLjUzM1oiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl80MDhfMjI1KSIvPgo8cGF0aCBkPSJNNzA5Ljc4MSAyNzdDNjA2LjgyMiAyNzcgNTIzLjI0OSAzNjAuNTczIDUyMy4yNDkgNDYzLjUzM0M1MjMuMjQ5IDU1Mi4wODQgNTg0Ljk0NiA2MjYuMjI1IDY2Ny43MzMgNjQ1LjM1VjQ2My41MzNDNjY3LjczMyA0NDAuMzQ3IDY4Ni41OTYgNDIxLjQ4NCA3MDkuNzgxIDQyMS40ODRDNzMyLjk2NyA0MjEuNDg0IDc1MS44MyA0NDAuMzQ3IDc1MS44MyA0NjMuNTMzQzc1MS44MyA0ODMuMDUxIDczOC42IDQ5OS40MjUgNzIwLjUyMyA1MDQuMTRDNzE3LjExNyA1MDUuMDU3IDcxMy40NDkgNTA1LjU4MSA3MDkuNzgxIDUwNS41ODFWNjUwLjA2NkM3MTMuNDQ5IDY1MC4wNjYgNzE2Ljk4NiA2NDkuOTM1IDcyMC41MjMgNjQ5LjgwNEM4MTguNTA1IDY0NC4xNzEgODk2LjMxNCA1NjIuOTU2IDg5Ni4zMTQgNDYzLjUzM0M4OTYuNDQ1IDM2MC41NzMgODEyLjg3MiAyNzcgNzA5Ljc4MSAyNzdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNzA5Ljc4IDY1MC4wNjZWNTA1LjU4MUM3MDguNzMzIDUwNS41ODEgNzA3LjgxNiA1MDUuNTgxIDcwNi43NjggNTA1LjQ1VjY1MC4wNjZDNzA3LjgxNiA2NTAuMDY2IDcwOC44NjQgNjUwLjA2NiA3MDkuNzggNjUwLjA2NloiIGZpbGw9IndoaXRlIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzQwOF8yMjUiIHgxPSI3MDkuODQ0IiB5MT0iNTU2LjgyNyIgeDI9IjY2Ny43NTMiIHkyPSI1NTYuODI3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMC45NjY3IiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjMyMzMiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMF80MDhfMjI1Ij4KPHJlY3Qgd2lkdGg9IjcyOC40NDgiIGhlaWdodD0iNDcwIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY4IDI3NykiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K';\n        this.supportedTransactionVersions = null;\n        this._readyState = typeof window === 'undefined' || typeof document === 'undefined'\n            ? _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletReadyState.Unsupported\n            : _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletReadyState.NotDetected;\n        this._disconnected = () => {\n            const wallet = this._wallet;\n            if (wallet) {\n                wallet.off('disconnect', this._disconnected);\n                this._wallet = null;\n                this._publicKey = null;\n                this.emit('error', new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletDisconnectedError());\n                this.emit('disconnect');\n            }\n        };\n        this._connecting = false;\n        this._wallet = null;\n        this._publicKey = null;\n        if (this._readyState !== _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletReadyState.Unsupported) {\n            (0,_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.scopePollingDetectionStrategy)(() => {\n                if (window.solana?.isTokenPocket) {\n                    this._readyState = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletReadyState.Installed;\n                    this.emit('readyStateChange', this._readyState);\n                    return true;\n                }\n                return false;\n            });\n        }\n    }\n    get publicKey() {\n        return this._publicKey;\n    }\n    get connecting() {\n        return this._connecting;\n    }\n    get connected() {\n        return !!this._wallet?.isConnected;\n    }\n    get readyState() {\n        return this._readyState;\n    }\n    async connect() {\n        try {\n            if (this.connected || this.connecting)\n                return;\n            if (this._readyState !== _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletReadyState.Installed)\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletNotReadyError();\n            this._connecting = true;\n            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n            const wallet = window.solana;\n            try {\n                await wallet.connect();\n            }\n            catch (error) {\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletConnectionError(error?.message, error);\n            }\n            if (!wallet.publicKey)\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletAccountError();\n            let publicKey;\n            try {\n                publicKey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(wallet.publicKey.toBytes());\n            }\n            catch (error) {\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletPublicKeyError(error?.message, error);\n            }\n            wallet.on('disconnect', this._disconnected);\n            this._wallet = wallet;\n            this._publicKey = publicKey;\n            this.emit('connect', publicKey);\n        }\n        catch (error) {\n            this.emit('error', error);\n            throw error;\n        }\n        finally {\n            this._connecting = false;\n        }\n    }\n    async disconnect() {\n        const wallet = this._wallet;\n        if (wallet) {\n            wallet.off('disconnect', this._disconnected);\n            this._wallet = null;\n            this._publicKey = null;\n            this.emit('disconnect');\n        }\n    }\n    async signTransaction(transaction) {\n        try {\n            const wallet = this._wallet;\n            if (!wallet)\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletNotConnectedError();\n            try {\n                return (await wallet.signTransaction(transaction)) || transaction;\n            }\n            catch (error) {\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletSignTransactionError(error?.message, error);\n            }\n        }\n        catch (error) {\n            this.emit('error', error);\n            throw error;\n        }\n    }\n    async signAllTransactions(transactions) {\n        try {\n            const wallet = this._wallet;\n            if (!wallet)\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletNotConnectedError();\n            try {\n                return (await wallet.signAllTransactions(transactions)) || transactions;\n            }\n            catch (error) {\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletSignTransactionError(error?.message, error);\n            }\n        }\n        catch (error) {\n            this.emit('error', error);\n            throw error;\n        }\n    }\n    async signMessage(message) {\n        try {\n            const wallet = this._wallet;\n            if (!wallet)\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletNotConnectedError();\n            try {\n                const { signature } = await wallet.signMessage(message);\n                return signature;\n            }\n            catch (error) {\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletSignMessageError(error?.message, error);\n            }\n        }\n        catch (error) {\n            this.emit('error', error);\n            throw error;\n        }\n    }\n}\n//# sourceMappingURL=adapter.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNvbGFuYSt3YWxsZXQtYWRhcHRlci10b2tlbnBvY2tldEAwLjQuMTlfQHNvbGFuYSt3ZWIzLmpzQDEuOTguMF9idWZmZXJ1dGlsQDQuMC44X3V0Zi04LXZhbGlkYXRlQDUuMC4xMF8vbm9kZV9tb2R1bGVzL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItdG9rZW5wb2NrZXQvbGliL2VzbS9hZGFwdGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyVDtBQUMvUTtBQUNyQztBQUNBLHVDQUF1Qyx1RkFBOEI7QUFDNUUsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0EsY0FBYyx5RUFBZ0I7QUFDOUIsY0FBYyx5RUFBZ0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGdGQUF1QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMseUVBQWdCO0FBQ2pELFlBQVksMEZBQTZCO0FBQ3pDO0FBQ0EsdUNBQXVDLHlFQUFnQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMseUVBQWdCO0FBQ3JELDBCQUEwQiw0RUFBbUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOEVBQXFCO0FBQy9DO0FBQ0E7QUFDQSwwQkFBMEIsMkVBQWtCO0FBQzVDO0FBQ0E7QUFDQSxnQ0FBZ0Msc0RBQVM7QUFDekM7QUFDQTtBQUNBLDBCQUEwQiw2RUFBb0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdGQUF1QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtRkFBMEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnRkFBdUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUZBQTBCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0ZBQXVCO0FBQ2pEO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLCtFQUFzQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL2l3by1wbGF0Zm9ybS9ub2RlX21vZHVsZXMvLnBucG0vQHNvbGFuYSt3YWxsZXQtYWRhcHRlci10b2tlbnBvY2tldEAwLjQuMTlfQHNvbGFuYSt3ZWIzLmpzQDEuOTguMF9idWZmZXJ1dGlsQDQuMC44X3V0Zi04LXZhbGlkYXRlQDUuMC4xMF8vbm9kZV9tb2R1bGVzL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItdG9rZW5wb2NrZXQvbGliL2VzbS9hZGFwdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNZXNzYWdlU2lnbmVyV2FsbGV0QWRhcHRlciwgc2NvcGVQb2xsaW5nRGV0ZWN0aW9uU3RyYXRlZ3ksIFdhbGxldEFjY291bnRFcnJvciwgV2FsbGV0Q29ubmVjdGlvbkVycm9yLCBXYWxsZXREaXNjb25uZWN0ZWRFcnJvciwgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IsIFdhbGxldE5vdFJlYWR5RXJyb3IsIFdhbGxldFB1YmxpY0tleUVycm9yLCBXYWxsZXRSZWFkeVN0YXRlLCBXYWxsZXRTaWduTWVzc2FnZUVycm9yLCBXYWxsZXRTaWduVHJhbnNhY3Rpb25FcnJvciwgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLWJhc2UnO1xuaW1wb3J0IHsgUHVibGljS2V5IH0gZnJvbSAnQHNvbGFuYS93ZWIzLmpzJztcbmV4cG9ydCBjb25zdCBUb2tlblBvY2tldFdhbGxldE5hbWUgPSAnVG9rZW5Qb2NrZXQnO1xuZXhwb3J0IGNsYXNzIFRva2VuUG9ja2V0V2FsbGV0QWRhcHRlciBleHRlbmRzIEJhc2VNZXNzYWdlU2lnbmVyV2FsbGV0QWRhcHRlciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gVG9rZW5Qb2NrZXRXYWxsZXROYW1lO1xuICAgICAgICB0aGlzLnVybCA9ICdodHRwczovL3Rva2VucG9ja2V0LnBybyc7XG4gICAgICAgIHRoaXMuaWNvbiA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVEl3SWlCb1pXbG5hSFE5SWpFeU1DSWdkbWxsZDBKdmVEMGlNQ0F3SURFd01qUWdNVEF5TkNJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNEtQR2MrQ2p4d1lYUm9JR1E5SWsweE1EUXhMalV5SURCSUxUSTNWakV3TWpSSU1UQTBNUzQxTWxZd1dpSWdabWxzYkQwaUl6STVPREJHUlNJdlBnbzhaeUJqYkdsd0xYQmhkR2c5SW5WeWJDZ2pZMnhwY0RCZk5EQTRYekl5TlNraVBnbzhjR0YwYUNCa1BTSk5OREEyTGpjNU5pQTBNemd1TmpRelNEUXdOaTQ1TWpkRE5EQTJMamM1TmlBME16Y3VPRFUzSURRd05pNDNPVFlnTkRNMkxqazBJRFF3Tmk0M09UWWdORE0yTGpFMU5GWTBNemd1TmpReldpSWdabWxzYkQwaUl6STVRVVZHUmlJdlBnbzhjR0YwYUNCa1BTSk5OalkzTGpZd01pQTBOak11TlRNelNEVXlNeTR5TkRsV056STBMakEzTmtNMU1qTXVNalE1SURjek5pNHpPRGtnTlRNekxqSXdOQ0EzTkRZdU16UTFJRFUwTlM0MU1UY2dOelEyTGpNME5VZzJORFV1TXpNelF6WTFOeTQyTkRjZ056UTJMak0wTlNBMk5qY3VOakF5SURjek5pNHpPRGtnTmpZM0xqWXdNaUEzTWpRdU1EYzJWalEyTXk0MU16TmFJaUJtYVd4c1BTSjNhR2wwWlNJdlBnbzhjR0YwYUNCa1BTSk5ORFV6TGpVMk15QXlOemRJTkRRNExqY3hOa2d4T1RBdU1qWTVRekUzTnk0NU5UVWdNamMzSURFMk9DQXlPRFl1T1RVMUlERTJPQ0F5T1RrdU1qWTVWak00T1M0Mk5UTkRNVFk0SURRd01TNDVOamNnTVRjM0xqazFOU0EwTVRFdU9USXlJREU1TUM0eU5qa2dOREV4TGpreU1rZ3lOVEF1T1RFNFNESTNOUzR3TWpGV05ETTRMalkwTkZZM01qUXVOek14UXpJM05TNHdNakVnTnpNM0xqQTBOU0F5T0RRdU9UYzJJRGMwTnlBeU9UY3VNamc1SURjME4wZ3pPVEl1TVRJNFF6UXdOQzQwTkRFZ056UTNJRFF4TkM0ek9UWWdOek0zTGpBME5TQTBNVFF1TXprMklEY3lOQzQzTXpGV05ETTRMalkwTkZZME16WXVNVFUyVmpReE1TNDVNakpJTkRNNExqUTVPVWcwTkRndU16SXpTRFExTXk0eE4wTTBPVEF1TXpjeUlEUXhNUzQ1TWpJZ05USXdMall6TVNBek9ERXVOall6SURVeU1DNDJNekVnTXpRMExqUTJNVU0xTWpFdU1ESTBJRE13Tnk0eU5Ua2dORGt3TGpjMk5TQXlOemNnTkRVekxqVTJNeUF5TnpkYUlpQm1hV3hzUFNKM2FHbDBaU0l2UGdvOGNHRjBhQ0JrUFNKTk5qWTNMamN6TlNBME5qTXVOVE16VmpZME5TNHpOVU0yTnpJdU56RXpJRFkwTmk0MU1qa2dOamMzTGpneU1TQTJORGN1TkRRMklEWTRNeTR3TmpFZ05qUTRMakl6TWtNMk9UQXVNemszSURZME9TNHlPQ0EyT1RjdU9UazBJRFkwT1M0NU16VWdOekExTGpVNU1pQTJOVEF1TURZMlF6Y3dOUzQ1T0RVZ05qVXdMakEyTmlBM01EWXVNemM0SURZMU1DNHdOallnTnpBMkxqa3dNaUEyTlRBdU1EWTJWalV3TlM0ME5VTTJPRFV1TURJMklEVXdOQzR3TURrZ05qWTNMamN6TlNBME9EVXVPREF4SURZMk55NDNNelVnTkRZekxqVXpNMW9pSUdacGJHdzlJblZ5YkNnamNHRnBiblF3WDJ4cGJtVmhjbDgwTURoZk1qSTFLU0l2UGdvOGNHRjBhQ0JrUFNKTk56QTVMamM0TVNBeU56ZEROakEyTGpneU1pQXlOemNnTlRJekxqSTBPU0F6TmpBdU5UY3pJRFV5TXk0eU5Ea2dORFl6TGpVek0wTTFNak11TWpRNUlEVTFNaTR3T0RRZ05UZzBMamswTmlBMk1qWXVNakkxSURZMk55NDNNek1nTmpRMUxqTTFWalEyTXk0MU16TkROalkzTGpjek15QTBOREF1TXpRM0lEWTROaTQxT1RZZ05ESXhMalE0TkNBM01Ea3VOemd4SURReU1TNDBPRFJETnpNeUxqazJOeUEwTWpFdU5EZzBJRGMxTVM0NE15QTBOREF1TXpRM0lEYzFNUzQ0TXlBME5qTXVOVE16UXpjMU1TNDRNeUEwT0RNdU1EVXhJRGN6T0M0MklEUTVPUzQwTWpVZ056SXdMalV5TXlBMU1EUXVNVFJETnpFM0xqRXhOeUExTURVdU1EVTNJRGN4TXk0ME5Ea2dOVEExTGpVNE1TQTNNRGt1TnpneElEVXdOUzQxT0RGV05qVXdMakEyTmtNM01UTXVORFE1SURZMU1DNHdOallnTnpFMkxqazROaUEyTkRrdU9UTTFJRGN5TUM0MU1qTWdOalE1TGpnd05FTTRNVGd1TlRBMUlEWTBOQzR4TnpFZ09EazJMak14TkNBMU5qSXVPVFUySURnNU5pNHpNVFFnTkRZekxqVXpNME00T1RZdU5EUTFJRE0yTUM0MU56TWdPREV5TGpnM01pQXlOemNnTnpBNUxqYzRNU0F5TnpkYUlpQm1hV3hzUFNKM2FHbDBaU0l2UGdvOGNHRjBhQ0JrUFNKTk56QTVMamM0SURZMU1DNHdOalpXTlRBMUxqVTRNVU0zTURndU56TXpJRFV3TlM0MU9ERWdOekEzTGpneE5pQTFNRFV1TlRneElEY3dOaTQzTmpnZ05UQTFMalExVmpZMU1DNHdOalpETnpBM0xqZ3hOaUEyTlRBdU1EWTJJRGN3T0M0NE5qUWdOalV3TGpBMk5pQTNNRGt1TnpnZ05qVXdMakEyTmxvaUlHWnBiR3c5SW5kb2FYUmxJaTgrQ2p3dlp6NEtQQzluUGdvOFpHVm1jejRLUEd4cGJtVmhja2R5WVdScFpXNTBJR2xrUFNKd1lXbHVkREJmYkdsdVpXRnlYelF3T0Y4eU1qVWlJSGd4UFNJM01Ea3VPRFEwSWlCNU1UMGlOVFUyTGpneU55SWdlREk5SWpZMk55NDNOVE1pSUhreVBTSTFOVFl1T0RJM0lpQm5jbUZrYVdWdWRGVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0krQ2p4emRHOXdJSE4wYjNBdFkyOXNiM0k5SW5kb2FYUmxJaTgrQ2p4emRHOXdJRzltWm5ObGREMGlNQzQ1TmpZM0lpQnpkRzl3TFdOdmJHOXlQU0ozYUdsMFpTSWdjM1J2Y0MxdmNHRmphWFI1UFNJd0xqTXlNek1pTHo0S1BITjBiM0FnYjJabWMyVjBQU0l4SWlCemRHOXdMV052Ykc5eVBTSjNhR2wwWlNJZ2MzUnZjQzF2Y0dGamFYUjVQU0l3TGpNaUx6NEtQQzlzYVc1bFlYSkhjbUZrYVdWdWRENEtQR05zYVhCUVlYUm9JR2xrUFNKamJHbHdNRjgwTURoZk1qSTFJajRLUEhKbFkzUWdkMmxrZEdnOUlqY3lPQzQwTkRnaUlHaGxhV2RvZEQwaU5EY3dJaUJtYVd4c1BTSjNhR2wwWlNJZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9NVFk0SURJM055a2lMejRLUEM5amJHbHdVR0YwYUQ0S1BDOWtaV1p6UGdvOEwzTjJaejRLJztcbiAgICAgICAgdGhpcy5zdXBwb3J0ZWRUcmFuc2FjdGlvblZlcnNpb25zID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gV2FsbGV0UmVhZHlTdGF0ZS5VbnN1cHBvcnRlZFxuICAgICAgICAgICAgOiBXYWxsZXRSZWFkeVN0YXRlLk5vdERldGVjdGVkO1xuICAgICAgICB0aGlzLl9kaXNjb25uZWN0ZWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3YWxsZXQgPSB0aGlzLl93YWxsZXQ7XG4gICAgICAgICAgICBpZiAod2FsbGV0KSB7XG4gICAgICAgICAgICAgICAgd2FsbGV0Lm9mZignZGlzY29ubmVjdCcsIHRoaXMuX2Rpc2Nvbm5lY3RlZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2FsbGV0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLl9wdWJsaWNLZXkgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgV2FsbGV0RGlzY29ubmVjdGVkRXJyb3IoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdkaXNjb25uZWN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2Nvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fd2FsbGV0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcHVibGljS2V5ID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuX3JlYWR5U3RhdGUgIT09IFdhbGxldFJlYWR5U3RhdGUuVW5zdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgIHNjb3BlUG9sbGluZ0RldGVjdGlvblN0cmF0ZWd5KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LnNvbGFuYT8uaXNUb2tlblBvY2tldCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gV2FsbGV0UmVhZHlTdGF0ZS5JbnN0YWxsZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgncmVhZHlTdGF0ZUNoYW5nZScsIHRoaXMuX3JlYWR5U3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHB1YmxpY0tleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3B1YmxpY0tleTtcbiAgICB9XG4gICAgZ2V0IGNvbm5lY3RpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW5nO1xuICAgIH1cbiAgICBnZXQgY29ubmVjdGVkKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl93YWxsZXQ/LmlzQ29ubmVjdGVkO1xuICAgIH1cbiAgICBnZXQgcmVhZHlTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWR5U3RhdGU7XG4gICAgfVxuICAgIGFzeW5jIGNvbm5lY3QoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQgfHwgdGhpcy5jb25uZWN0aW5nKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZWFkeVN0YXRlICE9PSBXYWxsZXRSZWFkeVN0YXRlLkluc3RhbGxlZClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Tm90UmVhZHlFcnJvcigpO1xuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGluZyA9IHRydWU7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gd2luZG93LnNvbGFuYTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgd2FsbGV0LmNvbm5lY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRDb25uZWN0aW9uRXJyb3IoZXJyb3I/Lm1lc3NhZ2UsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghd2FsbGV0LnB1YmxpY0tleSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0QWNjb3VudEVycm9yKCk7XG4gICAgICAgICAgICBsZXQgcHVibGljS2V5O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwdWJsaWNLZXkgPSBuZXcgUHVibGljS2V5KHdhbGxldC5wdWJsaWNLZXkudG9CeXRlcygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRQdWJsaWNLZXlFcnJvcihlcnJvcj8ubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2FsbGV0Lm9uKCdkaXNjb25uZWN0JywgdGhpcy5fZGlzY29ubmVjdGVkKTtcbiAgICAgICAgICAgIHRoaXMuX3dhbGxldCA9IHdhbGxldDtcbiAgICAgICAgICAgIHRoaXMuX3B1YmxpY0tleSA9IHB1YmxpY0tleTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY29ubmVjdCcsIHB1YmxpY0tleSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3Qgd2FsbGV0ID0gdGhpcy5fd2FsbGV0O1xuICAgICAgICBpZiAod2FsbGV0KSB7XG4gICAgICAgICAgICB3YWxsZXQub2ZmKCdkaXNjb25uZWN0JywgdGhpcy5fZGlzY29ubmVjdGVkKTtcbiAgICAgICAgICAgIHRoaXMuX3dhbGxldCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9wdWJsaWNLZXkgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdkaXNjb25uZWN0Jyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgc2lnblRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB3YWxsZXQgPSB0aGlzLl93YWxsZXQ7XG4gICAgICAgICAgICBpZiAoIXdhbGxldClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChhd2FpdCB3YWxsZXQuc2lnblRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKSkgfHwgdHJhbnNhY3Rpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0U2lnblRyYW5zYWN0aW9uRXJyb3IoZXJyb3I/Lm1lc3NhZ2UsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBzaWduQWxsVHJhbnNhY3Rpb25zKHRyYW5zYWN0aW9ucykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gdGhpcy5fd2FsbGV0O1xuICAgICAgICAgICAgaWYgKCF3YWxsZXQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoYXdhaXQgd2FsbGV0LnNpZ25BbGxUcmFuc2FjdGlvbnModHJhbnNhY3Rpb25zKSkgfHwgdHJhbnNhY3Rpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldFNpZ25UcmFuc2FjdGlvbkVycm9yKGVycm9yPy5tZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgc2lnbk1lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gdGhpcy5fd2FsbGV0O1xuICAgICAgICAgICAgaWYgKCF3YWxsZXQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgc2lnbmF0dXJlIH0gPSBhd2FpdCB3YWxsZXQuc2lnbk1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRTaWduTWVzc2FnZUVycm9yKGVycm9yPy5tZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZGFwdGVyLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-tokenpocket@0.4.19_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-tokenpocket/lib/esm/adapter.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-tokenpocket@0.4.19_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-tokenpocket/lib/esm/index.js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@solana+wallet-adapter-tokenpocket@0.4.19_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-tokenpocket/lib/esm/index.js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TokenPocketWalletAdapter: () => (/* reexport safe */ _adapter_js__WEBPACK_IMPORTED_MODULE_0__.TokenPocketWalletAdapter),\n/* harmony export */   TokenPocketWalletName: () => (/* reexport safe */ _adapter_js__WEBPACK_IMPORTED_MODULE_0__.TokenPocketWalletName)\n/* harmony export */ });\n/* harmony import */ var _adapter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter.js */ \"(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-tokenpocket@0.4.19_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-tokenpocket/lib/esm/adapter.js\");\n\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNvbGFuYSt3YWxsZXQtYWRhcHRlci10b2tlbnBvY2tldEAwLjQuMTlfQHNvbGFuYSt3ZWIzLmpzQDEuOTguMF9idWZmZXJ1dGlsQDQuMC44X3V0Zi04LXZhbGlkYXRlQDUuMC4xMF8vbm9kZV9tb2R1bGVzL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItdG9rZW5wb2NrZXQvbGliL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkI7QUFDN0IiLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL2l3by1wbGF0Zm9ybS9ub2RlX21vZHVsZXMvLnBucG0vQHNvbGFuYSt3YWxsZXQtYWRhcHRlci10b2tlbnBvY2tldEAwLjQuMTlfQHNvbGFuYSt3ZWIzLmpzQDEuOTguMF9idWZmZXJ1dGlsQDQuMC44X3V0Zi04LXZhbGlkYXRlQDUuMC4xMF8vbm9kZV9tb2R1bGVzL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItdG9rZW5wb2NrZXQvbGliL2VzbS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2FkYXB0ZXIuanMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-tokenpocket@0.4.19_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-tokenpocket/lib/esm/index.js\n");

/***/ })

};
;