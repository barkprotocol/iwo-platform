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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CIRCULATING_SUPPLY: () => (/* binding */ CIRCULATING_SUPPLY),\n/* harmony export */   LOCKED_SUPPLY: () => (/* binding */ LOCKED_SUPPLY),\n/* harmony export */   MAX_SUPPLY: () => (/* binding */ MAX_SUPPLY),\n/* harmony export */   TOTAL_SUPPLY: () => (/* binding */ TOTAL_SUPPLY),\n/* harmony export */   calculateBidWeight: () => (/* binding */ calculateBidWeight),\n/* harmony export */   calculateTokenAllocation: () => (/* binding */ calculateTokenAllocation),\n/* harmony export */   fetchAllocatedTokens: () => (/* binding */ fetchAllocatedTokens),\n/* harmony export */   fetchBARKTokenSupply: () => (/* binding */ fetchBARKTokenSupply),\n/* harmony export */   formatNumber: () => (/* binding */ formatNumber),\n/* harmony export */   formatTimeRemaining: () => (/* binding */ formatTimeRemaining),\n/* harmony export */   initializeMultiChainConnection: () => (/* binding */ initializeMultiChainConnection),\n/* harmony export */   initializeSolanaConnection: () => (/* binding */ initializeSolanaConnection),\n/* harmony export */   iwoEndTime: () => (/* binding */ iwoEndTime),\n/* harmony export */   submitBidToBlockchain: () => (/* binding */ submitBidToBlockchain),\n/* harmony export */   useIWOData: () => (/* binding */ useIWOData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.1.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/web3.js */ \"(app-pages-browser)/./node_modules/.pnpm/@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coral-xyz/anchor */ \"(app-pages-browser)/./node_modules/.pnpm/@coral-xyz+anchor@0.30.1_bufferutil@4.0.8_utf-8-validate@5.0.10/node_modules/@coral-xyz/anchor/dist/browser/index.js\");\n/* harmony import */ var _lib_programs_iwo_program_idl_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/programs/iwo_program_idl.json */ \"(app-pages-browser)/./lib/programs/iwo_program_idl.json\");\n\n\n\n\nconsole.log('IDL:', _lib_programs_iwo_program_idl_json__WEBPACK_IMPORTED_MODULE_3__);\nconst TOTAL_SUPPLY = 18446744073;\nconst CIRCULATING_SUPPLY = 18228391052.057774;\nconst LOCKED_SUPPLY = 2999688600;\nconst MAX_SUPPLY = 18446744073;\nconst BARK_TOKEN_MINT_ADDRESS = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(\"TokenkegQfeZyiNwAJbNbGKPFXkQd5J8X8wnF8MPzYx\" || 0);\nconst IWO_POOL_ID = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(\"BARKkeAwhTuFzcLHX4DjotRsmjXQ1MshGrZbn1CUQqMo\" || 0);\nconst VESTING_PROGRAM_ID = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey('GKb2vF9RE1UPhV6hQi7yiL5tCsdajbJHyTm87zhN3qiU');\nlet connection;\nlet program;\nasync function initializeSolanaConnection() {\n    connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Connection(\"https://api.devnet.solana.com\" || 0, 'confirmed');\n    if ( true && window.solana) {\n        try {\n            const wallet = window.solana;\n            const provider = new _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_2__.AnchorProvider(connection, wallet, {\n                preflightCommitment: 'confirmed'\n            });\n            console.log('Provider:', provider);\n            console.log('IWO_POOL_ID:', IWO_POOL_ID.toBase58());\n            if (!_lib_programs_iwo_program_idl_json__WEBPACK_IMPORTED_MODULE_3__) {\n                throw new Error('IDL is undefined. Make sure the IDL file is properly imported.');\n            }\n            // Add missing properties to the IDL\n            const completeIdl = {\n                ..._lib_programs_iwo_program_idl_json__WEBPACK_IMPORTED_MODULE_3__,\n                metadata: {\n                    name: \"iwo_program\",\n                    version: \"0.1.0\"\n                }\n            };\n            program = new _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_2__.Program(completeIdl, IWO_POOL_ID, provider);\n            if (!program) {\n                throw new Error('Failed to initialize program. Check your IDL and IWO_POOL_ID.');\n            }\n            console.log('Program initialized successfully');\n        } catch (error) {\n            console.error('Error initializing program:', error);\n            if (error instanceof _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_2__.AnchorError) {\n                console.error('AnchorError:', error.message);\n                console.error('Error logs:', error.logs);\n            }\n            if (error instanceof Error) {\n                throw new Error(\"Failed to initialize Solana connection: \".concat(error.message));\n            } else {\n                throw new Error('Failed to initialize Solana connection: Unknown error');\n            }\n        }\n    } else {\n        throw new Error('Solana object not found! Make sure you have a Solana wallet installed.');\n    }\n}\nasync function initializeMultiChainConnection(chain) {\n    if (chain === 'solana') {\n        await initializeSolanaConnection();\n    } else if (chain === 'sui') {\n        console.log('SUI connection not yet implemented');\n    }\n}\nasync function fetchBARKTokenSupply() {\n    if (!connection) await initializeSolanaConnection();\n    const tokenSupply = await connection.getTokenSupply(BARK_TOKEN_MINT_ADDRESS);\n    return tokenSupply.value.uiAmount || 0;\n}\nasync function fetchAllocatedTokens() {\n    if (!connection) await initializeSolanaConnection();\n    const iwoAccount = await connection.getAccountInfo(IWO_POOL_ID);\n    if (!iwoAccount) {\n        console.error('IWO account not found');\n        return 0;\n    }\n    // Parse iwoAccount data to get allocated tokens\n    // This is a placeholder implementation\n    return CIRCULATING_SUPPLY - LOCKED_SUPPLY;\n}\nfunction calculateBidWeight(amount, vestingPeriod) {\n    return amount * (1 + vestingPeriod / 12);\n}\nfunction calculateTokenAllocation(bid, totalWeight, availableTokens) {\n    return bid.weight / totalWeight * availableTokens;\n}\nasync function submitBidToBlockchain(amount, vestingPeriod, walletAddress) {\n    if (!connection || !program) await initializeSolanaConnection();\n    if (!program) {\n        throw new Error('Program not initialized');\n    }\n    const fromPubkey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(walletAddress);\n    const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Transaction().add(await program.methods.submitBid(new _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_2__.BN(amount), vestingPeriod).accounts({\n        user: fromPubkey,\n        iwoPool: IWO_POOL_ID,\n        systemProgram: _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.SystemProgram.programId\n    }).instruction());\n    try {\n        const wallet = window.solana;\n        const signature = await (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.sendAndConfirmTransaction)(connection, transaction, [\n            wallet\n        ]);\n        return signature;\n    } catch (error) {\n        console.error('Error submitting bid to blockchain:', error);\n        throw error;\n    }\n}\nfunction formatNumber(num) {\n    return new Intl.NumberFormat('en-US', {\n        minimumFractionDigits: 3,\n        maximumFractionDigits: 3\n    }).format(num);\n}\nfunction formatTimeRemaining(ms) {\n    const days = Math.floor(ms / (24 * 60 * 60 * 1000));\n    const hours = Math.floor(ms % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));\n    const minutes = Math.floor(ms % (60 * 60 * 1000) / (60 * 1000));\n    return \"\".concat(days, \"d \").concat(hours, \"h \").concat(minutes, \"m\");\n}\nfunction useIWOData() {\n    let chain = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'solana';\n    const [bids, setBids] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [allocatedTokens, setAllocatedTokens] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const [timeRemaining, setTimeRemaining] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const [totalWeight, setTotalWeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)({\n        \"useIWOData.useEffect\": ()=>{\n            let isMounted = true;\n            const fetchData = {\n                \"useIWOData.useEffect.fetchData\": async ()=>{\n                    try {\n                        await initializeMultiChainConnection(chain);\n                        const allocated = await fetchAllocatedTokens();\n                        if (isMounted) setAllocatedTokens(allocated);\n                        if (program) {\n                            // Fetch bids from the program\n                            const iwoPool = await program.account.iwoPool.fetch(IWO_POOL_ID);\n                            if (isMounted && iwoPool.bids) {\n                                const formattedBids = iwoPool.bids.map({\n                                    \"useIWOData.useEffect.fetchData.formattedBids\": (bid)=>({\n                                            id: bid.publicKey.toBase58(),\n                                            userId: bid.account.bidder.toBase58(),\n                                            amount: bid.account.amount.toNumber(),\n                                            vestingPeriod: bid.account.vestingPeriod,\n                                            weight: bid.account.weight.toNumber(),\n                                            transactionSignature: '',\n                                            timestamp: new Date(bid.account.timestamp.toNumber() * 1000).toISOString()\n                                        })\n                                }[\"useIWOData.useEffect.fetchData.formattedBids\"]);\n                                setBids(formattedBids);\n                                const weight = formattedBids.reduce({\n                                    \"useIWOData.useEffect.fetchData.weight\": (sum, bid)=>sum + bid.weight\n                                }[\"useIWOData.useEffect.fetchData.weight\"], 0);\n                                setTotalWeight(weight);\n                            }\n                        }\n                    } catch (error) {\n                        console.error('Error fetching IWO data:', error);\n                    }\n                }\n            }[\"useIWOData.useEffect.fetchData\"];\n            fetchData();\n            const interval = setInterval({\n                \"useIWOData.useEffect.interval\": ()=>{\n                    if (isMounted) setTimeRemaining(Math.max(0, iwoEndTime.getTime() - Date.now()));\n                }\n            }[\"useIWOData.useEffect.interval\"], 1000);\n            return ({\n                \"useIWOData.useEffect\": ()=>{\n                    isMounted = false;\n                    clearInterval(interval);\n                }\n            })[\"useIWOData.useEffect\"];\n        }\n    }[\"useIWOData.useEffect\"], [\n        chain\n    ]);\n    const submitBid = async (amount, vestingPeriod, walletAddress)=>{\n        try {\n            const signature = await submitBidToBlockchain(amount, vestingPeriod, walletAddress);\n            const weight = calculateBidWeight(amount, vestingPeriod);\n            const newBid = {\n                id: signature,\n                userId: walletAddress,\n                amount,\n                vestingPeriod,\n                weight,\n                transactionSignature: signature,\n                timestamp: new Date().toISOString()\n            };\n            setBids([\n                ...bids,\n                newBid\n            ]);\n            setAllocatedTokens(allocatedTokens + amount);\n            setTotalWeight(totalWeight + weight);\n            return signature;\n        } catch (error) {\n            console.error('Error submitting bid:', error);\n            throw error;\n        }\n    };\n    return {\n        bids,\n        allocatedTokens,\n        timeRemaining,\n        totalWeight,\n        submitBid\n    };\n}\nconst iwoEndTime = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days from now\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBTztZQUN6QjdCLG1CQUFtQkQsa0JBQWtCdEM7WUFDckMwQyxlQUFldEMsY0FBY0U7WUFDN0IsT0FBT2M7UUFDVCxFQUFFLE9BQU9sQyxPQUFPO1lBQ2Q1QixRQUFRNEIsS0FBSyxDQUFDLHlCQUF5QkE7WUFDdkMsTUFBTUE7UUFDUjtJQUNGO0lBRUEsT0FBTztRQUFFa0Q7UUFBTUU7UUFBaUJFO1FBQWVwQztRQUFhUztJQUFVO0FBQ3hFO0FBRU8sTUFBTW1ELGFBQWEsSUFBSVAsS0FBS0EsS0FBS1MsR0FBRyxLQUFLLElBQUksS0FBSyxLQUFLLEtBQUssTUFBTSxDQUFDLGtCQUFrQiIsInNvdXJjZXMiOlsiL3dvcmtzcGFjZXMvaXdvLXBsYXRmb3JtL3V0aWxzL2l3b1V0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb25uZWN0aW9uLCBQdWJsaWNLZXksIGNsdXN0ZXJBcGlVcmwsIFRyYW5zYWN0aW9uLCBTeXN0ZW1Qcm9ncmFtLCBzZW5kQW5kQ29uZmlybVRyYW5zYWN0aW9uLCBMQU1QT1JUU19QRVJfU09MIH0gZnJvbSAnQHNvbGFuYS93ZWIzLmpzJztcbmltcG9ydCB7IFByb2dyYW0sIEFuY2hvclByb3ZpZGVyLCB3ZWIzIGFzIGFuY2hvcldlYjMsIElkbCwgQk4sIEFuY2hvckVycm9yIH0gZnJvbSAnQGNvcmFsLXh5ei9hbmNob3InO1xuaW1wb3J0IGlkbCBmcm9tICdAL2xpYi9wcm9ncmFtcy9pd29fcHJvZ3JhbV9pZGwuanNvbic7XG5jb25zb2xlLmxvZygnSURMOicsIGlkbCk7XG5cbmV4cG9ydCBjb25zdCBUT1RBTF9TVVBQTFkgPSAxOF80NDZfNzQ0XzA3MztcbmV4cG9ydCBjb25zdCBDSVJDVUxBVElOR19TVVBQTFkgPSAxOF8yMjhfMzkxXzA1Mi4wNTc3NzQ7XG5leHBvcnQgY29uc3QgTE9DS0VEX1NVUFBMWSA9IDJfOTk5XzY4OF82MDA7XG5leHBvcnQgY29uc3QgTUFYX1NVUFBMWSA9IDE4XzQ0Nl83NDRfMDczO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJpZCB7XG4gIGlkOiBzdHJpbmc7XG4gIHVzZXJJZDogc3RyaW5nO1xuICBhbW91bnQ6IG51bWJlcjtcbiAgdmVzdGluZ1BlcmlvZDogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgdHJhbnNhY3Rpb25TaWduYXR1cmU6IHN0cmluZztcbiAgdGltZXN0YW1wOiBzdHJpbmc7XG59XG5cbmNvbnN0IEJBUktfVE9LRU5fTUlOVF9BRERSRVNTID0gbmV3IFB1YmxpY0tleShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19UT0tFTl9QUk9HUkFNX0lEIHx8ICcyTlR2RXNzSjJpOTk4VjJjTUdUNEZ5M0poeUZuQXpIRm9uRG85ZGJBa1ZyZycpO1xuY29uc3QgSVdPX1BPT0xfSUQgPSBuZXcgUHVibGljS2V5KHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lXT19DT05UUkFDVF9BRERSRVNTIHx8ICdCQVJLa2VBd2hUdUZ6Y0xIWDREam90UnNtalhRMU1zaEdyWmJuMUNVUXFNbycpO1xuY29uc3QgVkVTVElOR19QUk9HUkFNX0lEID0gbmV3IFB1YmxpY0tleSgnR0tiMnZGOVJFMVVQaFY2aFFpN3lpTDV0Q3NkYWpiSkh5VG04N3poTjNxaVUnKTtcblxubGV0IGNvbm5lY3Rpb246IENvbm5lY3Rpb247XG5sZXQgcHJvZ3JhbTogUHJvZ3JhbTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVTb2xhbmFDb25uZWN0aW9uKCkge1xuICBjb25uZWN0aW9uID0gbmV3IENvbm5lY3Rpb24ocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU09MQU5BX1JQQ19VUkwgfHwgY2x1c3RlckFwaVVybCgnZGV2bmV0JyksICdjb25maXJtZWQnKTtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICh3aW5kb3cgYXMgYW55KS5zb2xhbmEpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgd2FsbGV0ID0gKHdpbmRvdyBhcyBhbnkpLnNvbGFuYTtcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IEFuY2hvclByb3ZpZGVyKFxuICAgICAgICBjb25uZWN0aW9uLCBcbiAgICAgICAgd2FsbGV0LFxuICAgICAgICB7IHByZWZsaWdodENvbW1pdG1lbnQ6ICdjb25maXJtZWQnIH1cbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZygnUHJvdmlkZXI6JywgcHJvdmlkZXIpO1xuICAgICAgY29uc29sZS5sb2coJ0lXT19QT09MX0lEOicsIElXT19QT09MX0lELnRvQmFzZTU4KCkpO1xuXG4gICAgICBpZiAoIWlkbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lETCBpcyB1bmRlZmluZWQuIE1ha2Ugc3VyZSB0aGUgSURMIGZpbGUgaXMgcHJvcGVybHkgaW1wb3J0ZWQuJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBtaXNzaW5nIHByb3BlcnRpZXMgdG8gdGhlIElETFxuICAgICAgY29uc3QgY29tcGxldGVJZGw6IElkbCA9IHtcbiAgICAgICAgLi4uKGlkbCBhcyB1bmtub3duIGFzIElkbCksXG4gICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgbmFtZTogXCJpd29fcHJvZ3JhbVwiLFxuICAgICAgICAgIHZlcnNpb246IFwiMC4xLjBcIixcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIHByb2dyYW0gPSBuZXcgUHJvZ3JhbShjb21wbGV0ZUlkbCwgSVdPX1BPT0xfSUQsIHByb3ZpZGVyKTtcbiAgICAgIFxuICAgICAgaWYgKCFwcm9ncmFtKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGluaXRpYWxpemUgcHJvZ3JhbS4gQ2hlY2sgeW91ciBJREwgYW5kIElXT19QT09MX0lELicpO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZygnUHJvZ3JhbSBpbml0aWFsaXplZCBzdWNjZXNzZnVsbHknKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5pdGlhbGl6aW5nIHByb2dyYW06JywgZXJyb3IpO1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgQW5jaG9yRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQW5jaG9yRXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvZ3M6JywgZXJyb3IubG9ncyk7XG4gICAgICB9XG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBpbml0aWFsaXplIFNvbGFuYSBjb25uZWN0aW9uOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBpbml0aWFsaXplIFNvbGFuYSBjb25uZWN0aW9uOiBVbmtub3duIGVycm9yJyk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignU29sYW5hIG9iamVjdCBub3QgZm91bmQhIE1ha2Ugc3VyZSB5b3UgaGF2ZSBhIFNvbGFuYSB3YWxsZXQgaW5zdGFsbGVkLicpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0aWFsaXplTXVsdGlDaGFpbkNvbm5lY3Rpb24oY2hhaW46ICdzb2xhbmEnIHwgJ3N1aScpIHtcbiAgaWYgKGNoYWluID09PSAnc29sYW5hJykge1xuICAgIGF3YWl0IGluaXRpYWxpemVTb2xhbmFDb25uZWN0aW9uKCk7XG4gIH0gZWxzZSBpZiAoY2hhaW4gPT09ICdzdWknKSB7XG4gICAgY29uc29sZS5sb2coJ1NVSSBjb25uZWN0aW9uIG5vdCB5ZXQgaW1wbGVtZW50ZWQnKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hCQVJLVG9rZW5TdXBwbHkoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgaWYgKCFjb25uZWN0aW9uKSBhd2FpdCBpbml0aWFsaXplU29sYW5hQ29ubmVjdGlvbigpO1xuICBjb25zdCB0b2tlblN1cHBseSA9IGF3YWl0IGNvbm5lY3Rpb24uZ2V0VG9rZW5TdXBwbHkoQkFSS19UT0tFTl9NSU5UX0FERFJFU1MpO1xuICByZXR1cm4gdG9rZW5TdXBwbHkudmFsdWUudWlBbW91bnQgfHwgMDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQWxsb2NhdGVkVG9rZW5zKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gIGlmICghY29ubmVjdGlvbikgYXdhaXQgaW5pdGlhbGl6ZVNvbGFuYUNvbm5lY3Rpb24oKTtcbiAgY29uc3QgaXdvQWNjb3VudCA9IGF3YWl0IGNvbm5lY3Rpb24uZ2V0QWNjb3VudEluZm8oSVdPX1BPT0xfSUQpO1xuICBpZiAoIWl3b0FjY291bnQpIHtcbiAgICBjb25zb2xlLmVycm9yKCdJV08gYWNjb3VudCBub3QgZm91bmQnKTtcbiAgICByZXR1cm4gMDtcbiAgfVxuICAvLyBQYXJzZSBpd29BY2NvdW50IGRhdGEgdG8gZ2V0IGFsbG9jYXRlZCB0b2tlbnNcbiAgLy8gVGhpcyBpcyBhIHBsYWNlaG9sZGVyIGltcGxlbWVudGF0aW9uXG4gIHJldHVybiBDSVJDVUxBVElOR19TVVBQTFkgLSBMT0NLRURfU1VQUExZO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQmlkV2VpZ2h0KGFtb3VudDogbnVtYmVyLCB2ZXN0aW5nUGVyaW9kOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gYW1vdW50ICogKDEgKyB2ZXN0aW5nUGVyaW9kIC8gMTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlVG9rZW5BbGxvY2F0aW9uKGJpZDogQmlkLCB0b3RhbFdlaWdodDogbnVtYmVyLCBhdmFpbGFibGVUb2tlbnM6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiAoYmlkLndlaWdodCAvIHRvdGFsV2VpZ2h0KSAqIGF2YWlsYWJsZVRva2Vucztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdEJpZFRvQmxvY2tjaGFpbihhbW91bnQ6IG51bWJlciwgdmVzdGluZ1BlcmlvZDogbnVtYmVyLCB3YWxsZXRBZGRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICBpZiAoIWNvbm5lY3Rpb24gfHwgIXByb2dyYW0pIGF3YWl0IGluaXRpYWxpemVTb2xhbmFDb25uZWN0aW9uKCk7XG4gIFxuICBpZiAoIXByb2dyYW0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb2dyYW0gbm90IGluaXRpYWxpemVkJyk7XG4gIH1cblxuICBjb25zdCBmcm9tUHVia2V5ID0gbmV3IFB1YmxpY0tleSh3YWxsZXRBZGRyZXNzKTtcbiAgY29uc3QgdHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb24oKS5hZGQoXG4gICAgYXdhaXQgcHJvZ3JhbS5tZXRob2RzLnN1Ym1pdEJpZChuZXcgQk4oYW1vdW50KSwgdmVzdGluZ1BlcmlvZClcbiAgICAgIC5hY2NvdW50cyh7XG4gICAgICAgIHVzZXI6IGZyb21QdWJrZXksXG4gICAgICAgIGl3b1Bvb2w6IElXT19QT09MX0lELFxuICAgICAgICBzeXN0ZW1Qcm9ncmFtOiBTeXN0ZW1Qcm9ncmFtLnByb2dyYW1JZCxcbiAgICAgIH0pXG4gICAgICAuaW5zdHJ1Y3Rpb24oKVxuICApO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgd2FsbGV0ID0gKHdpbmRvdyBhcyBhbnkpLnNvbGFuYTtcbiAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBzZW5kQW5kQ29uZmlybVRyYW5zYWN0aW9uKFxuICAgICAgY29ubmVjdGlvbixcbiAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgW3dhbGxldF1cbiAgICApO1xuICAgIHJldHVybiBzaWduYXR1cmU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3Igc3VibWl0dGluZyBiaWQgdG8gYmxvY2tjaGFpbjonLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE51bWJlcihudW06IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMyxcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDNcbiAgfSkuZm9ybWF0KG51bSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRUaW1lUmVtYWluaW5nKG1zOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihtcyAvICgyNCAqIDYwICogNjAgKiAxMDAwKSk7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigobXMgJSAoMjQgKiA2MCAqIDYwICogMTAwMCkpIC8gKDYwICogNjAgKiAxMDAwKSk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChtcyAlICg2MCAqIDYwICogMTAwMCkpIC8gKDYwICogMTAwMCkpO1xuICByZXR1cm4gYCR7ZGF5c31kICR7aG91cnN9aCAke21pbnV0ZXN9bWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJV09EYXRhKGNoYWluOiAnc29sYW5hJyB8ICdzdWknID0gJ3NvbGFuYScpIHtcbiAgY29uc3QgW2JpZHMsIHNldEJpZHNdID0gdXNlU3RhdGU8QmlkW10+KFtdKTtcbiAgY29uc3QgW2FsbG9jYXRlZFRva2Vucywgc2V0QWxsb2NhdGVkVG9rZW5zXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdGltZVJlbWFpbmluZywgc2V0VGltZVJlbWFpbmluZ10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RvdGFsV2VpZ2h0LCBzZXRUb3RhbFdlaWdodF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBpc01vdW50ZWQgPSB0cnVlO1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGluaXRpYWxpemVNdWx0aUNoYWluQ29ubmVjdGlvbihjaGFpbik7XG4gICAgICAgIGNvbnN0IGFsbG9jYXRlZCA9IGF3YWl0IGZldGNoQWxsb2NhdGVkVG9rZW5zKCk7XG4gICAgICAgIGlmIChpc01vdW50ZWQpIHNldEFsbG9jYXRlZFRva2VucyhhbGxvY2F0ZWQpO1xuXG4gICAgICAgIGlmIChwcm9ncmFtKSB7XG4gICAgICAgICAgLy8gRmV0Y2ggYmlkcyBmcm9tIHRoZSBwcm9ncmFtXG4gICAgICAgICAgY29uc3QgaXdvUG9vbCA9IGF3YWl0IHByb2dyYW0uYWNjb3VudC5pd29Qb29sLmZldGNoKElXT19QT09MX0lEKTtcbiAgICAgICAgICBpZiAoaXNNb3VudGVkICYmIGl3b1Bvb2wuYmlkcykge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkQmlkczogQmlkW10gPSBpd29Qb29sLmJpZHMubWFwKChiaWQ6IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgaWQ6IGJpZC5wdWJsaWNLZXkudG9CYXNlNTgoKSxcbiAgICAgICAgICAgICAgdXNlcklkOiBiaWQuYWNjb3VudC5iaWRkZXIudG9CYXNlNTgoKSxcbiAgICAgICAgICAgICAgYW1vdW50OiBiaWQuYWNjb3VudC5hbW91bnQudG9OdW1iZXIoKSxcbiAgICAgICAgICAgICAgdmVzdGluZ1BlcmlvZDogYmlkLmFjY291bnQudmVzdGluZ1BlcmlvZCxcbiAgICAgICAgICAgICAgd2VpZ2h0OiBiaWQuYWNjb3VudC53ZWlnaHQudG9OdW1iZXIoKSxcbiAgICAgICAgICAgICAgdHJhbnNhY3Rpb25TaWduYXR1cmU6ICcnLCAvLyBUaGlzIGluZm9ybWF0aW9uIG1pZ2h0IG5vdCBiZSBhdmFpbGFibGUgaW4gdGhlIGFjY291bnQgZGF0YVxuICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKGJpZC5hY2NvdW50LnRpbWVzdGFtcC50b051bWJlcigpICogMTAwMCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHNldEJpZHMoZm9ybWF0dGVkQmlkcyk7XG4gICAgICAgICAgICBjb25zdCB3ZWlnaHQgPSBmb3JtYXR0ZWRCaWRzLnJlZHVjZSgoc3VtLCBiaWQpID0+IHN1bSArIGJpZC53ZWlnaHQsIDApO1xuICAgICAgICAgICAgc2V0VG90YWxXZWlnaHQod2VpZ2h0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIElXTyBkYXRhOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG5cbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChpc01vdW50ZWQpIHNldFRpbWVSZW1haW5pbmcoTWF0aC5tYXgoMCwgaXdvRW5kVGltZS5nZXRUaW1lKCkgLSBEYXRlLm5vdygpKSk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaXNNb3VudGVkID0gZmFsc2U7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9O1xuICB9LCBbY2hhaW5dKTtcblxuICBjb25zdCBzdWJtaXRCaWQgPSBhc3luYyAoYW1vdW50OiBudW1iZXIsIHZlc3RpbmdQZXJpb2Q6IG51bWJlciwgd2FsbGV0QWRkcmVzczogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IHN1Ym1pdEJpZFRvQmxvY2tjaGFpbihhbW91bnQsIHZlc3RpbmdQZXJpb2QsIHdhbGxldEFkZHJlc3MpO1xuICAgICAgY29uc3Qgd2VpZ2h0ID0gY2FsY3VsYXRlQmlkV2VpZ2h0KGFtb3VudCwgdmVzdGluZ1BlcmlvZCk7XG4gICAgICBjb25zdCBuZXdCaWQ6IEJpZCA9IHtcbiAgICAgICAgaWQ6IHNpZ25hdHVyZSxcbiAgICAgICAgdXNlcklkOiB3YWxsZXRBZGRyZXNzLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHZlc3RpbmdQZXJpb2QsXG4gICAgICAgIHdlaWdodCxcbiAgICAgICAgdHJhbnNhY3Rpb25TaWduYXR1cmU6IHNpZ25hdHVyZSxcbiAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB9O1xuICAgICAgc2V0QmlkcyhbLi4uYmlkcywgbmV3QmlkXSk7XG4gICAgICBzZXRBbGxvY2F0ZWRUb2tlbnMoYWxsb2NhdGVkVG9rZW5zICsgYW1vdW50KTtcbiAgICAgIHNldFRvdGFsV2VpZ2h0KHRvdGFsV2VpZ2h0ICsgd2VpZ2h0KTtcbiAgICAgIHJldHVybiBzaWduYXR1cmU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHN1Ym1pdHRpbmcgYmlkOicsIGVycm9yKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBiaWRzLCBhbGxvY2F0ZWRUb2tlbnMsIHRpbWVSZW1haW5pbmcsIHRvdGFsV2VpZ2h0LCBzdWJtaXRCaWQgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGl3b0VuZFRpbWUgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApOyAvLyA3IGRheXMgZnJvbSBub3dcblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29ubmVjdGlvbiIsIlB1YmxpY0tleSIsImNsdXN0ZXJBcGlVcmwiLCJUcmFuc2FjdGlvbiIsIlN5c3RlbVByb2dyYW0iLCJzZW5kQW5kQ29uZmlybVRyYW5zYWN0aW9uIiwiUHJvZ3JhbSIsIkFuY2hvclByb3ZpZGVyIiwiQk4iLCJBbmNob3JFcnJvciIsImlkbCIsImNvbnNvbGUiLCJsb2ciLCJUT1RBTF9TVVBQTFkiLCJDSVJDVUxBVElOR19TVVBQTFkiLCJMT0NLRURfU1VQUExZIiwiTUFYX1NVUFBMWSIsIkJBUktfVE9LRU5fTUlOVF9BRERSRVNTIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1RPS0VOX1BST0dSQU1fSUQiLCJJV09fUE9PTF9JRCIsIk5FWFRfUFVCTElDX0lXT19DT05UUkFDVF9BRERSRVNTIiwiVkVTVElOR19QUk9HUkFNX0lEIiwiY29ubmVjdGlvbiIsInByb2dyYW0iLCJpbml0aWFsaXplU29sYW5hQ29ubmVjdGlvbiIsIk5FWFRfUFVCTElDX1NPTEFOQV9SUENfVVJMIiwid2luZG93Iiwic29sYW5hIiwid2FsbGV0IiwicHJvdmlkZXIiLCJwcmVmbGlnaHRDb21taXRtZW50IiwidG9CYXNlNTgiLCJFcnJvciIsImNvbXBsZXRlSWRsIiwibWV0YWRhdGEiLCJuYW1lIiwidmVyc2lvbiIsImVycm9yIiwibWVzc2FnZSIsImxvZ3MiLCJpbml0aWFsaXplTXVsdGlDaGFpbkNvbm5lY3Rpb24iLCJjaGFpbiIsImZldGNoQkFSS1Rva2VuU3VwcGx5IiwidG9rZW5TdXBwbHkiLCJnZXRUb2tlblN1cHBseSIsInZhbHVlIiwidWlBbW91bnQiLCJmZXRjaEFsbG9jYXRlZFRva2VucyIsIml3b0FjY291bnQiLCJnZXRBY2NvdW50SW5mbyIsImNhbGN1bGF0ZUJpZFdlaWdodCIsImFtb3VudCIsInZlc3RpbmdQZXJpb2QiLCJjYWxjdWxhdGVUb2tlbkFsbG9jYXRpb24iLCJiaWQiLCJ0b3RhbFdlaWdodCIsImF2YWlsYWJsZVRva2VucyIsIndlaWdodCIsInN1Ym1pdEJpZFRvQmxvY2tjaGFpbiIsIndhbGxldEFkZHJlc3MiLCJmcm9tUHVia2V5IiwidHJhbnNhY3Rpb24iLCJhZGQiLCJtZXRob2RzIiwic3VibWl0QmlkIiwiYWNjb3VudHMiLCJ1c2VyIiwiaXdvUG9vbCIsInN5c3RlbVByb2dyYW0iLCJwcm9ncmFtSWQiLCJpbnN0cnVjdGlvbiIsInNpZ25hdHVyZSIsImZvcm1hdE51bWJlciIsIm51bSIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJmb3JtYXQiLCJmb3JtYXRUaW1lUmVtYWluaW5nIiwibXMiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwidXNlSVdPRGF0YSIsImJpZHMiLCJzZXRCaWRzIiwiYWxsb2NhdGVkVG9rZW5zIiwic2V0QWxsb2NhdGVkVG9rZW5zIiwidGltZVJlbWFpbmluZyIsInNldFRpbWVSZW1haW5pbmciLCJzZXRUb3RhbFdlaWdodCIsImlzTW91bnRlZCIsImZldGNoRGF0YSIsImFsbG9jYXRlZCIsImFjY291bnQiLCJmZXRjaCIsImZvcm1hdHRlZEJpZHMiLCJtYXAiLCJpZCIsInB1YmxpY0tleSIsInVzZXJJZCIsImJpZGRlciIsInRvTnVtYmVyIiwidHJhbnNhY3Rpb25TaWduYXR1cmUiLCJ0aW1lc3RhbXAiLCJEYXRlIiwidG9JU09TdHJpbmciLCJyZWR1Y2UiLCJzdW0iLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibWF4IiwiaXdvRW5kVGltZSIsImdldFRpbWUiLCJub3ciLCJjbGVhckludGVydmFsIiwibmV3QmlkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./utils/iwoUtils.ts\n"));

/***/ })

});