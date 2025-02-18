"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[2920],{

/***/ 92920:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/web.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Geolocation: () => (/* binding */ Geolocation),
/* harmony export */   GeolocationWeb: () => (/* binding */ GeolocationWeb)
/* harmony export */ });
/* harmony import */ var _Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 15083);


class GeolocationWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.WebPlugin {
  getCurrentPosition(options) {
    return (0,_Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(pos => {
          resolve(pos);
        }, err => {
          reject(err);
        }, Object.assign({
          enableHighAccuracy: false,
          timeout: 10000,
          maximumAge: 0
        }, options));
      });
    })();
  }
  watchPosition(options, callback) {
    return (0,_Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const id = navigator.geolocation.watchPosition(pos => {
        callback(pos);
      }, err => {
        callback(null, err);
      }, Object.assign({
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 0,
        minimumUpdateInterval: 5000
      }, options));
      return `${id}`;
    })();
  }
  clearWatch(options) {
    return (0,_Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      window.navigator.geolocation.clearWatch(parseInt(options.id, 10));
    })();
  }
  checkPermissions() {
    var _this = this;
    return (0,_Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (typeof navigator === 'undefined' || !navigator.permissions) {
        throw _this.unavailable('Permissions API not available in this browser');
      }
      const permission = yield window.navigator.permissions.query({
        name: 'geolocation'
      });
      return {
        location: permission.state,
        coarseLocation: permission.state
      };
    })();
  }
  requestPermissions() {
    var _this2 = this;
    return (0,_Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw _this2.unimplemented('Not implemented on web.');
    })();
  }
}
const Geolocation = new GeolocationWeb();

//# sourceMappingURL=web.js.map

/***/ })

}]);