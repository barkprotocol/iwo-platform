"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@solana+wallet-adapter-walletconnect@0.1.16_@react-native-async-storage+async-storage@1.24.0__waclfpxyzk33kg3k2iwzufpxge";
exports.ids = ["vendor-chunks/@solana+wallet-adapter-walletconnect@0.1.16_@react-native-async-storage+async-storage@1.24.0__waclfpxyzk33kg3k2iwzufpxge"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-walletconnect@0.1.16_@react-native-async-storage+async-storage@1.24.0__waclfpxyzk33kg3k2iwzufpxge/node_modules/@solana/wallet-adapter-walletconnect/lib/esm/adapter.js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@solana+wallet-adapter-walletconnect@0.1.16_@react-native-async-storage+async-storage@1.24.0__waclfpxyzk33kg3k2iwzufpxge/node_modules/@solana/wallet-adapter-walletconnect/lib/esm/adapter.js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WalletConnectWalletAdapter: () => (/* binding */ WalletConnectWalletAdapter),\n/* harmony export */   WalletConnectWalletName: () => (/* binding */ WalletConnectWalletName)\n/* harmony export */ });\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-base@0.9.23_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-base/lib/esm/signer.js\");\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-base@0.9.23_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-base/lib/esm/adapter.js\");\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-base@0.9.23_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-base/lib/esm/errors.js\");\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-base@0.9.23_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-base/lib/esm/types.js\");\n\nconst WalletConnectWalletName = 'WalletConnect';\nclass WalletConnectWalletAdapter extends _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.BaseSignerWalletAdapter {\n    constructor(config) {\n        super();\n        this.name = WalletConnectWalletName;\n        this.url = 'https://walletconnect.org';\n        this.icon = 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4NSIgdmlld0JveD0iMCAwIDMwMCAxODUiIHdpZHRoPSIzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTYxLjQzODU0MjkgMzYuMjU2MjYxMmM0OC45MTEyMjQxLTQ3Ljg4ODE2NjMgMTI4LjIxMTk4NzEtNDcuODg4MTY2MyAxNzcuMTIzMjA5MSAwbDUuODg2NTQ1IDUuNzYzNDE3NGMyLjQ0NTU2MSAyLjM5NDQwODEgMi40NDU1NjEgNi4yNzY1MTEyIDAgOC42NzA5MjA0bC0yMC4xMzY2OTUgMTkuNzE1NTAzYy0xLjIyMjc4MSAxLjE5NzIwNTEtMy4yMDUzIDEuMTk3MjA1MS00LjQyODA4MSAwbC04LjEwMDU4NC03LjkzMTE0NzljLTM0LjEyMTY5Mi0zMy40MDc5ODE3LTg5LjQ0Mzg4Ni0zMy40MDc5ODE3LTEyMy41NjU1Nzg4IDBsLTguNjc1MDU2MiA4LjQ5MzYwNTFjLTEuMjIyNzgxNiAxLjE5NzIwNDEtMy4yMDUzMDEgMS4xOTcyMDQxLTQuNDI4MDgwNiAwbC0yMC4xMzY2OTQ5LTE5LjcxNTUwMzFjLTIuNDQ1NTYxMi0yLjM5NDQwOTItMi40NDU1NjEyLTYuMjc2NTEyMiAwLTguNjcwOTIwNHptMjE4Ljc2Nzc5NjEgNDAuNzczNzQ0OSAxNy45MjE2OTcgMTcuNTQ2ODk3YzIuNDQ1NTQ5IDIuMzk0Mzk2OSAyLjQ0NTU2MyA2LjI3NjQ3NjkuMDAwMDMxIDguNjcwODg5OWwtODAuODEwMTcxIDc5LjEyMTEzNGMtMi40NDU1NDQgMi4zOTQ0MjYtNi40MTA1ODIgMi4zOTQ0NTMtOC44NTYxNi4wMDAwNjItLjAwMDAxLS4wMDAwMS0uMDAwMDIyLS4wMDAwMjItLjAwMDAzMi0uMDAwMDMybC01Ny4zNTQxNDMtNTYuMTU0NTcyYy0uNjExMzktLjU5ODYwMi0xLjYwMjY1LS41OTg2MDItMi4yMTQwNCAwLS4wMDAwMDQuMDAwMDA0LS4wMDAwMDcuMDAwMDA4LS4wMDAwMTEuMDAwMDExbC01Ny4zNTI5MjEyIDU2LjE1NDUzMWMtMi40NDU1MzY4IDIuMzk0NDMyLTYuNDEwNTc1NSAyLjM5NDQ3Mi04Ljg1NjE2MTIuMDAwMDg3LS4wMDAwMTQzLS4wMDAwMTQtLjAwMDAyOTYtLjAwMDAyOC0uMDAwMDQ0OS0uMDAwMDQ0bC04MC44MTI0MTk0My03OS4xMjIxODVjLTIuNDQ1NTYwMjEtMi4zOTQ0MDgtMi40NDU1NjAyMS02LjI3NjUxMTUgMC04LjY3MDkxOTdsMTcuOTIxNzI5NjMtMTcuNTQ2ODY3M2MyLjQ0NTU2MDItMi4zOTQ0MDgyIDYuNDEwNTk4OS0yLjM5NDQwODIgOC44NTYxNjAyIDBsNTcuMzU0OTc3NSA1Ni4xNTUzNTdjLjYxMTM5MDguNTk4NjAyIDEuNjAyNjQ5LjU5ODYwMiAyLjIxNDAzOTggMCAuMDAwMDA5Mi0uMDAwMDA5LjAwMDAxNzQtLjAwMDAxNy4wMDAwMjY1LS4wMDAwMjRsNTcuMzUyMTAzMS01Ni4xNTUzMzNjMi40NDU1MDUtMi4zOTQ0NjMzIDYuNDEwNTQ0LTIuMzk0NTUzMSA4Ljg1NjE2MS0uMDAwMi4wMDAwMzQuMDAwMDMzNi4wMDAwNjguMDAwMDY3My4wMDAxMDEuMDAwMTAxbDU3LjM1NDkwMiA1Ni4xNTU0MzJjLjYxMTM5LjU5ODYwMSAxLjYwMjY1LjU5ODYwMSAyLjIxNDA0IDBsNTcuMzUzOTc1LTU2LjE1NDMyNDljMi40NDU1NjEtMi4zOTQ0MDkyIDYuNDEwNTk5LTIuMzk0NDA5MiA4Ljg1NjE2IDB6IiBmaWxsPSIjM2I5OWZjIi8+PC9zdmc+';\n        // V0 transactions are supported via the `transaction` parameter, and is off-spec.\n        // Legacy transactions have these [parameters](https://docs.walletconnect.com/2.0/advanced/rpc-reference/solana-rpc#solana_signtransaction)\n        this.supportedTransactionVersions = new Set(['legacy', 0]);\n        this._readyState = typeof window === 'undefined' ? _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletReadyState.Unsupported : _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletReadyState.Loadable;\n        this._disconnected = () => {\n            const wallet = this._wallet;\n            if (wallet) {\n                wallet.client.off('session_delete', this._disconnected);\n                this._wallet = null;\n                this._publicKey = null;\n                this.emit('error', new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletDisconnectedError());\n                this.emit('disconnect');\n            }\n        };\n        this._publicKey = null;\n        this._connecting = false;\n        this._wallet = null;\n        this._config = config;\n    }\n    get publicKey() {\n        return this._publicKey;\n    }\n    get connecting() {\n        return this._connecting;\n    }\n    get readyState() {\n        return this._readyState;\n    }\n    async connect() {\n        try {\n            if (this.connected || this.connecting)\n                return;\n            if (this._readyState !== _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletReadyState.Loadable)\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletNotReadyError();\n            this._connecting = true;\n            let WalletConnectClass;\n            let WCChainID;\n            try {\n                ({ WalletConnectWallet: WalletConnectClass, WalletConnectChainID: WCChainID } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/inherits@2.0.4\"), __webpack_require__.e(\"vendor-chunks/elliptic@6.6.1\"), __webpack_require__.e(\"vendor-chunks/bn.js@4.12.1\"), __webpack_require__.e(\"vendor-chunks/hash.js@1.1.7\"), __webpack_require__.e(\"vendor-chunks/tslib@1.14.1\"), __webpack_require__.e(\"vendor-chunks/hmac-drbg@1.0.1\"), __webpack_require__.e(\"vendor-chunks/brorand@1.1.0\"), __webpack_require__.e(\"vendor-chunks/minimalistic-crypto-utils@1.0.1\"), __webpack_require__.e(\"vendor-chunks/minimalistic-assert@1.0.1\"), __webpack_require__.e(\"vendor-chunks/isarray@2.0.5\"), __webpack_require__.e(\"vendor-chunks/qrcode@1.4.4\"), __webpack_require__.e(\"vendor-chunks/multiformats@9.9.0\"), __webpack_require__.e(\"vendor-chunks/pngjs@3.4.0\"), __webpack_require__.e(\"vendor-chunks/pino@7.11.0\"), __webpack_require__.e(\"vendor-chunks/ws@7.5.10_bufferutil@4.0.8_utf-8-validate@5.0.10\"), __webpack_require__.e(\"vendor-chunks/@walletconnect+time@1.0.2\"), __webpack_require__.e(\"vendor-chunks/uint8arrays@3.1.0\"), __webpack_require__.e(\"vendor-chunks/@walletconnect+jsonrpc-utils@1.0.8\"), __webpack_require__.e(\"vendor-chunks/fast-redact@3.5.0\"), __webpack_require__.e(\"vendor-chunks/@walletconnect+browser-utils@1.8.0\"), __webpack_require__.e(\"vendor-chunks/@walletconnect+relay-auth@1.0.4\"), __webpack_require__.e(\"vendor-chunks/pino-std-serializers@4.0.0\"), __webpack_require__.e(\"vendor-chunks/@stablelib+random@1.0.2\"), __webpack_require__.e(\"vendor-chunks/@jnwng+walletconnect-solana@0.2.0_@react-native-async-storage+async-storage@1.24.0_react-nati_ioinbdgdgocy5d27aiqbgt57by\"), __webpack_require__.e(\"vendor-chunks/thread-stream@0.15.2\"), __webpack_require__.e(\"vendor-chunks/preact@10.4.1\"), __webpack_require__.e(\"vendor-chunks/@walletconnect+environment@1.0.1\"), __webpack_require__.e(\"vendor-chunks/@ethersproject+signing-key@5.7.0\"), __webpack_require__.e(\"vendor-chunks/unstorage@1.14.0_idb-keyval@6.2.1\"), __webpack_require__.e(\"vendor-chunks/@walletconnect+events@1.0.1\"), __webpack_require__.e(\"vendor-chunks/@ethersproject+transactions@5.7.0\"), __webpack_require__.e(\"vendor-chunks/@ethersproject+strings@5.7.0\"), __webpack_require__.e(\"vendor-chunks/@ethersproject+rlp@5.7.0\"), __webpack_require__.e(\"vendor-chunks/@ethersproject+properties@5.7.0\"), __webpack_require__.e(\"vendor-chunks/@ethersproject+logger@5.7.0\"), __webpack_require__.e(\"vendor-chunks/@ethersproject+bytes@5.7.0\"), __webpack_require__.e(\"vendor-chunks/@ethersproject+bignumber@5.7.0\"), __webpack_require__.e(\"vendor-chunks/@ethersproject+address@5.7.0\"), __webpack_require__.e(\"vendor-chunks/idb-keyval@6.2.1\"), __webpack_require__.e(\"vendor-chunks/destr@2.0.3\"), __webpack_require__.e(\"vendor-chunks/sonic-boom@2.8.0\"), __webpack_require__.e(\"vendor-chunks/toggle-selection@1.0.6\"), __webpack_require__.e(\"vendor-chunks/strict-uri-encode@2.0.0\"), __webpack_require__.e(\"vendor-chunks/split-on-first@1.1.0\"), __webpack_require__.e(\"vendor-chunks/safe-stable-stringify@2.5.0\"), __webpack_require__.e(\"vendor-chunks/quick-format-unescaped@4.0.4\"), __webpack_require__.e(\"vendor-chunks/query-string@7.1.3\"), __webpack_require__.e(\"vendor-chunks/process-warning@1.0.0\"), __webpack_require__.e(\"vendor-chunks/on-exit-leak-free@0.2.0\"), __webpack_require__.e(\"vendor-chunks/lodash.isequal@4.5.0\"), __webpack_require__.e(\"vendor-chunks/js-sha3@0.8.0\"), __webpack_require__.e(\"vendor-chunks/filter-obj@1.1.0\"), __webpack_require__.e(\"vendor-chunks/detect-browser@5.3.0\"), __webpack_require__.e(\"vendor-chunks/detect-browser@5.2.0\"), __webpack_require__.e(\"vendor-chunks/decode-uri-component@0.2.2\"), __webpack_require__.e(\"vendor-chunks/copy-to-clipboard@3.3.3\"), __webpack_require__.e(\"vendor-chunks/buffer-from@1.1.2\"), __webpack_require__.e(\"vendor-chunks/buffer-fill@1.0.0\"), __webpack_require__.e(\"vendor-chunks/buffer-alloc@1.2.0\"), __webpack_require__.e(\"vendor-chunks/buffer-alloc-unsafe@1.1.0\"), __webpack_require__.e(\"vendor-chunks/atomic-sleep@1.0.0\"), __webpack_require__.e(\"vendor-chunks/@walletconnect+window-metadata@1.0.1\"), __webpack_require__.e(\"vendor-chunks/@walletconnect+window-metadata@1.0.0\"), __webpack_require__.e(\"vendor-chunks/@walletconnect+window-getters@1.0.1\"), __webpack_require__.e(\"vendor-chunks/@walletconnect+window-getters@1.0.0\"), __webpack_require__.e(\"vendor-chunks/@walletconnect+utils@2.17.3_@react-native-async-storage+async-storage@1.24.0_react-native@0.7_s252bfwxtq5vq2uomopfdat5i4\"), __webpack_require__.e(\"vendor-chunks/@walletconnect+types@2.17.3_@react-native-async-storage+async-storage@1.24.0_react-native@0.7_qmomdiifgrqdduddngdgs3slcm\"), __webpack_require__.e(\"vendor-chunks/@walletconnect+sign-client@2.17.3_@react-native-async-storage+async-storage@1.24.0_react-nati_m34b64qedclwzfsxvz22tzpafe\"), __webpack_require__.e(\"vendor-chunks/@walletconnect+safe-json@1.0.2\"), __webpack_require__.e(\"vendor-chunks/@walletconnect+safe-json@1.0.0\"), __webpack_require__.e(\"vendor-chunks/@walletconnect+relay-api@1.0.11\"), __webpack_require__.e(\"vendor-chunks/@walletconnect+qrcode-modal@1.8.0\"), __webpack_require__.e(\"vendor-chunks/@walletconnect+logger@2.1.2\"), __webpack_require__.e(\"vendor-chunks/@walletconnect+keyvaluestorage@1.1.1_@react-native-async-storage+async-storage@1.24.0_react-n_zsj35szipp4tjmnbqsngirsheq\"), __webpack_require__.e(\"vendor-chunks/@walletconnect+jsonrpc-ws-connection@1.0.16_bufferutil@4.0.8_utf-8-validate@5.0.10\"), __webpack_require__.e(\"vendor-chunks/@walletconnect+jsonrpc-types@1.0.4\"), __webpack_require__.e(\"vendor-chunks/@walletconnect+jsonrpc-provider@1.0.14\"), __webpack_require__.e(\"vendor-chunks/@walletconnect+heartbeat@1.2.2\"), __webpack_require__.e(\"vendor-chunks/@walletconnect+core@2.17.3_@react-native-async-storage+async-storage@1.24.0_react-native@0.76_s47g2unuoqkjestoikiwqqvxlm\"), __webpack_require__.e(\"vendor-chunks/@stablelib+x25519@1.0.3\"), __webpack_require__.e(\"vendor-chunks/@stablelib+wipe@1.0.1\"), __webpack_require__.e(\"vendor-chunks/@stablelib+sha512@1.0.1\"), __webpack_require__.e(\"vendor-chunks/@stablelib+sha256@1.0.1\"), __webpack_require__.e(\"vendor-chunks/@stablelib+poly1305@1.0.1\"), __webpack_require__.e(\"vendor-chunks/@stablelib+int@1.0.1\"), __webpack_require__.e(\"vendor-chunks/@stablelib+hmac@1.0.1\"), __webpack_require__.e(\"vendor-chunks/@stablelib+hkdf@1.0.1\"), __webpack_require__.e(\"vendor-chunks/@stablelib+hash@1.0.1\"), __webpack_require__.e(\"vendor-chunks/@stablelib+ed25519@1.0.3\"), __webpack_require__.e(\"vendor-chunks/@stablelib+constant-time@1.0.1\"), __webpack_require__.e(\"vendor-chunks/@stablelib+chacha@1.0.1\"), __webpack_require__.e(\"vendor-chunks/@stablelib+chacha20poly1305@1.0.1\"), __webpack_require__.e(\"vendor-chunks/@stablelib+binary@1.0.1\"), __webpack_require__.e(\"vendor-chunks/@ethersproject+keccak256@5.7.0\"), __webpack_require__.e(\"vendor-chunks/@ethersproject+hash@5.7.0\"), __webpack_require__.e(\"vendor-chunks/@ethersproject+constants@5.7.0\")]).then(__webpack_require__.bind(__webpack_require__, /*! @jnwng/walletconnect-solana */ \"(ssr)/./node_modules/.pnpm/@jnwng+walletconnect-solana@0.2.0_@react-native-async-storage+async-storage@1.24.0_react-nati_ioinbdgdgocy5d27aiqbgt57by/node_modules/@jnwng/walletconnect-solana/lib/esm/index.js\")));\n            }\n            catch (error) {\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletLoadError(error?.message, error);\n            }\n            let wallet;\n            let publicKey;\n            try {\n                wallet = new WalletConnectClass({\n                    network: this._config.network === _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletAdapterNetwork.Mainnet ? WCChainID.Mainnet : WCChainID.Devnet,\n                    options: this._config.options,\n                });\n                ({ publicKey } = await wallet.connect());\n            }\n            catch (error) {\n                if (error.constructor.name === 'QRCodeModalError')\n                    throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletWindowClosedError();\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletConnectionError(error?.message, error);\n            }\n            wallet.client.on('session_delete', this._disconnected);\n            this._wallet = wallet;\n            this._publicKey = publicKey;\n            this.emit('connect', publicKey);\n        }\n        catch (error) {\n            this.emit('error', error);\n            throw error;\n        }\n        finally {\n            this._connecting = false;\n        }\n    }\n    async disconnect() {\n        const wallet = this._wallet;\n        if (wallet) {\n            wallet.client.off('session_delete', this._disconnected);\n            this._wallet = null;\n            this._publicKey = null;\n            try {\n                await wallet.disconnect();\n            }\n            catch (error) {\n                this.emit('error', new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletDisconnectionError(error?.message, error));\n            }\n        }\n        this.emit('disconnect');\n    }\n    async signTransaction(transaction) {\n        try {\n            const wallet = this._wallet;\n            if (!wallet)\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletNotConnectedError();\n            try {\n                return (await wallet.signTransaction(transaction));\n            }\n            catch (error) {\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletSignTransactionError(error?.message, error);\n            }\n        }\n        catch (error) {\n            this.emit('error', error);\n            throw error;\n        }\n    }\n    async signMessage(message) {\n        try {\n            const wallet = this._wallet;\n            if (!wallet)\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletNotConnectedError();\n            try {\n                return await wallet.signMessage(message);\n            }\n            catch (error) {\n                throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletSignMessageError(error?.message, error);\n            }\n        }\n        catch (error) {\n            this.emit('error', error);\n            throw error;\n        }\n    }\n}\n//# sourceMappingURL=adapter.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNvbGFuYSt3YWxsZXQtYWRhcHRlci13YWxsZXRjb25uZWN0QDAuMS4xNl9AcmVhY3QtbmF0aXZlLWFzeW5jLXN0b3JhZ2UrYXN5bmMtc3RvcmFnZUAxLjI0LjBfX3dhY2xmcHh5emszM2tnM2syaXd6dWZweGdlL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldGNvbm5lY3QvbGliL2VzbS9hZGFwdGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFxVTtBQUM5VDtBQUNBLHlDQUF5QyxnRkFBdUI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELHlFQUFnQixlQUFlLHlFQUFnQjtBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZ0ZBQXVCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx5RUFBZ0I7QUFDckQsMEJBQTBCLDRFQUFtQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyRUFBMkUsUUFBUSxnaE9BQXFDO0FBQzNJO0FBQ0E7QUFDQSwwQkFBMEIsd0VBQWU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCw2RUFBb0I7QUFDMUU7QUFDQSxpQkFBaUI7QUFDakIsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdGQUF1QjtBQUNyRCwwQkFBMEIsOEVBQXFCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxpRkFBd0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnRkFBdUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUZBQTBCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0ZBQXVCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLCtFQUFzQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL2l3by1wbGF0Zm9ybS9ub2RlX21vZHVsZXMvLnBucG0vQHNvbGFuYSt3YWxsZXQtYWRhcHRlci13YWxsZXRjb25uZWN0QDAuMS4xNl9AcmVhY3QtbmF0aXZlLWFzeW5jLXN0b3JhZ2UrYXN5bmMtc3RvcmFnZUAxLjI0LjBfX3dhY2xmcHh5emszM2tnM2syaXd6dWZweGdlL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldGNvbm5lY3QvbGliL2VzbS9hZGFwdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VTaWduZXJXYWxsZXRBZGFwdGVyLCBXYWxsZXRBZGFwdGVyTmV0d29yaywgV2FsbGV0Q29ubmVjdGlvbkVycm9yLCBXYWxsZXREaXNjb25uZWN0ZWRFcnJvciwgV2FsbGV0RGlzY29ubmVjdGlvbkVycm9yLCBXYWxsZXRMb2FkRXJyb3IsIFdhbGxldE5vdENvbm5lY3RlZEVycm9yLCBXYWxsZXROb3RSZWFkeUVycm9yLCBXYWxsZXRSZWFkeVN0YXRlLCBXYWxsZXRTaWduTWVzc2FnZUVycm9yLCBXYWxsZXRTaWduVHJhbnNhY3Rpb25FcnJvciwgV2FsbGV0V2luZG93Q2xvc2VkRXJyb3IsIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1iYXNlJztcbmV4cG9ydCBjb25zdCBXYWxsZXRDb25uZWN0V2FsbGV0TmFtZSA9ICdXYWxsZXRDb25uZWN0JztcbmV4cG9ydCBjbGFzcyBXYWxsZXRDb25uZWN0V2FsbGV0QWRhcHRlciBleHRlbmRzIEJhc2VTaWduZXJXYWxsZXRBZGFwdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gV2FsbGV0Q29ubmVjdFdhbGxldE5hbWU7XG4gICAgICAgIHRoaXMudXJsID0gJ2h0dHBzOi8vd2FsbGV0Y29ubmVjdC5vcmcnO1xuICAgICAgICB0aGlzLmljb24gPSAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCb1pXbG5hSFE5SWpFNE5TSWdkbWxsZDBKdmVEMGlNQ0F3SURNd01DQXhPRFVpSUhkcFpIUm9QU0l6TURBaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BIQmhkR2dnWkQwaWJUWXhMalF6T0RVME1qa2dNell1TWpVMk1qWXhNbU0wT0M0NU1URXlNalF4TFRRM0xqZzRPREUyTmpNZ01USTRMakl4TVRrNE56RXRORGN1T0RnNE1UWTJNeUF4TnpjdU1USXpNakE1TVNBd2JEVXVPRGcyTlRRMUlEVXVOell6TkRFM05HTXlMalEwTlRVMk1TQXlMak01TkRRd09ERWdNaTQwTkRVMU5qRWdOaTR5TnpZMU1URXlJREFnT0M0Mk56QTVNakEwYkMweU1DNHhNelkyT1RVZ01Ua3VOekUxTlRBell5MHhMakl5TWpjNE1TQXhMakU1TnpJd05URXRNeTR5TURVeklERXVNVGszTWpBMU1TMDBMalF5T0RBNE1TQXdiQzA0TGpFd01EVTROQzAzTGprek1URTBOemxqTFRNMExqRXlNVFk1TWkwek15NDBNRGM1T0RFM0xUZzVMalEwTXpnNE5pMHpNeTQwTURjNU9ERTNMVEV5TXk0MU5qVTFOemc0SURCc0xUZ3VOamMxTURVMk1pQTRMalE1TXpZd05URmpMVEV1TWpJeU56Z3hOaUF4TGpFNU56SXdOREV0TXk0eU1EVXpNREVnTVM0eE9UY3lNRFF4TFRRdU5ESTRNRGd3TmlBd2JDMHlNQzR4TXpZMk9UUTVMVEU1TGpjeE5UVXdNekZqTFRJdU5EUTFOVFl4TWkweUxqTTVORFF3T1RJdE1pNDBORFUxTmpFeUxUWXVNamMyTlRFeU1pQXdMVGd1Tmpjd09USXdOSHB0TWpFNExqYzJOemM1TmpFZ05EQXVOemN6TnpRME9TQXhOeTQ1TWpFMk9UY2dNVGN1TlRRMk9EazNZekl1TkRRMU5UUTVJREl1TXprME16azJPU0F5TGpRME5UVTJNeUEyTGpJM05qUTNOamt1TURBd01ETXhJRGd1Tmpjd09EZzVPV3d0T0RBdU9ERXdNVGN4SURjNUxqRXlNVEV6TkdNdE1pNDBORFUxTkRRZ01pNHpPVFEwTWpZdE5pNDBNVEExT0RJZ01pNHpPVFEwTlRNdE9DNDROVFl4Tmk0d01EQXdOakl0TGpBd01EQXhMUzR3TURBd01TMHVNREF3TURJeUxTNHdNREF3TWpJdExqQXdNREF6TWkwdU1EQXdNRE15YkMwMU55NHpOVFF4TkRNdE5UWXVNVFUwTlRjeVl5MHVOakV4TXprdExqVTVPRFl3TWkweExqWXdNalkxTFM0MU9UZzJNREl0TWk0eU1UUXdOQ0F3TFM0d01EQXdNRFF1TURBd01EQTBMUzR3TURBd01EY3VNREF3TURBNExTNHdNREF3TVRFdU1EQXdNREV4YkMwMU55NHpOVEk1TWpFeUlEVTJMakUxTkRVek1XTXRNaTQwTkRVMU16WTRJREl1TXprME5ETXlMVFl1TkRFd05UYzFOU0F5TGpNNU5EUTNNaTA0TGpnMU5qRTJNVEl1TURBd01EZzNMUzR3TURBd01UUXpMUzR3TURBd01UUXRMakF3TURBeU9UWXRMakF3TURBeU9DMHVNREF3TURRME9TMHVNREF3TURRMGJDMDRNQzQ0TVRJME1UazBNeTAzT1M0eE1qSXhPRFZqTFRJdU5EUTFOVFl3TWpFdE1pNHpPVFEwTURndE1pNDBORFUxTmpBeU1TMDJMakkzTmpVeE1UVWdNQzA0TGpZM01Ea3hPVGRzTVRjdU9USXhOekk1TmpNdE1UY3VOVFEyT0RZM00yTXlMalEwTlRVMk1ESXRNaTR6T1RRME1EZ3lJRFl1TkRFd05UazRPUzB5TGpNNU5EUXdPRElnT0M0NE5UWXhOakF5SURCc05UY3VNelUwT1RjM05TQTFOaTR4TlRVek5UZGpMall4TVRNNU1EZ3VOVGs0TmpBeUlERXVOakF5TmpRNUxqVTVPRFl3TWlBeUxqSXhOREF6T1RnZ01DQXVNREF3TURBNU1pMHVNREF3TURBNUxqQXdNREF4TnpRdExqQXdNREF4Tnk0d01EQXdNalkxTFM0d01EQXdNalJzTlRjdU16VXlNVEF6TVMwMU5pNHhOVFV6TXpOak1pNDBORFUxTURVdE1pNHpPVFEwTmpNeklEWXVOREV3TlRRMExUSXVNemswTlRVek1TQTRMamcxTmpFMk1TMHVNREF3TWk0d01EQXdNelF1TURBd01ETXpOaTR3TURBd05qZ3VNREF3TURZM015NHdNREF4TURFdU1EQXdNVEF4YkRVM0xqTTFORGt3TWlBMU5pNHhOVFUwTXpKakxqWXhNVE01TGpVNU9EWXdNU0F4TGpZd01qWTFMalU1T0RZd01TQXlMakl4TkRBMElEQnNOVGN1TXpVek9UYzFMVFUyTGpFMU5ETXlORGxqTWk0ME5EVTFOakV0TWk0ek9UUTBNRGt5SURZdU5ERXdOVGs1TFRJdU16azBOREE1TWlBNExqZzFOakUySURCNklpQm1hV3hzUFNJak0ySTVPV1pqSWk4K1BDOXpkbWMrJztcbiAgICAgICAgLy8gVjAgdHJhbnNhY3Rpb25zIGFyZSBzdXBwb3J0ZWQgdmlhIHRoZSBgdHJhbnNhY3Rpb25gIHBhcmFtZXRlciwgYW5kIGlzIG9mZi1zcGVjLlxuICAgICAgICAvLyBMZWdhY3kgdHJhbnNhY3Rpb25zIGhhdmUgdGhlc2UgW3BhcmFtZXRlcnNdKGh0dHBzOi8vZG9jcy53YWxsZXRjb25uZWN0LmNvbS8yLjAvYWR2YW5jZWQvcnBjLXJlZmVyZW5jZS9zb2xhbmEtcnBjI3NvbGFuYV9zaWdudHJhbnNhY3Rpb24pXG4gICAgICAgIHRoaXMuc3VwcG9ydGVkVHJhbnNhY3Rpb25WZXJzaW9ucyA9IG5ldyBTZXQoWydsZWdhY3knLCAwXSk7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IFdhbGxldFJlYWR5U3RhdGUuVW5zdXBwb3J0ZWQgOiBXYWxsZXRSZWFkeVN0YXRlLkxvYWRhYmxlO1xuICAgICAgICB0aGlzLl9kaXNjb25uZWN0ZWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3YWxsZXQgPSB0aGlzLl93YWxsZXQ7XG4gICAgICAgICAgICBpZiAod2FsbGV0KSB7XG4gICAgICAgICAgICAgICAgd2FsbGV0LmNsaWVudC5vZmYoJ3Nlc3Npb25fZGVsZXRlJywgdGhpcy5fZGlzY29ubmVjdGVkKTtcbiAgICAgICAgICAgICAgICB0aGlzLl93YWxsZXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuX3B1YmxpY0tleSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBXYWxsZXREaXNjb25uZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Rpc2Nvbm5lY3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fcHVibGljS2V5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl93YWxsZXQgPSBudWxsO1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgfVxuICAgIGdldCBwdWJsaWNLZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wdWJsaWNLZXk7XG4gICAgfVxuICAgIGdldCBjb25uZWN0aW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29ubmVjdGluZztcbiAgICB9XG4gICAgZ2V0IHJlYWR5U3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWFkeVN0YXRlO1xuICAgIH1cbiAgICBhc3luYyBjb25uZWN0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkIHx8IHRoaXMuY29ubmVjdGluZylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAodGhpcy5fcmVhZHlTdGF0ZSAhPT0gV2FsbGV0UmVhZHlTdGF0ZS5Mb2FkYWJsZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Tm90UmVhZHlFcnJvcigpO1xuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGluZyA9IHRydWU7XG4gICAgICAgICAgICBsZXQgV2FsbGV0Q29ubmVjdENsYXNzO1xuICAgICAgICAgICAgbGV0IFdDQ2hhaW5JRDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgKHsgV2FsbGV0Q29ubmVjdFdhbGxldDogV2FsbGV0Q29ubmVjdENsYXNzLCBXYWxsZXRDb25uZWN0Q2hhaW5JRDogV0NDaGFpbklEIH0gPSBhd2FpdCBpbXBvcnQoJ0BqbnduZy93YWxsZXRjb25uZWN0LXNvbGFuYScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRMb2FkRXJyb3IoZXJyb3I/Lm1lc3NhZ2UsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB3YWxsZXQ7XG4gICAgICAgICAgICBsZXQgcHVibGljS2V5O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB3YWxsZXQgPSBuZXcgV2FsbGV0Q29ubmVjdENsYXNzKHtcbiAgICAgICAgICAgICAgICAgICAgbmV0d29yazogdGhpcy5fY29uZmlnLm5ldHdvcmsgPT09IFdhbGxldEFkYXB0ZXJOZXR3b3JrLk1haW5uZXQgPyBXQ0NoYWluSUQuTWFpbm5ldCA6IFdDQ2hhaW5JRC5EZXZuZXQsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMuX2NvbmZpZy5vcHRpb25zLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICh7IHB1YmxpY0tleSB9ID0gYXdhaXQgd2FsbGV0LmNvbm5lY3QoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IuY29uc3RydWN0b3IubmFtZSA9PT0gJ1FSQ29kZU1vZGFsRXJyb3InKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0V2luZG93Q2xvc2VkRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Q29ubmVjdGlvbkVycm9yKGVycm9yPy5tZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3YWxsZXQuY2xpZW50Lm9uKCdzZXNzaW9uX2RlbGV0ZScsIHRoaXMuX2Rpc2Nvbm5lY3RlZCk7XG4gICAgICAgICAgICB0aGlzLl93YWxsZXQgPSB3YWxsZXQ7XG4gICAgICAgICAgICB0aGlzLl9wdWJsaWNLZXkgPSBwdWJsaWNLZXk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Nvbm5lY3QnLCBwdWJsaWNLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IHdhbGxldCA9IHRoaXMuX3dhbGxldDtcbiAgICAgICAgaWYgKHdhbGxldCkge1xuICAgICAgICAgICAgd2FsbGV0LmNsaWVudC5vZmYoJ3Nlc3Npb25fZGVsZXRlJywgdGhpcy5fZGlzY29ubmVjdGVkKTtcbiAgICAgICAgICAgIHRoaXMuX3dhbGxldCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9wdWJsaWNLZXkgPSBudWxsO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCB3YWxsZXQuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBXYWxsZXREaXNjb25uZWN0aW9uRXJyb3IoZXJyb3I/Lm1lc3NhZ2UsIGVycm9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0KCdkaXNjb25uZWN0Jyk7XG4gICAgfVxuICAgIGFzeW5jIHNpZ25UcmFuc2FjdGlvbih0cmFuc2FjdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gdGhpcy5fd2FsbGV0O1xuICAgICAgICAgICAgaWYgKCF3YWxsZXQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoYXdhaXQgd2FsbGV0LnNpZ25UcmFuc2FjdGlvbih0cmFuc2FjdGlvbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldFNpZ25UcmFuc2FjdGlvbkVycm9yKGVycm9yPy5tZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgc2lnbk1lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gdGhpcy5fd2FsbGV0O1xuICAgICAgICAgICAgaWYgKCF3YWxsZXQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB3YWxsZXQuc2lnbk1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0U2lnbk1lc3NhZ2VFcnJvcihlcnJvcj8ubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWRhcHRlci5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-walletconnect@0.1.16_@react-native-async-storage+async-storage@1.24.0__waclfpxyzk33kg3k2iwzufpxge/node_modules/@solana/wallet-adapter-walletconnect/lib/esm/adapter.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-walletconnect@0.1.16_@react-native-async-storage+async-storage@1.24.0__waclfpxyzk33kg3k2iwzufpxge/node_modules/@solana/wallet-adapter-walletconnect/lib/esm/index.js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@solana+wallet-adapter-walletconnect@0.1.16_@react-native-async-storage+async-storage@1.24.0__waclfpxyzk33kg3k2iwzufpxge/node_modules/@solana/wallet-adapter-walletconnect/lib/esm/index.js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WalletConnectWalletAdapter: () => (/* reexport safe */ _adapter_js__WEBPACK_IMPORTED_MODULE_0__.WalletConnectWalletAdapter),\n/* harmony export */   WalletConnectWalletName: () => (/* reexport safe */ _adapter_js__WEBPACK_IMPORTED_MODULE_0__.WalletConnectWalletName)\n/* harmony export */ });\n/* harmony import */ var _adapter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter.js */ \"(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-walletconnect@0.1.16_@react-native-async-storage+async-storage@1.24.0__waclfpxyzk33kg3k2iwzufpxge/node_modules/@solana/wallet-adapter-walletconnect/lib/esm/adapter.js\");\n\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNvbGFuYSt3YWxsZXQtYWRhcHRlci13YWxsZXRjb25uZWN0QDAuMS4xNl9AcmVhY3QtbmF0aXZlLWFzeW5jLXN0b3JhZ2UrYXN5bmMtc3RvcmFnZUAxLjI0LjBfX3dhY2xmcHh5emszM2tnM2syaXd6dWZweGdlL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldGNvbm5lY3QvbGliL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkI7QUFDN0IiLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL2l3by1wbGF0Zm9ybS9ub2RlX21vZHVsZXMvLnBucG0vQHNvbGFuYSt3YWxsZXQtYWRhcHRlci13YWxsZXRjb25uZWN0QDAuMS4xNl9AcmVhY3QtbmF0aXZlLWFzeW5jLXN0b3JhZ2UrYXN5bmMtc3RvcmFnZUAxLjI0LjBfX3dhY2xmcHh5emszM2tnM2syaXd6dWZweGdlL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldGNvbm5lY3QvbGliL2VzbS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2FkYXB0ZXIuanMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@solana+wallet-adapter-walletconnect@0.1.16_@react-native-async-storage+async-storage@1.24.0__waclfpxyzk33kg3k2iwzufpxge/node_modules/@solana/wallet-adapter-walletconnect/lib/esm/index.js\n");

/***/ })

};
;