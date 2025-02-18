"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[4611],{

/***/ 43738:
/*!*******************************************!*\
  !*** ./src/app/faq/faq-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqPageRoutingModule: () => (/* binding */ FaqPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq.page */ 19628);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _FaqPageRoutingModule;




const routes = [{
  path: '',
  component: _faq_page__WEBPACK_IMPORTED_MODULE_0__.FaqPage
}];
class FaqPageRoutingModule {}
_FaqPageRoutingModule = FaqPageRoutingModule;
_FaqPageRoutingModule.ɵfac = function FaqPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FaqPageRoutingModule)();
};
_FaqPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _FaqPageRoutingModule
});
_FaqPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FaqPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 44611:
/*!***********************************!*\
  !*** ./src/app/faq/faq.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqPageModule: () => (/* binding */ FaqPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq-routing.module */ 43738);
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.page */ 19628);
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../safe-html.pipe */ 41353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
var _FaqPageModule;







class FaqPageModule {}
_FaqPageModule = FaqPageModule;
_FaqPageModule.ɵfac = function FaqPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FaqPageModule)();
};
_FaqPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _FaqPageModule
});
_FaqPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FaqPageModule, {
    declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_1__.FaqPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqPageRoutingModule, _safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__.SafeHtmlPipe]
  });
})();

/***/ }),

/***/ 19628:
/*!*********************************!*\
  !*** ./src/app/faq/faq.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqPage: () => (/* binding */ FaqPage)
/* harmony export */ });
/* harmony import */ var _Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _faq_popover_faq_popover_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../faq-popover/faq-popover.page */ 70180);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../safe-html.pipe */ 41353);

var _FaqPage;









function FaqPage_ion_header_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 2)(2, "ion-buttons", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-back-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Faq");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function FaqPage_ng_container_2_div_14_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-card", 16)(1, "ion-accordion-group", 17, 0)(3, "ion-accordion", 17)(4, "ion-item", 18)(5, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 21)(9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const catagories_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r4 + 1, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", catagories_r3.sanitizedQuestion ? catagories_r3.sanitizedQuestion : catagories_r3.question, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", catagories_r3.sanitizedAnswer ? catagories_r3.sanitizedAnswer : catagories_r3.answer, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
  }
}
function FaqPage_ng_container_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, FaqPage_ng_container_2_div_14_ion_card_1_Template, 11, 3, "ion-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.selectedQuesions);
  }
}
function FaqPage_ng_container_2_div_15_ion_item_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FaqPage_ng_container_2_div_15_ion_item_5_Template_ion_item_click_0_listener() {
      const cat_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openQuestion(cat_r6.questions));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", cat_r6.category, " ");
  }
}
function FaqPage_ng_container_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "ion-item", 23)(2, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Select Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, FaqPage_ng_container_2_div_15_ion_item_5_Template, 2, 1, "ion-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.faqResults);
  }
}
function FaqPage_ng_container_2_div_16_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-card", 16)(1, "ion-accordion-group", 17, 0)(3, "ion-accordion", 17)(4, "ion-item", 18)(5, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 21)(9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const catQue_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r8 + 1, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", catQue_r7.question, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 3, catQue_r7.answer), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
  }
}
function FaqPage_ng_container_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, FaqPage_ng_container_2_div_16_ion_card_1_Template, 12, 5, "ion-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.categoryQuestions);
  }
}
function FaqPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 6)(2, "ion-row", 7)(3, "ion-col", 8)(4, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FaqPage_ng_container_2_Template_ion_icon_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.isCatagory == true ? ctx_r1.backHome() : ctx_r1.openCat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-col", 10)(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "FAQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FaqPage_ng_container_2_Template_ion_col_click_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.ClickFocus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Frequently Asked Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Search below for any questions you may have and get to know our services better ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, FaqPage_ng_container_2_div_14_Template, 2, 1, "div", 1)(15, FaqPage_ng_container_2_div_15_Template, 6, 1, "div", 1)(16, FaqPage_ng_container_2_div_16_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.fromSearch == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.isCatagory == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.showQuestion == true);
  }
}
function FaqPage_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r1.faq), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
  }
}
function FaqPage_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 28)(2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]("Not available");
  }
}
class FaqPage {
  constructor(commonStorage, popoverCtrl, modalctrl, apiFactory, router, util) {
    this.commonStorage = commonStorage;
    this.popoverCtrl = popoverCtrl;
    this.modalctrl = modalctrl;
    this.apiFactory = apiFactory;
    this.router = router;
    this.util = util;
    this.isFaqEmpty = true;
    this.isCatagory = true;
    this.showQuestion = false;
    this.fromSearch = false;
    this.metaData = this.commonStorage.getItem("metaData");
    this.allowFaq = this.metaData.isFaq;
  }
  ngOnInit() {
    this.apiFactory.getFaq().subscribe(res => {
      if (res.code == 200) {
        if (res.faq_results && res.faq_results.length != 0) {
          this.faqResults = res.faq_results;
          this.faqResults.forEach(faq => {
            faq.questions.forEach(question => {
              question.answer = this.cleanHTML(question.answer);
            });
          });
          this.selectedOption = res.faq_results[0].category;
          this.selectedQuesions = res.faq_results.reduce((acc, faq) => acc.concat(faq.questions), []);
          this.allQuestions = this.selectedQuesions;
          this.isFaqEmpty = false;
        }
        if (res.faq && res.faq != '') {
          this.faq = res.faq;
          this.isFaqEmpty = false;
        }
      } else {
        this.util.showToast(res.message);
      }
    });
  }
  backHome() {
    this.router.navigate(['home']);
  }
  cleanHTML(htmlString) {
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(htmlString, 'text/html');
    return parsedHtml.body.textContent || "";
  }
  GetCatagory(data) {
    if (data == 'none') {
      this.selectedQuesions = this.allQuestions;
    } else {
      this.fromSearch = true;
      this.isCatagory = false;
      this.showQuestion = false;
      if (data.length == undefined) this.selectedQuesions = [data];else {
        this.selectedQuesions = data;
      }
    }
  }
  ClickFocus(event) {
    var _this = this;
    return (0,_Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popup = yield _this.modalctrl.create({
        component: _faq_popover_faq_popover_page__WEBPACK_IMPORTED_MODULE_1__.FaqPopoverPage,
        componentProps: {
          'faqResults': _this.faqResults
        }
      });
      yield popup.present();
      const val = yield popup.onDidDismiss();
      _this.GetCatagory(val.data);
    })();
  }
  ClickDismiss(data) {
    this.popoverCtrl.dismiss();
  }
  openQuestion(questions) {
    this.isCatagory = false;
    this.showQuestion = true;
    this.categoryQuestions = questions;
  }
  openCat() {
    this.isCatagory = true;
    this.showQuestion = false;
    this.fromSearch = false;
  }
}
_FaqPage = FaqPage;
_FaqPage.ɵfac = function FaqPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FaqPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_2__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_3__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_4__.UtilProvider));
};
_FaqPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _FaqPage,
  selectors: [["app-faq"]],
  standalone: false,
  decls: 5,
  vars: 4,
  consts: [["accordionGroup", ""], [4, "ngIf"], ["mode", "md", 1, "h50"], ["slot", "start"], [2, "color", "black !important"], [1, "head"], [1, "FaqBg"], [1, "header-row"], ["size", "auto", 1, "back"], ["name", "arrow-back", 1, "icon-size", 3, "click"], ["size", "auto", 1, "faq"], ["size", "auto", 1, "search", 3, "click"], ["name", "search", 1, "icon-size"], [2, "font-size", "24px", "margin", "0px", "font-weight", "bold"], [2, "margin", "8px auto"], ["style", "margin: 12px;border: 1px solid #fff;box-shadow: none;", 4, "ngFor", "ngForOf"], [2, "margin", "12px", "border", "1px solid #fff", "box-shadow", "none"], [2, "border-radius", "8px"], ["lines", "none", "slot", "header", 1, "accordion-header"], [1, "txt-lbl"], [3, "innerHTML"], ["slot", "content", 1, "accordion-content"], [1, "answer-content", 3, "innerHTML"], ["lines", "none", 2, "color", "grey", "font-size", "14px", "height", "5%"], [2, "margin", "0px"], ["style", "margin-right: 5%;text-transform: capitalize;", 3, "click", 4, "ngFor", "ngForOf"], [2, "margin-right", "5%", "text-transform", "capitalize", 3, "click"], [1, "p5", 3, "innerHTML"], [2, "display", "inline-block", "position", "absolute", "top", "50%", "left", "40%"], [2, "display", "flex", "justify-content", "center"], ["src", "../../assets/icon/noFaq.svg", "alt", "", 2, "width", "30px", "height", "30px"]],
  template: function FaqPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, FaqPage_ion_header_0_Template, 6, 0, "ion-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, FaqPage_ng_container_2_Template, 17, 3, "ng-container", 1)(3, FaqPage_div_3_Template, 3, 3, "div", 1)(4, FaqPage_div_4_Template, 6, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.allowFaq !== true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.allowFaq == true && ctx.faqResults);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.allowFaq == false && ctx.faq);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isFaqEmpty == true && ctx.allowFaq == "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonAccordion, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonAccordionGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButton, _safe_html_pipe__WEBPACK_IMPORTED_MODULE_5__.SafeHtmlPipe],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --ion-background-color: var(--viewBgColor);\n}\n\n.FaqBg[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('faqBg.81a807dd33522fe7.jpeg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 250px;\n  font-weight: 600;\n  padding: 110px 12px 0px;\n  color: white;\n  -webkit-backface-visibility: 0.3;\n          backface-visibility: 0.3;\n}\n\n.catagoriesSelect[_ngcontent-%COMP%] {\n  height: 50px;\n  padding: 10px 16px;\n  margin: 10px;\n  box-shadow: 1px 2px 10px #efefef;\n  width: 95%;\n  border-radius: 10px;\n}\n\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-top: 2%;\n  position: absolute;\n  top: 0%;\n  left: 0%;\n}\n\n.back[_ngcontent-%COMP%], .faq[_ngcontent-%COMP%], .search[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.back[_ngcontent-%COMP%] {\n  margin-left: 2%;\n}\n\n.search[_ngcontent-%COMP%] {\n  margin-right: 2%;\n}\n\n.faq[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.icon-size[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.accordion-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #EFEFEF;\n}\n\n.accordion-content[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n}\n\n.answer-content[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.txt-lbl[_ngcontent-%COMP%] {\n  white-space: normal;\n}\n\n.head[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  margin: 16px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  -webkit-text-fill-color: black !important;\n}"]
});

/***/ })

}]);