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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CIRCULATING_SUPPLY: () => (/* binding */ CIRCULATING_SUPPLY),\n/* harmony export */   LOCKED_SUPPLY: () => (/* binding */ LOCKED_SUPPLY),\n/* harmony export */   MAX_SUPPLY: () => (/* binding */ MAX_SUPPLY),\n/* harmony export */   TOTAL_SUPPLY: () => (/* binding */ TOTAL_SUPPLY),\n/* harmony export */   calculateBidWeight: () => (/* binding */ calculateBidWeight),\n/* harmony export */   calculateTokenAllocation: () => (/* binding */ calculateTokenAllocation),\n/* harmony export */   fetchAllocatedTokens: () => (/* binding */ fetchAllocatedTokens),\n/* harmony export */   fetchBARKTokenSupply: () => (/* binding */ fetchBARKTokenSupply),\n/* harmony export */   formatNumber: () => (/* binding */ formatNumber),\n/* harmony export */   formatTimeRemaining: () => (/* binding */ formatTimeRemaining),\n/* harmony export */   initializeMultiChainConnection: () => (/* binding */ initializeMultiChainConnection),\n/* harmony export */   initializeSolanaConnection: () => (/* binding */ initializeSolanaConnection),\n/* harmony export */   iwoEndTime: () => (/* binding */ iwoEndTime),\n/* harmony export */   submitBidToBlockchain: () => (/* binding */ submitBidToBlockchain),\n/* harmony export */   useIWOData: () => (/* binding */ useIWOData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.1.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/web3.js */ \"(app-pages-browser)/./node_modules/.pnpm/@solana+web3.js@1.98.0_bufferutil@4.0.8_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coral-xyz/anchor */ \"(app-pages-browser)/./node_modules/.pnpm/@coral-xyz+anchor@0.30.1_bufferutil@4.0.8_utf-8-validate@5.0.10/node_modules/@coral-xyz/anchor/dist/browser/index.js\");\n/* harmony import */ var _lib_programs_iwo_program_idl_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/programs/iwo_program_idl.json */ \"(app-pages-browser)/./lib/programs/iwo_program_idl.json\");\n\n\n\n\nconsole.log('IDL:', _lib_programs_iwo_program_idl_json__WEBPACK_IMPORTED_MODULE_3__);\nconst TOTAL_SUPPLY = 18446744073;\nconst CIRCULATING_SUPPLY = 18228391052.057774;\nconst LOCKED_SUPPLY = 2999688600;\nconst MAX_SUPPLY = 18446744073;\nconst BARK_TOKEN_MINT_ADDRESS = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(\"TokenkegQfeZyiNwAJbNbGKPFXkQd5J8X8wnF8MPzYx\" || 0);\nconst IWO_POOL_ID = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(\"BARKkeAwhTuFzcLHX4DjotRsmjXQ1MshGrZbn1CUQqMo\" || 0);\nconst VESTING_PROGRAM_ID = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey('GKb2vF9RE1UPhV6hQi7yiL5tCsdajbJHyTm87zhN3qiU');\nlet connection;\nlet program;\nasync function initializeSolanaConnection() {\n    connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Connection(\"https://api.devnet.solana.com\" || 0, 'confirmed');\n    if ( true && window.solana) {\n        try {\n            const wallet = window.solana;\n            const provider = new _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_2__.AnchorProvider(connection, wallet, {\n                preflightCommitment: 'confirmed'\n            });\n            console.log('Provider:', provider);\n            console.log('IWO_POOL_ID:', IWO_POOL_ID.toBase58());\n            if (!_lib_programs_iwo_program_idl_json__WEBPACK_IMPORTED_MODULE_3__) {\n                throw new Error('IDL is undefined. Make sure the IDL file is properly imported.');\n            }\n            // Add missing properties to the IDL\n            const completeIdl = {\n                ..._lib_programs_iwo_program_idl_json__WEBPACK_IMPORTED_MODULE_3__,\n                address: IWO_POOL_ID.toBase58(),\n                metadata: {\n                    address: IWO_POOL_ID.toBase58()\n                }\n            };\n            program = new _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_2__.Program(completeIdl, IWO_POOL_ID, provider);\n            if (!program) {\n                throw new Error('Failed to initialize program. Check your IDL and IWO_POOL_ID.');\n            }\n            console.log('Program initialized successfully');\n        } catch (error) {\n            console.error('Error initializing program:', error);\n            if (error instanceof _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_2__.AnchorError) {\n                console.error('AnchorError:', error.message);\n                console.error('Error logs:', error.logs);\n            }\n            if (error instanceof Error) {\n                throw new Error(\"Failed to initialize Solana connection: \".concat(error.message));\n            } else {\n                throw new Error('Failed to initialize Solana connection: Unknown error');\n            }\n        }\n    } else {\n        throw new Error('Solana object not found! Make sure you have a Solana wallet installed.');\n    }\n}\nasync function initializeMultiChainConnection(chain) {\n    if (chain === 'solana') {\n        await initializeSolanaConnection();\n    } else if (chain === 'sui') {\n        console.log('SUI connection not yet implemented');\n    }\n}\nasync function fetchBARKTokenSupply() {\n    if (!connection) await initializeSolanaConnection();\n    const tokenSupply = await connection.getTokenSupply(BARK_TOKEN_MINT_ADDRESS);\n    return tokenSupply.value.uiAmount || 0;\n}\nasync function fetchAllocatedTokens() {\n    if (!connection) await initializeSolanaConnection();\n    const iwoAccount = await connection.getAccountInfo(IWO_POOL_ID);\n    if (!iwoAccount) {\n        console.error('IWO account not found');\n        return 0;\n    }\n    // Parse iwoAccount data to get allocated tokens\n    // This is a placeholder implementation\n    return CIRCULATING_SUPPLY - LOCKED_SUPPLY;\n}\nfunction calculateBidWeight(amount, vestingPeriod) {\n    return amount * (1 + vestingPeriod / 12);\n}\nfunction calculateTokenAllocation(bid, totalWeight, availableTokens) {\n    return bid.weight / totalWeight * availableTokens;\n}\nasync function submitBidToBlockchain(amount, vestingPeriod, walletAddress) {\n    if (!connection || !program) await initializeSolanaConnection();\n    if (!program) {\n        throw new Error('Program not initialized');\n    }\n    const fromPubkey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(walletAddress);\n    const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Transaction().add(await program.methods.submitBid(new _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_2__.BN(amount), vestingPeriod).accounts({\n        user: fromPubkey,\n        iwoPool: IWO_POOL_ID,\n        systemProgram: _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.SystemProgram.programId\n    }).instruction());\n    try {\n        const wallet = window.solana;\n        const signature = await (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.sendAndConfirmTransaction)(connection, transaction, [\n            wallet\n        ]);\n        return signature;\n    } catch (error) {\n        console.error('Error submitting bid to blockchain:', error);\n        throw error;\n    }\n}\nfunction formatNumber(num) {\n    return new Intl.NumberFormat('en-US', {\n        minimumFractionDigits: 3,\n        maximumFractionDigits: 3\n    }).format(num);\n}\nfunction formatTimeRemaining(ms) {\n    const days = Math.floor(ms / (24 * 60 * 60 * 1000));\n    const hours = Math.floor(ms % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));\n    const minutes = Math.floor(ms % (60 * 60 * 1000) / (60 * 1000));\n    return \"\".concat(days, \"d \").concat(hours, \"h \").concat(minutes, \"m\");\n}\nfunction useIWOData() {\n    let chain = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'solana';\n    const [bids, setBids] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [allocatedTokens, setAllocatedTokens] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const [timeRemaining, setTimeRemaining] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const [totalWeight, setTotalWeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)({\n        \"useIWOData.useEffect\": ()=>{\n            let isMounted = true;\n            const fetchData = {\n                \"useIWOData.useEffect.fetchData\": async ()=>{\n                    try {\n                        await initializeMultiChainConnection(chain);\n                        const allocated = await fetchAllocatedTokens();\n                        if (isMounted) setAllocatedTokens(allocated);\n                        if (program) {\n                            // Fetch bids from the program\n                            const iwoPool = await program.account.iwoPool.fetch(IWO_POOL_ID);\n                            if (isMounted && iwoPool.bids) {\n                                const formattedBids = iwoPool.bids.map({\n                                    \"useIWOData.useEffect.fetchData.formattedBids\": (bid)=>({\n                                            id: bid.publicKey.toBase58(),\n                                            userId: bid.account.bidder.toBase58(),\n                                            amount: bid.account.amount.toNumber(),\n                                            vestingPeriod: bid.account.vestingPeriod,\n                                            weight: bid.account.weight.toNumber(),\n                                            transactionSignature: '',\n                                            timestamp: new Date(bid.account.timestamp.toNumber() * 1000).toISOString()\n                                        })\n                                }[\"useIWOData.useEffect.fetchData.formattedBids\"]);\n                                setBids(formattedBids);\n                                const weight = formattedBids.reduce({\n                                    \"useIWOData.useEffect.fetchData.weight\": (sum, bid)=>sum + bid.weight\n                                }[\"useIWOData.useEffect.fetchData.weight\"], 0);\n                                setTotalWeight(weight);\n                            }\n                        }\n                    } catch (error) {\n                        console.error('Error fetching IWO data:', error);\n                    }\n                }\n            }[\"useIWOData.useEffect.fetchData\"];\n            fetchData();\n            const interval = setInterval({\n                \"useIWOData.useEffect.interval\": ()=>{\n                    if (isMounted) setTimeRemaining(Math.max(0, iwoEndTime.getTime() - Date.now()));\n                }\n            }[\"useIWOData.useEffect.interval\"], 1000);\n            return ({\n                \"useIWOData.useEffect\": ()=>{\n                    isMounted = false;\n                    clearInterval(interval);\n                }\n            })[\"useIWOData.useEffect\"];\n        }\n    }[\"useIWOData.useEffect\"], [\n        chain\n    ]);\n    const submitBid = async (amount, vestingPeriod, walletAddress)=>{\n        try {\n            const signature = await submitBidToBlockchain(amount, vestingPeriod, walletAddress);\n            const weight = calculateBidWeight(amount, vestingPeriod);\n            const newBid = {\n                id: signature,\n                userId: walletAddress,\n                amount,\n                vestingPeriod,\n                weight,\n                transactionSignature: signature,\n                timestamp: new Date().toISOString()\n            };\n            setBids([\n                ...bids,\n                newBid\n            ]);\n            setAllocatedTokens(allocatedTokens + amount);\n            setTotalWeight(totalWeight + weight);\n            return signature;\n        } catch (error) {\n            console.error('Error submitting bid:', error);\n            throw error;\n        }\n    };\n    return {\n        bids,\n        allocatedTokens,\n        timeRemaining,\n        totalWeight,\n        submitBid\n    };\n}\nconst iwoEndTime = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days from now\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBckIsUUFBUTttQkFBSUQ7Z0JBQU1nQzthQUFPO1lBQ3pCN0IsbUJBQW1CRCxrQkFBa0J0QztZQUNyQzBDLGVBQWV0QyxjQUFjRTtZQUM3QixPQUFPYztRQUNULEVBQUUsT0FBT2xDLE9BQU87WUFDZDNCLFFBQVEyQixLQUFLLENBQUMseUJBQXlCQTtZQUN2QyxNQUFNQTtRQUNSO0lBQ0Y7SUFFQSxPQUFPO1FBQUVrRDtRQUFNRTtRQUFpQkU7UUFBZXBDO1FBQWFTO0lBQVU7QUFDeEU7QUFFTyxNQUFNbUQsYUFBYSxJQUFJUCxLQUFLQSxLQUFLUyxHQUFHLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSyxNQUFNLENBQUMsa0JBQWtCIiwic291cmNlcyI6WyIvd29ya3NwYWNlcy9pd28tcGxhdGZvcm0vdXRpbHMvaXdvVXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbm5lY3Rpb24sIFB1YmxpY0tleSwgY2x1c3RlckFwaVVybCwgVHJhbnNhY3Rpb24sIFN5c3RlbVByb2dyYW0sIHNlbmRBbmRDb25maXJtVHJhbnNhY3Rpb24sIExBTVBPUlRTX1BFUl9TT0wgfSBmcm9tICdAc29sYW5hL3dlYjMuanMnO1xuaW1wb3J0IHsgUHJvZ3JhbSwgQW5jaG9yUHJvdmlkZXIsIHdlYjMgYXMgYW5jaG9yV2ViMywgSWRsLCBCTiwgQW5jaG9yRXJyb3IgfSBmcm9tICdAY29yYWwteHl6L2FuY2hvcic7XG5pbXBvcnQgaWRsIGZyb20gJ0AvbGliL3Byb2dyYW1zL2l3b19wcm9ncmFtX2lkbC5qc29uJztcbmNvbnNvbGUubG9nKCdJREw6JywgaWRsKTtcblxuZXhwb3J0IGNvbnN0IFRPVEFMX1NVUFBMWSA9IDE4XzQ0Nl83NDRfMDczO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFUSU5HX1NVUFBMWSA9IDE4XzIyOF8zOTFfMDUyLjA1Nzc3NDtcbmV4cG9ydCBjb25zdCBMT0NLRURfU1VQUExZID0gMl85OTlfNjg4XzYwMDtcbmV4cG9ydCBjb25zdCBNQVhfU1VQUExZID0gMThfNDQ2Xzc0NF8wNzM7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmlkIHtcbiAgaWQ6IHN0cmluZztcbiAgdXNlcklkOiBzdHJpbmc7XG4gIGFtb3VudDogbnVtYmVyO1xuICB2ZXN0aW5nUGVyaW9kOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICB0cmFuc2FjdGlvblNpZ25hdHVyZTogc3RyaW5nO1xuICB0aW1lc3RhbXA6IHN0cmluZztcbn1cblxuY29uc3QgQkFSS19UT0tFTl9NSU5UX0FERFJFU1MgPSBuZXcgUHVibGljS2V5KHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1RPS0VOX1BST0dSQU1fSUQgfHwgJzJOVHZFc3NKMmk5OThWMmNNR1Q0RnkzSmh5Rm5BekhGb25EbzlkYkFrVnJnJyk7XG5jb25zdCBJV09fUE9PTF9JRCA9IG5ldyBQdWJsaWNLZXkocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSVdPX0NPTlRSQUNUX0FERFJFU1MgfHwgJ0JBUktrZUF3aFR1RnpjTEhYNERqb3RSc21qWFExTXNoR3JaYm4xQ1VRcU1vJyk7XG5jb25zdCBWRVNUSU5HX1BST0dSQU1fSUQgPSBuZXcgUHVibGljS2V5KCdHS2IydkY5UkUxVVBoVjZoUWk3eWlMNXRDc2RhamJKSHlUbTg3emhOM3FpVScpO1xuXG5sZXQgY29ubmVjdGlvbjogQ29ubmVjdGlvbjtcbmxldCBwcm9ncmFtOiBQcm9ncmFtPElkbD47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0aWFsaXplU29sYW5hQ29ubmVjdGlvbigpIHtcbiAgY29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NPTEFOQV9SUENfVVJMIHx8IGNsdXN0ZXJBcGlVcmwoJ2Rldm5ldCcpLCAnY29uZmlybWVkJyk7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAod2luZG93IGFzIGFueSkuc29sYW5hKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHdhbGxldCA9ICh3aW5kb3cgYXMgYW55KS5zb2xhbmE7XG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBBbmNob3JQcm92aWRlcihcbiAgICAgICAgY29ubmVjdGlvbiwgXG4gICAgICAgIHdhbGxldCxcbiAgICAgICAgeyBwcmVmbGlnaHRDb21taXRtZW50OiAnY29uZmlybWVkJyB9XG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2coJ1Byb3ZpZGVyOicsIHByb3ZpZGVyKTtcbiAgICAgIGNvbnNvbGUubG9nKCdJV09fUE9PTF9JRDonLCBJV09fUE9PTF9JRC50b0Jhc2U1OCgpKTtcblxuICAgICAgaWYgKCFpZGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJREwgaXMgdW5kZWZpbmVkLiBNYWtlIHN1cmUgdGhlIElETCBmaWxlIGlzIHByb3Blcmx5IGltcG9ydGVkLicpO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgbWlzc2luZyBwcm9wZXJ0aWVzIHRvIHRoZSBJRExcbiAgICAgIGNvbnN0IGNvbXBsZXRlSWRsOiBJZGwgPSB7XG4gICAgICAgIC4uLmlkbCBhcyBJZGwsXG4gICAgICAgIGFkZHJlc3M6IElXT19QT09MX0lELnRvQmFzZTU4KCksXG4gICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgYWRkcmVzczogSVdPX1BPT0xfSUQudG9CYXNlNTgoKSxcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIHByb2dyYW0gPSBuZXcgUHJvZ3JhbShjb21wbGV0ZUlkbCwgSVdPX1BPT0xfSUQsIHByb3ZpZGVyKTtcbiAgICAgIFxuICAgICAgaWYgKCFwcm9ncmFtKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGluaXRpYWxpemUgcHJvZ3JhbS4gQ2hlY2sgeW91ciBJREwgYW5kIElXT19QT09MX0lELicpO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZygnUHJvZ3JhbSBpbml0aWFsaXplZCBzdWNjZXNzZnVsbHknKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5pdGlhbGl6aW5nIHByb2dyYW06JywgZXJyb3IpO1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgQW5jaG9yRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQW5jaG9yRXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvZ3M6JywgZXJyb3IubG9ncyk7XG4gICAgICB9XG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBpbml0aWFsaXplIFNvbGFuYSBjb25uZWN0aW9uOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBpbml0aWFsaXplIFNvbGFuYSBjb25uZWN0aW9uOiBVbmtub3duIGVycm9yJyk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignU29sYW5hIG9iamVjdCBub3QgZm91bmQhIE1ha2Ugc3VyZSB5b3UgaGF2ZSBhIFNvbGFuYSB3YWxsZXQgaW5zdGFsbGVkLicpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0aWFsaXplTXVsdGlDaGFpbkNvbm5lY3Rpb24oY2hhaW46ICdzb2xhbmEnIHwgJ3N1aScpIHtcbiAgaWYgKGNoYWluID09PSAnc29sYW5hJykge1xuICAgIGF3YWl0IGluaXRpYWxpemVTb2xhbmFDb25uZWN0aW9uKCk7XG4gIH0gZWxzZSBpZiAoY2hhaW4gPT09ICdzdWknKSB7XG4gICAgY29uc29sZS5sb2coJ1NVSSBjb25uZWN0aW9uIG5vdCB5ZXQgaW1wbGVtZW50ZWQnKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hCQVJLVG9rZW5TdXBwbHkoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgaWYgKCFjb25uZWN0aW9uKSBhd2FpdCBpbml0aWFsaXplU29sYW5hQ29ubmVjdGlvbigpO1xuICBjb25zdCB0b2tlblN1cHBseSA9IGF3YWl0IGNvbm5lY3Rpb24uZ2V0VG9rZW5TdXBwbHkoQkFSS19UT0tFTl9NSU5UX0FERFJFU1MpO1xuICByZXR1cm4gdG9rZW5TdXBwbHkudmFsdWUudWlBbW91bnQgfHwgMDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQWxsb2NhdGVkVG9rZW5zKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gIGlmICghY29ubmVjdGlvbikgYXdhaXQgaW5pdGlhbGl6ZVNvbGFuYUNvbm5lY3Rpb24oKTtcbiAgY29uc3QgaXdvQWNjb3VudCA9IGF3YWl0IGNvbm5lY3Rpb24uZ2V0QWNjb3VudEluZm8oSVdPX1BPT0xfSUQpO1xuICBpZiAoIWl3b0FjY291bnQpIHtcbiAgICBjb25zb2xlLmVycm9yKCdJV08gYWNjb3VudCBub3QgZm91bmQnKTtcbiAgICByZXR1cm4gMDtcbiAgfVxuICAvLyBQYXJzZSBpd29BY2NvdW50IGRhdGEgdG8gZ2V0IGFsbG9jYXRlZCB0b2tlbnNcbiAgLy8gVGhpcyBpcyBhIHBsYWNlaG9sZGVyIGltcGxlbWVudGF0aW9uXG4gIHJldHVybiBDSVJDVUxBVElOR19TVVBQTFkgLSBMT0NLRURfU1VQUExZO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQmlkV2VpZ2h0KGFtb3VudDogbnVtYmVyLCB2ZXN0aW5nUGVyaW9kOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gYW1vdW50ICogKDEgKyB2ZXN0aW5nUGVyaW9kIC8gMTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlVG9rZW5BbGxvY2F0aW9uKGJpZDogQmlkLCB0b3RhbFdlaWdodDogbnVtYmVyLCBhdmFpbGFibGVUb2tlbnM6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiAoYmlkLndlaWdodCAvIHRvdGFsV2VpZ2h0KSAqIGF2YWlsYWJsZVRva2Vucztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdEJpZFRvQmxvY2tjaGFpbihhbW91bnQ6IG51bWJlciwgdmVzdGluZ1BlcmlvZDogbnVtYmVyLCB3YWxsZXRBZGRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICBpZiAoIWNvbm5lY3Rpb24gfHwgIXByb2dyYW0pIGF3YWl0IGluaXRpYWxpemVTb2xhbmFDb25uZWN0aW9uKCk7XG4gIFxuICBpZiAoIXByb2dyYW0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb2dyYW0gbm90IGluaXRpYWxpemVkJyk7XG4gIH1cblxuICBjb25zdCBmcm9tUHVia2V5ID0gbmV3IFB1YmxpY0tleSh3YWxsZXRBZGRyZXNzKTtcbiAgY29uc3QgdHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb24oKS5hZGQoXG4gICAgYXdhaXQgcHJvZ3JhbS5tZXRob2RzLnN1Ym1pdEJpZChuZXcgQk4oYW1vdW50KSwgdmVzdGluZ1BlcmlvZClcbiAgICAgIC5hY2NvdW50cyh7XG4gICAgICAgIHVzZXI6IGZyb21QdWJrZXksXG4gICAgICAgIGl3b1Bvb2w6IElXT19QT09MX0lELFxuICAgICAgICBzeXN0ZW1Qcm9ncmFtOiBTeXN0ZW1Qcm9ncmFtLnByb2dyYW1JZCxcbiAgICAgIH0pXG4gICAgICAuaW5zdHJ1Y3Rpb24oKVxuICApO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgd2FsbGV0ID0gKHdpbmRvdyBhcyBhbnkpLnNvbGFuYTtcbiAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBzZW5kQW5kQ29uZmlybVRyYW5zYWN0aW9uKFxuICAgICAgY29ubmVjdGlvbixcbiAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgW3dhbGxldF1cbiAgICApO1xuICAgIHJldHVybiBzaWduYXR1cmU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3Igc3VibWl0dGluZyBiaWQgdG8gYmxvY2tjaGFpbjonLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE51bWJlcihudW06IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMyxcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDNcbiAgfSkuZm9ybWF0KG51bSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRUaW1lUmVtYWluaW5nKG1zOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihtcyAvICgyNCAqIDYwICogNjAgKiAxMDAwKSk7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigobXMgJSAoMjQgKiA2MCAqIDYwICogMTAwMCkpIC8gKDYwICogNjAgKiAxMDAwKSk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChtcyAlICg2MCAqIDYwICogMTAwMCkpIC8gKDYwICogMTAwMCkpO1xuICByZXR1cm4gYCR7ZGF5c31kICR7aG91cnN9aCAke21pbnV0ZXN9bWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJV09EYXRhKGNoYWluOiAnc29sYW5hJyB8ICdzdWknID0gJ3NvbGFuYScpIHtcbiAgY29uc3QgW2JpZHMsIHNldEJpZHNdID0gdXNlU3RhdGU8QmlkW10+KFtdKTtcbiAgY29uc3QgW2FsbG9jYXRlZFRva2Vucywgc2V0QWxsb2NhdGVkVG9rZW5zXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdGltZVJlbWFpbmluZywgc2V0VGltZVJlbWFpbmluZ10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RvdGFsV2VpZ2h0LCBzZXRUb3RhbFdlaWdodF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBpc01vdW50ZWQgPSB0cnVlO1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGluaXRpYWxpemVNdWx0aUNoYWluQ29ubmVjdGlvbihjaGFpbik7XG4gICAgICAgIGNvbnN0IGFsbG9jYXRlZCA9IGF3YWl0IGZldGNoQWxsb2NhdGVkVG9rZW5zKCk7XG4gICAgICAgIGlmIChpc01vdW50ZWQpIHNldEFsbG9jYXRlZFRva2VucyhhbGxvY2F0ZWQpO1xuXG4gICAgICAgIGlmIChwcm9ncmFtKSB7XG4gICAgICAgICAgLy8gRmV0Y2ggYmlkcyBmcm9tIHRoZSBwcm9ncmFtXG4gICAgICAgICAgY29uc3QgaXdvUG9vbCA9IGF3YWl0IHByb2dyYW0uYWNjb3VudC5pd29Qb29sLmZldGNoKElXT19QT09MX0lEKTtcbiAgICAgICAgICBpZiAoaXNNb3VudGVkICYmIGl3b1Bvb2wuYmlkcykge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkQmlkczogQmlkW10gPSBpd29Qb29sLmJpZHMubWFwKChiaWQ6IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgaWQ6IGJpZC5wdWJsaWNLZXkudG9CYXNlNTgoKSxcbiAgICAgICAgICAgICAgdXNlcklkOiBiaWQuYWNjb3VudC5iaWRkZXIudG9CYXNlNTgoKSxcbiAgICAgICAgICAgICAgYW1vdW50OiBiaWQuYWNjb3VudC5hbW91bnQudG9OdW1iZXIoKSxcbiAgICAgICAgICAgICAgdmVzdGluZ1BlcmlvZDogYmlkLmFjY291bnQudmVzdGluZ1BlcmlvZCxcbiAgICAgICAgICAgICAgd2VpZ2h0OiBiaWQuYWNjb3VudC53ZWlnaHQudG9OdW1iZXIoKSxcbiAgICAgICAgICAgICAgdHJhbnNhY3Rpb25TaWduYXR1cmU6ICcnLCAvLyBUaGlzIGluZm9ybWF0aW9uIG1pZ2h0IG5vdCBiZSBhdmFpbGFibGUgaW4gdGhlIGFjY291bnQgZGF0YVxuICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKGJpZC5hY2NvdW50LnRpbWVzdGFtcC50b051bWJlcigpICogMTAwMCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHNldEJpZHMoZm9ybWF0dGVkQmlkcyk7XG4gICAgICAgICAgICBjb25zdCB3ZWlnaHQgPSBmb3JtYXR0ZWRCaWRzLnJlZHVjZSgoc3VtLCBiaWQpID0+IHN1bSArIGJpZC53ZWlnaHQsIDApO1xuICAgICAgICAgICAgc2V0VG90YWxXZWlnaHQod2VpZ2h0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIElXTyBkYXRhOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG5cbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChpc01vdW50ZWQpIHNldFRpbWVSZW1haW5pbmcoTWF0aC5tYXgoMCwgaXdvRW5kVGltZS5nZXRUaW1lKCkgLSBEYXRlLm5vdygpKSk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaXNNb3VudGVkID0gZmFsc2U7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9O1xuICB9LCBbY2hhaW5dKTtcblxuICBjb25zdCBzdWJtaXRCaWQgPSBhc3luYyAoYW1vdW50OiBudW1iZXIsIHZlc3RpbmdQZXJpb2Q6IG51bWJlciwgd2FsbGV0QWRkcmVzczogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IHN1Ym1pdEJpZFRvQmxvY2tjaGFpbihhbW91bnQsIHZlc3RpbmdQZXJpb2QsIHdhbGxldEFkZHJlc3MpO1xuICAgICAgY29uc3Qgd2VpZ2h0ID0gY2FsY3VsYXRlQmlkV2VpZ2h0KGFtb3VudCwgdmVzdGluZ1BlcmlvZCk7XG4gICAgICBjb25zdCBuZXdCaWQ6IEJpZCA9IHtcbiAgICAgICAgaWQ6IHNpZ25hdHVyZSxcbiAgICAgICAgdXNlcklkOiB3YWxsZXRBZGRyZXNzLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHZlc3RpbmdQZXJpb2QsXG4gICAgICAgIHdlaWdodCxcbiAgICAgICAgdHJhbnNhY3Rpb25TaWduYXR1cmU6IHNpZ25hdHVyZSxcbiAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB9O1xuICAgICAgc2V0QmlkcyhbLi4uYmlkcywgbmV3QmlkXSk7XG4gICAgICBzZXRBbGxvY2F0ZWRUb2tlbnMoYWxsb2NhdGVkVG9rZW5zICsgYW1vdW50KTtcbiAgICAgIHNldFRvdGFsV2VpZ2h0KHRvdGFsV2VpZ2h0ICsgd2VpZ2h0KTtcbiAgICAgIHJldHVybiBzaWduYXR1cmU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHN1Ym1pdHRpbmcgYmlkOicsIGVycm9yKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBiaWRzLCBhbGxvY2F0ZWRUb2tlbnMsIHRpbWVSZW1haW5pbmcsIHRvdGFsV2VpZ2h0LCBzdWJtaXRCaWQgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGl3b0VuZFRpbWUgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApOyAvLyA3IGRheXMgZnJvbSBub3dcblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29ubmVjdGlvbiIsIlB1YmxpY0tleSIsImNsdXN0ZXJBcGlVcmwiLCJUcmFuc2FjdGlvbiIsIlN5c3RlbVByb2dyYW0iLCJzZW5kQW5kQ29uZmlybVRyYW5zYWN0aW9uIiwiUHJvZ3JhbSIsIkFuY2hvclByb3ZpZGVyIiwiQk4iLCJBbmNob3JFcnJvciIsImlkbCIsImNvbnNvbGUiLCJsb2ciLCJUT1RBTF9TVVBQTFkiLCJDSVJDVUxBVElOR19TVVBQTFkiLCJMT0NLRURfU1VQUExZIiwiTUFYX1NVUFBMWSIsIkJBUktfVE9LRU5fTUlOVF9BRERSRVNTIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1RPS0VOX1BST0dSQU1fSUQiLCJJV09fUE9PTF9JRCIsIk5FWFRfUFVCTElDX0lXT19DT05UUkFDVF9BRERSRVNTIiwiVkVTVElOR19QUk9HUkFNX0lEIiwiY29ubmVjdGlvbiIsInByb2dyYW0iLCJpbml0aWFsaXplU29sYW5hQ29ubmVjdGlvbiIsIk5FWFRfUFVCTElDX1NPTEFOQV9SUENfVVJMIiwid2luZG93Iiwic29sYW5hIiwid2FsbGV0IiwicHJvdmlkZXIiLCJwcmVmbGlnaHRDb21taXRtZW50IiwidG9CYXNlNTgiLCJFcnJvciIsImNvbXBsZXRlSWRsIiwiYWRkcmVzcyIsIm1ldGFkYXRhIiwiZXJyb3IiLCJtZXNzYWdlIiwibG9ncyIsImluaXRpYWxpemVNdWx0aUNoYWluQ29ubmVjdGlvbiIsImNoYWluIiwiZmV0Y2hCQVJLVG9rZW5TdXBwbHkiLCJ0b2tlblN1cHBseSIsImdldFRva2VuU3VwcGx5IiwidmFsdWUiLCJ1aUFtb3VudCIsImZldGNoQWxsb2NhdGVkVG9rZW5zIiwiaXdvQWNjb3VudCIsImdldEFjY291bnRJbmZvIiwiY2FsY3VsYXRlQmlkV2VpZ2h0IiwiYW1vdW50IiwidmVzdGluZ1BlcmlvZCIsImNhbGN1bGF0ZVRva2VuQWxsb2NhdGlvbiIsImJpZCIsInRvdGFsV2VpZ2h0IiwiYXZhaWxhYmxlVG9rZW5zIiwid2VpZ2h0Iiwic3VibWl0QmlkVG9CbG9ja2NoYWluIiwid2FsbGV0QWRkcmVzcyIsImZyb21QdWJrZXkiLCJ0cmFuc2FjdGlvbiIsImFkZCIsIm1ldGhvZHMiLCJzdWJtaXRCaWQiLCJhY2NvdW50cyIsInVzZXIiLCJpd29Qb29sIiwic3lzdGVtUHJvZ3JhbSIsInByb2dyYW1JZCIsImluc3RydWN0aW9uIiwic2lnbmF0dXJlIiwiZm9ybWF0TnVtYmVyIiwibnVtIiwiSW50bCIsIk51bWJlckZvcm1hdCIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsImZvcm1hdCIsImZvcm1hdFRpbWVSZW1haW5pbmciLCJtcyIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJ1c2VJV09EYXRhIiwiYmlkcyIsInNldEJpZHMiLCJhbGxvY2F0ZWRUb2tlbnMiLCJzZXRBbGxvY2F0ZWRUb2tlbnMiLCJ0aW1lUmVtYWluaW5nIiwic2V0VGltZVJlbWFpbmluZyIsInNldFRvdGFsV2VpZ2h0IiwiaXNNb3VudGVkIiwiZmV0Y2hEYXRhIiwiYWxsb2NhdGVkIiwiYWNjb3VudCIsImZldGNoIiwiZm9ybWF0dGVkQmlkcyIsIm1hcCIsImlkIiwicHVibGljS2V5IiwidXNlcklkIiwiYmlkZGVyIiwidG9OdW1iZXIiLCJ0cmFuc2FjdGlvblNpZ25hdHVyZSIsInRpbWVzdGFtcCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInJlZHVjZSIsInN1bSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJtYXgiLCJpd29FbmRUaW1lIiwiZ2V0VGltZSIsIm5vdyIsImNsZWFySW50ZXJ2YWwiLCJuZXdCaWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./utils/iwoUtils.ts\n"));

/***/ })

});