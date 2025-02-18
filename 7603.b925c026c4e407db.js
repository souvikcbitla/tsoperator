"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[7603],{

/***/ 74570:
/*!*******************************************************************!*\
  !*** ./src/app/personal-detail/personal-detail-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalDetailPageRoutingModule: () => (/* binding */ PersonalDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _personal_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal-detail.page */ 68988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _PersonalDetailPageRoutingModule;




const routes = [{
  path: '',
  component: _personal_detail_page__WEBPACK_IMPORTED_MODULE_0__.PersonalDetailPage
}];
class PersonalDetailPageRoutingModule {}
_PersonalDetailPageRoutingModule = PersonalDetailPageRoutingModule;
_PersonalDetailPageRoutingModule.ɵfac = function PersonalDetailPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PersonalDetailPageRoutingModule)();
};
_PersonalDetailPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _PersonalDetailPageRoutingModule
});
_PersonalDetailPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PersonalDetailPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 67603:
/*!***********************************************************!*\
  !*** ./src/app/personal-detail/personal-detail.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalDetailPageModule: () => (/* binding */ PersonalDetailPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _personal_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal-detail-routing.module */ 74570);
/* harmony import */ var _personal_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal-detail.page */ 68988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _PersonalDetailPageModule;






class PersonalDetailPageModule {}
_PersonalDetailPageModule = PersonalDetailPageModule;
_PersonalDetailPageModule.ɵfac = function PersonalDetailPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PersonalDetailPageModule)();
};
_PersonalDetailPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _PersonalDetailPageModule
});
_PersonalDetailPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _personal_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.PersonalDetailPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PersonalDetailPageModule, {
    declarations: [_personal_detail_page__WEBPACK_IMPORTED_MODULE_1__.PersonalDetailPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _personal_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.PersonalDetailPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 68988:
/*!*********************************************************!*\
  !*** ./src/app/personal-detail/personal-detail.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalDetailPage: () => (/* binding */ PersonalDetailPage)
/* harmony export */ });
/* harmony import */ var _Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 84692);
/* harmony import */ var _countries_countries_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../countries/countries.json */ 2660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 345);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 60177);

var _PersonalDetailPage;


















const _c0 = a0 => ({
  "disableionitem": a0
});
function PersonalDetailPage_ng_container_0_img_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 59);
  }
}
function PersonalDetailPage_ng_container_0_img_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 60);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r1.photo, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function PersonalDetailPage_ng_container_0_img_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 61);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r1.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function PersonalDetailPage_ng_container_0_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-datetime", 62, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_0_ng_template_33_Template_ion_datetime_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const popoverDatetime_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.displayMybookings(popoverDatetime_r4 == null ? null : popoverDatetime_r4.value, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.pageDate);
  }
}
function PersonalDetailPage_ng_container_0_ion_item_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item", 23)(1, "ion-label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "ion-input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.emailfield);
  }
}
function PersonalDetailPage_ng_container_0_ion_item_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item", 23)(1, "ion-label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "ion-input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.emailfield);
  }
}
function PersonalDetailPage_ng_container_0_div_45_ion_row_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 68)(2, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "ion-input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ion-col", 68)(5, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "ion-input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", item_r5.id_card_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", item_r5.id_card_no);
  }
}
function PersonalDetailPage_ng_container_0_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 65)(1, "ion-label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "ID Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, PersonalDetailPage_ng_container_0_div_45_ion_row_3_Template, 7, 2, "ion-row", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.idcardDetail);
  }
}
function PersonalDetailPage_ng_container_0_ion_select_option_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", title_r6.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](title_r6.country);
  }
}
function PersonalDetailPage_ng_container_0_ion_select_option_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", title_r7.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](title_r7.name);
  }
}
function PersonalDetailPage_ng_container_0_ion_select_option_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", title_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](title_r8.name);
  }
}
function PersonalDetailPage_ng_container_0_ion_item_83_ion_badge_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-badge", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_0_ion_item_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_ion_item_83_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deleteAcc());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "ion-label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Delete Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, PersonalDetailPage_ng_container_0_ion_item_83_ion_badge_4_Template, 2, 0, "ion-badge", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](2, _c0, ctx_r1.is_delete_request));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.is_delete_request);
  }
}
function PersonalDetailPage_ng_container_0_div_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_84_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.checkclick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_84_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.stopClose($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div")(3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Enter New Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 78)(6, "ion-item")(7, "ion-label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ion-input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_0_div_84_Template_ion_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.phoneNumber, $event) || (ctx_r1.phoneNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "ion-col", 81)(12, "ion-col", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "ion-col", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_84_Template_ion_col_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.otpnumberPopup(ctx_r1.phoneNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "SEND OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.phoneNumber);
  }
}
function PersonalDetailPage_ng_container_0_div_85_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.timerString, " ");
  }
}
function PersonalDetailPage_ng_container_0_div_85_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_85_div_11_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.resendOtp(ctx_r1.phoneNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_0_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_85_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.checkclick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_85_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.stopClose($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div")(3, "ion-label")(4, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Verify OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-row", 78)(7, "ion-col", 84)(8, "ion-input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_0_div_85_Template_ion_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.numberOTP, $event) || (ctx_r1.numberOTP = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ion-col", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, PersonalDetailPage_ng_container_0_div_85_span_10_Template, 2, 1, "span", 87)(11, PersonalDetailPage_ng_container_0_div_85_div_11_Template, 2, 0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "ion-col", 89)(14, "ion-col", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "ion-col", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_85_Template_ion_col_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.verifyotpnumber(ctx_r1.numberOTP));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "VERIFY OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.numberOTP);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.timerHideShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.resendbutton);
  }
}
function PersonalDetailPage_ng_container_0_div_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_86_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deactivateNoteModal = !ctx_r1.deactivateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 93)(2, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " Deactivate Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Are you sure, Do you want deactivate your account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "ion-col", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_86_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deactivateNoteModal = !ctx_r1.deactivateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "ion-col", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_86_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deactivateAccConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
}
function PersonalDetailPage_ng_container_0_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_87_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deleteNoteModal = !ctx_r1.deleteNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 93)(2, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " Delete Request: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Deleting your account will result in the permanent loss of all your account data, including profile information, settings, and any content associated with your account. Once your account is deleted, recovery may not be possible. Be certain of your decision before proceeding. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "br")(7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Are you sure, Do you want delete your account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-col", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_87_Template_ion_col_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deleteNoteModal = !ctx_r1.deleteNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "ion-col", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_87_Template_ion_col_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deleteAccConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
}
function PersonalDetailPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-header", 2)(2, "ion-toolbar", 3)(3, "ion-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "ion-buttons", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "ion-back-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-content", 7)(8, "div", 8)(9, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function PersonalDetailPage_ng_container_0_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onsubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 10)(11, "ion-item", 11)(12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, PersonalDetailPage_ng_container_0_img_13_Template, 1, 0, "img", 13)(14, PersonalDetailPage_ng_container_0_img_14_Template, 1, 1, "img", 14)(15, PersonalDetailPage_ng_container_0_img_15_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 16)(17, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_Template_ion_icon_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.triggerFileInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 18)(19, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function PersonalDetailPage_ng_container_0_Template_input_change_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 20)(21, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "ion-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](26, "ion-input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](28, "ion-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](30, "img", 27)(31, "ion-input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "ion-modal", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, PersonalDetailPage_ng_container_0_ng_template_33_Template, 2, 1, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "ion-item", 30)(35, "ion-row", 31)(36, "ion-col", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](37, "ion-input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "ion-col", 34)(39, "ion-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_Template_ion_button_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.showmobilePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "ion-item", 23)(42, "ion-input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionInput", function PersonalDetailPage_ng_container_0_Template_ion_input_ionInput_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.restrictToTenDigits($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](43, PersonalDetailPage_ng_container_0_ion_item_43_Template, 4, 1, "ion-item", 37)(44, PersonalDetailPage_ng_container_0_ion_item_44_Template, 4, 1, "ion-item", 37)(45, PersonalDetailPage_ng_container_0_div_45_Template, 4, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "div", 40)(49, "div", 41)(50, "ion-segment", 42)(51, "ion-segment-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "ion-segment-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "ion-item", 23)(56, "ion-label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](57, "Nationality");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "ion-select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_0_Template_ion_select_ngModelChange_58_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.nationCode1, $event) || (ctx_r1.nationCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_0_Template_ion_select_ionChange_58_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.nationChange(ctx_r1.nationCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](59, PersonalDetailPage_ng_container_0_ion_select_option_59_Template, 2, 2, "ion-select-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "ion-item", 23)(61, "ion-label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](62, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](63, "ion-select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_0_Template_ion_select_ngModelChange_63_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.stateCode1, $event) || (ctx_r1.stateCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_0_Template_ion_select_ionChange_63_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.stateChange(ctx_r1.stateCode1, ctx_r1.nationCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](64, PersonalDetailPage_ng_container_0_ion_select_option_64_Template, 2, 2, "ion-select-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](65, "ion-item", 23)(66, "ion-label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](67, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](68, "ion-select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_0_Template_ion_select_ngModelChange_68_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.cityCode1, $event) || (ctx_r1.cityCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_0_Template_ion_select_ionChange_68_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.cityChange(ctx_r1.cityCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](69, PersonalDetailPage_ng_container_0_ion_select_option_69_Template, 2, 2, "ion-select-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](70, "ion-item", 23)(71, "ion-label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](72, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](73, "ion-textarea", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "ion-button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](75, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "ion-card")(77, "ion-card-content", 53)(78, "ion-list", 53)(79, "ion-item", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_Template_ion_item_click_79_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deactivateAcc());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](80, "ion-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](81, "ion-label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](82, "Deactivate Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](83, PersonalDetailPage_ng_container_0_ion_item_83_Template, 5, 4, "ion-item", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](84, PersonalDetailPage_ng_container_0_div_84_Template, 15, 1, "div", 58)(85, PersonalDetailPage_ng_container_0_div_85_Template, 17, 3, "div", 58)(86, PersonalDetailPage_ng_container_0_div_86_Template, 12, 0, "div", 58)(87, PersonalDetailPage_ng_container_0_div_87_Template, 15, 0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r1.formData);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.photo && !ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.photo && !ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.firstnameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.savedphoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.firstnameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.lastnameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.dobField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.savedphoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.emergencynoField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.splitData != "ticketsimply-tmp.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.splitData == "ticketsimply-tmp.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.idcardDetail != null && ctx_r1.idcardDetail != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.titleField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", "Male", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", "Female", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.nationCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.nationCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.nationalityData.nationality);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.stateList);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.CityList);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.addressField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](33, _c0, ctx_r1.is_delete_request));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.profileDataGet.hasOwnProperty("is_delete_request"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.mobileNumberPopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.otpNumberPopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.deactivateNoteModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.deleteNoteModal);
  }
}
function PersonalDetailPage_ng_container_1_img_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 147);
  }
}
function PersonalDetailPage_ng_container_1_img_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 148);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("src", ctx_r1.photo, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function PersonalDetailPage_ng_container_1_img_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 149);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r1.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function PersonalDetailPage_ng_container_1_ion_item_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-input", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.emailfield);
  }
}
function PersonalDetailPage_ng_container_1_ion_item_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-input", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.emailfield);
  }
}
function PersonalDetailPage_ng_container_1_div_36_ion_row_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 68)(2, "ion-item", 154)(3, "ion-label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "ID Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "ion-input", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-col", 68)(7, "ion-item", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "ion-input", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", item_r16.id_card_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", item_r16.id_card_no);
  }
}
function PersonalDetailPage_ng_container_1_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "ion-label", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "ID Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, PersonalDetailPage_ng_container_1_div_36_ion_row_3_Template, 9, 2, "ion-row", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.idcardDetail);
  }
}
function PersonalDetailPage_ng_container_1_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-datetime", 157, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_1_ng_template_43_Template_ion_datetime_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r17);
      const popoverDatetime_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.displayMybookings(popoverDatetime_r18 == null ? null : popoverDatetime_r18.value, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.pageDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("max", ctx_r1.maxDate);
  }
}
function PersonalDetailPage_ng_container_1_ion_item_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item", 158)(1, "ion-label", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ion-input", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", country_r19.flag, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](country_r19.dialCode);
  }
}
function PersonalDetailPage_ng_container_1_ion_item_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item", 158)(1, "ion-label", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ion-input", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", country_r20.flag, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("label", country_r20.flag);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](country_r20.dialCode);
  }
}
function PersonalDetailPage_ng_container_1_ion_select_option_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", title_r21.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](title_r21.country);
  }
}
function PersonalDetailPage_ng_container_1_ion_select_option_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", title_r22.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](title_r22.name);
  }
}
function PersonalDetailPage_ng_container_1_ion_select_option_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", title_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](title_r23.name);
  }
}
function PersonalDetailPage_ng_container_1_div_103_ion_item_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item", 169)(1, "ion-label", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ion-input", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", country_r25.flag, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](country_r25.dialCode);
  }
}
function PersonalDetailPage_ng_container_1_div_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_103_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.checkclick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_103_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.stopClose($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div")(3, "ion-row")(4, "ion-col", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, PersonalDetailPage_ng_container_1_div_103_ion_item_5_Template, 5, 3, "ion-item", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-col", 166)(7, "ion-item", 154)(8, "ion-label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "ion-input", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_1_div_103_Template_ion_input_ionChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.enforceMaxLength($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_1_div_103_Template_ion_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.phoneNumber, $event) || (ctx_r1.phoneNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "ion-col", 81)(13, "ion-col", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "ion-col", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_103_Template_ion_col_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.otpnumberPopup(ctx_r1.phoneNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "SEND OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.countryData);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.phoneNumber);
  }
}
function PersonalDetailPage_ng_container_1_div_104_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.timerString, " ");
  }
}
function PersonalDetailPage_ng_container_1_div_104_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_104_div_12_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.resendOtp(ctx_r1.phoneNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_1_div_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_104_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.checkclick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_104_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.stopClose($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div")(3, "ion-label")(4, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Verify OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-row", 78)(7, "ion-col", 170)(8, "ion-item", 154)(9, "ion-input", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_1_div_104_Template_ion_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.numberOTP, $event) || (ctx_r1.numberOTP = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_1_div_104_Template_ion_input_ionChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.enforceMaxLengthOtp($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "ion-col", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, PersonalDetailPage_ng_container_1_div_104_span_11_Template, 2, 1, "span", 173)(12, PersonalDetailPage_ng_container_1_div_104_div_12_Template, 2, 0, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "ion-col", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "ion-col", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_104_Template_ion_col_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.verifyotpnumber(ctx_r1.numberOTP));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "VERIFY OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.numberOTP);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.timerHideShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.resendbutton);
  }
}
function PersonalDetailPage_ng_container_1_div_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_105_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deactivateNoteModal = !ctx_r1.deactivateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 93)(2, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " Deactivate Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Are you sure, Do you want deactivate your account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "ion-col", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_105_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deactivateNoteModal = !ctx_r1.deactivateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "ion-col", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_105_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deactivateAccConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
}
function PersonalDetailPage_ng_container_1_div_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_106_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deleteNoteModal = !ctx_r1.deleteNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 93)(2, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " Delete Request: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Deleting your account will result in the permanent loss of all your account data, including profile information, settings, and any content associated with your account. Once your account is deleted, recovery may not be possible. Be certain of your decision before proceeding. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "br")(7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Are you sure, Do you want delete your account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-col", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_106_Template_ion_col_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deleteNoteModal = !ctx_r1.deleteNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "ion-col", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_106_Template_ion_col_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deleteAccConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
}
function PersonalDetailPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-header", 98)(2, "ion-toolbar", 99)(3, "ion-row")(4, "ion-col", 100)(5, "ion-buttons")(6, "ion-back-button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_Template_ion_back_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.handleBackButton());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-col", 102)(8, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, " Edit Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "ion-content", 104)(11, "div", 105)(12, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function PersonalDetailPage_ng_container_1_Template_form_ngSubmit_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onsubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "ion-row")(14, "ion-col", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, PersonalDetailPage_ng_container_1_img_15_Template, 1, 0, "img", 107)(16, PersonalDetailPage_ng_container_1_img_16_Template, 1, 1, "img", 108)(17, PersonalDetailPage_ng_container_1_img_17_Template, 1, 1, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "ion-icon", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_Template_ion_icon_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.triggerFileInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div", 18)(20, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function PersonalDetailPage_ng_container_1_Template_input_change_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "ion-col", 111)(22, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "User Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "ion-row")(25, "ion-col", 113)(26, "ion-item", 114)(27, "ion-input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("input", function PersonalDetailPage_ng_container_1_Template_ion_input_input_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "ion-row")(29, "ion-col", 113)(30, "ion-item", 114)(31, "ion-input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("input", function PersonalDetailPage_ng_container_1_Template_ion_input_input_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onInputChange_lastname($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "ion-row")(33, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](34, PersonalDetailPage_ng_container_1_ion_item_34_Template, 2, 1, "ion-item", 117)(35, PersonalDetailPage_ng_container_1_ion_item_35_Template, 2, 1, "ion-item", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](36, PersonalDetailPage_ng_container_1_div_36_Template, 4, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "ion-row")(38, "ion-col", 68)(39, "ion-item", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](40, "ion-input", 120)(41, "img", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "ion-modal", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](43, PersonalDetailPage_ng_container_1_ng_template_43_Template, 2, 2, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "ion-col", 68)(45, "ion-segment", 123)(46, "ion-segment-button", 124)(47, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "ion-segment-button", 125)(50, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "ion-row", 126)(53, "ion-col", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](54, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "ion-col", 129)(56, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](57, "Contact Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "ion-row")(59, "ion-col", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](60, PersonalDetailPage_ng_container_1_ion_item_60_Template, 5, 3, "ion-item", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "ion-col", 132)(62, "ion-item", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](63, "ion-input", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "ion-button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_Template_ion_button_click_64_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.showmobilePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](65, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "ion-row")(67, "ion-col", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](68, PersonalDetailPage_ng_container_1_ion_item_68_Template, 5, 4, "ion-item", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](69, "ion-col", 132)(70, "ion-item", 114)(71, "ion-input", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_1_Template_ion_input_ionChange_71_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.enforceMaxLength($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "ion-row")(73, "ion-col")(74, "ion-item", 136)(75, "ion-label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](76, "Nationality");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](77, "ion-select", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_1_Template_ion_select_ngModelChange_77_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.nationCode1, $event) || (ctx_r1.nationCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_1_Template_ion_select_ionChange_77_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.nationChange(ctx_r1.nationCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](78, PersonalDetailPage_ng_container_1_ion_select_option_78_Template, 2, 2, "ion-select-option", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "ion-row")(80, "ion-col")(81, "ion-item", 136)(82, "ion-label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](83, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](84, "ion-select", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_1_Template_ion_select_ngModelChange_84_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.stateCode1, $event) || (ctx_r1.stateCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_1_Template_ion_select_ionChange_84_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.stateChange(ctx_r1.stateCode1, ctx_r1.nationCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](85, PersonalDetailPage_ng_container_1_ion_select_option_85_Template, 2, 2, "ion-select-option", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](86, "ion-row")(87, "ion-col")(88, "ion-item", 136)(89, "ion-label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](90, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](91, "ion-select", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_1_Template_ion_select_ngModelChange_91_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.cityCode1, $event) || (ctx_r1.cityCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_1_Template_ion_select_ionChange_91_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.cityChange(ctx_r1.cityCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](92, PersonalDetailPage_ng_container_1_ion_select_option_92_Template, 2, 2, "ion-select-option", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](93, "ion-row")(94, "ion-col")(95, "ion-item", 136)(96, "ion-label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](97, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](98, "ion-textarea", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](99, "ion-row")(100, "ion-col")(101, "ion-button", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](102, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](103, PersonalDetailPage_ng_container_1_div_103_Template, 16, 2, "div", 58)(104, PersonalDetailPage_ng_container_1_div_104_Template, 17, 3, "div", 58)(105, PersonalDetailPage_ng_container_1_div_105_Template, 12, 0, "div", 146)(106, PersonalDetailPage_ng_container_1_div_106_Template, 15, 0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r1.formData);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.photo == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.photo != "" && !ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.firstnameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.lastnameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.splitData != "ticketsimply-tmp.com" && ctx_r1.splitData != "ourbus-tmp.in");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.splitData == "ticketsimply-tmp.com" || ctx_r1.splitData == "ourbus-tmp.in");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.idcardDetail != null && ctx_r1.idcardDetail != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.dobField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.titleField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.countryData);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.savedphoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.countryData);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.emergencynoField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.nationCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.nationCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.nationalityData.nationality);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.stateList);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.CityList);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.addressField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.mobileNumberPopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.otpNumberPopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.deactivateNoteModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.deleteNoteModal);
  }
}
function PersonalDetailPage_ng_container_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 208)(1, "div", 93)(2, "div")(3, "ion-label")(4, "div", 209)(5, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Enter New Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "ion-input", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_2_div_7_Template_ion_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.phoneNumber, $event) || (ctx_r1.phoneNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ion-row")(10, "ion-col", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_div_7_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.cancelAllPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "ion-col", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_div_7_Template_ion_col_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.otpnumberPopup(ctx_r1.phoneNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "Send OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.phoneNumber);
  }
}
function PersonalDetailPage_ng_container_2_div_8_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.timerString, " ");
  }
}
function PersonalDetailPage_ng_container_2_div_8_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_div_8_div_13_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r33);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.resendOtp(ctx_r1.phoneNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 208)(1, "div", 93)(2, "div")(3, "ion-label")(4, "div", 209)(5, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Verify OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "ion-row")(9, "ion-col", 214)(10, "ion-input", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_2_div_8_Template_ion_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.numberOTP, $event) || (ctx_r1.numberOTP = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-col", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, PersonalDetailPage_ng_container_2_div_8_span_12_Template, 2, 1, "span", 216)(13, PersonalDetailPage_ng_container_2_div_8_div_13_Template, 2, 0, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "ion-row")(15, "ion-col", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_div_8_Template_ion_col_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.cancelAllPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "ion-col", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_div_8_Template_ion_col_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.verifyotpnumber(ctx_r1.numberOTP));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "VERIFY OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "ion-col", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.numberOTP);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.timerHideShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.resendbutton);
  }
}
function PersonalDetailPage_ng_container_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_div_9_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deactivateNoteModal = !ctx_r1.deactivateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 93)(2, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " Deactivate Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Are you sure, Do you want deactivate your account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "ion-col", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_div_9_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deactivateNoteModal = !ctx_r1.deactivateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "ion-col", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_div_9_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deactivateAccConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
}
function PersonalDetailPage_ng_container_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_div_10_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deleteNoteModal = !ctx_r1.deleteNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 93)(2, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " Delete Request: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Deleting your account will result in the permanent loss of all your account data, including profile information, settings, and any content associated with your account. Once your account is deleted, recovery may not be possible. Be certain of your decision before proceeding. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "br")(7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Are you sure, Do you want delete your account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-col", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_div_10_Template_ion_col_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deleteNoteModal = !ctx_r1.deleteNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "ion-col", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_div_10_Template_ion_col_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deleteAccConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
}
function PersonalDetailPage_ng_container_2_img_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 59);
  }
}
function PersonalDetailPage_ng_container_2_img_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 60);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r1.photo, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function PersonalDetailPage_ng_container_2_img_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 61);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r1.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function PersonalDetailPage_ng_container_2_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-datetime", 62, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_2_ng_template_51_Template_ion_datetime_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r36);
      const popoverDatetime_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.displayMybookings(popoverDatetime_r37 == null ? null : popoverDatetime_r37.value, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.pageDate);
  }
}
function PersonalDetailPage_ng_container_2_ion_item_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-input", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.emailfield);
  }
}
function PersonalDetailPage_ng_container_2_ion_item_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-input", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.emailfield);
  }
}
function PersonalDetailPage_ng_container_2_div_63_ion_row_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 68)(2, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "ion-input", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ion-col", 68)(5, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "ion-input", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", item_r38.id_card_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", item_r38.id_card_no);
  }
}
function PersonalDetailPage_ng_container_2_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "ion-label", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "ID Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, PersonalDetailPage_ng_container_2_div_63_ion_row_3_Template, 7, 2, "ion-row", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.idcardDetail);
  }
}
function PersonalDetailPage_ng_container_2_ion_select_option_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", title_r39.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](title_r39.country);
  }
}
function PersonalDetailPage_ng_container_2_ion_select_option_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", title_r40.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](title_r40.name);
  }
}
function PersonalDetailPage_ng_container_2_ion_select_option_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", title_r41.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](title_r41.name);
  }
}
function PersonalDetailPage_ng_container_2_ion_item_92_ion_badge_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-badge", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_2_ion_item_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_ion_item_92_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r42);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deleteAcc());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "ion-label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Delete Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, PersonalDetailPage_ng_container_2_ion_item_92_ion_badge_4_Template, 2, 0, "ion-badge", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](2, _c0, ctx_r1.is_delete_request));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.is_delete_request);
  }
}
function PersonalDetailPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 178)(3, "ion-buttons", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_Template_ion_buttons_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.goToMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Personal Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, PersonalDetailPage_ng_container_2_div_7_Template, 15, 1, "div", 181)(8, PersonalDetailPage_ng_container_2_div_8_Template, 20, 3, "div", 181)(9, PersonalDetailPage_ng_container_2_div_9_Template, 12, 0, "div", 58)(10, PersonalDetailPage_ng_container_2_div_10_Template, 15, 0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-content", 182)(12, "ion-card")(13, "ion-card-content")(14, "div", 8)(15, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function PersonalDetailPage_ng_container_2_Template_form_ngSubmit_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onsubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 10)(17, "ion-item", 11)(18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, PersonalDetailPage_ng_container_2_img_19_Template, 1, 0, "img", 13)(20, PersonalDetailPage_ng_container_2_img_20_Template, 1, 1, "img", 14)(21, PersonalDetailPage_ng_container_2_img_21_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "div", 16)(23, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_Template_ion_icon_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.triggerFileInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div", 18)(25, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function PersonalDetailPage_ng_container_2_Template_input_change_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "ion-row", 183)(27, "ion-radio-group", 184)(28, "ion-row")(29, "ion-col")(30, "ion-item", 185)(31, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "ion-col")(34, "ion-item", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](35, "ion-radio", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "ion-label", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, " Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "ion-col")(39, "ion-item", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](40, "ion-radio", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "ion-label", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, " Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](44, "ion-input", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](46, "ion-input", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "ion-item", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](48, "img", 194)(49, "ion-input", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "ion-modal", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](51, PersonalDetailPage_ng_container_2_ng_template_51_Template, 2, 1, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "ion-item", 196)(53, "ion-row")(54, "ion-col", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](55, "ion-input", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "ion-col", 106)(57, "ion-button", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_Template_ion_button_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.showmobilePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](58, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](60, "ion-input", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](61, PersonalDetailPage_ng_container_2_ion_item_61_Template, 2, 1, "ion-item", 1)(62, PersonalDetailPage_ng_container_2_ion_item_62_Template, 2, 1, "ion-item", 1)(63, PersonalDetailPage_ng_container_2_div_63_Template, 4, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "ion-item")(65, "ion-label", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](66, "Nationality");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "ion-select", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_2_Template_ion_select_ngModelChange_67_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.nationCode1, $event) || (ctx_r1.nationCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_2_Template_ion_select_ionChange_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.nationChange(ctx_r1.nationCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](68, PersonalDetailPage_ng_container_2_ion_select_option_68_Template, 2, 2, "ion-select-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](69, "ion-item")(70, "ion-label", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](71, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "ion-select", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_2_Template_ion_select_ngModelChange_72_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.stateCode1, $event) || (ctx_r1.stateCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_2_Template_ion_select_ionChange_72_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.stateChange(ctx_r1.stateCode1, ctx_r1.nationCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](73, PersonalDetailPage_ng_container_2_ion_select_option_73_Template, 2, 2, "ion-select-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "ion-item")(75, "ion-label", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](76, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](77, "ion-select", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_2_Template_ion_select_ngModelChange_77_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.cityCode1, $event) || (ctx_r1.cityCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_2_Template_ion_select_ionChange_77_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.cityChange(ctx_r1.cityCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](78, PersonalDetailPage_ng_container_2_ion_select_option_78_Template, 2, 2, "ion-select-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "ion-item")(80, "ion-label", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](81, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](82, "ion-textarea", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](83, "ion-button", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](84, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](85, "ion-card")(86, "ion-card-content", 53)(87, "ion-list", 53)(88, "ion-item", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_Template_ion_item_click_88_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deactivateAcc());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](89, "ion-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](90, "ion-label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](91, "Deactivate Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](92, PersonalDetailPage_ng_container_2_ion_item_92_Template, 5, 4, "ion-item", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.mobileNumberPopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.otpNumberPopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.deactivateNoteModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.deleteNoteModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r1.formData);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.photo && !ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.photo && !ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.titleField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.firstnameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.lastnameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.dobField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.savedphoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.emergencynoField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.splitData != "ticketsimply-tmp.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.splitData == "ticketsimply-tmp.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.idcardDetail != null && ctx_r1.idcardDetail != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.nationCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.nationCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.nationalityData.nationality);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.stateList);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.CityList);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.addressField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](29, _c0, ctx_r1.is_delete_request));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.profileDataGet.hasOwnProperty("is_delete_request"));
  }
}
function PersonalDetailPage_ng_container_3_img_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 59);
  }
}
function PersonalDetailPage_ng_container_3_img_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 60);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r1.photo, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function PersonalDetailPage_ng_container_3_img_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 61);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r1.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function PersonalDetailPage_ng_container_3_ion_row_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-row", 233)(1, "ion-col", 234)(2, "ion-label", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ion-col", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "ion-input", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.emailfield);
  }
}
function PersonalDetailPage_ng_container_3_ion_row_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-row", 233)(1, "ion-col", 234)(2, "ion-label", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ion-col", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "ion-input", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.emailfield);
  }
}
function PersonalDetailPage_ng_container_3_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-datetime", 261, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_3_ng_template_69_Template_ion_datetime_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r44);
      const popoverDatetime_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.displayMybookings(popoverDatetime_r45 == null ? null : popoverDatetime_r45.value, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.pageDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("max", ctx_r1.todayDate);
  }
}
function PersonalDetailPage_ng_container_3_ion_select_option_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", title_r46.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](title_r46.country);
  }
}
function PersonalDetailPage_ng_container_3_ion_select_option_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", title_r47.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](title_r47.name);
  }
}
function PersonalDetailPage_ng_container_3_ion_select_option_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", title_r48.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](title_r48.name);
  }
}
function PersonalDetailPage_ng_container_3_div_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 208)(1, "div", 93)(2, "div")(3, "ion-label")(4, "div", 209)(5, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Enter New Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "ion-input", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_3_div_116_Template_ion_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r49);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.phoneNumber, $event) || (ctx_r1.phoneNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ion-row")(10, "ion-col", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_3_div_116_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r49);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.cancelAllPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "ion-col", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_3_div_116_Template_ion_col_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r49);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.otpnumberPopup(ctx_r1.phoneNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "Send OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.phoneNumber);
  }
}
function PersonalDetailPage_ng_container_3_div_117_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.timerString, " ");
  }
}
function PersonalDetailPage_ng_container_3_div_117_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_3_div_117_div_13_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r51);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.resendOtp(ctx_r1.phoneNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_3_div_117_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 208)(1, "div", 93)(2, "div")(3, "ion-label")(4, "div", 209)(5, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Verify OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "ion-row")(9, "ion-col", 214)(10, "ion-input", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_3_div_117_Template_ion_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r50);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.numberOTP, $event) || (ctx_r1.numberOTP = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-col", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, PersonalDetailPage_ng_container_3_div_117_span_12_Template, 2, 1, "span", 216)(13, PersonalDetailPage_ng_container_3_div_117_div_13_Template, 2, 0, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "ion-row")(15, "ion-col", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_3_div_117_Template_ion_col_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r50);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.cancelAllPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "ion-col", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_3_div_117_Template_ion_col_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r50);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.verifyotpnumber(ctx_r1.numberOTP));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "VERIFY OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "ion-col", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.numberOTP);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.timerHideShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.resendbutton);
  }
}
function PersonalDetailPage_ng_container_3_div_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_3_div_118_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r52);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deactivateNoteModal = !ctx_r1.deactivateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 93)(2, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " Deactivate Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Are you sure, Do you want deactivate your account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "ion-col", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_3_div_118_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r52);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deactivateNoteModal = !ctx_r1.deactivateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "ion-col", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_3_div_118_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r52);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deactivateAccConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
}
function PersonalDetailPage_ng_container_3_div_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_3_div_119_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r53);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deleteNoteModal = !ctx_r1.deleteNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 93)(2, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " Delete Request: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Deleting your account will result in the permanent loss of all your account data, including profile information, settings, and any content associated with your account. Once your account is deleted, recovery may not be possible. Be certain of your decision before proceeding. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "br")(7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Are you sure, Do you want delete your account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-col", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_3_div_119_Template_ion_col_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r53);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deleteNoteModal = !ctx_r1.deleteNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "ion-col", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_3_div_119_Template_ion_col_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r53);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deleteAccConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
}
function PersonalDetailPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-header", 225)(2, "ion-toolbar", 226)(3, "ion-row")(4, "ion-col", 100)(5, "ion-buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-col", 227)(8, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "ion-content", 228)(11, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function PersonalDetailPage_ng_container_3_Template_form_ngSubmit_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onsubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 229)(13, "ion-row", 230)(14, "div", 10)(15, "ion-item", 11)(16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, PersonalDetailPage_ng_container_3_img_17_Template, 1, 0, "img", 13)(18, PersonalDetailPage_ng_container_3_img_18_Template, 1, 1, "img", 14)(19, PersonalDetailPage_ng_container_3_img_19_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 16)(21, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_3_Template_ion_icon_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.triggerFileInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "div", 18)(23, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function PersonalDetailPage_ng_container_3_Template_input_change_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "ion-row")(25, "ion-col", 231)(26, "div", 230)(27, "ion-label", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "ion-row", 233)(33, "ion-col", 234)(34, "ion-label", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "First name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "ion-col", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](37, "ion-input", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "ion-row", 233)(39, "ion-col", 234)(40, "ion-label", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, "Last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "ion-col", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](43, "ion-input", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, PersonalDetailPage_ng_container_3_ion_row_44_Template, 6, 1, "ion-row", 239)(45, PersonalDetailPage_ng_container_3_ion_row_45_Template, 6, 1, "ion-row", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "ion-row", 233)(47, "ion-col", 234)(48, "ion-label", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49, "Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "ion-col", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](51, "ion-input", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "ion-row", 233)(53, "ion-col", 234)(54, "ion-label", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](55, "Emergency Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "ion-col", 236)(57, "ion-input", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionInput", function PersonalDetailPage_ng_container_3_Template_ion_input_ionInput_57_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.restrictToTenDigits($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "ion-row", 242)(59, "ion-col", 234)(60, "ion-label", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](61, "Date of birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "ion-col", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](63, "ion-input", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "span", 244)(65, "ion-label", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](66, "ion-icon", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](67, "\u00A0Select date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](68, "ion-modal", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](69, PersonalDetailPage_ng_container_3_ng_template_69_Template, 2, 2, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](70, "ion-row", 233)(71, "ion-col", 234)(72, "ion-label", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](73, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "ion-col", 236)(75, "ion-radio-group", 247)(76, "ion-list", 248)(77, "ion-item", 249)(78, "ion-label", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](79, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](80, "ion-radio", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](81, "ion-item", 249)(82, "ion-label", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](83, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](84, "ion-radio", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](85, "ion-row", 233)(86, "ion-col", 234)(87, "ion-label", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](88, "Nationality");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](89, "ion-col", 236)(90, "ion-select", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_3_Template_ion_select_ngModelChange_90_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.nationCode1, $event) || (ctx_r1.nationCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_3_Template_ion_select_ionChange_90_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.nationChange(ctx_r1.nationCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](91, PersonalDetailPage_ng_container_3_ion_select_option_91_Template, 2, 2, "ion-select-option", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](92, "ion-row", 233)(93, "ion-col", 234)(94, "ion-label", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](95, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](96, "ion-col", 236)(97, "ion-select", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_3_Template_ion_select_ngModelChange_97_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.stateCode1, $event) || (ctx_r1.stateCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_3_Template_ion_select_ionChange_97_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.stateChange(ctx_r1.stateCode1, ctx_r1.nationCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](98, PersonalDetailPage_ng_container_3_ion_select_option_98_Template, 2, 2, "ion-select-option", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](99, "ion-row", 233)(100, "ion-col", 234)(101, "ion-label", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](102, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](103, "ion-col", 236)(104, "ion-select", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_3_Template_ion_select_ngModelChange_104_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.cityCode1, $event) || (ctx_r1.cityCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_3_Template_ion_select_ionChange_104_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.cityChange(ctx_r1.cityCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](105, PersonalDetailPage_ng_container_3_ion_select_option_105_Template, 2, 2, "ion-select-option", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](106, "ion-row", 256)(107, "ion-col", 234)(108, "ion-label", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](109, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](110, "ion-col", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](111, "ion-textarea", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](112, "ion-row")(113, "ion-col")(114, "ion-button", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](115, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](116, PersonalDetailPage_ng_container_3_div_116_Template, 15, 1, "div", 181)(117, PersonalDetailPage_ng_container_3_div_117_Template, 20, 3, "div", 181)(118, PersonalDetailPage_ng_container_3_div_118_Template, 12, 0, "div", 58)(119, PersonalDetailPage_ng_container_3_div_119_Template, 15, 0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r1.formData);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.photo && !ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.photo && !ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.firstnameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.savedphoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.firstnameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.lastnameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.splitData != "ticketsimply-tmp.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.splitData == "ticketsimply-tmp.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.savedphoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.emergencynoField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.dobField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.titleField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.nationCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.nationCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.nationalityData.nationality);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.stateList);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.CityList);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r1.addressField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.mobileNumberPopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.otpNumberPopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.deactivateNoteModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.deleteNoteModal);
  }
}
class PersonalDetailPage {
  constructor(platform, authenticate, navCtrl, commonStorage, apiFactory, dateService, formBuilder, sanitizer, util, commonService, alertController, router, route, globalData, modalController, appData,
  // private iab: InAppBrowser,
  loader, modalCtrl, location) {
    this.platform = platform;
    this.authenticate = authenticate;
    this.navCtrl = navCtrl;
    this.commonStorage = commonStorage;
    this.apiFactory = apiFactory;
    this.dateService = dateService;
    this.formBuilder = formBuilder;
    this.sanitizer = sanitizer;
    this.util = util;
    this.commonService = commonService;
    this.alertController = alertController;
    this.router = router;
    this.route = route;
    this.globalData = globalData;
    this.modalController = modalController;
    this.appData = appData;
    this.loader = loader;
    this.modalCtrl = modalCtrl;
    this.location = location;
    this.metaData = {};
    this.appUrl = '';
    this.read = "readonly";
    this.mobileNumberPopup = false;
    this.otpNumberPopup = false;
    this.otpNotification = false;
    this.photo = '';
    this.deactivateNoteModal = false;
    this.deleteNoteModal = false;
    this.object = Object;
    this.submit_data = {
      auth_token: '',
      phone_no: null
    };
    this.profileDataGet = {};
    this.resendbutton = false;
    this.verifyotpdata = {
      auth_token: '',
      phone_no: '',
      otp: '',
      key: ''
    };
    this.editmodeActive = false;
    this.whatsAppPopup = false;
    this.timerString = "";
    this.m = '';
    this.s = '';
    this.timerHideShow = false;
    this.saveFormdata = {
      auth_token: '',
      title: null,
      name: null,
      last_name: null,
      dob: null,
      emergency_phone: null,
      id_card_id: null,
      nationality_id: null,
      state_code: null,
      city_id: null,
      address: null
    };
    this.images = {
      name: '',
      path: '',
      filePath: ''
    };
    this.editPic = false;
    this.is_delete_request = false;
    this.pageDate = '';
    this.mineDisplaydate = [];
    this.selectedDate = '';
    this.profileImage = null; // Preview image
    this.selectedFile = null; // Selected file
    this.today = new Date();
    this.todayDate = this.today.toISOString().split('T')[0];
    const yyyy = this.today.getFullYear();
    const threeYearsAgo = new Date(this.today.getFullYear() - 3, this.today.getMonth(), this.today.getDate());
    this.maxDate = threeYearsAgo.toISOString().split('T')[0];
    let mm = this.today.getMonth() + 1; // Months start at 0!
    let dd = this.today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    this.today = yyyy + '-' + mm + '-' + dd;
    this.metaData = this.commonStorage.getItem('metaData');
    this.logo = this.commonStorage.getItem("metaData").headerLogo;
    this.nationalityData = this.commonStorage.getItem('locale');
    this.validations();
    this.phoneNumCount = this.commonStorage.localGet('metaData').phoneNumCount;
    this.nationChange(this.commonStorage.localGet("statedata"));
  }
  formdetailsSet(profileDataGet) {
    setTimeout(() => {
      this.titleField = profileDataGet ? profileDataGet ? profileDataGet.title : "" : "";
      this.firstnameField = profileDataGet ? profileDataGet.first_name : "";
      this.lastnameField = profileDataGet ? profileDataGet.last_name : "";
      this.dobField = profileDataGet ? profileDataGet.dob : "";
      this.savedphoneNumber = profileDataGet ? profileDataGet.mobile_number : "";
      this.emergencynoField = profileDataGet ? profileDataGet.emergency_phone : "";
      this.emailfield = profileDataGet ? profileDataGet.email : "";
      this.idcardDetail = profileDataGet ? profileDataGet.id_card_details : "";
      this.addressField = profileDataGet ? profileDataGet.address : "";
      this.photo = profileDataGet ? profileDataGet.profile_pic : "";
      if (this.photo == '') {
        this.editPic = true;
      }
      this.cityName = profileDataGet ? profileDataGet.city : "";
      this.stateName = profileDataGet ? profileDataGet.state : "";
      this.countryName = profileDataGet ? profileDataGet.nationality : "";
      this.nationCode1 = this.nationCode;
      this.stateCode1 = this.stateCode;
      this.cityCode1 = this.cityCode;
      this.splitData = this.emailfield.split('@')[1];
      this.firstData = this.emailfield.slice(0, 4);
      if (this.splitData == 'ticketsimply-tmp.com' || this.splitData == 'ourbus-tmp.in') {
        this.emailfield = this.formData.value.email;
      }
    }, 100);
  }
  ionViewDidEnter() {
    this.loader.showLoadingDefault();
    this.apiFactory.getprofileData().subscribe(resultData => {
      this.profileDataGet = resultData;
      this.nationCode = this.profileDataGet ? this.profileDataGet.nationality_id : "";
      this.stateCode = this.profileDataGet ? this.profileDataGet.state_code : "";
      this.cityCode = this.profileDataGet ? this.profileDataGet.city_id : "";
      this.commonStorage.localSet("forcitydata", this.stateCode);
      this.is_delete_request = this.profileDataGet.is_delete_request;
      this.loader.hideLoadingDefault();
      this.formdetailsSet(this.profileDataGet);
    }, err => {
      this.loader.hideLoadingDefault();
    });
  }
  ngOnInit() {
    this.appData.newTheme = this.util.getNewTheme();
    this.countryData = _countries_countries_json__WEBPACK_IMPORTED_MODULE_1__;
    this.countryData = this.countryData.filter(country => country.dialCode === '+91');
  }
  validations() {
    this.formData = this.formBuilder.group({
      titlesex: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl(),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl(),
      lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl(),
      dateofbirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl(),
      emergencyPhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl(),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl(),
      id_card_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl(),
      id_card_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl(),
      country: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl(),
      state: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl(),
      city: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl(),
      address: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl()
    });
  }
  onsubmit() {
    var _this$idcardDetail;
    this.updateFormData = {
      "auth_token": this.authenticate.token,
      "title": this.formData.value.titlesex ? this.formData.value.titlesex : this.titleField,
      "name": this.formData.value.name ? this.formData.value.name : this.firstnameField,
      "last_name": this.formData.value.lastName ? this.formData.value.lastName : this.lastnameField,
      "dob": this.formData.value.dateofbirth ? this.formData.value.dateofbirth : this.dobField,
      "emergency_phone": this.formData.value.emergencyPhoneNumber ? this.formData.value.emergencyPhoneNumber : this.emergencynoField,
      "id_card_id": this.formData.value.id_card_number ? this.formData.value.id_card_number : (_this$idcardDetail = this.idcardDetail) === null || _this$idcardDetail === void 0 ? void 0 : _this$idcardDetail.id_card_id,
      "nationality_id": this.formData.value.country ? this.formData.value.country : this.profileDataGet.nationality_id,
      "state_code": this.formData.value.state ? this.formData.value.state : this.profileDataGet.state_code,
      "city_id": this.formData.value.city ? this.formData.value.city : this.profileDataGet.city_id,
      "address": this.formData.value.address ? this.formData.value.address : this.profileDataGet.address,
      "email": this.formData.value.email ? this.formData.value.email : this.profileDataGet.email
    };
    this.apiFactory.updateAllData(this.updateFormData).subscribe(data => {
      if (data.code == 200) {
        this.util.showToast(data.message, 'bottom');
        const background = Array.from(document.getElementsByClassName('rectangle-box'));
        background.forEach(element => {
          element.style.background = '#f3f3f3';
        });
        localStorage.setItem('savedformData', JSON.stringify(this.updateFormData));
        this.navCtrl.navigateForward('/tabs/more');
      } else {
        this.util.showToast(data.message, 'bottom');
      }
    }, error => {
      this.util.showToast(error, 'bottom');
    });
  }
  onInputChange(ev) {
    const input = ev.target;
    let value = input.value;
    let name = '';
    name = value;
    name = name.replace(/[^A-Za-z\s]/g, '');
    this.formData.controls['name'].setValue(name);
  }
  onInputChange_lastname(ev) {
    const input = ev.target;
    let value = input.value;
    let name = '';
    name = value;
    name = name.replace(/[^A-Za-z\s]/g, '');
    this.formData.controls['lastName'].setValue(name);
  }
  showmobilePopup() {
    if (this.metaData.msiteFolder == 'ourbustheme') {
      this.numberOTP = '';
    }
    this.mobileNumberPopup = !this.mobileNumberPopup;
    if (this.mobileNumberPopup == true) {
      const background = Array.from(document.getElementsByClassName('rectangle-box'));
      background.forEach(element => {
        element.style.background = '#9b9b9b8c';
      });
      const formcontrol = Array.from(document.getElementsByClassName('myformControls'));
      formcontrol.forEach(element => {
        element.setAttribute("style", "--background: '#9b9b9b8c';");
      });
    } else if (this.mobileNumberPopup == false && this.editmodeActive == false) {
      const background = Array.from(document.getElementsByClassName('rectangle-box'));
      background.forEach(element => {
        element.style.background = '#f3f3f3';
      });
    } else if (this.mobileNumberPopup == false && this.editmodeActive == true) {
      const test = Array.from(document.getElementsByClassName('ionInputText'));
      test.forEach(element => {
        element.setAttribute("readonly", "false");
      });
      const backgroundc = Array.from(document.getElementsByClassName('rectangle-box'));
      backgroundc.forEach(element => {
        element.style.background = 'white';
      });
      const formcontrol = Array.from(document.getElementsByClassName('myformControls'));
      formcontrol.forEach(element => {
        element.setAttribute("style", "--background: 'white';");
      });
    }
  }
  cancelAllPopup() {
    this.mobileNumberPopup = false;
    this.resendbutton = false;
    this.otpNumberPopup = false;
    if (this.mobileNumberPopup == false && this.editmodeActive == false) {
      const background = Array.from(document.getElementsByClassName('rectangle-box'));
      background.forEach(element => {
        element.style.background = '#f3f3f3';
      });
    } else if (this.mobileNumberPopup == false && this.editmodeActive == true) {
      const test = Array.from(document.getElementsByClassName('ionInputText'));
      test.forEach(element => {
        element.setAttribute("readonly", "false");
      });
      const backgroundc = Array.from(document.getElementsByClassName('rectangle-box'));
      backgroundc.forEach(element => {
        element.style.background = 'white';
      });
      const formcontrol = Array.from(document.getElementsByClassName('myformControls'));
      formcontrol.forEach(element => {
        element.setAttribute("style", "--background: 'white';");
      });
    }
  }
  resendOtp(phoneNumber) {
    this.submit_data = {
      "auth_token": this.authenticate.token,
      "phone_no": phoneNumber
    };
    this.apiFactory.updatePhoneNumber(this.submit_data).subscribe(data => {
      this.otpInformation = data;
      if ('otp' in this.otpInformation) {
        this.mobileNumberPopup = false;
        this.otpNumberPopup = true;
        this.otpNotification = true;
        this.resendbutton = false;
        this.timerHideShow = true;
        this.timer(59);
      } else {
        this.util.showToast(data.message, 'bottom');
      }
    }, error => {
      this.util.showToast(error, 'bottom');
    });
  }
  timer(remaining) {
    let m = Math.floor(remaining / 60);
    let s = remaining % 60;
    if (this.metaData.msiteFolder == 'ourbustheme') {
      const mFormatted = m < 10 ? '0' + m : m;
      const sFormatted = s < 10 ? '0' + s : s;
      this.timerString = `${mFormatted}:${sFormatted}`;
    } else {
      this.m = m < 10 ? '0' + m : m;
      this.s = s < 10 ? '0' + s : s;
      this.timerString = m + ':' + s;
    }
    remaining -= 1;
    if (remaining >= 0) {
      this.timeoutId = setTimeout(() => {
        this.timer(remaining);
      }, 1000);
      return;
    } else {
      this.timerHideShow = false;
      this.resendbutton = true;
    }
  }
  otpnumberPopup(number) {
    this.submit_data = {
      "auth_token": this.authenticate.token,
      "phone_no": number
    };
    this.apiFactory.updatePhoneNumber(this.submit_data).subscribe(data => {
      this.otpInformation = data;
      if ('otp' in this.otpInformation) {
        this.timerHideShow = true;
        this.timer(59);
        this.mobileNumberPopup = false;
        this.otpNumberPopup = !this.otpNumberPopup;
        const formcontrol = Array.from(document.getElementsByClassName('phone-block-popup'));
        formcontrol.forEach(element => {
          element.setAttribute("style", "height: 70%;");
        });
        this.util.showToast('Please enter the OTP which has been sent to the Mobile Number!', 'bottom');
      } else {
        this.util.showToast(data.message, 'bottom');
      }
    }, error => {
      this.util.showToast(error, 'bottom');
    });
  }
  topTimer() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId); // Cancel the timeout
      this.timeoutId = null; // Reset the timeout ID
    }
  }
  verifyotpnumber(otp) {
    this.verifyotpdata = {
      "auth_token": this.authenticate.token,
      "phone_no": this.phoneNumber,
      "otp": otp,
      "key": this.otpInformation.key
    };
    this.apiFactory.verifyOTP(this.verifyotpdata).subscribe(data => {
      this.topTimer();
      if (data.code != 200) {
        this.util.showToast(data.message, 'bottom');
      } else if (data.code == 200) {
        this.cancelAllPopup();
        this.savedphoneNumber = this.phoneNumber;
        localStorage.setItem('savedphone', this.savedphoneNumber);
        this.util.showToast(data.message, 'bottom');
      }
    }, error => {
      this.util.showToast(error, 'bottom');
    });
  }
  nationChange(nation) {
    this.apiFactory.getStateList(nation).subscribe(result => {
      this.stateList = result.states;
      if (result.code == 200) {
        this.stateChange(this.commonStorage.localGet("forcitydata"), nation);
      }
    }, err => {});
  }
  stateChange(state, nation) {
    this.apiFactory.getCityList(state, nation).subscribe(result => {
      this.CityList = result.city;
      if (result.code == 200) {
        this.cityChange(this.cityCode);
      }
    }, err => {});
  }
  cityChange(city) {}
  deactivateAcc() {
    if (!this.is_delete_request) {
      this.deactivateNoteModal = true;
    }
  }
  deactivateAccConfirm() {
    this.apiFactory.deactivateConsumerStatus(this.authenticate.token, '2').subscribe(res => {
      if (res.code == 200) {
        this.authenticate.logout();
        this.util.showToast(res.message);
        this.navCtrl.navigateForward('tabs/home');
      } else {
        this.util.showToast(res.message);
      }
    }, err => {});
  }
  deleteAcc() {
    if (!this.is_delete_request) {
      this.deleteNoteModal = true;
    }
  }
  deleteAccConfirm() {
    let path = '?authentication_token=' + this.authenticate.token;
    this.apiFactory.deleteConsumerStatus(path).subscribe(res => {
      if (res.code == 200) {
        this.presentAlert('', res.message);
      } else {
        this.util.showToast(res.message);
      }
    }, err => {});
  }
  presentAlert(title, msg) {
    var _this = this;
    return (0,_Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: title,
        message: msg,
        backdropDismiss: false,
        buttons: [{
          text: 'Ok',
          handler: () => {
            window.location.reload();
          }
        }]
      });
      yield alert.present();
    })();
  }
  enforceMaxLength(event) {
    const input = event.target;
    let sanitizedValue = input.value.replace(/[^0-9]/g, '');
    sanitizedValue = sanitizedValue.slice(0, 10);
    input.value = sanitizedValue;
    const trimmedValue = parseInt(input.value, 10).toString();
    if (trimmedValue == '0') {
      input.value = '';
      return;
    }
  }
  enforceMaxLengthOtp(event) {
    const input = event.target;
    let sanitizedValue = input.value.replace(/[^0-9]/g, '');
    sanitizedValue = sanitizedValue.slice(0, 6);
    input.value = sanitizedValue;
  }
  goToMore() {
    this.navCtrl.navigateForward('tabs/more');
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
      this.pageDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.format)(newDate, 'yyyy-MM-dd');
      if (this.metaData.msiteFolder == 'ourbustheme') {
        this.dobField = (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.format)(newDate, 'dd/MM/yyyy');
        this.formData.controls['dateofbirth'].setValue(this.dobField);
      } else {
        this.dobField = (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.format)(newDate, 'dd-MM-yyyy');
        this.formData.controls['dateofbirth'].setValue(this.dobField);
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
  checkclick() {
    this.cancelAllPopup();
  }
  stopClose(event) {
    event.stopPropagation();
  }
  onDateSelected(event) {
    let dateObj = new Date(event.detail.value);
    const result = this.dateService.formattedDateData(dateObj);
    this.dobField = result.formattedBirthDate;
  }
  handleBackButton() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['tabs/home']);
    }
  }
  restrictToTenDigits(event) {
    const input = event.target.value;
    if (input.length > 10) {
      var _this$formData$get;
      event.target.value = input.slice(0, 10);
      (_this$formData$get = this.formData.get('emergencyPhoneNumber')) === null || _this$formData$get === void 0 || _this$formData$get.setValue(input.slice(0, 10));
    }
  }
  onFileSelected(event) {
    const fileInput = event.target;
    if (fileInput.files && fileInput.files[0]) {
      this.selectedFile = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        var _e$target$result, _e$target;
        this.profileImage = (_e$target$result = (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.result) !== null && _e$target$result !== void 0 ? _e$target$result : null;
      };
      reader.readAsDataURL(this.selectedFile);
      this.uploadProfileImage();
    }
  }
  triggerFileInput() {
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
  }
  uploadProfileImage() {
    if (!this.selectedFile) {
      return;
    }
    this.loader.showLoadingDefault();
    this.apiFactory.updateProfileImage(this.selectedFile).subscribe(res => {
      if (res.code == '200') {
        this.util.showToast(res.message);
        this.loader.hideLoadingDefault();
      } else {
        this.loader.hideLoadingDefault();
        this.photo = this.photo;
        this.profileImage = '';
        this.util.showToast(res.message);
      }
    }, err => {
      this.loader.hideLoadingDefault();
    });
  }
}
_PersonalDetailPage = PersonalDetailPage;
_PersonalDetailPage.ɵfac = function PersonalDetailPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PersonalDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_3__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_4__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_5__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_6__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_8__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_9__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_10__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_18__.Location));
};
_PersonalDetailPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: _PersonalDetailPage,
  selectors: [["app-personal-detail"]],
  standalone: false,
  decls: 4,
  vars: 4,
  consts: [["popoverDatetime", ""], [4, "ngIf"], [1, "ion-no-border", "theme1"], ["mode", "md", 1, "themeone-bg-cl", 2, "--border-width", "0px"], [1, "themeone-head", 2, "margin-right", "40px"], ["slot", "start"], [2, "color", "#333333"], [1, "themeone-bg-content", "theme1", 2, "--offset-top", "1px !important", "z-index", "inherit"], [1, "center-div"], [1, "profileForm", 3, "ngSubmit", "formGroup"], [2, "width", "-webkit-fill-available", "display", "flex", "justify-content", "center", "align-items", "center"], ["lines", "none", 1, "themeone-ion-item", 2, "--padding-start", "8px"], [1, "photoButton", 2, "text-align", "center", "height", "124px", "width", "124px"], ["src", "./assets/icon/themeone-profileimg.svg", "class", "icon-img", "style", "height: 124px;width: 124px; border-radius: 50%;", "item-start", "", "alt", "Default Profile Image", 4, "ngIf"], ["class", "icon-img", "style", "height: 124px;width: 124px; border-radius: 50%;", "item-start", "", "alt", "User Photo", 3, "src", 4, "ngIf"], ["class", "icon-img", "style", "height: 124px;width: 124px; border-radius: 50%;", "item-start", "", "alt", "Profile Image", 3, "src", 4, "ngIf"], [1, "upload-icon", 2, "background-color", "var(--homaPageHeadingTextColor)"], ["src", "./assets/icon/ourbus_edit_pencil.svg", "size", "large", 2, "height", "20px", "margin-top", "4px", "filter", "invert(1) brightness(2)", 3, "click"], [1, "profile-container"], ["type", "file", "accept", "image/*", "id", "fileInput", "hidden", "", 3, "change"], [2, "width", "-webkit-fill-available", "display", "grid", "justify-content", "center", "text-align", "center"], [1, "themeone_namelbl", 2, "padding", "5px 0px 8px 0px"], [1, "themeone_mobilelbl"], [1, "themeone-ion-item"], ["label", "Name", "labelPlacement", "floating", "type", "text", "formControlName", "name", 1, "themeone-input-text", "themeone-txt-lbl", 3, "value"], ["label", "Last Name", "labelPlacement", "floating", "type", "text", "formControlName", "lastName", 1, "themeone-input-text", "themeone-txt-lbl", 3, "value"], ["tappable", "", "id", "open-date-input-6", 1, "themeone-ion-item"], ["src", "././assets/icon/calendar-2-line.svg", "alt", "", "slot", "end", 2, "margin-top", "auto"], ["label", "Date of birth", "labelPlacement", "floating", "type", "text", "formControlName", "dateofbirth", 1, "themeone-txt-lbl", "txt-lbl", 2, "font-size", "12px", 3, "value"], ["trigger", "open-date-input-6"], ["tappable", "", 1, "themeone-ion-item"], [2, "width", "100%"], ["size", "9", 2, "padding-left", "0px"], ["label", "Phone Number", "labelPlacement", "floating", "type", "tel", "readonly", "", 1, "themeone-txt-lbl", "themeone-input-text", 2, "--padding-top", "8px", "--padding-bottom", "8px", 3, "value"], ["size", "3", 2, "display", "grid"], [1, "themeone-btnEdit", 2, "--background", "#191966", "--color", "#fff", "margin-top", "22px", "margin-bottom", "0px", 3, "click"], ["label", "Emergency Phone", "labelPlacement", "floating", "type", "tel", "formControlName", "emergencyPhoneNumber", "oninput", "value = value.replace(/[^0-9.]/g, '').replace(/(\\..*?)\\..*/g, '$1');", 1, "themeone-input-text", "themeone-txt-lbl", 2, "margin-bottom", "9px", 3, "ionInput", "value"], ["class", "themeone-ion-item", 4, "ngIf"], ["style", "background-color: #f1f1f1;", 4, "ngIf"], [2, "font-size", "12px", "color", "#5F5F5F", "padding-bottom", "10px", "margin-left", "12px", "margin-top", "19px", "font-weight", "bold"], [2, "padding-bottom", "5px", "margin-left", "12px"], [1, "themeone-seg-btn"], ["formControlName", "titlesex", "mode", "md", 1, "tabs", 3, "value"], ["value", "Mr", 1, "segone"], ["value", "Ms", 1, "segtwo"], ["position", "floating", 1, "themeone-txt-lbl", 2, "font-size", "12px"], ["color", "red", "interface", "popover eeee", "placeholder", "Select Country", "formControlName", "country", 1, "themeone-input-text", "themeone-inputselect", 3, "ngModelChange", "ionChange", "value", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "stateSelection", "color", "red", "interface", "popover eeee", "placeholder", "Select State", "formControlName", "state", 1, "themeone-input-text", "themeone-inputselect", 3, "ngModelChange", "ionChange", "value", "ngModel"], ["id", "citySelection", "color", "red", "interface", "popover eeee", "placeholder", "Select City", "formControlName", "city", "label", "City", "label-placement", "floating", 1, "themeone-input-text", "themeone-inputselect", 3, "ngModelChange", "ionChange", "value", "ngModel"], ["position", "floating", 1, "themeone-txt-lbl"], ["formControlName", "address", 1, "themeone-input-text", 3, "value"], ["mode", "md", "expand", "block", "type", "submit", 1, "themeone-login-btn"], [2, "padding", "0px"], [3, "click", "ngClass"], ["name", "star", "src", "././assets/icon/deactivate.svg", 1, "custom-icon"], [2, "font-size", "12px", "padding-left", "10px"], [3, "ngClass", "click", 4, "ngIf"], ["class", "whole center", 3, "click", 4, "ngIf"], ["src", "./assets/icon/themeone-profileimg.svg", "item-start", "", "alt", "Default Profile Image", 1, "icon-img", 2, "height", "124px", "width", "124px", "border-radius", "50%"], ["item-start", "", "alt", "User Photo", 1, "icon-img", 2, "height", "124px", "width", "124px", "border-radius", "50%", 3, "src"], ["item-start", "", "alt", "Profile Image", 1, "icon-img", 2, "height", "124px", "width", "124px", "border-radius", "50%", 3, "src"], ["mode", "md", "show-default-buttons", "true", "done-text", "Ok", "presentation", "date", "showDefaultTitle", "true", 3, "ionChange", "value"], ["label", "Email", "labelPlacement", "floating", "type", "email", "formControlName", "email", "readonly", "", 1, "themeone-input-text", "themeone-txt-lbl", 3, "value"], ["label", "Email", "labelPlacement", "floating", "type", "email", "formControlName", "email", 1, "themeone-input-text", "themeone-txt-lbl", 3, "value"], [2, "background-color", "#f1f1f1"], ["position", "floating", 1, "themeone-txt-lbl", 2, "margin-left", "17px", "font-size", "10px"], [4, "ngFor", "ngForOf"], ["size", "6"], ["label", "ID Type", "labelPlacement", "floating", "type", "text", "readonly", "", 1, "themeone-input-text", "themeone-txt-lbl", 3, "value"], ["label", "ID No.", "labelPlacement", "floating", "type", "text", "readonly", "", 1, "themeone-input-text", "themeone-txt-lbl", 3, "value"], [3, "value"], ["name", "close-circle-outline", "color", "#afafaf"], ["slot", "end", "color", "danger", 4, "ngIf"], ["slot", "end", "color", "danger"], [1, "whole", "center", 3, "click"], [1, "themeone-legend-box", 3, "click"], [1, "themepersonal-text", 2, "font-weight", "bolder"], [2, "padding", "15px 0px"], ["position", "floating"], ["label", "Mobile Number", "labelPlacement", "floating", "required", "", "type", "text", "size", "10", "maxlength", "10", "oninput", "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*?)\\..*/g, '$1');", "value", "Samarpit", 3, "ngModelChange", "ngModel"], ["size", "4"], ["size", "4", 1, "brws-txt", 2, "font-size", "14px", "color", "#333", "text-align", "right"], ["size", "4", 1, "dwn-txt", 2, "font-size", "14px", "color", "#191966", 3, "click"], ["size", "9", 2, "padding", "0"], ["required", "", "type", "text", "size", "6", "maxlength", "6", "oninput", "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*?)\\..*/g, '$1');", "placeholder", "Enter OTP", 2, "border-bottom", "1px solid #bbbaba", "border-radius", "3px", 3, "ngModelChange", "ngModel"], ["size", "3", 2, "padding", "0", "text-align", "center"], ["id", "timer", "style", "    vertical-align: -webkit-baseline-middle;", 4, "ngIf"], ["size", "2", "class", "dwn-txt", "style", "    text-align: center;\n            font-size: 14px;", 3, "click", 4, "ngIf"], ["size", "3"], ["size", "5", 1, "dwn-txt", 2, "font-size", "14px", "color", "#191966", 3, "click"], ["id", "timer", 2, "vertical-align", "-webkit-baseline-middle"], ["size", "2", 1, "dwn-txt", 2, "text-align", "center", "font-size", "14px", 3, "click"], [1, "legend-box"], [1, "txt-msg-hd"], [1, "txt-msg1"], ["size", "4", 1, "brws-txt1", 3, "click"], ["size", "4", 1, "dwn-txt", 3, "click"], [1, "ourbustheme"], ["mode", "md", 2, "padding", "8px"], ["size", "2", 2, "display", "flex"], [3, "click"], ["size", "7", 2, "display", "flex", "align-items", "center", "justify-content", "center"], [1, "editProfile"], [1, "ourbustheme", 2, "--background", "white"], [2, "padding", "16px 16px 8px"], ["size", "2"], ["src", "./assets/icon/ourbus_profile.svg", "class", "icon-img", "style", "width: 50px;height: 50px;border-radius: 100px;", "item-start", "", 4, "ngIf"], ["class", "icon-img", "style", "width: 50px;height: 50px;border-radius: 100px;", "item-start", "", 3, "src", 4, "ngIf"], ["class", "icon-img", "style", "height: 50px;width: 50px; border-radius: 50%;", "item-start", "", "alt", "Profile Image", 3, "src", 4, "ngIf"], ["src", "./assets/icon/ourbus_edit_pencil.svg", "size", "large", 2, "height", "20px", "width", "20px", "position", "absolute", "bottom", "6px", "right", "-2px", 3, "click"], ["size", "10", 2, "margin-top", "auto", "margin-bottom", "auto"], [1, "textSet"], ["size", "12"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input"], ["label", "First Name", "labelPlacement", "floating", "type", "text", "fill", "outline", "formControlName", "name", "maxlength", "25", "placeholder", "Enter first name", 1, "ourbus_inputText", "ourbus_labelSet", 3, "input", "value"], ["label", "Last Name", "labelPlacement", "floating", "type", "text", "fill", "outline", "formControlName", "lastName", "maxlength", "25", "placeholder", "Enter last name", 1, "ourbus_inputText", "ourbus_labelSet", 3, "input", "value"], ["lines", "none", "mode", "md", 4, "ngIf"], ["lines", "none", "mode", "md", "class", "ourbus_custom_input", 4, "ngIf"], ["lines", "none", "mode", "md", "id", "open-date-input-3", 1, "ourbus_custom_input"], ["fill", "outline", "label", "DOB", "labelPlacement", "floating", "type", "text", "formControlName", "dateofbirth", 1, "ourbus_inputText", "ourbus_labelSet", 2, "margin-top", "8px", 3, "value"], ["src", "./assets/icon/Calendar copy.svg", "alt", "", "slot", "end", 2, "margin", "0px"], ["trigger", "open-date-input-3"], ["mode", "ios", "formControlName", "titlesex", 2, "height", "68px", 3, "value"], ["value", "Mr", 1, "ourbus_segment"], ["value", "Ms"], [2, "margin", "16px 0px", "display", "flex", "align-items", "center"], ["size", "1"], ["src", "././assets/icon/ourbusPhone.svg", "alt", "", 2, "margin", "0px"], ["size", "11"], ["size", "3.5"], ["lines", "none", "mode", "md", "class", "ourbus_custom_input ourbus_item_outline", "style", "margin-top: 7px !important;", 4, "ngFor", "ngForOf"], ["size", "8.5"], ["fill", "outline", "label", "Phone Number", "labelPlacement", "floating", "placeholder", "Enter phone number", "type", "number", "readonly", "", 1, "ourbus_inputText", "ourbus_labelSet", 3, "value"], ["slot", "end", 1, "btnEdit", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", "margin-top", "auto", "margin-bottom", "auto", 3, "click"], ["fill", "outline", "label", "Emergency Phone", "labelPlacement", "floating", "type", "tel", "maxlength", "10", "formControlName", "emergencyPhoneNumber", "placeholder", "Enter emergency phone", 1, "ourbus_inputText", "ourbus_labelSet", 2, "margin-left", "0px !important", 3, "ionChange", "value"], ["fill", "outline", "mode", "md", 1, "ourbus_custom_input"], ["position", "floating", 1, "ourbus_labelSet", "ourbus_label_select"], ["color", "red", "placeholder", "Select Country", "formControlName", "country", "interface", "popover", 1, "ourbus_ionselect_center", 3, "ngModelChange", "ionChange", "value", "ngModel"], ["class", "ourbus_inputText", 3, "value", 4, "ngFor", "ngForOf"], ["id", "stateSelection", "color", "red", "placeholder", "Select State", "formControlName", "state", "interface", "popover", 1, "ourbus_ionselect_center", "always-flip", 3, "ngModelChange", "ionChange", "value", "ngModel"], ["class", "ourbus_inputText", "style", "--width: 90%;--max-width:90%;", 3, "value", 4, "ngFor", "ngForOf"], ["id", "citySelection", "color", "red", "interface", "popover", "placeholder", "Select City", "formControlName", "city", 1, "ourbus_ionselect_center", "always-flip", 3, "ngModelChange", "ionChange", "value", "ngModel"], ["position", "floating", 1, "ourbus_labelSet"], ["formControlName", "address", 1, "ourbus_inputText", 3, "value"], ["mode", "md", "expand", "block", "type", "submit", 1, "login-btn1"], ["class", "whole center ourbustheme", 3, "click", 4, "ngIf"], ["src", "./assets/icon/ourbus_profile.svg", "item-start", "", 1, "icon-img", 2, "width", "50px", "height", "50px", "border-radius", "100px"], ["item-start", "", 1, "icon-img", 2, "width", "50px", "height", "50px", "border-radius", "100px", 3, "src"], ["item-start", "", "alt", "Profile Image", 1, "icon-img", 2, "height", "50px", "width", "50px", "border-radius", "50%", 3, "src"], ["lines", "none", "mode", "md"], ["fill", "outline", "label", "Email", "labelPlacement", "floating", "type", "email", "maxlength", "50", "placeholder", "Enter email id", "formControlName", "email", "readonly", "", 1, "ourbus_inputText_disable", "ourbus_labelSet", 3, "value"], ["fill", "outline", "label", "Email", "labelPlacement", "floating", "type", "email", "placeholder", "Enter email id", "maxlength", "50", "formControlName", "email", 1, "ourbus_inputText", "ourbus_labelSet", 3, "value"], ["position", "floating", 1, "txt-lbl", 2, "margin-left", "17px", "font-size", "10px"], ["mode", "md", 1, "ourbus_custom_input"], ["label", "ID Type", "labelPlacement", "floating", "fill", "outline", "type", "text", "readonly", "", 1, "ourbus_inputText", "ourbus_labelSet", 3, "value"], ["fill", "outline", "label", "ID No.", "labelPlacement", "floating", "type", "text", "readonly", "", 1, "ourbus_inputText", "ourbus_labelSet", 3, "value"], ["mode", "md", "color", "success", "show-default-buttons", "true", "done-text", "Ok", "presentation", "date", "showDefaultTitle", "true", 3, "ionChange", "value", "max"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", "ourbus_item_outline", 2, "margin-top", "7px !important"], [2, "margin", "-34px 0px 0px 0px", "font-size", "20px"], [1, "ourbus_inputText", 2, "height", "58px", "margin-left", "8px", 3, "readonly"], ["labelPlacement", "floating", 1, "ourbus_inputText", "ourbus_labelSet", 2, "height", "58px", "margin-left", "8px", 3, "readonly", "label"], [1, "ourbus_inputText", 3, "value"], [1, "ourbus_inputText", 2, "--width", "90%", "--max-width", "90%", 3, "value"], ["size", "4.5"], ["mode", "md", "class", "ourbus_custom_input ourbus_item_outline", 4, "ngFor", "ngForOf"], ["size", "7.5"], ["fill", "outline", "required", "", "type", "text", "size", "10", "maxlength", "10", "type", "tel", "label", "Mobile Number", "labelPlacement", "floating", "oninput", "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*?)\\..*/g, '$1');", "value", "Samarpit", 1, "ourbus_inputText", "ourbus_labelSet", 3, "ionChange", "ngModelChange", "ngModel"], ["size", "4", 1, "dwn-txt", 2, "font-size", "14px", "color", "var(--iconsAndButtonsColor)", 3, "click"], ["mode", "md", 1, "ourbus_custom_input", "ourbus_item_outline"], ["size", "8", 2, "padding", "0"], ["fill", "outline", "required", "", "type", "tel", "size", "6", "maxlength", "6", "oninput", "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*?)\\..*/g, '$1');", "placeholder", "OTP", 1, "ourbus_inputText", 3, "ngModelChange", "ionChange", "ngModel"], ["size", "4", 2, "padding", "0", "display", "flex", "justify-content", "center", "align-items", "center"], ["id", "timer", "style", " vertical-align: -webkit-baseline-middle;", 4, "ngIf"], ["size", "2", "class", "dwn-txt resend_OTP", 3, "click", 4, "ngIf"], ["size", "5", 1, "dwn-txt", 2, "font-size", "14px", "color", "var(--iconsAndButtonsColor)", 3, "click"], ["size", "2", 1, "dwn-txt", "resend_OTP", 3, "click"], [1, "whole", "center", "ourbustheme", 3, "click"], ["mode", "md", 1, "h50"], ["slot", "start", 3, "click"], [1, "head", 2, "opacity", "0.7"], ["class", "whole center", 4, "ngIf"], [1, "bg-content"], [2, "border-bottom", "1px solid lightgrey"], ["formControlName", "titlesex", 3, "value"], ["lines", "none", 2, "margin-left", "-6px", "font-weight", "bolder", "font-size", "12px"], ["lines", "none", 2, "font-size", "14px"], ["mode", "md", "item-left", "", "value", "Mr", 2, "width", "15px", "height", "15px"], [2, "padding-left", "10px"], ["lines", "none", 2, "margin-left", "-25px", "font-size", "14px"], ["mode", "md", "item-left", "", "value", "Ms", 2, "width", "15px", "height", "15px"], ["label", "Name", "labelPlacement", "floating", "type", "text", "formControlName", "name", 1, "input-text", "txt-lbl", 3, "value"], ["label", "Last Name", "labelPlacement", "floating", "type", "text", "formControlName", "lastName", 1, "input-text", "txt-lbl", 3, "value"], ["tappable", "", "id", "open-date-input-6"], ["src", "./assets/icon/Calendar.svg", "alt", "", "slot", "end", 2, "margin", "0px"], ["label", "DOB", "labelPlacement", "floating", "type", "text", "formControlName", "dateofbirth", 1, "txt-lbl", 2, "font-size", "12px", 3, "value"], ["tappable", ""], ["size", "10", 2, "padding-left", "0px"], ["label", "Phone Number", "labelPlacement", "floating", "type", "number", "readonly", "", 1, "input-text", "txt-lbl", 3, "value"], [1, "btnEdit", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", "margin-top", "21px", "margin-left", "13px", 3, "click"], ["label", "Emergency Phone", "labelPlacement", "floating", "type", "number", "formControlName", "emergencyPhoneNumber", 1, "input-text", "txt-lbl", 3, "value"], [1, "txt-lbl", 2, "font-size", "12px"], ["color", "red", "interface", "popover eeee", "placeholder", "Select Country", "formControlName", "country", 1, "input-text", "inputselect", 3, "ngModelChange", "ionChange", "value", "ngModel"], ["id", "stateSelection", "color", "red", "interface", "popover eeee", "placeholder", "Select State", "formControlName", "state", 1, "input-text", "inputselect", 3, "ngModelChange", "ionChange", "value", "ngModel"], ["id", "citySelection", "color", "red", "interface", "popover eeee", "placeholder", "Select City", "formControlName", "city", 1, "input-text", "inputselect", 3, "ngModelChange", "ionChange", "value", "ngModel"], ["position", "floating", 1, "txt-lbl"], ["formControlName", "address", 1, "input-text", 3, "value"], ["mode", "md", "expand", "block", "type", "submit", 1, "login-btn"], [1, "whole", "center"], [1, "personal-text", "subTitle", 2, "font-weight", "bolder"], [2, "color", "red"], ["required", "", "type", "text", "size", "10", "maxlength", "10", "oninput", "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*?)\\..*/g, '$1');", "value", "Samarpit", "placeholder", "Mobile Number", 1, "otpNumber", 2, "border", "1px solid #bbbaba", "border-radius", "3px", "width", "86%", "margin", "5px", "height", "26px", "font-size", "10px", 3, "ngModelChange", "ngModel"], ["size", "4", 1, "brws-txt", 3, "click"], ["size", "4", 1, "dwn-txt", 2, "text-align", "left", 3, "click"], ["size", "9"], ["required", "", "type", "text", "size", "6", "maxlength", "6", "oninput", "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*?)\\..*/g, '$1');", "placeholder", "Enter OTP", 1, "otpNumber", 3, "ngModelChange", "ngModel"], ["id", "timer", 4, "ngIf"], ["size", "2", "class", "dwn-txt", "style", "text-align: center; font-size: 9px;", 3, "click", 4, "ngIf"], ["size", "5", 1, "dwn-txt", 2, "text-align", "left", 3, "click"], ["id", "timer"], ["size", "2", 1, "dwn-txt", 2, "text-align", "center", "font-size", "9px", 3, "click"], ["label", "Email", "labelPlacement", "floating", "type", "email", "formControlName", "email", "readonly", "", 1, "input-text", "txt-lbl", 3, "value"], ["label", "Email", "labelPlacement", "floating", "type", "email", "formControlName", "email", 1, "input-text", "txt-lbl", 3, "value"], ["label", "ID Type", "labelPlacement", "floating", "type", "text", "readonly", "", 1, "input-text", "txt-lbl", 3, "value"], ["label", "ID No.", "labelPlacement", "floating", "type", "text", "readonly", "", 1, "input-text", "txt-lbl", 3, "value"], ["mode", "md", 1, "ion-no-border"], ["mode", "md"], ["size", "7", 1, "seabird_heading"], [1, "seabird_content"], [1, "seabird_margin"], [1, "seabird_row_center"], ["size", "12", 2, "padding-top", "0px"], [2, "font-weight", "bold", "color", "#000"], [1, "seabird_row_border"], ["size", "4.5", 1, "seabird_col"], [1, "seabird_labelSet"], ["size", "7.5", 1, "seabird_col"], ["type", "text", "formControlName", "name", 1, "ourbus_inputText", 3, "value"], ["type", "text", "formControlName", "lastName", 1, "ourbus_inputText", 3, "value"], ["class", "seabird_row_border", 4, "ngIf"], ["type", "number", "readonly", "", 1, "ourbus_inputText", 3, "value"], ["type", "number", "formControlName", "emergencyPhoneNumber", 1, "ourbus_inputText", 3, "ionInput", "value"], ["tappable", "", "id", "open-date-input-6", 1, "seabird_row_border"], ["type", "text", "formControlName", "dateofbirth", 1, "ourbus_inputText", 3, "value"], [1, "seabird_span_date"], [1, "seabird_lbl_date"], ["name", "calendar-outline"], ["mode", "md", "formControlName", "titlesex", 3, "value"], [1, "seabird_list"], ["lines", "none"], [2, "font-size", "12px"], ["slot", "start", "value", "Mr", 1, "seabird_Radio_color"], ["slot", "start", "value", "Ms", 1, "seabird_Radio_color"], ["color", "red", "placeholder", "Select Country", "formControlName", "country", 1, "seabird_input_text", 2, "--padding-start", "0px", 3, "ngModelChange", "ionChange", "value", "ngModel"], ["id", "stateSelection", "color", "red", "placeholder", "Select State", "formControlName", "state", 1, "seabird_input_text", 2, "--padding-start", "0px", 3, "ngModelChange", "ionChange", "value", "ngModel"], ["id", "citySelection", "color", "red", "interface", "popover eeee", "placeholder", "Select City", "formControlName", "city", 1, "seabird_input_text", 2, "--padding-start", "0px", 3, "ngModelChange", "ionChange", "value", "ngModel"], [2, "font-size", "14px"], ["formControlName", "address", 1, "ourbus_inputText", 2, "--padding-start", "0px", 3, "value"], ["mode", "md", "shape", "round", "expand", "block", "type", "submit", 1, "login-btn1", 2, "height", "45px", "margin", "7px"], ["type", "email", "formControlName", "email", "readonly", "", 1, "ourbus_inputText_disable", 3, "value"], ["type", "email", "formControlName", "email", 1, "ourbus_inputText", 3, "value"], ["mode", "md", "show-default-buttons", "true", "done-text", "Ok", "presentation", "date", "showDefaultTitle", "true", 3, "ionChange", "value", "max"]],
  template: function PersonalDetailPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, PersonalDetailPage_ng_container_0_Template, 88, 35, "ng-container", 1)(1, PersonalDetailPage_ng_container_1_Template, 107, 29, "ng-container", 1)(2, PersonalDetailPage_ng_container_2_Template, 93, 31, "ng-container", 1)(3, PersonalDetailPage_ng_container_3_Template, 120, 28, "ng-container", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonModal, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonBackButton, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName],
  styles: ["@charset \"UTF-8\";\n.icn-main[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  position: initial;\n  right: 0;\n  padding: 0;\n  width: 140px;\n  height: 40px;\n  top: 0;\n  float: right;\n  margin-right: 10px;\n  margin-top: 4px;\n}\n\n.rectangle-box[_ngcontent-%COMP%] {\n  height: 51px;\n  padding: 12px;\n  font-family: NotoSans;\n  border: solid 0.5px #b7b0b0;\n  background-color: #f3f3f3;\n  height: auto;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  margin-left: 7px;\n  margin-right: 10px;\n  border-radius: 2px;\n}\n\nion-button.btnEdit.md.button.button-solid.ion-activatable.ion-focusable.hydrated[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-top: -30px;\n  font-size: 10px;\n  height: 30px;\n}\n\n.personal-text[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: normal;\n}\n\n.subTitle[_ngcontent-%COMP%] {\n  font-size: 10px !important;\n}\n\nion-select.mrandmiss.md.hydrated[_ngcontent-%COMP%] {\n  padding: 0px;\n  font-size: 12px;\n}\n\n.ionInputText[_ngcontent-%COMP%] {\n  border-bottom: solid 0.5px #b7b0b0;\n  font-size: 11px;\n}\n\n.ionInputTextPhone[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n\n.profileIonItem[_ngcontent-%COMP%] {\n  --background: #f3f3f3;\n}\n\n.dobField[_ngcontent-%COMP%] {\n  border-bottom: solid 0.5px #b7b0b0;\n  width: -webkit-fill-available;\n  display: flex;\n}\n\nion-button.btnSave.md.button.button-solid.ion-activatable.ion-focusable.hydrated[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-top: -30px;\n  font-size: 10px;\n  height: 20px;\n}\n\n.btnSave[_ngcontent-%COMP%] {\n  display: none;\n  font-weight: bold;\n  font-size: 10px;\n  width: 52px;\n}\n\n.btnEdit[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: bold;\n  font-size: 10px;\n  width: 52px;\n}\n\n.datetimeField[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-right: 41px;\n  margin-top: 2px;\n  font-weight: bolder;\n}\n\n.phone-block-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 80px;\n  top: 97px;\n  left: 0;\n  right: 0;\n  z-index: 999;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow-y: scroll;\n}\n.phone-block-popup[_ngcontent-%COMP%]   .backdrop[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0px;\n  background-color: rgba(0, 0, 0, 0.31);\n}\n.phone-block-popup[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 100px;\n  background-color: #fff;\n  position: relative;\n  padding: 10px;\n  border-radius: 3px;\n}\n.phone-block-popup[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.phone-block-popup[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .label-txt[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  text-align: center;\n}\n\n.myformControls[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --background: #f3f3f3;\n  border-bottom: 0.3px solid darkgrey;\n}\n\nion-input.ng-untouched.ng-pristine.ng-invalid.ion-untouched.ion-pristine.ion-invalid.sc-ion-input-md-h.sc-ion-input-md-s.md.has-value.hydrated[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\nion-input.ng-untouched.ng-pristine.ng-valid.ion-untouched.ion-pristine.ion-valid.sc-ion-input-md-h.sc-ion-input-md-s.md.has-value.hydrated[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.txt-lbl[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.input-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  margin: 32px 0 12px;\n  text-transform: initial;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n}\n\n.login-btn1[_ngcontent-%COMP%] {\n  text-transform: initial;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  height: 50px;\n}\n\n.otp-btn[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  text-transform: initial;\n  font-family: NotoSans;\n  color: var(--iconsAndButtonsColor);\n  --border-color: var(--iconsAndButtonsColor);\n  --border-width: 1px;\n  font-weight: bolder;\n  font-size: 13px;\n}\n\n.selectbox[_ngcontent-%COMP%] {\n  border-bottom: none;\n  --border-style: none;\n}\n\n.inputselect[_ngcontent-%COMP%] {\n  display: contents;\n}\n\n.addressField[_ngcontent-%COMP%] {\n  border-bottom: none;\n  --border-style: none;\n}\n\n.otpNumber[_ngcontent-%COMP%] {\n  border: 1px solid #bbbaba;\n  border-radius: 3px;\n  width: 100%;\n  height: 26px;\n  font-size: 10px;\n}\n\n.seg-btn[_ngcontent-%COMP%] {\n  width: 196px;\n  margin: 0;\n  border-radius: 4px;\n  background-color: #eaeaea;\n}\n.seg-btn[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  height: 24px;\n  border: 1px solid #eaeaea;\n  border-radius: 4px;\n}\n.seg-btn[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  color: #9b9b9b;\n  min-height: 0px;\n  text-transform: capitalize;\n}\n.seg-btn[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  color: var(--primaryText);\n  background-color: var(--iconsAndButtonsColor);\n  font-weight: bolder;\n}\n\n.center-div[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n}\n\n.legend-box[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 280px;\n  height: auto;\n}\n\n.themeone-legend-box[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 86%;\n  height: auto;\n}\n\n.txt-msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  text-align: justify;\n  letter-spacing: 0.25px;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 10px;\n  width: 100%;\n}\n\n.dwn-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #ed3237;\n  margin-top: 20px;\n  width: 100%;\n  text-align: right;\n}\n\n.brws-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #4a4a4a;\n  width: 100%;\n  text-align: left;\n}\n\n.themeone_namelbl[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-family: NotoSans;\n  color: #000000;\n}\n\n.themeone_mobilelbl[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: NotoSans;\n  color: #000000;\n}\n\n.themeone-txt-lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  color: #5F5F5F;\n  font-family: NotoSans;\n  margin-bottom: 4px;\n}\n\n.themeone-input-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: NotoSans;\n  color: #333;\n  font-weight: bold;\n  --padding-top: 0px;\n  --padding-bottom: 5px;\n}\n.themeone-input-text[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%] {\n  width: 24px;\n}\n\n.themeone-btnEdit[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #FFF;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 142.5%;\n  --color: #fff;\n  margin-top: 25px;\n  margin-bottom: 0px;\n  --border-radius: 2px !important;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  --background: #191966;\n}\n\n.themeone-selected[_ngcontent-%COMP%] {\n  background: #FFBD5A;\n}\n\n.themeone-unselected[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\n\n.themeone-seg-btn[_ngcontent-%COMP%] {\n  width: 196px;\n  margin: 0;\n  border-radius: 4px;\n  background-color: #eaeaea;\n}\n.themeone-seg-btn[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  height: 31px;\n  border: 1px solid #19196E;\n  border-radius: 5px;\n}\n.themeone-seg-btn[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  min-height: 0px;\n  text-transform: capitalize;\n  background-color: #FFFFFF;\n  color: #191966;\n}\n.themeone-seg-btn[_ngcontent-%COMP%]   .segone[_ngcontent-%COMP%] {\n  border-right: 1px solid #19196E;\n  width: 77px;\n}\n.themeone-seg-btn[_ngcontent-%COMP%]   .segtwo[_ngcontent-%COMP%] {\n  width: 97px;\n}\n.themeone-seg-btn[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  color: #191966;\n  background-color: #FFBD5A;\n  font-weight: bolder;\n}\n\n.item-label-floating[_ngcontent-%COMP%], .item-label-stacked[_ngcontent-%COMP%] {\n  --min-height: 56px !important;\n}\n\n.themeone-inputselect[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.themeone-bg-content[_ngcontent-%COMP%] {\n  --background: #fff;\n  --offset-top: 1px !important;\n}\n\n.themeone-ion-item[_ngcontent-%COMP%] {\n  --background: #fff;\n  --min-height: 45px !important;\n  padding-top: 10px;\n  --padding-start: 0px;\n  margin-left: 12px;\n  margin-right: 12px;\n}\n\n.themeone-login-btn[_ngcontent-%COMP%] {\n  margin: 20px 12px;\n  text-transform: initial;\n  --background: #F2C21A;\n  color: #191966;\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 16px;\n  height: 45px;\n}\n\n.themeone-input-text[_ngcontent-%COMP%]::part(icon) {\n  width: 24px;\n  --padding-top: 0px;\n  --padding-bottom: 5px;\n}\n\n.themeone-head[_ngcontent-%COMP%] {\n  color: #333333;\n  padding: 0;\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 26px;\n  letter-spacing: 0em;\n  text-align: center;\n}\n\n.themeone-bg-cl[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  --background: white;\n  -webkit-text-fill-color: #333333 !important;\n}\n\n.theme1-bg-content[_ngcontent-%COMP%] {\n  --background: #ffffff;\n}\n\n.custom-icon[_ngcontent-%COMP%] {\n  color: #FF0000;\n}\n\n.brws-txt1[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #4a4a4a;\n  margin-top: 20px;\n  width: 100%;\n  text-align: right;\n}\n\n.txt-msg-hd[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bolder;\n  font-family: NotoSans;\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.txt-msg1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: justify;\n}\n\n.disableionitem[_ngcontent-%COMP%] {\n  --ion-item-background:#e1e1e1;\n}\n\nion-modal[_ngcontent-%COMP%] {\n  --width: 311px;\n  --height: 543px;\n  --border-radius: 8px;\n}\n\nion-modal[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%] {\n  height: 580px;\n}\n\n.editProfile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #2D2D2D;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.icon-set[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  color: #2D2D2D;\n  margin-right: 8px;\n}\n\n.textSet[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #2D2D2D;\n  font-weight: 700;\n}\n\n.ourbus_segment[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\n.dob_calender[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.segment-button-checked[_ngcontent-%COMP%] {\n  --indicator-color: var(--iconsAndButtonsColor) !important;\n  --indicator-color-checked: transparent !important;\n  color: var(--primaryText);\n  margin: 8px !important;\n}\n\n.theme1[_ngcontent-%COMP%]   .segment-button-checked[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\n.ourbustheme[_ngcontent-%COMP%]   .native-input.sc-ion-input-md[_ngcontent-%COMP%] {\n  font-family: \"Test S\u00F6hne\" !important;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_custom_input[_ngcontent-%COMP%] {\n  --highlight-color-focused: #D9D9D9;\n  --highlight-height: 1px;\n  --border-color: #D9D9D9;\n  --highlight-background: #D9D9D9;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_labelSet[_ngcontent-%COMP%] {\n  color: #747474 !important;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_inputText[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #2D2D2D;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_inputText_disable[_ngcontent-%COMP%] {\n  --highlight-color-focused: #747474;\n  --highlight-height: 1px;\n  --border-color: #747474;\n  --highlight-background: #efefef;\n  --background: #efefef;\n  font-size: 16px;\n  font-weight: 700;\n  color: #747474;\n  margin-top: 4px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_custom_input_disable[_ngcontent-%COMP%] {\n  --highlight-color-focused: #747474;\n  --highlight-height: 1px;\n  --border-color: #747474;\n  --highlight-background: #efefef;\n  --background: #efefef;\n}\n\n.seabird_content[_ngcontent-%COMP%] {\n  --background: #f1f7fa;\n}\n\n.seabird_margin[_ngcontent-%COMP%] {\n  border: 1px solid #626262;\n  border-radius: 20px;\n  margin: 12px;\n  background: white;\n}\n\n.seabird_Radio_color[_ngcontent-%COMP%] {\n  margin: 2px !important;\n  --color-checked:#2B28CE!important;\n}\n\n.seabird_heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n}\n\n.seabird_row_center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.seabird_row_border[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #626262;\n}\n.seabird_row_border[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.seabird_list[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0px;\n}\n\n.seabird_labelSet[_ngcontent-%COMP%] {\n  color: #000000 !important;\n}\n\n.seabird_input_text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\nion-select[_ngcontent-%COMP%]::part(placeholder), \nion-select[_ngcontent-%COMP%]::part(text) {\n  white-space: normal !important;\n}\n\n.seabird_lbl_date[_ngcontent-%COMP%] {\n  color: var(--iconsAndButtonsColor);\n  font-size: 14px;\n  margin-left: 8px;\n}\n\n.seabird_span_date[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n}\n\n.seabird_btn_mobile[_ngcontent-%COMP%] {\n  --background:var(--iconsAndButtonsColor);\n  --color:var(--primaryText);\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n}\n\n.seabird_col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  padding-left: 10px;\n  font-size: 12px;\n}\n\n.item-label-stacked[_nghost-%COMP%]   [_ngcontent-%COMP%]::slotted(ion-select), \n.item-label-floating[_nghost-%COMP%]   [_ngcontent-%COMP%]::slotted(ion-select) {\n  --padding-top: 3px;\n}\n\n.resend_OTP[_ngcontent-%COMP%] {\n  padding-left: 6px;\n  text-align: center;\n  margin-top: 0px;\n  color: var(--iconsAndButtonsColor);\n  font-size: 14px;\n}\n\n.upload-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -10px;\n  left: 76%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  height: 27px;\n  width: 31px;\n}\n\n.ourbus_profile_image[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 100px;\n}\n\n.ourbus_item_outline[_ngcontent-%COMP%] {\n  outline: 1px solid #D9D9D9 !important;\n  margin-top: 15px !important;\n  padding-top: 12px !important;\n  border-radius: 3px !important;\n  height: 51px !important;\n}"]
});

/***/ }),

/***/ 2660:
/*!**************************************!*\
  !*** ./src/countries/countries.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"name":"Afghanistan","dialCode":"+93","code":"AF","flag":"🇦🇫"},{"name":"Albania","dialCode":"+355","code":"AL","flag":"🇦🇱"},{"name":"Algeria","dialCode":"+213","code":"DZ","flag":"🇩🇿"},{"name":"Andorra","dialCode":"+376","code":"AD","flag":"🇦🇩"},{"name":"Angola","dialCode":"+244","code":"AO","flag":"🇦🇴"},{"name":"Argentina","dialCode":"+54","code":"AR","flag":"🇦🇷"},{"name":"Armenia","dialCode":"+374","code":"AM","flag":"🇦🇲"},{"name":"Australia","dialCode":"+61","code":"AU","flag":"🇦🇺"},{"name":"Austria","dialCode":"+43","code":"AT","flag":"🇦🇹"},{"name":"Azerbaijan","dialCode":"+994","code":"AZ","flag":"🇦🇿"},{"name":"Bahamas","dialCode":"+1-242","code":"BS","flag":"🇧🇸"},{"name":"Bahrain","dialCode":"+973","code":"BH","flag":"🇧🇭"},{"name":"Bangladesh","dialCode":"+880","code":"BD","flag":"🇧🇩"},{"name":"Barbados","dialCode":"+1-246","code":"BB","flag":"🇧🇧"},{"name":"Belarus","dialCode":"+375","code":"BY","flag":"🇧🇾"},{"name":"Belgium","dialCode":"+32","code":"BE","flag":"🇧🇪"},{"name":"Belize","dialCode":"+501","code":"BZ","flag":"🇧🇿"},{"name":"Benin","dialCode":"+229","code":"BJ","flag":"🇧🇯"},{"name":"Bhutan","dialCode":"+975","code":"BT","flag":"🇧🇹"},{"name":"Bolivia","dialCode":"+591","code":"BO","flag":"🇧🇴"},{"name":"Bosnia and Herzegovina","dialCode":"+387","code":"BA","flag":"🇧🇦"},{"name":"Botswana","dialCode":"+267","code":"BW","flag":"🇧🇼"},{"name":"Brazil","dialCode":"+55","code":"BR","flag":"🇧🇷"},{"name":"Brunei","dialCode":"+673","code":"BN","flag":"🇧🇳"},{"name":"Bulgaria","dialCode":"+359","code":"BG","flag":"🇧🇬"},{"name":"Burkina Faso","dialCode":"+226","code":"BF","flag":"🇧🇫"},{"name":"Burundi","dialCode":"+257","code":"BI","flag":"🇧🇮"},{"name":"Cambodia","dialCode":"+855","code":"KH","flag":"🇰🇭"},{"name":"Cameroon","dialCode":"+237","code":"CM","flag":"🇨🇲"},{"name":"Canada","dialCode":"+1","code":"CA","flag":"🇨🇦"},{"name":"Cape Verde","dialCode":"+238","code":"CV","flag":"🇨🇻"},{"name":"Central African Republic","dialCode":"+236","code":"CF","flag":"🇨🇫"},{"name":"Chad","dialCode":"+235","code":"TD","flag":"🇹🇩"},{"name":"Chile","dialCode":"+56","code":"CL","flag":"🇨🇱"},{"name":"China","dialCode":"+86","code":"CN","flag":"🇨🇳"},{"name":"Colombia","dialCode":"+57","code":"CO","flag":"🇨🇴"},{"name":"Comoros","dialCode":"+269","code":"KM","flag":"🇰🇲"},{"name":"Congo","dialCode":"+242","code":"CG","flag":"🇨🇬"},{"name":"Costa Rica","dialCode":"+506","code":"CR","flag":"🇨🇷"},{"name":"Croatia","dialCode":"+385","code":"HR","flag":"🇭🇷"},{"name":"Cuba","dialCode":"+53","code":"CU","flag":"🇨🇺"},{"name":"Cyprus","dialCode":"+357","code":"CY","flag":"🇨🇾"},{"name":"Czech Republic","dialCode":"+420","code":"CZ","flag":"🇨🇿"},{"name":"Denmark","dialCode":"+45","code":"DK","flag":"🇩🇰"},{"name":"Djibouti","dialCode":"+253","code":"DJ","flag":"🇩🇯"},{"name":"Dominica","dialCode":"+1-767","code":"DM","flag":"🇩🇲"},{"name":"Dominican Republic","dialCode":"+1-809","code":"DO","flag":"🇩🇴"},{"name":"Ecuador","dialCode":"+593","code":"EC","flag":"🇪🇨"},{"name":"Egypt","dialCode":"+20","code":"EG","flag":"🇪🇬"},{"name":"El Salvador","dialCode":"+503","code":"SV","flag":"🇸🇻"},{"name":"Estonia","dialCode":"+372","code":"EE","flag":"🇪🇪"},{"name":"Eswatini","dialCode":"+268","code":"SZ","flag":"🇸🇿"},{"name":"Ethiopia","dialCode":"+251","code":"ET","flag":"🇪🇹"},{"name":"Fiji","dialCode":"+679","code":"FJ","flag":"🇫🇯"},{"name":"Finland","dialCode":"+358","code":"FI","flag":"🇫🇮"},{"name":"France","dialCode":"+33","code":"FR","flag":"🇫🇷"},{"name":"Gabon","dialCode":"+241","code":"GA","flag":"🇬🇦"},{"name":"Gambia","dialCode":"+220","code":"GM","flag":"🇬🇲"},{"name":"Georgia","dialCode":"+995","code":"GE","flag":"🇬🇪"},{"name":"Germany","dialCode":"+49","code":"DE","flag":"🇩🇪"},{"name":"Ghana","dialCode":"+233","code":"GH","flag":"🇬🇭"},{"name":"Greece","dialCode":"+30","code":"GR","flag":"🇬🇷"},{"name":"Grenada","dialCode":"+1-473","code":"GD","flag":"🇬🇩"},{"name":"Guatemala","dialCode":"+502","code":"GT","flag":"🇬🇹"},{"name":"Guinea","dialCode":"+224","code":"GN","flag":"🇬🇳"},{"name":"Guyana","dialCode":"+592","code":"GY","flag":"🇬🇾"},{"name":"Haiti","dialCode":"+509","code":"HT","flag":"🇭🇹"},{"name":"Honduras","dialCode":"+504","code":"HN","flag":"🇭🇳"},{"name":"Hungary","dialCode":"+36","code":"HU","flag":"🇭🇺"},{"name":"Iceland","dialCode":"+354","code":"IS","flag":"🇮🇸"},{"name":"India","dialCode":"+91","code":"IN","flag":"🇮🇳"},{"name":"Indonesia","dialCode":"+62","code":"ID","flag":"🇮🇩"},{"name":"Iran","dialCode":"+98","code":"IR","flag":"🇮🇷"},{"name":"Iraq","dialCode":"+964","code":"IQ","flag":"🇮🇶"},{"name":"Ireland","dialCode":"+353","code":"IE","flag":"🇮🇪"},{"name":"Israel","dialCode":"+972","code":"IL","flag":"🇮🇱"},{"name":"Italy","dialCode":"+39","code":"IT","flag":"🇮🇹"},{"name":"Jamaica","dialCode":"+1-876","code":"JM","flag":"🇯🇲"},{"name":"Japan","dialCode":"+81","code":"JP","flag":"🇯🇵"},{"name":"Jordan","dialCode":"+962","code":"JO","flag":"🇯🇴"},{"name":"Kazakhstan","dialCode":"+7","code":"KZ","flag":"🇰🇿"},{"name":"Kenya","dialCode":"+254","code":"KE","flag":"🇰🇪"},{"name":"Kiribati","dialCode":"+686","code":"KI","flag":"🇰🇮"},{"name":"Korea, North","dialCode":"+850","code":"KP","flag":"🇰🇵"},{"name":"Korea, South","dialCode":"+82","code":"KR","flag":"🇰🇷"},{"name":"Kuwait","dialCode":"+965","code":"KW","flag":"🇰🇼"},{"name":"Kyrgyzstan","dialCode":"+996","code":"KG","flag":"🇰🇬"},{"name":"Laos","dialCode":"+856","code":"LA","flag":"🇱🇦"},{"name":"Latvia","dialCode":"+371","code":"LV","flag":"🇱🇻"},{"name":"Lebanon","dialCode":"+961","code":"LB","flag":"🇱🇧"},{"name":"Lesotho","dialCode":"+266","code":"LS","flag":"🇱🇸"},{"name":"Liberia","dialCode":"+231","code":"LR","flag":"🇱🇷"},{"name":"Libya","dialCode":"+218","code":"LY","flag":"🇱🇾"},{"name":"Liechtenstein","dialCode":"+423","code":"LI","flag":"🇱🇮"},{"name":"Lithuania","dialCode":"+370","code":"LT","flag":"🇱🇹"},{"name":"Luxembourg","dialCode":"+352","code":"LU","flag":"🇱🇺"}]');

/***/ })

}]);