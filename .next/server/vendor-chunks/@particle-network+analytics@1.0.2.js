"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@particle-network+analytics@1.0.2";
exports.ids = ["vendor-chunks/@particle-network+analytics@1.0.2"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@particle-network+analytics@1.0.2/node_modules/@particle-network/analytics/es/index.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@particle-network+analytics@1.0.2/node_modules/@particle-network/analytics/es/index.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AcitveLoginType: () => (/* binding */ AcitveLoginType),\n/* harmony export */   ActiveAction: () => (/* binding */ ActiveAction),\n/* harmony export */   BI: () => (/* binding */ BI),\n/* harmony export */   RecordType: () => (/* binding */ RecordType)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"(ssr)/./node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/v4.js\");\n// src/bi.ts\n\nvar AcitveLoginType = /* @__PURE__ */ ((AcitveLoginType2) => {\n  AcitveLoginType2[\"PARTICLE\"] = \"particle\";\n  AcitveLoginType2[\"PRIVATE_KEY\"] = \"private_key\";\n  AcitveLoginType2[\"METAMASK\"] = \"metamask\";\n  AcitveLoginType2[\"RAINBOW\"] = \"rainbow\";\n  AcitveLoginType2[\"TRUST\"] = \"trust\";\n  AcitveLoginType2[\"IM_TOKEN\"] = \"im_token\";\n  AcitveLoginType2[\"BIT_KEEP\"] = \"bit_keep\";\n  AcitveLoginType2[\"PHANTOM\"] = \"phantom\";\n  AcitveLoginType2[\"OTHER\"] = \"other\";\n  return AcitveLoginType2;\n})(AcitveLoginType || {});\nvar ActiveAction = /* @__PURE__ */ ((ActiveAction2) => {\n  ActiveAction2[\"SIGN\"] = \"sign\";\n  ActiveAction2[\"LOGIN\"] = \"login\";\n  ActiveAction2[\"OPEN\"] = \"open\";\n  ActiveAction2[\"OPEN_WALLET\"] = \"open_wallet\";\n  return ActiveAction2;\n})(ActiveAction || {});\nvar RecordType = /* @__PURE__ */ ((RecordType2) => {\n  RecordType2[\"PAGE_LOGIN_BUTTON_CLICK\"] = \"page_login_button_click\";\n  RecordType2[\"PAGE_LOGIN_BUTTON_CLICK_SUCCESS\"] = \"page_login_button_click_success\";\n  RecordType2[\"PAGE_LOGIN_BUTTON_CLICK_FAILURE\"] = \"page_login_button_click_failure\";\n  RecordType2[\"PAGE_LOGIN_SUCCESS_BACK\"] = \"page_login_success_back\";\n  RecordType2[\"PAGE_SIGN_CONFIRM_BUTTON_CLICK\"] = \"page_sign_confirm_button_click\";\n  RecordType2[\"PAGE_SIGN_CONFIRM_BUTTON_CLICK_SUCCESS\"] = \"page_sign_confirm_button_click_success\";\n  RecordType2[\"PAGE_SIGN_CONFIRM_BUTTON_CLICK_FAILURE\"] = \"page_sign_confirm_button_click_failure\";\n  RecordType2[\"PAGE_SETTING_MASTER_PASSWORD_ENTER\"] = \"page_setting_master_password_enter\";\n  RecordType2[\"PAGE_SETTING_MASTER_PASSWORD_SET\"] = \"page_setting_master_password_set\";\n  RecordType2[\"PAGE_SETTING_MASTER_PASSWORD_CHANGE\"] = \"page_setting_master_password_change\";\n  RecordType2[\"PAGE_MASTER_PASSWORD_VERIFY\"] = \"page_master_password_verify\";\n  RecordType2[\"PAGE_MASTER_PASSWORD_VERIFY_SUCCESS\"] = \"page_master_password_verify_success\";\n  return RecordType2;\n})(RecordType || {});\nvar BI = class {\n  constructor(options) {\n    this.options = options;\n  }\n  active(params) {\n    const timestamp = Math.round(new Date().getTime() / 1e3);\n    const randomStr = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const { project_uuid, project_key, project_app_uuid } = this.options.project_config;\n    const queryParams = {\n      timestamp,\n      random_str: randomStr,\n      project_app_uuid,\n      projectUuid: project_uuid,\n      projectKey: project_key\n    };\n    let url = this.options.sdk_api_domain + \"/active?\";\n    Object.keys(queryParams).forEach((key) => {\n      url += `${key}=${encodeURI(queryParams[key])}&`;\n    });\n    url = url.slice(0, -1);\n    navigator.sendBeacon(\n      url,\n      new Blob([new URLSearchParams(params).toString()], {\n        type: \"application/x-www-form-urlencoded\"\n      })\n    );\n  }\n  records(params) {\n    try {\n      const timestamp = Math.round(new Date().getTime() / 1e3);\n      const randomStr = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      const { project_uuid, project_key, project_app_uuid } = this.options.project_config;\n      const queryParams = {\n        timestamp,\n        random_str: randomStr,\n        project_app_uuid,\n        projectUuid: project_uuid,\n        projectKey: project_key\n      };\n      let url = this.options.sdk_api_domain + \"/records?\";\n      Object.keys(queryParams).forEach((key) => {\n        url += `${key}=${encodeURI(queryParams[key])}&`;\n      });\n      url = url.slice(0, -1);\n      navigator.sendBeacon(\n        url,\n        new Blob([new URLSearchParams(params).toString()], {\n          type: \"application/x-www-form-urlencoded\"\n        })\n      );\n    } catch (error) {\n    }\n  }\n};\n\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHBhcnRpY2xlLW5ldHdvcmsrYW5hbHl0aWNzQDEuMC4yL25vZGVfbW9kdWxlcy9AcGFydGljbGUtbmV0d29yay9hbmFseXRpY3MvZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUMwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx1QkFBdUI7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvQkFBb0I7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsa0JBQWtCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnREFBRTtBQUN4QixZQUFZLDhDQUE4QztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsSUFBSSxHQUFHLDRCQUE0QjtBQUNuRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdEQUFFO0FBQzFCLGNBQWMsOENBQThDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixJQUFJLEdBQUcsNEJBQTRCO0FBQ3JELE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQU1FO0FBQ0YiLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL2l3by1wbGF0Zm9ybS9ub2RlX21vZHVsZXMvLnBucG0vQHBhcnRpY2xlLW5ldHdvcmsrYW5hbHl0aWNzQDEuMC4yL25vZGVfbW9kdWxlcy9AcGFydGljbGUtbmV0d29yay9hbmFseXRpY3MvZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2JpLnRzXG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XG52YXIgQWNpdHZlTG9naW5UeXBlID0gLyogQF9fUFVSRV9fICovICgoQWNpdHZlTG9naW5UeXBlMikgPT4ge1xuICBBY2l0dmVMb2dpblR5cGUyW1wiUEFSVElDTEVcIl0gPSBcInBhcnRpY2xlXCI7XG4gIEFjaXR2ZUxvZ2luVHlwZTJbXCJQUklWQVRFX0tFWVwiXSA9IFwicHJpdmF0ZV9rZXlcIjtcbiAgQWNpdHZlTG9naW5UeXBlMltcIk1FVEFNQVNLXCJdID0gXCJtZXRhbWFza1wiO1xuICBBY2l0dmVMb2dpblR5cGUyW1wiUkFJTkJPV1wiXSA9IFwicmFpbmJvd1wiO1xuICBBY2l0dmVMb2dpblR5cGUyW1wiVFJVU1RcIl0gPSBcInRydXN0XCI7XG4gIEFjaXR2ZUxvZ2luVHlwZTJbXCJJTV9UT0tFTlwiXSA9IFwiaW1fdG9rZW5cIjtcbiAgQWNpdHZlTG9naW5UeXBlMltcIkJJVF9LRUVQXCJdID0gXCJiaXRfa2VlcFwiO1xuICBBY2l0dmVMb2dpblR5cGUyW1wiUEhBTlRPTVwiXSA9IFwicGhhbnRvbVwiO1xuICBBY2l0dmVMb2dpblR5cGUyW1wiT1RIRVJcIl0gPSBcIm90aGVyXCI7XG4gIHJldHVybiBBY2l0dmVMb2dpblR5cGUyO1xufSkoQWNpdHZlTG9naW5UeXBlIHx8IHt9KTtcbnZhciBBY3RpdmVBY3Rpb24gPSAvKiBAX19QVVJFX18gKi8gKChBY3RpdmVBY3Rpb24yKSA9PiB7XG4gIEFjdGl2ZUFjdGlvbjJbXCJTSUdOXCJdID0gXCJzaWduXCI7XG4gIEFjdGl2ZUFjdGlvbjJbXCJMT0dJTlwiXSA9IFwibG9naW5cIjtcbiAgQWN0aXZlQWN0aW9uMltcIk9QRU5cIl0gPSBcIm9wZW5cIjtcbiAgQWN0aXZlQWN0aW9uMltcIk9QRU5fV0FMTEVUXCJdID0gXCJvcGVuX3dhbGxldFwiO1xuICByZXR1cm4gQWN0aXZlQWN0aW9uMjtcbn0pKEFjdGl2ZUFjdGlvbiB8fCB7fSk7XG52YXIgUmVjb3JkVHlwZSA9IC8qIEBfX1BVUkVfXyAqLyAoKFJlY29yZFR5cGUyKSA9PiB7XG4gIFJlY29yZFR5cGUyW1wiUEFHRV9MT0dJTl9CVVRUT05fQ0xJQ0tcIl0gPSBcInBhZ2VfbG9naW5fYnV0dG9uX2NsaWNrXCI7XG4gIFJlY29yZFR5cGUyW1wiUEFHRV9MT0dJTl9CVVRUT05fQ0xJQ0tfU1VDQ0VTU1wiXSA9IFwicGFnZV9sb2dpbl9idXR0b25fY2xpY2tfc3VjY2Vzc1wiO1xuICBSZWNvcmRUeXBlMltcIlBBR0VfTE9HSU5fQlVUVE9OX0NMSUNLX0ZBSUxVUkVcIl0gPSBcInBhZ2VfbG9naW5fYnV0dG9uX2NsaWNrX2ZhaWx1cmVcIjtcbiAgUmVjb3JkVHlwZTJbXCJQQUdFX0xPR0lOX1NVQ0NFU1NfQkFDS1wiXSA9IFwicGFnZV9sb2dpbl9zdWNjZXNzX2JhY2tcIjtcbiAgUmVjb3JkVHlwZTJbXCJQQUdFX1NJR05fQ09ORklSTV9CVVRUT05fQ0xJQ0tcIl0gPSBcInBhZ2Vfc2lnbl9jb25maXJtX2J1dHRvbl9jbGlja1wiO1xuICBSZWNvcmRUeXBlMltcIlBBR0VfU0lHTl9DT05GSVJNX0JVVFRPTl9DTElDS19TVUNDRVNTXCJdID0gXCJwYWdlX3NpZ25fY29uZmlybV9idXR0b25fY2xpY2tfc3VjY2Vzc1wiO1xuICBSZWNvcmRUeXBlMltcIlBBR0VfU0lHTl9DT05GSVJNX0JVVFRPTl9DTElDS19GQUlMVVJFXCJdID0gXCJwYWdlX3NpZ25fY29uZmlybV9idXR0b25fY2xpY2tfZmFpbHVyZVwiO1xuICBSZWNvcmRUeXBlMltcIlBBR0VfU0VUVElOR19NQVNURVJfUEFTU1dPUkRfRU5URVJcIl0gPSBcInBhZ2Vfc2V0dGluZ19tYXN0ZXJfcGFzc3dvcmRfZW50ZXJcIjtcbiAgUmVjb3JkVHlwZTJbXCJQQUdFX1NFVFRJTkdfTUFTVEVSX1BBU1NXT1JEX1NFVFwiXSA9IFwicGFnZV9zZXR0aW5nX21hc3Rlcl9wYXNzd29yZF9zZXRcIjtcbiAgUmVjb3JkVHlwZTJbXCJQQUdFX1NFVFRJTkdfTUFTVEVSX1BBU1NXT1JEX0NIQU5HRVwiXSA9IFwicGFnZV9zZXR0aW5nX21hc3Rlcl9wYXNzd29yZF9jaGFuZ2VcIjtcbiAgUmVjb3JkVHlwZTJbXCJQQUdFX01BU1RFUl9QQVNTV09SRF9WRVJJRllcIl0gPSBcInBhZ2VfbWFzdGVyX3Bhc3N3b3JkX3ZlcmlmeVwiO1xuICBSZWNvcmRUeXBlMltcIlBBR0VfTUFTVEVSX1BBU1NXT1JEX1ZFUklGWV9TVUNDRVNTXCJdID0gXCJwYWdlX21hc3Rlcl9wYXNzd29yZF92ZXJpZnlfc3VjY2Vzc1wiO1xuICByZXR1cm4gUmVjb3JkVHlwZTI7XG59KShSZWNvcmRUeXBlIHx8IHt9KTtcbnZhciBCSSA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cbiAgYWN0aXZlKHBhcmFtcykge1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IE1hdGgucm91bmQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxZTMpO1xuICAgIGNvbnN0IHJhbmRvbVN0ciA9IHY0KCk7XG4gICAgY29uc3QgeyBwcm9qZWN0X3V1aWQsIHByb2plY3Rfa2V5LCBwcm9qZWN0X2FwcF91dWlkIH0gPSB0aGlzLm9wdGlvbnMucHJvamVjdF9jb25maWc7XG4gICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7XG4gICAgICB0aW1lc3RhbXAsXG4gICAgICByYW5kb21fc3RyOiByYW5kb21TdHIsXG4gICAgICBwcm9qZWN0X2FwcF91dWlkLFxuICAgICAgcHJvamVjdFV1aWQ6IHByb2plY3RfdXVpZCxcbiAgICAgIHByb2plY3RLZXk6IHByb2plY3Rfa2V5XG4gICAgfTtcbiAgICBsZXQgdXJsID0gdGhpcy5vcHRpb25zLnNka19hcGlfZG9tYWluICsgXCIvYWN0aXZlP1wiO1xuICAgIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHVybCArPSBgJHtrZXl9PSR7ZW5jb2RlVVJJKHF1ZXJ5UGFyYW1zW2tleV0pfSZgO1xuICAgIH0pO1xuICAgIHVybCA9IHVybC5zbGljZSgwLCAtMSk7XG4gICAgbmF2aWdhdG9yLnNlbmRCZWFjb24oXG4gICAgICB1cmwsXG4gICAgICBuZXcgQmxvYihbbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbXMpLnRvU3RyaW5nKCldLCB7XG4gICAgICAgIHR5cGU6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICByZWNvcmRzKHBhcmFtcykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0aW1lc3RhbXAgPSBNYXRoLnJvdW5kKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMWUzKTtcbiAgICAgIGNvbnN0IHJhbmRvbVN0ciA9IHY0KCk7XG4gICAgICBjb25zdCB7IHByb2plY3RfdXVpZCwgcHJvamVjdF9rZXksIHByb2plY3RfYXBwX3V1aWQgfSA9IHRoaXMub3B0aW9ucy5wcm9qZWN0X2NvbmZpZztcbiAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0ge1xuICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgIHJhbmRvbV9zdHI6IHJhbmRvbVN0cixcbiAgICAgICAgcHJvamVjdF9hcHBfdXVpZCxcbiAgICAgICAgcHJvamVjdFV1aWQ6IHByb2plY3RfdXVpZCxcbiAgICAgICAgcHJvamVjdEtleTogcHJvamVjdF9rZXlcbiAgICAgIH07XG4gICAgICBsZXQgdXJsID0gdGhpcy5vcHRpb25zLnNka19hcGlfZG9tYWluICsgXCIvcmVjb3Jkcz9cIjtcbiAgICAgIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdXJsICs9IGAke2tleX09JHtlbmNvZGVVUkkocXVlcnlQYXJhbXNba2V5XSl9JmA7XG4gICAgICB9KTtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCAtMSk7XG4gICAgICBuYXZpZ2F0b3Iuc2VuZEJlYWNvbihcbiAgICAgICAgdXJsLFxuICAgICAgICBuZXcgQmxvYihbbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbXMpLnRvU3RyaW5nKCldLCB7XG4gICAgICAgICAgdHlwZTogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydCB7XG4gIEFjaXR2ZUxvZ2luVHlwZSxcbiAgQWN0aXZlQWN0aW9uLFxuICBCSSxcbiAgUmVjb3JkVHlwZVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@particle-network+analytics@1.0.2/node_modules/@particle-network/analytics/es/index.js\n");

/***/ })

};
;