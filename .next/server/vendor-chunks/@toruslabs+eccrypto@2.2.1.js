"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@toruslabs+eccrypto@2.2.1";
exports.ids = ["vendor-chunks/@toruslabs+eccrypto@2.2.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@toruslabs+eccrypto@2.2.1/node_modules/@toruslabs/eccrypto/dist/browser.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@toruslabs+eccrypto@2.2.1/node_modules/@toruslabs/eccrypto/dist/browser.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nconst EC = (__webpack_require__(/*! elliptic */ \"(ssr)/./node_modules/.pnpm/elliptic@6.6.1/node_modules/elliptic/lib/elliptic.js\").ec);\nconst ec = new EC(\"secp256k1\");\nconst browserCrypto = global.crypto || global.msCrypto || {};\nconst subtle = browserCrypto.subtle || browserCrypto.webkitSubtle;\nconst nodeCrypto = __webpack_require__(/*! crypto */ \"crypto\");\nconst EC_GROUP_ORDER = Buffer.from(\"fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141\", \"hex\");\nconst ZERO32 = Buffer.alloc(32, 0);\nfunction assert(condition, message) {\n  if (!condition) {\n    throw new Error(message || \"Assertion failed\");\n  }\n}\nfunction isScalar(x) {\n  return Buffer.isBuffer(x) && x.length === 32;\n}\nfunction isValidPrivateKey(privateKey) {\n  if (!isScalar(privateKey)) {\n    return false;\n  }\n  return privateKey.compare(ZERO32) > 0 &&\n  // > 0\n  privateKey.compare(EC_GROUP_ORDER) < 0; // < G\n}\n\n// Compare two buffers in constant time to prevent timing attacks.\nfunction equalConstTime(b1, b2) {\n  if (b1.length !== b2.length) {\n    return false;\n  }\n  let res = 0;\n  for (let i = 0; i < b1.length; i++) {\n    res |= b1[i] ^ b2[i]; // jshint ignore:line\n  }\n\n  return res === 0;\n}\n\n/* This must check if we're in the browser or\nnot, since the functions are different and does\nnot convert using browserify */\nfunction randomBytes(size) {\n  const arr = new Uint8Array(size);\n  if (typeof browserCrypto.getRandomValues === \"undefined\") {\n    return Buffer.from(nodeCrypto.randomBytes(size));\n  } else {\n    browserCrypto.getRandomValues(arr);\n  }\n  return Buffer.from(arr);\n}\nasync function sha512(msg) {\n  if (subtle) {\n    const hash = await subtle.digest(\"SHA-512\", msg);\n    const result = new Uint8Array(hash);\n    return result;\n  }\n  const hash = nodeCrypto.createHash(\"sha512\");\n  const result = hash.update(msg).digest();\n  return new Uint8Array(result);\n}\nfunction getAes(op) {\n  return async function (iv, key, data) {\n    if (subtle) {\n      const importAlgorithm = {\n        name: \"AES-CBC\"\n      };\n      const cryptoKey = await subtle.importKey(\"raw\", key, importAlgorithm, false, [op]);\n      const encAlgorithm = {\n        name: \"AES-CBC\",\n        iv: iv\n      };\n      const result = await subtle[op](encAlgorithm, cryptoKey, data);\n      return Buffer.from(new Uint8Array(result));\n    } else if (op === \"encrypt\") {\n      const cipher = nodeCrypto.createCipheriv(\"aes-256-cbc\", key, iv);\n      let firstChunk = cipher.update(data);\n      let secondChunk = cipher.final();\n      return Buffer.concat([firstChunk, secondChunk]);\n    } else if (op === \"decrypt\") {\n      const decipher = nodeCrypto.createDecipheriv(\"aes-256-cbc\", key, iv);\n      let firstChunk = decipher.update(data);\n      let secondChunk = decipher.final();\n      return Buffer.concat([firstChunk, secondChunk]);\n    }\n  };\n}\nconst aesCbcEncrypt = getAes(\"encrypt\");\nconst aesCbcDecrypt = getAes(\"decrypt\");\nasync function hmacSha256Sign(key, msg) {\n  if (subtle) {\n    const importAlgorithm = {\n      name: \"HMAC\",\n      hash: {\n        name: \"SHA-256\"\n      }\n    };\n    const cryptoKey = await subtle.importKey(\"raw\", new Uint8Array(key), importAlgorithm, false, [\"sign\", \"verify\"]);\n    const sig = await subtle.sign(\"HMAC\", cryptoKey, msg);\n    const result = Buffer.from(new Uint8Array(sig));\n    return result;\n  }\n  const hmac = nodeCrypto.createHmac(\"sha256\", Buffer.from(key));\n  hmac.update(msg);\n  const result = hmac.digest();\n  return result;\n}\nasync function hmacSha256Verify(key, msg, sig) {\n  const expectedSig = await hmacSha256Sign(key, msg);\n  return equalConstTime(expectedSig, sig);\n}\n\n/**\n * Generate a new valid private key. Will use the window.crypto or window.msCrypto as source\n * depending on your browser.\n * @return {Buffer} A 32-byte private key.\n * @function\n */\nexports.generatePrivate = function () {\n  let privateKey = randomBytes(32);\n  while (!isValidPrivateKey(privateKey)) {\n    privateKey = randomBytes(32);\n  }\n  return privateKey;\n};\nconst getPublic = exports.getPublic = function (privateKey) {\n  // This function has sync API so we throw an error immediately.\n  assert(privateKey.length === 32, \"Bad private key\");\n  assert(isValidPrivateKey(privateKey), \"Bad private key\");\n  // XXX(Kagami): `elliptic.utils.encode` returns array for every\n  // encoding except `hex`.\n  return Buffer.from(ec.keyFromPrivate(privateKey).getPublic(\"arr\"));\n};\n\n/**\n * Get compressed version of public key.\n */\nexports.getPublicCompressed = function (privateKey) {\n  // jshint ignore:line\n  assert(privateKey.length === 32, \"Bad private key\");\n  assert(isValidPrivateKey(privateKey), \"Bad private key\");\n  // See https://github.com/wanderer/secp256k1-node/issues/46\n  let compressed = true;\n  return Buffer.from(ec.keyFromPrivate(privateKey).getPublic(compressed, \"arr\"));\n};\n\n// NOTE(Kagami): We don't use promise shim in Browser implementation\n// because it's supported natively in new browsers (see\n// <http://caniuse.com/#feat=promises>) and we can use only new browsers\n// because of the WebCryptoAPI (see\n// <http://caniuse.com/#feat=cryptography>).\nexports.sign = async function (privateKey, msg) {\n  assert(privateKey.length === 32, \"Bad private key\");\n  assert(isValidPrivateKey(privateKey), \"Bad private key\");\n  assert(msg.length > 0, \"Message should not be empty\");\n  assert(msg.length <= 32, \"Message is too long\");\n  return Buffer.from(ec.sign(msg, privateKey, {\n    canonical: true\n  }).toDER());\n};\nexports.verify = async function (publicKey, msg, sig) {\n  assert(publicKey.length === 65 || publicKey.length === 33, \"Bad public key\");\n  if (publicKey.length === 65) {\n    assert(publicKey[0] === 4, \"Bad public key\");\n  }\n  if (publicKey.length === 33) {\n    assert(publicKey[0] === 2 || publicKey[0] === 3, \"Bad public key\");\n  }\n  assert(msg.length > 0, \"Message should not be empty\");\n  assert(msg.length <= 32, \"Message is too long\");\n  if (ec.verify(msg, sig, publicKey)) {\n    return null;\n  } else {\n    throw new Error(\"Bad signature\");\n  }\n};\nconst deriveUnpadded = exports.derive = async function (privateKeyA, publicKeyB) {\n  assert(Buffer.isBuffer(privateKeyA), \"Bad private key\");\n  assert(Buffer.isBuffer(publicKeyB), \"Bad public key\");\n  assert(privateKeyA.length === 32, \"Bad private key\");\n  assert(isValidPrivateKey(privateKeyA), \"Bad private key\");\n  assert(publicKeyB.length === 65 || publicKeyB.length === 33, \"Bad public key\");\n  if (publicKeyB.length === 65) {\n    assert(publicKeyB[0] === 4, \"Bad public key\");\n  }\n  if (publicKeyB.length === 33) {\n    assert(publicKeyB[0] === 2 || publicKeyB[0] === 3, \"Bad public key\");\n  }\n  const keyA = ec.keyFromPrivate(privateKeyA);\n  const keyB = ec.keyFromPublic(publicKeyB);\n  const Px = keyA.derive(keyB.getPublic()); // BN instance\n  return Buffer.from(Px.toArray());\n};\nconst derivePadded = exports.derivePadded = async function (privateKeyA, publicKeyB) {\n  assert(Buffer.isBuffer(privateKeyA), \"Bad private key\");\n  assert(Buffer.isBuffer(publicKeyB), \"Bad public key\");\n  assert(privateKeyA.length === 32, \"Bad private key\");\n  assert(isValidPrivateKey(privateKeyA), \"Bad private key\");\n  assert(publicKeyB.length === 65 || publicKeyB.length === 33, \"Bad public key\");\n  if (publicKeyB.length === 65) {\n    assert(publicKeyB[0] === 4, \"Bad public key\");\n  }\n  if (publicKeyB.length === 33) {\n    assert(publicKeyB[0] === 2 || publicKeyB[0] === 3, \"Bad public key\");\n  }\n  const keyA = ec.keyFromPrivate(privateKeyA);\n  const keyB = ec.keyFromPublic(publicKeyB);\n  const Px = keyA.derive(keyB.getPublic()); // BN instance\n  return Buffer.from(Px.toString(16, 64), \"hex\");\n};\nexports.encrypt = async function (publicKeyTo, msg, opts) {\n  opts = opts || {};\n  // Tmp variables to save context from flat promises;\n  let iv, ephemPublicKey, ciphertext, macKey;\n  let ephemPrivateKey = opts.ephemPrivateKey || randomBytes(32);\n  // There is a very unlikely possibility that it is not a valid key\n  while (!isValidPrivateKey(ephemPrivateKey)) {\n    ephemPrivateKey = opts.ephemPrivateKey || randomBytes(32);\n  }\n  ephemPublicKey = getPublic(ephemPrivateKey);\n  const Px = await deriveUnpadded(ephemPrivateKey, publicKeyTo);\n  const hash = await sha512(Px);\n  iv = opts.iv || randomBytes(16);\n  const encryptionKey = hash.slice(0, 32);\n  macKey = hash.slice(32);\n  const data = await aesCbcEncrypt(iv, encryptionKey, msg);\n  ciphertext = data;\n  const dataToMac = Buffer.concat([iv, ephemPublicKey, ciphertext]);\n  const mac = await hmacSha256Sign(macKey, dataToMac);\n  return {\n    iv: iv,\n    ephemPublicKey: ephemPublicKey,\n    ciphertext: ciphertext,\n    mac: mac\n  };\n};\nconst decrypt = async function (privateKey, opts) {\n  let padding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  // Tmp variable to save context from flat promises;\n  let encryptionKey;\n  const derive = padding ? derivePadded : deriveUnpadded;\n  const Px = await derive(privateKey, opts.ephemPublicKey);\n  const hash = await sha512(Px);\n  encryptionKey = hash.slice(0, 32);\n  const macKey = hash.slice(32);\n  const dataToMac = Buffer.concat([opts.iv, opts.ephemPublicKey, opts.ciphertext]);\n  const macGood = await hmacSha256Verify(macKey, dataToMac, opts.mac);\n  if (!macGood && padding === false) {\n    return decrypt(privateKey, opts, true);\n  } else if (!macGood && padding === true) {\n    throw new Error(\"bad MAC after trying padded\");\n  }\n  const msg = await aesCbcDecrypt(opts.iv, encryptionKey, opts.ciphertext);\n  return Buffer.from(new Uint8Array(msg));\n};\nexports.decrypt = decrypt;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHRvcnVzbGFicytlY2NyeXB0b0AyLjIuMS9ub2RlX21vZHVsZXMvQHRvcnVzbGFicy9lY2NyeXB0by9kaXN0L2Jyb3dzZXIuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsV0FBVywySEFBc0I7QUFDakM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFPLENBQUMsc0JBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGVBQWU7QUFDakMsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLHFCQUFxQixvQkFBb0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlIiwic291cmNlcyI6WyIvd29ya3NwYWNlcy9pd28tcGxhdGZvcm0vbm9kZV9tb2R1bGVzLy5wbnBtL0B0b3J1c2xhYnMrZWNjcnlwdG9AMi4yLjEvbm9kZV9tb2R1bGVzL0B0b3J1c2xhYnMvZWNjcnlwdG8vZGlzdC9icm93c2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBFQyA9IHJlcXVpcmUoXCJlbGxpcHRpY1wiKS5lYztcbmNvbnN0IGVjID0gbmV3IEVDKFwic2VjcDI1NmsxXCIpO1xuY29uc3QgYnJvd3NlckNyeXB0byA9IGdsb2JhbC5jcnlwdG8gfHwgZ2xvYmFsLm1zQ3J5cHRvIHx8IHt9O1xuY29uc3Qgc3VidGxlID0gYnJvd3NlckNyeXB0by5zdWJ0bGUgfHwgYnJvd3NlckNyeXB0by53ZWJraXRTdWJ0bGU7XG5jb25zdCBub2RlQ3J5cHRvID0gcmVxdWlyZShcImNyeXB0b1wiKTtcbmNvbnN0IEVDX0dST1VQX09SREVSID0gQnVmZmVyLmZyb20oXCJmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZWJhYWVkY2U2YWY0OGEwM2JiZmQyNWU4Y2QwMzY0MTQxXCIsIFwiaGV4XCIpO1xuY29uc3QgWkVSTzMyID0gQnVmZmVyLmFsbG9jKDMyLCAwKTtcbmZ1bmN0aW9uIGFzc2VydChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSB8fCBcIkFzc2VydGlvbiBmYWlsZWRcIik7XG4gIH1cbn1cbmZ1bmN0aW9uIGlzU2NhbGFyKHgpIHtcbiAgcmV0dXJuIEJ1ZmZlci5pc0J1ZmZlcih4KSAmJiB4Lmxlbmd0aCA9PT0gMzI7XG59XG5mdW5jdGlvbiBpc1ZhbGlkUHJpdmF0ZUtleShwcml2YXRlS2V5KSB7XG4gIGlmICghaXNTY2FsYXIocHJpdmF0ZUtleSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHByaXZhdGVLZXkuY29tcGFyZShaRVJPMzIpID4gMCAmJlxuICAvLyA+IDBcbiAgcHJpdmF0ZUtleS5jb21wYXJlKEVDX0dST1VQX09SREVSKSA8IDA7IC8vIDwgR1xufVxuXG4vLyBDb21wYXJlIHR3byBidWZmZXJzIGluIGNvbnN0YW50IHRpbWUgdG8gcHJldmVudCB0aW1pbmcgYXR0YWNrcy5cbmZ1bmN0aW9uIGVxdWFsQ29uc3RUaW1lKGIxLCBiMikge1xuICBpZiAoYjEubGVuZ3RoICE9PSBiMi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgbGV0IHJlcyA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYjEubGVuZ3RoOyBpKyspIHtcbiAgICByZXMgfD0gYjFbaV0gXiBiMltpXTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gIH1cblxuICByZXR1cm4gcmVzID09PSAwO1xufVxuXG4vKiBUaGlzIG11c3QgY2hlY2sgaWYgd2UncmUgaW4gdGhlIGJyb3dzZXIgb3Jcbm5vdCwgc2luY2UgdGhlIGZ1bmN0aW9ucyBhcmUgZGlmZmVyZW50IGFuZCBkb2VzXG5ub3QgY29udmVydCB1c2luZyBicm93c2VyaWZ5ICovXG5mdW5jdGlvbiByYW5kb21CeXRlcyhzaXplKSB7XG4gIGNvbnN0IGFyciA9IG5ldyBVaW50OEFycmF5KHNpemUpO1xuICBpZiAodHlwZW9mIGJyb3dzZXJDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKG5vZGVDcnlwdG8ucmFuZG9tQnl0ZXMoc2l6ZSkpO1xuICB9IGVsc2Uge1xuICAgIGJyb3dzZXJDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGFycik7XG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKGFycik7XG59XG5hc3luYyBmdW5jdGlvbiBzaGE1MTIobXNnKSB7XG4gIGlmIChzdWJ0bGUpIHtcbiAgICBjb25zdCBoYXNoID0gYXdhaXQgc3VidGxlLmRpZ2VzdChcIlNIQS01MTJcIiwgbXNnKTtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgVWludDhBcnJheShoYXNoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGNvbnN0IGhhc2ggPSBub2RlQ3J5cHRvLmNyZWF0ZUhhc2goXCJzaGE1MTJcIik7XG4gIGNvbnN0IHJlc3VsdCA9IGhhc2gudXBkYXRlKG1zZykuZGlnZXN0KCk7XG4gIHJldHVybiBuZXcgVWludDhBcnJheShyZXN1bHQpO1xufVxuZnVuY3Rpb24gZ2V0QWVzKG9wKSB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoaXYsIGtleSwgZGF0YSkge1xuICAgIGlmIChzdWJ0bGUpIHtcbiAgICAgIGNvbnN0IGltcG9ydEFsZ29yaXRobSA9IHtcbiAgICAgICAgbmFtZTogXCJBRVMtQ0JDXCJcbiAgICAgIH07XG4gICAgICBjb25zdCBjcnlwdG9LZXkgPSBhd2FpdCBzdWJ0bGUuaW1wb3J0S2V5KFwicmF3XCIsIGtleSwgaW1wb3J0QWxnb3JpdGhtLCBmYWxzZSwgW29wXSk7XG4gICAgICBjb25zdCBlbmNBbGdvcml0aG0gPSB7XG4gICAgICAgIG5hbWU6IFwiQUVTLUNCQ1wiLFxuICAgICAgICBpdjogaXZcbiAgICAgIH07XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdWJ0bGVbb3BdKGVuY0FsZ29yaXRobSwgY3J5cHRvS2V5LCBkYXRhKTtcbiAgICAgIHJldHVybiBCdWZmZXIuZnJvbShuZXcgVWludDhBcnJheShyZXN1bHQpKTtcbiAgICB9IGVsc2UgaWYgKG9wID09PSBcImVuY3J5cHRcIikge1xuICAgICAgY29uc3QgY2lwaGVyID0gbm9kZUNyeXB0by5jcmVhdGVDaXBoZXJpdihcImFlcy0yNTYtY2JjXCIsIGtleSwgaXYpO1xuICAgICAgbGV0IGZpcnN0Q2h1bmsgPSBjaXBoZXIudXBkYXRlKGRhdGEpO1xuICAgICAgbGV0IHNlY29uZENodW5rID0gY2lwaGVyLmZpbmFsKCk7XG4gICAgICByZXR1cm4gQnVmZmVyLmNvbmNhdChbZmlyc3RDaHVuaywgc2Vjb25kQ2h1bmtdKTtcbiAgICB9IGVsc2UgaWYgKG9wID09PSBcImRlY3J5cHRcIikge1xuICAgICAgY29uc3QgZGVjaXBoZXIgPSBub2RlQ3J5cHRvLmNyZWF0ZURlY2lwaGVyaXYoXCJhZXMtMjU2LWNiY1wiLCBrZXksIGl2KTtcbiAgICAgIGxldCBmaXJzdENodW5rID0gZGVjaXBoZXIudXBkYXRlKGRhdGEpO1xuICAgICAgbGV0IHNlY29uZENodW5rID0gZGVjaXBoZXIuZmluYWwoKTtcbiAgICAgIHJldHVybiBCdWZmZXIuY29uY2F0KFtmaXJzdENodW5rLCBzZWNvbmRDaHVua10pO1xuICAgIH1cbiAgfTtcbn1cbmNvbnN0IGFlc0NiY0VuY3J5cHQgPSBnZXRBZXMoXCJlbmNyeXB0XCIpO1xuY29uc3QgYWVzQ2JjRGVjcnlwdCA9IGdldEFlcyhcImRlY3J5cHRcIik7XG5hc3luYyBmdW5jdGlvbiBobWFjU2hhMjU2U2lnbihrZXksIG1zZykge1xuICBpZiAoc3VidGxlKSB7XG4gICAgY29uc3QgaW1wb3J0QWxnb3JpdGhtID0ge1xuICAgICAgbmFtZTogXCJITUFDXCIsXG4gICAgICBoYXNoOiB7XG4gICAgICAgIG5hbWU6IFwiU0hBLTI1NlwiXG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBjcnlwdG9LZXkgPSBhd2FpdCBzdWJ0bGUuaW1wb3J0S2V5KFwicmF3XCIsIG5ldyBVaW50OEFycmF5KGtleSksIGltcG9ydEFsZ29yaXRobSwgZmFsc2UsIFtcInNpZ25cIiwgXCJ2ZXJpZnlcIl0pO1xuICAgIGNvbnN0IHNpZyA9IGF3YWl0IHN1YnRsZS5zaWduKFwiSE1BQ1wiLCBjcnlwdG9LZXksIG1zZyk7XG4gICAgY29uc3QgcmVzdWx0ID0gQnVmZmVyLmZyb20obmV3IFVpbnQ4QXJyYXkoc2lnKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBjb25zdCBobWFjID0gbm9kZUNyeXB0by5jcmVhdGVIbWFjKFwic2hhMjU2XCIsIEJ1ZmZlci5mcm9tKGtleSkpO1xuICBobWFjLnVwZGF0ZShtc2cpO1xuICBjb25zdCByZXN1bHQgPSBobWFjLmRpZ2VzdCgpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuYXN5bmMgZnVuY3Rpb24gaG1hY1NoYTI1NlZlcmlmeShrZXksIG1zZywgc2lnKSB7XG4gIGNvbnN0IGV4cGVjdGVkU2lnID0gYXdhaXQgaG1hY1NoYTI1NlNpZ24oa2V5LCBtc2cpO1xuICByZXR1cm4gZXF1YWxDb25zdFRpbWUoZXhwZWN0ZWRTaWcsIHNpZyk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSBuZXcgdmFsaWQgcHJpdmF0ZSBrZXkuIFdpbGwgdXNlIHRoZSB3aW5kb3cuY3J5cHRvIG9yIHdpbmRvdy5tc0NyeXB0byBhcyBzb3VyY2VcbiAqIGRlcGVuZGluZyBvbiB5b3VyIGJyb3dzZXIuXG4gKiBAcmV0dXJuIHtCdWZmZXJ9IEEgMzItYnl0ZSBwcml2YXRlIGtleS5cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnRzLmdlbmVyYXRlUHJpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IHByaXZhdGVLZXkgPSByYW5kb21CeXRlcygzMik7XG4gIHdoaWxlICghaXNWYWxpZFByaXZhdGVLZXkocHJpdmF0ZUtleSkpIHtcbiAgICBwcml2YXRlS2V5ID0gcmFuZG9tQnl0ZXMoMzIpO1xuICB9XG4gIHJldHVybiBwcml2YXRlS2V5O1xufTtcbmNvbnN0IGdldFB1YmxpYyA9IGV4cG9ydHMuZ2V0UHVibGljID0gZnVuY3Rpb24gKHByaXZhdGVLZXkpIHtcbiAgLy8gVGhpcyBmdW5jdGlvbiBoYXMgc3luYyBBUEkgc28gd2UgdGhyb3cgYW4gZXJyb3IgaW1tZWRpYXRlbHkuXG4gIGFzc2VydChwcml2YXRlS2V5Lmxlbmd0aCA9PT0gMzIsIFwiQmFkIHByaXZhdGUga2V5XCIpO1xuICBhc3NlcnQoaXNWYWxpZFByaXZhdGVLZXkocHJpdmF0ZUtleSksIFwiQmFkIHByaXZhdGUga2V5XCIpO1xuICAvLyBYWFgoS2FnYW1pKTogYGVsbGlwdGljLnV0aWxzLmVuY29kZWAgcmV0dXJucyBhcnJheSBmb3IgZXZlcnlcbiAgLy8gZW5jb2RpbmcgZXhjZXB0IGBoZXhgLlxuICByZXR1cm4gQnVmZmVyLmZyb20oZWMua2V5RnJvbVByaXZhdGUocHJpdmF0ZUtleSkuZ2V0UHVibGljKFwiYXJyXCIpKTtcbn07XG5cbi8qKlxuICogR2V0IGNvbXByZXNzZWQgdmVyc2lvbiBvZiBwdWJsaWMga2V5LlxuICovXG5leHBvcnRzLmdldFB1YmxpY0NvbXByZXNzZWQgPSBmdW5jdGlvbiAocHJpdmF0ZUtleSkge1xuICAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgYXNzZXJ0KHByaXZhdGVLZXkubGVuZ3RoID09PSAzMiwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gIGFzc2VydChpc1ZhbGlkUHJpdmF0ZUtleShwcml2YXRlS2V5KSwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vd2FuZGVyZXIvc2VjcDI1NmsxLW5vZGUvaXNzdWVzLzQ2XG4gIGxldCBjb21wcmVzc2VkID0gdHJ1ZTtcbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKGVjLmtleUZyb21Qcml2YXRlKHByaXZhdGVLZXkpLmdldFB1YmxpYyhjb21wcmVzc2VkLCBcImFyclwiKSk7XG59O1xuXG4vLyBOT1RFKEthZ2FtaSk6IFdlIGRvbid0IHVzZSBwcm9taXNlIHNoaW0gaW4gQnJvd3NlciBpbXBsZW1lbnRhdGlvblxuLy8gYmVjYXVzZSBpdCdzIHN1cHBvcnRlZCBuYXRpdmVseSBpbiBuZXcgYnJvd3NlcnMgKHNlZVxuLy8gPGh0dHA6Ly9jYW5pdXNlLmNvbS8jZmVhdD1wcm9taXNlcz4pIGFuZCB3ZSBjYW4gdXNlIG9ubHkgbmV3IGJyb3dzZXJzXG4vLyBiZWNhdXNlIG9mIHRoZSBXZWJDcnlwdG9BUEkgKHNlZVxuLy8gPGh0dHA6Ly9jYW5pdXNlLmNvbS8jZmVhdD1jcnlwdG9ncmFwaHk+KS5cbmV4cG9ydHMuc2lnbiA9IGFzeW5jIGZ1bmN0aW9uIChwcml2YXRlS2V5LCBtc2cpIHtcbiAgYXNzZXJ0KHByaXZhdGVLZXkubGVuZ3RoID09PSAzMiwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gIGFzc2VydChpc1ZhbGlkUHJpdmF0ZUtleShwcml2YXRlS2V5KSwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gIGFzc2VydChtc2cubGVuZ3RoID4gMCwgXCJNZXNzYWdlIHNob3VsZCBub3QgYmUgZW1wdHlcIik7XG4gIGFzc2VydChtc2cubGVuZ3RoIDw9IDMyLCBcIk1lc3NhZ2UgaXMgdG9vIGxvbmdcIik7XG4gIHJldHVybiBCdWZmZXIuZnJvbShlYy5zaWduKG1zZywgcHJpdmF0ZUtleSwge1xuICAgIGNhbm9uaWNhbDogdHJ1ZVxuICB9KS50b0RFUigpKTtcbn07XG5leHBvcnRzLnZlcmlmeSA9IGFzeW5jIGZ1bmN0aW9uIChwdWJsaWNLZXksIG1zZywgc2lnKSB7XG4gIGFzc2VydChwdWJsaWNLZXkubGVuZ3RoID09PSA2NSB8fCBwdWJsaWNLZXkubGVuZ3RoID09PSAzMywgXCJCYWQgcHVibGljIGtleVwiKTtcbiAgaWYgKHB1YmxpY0tleS5sZW5ndGggPT09IDY1KSB7XG4gICAgYXNzZXJ0KHB1YmxpY0tleVswXSA9PT0gNCwgXCJCYWQgcHVibGljIGtleVwiKTtcbiAgfVxuICBpZiAocHVibGljS2V5Lmxlbmd0aCA9PT0gMzMpIHtcbiAgICBhc3NlcnQocHVibGljS2V5WzBdID09PSAyIHx8IHB1YmxpY0tleVswXSA9PT0gMywgXCJCYWQgcHVibGljIGtleVwiKTtcbiAgfVxuICBhc3NlcnQobXNnLmxlbmd0aCA+IDAsIFwiTWVzc2FnZSBzaG91bGQgbm90IGJlIGVtcHR5XCIpO1xuICBhc3NlcnQobXNnLmxlbmd0aCA8PSAzMiwgXCJNZXNzYWdlIGlzIHRvbyBsb25nXCIpO1xuICBpZiAoZWMudmVyaWZ5KG1zZywgc2lnLCBwdWJsaWNLZXkpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQmFkIHNpZ25hdHVyZVwiKTtcbiAgfVxufTtcbmNvbnN0IGRlcml2ZVVucGFkZGVkID0gZXhwb3J0cy5kZXJpdmUgPSBhc3luYyBmdW5jdGlvbiAocHJpdmF0ZUtleUEsIHB1YmxpY0tleUIpIHtcbiAgYXNzZXJ0KEJ1ZmZlci5pc0J1ZmZlcihwcml2YXRlS2V5QSksIFwiQmFkIHByaXZhdGUga2V5XCIpO1xuICBhc3NlcnQoQnVmZmVyLmlzQnVmZmVyKHB1YmxpY0tleUIpLCBcIkJhZCBwdWJsaWMga2V5XCIpO1xuICBhc3NlcnQocHJpdmF0ZUtleUEubGVuZ3RoID09PSAzMiwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gIGFzc2VydChpc1ZhbGlkUHJpdmF0ZUtleShwcml2YXRlS2V5QSksIFwiQmFkIHByaXZhdGUga2V5XCIpO1xuICBhc3NlcnQocHVibGljS2V5Qi5sZW5ndGggPT09IDY1IHx8IHB1YmxpY0tleUIubGVuZ3RoID09PSAzMywgXCJCYWQgcHVibGljIGtleVwiKTtcbiAgaWYgKHB1YmxpY0tleUIubGVuZ3RoID09PSA2NSkge1xuICAgIGFzc2VydChwdWJsaWNLZXlCWzBdID09PSA0LCBcIkJhZCBwdWJsaWMga2V5XCIpO1xuICB9XG4gIGlmIChwdWJsaWNLZXlCLmxlbmd0aCA9PT0gMzMpIHtcbiAgICBhc3NlcnQocHVibGljS2V5QlswXSA9PT0gMiB8fCBwdWJsaWNLZXlCWzBdID09PSAzLCBcIkJhZCBwdWJsaWMga2V5XCIpO1xuICB9XG4gIGNvbnN0IGtleUEgPSBlYy5rZXlGcm9tUHJpdmF0ZShwcml2YXRlS2V5QSk7XG4gIGNvbnN0IGtleUIgPSBlYy5rZXlGcm9tUHVibGljKHB1YmxpY0tleUIpO1xuICBjb25zdCBQeCA9IGtleUEuZGVyaXZlKGtleUIuZ2V0UHVibGljKCkpOyAvLyBCTiBpbnN0YW5jZVxuICByZXR1cm4gQnVmZmVyLmZyb20oUHgudG9BcnJheSgpKTtcbn07XG5jb25zdCBkZXJpdmVQYWRkZWQgPSBleHBvcnRzLmRlcml2ZVBhZGRlZCA9IGFzeW5jIGZ1bmN0aW9uIChwcml2YXRlS2V5QSwgcHVibGljS2V5Qikge1xuICBhc3NlcnQoQnVmZmVyLmlzQnVmZmVyKHByaXZhdGVLZXlBKSwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gIGFzc2VydChCdWZmZXIuaXNCdWZmZXIocHVibGljS2V5QiksIFwiQmFkIHB1YmxpYyBrZXlcIik7XG4gIGFzc2VydChwcml2YXRlS2V5QS5sZW5ndGggPT09IDMyLCBcIkJhZCBwcml2YXRlIGtleVwiKTtcbiAgYXNzZXJ0KGlzVmFsaWRQcml2YXRlS2V5KHByaXZhdGVLZXlBKSwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gIGFzc2VydChwdWJsaWNLZXlCLmxlbmd0aCA9PT0gNjUgfHwgcHVibGljS2V5Qi5sZW5ndGggPT09IDMzLCBcIkJhZCBwdWJsaWMga2V5XCIpO1xuICBpZiAocHVibGljS2V5Qi5sZW5ndGggPT09IDY1KSB7XG4gICAgYXNzZXJ0KHB1YmxpY0tleUJbMF0gPT09IDQsIFwiQmFkIHB1YmxpYyBrZXlcIik7XG4gIH1cbiAgaWYgKHB1YmxpY0tleUIubGVuZ3RoID09PSAzMykge1xuICAgIGFzc2VydChwdWJsaWNLZXlCWzBdID09PSAyIHx8IHB1YmxpY0tleUJbMF0gPT09IDMsIFwiQmFkIHB1YmxpYyBrZXlcIik7XG4gIH1cbiAgY29uc3Qga2V5QSA9IGVjLmtleUZyb21Qcml2YXRlKHByaXZhdGVLZXlBKTtcbiAgY29uc3Qga2V5QiA9IGVjLmtleUZyb21QdWJsaWMocHVibGljS2V5Qik7XG4gIGNvbnN0IFB4ID0ga2V5QS5kZXJpdmUoa2V5Qi5nZXRQdWJsaWMoKSk7IC8vIEJOIGluc3RhbmNlXG4gIHJldHVybiBCdWZmZXIuZnJvbShQeC50b1N0cmluZygxNiwgNjQpLCBcImhleFwiKTtcbn07XG5leHBvcnRzLmVuY3J5cHQgPSBhc3luYyBmdW5jdGlvbiAocHVibGljS2V5VG8sIG1zZywgb3B0cykge1xuICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgLy8gVG1wIHZhcmlhYmxlcyB0byBzYXZlIGNvbnRleHQgZnJvbSBmbGF0IHByb21pc2VzO1xuICBsZXQgaXYsIGVwaGVtUHVibGljS2V5LCBjaXBoZXJ0ZXh0LCBtYWNLZXk7XG4gIGxldCBlcGhlbVByaXZhdGVLZXkgPSBvcHRzLmVwaGVtUHJpdmF0ZUtleSB8fCByYW5kb21CeXRlcygzMik7XG4gIC8vIFRoZXJlIGlzIGEgdmVyeSB1bmxpa2VseSBwb3NzaWJpbGl0eSB0aGF0IGl0IGlzIG5vdCBhIHZhbGlkIGtleVxuICB3aGlsZSAoIWlzVmFsaWRQcml2YXRlS2V5KGVwaGVtUHJpdmF0ZUtleSkpIHtcbiAgICBlcGhlbVByaXZhdGVLZXkgPSBvcHRzLmVwaGVtUHJpdmF0ZUtleSB8fCByYW5kb21CeXRlcygzMik7XG4gIH1cbiAgZXBoZW1QdWJsaWNLZXkgPSBnZXRQdWJsaWMoZXBoZW1Qcml2YXRlS2V5KTtcbiAgY29uc3QgUHggPSBhd2FpdCBkZXJpdmVVbnBhZGRlZChlcGhlbVByaXZhdGVLZXksIHB1YmxpY0tleVRvKTtcbiAgY29uc3QgaGFzaCA9IGF3YWl0IHNoYTUxMihQeCk7XG4gIGl2ID0gb3B0cy5pdiB8fCByYW5kb21CeXRlcygxNik7XG4gIGNvbnN0IGVuY3J5cHRpb25LZXkgPSBoYXNoLnNsaWNlKDAsIDMyKTtcbiAgbWFjS2V5ID0gaGFzaC5zbGljZSgzMik7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBhZXNDYmNFbmNyeXB0KGl2LCBlbmNyeXB0aW9uS2V5LCBtc2cpO1xuICBjaXBoZXJ0ZXh0ID0gZGF0YTtcbiAgY29uc3QgZGF0YVRvTWFjID0gQnVmZmVyLmNvbmNhdChbaXYsIGVwaGVtUHVibGljS2V5LCBjaXBoZXJ0ZXh0XSk7XG4gIGNvbnN0IG1hYyA9IGF3YWl0IGhtYWNTaGEyNTZTaWduKG1hY0tleSwgZGF0YVRvTWFjKTtcbiAgcmV0dXJuIHtcbiAgICBpdjogaXYsXG4gICAgZXBoZW1QdWJsaWNLZXk6IGVwaGVtUHVibGljS2V5LFxuICAgIGNpcGhlcnRleHQ6IGNpcGhlcnRleHQsXG4gICAgbWFjOiBtYWNcbiAgfTtcbn07XG5jb25zdCBkZWNyeXB0ID0gYXN5bmMgZnVuY3Rpb24gKHByaXZhdGVLZXksIG9wdHMpIHtcbiAgbGV0IHBhZGRpbmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuICAvLyBUbXAgdmFyaWFibGUgdG8gc2F2ZSBjb250ZXh0IGZyb20gZmxhdCBwcm9taXNlcztcbiAgbGV0IGVuY3J5cHRpb25LZXk7XG4gIGNvbnN0IGRlcml2ZSA9IHBhZGRpbmcgPyBkZXJpdmVQYWRkZWQgOiBkZXJpdmVVbnBhZGRlZDtcbiAgY29uc3QgUHggPSBhd2FpdCBkZXJpdmUocHJpdmF0ZUtleSwgb3B0cy5lcGhlbVB1YmxpY0tleSk7XG4gIGNvbnN0IGhhc2ggPSBhd2FpdCBzaGE1MTIoUHgpO1xuICBlbmNyeXB0aW9uS2V5ID0gaGFzaC5zbGljZSgwLCAzMik7XG4gIGNvbnN0IG1hY0tleSA9IGhhc2guc2xpY2UoMzIpO1xuICBjb25zdCBkYXRhVG9NYWMgPSBCdWZmZXIuY29uY2F0KFtvcHRzLml2LCBvcHRzLmVwaGVtUHVibGljS2V5LCBvcHRzLmNpcGhlcnRleHRdKTtcbiAgY29uc3QgbWFjR29vZCA9IGF3YWl0IGhtYWNTaGEyNTZWZXJpZnkobWFjS2V5LCBkYXRhVG9NYWMsIG9wdHMubWFjKTtcbiAgaWYgKCFtYWNHb29kICYmIHBhZGRpbmcgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGRlY3J5cHQocHJpdmF0ZUtleSwgb3B0cywgdHJ1ZSk7XG4gIH0gZWxzZSBpZiAoIW1hY0dvb2QgJiYgcGFkZGluZyA9PT0gdHJ1ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImJhZCBNQUMgYWZ0ZXIgdHJ5aW5nIHBhZGRlZFwiKTtcbiAgfVxuICBjb25zdCBtc2cgPSBhd2FpdCBhZXNDYmNEZWNyeXB0KG9wdHMuaXYsIGVuY3J5cHRpb25LZXksIG9wdHMuY2lwaGVydGV4dCk7XG4gIHJldHVybiBCdWZmZXIuZnJvbShuZXcgVWludDhBcnJheShtc2cpKTtcbn07XG5leHBvcnRzLmRlY3J5cHQgPSBkZWNyeXB0OyJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@toruslabs+eccrypto@2.2.1/node_modules/@toruslabs/eccrypto/dist/browser.js\n");

/***/ })

};
;