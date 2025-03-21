"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6521],{

/***/ 6521:
/*!******************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-input-password-toggle.entry.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_input_password_toggle: () => (/* binding */ InputPasswordToggle)
/* harmony export */ });
/* harmony import */ var _index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-28849c61.js */ 54261);
/* harmony import */ var _index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-9b0d46f4.js */ 74929);
/* harmony import */ var _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-01f3f29c.js */ 80333);
/* harmony import */ var _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-e2cf2ceb.js */ 23992);
/* harmony import */ var _ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ionic-global-c81d82ab.js */ 9483);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */





const iosInputPasswordToggleCss = "";
const IonInputPasswordToggleIosStyle0 = iosInputPasswordToggleCss;
const mdInputPasswordToggleCss = "";
const IonInputPasswordToggleMdStyle0 = mdInputPasswordToggleCss;
const InputPasswordToggle = class {
  constructor(hostRef) {
    (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.togglePasswordVisibility = () => {
      const {
        inputElRef
      } = this;
      if (!inputElRef) {
        return;
      }
      inputElRef.type = inputElRef.type === 'text' ? 'password' : 'text';
    };
    this.color = undefined;
    this.showIcon = undefined;
    this.hideIcon = undefined;
    this.type = 'password';
  }
  /**
   * Whenever the input type changes we need to re-run validation to ensure the password
   * toggle is being used with the correct input type. If the application changes the type
   * outside of this component we also need to re-render so the correct icon is shown.
   */
  onTypeChange(newValue) {
    if (newValue !== 'text' && newValue !== 'password') {
      (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_1__.p)(`ion-input-password-toggle only supports inputs of type "text" or "password". Input of type "${newValue}" is not compatible.`, this.el);
      return;
    }
  }
  connectedCallback() {
    const {
      el
    } = this;
    const inputElRef = this.inputElRef = el.closest('ion-input');
    if (!inputElRef) {
      (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_1__.p)('No ancestor ion-input found for ion-input-password-toggle. This component must be slotted inside of an ion-input.', el);
      return;
    }
    /**
     * Important: Set the type in connectedCallback because the default value
     * of this.type may not always be accurate. Usually inputs have the "password" type
     * but it is possible to have the input to initially have the "text" type. In that scenario
     * the wrong icon will show briefly before switching to the correct icon. Setting the
     * type here allows us to avoid that flicker.
     */
    this.type = inputElRef.type;
  }
  disconnectedCallback() {
    this.inputElRef = null;
  }
  render() {
    var _a, _b;
    const {
      color,
      type
    } = this;
    const mode = (0,_ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_4__.b)(this);
    const showPasswordIcon = (_a = this.showIcon) !== null && _a !== void 0 ? _a : _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_3__.x;
    const hidePasswordIcon = (_b = this.hideIcon) !== null && _b !== void 0 ? _b : _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_3__.y;
    const isPasswordVisible = type === 'text';
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.f, {
      key: 'd9811e25bfeb2aa197352bb9be852e9e420739d5',
      class: (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_2__.c)(color, {
        [mode]: true
      })
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-button", {
      key: '1eaea1442b248fb2b8d61538b27274e647a07804',
      mode: mode,
      color: color,
      fill: "clear",
      shape: "round",
      "aria-checked": isPasswordVisible ? 'true' : 'false',
      "aria-label": "show password",
      role: "switch",
      type: "button",
      onPointerDown: ev => {
        /**
         * This prevents mobile browsers from
         * blurring the input when the password toggle
         * button is activated.
         */
        ev.preventDefault();
      },
      onClick: this.togglePasswordVisibility
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-icon", {
      key: '9c88de8f4631d9bde222ce2edf6950d639e04773',
      slot: "icon-only",
      "aria-hidden": "true",
      icon: isPasswordVisible ? hidePasswordIcon : showPasswordIcon
    })));
  }
  get el() {
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.i)(this);
  }
  static get watchers() {
    return {
      "type": ["onTypeChange"]
    };
  }
};
InputPasswordToggle.style = {
  ios: IonInputPasswordToggleIosStyle0,
  md: IonInputPasswordToggleMdStyle0
};


/***/ })

}]);