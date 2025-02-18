"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[1598],{

/***/ 91598:
/*!***********************************************************!*\
  !*** ./src/app/add-money-wallet/add-money-wallet.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddMoneyWalletPage: () => (/* binding */ AddMoneyWalletPage)
/* harmony export */ });
/* harmony import */ var _Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _modal_payment_modal_payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-payment/modal-payment.page */ 59140);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/firebase-analytics.service */ 47402);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 89417);

var _AddMoneyWalletPage;
// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
















const _c0 = ["amountInput"];
const _c1 = a0 => ({
  "selected": a0
});
const _c2 = () => ({
  "padding": "10px"
});
const _c3 = () => ({});
function AddMoneyWalletPage_ng_container_0_ion_content_10_ion_card_21_div_6_ion_item_1_ion_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](payType_r5.name);
  }
}
function AddMoneyWalletPage_ng_container_0_ion_content_10_ion_card_21_div_6_ion_item_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "img", 23);
  }
}
function AddMoneyWalletPage_ng_container_0_ion_content_10_ion_card_21_div_6_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AddMoneyWalletPage_ng_container_0_ion_content_10_ion_card_21_div_6_ion_item_1_ion_label_1_Template, 2, 1, "ion-label", 1)(2, AddMoneyWalletPage_ng_container_0_ion_content_10_ion_card_21_div_6_ion_item_1_img_2_Template, 1, 0, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "ion-radio", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.isRazorpayPg == false || payType_r5.id != "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", payType_r5.name == "Razorpay" && payType_r5.id == "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", payType_r5 ? payType_r5.id : "");
  }
}
function AddMoneyWalletPage_ng_container_0_ion_content_10_ion_card_21_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AddMoneyWalletPage_ng_container_0_ion_content_10_ion_card_21_div_6_ion_item_1_Template, 4, 3, "ion-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", payType_r5.name.toUpperCase().indexOf("EBS") < 0);
  }
}
function AddMoneyWalletPage_ng_container_0_ion_content_10_ion_card_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-card", 17)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Payment options");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 18)(4, "ion-list")(5, "ion-radio-group", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function AddMoneyWalletPage_ng_container_0_ion_content_10_ion_card_21_Template_ion_radio_group_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.paymentType, $event) || (ctx_r1.paymentType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, AddMoneyWalletPage_ng_container_0_ion_content_10_ion_card_21_div_6_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.paymentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.payMentGateWayTypes);
  }
}
function AddMoneyWalletPage_ng_container_0_ion_content_10_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 8)(1, "ion-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_0_ion_content_10_div_22_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.addMoney(ctx_r1.amount ? ctx_r1.amount : ctx_r1.walletBalance, ctx_r1.paymentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Continue to payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AddMoneyWalletPage_ng_container_0_ion_content_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-content", 8)(1, "ion-card", 9)(2, "div", 10)(3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Please Enter Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 12)(6, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function AddMoneyWalletPage_ng_container_0_ion_content_10_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.amount, $event) || (ctx_r1.amount = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div")(8, "ion-chip", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_0_ion_content_10_Template_ion_chip_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.setSelectedOption(100));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "ion-chip", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_0_ion_content_10_Template_ion_chip_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.setSelectedOption(200));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "ion-chip", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_0_ion_content_10_Template_ion_chip_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.setSelectedOption(500));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "ion-chip", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_0_ion_content_10_Template_ion_chip_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.setSelectedOption(1000));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, AddMoneyWalletPage_ng_container_0_ion_content_10_ion_card_21_Template, 7, 2, "ion-card", 15)(22, AddMoneyWalletPage_ng_container_0_ion_content_10_div_22_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](23, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("placeholder", "", ctx_r1.currencySym, " Enter Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](13, _c1, ctx_r1.isSelected(100)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r1.currencySym, " 100");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](15, _c1, ctx_r1.isSelected(200)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r1.currencySym, " 200");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](17, _c1, ctx_r1.isSelected(500)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r1.currencySym, " 500");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](19, _c1, ctx_r1.isSelected(1000)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r1.currencySym, " 1000");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.pgLength > "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r1.paymentStart);
  }
}
function AddMoneyWalletPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-header")(2, "ion-row")(3, "ion-col", 2)(4, "ion-buttons", 3)(5, "ion-back-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_0_Template_ion_back_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.goback());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "ion-col", 5)(7, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Add Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, AddMoneyWalletPage_ng_container_0_ion_content_10_Template, 24, 21, "ion-content", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r1.paymentStart);
  }
}
function AddMoneyWalletPage_ng_container_1_ion_content_8_ion_card_11_div_6_ion_item_1_ion_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](payType_r10.name);
  }
}
function AddMoneyWalletPage_ng_container_1_ion_content_8_ion_card_11_div_6_ion_item_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "img", 23);
  }
}
function AddMoneyWalletPage_ng_container_1_ion_content_8_ion_card_11_div_6_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AddMoneyWalletPage_ng_container_1_ion_content_8_ion_card_11_div_6_ion_item_1_ion_label_1_Template, 2, 1, "ion-label", 1)(2, AddMoneyWalletPage_ng_container_1_ion_content_8_ion_card_11_div_6_ion_item_1_img_2_Template, 1, 0, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "ion-radio", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.isRazorpayPg == false || payType_r10.id != "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.isRazorpayPg == true && payType_r10.id == "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", payType_r10 ? payType_r10.id : "");
  }
}
function AddMoneyWalletPage_ng_container_1_ion_content_8_ion_card_11_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AddMoneyWalletPage_ng_container_1_ion_content_8_ion_card_11_div_6_ion_item_1_Template, 4, 3, "ion-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", payType_r10.name.toUpperCase().indexOf("EBS") < 0);
  }
}
function AddMoneyWalletPage_ng_container_1_ion_content_8_ion_card_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-card", 17)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Select Payment Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 31)(4, "ion-list")(5, "ion-radio-group", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function AddMoneyWalletPage_ng_container_1_ion_content_8_ion_card_11_Template_ion_radio_group_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.paymentType, $event) || (ctx_r1.paymentType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, AddMoneyWalletPage_ng_container_1_ion_content_8_ion_card_11_div_6_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.paymentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.payMentGateWayTypes);
  }
}
function AddMoneyWalletPage_ng_container_1_ion_content_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-content", 8)(1, "ion-card", 17)(2, "div", 10)(3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Please Enter Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 12)(6, "ion-item", 29)(7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "ion-input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function AddMoneyWalletPage_ng_container_1_ion_content_8_Template_ion_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.amount, $event) || (ctx_r1.amount = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, AddMoneyWalletPage_ng_container_1_ion_content_8_ion_card_11_Template, 7, 2, "ion-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.currencySym);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.pgLength > "1");
  }
}
function AddMoneyWalletPage_ng_container_1_ion_footer_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-footer")(1, "div")(2, "ion-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_1_ion_footer_9_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.addMoney(ctx_r1.amount ? ctx_r1.amount : ctx_r1.walletBalance, ctx_r1.paymentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Add Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AddMoneyWalletPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 3)(3, "ion-title", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Add Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "ion-buttons", 26)(6, "ion-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_1_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, AddMoneyWalletPage_ng_container_1_ion_content_8_Template, 12, 3, "ion-content", 7)(9, AddMoneyWalletPage_ng_container_1_ion_footer_9_Template, 5, 0, "ion-footer", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r1.paymentStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r1.paymentStart);
  }
}
function AddMoneyWalletPage_ng_container_2_ion_card_16_div_6_ion_item_2_ion_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](payType_r14.name);
  }
}
function AddMoneyWalletPage_ng_container_2_ion_card_16_div_6_ion_item_2_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "img", 45);
  }
}
function AddMoneyWalletPage_ng_container_2_ion_card_16_div_6_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-item", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AddMoneyWalletPage_ng_container_2_ion_card_16_div_6_ion_item_2_ion_label_1_Template, 2, 1, "ion-label", 1)(2, AddMoneyWalletPage_ng_container_2_ion_card_16_div_6_ion_item_2_img_2_Template, 1, 0, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "ion-radio", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", payType_r14.id == "53" ? _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](4, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](5, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", payType_r14.id != "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", payType_r14.id == "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", payType_r14 ? payType_r14.id : "");
  }
}
function AddMoneyWalletPage_ng_container_2_ion_card_16_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "ion-card", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AddMoneyWalletPage_ng_container_2_ion_card_16_div_6_ion_item_2_Template, 4, 6, "ion-item", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const payType_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", payType_r14.name.toUpperCase().indexOf("EBS") < 0);
  }
}
function AddMoneyWalletPage_ng_container_2_ion_card_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-card", 17)(1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Select Payment options");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 31)(4, "ion-list")(5, "ion-radio-group", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function AddMoneyWalletPage_ng_container_2_ion_card_16_Template_ion_radio_group_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.paymentType, $event) || (ctx_r1.paymentType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, AddMoneyWalletPage_ng_container_2_ion_card_16_div_6_Template, 3, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.paymentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.payMentGateWayTypes);
  }
}
function AddMoneyWalletPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 33)(3, "ion-row")(4, "ion-col", 2)(5, "ion-buttons", 3)(6, "ion-back-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_2_Template_ion_back_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.goback());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "ion-col", 5)(8, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "Add Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "ion-content", 34)(12, "div", 35)(13, "ion-item", 36)(14, "ion-input", 37, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ionInput", function AddMoneyWalletPage_ng_container_2_Template_ion_input_ionInput_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.enforceMaxLength($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function AddMoneyWalletPage_ng_container_2_Template_ion_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.amount, $event) || (ctx_r1.amount = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, AddMoneyWalletPage_ng_container_2_ion_card_16_Template, 7, 2, "ion-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div")(18, "ion-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_2_Template_ion_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.addMoney(ctx_r1.amount ? ctx_r1.amount : ctx_r1.walletBalance, ctx_r1.paymentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "Add Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.currencySym);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("autofocus", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.pgLength > "0");
  }
}
class AddMoneyWalletPage {
  constructor(navCtrl, dateService, authenticate, util, theme, commonStorage, loader, apiFactory, platform, commonService, modalCtrl,
  // private iab: InAppBrowser,
  appData, modalController, params, alertController, router, firebaseAnalyticsService, loadingController) {
    this.navCtrl = navCtrl;
    this.dateService = dateService;
    this.authenticate = authenticate;
    this.util = util;
    this.theme = theme;
    this.commonStorage = commonStorage;
    this.loader = loader;
    this.apiFactory = apiFactory;
    this.platform = platform;
    this.commonService = commonService;
    this.modalCtrl = modalCtrl;
    this.appData = appData;
    this.modalController = modalController;
    this.params = params;
    this.alertController = alertController;
    this.router = router;
    this.firebaseAnalyticsService = firebaseAnalyticsService;
    this.loadingController = loadingController;
    this.paymentStart = false;
    this.formHtml = '';
    this.payUrl = '';
    this.resultScript = '';
    this.innerHtmlStr = '';
    this.amount = null;
    this.appData.newTheme = this.util.getNewTheme();
    this.walletBalance = params.get('wallectBalance');
    if (params.get('enterAmount')) {
      this.amount = params.get('enterAmount');
    }
    // this.commonService.gTrack("addwallet")
    this.payMentGateWayTypes = this.commonStorage.getItem("metaData").payMentGateWayTypes;
    let getId;
    for (let i = 0; i <= this.payMentGateWayTypes.length - 1; i++) {
      if (this.payMentGateWayTypes.length == 1) {
        this.paymentType = this.payMentGateWayTypes[i].id;
      }
      this.pgLength = this.payMentGateWayTypes.length;
    }
    this.currencySym = this.commonStorage.localGet('metaData') ? this.commonStorage.localGet('metaData').currencySym : '₹';
    this.innerHtmlStr = "<!DOCTYPE html><html><head><title>Redirecting to the payment page</title></head>" + "<body><b>please wait we are redirecting to the payment page....</b>" + "<form id='payMentGateWayForm' name='payMentGateWayForm'></form>" + "<form id='ts-app-payment-form-redirect'></form><div id='ts-app-payment-form-redirect-div'></div>" + "</body></html>";
    this.metaData = this.commonStorage.localGet("metaData");
    this.isRazorpayPg = this.metaData.isRazorpayPg;
    this.prepareGateways(this.payMentGateWayTypes);
    this.options = {
      toolbar: {
        height: 56,
        color: this.theme.primary
      },
      title: {
        color: '#ffffffff',
        staticText: 'Payment',
        showPageTitle: true
      },
      customButtons: [{
        wwwImage: 'assets/icon/back_button.png',
        wwwImagePressed: 'assets/icon/back_button.png',
        align: 'left',
        event: 'backPressed'
      }]
    };
  }
  ngOnInit() {
    this.amount = this.walletBalance;
  }
  emcription(serverDate, subdomain) {
    const [first, second] = serverDate.split('T');
    serverDate = first.replace('-', '');
    serverDate = serverDate.replace('-', '');
    var res = subdomain.concat(serverDate);
    var halfEncryptData = btoa(res);
    return halfEncryptData;
  }
  ionViewWillLoad() {
    // this.commonService.gTrack('addWallet','“Add Money” button is clicked in Wallet page')
  }
  ionViewDidEnter() {
    setTimeout(() => {
      if (this.amountInput) {
        this.amountInput.setFocus();
      }
    }, 100);
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
  prepareGateways(paymetTypes) {
    // this.bankingPayments = paymetTypes.filter(it => it.id.indexOf('4') < 0);
    // this.walletPayments = paymetTypes.filter(it => it.id.indexOf('4') >= 0);
  }
  setSelectedOption(option) {
    if (this.amount === option) {
      this.amount = '';
    } else {
      this.amount = option;
    }
  }
  isSelected(option) {
    return this.amount === option;
  }
  accountDeRegisterAlert(title, msg) {
    var _this = this;
    return (0,_Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: title,
        message: msg,
        backdropDismiss: false,
        buttons: [{
          text: 'Ok',
          handler: () => {
            _this.authenticate.logout();
            _this.navCtrl.navigateForward('tabs/home');
          }
        }]
      });
      yield alert.present();
    })();
  }
  openInNewTab(url) {
    var link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.click();
  }
  addMoney(amount, paymentType) {
    if (!amount) {
      this.util.showToast("Please enter amount");
      return;
    } else {
      // amount = amount.toFixed(2);
    }
    if (!paymentType) {
      this.util.showToast("Please select payment option");
      return;
    }
    let platformNumber;
    // if (this.util.platformName() == 'IOS') {
    //   platformNumber = 9;
    // } else if (this.util.platformName() == 'Android') {
    //   platformNumber = 10;
    // } else {
    //   platformNumber = 11;
    // }
    if (this.util.isWebApp()) {
      platformNumber = '6';
    } else if (this.util.isIos() && !this.util.isWebApp()) {
      platformNumber = '9';
    } else {
      platformNumber = '10';
    }
    // amount = amount.toFixed(2);
    this.loader.showLoadingDefault();
    this.apiFactory.addMoneyToWallet(amount, paymentType, '6').subscribe(res => {
      // this.commonService.gTrack('addWallet','adding money to wallet success')
      this.loader.hideLoadingDefault();
      if (res.code == 400) {
        this.util.showToast(res.message);
      } else if (res.code == 422) {
        this.accountDeRegisterAlert("", res.message);
      } else {
        if ('is_razorpay_payment' in res) {
          if (res.is_razorpay_payment == true) {
            if (res.amount != null && res.merchant_id != null && res.order_id != null && res.secret_key != null) {
              this.payWithRazorpay(res);
            }
          }
        }
        if (this.paymentType == "55") {
          if (this.appData.isWEBAPP) {
            // window.open(res.payment_link);
            this.openInNewTab(res.payment_link);
          } else if (this.appData.isIOS && !this.appData.isWEBAPP) {
            // const browser = this.iab.create(res.payment_link + "", '_blank', this.options);
            // browser.on('loadstart').subscribe(event => {
            //     if(event.url.indexOf('add-money-wallet-confirm') > -1) {
            //       // this.commonService.gTrack('addwallet','adding money to wallet success')
            //       this.firebaseAnalyticsService.logCustomEvent('payment_success', { page: 'Add Money Wallet' });
            //       browser.close();
            //         this.modalCtrl.dismiss('success');
            //       }else if(event.url.indexOf('add-money-wallet-cancel') > -1){
            //         this.firebaseAnalyticsService.logCustomEvent('payment_failed', { page: 'Add Money Wallet' });
            //         browser.close()
            //         this.modalCtrl.dismiss();
            //       }
            // });
          }
        }
        if (this.paymentType == "57") {
          setTimeout(() => {
            // Your jQuery code here
            const accessKey = res.access_key;
            const options = {
              access_key: accessKey,
              onResponse: response => {
                window.location.href = res.redirect_url + '&pnr_number=' + response['txnid'] + "&amount=" + response['amount'] + "&email=" + response['email'] + "&phone=" + response['phone'] + '&product_info=easebuzz';
                ;
              },
              theme: '#123456'
            };
            // Your jQuery code here
            const easebuzzCheckout = new EasebuzzCheckout(res.key, 'prod');
            easebuzzCheckout.initiatePayment(options);
          }, 1000);
        }
        if (this.paymentType == '45') {
          var halfKey = this.emcription(this.metaData.serverDate, this.metaData.subdomain);
          let marchantKey = atob(res.merchant_id);
          marchantKey = marchantKey.replace(halfKey, '');
          if (this.appData.isWEBAPP) {
            var options = {
              "features": {
                "enableExpressPay": true,
                "enableInstrumentDeRegistration": true,
                "enableMerTxnDetails": true,
                "enableNewWindowFlow": true
              },
              "consumerData": {
                "deviceId": "WEBSH2",
                "token": res.token,
                "paymentMode": "all",
                "merchantLogoUrl": "https://www.paynimo.com/CompanyDocs/company-logo-vertical-light.png",
                //provided merchant logo will be displayed
                "merchantId": marchantKey,
                "currency": "INR",
                "consumerId": res.consumer_id,
                "consumerMobileNo": res.consumer_mobile_no,
                "consumerEmailId": res.consumer_email_id,
                "txnId": res.txn_id,
                //Unique merchant transaction ID
                "items": [{
                  "itemId": "FIRST",
                  "amount": res.amount,
                  // "comAmt": result.Amount
                  // "amount": "8",
                  "comAmt": "0"
                }],
                "customStyle": {
                  "PRIMARY_COLOR_CODE": "#45beaa",
                  //merchant primary color code
                  "SECONDARY_COLOR_CODE": "#FFFFFF",
                  //provide merchant"s suitable color code
                  "BUTTON_COLOR_CODE_1": "#2d8c8c",
                  //merchant"s button background color code
                  "BUTTON_COLOR_CODE_2": "#FFFFFF" //provide merchant"s suitable color code for button text
                }
              }
            };
            var paymentCallback = response => {
              let techSuccessMsg = response.msg;
              let msgCase = techSuccessMsg.split('|')[0];
              if (msgCase == '0300') {
                let merchantId = response.merchant_code;
                var halfKey = this.emcription(this.metaData.serverDate, this.metaData.subdomain);
                let message = btoa(techSuccessMsg);
                message = message.replace(halfKey, '');
                //  this.commonService.gTrack('addWallet','adding money to wallet success');
                this.firebaseAnalyticsService.logCustomEvent('payment_success', {
                  page: 'Add Money Wallet'
                });
                //this.util.showToast('Money added to wallet successfully', 'bottom');
                this.modalCtrl.dismiss('success');
                this.apiFactory.techProcessWalletCall(merchantId, res.amount, message).subscribe(result => {}, err => {});
              } else if (msgCase != '0300' || !msgCase) {
                //  this.commonService.gTrack('addwallet','adding money to wallet failed');
                this.firebaseAnalyticsService.logCustomEvent('payment_failed', {
                  page: 'Add Money Wallet'
                });
                this.util.showToast('Payment failed', 'bottom');
              }
            };
            var errorCallback = error => {
              // this.commonService.gTrack('addwallet','adding money to wallet failed');
              this.firebaseAnalyticsService.logCustomEvent('payment_failed', {
                page: 'Add Money Wallet'
              });
              this.util.showToast('Payment failed', 'bottom');
            };
            WLCheckout.open(options, paymentCallback, errorCallback);
          } else if (this.appData.isIOS) {
            var options = {
              "features": {
                "enableExpressPay": true,
                "enableInstrumentDeRegistration": true,
                "enableMerTxnDetails": true,
                "enableNewWindowFlow": true
              },
              "consumerData": {
                "deviceId": "iOSSH2",
                //supported values "ANDROIDSH1" or "ANDROIDSH2" for Android and supported values "iOSSH1" or "iOSSH2" for iOS
                //result.payment_mode
                "token": res.token,
                "paymentMode": "all",
                "merchantLogoUrl": "https://www.paynimo.com/CompanyDocs/company-logo-vertical-light.png",
                //provided merchant logo will be displayed
                "merchantId": marchantKey,
                "currency": "INR",
                "consumerId": res.consumer_id,
                "consumerMobileNo": res.consumer_mobile_no,
                "consumerEmailId": res.consumer_email_id,
                "txnId": res.txn_id,
                //Unique merchant transaction ID
                "items": [{
                  "itemId": "FIRST",
                  "amount": res.amount,
                  // "comAmt": result.Amount
                  // "amount": "8",
                  "comAmt": "0"
                }],
                "customStyle": {
                  "PRIMARY_COLOR_CODE": "#45beaa",
                  //merchant primary color code
                  "SECONDARY_COLOR_CODE": "#FFFFFF",
                  //provide merchant"s suitable color code
                  "BUTTON_COLOR_CODE_1": "#2d8c8c",
                  //merchant"s button background color code
                  "BUTTON_COLOR_CODE_2": "#FFFFFF" //provide merchant"s suitable color code for button text
                }
              }
            };
            var paymentCallback = response => {
              let techSuccessMsg = JSON.parse(response).msg;
              let msgCase = techSuccessMsg.split('|')[0];
              if (msgCase == '0300') {
                let merchantId = response.merchant_code;
                var halfKey = this.emcription(this.metaData.serverDate, this.metaData.subdomain);
                let message = btoa(techSuccessMsg);
                message = message.replace(halfKey, '');
                //  this.commonService.gTrack('addWallet','adding money to wallet success');
                this.firebaseAnalyticsService.logCustomEvent('payment_success', {
                  page: 'Add Money Wallet'
                });
                this.modalCtrl.dismiss('success');
                this.apiFactory.techProcessWalletCall(merchantId, res.amount, message).subscribe(result => {}, err => {});
              } else if (msgCase != '0300' || !msgCase) {
                // this.commonService.gTrack('addwallet','adding money to wallet failed');
                this.firebaseAnalyticsService.logCustomEvent('payment_failed', {
                  page: 'Add Money Wallet'
                });
                this.util.showToast('Payment failed', 'bottom');
              }
            };
            var errorCallback = error => {
              // this.commonService.gTrack('addwallet','adding money to wallet failed');
              this.firebaseAnalyticsService.logCustomEvent('payment_failed', {
                page: 'Add Money Wallet'
              });
              this.util.showToast('Payment failed', 'bottom');
            };
            WLCheckout.open(options, paymentCallback, errorCallback);
          }
        }
        if (res.payment_url) {
          // this.commonService.gTrack("addwalletsuccess")
          this.openBrowser(res.payment_url, res);
        }
      }
    }, err => {
      this.loader.hideLoadingDefault();
    });
  }
  gotoPaymentModal(url) {
    var _this2 = this;
    return (0,_Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let modal = yield _this2.modalController.create({
        component: _modal_payment_modal_payment_page__WEBPACK_IMPORTED_MODULE_1__.ModalPaymentPage,
        componentProps: {
          formHtml: _this2.resultScript,
          url: url
        }
      });
      yield modal.present();
    })();
  }
  enforceMaxLength(event) {
    const input = event.target;
    let sanitizedValue = input.value.replace(/[^0-9]/g, '');
    input.value = sanitizedValue;
    if (this.amount !== undefined) {
      this.amount = sanitizedValue;
    } else {
      this.walletBalance = sanitizedValue;
    }
  }
  payWithRazorpay(ticketData) {
    var halfKey = this.emcription(this.metaData.serverDate, this.metaData.subdomain);
    let marchantKey = atob(ticketData.merchant_id);
    marchantKey = marchantKey.replace(halfKey, '');
    let imageUrl = '';
    if (this.metaData.msiteFolder == 'ourbustheme') {
      imageUrl = this.metaData.favicon ? this.metaData.favicon : 'https://i.imgur.com/3g7nmJC.png';
    } else {
      imageUrl = this.metaData.favicon ? this.metaData.favicon : 'https://i.imgur.com/3g7nmJC.png';
    }
    var options = {
      description: 'Add money in the wallet.',
      image: imageUrl,
      order_id: ticketData.order_id,
      currency: 'INR',
      key: marchantKey,
      amount: ticketData.amount,
      prefill: {
        name: ticketData.passenger_name,
        email: ticketData.email_id,
        contact: ticketData.phone_no
      },
      theme: {
        color: '#3399cc'
      }
    };
    var successCallback = success => {
      // this.commonService.gTrack('addWallet','adding money to wallet success');
      this.firebaseAnalyticsService.logCustomEvent('razorpay_payment_success', {
        page: 'Add Money Wallet'
      });
      var orderId = success.razorpay_order_id;
      var signature = success.razorpay_signature;
      this.apiFactory.addmoneySuccess(ticketData.amount, ticketData.customer_transaction_id, success.razorpay_payment_id).subscribe(data => {}, err => {});
      this.navigateWithLoader();
    };
    var cancelCallback = error => {
      // alert(error.description + ' (Error '+error.code+')');
      // this.commonService.gTrack('addwallet','adding money to wallet failed');
      this.firebaseAnalyticsService.logCustomEvent('razorpay_payment_failed', {
        page: 'Add Money Wallet'
      });
      // this.util.showToast('Payment failed', 'bottom');
      this.apiFactory.addmoneyFailure(ticketData.amount, ticketData.customer_transaction_id, ticketData.order_id).subscribe(data => {
        // this.commonService.gTrack('addWallet','adding money to wallet success')
      }, err => {});
      this.navigateWithLoader1();
    };
    RazorpayCheckout.on('payment.success', successCallback);
    RazorpayCheckout.on('payment.cancel', cancelCallback);
    RazorpayCheckout.open(options);
  }
  navigateWithLoader() {
    var _this3 = this;
    return (0,_Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this3.loadingController.create({
        message: 'Please wait...',
        duration: 3000
      });
      yield loading.present();
      loading.onDidDismiss().then(() => {
        _this3.util.showToast('Money added to wallet successfully', 'bottom');
        _this3.modalCtrl.dismiss('success');
      });
    })();
  }
  navigateWithLoader1() {
    var _this4 = this;
    return (0,_Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this4.loadingController.create({
        message: 'Please wait...',
        duration: 3000
      });
      yield loading.present();
      loading.onDidDismiss().then(() => {
        // this.commonService.gTrack('addwallet','adding money to wallet failed');
        _this4.util.showToast('Payment failed', 'bottom');
      });
    })();
  }
  addpaymentsave(amount, customer_transaction_id, razorpay_payment_id) {
    this.apiFactory.addmoneySuccess(amount, customer_transaction_id, razorpay_payment_id).subscribe(data => {
      // this.commonService.gTrack('addWallet','adding money to wallet success')
    }, err => {});
  }
  openBrowser(url, data) {
    if (this.platform.is('cordova') && !this.util.isWebApp()) {
      let formHtml = '';
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          let value = data[key];
          if (key == "passenger_contact_details" || key == "passengers_details") {
            value = encodeURIComponent(value);
          }
          let value2 = '';
          if (value) {
            value2 = value.toString().replace(/\n/g, '');
          }
          formHtml += '<input type="hidden" value="' + value2 + '" id="' + key + '" name="' + key + '"/>';
        }
      }
      let payScript = "";
      payScript += "var form = document.getElementById('ts-app-payment-form-redirect');";
      payScript += "form.innerHTML = `" + formHtml + "`;";
      payScript += "form.action = '" + url + "';";
      payScript += "form.method = 'POST';";
      payScript += "form.submit();";
      // const browser = this.iab.create(this.appData.BASE_URL + "bookings/payment_gateway_redirect_page", '_blank', 'location=yes');
      let self = this;
      // browser.on('loadstart').subscribe((event : any) => {
      //   if (event.url.indexOf("status=0") > -1 || event.url.indexOf("pnr_number") > -1) {
      //     this.firebaseAnalyticsService.logCustomEvent('payment_success', { page: 'Add Money Wallet' });
      //     browser.close();
      //   } else if (event.url.indexOf("ticket_failure") > -1 || event.url.indexOf("status=1") > -1) {
      //     // this.commonService.gTrack('addwallet','adding money to wallet failed')
      //     this.firebaseAnalyticsService.logCustomEvent('payment_failed', { page: 'Add Money Wallet' });
      //     browser.close()
      //   }
      // });
      // browser.on('loadstop').subscribe((event : any) => {
      //   browser.executeScript({
      //     code: "var key = 'hidden'; var keyval = 'yes'; localStorage.setItem('hidden',''); var button = document.createElement('Button'); button.innerHTML = 'Hide Map'; button.style = 'top:0;right:0;position:fixed;'; document.body.appendChild(button); button.setAttribute('onclick','localStorage.setItem(key,keyval);');"
      //   });
      //   var loop = setInterval(function () {
      //     browser.executeScript({
      //       code: "localStorage.getItem( 'hidden' )"
      //     }),
      //       function (values : any) {
      //         var hidden = values[0];
      //         if (hidden === 'yes') {
      //           clearInterval(loop);
      //           browser.hide();
      //         }
      //       }
      //   });
      //     browser.insertCSS({ code: "input{-webkit-user-select: none !important;}input[type=submit],input[type=button]{-webkit-user-select: auto !important;}" });
      //   if (event.url.indexOf("redirect") > -1) {
      //     browser.executeScript({
      //       code: payScript
      //     });
      //   }
      // });
      // browser.on('exit').subscribe((event : any) => {
      // });
    } else {
      // web browser
      let formHtml = '';
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          let value = data[key];
          if (key == "passenger_contact_details" || key == "passengers_details") {
            value = encodeURIComponent(value);
          }
          let value2 = '';
          if (value) {
            value2 = value.toString().replace(/\n/g, '');
          }
          formHtml += '<input type="hidden" value="' + value2 + '" id="' + key + '" name="' + key + '"/>';
        }
      }
      let form = document.getElementById('payMentGateWayForm');
      form.innerHTML = formHtml;
      form.action = url;
      form.method = "POST";
      form.submit();
      // this.openPaymentModel(formHtml,result.pay_gay_url);
    }
  }
  openBrowser1(url, data) {
    this.paymentStart = true;
    this.iframeLoad();
    let form = document.getElementById('payMentGateWayForm');
    if (this.platform.is('cordova')) {
      let formHtml = '';
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          let value = data[key];
          if (key == "passenger_contact_details" || key == "passengers_details") {
            value = encodeURIComponent(value);
          }
          let value2 = '';
          if (value) {
            value2 = value.toString().replace(/\n/g, '');
          }
          formHtml += '<input type="hidden" value="' + value2 + '" id="' + key + '" name="' + key + '"/>';
        }
      }
      if (!(this.paymentType == "31")) {
        form.innerHTML = formHtml;
      }
      this.resultScript = formHtml;
      this.gotoPaymentModal(url);
    } else {
      form.action = url;
      form.method = "POST";
      form.submit();
    }
  }
  iframeLoad() {
    try {
      let iframe = document.getElementById("pay-iframe");
      let iframeData = {
        formHtml: this.formHtml,
        payUrl: this.payUrl
      };
      iframe.contentWindow.postMessage(iframeData, "*");
      let returnUrl = iframe.contentWindow.location.href;
      if (iframe.contentWindow.location.href.indexOf("ticket_confirm") > 0) {
        let pnrNumber = returnUrl.substr(returnUrl.lastIndexOf('pnr_number:') + 11);
      } else if (iframe.contentWindow.location.href.indexOf("failure") > 0) {}
    } catch (e) {}
  }
  goback() {
    this.modalController.dismiss();
  }
}
_AddMoneyWalletPage = AddMoneyWalletPage;
_AddMoneyWalletPage.ɵfac = function AddMoneyWalletPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddMoneyWalletPage)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_2__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_4__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_5__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_6__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_7__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_8__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_9__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_10__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_11__.FirebaseAnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.LoadingController));
};
_AddMoneyWalletPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: _AddMoneyWalletPage,
  selectors: [["app-add-money-wallet"]],
  viewQuery: function AddMoneyWalletPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.amountInput = _t.first);
    }
  },
  standalone: false,
  decls: 3,
  vars: 3,
  consts: [["amountInput", ""], [4, "ngIf"], ["size", "2"], ["mode", "md"], [2, "color", "#000", 3, "click"], [1, "themeone-col-header"], [1, "themeone-header-title"], ["padding", "", 4, "ngIf"], ["padding", ""], [1, "card-1", 2, "margin-bottom", "0px"], [1, "amount"], [1, "Contact-details"], [1, "pay-box"], ["type", "number", 3, "ngModelChange", "placeholder", "ngModel"], [3, "click", "ngClass"], ["class", "card-1 mr-tp-16", 4, "ngIf"], ["id", "payMentGateWayForm", "name", "payMentGateWayForm"], [1, "card-1", "mr-tp-16"], [1, "themeone-pay-box-payment"], ["mode", "md", 3, "ngModelChange", "ngModel"], [4, "ngFor", "ngForOf"], ["class", "razorpayImage", "src", "./assets/icon/Razorpay_Secure_Payment-1.png", "alt", "", 4, "ngIf"], ["slot", "start", 3, "value"], ["src", "./assets/icon/Razorpay_Secure_Payment-1.png", "alt", "", 1, "razorpayImage"], ["mode", "md", "expand", "block", 1, "themeone-login-btn", 3, "click"], [2, "font-size", "15px"], ["slot", "start"], ["mode", "md", 2, "font-size", "18px", 3, "click"], ["name", "arrow-back", "color", "default"], ["lines", "none"], ["type", "number", 3, "ngModelChange", "ngModel"], [1, "pay-box", "payment"], ["mode", "md", "expand", "block", 1, "SeaBird_login-btn", 3, "click"], [2, "--background", "#fff"], [1, "ourbustheme"], [2, "padding-top", "10px"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", "amountField"], ["fill", "outline", "label", "Please enter amount", "labelPlacement", "floating", "type", "tel", "maxlength", "6", 2, "color", "var(--sectionHeaderTextColor)", "background", "#fff", 3, "ionInput", "ngModelChange", "autofocus", "placeholder", "ngModel"], ["mode", "md", "expand", "block", 1, "login-btn1", 3, "click"], [1, "Contact-details", 2, "margin-left", "10px", "font-weight", "normal !important", "padding-bottom", "10px"], [1, "ion-no-paading"], ["lines", "none", 3, "ngStyle", 4, "ngIf"], ["lines", "none", 3, "ngStyle"], ["class", "razorpayImage", "src", "./assets/icon/Razorpay_Secure_Payment-1.png", 4, "ngIf"], ["slot", "end", 1, "ourbus-ion-radio", 3, "value"], ["src", "./assets/icon/Razorpay_Secure_Payment-1.png", 1, "razorpayImage"]],
  template: function AddMoneyWalletPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, AddMoneyWalletPage_ng_container_0_Template, 11, 1, "ng-container", 1)(1, AddMoneyWalletPage_ng_container_1_Template, 10, 2, "ng-container", 1)(2, AddMoneyWalletPage_ng_container_2_Template, 21, 4, "ng-container", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "seabirdTheme" || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonBackButton],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --ion-background-color:#f7f9fb;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background:var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  position: fixed;\n  bottom: 0;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.login-btn1[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background:var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  height: 50px;\n  border-radius: 4px;\n  margin: 0px 8px;\n}\n\n.pay-box[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-bottom: 15px;\n}\n\n.content-md[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n}\n\n.amount[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  text-align: left;\n}\n.amount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #ddd;\n  text-align: left;\n  font-size: 1.4em;\n}\n.amount[_ngcontent-%COMP%]   .Contact-details[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n\n.mr-tp-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.Contact-details[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: var(--sectionHeaderTextColor);\n}\n\nion-item.item.item-block.item-radio[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   ion-label.label[_ngcontent-%COMP%] {\n  color: #000;\n  text-overflow: initial;\n  white-space: normal;\n}\n\nion-list[_ngcontent-%COMP%] {\n  margin: 0;\n  --ion-background-color: white;\n}\nion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\nion-radio-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  color: #3e3e52;\n}\n\nlist-md[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\n.head[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.bg-cl[_ngcontent-%COMP%] {\n  --background: #ffdd21 !important;\n}\n\n.bg-content[_ngcontent-%COMP%] {\n  --background: #e4e5e6;\n}\n\n.card-1[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 16px 12px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n}\n\nion-select[_ngcontent-%COMP%]   ion-select-option[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  color: #3e3e52;\n}\nion-select[_ngcontent-%COMP%]   ion-select-option[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  color: #3e3e52;\n}\n\n.item[_ngcontent-%COMP%]   .sc-ion-label-md-h[_ngcontent-%COMP%], \n.item.sc-ion-label-md-h[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  color: #3e3e52;\n}\n\nion-radio-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  color: #3e3e52;\n}\n\n.themeone-login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: #F2C21A;\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  color: #191966;\n  position: fixed;\n  bottom: 10px;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.themeone-pay-box-payment[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n  padding: 35px 4px;\n  margin-top: 15px;\n}\n\n.selected[_ngcontent-%COMP%] {\n  color: #191966;\n  background: #F2C21A;\n}\n\nion-chip[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.themeone-col-header[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  color: #000;\n}\n\n.themeone-header-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #000;\n}\n\n.SeaBird_login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background:var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  position: fixed;\n  bottom: 15px;\n  height: 50px;\n  --border-radius: 26px;\n}\n\n.ourbus_custom_input[_ngcontent-%COMP%] {\n  --highlight-color-focused: #D9D9D9;\n  --highlight-height: 1px;\n  --border-color: #D9D9D9;\n  --highlight-background: #D9D9D9;\n}\n\n.amountField[_ngcontent-%COMP%] {\n  margin: 0px 4px;\n  width: 97%;\n  --background: #fff;\n  --border-color: #737070 !important;\n  --border-style: solid;\n  --highlight-color-focused: #737070 !important;\n  --highlight-height: 1px;\n  --highlight-background: #737070 !important;\n}\n\n.amountField[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]::before, \n.amountField[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]::after {\n  --padding: 0px 20px;\n  background: transparent !important;\n  content: none;\n}\n\n.ourbus-ion-radio[_ngcontent-%COMP%] {\n  --color:var(--iconsAndButtonsColor);\n  --color-checked: var(--iconsAndButtonsColor);\n}"]
});

/***/ }),

/***/ 59140:
/*!*****************************************************!*\
  !*** ./src/app/modal-payment/modal-payment.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalPaymentPage: () => (/* binding */ ModalPaymentPage)
/* harmony export */ });
/* harmony import */ var _Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);

var _ModalPaymentPage;



class ModalPaymentPage {
  constructor(navParams, platform, modalCtrl, alertCtrl, navCtrl) {
    this.navParams = navParams;
    this.platform = platform;
    this.modalCtrl = modalCtrl;
    this.alertCtrl = alertCtrl;
    this.navCtrl = navCtrl;
    this.formHtml = "";
    this.innerHtmlStr = "";
    this.innerHtmlStr1 = "";
    this.url = "";
    this.platform.backButton.subscribe(() => {
      this.dismiss();
    });
    this.innerHtmlStr = " <iframe id='pay-iframe' srcdoc=" + this.innerHtmlStr1 + " width='100%' height='100%'></iframe>";
    this.formHtml = this.navParams.get('formHtml');
    this.url = this.navParams.get('url');
    this.innerHtmlStr1 = "<!DOCTYPE html><html>" + "<body><b>Please wait we are redirecting to the payment page....</b>" + "<form id='payMentGateWayForm' name='payMentGateWayForm'></form>" + "</body></html>";
    this.openPaymentGateway();
  }
  ngOnInit() {}
  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  openPaymentGateway() {
    try {
      let form = document.getElementById('payMentGateWayForm');
      let iframe = document.getElementById("pay-iframe");
      var e = document.getElementById("page_is_dirty");
      form.action = this.url;
      form.method = "POST";
      form.submit();
    } catch (err) {
      this.showAlert("Transaction Ended", err);
    }
  }
  showAlert(title, msg) {
    var _this = this;
    return (0,_Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertCtrl.create({
        header: title,
        message: msg,
        buttons: [{
          text: 'OK',
          handler: data => {}
        }]
      });
      yield alert.present();
    })();
  }
}
_ModalPaymentPage = ModalPaymentPage;
_ModalPaymentPage.ɵfac = function ModalPaymentPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalPaymentPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController));
};
_ModalPaymentPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _ModalPaymentPage,
  selectors: [["app-modal-payment"]],
  standalone: false,
  decls: 7,
  vars: 1,
  consts: [["mode", "md"], ["id", "payMentGateWayForm", "name", "payMentGateWayForm"], ["id", "pay-iframe", "width", "100%", "height", "100%", 3, "srcdoc"]],
  template: function ModalPaymentPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Payment");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "form", 1)(6, "iframe", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("srcdoc", ctx.innerHtmlStr, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar],
  encapsulation: 2
});

/***/ })

}]);