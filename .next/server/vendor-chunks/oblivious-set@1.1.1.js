"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/oblivious-set@1.1.1";
exports.ids = ["vendor-chunks/oblivious-set@1.1.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/oblivious-set@1.1.1/node_modules/oblivious-set/dist/es/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/oblivious-set@1.1.1/node_modules/oblivious-set/dist/es/index.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ObliviousSet: () => (/* binding */ ObliviousSet),\n/* harmony export */   now: () => (/* binding */ now),\n/* harmony export */   removeTooOldValues: () => (/* binding */ removeTooOldValues)\n/* harmony export */ });\n/**\n * this is a set which automatically forgets\n * a given entry when a new entry is set and the ttl\n * of the old one is over\n */\nvar ObliviousSet = /** @class */ (function () {\n    function ObliviousSet(ttl) {\n        this.ttl = ttl;\n        this.map = new Map();\n        /**\n         * Creating calls to setTimeout() is expensive,\n         * so we only do that if there is not timeout already open.\n         */\n        this._to = false;\n    }\n    ObliviousSet.prototype.has = function (value) {\n        return this.map.has(value);\n    };\n    ObliviousSet.prototype.add = function (value) {\n        var _this = this;\n        this.map.set(value, now());\n        /**\n         * When a new value is added,\n         * start the cleanup at the next tick\n         * to not block the cpu for more important stuff\n         * that might happen.\n         */\n        if (!this._to) {\n            this._to = true;\n            setTimeout(function () {\n                _this._to = false;\n                removeTooOldValues(_this);\n            }, 0);\n        }\n    };\n    ObliviousSet.prototype.clear = function () {\n        this.map.clear();\n    };\n    return ObliviousSet;\n}());\n\n/**\n * Removes all entries from the set\n * where the TTL has expired\n */\nfunction removeTooOldValues(obliviousSet) {\n    var olderThen = now() - obliviousSet.ttl;\n    var iterator = obliviousSet.map[Symbol.iterator]();\n    /**\n     * Because we can assume the new values are added at the bottom,\n     * we start from the top and stop as soon as we reach a non-too-old value.\n     */\n    while (true) {\n        var next = iterator.next().value;\n        if (!next) {\n            return; // no more elements\n        }\n        var value = next[0];\n        var time = next[1];\n        if (time < olderThen) {\n            obliviousSet.map.delete(value);\n        }\n        else {\n            // We reached a value that is not old enough\n            return;\n        }\n    }\n}\nfunction now() {\n    return new Date().getTime();\n}\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vb2JsaXZpb3VzLXNldEAxLjEuMS9ub2RlX21vZHVsZXMvb2JsaXZpb3VzLXNldC9kaXN0L2VzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUN1QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvd29ya3NwYWNlcy9pd28tcGxhdGZvcm0vbm9kZV9tb2R1bGVzLy5wbnBtL29ibGl2aW91cy1zZXRAMS4xLjEvbm9kZV9tb2R1bGVzL29ibGl2aW91cy1zZXQvZGlzdC9lcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIHRoaXMgaXMgYSBzZXQgd2hpY2ggYXV0b21hdGljYWxseSBmb3JnZXRzXG4gKiBhIGdpdmVuIGVudHJ5IHdoZW4gYSBuZXcgZW50cnkgaXMgc2V0IGFuZCB0aGUgdHRsXG4gKiBvZiB0aGUgb2xkIG9uZSBpcyBvdmVyXG4gKi9cbnZhciBPYmxpdmlvdXNTZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT2JsaXZpb3VzU2V0KHR0bCkge1xuICAgICAgICB0aGlzLnR0bCA9IHR0bDtcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGluZyBjYWxscyB0byBzZXRUaW1lb3V0KCkgaXMgZXhwZW5zaXZlLFxuICAgICAgICAgKiBzbyB3ZSBvbmx5IGRvIHRoYXQgaWYgdGhlcmUgaXMgbm90IHRpbWVvdXQgYWxyZWFkeSBvcGVuLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fdG8gPSBmYWxzZTtcbiAgICB9XG4gICAgT2JsaXZpb3VzU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmhhcyh2YWx1ZSk7XG4gICAgfTtcbiAgICBPYmxpdmlvdXNTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLm1hcC5zZXQodmFsdWUsIG5vdygpKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gYSBuZXcgdmFsdWUgaXMgYWRkZWQsXG4gICAgICAgICAqIHN0YXJ0IHRoZSBjbGVhbnVwIGF0IHRoZSBuZXh0IHRpY2tcbiAgICAgICAgICogdG8gbm90IGJsb2NrIHRoZSBjcHUgZm9yIG1vcmUgaW1wb3J0YW50IHN0dWZmXG4gICAgICAgICAqIHRoYXQgbWlnaHQgaGFwcGVuLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCF0aGlzLl90bykge1xuICAgICAgICAgICAgdGhpcy5fdG8gPSB0cnVlO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3RvID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVG9vT2xkVmFsdWVzKF90aGlzKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYmxpdmlvdXNTZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm1hcC5jbGVhcigpO1xuICAgIH07XG4gICAgcmV0dXJuIE9ibGl2aW91c1NldDtcbn0oKSk7XG5leHBvcnQgeyBPYmxpdmlvdXNTZXQgfTtcbi8qKlxuICogUmVtb3ZlcyBhbGwgZW50cmllcyBmcm9tIHRoZSBzZXRcbiAqIHdoZXJlIHRoZSBUVEwgaGFzIGV4cGlyZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRvb09sZFZhbHVlcyhvYmxpdmlvdXNTZXQpIHtcbiAgICB2YXIgb2xkZXJUaGVuID0gbm93KCkgLSBvYmxpdmlvdXNTZXQudHRsO1xuICAgIHZhciBpdGVyYXRvciA9IG9ibGl2aW91c1NldC5tYXBbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgIC8qKlxuICAgICAqIEJlY2F1c2Ugd2UgY2FuIGFzc3VtZSB0aGUgbmV3IHZhbHVlcyBhcmUgYWRkZWQgYXQgdGhlIGJvdHRvbSxcbiAgICAgKiB3ZSBzdGFydCBmcm9tIHRoZSB0b3AgYW5kIHN0b3AgYXMgc29vbiBhcyB3ZSByZWFjaCBhIG5vbi10b28tb2xkIHZhbHVlLlxuICAgICAqL1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBuZXh0ID0gaXRlcmF0b3IubmV4dCgpLnZhbHVlO1xuICAgICAgICBpZiAoIW5leHQpIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8gbm8gbW9yZSBlbGVtZW50c1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IG5leHRbMF07XG4gICAgICAgIHZhciB0aW1lID0gbmV4dFsxXTtcbiAgICAgICAgaWYgKHRpbWUgPCBvbGRlclRoZW4pIHtcbiAgICAgICAgICAgIG9ibGl2aW91c1NldC5tYXAuZGVsZXRlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdlIHJlYWNoZWQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBvbGQgZW5vdWdoXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbm93KCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/oblivious-set@1.1.1/node_modules/oblivious-set/dist/es/index.js\n");

/***/ })

};
;