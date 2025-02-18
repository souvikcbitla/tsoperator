"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[8039],{

/***/ 61726:
/*!*********************************************************!*\
  !*** ./src/app/contact-us/contact-us-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactUsPageRoutingModule: () => (/* binding */ ContactUsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us.page */ 77504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _ContactUsPageRoutingModule;




const routes = [{
  path: '',
  component: _contact_us_page__WEBPACK_IMPORTED_MODULE_0__.ContactUsPage
}];
class ContactUsPageRoutingModule {}
_ContactUsPageRoutingModule = ContactUsPageRoutingModule;
_ContactUsPageRoutingModule.ɵfac = function ContactUsPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContactUsPageRoutingModule)();
};
_ContactUsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _ContactUsPageRoutingModule
});
_ContactUsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactUsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 28039:
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactUsPageModule: () => (/* binding */ ContactUsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us-routing.module */ 61726);
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.page */ 77504);
/* harmony import */ var _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../white-common-header/white-common-header.component */ 16688);
/* harmony import */ var _pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/orderby.pipe */ 867);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/filter.pipe */ 17516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
var _ContactUsPageModule;









class ContactUsPageModule {}
_ContactUsPageModule = ContactUsPageModule;
_ContactUsPageModule.ɵfac = function ContactUsPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContactUsPageModule)();
};
_ContactUsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: _ContactUsPageModule
});
_ContactUsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactUsPageRoutingModule, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_2__.WhiteCommonHeaderComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ContactUsPageModule, {
    declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_1__.ContactUsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactUsPageRoutingModule, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_2__.WhiteCommonHeaderComponent, _pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_3__.OrderbyPipe, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__.FilterPipe]
  });
})();

/***/ }),

/***/ 77504:
/*!***********************************************!*\
  !*** ./src/app/contact-us/contact-us.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactUsPage: () => (/* binding */ ContactUsPage)
/* harmony export */ });
/* harmony import */ var _Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _map_search_map_search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map-search/map-search.page */ 60032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_exception__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/exception */ 91502);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../white-common-header/white-common-header.component */ 16688);
/* harmony import */ var _pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pipes/orderby.pipe */ 867);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pipes/filter.pipe */ 17516);

var _ContactUsPage;















const _c0 = a0 => ({
  "pd-top": a0
});
const _c1 = (a0, a1) => ({
  "section-active": a0,
  "section": a1
});
const _c2 = (a0, a1) => ({
  "seabird_section-active": a0,
  "seabird_section": a1
});
function ContactUsPage_ng_container_0_ng_container_17_ion_list_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ContactUsPage_ng_container_0_ng_container_17_ion_list_1_img_4_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const con_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.gotoMap(con_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ContactUsPage_ng_container_0_ng_container_17_ion_list_1_a_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const a_r4 = ctx.$implicit;
    const isLast_r5 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("href", "tel:", a_r4, "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](a_r4 + (!isLast_r5 ? " ," : ""));
  }
}
function ContactUsPage_ng_container_0_ng_container_17_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-list", 11)(1, "ion-card", 5)(2, "ion-card-header", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, ContactUsPage_ng_container_0_ng_container_17_ion_list_1_img_4_Template, 1, 0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "ion-card-content", 7)(6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, " Phone No. : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, ContactUsPage_ng_container_0_ng_container_17_ion_list_1_a_11_Template, 2, 3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const con_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", con_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", con_r2.latitude && con_r2.latitude.toString().length > 0 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", con_r2.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.contactsSplit(con_r2.contact_details));
  }
}
function ContactUsPage_ng_container_0_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ContactUsPage_ng_container_0_ng_container_17_ion_list_1_Template, 12, 4, "ion-list", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "orderby");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "orderby");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind3"](4, 8, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind3"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, ctx_r2.contacts, "name"), "is_head_office", "DESC"), "address", ctx_r2.searchKey));
  }
}
function ContactUsPage_ng_container_0_ng_container_18_ion_list_1_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ion-icon", 23);
  }
}
function ContactUsPage_ng_container_0_ng_container_18_ion_list_1_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ion-icon", 24);
  }
}
function ContactUsPage_ng_container_0_ng_container_18_ion_list_1_div_7_ion_list_1_a_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const a_r8 = ctx.$implicit;
    const isLast_r9 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("href", "tel:", a_r8, "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](a_r8 + (!isLast_r9 ? " ," : ""));
  }
}
function ContactUsPage_ng_container_0_ng_container_18_ion_list_1_div_7_ion_list_1_ion_item_16_img_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ContactUsPage_ng_container_0_ng_container_18_ion_list_1_div_7_ion_list_1_ion_item_16_img_4_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r10);
      const child_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.gotoMap(child_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ContactUsPage_ng_container_0_ng_container_18_ion_list_1_div_7_ion_list_1_ion_item_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, ContactUsPage_ng_container_0_ng_container_18_ion_list_1_div_7_ion_list_1_ion_item_16_img_4_Template, 1, 0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](child_r11.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", child_r11.latitude && child_r11.latitude.toString().length > 0 ? true : false);
  }
}
function ContactUsPage_ng_container_0_ng_container_18_ion_list_1_div_7_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-list", 26)(1, "ion-item", 27)(2, "ion-card", 28)(3, "ion-row")(4, "ion-col", 29)(5, "ion-row")(6, "ion-col", 29)(7, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-col", 31)(10, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "ion-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, ContactUsPage_ng_container_0_ng_container_18_ion_list_1_div_7_ion_list_1_a_15_Template, 2, 3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, ContactUsPage_ng_container_0_ng_container_18_ion_list_1_div_7_ion_list_1_ion_item_16_Template, 5, 2, "ion-item", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const child_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](child_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](child_r11.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.contactsSplit(child_r11.contact_details));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", child_r11.email != "");
  }
}
function ContactUsPage_ng_container_0_ng_container_18_ion_list_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ContactUsPage_ng_container_0_ng_container_18_ion_list_1_div_7_ion_list_1_Template, 17, 4, "ion-list", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", item_r12.branch_details);
  }
}
function ContactUsPage_ng_container_0_ng_container_18_ion_list_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Sorry, nothing in here!");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ContactUsPage_ng_container_0_ng_container_18_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-list", 17)(1, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ContactUsPage_ng_container_0_ng_container_18_ion_list_1_Template_ion_item_click_1_listener() {
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.toggleSection(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ContactUsPage_ng_container_0_ng_container_18_ion_list_1_ion_icon_2_Template, 1, 0, "ion-icon", 19)(3, ContactUsPage_ng_container_0_ng_container_18_ion_list_1_ion_icon_3_Template, 1, 0, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-label")(5, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, ContactUsPage_ng_container_0_ng_container_18_ion_list_1_div_7_Template, 2, 1, "div", 0)(8, ContactUsPage_ng_container_0_ng_container_18_ion_list_1_p_8_Template, 2, 0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](6, _c1, item_r12.open, !item_r12.open));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !item_r12.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r12.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](item_r12.city_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r12.branch_details && item_r12.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r12.branch_details.length == 0 && item_r12.open);
  }
}
function ContactUsPage_ng_container_0_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ContactUsPage_ng_container_0_ng_container_18_ion_list_1_Template, 9, 9, "ion-list", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.shortwithCityList);
  }
}
function ContactUsPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-header", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "app-white-common-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-content", 3)(4, "ion-list", 4)(5, "ion-card", 5)(6, "ion-card-header", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, " E-Ticket & E-Payment related issues ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-card-content", 7)(9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, " E-mail : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, " Phone No. : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, ContactUsPage_ng_container_0_ng_container_17_Template, 5, 12, "ng-container", 0)(18, ContactUsPage_ng_container_0_ng_container_18_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](9, _c0, ctx_r2.showSearch));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx_r2.operatorEmail, "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r2.operatorEmail, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("href", "tel:", ctx_r2.helpLineNumber, "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r2.helpLineNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r2.shortWithCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.shortWithCity);
  }
}
function ContactUsPage_ng_container_1_ng_container_19_ion_card_2_img_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ContactUsPage_ng_container_1_ng_container_19_ion_card_2_img_3_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r14);
      const con_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.gotoMap(con_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ContactUsPage_ng_container_1_ng_container_19_ion_card_2_a_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const a_r16 = ctx.$implicit;
    const isLast_r17 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("href", "tel:", a_r16, "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](a_r16 + (!isLast_r17 ? " ," : ""));
  }
}
function ContactUsPage_ng_container_1_ng_container_19_ion_card_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-card")(1, "ion-card-header", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, ContactUsPage_ng_container_1_ng_container_19_ion_card_2_img_3_Template, 1, 0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-card-content", 7)(5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, " Phone No. : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, ContactUsPage_ng_container_1_ng_container_19_ion_card_2_a_10_Template, 2, 3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const con_r15 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", con_r15.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", con_r15.latitude && con_r15.latitude.toString().length > 0 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", con_r15.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.contactsSplit(con_r15.contact_details));
  }
}
function ContactUsPage_ng_container_1_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-list", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ContactUsPage_ng_container_1_ng_container_19_ion_card_2_Template, 11, 4, "ion-card", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "orderby");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "orderby");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind3"](5, 8, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind3"](4, 4, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](3, 1, ctx_r2.contacts, "name"), "is_head_office", "DESC"), "address", ctx_r2.searchKey));
  }
}
function ContactUsPage_ng_container_1_ng_container_20_ion_list_1_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ion-icon", 23);
  }
}
function ContactUsPage_ng_container_1_ng_container_20_ion_list_1_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ion-icon", 24);
  }
}
function ContactUsPage_ng_container_1_ng_container_20_ion_list_1_div_7_ion_list_1_a_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const a_r20 = ctx.$implicit;
    const isLast_r21 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("href", "tel:", a_r20, "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](a_r20 + (!isLast_r21 ? " ," : ""));
  }
}
function ContactUsPage_ng_container_1_ng_container_20_ion_list_1_div_7_ion_list_1_ion_item_18_img_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ContactUsPage_ng_container_1_ng_container_20_ion_list_1_div_7_ion_list_1_ion_item_18_img_4_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r22);
      const child_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.gotoMap(child_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ContactUsPage_ng_container_1_ng_container_20_ion_list_1_div_7_ion_list_1_ion_item_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "ion-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, ContactUsPage_ng_container_1_ng_container_20_ion_list_1_div_7_ion_list_1_ion_item_18_img_4_Template, 1, 0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](child_r23.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", child_r23.latitude && child_r23.latitude.toString().length > 0 ? true : false);
  }
}
function ContactUsPage_ng_container_1_ng_container_20_ion_list_1_div_7_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-list", 26)(1, "ion-item", 54)(2, "ion-card", 55)(3, "ion-row")(4, "ion-col", 29)(5, "ion-row")(6, "ion-col", 29)(7, "h5", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-col", 31)(10, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "ion-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "ion-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, ContactUsPage_ng_container_1_ng_container_20_ion_list_1_div_7_ion_list_1_a_17_Template, 2, 3, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, ContactUsPage_ng_container_1_ng_container_20_ion_list_1_div_7_ion_list_1_ion_item_18_Template, 5, 2, "ion-item", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const child_r23 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](child_r23.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", child_r23.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.contactsSplit(child_r23.contact_details));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", child_r23.email != "");
  }
}
function ContactUsPage_ng_container_1_ng_container_20_ion_list_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ContactUsPage_ng_container_1_ng_container_20_ion_list_1_div_7_ion_list_1_Template, 19, 4, "ion-list", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", item_r24.branch_details);
  }
}
function ContactUsPage_ng_container_1_ng_container_20_ion_list_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Sorry, nothing in here!");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ContactUsPage_ng_container_1_ng_container_20_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-list", 53)(1, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ContactUsPage_ng_container_1_ng_container_20_ion_list_1_Template_ion_item_click_1_listener() {
      const i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r18).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.toggleSection(i_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ContactUsPage_ng_container_1_ng_container_20_ion_list_1_ion_icon_2_Template, 1, 0, "ion-icon", 19)(3, ContactUsPage_ng_container_1_ng_container_20_ion_list_1_ion_icon_3_Template, 1, 0, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-label")(5, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, ContactUsPage_ng_container_1_ng_container_20_ion_list_1_div_7_Template, 2, 1, "div", 0)(8, ContactUsPage_ng_container_1_ng_container_20_ion_list_1_p_8_Template, 2, 0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](6, _c2, item_r24.open, !item_r24.open));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !item_r24.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r24.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](item_r24.city_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r24.branch_details && item_r24.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r24.branch_details.length == 0 && item_r24.open);
  }
}
function ContactUsPage_ng_container_1_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ContactUsPage_ng_container_1_ng_container_20_ion_list_1_Template, 9, 9, "ion-list", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.shortwithCityList);
  }
}
function ContactUsPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 38)(3, "ion-buttons", 39)(4, "ion-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ContactUsPage_ng_container_1_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-content", 43)(9, "div", 44)(10, "ion-row")(11, "ion-col", 45)(12, "div", 46)(13, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "ion-col", 45)(16, "div", 48)(17, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](19, ContactUsPage_ng_container_1_ng_container_19_Template, 6, 12, "ng-container", 0)(20, ContactUsPage_ng_container_1_ng_container_20_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("href", "tel:", ctx_r2.helpLineNumber, "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r2.helpLineNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx_r2.operatorEmail, "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r2.operatorEmail, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r2.shortWithCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.shortWithCity);
  }
}
function ContactUsPage_ng_container_2_ng_container_22_ion_card_2_img_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ContactUsPage_ng_container_2_ng_container_22_ion_card_2_img_3_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r26);
      const con_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.gotoMap(con_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ContactUsPage_ng_container_2_ng_container_22_ion_card_2_a_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const a_r28 = ctx.$implicit;
    const isLast_r29 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("href", "tel:", a_r28, "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](a_r28 + (!isLast_r29 ? " ," : ""));
  }
}
function ContactUsPage_ng_container_2_ng_container_22_ion_card_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-card")(1, "ion-card-header", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, ContactUsPage_ng_container_2_ng_container_22_ion_card_2_img_3_Template, 1, 0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-card-content", 7)(5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, " Phone No. : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, ContactUsPage_ng_container_2_ng_container_22_ion_card_2_a_10_Template, 2, 3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const con_r27 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", con_r27.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", con_r27.latitude && con_r27.latitude.toString().length > 0 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", con_r27.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.contactsSplit(con_r27.contact_details));
  }
}
function ContactUsPage_ng_container_2_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-list", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ContactUsPage_ng_container_2_ng_container_22_ion_card_2_Template, 11, 4, "ion-card", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "orderby");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "orderby");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind3"](5, 8, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind3"](4, 4, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](3, 1, ctx_r2.contacts, "name"), "is_head_office", "DESC"), "address", ctx_r2.searchKey));
  }
}
function ContactUsPage_ng_container_2_ng_container_23_ion_list_1_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ion-icon", 23);
  }
}
function ContactUsPage_ng_container_2_ng_container_23_ion_list_1_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ion-icon", 24);
  }
}
function ContactUsPage_ng_container_2_ng_container_23_ion_list_1_div_7_ion_list_1_a_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const a_r32 = ctx.$implicit;
    const isLast_r33 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("href", "tel:", a_r32, "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](a_r32 + (!isLast_r33 ? " ," : ""));
  }
}
function ContactUsPage_ng_container_2_ng_container_23_ion_list_1_div_7_ion_list_1_ion_item_16_img_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ContactUsPage_ng_container_2_ng_container_23_ion_list_1_div_7_ion_list_1_ion_item_16_img_4_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r34);
      const child_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.gotoMap(child_r35));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ContactUsPage_ng_container_2_ng_container_23_ion_list_1_div_7_ion_list_1_ion_item_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, ContactUsPage_ng_container_2_ng_container_23_ion_list_1_div_7_ion_list_1_ion_item_16_img_4_Template, 1, 0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](child_r35.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", child_r35.latitude && child_r35.latitude.toString().length > 0 ? true : false);
  }
}
function ContactUsPage_ng_container_2_ng_container_23_ion_list_1_div_7_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-list", 26)(1, "ion-item", 54)(2, "ion-card")(3, "ion-row")(4, "ion-col", 29)(5, "ion-row")(6, "ion-col", 29)(7, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-col", 31)(10, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "ion-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, ContactUsPage_ng_container_2_ng_container_23_ion_list_1_div_7_ion_list_1_a_15_Template, 2, 3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, ContactUsPage_ng_container_2_ng_container_23_ion_list_1_div_7_ion_list_1_ion_item_16_Template, 5, 2, "ion-item", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const child_r35 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](child_r35.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](child_r35.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.contactsSplit(child_r35.contact_details));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", child_r35.email != "");
  }
}
function ContactUsPage_ng_container_2_ng_container_23_ion_list_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ContactUsPage_ng_container_2_ng_container_23_ion_list_1_div_7_ion_list_1_Template, 17, 4, "ion-list", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", item_r36.branch_details);
  }
}
function ContactUsPage_ng_container_2_ng_container_23_ion_list_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Sorry, nothing in here!");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ContactUsPage_ng_container_2_ng_container_23_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-list", 17)(1, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ContactUsPage_ng_container_2_ng_container_23_ion_list_1_Template_ion_item_click_1_listener() {
      const i_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r30).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.toggleSection(i_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ContactUsPage_ng_container_2_ng_container_23_ion_list_1_ion_icon_2_Template, 1, 0, "ion-icon", 19)(3, ContactUsPage_ng_container_2_ng_container_23_ion_list_1_ion_icon_3_Template, 1, 0, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-label")(5, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, ContactUsPage_ng_container_2_ng_container_23_ion_list_1_div_7_Template, 2, 1, "div", 0)(8, ContactUsPage_ng_container_2_ng_container_23_ion_list_1_p_8_Template, 2, 0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](6, _c1, item_r36.open, !item_r36.open));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !item_r36.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r36.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](item_r36.city_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r36.branch_details && item_r36.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r36.branch_details.length == 0 && item_r36.open);
  }
}
function ContactUsPage_ng_container_2_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ContactUsPage_ng_container_2_ng_container_23_ion_list_1_Template, 9, 9, "ion-list", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.shortwithCityList);
  }
}
function ContactUsPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 38)(3, "ion-buttons", 39)(4, "ion-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ContactUsPage_ng_container_2_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r25);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-content")(9, "ion-list", 65)(10, "ion-card")(11, "ion-card-header", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, " E-Ticket & E-Payment related issues ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "ion-card-content", 7)(14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, " Phone No. : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, " E-mail : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](22, ContactUsPage_ng_container_2_ng_container_22_Template, 6, 12, "ng-container", 0)(23, ContactUsPage_ng_container_2_ng_container_23_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", !ctx_r2.isBitlaPayments)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](10, _c0, ctx_r2.showSearch));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("href", "tel:", ctx_r2.helpLineNumber, "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r2.helpLineNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx_r2.operatorEmail, "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r2.operatorEmail, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r2.shortWithCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.shortWithCity);
  }
}
function ContactUsPage_ng_container_3_ion_card_24_img_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ContactUsPage_ng_container_3_ion_card_24_img_3_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r38);
      const con_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.gotoMap(con_r39));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ContactUsPage_ng_container_3_ion_card_24_a_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const a_r40 = ctx.$implicit;
    const isLast_r41 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("href", "tel:", a_r40, "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](a_r40 + (!isLast_r41 ? " ," : ""));
  }
}
function ContactUsPage_ng_container_3_ion_card_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-card", 69)(1, "ion-card-header", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, ContactUsPage_ng_container_3_ion_card_24_img_3_Template, 1, 0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-card-content", 7)(5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, " Phone No. : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, ContactUsPage_ng_container_3_ion_card_24_a_10_Template, 2, 3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const con_r39 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", con_r39.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", con_r39.latitude && con_r39.latitude.toString().length > 0 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", con_r39.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.contactsSplit(con_r39.contact_details));
  }
}
function ContactUsPage_ng_container_3_ng_container_28_ion_list_1_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ion-icon", 23);
  }
}
function ContactUsPage_ng_container_3_ng_container_28_ion_list_1_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ion-icon", 24);
  }
}
function ContactUsPage_ng_container_3_ng_container_28_ion_list_1_div_7_ion_list_1_a_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const a_r44 = ctx.$implicit;
    const isLast_r45 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("href", "tel:", a_r44, "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](a_r44 + (!isLast_r45 ? " ," : ""));
  }
}
function ContactUsPage_ng_container_3_ng_container_28_ion_list_1_div_7_ion_list_1_ion_item_16_img_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ContactUsPage_ng_container_3_ng_container_28_ion_list_1_div_7_ion_list_1_ion_item_16_img_4_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r46);
      const child_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.gotoMap(child_r47));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ContactUsPage_ng_container_3_ng_container_28_ion_list_1_div_7_ion_list_1_ion_item_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, ContactUsPage_ng_container_3_ng_container_28_ion_list_1_div_7_ion_list_1_ion_item_16_img_4_Template, 1, 0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](child_r47.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", child_r47.latitude && child_r47.latitude.toString().length > 0 ? true : false);
  }
}
function ContactUsPage_ng_container_3_ng_container_28_ion_list_1_div_7_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-list", 26)(1, "ion-item", 54)(2, "ion-card")(3, "ion-row")(4, "ion-col", 29)(5, "ion-row")(6, "ion-col", 29)(7, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-col", 31)(10, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "ion-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, ContactUsPage_ng_container_3_ng_container_28_ion_list_1_div_7_ion_list_1_a_15_Template, 2, 3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, ContactUsPage_ng_container_3_ng_container_28_ion_list_1_div_7_ion_list_1_ion_item_16_Template, 5, 2, "ion-item", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const child_r47 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](child_r47.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](child_r47.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.contactsSplit(child_r47.contact_details));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", child_r47.email != "");
  }
}
function ContactUsPage_ng_container_3_ng_container_28_ion_list_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ContactUsPage_ng_container_3_ng_container_28_ion_list_1_div_7_ion_list_1_Template, 17, 4, "ion-list", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", item_r48.branch_details);
  }
}
function ContactUsPage_ng_container_3_ng_container_28_ion_list_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Sorry, nothing in here!");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ContactUsPage_ng_container_3_ng_container_28_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-list", 17)(1, "ion-item", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ContactUsPage_ng_container_3_ng_container_28_ion_list_1_Template_ion_item_click_1_listener() {
      const i_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r42).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.toggleSection(i_r43));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ContactUsPage_ng_container_3_ng_container_28_ion_list_1_ion_icon_2_Template, 1, 0, "ion-icon", 19)(3, ContactUsPage_ng_container_3_ng_container_28_ion_list_1_ion_icon_3_Template, 1, 0, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-label")(5, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, ContactUsPage_ng_container_3_ng_container_28_ion_list_1_div_7_Template, 2, 1, "div", 0)(8, ContactUsPage_ng_container_3_ng_container_28_ion_list_1_p_8_Template, 2, 0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](6, _c1, item_r48.open, !item_r48.open));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !item_r48.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r48.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](item_r48.city_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r48.branch_details && item_r48.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r48.branch_details.length == 0 && item_r48.open);
  }
}
function ContactUsPage_ng_container_3_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ContactUsPage_ng_container_3_ng_container_28_ion_list_1_Template, 9, 9, "ion-list", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.shortwithCityList);
  }
}
function ContactUsPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-header", 67)(2, "ion-toolbar", 38)(3, "ion-buttons", 39)(4, "ion-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ContactUsPage_ng_container_3_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r37);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-content", 67)(9, "ion-list", 68)(10, "ion-card", 69)(11, "ion-card-header", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, " E-Ticket & E-Payment related issues ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "ion-card-content", 7)(14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, " Email : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, " Phone No. : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](24, ContactUsPage_ng_container_3_ion_card_24_Template, 11, 4, "ion-card", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](25, "orderby");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](26, "orderby");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](27, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](28, ContactUsPage_ng_container_3_ng_container_28_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](20, _c0, ctx_r2.showSearch));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx_r2.operatorEmail, "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r2.operatorEmail, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("href", "tel:", ctx_r2.helpLineNumber, "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r2.helpLineNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind3"](27, 16, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind3"](26, 12, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](25, 9, ctx_r2.contacts, "name"), "is_head_office", "DESC"), "address", ctx_r2.searchKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.shortWithCity);
  }
}
class ContactUsPage {
  constructor(navCtrl, apiFactory, commonStorage, theme, ex, loader, modalController, util, commonService, location, appData) {
    this.navCtrl = navCtrl;
    this.apiFactory = apiFactory;
    this.commonStorage = commonStorage;
    this.theme = theme;
    this.ex = ex;
    this.loader = loader;
    this.modalController = modalController;
    this.util = util;
    this.commonService = commonService;
    this.location = location;
    this.appData = appData;
    this.isBitlaPayments = false;
    this.helpLineNumber = '';
    this.operatorEmail = '';
    this.searchKey = "";
    this.showSearch = false;
    this.automaticClose = true;
    this.shortWithCity = false;
    this.shortwithCityList = [];
    this.shortWithCity = this.commonStorage.getItem('metaData').sort_with_city;
    this.defaultCall();
    this.isBitlaPayments = this.commonStorage.getItem('metaData').isBitlaPayments;
    this.helpLineNumber = this.commonStorage.getItem('metaData').helpLineNumber;
    this.operatorEmail = this.commonStorage.getItem('metaData').operatorEmail;
  }
  ngOnInit() {
    this.appData.newTheme = this.util.getNewTheme();
    this.metaData = this.commonStorage.getItem('metaData');
  }
  ionViewDidLoad() {
    // this.commonService.gTrack('contactUs', 'Contact Us page is displayed')
  }
  defaultCall() {
    this.loader.showLoadingDefault();
    this.apiFactory.getContacts(this.shortWithCity).subscribe(contacts => {
      this.loader.hideLoadingDefault();
      if (this.shortWithCity) {
        this.shortwithCityList = contacts;
        // this.shortwithCityList[0].open = true;
      } else {
        this.contacts = contacts;
      }
    }, err => {
      this.loader.hideLoadingDefault();
      if (!this.util.isConnected()) {
        this.util.showAlert("Error Loading", "Internet is not connected. Please connect internet and try again!");
      } else {
        this.util.showAlert("Error Loading", "Something went wrong, please try after sometime");
      }
      this.ex.call('ContactPage', 'defaultCall() --> this.apiFactory.getContacts()', err, '');
    });
  }
  contactsSplit(contact_details) {
    return contact_details.split(",");
  }
  gotoMap(data) {
    var _this = this;
    return (0,_Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var title = "";
      const lng = data.longitude;
      const lat = data.latitude;
      const geocoords = lat + ',' + lng;
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat}+${lng}`; // encode the label!
      window.open(encodeURI(googleMapsUrl), '_system', 'location=no');
      return;
      title = "Location";
      const modal = yield _this.modalController.create({
        component: _map_search_map_search_page__WEBPACK_IMPORTED_MODULE_1__.MapSearchPage,
        componentProps: {
          destination: {},
          boardingPoint: "",
          title: title,
          lat: data.latitude,
          long: data.longitude
        }
      });
      yield modal.present();
    })();
  }
  toggleSection(index) {
    this.shortwithCityList[index].open = !this.shortwithCityList[index].open;
    if (this.automaticClose && this.shortwithCityList[index].open) {
      this.shortwithCityList.filter((item, itemIndex) => itemIndex != index).map(item => item.open = false);
    }
  }
  back() {
    this.location.back();
  }
}
_ContactUsPage = ContactUsPage;
_ContactUsPage.ɵfac = function ContactUsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContactUsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_2__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_3__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_4__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_exception__WEBPACK_IMPORTED_MODULE_5__.ExceptionProvider), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_6__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_7__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_8__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_16__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_9__.AppData));
};
_ContactUsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: _ContactUsPage,
  selectors: [["app-contact-us"]],
  standalone: false,
  decls: 4,
  vars: 4,
  consts: [[4, "ngIf"], [2, "border-bottom", "1px solid #DFDFDF"], ["title", "Contact Us", "subtitle", "", "showsubTxt", "true", "showsubtitle", "false"], [1, "theme1", 2, "--background", "#fff"], [2, "padding", "0px", "margin-left", "3%", "margin-right", "3%", "border-bottom", "1px solid #DFDFDF", 3, "ngClass"], [2, "box-shadow", "none", "margin", "8px", "margin-left", "0px"], [1, "branchName", "text-center"], [2, "padding", "5px"], [1, "text-center"], [3, "href"], ["style", " padding:0px; margin-left:3%; margin-right: 3%;border-bottom: 1px solid #DFDFDF;", 4, "ngFor", "ngForOf"], [2, "padding", "0px", "margin-left", "3%", "margin-right", "3%", "border-bottom", "1px solid #DFDFDF"], ["class", "map-pin", "src", "./assets/icon/Map-placeholder.png", "alt", "", 3, "click", 4, "ngIf"], ["href", "tel:a", 3, "href", 4, "ngFor", "ngForOf"], ["src", "./assets/icon/Map-placeholder.png", "alt", "", 1, "map-pin", 3, "click"], ["href", "tel:a", 3, "href"], ["class", "accordion-list", "lines", "none", "detail", "false", "no-padding", "", 4, "ngFor", "ngForOf"], ["lines", "none", "detail", "false", "no-padding", "", 1, "accordion-list"], ["tappable", "", 3, "click", "ngClass"], ["slot", "start", "name", "arrow-forward", 4, "ngIf"], ["slot", "start", "name", "arrow-down", 4, "ngIf"], [2, "font-size", "18px"], ["text-center", "", 4, "ngIf"], ["slot", "start", "name", "arrow-forward"], ["slot", "start", "name", "arrow-down"], ["class", "child-list", "lines", "none", 4, "ngFor", "ngForOf"], ["lines", "none", 1, "child-list"], ["text-wrap", "", "detail", "false", 1, "child-item", 2, "--background", "var(--viewBgColor)", "margin", "-5px"], [2, "box-shadow", "none", "margin-left", "0px"], ["size", "12", 1, "mrg"], [2, "font-size", "16px", "font-weight", "bold", "color", "#777777"], ["size", "12"], ["text-lowercase", "", "color", "medium"], [2, "margin-top", "-10px"], ["slot", "start", "name", "call", 1, "icon"], ["style", "margin-top: -10px;", 4, "ngIf"], ["slot", "start", "name", "mail", 2, "margin-top", "-1px", "margin-left", "-16px"], ["text-center", ""], ["mode", "md", 1, "h50"], ["slot", "start"], [3, "click"], ["name", "arrow-back"], [1, "head"], [2, "--background", "#F1F7FA !important"], [1, "borderSet_seabirdTheme"], ["size", "6", 1, "seabird_center"], [1, "phone_seabird"], [2, "text-decoration", "none", "color", "#000", 3, "href"], [1, "phone_seabird", 2, "background", "#D1E6FF"], [2, "color", "#000", 3, "href"], [1, "cornerSet"], [4, "ngFor", "ngForOf"], ["class", "accordion-list", "lines", "none", "detail", "false", "no-padding", "", "style", "    border: 1px solid #626262;\n    margin: 8px;\n    border-radius: 10px;", 4, "ngFor", "ngForOf"], ["lines", "none", "detail", "false", "no-padding", "", 1, "accordion-list", 2, "border", "1px solid #626262", "margin", "8px", "border-radius", "10px"], ["text-wrap", "", "detail", "false", "lines", "none", 1, "child-item", 2, "--background", "var(--viewBgColor)", "margin", "-5px"], [2, "margin", "16px 8px"], [2, "font-size", "14px", "font-weight", "bold", "color", "#000"], [2, "display", "flex", "align-items", "start"], ["src", "././assets/icon/location_seabird.svg", 2, "width", "20px", "height", "20px"], ["text-lowercase", "", "color", "medium", 2, "color", "#000", "font-size", "10px", "font-weight", "400"], ["slot", "start", "name", "call", 1, "icon", 2, "font-size", "14px"], ["href", "tel:a", "style", "text-decoration: none;\n    color: #000;font-size: 10px;", 3, "href", 4, "ngFor", "ngForOf"], ["href", "tel:a", 2, "text-decoration", "none", "color", "#000", "font-size", "10px", 3, "href"], ["slot", "start", "name", "mail", 2, "margin-top", "-1px", "margin-left", "-16px", "width", "16px", "height", "16px"], ["text-lowercase", "", "color", "medium", 2, "color", "#2B28CE", "font-size", "10px"], [2, "margin-left", "3%", "margin-right", "3%", "padding", "0px", 3, "hidden", "ngClass"], [2, "padding", "0px", "margin-left", "3%", "margin-right", "3%"], [1, "theme2", "ourbustheme"], [3, "ngClass"], [2, "margin", "16px", "padding", "8px"], ["style", "margin: 16px;padding: 8px;", 4, "ngFor", "ngForOf"], ["tappable", "", 2, "padding", "10px", "--border-radius", "10px", 3, "click", "ngClass"]],
  template: function ContactUsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, ContactUsPage_ng_container_0_Template, 19, 11, "ng-container", 0)(1, ContactUsPage_ng_container_1_Template, 21, 8, "ng-container", 0)(2, ContactUsPage_ng_container_2_Template, 24, 12, "ng-container", 0)(3, ContactUsPage_ng_container_3_Template, 29, 22, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonToolbar, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_10__.WhiteCommonHeaderComponent, _pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_11__.OrderbyPipe, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__.FilterPipe],
  styles: [".branchName[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding: 5px !important;\n}\n\n.search-btn[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n}\n\n.theme1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0a4ec6;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  transition: transform 0.25s ease-in-out;\n  transform: translateY(-60px);\n}\n\n.search-bar.show[_ngcontent-%COMP%] {\n  transform: translateY(0px);\n}\n\nion-list[_ngcontent-%COMP%] {\n  transition: margin-top 0.25s ease-in-out;\n  margin-top: 0;\n}\n\nion-list.pd-top[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n\n.map-pin[_ngcontent-%COMP%] {\n  width: 25px;\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.accordion-list[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n  --ion-item-background: #fff;\n}\n\n.section[_ngcontent-%COMP%] {\n  --ion-item-background: #f2f2f2f7;\n  font-weight: bold;\n}\n\n.section-active[_ngcontent-%COMP%] {\n  --ion-item-background: #f2f2f2f7;\n  --ion-item-color: var(--sectionHeaderTextColor);\n  font-weight: 600;\n}\n.section-active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--sectionHeaderTextColor);\n}\n\n.seabird_section[_ngcontent-%COMP%] {\n  --ion-item-background: #F1F7FA;\n  font-weight: bold;\n}\n\n.seabird_section-active[_ngcontent-%COMP%] {\n  --ion-item-background: #F1F7FA;\n  --ion-item-color: var(--sectionHeaderTextColor);\n  font-weight: 600;\n}\n.seabird_section-active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--sectionHeaderTextColor);\n}\n\nion-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.child-list[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n.child-list[_ngcontent-%COMP%]   .child[_ngcontent-%COMP%], .child-list[_ngcontent-%COMP%]   .child-active[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n}\n\n.child[_ngcontent-%COMP%] {\n  --ion-item-background: #e8e7e6;\n  --ion-item-color: #000;\n}\n\n.child-active[_ngcontent-%COMP%] {\n  --ion-item-background: #fad86b;\n  --ion-item-color: #fff;\n}\n.child-active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.product-list[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\nion-col[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: -2px;\n  font-size: 15px;\n  color: grey;\n}\n\n.mrg[_ngcontent-%COMP%] {\n  margin-top: -10px;\n  margin-bottom: -15px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  margin-top: -4px;\n  margin-left: -16px;\n  font-size: 18px;\n}\n\n.cornerSet[_ngcontent-%COMP%] {\n  margin-left: 3%;\n  margin-right: 3%;\n  padding: 0px;\n}\n\n.borderSet_seabirdTheme[_ngcontent-%COMP%] {\n  border: 1px solid #626262;\n  margin: 10px;\n  border-radius: 10px;\n}\n\n.seabird_center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.phone_seabird[_ngcontent-%COMP%] {\n  background: #BEF1ED;\n  \n\n  \n\n  align-items: center;\n  padding: 10px;\n  border-radius: 5px;\n  margin: 10px;\n  font-size: 12px;\n  font-weight: 700;\n  width: 155px;\n  text-align: center;\n}"]
});

/***/ }),

/***/ 17516:
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterPipe: () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
var _FilterPipe;

class FilterPipe {
  transform(items, field, value) {
    if (!items) return [];
    let rtItems = items;
    try {
      rtItems = items.filter(it => it[field].toLowerCase().indexOf(value.toLowerCase()) > -1);
    } finally {
      return rtItems;
    }
  }
}
_FilterPipe = FilterPipe;
_FilterPipe.ɵfac = function FilterPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FilterPipe)();
};
_FilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "filter",
  type: _FilterPipe,
  pure: true
});

/***/ }),

/***/ 867:
/*!***************************************!*\
  !*** ./src/app/pipes/orderby.pipe.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderbyPipe: () => (/* binding */ OrderbyPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
var _OrderbyPipe;

class OrderbyPipe {
  transform(array, orderByValue, orderType = 'ASC') {
    if (!array || !orderByValue) {
      return array;
    }
    return array.sort((a, b) => {
      if (orderType === 'ASC') {
        if (a[orderByValue] < b[orderByValue]) return -1;
        if (a[orderByValue] > b[orderByValue]) return 1;
        return 0;
      } else {
        if (a[orderByValue] < b[orderByValue]) return 1;
        if (a[orderByValue] > b[orderByValue]) return -1;
        return 0;
      }
    });
  }
}
_OrderbyPipe = OrderbyPipe;
_OrderbyPipe.ɵfac = function OrderbyPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OrderbyPipe)();
};
_OrderbyPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "orderby",
  type: _OrderbyPipe,
  pure: true
});

/***/ }),

/***/ 16688:
/*!**********************************************************************!*\
  !*** ./src/app/white-common-header/white-common-header.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WhiteCommonHeaderComponent: () => (/* binding */ WhiteCommonHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 70600);
var _WhiteCommonHeaderComponent;





function WhiteCommonHeaderComponent_ion_col_2_ion_buttons_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-buttons", 8)(1, "ion-back-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteCommonHeaderComponent_ion_col_2_ion_buttons_1_Template_ion_back_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.handleBackButton());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function WhiteCommonHeaderComponent_ion_col_2_ion_buttons_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-buttons", 8)(1, "ion-back-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhiteCommonHeaderComponent_ion_col_2_ion_buttons_2_Template_ion_back_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function WhiteCommonHeaderComponent_ion_col_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WhiteCommonHeaderComponent_ion_col_2_ion_buttons_1_Template, 2, 0, "ion-buttons", 7)(2, WhiteCommonHeaderComponent_ion_col_2_ion_buttons_2_Template, 2, 0, "ion-buttons", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showsubtitle != "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showsubtitle == "true");
  }
}
function WhiteCommonHeaderComponent_ion_label_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.showsubtitle == "true" ? "themeone-header-title-bpdp" : "themeone-header-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.title, "");
  }
}
function WhiteCommonHeaderComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function WhiteCommonHeaderComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span")(1, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.subtitle, "");
  }
}
function WhiteCommonHeaderComponent_ion_col_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-col", 13);
  }
}
class WhiteCommonHeaderComponent {
  constructor(route, router, navCtrl, location) {
    this.route = route;
    this.router = router;
    this.navCtrl = navCtrl;
    this.location = location;
    this.title = "";
    this.showsubTxt = "";
    this.showsubtitle = "";
    this.subtitle = "";
    this.isreturnTrip = false;
  }
  ngOnInit() {}
  goBack() {
    this.route.queryParams.subscribe(params => {
      this.isreturnTrip = params["is_return_trip"];
    });
    if (this.isreturnTrip) {
      let navigationExtras = {
        queryParams: {
          is_return_trip: true
        }
      };
      this.navCtrl.navigateForward('seat-layout', navigationExtras);
    } else {
      this.router.navigate(['/seat-layout']);
    }
  }
  handleBackButton() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['tabs/home']);
    }
  }
}
_WhiteCommonHeaderComponent = WhiteCommonHeaderComponent;
_WhiteCommonHeaderComponent.ɵfac = function WhiteCommonHeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WhiteCommonHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location));
};
_WhiteCommonHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _WhiteCommonHeaderComponent,
  selectors: [["app-white-common-header"]],
  inputs: {
    title: "title",
    showsubTxt: "showsubTxt",
    showsubtitle: "showsubtitle",
    subtitle: "subtitle"
  },
  decls: 8,
  vars: 5,
  consts: [[1, "themeone-common-header"], ["size", "2", "style", "padding-left: 10px;", 4, "ngIf"], [1, "themeone-col-header"], ["class", "themeone-header-title", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], ["size", "2", 4, "ngIf"], ["size", "2", 2, "padding-left", "10px"], ["mode", "md", 4, "ngIf"], ["mode", "md"], [2, "color", "#333333", 3, "click"], [1, "themeone-header-title", 3, "ngClass"], ["src", "./assets/icon/cbusheader_icon.svg", 1, "themeone-header-logo"], [1, "themeone-header-title-bpdp", 2, "font-weight", "500", "font-size", "12px"], ["size", "2"]],
  template: function WhiteCommonHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WhiteCommonHeaderComponent_ion_col_2_Template, 3, 2, "ion-col", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-col", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WhiteCommonHeaderComponent_ion_label_4_Template, 2, 2, "ion-label", 3)(5, WhiteCommonHeaderComponent_span_5_Template, 2, 0, "span", 4)(6, WhiteCommonHeaderComponent_span_6_Template, 3, 1, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WhiteCommonHeaderComponent_ion_col_7_Template, 1, 0, "ion-col", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showsubTxt == "true");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showsubTxt == "true");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showsubTxt == "false");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showsubtitle == "true");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showsubTxt == "true");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".themeone-common-header[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  text-align: center;\n  padding: 5px 0px;\n}\n\n.themeone-header-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #333;\n}\n\n.themeone-col-header[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  color: #000;\n}\n\n.themeone-header-logo[_ngcontent-%COMP%] {\n  height: 49px;\n  width: 273px;\n  margin-top: 3px;\n}\n\n.themeone-header-title-bpdp[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #000;\n}"]
});

/***/ })

}]);