"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[2667],{

/***/ 35794:
/*!***************************************************!*\
  !*** ./src/app/sign-up/sign-up-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignUpPageRoutingModule: () => (/* binding */ SignUpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up.page */ 96500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _SignUpPageRoutingModule;




const routes = [{
  path: '',
  component: _sign_up_page__WEBPACK_IMPORTED_MODULE_0__.SignUpPage
}];
class SignUpPageRoutingModule {}
_SignUpPageRoutingModule = SignUpPageRoutingModule;
_SignUpPageRoutingModule.ɵfac = function SignUpPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignUpPageRoutingModule)();
};
_SignUpPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _SignUpPageRoutingModule
});
_SignUpPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SignUpPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 32667:
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignUpPageModule: () => (/* binding */ SignUpPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-routing.module */ 35794);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.page */ 96500);
/* harmony import */ var _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-header/common-header.component */ 49028);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
var _SignUpPageModule;







class SignUpPageModule {}
_SignUpPageModule = SignUpPageModule;
_SignUpPageModule.ɵfac = function SignUpPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignUpPageModule)();
};
_SignUpPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _SignUpPageModule
});
_SignUpPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_2__.CommonHeaderComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SignUpPageModule, {
    declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_1__.SignUpPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_2__.CommonHeaderComponent]
  });
})();

/***/ }),

/***/ 96500:
/*!*****************************************!*\
  !*** ./src/app/sign-up/sign-up.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignUpPage: () => (/* binding */ SignUpPage)
/* harmony export */ });
/* harmony import */ var _Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calendar-modal/calendar-modal.page */ 70990);
/* harmony import */ var _services_validator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/validator-service */ 1863);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns */ 84692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_exception__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/exception */ 91502);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common-header/common-header.component */ 49028);

var _SignUpPage;





















function SignUpPage_ng_container_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SignUpPage_ng_container_0_div_10_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.signup("skip"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Skip");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function SignUpPage_ng_container_0_ion_item_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item", 9)(1, "ion-input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_0_ion_item_24_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_0_ion_item_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item", 9)(1, "ion-input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_0_ion_item_25_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function SignUpPage_ng_container_0_ion_item_25_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.forcedMobNUm, $event) || (ctx_r1.forcedMobNUm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.forcedMobNUm);
  }
}
function SignUpPage_ng_container_0_ion_icon_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SignUpPage_ng_container_0_ion_icon_31_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.showPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_0_ion_icon_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SignUpPage_ng_container_0_ion_icon_32_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.showPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_0_ion_icon_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SignUpPage_ng_container_0_ion_icon_38_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.cfmshowPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_0_ion_icon_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SignUpPage_ng_container_0_ion_icon_39_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.cfmshowPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_0_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-datetime", 42, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ionChange", function SignUpPage_ng_container_0_ng_template_44_Template_ion_datetime_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r10);
      const popoverDatetime_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.displayMybookings(popoverDatetime_r11 == null ? null : popoverDatetime_r11.value, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("value", ctx_r1.pageDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("max", ctx_r1.todayDate);
  }
}
function SignUpPage_ng_container_0_ion_item_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-input", 43)(2, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_0_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 44)(1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Already have an account? please ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SignUpPage_ng_container_0_div_58_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotoLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function SignUpPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "app-common-header", 2)(3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-content", 4)(5, "div", 5)(6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div")(9, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngSubmit", function SignUpPage_ng_container_0_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.signup("buttonType"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, SignUpPage_ng_container_0_div_10_Template, 3, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "ion-row")(12, "ion-col")(13, "ion-item", 9)(14, "ion-input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_0_Template_ion_input_keyup_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](15, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "ion-row")(17, "ion-col")(18, "ion-item", 12)(19, "ion-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_0_Template_ion_input_keyup_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](20, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "ion-item", 14)(22, "ion-input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_0_Template_ion_input_keyup_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](23, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](24, SignUpPage_ng_container_0_ion_item_24_Template, 3, 0, "ion-item", 17)(25, SignUpPage_ng_container_0_ion_item_25_Template, 3, 1, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "ion-row")(27, "ion-col")(28, "ion-item", 18)(29, "ion-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_0_Template_ion_input_keyup_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](30, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](31, SignUpPage_ng_container_0_ion_icon_31_Template, 1, 0, "ion-icon", 21)(32, SignUpPage_ng_container_0_ion_icon_32_Template, 1, 0, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "ion-row")(34, "ion-col")(35, "ion-item", 12)(36, "ion-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_0_Template_ion_input_keyup_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](37, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](38, SignUpPage_ng_container_0_ion_icon_38_Template, 1, 0, "ion-icon", 23)(39, SignUpPage_ng_container_0_ion_icon_39_Template, 1, 0, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "ion-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](41, "img", 25)(42, "ion-input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "ion-modal", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](44, SignUpPage_ng_container_0_ng_template_44_Template, 2, 2, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](46, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "div", 29)(48, "div", 30)(49, "ion-segment", 31)(50, "ion-segment-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](52, "ion-segment-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](54, SignUpPage_ng_container_0_ion_item_54_Template, 3, 0, "ion-item", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](55, "div")(56, "ion-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SignUpPage_ng_container_0_Template_ion_button_click_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.signup("sign-up"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](57, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](58, SignUpPage_ng_container_0_div_58_Template, 5, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx_r1.signupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("type", ctx_r1.passwordFieldType);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.showpass);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.showpass);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("type", ctx_r1.cfmpasswordFieldType);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.cfmshowpass);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.cfmshowpass);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", ctx_r1.showDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", "Male", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", "Female", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
  }
}
function SignUpPage_ng_container_1_ion_title_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-title", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_1_ion_title_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-title", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_1_ion_title_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-title", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Personal details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_1_ion_card_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-card", 68)(1, "div", 69)(2, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Already have an account ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SignUpPage_ng_container_1_ion_card_10_Template_span_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotoLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function SignUpPage_ng_container_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SignUpPage_ng_container_1_div_15_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.signup("skip"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Skip");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function SignUpPage_ng_container_1_ion_item_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item")(1, "ion-input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_1_ion_item_22_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function SignUpPage_ng_container_1_ion_item_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item")(1, "ion-input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_1_ion_item_23_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function SignUpPage_ng_container_1_ion_item_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item")(1, "ion-input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_1_ion_item_24_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function SignUpPage_ng_container_1_ion_item_24_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.forcedMobNUm, $event) || (ctx_r1.forcedMobNUm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.forcedMobNUm);
  }
}
function SignUpPage_ng_container_1_ion_item_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item")(1, "ion-input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_1_ion_item_25_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function SignUpPage_ng_container_1_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-datetime", 74, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ionChange", function SignUpPage_ng_container_1_ng_template_34_Template_ion_datetime_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r20);
      const popoverDatetime_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.displayMybookings(popoverDatetime_r21 == null ? null : popoverDatetime_r21.value, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("value", ctx_r1.pageDate);
  }
}
function SignUpPage_ng_container_1_ion_item_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_1_span_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_1_span_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 47)(3, "ion-buttons", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, SignUpPage_ng_container_1_ion_title_5_Template, 2, 0, "ion-title", 49)(6, SignUpPage_ng_container_1_ion_title_6_Template, 2, 0, "ion-title", 49)(7, SignUpPage_ng_container_1_ion_title_7_Template, 2, 0, "ion-title", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "ion-content", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, SignUpPage_ng_container_1_ion_card_10_Template, 6, 0, "ion-card", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 53)(12, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "form", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngSubmit", function SignUpPage_ng_container_1_Template_form_ngSubmit_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.signup("buttonType"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](15, SignUpPage_ng_container_1_div_15_Template, 3, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "ion-item")(17, "ion-input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_1_Template_ion_input_keyup_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "ion-item")(19, "ion-input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_1_Template_ion_input_keyup_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "ion-item")(21, "ion-input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_1_Template_ion_input_keyup_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](22, SignUpPage_ng_container_1_ion_item_22_Template, 2, 0, "ion-item", 1)(23, SignUpPage_ng_container_1_ion_item_23_Template, 2, 0, "ion-item", 1)(24, SignUpPage_ng_container_1_ion_item_24_Template, 2, 1, "ion-item", 1)(25, SignUpPage_ng_container_1_ion_item_25_Template, 2, 0, "ion-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "ion-item")(27, "ion-input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_1_Template_ion_input_keyup_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "ion-item")(29, "ion-input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_1_Template_ion_input_keyup_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "ion-item", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](31, "img", 25)(32, "ion-input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "ion-modal", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](34, SignUpPage_ng_container_1_ng_template_34_Template, 2, 1, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "ion-item")(36, "ion-label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](37, " Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "div", 30)(39, "ion-segment", 64)(40, "ion-segment-button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "ion-segment-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](44, SignUpPage_ng_container_1_ion_item_44_Template, 2, 0, "ion-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "div")(46, "ion-button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SignUpPage_ng_container_1_Template_ion_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.signup("sign-up"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](47, SignUpPage_ng_container_1_span_47_Template, 2, 0, "span", 1)(48, SignUpPage_ng_container_1_span_48_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("src", ctx_r1.logo ? ctx_r1.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx_r1.signupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", ctx_r1.showDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", "Male", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", "Female", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login");
  }
}
function SignUpPage_ng_container_2_ion_buttons_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SignUpPage_ng_container_2_div_15_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.signup("skip"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Skip");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function SignUpPage_ng_container_2_ion_row_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 83)(2, "ion-item", 84)(3, "ion-input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_2_ion_row_28_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    })("ionChange", function SignUpPage_ng_container_2_ion_row_28_Template_ion_input_ionChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.enforceMaxLength($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
}
function SignUpPage_ng_container_2_ion_row_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 83)(2, "ion-item", 84)(3, "ion-input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_2_ion_row_29_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    })("ionChange", function SignUpPage_ng_container_2_ion_row_29_Template_ion_input_ionChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.enforceMaxLength($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
}
function SignUpPage_ng_container_2_ion_row_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 83)(2, "ion-item", 84)(3, "ion-input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_2_ion_row_30_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    })("ionChange", function SignUpPage_ng_container_2_ion_row_30_Template_ion_input_ionChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.enforceMaxLength($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function SignUpPage_ng_container_2_ion_row_30_Template_ion_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.forcedMobNUm, $event) || (ctx_r1.forcedMobNUm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.forcedMobNUm);
  }
}
function SignUpPage_ng_container_2_ion_row_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 83)(2, "ion-item", 84)(3, "ion-input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_2_ion_row_31_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    })("ionChange", function SignUpPage_ng_container_2_ion_row_31_Template_ion_input_ionChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.enforceMaxLength($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
}
function SignUpPage_ng_container_2_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-datetime", 105, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ionChange", function SignUpPage_ng_container_2_ng_template_50_Template_ion_datetime_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r28);
      const popoverDatetime_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.displayMybookings(popoverDatetime_r29 == null ? null : popoverDatetime_r29.value, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("value", ctx_r1.pageDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("max", ctx_r1.maxDate);
  }
}
function SignUpPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-header", 76)(2, "ion-toolbar", 47)(3, "ion-row")(4, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, SignUpPage_ng_container_2_ion_buttons_5_Template, 2, 0, "ion-buttons", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-col", 78)(7, "ion-title", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, "Personal Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "ion-content", 80)(11, "div", 53)(12, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "form", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngSubmit", function SignUpPage_ng_container_2_Template_form_ngSubmit_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.signup("buttonType"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](15, SignUpPage_ng_container_2_div_15_Template, 3, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "ion-row", 82)(17, "ion-col", 83)(18, "ion-item", 84)(19, "ion-input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_2_Template_ion_input_keyup_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "ion-row")(21, "ion-col", 83)(22, "ion-item", 84)(23, "ion-input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_2_Template_ion_input_keyup_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "ion-row")(25, "ion-col", 87)(26, "ion-item", 88)(27, "ion-input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_2_Template_ion_input_keyup_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](28, SignUpPage_ng_container_2_ion_row_28_Template, 4, 0, "ion-row", 1)(29, SignUpPage_ng_container_2_ion_row_29_Template, 4, 0, "ion-row", 1)(30, SignUpPage_ng_container_2_ion_row_30_Template, 4, 1, "ion-row", 1)(31, SignUpPage_ng_container_2_ion_row_31_Template, 4, 0, "ion-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "ion-row")(33, "ion-col", 83)(34, "ion-item", 84)(35, "ion-input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_2_Template_ion_input_keyup_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](36, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SignUpPage_ng_container_2_Template_div_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onPasswordToggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](37, "ion-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "ion-row")(39, "ion-col", 83)(40, "ion-item", 84)(41, "ion-input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_2_Template_ion_input_keyup_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SignUpPage_ng_container_2_Template_div_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onPasswordToggle1());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](43, "ion-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](44, "ion-row")(45, "ion-col", 94)(46, "ion-item", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](47, "img", 96)(48, "ion-input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "ion-modal", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](50, SignUpPage_ng_container_2_ng_template_50_Template, 2, 2, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](51, "ion-col", 94)(52, "ion-segment", 99)(53, "ion-segment-button", 100)(54, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](55, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](56, "ion-segment-button", 33)(57, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](58, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](59, "div")(60, "ion-button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SignUpPage_ng_container_2_Template_ion_button_click_60_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.signup("sign-up"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](61, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](62, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.forced_signup_with_otp_login_for_m_site);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx_r1.signupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("type", ctx_r1.showPassword1 ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("name", ctx_r1.showPassword1 ? "eye-off" : "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("type", ctx_r1.showconfirmPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("name", ctx_r1.showconfirmPassword ? "eye-off" : "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", ctx_r1.showDate);
  }
}
function SignUpPage_ng_container_3_ion_title_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-title", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_3_ion_title_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-title", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_3_ion_title_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-title", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Personal details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SignUpPage_ng_container_3_div_12_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.signup("skip"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Skip");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function SignUpPage_ng_container_3_ion_item_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item", 109)(1, "ion-input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_3_ion_item_19_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function SignUpPage_ng_container_3_ion_item_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item", 133)(1, "ion-input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_3_ion_item_20_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r33);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function SignUpPage_ng_container_3_ion_item_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item", 109)(1, "ion-input", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_3_ion_item_21_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function SignUpPage_ng_container_3_ion_item_21_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.forcedMobNUm, $event) || (ctx_r1.forcedMobNUm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.forcedMobNUm);
  }
}
function SignUpPage_ng_container_3_ion_item_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item", 109)(1, "ion-input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_3_ion_item_22_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function SignUpPage_ng_container_3_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-datetime", 74, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ionChange", function SignUpPage_ng_container_3_ng_template_36_Template_ion_datetime_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r36);
      const popoverDatetime_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.displayMybookings(popoverDatetime_r37 == null ? null : popoverDatetime_r37.value, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("value", ctx_r1.pageDate);
  }
}
function SignUpPage_ng_container_3_ion_item_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-input", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_3_span_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_3_span_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_3_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 137)(1, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Already have an account ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SignUpPage_ng_container_3_div_56_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r38);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotoLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function SignUpPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 47)(3, "ion-buttons", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, SignUpPage_ng_container_3_ion_title_5_Template, 2, 0, "ion-title", 49)(6, SignUpPage_ng_container_3_ion_title_6_Template, 2, 0, "ion-title", 49)(7, SignUpPage_ng_container_3_ion_title_7_Template, 2, 0, "ion-title", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "ion-content", 106)(10, "ion-card", 107)(11, "form", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngSubmit", function SignUpPage_ng_container_3_Template_form_ngSubmit_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.signup("buttonType"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, SignUpPage_ng_container_3_div_12_Template, 3, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "ion-item", 109)(14, "ion-input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_3_Template_ion_input_keyup_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "ion-item", 109)(16, "ion-input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_3_Template_ion_input_keyup_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "ion-item", 109)(18, "ion-input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_3_Template_ion_input_keyup_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](19, SignUpPage_ng_container_3_ion_item_19_Template, 2, 0, "ion-item", 113)(20, SignUpPage_ng_container_3_ion_item_20_Template, 2, 0, "ion-item", 114)(21, SignUpPage_ng_container_3_ion_item_21_Template, 2, 1, "ion-item", 113)(22, SignUpPage_ng_container_3_ion_item_22_Template, 2, 0, "ion-item", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "ion-item", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](24, "ion-input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "ion-icon", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SignUpPage_ng_container_3_Template_ion_icon_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.togglePasswordVisibility("password"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "ion-item", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](27, "ion-input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "ion-icon", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SignUpPage_ng_container_3_Template_ion_icon_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.togglePasswordVisibility("confirmPassword"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "ion-item", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](30, "ion-input", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](32, "ion-icon", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34, "Select date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "ion-modal", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](36, SignUpPage_ng_container_3_ng_template_36_Template, 2, 1, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "ion-item", 109)(38, "ion-label", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39, " Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "div")(41, "ion-radio-group", 123)(42, "ion-list", 124)(43, "ion-item", 125)(44, "ion-label", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](45, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](46, "ion-radio", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "ion-item", 125)(48, "ion-label", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](49, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](50, "ion-radio", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](51, SignUpPage_ng_container_3_ion_item_51_Template, 2, 0, "ion-item", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](52, "div")(53, "ion-button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SignUpPage_ng_container_3_Template_ion_button_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.signup("sign-up"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](54, SignUpPage_ng_container_3_span_54_Template, 2, 0, "span", 1)(55, SignUpPage_ng_container_3_span_55_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](56, SignUpPage_ng_container_3_div_56_Template, 5, 0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("src", ctx_r1.logo ? ctx_r1.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx_r1.signupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("type", ctx_r1.isPasswordVisible ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("name", ctx_r1.isPasswordVisible ? "eye-outline" : "eye-off-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("type", ctx_r1.isConfirmPasswordVisible ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("name", ctx_r1.isConfirmPasswordVisible ? "eye-outline" : "eye-off-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", ctx_r1.showDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
  }
}
class SignUpPage {
  constructor(loader, util, formBuilder, theme, ex, commonStorage, commonService, apiFactory, modalController, dateService, navCtrl, route, router, globalData, authenticationService, alertCtrl, modalCtrl, appData, toastController) {
    this.loader = loader;
    this.util = util;
    this.formBuilder = formBuilder;
    this.theme = theme;
    this.ex = ex;
    this.commonStorage = commonStorage;
    this.commonService = commonService;
    this.apiFactory = apiFactory;
    this.modalController = modalController;
    this.dateService = dateService;
    this.navCtrl = navCtrl;
    this.route = route;
    this.router = router;
    this.globalData = globalData;
    this.authenticationService = authenticationService;
    this.alertCtrl = alertCtrl;
    this.modalCtrl = modalCtrl;
    this.appData = appData;
    this.toastController = toastController;
    this.errors = false;
    this.showSignupError = false;
    this.signupErrorMessage = '';
    this.phoneNumCount = 0;
    this.forcedMobNUm = '';
    this.password = '';
    this.forced_signup_with_otp_login_for_m_site = false;
    this.showDate = '';
    this.pageDate = '';
    this.passwordFieldType = 'password';
    this.cfmpasswordFieldType = 'password';
    this.cfmshowpass = false;
    this.showpass = false;
    this.mineDisplaydate = [];
    this.isPasswordVisible = false;
    this.isConfirmPasswordVisible = false;
    this.showPassword1 = false;
    this.showconfirmPassword = false;
    this.validations();
    this.default();
    this.metaData = this.commonStorage.getItem("metaData");
    this.logo = this.commonStorage.getItem("metaData").mobileNavigationLogo ? this.commonStorage.getItem("metaData").mobileNavigationLogo : this.commonStorage.getItem("metaData").headerLogo;
    this.loginType = this.commonStorage.getItem("metaData").loginType;
    this.forced_signup_with_otp_login_for_m_site = this.commonStorage.getItem("metaData").forced_signup_with_otp_login_for_m_site;
    this.appData.newTheme = this.util.getNewTheme();
    this.today = new Date();
    this.todayDate = this.today.toISOString().split('T')[0];
    const threeYearsAgo = new Date(this.today.getFullYear() - 3, this.today.getMonth(), this.today.getDate());
    this.maxDate = threeYearsAgo.toISOString().split('T')[0];
  }
  ngOnInit() {
    this.metaData = this.commonStorage.getItem("metaData");
  }
  default() {
    this.logo = this.commonStorage.getItem("metaData").headerLogo;
    if (this.commonStorage.localGet('sign-otp')) {
      this.forcedLoginOtp = this.commonStorage.localGet('sign-otp');
      this.forcedMobNUm = this.forcedLoginOtp.MobileNumber;
    }
    // this.commonService.gTrack('signup', 'Sign Up page is displayed');
    this.signupFailed = false;
    this.showForm = false;
    this.errors = false;
    this.showSignupError = false;
    this.signupErrorMessage = null;
    this.phoneNumCount = this.commonStorage.getItem('metaData').phoneNumCount ? this.commonStorage.getItem('metaData').phoneNumCount : 10;
    this.enableOtp = this.commonStorage.getItem('metaData').isEnableOtp;
    if (!this.enableOtp) {
      this.showForm = true;
      this.validations();
    } else {
      this.OtpFormValidation();
      this.showForm = false;
    }
  }
  OtpFormValidation() {
    this.otpForm = this.formBuilder.group({
      mobile_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(this.phoneNumCount)])]
    });
  }
  departureDateModal() {
    var _this = this;
    return (0,_Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let modal = yield _this.modalController.create({
        component: _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_1__.CalendarModalPage,
        componentProps: {
          showPastDate: false,
          title: "Select Booking Date"
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        _this.signupForm.controls['dob'].setValue(_this.commonService.displayFormatDate(data));
      }
    })();
  }
  validations() {
    this.signupForm = this.formBuilder.group({
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _services_validator_service__WEBPACK_IMPORTED_MODULE_2__.ValidatorService.emailValidator])],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(8)])],
      password_confirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
      first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
      last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
      mobile_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(this.phoneNumCount)])],
      dob: [''],
      sex: [''],
      referal_code: ['']
    });
  }
  signup(buttonType) {
    if (buttonType == 'sign-up') {
      if (this.loginType == 'Forced Signup with OTP Login' && this.forced_signup_with_otp_login_for_m_site == true || this.metaData.msiteFolder == 'ourbustheme') {
        this.showSignupError = false;
        this.signupErrorMessage = null;
        if (this.isValid()) {
          if (this.isConfirmPasswordValid()) {
            this.loader.showLoadingDefault();
            // this.commonService.gTrack("signup")
            let user = {};
            user = {
              "email": this.signupForm.value.email,
              "password": this.signupForm.value.password,
              "password_confirmation": this.signupForm.value.password_confirmation,
              "first_name": this.signupForm.value.first_name,
              "title": this.signupForm.value.sex,
              "last_name": this.signupForm.value.last_name,
              "mobile_number": this.signupForm.value.mobile_number ? this.signupForm.value.mobile_number : this.forcedLoginOtp.MobileNumber,
              "dob": this.signupForm.value.dob,
              "otp_key": this.forcedLoginOtp.otpKey,
              "otp": this.forcedLoginOtp.otp
            };
            let signUpdata = {};
            signUpdata = {
              "user": user
            };
            let referalCode;
            if (this.forcedLoginOtp.referalCode && this.forcedLoginOtp.referalCode != null) {
              referalCode = this.forcedLoginOtp.referalCode;
            } else {
              referalCode = this.signupForm.value.referal_code;
            }
            this.authenticationService.signup(signUpdata, referalCode).subscribe(result => {
              this.loader.hideLoadingDefault();
              try {
                if (result.success === true) {
                  this.authenticationService.login(this.signupForm.value.email, this.signupForm.value.password).subscribe(result => {
                    this.globalData.IS_GST = false;
                    this.loader.hideLoadingDefault();
                    if (result.success === true) {
                      // this.commonService.gTrack('login', 'Login successful');
                      this.util.showToast('Login Success', 'center');
                      this.apiFactory.getMetaAppData().subscribe(loginResponse => {
                        if (!loginResponse.code) {
                          let localData = loginResponse[0];
                          this.commonService.setMetaApp(localData);
                        }
                      });
                      if (this.metaData.msiteFolder == 'ourbustheme') {
                        this.router.navigate(['home']).then(() => {
                          window.location.reload();
                        });
                      } else {
                        this.navCtrl.navigateRoot('tabs/home');
                      }
                    } else {
                      // this.commonService.gTrack('login', 'Login failed');
                      this.util.showAlert('', result.body.message);
                      this.showError(result.body.message);
                    }
                  }, error => {
                    // this.commonService.gTrack('login', 'Login failed');
                    this.loader.hideLoadingDefault();
                    this.util.showAlert("Failed", "Login failed try again later");
                    this.ex.call('LoginPage', 'Login()', error);
                  });
                } else {
                  this.util.showAlert('FAILED', result.body.message);
                }
              } catch (e) {}
            }, error => {
              this.loader.hideLoadingDefault();
              this.util.showAlert('FAILED', 'CANNOT_SIGNUP_TRY_LATER');
              this.ex.call('LoginPage', 'Login()', error);
            });
          }
        }
      } else {
        this.showSignupError = false;
        this.signupErrorMessage = null;
        if (this.isValid()) {
          if (this.isConfirmPasswordValid()) {
            this.loader.showLoadingDefault();
            // this.commonService.gTrack("signup")
            let user = {};
            user = {
              "email": this.signupForm.value.email,
              "password": this.signupForm.value.password,
              "password_confirmation": this.signupForm.value.password_confirmation,
              "first_name": this.signupForm.value.first_name,
              "title": this.signupForm.value.sex,
              "last_name": this.signupForm.value.last_name,
              "mobile_number": this.signupForm.value.mobile_number ? this.signupForm.value.mobile_number : this.forcedLoginOtp.MobileNumber,
              "dob": this.signupForm.value.dob
            };
            let signUpdata = {};
            signUpdata = {
              "user": user
            };
            let referalCodee;
            if (this.commonStorage.localGet('sign-otp')) {
              if (this.forcedLoginOtp.referalCode && this.forcedLoginOtp.referalCode != null) {
                referalCodee = this.forcedLoginOtp.referalCode;
              }
            } else {
              referalCodee = this.signupForm.value.referal_code;
            }
            this.authenticationService.signup(signUpdata, referalCodee).subscribe(result => {
              this.loader.hideLoadingDefault();
              try {
                if (result.success === true) {
                  this.showAlert('SIGNUP SUCCESS', result.body.message);
                } else {
                  this.util.showAlert('FAILED', result.body.message);
                }
              } catch (e) {}
            }, error => {
              this.loader.hideLoadingDefault();
              this.util.showAlert('FAILED', 'CANNOT_SIGNUP_TRY_LATER');
              this.ex.call('LoginPage', 'Login()', error);
            });
          }
        }
      }
    }
    if (buttonType == 'skip') {
      this.showSignupError = false;
      this.signupErrorMessage = null;
      this.password = this.makeid(8);
      if (this.metaData.msiteFolder == 'ourbustheme') {
        this.email = 'test' + this.password + '@ourbus-tmp.in';
      } else {
        this.email = 'test' + this.password + '@ticketsimply-tmp.com';
      }
      this.loader.showLoadingDefault();
      // this.commonService.gTrack("signup")
      let user = {};
      user = {
        "email": this.email,
        "password": this.password,
        "password_confirmation": this.password,
        "first_name": '',
        "title": this.signupForm.value.sex,
        "last_name": '',
        "mobile_number": this.signupForm.value.mobile_number ? this.signupForm.value.mobile_number : this.forcedLoginOtp.MobileNumber,
        "dob": '',
        "otp_key": this.forcedLoginOtp.otpKey,
        "otp": this.forcedLoginOtp.otp
      };
      let signUpdata = {};
      signUpdata = {
        "user": user
      };
      let referalCode;
      if (this.forcedLoginOtp.referalCode && this.forcedLoginOtp.referalCode != null) {
        referalCode = this.forcedLoginOtp.referalCode;
      } else {
        referalCode = this.signupForm.value.referal_code;
      }
      this.authenticationService.signup(signUpdata, referalCode).subscribe(result => {
        this.loader.hideLoadingDefault();
        try {
          if (result.success === true) {
            this.authenticationService.login(this.email, this.password).subscribe(result => {
              this.globalData.IS_GST = false;
              this.loader.hideLoadingDefault();
              if (result.success === true) {
                // this.commonService.gTrack('login', 'Login successful');
                this.util.showToast('Login Success', 'center');
                this.apiFactory.getMetaAppData().subscribe(loginResponse => {
                  if (!loginResponse.code) {
                    let localData = loginResponse[0];
                    this.commonService.setMetaApp(localData);
                  }
                });
                if (this.metaData.msiteFolder == 'ourbustheme') {
                  this.router.navigate(['home']).then(() => {
                    window.location.reload();
                  });
                } else {
                  this.navCtrl.navigateRoot('tabs/home');
                }
              } else {
                this.util.showAlert('', result.body.message);
                this.showError(result.body.message);
              }
            }, error => {
              // this.commonService.gTrack('login', 'Login failed');
              this.loader.hideLoadingDefault();
              this.util.showAlert("Failed", "Login failed try again later");
              this.ex.call('LoginPage', 'Login()', error);
            });
          } else {
            this.util.showAlert('FAILED', result.body.message);
          }
        } catch (e) {}
      }, error => {
        this.loader.hideLoadingDefault();
        this.util.showAlert('FAILED', 'CANNOT_SIGNUP_TRY_LATER');
        this.ex.call('LoginPage', 'Login()', error);
      });
      // }
      // }
    }
  }
  makeid(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
  showAlert(title, msg) {
    var _this2 = this;
    return (0,_Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertCtrl.create({
        header: title,
        message: msg,
        buttons: [{
          text: 'OK',
          handler: data => {
            if (_this2.loginType != 'Forced Signup with OTP Login') {
              _this2.navCtrl.navigateForward('login');
            } else {
              _this2.authenticationService.login(_this2.signupForm.value.email, _this2.signupForm.value.password).subscribe(result => {
                _this2.globalData.IS_GST = false;
                _this2.loader.hideLoadingDefault();
                if (result.success === true) {
                  // this.commonService.gTrack('login', 'Login successful');
                  _this2.util.showToast('Login Success', 'center');
                  _this2.apiFactory.getMetaAppData().subscribe(loginResponse => {
                    if (!loginResponse.code) {
                      let localData = loginResponse[0];
                      _this2.commonService.setMetaApp(localData);
                    }
                  });
                  _this2.navCtrl.navigateRoot('tabs/home');
                } else {
                  // this.commonService.gTrack('login', 'Login failed');
                  _this2.util.showAlert('', result.body.message);
                  // login failed
                  _this2.showError(result.body.message);
                }
              }, error => {
                // this.commonService.gTrack('login', 'Login failed');
                _this2.loader.hideLoadingDefault();
                _this2.util.showAlert("Failed", "Login failed try again later");
                _this2.ex.call('LoginPage', 'Login()', error);
              });
            }
          }
        }]
      });
      yield alert.present();
    })();
  }
  isValid() {
    if (this.signupForm.valid) {
      return true;
    }
    this.errors = true;
    if (!this.signupForm.value.otp) {
      // this.util.showToast('Please enter OTP')
    }
    if (this.isNameValid()) {
      return false;
    }
    if (this.signupForm.controls.last_name.invalid) {
      this.showError("Please enter last name");
      return false;
    }
    if (this.isEmailValid()) {
      return false;
    }
    if (this.isPhoneValid()) {
      return false;
    }
    if (!this.isPasswordValid()) {
      return false;
    }
    if (!this.isConfirmPasswordValid()) {
      return false;
    }
    return false;
  }
  isConfirmPasswordValid() {
    if (this.signupForm.value.password != this.signupForm.value.password_confirmation) {
      this.showError("Password and confirm password not matching");
      let elem = document.querySelector('.signup-confirm ion-input.ng-invalid input');
      if (elem) {
        elem.focus();
      }
      return false;
    }
    return true;
  }
  /**
   * method to check is email valid
   */
  enforceMaxLength(event) {
    const input = event.target;
    let sanitizedValue = input.value.replace(/[^0-9]/g, '');
    sanitizedValue = sanitizedValue.slice(0, 10);
    input.value = sanitizedValue;
  }
  isEmailValid() {
    if (this.signupForm.controls.email.invalid) {
      this.showError("Please enter valid Email.");
      let elem = document.querySelector('.signup-email ion-input.ng-invalid input');
      if (elem) {
        elem.focus();
      }
      return true;
    }
    return;
  }
  isPasswordValid() {
    if (this.signupForm.value.password.length < 8) {
      this.showError("Password should be min 8 characters");
      let elem = document.querySelector('.signup-password ion-input.ng-invalid input');
      if (elem) {
        elem.focus();
      }
      return false;
    }
    return true;
  }
  isNameValid() {
    if (this.signupForm.controls.first_name.invalid) {
      this.showError('Please enter your Name');
      let elem = document.querySelector('.signup-name ion-input.ng-invalid input');
      if (elem) {
        elem.focus();
      }
      return true;
    }
    return;
  }
  isOtpValid() {
    if (this.signupForm.controls.otp.invalid) {
      this.showError("Please enter the OTP");
      let elem = document.querySelector('.signup-name ion-input.ng-invalid input');
      if (elem) {
        elem.focus();
      }
      return true;
    }
    return;
  }
  isPhoneValid() {
    if (!this.signupForm.value.mobile_number || this.signupForm.value.mobile_number.toString().length != this.phoneNumCount || !this.signupForm.value.mobile_number) {
      this.showError("Please enter your " + this.phoneNumCount + " digit mobile number");
      let elem = document.querySelector('.signup-mobile_number ion-input.ng-invalid input');
      if (elem) {
        elem.focus();
      }
      return true;
    }
    return;
  }
  showError(msg) {
    this.errors = true;
    this.showSignupError = true;
    this.signupErrorMessage = msg;
    this.util.showToast(msg);
  }
  onInputChange(ev) {
    this.showSignupError = false;
    this.signupErrorMessage = null;
    let mob = this.signupForm.value.mobile_number && this.signupForm.value.mobile_number.toString() !== '' ? this.signupForm.value.mobile_number.toString() : this.forcedLoginOtp && this.forcedLoginOtp.MobileNumber && this.forcedLoginOtp.MobileNumber !== '' ? this.forcedLoginOtp.MobileNumber : "";
    if (mob.length > this.phoneNumCount) {
      this.signupForm.controls['mobile_number'].setValue(mob.substr(0, this.phoneNumCount));
    }
    const trimmedValue = parseInt(mob, 10).toString();
    if (trimmedValue == '0') {
      this.signupForm.value = '';
      this.signupForm.controls['mobile_number'].setValue(this.signupForm.value);
      return;
    }
  }
  onInputNumber(ev) {
    this.showSignupError = false;
    this.signupErrorMessage = null;
    let mob = this.otpForm.value.mobile_number.toString();
    if (mob.length > this.phoneNumCount) {
      this.otpForm.controls['mobile_number'].setValue(mob.substr(0, this.phoneNumCount));
    }
  }
  gotoLogin() {
    this.navCtrl.navigateForward('login');
  }
  MonthAsString(monthIndex) {
    var d = new Date();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    return month[monthIndex];
  }
  dateDisplayData(aryDates) {
    this.mineDisplaydate.splice(0, this.mineDisplaydate.length);
    for (let i = 0; i < aryDates.length; ++i) {
      const date = aryDates[i].split('+$+');
      const displaydt = {
        "date": date[0],
        "year": date[1],
        "month": date[2],
        "day": date[3]
      };
      this.mineDisplaydate.push(displaydt);
    }
    this.mineDisplaydate;
  }
  displayMybookings(date, type) {
    date = date.substring(0, 10);
    var newDate = new Date(date);
    if (type == 1 || type == 2) {
      this.pageDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.format)(newDate, 'yyyy-MM-dd');
      if (this.metaData.msiteFolder == 'ourbustheme') {
        this.showDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.format)(newDate, 'dd/MM/yyyy');
      } else {
        this.showDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.format)(newDate, 'dd-MM-yyyy');
      }
      var aryDates = this.GetDatesPro(newDate, 6);
      this.dateDisplayData(aryDates);
      this.modalCtrl.dismiss();
    }
  }
  GetDatesPro(startDate, daysToAdd) {
    var aryDates = [];
    for (var i = 0; i <= daysToAdd; i++) {
      var currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      aryDates.push(this.MonthAsString(currentDate.getMonth()) + " " + currentDate.getDate() + " " + this.DayAsString(currentDate.getDay()) + "+$+" + currentDate.getFullYear() + "+$+" + ('0' + (currentDate.getMonth() + 1)).slice(-2) + "+$+" + ('0' + currentDate.getDate()).slice(-2));
    }
    return aryDates;
  }
  DayAsString(dayIndex) {
    var weekdays = new Array(7);
    weekdays[0] = "Sun";
    weekdays[1] = "Mon";
    weekdays[2] = "Tue";
    weekdays[3] = "Wed";
    weekdays[4] = "Thu";
    weekdays[5] = "Fri";
    weekdays[6] = "Sat";
    return weekdays[dayIndex];
  }
  showPassword() {
    this.showpass = !this.showpass;
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
  cfmshowPassword() {
    this.cfmpasswordFieldType = this.cfmpasswordFieldType === 'password' ? 'text' : 'password';
    this.cfmshowpass = !this.cfmshowpass;
  }
  togglePasswordVisibility(field) {
    if (field === 'password') {
      this.isPasswordVisible = !this.isPasswordVisible; // Toggle password visibility
    } else if (field === 'confirmPassword') {
      this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible; // Toggle confirm password visibility
    }
  }
  onDateSelected(event) {
    let dateObj = new Date(event.detail.value);
    const result = this.dateService.formattedDateData(dateObj);
    this.showDate = result.formattedBirthDate;
  }
  onPasswordToggle() {
    this.showPassword1 = !this.showPassword1;
  }
  onPasswordToggle1() {
    this.showconfirmPassword = !this.showconfirmPassword;
  }
  validateDateOfBirth(event) {
    var _this3 = this;
    return (0,_Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let dateObj = new Date(event.detail.value);
      const result = _this3.dateService.formattedDateData(dateObj);
      _this3.showDate = result.formattedBirthDate;
      const minAge = 12;
      const maxAge = 120;
      const isValidAge = _this3.dateService.isAgeWithinRange(_this3.showDate, minAge, maxAge);
      if (!isValidAge) {
        const toast = yield _this3.toastController.create({
          message: `Age must be between ${minAge} and ${maxAge} years.`,
          duration: 3000,
          position: 'bottom',
          color: 'danger'
        });
        yield toast.present();
      }
    })();
  }
}
_SignUpPage = SignUpPage;
_SignUpPage.ɵfac = function SignUpPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignUpPage)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_4__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_16__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_5__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_exception__WEBPACK_IMPORTED_MODULE_6__.ExceptionProvider), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_7__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_8__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_9__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_10__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_19__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_11__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_12__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_13__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ToastController));
};
_SignUpPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: _SignUpPage,
  selectors: [["app-sign-up"]],
  standalone: false,
  decls: 4,
  vars: 4,
  consts: [["popoverDatetime", ""], [4, "ngIf"], ["title", "Customer Login", "subtitle", "", "showsubTxt", "false", "showsubtitle", "false"], [2, "height", "100px", "background-color", "#191966", "color", "#ffffff"], [1, "themeone-bg-content", "theme1", 2, "position", "absolute", "z-index", "8888", "top", "86px", "--background", "transparent"], [1, "themeone-center", "themeone-middle", 2, "padding-bottom", "89px"], [1, "themeone-sub-hd-txt"], ["novalidate", "", 2, "padding-bottom", "0px", "overflow-y", "scroll", 3, "ngSubmit", "formGroup"], ["class", "login-btn1", 3, "click", 4, "ngIf"], [1, "themeone-ion-item", 2, "margin-bottom", "0px"], ["type", "text", "placeholder", "First Name", "formControlName", "first_name", "autocomplete", "off", 3, "keyup"], ["slot", "start", "src", "./assets/icon/user-3-line.svg", 2, "height", "24px", "width", "24px", "position", "absolute", "z-index", "11", "left", "10px"], [1, "themeone-ion-item"], ["type", "text", "placeholder", "Last Name", "formControlName", "last_name", "autocomplete", "off", 3, "keyup"], [1, "themeone-ion-item-autofill", 2, "margin-top", "0px"], ["type", "email", "placeholder", "Email address", "formControlName", "email", "autocomplete", "off", 3, "keyup"], ["slot", "start", "src", "./assets/icon/Contact.svg", 2, "height", "24px", "width", "24px", "position", "absolute", "z-index", "11", "left", "10px"], ["class", "themeone-ion-item", "style", "margin-bottom: 0px;", 4, "ngIf"], [1, "themeone-ion-item-autofill", 2, "margin-bottom", "0"], ["placeholder", "Password", "formControlName", "password", "autocomplete", "off", 3, "keyup", "type"], ["slot", "start", "src", "./assets/icon/lock-fill.svg", 2, "height", "24px", "width", "24px", "position", "absolute", "z-index", "11", "left", "10px"], ["slot", "end", "style", "height: 24px;width: 24px;position: absolute;\n                        z-index: 11;right: 10px;", "src", "./assets/icon/eye-off-line.svg", 3, "click", 4, "ngIf"], ["placeholder", "Confirm Password", "formControlName", "password_confirmation", "autocomplete", "off", 3, "keyup", "type"], ["slot", "end", "style", "height: 24px;width: 24px;position: absolute;\n                            z-index: 11;right: 10px;", "src", "./assets/icon/eye-off-line.svg", 3, "click", 4, "ngIf"], ["tappable", "", "id", "open-date-input-5", 1, "themeone-ion-item"], ["src", "./assets/icon/Calendar.svg", "alt", "", "slot", "end"], ["type", "text", "formControlName", "dob", "pl", "", "placeholder", "Date Of Birth", 3, "value"], ["trigger", "open-date-input-5"], [2, "font-size", "14px", "color", "#999999", "padding-bottom", "10px"], [2, "padding-bottom", "5px"], [1, "seg-btn"], ["formControlName", "sex", "mode", "md", 1, "tabs"], ["value", "Mr", 1, "segone"], ["value", "Ms"], ["class", "themeone-ion-item", 4, "ngIf"], ["mode", "md", "expand", "block", 1, "themeone-login-btn", 3, "click"], ["style", "margin-top: 15px;", "class", "txt-ln2", 4, "ngIf"], [1, "login-btn1", 3, "click"], ["type", "tel", "placeholder", "Mobile Number", "formControlName", "mobile_number", 3, "keyup"], ["slot", "start", "src", "./assets/icon/phone-fill.svg", 2, "height", "24px", "width", "24px", "position", "absolute", "z-index", "11", "left", "10px"], ["type", "number", "placeholder", "Mobile Number", "formControlName", "mobile_number", "readonly", "", 3, "keyup", "ngModelChange", "ngModel"], ["slot", "end", "src", "./assets/icon/eye-off-line.svg", 2, "height", "24px", "width", "24px", "position", "absolute", "z-index", "11", "right", "10px", 3, "click"], ["mode", "md", "show-default-buttons", "true", "done-text", "Ok", "presentation", "date", "showDefaultTitle", "true", 3, "ionChange", "value", "max"], ["type", "text", "placeholder", "Referral Code (Optional)", "formControlName", "referal_code"], [1, "txt-ln2", 2, "margin-top", "15px"], [1, "themeone-frgt-pw"], [1, "themeone-click-btn", 3, "click"], ["mode", "md", 1, "high-1"], ["slot", "start"], ["class", "title-main-wthlogin", 4, "ngIf"], ["alt", "", 1, "icn-main-wthtlogin", 3, "src"], [1, "bg-content"], ["class", "card-1", 4, "ngIf"], [1, "center-div"], [1, "no-service"], ["novalidate", "", 2, "padding-bottom", "50px", "overflow-y", "scroll", 3, "ngSubmit", "formGroup"], ["label", "First name", "labelPlacement", "floating", "type", "text", "formControlName", "first_name", "autocomplete", "off", 1, "txt-lbl", 3, "keyup"], ["label", "Last name", "labelPlacement", "floating", "type", "text", "formControlName", "last_name", "autocomplete", "off", 1, "txt-lbl", 3, "keyup"], ["label", "Email address", "labelPlacement", "floating", "type", "email", "formControlName", "email", "autocomplete", "off", 1, "txt-lbl", 3, "keyup"], ["label", "Password", "labelPlacement", "floating", "type", "password", "formControlName", "password", "autocomplete", "off", 1, "txt-lbl", 3, "keyup"], ["label", "Confirm Password", "labelPlacement", "floating", "type", "password", "formControlName", "password_confirmation", "autocomplete", "off", 1, "txt-lbl", 3, "keyup"], ["tappable", "", "id", "open-date-input-5"], ["label", "Date of birth", "labelPlacement", "floating", "type", "text", "formControlName", "dob", 1, "txt-lbl", 3, "value"], [1, "txt-lbl"], ["formControlName", "sex", 1, "tabs"], ["value", "Mr"], ["expand", "block", 1, "login-btn", 3, "click"], [1, "title-main-wthlogin"], [1, "card-1"], [1, "txt-ln2"], [1, "frgt-pw", 2, "margin", "10px"], [1, "click-btn", 3, "click"], ["label", "Mobile number", "labelPlacement", "floating", "type", "number", "formControlName", "mobile_number", 1, "txt-lbl", 3, "keyup"], ["label", "Mobile number", "labelPlacement", "floating", "type", "number", "formControlName", "mobile_number", "readonly", "", 1, "txt-lbl", 3, "keyup", "ngModelChange", "ngModel"], ["mode", "md", "show-default-buttons", "true", "done-text", "Ok", "presentation", "date", "showDefaultTitle", "true", 3, "ionChange", "value"], ["label", "Referral code (Optional)", "labelPlacement", "floating", "type", "text", "formControlName", "referal_code", 1, "txt-lbl"], [1, "ourbustheme"], ["size", "2"], ["size", "8", 2, "display", "flex", "align-items", "center"], [2, "text-align", "center", "font-size", "19px"], [1, "ourbustheme", 2, "--background", "white"], ["style", "font-size: 14px; top: 73px; right: 18px;color: var(--iconsAndButtonsColor);text-align: end;\n    margin-right: 8px;", 3, "click", 4, "ngIf"], [2, "margin-top", "24px"], ["size", "12"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input"], ["label", "First Name", "labelPlacement", "floating", "fill", "outline", "type", "text", "maxlength", "25", "formControlName", "first_name", "autocomplete", "off", 1, "ourbus_inputText", "ourbus_labelSet", 3, "keyup"], ["label", "Last Name", "labelPlacement", "floating", "fill", "outline", "type", "text", "maxlength", "25", "formControlName", "last_name", "autocomplete", "off", 1, "ourbus_inputText", "ourbus_labelSet", 3, "keyup"], ["lines", "none", "size", "12"], ["mode", "md", 1, "ourbus_custom_input"], ["label", "Email Address", "labelPlacement", "floating", "fill", "outline", "type", "email", "maxlength", "50", "formControlName", "email", "autocomplete", "off", 1, "ourbus_inputText", "ourbus_labelSet", 3, "keyup"], ["label", "Password", "labelPlacement", "floating", "fill", "outline", "formControlName", "password", "autocomplete", "off", 1, "ourbus_inputText", "ourbus_labelSet", 3, "keyup", "type"], [1, "icondiv1", 3, "click"], [1, "iconeye12", 3, "name"], ["label", "Confirm Password", "labelPlacement", "floating", "fill", "outline", "type", "password", "formControlName", "password_confirmation", "autocomplete", "off", 1, "ourbus_inputText", "ourbus_labelSet", 3, "keyup", "type"], ["size", "6"], ["lines", "none", "mode", "md", "tappable", "", "id", "open-date-input-3", 1, "ourbus_custom_input"], ["src", "./assets/icon/Calendar copy.svg", "alt", "", "slot", "end"], ["label", "Date of birth", "labelPlacement", "floating", "fill", "outline", "type", "text", "formControlName", "dob", 1, "ourbus_inputText", "ourbus_labelSet", 3, "value"], ["id", "dob", "trigger", "open-date-input-3", 1, "ourbus-Modal"], ["mode", "ios", "formControlName", "sex", 2, "height", "60px"], ["value", "Mr", 1, "ourbus_segment"], ["expand", "block", 1, "login-btn", "ourbus_btn", 3, "click"], [2, "font-size", "14px", "top", "73px", "right", "18px", "color", "var(--iconsAndButtonsColor)", "text-align", "end", "margin-right", "8px", 3, "click"], ["label", "Mobile Number", "labelPlacement", "floating", "fill", "outline", "type", "tel", "maxlength", "10", "formControlName", "mobile_number", 1, "ourbus_inputText", "ourbus_labelSet", 3, "keyup", "ionChange"], ["label", "Mobile Number", "labelPlacement", "floating", "fill", "outline", "type", "tel", "maxlength", "10", "formControlName", "mobile_number", "readonly", "", 1, "ourbus_inputText", "ourbus_labelSet", 3, "keyup", "ionChange", "ngModelChange", "ngModel"], ["mode", "md", "show-default-buttons", "true", "done-text", "Ok", "presentation", "date", "showDefaultTitle", "true", "color", "success", 1, "ourbus-datetime-header", 3, "ionChange", "value", "max"], [1, "", 2, "--background", "#F1F7FA"], [1, "seabird_card_2"], ["novalidate", "", 2, "overflow-y", "scroll", 3, "ngSubmit", "formGroup"], ["lines", "none", 2, "font-size", "14px"], ["placeholder", "First name", "type", "text", "formControlName", "first_name", "autocomplete", "off", 3, "keyup"], ["placeholder", "Last name", "type", "text", "formControlName", "last_name", "autocomplete", "off", 3, "keyup"], ["placeholder", "Email address", "type", "email", "formControlName", "email", "autocomplete", "off", 3, "keyup"], ["lines", "none", "style", "font-size: 14px;", 4, "ngIf"], ["style", "font-size: 14px;", 4, "ngIf"], ["placeholder", "Password", "formControlName", "password", "autocomplete", "off", 3, "type"], ["slot", "end", 2, "cursor", "pointer", "color", "#999999", 3, "click", "name"], ["placeholder", "Confirm Password", "formControlName", "password_confirmation", "autocomplete", "off", 3, "type"], ["lines", "none", "tappable", "", "id", "open-date-input-5", 2, "font-size", "14px"], ["placeholder", "Date of birth", "type", "text", "formControlName", "dob", 3, "value"], ["slot", "end", 2, "display", "flex", "align-items", "center", "color", "#2B28CE"], ["name", "calendar-outline", 2, "margin-right", "4px"], [1, "txt-lbl", 2, "color", "#7c7878"], ["mode", "md", "formControlName", "sex"], [1, "seabird_list"], ["lines", "none", 2, "--background", "#ffffff"], [2, "font-size", "12px"], ["slot", "start", "value", "Mr", 1, "seabird_Radio_color"], ["slot", "start", "value", "Ms", 1, "seabird_Radio_color"], ["lines", "none", "style", "font-size: 14px;border-bottom: 0px;", 4, "ngIf"], ["expand", "block", 1, "seabird_login_btn", 3, "click"], ["class", "seabird_bottom_div", 4, "ngIf"], ["placeholder", "Mobile number", "type", "number", "formControlName", "mobile_number", 3, "keyup"], [2, "font-size", "14px"], ["placeholder", "Mobile number", "type", "number", "formControlName", "mobile_number", "readonly", "", 3, "keyup", "ngModelChange", "ngModel"], ["lines", "none", 2, "font-size", "14px", "border-bottom", "0px"], ["placeholder", "Referral code (Optional)", "type", "text", "formControlName", "referal_code"], [1, "seabird_bottom_div"], [1, "click-btn", 2, "line-height", "0.54", 3, "click"]],
  template: function SignUpPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, SignUpPage_ng_container_0_Template, 59, 15, "ng-container", 1)(1, SignUpPage_ng_container_1_Template, 49, 17, "ng-container", 1)(2, SignUpPage_ng_container_2_Template, 63, 12, "ng-container", 1)(3, SignUpPage_ng_container_3_Template, 57, 19, "ng-container", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.MaxLengthValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonModal, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonBackButton, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_14__.CommonHeaderComponent],
  styles: [".head[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  margin: 16px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #4a4a4a;\n}\n\nion-content[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  --ion-background-color: var(--viewBgColor);\n}\n\n.scroll-y[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n\n.card-1[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n  height: 44px;\n}\n\n.h50[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.bg-content[_ngcontent-%COMP%] {\n  --background: #f7f9fb;\n}\n.bg-content[_ngcontent-%COMP%]   .txt-ln2[_ngcontent-%COMP%] {\n  height: 44px;\n  width: 100%;\n  z-index: 5;\n  --background: white;\n  font-family: NotoSans;\n}\n\n.icn-main-wthtlogin[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  position: initial;\n  right: 0;\n  padding: 0;\n  width: 140px;\n  height: 40px;\n  top: 0;\n  float: right;\n  margin-right: 10px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.title-main-wthlogin[_ngcontent-%COMP%] {\n  margin: 9px 16px 0px -25px;\n  font-family: NotoSans;\n  font-size: 15px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  letter-spacing: normal;\n  display: inline-block;\n}\n\n.frgt-pw[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  color: #3e3e52;\n}\n\n.click-btn[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 1.54;\n  text-align: center;\n  color: var(--iconsAndButtonsColor);\n}\n\n.txt-lbl[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  color: #3e3e52;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: #f7f9fb;\n}\n\n.center-div[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  text-transform: initial;\n  --background:var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  bottom: 10px;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.login-btn1[_ngcontent-%COMP%] {\n  text-transform: initial;\n  color: var(--iconsAndButtonsColor);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  position: fixed;\n  top: 62px;\n  right: 14px;\n  z-index: 200;\n}\n\n.seg-btn[_ngcontent-%COMP%] {\n  width: 196px;\n  margin: 0;\n  border-radius: 4px;\n  background-color: #eaeaea;\n}\n.seg-btn[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  height: 24px;\n  border: 1px solid #eaeaea;\n  border-radius: 4px;\n}\n.seg-btn[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  color: #9b9b9b;\n  min-height: 0px;\n  text-transform: capitalize;\n}\n.seg-btn[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  color: var(--primaryText);\n  background-color: var(--iconsAndButtonsColor);\n  font-weight: bolder;\n}\n\n.img-icn[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 37px;\n  display: block;\n  \n\n  margin-right: 10px;\n  margin-bottom: 5px;\n}\n\nion-modal[_ngcontent-%COMP%] {\n  --width: 290px;\n  --height: 520px;\n  --border-radius: 8px;\n}\n\nion-modal[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%] {\n  height: 520px;\n}\n\n.themeone-bg-content[_ngcontent-%COMP%] {\n  --background: #FFFFFF;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .seg-btn[_ngcontent-%COMP%] {\n  width: 196px;\n  margin: 0;\n  border-radius: 4px;\n  background-color: #eaeaea;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .seg-btn[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  height: 34px;\n  border: 1px solid #19196E;\n  border-radius: 5px;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .seg-btn[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  min-height: 0px;\n  text-transform: capitalize;\n  background-color: #FFFFFF;\n  color: #19196E;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .seg-btn[_ngcontent-%COMP%]   .segone[_ngcontent-%COMP%] {\n  border-right: 1px solid #19196E;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .seg-btn[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  color: #19196E;\n  background-color: #F2C21A;\n  font-weight: bolder;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-bg-page[_ngcontent-%COMP%] {\n  background: #191966;\n  height: -webkit-fill-available;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-center[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  padding: 1px 16px 16px 16px;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-sub-hd-txt[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #191966;\n  margin: 5% 0 5%;\n  text-align: center;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-ion-item[_ngcontent-%COMP%] {\n  border: 1px #D9D9D9 solid;\n  --inner-border-width: 0;\n  border-radius: 10px;\n  --border-radius: 10px;\n  --border-width: 0px;\n  margin: 10px 0px;\n  color: #333333;\n  font-size: 14px;\n  --inner-padding-end: 0;\n  --padding-start: 0px;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --padding-start: 42px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --border-radius: 10px;\n  font-family: \"roboto\";\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-ion-item[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%] {\n  --padding-start: 42px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --border-radius: 10px;\n  width: 100%;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-login-btn[_ngcontent-%COMP%] {\n  --background: #F2C21A;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 26px;\n  letter-spacing: -0.01em;\n  text-align: center;\n  --border-radius: 010px;\n  height: 50px;\n  color: #191966;\n  margin-top: 15px;\n  --box-shadow: none;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-otp-btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 26px;\n  letter-spacing: -0.01em;\n  text-align: center;\n  --border-radius: 010px;\n  height: 50px;\n  color: #191966;\n  \n\n  \n\n  margin-top: 15px;\n  --border-color: #F2C21A;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-forget-pass[_ngcontent-%COMP%] {\n  color: #191966;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.01em;\n  text-align: left;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-click-btn[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  text-align: center;\n  color: #F2C21A;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-frgt-pw[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  text-align: center;\n  color: #1F1F1F;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .txt-ln2[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-ion-item-autofill[_ngcontent-%COMP%] {\n  --inner-border-width: 0;\n  border-radius: 10px;\n  --border-radius: 10px;\n  --border-width: 0px;\n  margin: 10px 0px;\n  color: #333333;\n  --inner-padding-end: 0;\n  --padding-start: 0px;\n  font-size: 14px;\n  border: 1px #D9D9D9 solid;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-ion-item-autofill[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --padding-start: 42px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --border-radius: 10px;\n}\n\n.seabird_card_1[_ngcontent-%COMP%] {\n  border: 1px solid #626262;\n  --background: white;\n  margin: 16px;\n  border-radius: 10px;\n  padding: 12px;\n}\n\n.seabird_card_2[_ngcontent-%COMP%] {\n  margin: 16px;\n  border: 1px solid #626262;\n  --background:white;\n}\n\n.seabird_card_2[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > ion-item[_ngcontent-%COMP%] {\n  --background:transparent;\n  border-bottom: 1px solid #626262;\n}\n\n.seabird_login_btn[_ngcontent-%COMP%] {\n  text-transform: initial;\n  --background:var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  height: 44px;\n  border-radius: 4px;\n  width: 92%;\n  margin-left: 16px;\n  margin-top: 55px;\n  --border-radius:40px;\n}\n\n.seabird_list[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0px;\n}\n\n.seabird_Radio_color[_ngcontent-%COMP%] {\n  margin: 2px !important;\n  --color-checked:var(--iconsAndButtonsColor) !important ;\n}\n\n.seabird_bottom_div[_ngcontent-%COMP%] {\n  text-align: center;\n  display: grid;\n  margin-top: 50px;\n}\n\n.ourbus_custom_input[_ngcontent-%COMP%] {\n  --highlight-color-focused: #D9D9D9;\n  --highlight-height: 1px;\n  --border-color: #D9D9D9;\n  --highlight-background: #D9D9D9;\n}\n.ourbus_custom_input[_ngcontent-%COMP%]   .ourbus_label_select[_ngcontent-%COMP%] {\n  position: absolute !important;\n}\n.ourbus_custom_input[_ngcontent-%COMP%]   .ourbus_ionselect_center[_ngcontent-%COMP%] {\n  margin-top: 17px !important;\n  padding-top: 0px !important;\n}\n\n.ourbus_labelSet[_ngcontent-%COMP%] {\n  color: #4e4e4e !important;\n}\n\n.ourbus_inputText[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #2D2D2D;\n}\n\n.ourbus_inputText_disable[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #747474;\n}\n\n.ourbus_custom_input_disable[_ngcontent-%COMP%] {\n  --highlight-color-focused: #747474;\n  --highlight-height: 1px;\n  --border-color: #747474;\n  --highlight-background: #efefef;\n  --background: #efefef;\n}\n\n.ourbustheme[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: #fff;\n}\n.ourbustheme[_ngcontent-%COMP%]   .dob_calender[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_segment[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .segment-button-checked[_ngcontent-%COMP%] {\n  --indicator-color: var(--iconsAndButtonsColor) !important;\n  --indicator-color-checked: transparent !important;\n  color: var(--primaryText);\n  margin: 8px !important;\n}\n\nion-modal#dob[_ngcontent-%COMP%] {\n  --width: 311px !important;\n  --height: 543px !important;\n  --border-radius: 8px !important;\n}\n\n.ourbus_btn[_ngcontent-%COMP%] {\n  font-size: 15px;\n  height: 55px;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n\n.iconeye12[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: -8px;\n  z-index: 99999999;\n  color: #696768;\n  font-size: 21px;\n  height: 25px;\n  width: 25px;\n  right: 12px;\n}\n\n.icondiv1[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-right: 41px;\n  z-index: 999999999;\n}\n\n[_nghost-%COMP%]     ion-datetime {\n  background: green;\n}\n\nion-modal[_ngcontent-%COMP%] {\n  --width: 350px;\n  --height: 580px;\n  --border-radius: 8px;\n}\n\nion-modal[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%] {\n  height: 580px;\n}\n\nion-back-button[_ngcontent-%COMP%] {\n  color: black;\n}"]
});

/***/ })

}]);