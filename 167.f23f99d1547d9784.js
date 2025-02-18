"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[167],{

/***/ 89442:
/*!****************************************************************************!*\
  !*** ./src/app/add-existing-passenger/add-existing-passenger.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddExistingPassengerComponent: () => (/* binding */ AddExistingPassengerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_exception__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/exception */ 91502);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
var _AddExistingPassengerComponent;














function AddExistingPassengerComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " No Passengers Details Present! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function AddExistingPassengerComponent_ion_list_10_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-item", 12)(1, "ion-checkbox", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AddExistingPassengerComponent_ion_list_10_ion_item_1_Template_ion_checkbox_click_1_listener() {
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.selectPassenger(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function AddExistingPassengerComponent_ion_list_10_ion_item_1_Template_ion_checkbox_ngModelChange_1_listener($event) {
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](i_r2.checked, $event) || (i_r2.checked = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-label")(3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", i_r2.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", i_r2.title, " .", i_r2.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](i_r2.email);
  }
}
function AddExistingPassengerComponent_ion_list_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AddExistingPassengerComponent_ion_list_10_ion_item_1_Template, 7, 4, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.travellersList);
  }
}
function AddExistingPassengerComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 16)(1, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AddExistingPassengerComponent_div_11_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.addTraveller());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
class AddExistingPassengerComponent {
  constructor(loader, util, theme, ex, commonStorage, commonService, apiFactory, modalController, dateService, navCtrl, route, router, globalData, modalCtrl, navParams) {
    this.loader = loader;
    this.util = util;
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
    this.modalCtrl = modalCtrl;
    this.navParams = navParams;
    this.selectedPassengers = [];
    // this.commonService.gTrack('addexistingpassenger');
    this.travellerlength = navParams.get('travellerLength');
    this.selectedPassengers = navParams.get('passengerList');
    this.getPassengerList();
    // this.commonService.gTrack('addExistingPassenger','“Add existing customer” is clicked')
  }
  ngOnInit() {}
  getPassengerList() {
    this.apiFactory.travellersList().subscribe(result => {
      this.loader.hideLoadingDefault();
      if (typeof result.code == "undefined") {
        this.travellersList = result.travellers_list;
        this.travellersList.forEach(value => {
          value['checked'] = false;
        });
        this.selectedPassengers.forEach(s => {
          if (s.checked) {
            this.travellersList.forEach(t => {
              if (s.id == t.id) t['checked'] = s.checked;
            });
          }
        });
      } else {
        setTimeout(() => {
          this.util.showAlert('', result.message);
        });
      }
    }, err => {
      this.loader.hideLoadingDefault();
      if (!this.util.isConnected()) {} else {}
    });
  }
  selectPassenger(data) {
    if (data.checked != true) {
      this.selectedPassengers.push(data);
    } else {
      let newArray = this.selectedPassengers.filter(function (el) {
        return el.id !== data.id;
      });
      this.selectedPassengers = newArray;
    }
  }
  addTraveller() {
    if (this.selectedPassengers.length > this.travellerlength) {
      this.util.showAlert('', "you can't select more than " + this.travellerlength + " passenger");
      return false;
    } else {
      this.dismiss();
      return false;
    }
  }
  dismiss() {
    this.modalCtrl.dismiss(this.selectedPassengers);
  }
}
_AddExistingPassengerComponent = AddExistingPassengerComponent;
_AddExistingPassengerComponent.ɵfac = function AddExistingPassengerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddExistingPassengerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_1__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_2__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_exception__WEBPACK_IMPORTED_MODULE_3__.ExceptionProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_4__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_6__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_7__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_8__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavParams));
};
_AddExistingPassengerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: _AddExistingPassengerComponent,
  selectors: [["app-add-existing-passenger"]],
  decls: 12,
  vars: 3,
  consts: [["mode", "md", 1, "bg-cl"], ["slot", "end"], ["mode", "md", 3, "click"], ["name", "close", "color", "default"], [1, "head"], [1, "bg-content"], [1, "center-div"], ["style", "font-weight:bolder;margin-top: 16px", 4, "ngIf"], [4, "ngIf"], ["padding", "", 4, "ngIf"], [2, "font-weight", "bolder", "margin-top", "16px"], ["lines", "none", 4, "ngFor", "ngForOf"], ["lines", "none"], [2, "margin-top", "5px", "margin-right", "10px", 3, "click", "ngModelChange", "ngModel"], [1, "txt-bp-name"], [1, "txt-bp-adrss"], ["padding", ""], ["mode", "md", "expand", "block", 1, "login-btn", 3, "click"]],
  template: function AddExistingPassengerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AddExistingPassengerComponent_Template_ion_button_click_3_listener() {
        return ctx.dismiss();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Add Existing Passenger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-content", 5)(8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, AddExistingPassengerComponent_div_9_Template, 2, 0, "div", 7)(10, AddExistingPassengerComponent_ion_list_10_Template, 2, 1, "ion-list", 8)(11, AddExistingPassengerComponent_div_11_Template, 3, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.travellersList.length < 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.travellersList.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selectedPassengers.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf],
  styles: [".head[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  margin: 0;\n}\n\n.bg-cl[_ngcontent-%COMP%] {\n  --background: #ffdd21 !important;\n}\n\n.bg-content[_ngcontent-%COMP%] {\n  --background: #e4e5e6;\n}\n\n.card-1[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: #ed3237;\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  position: fixed;\n  bottom: 0;\n  height: 50px;\n  border-radius: 4px;\n}"]
});

/***/ }),

/***/ 97918:
/*!***********************************************************************!*\
  !*** ./src/app/passenger-details/passenger-details-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PassengerDetailsPageRoutingModule: () => (/* binding */ PassengerDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _passenger_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passenger-details.page */ 13440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _PassengerDetailsPageRoutingModule;




const routes = [{
  path: '',
  component: _passenger_details_page__WEBPACK_IMPORTED_MODULE_0__.PassengerDetailsPage
}];
class PassengerDetailsPageRoutingModule {}
_PassengerDetailsPageRoutingModule = PassengerDetailsPageRoutingModule;
_PassengerDetailsPageRoutingModule.ɵfac = function PassengerDetailsPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PassengerDetailsPageRoutingModule)();
};
_PassengerDetailsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _PassengerDetailsPageRoutingModule
});
_PassengerDetailsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PassengerDetailsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 20167:
/*!***************************************************************!*\
  !*** ./src/app/passenger-details/passenger-details.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PassengerDetailsPageModule: () => (/* binding */ PassengerDetailsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _passenger_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passenger-details-routing.module */ 97918);
/* harmony import */ var _passenger_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passenger-details.page */ 13440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _PassengerDetailsPageModule;






class PassengerDetailsPageModule {}
_PassengerDetailsPageModule = PassengerDetailsPageModule;
_PassengerDetailsPageModule.ɵfac = function PassengerDetailsPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PassengerDetailsPageModule)();
};
_PassengerDetailsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _PassengerDetailsPageModule
});
_PassengerDetailsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _passenger_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PassengerDetailsPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PassengerDetailsPageModule, {
    declarations: [_passenger_details_page__WEBPACK_IMPORTED_MODULE_1__.PassengerDetailsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _passenger_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PassengerDetailsPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 13440:
/*!*************************************************************!*\
  !*** ./src/app/passenger-details/passenger-details.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PassengerDetailsPage: () => (/* binding */ PassengerDetailsPage)
/* harmony export */ });
/* harmony import */ var _Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _add_existing_passenger_add_existing_passenger_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-existing-passenger/add-existing-passenger.component */ 89442);
/* harmony import */ var _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calendar-modal/calendar-modal.page */ 70990);
/* harmony import */ var _snack_preference_snack_preference_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../snack-preference/snack-preference.page */ 66250);
/* harmony import */ var _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cities-modal/cities-modal.page */ 85960);
/* harmony import */ var _price_breakup_price_breakup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../price-breakup/price-breakup.component */ 30072);
/* harmony import */ var _countries_countries_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../countries/countries.json */ 2660);
/* harmony import */ var _services_validator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/validator-service */ 1863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _services_exception__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/exception */ 91502);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/firebase-analytics.service */ 47402);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 60177);

var _PassengerDetailsPage;
























const _c0 = () => ({
  standalone: true
});
function PassengerDetailsPage_ng_container_0_ion_select_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-select-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const code_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", code_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](code_r3);
  }
}
function PassengerDetailsPage_ng_container_0_ion_row_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-row", 38)(1, "ion-col", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "ion-col", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "Send booking details and update on Whatsapp");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "ion-col", 42)(6, "ion-toggle", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_0_ion_row_29_Template_ion_toggle_ionChange_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onChangeWhatsappSwitch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_row_29_Template_ion_toggle_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.isWPSwitchOn, $event) || (ctx_r1.isWPSwitchOn = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.isWPSwitchOn);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-card", 44)(1, "ion-row")(2, "ion-col", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Wake-up Call");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-col", 12)(5, "ion-toggle", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_0_ion_card_30_Template_ion_toggle_ionChange_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onChangeWakeupCall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_card_30_Template_ion_toggle_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.wakeUpCall, $event) || (ctx_r1.wakeUpCall = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.wakeUpCall);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_31_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Traveller Details (For Onward Journey)");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_31_ion_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "ion-icon", 61);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_31_ion_icon_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "ion-icon", 62);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_31_ion_row_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-row", 58)(1, "ion-col", 55)(2, "ion-item", 18)(3, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "ion-input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_0_ion_card_31_ion_row_18_Template_ion_input_keyup_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r8);
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r7, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_31_ion_col_20_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-select-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r9]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](key_r9);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_31_ion_col_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-col", 64)(1, "ion-item", 18)(2, "ion-label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Card Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-select", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_0_ion_card_31_ion_col_20_ng_template_5_Template, 2, 2, "ng-template", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_31_ion_col_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-col", 64)(1, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "ion-input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_31_ion_row_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 69)(2, "ion-item", 18)(3, "ion-input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_ion_card_31_ion_row_23_Template_ion_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r10);
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.selectPassportDate(1, ctx_r1.passengerForm[i_r7].value.passport_issued_date, i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-col", 71)(5, "ion-item", 18)(6, "ion-input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_ion_card_31_ion_row_23_Template_ion_input_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r10);
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.selectPassportDate(2, ctx_r1.passengerForm[i_r7].value.passport_expiry_date, i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_31_ion_row_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 73)(2, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "ion-input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-card", 44)(1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_0_ion_card_31_div_2_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div")(4, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](7, "ion-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, PassengerDetailsPage_ng_container_0_ion_card_31_ion_icon_10_Template, 1, 0, "ion-icon", 53)(11, PassengerDetailsPage_ng_container_0_ion_card_31_ion_icon_11_Template, 1, 0, "ion-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "ion-row")(13, "ion-col", 55)(14, "ion-item", 18)(15, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16, "First Name and Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "ion-input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_0_ion_card_31_Template_ion_input_keyup_17_listener($event) {
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r6).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r7, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](18, PassengerDetailsPage_ng_container_0_ion_card_31_ion_row_18_Template, 6, 0, "ion-row", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "ion-row", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](20, PassengerDetailsPage_ng_container_0_ion_card_31_ion_col_20_Template, 6, 1, "ion-col", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](22, PassengerDetailsPage_ng_container_0_ion_card_31_ion_col_22_Template, 3, 0, "ion-col", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](23, PassengerDetailsPage_ng_container_0_ion_card_31_ion_row_23_Template, 7, 2, "ion-row", 0)(24, PassengerDetailsPage_ng_container_0_ion_card_31_ion_row_24_Template, 4, 0, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r11 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("formGroup", ctx_r1.passengerForm[i_r7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", i_r7 == 0 && ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"]("Passenger " + (i_r7 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](seat_r11.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", seat_r11.sex == "Ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", seat_r11.sex == "Mr");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerForm[i_r7].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerForm[i_r7].value.id_card_type == 3);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-card", 44)(1, "ion-item", 75)(2, "ion-label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Copy Onward Details To Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-checkbox", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_card_32_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.copyData, $event) || (ctx_r1.copyData = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_0_ion_card_32_Template_ion_checkbox_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.copyDataToReturn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.copyData);
  }
}
function PassengerDetailsPage_ng_container_0_div_33_ion_card_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Traveller Details (For Return Journey)");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_0_div_33_ion_card_1_ion_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "ion-icon", 61);
  }
}
function PassengerDetailsPage_ng_container_0_div_33_ion_card_1_ion_icon_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "ion-icon", 62);
  }
}
function PassengerDetailsPage_ng_container_0_div_33_ion_card_1_ion_row_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-row", 82)(1, "ion-col", 73)(2, "ion-item", 18)(3, "ion-label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "age");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "ion-input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_0_div_33_ion_card_1_ion_row_18_Template_ion_input_keyup_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r15);
      const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r14, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
}
function PassengerDetailsPage_ng_container_0_div_33_ion_card_1_ion_col_20_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-select-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r16 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r16]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](key_r16);
  }
}
function PassengerDetailsPage_ng_container_0_div_33_ion_card_1_ion_col_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-col", 64)(1, "ion-item", 18)(2, "ion-label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Card Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-select", 66)(5, "ion-select-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6, "Select Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, PassengerDetailsPage_ng_container_0_div_33_ion_card_1_ion_col_20_ng_template_7_Template, 2, 2, "ng-template", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_0_div_33_ion_card_1_ion_col_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-col", 64)(1, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "ion-input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_0_div_33_ion_card_1_ion_row_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 69)(2, "div")(3, "ion-item", 18)(4, "ion-input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_div_33_ion_card_1_ion_row_23_Template_ion_input_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r17);
      const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.selectPassportDate(1, ctx_r1.passengerForm[i_r14].value.passport_issued_date, i_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "ion-col", 71)(6, "div")(7, "ion-item", 18)(8, "ion-input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_div_33_ion_card_1_ion_row_23_Template_ion_input_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r17);
      const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.selectPassportDate(2, ctx_r1.passengerForm[i_r14].value.passport_expiry_date, i_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_0_div_33_ion_card_1_ion_row_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 73)(2, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "ion-input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_0_div_33_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-card", 44)(1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_0_div_33_ion_card_1_div_2_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div")(4, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](7, "ion-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, PassengerDetailsPage_ng_container_0_div_33_ion_card_1_ion_icon_10_Template, 1, 0, "ion-icon", 78)(11, PassengerDetailsPage_ng_container_0_div_33_ion_card_1_ion_icon_11_Template, 1, 0, "ion-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "ion-row")(13, "ion-col", 55)(14, "ion-item", 18)(15, "ion-label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16, "First Name and Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "ion-input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_0_div_33_ion_card_1_Template_ion_input_keyup_17_listener($event) {
      const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r13).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r14, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](18, PassengerDetailsPage_ng_container_0_div_33_ion_card_1_ion_row_18_Template, 6, 0, "ion-row", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](20, PassengerDetailsPage_ng_container_0_div_33_ion_card_1_ion_col_20_Template, 8, 2, "ion-col", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](22, PassengerDetailsPage_ng_container_0_div_33_ion_card_1_ion_col_22_Template, 3, 0, "ion-col", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](23, PassengerDetailsPage_ng_container_0_div_33_ion_card_1_ion_row_23_Template, 9, 2, "ion-row", 0)(24, PassengerDetailsPage_ng_container_0_div_33_ion_card_1_ion_row_24_Template, 4, 0, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r18 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("formGroup", ctx_r1.passengerFormR[i_r14]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", i_r14 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"]("Passenger " + (i_r14 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](seat_r18.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", seat_r18.sex == "Ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", seat_r18.sex == "Mr");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerFormR[i_r14].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerFormR[i_r14].value.id_card_type == 3);
  }
}
function PassengerDetailsPage_ng_container_0_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_0_div_33_ion_card_1_Template, 25, 11, "ion-card", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.returnSeatDetails);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_34_ion_select_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-select-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", item_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", item_r20.name, " ");
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-card", 84)(1, "div", 85)(2, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Please Enter your Residential Location Details.");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-icon", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_ion_card_34_Template_ion_icon_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "ion-item", 18)(6, "ion-input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ionInput", function PassengerDetailsPage_ng_container_0_ion_card_34_Template_ion_input_ionInput_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onchangeStateId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_card_34_Template_ion_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.stateId, $event) || (ctx_r1.stateId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "ion-item", 18)(8, "ion-select", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_0_ion_card_34_Template_ion_select_ionChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onchangeId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_card_34_Template_ion_select_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.stateType, $event) || (ctx_r1.stateType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, PassengerDetailsPage_ng_container_0_ion_card_34_ion_select_option_9_Template, 2, 2, "ion-select-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](10, "ion-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "ion-item", 18)(12, "ion-input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_0_ion_card_34_Template_ion_input_keyup_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onchangeCityId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_card_34_Template_ion_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.cityId, $event) || (ctx_r1.cityId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", ctx_r1.businessTravel ? "businessTravelclick" : "businessTravelunclick");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateId);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateGetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateType);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityName ? ctx_r1.cityName : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityId);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](12, _c0));
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_35_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div")(1, "ion-item", 18)(2, "ion-input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_0_ion_card_35_div_5_Template_ion_input_keyup_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onchangeGstId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_card_35_div_5_Template_ion_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.gstId, $event) || (ctx_r1.gstId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "ion-item", 18)(4, "ion-input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_card_35_div_5_Template_ion_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.gstName, $event) || (ctx_r1.gstName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6, " Note: Please carry your ID proof. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstId);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](5, _c0));
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-card", 84)(1, "ion-item", 92)(2, "ion-checkbox", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_0_ion_card_35_Template_ion_checkbox_ionChange_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.gstInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_card_35_Template_ion_checkbox_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.businessTravel, $event) || (ctx_r1.businessTravel = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "ion-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "I am booking for business travel");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_0_ion_card_35_div_5_Template, 7, 6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", ctx_r1.businessTravel ? "businessTravelclick" : "businessTravelunclick");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.businessTravel);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.businessTravel);
  }
}
function PassengerDetailsPage_ng_container_0_span_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "(Excluding VAT)");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_0_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 98)(1, "div", 99)(2, "ion-row")(3, "ion-col", 100)(4, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Important Note!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "ion-col", 100)(7, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_div_49_Template_p_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10, " As per the Govt new GST Rule - 46 Passengers are Mandated to provide their residential State, City and Pin Code details for the Bookings. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "ion-header", 1)(2, "ion-toolbar", 2)(3, "ion-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "Passenger Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "ion-buttons", 4)(6, "ion-back-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_Template_ion_back_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "ion-content", 6)(8, "form", 7)(9, "ion-card", 8)(10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11, " Ticket details and updates will be sent here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "ion-item", 10)(13, "ion-row", 11)(14, "ion-col", 12)(15, "ion-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](16, PassengerDetailsPage_ng_container_0_ion_select_option_16_Template, 2, 2, "ion-select-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "ion-col", 15)(18, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](19, "Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](20, "ion-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_0_Template_ion_input_keyup_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onPhoneChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "ion-item", 18)(22, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](23, "Email Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](24, "ion-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "ion-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](26, "ion-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "ion-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](28, "Create My Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](29, PassengerDetailsPage_ng_container_0_ion_row_29_Template, 7, 3, "ion-row", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](30, PassengerDetailsPage_ng_container_0_ion_card_30_Template, 6, 3, "ion-card", 24)(31, PassengerDetailsPage_ng_container_0_ion_card_31_Template, 25, 11, "ion-card", 25)(32, PassengerDetailsPage_ng_container_0_ion_card_32_Template, 5, 1, "ion-card", 24)(33, PassengerDetailsPage_ng_container_0_div_33_Template, 2, 1, "div", 0)(34, PassengerDetailsPage_ng_container_0_ion_card_34_Template, 13, 13, "ion-card", 26)(35, PassengerDetailsPage_ng_container_0_ion_card_35_Template, 6, 5, "ion-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](36, "div", 27)(37, "ion-row", 28)(38, "ion-col", 29)(39, "div")(40, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](42, "div", 31)(43, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_Template_span_click_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.callFarebreakup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](44, "View Breakup");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](45, PassengerDetailsPage_ng_container_0_span_45_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](46, "ion-col", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_Template_ion_col_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.submitPassengerDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](47, "ion-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](48, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](49, PassengerDetailsPage_ng_container_0_div_49_Template, 11, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("formGroup", ctx_r1.contactForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.AllowedCountryCodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData && ctx_r1.metaData.isWhatsapp);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage && ctx_r1.commonStorage.localGet("wake_up_call_applicable"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.onwardSeatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp() && ctx_r1.commonStorage.getItem("isServiceTaxApplicable"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp() && ctx_r1.commonStorage.getItem("isServiceTaxApplicable"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.payAmount(ctx_r1.globalData.RESERVATION_DATA.totalBookingAmount + (ctx_r1.globalData.RESERVATION_DATA_RETURN && ctx_r1.globalData.RESERVATION_DATA_RETURN.totalBookingAmount ? ctx_r1.globalData.RESERVATION_DATA_RETURN.totalBookingAmount : 0)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.showWalletDets);
  }
}
function PassengerDetailsPage_ng_container_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "(Round Trip)");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_ion_input_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-input", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_ion_input_19_Template_ion_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", ctx_r1.selected_Country_code);
  }
}
function PassengerDetailsPage_ng_container_1_ion_select_20_ion_select_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-select-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const code_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", code_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", code_r26, " ");
  }
}
function PassengerDetailsPage_ng_container_1_ion_select_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-select", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_1_ion_select_20_ion_select_option_1_Template, 2, 2, "ion-select-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.AllowedCountryCodes);
  }
}
function PassengerDetailsPage_ng_container_1_p_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "p", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "SMS shall not be sent to an international number");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_hr_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "hr", 133);
  }
}
function PassengerDetailsPage_ng_container_1_ion_row_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "img", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "ion-col", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "Send booking details and updates on Whatsapp");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "ion-col", 12)(6, "ion-toggle", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_1_ion_row_25_Template_ion_toggle_ionChange_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onChangeWhatsappSwitch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ion_row_25_Template_ion_toggle_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.isWPSwitchOn, $event) || (ctx_r1.isWPSwitchOn = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.isWPSwitchOn);
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-card", 138)(1, "ion-row")(2, "ion-col", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Wake-up Call");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-col", 12)(5, "ion-toggle", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_1_ion_card_26_Template_ion_toggle_ionChange_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onChangeWakeupCall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ion_card_26_Template_ion_toggle_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.wakeUpCall, $event) || (ctx_r1.wakeUpCall = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.wakeUpCall);
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-card", 139)(1, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "Traveller details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_ion_card_27_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.addExistingPass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "Add existing passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_28_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Traveller details");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_28_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Primary Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_28_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Co-Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_28_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Reserved for female");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_28_ion_row_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-row", 82)(1, "ion-col")(2, "ion-item")(3, "ion-input", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_ion_card_28_ion_row_33_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const i_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r31, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_28_ion_col_35_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-select-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r33 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r33]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](key_r33);
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_28_ion_col_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-col", 156)(1, "ion-item", 157)(2, "ion-label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Card Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-select", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_1_ion_card_28_ion_col_35_ng_template_5_Template, 2, 2, "ng-template", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_28_ion_col_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-col", 156)(1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "ion-input", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_28_ion_row_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 160)(2, "ion-item")(3, "ion-input", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_ion_card_28_ion_row_38_Template_ion_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r34);
      const i_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.selectPassportDate(1, ctx_r1.passengerForm[i_r31].value.passport_issued_date, i_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-col", 160)(5, "ion-item")(6, "ion-input", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_ion_card_28_ion_row_38_Template_ion_input_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r34);
      const i_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.selectPassportDate(2, ctx_r1.passengerForm[i_r31].value.passport_expiry_date, i_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "ion-col", 160)(8, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](9, "ion-input", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_28_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 164)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, " Enter valid ID details; otherwise, it will impact your journey or package. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-card", 141)(1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_1_ion_card_28_div_2_Template, 2, 0, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_1_ion_card_28_span_4_Template, 2, 0, "span", 0)(5, PassengerDetailsPage_ng_container_1_ion_card_28_span_5_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7, "Seat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, PassengerDetailsPage_ng_container_1_ion_card_28_span_11_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "ion-row")(13, "ion-col")(14, "ion-item")(15, "ion-input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_ion_card_28_Template_ion_input_keyup_15_listener($event) {
      const i_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r30).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r31, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "ion-row")(17, "ion-radio-group", 147)(18, "ion-row")(19, "ion-col")(20, "ion-item", 148)(21, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](22, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "ion-col")(24, "ion-item", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](25, "ion-radio", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](26, "ion-label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](28, "ion-col")(29, "ion-item", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](30, "ion-radio", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](31, "ion-label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](33, PassengerDetailsPage_ng_container_1_ion_card_28_ion_row_33_Template, 4, 0, "ion-row", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](34, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](35, PassengerDetailsPage_ng_container_1_ion_card_28_ion_col_35_Template, 6, 1, "ion-col", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](36, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](37, PassengerDetailsPage_ng_container_1_ion_card_28_ion_col_37_Template, 3, 0, "ion-col", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](38, PassengerDetailsPage_ng_container_1_ion_card_28_ion_row_38_Template, 10, 2, "ion-row", 0)(39, PassengerDetailsPage_ng_container_1_ion_card_28_div_39_Template, 3, 0, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r35 = ctx.$implicit;
    const i_r31 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("formGroup", ctx_r1.passengerForm[i_r31]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.isLogin && i_r31 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", i_r31 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", i_r31 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](seat_r35.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", seat_r35.sex != "" && seat_r35.sex === "Ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", seat_r35.sex != "" && !seat_r35.sexOptional);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", seat_r35.sex === "Mr" && !seat_r35.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", "Male", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", seat_r35.sex != "" && !seat_r35.sexOptional);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", seat_r35.sex === "Ms" && !seat_r35.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", "Female", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerForm[i_r31].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-card", 165)(1, "ion-item", 166)(2, "ion-label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Copy Onward Details To Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-checkbox", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ion_card_29_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.copyData, $event) || (ctx_r1.copyData = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_1_ion_card_29_Template_ion_checkbox_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.copyDataToReturn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.copyData);
  }
}
function PassengerDetailsPage_ng_container_1_div_30_ion_card_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Primary Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_div_30_ion_card_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Co-Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_div_30_ion_card_1_ion_row_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-row", 82)(1, "ion-col")(2, "ion-item")(3, "ion-input", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_div_30_ion_card_1_ion_row_32_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r39);
      const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r38, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
}
function PassengerDetailsPage_ng_container_1_div_30_ion_card_1_ion_col_34_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-select-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r40 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r40]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](key_r40);
  }
}
function PassengerDetailsPage_ng_container_1_div_30_ion_card_1_ion_col_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-col", 156)(1, "ion-item")(2, "ion-label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Card Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-select", 158)(5, "ion-select-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6, "Select Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, PassengerDetailsPage_ng_container_1_div_30_ion_card_1_ion_col_34_ng_template_7_Template, 2, 2, "ng-template", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_1_div_30_ion_card_1_ion_col_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-col", 156)(1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "ion-input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_1_div_30_ion_card_1_ion_row_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 160)(2, "div")(3, "ion-item")(4, "ion-input", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_div_30_ion_card_1_ion_row_37_Template_ion_input_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r41);
      const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.selectPassportDateR(1, ctx_r1.passengerFormR[i_r38].value.passport_issued_date, i_r38));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "ion-col", 160)(6, "div")(7, "ion-item")(8, "ion-input", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_div_30_ion_card_1_ion_row_37_Template_ion_input_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r41);
      const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.selectPassportDateR(2, ctx_r1.passengerFormR[i_r38].value.passport_issued_date, i_r38));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "ion-col", 160)(10, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](11, "ion-input", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_1_div_30_ion_card_1_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 164)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, " Enter valid ID details; otherwise, it will impact your journey or package. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_1_div_30_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-card", 141)(1, "div", 47)(2, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Traveller details (For return journey)");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_1_div_30_ion_card_1_span_5_Template, 2, 0, "span", 0)(6, PassengerDetailsPage_ng_container_1_div_30_ion_card_1_span_6_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8, "Seat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "ion-row")(12, "ion-col")(13, "ion-item")(14, "ion-input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_div_30_ion_card_1_Template_ion_input_keyup_14_listener($event) {
      const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r37).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r38, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "ion-row")(16, "ion-radio-group", 147)(17, "ion-row")(18, "ion-col")(19, "ion-item", 148)(20, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](21, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "ion-col")(23, "ion-item", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](24, "ion-radio", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "ion-label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "ion-col")(28, "ion-item", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](29, "ion-radio", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](30, "ion-label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](32, PassengerDetailsPage_ng_container_1_div_30_ion_card_1_ion_row_32_Template, 4, 0, "ion-row", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](33, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](34, PassengerDetailsPage_ng_container_1_div_30_ion_card_1_ion_col_34_Template, 8, 2, "ion-col", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](35, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](36, PassengerDetailsPage_ng_container_1_div_30_ion_card_1_ion_col_36_Template, 3, 0, "ion-col", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](37, PassengerDetailsPage_ng_container_1_div_30_ion_card_1_ion_row_37_Template, 12, 2, "ion-row", 0)(38, PassengerDetailsPage_ng_container_1_div_30_ion_card_1_div_38_Template, 3, 0, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r42 = ctx.$implicit;
    const i_r38 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("formGroup", ctx_r1.passengerFormR[i_r38]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", i_r38 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", i_r38 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](seat_r42.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", seat_r42.sex != "" && !seat_r42.sexOptional);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", seat_r42.sex === "Mr" && !seat_r42.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", "Male", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", seat_r42.sex != "" && !seat_r42.sexOptional);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", seat_r42.sex === "Ms" && !seat_r42.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", "Female", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerFormR[i_r38].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
  }
}
function PassengerDetailsPage_ng_container_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_1_div_30_ion_card_1_Template, 39, 15, "ion-card", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.returnSeatDetails);
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_31_ion_select_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-select-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", item_r44.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", item_r44.name, " ");
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-card", 173)(1, "div", 85)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Please Enter your residential Location Details.");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-icon", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_ion_card_31_Template_ion_icon_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "ion-item", 174)(6, "ion-label", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7, "Pin Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "ion-input", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_1_ion_card_31_Template_ion_input_ionChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onchangeStateId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ion_card_31_Template_ion_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.stateId, $event) || (ctx_r1.stateId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "ion-item", 174)(10, "ion-label", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "ion-select", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_1_ion_card_31_Template_ion_select_ionChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onchangeId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ion_card_31_Template_ion_select_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.stateType, $event) || (ctx_r1.stateType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](13, PassengerDetailsPage_ng_container_1_ion_card_31_ion_select_option_13_Template, 2, 2, "ion-select-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "ion-item", 174)(15, "ion-label", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "ion-input", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_ion_card_31_Template_ion_input_keyup_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onchangeCityId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ion_card_31_Template_ion_input_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.cityId, $event) || (ctx_r1.cityId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", ctx_r1.businessTravel ? "businessTravelclick" : "businessTravelunclick");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateId);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateGetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateType);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityName ? ctx_r1.cityName : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityId);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](12, _c0));
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_32_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div")(1, "ion-item")(2, "ion-input", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_ion_card_32_div_5_Template_ion_input_keyup_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r46);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onchangeGstId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ion_card_32_div_5_Template_ion_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r46);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.gstId, $event) || (ctx_r1.gstId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "ion-item")(4, "ion-input", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ion_card_32_div_5_Template_ion_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r46);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.gstName, $event) || (ctx_r1.gstName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstId);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](5, _c0));
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-card", 173)(1, "ion-item", 166)(2, "ion-label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "I am booking for business travel");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-checkbox", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_1_ion_card_32_Template_ion_checkbox_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r45);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.gstInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ion_card_32_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r45);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.businessTravel, $event) || (ctx_r1.businessTravel = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_1_ion_card_32_div_5_Template, 5, 6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", ctx_r1.businessTravel ? "businessTravelclick" : "businessTravelunclick");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.businessTravel);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.businessTravel);
  }
}
function PassengerDetailsPage_ng_container_1_span_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "(Excluding VAT)");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 98)(1, "div", 99)(2, "ion-row")(3, "ion-col", 100)(4, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Important Note!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "ion-col", 100)(7, "p", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_div_42_Template_p_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r47);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10, " As per the Govt new GST Rule - 46 Passengers are Mandated to provide their residential State, City and Pin Code details for the Bookings. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 104)(3, "ion-buttons", 4)(4, "ion-back-button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "ion-title", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, PassengerDetailsPage_ng_container_1_span_7_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "ion-content", 107)(9, "form", 7)(10, "ion-card", 108)(11, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](12, "Contact details");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, " Your ticket and bus details will be sent here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](16, "ion-input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "ion-row", 112)(18, "ion-col", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](19, PassengerDetailsPage_ng_container_1_ion_input_19_Template, 1, 1, "ion-input", 114)(20, PassengerDetailsPage_ng_container_1_ion_select_20_Template, 2, 1, "ion-select", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "ion-col", 116)(22, "ion-input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_Template_ion_input_keyup_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onPhoneChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](23, PassengerDetailsPage_ng_container_1_p_23_Template, 2, 0, "p", 118)(24, PassengerDetailsPage_ng_container_1_hr_24_Template, 1, 0, "hr", 119)(25, PassengerDetailsPage_ng_container_1_ion_row_25_Template, 7, 3, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](26, PassengerDetailsPage_ng_container_1_ion_card_26_Template, 6, 3, "ion-card", 120)(27, PassengerDetailsPage_ng_container_1_ion_card_27_Template, 5, 0, "ion-card", 121)(28, PassengerDetailsPage_ng_container_1_ion_card_28_Template, 40, 17, "ion-card", 122)(29, PassengerDetailsPage_ng_container_1_ion_card_29_Template, 5, 1, "ion-card", 123)(30, PassengerDetailsPage_ng_container_1_div_30_Template, 2, 1, "div", 0)(31, PassengerDetailsPage_ng_container_1_ion_card_31_Template, 18, 13, "ion-card", 124)(32, PassengerDetailsPage_ng_container_1_ion_card_32_Template, 6, 5, "ion-card", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](33, "div", 125)(34, "div", 126)(35, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](37, PassengerDetailsPage_ng_container_1_span_37_Template, 2, 0, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](38, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_Template_div_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.submitPassengerDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](39, "div")(40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](41, "PROCEED");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](42, PassengerDetailsPage_ng_container_1_div_42_Template, 11, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"]("", ctx_r1.commaSeparate(ctx_r1.globalData.SEARCH_DATA.originCity.name), " - ", ctx_r1.commaSeparate(ctx_r1.globalData.SEARCH_DATA.destCity.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("formGroup", ctx_r1.contactForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.selected_Country_code != "+91");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData && ctx_r1.metaData.isWhatsapp);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage && ctx_r1.commonStorage.localGet("wake_up_call_applicable"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.onwardSeatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp() && ctx_r1.commonStorage.getItem("isServiceTaxApplicable"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp() && ctx_r1.commonStorage.getItem("isServiceTaxApplicable"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, " ", ctx_r1.payAmount(ctx_r1.globalData.RESERVATION_DATA.totalBookingAmount + (ctx_r1.globalData.RESERVATION_DATA_RETURN && ctx_r1.globalData.RESERVATION_DATA_RETURN.totalBookingAmount ? ctx_r1.globalData.RESERVATION_DATA_RETURN.totalBookingAmount : 0)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.showWalletDets);
  }
}
function PassengerDetailsPage_ng_container_2_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" (", ctx_r1.reservationData.next_day_service, ") ");
  }
}
function PassengerDetailsPage_ng_container_2_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "div", 228);
  }
}
function PassengerDetailsPage_ng_container_2_ion_row_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 187)(2, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "ion-icon", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r1.commaSeparate(ctx_r1.globalData.SEARCH_DATA.destCity.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r1.commaSeparate(ctx_r1.globalData.SEARCH_DATA.originCity.name));
  }
}
function PassengerDetailsPage_ng_container_2_ion_row_40_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" (", ctx_r1.reservationDataReturn.next_day_service, ") ");
  }
}
function PassengerDetailsPage_ng_container_2_ion_row_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-row", 190)(1, "ion-col", 191)(2, "div", 192)(3, "span", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "p", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "ion-col", 195)(8, "p", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, PassengerDetailsPage_ng_container_2_ion_row_40_span_10_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "ion-col", 191)(12, "div", 197)(13, "span", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "p", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r1.reservationDataReturn.boardingStage.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r1.getFormatDate(ctx_r1.reservationDataReturn.boardingStage.travel_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r1.mainTimeDiffrenceReturn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.reservationDataReturn.next_day_service);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r1.reservationDataReturn.droppingStage.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r1.getFormatDate(ctx_r1.reservationDataReturn.droppingStage.travel_date));
  }
}
function PassengerDetailsPage_ng_container_2_span_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Passenger Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_2_span_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Passenger Details (For Onward Journey)");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_2_div_48_ion_col_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-col", 100)(1, "ion-item", 207)(2, "ion-label", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-input", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("input", function PassengerDetailsPage_ng_container_2_div_48_ion_col_17_Template_ion_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r51);
      const i_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r50, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_2_div_48_ion_col_27_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-select-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r53 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r53]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](key_r53);
  }
}
function PassengerDetailsPage_ng_container_2_div_48_ion_col_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-col", 206)(1, "ion-item", 207)(2, "ion-label", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Card Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-select", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_2_div_48_ion_col_27_ng_template_5_Template, 2, 2, "ng-template", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_2_div_48_ion_col_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-col", 206)(1, "ion-item", 207)(2, "ion-label", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "ID card No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "ion-input", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_2_div_48_ion_row_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 191)(2, "ion-item", 207)(3, "ion-label", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "Issue Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "ion-input", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_div_48_ion_row_30_Template_ion_input_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r54);
      const i_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.selectPassportDate(1, ctx_r1.passengerForm[i_r50].value.passport_issued_date, i_r50));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "ion-col", 191)(7, "ion-item", 207)(8, "ion-label", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "ion-input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_div_48_ion_row_30_Template_ion_input_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r54);
      const i_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.selectPassportDate(2, ctx_r1.passengerForm[i_r50].value.passport_expiry_date, i_r50));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "ion-col", 191)(12, "ion-item", 207)(13, "ion-label", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "Place of issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](15, "ion-input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_2_div_48_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 243)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, " Enter valid ID details; otherwise, it will impact your journey or package. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_2_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div")(1, "div", 47)(2, "ion-row")(3, "ion-col", 206)(4, "div", 230)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "ion-row")(11, "ion-col", 206)(12, "ion-item", 207)(13, "ion-label", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "ion-input", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("input", function PassengerDetailsPage_ng_container_2_div_48_Template_ion_input_input_15_listener($event) {
      const i_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r49).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r50, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](17, PassengerDetailsPage_ng_container_2_div_48_ion_col_17_Template, 5, 0, "ion-col", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "ion-col", 233)(19, "ion-segment", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_div_48_Template_ion_segment_ngModelChange_19_listener($event) {
      const seat_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r49).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](seat_r52.sex, $event) || (seat_r52.sex = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](20, "ion-segment-button", 235)(21, "ion-label", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "ion-segment-button", 237)(24, "ion-label", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](26, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](27, PassengerDetailsPage_ng_container_2_div_48_ion_col_27_Template, 6, 1, "ion-col", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](28, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](29, PassengerDetailsPage_ng_container_2_div_48_ion_col_29_Template, 5, 0, "ion-col", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](30, PassengerDetailsPage_ng_container_2_div_48_ion_row_30_Template, 16, 2, "ion-row", 0)(31, PassengerDetailsPage_ng_container_2_div_48_div_31_Template, 3, 0, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r52 = ctx.$implicit;
    const i_r50 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("formGroup", ctx_r1.passengerForm[i_r50]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("Passenger ", i_r50 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("Seat ", seat_r52.seat_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", seat_r52.sex);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", !seat_r52.sexOptional ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", seat_r52.sex === "Mr" && !seat_r52.sexOptional ? "ourbus_gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"]("Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", !seat_r52.sexOptional ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", seat_r52.sex === "Ms" && !seat_r52.sexOptional ? "ourbus_gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"]("Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerForm[i_r50].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-col", 100)(1, "ion-item", 207)(2, "ion-label", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-input", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("input", function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_17_Template_ion_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r58);
      const i_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r57, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_27_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-select-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r59 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r59]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](key_r59);
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-col", 206)(1, "ion-item", 207)(2, "ion-label", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Card Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-select", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_27_ng_template_5_Template, 2, 2, "ng-template", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-col", 206)(1, "ion-item", 207)(2, "ion-label", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "ID card No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "ion-input", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_row_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 191)(2, "ion-item", 207)(3, "ion-label", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "Issue Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "ion-input", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_row_30_Template_ion_input_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r60);
      const i_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.selectPassportDateR(1, ctx_r1.passengerFormR[i_r57].value.passport_issued_date, i_r57));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "ion-col", 191)(7, "ion-item", 207)(8, "ion-label", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "ion-input", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_row_30_Template_ion_input_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r60);
      const i_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.selectPassportDateR(2, ctx_r1.passengerFormR[i_r57].value.passport_issued_date, i_r57));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "ion-col", 191)(12, "ion-item", 207)(13, "ion-label", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "Place of issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](15, "ion-input", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 243)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, " Enter valid ID details; otherwise, it will impact your journey or package. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 247)(1, "div", 47)(2, "ion-row")(3, "ion-col", 206)(4, "div", 230)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "ion-row")(11, "ion-col", 206)(12, "ion-item", 207)(13, "ion-label", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "ion-input", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("input", function PassengerDetailsPage_ng_container_2_div_49_div_7_Template_ion_input_input_15_listener($event) {
      const i_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r56).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r57, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](17, PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_17_Template, 5, 0, "ion-col", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "ion-col", 233)(19, "ion-segment", 248)(20, "ion-segment-button", 235)(21, "ion-label", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "ion-segment-button", 237)(24, "ion-label", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](26, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](27, PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_27_Template, 6, 1, "ion-col", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](28, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](29, PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_29_Template, 5, 0, "ion-col", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](30, PassengerDetailsPage_ng_container_2_div_49_div_7_ion_row_30_Template, 16, 2, "ion-row", 0)(31, PassengerDetailsPage_ng_container_2_div_49_div_7_div_31_Template, 3, 0, "div", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r61 = ctx.$implicit;
    const i_r57 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("formGroup", ctx_r1.passengerFormR[i_r57]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("Passenger ", i_r57 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("Seat ", seat_r61.seat_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", !seat_r61.sexOptional ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", seat_r61.sex === "Mr" && !seat_r61.sexOptional ? "ourbus_gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"]("Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", !seat_r61.sexOptional ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", seat_r61.sex === "Ms" && !seat_r61.sexOptional ? "ourbus_gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"]("Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerFormR[i_r57].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
  }
}
function PassengerDetailsPage_ng_container_2_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div")(1, "ion-item", 166)(2, "ion-label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Copy Onward Details To Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-checkbox", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_div_49_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r55);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.copyData, $event) || (ctx_r1.copyData = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_2_div_49_Template_ion_checkbox_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r55);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.copyDataToReturn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "p", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6, "Passenger details (For Return Journey)");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, PassengerDetailsPage_ng_container_2_div_49_div_7_Template, 32, 14, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.copyData);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.returnSeatDetails);
  }
}
function PassengerDetailsPage_ng_container_2_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div")(1, "ion-item", 207)(2, "ion-label", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-input", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedCountry.flag, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r1.selectedCountry.dialCode);
  }
}
function PassengerDetailsPage_ng_container_2_div_67_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-item", 256)(1, "ion-label", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "ion-input", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_div_67_ion_item_1_Template_ion_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r62);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedCountry.flag, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r1.selectedCountry.dialCode);
  }
}
function PassengerDetailsPage_ng_container_2_div_67_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-item", 258)(1, "ion-label", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "ion-input", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_div_67_ion_item_2_Template_ion_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r63);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_div_67_ion_item_2_Template_ion_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r63);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.dialCodeSelected, $event) || (ctx_r1.dialCodeSelected = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r1.flagSelected, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.dialCodeSelected);
  }
}
function PassengerDetailsPage_ng_container_2_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_2_div_67_ion_item_1_Template, 4, 2, "ion-item", 254)(2, PassengerDetailsPage_ng_container_2_div_67_ion_item_2_Template, 4, 2, "ion-item", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.selectedCountry);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.selectedCountry);
  }
}
function PassengerDetailsPage_ng_container_2_ion_row_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-row", 260)(1, "ion-col", 261)(2, "ion-checkbox", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_ion_row_74_Template_ion_checkbox_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r64);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onChangeWhatsappSwitch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_row_74_Template_ion_checkbox_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r64);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.isWPSwitchOn, $event) || (ctx_r1.isWPSwitchOn = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "ion-col", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "Share booking details and updates on Whatsapp");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.isWPSwitchOn);
  }
}
function PassengerDetailsPage_ng_container_2_ion_select_option_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-select-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", item_r65.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", item_r65.name, " ");
  }
}
function PassengerDetailsPage_ng_container_2_ion_card_99_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 267)(1, "ion-item", 207)(2, "ion-input", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_2_ion_card_99_div_5_Template_ion_input_keyup_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r67);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onchangeGstId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_99_div_5_Template_ion_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r67);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.gstId, $event) || (ctx_r1.gstId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "ion-item", 207)(4, "ion-input", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_99_div_5_Template_ion_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r67);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.gstName, $event) || (ctx_r1.gstName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstId);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](5, _c0));
  }
}
function PassengerDetailsPage_ng_container_2_ion_card_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-card", 186)(1, "ion-item", 264)(2, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Enter GST Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-toggle", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_99_Template_ion_toggle_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r66);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.businessTravel, $event) || (ctx_r1.businessTravel = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_2_ion_card_99_Template_ion_toggle_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r66);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.gstInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_2_ion_card_99_div_5_Template, 5, 6, "div", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.businessTravel);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.businessTravel);
  }
}
function PassengerDetailsPage_ng_container_2_ion_card_100_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 267)(1, "ion-item", 207)(2, "ion-input", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_2_ion_card_100_div_5_Template_ion_input_keyup_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r69);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onchangeGstId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_100_div_5_Template_ion_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r69);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.gstId, $event) || (ctx_r1.gstId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "ion-item", 207)(4, "ion-input", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_100_div_5_Template_ion_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r69);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.gstName, $event) || (ctx_r1.gstName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstId);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](5, _c0));
  }
}
function PassengerDetailsPage_ng_container_2_ion_card_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-card", 186)(1, "ion-item", 264)(2, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Enter GST Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-toggle", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_100_Template_ion_toggle_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r68);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.businessTravel, $event) || (ctx_r1.businessTravel = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_2_ion_card_100_Template_ion_toggle_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r68);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.gstInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_2_ion_card_100_div_5_Template, 5, 6, "div", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.businessTravel);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.businessTravel);
  }
}
function PassengerDetailsPage_ng_container_2_div_108_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-row", 270)(1, "ion-col", 100)(2, "span", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-col", 272)(5, "span", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const key_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](key_r70);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.fareBreakup_hash[key_r70].toFixed(2), "");
  }
}
function PassengerDetailsPage_ng_container_2_div_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_2_div_108_ion_row_1_Template, 7, 3, "ion-row", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r70 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakup_hash[key_r70] != 0 && key_r70 != "Payble Amount" && key_r70 != "Total Fare" && key_r70 != "e-Booking Discount");
  }
}
function PassengerDetailsPage_ng_container_2_div_110_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-row", 274)(1, "ion-col", 100)(2, "span", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Amount Payable");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-col", 272)(5, "span", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const key_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.fareBreakup_hash[key_r71].toFixed(2), "");
  }
}
function PassengerDetailsPage_ng_container_2_div_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_2_div_110_ion_row_1_Template, 7, 2, "ion-row", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", key_r71 == "Payble Amount");
  }
}
function PassengerDetailsPage_ng_container_2_div_114_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 98)(1, "div", 99)(2, "ion-row")(3, "ion-col", 277)(4, "p", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Important Note!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "ion-col", 100)(7, "p", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_div_114_Template_p_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r72);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10, " As per the Govt new GST Rule-46, Passengers are Mandated to provide their residential State, City and Pin Code details for the booking. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "ion-header", 184)(2, "ion-toolbar", 104)(3, "ion-row")(4, "ion-col", 12)(5, "ion-buttons")(6, "ion-back-button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_Template_ion_back_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r48);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "ion-col", 185)(8, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9, " Booking Summary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "ion-content", 184)(11, "form", 7)(12, "ion-card", 186)(13, "div")(14, "ion-row")(15, "ion-col", 187)(16, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](18, "ion-icon", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "ion-row", 190)(22, "ion-col", 191)(23, "div", 192)(24, "span", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](26, "p", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](28, "ion-col", 195)(29, "p", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](31, PassengerDetailsPage_ng_container_2_span_31_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](32, "ion-col", 191)(33, "div", 197)(34, "span", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](36, "p", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](38, PassengerDetailsPage_ng_container_2_div_38_Template, 1, 0, "div", 198)(39, PassengerDetailsPage_ng_container_2_ion_row_39_Template, 7, 2, "ion-row", 0)(40, PassengerDetailsPage_ng_container_2_ion_row_40_Template, 17, 6, "ion-row", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](41, "ion-card", 186)(42, "ion-row")(43, "ion-col", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](44, "ion-icon", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](45, "ion-col", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](46, PassengerDetailsPage_ng_container_2_span_46_Template, 2, 0, "span", 0)(47, PassengerDetailsPage_ng_container_2_span_47_Template, 2, 0, "span", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](48, PassengerDetailsPage_ng_container_2_div_48_Template, 32, 15, "div", 204)(49, PassengerDetailsPage_ng_container_2_div_49_Template, 8, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](50, "ion-card", 186)(51, "div", 47)(52, "ion-row")(53, "ion-col", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](54, "ion-icon", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](55, "ion-col", 202)(56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](57, "Contact Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](58, "ion-row")(59, "ion-col", 206)(60, "ion-item", 207)(61, "ion-label", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](62, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](63, "ion-input", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](64, "ion-row")(65, "ion-col", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](66, PassengerDetailsPage_ng_container_2_div_66_Template, 6, 3, "div", 0)(67, PassengerDetailsPage_ng_container_2_div_67_Template, 3, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](68, "ion-col", 211)(69, "ion-item", 207)(70, "ion-label", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](71, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](72, "ion-input", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("input", function PassengerDetailsPage_ng_container_2_Template_ion_input_input_72_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r48);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onPhoneChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](73, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](74, PassengerDetailsPage_ng_container_2_ion_row_74_Template, 5, 1, "ion-row", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](75, "ion-card", 186)(76, "div", 85)(77, "p", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](78, "Please enter your residential location details.");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](79, "ion-icon", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_Template_ion_icon_click_79_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r48);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](80, "ion-row")(81, "ion-col")(82, "ion-item", 207)(83, "ion-label", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](84, "Pin Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](85, "ion-input", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_2_Template_ion_input_ionChange_85_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r48);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onchangeStateId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_Template_ion_input_ngModelChange_85_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r48);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.stateId, $event) || (ctx_r1.stateId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](86, "ion-row")(87, "ion-col")(88, "ion-item", 207)(89, "ion-label", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](90, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](91, "ion-select", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_2_Template_ion_select_ionChange_91_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r48);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onchangeId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_Template_ion_select_ngModelChange_91_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r48);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.stateType, $event) || (ctx_r1.stateType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](92, PassengerDetailsPage_ng_container_2_ion_select_option_92_Template, 2, 2, "ion-select-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](93, "ion-row")(94, "ion-col")(95, "ion-item", 207)(96, "ion-label", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](97, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](98, "ion-input", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_2_Template_ion_input_keyup_98_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r48);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onchangeCityId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_Template_ion_input_ngModelChange_98_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r48);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.cityId, $event) || (ctx_r1.cityId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](99, PassengerDetailsPage_ng_container_2_ion_card_99_Template, 6, 4, "ion-card", 219)(100, PassengerDetailsPage_ng_container_2_ion_card_100_Template, 6, 4, "ion-card", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](101, "ion-card", 220)(102, "ion-row", 221)(103, "ion-col", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](104, "ion-icon", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](105, "ion-col", 223)(106, "span", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](107, "Order Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](108, PassengerDetailsPage_ng_container_2_div_108_Template, 2, 1, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](109, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](110, PassengerDetailsPage_ng_container_2_div_110_Template, 2, 1, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](111, "div", 226)(112, "ion-button", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_Template_ion_button_click_112_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r48);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.submitPassengerDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](113, "Continue to Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](114, PassengerDetailsPage_ng_container_2_div_114_Template, 11, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r1.commaSeparate(ctx_r1.globalData.SEARCH_DATA.originCity.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r1.commaSeparate(ctx_r1.globalData.SEARCH_DATA.destCity.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r1.reservationData.boardingStage.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r1.getFormatDate(ctx_r1.reservationData.boardingStage.travel_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r1.mainTimeDiffrence, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.reservationData.next_day_service);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r1.reservationData.droppingStage.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r1.getFormatDate(ctx_r1.reservationData.droppingStage.travel_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.onwardSeatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("formGroup", ctx_r1.contactForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData && ctx_r1.metaData.isWhatsapp);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateId);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](35, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateGetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateType);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](36, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityName ? ctx_r1.cityName : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityId);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](37, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.isReturn && ctx_r1.commonStorage.getItem("isServiceTaxApplicable"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.isReturn && (ctx_r1.commonStorage.getItem("isServiceTaxApplicableReturn") || ctx_r1.commonStorage.getItem("isServiceTaxApplicable")));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.getObjectKeys(ctx_r1.fareBreakup_hash));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.getObjectKeys(ctx_r1.fareBreakup_hash));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.showWalletDets);
  }
}
function PassengerDetailsPage_ng_container_3_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "(Round Trip)");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_ion_input_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-input", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_ion_input_23_Template_ion_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r74);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", ctx_r1.selected_Country_code);
  }
}
function PassengerDetailsPage_ng_container_3_ion_select_24_ion_select_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-select-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const code_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", code_r75);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" +", code_r75, " ");
  }
}
function PassengerDetailsPage_ng_container_3_ion_select_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-select", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_3_ion_select_24_ion_select_option_1_Template, 2, 2, "ion-select-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.AllowedCountryCodes);
  }
}
function PassengerDetailsPage_ng_container_3_p_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "p", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "SMS shall not be sent to an international number");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_hr_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "hr", 133);
  }
}
function PassengerDetailsPage_ng_container_3_ion_row_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "img", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "ion-col", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "Send booking details and updates on Whatsapp");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "ion-col", 12)(6, "ion-toggle", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_3_ion_row_32_Template_ion_toggle_ionChange_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r76);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onChangeWhatsappSwitch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_row_32_Template_ion_toggle_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r76);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.isWPSwitchOn, $event) || (ctx_r1.isWPSwitchOn = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.isWPSwitchOn);
  }
}
function PassengerDetailsPage_ng_container_3_ion_card_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-card", 306)(1, "ion-row")(2, "ion-col", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Wake-up Call");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-col", 12)(5, "ion-toggle", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_3_ion_card_33_Template_ion_toggle_ionChange_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r77);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onChangeWakeupCall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_card_33_Template_ion_toggle_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r77);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.wakeUpCall, $event) || (ctx_r1.wakeUpCall = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.wakeUpCall);
  }
}
function PassengerDetailsPage_ng_container_3_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div")(1, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, " Traveller details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_div_35_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r78);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.addExistingPass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "Add existing passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_3_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Traveller details");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_div_36_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Primary Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_div_36_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Co-Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_div_36_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Reserved for female");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_div_36_ion_row_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-row", 58)(1, "ion-col")(2, "ion-item")(3, "ion-input", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_3_div_36_ion_row_33_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r81);
      const i_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r80, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
}
function PassengerDetailsPage_ng_container_3_div_36_ion_col_35_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-select-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r82 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r82]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](key_r82);
  }
}
function PassengerDetailsPage_ng_container_3_div_36_ion_col_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-col", 100)(1, "ion-item", 157)(2, "ion-select", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, PassengerDetailsPage_ng_container_3_div_36_ion_col_35_ng_template_3_Template, 2, 2, "ng-template", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "ion-icon", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_3_div_36_ion_col_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-col", 100)(1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "ion-input", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_3_div_36_ion_row_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 160)(2, "ion-item")(3, "ion-label", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "Issue Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "ion-input", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_div_36_ion_row_37_Template_ion_input_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r83);
      const i_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.selectPassportDate(1, ctx_r1.passengerForm[i_r80].value.passport_issued_date, i_r80));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "ion-col", 160)(7, "ion-item")(8, "ion-label", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "ion-input", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_div_36_ion_row_37_Template_ion_input_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r83);
      const i_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.selectPassportDate(2, ctx_r1.passengerForm[i_r80].value.passport_expiry_date, i_r80));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "ion-col", 160)(12, "ion-item")(13, "ion-label", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "Place of Issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](15, "ion-input", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_3_div_36_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 164)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "Enter valid ID details; otherwise, it will impact your journey or package.");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_3_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_3_div_36_div_1_Template, 2, 0, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, PassengerDetailsPage_ng_container_3_div_36_span_3_Template, 2, 0, "span", 0)(4, PassengerDetailsPage_ng_container_3_div_36_span_4_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6, "Seat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, PassengerDetailsPage_ng_container_3_div_36_span_10_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "ion-row")(12, "ion-col")(13, "ion-item")(14, "ion-input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_3_div_36_Template_ion_input_keyup_14_listener($event) {
      const i_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r79).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r80, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "ion-row", 73)(16, "ion-radio-group", 147)(17, "ion-row")(18, "ion-col")(19, "ion-item", 166)(20, "ion-label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](21, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "ion-col")(23, "ion-item", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](24, "ion-radio", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "ion-label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "ion-col")(28, "ion-item", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](29, "ion-radio", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](30, "ion-label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](32, "hr", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](33, PassengerDetailsPage_ng_container_3_div_36_ion_row_33_Template, 4, 0, "ion-row", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](34, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](35, PassengerDetailsPage_ng_container_3_div_36_ion_col_35_Template, 5, 1, "ion-col", 232)(36, PassengerDetailsPage_ng_container_3_div_36_ion_col_36_Template, 3, 0, "ion-col", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](37, PassengerDetailsPage_ng_container_3_div_36_ion_row_37_Template, 16, 2, "ion-row", 0)(38, PassengerDetailsPage_ng_container_3_div_36_div_38_Template, 3, 0, "div", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r84 = ctx.$implicit;
    const i_r80 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("formGroup", ctx_r1.passengerForm[i_r80]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.isLogin && i_r80 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", i_r80 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", i_r80 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](seat_r84.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", seat_r84.sex !== "" && seat_r84.sex === "Ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", seat_r84.sex !== "" && !seat_r84.sexOptional);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", seat_r84.sex === "Mr" && !seat_r84.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", "Male", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", seat_r84.sex !== "" && !seat_r84.sexOptional);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", seat_r84.sex === "Ms" && !seat_r84.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", "Female", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] !== "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerForm[i_r80].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] !== "Hide"));
  }
}
function PassengerDetailsPage_ng_container_3_ion_card_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-card", 318)(1, "ion-item", 166)(2, "ion-label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Copy Onward Details To Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-checkbox", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_card_37_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r85);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.copyData, $event) || (ctx_r1.copyData = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_3_ion_card_37_Template_ion_checkbox_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r85);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.copyDataToReturn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.copyData);
  }
}
function PassengerDetailsPage_ng_container_3_div_38_ion_card_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Primary Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_div_38_ion_card_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Co-Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_div_38_ion_card_1_ion_row_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-row", 82)(1, "ion-col")(2, "ion-item")(3, "ion-input", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_3_div_38_ion_card_1_ion_row_32_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r88);
      const i_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r87, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
}
function PassengerDetailsPage_ng_container_3_div_38_ion_card_1_ion_col_34_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-select-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r89 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r89]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](key_r89);
  }
}
function PassengerDetailsPage_ng_container_3_div_38_ion_card_1_ion_col_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-col", 156)(1, "ion-item")(2, "ion-label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Card Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-select", 158)(5, "ion-select-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6, "Select Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, PassengerDetailsPage_ng_container_3_div_38_ion_card_1_ion_col_34_ng_template_7_Template, 2, 2, "ng-template", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_3_div_38_ion_card_1_ion_col_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-col", 156)(1, "ion-item")(2, "ion-label", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "ID Card No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "ion-input", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_3_div_38_ion_card_1_ion_row_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 160)(2, "div")(3, "ion-item")(4, "ion-label", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Issue Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "ion-input", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_div_38_ion_card_1_ion_row_37_Template_ion_input_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r90);
      const i_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.selectPassportDateR(1, ctx_r1.passengerFormR[i_r87].value.passport_issued_date, i_r87));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "ion-col", 160)(8, "div")(9, "ion-item")(10, "ion-label", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "ion-input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_div_38_ion_card_1_ion_row_37_Template_ion_input_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r90);
      const i_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.selectPassportDateR(2, ctx_r1.passengerFormR[i_r87].value.passport_issued_date, i_r87));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "ion-col", 160)(14, "ion-item")(15, "ion-label", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16, "Place of issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](17, "ion-input", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_3_div_38_ion_card_1_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 164)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, " Enter valid ID details; otherwise, it will impact your journey or package. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_3_div_38_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-card", 293)(1, "div", 47)(2, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Traveller details (For return journey)");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_3_div_38_ion_card_1_span_5_Template, 2, 0, "span", 0)(6, PassengerDetailsPage_ng_container_3_div_38_ion_card_1_span_6_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8, "Seat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "ion-row")(12, "ion-col")(13, "ion-item")(14, "ion-input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_3_div_38_ion_card_1_Template_ion_input_keyup_14_listener($event) {
      const i_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r86).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r87, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "ion-row")(16, "ion-radio-group", 147)(17, "ion-row")(18, "ion-col")(19, "ion-item", 148)(20, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](21, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "ion-col")(23, "ion-item", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](24, "ion-radio", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "ion-label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "ion-col")(28, "ion-item", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](29, "ion-radio", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](30, "ion-label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](32, PassengerDetailsPage_ng_container_3_div_38_ion_card_1_ion_row_32_Template, 4, 0, "ion-row", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](33, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](34, PassengerDetailsPage_ng_container_3_div_38_ion_card_1_ion_col_34_Template, 8, 2, "ion-col", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](35, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](36, PassengerDetailsPage_ng_container_3_div_38_ion_card_1_ion_col_36_Template, 5, 0, "ion-col", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](37, PassengerDetailsPage_ng_container_3_div_38_ion_card_1_ion_row_37_Template, 18, 2, "ion-row", 0)(38, PassengerDetailsPage_ng_container_3_div_38_ion_card_1_div_38_Template, 3, 0, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r91 = ctx.$implicit;
    const i_r87 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("formGroup", ctx_r1.passengerFormR[i_r87]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", i_r87 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", i_r87 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](seat_r91.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", seat_r91.sex != "" && !seat_r91.sexOptional);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", seat_r91.sex === "Mr" && !seat_r91.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", "Male", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", seat_r91.sex != "" && !seat_r91.sexOptional);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", seat_r91.sex === "Ms" && !seat_r91.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", "Female", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerFormR[i_r87].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
  }
}
function PassengerDetailsPage_ng_container_3_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_3_div_38_ion_card_1_Template, 39, 15, "ion-card", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.returnSeatDetails);
  }
}
function PassengerDetailsPage_ng_container_3_ion_card_39_ion_select_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-select-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r93 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", item_r93.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", item_r93.name, " ");
  }
}
function PassengerDetailsPage_ng_container_3_ion_card_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-card", 324)(1, "div", 85)(2, "span", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Please Enter your residential Location Details.");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-icon", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_ion_card_39_Template_ion_icon_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r92);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "ion-item", 174)(6, "ion-label", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7, "Pin Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "ion-input", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_3_ion_card_39_Template_ion_input_ionChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r92);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onchangeStateId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_card_39_Template_ion_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r92);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.stateId, $event) || (ctx_r1.stateId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "ion-item", 174)(10, "ion-label", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "ion-select", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_3_ion_card_39_Template_ion_select_ionChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r92);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onchangeId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_card_39_Template_ion_select_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r92);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.stateType, $event) || (ctx_r1.stateType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](13, PassengerDetailsPage_ng_container_3_ion_card_39_ion_select_option_13_Template, 2, 2, "ion-select-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "ion-item", 174)(15, "ion-label", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "ion-input", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_3_ion_card_39_Template_ion_input_keyup_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r92);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onchangeCityId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_card_39_Template_ion_input_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r92);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.cityId, $event) || (ctx_r1.cityId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", ctx_r1.businessTravel ? "businessTravelclick" : "businessTravelunclick");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateId);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateGetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateType);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityName ? ctx_r1.cityName : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityId);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](12, _c0));
  }
}
function PassengerDetailsPage_ng_container_3_ion_card_40_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div")(1, "ion-item")(2, "ion-input", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_3_ion_card_40_div_5_Template_ion_input_keyup_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r95);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onchangeGstId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_card_40_div_5_Template_ion_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r95);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.gstId, $event) || (ctx_r1.gstId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "ion-item")(4, "ion-input", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_card_40_div_5_Template_ion_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r95);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.gstName, $event) || (ctx_r1.gstName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstId);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](5, _c0));
  }
}
function PassengerDetailsPage_ng_container_3_ion_card_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ion-card", 326)(1, "ion-item", 166)(2, "ion-label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "I am booking for business travel");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ion-checkbox", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_3_ion_card_40_Template_ion_checkbox_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r94);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.gstInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_card_40_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r94);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.businessTravel, $event) || (ctx_r1.businessTravel = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_3_ion_card_40_div_5_Template, 5, 6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", ctx_r1.businessTravel ? "businessTravelclick" : "businessTravelunclick");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.businessTravel);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.businessTravel);
  }
}
function PassengerDetailsPage_ng_container_3_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 98)(1, "div", 99)(2, "ion-row")(3, "ion-col", 100)(4, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Important Note!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "ion-col", 100)(7, "p", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_div_54_Template_p_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r96);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10, " As per the Govt new GST Rule - 46 Passengers are Mandated to provide their residential State, City and Pin Code details for the Bookings. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 104)(3, "ion-buttons", 281)(4, "ion-back-button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r73);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "ion-title", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6, "Passenger Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "ion-title", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, PassengerDetailsPage_ng_container_3_span_9_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "ion-content", 284)(11, "form", 7)(12, "ion-card", 285)(13, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "Contact details");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16, " Your ticket and bus details will be sent here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "ion-item")(18, "ion-label", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](19, "Enter email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](20, "ion-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "ion-row", 286)(22, "ion-col", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](23, PassengerDetailsPage_ng_container_3_ion_input_23_Template, 1, 1, "ion-input", 288)(24, PassengerDetailsPage_ng_container_3_ion_select_24_Template, 2, 1, "ion-select", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "ion-col", 116)(26, "ion-item", 166)(27, "ion-label", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](28, "Enter phone number");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](29, "ion-input", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_3_Template_ion_input_keyup_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r73);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onPhoneChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](30, PassengerDetailsPage_ng_container_3_p_30_Template, 2, 0, "p", 291)(31, PassengerDetailsPage_ng_container_3_hr_31_Template, 1, 0, "hr", 119)(32, PassengerDetailsPage_ng_container_3_ion_row_32_Template, 7, 3, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](33, PassengerDetailsPage_ng_container_3_ion_card_33_Template, 6, 3, "ion-card", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](34, "ion-card", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](35, PassengerDetailsPage_ng_container_3_div_35_Template, 5, 0, "div", 0)(36, PassengerDetailsPage_ng_container_3_div_36_Template, 39, 17, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](37, PassengerDetailsPage_ng_container_3_ion_card_37_Template, 5, 1, "ion-card", 295)(38, PassengerDetailsPage_ng_container_3_div_38_Template, 2, 1, "div", 0)(39, PassengerDetailsPage_ng_container_3_ion_card_39_Template, 18, 13, "ion-card", 296)(40, PassengerDetailsPage_ng_container_3_ion_card_40_Template, 6, 5, "ion-card", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](41, "ion-card", 298)(42, "ion-row")(43, "ion-col", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](44, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](45, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](46, "(Excluding taxes)");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](47, "ion-col", 191)(48, "span", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](50, "div", 302)(51, "div", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_Template_div_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r73);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.submitPassengerDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](52, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](53, "Proceed to pay");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](54, PassengerDetailsPage_ng_container_3_div_54_Template, 11, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"]("", ctx_r1.commaSeparate(ctx_r1.globalData.SEARCH_DATA.originCity.name), " - ", ctx_r1.commaSeparate(ctx_r1.globalData.SEARCH_DATA.destCity.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("formGroup", ctx_r1.contactForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.selected_Country_code != "+91");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.metaData && ctx_r1.metaData.isWhatsapp);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage && ctx_r1.commonStorage.localGet("wake_up_call_applicable"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.onwardSeatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage && ctx_r1.commonStorage.localGet("serviceDetails").is_service_tax_applicable);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage && ctx_r1.commonStorage.localGet("serviceDetails").is_service_tax_applicable);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, " ", ctx_r1.payAmount(ctx_r1.globalData.RESERVATION_DATA.totalBookingAmount + (ctx_r1.globalData.RESERVATION_DATA_RETURN && ctx_r1.globalData.RESERVATION_DATA_RETURN.totalBookingAmount ? ctx_r1.globalData.RESERVATION_DATA_RETURN.totalBookingAmount : 0)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.showWalletDets);
  }
}
class PassengerDetailsPage {
  constructor(globalData, navCtrl, commonStorage,
  //public viewCtrl: ViewController,
  elem, modalCtrl, loading, formBuilder, util, theme, authenticate, dateService, platform, ex, commonService, apiFactory, route, modalController, router, appData, firebaseAnalyticsService, fb) {
    this.globalData = globalData;
    this.navCtrl = navCtrl;
    this.commonStorage = commonStorage;
    this.elem = elem;
    this.modalCtrl = modalCtrl;
    this.loading = loading;
    this.formBuilder = formBuilder;
    this.util = util;
    this.theme = theme;
    this.authenticate = authenticate;
    this.dateService = dateService;
    this.platform = platform;
    this.ex = ex;
    this.commonService = commonService;
    this.apiFactory = apiFactory;
    this.route = route;
    this.modalController = modalController;
    this.router = router;
    this.appData = appData;
    this.firebaseAnalyticsService = firebaseAnalyticsService;
    this.fb = fb;
    this.gstId = '';
    this.stateId = '';
    this.cityId = '';
    this.stateType = '';
    this.gstName = '';
    this.passengerForm = [];
    this.businessTravel = false;
    this.isReserved = [];
    this.showFormError = false;
    this.showContinue = true;
    this.onwardSeatDetails = [];
    this.returnSeatDetails = [];
    this.isReturn = false;
    this.isBima = false;
    this.passengerFormR = [];
    this.copyData = false;
    this.childFareAmtLess = 0;
    this.isBPDP = false;
    this.object = Object;
    this.selectedPassengerList = [];
    this.isLogin = false;
    this.flag = 1;
    this.isSnackAvailable = false;
    this.wakeUpCall = false;
    this.showWalletDets = false;
    this.cityName = '';
    this.stateGetName = '';
    this.stateGetName1 = '';
    this.getGstInfo = {};
    this.isWPSwitchOn = true;
    this.selected_Country_code = '+91';
    this.subdomain = '';
    this.getdate_go = {};
    this.getDate_come = {};
    this.datafill = false;
    this.isWPBooking = false;
    this.isEditable = true;
    this.selectedCountry = '';
    this.flagSelected = '';
    this.dialCodeSelected = '';
    this.isState = true;
    this.gstvalid = true;
    this.metaData = commonStorage.localGet('metaData');
    this.getGstInfo = this.metaData.gst_info;
    this.isServiceTaxApplicable = this.commonStorage.getItem('isServiceTaxApplicable');
    const datafill = this.commonStorage.localGet('autofillData') ? this.commonStorage.localGet('autofillData') : false;
    const seatnum_detail = this.commonStorage.localGet('ticketRecentData');
    this.fillSeatData = this.commonStorage.localGet('ticketRecentData');
    if (datafill) {
      this.passDetail = seatnum_detail && seatnum_detail.result.passengerDetails ? seatnum_detail.result.passengerDetails : [];
      this.datafill = datafill;
    } else {
      this.passDetail = [];
      this.datafill = false;
    }
    console.log("this.commonStorage.localGet('timeDifferenceHour')", this.commonStorage.localGet('timeDifferenceHour'));
    console.log("this.commonStorage.localGet('timeDifferenceMinute')", this.commonStorage.localGet('timeDifferenceMinute'));
    this.mainTimeDiffrence = this.commonStorage.localGet('timeDifferenceHour') + ' h' + ' ' + this.commonStorage.localGet('timeDifferenceMinute') + ' m';
  }
  goBack() {
    // this.router.navigate(['/seat-layout']);
    let isreturnTrip;
    this.route.queryParams.subscribe(params => {
      isreturnTrip = params["is_return_trip"];
    });
    if (isreturnTrip) {
      let navigationExtras = {
        queryParams: {
          is_return_trip: true
        }
      };
      this.navCtrl.navigateForward('stage-details', navigationExtras);
    } else {
      this.router.navigate(['/stage-details']);
    }
  }
  gstInfo() {
    if (this.metaData.msiteFolder != 'ourbustheme') {
      this.globalData.IS_GST = this.businessTravel;
    } else {
      this.commonStorage.localSet("businessTravelToggole", this.businessTravel);
    }
  }
  ngOnInit() {
    // need to declare form
    this.contactForm = this.fb.group({
      country_code: [''],
      mobile_number: [''],
      email: ['']
    });
    this.firebaseAnalyticsService.logCustomEvent('passenger_details_page', {
      page: 'Passenger Details Page'
    });
    this.metaData = this.commonStorage.localGet('metaData');
    if (this.commonStorage.localGet("gstIdOurbus") && this.commonStorage.localGet("gstNameOurbus")) {
      this.gstId = this.commonStorage.localGet("gstIdOurbus");
      this.gstName = this.commonStorage.localGet("gstNameOurbus");
    }
    this.countryData = _countries_countries_json__WEBPACK_IMPORTED_MODULE_6__;
    this.selectedCountry = this.countryData.find(country => country.dialCode === "+91");
    this.appData.newTheme = this.util.getNewTheme();
    this.util.getCountries().subscribe(data => {
      this.countries = data;
    });
    this.businessTravel = this.globalData.IS_GST;
    if (this.commonService.isAbcApp()) {
      this.businessTravel = false;
    }
    this.route.queryParams.subscribe(params => {
      this.isReturn = params["is_return_trip"];
      this.isBPDP = params["isBPDP"];
      this.subdomain = this.metaData && this.metaData.operatorInternalUrl ? this.metaData.operatorInternalUrl.split('.')[0] : '';
      this.defaultCall();
    });
    if (this.isReturn) {
      this.mainTimeDiffrenceReturn = this.commonStorage.localGet('timeDifferenceHourReturn') + ' h' + ' ' + this.commonStorage.localGet('timeDifferenceMinuteReturn') + ' m';
      if (localStorage.getItem('currentUser')) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    }
    this.gstState();
  }
  selectCountry_code() {
    var _this = this;
    return (0,_Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.metaData.msiteFolder == 'ourbustheme') {
        const reformattedCountries = _this.countryData.map(country => ({
          name: country.name,
          cca2: country.code,
          idd: country.dialCode,
          flags: country.flag
        }));
        const modal = yield _this.modalController.create({
          component: _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_4__.CitiesModalPage,
          componentProps: {
            "list": 9,
            "destinationList": reformattedCountries,
            "isOurbus": 'true'
          }
        });
        yield modal.present();
        const {
          data
        } = yield modal.onDidDismiss();
        if (data != '') {
          _this.selectedCountry = null;
          _this.flagSelected = data.flags;
          _this.dialCodeSelected = data.idd;
        }
      } else {
        const modal = yield _this.modalController.create({
          component: _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_4__.CitiesModalPage,
          componentProps: {
            "list": 9,
            "destinationList": _this.countries,
            "isOurbus": 'false'
          }
        });
        yield modal.present();
        const {
          data
        } = yield modal.onDidDismiss();
        if (data != '') {
          _this.selected_Country_code = data.idd;
        }
      }
    })();
  }
  ionViewWillEnter() {
    // this.commonService.gTrack('passengerPage', 'passenger page is being displayed')
    if (this.metaData.isWhatsapp) {
      this.onChangeWhatsappSwitch();
    }
    this.isWPBooking = this.commonStorage.localGet('isWPBooking');
    if (this.isWPBooking) {
      let mobile = this.commonStorage.localGet('wpMobileNo');
      this.contactForm.controls['mobile_number'].setValue(mobile);
    }
    this.isSnackAvailable = this.commonStorage.localGet('isSnackAvailable');
    this.commonStorage.localSet('snack_details', null);
  }
  gotoPaymentDetails() {
    this.globalData.GST_ID = this.gstId;
    this.globalData.GST_NAME = this.gstName;
    this.commonStorage.localSet("gstId", this.globalData.GST_ID);
    this.commonStorage.localSet("gstName", this.globalData.GST_NAME);
    if (this.isReturn) {
      let navigationExtras = {
        queryParams: {
          is_return_trip: true
        }
      };
      this.navCtrl.navigateForward('payment-details', navigationExtras);
    } else {
      this.navCtrl.navigateForward('payment-details');
    }
  }
  defaultCall() {
    try {
      this.commonService.setGloblaData();
      this.onwardSeatDetails = [];
      this.returnSeatDetails = [];
      this.passengerForm = [];
      this.passengerFormR = [];
      this.metaData = this.commonStorage.localGet('metaData');
      this.currencySym = this.metaData && this.metaData.currencySym ? this.metaData.currencySym : "₹";
      this.locale = this.commonStorage.localGet('locale');
      if (this.authenticate.isLoggedIn()) {
        this.personalInfo = this.authenticate.user();
        this.name = this.personalInfo ? this.personalInfo.name : '';
        this.mobileNo = this.personalInfo ? this.personalInfo.mobileNo : '';
        var splitData = this.personalInfo.email.split('@')[1];
        if (this.metaData.msiteFolder == 'ourbustheme') {
          if (splitData != 'ourbus-tmp.in') {
            this.email = this.personalInfo ? this.personalInfo.email : '';
          } else {
            this.email = '';
          }
        } else {
          this.email = this.personalInfo ? this.personalInfo.email : '';
        }
        this.age = this.personalInfo ? this.personalInfo.dob ? this.dateService.getAge(this.personalInfo.dob, 'yyyy-mm-dd').toString() : '' : '';
      } else if (this.commonStorage.localGet('passengerDetails')) {
        this.personalInfo = this.commonStorage.localGet('passengerDetails').contact_detail;
        this.name = this.personalInfo ? this.personalInfo.emergency_name : '';
        this.mobileNo = this.personalInfo ? this.personalInfo.mobile_number : '';
        var splitData = this.personalInfo.email.split('@')[1];
        if (this.metaData.msiteFolder == 'ourbustheme') {
          if (splitData != 'ourbus-tmp.in') {
            this.email = this.personalInfo ? this.personalInfo.email : '';
          } else {
            this.email = '';
          }
        } else {
          this.email = this.personalInfo ? this.personalInfo.email : '';
        }
      }
      this.destinationStageDetails = this.commonStorage.localGet('destinationStageDetails');
      this.originStageDetails = this.commonStorage.localGet('originStageDetails');
      this.reservationData = this.commonStorage.localGet("reservationData");
      console.log("reservationData", this.reservationData);
      if (this.isReturn) {
        this.reservationDataReturn = this.commonStorage.localGet("reservationDataReturn");
        this.originStageDetailsReturn = this.commonStorage.localGet('originStageDetailsReturn');
        this.destinationStageDetailsReturn = this.commonStorage.localGet('destinationStageDetailsReturn');
        this.selectedSeatsToBookReturn = this.commonStorage.localGet("reservationDataReturn").selectedSeatsToBook;
      }
      this.selectedSeatsToBook = this.reservationData.selectedSeatsToBook;
      this.origin = this.commonStorage.localGet("travelOrigin");
      this.destination = this.commonStorage.localGet("travelDestination");
      this.travelDate = this.commonStorage.localGet("travelDate");
      this.phoneNumCount = this.commonStorage.localGet('metaData').phoneNumCount;
      this.AllowedCountryCodes = this.commonStorage.localGet('metaData').AllowedCountryCodes;
      if (this.commonStorage.getItem('metaData').show_countries_isd_codes_selection) {
        if (this.AllowedCountryCodes[0] == '91') {
          this.selected_Country_code = '+91';
        } else {
          this.selected_Country_code = '+' + this.AllowedCountryCodes[0];
        }
      }
      this.errors = false;
      this.isChildFare = this.commonStorage.localGet('isChildFare');
      this.createPassengerDataStructure();
      this.travelDateHeader = this.dateService.headerDate(this.travelDate.formattedDate);
      this.selectedRoute = this.commonStorage.getItem('selectedRoute');
    } catch (e) {}
    this.farebreakUpcall();
  }
  getFormatDate(dateGet) {
    const [day, month, year] = dateGet.split("/");
    const travelDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return travelDate.toLocaleDateString('en-US', {
      weekday: 'short',
      // Fri
      month: 'short',
      // Nov
      day: '2-digit' // 08
    });
  }
  createPassengerDataStructure() {
    try {
      var _this$globalData$RESE, _this$globalData, _this$globalData$RESE2, _this$globalData2;
      let contactDetails = {
        emergency_name: 'xxxx',
        mobile_number: this.personalInfo ? this.personalInfo.mobileNo : '',
        email: this.personalInfo ? this.personalInfo.email : ''
      };
      let seatDetails = [];
      if (this.commonStorage.localGet('passengerDetails')) {
        for (var j = 0; j < this.commonStorage.localGet('passengerDetails').seat_details.length; j++) {
          if (!this.commonStorage.localGet('passengerDetails').seat_details[j].is_round_trip_seat) {
            this.selectedSeatsToBook[j].name = this.commonStorage.localGet('passengerDetails').seat_details[j].name;
            this.selectedSeatsToBook[j].sex = this.commonStorage.localGet('passengerDetails').seat_details[j].sex;
            this.selectedSeatsToBook[j].age = this.commonStorage.localGet('passengerDetails').seat_details[j].age ? this.commonStorage.localGet('passengerDetails').seat_details[j].age : '';
          }
        }
      }
      console.log("this.globalData.RESERVATION_DATA.selectedSeatsToBook", this.globalData.RESERVATION_DATA.selectedSeatsToBook);
      console.log("this.onwardSeatDetails.length", this.onwardSeatDetails.length);
      let i = 0;
      // need to check the error
      if (this.onwardSeatDetails.length < ((_this$globalData$RESE = this.globalData.RESERVATION_DATA.selectedSeatsToBook) === null || _this$globalData$RESE === void 0 ? void 0 : _this$globalData$RESE.length)) {
        for (let seat of this.selectedSeatsToBook) {
          let isReserved = false;
          let gender = '';
          let sexOptional = true;
          if (this.subdomain.includes('cbus') || this.subdomain.includes('lxmi')) {
            if (seat.isMaleOrFemale == 'male') {
              isReserved = true;
              gender = 'Mr';
              sexOptional = false;
            } else if (seat.isMaleOrFemale == 'female') {
              isReserved = true;
              gender = 'Ms';
              sexOptional = false;
            } else {
              if (seat.sex == 'Ms') {
                gender = 'Ms';
              } else {
                gender = 'Mr';
              }
            }
          } else {
            gender = seat.sex ? seat.sex : '';
            sexOptional = true;
            if (seat.is_gents_seat) {
              isReserved = true;
              gender = 'Mr';
              sexOptional = false;
            } else if (seat.is_ladies_seat) {
              isReserved = true;
              gender = 'Ms';
              sexOptional = false;
            } else {
              if (seat.sex == 'Ms') {
                gender = 'Ms';
              } else {
                gender = 'Mr';
              }
            }
          }
          seatDetails.push({
            is_primary: i === 0 ? true : false,
            seat_number: seat.number,
            fare: seat.fare,
            sex: gender,
            name: seat.name ? seat.name : '',
            age: seat.age ? seat.age : '',
            is_round_trip_seat: false,
            id_card_type: "",
            id_card_number: ""
          });
          this.onwardSeatDetails.push({
            is_primary: i === 0 ? true : false,
            seat_number: seat.number,
            fare: seat.fare,
            sex: gender,
            name: seat.name ? seat.name : '',
            age: seat.age ? seat.age : '',
            sexOptional: sexOptional
          });
          console.log("onwardSeatDetails", this.onwardSeatDetails, seatDetails);
          if (this.personalInfo && i === 0) {
            this.validations({
              name: this.name,
              sex: gender,
              seat_number: seat.number,
              fare: seat.fare,
              age: seat.age ? seat.age : ''
              // age: this.age
            });
          } else {
            this.validations({
              name: seat.name ? seat.name : '',
              sex: gender,
              seat_number: seat.number,
              fare: seat.fare,
              age: seat.age ? seat.age : ''
            });
          }
          this.isReserved.push(isReserved);
          i++;
        }
      }
      let returnPassDtl = [];
      if (this.commonStorage.localGet('passengerDetails')) {
        for (var j = 0; j < this.commonStorage.localGet('passengerDetails').seat_details.length; j++) {
          if (this.commonStorage.localGet('passengerDetails').seat_details[j].is_round_trip_seat) {
            returnPassDtl.push(this.commonStorage.localGet('passengerDetails').seat_details[j]);
          }
        }
      }
      for (var k = 0; k < returnPassDtl.length; k++) {
        this.selectedSeatsToBookReturn[k].name = returnPassDtl[k].name;
        this.selectedSeatsToBookReturn[k].sex = returnPassDtl[k].sex;
        this.selectedSeatsToBookReturn[k].age = returnPassDtl[k].age ? returnPassDtl[k].age : '';
      }
      // need to check the error
      if (this.isReturn && (_this$globalData = this.globalData) !== null && _this$globalData !== void 0 && (_this$globalData = _this$globalData.DEPARTURE_DATE_RETURN) !== null && _this$globalData !== void 0 && _this$globalData.formattedDate && this.returnSeatDetails.length < ((_this$globalData$RESE2 = (_this$globalData2 = this.globalData) === null || _this$globalData2 === void 0 || (_this$globalData2 = _this$globalData2.RESERVATION_DATA_RETURN) === null || _this$globalData2 === void 0 || (_this$globalData2 = _this$globalData2.selectedSeatsToBook) === null || _this$globalData2 === void 0 ? void 0 : _this$globalData2.length) !== null && _this$globalData$RESE2 !== void 0 ? _this$globalData$RESE2 : 0)) {
        for (let seat of this.selectedSeatsToBookReturn) {
          let isReserved = false;
          let gender = '';
          let sexOptional = true;
          if (this.subdomain.includes('cbus')) {
            if (seat.isMaleOrFemale == 'male') {
              isReserved = true;
              gender = 'Mr';
              sexOptional = false;
            } else if (seat.isMaleOrFemale == 'female') {
              isReserved = true;
              gender = 'Ms';
              sexOptional = false;
            }
          } else {
            gender = seat.sex ? seat.sex : '';
            sexOptional = true;
            if (seat.is_gents_seat) {
              isReserved = true;
              gender = 'Mr';
              sexOptional = false;
            } else if (seat.is_ladies_seat) {
              isReserved = true;
              gender = 'Ms';
              sexOptional = false;
            }
          }
          seatDetails.push({
            is_primary: i === 0 ? true : false,
            seat_number: seat.number,
            fare: seat.fare,
            sex: gender,
            name: seat.name ? seat.name : '',
            age: seat.age ? seat.age : '',
            is_round_trip_seat: true,
            id_card_type: "",
            id_card_number: ""
          });
          this.returnSeatDetails.push({
            is_primary: i === 0 ? true : false,
            seat_number: seat.number,
            fare: seat.fare,
            sex: gender,
            name: seat.name ? seat.name : '',
            age: seat.age ? seat.age : '',
            sexOptional: sexOptional
          });
          this.validationsR({
            name: seat.name ? seat.name : '',
            sex: gender,
            seat_number: seat.number,
            fare: seat.fare,
            age: seat.age ? seat.age : ''
          });
          this.isReserved.push(isReserved);
          i++;
        }
      }
      let couponDetails;
      this.passengerDetails = {
        seat_details: seatDetails,
        contact_detail: contactDetails,
        coupon_details: couponDetails
        // gst_info: gstInfo
      };
      this.contactValidation();
      i++;
    } catch (e) {
      this.ex.call("PassengerDetail", "createPassengerDataStructure()", e);
    }
  }
  copyDataToReturn() {
    if (this.copyData) {
      this.copyDataToReturnMethod();
    } else {
      this.deleteDataFromReturnMethod();
    }
  }
  copyDataToReturnMethod() {
    for (let i = 0; i < this.passengerForm.length && i < this.passengerFormR.length; i++) {
      this.passengerFormR[i].controls['name'].setValue(this.passengerForm[i].controls.name.value);
      this.passengerFormR[i].controls['age'].setValue(this.passengerForm[i].controls.age.value);
      if (this.metaData.msiteFolder == "ourbustheme") {
        if (this.passengerFormR[i].controls['sex'].value !== 'Ms') {
          this.passengerFormR[i].controls['sex'].setValue(this.passengerForm[i].controls.sex.value);
        }
      } else {
        this.passengerFormR[i].controls['sex'].setValue(this.passengerForm[i].controls.sex.value);
      }
      this.passengerFormR[i].controls['id_card_type'].setValue(this.passengerForm[i].controls.id_card_type.value);
      this.passengerFormR[i].controls['id_card_number'].setValue(this.passengerForm[i].controls.id_card_number.value);
      this.passengerFormR[i].controls['passport_issued_date'].setValue(this.passengerForm[i].controls.passport_issued_date.value);
      this.passengerFormR[i].controls['passport_expiry_date'].setValue(this.passengerForm[i].controls.passport_expiry_date.value);
      this.passengerFormR[i].controls['place_of_issue'].setValue(this.passengerForm[i].controls.place_of_issue.value);
    }
  }
  deleteDataFromReturnMethod() {
    for (let i = 0; i < this.passengerForm.length && i < this.passengerFormR.length; i++) {
      this.passengerFormR[i].controls['name'].setValue("");
      if (this.metaData.msiteFolder == "ourbustheme") {
        if (this.passengerFormR[i].controls['sex'].value !== 'Ms') {
          this.passengerFormR[i].controls['sex'].setValue("");
        }
      } else {
        this.passengerFormR[i].controls['sex'].setValue("");
      }
      this.passengerFormR[i].controls['age'].setValue("");
      this.passengerFormR[i].controls['id_card_type'].setValue("");
      this.passengerFormR[i].controls['id_card_number'].setValue("");
      this.passengerFormR[i].controls['passport_issued_date'].setValue("");
      this.passengerFormR[i].controls['passport_expiry_date'].setValue("");
      this.passengerFormR[i].controls['place_of_issue'].setValue("");
    }
  }
  updatePassengerData() {
    console.log("onwardSeatDetails", this.onwardSeatDetails);
    if (this.passengerDetails.seat_details.length < 0) {
      //     this.defaultCall();
    }
    this.childFareAmtLess = 0;
    for (let i = 0; i < this.passengerForm.length; i++) {
      this.passengerDetails.seat_details[i].name = this.passengerForm[i].value.name;
      this.passengerDetails.seat_details[i].sex = this.passengerForm[i].value.sex;
      this.passengerDetails.seat_details[i].seat_number = this.passengerForm[i].value.seat_number;
      this.passengerDetails.seat_details[i].age = this.passengerForm[i].value.age + "";
      //     if (this.metaData.showCardTypes && this.metaData.idCardTypes) {
      this.passengerDetails.seat_details[i].id_card_type = this.passengerForm[i].value.id_card_type + "";
      this.passengerDetails.seat_details[i].id_card_number = this.passengerForm[i].value.id_card_number + "";
      this.passengerDetails.seat_details[i].passport_issued_date = this.passengerForm[i].value.passport_issued_date + "";
      this.passengerDetails.seat_details[i].passport_expiry_date = this.passengerForm[i].value.passport_expiry_date + "";
      this.passengerDetails.seat_details[i].place_of_issue = this.passengerForm[i].value.place_of_issue + "";
      //   }
      this.onwardSeatDetails[i].name = this.passengerForm[i].value.name;
      this.onwardSeatDetails[i].seat_number = this.passengerForm[i].value.seat_number;
      this.onwardSeatDetails[i].age = this.passengerForm[i].value.age ? this.passengerForm[i].value.age : '';
      this.onwardSeatDetails[i].sex = this.passengerForm[i].value.sex;
      if (this.isChildFare && this.passengerDetails.seat_details[i].sex.toLowerCase() == 'jr') {
        this.childFareAmtLess += this.checkJrFare(this.passengerDetails.seat_details[i].seat_number);
      }
    }
    if (this.isReturn) {
      for (let i = this.passengerForm.length; i < this.passengerForm.length + this.passengerFormR.length; i++) {
        this.passengerDetails.seat_details[i].name = this.passengerFormR[i - this.passengerForm.length].value.name;
        this.passengerDetails.seat_details[i].sex = this.passengerFormR[i - this.passengerForm.length].value.sex;
        this.passengerDetails.seat_details[i].seat_number = this.passengerFormR[i - this.passengerForm.length].value.seat_number;
        this.passengerDetails.seat_details[i].age = this.passengerFormR[i - this.passengerForm.length].value.age + "";
        this.returnSeatDetails[i - this.passengerForm.length].name = this.passengerFormR[i - this.passengerForm.length].value.name;
        this.returnSeatDetails[i - this.passengerForm.length].seat_number = this.passengerFormR[i - this.passengerForm.length].value.seat_number;
        this.returnSeatDetails[i - this.passengerForm.length].age = this.passengerFormR[i - this.passengerForm.length].value.age;
        this.returnSeatDetails[i - this.passengerForm.length].sex = this.passengerFormR[i - this.passengerForm.length].value.sex;
        if (this.isChildFare && this.passengerDetails.seat_details[i].sex.toLowerCase() == 'jr') {
          this.childFareAmtLess += this.checkJrFare(this.passengerDetails.seat_details[i].seat_number);
        }
      }
    }
    this.passengerDetails.contact_detail.email = this.contactForm.value.email;
    this.passengerDetails.contact_detail.emergency_name = this.passengerForm[0].value.name;
    this.passengerDetails.contact_detail.mobile_number = this.contactForm.value.mobile_number + "";
    this.passengerDetails.contact_detail.country_code = this.contactForm.value.country_code + "";
    this.commonStorage.localSet("onwardSeatDetails", this.onwardSeatDetails);
    this.commonStorage.localSet("returnSeatDetails", this.returnSeatDetails);
    this.commonStorage.localSet("childFareAmtLess", this.childFareAmtLess);
  }
  checkJrFare(seatNumber) {
    let seatDetails = this.commonStorage.getItem("seatDetails");
    let seat = seatDetails.find(it => {
      if (it.number == seatNumber) {
        return true;
      } else {
        return false;
      }
    });
    return +seat.child_fare;
  }
  submitPassengerDetails() {
    this.globalData.GST_ID = this.gstId;
    this.globalData.GST_NAME = this.gstName;
    this.commonStorage.localSet("gstId", this.globalData.GST_ID);
    this.commonStorage.localSet("gstName", this.globalData.GST_NAME);
    this.commonStorage.localSet('gstCityName', this.cityName);
    this.commonStorage.localSet('gstStateName', this.stateGetName);
    if (this.metaData.msiteFolder != 'ourbustheme') {
      this.commonStorage.localSet('pinCode', this.stateId);
    } else {
      this.commonStorage.localRemove('pinCode');
    }
    if (this.metaData.msiteFolder == 'ourbustheme') {
      if (this.getGstInfo.pincode == 'mandatory') {
        if (!this.stateId || this.stateId.length !== 6) {
          this.util.showToast('Please enter valid pin code');
          return;
        } else if (!this.stateGetName && !this.stateType) {
          this.util.showToast('Please enter valid pin code');
          return;
        } else if (!this.cityName && !this.cityId) {
          this.util.showToast('Please enter valid pin code');
          return;
        }
      } else {
        if (this.stateId.length > 0) {
          if (!this.stateId || this.stateId.length !== 6) {
            this.util.showToast('Please enter valid pin code');
            return;
          } else if (!this.stateGetName && !this.stateType) {
            this.util.showToast('Please enter valid pin code');
            return;
          } else if (!this.cityName && !this.cityId) {
            this.util.showToast('Please enter valid pin code');
            return;
          }
        } else {
          this.stateGetName = '';
          this.stateType = '';
          this.cityName = '';
          this.cityId = '';
        }
      }
      if (this.businessTravel == true && this.gstId.length == 15) {
        if (!this.gstvalid) {
          this.util.showToast('Please enter valid GST ID');
          return;
        } else {
          if (this.metaData.msiteFolder == 'ourbustheme') {
            this.commonStorage.localSet("gstIdOurbus", this.gstId);
            this.commonStorage.localSet("gstNameOurbus", this.gstName);
          } else {
            this.commonStorage.localRemove("gstIdOurbus");
            this.commonStorage.localRemove("gstNameOurbus");
          }
        }
      }
    }
    if (this.businessTravel == true && this.gstId.length < 15) {
      this.util.showToast('Please enter valid GST ID');
    } else if (this.businessTravel == true && this.gstName.length < 1) {
      this.util.showToast('Please enter valid Comapny Name');
    } else if (this.metaData.msiteFolder != 'ourbustheme' && this.getGstInfo.pincode == 'mandatory' && this.isServiceTaxApplicable == true && (!this.stateId || this.stateId.length !== 6)) {
      this.util.showToast('Please enter valid pin code');
    } else if (this.metaData.msiteFolder != 'ourbustheme' && this.getGstInfo.state == 'mandatory' && !this.stateGetName && !this.stateType && this.isServiceTaxApplicable == true) {
      this.util.showToast('Please enter valid state');
    } else if (this.metaData.msiteFolder != 'ourbustheme' && this.getGstInfo.city == 'mandatory' && this.isServiceTaxApplicable == true && !this.cityName && !this.cityId) {
      this.util.showToast('Please enter valid city');
    } else {
      if (this.isValid()) {
        this.commonStorage.localSet('passengerDetails', this.passengerDetails);
        const seatDetail_data = this.commonStorage.localGet('passenger_personal_data') ? this.commonStorage.localGet('passenger_personal_data') : [];
        if (this.stateId != '') {
          this.passengerDetails.contact_detail;
          this.passengerDetails.contact_detail = Object.assign(this.passengerDetails.contact_detail, {
            "pinCode": this.stateId
          });
        }
        if (seatDetail_data.length != 0) {
          if (this.passengerDetails.seat_details.length <= seatDetail_data.length) {
            for (let i = 0; i < this.passengerDetails.seat_details.length; i++) {
              seatDetail_data[i] = this.passengerDetails.seat_details[i];
              if (this.metaData.msiteFolder == 'ourbustheme') {
                if (this.passengerDetails.seat_details[i].age == '0') {
                  this.util.showToast('Please enter valid age');
                  return;
                }
              }
              if (this.metaData.msiteFolder == 'cbustheme') {
                if (this.passengerDetails.seat_details[i].age == '0') {
                  this.util.showToast('Please enter valid age');
                  return;
                }
              }
            }
            this.commonStorage.localSet('passenger_personal_contact', this.passengerDetails.contact_detail);
            this.commonStorage.localSet('passenger_personal_data', seatDetail_data);
          } else {
            this.commonStorage.localSet('passenger_personal_contact', this.passengerDetails.contact_detail);
            this.commonStorage.localSet('passenger_personal_data', this.passengerDetails.seat_details);
          }
        } else {
          this.commonStorage.localSet('passenger_personal_contact', this.passengerDetails.contact_detail);
          this.commonStorage.localSet('passenger_personal_data', this.passengerDetails.seat_details);
        }
        this.globalData.RESERVATION_DATA = this.reservationData;
        this.globalData.RESERVATION_DATA_RETURN = this.reservationDataReturn;
        this.commonStorage.localSet("selected_Country_code", this.selected_Country_code);
        if (this.isReturn) {
          let navigationExtras = {
            queryParams: {
              is_return_trip: true
            }
          };
          this.navCtrl.navigateForward('payment-details', navigationExtras);
        } else {
          this.navCtrl.navigateForward('payment-details');
        }
      } else {
        this.errors = true;
      }
    }
  }
  onchangeGstId(ev) {
    const input = ev.target;
    const value = input.value;
    let name = '';
    name = value;
    name = value.replace(/[₹()]/g, '').replace(/[^A-Za-z0-9 ]/g, '');
    if (this.gstId.length > 15) {
      this.gstId = this.gstId.substr(0, 15);
    }
    let stateId = '';
    if (this.metaData.msiteFolder != 'ourbustheme') {
      stateId = this.stateId;
    } else {
      stateId = '';
    }
    if (this.gstId.length == 15) {
      this.apiFactory.getStateByPin(stateId, this.gstId).subscribe(res => {
        if (res.code == 200) {
          this.gstvalid = true;
          if (this.metaData.msiteFolder != 'ourbustheme') {
            this.stateGetName = res.result.state;
            if (res.result.city != '') {
              this.cityName = res.result.city;
            }
            this.cityName = res.result.city;
            if (this.isServiceTaxApplicable == true) {
              this.passengerDetails.gst_info = {
                "pin_code": this.stateId,
                "state": this.stateGetName ? this.stateGetName : this.stateType,
                "city": this.cityName ? this.cityName : this.cityId
              };
            }
          }
        } else {
          // alert('kk')
          this.gstvalid = false;
          this.util.showToast(res.message);
        }
      }, err => {
        this.util.showToast(err);
      });
    }
  }
  validations(seat) {
    if (this.metaData.msiteFolder == 'ourbustheme') {
      let sexValue = seat.sex === "" ? "Mr" : seat.sex;
      this.passengerForm.push(this.formBuilder.group({
        name: [seat.name, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required],
        sex: [sexValue, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required],
        seat_number: [seat.seat_number, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required],
        age: [seat.age, this.locale.passenger_details_config['Age'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]) : null],
        id_card_type: ['', this.locale.passenger_details_config['Id Type'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required : null],
        id_card_number: [null, this.locale.passenger_details_config['Id No'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required : null],
        passport_issued_date: [''],
        passport_expiry_date: [''],
        place_of_issue: ['']
      }));
    } else {
      this.passengerForm.push(this.formBuilder.group({
        name: [seat.name, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required],
        sex: [seat.sex, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required],
        seat_number: [seat.seat_number, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required],
        age: [seat.age, this.locale.passenger_details_config['Age'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.maxLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]) : null],
        id_card_type: ['', this.locale.passenger_details_config['Id Type'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required : null],
        id_card_number: [null, this.locale.passenger_details_config['Id No'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required : null],
        passport_issued_date: [''],
        passport_expiry_date: [''],
        place_of_issue: ['']
      }));
    }
  }
  validationsR(seat) {
    if (this.metaData.msiteFolder == 'ourbustheme') {
      let sexValue = seat.sex === "" ? "Mr" : seat.sex;
      this.passengerFormR.push(this.formBuilder.group({
        name: [seat.name, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required],
        sex: [sexValue, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required],
        seat_number: [seat.seat_number, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required],
        age: [seat.age, this.locale.passenger_details_config['Age'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]) : null],
        id_card_type: ['', this.locale.passenger_details_config['Id Type'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required : null],
        id_card_number: ['', this.locale.passenger_details_config['Id No'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required : null],
        passport_issued_date: [''],
        passport_expiry_date: [''],
        place_of_issue: ['']
      }));
    } else {
      this.passengerFormR.push(this.formBuilder.group({
        name: [seat.name, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required],
        sex: [seat.sex, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required],
        seat_number: [seat.seat_number, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required],
        age: [seat.age, this.locale.passenger_details_config['Age'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.maxLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]) : null],
        id_card_type: ['', this.locale.passenger_details_config['Id Type'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required : null],
        id_card_number: ['', this.locale.passenger_details_config['Id No'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required : null],
        passport_issued_date: [''],
        passport_expiry_date: [''],
        place_of_issue: ['']
      }));
    }
  }
  idCardChange(i) {
    if (this.metaData.showCardTypes && this.passengerForm[i].value.id_card_type == 3 && this.locale.passenger_details_config['Id No'] == 'Mandatory') {
      this.passengerForm[i].controls['passport_issued_date'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]);
      this.passengerForm[i].controls['passport_issued_date'].updateValueAndValidity();
      this.passengerForm[i].controls['passport_expiry_date'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]);
      this.passengerForm[i].controls['passport_expiry_date'].updateValueAndValidity();
      this.passengerForm[i].controls['place_of_issue'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]);
      this.passengerForm[i].controls['place_of_issue'].updateValueAndValidity();
    } else {
      this.passengerForm[i].controls['passport_issued_date'].clearValidators();
      this.passengerForm[i].controls['passport_issued_date'].updateValueAndValidity();
      this.passengerForm[i].controls['passport_expiry_date'].clearValidators();
      this.passengerForm[i].controls['passport_expiry_date'].updateValueAndValidity();
      this.passengerForm[i].controls['place_of_issue'].clearValidators();
      this.passengerForm[i].controls['place_of_issue'].updateValueAndValidity();
    }
  }
  idCardChangeR(i) {
    if (this.metaData.showCardTypes && this.passengerFormR[i].value.id_card_type == 3 && this.locale.passenger_details_config['Id No'] == 'Mandatory') {
      this.passengerFormR[i].controls['passport_issued_date'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]);
      this.passengerFormR[i].controls['passport_issued_date'].updateValueAndValidity();
      this.passengerFormR[i].controls['passport_expiry_date'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]);
      this.passengerFormR[i].controls['passport_expiry_date'].updateValueAndValidity();
      this.passengerFormR[i].controls['place_of_issue'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]);
      this.passengerFormR[i].controls['place_of_issue'].updateValueAndValidity();
    } else {
      this.passengerFormR[i].controls['passport_issued_date'].clearValidators();
      this.passengerFormR[i].controls['passport_issued_date'].updateValueAndValidity();
      this.passengerFormR[i].controls['passport_expiry_date'].clearValidators();
      this.passengerFormR[i].controls['passport_expiry_date'].updateValueAndValidity();
      this.passengerFormR[i].controls['place_of_issue'].clearValidators();
      this.passengerFormR[i].controls['place_of_issue'].updateValueAndValidity();
    }
  }
  contactValidation() {
    let minPhoneCount = this.phoneNumCount === "" ? 0 : this.phoneNumCount;
    let maxPhoneCount = this.phoneNumCount === "" ? 18 : this.phoneNumCount;
    if (this.metaData.show_countries_isd_codes_selection) {
      this.contactForm = this.formBuilder.group({
        country_code: [this.selected_Country_code ? this.selected_Country_code : this.selected_Country_code, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required])],
        alt_country_code: [this.AllowedCountryCodes[1] ? this.AllowedCountryCodes[1] : this.AllowedCountryCodes[0], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required])],
        mobile_number: [this.mobileNo, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.maxLength(maxPhoneCount), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.minLength(minPhoneCount), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required])],
        email: [this.email, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_services_validator_service__WEBPACK_IMPORTED_MODULE_7__.ValidatorService.emailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required])]
      });
    } else {
      this.contactForm = this.formBuilder.group({
        country_code: [this.AllowedCountryCodes[1] ? this.AllowedCountryCodes[1] : this.AllowedCountryCodes[0], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required])],
        alt_country_code: [this.AllowedCountryCodes[1] ? this.AllowedCountryCodes[1] : this.AllowedCountryCodes[0], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required])],
        mobile_number: [this.mobileNo, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.maxLength(maxPhoneCount), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.minLength(minPhoneCount), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required])],
        email: [this.email, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_services_validator_service__WEBPACK_IMPORTED_MODULE_7__.ValidatorService.emailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required])]
      });
    }
    if (this.datafill) {
      setTimeout(() => {
        this.contactForm.controls["email"].setValue(this.fillSeatData.result.passengerOtherDetails.email);
        const phone = this.fillSeatData.result.passengerOtherDetails.phone;
        if (this.metaData.msiteFolder != 'ourbustheme') {
          this.stateId = this.fillSeatData.result.passengerOtherDetails.pinCode;
        } else {
          this.stateId = '';
        }
        if (phone.includes('-')) {
          const parts = phone.split('-');
          this.contactForm.controls['mobile_number'].setValue(parts[1]);
        } else {
          this.contactForm.controls['mobile_number'].setValue(phone);
        }
        for (let i = 0; i < this.passengerForm.length; i++) {
          this.passengerForm[i].controls['name'].setValue(this.passDetail[i].name);
          this.passengerForm[i].controls['sex'].setValue(this.passDetail[i].title);
          this.passengerForm[i].controls['age'].setValue(this.passDetail[i].age ? this.passDetail[i].age : '');
        }
      }, 1000);
    } else {
      const contact_data = this.commonStorage.localGet('passenger_personal_contact') ? this.commonStorage.localGet('passenger_personal_contact') : {};
      if (contact_data && Object.keys(contact_data).length != 0) {
        this.contactForm.controls['email'].setValue(contact_data.email);
        if (contact_data.country_code && contact_data.country_code != '') {
          this.contactForm.controls['country_code'].setValue(contact_data.country_code);
        }
        setTimeout(() => {
          if (this.metaData.msiteFolder != 'ourbustheme') {
            this.stateId = contact_data.pinCode;
          }
        }, 500);
        this.contactForm.controls['mobile_number'].setValue(contact_data.mobile_number);
      } else {
        if (this.authenticate.isLoggedIn()) {
          if (this.passengerForm.length != 0) {
            const title = this.personalInfo ? this.personalInfo.title : '';
            if (this.metaData.msiteFolder != 'ourbustheme') {
              this.passengerForm[0].controls['sex'].setValue(title == 'Mr' ? 'Mr' : title == '' ? '' : 'Ms');
            }
            this.passengerForm[0].controls['age'].setValue(this.personalInfo ? this.personalInfo.age : '');
          }
        }
      }
      const data = this.commonStorage.localGet('passenger_personal_data') ? this.commonStorage.localGet('passenger_personal_data') : [];
      if (data.length != 0) {
        for (let i = 0; i < this.passengerForm.length; i++) {
          this.passengerForm[i].controls['name'].setValue(data[i].name);
          this.passengerForm[i].controls['sex'].setValue(data[i].sex);
          this.passengerForm[i].controls['age'].setValue(data[i].age ? data[i].age : '');
        }
      }
    }
  }
  isValid() {
    for (let valid of this.passengerForm) {
      if (valid.value.name == '') {
        this.util.showToast("Enter name in seat number " + valid.value.seat_number);
        return false;
      }
      if (valid.value.sex == '') {
        this.util.showToast("Please select gender in seat number " + valid.value.seat_number);
        return false;
      }
      if (valid.controls.age.status == "INVALID") {
        this.util.showToast("Enter valid age in seat number " + valid.value.seat_number);
        return false;
      }
      if (valid.value.sex.toLowerCase() == 'jr' && valid.value.age > 11) {
        this.util.showToast("Child age should be less or equal to 11 years in seat number " + valid.value.seat_number);
        this.showError("Child age should be less or equal to 11 years in seat number " + valid.value.seat_number);
        return false;
      }
      if (this.locale.passenger_details_config['Id Type'] == 'Mandatory') {
        if (valid.controls.id_card_type.status == "INVALID") {
          this.util.showToast("Select card type for seat number " + valid.value.seat_number);
          return false;
        }
      }
      if (this.locale.passenger_details_config['Id No'] == 'Mandatory') {
        if (valid.controls.id_card_number.status == "INVALID") {
          this.util.showToast("Enter Id Card no. for seat number " + valid.value.seat_number);
          return false;
        }
        if (valid.value.id_card_type == 3 && this.metaData.showCardTypes) {
          if (!valid.value.passport_issued_date) {
            this.util.showToast("Id Card issue date missing for seat number " + valid.value.seat_number);
            return false;
          }
          if (!valid.value.passport_expiry_date && this.metaData.showCardTypes) {
            this.util.showToast("Id Card expiry date missing for seat number " + valid.value.seat_number);
            return false;
          }
          if (!valid.value.place_of_issue && this.metaData.showCardTypes) {
            this.util.showToast("Id Card Place of issue missing for seat number " + valid.value.seat_number);
            return false;
          }
        }
      }
    }
    if (this.isReturn) {
      for (let valid of this.passengerFormR) {
        if (valid.value.name == '') {
          this.util.showToast("Enter name in seat number " + valid.value.seat_number);
          return false;
        }
        if (valid.value.sex == '') {
          this.util.showToast("Please select gender in seat number " + valid.value.seat_number);
          return false;
        }
        if (valid.controls.age.status == "INVALID") {
          this.util.showToast("Enter valid age in seat number " + valid.value.seat_number);
          return false;
        }
        if (valid.value.sex.toLowerCase() == 'jr' && valid.value.age > 11) {
          this.util.showToast("Child age should be less or equal to 11 years in seat number " + valid.value.seat_number);
          this.showError("Child age should be less or equal to 11 years in seat number " + valid.value.seat_number);
          return false;
        }
        if (this.locale.passenger_details_config['Id Type'] == 'Mandatory') {
          if (valid.controls.id_card_type.status == "INVALID") {
            this.util.showToast("Select card type for seat number " + valid.value.seat_number);
            return false;
          }
        }
        if (this.locale.passenger_details_config['Id No'] == 'Mandatory') {
          if (valid.controls.id_card_number.status == "INVALID") {
            this.util.showToast("Enter Id Card no. for seat number " + valid.value.seat_number);
            return false;
          }
          if (valid.value.id_card_type == 3 && this.metaData.showCardTypes) {
            if (!valid.value.passport_issued_date) {
              this.util.showToast("Id Card issue date missing for seat number " + valid.value.seat_number);
              return false;
            }
            if (!valid.value.passport_expiry_date && this.metaData.showCardTypes) {
              this.util.showToast("Id Card expiry date missing for seat number " + valid.value.seat_number);
              return false;
            }
            if (!valid.value.place_of_issue && this.metaData.showCardTypes) {
              this.util.showToast("Id Card Place of issue missing for seat number " + valid.value.seat_number);
              return false;
            }
          }
        }
      }
    }
    let isnum = /^[0-9]$/.test(this.contactForm.controls['mobile_number'].value);
    if (this.contactForm.status == "INVALID") {
      if (this.contactForm.controls['mobile_number'].invalid) {
        this.showError("Invalid Mobile number");
        this.util.showToast("Invalid Mobile number");
      } else if (this.contactForm.controls['email'].invalid) {
        this.showError("Invalid Email");
        this.util.showToast("Invalid Email");
      } else {
        this.showError("Some Field(s) are missing in Contact details");
        this.util.showToast("Some Field(s) are missing in Contact details");
      }
      let elem = document.querySelector('ion-input.ng-invalid input');
      if (elem) {
        elem.focus();
      }
      return false;
    }
    this.updatePassengerData();
    return true;
  }
  onlyDigits(s) {
    for (let i = s.length - 1; i >= 0; i--) {
      const d = s.charCodeAt(i);
      if (d < 48 || d > 57) return false;
    }
    return true;
  }
  validations1(seat) {
    this.passengerForm.push(this.formBuilder.group({
      name: [seat.name, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required],
      sex: [seat.sex, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required],
      seat_number: [seat.seat_number, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required],
      age: [seat.age, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.maxLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required])],
      id_card_type: [0],
      id_card_number: [''],
      passport_issued_date: [''],
      passport_expiry_date: [''],
      place_of_issue: ['']
    }));
  }
  contactValidation1() {
    if (this.metaData.show_countries_isd_codes_selection) {
      this.contactForm = this.formBuilder.group({
        country_code: [this.selected_Country_code, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required])],
        alt_country_code: [this.AllowedCountryCodes[0], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required])],
        mobile_number: [this.mobileNo, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.maxLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required])],
        email: [this.email, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_services_validator_service__WEBPACK_IMPORTED_MODULE_7__.ValidatorService.emailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required])],
        alternate_email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_services_validator_service__WEBPACK_IMPORTED_MODULE_7__.ValidatorService.emailValidator, this.locale && this.locale.passenger_details_config && this.locale.passenger_details_config["Alternate Email"] == "Mandatory" ? _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required : null])]
      });
    } else {
      this.contactForm = this.formBuilder.group({
        country_code: [this.AllowedCountryCodes[0], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required])],
        alt_country_code: [this.AllowedCountryCodes[0], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required])],
        mobile_number: [this.mobileNo, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.maxLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required])],
        email: [this.email, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_services_validator_service__WEBPACK_IMPORTED_MODULE_7__.ValidatorService.emailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required])],
        alternate_email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_services_validator_service__WEBPACK_IMPORTED_MODULE_7__.ValidatorService.emailValidator, this.locale && this.locale.passenger_details_config && this.locale.passenger_details_config["Alternate Email"] == "Mandatory" ? _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required : null])]
      });
    }
  }
  showError(msg) {
    this.errors = true;
    this.showFormError = true;
    this.formErrorMessage = msg;
  }
  onInputChange(ev, i, type) {
    const input = ev.target;
    let value = input.value;
    let name = '';
    name = value;
    name = name.replace(/[^A-Za-z\s]/g, '');
    if (type === 1) {
      this.passengerForm[i].controls['name'].setValue(name);
    } else {
      this.passengerFormR[i].controls['name'].setValue(name);
    }
    this.showFormError = false;
    this.formErrorMessage = null;
  }
  onPhoneChange(ev) {
    this.showFormError = false;
    this.formErrorMessage = null;
    const input = ev.target;
    let value = input.value;
    value = value.replace(/[^0-9]/g, '');
    if (value.length > 10) {
      value = value.substring(0, 10);
    }
    this.contactForm.controls['mobile_number'].setValue(value);
    let mob = value;
    if (this.contactForm.value.mobile_number) {
      mob = this.contactForm.value.mobile_number.toString();
    }
    let minPhoneCount = this.phoneNumCount === "" ? 0 : this.phoneNumCount;
    let maxPhoneCount = this.phoneNumCount === "" ? 18 : this.phoneNumCount;
    if (mob.length > this.phoneNumCount) {
      this.contactForm.controls['mobile_number'].setValue(mob.substr(0, maxPhoneCount));
    }
    const trimmedValue = parseInt(value, 10).toString();
    if (trimmedValue == '0') {
      input.value = '';
      this.contactForm.controls['mobile_number'].setValue(input.value);
      return;
    }
  }
  getPassengerDetals() {
    this.commonStorage.localSet('passengerGstInfo', null);
    let mob = this.contactForm.value.mobile_number.toString();
    this.apiFactory.getPassengerDetails(mob).subscribe(res => {
      if (res.code == 200) {
        this.passengerForm[0].controls.sex.setValue(res.passenger_title);
        this.passengerForm[0].controls.name.setValue(res.passenger_name);
        this.passengerForm[0].controls.age.setValue(res.passenger_age);
        this.contactForm.controls['email'].setValue(res.email);
        if (res.cust_comp_gst_code) {
          this.commonStorage.localSet('passengerGstInfo', res);
        }
      }
    }, err => {});
  }
  onAgeChange(ev, i, type) {
    if (this.metaData.msiteFolder == 'ourbustheme') {
      this.showFormError = false;
      this.formErrorMessage = null;
      const input = ev.target;
      let value = input.value;
      value = value.replace(/[^0-9]/g, '');
      const trimmedValue = parseInt(value, 10).toString();
      if (trimmedValue == '0') {
        input.value = '';
        if (type === 1) {
          this.passengerForm[i].controls['age'].setValue(input.value);
        } else {
          this.passengerFormR[i].controls['age'].setValue(input.value);
        }
        return;
      }
      if (value.length > 3) {
        value = value.substring(0, 3);
      }
      if (type === 1) {
        this.passengerForm[i].controls['age'].setValue(value);
      } else {
        this.passengerFormR[i].controls['age'].setValue(value);
      }
      let age = value;
      // let age: string = '';
      if (type === 1) {
        age = this.passengerForm[i].value.age != null ? this.passengerForm[i].value.age.toString() : '';
      } else {
        age = this.passengerFormR[i].value.age != null ? this.passengerFormR[i].value.age.toString() : '';
      }
      const ageValue = parseInt(age, 10);
      if (ageValue > 150) {
        if (type == 1) {
          this.passengerForm[i].controls['age'].setValue(150);
        } else {
          this.passengerFormR[i].controls['age'].setValue(150);
        }
      }
    } else {
      this.showFormError = false;
      this.formErrorMessage = null;
      let age = '';
      if (type == 1) {
        age = this.passengerForm[i].value.age != null ? this.passengerForm[i].value.age.toString() : '';
      } else {
        age = this.passengerFormR[i].value.age != null ? this.passengerFormR[i].value.age.toString() : '';
      }
      age = age.replace(/[^0-9]/g, '');
      this.passengerForm[i].controls['age'].setValue(parseInt(age));
      if (age.length > 2) {
        if (type == 1) {
          this.passengerForm[i].controls['age'].setValue(age.slice(0, 2));
        } else {
          this.passengerFormR[i].controls['age'].setValue(age.slice(0, 2));
        }
      }
    }
  }
  selectPassportDate(type, date, i) {
    var _this2 = this;
    return (0,_Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let dt;
      if (date) {
        dt = _this2.dateService.getDateObjFromDateStr(date);
      } else {
        dt = _this2.dateService.getToday();
      }
      let modal = yield _this2.modalController.create({
        component: _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_2__.CalendarModalPage,
        componentProps: {
          departureDate: dt,
          showPastDate: type == 1 ? true : false,
          title: type == 1 ? "Select Issue Date" : "Select Expiry Date",
          deactivateFutureDate: type == 1 ? true : false
          // type: type
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        let dateStr = data.formattedDate;
        if (type == 1) {
          _this2.passengerForm[i].controls.passport_issued_date.setValue(dateStr);
        } else {
          _this2.passengerForm[i].controls.passport_expiry_date.setValue(dateStr);
        }
      }
      ;
    })();
  }
  selectPassportDateR(type, date, i) {
    var _this3 = this;
    return (0,_Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let dt;
      if (date) {
        dt = _this3.dateService.getDateObjFromDateStr(date);
      } else {
        dt = _this3.dateService.getToday();
      }
      let modal = yield _this3.modalController.create({
        component: _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_2__.CalendarModalPage,
        componentProps: {
          departureDate: dt,
          showPastDate: type == 1 ? true : false,
          title: type == 1 ? "Select Issue Date" : "Select Expiry Date",
          deactivateFutureDate: type == 1 ? true : false,
          type: type
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        let dateStr = data.formattedDate;
        if (type == 1) {
          _this3.passengerFormR[i].controls.passport_issued_date.setValue(dateStr);
        } else {
          _this3.passengerFormR[i].controls.passport_expiry_date.setValue(dateStr);
        }
      }
    })();
  }
  resetForm() {
    for (let i = 0; i < this.passengerForm.length; i++) {
      this.passengerForm[i].controls['name'].setValue("");
      this.passengerForm[i].controls['sex'].setValue("");
      this.passengerForm[i].controls['age'].setValue("");
      this.passengerForm[i].controls['id_card_type'].setValue("");
      this.passengerForm[i].controls['id_card_number'].setValue("");
      this.passengerForm[i].controls['passport_issued_date'].setValue("");
      this.passengerForm[i].controls['passport_expiry_date'].setValue("");
      this.passengerForm[i].controls['place_of_issue'].setValue("");
    }
  }
  addExistingPass() {
    var _this4 = this;
    return (0,_Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.resetForm();
      const modal = yield _this4.modalController.create({
        component: _add_existing_passenger_add_existing_passenger_component__WEBPACK_IMPORTED_MODULE_1__.AddExistingPassengerComponent,
        componentProps: {
          travellerLength: _this4.onwardSeatDetails.length,
          passengerList: _this4.selectedPassengerList
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data != undefined) {
        _this4.selectedPassengerList = data;
        for (var i = 0; i < _this4.selectedPassengerList.length; i++) {
          if (_this4.selectedPassengerList[i].age) _this4.passengerForm[i].controls['age'].setValue(_this4.selectedPassengerList[i].age.substr(0, 2));
          if (_this4.selectedPassengerList[i].name) _this4.passengerForm[i].controls['name'].setValue(_this4.selectedPassengerList[i].name);
          if (_this4.selectedPassengerList[i].title) _this4.passengerForm[i].controls['sex'].setValue(_this4.selectedPassengerList[i].title);
        }
      }
    })();
  }
  snackPreferences() {
    var _this5 = this;
    return (0,_Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let modal = yield _this5.modalController.create({
        component: _snack_preference_snack_preference_page__WEBPACK_IMPORTED_MODULE_3__.SnackPreferencePage,
        componentProps: {
          returnResId: _this5.isReturn ? _this5.commonStorage.getItem("returnResId") : null,
          onwardResId: _this5.commonStorage.getItem("onwardResId"),
          isReturn: _this5.isReturn
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        _this5.snack = data;
        _this5.commonStorage.localSet('snack_details', _this5.snack);
        _this5.submitPassengerDetails();
      }
    })();
  }
  payAmount(amount) {
    const safeAmount = amount !== null && amount !== void 0 ? amount : 0;
    return safeAmount.toFixed(2);
  }
  commaSeparate(data) {
    if (data) {
      let city = data.split(',');
      return city[city.length - 1];
    } else {
      return '';
    }
  }
  onChangeWakeupCall() {
    this.commonStorage.localSet('wakeUpCall', this.wakeUpCall);
  }
  gstState() {
    this.apiFactory.gstState().subscribe(res => {
      if (res.code === 200) {
        this.state = res.states.map(state => ({
          ...state,
          name: state.name.toUpperCase()
        }));
      } else {
        this.util.showToast(res.message);
      }
    }, err => {});
  }
  onchangeStateId(ev) {
    if (this.stateId.length > 6) {
      this.stateId = this.stateId.substr(0, 6);
    }
    if (this.stateId.length < 6) {
      this.stateGetName = '';
      this.stateType = '';
      this.cityName = '';
      this.cityId = '';
    }
    if (this.stateId.length == 6) {
      let gst = '';
      if (this.metaData.msiteFolder != 'ourbustheme') {
        gst = this.gstId;
      } else {
        gst = '';
      }
      this.apiFactory.getStateByPin(this.stateId, gst).subscribe(res => {
        if (res.code == 200) {
          if (res.result.city != '') {
            this.cityName = res.result.city;
          }
          this.cityId = res.result.city;
          this.stateType = res.result.state;
          if (res.result.state) {
            this.isEditable = false;
          } else {
            this.isEditable = true;
          }
          if (this.isServiceTaxApplicable == true) {
            this.passengerDetails.gst_info = {
              "pin_code": this.stateId,
              "state": this.stateGetName ? this.stateGetName : this.stateType,
              "city": this.cityName ? this.cityName : this.cityId
            };
          }
        } else {
          this.stateGetName = '';
          this.stateType = '';
          this.cityName = '';
          this.cityId = '';
          this.util.showToast(res.message);
        }
      }, err => {});
    }
    if (this.stateId.length < 6) {
      this.isEditable = true;
      this.isState = true;
    }
  }
  onchangeCityId(ev) {
    if (this.cityId == '') {
      this.cityName = '';
    } else {
      if (this.isServiceTaxApplicable == true) {
        this.passengerDetails.gst_info = {
          "pin_code": this.stateId,
          "state": this.stateGetName ? this.stateGetName : this.stateType,
          "city": this.cityName ? this.cityName : this.cityId
        };
      }
    }
  }
  onchangeId(ev) {
    if (this.isServiceTaxApplicable == true) {
      this.passengerDetails.gst_info = {
        "pin_code": this.stateId,
        "state": this.stateGetName ? this.stateGetName : this.stateType,
        "city": this.cityName ? this.cityName : this.cityId
      };
    }
  }
  onChangeWhatsappSwitch() {
    this.commonStorage.localSet('isWPSwitchOn', this.isWPSwitchOn);
  }
  callFarebreakup() {
    var _this6 = this;
    return (0,_Users_ntipl_Documents_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this6.modalController.create({
        component: _price_breakup_price_breakup_component__WEBPACK_IMPORTED_MODULE_5__.PriceBreakupComponent,
        componentProps: {
          filData: _this6.globalData,
          isReturn: _this6.isReturn,
          idProof: false,
          phoneBooking: false,
          payFromWallet: false,
          checkCancelProtect: true,
          idProofCnt: 0,
          appliedOfferCoupon: '',
          promoCoupon: '',
          appliedcoupon1: false,
          appliedcoupon2: false,
          appliedCouponname: '',
          smartMilesDiscount: 0,
          smartMileCoupon: '',
          pnrDiscountAplied: false,
          quotePnrForm: {},
          privCardNumber: '',
          onwardSeatDetails: _this6.onwardSeatDetails,
          returnSeatDetails: _this6.returnSeatDetails,
          isFromCoachLayout: false
        },
        cssClass: '',
        breakpoints: [0, 0.3, 0.5, 0.8],
        initialBreakpoint: 0.3
      });
      yield modal.present();
    })();
  }
  farebreakUpcall() {
    var _this$commonStorage$g;
    let pathForBooking = '';
    pathForBooking = "res_id=" + this.globalData.RESERVATION_DATA.reserveId;
    if (this.util.isWebApp()) {
      pathForBooking += "&native_app_type=6";
    } else {
      if (this.util.isIos()) {
        pathForBooking += "&native_app_type=9";
      } else {
        pathForBooking += "&native_app_type=10";
      }
    }
    pathForBooking += "&origin=" + this.globalData.SEARCH_DATA.originCity.id;
    pathForBooking += "&destination=" + this.globalData.SEARCH_DATA.destCity.id;
    pathForBooking += "&boarding_at=" + (this.reservationData.boardingStage ? this.reservationData.boardingStage.id : '');
    pathForBooking += "&drop_off=" + (this.reservationData.droppingStage ? this.reservationData.droppingStage.id : '');
    pathForBooking += "&no_of_seats=" + this.onwardSeatDetails.length;
    pathForBooking += "&is_mobile_app=true";
    if (this.isReturn) {
      pathForBooking += "&is_round_trip=true";
      pathForBooking += "&return_res_id=" + this.reservationDataReturn.reserveId;
    } else {
      pathForBooking += "&is_round_trip=false";
    }
    if (this.isBima) {
      pathForBooking += "&is_bima=true";
    }
    if (this.metaData.showCancelProtect) {
      pathForBooking += "&is_cancel_protect=" + true;
    }
    let seatNumbers = [];
    for (let s of this.onwardSeatDetails) {
      seatNumbers.push(s.seat_number);
    }
    let seatNumbersReturn = [];
    for (let s of this.returnSeatDetails) {
      seatNumbersReturn.push(s.seat_number);
    }
    let promoCoupon;
    promoCoupon = '';
    let data = {
      "seat_numbers": seatNumbers,
      "no_of_seats": this.onwardSeatDetails.length,
      "return_seat_numbers": seatNumbersReturn,
      "use_smart_miles": false,
      "passenger_titles": {},
      "boarding_at": this.reservationData.boardingStage.id,
      "drop_off": this.reservationData.droppingStage.id,
      "return_boarding_at": this.isReturn ? this.reservationDataReturn.boardingStage.id : '',
      "return_dropoff": this.isReturn ? this.reservationDataReturn.droppingStage ? this.reservationDataReturn.droppingStage.id : '' : '',
      "offer_coupon": '',
      "promo_coupon": promoCoupon,
      "previous_pnr_details": {},
      "coupon_details": this.passengerDetails && this.passengerDetails.coupon_details ? this.passengerDetails.coupon_details : [],
      // "use_e_discount": this.commonStorage.getItem('deals').e_ticket_discount ? true : false,
      "use_e_discount": ((_this$commonStorage$g = this.commonStorage.getItem('deals')) === null || _this$commonStorage$g === void 0 || (_this$commonStorage$g = _this$commonStorage$g.e_ticket_discount) === null || _this$commonStorage$g === void 0 ? void 0 : _this$commonStorage$g.length) > 0 ? true : false,
      "priv_card_number": '',
      "is_cancel_protect": true
    };
    this.apiFactory.fareBreakUp(data, pathForBooking).subscribe(res => {
      this.fareBreakup_hash = res.fare_break_up_hash;
    }, err => {
      //this.loaderService.hideLoadingDefault();
    });
  }
  getObjectKeys(obj) {
    return obj ? Object.keys(obj) : [];
  }
  formatDuration(duration) {
    return duration.replace(":", "h ") + "m";
  }
}
_PassengerDetailsPage = PassengerDetailsPage;
_PassengerDetailsPage.ɵfac = function PassengerDetailsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PassengerDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_8__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_9__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_19__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_22__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_22__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_10__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_11__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_12__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_13__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_exception__WEBPACK_IMPORTED_MODULE_14__.ExceptionProvider), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_15__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_16__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_22__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_17__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_18__.FirebaseAnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormBuilder));
};
_PassengerDetailsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
  type: _PassengerDetailsPage,
  selectors: [["app-passenger-details"]],
  standalone: false,
  decls: 4,
  vars: 4,
  consts: [[4, "ngIf"], [1, "ion-no-border", "theme1"], ["mode", "md", 1, "themeone-bg-cl", 2, "--border-width", "0px"], [1, "themeone-head", 2, "margin-right", "40px"], ["slot", "start"], [2, "color", "#333333", 3, "click"], [1, "theme1-bg-content", "theme1"], ["novalidate", "", 2, "margin-bottom", "75px"], [1, "cbus_card-1", 2, "border-bottom", "5px solid #EFEFEF", 3, "formGroup"], [1, "themeone-hd-txt-2"], [1, "themeone-ion-item", 2, "--padding-start", "0px", "border-bottom", "none", "margin-right", "-2.2%", "margin-top", "12px"], [2, "width", "100%"], ["size", "2"], ["color", "red", "formControlName", "country_code", 2, "border-bottom", "1px solid #F1F2F4", "--padding-start", "0px", "padding-right", "26px", "width", "70px", "max-width", "95%", "height", "100%"], [3, "value", 4, "ngFor", "ngForOf"], ["size", "10", 2, "padding-right", "0px"], ["position", "floating", 2, "color", "#ADADAD"], ["formControlName", "mobile_number", "inputmode", "numeric", "type", "tel", 2, "margin-left", "5px", "border-bottom", "1px solid #F1F2F4", 3, "keyup"], [1, "themeone-ion-item"], ["formControlName", "email", "type", "email"], [1, "themeone-check-item", 2, "display", "none"], [1, "themeone-checkbox"], [1, "themeone-chklabel", 2, "font-size", "14px", "color", "#191966"], ["style", "padding-top:16px;", 4, "ngIf"], ["class", "cbus_card-1", "style", "    border-bottom: 5px solid #EFEFEF;", 4, "ngIf"], ["class", "cbus_card-1", "style", "    border-bottom: 5px solid #EFEFEF;", 4, "ngFor", "ngForOf"], ["class", "cbus_card-1", "style", "margin:0px;border-bottom: 5px solid #EFEFEF;", 3, "ngClass", 4, "ngIf"], ["ion-button", "", 1, "themeone-bottom"], [2, "padding", "16px 19px", "width", "-webkit-fill-available", "width", "-moz-available"], ["size", "7.5"], [1, "themeone-totalvalue"], [2, "margin-top", "4px"], [1, "themeone-viewbreakup", 2, "font-weight", "600", 3, "click"], ["class", "themeone-viewbreakup", "style", "color: #FFFFFF;", 4, "ngIf"], ["size", "4.5", 2, "text-align", "end", 3, "click"], [1, "themeone-select-pickup-btn", 2, "margin", "auto", "font-weight", "600", "border-radius", "5px", "background", "#FFBD16", "--background-activated", "#FFBD16"], ["class", "whole center", 4, "ngIf"], [3, "value"], [2, "padding-top", "16px"], ["size", "1.5", 2, "padding", "5px 0px 5px 0px"], ["src", "./assets/icon/theme1_wpicon.svg", "alt", "", 1, "img-icn"], ["size", "8", 2, "padding-left", "0px", "font-size", "14px", "color", "#333333", "font-weight", "bold"], ["size", "2.5", 1, "themeone-cbus", 2, "align-self", "center"], ["checked", "true", 1, "themeonetoggle", 2, "float", "right", 3, "ionChange", "ngModelChange", "ngModelOptions", "ngModel"], [1, "cbus_card-1", 2, "border-bottom", "5px solid #EFEFEF"], ["size", "10", 1, "Contact-details", "center-vr", 2, "margin-top", "10px"], ["color", "red", 3, "ionChange", "ngModelChange", "ngModelOptions", "ngModel"], [3, "formGroup"], ["class", "Contact-details", "style", "padding-bottom: 10px;", 4, "ngIf"], [1, "themeone-passenger-txt"], [1, "cbus_pos", 2, "display", "inline-flex"], ["src", "./assets/icon/cbuspassSeat.svg", 2, "height", "22px", "width", "20px"], [1, "themeone-seatcolor"], ["style", "     margin-left: 15px;height: 22px;\n              width: 20px;", "src", "./assets/icon/passFemale.svg", 4, "ngIf"], ["style", "     margin-left: 15px;height: 22px;\n              width: 20px;", "src", "./assets/icon/passMale.svg", 4, "ngIf"], [2, "padding", "0px", "padding-bottom", "10px"], ["formControlName", "name", "type", "text", 3, "keyup"], ["style", "margin-top: -10px;", 4, "ngIf"], [2, "margin-top", "-10px"], ["col-12", "", "style", "padding: 0px;", 4, "ngIf"], [1, "Contact-details", 2, "padding-bottom", "10px"], ["src", "./assets/icon/passFemale.svg", 2, "margin-left", "15px", "height", "22px", "width", "20px"], ["src", "./assets/icon/passMale.svg", 2, "margin-left", "15px", "height", "22px", "width", "20px"], ["formControlName", "age", "type", "number", "inputmode", "numeric", "maxlength", "2", "pattern", "[0-9]*", 3, "keyup"], ["col-12", "", 2, "padding", "0px"], [1, "txt-lbl"], ["color", "red", "formControlName", "id_card_type", "placeholder", "Select Card"], ["ngFor", "", 3, "ngForOf"], ["placeholder", "Card Number", "formControlName", "id_card_number", "type", "text"], ["col-6", "", 2, "padding", "0px", "padding-right", "5px"], ["placeholder", "Issue Date", "formControlName", "passport_issued_date", "type", "text", 3, "click", "readonly"], ["col-6", "", 2, "padding", "0px", "padding-left", "5px"], ["type", "text", "formControlName", "passport_expiry_date", "placeholder", "Expiry Date", 2, "height", "35px", "width", "100%", 3, "click", "readonly"], [2, "padding", "0px"], ["type", "text", "required", "", "formControlName", "place_of_issue", "placeholder", "Place of issue", 2, "height", "35px", "width", "100%"], ["lines", "none", 2, "--padding-start", "0px"], ["slot", "start", "name", "coupons", 1, "themeone-checkbox", 3, "ngModelChange", "ionChange", "ngModel"], ["style", "    border-bottom: 5px solid #EFEFEF;", "class", "cbus_card-1", 4, "ngFor", "ngForOf"], ["style", "     margin-left: 15px;height: 22px;\n                width: 20px;", "src", "./assets/icon/passFemale.svg", 4, "ngIf"], ["style", "     margin-left: 15px;height: 22px;\n                width: 20px;", "src", "./assets/icon/passMale.svg", 4, "ngIf"], ["position", "floating"], ["style", "margin-top: -20px;", 4, "ngIf"], [2, "margin-top", "-20px"], ["placeholder", "Card No.", "formControlName", "id_card_number", "type", "text"], [1, "cbus_card-1", 2, "margin", "0px", "border-bottom", "5px solid #EFEFEF", 3, "ngClass"], [1, "gstDiv"], [2, "font-size", "14px", "color", "#333333", "font-weight", "bold"], ["name", "information-circle-outline", 2, "font-size", "20px", "margin-left", "5px", 3, "click"], ["placeholder", "Pin Code", "inputmode", "numeric", "type", "tel", "maxlength", "6", 3, "ionInput", "ngModelChange", "ngModel", "ngModelOptions"], ["placeholder", "State", "color", "red", 3, "ionChange", "ngModelChange", "value", "ngModel", "ngModelOptions"], ["name", "caret-down-outline", "slot", "end"], ["placeholder", "City", "type", "text", 3, "keyup", "ngModelChange", "value", "ngModel", "ngModelOptions"], [1, "themeone-check-item"], ["slot", "start", 1, "themeone-checkbox", 3, "ionChange", "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "GST No.", 3, "keyup", "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "Registered Name", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "themeone-hd-txt-2", 2, "margin-top", "15px"], [1, "themeone-viewbreakup", 2, "color", "#FFFFFF"], [1, "whole", "center"], [1, "legend-box", 2, "position", "absolute", "bottom", "0", "width", "100% !important"], ["size", "6"], [2, "margin-top", "0px"], [2, "text-align", "end", "color", "#191966", "margin-top", "0px", 3, "click"], [1, "gstMsg"], ["mode", "md", 1, "bg-cl"], [3, "click"], [1, "head"], [1, "bg-content"], [1, "card-1", 3, "formGroup"], [1, "Contact-details"], [1, "hd-txt-2"], ["formControlName", "email", "placeholder", "Enter email address", "type", "email"], [1, "txt-input", 2, "margin-left", "20px", "padding-bottom", "10px"], ["size", "2.8", 2, "border-bottom", "1px solid #a2a2a2", "padding-left", "0px"], ["class", "txt-input", "formControlName", "country_code", "placeholder", "Code", 3, "value", "click", 4, "ngIf"], ["color", "red", "interface", "popover", "formControlName", "country_code", 4, "ngIf"], ["size", "9", "offset", "0.2", 2, "border-bottom", "1px solid #a2a2a2"], ["formControlName", "mobile_number", "placeholder", "Enter mobile number", "inputmode", "numeric", "type", "tel", 1, "txt-input", 3, "keyup"], ["style", "font-size: 13px;\n      margin: 10px 0px 10px 22px;\n      color: var(--primary);", 4, "ngIf"], ["style", "width: 100%;font-size: 0px; opacity: 0.3;background: #a2a2a2;", 4, "ngIf"], ["class", "card-1", "style", "margin: 16px 0;", 4, "ngIf"], ["class", "card-1 mr-tp-16", "style", "margin-bottom: -32px;", 4, "ngIf"], ["class", "card-1 mr-tp-16", 4, "ngFor", "ngForOf"], ["class", "card-1 mr-tp-16 mr-bt-16", 4, "ngIf"], ["class", "card-1  mr-bt-16", 3, "ngClass", 4, "ngIf"], ["ion-button", "", 1, "bottom"], [1, "seats"], [1, "seat-lbl"], ["class", "seat-val", 4, "ngIf"], [1, "pay", "center", 3, "click"], ["formControlName", "country_code", "placeholder", "Code", 1, "txt-input", 3, "click", "value"], ["color", "red", "interface", "popover", "formControlName", "country_code"], [2, "font-size", "13px", "margin", "10px 0px 10px 22px", "color", "var(--primary)"], [2, "width", "100%", "font-size", "0px", "opacity", "0.3", "background", "#a2a2a2"], ["size-sm", ""], ["src", "./assets/icon/whatsapp.svg", "alt", "", 1, "img-icn"], ["size", "8"], ["color", "red", "checked", "true", 3, "ionChange", "ngModelChange", "ngModelOptions", "ngModel"], [1, "card-1", 2, "margin", "16px 0"], [1, "card-1", "mr-tp-16", 2, "margin-bottom", "-32px"], [1, "pos", "addexisting", 3, "click"], [1, "card-1", "mr-tp-16"], ["class", "Contact-details", 4, "ngIf"], [1, "pos"], [1, "seatscolor"], [2, "text-align", "end"], ["label", "Name", "labelPlacement", "floating", "placeholder", "Enter Name", "formControlName", "name", "type", "text", 3, "keyup"], ["formControlName", "sex"], ["lines", "none", 2, "margin-left", "-10px"], ["lines", "none", 2, "margin-left", "-25px"], ["mode", "md", "item-left", "", "value", "Mr", 3, "disabled"], [2, "padding-left", "10px", 3, "ngClass"], ["mode", "md", "item-left", "", "value", "Ms", 3, "disabled"], ["col-12", "", 4, "ngIf"], ["style", "color: red;\n                font-size: 10px;\n                font-weight: 700;\n                text-align: center;", 4, "ngIf"], ["label", "Age", "labelPlacement", "floating", "formControlName", "age", "placeholder", "Age", "type", "number", "inputmode", "numeric", "maxlength", "2", "pattern", "[0-9]*", 3, "keyup"], ["col-12", ""], ["mode", "ios"], ["color", "red", "interface", "popover", "formControlName", "id_card_type", "placeholder", "Select Card"], ["label", "ID card No.", "labelPlacement", "floating", "formControlName", "id_card_number", "placeholder", "Card No.", "type", "text"], ["col-4", ""], ["label", "Issue Date", "labelPlacement", "floating", "formControlName", "passport_issued_date", "placeholder", "Issue Date", "type", "text", 3, "click", "readonly"], ["label", "Expiry Date", "labelPlacement", "floating", "type", "text", "formControlName", "passport_expiry_date", "placeholder", "Expiry Date", 2, "height", "35px", "width", "100%", 3, "click", "readonly"], ["label", "Place of issue", "labelPlacement", "floating", "type", "text", "required", "", "formControlName", "place_of_issue", "placeholder", "Place of issue", 2, "height", "35px", "width", "100%"], [2, "color", "red", "font-size", "10px", "font-weight", "700", "text-align", "center"], [1, "card-1", "mr-tp-16", "mr-bt-16"], ["lines", "none"], ["slot", "start", "color", "red", "name", "coupons", 2, "margin", "-11px 15px -12px -13px", 3, "ngModelChange", "ionChange", "ngModel"], ["style", "color: red;\n          font-size: 10px;\n          font-weight: 700;\n          text-align: center;", 4, "ngIf"], ["label", "ID Card No.", "labelPlacement", "floating", "type", "text", "required", "", "formControlName", "id_card_number", "placeholder", "Card No.", 2, "height", "35px"], ["label", "Issue Date", "labelPlacement", "floating", "type", "text", "formControlName", "passport_issued_date", "placeholder", "Issue Date", 2, "height", "35px", "width", "100%", 3, "click", "readonly"], ["type", "text", "formControlName", "passport_expiry_date", "placeholder", "Expiry Date", "label", "Expiry Date", "labelPlacement", "floating", 2, "height", "35px", "width", "100%", 3, "click", "readonly"], ["type", "text", "label", "Place of issue", "labelPlacement", "floating", "required", "", "formControlName", "place_of_issue", "placeholder", "Place", 1, "input", 2, "height", "35px", "width", "100%"], [1, "card-1", "mr-bt-16", 3, "ngClass"], ["mode", "md"], ["position", "floating", 1, "txt-lbl"], ["inputmode", "numeric", "type", "tel", "maxlength", "6", 3, "ionChange", "ngModelChange", "ngModel", "ngModelOptions"], ["color", "red", 3, "ionChange", "ngModelChange", "value", "ngModel", "ngModelOptions"], ["type", "text", 3, "keyup", "ngModelChange", "value", "ngModel", "ngModelOptions"], ["slot", "start", "color", "red", 2, "margin", "-11px 15px -12px -13px", 3, "ionChange", "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "Enter GST number", 3, "keyup", "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "Enter Reg. Name", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "seat-val"], [2, "text-align", "end", "color", "var(--sectionHeaderTextColor)", "margin-top", "0px", 3, "click"], [1, "ourbustheme"], ["size", "8", 2, "display", "flex", "align-items", "center", "justify-content", "center"], [2, "padding", "8px", "margin", "16px 8px"], [2, "display", "flex", "align-items", "center"], [1, "ourbus_ori_dest"], ["src", "././assets/icon/ourbus_ArrowRight.svg", 2, "margin", "0px 8px"], [1, "time-info"], ["size", "4"], [1, "time"], [1, "time-text"], [1, "date"], ["size", "4", 1, "duration"], [1, "ourbus_duration_time"], [1, "time", 2, "text-align", "end"], ["style", "border-bottom: 1px solid #EFEFEF;margin: 8px 0px;", 4, "ngIf"], ["class", "time-info", 4, "ngIf"], ["size", "1"], ["src", "././assets/icon/ourbus_profile.svg", 2, "width", "24px", "height", "24px"], ["size", "11", 1, "ourbus_pass_head"], ["style", "font-size: 14px;", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["src", "././assets/icon/ourbus_PhoneCall.svg", 2, "width", "24px", "height", "24px"], ["size", "12"], ["fill", "outline", "mode", "md", 1, "ourbus_custom_input", 2, "margin", "8px 0px"], ["position", "floating", 1, "ourbus_labelSet"], ["formControlName", "email", "placeholder", "Enter your email", "type", "email", "maxlength", "50"], ["size", "3.5"], ["size", "8.5"], ["formControlName", "mobile_number", "placeholder", "Enter phone number", "inputmode", "numeric", "type", "tel", "maxlength", "10", 1, "txt-input", 3, "input"], ["style", "margin: 0px 8px;", 4, "ngIf"], [1, "ourbus_pass_head", 2, "color", "#2D2D2D"], ["name", "information-circle", 1, "ourbus_info_icon", 3, "click"], ["position", "floating", 1, "ourbus_labelSet", "labelState"], ["color", "red", "interface", "popover", 2, "position", "relative", "bottom", "4px", "white-space", "normal", 3, "ionChange", "ngModelChange", "disabled", "value", "ngModel", "ngModelOptions"], ["type", "text", 3, "keyup", "ngModelChange", "disabled", "value", "ngModel", "ngModelOptions"], ["style", "padding: 8px;margin: 16px 8px;", 4, "ngIf"], [2, "margin", "16px 8px"], [1, "ourbus_rowBg"], ["src", "././assets/icon/ourbus_tag.svg", 2, "width", "24px", "height", "24px"], ["size", "11"], [1, "ourbus_order_details"], [2, "border", "1px solid #D9D9D9", "margin", "0px"], [2, "padding", "8px", "position", "fixed", "width", "100%", "bottom", "0", "background", "white"], ["expand", "block", 1, "btnEdit", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", "margin-top", "auto", "margin-bottom", "auto", "font-size", "18px", "font-weight", "500", "height", "50px", 3, "click"], [2, "border-bottom", "1px solid #EFEFEF", "margin", "8px 0px"], [2, "font-size", "14px"], [1, "ourbus_passList"], ["placeholder", "Enter your name", "formControlName", "name", "type", "text", "inputmode", "text", "maxlength", "50", 1, "ourbus_inputText", 2, "font-weight", "500", 3, "input"], ["size", "6", 4, "ngIf"], ["size", "6", 2, "margin", "8px 0px"], ["mode", "ios", "formControlName", "sex", 2, "padding", "4px", 3, "ngModelChange", "ngModel"], ["value", "Mr", 1, "ourbus_segment", 3, "disabled"], [3, "ngClass"], ["value", "Ms", 3, "disabled"], ["size", "12", 4, "ngIf"], ["style", "color: red;\n          font-size: 10px;\n          font-weight: 700;\n          margin-left: 8px;", 4, "ngIf"], ["formControlName", "age", "placeholder", "Age", "pattern", "[0-9]*", "inputmode", "numeric", "type", "tel", "maxlength", "3", 3, "input"], ["formControlName", "id_card_number", "placeholder", "Card No.", "type", "text"], ["formControlName", "passport_issued_date", "placeholder", "Issue Date", "type", "text", 3, "click", "readonly"], [2, "color", "red", "font-size", "10px", "font-weight", "700", "margin-left", "8px"], ["mode", "md", "slot", "start", "name", "coupons", 1, "oubus_checkbox", 3, "ngModelChange", "ionChange", "ngModel"], [1, "ourbus_pass_head", 2, "font-size", "14px"], ["style", "margin-top: 10px;", 4, "ngFor", "ngForOf"], [2, "margin-top", "10px"], ["mode", "ios", "formControlName", "sex", 2, "padding", "4px"], ["style", "color: red;\n            font-size: 10px;\n            font-weight: 700;\n            margin-left: 8px;", 4, "ngIf"], ["formControlName", "passport_expiry_date", "placeholder", "Expiry Date", 2, "height", "35px", "width", "100%", 3, "click", "readonly"], ["type", "text", "required", "", "formControlName", "place_of_issue", "placeholder", "Place", 1, "input", 2, "height", "35px", "width", "100%"], [2, "margin", "4px 0px 0px 0px", "font-size", "20px"], [1, "ourbus_inputText", 2, "height", "58px", "margin-left", "8px", 3, "readonly"], ["fill", "outline", "mode", "md", "class", "ourbus_custom_input", "style", "margin: 8px 0px;--min-height: 57px;", 4, "ngIf"], ["fill", "outline", "mode", "md", "class", "ourbus_custom_input", "style", "margin: 8px 0px;--min-height: 55px;", 4, "ngIf"], ["fill", "outline", "mode", "md", 1, "ourbus_custom_input", 2, "margin", "8px 0px", "--min-height", "57px"], ["formControlName", "country_code", "placeholder", "Code", 3, "click", "ngModel"], ["fill", "outline", "mode", "md", 1, "ourbus_custom_input", 2, "margin", "8px 0px", "--min-height", "55px"], ["formControlName", "country_code", "placeholder", "Code", 3, "click", "ngModelChange", "ngModel"], [2, "margin", "0px 8px"], ["size", "1", 2, "margin-top", "auto", "margin-bottom", "auto"], ["mode", "md", 1, "ourbusCheckbux", 3, "click", "ngModelChange", "ngModel"], ["size", "11", 1, "ourbusWhtsappText"], ["lines", "none", 1, "no-padding", "ourbus_item", 2, "padding-inline-start", "0px"], ["slot", "end", "mode", "ios", 1, "ourbus_toggle", 3, "ngModelChange", "ionChange", "ngModel", "ngModelOptions"], ["class", "gst_card", 4, "ngIf"], [1, "gst_card"], ["type", "text", "placeholder", "Enter Registration Name", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["style", "margin: 8px;", 4, "ngIf"], [2, "margin", "8px"], [1, "ourbus_farebreakup_curr"], ["size", "6", 2, "text-align", "end"], ["style", "padding: 8px;", 4, "ngIf"], [2, "padding", "8px"], [1, "ourbus_amount_payble"], [1, "ourbus_amount_paybl_amount"], ["size", "6", 2, "padding", "5px 0px"], [2, "margin-top", "0px", "margin-bottom", "6px", "font-family", "Test S\u00F6hne !important"], [2, "text-align", "end", "margin-bottom", "6px", "color", "var(--sectionHeaderTextColor)", "margin-top", "0px", 3, "click"], [1, "gstMsg", 2, "font-family", "Test S\u00F6hne !important", "margin-bottom", "7px"], ["slot", "start", 2, "margin-top", "-11px"], [1, "SeaBird_pass"], [1, "SeaBird_sub"], [1, "seaBirdbg-content"], [1, "seaBird-card-1", 2, "margin", "14px 9px", "border", "1px solid #626262", "border-radius", "10px", 3, "formGroup"], [1, "txt-input", 2, "padding-bottom", "10px"], ["size", "2.8", 2, "border-bottom", "1px solid #a2a2a2", "display", "flex", "flex-direction", "column-reverse", "align-items", "center"], ["class", "txt-input", "formControlName", "country_code", 3, "value", "click", 4, "ngIf"], ["class", "SeaBird_code", "formControlName", "country_code", 4, "ngIf"], ["formControlName", "mobile_number", "inputmode", "numeric", "type", "tel", 1, "txt-input", 3, "keyup"], ["style", "font-size: 13px;\n        margin: 10px 0px 10px 22px;\n        color: var(--primary);", 4, "ngIf"], ["class", "seaBird-card-1", "style", "margin: 14px 9px;border: 1px solid #626262;border-radius: 10px;", 4, "ngIf"], [1, "seaBird-card-1", "mr-tp-16", 2, "margin", "14px 9px", "border", "1px solid #626262", "border-radius", "10px"], [3, "formGroup", 4, "ngFor", "ngForOf"], ["class", "seaBird-card-1 mr-tp-16 mr-bt-16", "style", "margin: 14px 9px;border: 1px solid #626262;border-radius: 10px;", 4, "ngIf"], ["class", "seaBird-card-1  mr-bt-16", "style", "margin: 14px 9px;border: 1px solid #626262;border-radius: 10px;", 3, "ngClass", 4, "ngIf"], ["class", "seaBird-card-1  mr-bt-16", "style", "margin: 14px 9px;border: 1px solid #626262;border-radius: 10px;padding: 0px 12px;", 3, "ngClass", 4, "ngIf"], [1, "seaBird-card-1", 2, "margin", "14px 9px", "border", "1px solid #626262", "border-radius", "10px", "padding", "8px 12px"], ["size", "8", 2, "color", "black", "font-size", "14px", "font-weight", "bold"], [2, "font-size", "10px", "font-weight", "400", "color", "#999999"], [1, "seabirdAmount"], ["ion-button", "", 1, ""], [1, "seabirdPay", 2, "display", "flex", "justify-content", "center", "align-items", "center", "flex-direction", "column", "padding", "10px 0px", 3, "click"], ["formControlName", "country_code", 1, "txt-input", 3, "click", "value"], ["formControlName", "country_code", 1, "SeaBird_code"], [1, "seaBird-card-1", 2, "margin", "14px 9px", "border", "1px solid #626262", "border-radius", "10px"], ["lines", "none", 2, "margin-right", "-10px"], ["mode", "md", "item-left", "", "value", "Mr", 2, "--color-checked", "#2B28CE", 3, "disabled"], ["lines", "none", 2, "margin-left", "-4px"], ["mode", "md", "item-left", "", "value", "Ms", 2, "--color-checked", "#2B28CE", 3, "disabled"], [1, "styled-hr"], ["style", "color: red; font-size: 10px; font-weight: 700; text-align: center;", 4, "ngIf"], ["label", "Age", "labelPlacement", "floating", "formControlName", "age", "placeholder", "Age", "type", "number", 3, "keyup"], ["name", "caret-down-outline", "slot", "end", 2, "font-size", "12px", "color", "grey"], ["formControlName", "id_card_number", "placeholder", "Card No", "type", "text"], ["formControlName", "passport_expiry_date", "placeholder", "Expiry Date", "type", "text", 3, "click", "readonly"], ["formControlName", "place_of_issue", "placeholder", "Place of issue", "type", "text"], [1, "seaBird-card-1", "mr-tp-16", "mr-bt-16", 2, "margin", "14px 9px", "border", "1px solid #626262", "border-radius", "10px"], ["slot", "start", "name", "coupons", "mode", "md", 2, "margin", "-11px 15px -12px -13px", "--background-checked", "#2B28ce", "--border-color-checked", "#2b28ce", 3, "ngModelChange", "ionChange", "ngModel"], ["style", "margin: 14px 9px;border: 1px solid #626262;border-radius: 10px;", "class", "seaBird-card-1 mr-tp-16", 4, "ngFor", "ngForOf"], ["style", "color: red;\n            font-size: 10px;\n            font-weight: 700;\n            text-align: center;", 4, "ngIf"], ["type", "text", "required", "", "formControlName", "id_card_number", "placeholder", "Card No.", 2, "height", "35px"], ["type", "text", "formControlName", "passport_issued_date", "placeholder", "Issue Date", 2, "height", "35px", "width", "100%", 3, "click", "readonly"], [1, "seaBird-card-1", "mr-bt-16", 2, "margin", "14px 9px", "border", "1px solid #626262", "border-radius", "10px", 3, "ngClass"], [2, "font-size", "12px", "font-weight", "bold"], [1, "seaBird-card-1", "mr-bt-16", 2, "margin", "14px 9px", "border", "1px solid #626262", "border-radius", "10px", "padding", "0px 12px", 3, "ngClass"], ["mode", "md", "slot", "start", "color", "", 1, "SeaBird_check", 2, "margin", "-11px 15px -12px -13px", 3, "ionChange", "ngModelChange", "ngModel", "ngModelOptions"]],
  template: function PassengerDetailsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, PassengerDetailsPage_ng_container_0_Template, 50, 13, "ng-container", 0)(1, PassengerDetailsPage_ng_container_1_Template, 43, 20, "ng-container", 0)(2, PassengerDetailsPage_ng_container_2_Template, 115, 38, "ng-container", 0)(3, PassengerDetailsPage_ng_container_3_Template, 55, 19, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonBackButton, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControlName],
  styles: [".head[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.theme1-bg-content[_ngcontent-%COMP%] {\n  --background: #ffffff;\n}\n\n.bg-content[_ngcontent-%COMP%] {\n  --background: #e4e5e6;\n}\n\n.seaBirdbg-content[_ngcontent-%COMP%] {\n  --background: #F1F7FA;\n}\n.seaBirdbg-content[_ngcontent-%COMP%]   .ion-invalid[_ngcontent-%COMP%] {\n  --highlight-background: transparent !important;\n  background-color: transparent !important;\n}\n.seaBirdbg-content[_ngcontent-%COMP%]   .item-interactive.ion-valid[_ngcontent-%COMP%] {\n  --highlight-background: #a2a2a2;\n}\n\n.card-1[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n}\n\n.seaBird-card-1[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n}\n\n.cbus_card-1[_ngcontent-%COMP%] {\n  padding: 16px 22px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n}\n\n.txt-c1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: right;\n  color: #3e3e52;\n}\n\n.pos[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n}\n\n.cbus_pos[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 19px;\n  align-items: center;\n}\n\n.mr-md[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n\n.mr-tp-2[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n\n.mr-tp-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.Contact-details[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: var(--sectionHeaderTextColor);\n  margin-bottom: 6px;\n}\n\n.seatscolor[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--sectionHeaderTextColor);\n}\n\n.addexisting[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 12px;\n  margin-top: 3px;\n  color: var(--sectionHeaderTextColor);\n}\n\n.hd-txt-2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #7e7e8c;\n}\n\n.img-icn[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 32px;\n}\n\n.routes-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n  position: fixed;\n  bottom: 0px;\n  margin: 0px;\n  z-index: 99999;\n}\n\n.routes-footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  font-size: 12px;\n  align-items: center;\n  justify-content: center;\n  height: 45px;\n}\n\n.routes-footer[_ngcontent-%COMP%]   .button1[_ngcontent-%COMP%] {\n  --background:var(--iconsAndButtonsColor);\n}\n\n.routes-footer[_ngcontent-%COMP%]   .button2[_ngcontent-%COMP%] {\n  --background:#3e3e52;\n}\n\n.pay-txt-1[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: bolder;\n}\n\n.pay-txt-2[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n.mr-bt-34[_ngcontent-%COMP%] {\n  margin-bottom: 34px;\n}\n\n.mr-bt-16[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  margin-top: 16px;\n}\n\n.mr-15[_ngcontent-%COMP%] {\n  margin: 40px;\n}\n\n.chk-pos[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 33%;\n}\n\n.txt-lbl[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: normal;\n  color: #3e3e52 !important;\n}\n\n.txt-input[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 16px;\n  font-weight: normal;\n}\n\n.seg-btn[_ngcontent-%COMP%] {\n  width: 196px;\n  margin: 16px 0 0;\n  border-radius: 4px;\n  background-color: #eaeaea;\n}\n.seg-btn[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  height: 24px;\n  border: 1px solid #eaeaea;\n  border-radius: 4px;\n}\n.seg-btn[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  color: #9b9b9b;\n  min-height: 0px;\n  text-transform: capitalize;\n}\n.seg-btn[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  color: var(--primaryText);\n  background-color: var(--iconsAndButtonsColor);\n  font-weight: bolder;\n}\n\nion-input[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n}\n\n.businessTravelclick[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  margin-top: 16px;\n}\n\n.bottom[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  width: 100vw;\n  height: 54px;\n  z-index: 10;\n  bottom: 0;\n  background: #ffffff;\n  font-size: 13px;\n  transition: all linear 0.24s;\n  flex-direction: row;\n  box-shadow: 5px 10px 10px 10px #888888;\n}\n.bottom[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 3px;\n}\n.bottom[_ngcontent-%COMP%]   .seats[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.bottom[_ngcontent-%COMP%]   .seats[_ngcontent-%COMP%]   .seat-lbl[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  display: block;\n  color: var(--iconsAndButtonsColor);\n  padding-left: 10px;\n}\n.bottom[_ngcontent-%COMP%]   .seats[_ngcontent-%COMP%]   .seat-val[_ngcontent-%COMP%] {\n  margin: 0 0 0 12px;\n  font-size: 13px;\n  font-weight: bolder;\n  color: #4a4a4a;\n}\n.bottom[_ngcontent-%COMP%]   .seabirdExl[_ngcontent-%COMP%] {\n  margin: 0 0 0 12px;\n  font-size: 13px;\n  font-weight: bolder;\n  color: #4a4a4a;\n}\n.bottom[_ngcontent-%COMP%]   .pay[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 100%;\n  border: 1px solid var(--iconsAndButtonsColor);\n  background-color: var(--iconsAndButtonsColor);\n  font-size: 13px;\n  font-weight: bolder;\n  color: var(--primaryText);\n}\n\n.seabirdAmount[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold;\n  display: block;\n  color: green;\n  padding-left: 10px;\n}\n\n.seabirdPay[_ngcontent-%COMP%] {\n  width: 97%;\n  height: 7%;\n  border: 1px solid var(--iconsAndButtonsColor);\n  background-color: var(--iconsAndButtonsColor);\n  font-size: 13px;\n  font-weight: bolder;\n  color: var(--primaryText);\n  border-radius: 26px;\n  margin-left: 7px;\n  position: fixed;\n  bottom: 10px;\n}\n\n.gender[_ngcontent-%COMP%] {\n  color: red;\n  opacity: 1 !important;\n}\n\n.gstDiv[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.legend-box[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 280px;\n  height: auto;\n}\n\n.gstMsg[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #4a4a4a;\n  font-weight: 400;\n}\n\n.themeone-head[_ngcontent-%COMP%] {\n  color: #333333;\n  padding: 0;\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 26px;\n  letter-spacing: 0em;\n  text-align: center;\n}\n\n.themeone-bg-cl[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  --background: white;\n  -webkit-text-fill-color: #333333 !important;\n}\n\n.themeone-hd-txt-2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #5F5F5F;\n}\n\n.themeone-seatcolor[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #333333;\n  margin: 1px 0px 0px 7px;\n}\n\n.item-native[_ngcontent-%COMP%] {\n  border: 0px;\n}\n\n.themeone-ion-item[_ngcontent-%COMP%] {\n  --inner-border-width: 0;\n  border-bottom: 1px solid #F1F2F4;\n  border-radius: 0px;\n  --border-width: 0px;\n  margin: 5px 0px 5px 0px;\n  color: #333333;\n  --padding-start: 0px;\n}\n\n.select-icon[_ngcontent-%COMP%] {\n  opacity: 0.8 !important;\n}\n\n.themeone-check-item[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n  --inner-border-width: 0;\n  --padding-start: 0px;\n}\n\n.themeone-checkbox[_ngcontent-%COMP%] {\n  --border-radius: 0;\n  --background-checked: #191966;\n  height: 20px;\n  width: 20px;\n  --border-color: #2C3E50;\n  margin: 0px 16px 0px 0px;\n}\n\n.themeone-passenger-txt[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #333333;\n  font-weight: 700;\n}\n\n.themeone-bottom[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  width: 100%;\n  height: 95px;\n  z-index: 10;\n  bottom: 0;\n  background: #191966;\n  font-size: 13px;\n  transition: all linear 0.24s;\n  flex-direction: row;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n\n.themeone-totalvalue[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #FFFFFF;\n  font-family: \"NotoSans\";\n  font-weight: 700;\n}\n\n.themeone-select-pickup-btn[_ngcontent-%COMP%] {\n  --background: #FFBD16 !important;\n  color: #191966;\n  font-family: \"NotoSans\";\n  font-weight: bold;\n  font-size: 16px;\n  height: 38px;\n}\n\n.themeone-viewbreakup[_ngcontent-%COMP%] {\n  color: #FFBD16;\n  font-size: 12px;\n  font-family: \"NotoSans\";\n  font-weight: bold;\n}\n\n.themeonetoggle[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --background-checked: #ffffff;\n  --border-radius: 16px;\n  --handle-background: grey;\n  --handle-background-checked: #191966;\n  --handle-border-radius: 25.5px;\n  --handle-box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);\n  --handle-height: 20px;\n  --handle-max-height: calc(100% - (var(--handle-spacing) * 2));\n  --handle-width: 18px;\n  --handle-spacing: 7px;\n  --handle-transition: transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms;\n  width: 48px;\n  height: 24px;\n  contain: strict;\n  overflow: hidden;\n  border: 2px solid grey;\n  border-radius: 15px;\n  --track-background-checked:\t#ffffff: ;\n}\n\n.themeone-cbus[_ngcontent-%COMP%]   .toggle-checked[_ngcontent-%COMP%] {\n  border: 2px solid #191966 !important;\n}\n\nion-input[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\nion-select[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\nion-select[_ngcontent-%COMP%]::part(placeholder) {\n  opacity: 0.5;\n  min-width: 300px;\n}\n\nion-select[_ngcontent-%COMP%]::part(text) {\n  min-width: 300px;\n}\n\n.ourbustheme[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--placeholderColor);\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_ori_dest[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #747474;\n}\n.ourbustheme[_ngcontent-%COMP%]   .labelState[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  opacity: 1.6 !important;\n}\n.ourbustheme[_ngcontent-%COMP%]   .time-info[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  display: flex;\n  justify-content: space-between;\n}\n.ourbustheme[_ngcontent-%COMP%]   .time-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #2D2D2D;\n}\n.ourbustheme[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  color: #747474;\n  margin: 0px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 300;\n  color: #747474;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_duration_time[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0px;\n  font-size: 12px;\n  border-bottom: 1px dashed #9D9D9D;\n  padding: 4px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_pass_head[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--iconsAndButtonsColor);\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_passList[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #747474;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_segment[_ngcontent-%COMP%] {\n  height: 44px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_gender[_ngcontent-%COMP%] {\n  color: grey;\n}\n.ourbustheme[_ngcontent-%COMP%]   .segment-button-disabled[_ngcontent-%COMP%] {\n  opacity: 0.9 !important;\n}\n.ourbustheme[_ngcontent-%COMP%]   .segment-button-checked[_ngcontent-%COMP%] {\n  background: var(--iconsAndButtonsColor) !important;\n  --indicator-color-checked: var(--iconsAndButtonsColor) !important;\n  color: var(--primaryText);\n  font-size: 14px;\n  font-weight: 500;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbusCheckbux[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  --background-checked:var(--sectionHeaderTextColor);\n  --border-color-checked:var(--sectionHeaderTextColor);\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbusWhtsappText[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  color: #747474;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_order_details[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #2d2d2d;\n  margin-left: 4px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_rowBg[_ngcontent-%COMP%] {\n  background-color: #EAF2FF;\n  padding: 8px;\n  display: flex;\n  align-items: center;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_farebreakup_curr[_ngcontent-%COMP%] {\n  color: #2D2D2D;\n  font-size: 14px;\n  font-weight: 300;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_amount_payble[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 300;\n  color: #2d2d2d;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_amount_paybl_amount[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #2d2d2d;\n}\n.ourbustheme[_ngcontent-%COMP%]   .oubus_checkbox[_ngcontent-%COMP%] {\n  --background-checked:var(--sectionHeaderTextColor);\n  --border-color-checked:var(--sectionHeaderTextColor);\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_toggle[_ngcontent-%COMP%] {\n  --background-checked:var(--sectionHeaderTextColor);\n  --border-color-checked:var(--sectionHeaderTextColor);\n  padding-right: 0px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_item[_ngcontent-%COMP%] {\n  --padding-start: 5px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .gst_card[_ngcontent-%COMP%] {\n  padding: 0px 5px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_info_icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-left: 5px;\n  color: #2D2D2D;\n  margin-top: 2px;\n}\n\n.SeaBird_pass[_ngcontent-%COMP%] {\n  color: #333333;\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 26px;\n  letter-spacing: 0em;\n}\n\n.SeaBird_sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #333333;\n  padding: 0;\n  margin: 0;\n}\n\n.SeaBird_check[_ngcontent-%COMP%] {\n  --ion-color-primary: #3c3e52;\n}\n\nion-select.SeaBird_code[_ngcontent-%COMP%]::part(text) {\n  min-width: unset !important;\n}\n\n.styled-hr[_ngcontent-%COMP%] {\n  border: none;\n  background-color: #a2a2a2;\n  margin-left: 24px;\n}\n\n.ourbus-checkbox[_ngcontent-%COMP%] {\n  margin: -11px 15px -12px -13px;\n  --border-radius: 0px;\n  --size: 22px;\n}\n\n.custom-select[_ngcontent-%COMP%]   ion-icon.select-icon[_ngcontent-%COMP%] {\n  display: none !important; \n\n}\n\n.custom-select[_ngcontent-%COMP%]::part(icon) {\n  display: none !important; \n\n}\n\nion-select[_ngcontent-%COMP%]::part(icon), \nion-select[_ngcontent-%COMP%]::deep(.select-icon) {\n  display: none !important; \n\n}\n\nion-select[_ngcontent-%COMP%]   .select-icon[aria-hidden=false][_ngcontent-%COMP%] {\n  display: none !important;\n}\n\nion-select[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%] {\n  display: none !important; \n\n}"]
});

/***/ })

}]);