"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[1271],{

/***/ 51670:
/*!***************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/in-app-browser/ngx/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InAppBrowser: () => (/* binding */ InAppBrowser),
/* harmony export */   InAppBrowserObject: () => (/* binding */ InAppBrowserObject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 67991);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 71985);





var InAppBrowserObject = /** @class */function () {
  /**
   * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
   *
   * @param {string} url     The URL to load.
   * @param {string} [target="self"]  The target in which to load the URL, an optional parameter that defaults to _self.
   *                 _self: Opens in the WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
   *                 _blank: Opens in the InAppBrowser.
   *                 _system: Opens in the system's web browser.
   * @param {string | InAppBrowserOptions} [options] Options for the InAppBrowser. Optional, defaulting to: location=yes.
   *                 The options string must not contain any blank space, and each feature's
   *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
   */
  function InAppBrowserObject(url, target, options) {
    try {
      if (options && typeof options !== 'string') {
        options = Object.keys(options).map(function (key) {
          return key + "=" + options[key];
        }).join(',');
      }
      this._objectInstance = cordova.InAppBrowser.open(url, target, options);
    } catch (e) {
      if (typeof window !== 'undefined') {
        window.open(url, target);
      }
      console.warn('Native: InAppBrowser is not installed or you are running on a browser. Falling back to window.open.');
    }
  }
  InAppBrowserObject.prototype._loadAfterBeforeload = function (strUrl) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "_loadAfterBeforeload", {
      "sync": true
    }, arguments);
  };
  InAppBrowserObject.prototype.show = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "show", {
      "sync": true
    }, arguments);
  };
  InAppBrowserObject.prototype.close = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "close", {
      "sync": true
    }, arguments);
  };
  InAppBrowserObject.prototype.hide = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "hide", {
      "sync": true
    }, arguments);
  };
  InAppBrowserObject.prototype.executeScript = function (script) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "executeScript", {}, arguments);
  };
  InAppBrowserObject.prototype.insertCSS = function (css) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "insertCSS", {}, arguments);
  };
  InAppBrowserObject.prototype.on = function (event) {
    var _this = this;
    return function () {
      if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
          _this._objectInstance.addEventListener(event, observer.next.bind(observer));
          return function () {
            return _this._objectInstance.removeEventListener(event, observer.next.bind(observer));
          };
        });
      }
    }();
  };
  return InAppBrowserObject;
}();

var InAppBrowser = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(InAppBrowser, _super);
  function InAppBrowser() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
   *
   * @param  url {string}     The URL to load.
   * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
   * @param  options {string} Options for the InAppBrowser. Optional, defaulting to: location=yes.
   *                 The options string must not contain any blank space, and each feature's
   *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
   * @returns {InAppBrowserObject}
   */
  InAppBrowser.prototype.create = function (url, target, options) {
    return new InAppBrowserObject(url, target, options);
  };
  InAppBrowser.ɵfac = /* @__PURE__ */(() => {
    let ɵInAppBrowser_BaseFactory;
    return function InAppBrowser_Factory(__ngFactoryType__) {
      return (ɵInAppBrowser_BaseFactory || (ɵInAppBrowser_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](InAppBrowser)))(__ngFactoryType__ || InAppBrowser);
    };
  })();
  InAppBrowser.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: InAppBrowser,
    factory: InAppBrowser.ɵfac
  });
  InAppBrowser.pluginName = "InAppBrowser";
  InAppBrowser.plugin = "cordova-plugin-inappbrowser";
  InAppBrowser.pluginRef = "cordova.InAppBrowser";
  InAppBrowser.repo = "https://github.com/apache/cordova-plugin-inappbrowser";
  InAppBrowser.platforms = ["AmazonFire OS", "Android", "Browser", "iOS", "macOS", "Windows"];
  InAppBrowser = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([], InAppBrowser);
  return InAppBrowser;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin);

(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](InAppBrowser, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable
  }], null, null);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW4tYXBwLWJyb3dzZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8scUVBQXNFLE1BQU0sK0JBQStCLENBQUM7QUFDbkgsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQzs7O0lBbUoxQzs7Ozs7Ozs7Ozs7T0FXRztJQUNILDRCQUFZLEdBQVcsRUFBRSxNQUFlLEVBQUUsT0FBc0M7UUFDOUUsSUFBSTtZQUNGLElBQUksT0FBTyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtnQkFDMUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3FCQUMzQixHQUFHLENBQUMsVUFBQyxHQUFXLElBQUssT0FBRyxHQUFHLFNBQUssT0FBK0IsQ0FBQyxHQUFHLENBQUcsRUFBakQsQ0FBaUQsQ0FBQztxQkFDdkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2Q7WUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDeEU7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO2dCQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUMxQjtZQUNELE9BQU8sQ0FBQyxJQUFJLENBQ1YscUdBQXFHLENBQ3RHLENBQUM7U0FDSDtJQUNILENBQUM7SUFRRCxpREFBb0IsYUFBQyxNQUFjO0lBT25DLGlDQUFJO0lBTUosa0NBQUs7SUFPTCxpQ0FBSTtJQVdKLDBDQUFhLGFBQUMsTUFBd0M7SUFhdEQsc0NBQVMsYUFBQyxHQUFxQztJQVcvQywrQkFBRSxhQUFDLEtBQTRCOzs7c0RBQWlDO2dCQUM5RCxPQUFPLElBQUksVUFBVSxDQUFvQixVQUFDLFFBQXFDO29CQUM3RSxLQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUMzRSxPQUFPLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUE3RSxDQUE2RSxDQUFDO2dCQUM3RixDQUFDLENBQUMsQ0FBQzthQUNKOzs7NkJBdFBIOzs7O0lBa1NrQyxnQ0FBMEI7Ozs7SUFDMUQ7Ozs7Ozs7OztPQVNHO0lBQ0gsNkJBQU0sR0FBTixVQUFPLEdBQVcsRUFBRSxNQUFlLEVBQUUsT0FBc0M7UUFDekUsT0FBTyxJQUFJLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs4R0FiVSxZQUFZO2tIQUFaLFlBQVk7Ozs7OztJQUFaLFlBQVksa0JBQVosWUFBWTt1QkFsU3pCO0VBa1NrQywwQkFBMEI7U0FBL0MsWUFBWTs0RkFBWixZQUFZO2tCQUR4QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZUNoZWNrLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuZGVjbGFyZSBjb25zdCBjb3Jkb3ZhOiBDb3Jkb3ZhICYgeyBJbkFwcEJyb3dzZXI6IGFueSB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIEluQXBwQnJvd3Nlck9wdGlvbnMge1xuICAvKipcbiAgICogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIHRvIGFsbG93IGluLWxpbmUgSFRNTDUgbWVkaWEgcGxheWJhY2ssIGRpc3BsYXlpbmcgd2l0aGluIHRoZSBicm93c2VyIHdpbmRvdyByYXRoZXIgdGhhbiBhIGRldmljZS1zcGVjaWZpYyBwbGF5YmFjayBpbnRlcmZhY2UuXG4gICAqIFRoZSBIVE1MJ3MgdmlkZW8gZWxlbWVudCBtdXN0IGFsc28gaW5jbHVkZSB0aGUgd2Via2l0LXBsYXlzaW5saW5lIGF0dHJpYnV0ZSAoZGVmYXVsdHMgdG8gbm8pXG4gICAqL1xuICBhbGxvd0lubGluZU1lZGlhUGxheWJhY2s/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiBzZXQgdG8gZW5hYmxlIHRoZSBiZWZvcmVsb2FkIGV2ZW50IHRvIG1vZGlmeSB3aGljaCBwYWdlcyBhcmUgYWN0dWFsbHkgbG9hZGVkIGluIHRoZSBicm93c2VyLiBBY2NlcHRlZCB2YWx1ZXMgYXJlIGdldCB0b1xuICAgKiBpbnRlcmNlcHQgb25seSBHRVQgcmVxdWVzdHMsIHBvc3QgdG8gaW50ZXJjZXB0IG9uIFBPU1QgcmVxdWVzdHMgb3IgeWVzIHRvIGludGVyY2VwdCBib3RoIEdFVCAmIFBPU1QgcmVxdWVzdHMuXG4gICAqIE5vdGUgdGhhdCBQT1NUIHJlcXVlc3RzIGFyZSBub3QgY3VycmVudGx5IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSBpZ25vcmVkIChpZiB5b3Ugc2V0IGJlZm9yZWxvYWQ9cG9zdCBpdCB3aWxsIHJhaXNlIGFuIGVycm9yKS5cbiAgICovXG4gIGJlZm9yZWxvYWQ/OiAneWVzJyB8ICdnZXQnIHwgJ3Bvc3QnO1xuICAvKiogU2V0IHRvIHllcyB0byBoYXZlIHRoZSBicm93c2VyJ3MgY29va2llIGNhY2hlIGNsZWFyZWQgYmVmb3JlIHRoZSBuZXcgd2luZG93IGlzIG9wZW5lZC4gKi9cbiAgY2xlYXJjYWNoZT86ICd5ZXMnIHwgJ25vJztcbiAgLyoqICBzZXQgdG8geWVzIHRvIGhhdmUgdGhlIGJyb3dzZXIncyBlbnRpcmUgbG9jYWwgc3RvcmFnZSBjbGVhcmVkIChjb29raWVzLCBIVE1MNSBsb2NhbCBzdG9yYWdlLCBJbmRleGVkREIsIGV0Yy4pIGJlZm9yZSB0aGUgbmV3IHdpbmRvdyBpcyBvcGVuZWQgKi9cbiAgY2xlYXJkYXRhPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogU2V0IHRvIHllcyB0byBoYXZlIHRoZSBzZXNzaW9uIGNvb2tpZSBjYWNoZSBjbGVhcmVkIGJlZm9yZSB0aGUgbmV3IHdpbmRvdyBpcyBvcGVuZWQuXG4gICAqIEZvciBXS1dlYlZpZXcsIHJlcXVpcmVzIGlPUyAxMSsgb24gdGFyZ2V0IGRldmljZS5cbiAgICovXG4gIGNsZWFyc2Vzc2lvbmNhY2hlPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHN0cmluZyB0byB1c2UgYXMgdGhlIGNsb3NlIGJ1dHRvbidzIGNhcHRpb24gaW5zdGVhZCBvZiBhIFguIE5vdGUgdGhhdCB5b3UgbmVlZCB0byBsb2NhbGl6ZSB0aGlzIHZhbHVlIHlvdXJzZWxmLlxuICAgKiAoaU9TKSBTZXQgdG8gYSBzdHJpbmcgdG8gdXNlIGFzIHRoZSBEb25lIGJ1dHRvbidzIGNhcHRpb24uIE5vdGUgdGhhdCB5b3UgbmVlZCB0byBsb2NhbGl6ZSB0aGlzIHZhbHVlIHlvdXJzZWxmLlxuICAgKi9cbiAgY2xvc2VidXR0b25jYXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGNsb3NlIGJ1dHRvbiBjb2xvciBmcm9tIGRlZmF1bHQsIHJlZ2FyZGxlc3Mgb2YgYmVpbmcgYSB0ZXh0IG9yIGRlZmF1bHQgWC4gT25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuXG4gICAqIChpT1MpIFNldCBhcyBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCB0byBjaGFuZ2UgZnJvbSB0aGUgZGVmYXVsdCBEb25lIGJ1dHRvbidzIGNvbG9yLiBPbmx5IGFwcGxpY2FibGUgaWYgdG9vbGJhciBpcyBub3QgZGlzYWJsZWQuXG4gICAqL1xuICBjbG9zZWJ1dHRvbmNvbG9yPzogc3RyaW5nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIChkZWZhdWx0IGlzIG5vKS4gVHVybnMgb24vb2ZmIHRoZSBVSVdlYlZpZXdCb3VuY2UgcHJvcGVydHkuICovXG4gIGRpc2FsbG93b3ZlcnNjcm9sbD86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgIFNldCB0byB5ZXMgb3Igbm8gdG8gcHJldmVudCB2aWV3cG9ydCBzY2FsaW5nIHRocm91Z2ggYSBtZXRhIHRhZyAoZGVmYXVsdHMgdG8gbm8pLiAqL1xuICBlbmFibGVWaWV3cG9ydFNjYWxlPzogJ3llcycgfCAnbm8nO1xuICAvKiogKEFuZHJvaWQgT25seSkgU2V0IHRvIHllcyB0byBzaG93IGEgY2xvc2UgYnV0dG9uIGluIHRoZSBmb290ZXIgc2ltaWxhciB0byB0aGUgaU9TIERvbmUgYnV0dG9uLiBUaGUgY2xvc2UgYnV0dG9uIHdpbGwgYXBwZWFyIHRoZSBzYW1lIGFzIGZvciB0aGUgaGVhZGVyIGhlbmNlIHVzZSBjbG9zZWJ1dHRvbmNhcHRpb24gYW5kIGNsb3NlYnV0dG9uY29sb3IgdG8gc2V0IGl0cyBwcm9wZXJ0aWVzICovXG4gIGZvb3Rlcj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChBbmRyb2lkIE9ubHkpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlICMwMGZmMDAgb3IgI0NDMDBmZjAwICgjYWFycmdnYmIpLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGZvb3RlciBjb2xvciBmcm9tIGRlZmF1bHQuIE9ubHkgaGFzIGVmZmVjdCBpZiB1c2VyIGhhcyBmb290ZXIgc2V0IHRvIHllcyAqL1xuICBmb290ZXJjb2xvcj86IHN0cmluZztcbiAgLyoqXG4gICAqIChXaW5kb3dzIG9ubHkpIFNldCB0byB5ZXMgdG8gY3JlYXRlIHRoZSBicm93c2VyIGNvbnRyb2wgd2l0aG91dCBhIGJvcmRlciBhcm91bmQgaXQuXG4gICAqIFBsZWFzZSBub3RlIHRoYXQgaWYgbG9jYXRpb249bm8gaXMgYWxzbyBzcGVjaWZpZWQsIHRoZXJlIHdpbGwgYmUgbm8gY29udHJvbCBwcmVzZW50ZWQgdG8gdXNlciB0byBjbG9zZSBJQUIgd2luZG93LlxuICAgKi9cbiAgZnVsbHNjcmVlbj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqIChBbmRyb2lkICYgV2luZG93cyBPbmx5KSBTZXQgdG8geWVzIHRvIHVzZSB0aGUgaGFyZHdhcmUgYmFjayBidXR0b24gdG8gbmF2aWdhdGUgYmFja3dhcmRzIHRocm91Z2ggdGhlIEluQXBwQnJvd3NlcidzIGhpc3RvcnkuXG4gICAqIElmIHRoZXJlIGlzIG5vIHByZXZpb3VzIHBhZ2UsIHRoZSBJbkFwcEJyb3dzZXIgd2lsbCBjbG9zZS4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgeWVzLCBzbyB5b3UgbXVzdCBzZXQgaXQgdG8gbm8gaWYgeW91IHdhbnQgdGhlIGJhY2sgYnV0dG9uIHRvIHNpbXBseSBjbG9zZSB0aGUgSW5BcHBCcm93c2VyLlxuICAgKi9cbiAgaGFyZHdhcmViYWNrPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogU2V0IHRvIHllcyB0byBjcmVhdGUgdGhlIGJyb3dzZXIgYW5kIGxvYWQgdGhlIHBhZ2UsIGJ1dCBub3Qgc2hvdyBpdC4gVGhlIGxvYWRzdG9wIGV2ZW50IGZpcmVzIHdoZW4gbG9hZGluZyBpcyBjb21wbGV0ZS5cbiAgICogT21pdCBvciBzZXQgdG8gbm8gKGRlZmF1bHQpIHRvIGhhdmUgdGhlIGJyb3dzZXIgb3BlbiBhbmQgbG9hZCBub3JtYWxseS5cbiAgICovXG4gIGhpZGRlbj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqIChBbmRyb2lkKSBTZXQgdG8geWVzIHRvIGhpZGUgdGhlIG5hdmlnYXRpb24gYnV0dG9ucyBvbiB0aGUgbG9jYXRpb24gdG9vbGJhciwgb25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIG5vLlxuICAgKiAoaU9TKSBTZXQgdG8geWVzIG9yIG5vIHRvIHR1cm4gdGhlIHRvb2xiYXIgbmF2aWdhdGlvbiBidXR0b25zIG9uIG9yIG9mZiAoZGVmYXVsdHMgdG8gbm8pLiBPbmx5IGFwcGxpY2FibGUgaWYgdG9vbGJhciBpcyBub3QgZGlzYWJsZWQuXG4gICAqL1xuICBoaWRlbmF2aWdhdGlvbmJ1dHRvbnM/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiAgKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIHRvIGNoYW5nZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgbG9hZGluZyBpbmRpY2F0b3IgKGRlZmF1bHRzIHRvIG5vKS5cbiAgICovXG4gIGhpZGVzcGlubmVyPzogJ3llcycgfCAnbm8nO1xuICAvKiogKEFuZHJvaWQpIFNldCB0byB5ZXMgdG8gaGlkZSB0aGUgdXJsIGJhciBvbiB0aGUgbG9jYXRpb24gdG9vbGJhciwgb25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIG5vLiAqL1xuICBoaWRldXJsYmFyPzogJ3llcycgfCAnbm8nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIHRvIG9wZW4gdGhlIGtleWJvYXJkIHdoZW4gZm9ybSBlbGVtZW50cyByZWNlaXZlIGZvY3VzIHZpYSBKYXZhU2NyaXB0J3MgZm9jdXMoKSBjYWxsIChkZWZhdWx0cyB0byB5ZXMpLiAqL1xuICBrZXlib2FyZERpc3BsYXlSZXF1aXJlc1VzZXJBY3Rpb24/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiAoQW5kcm9pZCkgU2V0IHRvIHllcyB0byBzd2FwIHBvc2l0aW9ucyBvZiB0aGUgbmF2aWdhdGlvbiBidXR0b25zIGFuZCB0aGUgY2xvc2UgYnV0dG9uLiBTcGVjaWZpY2FsbHksIG5hdmlnYXRpb24gYnV0dG9ucyBnbyB0byB0aGUgbGVmdCBhbmQgY2xvc2UgYnV0dG9uIHRvIHRoZSByaWdodC5cbiAgICogKGlPUykgU2V0IHRvIHllcyB0byBzd2FwIHBvc2l0aW9ucyBvZiB0aGUgbmF2aWdhdGlvbiBidXR0b25zIGFuZCB0aGUgY2xvc2UgYnV0dG9uLiBTcGVjaWZpY2FsbHksIGNsb3NlIGJ1dHRvbiBnb2VzIHRvIHRoZSByaWdodCBhbmQgbmF2aWdhdGlvbiBidXR0b25zIHRvIHRoZSBsZWZ0LlxuICAgKi9cbiAgbGVmdHRvcmlnaHQ/OiAneWVzJyB8ICdubyc7XG4gIC8qKiBTZXQgdG8geWVzIG9yIG5vIHRvIHR1cm4gdGhlIEluQXBwQnJvd3NlcidzIGxvY2F0aW9uIGJhciBvbiBvciBvZmYuICovXG4gIGxvY2F0aW9uPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogIFNldCB0byB5ZXMgdG8gcHJldmVudCBIVE1MNSBhdWRpbyBvciB2aWRlbyBmcm9tIGF1dG9wbGF5aW5nIChkZWZhdWx0cyB0byBubykuXG4gICAqL1xuICBtZWRpYVBsYXliYWNrUmVxdWlyZXNVc2VyQWN0aW9uPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGNvbG9yIG9mIGJvdGggbmF2aWdhdGlvbiBidXR0b25zIGZyb20gZGVmYXVsdC4gT25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMgYW5kIG5vdCBoaWRlbmF2aWdhdGlvbmJ1dHRvbnMgc2V0IHRvIHllcy5cbiAgICogKGlPUykgU2V0IGFzIGEgdmFsaWQgaGV4IGNvbG9yIHN0cmluZywgZm9yIGV4YW1wbGU6ICMwMGZmMDAsIHRvIGNoYW5nZSBmcm9tIHRoZSBkZWZhdWx0IGNvbG9yLiBPbmx5IGFwcGxpY2FibGUgaWYgbmF2aWdhdGlvbiBidXR0b25zIGFyZSB2aXNpYmxlLlxuICAgKi9cbiAgbmF2aWdhdGlvbmJ1dHRvbmNvbG9yPzogc3RyaW5nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8gcGFnZXNoZWV0LCBmb3Jtc2hlZXQgb3IgZnVsbHNjcmVlbiB0byBzZXQgdGhlIHByZXNlbnRhdGlvbiBzdHlsZSAoZGVmYXVsdHMgdG8gZnVsbHNjcmVlbikuICovXG4gIHByZXNlbnRhdGlvbnN0eWxlPzogJ3BhZ2VzaGVldCcgfCAnZm9ybXNoZWV0JyB8ICdmdWxsc2NyZWVuJztcbiAgLyoqIChBbmRyb2lkIE9ubHkpIFNldCB0byB5ZXMgdG8gbWFrZSBJbkFwcEJyb3dzZXIgV2ViVmlldyB0byBwYXVzZS9yZXN1bWUgd2l0aCB0aGUgYXBwIHRvIHN0b3AgYmFja2dyb3VuZCBhdWRpbyAodGhpcyBtYXkgYmUgcmVxdWlyZWQgdG8gYXZvaWQgR29vZ2xlIFBsYXkgaXNzdWVzKSAqL1xuICBzaG91bGRQYXVzZU9uU3VzcGVuZD86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIHllcyBvciBubyB0byB3YWl0IHVudGlsIGFsbCBuZXcgdmlldyBjb250ZW50IGlzIHJlY2VpdmVkIGJlZm9yZSBiZWluZyByZW5kZXJlZCAoZGVmYXVsdHMgdG8gbm8pLiAqL1xuICBzdXBwcmVzc2VzSW5jcmVtZW50YWxSZW5kZXJpbmc/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gdG8gdHVybiB0aGUgdG9vbGJhciBvbiBvciBvZmYgZm9yIHRoZSBJbkFwcEJyb3dzZXIgKGRlZmF1bHRzIHRvIHllcykgKi9cbiAgdG9vbGJhcj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqIChBbmRyb2lkKSBTZXQgdG8gYSB2YWxpZCBoZXggY29sb3Igc3RyaW5nLCBmb3IgZXhhbXBsZTogIzAwZmYwMCwgYW5kIGl0IHdpbGwgY2hhbmdlIHRoZSBjb2xvciB0aGUgdG9vbGJhciBmcm9tIGRlZmF1bHQuIE9ubHkgaGFzIGVmZmVjdCBpZiB1c2VyIGhhcyBsb2NhdGlvbiBzZXQgdG8geWVzLlxuICAgKiAoaU9TKSBTZXQgYXMgYSB2YWxpZCBoZXggY29sb3Igc3RyaW5nLCBmb3IgZXhhbXBsZTogIzAwZmYwMCwgdG8gY2hhbmdlIGZyb20gdGhlIGRlZmF1bHQgY29sb3Igb2YgdGhlIHRvb2xiYXIuIE9ubHkgYXBwbGljYWJsZSBpZiB0b29sYmFyIGlzIG5vdCBkaXNhYmxlZC5cbiAgICovXG4gIHRvb2xiYXJjb2xvcj86IHN0cmluZztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIHRvcCBvciBib3R0b20gKGRlZmF1bHQgaXMgYm90dG9tKS4gQ2F1c2VzIHRoZSB0b29sYmFyIHRvIGJlIGF0IHRoZSB0b3Agb3IgYm90dG9tIG9mIHRoZSB3aW5kb3cuICovXG4gIHRvb2xiYXJwb3NpdGlvbj86ICd0b3AnIHwgJ2JvdHRvbSc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gdG8gbWFrZSB0aGUgdG9vbGJhciB0cmFuc2x1Y2VudChzZW1pLXRyYW5zcGFyZW50KSAoZGVmYXVsdHMgdG8geWVzKS4gT25seSBhcHBsaWNhYmxlIGlmIHRvb2xiYXIgaXMgbm90IGRpc2FibGVkLiAqL1xuICB0b29sYmFydHJhbnNsdWNlbnQ/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byBmbGlwaG9yaXpvbnRhbCwgY3Jvc3NkaXNzb2x2ZSBvciBjb3ZlcnZlcnRpY2FsIHRvIHNldCB0aGUgdHJhbnNpdGlvbiBzdHlsZSAoZGVmYXVsdHMgdG8gY292ZXJ2ZXJ0aWNhbCkuICovXG4gIHRyYW5zaXRpb25zdHlsZT86ICdmbGlwaG9yaXpvbnRhbCcgfCAnY3Jvc3NkaXNzb2x2ZScgfCAnY292ZXJ2ZXJ0aWNhbCc7XG4gIC8qKiAoQW5kcm9pZCBPbmx5KSBTZXRzIHdoZXRoZXIgdGhlIFdlYlZpZXcgc2hvdWxkIGVuYWJsZSBzdXBwb3J0IGZvciB0aGUgXCJ2aWV3cG9ydFwiIEhUTUwgbWV0YSB0YWcgb3Igc2hvdWxkIHVzZSBhIHdpZGUgdmlld3BvcnQuIFdoZW4gdGhlIHZhbHVlIG9mIHRoZSBzZXR0aW5nIGlzIG5vLCB0aGUgbGF5b3V0IHdpZHRoIGlzIGFsd2F5cyBzZXQgdG8gdGhlIHdpZHRoIG9mIHRoZSBXZWJWaWV3IGNvbnRyb2wgaW4gZGV2aWNlLWluZGVwZW5kZW50IChDU1MpIHBpeGVscy4gV2hlbiB0aGUgdmFsdWUgaXMgeWVzIGFuZCB0aGUgcGFnZSBjb250YWlucyB0aGUgdmlld3BvcnQgbWV0YSB0YWcsIHRoZSB2YWx1ZSBvZiB0aGUgd2lkdGggc3BlY2lmaWVkIGluIHRoZSB0YWcgaXMgdXNlZC4gSWYgdGhlIHBhZ2UgZG9lcyBub3QgY29udGFpbiB0aGUgdGFnIG9yIGRvZXMgbm90IHByb3ZpZGUgYSB3aWR0aCwgdGhlbiBhIHdpZGUgdmlld3BvcnQgd2lsbCBiZSB1c2VkLiAoZGVmYXVsdHMgdG8geWVzKS4gKi9cbiAgdXNlV2lkZVZpZXdQb3J0PzogJ3llcycgfCAnbm8nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIHRvIHVzZSBXS1dlYlZpZXcgZW5naW5lIGZvciB0aGUgSW5hcHBCcm93c2VyLiBPbWl0IG9yIHNldCB0byBubyAoZGVmYXVsdCkgdG8gdXNlIFVJV2ViVmlldy4gKi9cbiAgdXNld2t3ZWJ2aWV3PzogJ3llcycgfCAnbm8nO1xuICAvKiogKEFuZHJvaWQgT25seSkgU2V0IHRvIHllcyB0byBzaG93IEFuZHJvaWQgYnJvd3NlcidzIHpvb20gY29udHJvbHMsIHNldCB0byBubyB0byBoaWRlIHRoZW0uIERlZmF1bHQgdmFsdWUgaXMgeWVzLiAqL1xuICB6b29tPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgdHlwZSBJbkFwcEJyb3dzZXJFdmVudFR5cGUgPVxuICB8ICdsb2Fkc3RhcnQnXG4gIHwgJ2xvYWRzdG9wJ1xuICB8ICdsb2FkZXJyb3InXG4gIHwgJ2V4aXQnXG4gIHwgJ2JlZm9yZWxvYWQnXG4gIHwgJ21lc3NhZ2UnXG4gIHwgJ2N1c3RvbXNjaGVtZSdcbiAgfCBzdHJpbmdcblxuZXhwb3J0IGludGVyZmFjZSBJbkFwcEJyb3dzZXJFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgLyoqIHRoZSBldmVudCBuYW1lICovXG4gIHR5cGU6IHN0cmluZztcbiAgLyoqIHRoZSBVUkwgdGhhdCB3YXMgbG9hZGVkLiAqL1xuICB1cmw6IHN0cmluZztcbiAgLyoqIHRoZSBlcnJvciBjb2RlLCBvbmx5IGluIHRoZSBjYXNlIG9mIGxvYWRlcnJvci4gKi9cbiAgY29kZTogbnVtYmVyO1xuICAvKiogdGhlIGVycm9yIG1lc3NhZ2UsIG9ubHkgaW4gdGhlIGNhc2Ugb2YgbG9hZGVycm9yLiAqL1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIC8qKiB0aGUgcG9zdE1lc3NhZ2UgZGF0YSwgb25seSBpbiB0aGUgY2FzZSBvZiBtZXNzYWdlLiAqL1xuICBkYXRhOiBhbnk7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgSW5BcHBCcm93c2VyT2JqZWN0IHtcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcblxuICAvKipcbiAgICogT3BlbnMgYSBVUkwgaW4gYSBuZXcgSW5BcHBCcm93c2VyIGluc3RhbmNlLCB0aGUgY3VycmVudCBicm93c2VyIGluc3RhbmNlLCBvciB0aGUgc3lzdGVtIGJyb3dzZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgICAgIFRoZSBVUkwgdG8gbG9hZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0YXJnZXQ9XCJzZWxmXCJdICBUaGUgdGFyZ2V0IGluIHdoaWNoIHRvIGxvYWQgdGhlIFVSTCwgYW4gb3B0aW9uYWwgcGFyYW1ldGVyIHRoYXQgZGVmYXVsdHMgdG8gX3NlbGYuXG4gICAqICAgICAgICAgICAgICAgICBfc2VsZjogT3BlbnMgaW4gdGhlIFdlYlZpZXcgaWYgdGhlIFVSTCBpcyBpbiB0aGUgd2hpdGUgbGlzdCwgb3RoZXJ3aXNlIGl0IG9wZW5zIGluIHRoZSBJbkFwcEJyb3dzZXIuXG4gICAqICAgICAgICAgICAgICAgICBfYmxhbms6IE9wZW5zIGluIHRoZSBJbkFwcEJyb3dzZXIuXG4gICAqICAgICAgICAgICAgICAgICBfc3lzdGVtOiBPcGVucyBpbiB0aGUgc3lzdGVtJ3Mgd2ViIGJyb3dzZXIuXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgSW5BcHBCcm93c2VyT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbnMgZm9yIHRoZSBJbkFwcEJyb3dzZXIuIE9wdGlvbmFsLCBkZWZhdWx0aW5nIHRvOiBsb2NhdGlvbj15ZXMuXG4gICAqICAgICAgICAgICAgICAgICBUaGUgb3B0aW9ucyBzdHJpbmcgbXVzdCBub3QgY29udGFpbiBhbnkgYmxhbmsgc3BhY2UsIGFuZCBlYWNoIGZlYXR1cmUnc1xuICAgKiAgICAgICAgICAgICAgICAgbmFtZS92YWx1ZSBwYWlycyBtdXN0IGJlIHNlcGFyYXRlZCBieSBhIGNvbW1hLiBGZWF0dXJlIG5hbWVzIGFyZSBjYXNlIGluc2Vuc2l0aXZlLlxuICAgKi9cbiAgY29uc3RydWN0b3IodXJsOiBzdHJpbmcsIHRhcmdldD86IHN0cmluZywgb3B0aW9ucz86IHN0cmluZyB8IEluQXBwQnJvd3Nlck9wdGlvbnMpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG9wdGlvbnMgPSBPYmplY3Qua2V5cyhvcHRpb25zKVxuICAgICAgICAgIC5tYXAoKGtleTogc3RyaW5nKSA9PiBgJHtrZXl9PSR7KG9wdGlvbnMgYXMgSW5BcHBCcm93c2VyT3B0aW9ucylba2V5XX1gKVxuICAgICAgICAgIC5qb2luKCcsJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gY29yZG92YS5JbkFwcEJyb3dzZXIub3Blbih1cmwsIHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHVybCwgdGFyZ2V0KTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05hdGl2ZTogSW5BcHBCcm93c2VyIGlzIG5vdCBpbnN0YWxsZWQgb3IgeW91IGFyZSBydW5uaW5nIG9uIGEgYnJvd3Nlci4gRmFsbGluZyBiYWNrIHRvIHdpbmRvdy5vcGVuLidcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBiZSBjYWxsZWQgYWZ0ZXIgdGhlIFwiYmVmb3JlbG9hZFwiIGV2ZW50IHRvIGNvbnRpbnVlIHRoZSBzY3JpcHRcbiAgICpcbiAgICogQHBhcmFtIHN0clVybCB7U3RyaW5nfSBUaGUgVVJMIHRoZSBJbkFwcEJyb3dzZXIgc2hvdWxkIG5hdmlnYXRlIHRvLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgX2xvYWRBZnRlckJlZm9yZWxvYWQoc3RyVXJsOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIGFuIEluQXBwQnJvd3NlciB3aW5kb3cgdGhhdCB3YXMgb3BlbmVkIGhpZGRlbi4gQ2FsbGluZyB0aGlzIGhhcyBubyBlZmZlY3RcbiAgICogaWYgdGhlIEluQXBwQnJvd3NlciB3YXMgYWxyZWFkeSB2aXNpYmxlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2hvdygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGNsb3NlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogSGlkZXMgYW4gSW5BcHBCcm93c2VyIHdpbmRvdyB0aGF0IGlzIGN1cnJlbnRseSBzaG93bi4gQ2FsbGluZyB0aGlzIGhhcyBubyBlZmZlY3RcbiAgICogaWYgdGhlIEluQXBwQnJvd3NlciB3YXMgYWxyZWFkeSBoaWRkZW4uXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBoaWRlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogSW5qZWN0cyBKYXZhU2NyaXB0IGNvZGUgaW50byB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICpcbiAgICogQHBhcmFtIHNjcmlwdCB7T2JqZWN0fSBEZXRhaWxzIG9mIHRoZSBzY3JpcHQgdG8gcnVuLCBzcGVjaWZ5aW5nIGVpdGhlciBhIGZpbGUgb3IgY29kZSBrZXkuXG4gICAqIEBwYXJhbSBzY3JpcHQuZmlsZVxuICAgKiBAcGFyYW0gc2NyaXB0LmNvZGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBleGVjdXRlU2NyaXB0KHNjcmlwdDogeyBmaWxlPzogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmplY3RzIENTUyBpbnRvIHRoZSBJbkFwcEJyb3dzZXIgd2luZG93LlxuICAgKlxuICAgKiBAcGFyYW0gY3NzIHtPYmplY3R9IERldGFpbHMgb2YgdGhlIHNjcmlwdCB0byBydW4sIHNwZWNpZnlpbmcgZWl0aGVyIGEgZmlsZSBvciBjb2RlIGtleS5cbiAgICogQHBhcmFtIGNzcy5maWxlXG4gICAqIEBwYXJhbSBjc3MuY29kZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGluc2VydENTUyhjc3M6IHsgZmlsZT86IHN0cmluZzsgY29kZT86IHN0cmluZyB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQSBtZXRob2QgdGhhdCBhbGxvd3MgeW91IHRvIGxpc3RlbiB0byBldmVudHMgaGFwcGVuaW5nIGluIHRoZSBicm93c2VyLlxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnQge0luQXBwQnJvd3NlckV2ZW50VHlwZX0gTmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHJldHVybnMge09ic2VydmFibGU8SW5BcHBCcm93c2VyRXZlbnQ+fSBSZXR1cm5zIGJhY2sgYW4gb2JzZXJ2YWJsZSB0aGF0IHdpbGwgbGlzdGVuIHRvIHRoZSBldmVudCBvbiBzdWJzY3JpYmUsIGFuZCB3aWxsIHN0b3AgbGlzdGVuaW5nIHRvIHRoZSBldmVudCBvbiB1bnN1YnNjcmliZS5cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgb24oZXZlbnQ6IEluQXBwQnJvd3NlckV2ZW50VHlwZSk6IE9ic2VydmFibGU8SW5BcHBCcm93c2VyRXZlbnQ+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8SW5BcHBCcm93c2VyRXZlbnQ+KChvYnNlcnZlcjogT2JzZXJ2ZXI8SW5BcHBCcm93c2VyRXZlbnQ+KSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpKTtcbiAgICAgIHJldHVybiAoKSA9PiB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpKTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbi8qKlxuICogQG5hbWUgSW4gQXBwIEJyb3dzZXJcbiAqIEBwcmVtaWVyIGluYXBwYnJvd3NlclxuICogQGRlc2NyaXB0aW9uIExhdW5jaGVzIGluIGFwcCBCcm93c2VyXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEluQXBwQnJvd3NlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9pbi1hcHAtYnJvd3Nlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaWFiOiBJbkFwcEJyb3dzZXIpIHsgfVxuICpcbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogY29uc3QgYnJvd3NlciA9IHRoaXMuaWFiLmNyZWF0ZSgnaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vJyk7XG4gKlxuICogYnJvd3Nlci5leGVjdXRlU2NyaXB0KC4uLik7XG4gKlxuICogYnJvd3Nlci5pbnNlcnRDU1MoLi4uKTtcbiAqIGJyb3dzZXIub24oJ2xvYWRzdG9wJykuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAqICAgIGJyb3dzZXIuaW5zZXJ0Q1NTKHsgY29kZTogXCJib2R5e2NvbG9yOiByZWQ7XCIgfSk7XG4gKiB9KTtcbiAqXG4gKiBicm93c2VyLmNsb3NlKCk7XG4gKlxuICogYGBgXG4gKiBAY2xhc3Nlc1xuICogSW5BcHBCcm93c2VyT2JqZWN0XG4gKiBAaW50ZXJmYWNlc1xuICogSW5BcHBCcm93c2VyRXZlbnRcbiAqIEluQXBwQnJvd3Nlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJbkFwcEJyb3dzZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1pbmFwcGJyb3dzZXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLkluQXBwQnJvd3NlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWluYXBwYnJvd3NlcicsXG4gIHBsYXRmb3JtczogWydBbWF6b25GaXJlIE9TJywgJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbkFwcEJyb3dzZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBPcGVucyBhIFVSTCBpbiBhIG5ldyBJbkFwcEJyb3dzZXIgaW5zdGFuY2UsIHRoZSBjdXJyZW50IGJyb3dzZXIgaW5zdGFuY2UsIG9yIHRoZSBzeXN0ZW0gYnJvd3Nlci5cbiAgICpcbiAgICogQHBhcmFtICB1cmwge3N0cmluZ30gICAgIFRoZSBVUkwgdG8gbG9hZC5cbiAgICogQHBhcmFtICB0YXJnZXQge3N0cmluZ30gIFRoZSB0YXJnZXQgaW4gd2hpY2ggdG8gbG9hZCB0aGUgVVJMLCBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgdGhhdCBkZWZhdWx0cyB0byBfc2VsZi5cbiAgICogQHBhcmFtICBvcHRpb25zIHtzdHJpbmd9IE9wdGlvbnMgZm9yIHRoZSBJbkFwcEJyb3dzZXIuIE9wdGlvbmFsLCBkZWZhdWx0aW5nIHRvOiBsb2NhdGlvbj15ZXMuXG4gICAqICAgICAgICAgICAgICAgICBUaGUgb3B0aW9ucyBzdHJpbmcgbXVzdCBub3QgY29udGFpbiBhbnkgYmxhbmsgc3BhY2UsIGFuZCBlYWNoIGZlYXR1cmUnc1xuICAgKiAgICAgICAgICAgICAgICAgbmFtZS92YWx1ZSBwYWlycyBtdXN0IGJlIHNlcGFyYXRlZCBieSBhIGNvbW1hLiBGZWF0dXJlIG5hbWVzIGFyZSBjYXNlIGluc2Vuc2l0aXZlLlxuICAgKiBAcmV0dXJucyB7SW5BcHBCcm93c2VyT2JqZWN0fVxuICAgKi9cbiAgY3JlYXRlKHVybDogc3RyaW5nLCB0YXJnZXQ/OiBzdHJpbmcsIG9wdGlvbnM/OiBzdHJpbmcgfCBJbkFwcEJyb3dzZXJPcHRpb25zKTogSW5BcHBCcm93c2VyT2JqZWN0IHtcbiAgICByZXR1cm4gbmV3IEluQXBwQnJvd3Nlck9iamVjdCh1cmwsIHRhcmdldCwgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ 17500:
/*!**************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/firebase-analytics/dist/esm/definitions.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 4970:
/*!********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/firebase-analytics/dist/esm/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirebaseAnalytics: () => (/* binding */ FirebaseAnalytics)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 17500);

const FirebaseAnalytics = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)("FirebaseAnalytics", {
  web: () => __webpack_require__.e(/*! import() */ 4496).then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 24496)).then(m => new m.FirebaseAnalyticsWeb())
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 47402:
/*!********************************************************!*\
  !*** ./src/app/services/firebase-analytics.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirebaseAnalyticsService: () => (/* binding */ FirebaseAnalyticsService)
/* harmony export */ });
/* harmony import */ var _Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor-community/firebase-analytics */ 4970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _common_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-storage */ 96970);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _appdata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appdata */ 40172);

var _FirebaseAnalyticsService;





class FirebaseAnalyticsService {
  constructor(commonStorage, platform, appdata) {
    this.commonStorage = commonStorage;
    this.platform = platform;
    this.appdata = appdata;
    const localData = this.commonStorage.localGet('metaData');
    this.operatorName = localData ? localData.operatorName : null;
    // Initialize Firebase Analytics
    this.initializeAnalytics();
  }
  initializeAnalytics() {
    return (0,_Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const firebaseInitOptions = {
        apiKey: 'AIzaSyADe1YXngQ8NPrMkDyy1UBtOH1XqhqMsgA',
        authDomain: 'customer-app---mweb.firebaseapp.com',
        projectId: 'customer-app---mweb',
        storageBucket: 'customer-app---mweb.appspot.com',
        messagingSenderId: '697968204843',
        appId: '1:697968204843:web:2acfadff1e6821c0eede6e',
        measurementId: 'G-ZFC9S0PR6W'
      };
      try {
        yield _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.FirebaseAnalytics.initializeFirebase(firebaseInitOptions);
      } catch (error) {
        console.error('Error initializing Firebase Analytics:', error);
      }
    })();
  }
  // Log custom event
  logCustomEvent(eventName, params) {
    var _this = this;
    return (0,_Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.operatorName) {
        params['OPERATOR_NAME'] = _this.operatorName;
      }
      try {
        if (_this.appdata.isIOS) {
          // Log event on native platforms
          yield _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.FirebaseAnalytics.logEvent({
            name: eventName,
            params
          });
        } else if (_this.appdata.isWEBAPP) {
          // Log event on web
        }
      } catch (error) {
        console.error(`Error logging custom event "${eventName}":`, error);
      }
    })();
  }
}
_FirebaseAnalyticsService = FirebaseAnalyticsService;
_FirebaseAnalyticsService.ɵfac = function FirebaseAnalyticsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FirebaseAnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_common_storage__WEBPACK_IMPORTED_MODULE_2__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_appdata__WEBPACK_IMPORTED_MODULE_3__.AppData));
};
_FirebaseAnalyticsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: _FirebaseAnalyticsService,
  factory: _FirebaseAnalyticsService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);