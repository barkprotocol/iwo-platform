"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./utils/iwoUtils.ts":
/*!***************************!*\
  !*** ./utils/iwoUtils.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CIRCULATING_SUPPLY: () => (/* binding */ CIRCULATING_SUPPLY),\n/* harmony export */   LOCKED_SUPPLY: () => (/* binding */ LOCKED_SUPPLY),\n/* harmony export */   MAX_SUPPLY: () => (/* binding */ MAX_SUPPLY),\n/* harmony export */   TOTAL_SUPPLY: () => (/* binding */ TOTAL_SUPPLY),\n/* harmony export */   calculateBidWeight: () => (/* binding */ calculateBidWeight),\n/* harmony export */   calculateTokenAllocation: () => (/* binding */ calculateTokenAllocation),\n/* harmony export */   fetchAllocatedTokens: () => (/* binding */ fetchAllocatedTokens),\n/* harmony export */   fetchBARKTokenSupply: () => (/* binding */ fetchBARKTokenSupply),\n/* harmony export */   formatNumber: () => (/* binding */ formatNumber),\n/* harmony export */   formatTimeRemaining: () => (/* binding */ formatTimeRemaining),\n/* harmony export */   initializeSolanaConnection: () => (/* binding */ initializeSolanaConnection),\n/* harmony export */   iwoEndTime: () => (/* binding */ iwoEndTime),\n/* harmony export */   submitBidToBlockchain: () => (/* binding */ submitBidToBlockchain),\n/* harmony export */   useIWOData: () => (/* binding */ useIWOData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.1.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/web3.js */ \"(app-pages-browser)/./node_modules/.pnpm/@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coral-xyz/anchor */ \"(app-pages-browser)/./node_modules/.pnpm/@coral-xyz+anchor@0.30.1_bufferutil@4.0.8_utf-8-validate@5.0.10/node_modules/@coral-xyz/anchor/dist/browser/index.js\");\n/* harmony import */ var _lib_programs_iwo_program_idl_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/programs/iwo_program_idl.json */ \"(app-pages-browser)/./lib/programs/iwo_program_idl.json\");\n\n\n\n\nconst TOTAL_SUPPLY = 18446744073;\nconst CIRCULATING_SUPPLY = 18228391052.057774;\nconst LOCKED_SUPPLY = 2999688600;\nconst MAX_SUPPLY = 18446744073;\nconst BARK_TOKEN_MINT_ADDRESS = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(\"TokenkegQfeZyiNwAJbNbGKPFXkQd5J8X8wnF8MPzYx\" || 0);\nconst IWO_POOL_ID = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(\"BARKkeAwhTuFzcLHX4DjotRsmjXQ1MshGrZbn1CUQqMo\" || 0);\nlet connection;\nlet program;\nasync function initializeSolanaConnection() {\n    connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Connection(\"https://api.devnet.solana.com\" || 0, 'confirmed');\n    if ( true && window.solana) {\n        try {\n            const wallet = window.solana;\n            const provider = new _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_2__.AnchorProvider(connection, wallet, {\n                preflightCommitment: 'confirmed'\n            });\n            if (!_lib_programs_iwo_program_idl_json__WEBPACK_IMPORTED_MODULE_3__) {\n                throw new Error('IDL is undefined. Make sure the IDL file is properly imported.');\n            }\n            const completeIdl = {\n                ..._lib_programs_iwo_program_idl_json__WEBPACK_IMPORTED_MODULE_3__,\n                metadata: {\n                    name: \"iwo_program\",\n                    version: \"0.1.0\"\n                }\n            };\n            program = new _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_2__.Program(completeIdl, IWO_POOL_ID, provider);\n            if (!program) {\n                throw new Error('Failed to initialize program. Check your IDL and IWO_POOL_ID.');\n            }\n            console.log('Program initialized successfully');\n        } catch (error) {\n            console.error('Error initializing program:', error);\n            if (error instanceof _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_2__.AnchorError) {\n                console.error('AnchorError:', error.message);\n                console.error('Error logs:', error.logs);\n            }\n            if (error instanceof Error) {\n                throw new Error(\"Failed to initialize Solana connection: \".concat(error.message));\n            } else {\n                throw new Error('Failed to initialize Solana connection: Unknown error');\n            }\n        }\n    } else {\n        throw new Error('Solana object not found! Make sure you have a Solana wallet installed.');\n    }\n}\nasync function fetchBARKTokenSupply() {\n    if (!connection) await initializeSolanaConnection();\n    const tokenSupply = await connection.getTokenSupply(BARK_TOKEN_MINT_ADDRESS);\n    return tokenSupply.value.uiAmount || 0;\n}\nasync function fetchAllocatedTokens() {\n    if (!connection) await initializeSolanaConnection();\n    const iwoAccount = await connection.getAccountInfo(IWO_POOL_ID);\n    if (!iwoAccount) {\n        console.error('IWO account not found');\n        return 0;\n    }\n    // Parse iwoAccount data to get allocated tokens\n    // This is a placeholder implementation\n    return CIRCULATING_SUPPLY - LOCKED_SUPPLY;\n}\nfunction calculateBidWeight(amount, vestingPeriod) {\n    return amount * (1 + vestingPeriod / 12);\n}\nfunction calculateTokenAllocation(bid, totalWeight, availableTokens) {\n    return bid.weight / totalWeight * availableTokens;\n}\nasync function submitBidToBlockchain(amount, vestingPeriod, walletAddress) {\n    if (!connection || !program) await initializeSolanaConnection();\n    if (!program) {\n        throw new Error('Program not initialized');\n    }\n    const fromPubkey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(walletAddress);\n    const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Transaction().add(await program.methods.submitBid(new _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_2__.BN(amount), vestingPeriod).accounts({\n        user: fromPubkey,\n        iwoPool: IWO_POOL_ID,\n        systemProgram: _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.SystemProgram.programId\n    }).instruction());\n    try {\n        const wallet = window.solana;\n        const signature = await (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.sendAndConfirmTransaction)(connection, transaction, [\n            wallet\n        ]);\n        return signature;\n    } catch (error) {\n        console.error('Error submitting bid to blockchain:', error);\n        throw error;\n    }\n}\nfunction formatNumber(num) {\n    return new Intl.NumberFormat('en-US', {\n        minimumFractionDigits: 3,\n        maximumFractionDigits: 3\n    }).format(num);\n}\nfunction formatTimeRemaining(ms) {\n    const days = Math.floor(ms / (24 * 60 * 60 * 1000));\n    const hours = Math.floor(ms % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));\n    const minutes = Math.floor(ms % (60 * 60 * 1000) / (60 * 1000));\n    return \"\".concat(days, \"d \").concat(hours, \"h \").concat(minutes, \"m\");\n}\nfunction useIWOData() {\n    let chain = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'solana';\n    const [bids, setBids] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [allocatedTokens, setAllocatedTokens] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const [timeRemaining, setTimeRemaining] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const [totalWeight, setTotalWeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)({\n        \"useIWOData.useEffect\": ()=>{\n            let isMounted = true;\n            const fetchData = {\n                \"useIWOData.useEffect.fetchData\": async ()=>{\n                    try {\n                        await initializeSolanaConnection();\n                        const allocated = await fetchAllocatedTokens();\n                        if (isMounted) setAllocatedTokens(allocated);\n                        if (program) {\n                            // Fetch bids from the program\n                            const iwoPool = await program.account.iwoPool.fetch(IWO_POOL_ID);\n                            if (isMounted && iwoPool && 'bids' in iwoPool) {\n                                const formattedBids = iwoPool.bids.map({\n                                    \"useIWOData.useEffect.fetchData.formattedBids\": (bid)=>({\n                                            id: bid.publicKey.toBase58(),\n                                            userId: bid.account.bidder.toBase58(),\n                                            amount: bid.account.amount.toNumber(),\n                                            vestingPeriod: bid.account.vestingPeriod,\n                                            weight: bid.account.weight.toNumber(),\n                                            transactionSignature: '',\n                                            timestamp: new Date(bid.account.timestamp.toNumber() * 1000).toISOString()\n                                        })\n                                }[\"useIWOData.useEffect.fetchData.formattedBids\"]);\n                                setBids(formattedBids);\n                                const weight = formattedBids.reduce({\n                                    \"useIWOData.useEffect.fetchData.weight\": (sum, bid)=>sum + bid.weight\n                                }[\"useIWOData.useEffect.fetchData.weight\"], 0);\n                                setTotalWeight(weight);\n                            }\n                        }\n                    } catch (error) {\n                        console.error('Error fetching IWO data:', error);\n                    }\n                }\n            }[\"useIWOData.useEffect.fetchData\"];\n            fetchData();\n            const interval = setInterval({\n                \"useIWOData.useEffect.interval\": ()=>{\n                    if (isMounted) setTimeRemaining(Math.max(0, iwoEndTime.getTime() - Date.now()));\n                }\n            }[\"useIWOData.useEffect.interval\"], 1000);\n            return ({\n                \"useIWOData.useEffect\": ()=>{\n                    isMounted = false;\n                    clearInterval(interval);\n                }\n            })[\"useIWOData.useEffect\"];\n        }\n    }[\"useIWOData.useEffect\"], [\n        chain\n    ]);\n    const submitBid = async (amount, vestingPeriod, walletAddress)=>{\n        try {\n            const signature = await submitBidToBlockchain(amount, vestingPeriod, walletAddress);\n            const weight = calculateBidWeight(amount, vestingPeriod);\n            const newBid = {\n                id: signature,\n                userId: walletAddress,\n                amount,\n                vestingPeriod,\n                weight,\n                transactionSignature: signature,\n                timestamp: new Date().toISOString()\n            };\n            setBids([\n                ...bids,\n                newBid\n            ]);\n            setAllocatedTokens(allocatedTokens + amount);\n            setTotalWeight(totalWeight + weight);\n            return signature;\n        } catch (error) {\n            console.error('Error submitting bid:', error);\n            throw error;\n        }\n    };\n    return {\n        bids,\n        allocatedTokens,\n        timeRemaining,\n        totalWeight,\n        submitBid\n    };\n}\nconst iwoEndTime = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days from now\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b1V0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb25uZWN0aW9uLCBQdWJsaWNLZXksIGNsdXN0ZXJBcGlVcmwsIFRyYW5zYWN0aW9uLCBTeXN0ZW1Qcm9ncmFtLCBzZW5kQW5kQ29uZmlybVRyYW5zYWN0aW9uIH0gZnJvbSAnQHNvbGFuYS93ZWIzLmpzJztcbmltcG9ydCB7IFByb2dyYW0sIEFuY2hvclByb3ZpZGVyLCBJZGwsIEJOLCBBbmNob3JFcnJvciB9IGZyb20gJ0Bjb3JhbC14eXovYW5jaG9yJztcbmltcG9ydCBpZGwgZnJvbSAnQC9saWIvcHJvZ3JhbXMvaXdvX3Byb2dyYW1faWRsLmpzb24nO1xuXG5leHBvcnQgY29uc3QgVE9UQUxfU1VQUExZID0gMThfNDQ2Xzc0NF8wNzM7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVRJTkdfU1VQUExZID0gMThfMjI4XzM5MV8wNTIuMDU3Nzc0O1xuZXhwb3J0IGNvbnN0IExPQ0tFRF9TVVBQTFkgPSAyXzk5OV82ODhfNjAwO1xuZXhwb3J0IGNvbnN0IE1BWF9TVVBQTFkgPSAxOF80NDZfNzQ0XzA3MztcblxuZXhwb3J0IGludGVyZmFjZSBCaWQge1xuICBpZDogc3RyaW5nO1xuICB1c2VySWQ6IHN0cmluZztcbiAgYW1vdW50OiBudW1iZXI7XG4gIHZlc3RpbmdQZXJpb2Q6IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHRyYW5zYWN0aW9uU2lnbmF0dXJlOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xufVxuXG5jb25zdCBCQVJLX1RPS0VOX01JTlRfQUREUkVTUyA9IG5ldyBQdWJsaWNLZXkocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVE9LRU5fUFJPR1JBTV9JRCB8fCAnMk5UdkVzc0oyaTk5OFYyY01HVDRGeTNKaHlGbkF6SEZvbkRvOWRiQWtWcmcnKTtcbmNvbnN0IElXT19QT09MX0lEID0gbmV3IFB1YmxpY0tleShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19JV09fQ09OVFJBQ1RfQUREUkVTUyB8fCAnQkFSS2tlQXdoVHVGemNMSFg0RGpvdFJzbWpYUTFNc2hHclpibjFDVVFxTW8nKTtcblxubGV0IGNvbm5lY3Rpb246IENvbm5lY3Rpb247XG5sZXQgcHJvZ3JhbTogUHJvZ3JhbTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVTb2xhbmFDb25uZWN0aW9uKCkge1xuICBjb25uZWN0aW9uID0gbmV3IENvbm5lY3Rpb24ocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU09MQU5BX1JQQ19VUkwgfHwgY2x1c3RlckFwaVVybCgnZGV2bmV0JyksICdjb25maXJtZWQnKTtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICh3aW5kb3cgYXMgYW55KS5zb2xhbmEpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgd2FsbGV0ID0gKHdpbmRvdyBhcyBhbnkpLnNvbGFuYTtcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IEFuY2hvclByb3ZpZGVyKFxuICAgICAgICBjb25uZWN0aW9uLCBcbiAgICAgICAgd2FsbGV0LFxuICAgICAgICB7IHByZWZsaWdodENvbW1pdG1lbnQ6ICdjb25maXJtZWQnIH1cbiAgICAgICk7XG5cbiAgICAgIGlmICghaWRsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSURMIGlzIHVuZGVmaW5lZC4gTWFrZSBzdXJlIHRoZSBJREwgZmlsZSBpcyBwcm9wZXJseSBpbXBvcnRlZC4nKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tcGxldGVJZGw6IElkbCA9IHtcbiAgICAgICAgLi4uKGlkbCBhcyB1bmtub3duIGFzIElkbCksXG4gICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgbmFtZTogXCJpd29fcHJvZ3JhbVwiLFxuICAgICAgICAgIHZlcnNpb246IFwiMC4xLjBcIixcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIHByb2dyYW0gPSBuZXcgUHJvZ3JhbShjb21wbGV0ZUlkbCwgSVdPX1BPT0xfSUQsIHByb3ZpZGVyKTtcbiAgICAgIFxuICAgICAgaWYgKCFwcm9ncmFtKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGluaXRpYWxpemUgcHJvZ3JhbS4gQ2hlY2sgeW91ciBJREwgYW5kIElXT19QT09MX0lELicpO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZygnUHJvZ3JhbSBpbml0aWFsaXplZCBzdWNjZXNzZnVsbHknKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5pdGlhbGl6aW5nIHByb2dyYW06JywgZXJyb3IpO1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgQW5jaG9yRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQW5jaG9yRXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvZ3M6JywgZXJyb3IubG9ncyk7XG4gICAgICB9XG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBpbml0aWFsaXplIFNvbGFuYSBjb25uZWN0aW9uOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBpbml0aWFsaXplIFNvbGFuYSBjb25uZWN0aW9uOiBVbmtub3duIGVycm9yJyk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignU29sYW5hIG9iamVjdCBub3QgZm91bmQhIE1ha2Ugc3VyZSB5b3UgaGF2ZSBhIFNvbGFuYSB3YWxsZXQgaW5zdGFsbGVkLicpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEJBUktUb2tlblN1cHBseSgpOiBQcm9taXNlPG51bWJlcj4ge1xuICBpZiAoIWNvbm5lY3Rpb24pIGF3YWl0IGluaXRpYWxpemVTb2xhbmFDb25uZWN0aW9uKCk7XG4gIGNvbnN0IHRva2VuU3VwcGx5ID0gYXdhaXQgY29ubmVjdGlvbi5nZXRUb2tlblN1cHBseShCQVJLX1RPS0VOX01JTlRfQUREUkVTUyk7XG4gIHJldHVybiB0b2tlblN1cHBseS52YWx1ZS51aUFtb3VudCB8fCAwO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBbGxvY2F0ZWRUb2tlbnMoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgaWYgKCFjb25uZWN0aW9uKSBhd2FpdCBpbml0aWFsaXplU29sYW5hQ29ubmVjdGlvbigpO1xuICBjb25zdCBpd29BY2NvdW50ID0gYXdhaXQgY29ubmVjdGlvbi5nZXRBY2NvdW50SW5mbyhJV09fUE9PTF9JRCk7XG4gIGlmICghaXdvQWNjb3VudCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0lXTyBhY2NvdW50IG5vdCBmb3VuZCcpO1xuICAgIHJldHVybiAwO1xuICB9XG4gIC8vIFBhcnNlIGl3b0FjY291bnQgZGF0YSB0byBnZXQgYWxsb2NhdGVkIHRva2Vuc1xuICAvLyBUaGlzIGlzIGEgcGxhY2Vob2xkZXIgaW1wbGVtZW50YXRpb25cbiAgcmV0dXJuIENJUkNVTEFUSU5HX1NVUFBMWSAtIExPQ0tFRF9TVVBQTFk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVCaWRXZWlnaHQoYW1vdW50OiBudW1iZXIsIHZlc3RpbmdQZXJpb2Q6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBhbW91bnQgKiAoMSArIHZlc3RpbmdQZXJpb2QgLyAxMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVUb2tlbkFsbG9jYXRpb24oYmlkOiBCaWQsIHRvdGFsV2VpZ2h0OiBudW1iZXIsIGF2YWlsYWJsZVRva2VuczogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIChiaWQud2VpZ2h0IC8gdG90YWxXZWlnaHQpICogYXZhaWxhYmxlVG9rZW5zO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0QmlkVG9CbG9ja2NoYWluKGFtb3VudDogbnVtYmVyLCB2ZXN0aW5nUGVyaW9kOiBudW1iZXIsIHdhbGxldEFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGlmICghY29ubmVjdGlvbiB8fCAhcHJvZ3JhbSkgYXdhaXQgaW5pdGlhbGl6ZVNvbGFuYUNvbm5lY3Rpb24oKTtcbiAgXG4gIGlmICghcHJvZ3JhbSkge1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvZ3JhbSBub3QgaW5pdGlhbGl6ZWQnKTtcbiAgfVxuXG4gIGNvbnN0IGZyb21QdWJrZXkgPSBuZXcgUHVibGljS2V5KHdhbGxldEFkZHJlc3MpO1xuICBjb25zdCB0cmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbigpLmFkZChcbiAgICBhd2FpdCBwcm9ncmFtLm1ldGhvZHMuc3VibWl0QmlkKG5ldyBCTihhbW91bnQpLCB2ZXN0aW5nUGVyaW9kKVxuICAgICAgLmFjY291bnRzKHtcbiAgICAgICAgdXNlcjogZnJvbVB1YmtleSxcbiAgICAgICAgaXdvUG9vbDogSVdPX1BPT0xfSUQsXG4gICAgICAgIHN5c3RlbVByb2dyYW06IFN5c3RlbVByb2dyYW0ucHJvZ3JhbUlkLFxuICAgICAgfSlcbiAgICAgIC5pbnN0cnVjdGlvbigpXG4gICk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB3YWxsZXQgPSAod2luZG93IGFzIGFueSkuc29sYW5hO1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IHNlbmRBbmRDb25maXJtVHJhbnNhY3Rpb24oXG4gICAgICBjb25uZWN0aW9uLFxuICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICBbd2FsbGV0XVxuICAgICk7XG4gICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzdWJtaXR0aW5nIGJpZCB0byBibG9ja2NoYWluOicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TnVtYmVyKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAzLFxuICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogM1xuICB9KS5mb3JtYXQobnVtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFRpbWVSZW1haW5pbmcobXM6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKG1zIC8gKDI0ICogNjAgKiA2MCAqIDEwMDApKTtcbiAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKChtcyAlICgyNCAqIDYwICogNjAgKiAxMDAwKSkgLyAoNjAgKiA2MCAqIDEwMDApKTtcbiAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKG1zICUgKDYwICogNjAgKiAxMDAwKSkgLyAoNjAgKiAxMDAwKSk7XG4gIHJldHVybiBgJHtkYXlzfWQgJHtob3Vyc31oICR7bWludXRlc31tYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUlXT0RhdGEoY2hhaW46ICdzb2xhbmEnIHwgJ3N1aScgPSAnc29sYW5hJykge1xuICBjb25zdCBbYmlkcywgc2V0Qmlkc10gPSB1c2VTdGF0ZTxCaWRbXT4oW10pO1xuICBjb25zdCBbYWxsb2NhdGVkVG9rZW5zLCBzZXRBbGxvY2F0ZWRUb2tlbnNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt0aW1lUmVtYWluaW5nLCBzZXRUaW1lUmVtYWluaW5nXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdG90YWxXZWlnaHQsIHNldFRvdGFsV2VpZ2h0XSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGlzTW91bnRlZCA9IHRydWU7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgaW5pdGlhbGl6ZVNvbGFuYUNvbm5lY3Rpb24oKTtcbiAgICAgICAgY29uc3QgYWxsb2NhdGVkID0gYXdhaXQgZmV0Y2hBbGxvY2F0ZWRUb2tlbnMoKTtcbiAgICAgICAgaWYgKGlzTW91bnRlZCkgc2V0QWxsb2NhdGVkVG9rZW5zKGFsbG9jYXRlZCk7XG5cbiAgICAgICAgaWYgKHByb2dyYW0pIHtcbiAgICAgICAgICAvLyBGZXRjaCBiaWRzIGZyb20gdGhlIHByb2dyYW1cbiAgICAgICAgICBjb25zdCBpd29Qb29sID0gYXdhaXQgcHJvZ3JhbS5hY2NvdW50Lml3b1Bvb2wuZmV0Y2goSVdPX1BPT0xfSUQpO1xuICAgICAgICAgIGlmIChpc01vdW50ZWQgJiYgaXdvUG9vbCAmJiAnYmlkcycgaW4gaXdvUG9vbCkge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkQmlkczogQmlkW10gPSAoaXdvUG9vbC5iaWRzIGFzIGFueVtdKS5tYXAoKGJpZDogYW55KSA9PiAoe1xuICAgICAgICAgICAgICBpZDogYmlkLnB1YmxpY0tleS50b0Jhc2U1OCgpLFxuICAgICAgICAgICAgICB1c2VySWQ6IGJpZC5hY2NvdW50LmJpZGRlci50b0Jhc2U1OCgpLFxuICAgICAgICAgICAgICBhbW91bnQ6IGJpZC5hY2NvdW50LmFtb3VudC50b051bWJlcigpLFxuICAgICAgICAgICAgICB2ZXN0aW5nUGVyaW9kOiBiaWQuYWNjb3VudC52ZXN0aW5nUGVyaW9kLFxuICAgICAgICAgICAgICB3ZWlnaHQ6IGJpZC5hY2NvdW50LndlaWdodC50b051bWJlcigpLFxuICAgICAgICAgICAgICB0cmFuc2FjdGlvblNpZ25hdHVyZTogJycsIC8vIFRoaXMgaW5mb3JtYXRpb24gbWlnaHQgbm90IGJlIGF2YWlsYWJsZSBpbiB0aGUgYWNjb3VudCBkYXRhXG4gICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoYmlkLmFjY291bnQudGltZXN0YW1wLnRvTnVtYmVyKCkgKiAxMDAwKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgc2V0Qmlkcyhmb3JtYXR0ZWRCaWRzKTtcbiAgICAgICAgICAgIGNvbnN0IHdlaWdodCA9IGZvcm1hdHRlZEJpZHMucmVkdWNlKChzdW0sIGJpZCkgPT4gc3VtICsgYmlkLndlaWdodCwgMCk7XG4gICAgICAgICAgICBzZXRUb3RhbFdlaWdodCh3ZWlnaHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgSVdPIGRhdGE6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcblxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGlzTW91bnRlZCkgc2V0VGltZVJlbWFpbmluZyhNYXRoLm1heCgwLCBpd29FbmRUaW1lLmdldFRpbWUoKSAtIERhdGUubm93KCkpKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpc01vdW50ZWQgPSBmYWxzZTtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH07XG4gIH0sIFtjaGFpbl0pO1xuXG4gIGNvbnN0IHN1Ym1pdEJpZCA9IGFzeW5jIChhbW91bnQ6IG51bWJlciwgdmVzdGluZ1BlcmlvZDogbnVtYmVyLCB3YWxsZXRBZGRyZXNzOiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgc3VibWl0QmlkVG9CbG9ja2NoYWluKGFtb3VudCwgdmVzdGluZ1BlcmlvZCwgd2FsbGV0QWRkcmVzcyk7XG4gICAgICBjb25zdCB3ZWlnaHQgPSBjYWxjdWxhdGVCaWRXZWlnaHQoYW1vdW50LCB2ZXN0aW5nUGVyaW9kKTtcbiAgICAgIGNvbnN0IG5ld0JpZDogQmlkID0ge1xuICAgICAgICBpZDogc2lnbmF0dXJlLFxuICAgICAgICB1c2VySWQ6IHdhbGxldEFkZHJlc3MsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgdmVzdGluZ1BlcmlvZCxcbiAgICAgICAgd2VpZ2h0LFxuICAgICAgICB0cmFuc2FjdGlvblNpZ25hdHVyZTogc2lnbmF0dXJlLFxuICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIH07XG4gICAgICBzZXRCaWRzKFsuLi5iaWRzLCBuZXdCaWRdKTtcbiAgICAgIHNldEFsbG9jYXRlZFRva2VucyhhbGxvY2F0ZWRUb2tlbnMgKyBhbW91bnQpO1xuICAgICAgc2V0VG90YWxXZWlnaHQodG90YWxXZWlnaHQgKyB3ZWlnaHQpO1xuICAgICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc3VibWl0dGluZyBiaWQ6JywgZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGJpZHMsIGFsbG9jYXRlZFRva2VucywgdGltZVJlbWFpbmluZywgdG90YWxXZWlnaHQsIHN1Ym1pdEJpZCB9O1xufVxuXG5leHBvcnQgY29uc3QgaXdvRW5kVGltZSA9IG5ldyBEYXRlKERhdGUubm93KCkgKyA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7IC8vIDcgZGF5cyBmcm9tIG5vd1xuXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb25uZWN0aW9uIiwiUHVibGljS2V5IiwiY2x1c3RlckFwaVVybCIsIlRyYW5zYWN0aW9uIiwiU3lzdGVtUHJvZ3JhbSIsInNlbmRBbmRDb25maXJtVHJhbnNhY3Rpb24iLCJQcm9ncmFtIiwiQW5jaG9yUHJvdmlkZXIiLCJCTiIsIkFuY2hvckVycm9yIiwiaWRsIiwiVE9UQUxfU1VQUExZIiwiQ0lSQ1VMQVRJTkdfU1VQUExZIiwiTE9DS0VEX1NVUFBMWSIsIk1BWF9TVVBQTFkiLCJCQVJLX1RPS0VOX01JTlRfQUREUkVTUyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19UT0tFTl9QUk9HUkFNX0lEIiwiSVdPX1BPT0xfSUQiLCJORVhUX1BVQkxJQ19JV09fQ09OVFJBQ1RfQUREUkVTUyIsImNvbm5lY3Rpb24iLCJwcm9ncmFtIiwiaW5pdGlhbGl6ZVNvbGFuYUNvbm5lY3Rpb24iLCJORVhUX1BVQkxJQ19TT0xBTkFfUlBDX1VSTCIsIndpbmRvdyIsInNvbGFuYSIsIndhbGxldCIsInByb3ZpZGVyIiwicHJlZmxpZ2h0Q29tbWl0bWVudCIsIkVycm9yIiwiY29tcGxldGVJZGwiLCJtZXRhZGF0YSIsIm5hbWUiLCJ2ZXJzaW9uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSIsImxvZ3MiLCJmZXRjaEJBUktUb2tlblN1cHBseSIsInRva2VuU3VwcGx5IiwiZ2V0VG9rZW5TdXBwbHkiLCJ2YWx1ZSIsInVpQW1vdW50IiwiZmV0Y2hBbGxvY2F0ZWRUb2tlbnMiLCJpd29BY2NvdW50IiwiZ2V0QWNjb3VudEluZm8iLCJjYWxjdWxhdGVCaWRXZWlnaHQiLCJhbW91bnQiLCJ2ZXN0aW5nUGVyaW9kIiwiY2FsY3VsYXRlVG9rZW5BbGxvY2F0aW9uIiwiYmlkIiwidG90YWxXZWlnaHQiLCJhdmFpbGFibGVUb2tlbnMiLCJ3ZWlnaHQiLCJzdWJtaXRCaWRUb0Jsb2NrY2hhaW4iLCJ3YWxsZXRBZGRyZXNzIiwiZnJvbVB1YmtleSIsInRyYW5zYWN0aW9uIiwiYWRkIiwibWV0aG9kcyIsInN1Ym1pdEJpZCIsImFjY291bnRzIiwidXNlciIsIml3b1Bvb2wiLCJzeXN0ZW1Qcm9ncmFtIiwicHJvZ3JhbUlkIiwiaW5zdHJ1Y3Rpb24iLCJzaWduYXR1cmUiLCJmb3JtYXROdW1iZXIiLCJudW0iLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiZm9ybWF0IiwiZm9ybWF0VGltZVJlbWFpbmluZyIsIm1zIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInVzZUlXT0RhdGEiLCJjaGFpbiIsImJpZHMiLCJzZXRCaWRzIiwiYWxsb2NhdGVkVG9rZW5zIiwic2V0QWxsb2NhdGVkVG9rZW5zIiwidGltZVJlbWFpbmluZyIsInNldFRpbWVSZW1haW5pbmciLCJzZXRUb3RhbFdlaWdodCIsImlzTW91bnRlZCIsImZldGNoRGF0YSIsImFsbG9jYXRlZCIsImFjY291bnQiLCJmZXRjaCIsImZvcm1hdHRlZEJpZHMiLCJtYXAiLCJpZCIsInB1YmxpY0tleSIsInRvQmFzZTU4IiwidXNlcklkIiwiYmlkZGVyIiwidG9OdW1iZXIiLCJ0cmFuc2FjdGlvblNpZ25hdHVyZSIsInRpbWVzdGFtcCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInJlZHVjZSIsInN1bSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJtYXgiLCJpd29FbmRUaW1lIiwiZ2V0VGltZSIsIm5vdyIsImNsZWFySW50ZXJ2YWwiLCJuZXdCaWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./utils/iwoUtils.ts\n"));

/***/ })

});