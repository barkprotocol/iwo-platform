"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@particle-network+solana-wallet@1.3.2_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10__bs58@5.0.0";
exports.ids = ["vendor-chunks/@particle-network+solana-wallet@1.3.2_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10__bs58@5.0.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@particle-network+solana-wallet@1.3.2_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10__bs58@5.0.0/node_modules/@particle-network/solana-wallet/es/index.js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@particle-network+solana-wallet@1.3.2_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10__bs58@5.0.0/node_modules/@particle-network/solana-wallet/es/index.js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ParticleNetwork: () => (/* reexport safe */ _particle_network_auth__WEBPACK_IMPORTED_MODULE_0__.ParticleNetwork),\n/* harmony export */   SolanaWallet: () => (/* binding */ SolanaWallet)\n/* harmony export */ });\n/* harmony import */ var _particle_network_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @particle-network/auth */ \"(ssr)/./node_modules/.pnpm/@particle-network+auth@1.3.1/node_modules/@particle-network/auth/es/index.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/web3.js */ \"(ssr)/./node_modules/.pnpm/@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.esm.js\");\n/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bs58 */ \"(ssr)/./node_modules/.pnpm/bs58@5.0.0/node_modules/bs58/index.js\");\n/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! buffer */ \"buffer\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! events */ \"events\");\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __esm = (fn, res) => function __init() {\n  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;\n};\nvar __export = (target, all) => {\n  for (var name2 in all)\n    __defProp(target, name2, { get: all[name2], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __async = (__this, __arguments, generator) => {\n  return new Promise((resolve, reject) => {\n    var fulfilled = (value) => {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    };\n    var rejected = (value) => {\n      try {\n        step(generator.throw(value));\n      } catch (e) {\n        reject(e);\n      }\n    };\n    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);\n    step((generator = generator.apply(__this, __arguments)).next());\n  });\n};\n\n// package.json\nvar package_exports = {};\n__export(package_exports, {\n  default: () => package_default,\n  dependencies: () => dependencies,\n  devDependencies: () => devDependencies,\n  files: () => files,\n  gitHead: () => gitHead,\n  license: () => license,\n  main: () => main,\n  module: () => module,\n  name: () => name,\n  peerDependencies: () => peerDependencies,\n  publishConfig: () => publishConfig,\n  scripts: () => scripts,\n  type: () => type,\n  types: () => types,\n  version: () => version\n});\nvar name, version, files, type, main, module, types, license, publishConfig, dependencies, peerDependencies, devDependencies, scripts, gitHead, package_default;\nvar init_package = __esm({\n  \"package.json\"() {\n    name = \"@particle-network/solana-wallet\";\n    version = \"1.3.2\";\n    files = [\n      \"es\",\n      \"lib\",\n      \"LICENSE\"\n    ];\n    type = \"module\";\n    main = \"lib/index.js\";\n    module = \"es/index.js\";\n    types = \"lib/types/index.d.ts\";\n    license = \"Apache-2.0\";\n    publishConfig = {\n      access: \"public\"\n    };\n    dependencies = {\n      \"@particle-network/auth\": \"^1.3.1\"\n    };\n    peerDependencies = {\n      \"@solana/web3.js\": \"^1.50.1\",\n      bs58: \"^4.0.1\"\n    };\n    devDependencies = {\n      \"@solana/web3.js\": \"^1.50.1\",\n      \"@types/bs58\": \"^4.0.1\",\n      bs58: \"^4.0.1\",\n      \"ts-loader\": \"^9.3.1\",\n      \"webpack-cli\": \"^4.10.0\"\n    };\n    scripts = {\n      clean: \"shx rm -rf lib/* && shx rm -rf es/*\",\n      package: `shx echo '{ \"type\": \"commonjs\" }' > lib/package.json`,\n      build: \"yarn clean && node ./esBuild.js && tsc --emitDeclarationOnly -p tsconfig.json && yarn package\",\n      \"build:min.js\": \"webpack\",\n      version: \"yarn build\"\n    };\n    gitHead = \"cc999e430ebfb1dd821783f7cf099ddd51f3495a\";\n    package_default = {\n      name,\n      version,\n      files,\n      type,\n      main,\n      module,\n      types,\n      license,\n      publishConfig,\n      dependencies,\n      peerDependencies,\n      devDependencies,\n      scripts,\n      gitHead\n    };\n  }\n});\n\n// src/solana-wallet.ts\n\n\n\n\n\n\n// src/utils.ts\nfunction getVersion() {\n  const packages = (init_package(), __toCommonJS(package_exports));\n  return `web_${packages.version}`;\n}\n\n// src/solana-wallet.ts\nvar SolanaWallet = class {\n  constructor(auth) {\n    this.auth = auth;\n    this.isParticleNetwork = true;\n    this.name = \"Particle\";\n    this.url = \"https://particle.network\";\n    this.icon = \"https://static.particle.network/wallet-icons/Particle.png\";\n    this.events = new events__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();\n    this.auth = auth;\n    this._connecting = false;\n    const userInfo = this.auth.getUserInfo();\n    if (userInfo) {\n      const wallet = userInfo.wallets.find((w) => w.chain_name === \"solana\" && w.public_address.length > 0);\n      if (wallet) {\n        this._publicKey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(wallet.public_address);\n      } else {\n        this._publicKey = null;\n      }\n    } else {\n      this._publicKey = null;\n    }\n    this.auth.on(\"connect\", (userInfo2) => {\n      const wallet = userInfo2.wallets.find((w) => w.chain_name === \"solana\" && w.public_address.length > 0);\n      if (wallet) {\n        this._publicKey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(wallet.public_address);\n        this.events.emit(\"connect\", this._publicKey);\n      }\n    });\n    this.auth.on(\"disconnect\", () => {\n      this._publicKey = null;\n      this.events.emit(\"disconnect\");\n    });\n    if (typeof window !== \"undefined\" && window.particle) {\n      window.particle.solanaWallet = this;\n    }\n  }\n  get version() {\n    return getVersion();\n  }\n  on(event, listener) {\n    this.events.on(event, listener);\n  }\n  once(event, listener) {\n    this.events.once(event, listener);\n  }\n  off(event, listener) {\n    this.events.off(event, listener);\n  }\n  removeListener(event, listener) {\n    this.events.removeListener(event, listener);\n  }\n  get connecting() {\n    return this._connecting;\n  }\n  get connected() {\n    return this._publicKey !== null;\n  }\n  get publicKey() {\n    return this._publicKey;\n  }\n  connect(config) {\n    return __async(this, null, function* () {\n      try {\n        this._connecting = true;\n        let wallet = this.auth.getWallet();\n        if (wallet) {\n          this._publicKey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(wallet.public_address);\n          return Promise.resolve();\n        }\n        yield this.auth.login(config);\n        wallet = this.auth.getWallet();\n        if (wallet) {\n          this._publicKey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(wallet.public_address);\n          return Promise.resolve();\n        } else {\n          return Promise.reject(\"wallet create failed\");\n        }\n      } catch (e) {\n        return Promise.reject(e);\n      } finally {\n        this._connecting = false;\n      }\n    });\n  }\n  disconnect() {\n    return __async(this, null, function* () {\n      yield this.auth.logout();\n      this._publicKey = null;\n      return Promise.resolve();\n    });\n  }\n  signTransaction(transaction) {\n    return __async(this, null, function* () {\n      const signature = yield this.auth.sign(\n        \"signTransaction\",\n        bs58__WEBPACK_IMPORTED_MODULE_2__.encode(transaction.serialize({ requireAllSignatures: false, verifySignatures: false }))\n      );\n      return _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Transaction.from(buffer__WEBPACK_IMPORTED_MODULE_3__.Buffer.from(signature, \"base64\"));\n    });\n  }\n  signAllTransactions(transactions) {\n    return __async(this, null, function* () {\n      const signatures = yield this.auth.signAllTransactions(\n        transactions.map(\n          (tx) => bs58__WEBPACK_IMPORTED_MODULE_2__.encode(tx.serialize({ requireAllSignatures: false, verifySignatures: false }))\n        )\n      );\n      return signatures.map((signed) => _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Transaction.from(buffer__WEBPACK_IMPORTED_MODULE_3__.Buffer.from(signed, \"base64\")));\n    });\n  }\n  signAndSendTransaction(transaction) {\n    return __async(this, null, function* () {\n      return this.auth.sendTransaction(\n        bs58__WEBPACK_IMPORTED_MODULE_2__.encode(transaction.serialize({ requireAllSignatures: false, verifySignatures: false }))\n      );\n    });\n  }\n  signMessage(message) {\n    return __async(this, null, function* () {\n      const signature = yield this.auth.sign(\"signMessage\", bs58__WEBPACK_IMPORTED_MODULE_2__.encode(message));\n      return buffer__WEBPACK_IMPORTED_MODULE_3__.Buffer.from(signature, \"base64\");\n    });\n  }\n  getConnection(config) {\n    const url = `${(0,_particle_network_auth__WEBPACK_IMPORTED_MODULE_0__.rpcUrl)()}/solana`;\n    return new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Connection(\n      `${url}?chainId=${this.auth.getChainId()}&projectUuid=${this.auth.config.projectId}&projectKey=${this.auth.config.clientKey}`,\n      {\n        commitment: config == null ? void 0 : config.commitment,\n        wsEndpoint: config == null ? void 0 : config.wsEndpoint,\n        httpHeaders: {\n          Authorization: this.auth.basicCredentials()\n        },\n        fetch: config == null ? void 0 : config.fetch,\n        fetchMiddleware: config == null ? void 0 : config.fetchMiddleware,\n        disableRetryOnRateLimit: config == null ? void 0 : config.disableRetryOnRateLimit,\n        confirmTransactionInitialTimeout: config == null ? void 0 : config.confirmTransactionInitialTimeout\n      }\n    );\n  }\n};\n\n// src/index.ts\n\n\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHBhcnRpY2xlLW5ldHdvcmsrc29sYW5hLXdhbGxldEAxLjMuMl9Ac29sYW5hK3dlYjMuanNAMS45OC4wX2J1ZmZlcnV0aWxANC4wLjhfdXRmLTgtdmFsaWRhdGVANS4wLjEwX19iczU4QDUuMC4wL25vZGVfbW9kdWxlcy9AcGFydGljbGUtbmV0d29yay9zb2xhbmEtd2FsbGV0L2VzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbUNBQW1DO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNEZBQTRGO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxrQkFBa0IsYUFBYTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixvQkFBb0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ2dEO0FBQ3FCO0FBQzdDO0FBQ21CO0FBQ0w7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnREFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsc0RBQVM7QUFDdkMsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixzREFBUztBQUN2QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzREFBUztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHNEQUFTO0FBQ3pDO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0NBQVcseUJBQXlCLHNEQUFzRDtBQUNsRztBQUNBLGFBQWEsd0RBQVcsTUFBTSwwQ0FBTztBQUNyQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3Q0FBVyxnQkFBZ0Isc0RBQXNEO0FBQ25HO0FBQ0E7QUFDQSx3Q0FBd0Msd0RBQVcsTUFBTSwwQ0FBTztBQUNoRSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdDQUFXLHlCQUF5QixzREFBc0Q7QUFDbEc7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsNERBQTRELHdDQUFXO0FBQ3ZFLGFBQWEsMENBQU87QUFDcEIsS0FBSztBQUNMO0FBQ0E7QUFDQSxtQkFBbUIsOERBQU0sR0FBRztBQUM1QixlQUFlLHVEQUFVO0FBQ3pCLFNBQVMsSUFBSSxXQUFXLHVCQUF1QixlQUFlLDJCQUEyQixjQUFjLDJCQUEyQjtBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDeUQ7QUFJdkQ7QUFDRiIsInNvdXJjZXMiOlsiL3dvcmtzcGFjZXMvaXdvLXBsYXRmb3JtL25vZGVfbW9kdWxlcy8ucG5wbS9AcGFydGljbGUtbmV0d29yaytzb2xhbmEtd2FsbGV0QDEuMy4yX0Bzb2xhbmErd2ViMy5qc0AxLjk4LjBfYnVmZmVydXRpbEA0LjAuOF91dGYtOC12YWxpZGF0ZUA1LjAuMTBfX2JzNThANS4wLjAvbm9kZV9tb2R1bGVzL0BwYXJ0aWNsZS1uZXR3b3JrL3NvbGFuYS13YWxsZXQvZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19lc20gPSAoZm4sIHJlcykgPT4gZnVuY3Rpb24gX19pbml0KCkge1xuICByZXR1cm4gZm4gJiYgKHJlcyA9ICgwLCBmbltfX2dldE93blByb3BOYW1lcyhmbilbMF1dKShmbiA9IDApKSwgcmVzO1xufTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lMiBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZTIsIHsgZ2V0OiBhbGxbbmFtZTJdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xudmFyIF9fYXN5bmMgPSAoX190aGlzLCBfX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgdmFyIGZ1bGZpbGxlZCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgcmVqZWN0ZWQgPSAodmFsdWUpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN0ZXAoZ2VuZXJhdG9yLnRocm93KHZhbHVlKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBzdGVwID0gKHgpID0+IHguZG9uZSA/IHJlc29sdmUoeC52YWx1ZSkgOiBQcm9taXNlLnJlc29sdmUoeC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTtcbiAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkoX190aGlzLCBfX2FyZ3VtZW50cykpLm5leHQoKSk7XG4gIH0pO1xufTtcblxuLy8gcGFja2FnZS5qc29uXG52YXIgcGFja2FnZV9leHBvcnRzID0ge307XG5fX2V4cG9ydChwYWNrYWdlX2V4cG9ydHMsIHtcbiAgZGVmYXVsdDogKCkgPT4gcGFja2FnZV9kZWZhdWx0LFxuICBkZXBlbmRlbmNpZXM6ICgpID0+IGRlcGVuZGVuY2llcyxcbiAgZGV2RGVwZW5kZW5jaWVzOiAoKSA9PiBkZXZEZXBlbmRlbmNpZXMsXG4gIGZpbGVzOiAoKSA9PiBmaWxlcyxcbiAgZ2l0SGVhZDogKCkgPT4gZ2l0SGVhZCxcbiAgbGljZW5zZTogKCkgPT4gbGljZW5zZSxcbiAgbWFpbjogKCkgPT4gbWFpbixcbiAgbW9kdWxlOiAoKSA9PiBtb2R1bGUsXG4gIG5hbWU6ICgpID0+IG5hbWUsXG4gIHBlZXJEZXBlbmRlbmNpZXM6ICgpID0+IHBlZXJEZXBlbmRlbmNpZXMsXG4gIHB1Ymxpc2hDb25maWc6ICgpID0+IHB1Ymxpc2hDb25maWcsXG4gIHNjcmlwdHM6ICgpID0+IHNjcmlwdHMsXG4gIHR5cGU6ICgpID0+IHR5cGUsXG4gIHR5cGVzOiAoKSA9PiB0eXBlcyxcbiAgdmVyc2lvbjogKCkgPT4gdmVyc2lvblxufSk7XG52YXIgbmFtZSwgdmVyc2lvbiwgZmlsZXMsIHR5cGUsIG1haW4sIG1vZHVsZSwgdHlwZXMsIGxpY2Vuc2UsIHB1Ymxpc2hDb25maWcsIGRlcGVuZGVuY2llcywgcGVlckRlcGVuZGVuY2llcywgZGV2RGVwZW5kZW5jaWVzLCBzY3JpcHRzLCBnaXRIZWFkLCBwYWNrYWdlX2RlZmF1bHQ7XG52YXIgaW5pdF9wYWNrYWdlID0gX19lc20oe1xuICBcInBhY2thZ2UuanNvblwiKCkge1xuICAgIG5hbWUgPSBcIkBwYXJ0aWNsZS1uZXR3b3JrL3NvbGFuYS13YWxsZXRcIjtcbiAgICB2ZXJzaW9uID0gXCIxLjMuMlwiO1xuICAgIGZpbGVzID0gW1xuICAgICAgXCJlc1wiLFxuICAgICAgXCJsaWJcIixcbiAgICAgIFwiTElDRU5TRVwiXG4gICAgXTtcbiAgICB0eXBlID0gXCJtb2R1bGVcIjtcbiAgICBtYWluID0gXCJsaWIvaW5kZXguanNcIjtcbiAgICBtb2R1bGUgPSBcImVzL2luZGV4LmpzXCI7XG4gICAgdHlwZXMgPSBcImxpYi90eXBlcy9pbmRleC5kLnRzXCI7XG4gICAgbGljZW5zZSA9IFwiQXBhY2hlLTIuMFwiO1xuICAgIHB1Ymxpc2hDb25maWcgPSB7XG4gICAgICBhY2Nlc3M6IFwicHVibGljXCJcbiAgICB9O1xuICAgIGRlcGVuZGVuY2llcyA9IHtcbiAgICAgIFwiQHBhcnRpY2xlLW5ldHdvcmsvYXV0aFwiOiBcIl4xLjMuMVwiXG4gICAgfTtcbiAgICBwZWVyRGVwZW5kZW5jaWVzID0ge1xuICAgICAgXCJAc29sYW5hL3dlYjMuanNcIjogXCJeMS41MC4xXCIsXG4gICAgICBiczU4OiBcIl40LjAuMVwiXG4gICAgfTtcbiAgICBkZXZEZXBlbmRlbmNpZXMgPSB7XG4gICAgICBcIkBzb2xhbmEvd2ViMy5qc1wiOiBcIl4xLjUwLjFcIixcbiAgICAgIFwiQHR5cGVzL2JzNThcIjogXCJeNC4wLjFcIixcbiAgICAgIGJzNTg6IFwiXjQuMC4xXCIsXG4gICAgICBcInRzLWxvYWRlclwiOiBcIl45LjMuMVwiLFxuICAgICAgXCJ3ZWJwYWNrLWNsaVwiOiBcIl40LjEwLjBcIlxuICAgIH07XG4gICAgc2NyaXB0cyA9IHtcbiAgICAgIGNsZWFuOiBcInNoeCBybSAtcmYgbGliLyogJiYgc2h4IHJtIC1yZiBlcy8qXCIsXG4gICAgICBwYWNrYWdlOiBgc2h4IGVjaG8gJ3sgXCJ0eXBlXCI6IFwiY29tbW9uanNcIiB9JyA+IGxpYi9wYWNrYWdlLmpzb25gLFxuICAgICAgYnVpbGQ6IFwieWFybiBjbGVhbiAmJiBub2RlIC4vZXNCdWlsZC5qcyAmJiB0c2MgLS1lbWl0RGVjbGFyYXRpb25Pbmx5IC1wIHRzY29uZmlnLmpzb24gJiYgeWFybiBwYWNrYWdlXCIsXG4gICAgICBcImJ1aWxkOm1pbi5qc1wiOiBcIndlYnBhY2tcIixcbiAgICAgIHZlcnNpb246IFwieWFybiBidWlsZFwiXG4gICAgfTtcbiAgICBnaXRIZWFkID0gXCJjYzk5OWU0MzBlYmZiMWRkODIxNzgzZjdjZjA5OWRkZDUxZjM0OTVhXCI7XG4gICAgcGFja2FnZV9kZWZhdWx0ID0ge1xuICAgICAgbmFtZSxcbiAgICAgIHZlcnNpb24sXG4gICAgICBmaWxlcyxcbiAgICAgIHR5cGUsXG4gICAgICBtYWluLFxuICAgICAgbW9kdWxlLFxuICAgICAgdHlwZXMsXG4gICAgICBsaWNlbnNlLFxuICAgICAgcHVibGlzaENvbmZpZyxcbiAgICAgIGRlcGVuZGVuY2llcyxcbiAgICAgIHBlZXJEZXBlbmRlbmNpZXMsXG4gICAgICBkZXZEZXBlbmRlbmNpZXMsXG4gICAgICBzY3JpcHRzLFxuICAgICAgZ2l0SGVhZFxuICAgIH07XG4gIH1cbn0pO1xuXG4vLyBzcmMvc29sYW5hLXdhbGxldC50c1xuaW1wb3J0IHsgcnBjVXJsIH0gZnJvbSBcIkBwYXJ0aWNsZS1uZXR3b3JrL2F1dGhcIjtcbmltcG9ydCB7IENvbm5lY3Rpb24sIFB1YmxpY0tleSwgVHJhbnNhY3Rpb24gfSBmcm9tIFwiQHNvbGFuYS93ZWIzLmpzXCI7XG5pbXBvcnQgYnM1OCBmcm9tIFwiYnM1OFwiO1xuaW1wb3J0IHsgQnVmZmVyIGFzIEJ1ZmZlcjIgfSBmcm9tIFwiYnVmZmVyXCI7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiZXZlbnRzXCI7XG5cbi8vIHNyYy91dGlscy50c1xuZnVuY3Rpb24gZ2V0VmVyc2lvbigpIHtcbiAgY29uc3QgcGFja2FnZXMgPSAoaW5pdF9wYWNrYWdlKCksIF9fdG9Db21tb25KUyhwYWNrYWdlX2V4cG9ydHMpKTtcbiAgcmV0dXJuIGB3ZWJfJHtwYWNrYWdlcy52ZXJzaW9ufWA7XG59XG5cbi8vIHNyYy9zb2xhbmEtd2FsbGV0LnRzXG52YXIgU29sYW5hV2FsbGV0ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcihhdXRoKSB7XG4gICAgdGhpcy5hdXRoID0gYXV0aDtcbiAgICB0aGlzLmlzUGFydGljbGVOZXR3b3JrID0gdHJ1ZTtcbiAgICB0aGlzLm5hbWUgPSBcIlBhcnRpY2xlXCI7XG4gICAgdGhpcy51cmwgPSBcImh0dHBzOi8vcGFydGljbGUubmV0d29ya1wiO1xuICAgIHRoaXMuaWNvbiA9IFwiaHR0cHM6Ly9zdGF0aWMucGFydGljbGUubmV0d29yay93YWxsZXQtaWNvbnMvUGFydGljbGUucG5nXCI7XG4gICAgdGhpcy5ldmVudHMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgdGhpcy5hdXRoID0gYXV0aDtcbiAgICB0aGlzLl9jb25uZWN0aW5nID0gZmFsc2U7XG4gICAgY29uc3QgdXNlckluZm8gPSB0aGlzLmF1dGguZ2V0VXNlckluZm8oKTtcbiAgICBpZiAodXNlckluZm8pIHtcbiAgICAgIGNvbnN0IHdhbGxldCA9IHVzZXJJbmZvLndhbGxldHMuZmluZCgodykgPT4gdy5jaGFpbl9uYW1lID09PSBcInNvbGFuYVwiICYmIHcucHVibGljX2FkZHJlc3MubGVuZ3RoID4gMCk7XG4gICAgICBpZiAod2FsbGV0KSB7XG4gICAgICAgIHRoaXMuX3B1YmxpY0tleSA9IG5ldyBQdWJsaWNLZXkod2FsbGV0LnB1YmxpY19hZGRyZXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3B1YmxpY0tleSA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3B1YmxpY0tleSA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuYXV0aC5vbihcImNvbm5lY3RcIiwgKHVzZXJJbmZvMikgPT4ge1xuICAgICAgY29uc3Qgd2FsbGV0ID0gdXNlckluZm8yLndhbGxldHMuZmluZCgodykgPT4gdy5jaGFpbl9uYW1lID09PSBcInNvbGFuYVwiICYmIHcucHVibGljX2FkZHJlc3MubGVuZ3RoID4gMCk7XG4gICAgICBpZiAod2FsbGV0KSB7XG4gICAgICAgIHRoaXMuX3B1YmxpY0tleSA9IG5ldyBQdWJsaWNLZXkod2FsbGV0LnB1YmxpY19hZGRyZXNzKTtcbiAgICAgICAgdGhpcy5ldmVudHMuZW1pdChcImNvbm5lY3RcIiwgdGhpcy5fcHVibGljS2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmF1dGgub24oXCJkaXNjb25uZWN0XCIsICgpID0+IHtcbiAgICAgIHRoaXMuX3B1YmxpY0tleSA9IG51bGw7XG4gICAgICB0aGlzLmV2ZW50cy5lbWl0KFwiZGlzY29ubmVjdFwiKTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cucGFydGljbGUpIHtcbiAgICAgIHdpbmRvdy5wYXJ0aWNsZS5zb2xhbmFXYWxsZXQgPSB0aGlzO1xuICAgIH1cbiAgfVxuICBnZXQgdmVyc2lvbigpIHtcbiAgICByZXR1cm4gZ2V0VmVyc2lvbigpO1xuICB9XG4gIG9uKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIHRoaXMuZXZlbnRzLm9uKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH1cbiAgb25jZShldmVudCwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLmV2ZW50cy5vbmNlKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH1cbiAgb2ZmKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIHRoaXMuZXZlbnRzLm9mZihldmVudCwgbGlzdGVuZXIpO1xuICB9XG4gIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIHRoaXMuZXZlbnRzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH1cbiAgZ2V0IGNvbm5lY3RpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpbmc7XG4gIH1cbiAgZ2V0IGNvbm5lY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHVibGljS2V5ICE9PSBudWxsO1xuICB9XG4gIGdldCBwdWJsaWNLZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3B1YmxpY0tleTtcbiAgfVxuICBjb25uZWN0KGNvbmZpZykge1xuICAgIHJldHVybiBfX2FzeW5jKHRoaXMsIG51bGwsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9jb25uZWN0aW5nID0gdHJ1ZTtcbiAgICAgICAgbGV0IHdhbGxldCA9IHRoaXMuYXV0aC5nZXRXYWxsZXQoKTtcbiAgICAgICAgaWYgKHdhbGxldCkge1xuICAgICAgICAgIHRoaXMuX3B1YmxpY0tleSA9IG5ldyBQdWJsaWNLZXkod2FsbGV0LnB1YmxpY19hZGRyZXNzKTtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgeWllbGQgdGhpcy5hdXRoLmxvZ2luKGNvbmZpZyk7XG4gICAgICAgIHdhbGxldCA9IHRoaXMuYXV0aC5nZXRXYWxsZXQoKTtcbiAgICAgICAgaWYgKHdhbGxldCkge1xuICAgICAgICAgIHRoaXMuX3B1YmxpY0tleSA9IG5ldyBQdWJsaWNLZXkod2FsbGV0LnB1YmxpY19hZGRyZXNzKTtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwid2FsbGV0IGNyZWF0ZSBmYWlsZWRcIik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdGhpcy5fY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGRpc2Nvbm5lY3QoKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgIHlpZWxkIHRoaXMuYXV0aC5sb2dvdXQoKTtcbiAgICAgIHRoaXMuX3B1YmxpY0tleSA9IG51bGw7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfSk7XG4gIH1cbiAgc2lnblRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IHlpZWxkIHRoaXMuYXV0aC5zaWduKFxuICAgICAgICBcInNpZ25UcmFuc2FjdGlvblwiLFxuICAgICAgICBiczU4LmVuY29kZSh0cmFuc2FjdGlvbi5zZXJpYWxpemUoeyByZXF1aXJlQWxsU2lnbmF0dXJlczogZmFsc2UsIHZlcmlmeVNpZ25hdHVyZXM6IGZhbHNlIH0pKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBUcmFuc2FjdGlvbi5mcm9tKEJ1ZmZlcjIuZnJvbShzaWduYXR1cmUsIFwiYmFzZTY0XCIpKTtcbiAgICB9KTtcbiAgfVxuICBzaWduQWxsVHJhbnNhY3Rpb25zKHRyYW5zYWN0aW9ucykge1xuICAgIHJldHVybiBfX2FzeW5jKHRoaXMsIG51bGwsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICBjb25zdCBzaWduYXR1cmVzID0geWllbGQgdGhpcy5hdXRoLnNpZ25BbGxUcmFuc2FjdGlvbnMoXG4gICAgICAgIHRyYW5zYWN0aW9ucy5tYXAoXG4gICAgICAgICAgKHR4KSA9PiBiczU4LmVuY29kZSh0eC5zZXJpYWxpemUoeyByZXF1aXJlQWxsU2lnbmF0dXJlczogZmFsc2UsIHZlcmlmeVNpZ25hdHVyZXM6IGZhbHNlIH0pKVxuICAgICAgICApXG4gICAgICApO1xuICAgICAgcmV0dXJuIHNpZ25hdHVyZXMubWFwKChzaWduZWQpID0+IFRyYW5zYWN0aW9uLmZyb20oQnVmZmVyMi5mcm9tKHNpZ25lZCwgXCJiYXNlNjRcIikpKTtcbiAgICB9KTtcbiAgfVxuICBzaWduQW5kU2VuZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmF1dGguc2VuZFRyYW5zYWN0aW9uKFxuICAgICAgICBiczU4LmVuY29kZSh0cmFuc2FjdGlvbi5zZXJpYWxpemUoeyByZXF1aXJlQWxsU2lnbmF0dXJlczogZmFsc2UsIHZlcmlmeVNpZ25hdHVyZXM6IGZhbHNlIH0pKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuICBzaWduTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IHlpZWxkIHRoaXMuYXV0aC5zaWduKFwic2lnbk1lc3NhZ2VcIiwgYnM1OC5lbmNvZGUobWVzc2FnZSkpO1xuICAgICAgcmV0dXJuIEJ1ZmZlcjIuZnJvbShzaWduYXR1cmUsIFwiYmFzZTY0XCIpO1xuICAgIH0pO1xuICB9XG4gIGdldENvbm5lY3Rpb24oY29uZmlnKSB7XG4gICAgY29uc3QgdXJsID0gYCR7cnBjVXJsKCl9L3NvbGFuYWA7XG4gICAgcmV0dXJuIG5ldyBDb25uZWN0aW9uKFxuICAgICAgYCR7dXJsfT9jaGFpbklkPSR7dGhpcy5hdXRoLmdldENoYWluSWQoKX0mcHJvamVjdFV1aWQ9JHt0aGlzLmF1dGguY29uZmlnLnByb2plY3RJZH0mcHJvamVjdEtleT0ke3RoaXMuYXV0aC5jb25maWcuY2xpZW50S2V5fWAsXG4gICAgICB7XG4gICAgICAgIGNvbW1pdG1lbnQ6IGNvbmZpZyA9PSBudWxsID8gdm9pZCAwIDogY29uZmlnLmNvbW1pdG1lbnQsXG4gICAgICAgIHdzRW5kcG9pbnQ6IGNvbmZpZyA9PSBudWxsID8gdm9pZCAwIDogY29uZmlnLndzRW5kcG9pbnQsXG4gICAgICAgIGh0dHBIZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogdGhpcy5hdXRoLmJhc2ljQ3JlZGVudGlhbHMoKVxuICAgICAgICB9LFxuICAgICAgICBmZXRjaDogY29uZmlnID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcuZmV0Y2gsXG4gICAgICAgIGZldGNoTWlkZGxld2FyZTogY29uZmlnID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcuZmV0Y2hNaWRkbGV3YXJlLFxuICAgICAgICBkaXNhYmxlUmV0cnlPblJhdGVMaW1pdDogY29uZmlnID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcuZGlzYWJsZVJldHJ5T25SYXRlTGltaXQsXG4gICAgICAgIGNvbmZpcm1UcmFuc2FjdGlvbkluaXRpYWxUaW1lb3V0OiBjb25maWcgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmZpZy5jb25maXJtVHJhbnNhY3Rpb25Jbml0aWFsVGltZW91dFxuICAgICAgfVxuICAgICk7XG4gIH1cbn07XG5cbi8vIHNyYy9pbmRleC50c1xuaW1wb3J0IHsgUGFydGljbGVOZXR3b3JrIH0gZnJvbSBcIkBwYXJ0aWNsZS1uZXR3b3JrL2F1dGhcIjtcbmV4cG9ydCB7XG4gIFBhcnRpY2xlTmV0d29yayxcbiAgU29sYW5hV2FsbGV0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@particle-network+solana-wallet@1.3.2_@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10__bs58@5.0.0/node_modules/@particle-network/solana-wallet/es/index.js\n");

/***/ })

};
;