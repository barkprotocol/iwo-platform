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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CIRCULATING_SUPPLY: () => (/* binding */ CIRCULATING_SUPPLY),\n/* harmony export */   LOCKED_SUPPLY: () => (/* binding */ LOCKED_SUPPLY),\n/* harmony export */   MAX_SUPPLY: () => (/* binding */ MAX_SUPPLY),\n/* harmony export */   TOTAL_SUPPLY: () => (/* binding */ TOTAL_SUPPLY),\n/* harmony export */   calculateBidWeight: () => (/* binding */ calculateBidWeight),\n/* harmony export */   calculateTokenAllocation: () => (/* binding */ calculateTokenAllocation),\n/* harmony export */   fetchAllocatedTokens: () => (/* binding */ fetchAllocatedTokens),\n/* harmony export */   fetchBARKTokenSupply: () => (/* binding */ fetchBARKTokenSupply),\n/* harmony export */   formatNumber: () => (/* binding */ formatNumber),\n/* harmony export */   formatTimeRemaining: () => (/* binding */ formatTimeRemaining),\n/* harmony export */   initializeSolanaConnection: () => (/* binding */ initializeSolanaConnection),\n/* harmony export */   iwoEndTime: () => (/* binding */ iwoEndTime),\n/* harmony export */   submitBidToBlockchain: () => (/* binding */ submitBidToBlockchain),\n/* harmony export */   useIWOData: () => (/* binding */ useIWOData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.1.1_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/web3.js */ \"(app-pages-browser)/./node_modules/.pnpm/@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coral-xyz/anchor */ \"(app-pages-browser)/./node_modules/.pnpm/@coral-xyz+anchor@0.30.1_bufferutil@4.0.8_utf-8-validate@5.0.10/node_modules/@coral-xyz/anchor/dist/browser/index.js\");\n/* harmony import */ var _lib_programs_iwo_program_idl_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/programs/iwo_program_idl.json */ \"(app-pages-browser)/./lib/programs/iwo_program_idl.json\");\n/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bn.js */ \"(app-pages-browser)/./node_modules/.pnpm/bn.js@5.2.1/node_modules/bn.js/lib/bn.js\");\n/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst TOTAL_SUPPLY = 18446744073;\nconst CIRCULATING_SUPPLY = 18228391052.057774;\nconst LOCKED_SUPPLY = 2999688600;\nconst MAX_SUPPLY = 18446744073;\nconst BARK_TOKEN_MINT_ADDRESS = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(\"TokenkegQfeZyiNwAJbNbGKPFXkQd5J8X8wnF8MPzYx\" || 0);\nconst IWO_POOL_ID = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(\"BARKkeAwhTuFzcLHX4DjotRsmjXQ1MshGrZbn1CUQqMo\" || 0);\nlet connection;\nlet program;\nasync function initializeSolanaConnection() {\n    connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Connection(\"https://api.devnet.solana.com\" || 0, 'confirmed');\n    if ( true && window.solana) {\n        try {\n            const wallet = window.solana;\n            const provider = new _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_2__.AnchorProvider(connection, wallet, {\n                preflightCommitment: 'confirmed'\n            });\n            if (!_lib_programs_iwo_program_idl_json__WEBPACK_IMPORTED_MODULE_3__) {\n                throw new Error('IDL is undefined. Make sure the IDL file is properly imported.');\n            }\n            // Ensure the IDL is properly structured\n            const completeIdl = {\n                ..._lib_programs_iwo_program_idl_json__WEBPACK_IMPORTED_MODULE_3__,\n                metadata: {\n                    address: IWO_POOL_ID.toString()\n                }\n            };\n            console.log('Initializing program with IDL:', JSON.stringify(completeIdl, null, 2));\n            console.log('IWO_POOL_ID:', IWO_POOL_ID.toString());\n            program = new _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_2__.Program(completeIdl, IWO_POOL_ID, provider);\n            if (!program) {\n                throw new Error('Failed to initialize program. Check your IDL and IWO_POOL_ID.');\n            }\n            console.log('Program initialized successfully');\n        } catch (error) {\n            console.error('Error initializing program:', error);\n            if (error instanceof _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_2__.AnchorError) {\n                console.error('AnchorError:', error.message);\n                console.error('Error logs:', error.logs);\n            }\n            if (error instanceof Error) {\n                throw new Error(\"Failed to initialize Solana connection: \".concat(error.message));\n            } else {\n                throw new Error('Failed to initialize Solana connection: Unknown error');\n            }\n        }\n    } else {\n        throw new Error('Solana object not found! Make sure you have a Solana wallet installed.');\n    }\n}\nasync function fetchBARKTokenSupply() {\n    if (!connection) await initializeSolanaConnection();\n    const tokenSupply = await connection.getTokenSupply(BARK_TOKEN_MINT_ADDRESS);\n    return tokenSupply.value.uiAmount || 0;\n}\nasync function fetchAllocatedTokens() {\n    if (!connection) await initializeSolanaConnection();\n    const iwoAccount = await connection.getAccountInfo(IWO_POOL_ID);\n    if (!iwoAccount) {\n        console.error('IWO account not found');\n        return 0;\n    }\n    // Parse iwoAccount data to get allocated tokens\n    // This is a placeholder implementation\n    return CIRCULATING_SUPPLY - LOCKED_SUPPLY;\n}\nfunction calculateBidWeight(amount, vestingPeriod) {\n    return amount * (1 + vestingPeriod / 12);\n}\nfunction calculateTokenAllocation(bid, totalWeight, availableTokens) {\n    return bid.weight / totalWeight * availableTokens;\n}\nasync function submitBidToBlockchain(amount, vestingPeriod, walletAddress) {\n    if (!connection || !program) await initializeSolanaConnection();\n    if (!program) {\n        throw new Error('Program not initialized');\n    }\n    const fromPubkey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(walletAddress);\n    const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Transaction().add(await program.methods.submitBid(new (bn_js__WEBPACK_IMPORTED_MODULE_4___default())(amount), vestingPeriod).accounts({\n        user: fromPubkey,\n        iwoPool: IWO_POOL_ID,\n        systemProgram: _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.SystemProgram.programId\n    }).instruction());\n    try {\n        const wallet = window.solana;\n        const signature = await (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.sendAndConfirmTransaction)(connection, transaction, [\n            wallet.payer\n        ], {\n            commitment: 'confirmed'\n        });\n        return signature;\n    } catch (error) {\n        console.error('Error submitting bid:', error);\n        if (error instanceof Error) {\n            throw new Error(\"Failed to submit bid: \".concat(error.message));\n        } else {\n            throw new Error('Failed to submit bid: Unknown error');\n        }\n    }\n}\nfunction formatNumber(num) {\n    return new Intl.NumberFormat('en-US', {\n        minimumFractionDigits: 3,\n        maximumFractionDigits: 3\n    }).format(num);\n}\nfunction formatTimeRemaining(ms) {\n    const days = Math.floor(ms / (24 * 60 * 60 * 1000));\n    const hours = Math.floor(ms % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));\n    const minutes = Math.floor(ms % (60 * 60 * 1000) / (60 * 1000));\n    return \"\".concat(days, \"d \").concat(hours, \"h \").concat(minutes, \"m\");\n}\nfunction useIWOData() {\n    let chain = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'solana';\n    const [bids, setBids] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [allocatedTokens, setAllocatedTokens] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const [timeRemaining, setTimeRemaining] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const [totalWeight, setTotalWeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)({\n        \"useIWOData.useEffect\": ()=>{\n            let isMounted = true;\n            const fetchData = {\n                \"useIWOData.useEffect.fetchData\": async ()=>{\n                    try {\n                        await initializeSolanaConnection();\n                        const allocated = await fetchAllocatedTokens();\n                        if (isMounted) setAllocatedTokens(allocated);\n                        if (program) {\n                            // Fetch bids from the program\n                            const iwoPool = await program.account.iwoPool.fetch(IWO_POOL_ID);\n                            if (isMounted && iwoPool && 'bids' in iwoPool) {\n                                const formattedBids = iwoPool.bids.map({\n                                    \"useIWOData.useEffect.fetchData.formattedBids\": (bid)=>({\n                                            id: bid.publicKey.toBase58(),\n                                            userId: bid.account.bidder.toBase58(),\n                                            amount: bid.account.amount.toNumber(),\n                                            vestingPeriod: bid.account.vestingPeriod,\n                                            weight: bid.account.weight.toNumber(),\n                                            transactionSignature: '',\n                                            timestamp: new Date(bid.account.timestamp.toNumber() * 1000).toISOString()\n                                        })\n                                }[\"useIWOData.useEffect.fetchData.formattedBids\"]);\n                                setBids(formattedBids);\n                                const weight = formattedBids.reduce({\n                                    \"useIWOData.useEffect.fetchData.weight\": (sum, bid)=>sum + bid.weight\n                                }[\"useIWOData.useEffect.fetchData.weight\"], 0);\n                                setTotalWeight(weight);\n                            }\n                        }\n                    } catch (error) {\n                        console.error('Error fetching IWO data:', error);\n                    }\n                }\n            }[\"useIWOData.useEffect.fetchData\"];\n            fetchData();\n            const interval = setInterval({\n                \"useIWOData.useEffect.interval\": ()=>{\n                    if (isMounted) setTimeRemaining(Math.max(0, iwoEndTime.getTime() - Date.now()));\n                }\n            }[\"useIWOData.useEffect.interval\"], 1000);\n            return ({\n                \"useIWOData.useEffect\": ()=>{\n                    isMounted = false;\n                    clearInterval(interval);\n                }\n            })[\"useIWOData.useEffect\"];\n        }\n    }[\"useIWOData.useEffect\"], [\n        chain\n    ]);\n    const submitBid = async (amount, vestingPeriod, walletAddress)=>{\n        try {\n            const signature = await submitBidToBlockchain(amount, vestingPeriod, walletAddress);\n            const weight = calculateBidWeight(amount, vestingPeriod);\n            const newBid = {\n                id: signature,\n                userId: walletAddress,\n                amount,\n                vestingPeriod,\n                weight,\n                transactionSignature: signature,\n                timestamp: new Date().toISOString()\n            };\n            setBids([\n                ...bids,\n                newBid\n            ]);\n            setAllocatedTokens(allocatedTokens + amount);\n            setTotalWeight(totalWeight + weight);\n            return signature;\n        } catch (error) {\n            console.error('Error submitting bid:', error);\n            if (error instanceof Error) {\n                throw new Error(\"Failed to submit bid: \".concat(error.message));\n            } else {\n                throw new Error('Failed to submit bid: Unknown error');\n            }\n        }\n    };\n    return {\n        bids,\n        allocatedTokens,\n        timeRemaining,\n        totalWeight,\n        submitBid\n    };\n}\nconst iwoEndTime = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days from now\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDVCxFQUFFLE9BQU9oQyxPQUFnQjtZQUN2QkosUUFBUUksS0FBSyxDQUFDLHlCQUF5QkE7WUFDdkMsSUFBSUEsaUJBQWlCVCxPQUFPO2dCQUMxQixNQUFNLElBQUlBLE1BQU0seUJBQXVDLE9BQWRTLE1BQU1DLE9BQU87WUFDeEQsT0FBTztnQkFDTCxNQUFNLElBQUlWLE1BQU07WUFDbEI7UUFDRjtJQUNGO0lBRUEsT0FBTztRQUFFNEQ7UUFBTUU7UUFBaUJFO1FBQWV2QztRQUFhUztJQUFVO0FBQ3hFO0FBRU8sTUFBTXVELGFBQWEsSUFBSVAsS0FBS0EsS0FBS1MsR0FBRyxLQUFLLElBQUksS0FBSyxLQUFLLEtBQUssTUFBTSxDQUFDLGtCQUFrQiIsInNvdXJjZXMiOlsiL3dvcmtzcGFjZXMvaXdvLXBsYXRmb3JtL3V0aWxzL2l3b1V0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb25uZWN0aW9uLCBQdWJsaWNLZXksIGNsdXN0ZXJBcGlVcmwsIFRyYW5zYWN0aW9uLCBTeXN0ZW1Qcm9ncmFtLCBzZW5kQW5kQ29uZmlybVRyYW5zYWN0aW9uIH0gZnJvbSAnQHNvbGFuYS93ZWIzLmpzJztcbmltcG9ydCB7IEFuY2hvclByb3ZpZGVyLCBQcm9ncmFtLCBJZGwsIEFuY2hvckVycm9yIH0gZnJvbSAnQGNvcmFsLXh5ei9hbmNob3InO1xuaW1wb3J0IGlkbCBmcm9tICdAL2xpYi9wcm9ncmFtcy9pd29fcHJvZ3JhbV9pZGwuanNvbic7XG5pbXBvcnQgQk4gZnJvbSAnYm4uanMnO1xuXG5leHBvcnQgY29uc3QgVE9UQUxfU1VQUExZID0gMThfNDQ2Xzc0NF8wNzM7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVRJTkdfU1VQUExZID0gMThfMjI4XzM5MV8wNTIuMDU3Nzc0O1xuZXhwb3J0IGNvbnN0IExPQ0tFRF9TVVBQTFkgPSAyXzk5OV82ODhfNjAwO1xuZXhwb3J0IGNvbnN0IE1BWF9TVVBQTFkgPSAxOF80NDZfNzQ0XzA3MztcblxuZXhwb3J0IGludGVyZmFjZSBCaWQge1xuICBpZDogc3RyaW5nO1xuICB1c2VySWQ6IHN0cmluZztcbiAgYW1vdW50OiBudW1iZXI7XG4gIHZlc3RpbmdQZXJpb2Q6IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHRyYW5zYWN0aW9uU2lnbmF0dXJlOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xufVxuXG5jb25zdCBCQVJLX1RPS0VOX01JTlRfQUREUkVTUyA9IG5ldyBQdWJsaWNLZXkocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVE9LRU5fUFJPR1JBTV9JRCB8fCAnMk5UdkVzc0oyaTk5OFYyY01HVDRGeTNKaHlGbkF6SEZvbkRvOWRiQWtWcmcnKTtcbmNvbnN0IElXT19QT09MX0lEID0gbmV3IFB1YmxpY0tleShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19JV09fQ09OVFJBQ1RfQUREUkVTUyB8fCAnQkFSS2tlQXdoVHVGemNMSFg0RGpvdFJzbWpYUTFNc2hHclpibjFDVVFxTW8nKTtcblxubGV0IGNvbm5lY3Rpb246IENvbm5lY3Rpb247XG5sZXQgcHJvZ3JhbTogUHJvZ3JhbTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVTb2xhbmFDb25uZWN0aW9uKCkge1xuICBjb25uZWN0aW9uID0gbmV3IENvbm5lY3Rpb24ocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU09MQU5BX1JQQ19VUkwgfHwgY2x1c3RlckFwaVVybCgnZGV2bmV0JyksICdjb25maXJtZWQnKTtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICh3aW5kb3cgYXMgYW55KS5zb2xhbmEpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgd2FsbGV0ID0gKHdpbmRvdyBhcyBhbnkpLnNvbGFuYTtcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IEFuY2hvclByb3ZpZGVyKFxuICAgICAgICBjb25uZWN0aW9uLCBcbiAgICAgICAgd2FsbGV0LFxuICAgICAgICB7IHByZWZsaWdodENvbW1pdG1lbnQ6ICdjb25maXJtZWQnIH1cbiAgICAgICk7XG5cbiAgICAgIGlmICghaWRsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSURMIGlzIHVuZGVmaW5lZC4gTWFrZSBzdXJlIHRoZSBJREwgZmlsZSBpcyBwcm9wZXJseSBpbXBvcnRlZC4nKTtcbiAgICAgIH1cblxuICAgICAgLy8gRW5zdXJlIHRoZSBJREwgaXMgcHJvcGVybHkgc3RydWN0dXJlZFxuICAgICAgY29uc3QgY29tcGxldGVJZGw6IElkbCA9IHtcbiAgICAgICAgLi4uaWRsIGFzIElkbCxcbiAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICBhZGRyZXNzOiBJV09fUE9PTF9JRC50b1N0cmluZygpLFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgY29uc29sZS5sb2coJ0luaXRpYWxpemluZyBwcm9ncmFtIHdpdGggSURMOicsIEpTT04uc3RyaW5naWZ5KGNvbXBsZXRlSWRsLCBudWxsLCAyKSk7XG4gICAgICBjb25zb2xlLmxvZygnSVdPX1BPT0xfSUQ6JywgSVdPX1BPT0xfSUQudG9TdHJpbmcoKSk7XG5cbiAgICAgIHByb2dyYW0gPSBuZXcgUHJvZ3JhbShjb21wbGV0ZUlkbCwgSVdPX1BPT0xfSUQsIHByb3ZpZGVyKTtcbiAgICAgIFxuICAgICAgaWYgKCFwcm9ncmFtKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGluaXRpYWxpemUgcHJvZ3JhbS4gQ2hlY2sgeW91ciBJREwgYW5kIElXT19QT09MX0lELicpO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZygnUHJvZ3JhbSBpbml0aWFsaXplZCBzdWNjZXNzZnVsbHknKTtcbiAgICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5pdGlhbGl6aW5nIHByb2dyYW06JywgZXJyb3IpO1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgQW5jaG9yRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQW5jaG9yRXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvZ3M6JywgZXJyb3IubG9ncyk7XG4gICAgICB9XG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBpbml0aWFsaXplIFNvbGFuYSBjb25uZWN0aW9uOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBpbml0aWFsaXplIFNvbGFuYSBjb25uZWN0aW9uOiBVbmtub3duIGVycm9yJyk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignU29sYW5hIG9iamVjdCBub3QgZm91bmQhIE1ha2Ugc3VyZSB5b3UgaGF2ZSBhIFNvbGFuYSB3YWxsZXQgaW5zdGFsbGVkLicpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEJBUktUb2tlblN1cHBseSgpOiBQcm9taXNlPG51bWJlcj4ge1xuICBpZiAoIWNvbm5lY3Rpb24pIGF3YWl0IGluaXRpYWxpemVTb2xhbmFDb25uZWN0aW9uKCk7XG4gIGNvbnN0IHRva2VuU3VwcGx5ID0gYXdhaXQgY29ubmVjdGlvbi5nZXRUb2tlblN1cHBseShCQVJLX1RPS0VOX01JTlRfQUREUkVTUyk7XG4gIHJldHVybiB0b2tlblN1cHBseS52YWx1ZS51aUFtb3VudCB8fCAwO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBbGxvY2F0ZWRUb2tlbnMoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgaWYgKCFjb25uZWN0aW9uKSBhd2FpdCBpbml0aWFsaXplU29sYW5hQ29ubmVjdGlvbigpO1xuICBjb25zdCBpd29BY2NvdW50ID0gYXdhaXQgY29ubmVjdGlvbi5nZXRBY2NvdW50SW5mbyhJV09fUE9PTF9JRCk7XG4gIGlmICghaXdvQWNjb3VudCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0lXTyBhY2NvdW50IG5vdCBmb3VuZCcpO1xuICAgIHJldHVybiAwO1xuICB9XG4gIC8vIFBhcnNlIGl3b0FjY291bnQgZGF0YSB0byBnZXQgYWxsb2NhdGVkIHRva2Vuc1xuICAvLyBUaGlzIGlzIGEgcGxhY2Vob2xkZXIgaW1wbGVtZW50YXRpb25cbiAgcmV0dXJuIENJUkNVTEFUSU5HX1NVUFBMWSAtIExPQ0tFRF9TVVBQTFk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVCaWRXZWlnaHQoYW1vdW50OiBudW1iZXIsIHZlc3RpbmdQZXJpb2Q6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBhbW91bnQgKiAoMSArIHZlc3RpbmdQZXJpb2QgLyAxMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVUb2tlbkFsbG9jYXRpb24oYmlkOiBCaWQsIHRvdGFsV2VpZ2h0OiBudW1iZXIsIGF2YWlsYWJsZVRva2VuczogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIChiaWQud2VpZ2h0IC8gdG90YWxXZWlnaHQpICogYXZhaWxhYmxlVG9rZW5zO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0QmlkVG9CbG9ja2NoYWluKGFtb3VudDogbnVtYmVyLCB2ZXN0aW5nUGVyaW9kOiBudW1iZXIsIHdhbGxldEFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGlmICghY29ubmVjdGlvbiB8fCAhcHJvZ3JhbSkgYXdhaXQgaW5pdGlhbGl6ZVNvbGFuYUNvbm5lY3Rpb24oKTtcbiAgXG4gIGlmICghcHJvZ3JhbSkge1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvZ3JhbSBub3QgaW5pdGlhbGl6ZWQnKTtcbiAgfVxuXG4gIGNvbnN0IGZyb21QdWJrZXkgPSBuZXcgUHVibGljS2V5KHdhbGxldEFkZHJlc3MpO1xuICBjb25zdCB0cmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbigpLmFkZChcbiAgICBhd2FpdCBwcm9ncmFtLm1ldGhvZHMuc3VibWl0QmlkKG5ldyBCTihhbW91bnQpLCB2ZXN0aW5nUGVyaW9kKVxuICAgICAgLmFjY291bnRzKHtcbiAgICAgICAgdXNlcjogZnJvbVB1YmtleSxcbiAgICAgICAgaXdvUG9vbDogSVdPX1BPT0xfSUQsXG4gICAgICAgIHN5c3RlbVByb2dyYW06IFN5c3RlbVByb2dyYW0ucHJvZ3JhbUlkLFxuICAgICAgfSlcbiAgICAgIC5pbnN0cnVjdGlvbigpXG4gICk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB3YWxsZXQgPSAod2luZG93IGFzIGFueSkuc29sYW5hO1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IHNlbmRBbmRDb25maXJtVHJhbnNhY3Rpb24oXG4gICAgICBjb25uZWN0aW9uLFxuICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICBbd2FsbGV0LnBheWVyXSxcbiAgICAgIHsgY29tbWl0bWVudDogJ2NvbmZpcm1lZCcgfVxuICAgICk7XG4gICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzdWJtaXR0aW5nIGJpZDonLCBlcnJvcik7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHN1Ym1pdCBiaWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gc3VibWl0IGJpZDogVW5rbm93biBlcnJvcicpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TnVtYmVyKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAzLFxuICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogM1xuICB9KS5mb3JtYXQobnVtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFRpbWVSZW1haW5pbmcobXM6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKG1zIC8gKDI0ICogNjAgKiA2MCAqIDEwMDApKTtcbiAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKChtcyAlICgyNCAqIDYwICogNjAgKiAxMDAwKSkgLyAoNjAgKiA2MCAqIDEwMDApKTtcbiAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKG1zICUgKDYwICogNjAgKiAxMDAwKSkgLyAoNjAgKiAxMDAwKSk7XG4gIHJldHVybiBgJHtkYXlzfWQgJHtob3Vyc31oICR7bWludXRlc31tYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUlXT0RhdGEoY2hhaW46ICdzb2xhbmEnIHwgJ3N1aScgPSAnc29sYW5hJykge1xuICBjb25zdCBbYmlkcywgc2V0Qmlkc10gPSB1c2VTdGF0ZTxCaWRbXT4oW10pO1xuICBjb25zdCBbYWxsb2NhdGVkVG9rZW5zLCBzZXRBbGxvY2F0ZWRUb2tlbnNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt0aW1lUmVtYWluaW5nLCBzZXRUaW1lUmVtYWluaW5nXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdG90YWxXZWlnaHQsIHNldFRvdGFsV2VpZ2h0XSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGlzTW91bnRlZCA9IHRydWU7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgaW5pdGlhbGl6ZVNvbGFuYUNvbm5lY3Rpb24oKTtcbiAgICAgICAgY29uc3QgYWxsb2NhdGVkID0gYXdhaXQgZmV0Y2hBbGxvY2F0ZWRUb2tlbnMoKTtcbiAgICAgICAgaWYgKGlzTW91bnRlZCkgc2V0QWxsb2NhdGVkVG9rZW5zKGFsbG9jYXRlZCk7XG5cbiAgICAgICAgaWYgKHByb2dyYW0pIHtcbiAgICAgICAgICAvLyBGZXRjaCBiaWRzIGZyb20gdGhlIHByb2dyYW1cbiAgICAgICAgICBjb25zdCBpd29Qb29sID0gYXdhaXQgcHJvZ3JhbS5hY2NvdW50Lml3b1Bvb2wuZmV0Y2goSVdPX1BPT0xfSUQpO1xuICAgICAgICAgIGlmIChpc01vdW50ZWQgJiYgaXdvUG9vbCAmJiAnYmlkcycgaW4gaXdvUG9vbCkge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkQmlkczogQmlkW10gPSAoaXdvUG9vbC5iaWRzIGFzIGFueVtdKS5tYXAoKGJpZDogYW55KSA9PiAoe1xuICAgICAgICAgICAgICBpZDogYmlkLnB1YmxpY0tleS50b0Jhc2U1OCgpLFxuICAgICAgICAgICAgICB1c2VySWQ6IGJpZC5hY2NvdW50LmJpZGRlci50b0Jhc2U1OCgpLFxuICAgICAgICAgICAgICBhbW91bnQ6IGJpZC5hY2NvdW50LmFtb3VudC50b051bWJlcigpLFxuICAgICAgICAgICAgICB2ZXN0aW5nUGVyaW9kOiBiaWQuYWNjb3VudC52ZXN0aW5nUGVyaW9kLFxuICAgICAgICAgICAgICB3ZWlnaHQ6IGJpZC5hY2NvdW50LndlaWdodC50b051bWJlcigpLFxuICAgICAgICAgICAgICB0cmFuc2FjdGlvblNpZ25hdHVyZTogJycsIC8vIFRoaXMgaW5mb3JtYXRpb24gbWlnaHQgbm90IGJlIGF2YWlsYWJsZSBpbiB0aGUgYWNjb3VudCBkYXRhXG4gICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoYmlkLmFjY291bnQudGltZXN0YW1wLnRvTnVtYmVyKCkgKiAxMDAwKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgc2V0Qmlkcyhmb3JtYXR0ZWRCaWRzKTtcbiAgICAgICAgICAgIGNvbnN0IHdlaWdodCA9IGZvcm1hdHRlZEJpZHMucmVkdWNlKChzdW0sIGJpZCkgPT4gc3VtICsgYmlkLndlaWdodCwgMCk7XG4gICAgICAgICAgICBzZXRUb3RhbFdlaWdodCh3ZWlnaHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgSVdPIGRhdGE6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcblxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGlzTW91bnRlZCkgc2V0VGltZVJlbWFpbmluZyhNYXRoLm1heCgwLCBpd29FbmRUaW1lLmdldFRpbWUoKSAtIERhdGUubm93KCkpKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpc01vdW50ZWQgPSBmYWxzZTtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH07XG4gIH0sIFtjaGFpbl0pO1xuXG4gIGNvbnN0IHN1Ym1pdEJpZCA9IGFzeW5jIChhbW91bnQ6IG51bWJlciwgdmVzdGluZ1BlcmlvZDogbnVtYmVyLCB3YWxsZXRBZGRyZXNzOiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgc3VibWl0QmlkVG9CbG9ja2NoYWluKGFtb3VudCwgdmVzdGluZ1BlcmlvZCwgd2FsbGV0QWRkcmVzcyk7XG4gICAgICBjb25zdCB3ZWlnaHQgPSBjYWxjdWxhdGVCaWRXZWlnaHQoYW1vdW50LCB2ZXN0aW5nUGVyaW9kKTtcbiAgICAgIGNvbnN0IG5ld0JpZDogQmlkID0ge1xuICAgICAgICBpZDogc2lnbmF0dXJlLFxuICAgICAgICB1c2VySWQ6IHdhbGxldEFkZHJlc3MsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgdmVzdGluZ1BlcmlvZCxcbiAgICAgICAgd2VpZ2h0LFxuICAgICAgICB0cmFuc2FjdGlvblNpZ25hdHVyZTogc2lnbmF0dXJlLFxuICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIH07XG4gICAgICBzZXRCaWRzKFsuLi5iaWRzLCBuZXdCaWRdKTtcbiAgICAgIHNldEFsbG9jYXRlZFRva2VucyhhbGxvY2F0ZWRUb2tlbnMgKyBhbW91bnQpO1xuICAgICAgc2V0VG90YWxXZWlnaHQodG90YWxXZWlnaHQgKyB3ZWlnaHQpO1xuICAgICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc3VibWl0dGluZyBiaWQ6JywgZXJyb3IpO1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gc3VibWl0IGJpZDogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gc3VibWl0IGJpZDogVW5rbm93biBlcnJvcicpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBiaWRzLCBhbGxvY2F0ZWRUb2tlbnMsIHRpbWVSZW1haW5pbmcsIHRvdGFsV2VpZ2h0LCBzdWJtaXRCaWQgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGl3b0VuZFRpbWUgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApOyAvLyA3IGRheXMgZnJvbSBub3dcblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29ubmVjdGlvbiIsIlB1YmxpY0tleSIsImNsdXN0ZXJBcGlVcmwiLCJUcmFuc2FjdGlvbiIsIlN5c3RlbVByb2dyYW0iLCJzZW5kQW5kQ29uZmlybVRyYW5zYWN0aW9uIiwiQW5jaG9yUHJvdmlkZXIiLCJQcm9ncmFtIiwiQW5jaG9yRXJyb3IiLCJpZGwiLCJCTiIsIlRPVEFMX1NVUFBMWSIsIkNJUkNVTEFUSU5HX1NVUFBMWSIsIkxPQ0tFRF9TVVBQTFkiLCJNQVhfU1VQUExZIiwiQkFSS19UT0tFTl9NSU5UX0FERFJFU1MiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVE9LRU5fUFJPR1JBTV9JRCIsIklXT19QT09MX0lEIiwiTkVYVF9QVUJMSUNfSVdPX0NPTlRSQUNUX0FERFJFU1MiLCJjb25uZWN0aW9uIiwicHJvZ3JhbSIsImluaXRpYWxpemVTb2xhbmFDb25uZWN0aW9uIiwiTkVYVF9QVUJMSUNfU09MQU5BX1JQQ19VUkwiLCJ3aW5kb3ciLCJzb2xhbmEiLCJ3YWxsZXQiLCJwcm92aWRlciIsInByZWZsaWdodENvbW1pdG1lbnQiLCJFcnJvciIsImNvbXBsZXRlSWRsIiwibWV0YWRhdGEiLCJhZGRyZXNzIiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwibWVzc2FnZSIsImxvZ3MiLCJmZXRjaEJBUktUb2tlblN1cHBseSIsInRva2VuU3VwcGx5IiwiZ2V0VG9rZW5TdXBwbHkiLCJ2YWx1ZSIsInVpQW1vdW50IiwiZmV0Y2hBbGxvY2F0ZWRUb2tlbnMiLCJpd29BY2NvdW50IiwiZ2V0QWNjb3VudEluZm8iLCJjYWxjdWxhdGVCaWRXZWlnaHQiLCJhbW91bnQiLCJ2ZXN0aW5nUGVyaW9kIiwiY2FsY3VsYXRlVG9rZW5BbGxvY2F0aW9uIiwiYmlkIiwidG90YWxXZWlnaHQiLCJhdmFpbGFibGVUb2tlbnMiLCJ3ZWlnaHQiLCJzdWJtaXRCaWRUb0Jsb2NrY2hhaW4iLCJ3YWxsZXRBZGRyZXNzIiwiZnJvbVB1YmtleSIsInRyYW5zYWN0aW9uIiwiYWRkIiwibWV0aG9kcyIsInN1Ym1pdEJpZCIsImFjY291bnRzIiwidXNlciIsIml3b1Bvb2wiLCJzeXN0ZW1Qcm9ncmFtIiwicHJvZ3JhbUlkIiwiaW5zdHJ1Y3Rpb24iLCJzaWduYXR1cmUiLCJwYXllciIsImNvbW1pdG1lbnQiLCJmb3JtYXROdW1iZXIiLCJudW0iLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiZm9ybWF0IiwiZm9ybWF0VGltZVJlbWFpbmluZyIsIm1zIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInVzZUlXT0RhdGEiLCJjaGFpbiIsImJpZHMiLCJzZXRCaWRzIiwiYWxsb2NhdGVkVG9rZW5zIiwic2V0QWxsb2NhdGVkVG9rZW5zIiwidGltZVJlbWFpbmluZyIsInNldFRpbWVSZW1haW5pbmciLCJzZXRUb3RhbFdlaWdodCIsImlzTW91bnRlZCIsImZldGNoRGF0YSIsImFsbG9jYXRlZCIsImFjY291bnQiLCJmZXRjaCIsImZvcm1hdHRlZEJpZHMiLCJtYXAiLCJpZCIsInB1YmxpY0tleSIsInRvQmFzZTU4IiwidXNlcklkIiwiYmlkZGVyIiwidG9OdW1iZXIiLCJ0cmFuc2FjdGlvblNpZ25hdHVyZSIsInRpbWVzdGFtcCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInJlZHVjZSIsInN1bSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJtYXgiLCJpd29FbmRUaW1lIiwiZ2V0VGltZSIsIm5vdyIsImNsZWFySW50ZXJ2YWwiLCJuZXdCaWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./utils/iwoUtils.ts\n"));

/***/ })

});