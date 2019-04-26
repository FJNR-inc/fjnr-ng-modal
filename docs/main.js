(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"header\">\n  <a href=\"https://github.com/FJNR-inc/fjnr-ng-modal\" class=\"header__item\">\n    Go to the Github repository\n  </a>\n</div>\n\n<div class=\"content\">\n  package to have modal windows for his project angular.\n\n  <div class=\"content\">\n    <div class=\"content__section\">\n      <div class=\"content__section__title\">\n        Demo:\n      </div>\n      <div class=\"content__section__content\">\n        <div>Test modal information: <a (click)=\"toogleModal('test_modal')\">Click there</a></div>\n        <app-nt-modal name=\"test_modal\"\n                      typeModal=\"information\"\n                      titleModal=\"modal\"\n                      [buttons]=\"[\n                        {\n                          label: 'close',\n                          type: 'information',\n                          id: 'btn-info'\n                        }\n                      ]\"\n                      (clickOnButton)=\"actionButton($event)\"\n                      maxWidth=\"600px\"\n                      [autoClose]=\"true\">\n          <p>Test 1</p>\n          <p>Test 2</p>\n        </app-nt-modal>\n      </div>\n      <div class=\"content__section__content\">\n        <div>Test modal default: <a (click)=\"toogleModal('test_modal_1')\">Click there</a></div>\n        <app-nt-modal name=\"test_modal_1\"\n                      typeModal=\"default\"\n                      titleModal=\"modal\"\n                      (clickOnButton)=\"actionButton($event)\"\n                      maxWidth=\"600px\"\n                      [autoClose]=\"true\">\n          <p>Test 1</p>\n          <p>Test 2</p>\n        </app-nt-modal>\n      </div>\n      <div class=\"content__section__content\">\n        <div>Test modal danger: <a (click)=\"toogleModal('test_modal_2')\">Click there</a></div>\n        <app-nt-modal name=\"test_modal_2\"\n                      typeModal=\"danger\"\n                      titleModal=\"modal\"\n                      [buttons]=\"[\n                        {\n                          label: 'close',\n                          type: 'danger',\n                          id: 'btn-info'\n                        }\n                      ]\"\n                      (clickOnButton)=\"actionButton($event)\"\n                      maxWidth=\"600px\"\n                      [autoClose]=\"true\">\n          <p>Test 1</p>\n          <p>Test 2</p>\n        </app-nt-modal>\n      </div>\n      <div class=\"content__section__content\">\n        <div>Test modal warning: <a (click)=\"toogleModal('test_modal_3')\">Click there</a></div>\n        <app-nt-modal name=\"test_modal_3\"\n                      typeModal=\"warning\"\n                      titleModal=\"modal\"\n                      [buttons]=\"[\n                        {\n                          label: 'close',\n                          type: 'warning',\n                          id: 'btn-info'\n                        }\n                      ]\"\n                      (clickOnButton)=\"actionButton($event)\"\n                      maxWidth=\"600px\"\n                      [autoClose]=\"true\">\n          <p>Test 1</p>\n          <p>Test 2</p>\n        </app-nt-modal>\n      </div>\n      <div class=\"content__section__content\">\n        <div>Test modal with many buttons: <a (click)=\"toogleModal('test_modal_4')\">Click there</a></div>\n        <app-nt-modal name=\"test_modal_4\"\n                      typeModal=\"information\"\n                      titleModal=\"modal\"\n                      [buttons]=\"[\n                        {\n                          label: 'warning',\n                          type: 'warning',\n                          id: 'btn-warning'\n                        },\n                        {\n                          label: 'info',\n                          type: 'info',\n                          id: 'btn-info'\n                        },\n                        {\n                          label: 'close',\n                          type: 'default',\n                          id: 'btn-close'\n                        }\n                      ]\"\n                      (clickOnButton)=\"actionButton($event)\"\n                      maxWidth=\"600px\"\n                      [autoClose]=\"true\">\n          <p>Test 1</p>\n          <p>Test 2</p>\n        </app-nt-modal>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_my_modal_my_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/my-modal/my-modal.service */ "./src/app/services/my-modal/my-modal.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(myModalService) {
        this.myModalService = myModalService;
        this.title = 'fjnr-ng-modal';
        this.name = null;
    }
    AppComponent.prototype.toogleModal = function (name) {
        this.name = name;
        var modal = this.myModalService.get(name);
        if (!modal) {
            // console.error('No modal named %s', name);
            return;
        }
        modal.toggle();
    };
    AppComponent.prototype.actionButton = function (event) {
        // if (event === 'btn-info') {
        //   this.toogleModal('test_modal');
        // }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_my_modal_my_modal_service__WEBPACK_IMPORTED_MODULE_2__["MyModalService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_nt_modal_nt_modal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/nt-modal/nt-modal.module */ "./src/app/components/nt-modal/nt-modal.module.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _components_nt_modal_nt_modal_module__WEBPACK_IMPORTED_MODULE_4__["NtModalModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/nt-modal/nt-modal.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/nt-modal/nt-modal.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-component\" (click)=\"clickOverlay($event)\" [style.display]=\"!show ? 'none' : 'block'\" [ngClass]=\"typeModal\">\n  <div class=\"modal-component__content\">\n    <div class=\"modal-component__content__reveal\" [style.width]=\"maxWidth\">\n      <div class=\"modal-component__content__reveal__header\" title=\"{{ titleModal }}\">\n        <a (click)=\"close()\" class=\"fa_times_close\"> <i class=\"fa fa-times\" aria-hidden=\"true\"> </i></a>\n        <div>{{ titleModal }}</div>\n        <span><i [class]=\"iconModal\"></i></span>\n      </div>\n      <div class=\"modal-component__content__reveal__content\" #modalContent>\n        <ng-content></ng-content>\n      </div>\n      <div class=\"modal-component__content__reveal__content__buttons\">\n        <button *ngFor=\"let button of buttons\" (click)=\"clickButton(button.id)\" [ngClass]=\"button.type\"\n                class=\"modal-component__content__reveal__content__buttons__button nt-button\">\n          {{ button.label }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/nt-modal/nt-modal.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/nt-modal/nt-modal.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".default {\n  button: hover;\n    button-background-color: #808080; }\n  .default .modal-component__content__reveal__header {\n    background-color: gray; }\n  .default button {\n    background-color: #808080;\n    border: 1px solid #808080; }\n  .information .modal-component__content__reveal__header {\n  background-color: #B8DAFF; }\n  .information button {\n  background-color: #B8DAFF;\n  border: 1px solid #B8DAFF; }\n  .information button:hover {\n  background-color: #9ac1ec; }\n  .danger .modal-component__content__reveal__header {\n  background-color: #D95219; }\n  .danger button {\n  background-color: #D95219;\n  border: 1px solid #D95219; }\n  .danger button:hover {\n  background-color: #b94210; }\n  .warning .modal-component__content__reveal__header {\n  background-color: #FFB65B; }\n  .warning button {\n  background-color: #FFB65B;\n  border: 1px solid #FFB65B; }\n  .warning button:hover {\n  background-color: #dc9c4c; }\n  .modal-component {\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n  .modal-component__content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100vh; }\n  .modal-component__content__reveal {\n      background: #FFFFFF;\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      max-width: 90%;\n      min-height: 150px; }\n  .modal-component__content__reveal__header {\n        padding: 18px;\n        font-weight: 900;\n        color: #142823;\n        display: flex;\n        justify-content: space-between;\n        flex-direction: row-reverse;\n        border-bottom: 1px solid gray;\n        font-size: 1.5em; }\n  .modal-component__content__reveal__header .fa_times_close {\n          cursor: pointer; }\n  .modal-component__content__reveal__header div {\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          height: 100%;\n          padding-top: 10px; }\n  .modal-component__content__reveal__header__cancel {\n          width: 30px; }\n  .modal-component__content__reveal__header__cancel:hover {\n            cursor: pointer; }\n  .modal-component__content__reveal__content {\n        padding: 20px 40px;\n        flex: 1;\n        max-height: 80vh;\n        overflow: auto; }\n  .modal-component__content__reveal__content__buttons {\n          display: flex;\n          flex-direction: row;\n          justify-content: flex-end;\n          padding: 10px;\n          border-top: 1px solid gray; }\n  .modal-component__content__reveal__content__buttons__button {\n            height: 30px;\n            width: 100px;\n            margin: 1px;\n            cursor: pointer; }\n  .modal-component__content__reveal__content__buttons__button.warning {\n            background-color: #FFB65B !important;\n            border: 1px solid #FFB65B !important; }\n  .modal-component__content__reveal__content__buttons__button.warning:hover {\n            background-color: #dc9c4c !important; }\n  .modal-component__content__reveal__content__buttons__button.information {\n            background-color: #B8DAFF !important;\n            border: 1px solid #B8DAFF !important; }\n  .modal-component__content__reveal__content__buttons__button.information:hover {\n            background-color: #9ac1ec !important; }\n  .modal-component__content__reveal__content__buttons__button.danger {\n            background-color: #D95219 !important;\n            border: 1px solid #D95219 !important; }\n  .modal-component__content__reveal__content__buttons__button.danger:hover {\n            background-color: #b94210 !important; }\n  .modal-component__content__reveal__content__buttons__button.default {\n            background-color: #808080 !important;\n            border: 1px solid #808080 !important; }\n  .modal-component__content__reveal__content__buttons__button.default:hover {\n            background-color: #808080 !important; }\n  @media only screen and (max-width: 500px) {\n  .modal-component__content__reveal {\n    height: calc(100% - 20px);\n    max-width: calc(100% - 20px); }\n    .modal-component__content__reveal__content {\n      padding: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbGx5L0J1cmVhdS9Qcm9qZWN0cy9mam5yLW5nLW1vZGFsL3NyYy9hcHAvY29tcG9uZW50cy9udC1tb2RhbC9udC1tb2RhbC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3dpbGx5L0J1cmVhdS9Qcm9qZWN0cy9mam5yLW5nLW1vZGFsL3NyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQVFFLGFBQWE7SUFDWCxnQ0N3RFcsRUFBQTtFRGpFZjtJQUVJLHNCQUFzQixFQUFBO0VBRjFCO0lBS0kseUJDNERXO0lEM0RYLHlCQzJEVyxFQUFBO0VEcERmO0VBRUkseUJDZ0RXLEVBQUE7RURsRGY7RUFLSSx5QkM2Q1c7RUQ1Q1gseUJDNENXLEVBQUE7RURsRGY7RUFTSSx5QkMwQ1csRUFBQTtFRHRDZjtFQUVJLHlCQzZCVSxFQUFBO0VEL0JkO0VBS0kseUJDMEJVO0VEekJWLHlCQ3lCVSxFQUFBO0VEL0JkO0VBU0kseUJDZ0NXLEVBQUE7RUQ1QmY7RUFFSSx5QkNZVSxFQUFBO0VEZGQ7RUFLSSx5QkNTVTtFRFJWLHlCQ1FVLEVBQUE7RURkZDtFQVNJLHlCQ29CVyxFQUFBO0VEaEJmO0VBQ0UsOEJBQTJCO0VBQzNCLGVBQWU7RUFDZixVQUFVO0VBQ1YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUyxFQUFBO0VBRVQ7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsYUFBYSxFQUFBO0VBRWI7TUFDRSxtQkNwQlE7TURxQlIsa0JBQWtCO01BRWxCLGFBQWE7TUFDYixzQkFBc0I7TUFFdEIsY0FBYztNQUNkLGlCQUFpQixFQUFBO0VBRWpCO1FBQ0UsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixjQ1JTO1FEU1QsYUFBYTtRQUNiLDhCQUE4QjtRQUM5QiwyQkFBMkI7UUFDM0IsNkJBQTZCO1FBQzdCLGdCQUFnQixFQUFBO0VBUmpCO1VBV0csZUFBZSxFQUFBO0VBWGxCO1VBZUcsbUJBQW1CO1VBQ25CLGdCQUFnQjtVQUNoQix1QkFBdUI7VUFDdkIsWUFBWTtVQUNaLGlCQUFpQixFQUFBO0VBR25CO1VBQ0UsV0FBVyxFQUFBO0VBRFo7WUFJRyxlQUFlLEVBQUE7RUFLckI7UUFDRSxrQkFBa0I7UUFDbEIsT0FBTztRQUVQLGdCQUFnQjtRQUNoQixjQUFjLEVBQUE7RUFFZDtVQUNFLGFBQWE7VUFDYixtQkFBbUI7VUFDbkIseUJBQXlCO1VBQ3pCLGFBQWE7VUFDYiwwQkFBMEIsRUFBQTtFQUUxQjtZQUNFLFlBQVk7WUFDWixZQUFZO1lBQ1osV0FBVztZQUNYLGVBQWUsRUFBQTtFQUlqQjtZQUNFLG9DQUFzRDtZQUN0RCxvQ0FBc0QsRUFBQTtFQUV4RDtZQUNFLG9DQUE0RCxFQUFBO0VBRzlEO1lBQ0Usb0NBQTBEO1lBQzFELG9DQUEwRCxFQUFBO0VBRTVEO1lBQ0Usb0NBQWdFLEVBQUE7RUFHbEU7WUFDRSxvQ0FBcUQ7WUFDckQsb0NBQXFELEVBQUE7RUFFdkQ7WUFDRSxvQ0FBMkQsRUFBQTtFQUc3RDtZQUNFLG9DQUFzRDtZQUN0RCxvQ0FBc0QsRUFBQTtFQUV4RDtZQUNFLG9DQUE0RCxFQUFBO0VBUXhFO0VBR007SUFDRSx5QkFBeUI7SUFDekIsNEJBQTRCLEVBQUE7SUFFNUI7TUFDRSxhQUFhLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnQtbW9kYWwvbnQtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXNcIjtcblxuLmRlZmF1bHQge1xuICAubW9kYWwtY29tcG9uZW50X19jb250ZW50X19yZXZlYWxfX2hlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICB9XG4gIGJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZGVmYXVsdC1iYWNrZ3JvdW5kO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1kZWZhdWx0LWJhY2tncm91bmQ7XG4gIH1cbiAgYnV0dG9uOiBob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZGVmYXVsdC1ob3Zlci1iYWNrZ3JvdW5kO1xuICB9XG59XG5cbi5pbmZvcm1hdGlvbiB7XG4gIC5tb2RhbC1jb21wb25lbnRfX2NvbnRlbnRfX3JldmVhbF9faGVhZGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1pbmZvcm1hdGlvbi1iYWNrZ3JvdW5kO1xuICB9XG4gIGJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItaW5mb3JtYXRpb24tYmFja2dyb3VuZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItaW5mb3JtYXRpb24tYmFja2dyb3VuZDtcbiAgfVxuICBidXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWluZm9ybWF0aW9uLWhvdmVyLWJhY2tncm91bmQ7XG4gIH1cbn1cblxuLmRhbmdlciB7XG4gIC5tb2RhbC1jb21wb25lbnRfX2NvbnRlbnRfX3JldmVhbF9faGVhZGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kYW5nZXItYmFja2dyb3VuZDtcbiAgfVxuICBidXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWRhbmdlci1iYWNrZ3JvdW5kO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1kYW5nZXItYmFja2dyb3VuZDtcbiAgfVxuICBidXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kO1xuICB9XG59XG5cbi53YXJuaW5nIHtcbiAgLm1vZGFsLWNvbXBvbmVudF9fY29udGVudF9fcmV2ZWFsX19oZWFkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdhcm5pbmctYmFja2dyb3VuZDtcbiAgfVxuICBidXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdhcm5pbmctYmFja2dyb3VuZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3Itd2FybmluZy1iYWNrZ3JvdW5kO1xuICB9XG4gIGJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kO1xuICB9XG59XG5cbi5tb2RhbC1jb21wb25lbnQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuXG4gICZfX2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgJl9fcmV2ZWFsIHtcbiAgICAgIGJhY2tncm91bmQ6ICRudC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgICBtaW4taGVpZ2h0OiAxNTBweDtcblxuICAgICAgJl9faGVhZGVye1xuICAgICAgICBwYWRkaW5nOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBjb2xvcjogJG50LXRleHQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcblxuICAgICAgICAuZmFfdGltZXNfY2xvc2V7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2e1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmX19jYW5jZWwge1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICZfX2NvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XG4gICAgICAgIGZsZXg6IDE7XG5cbiAgICAgICAgbWF4LWhlaWdodDogODB2aDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICAgICAgJl9fYnV0dG9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcblxuICAgICAgICAgICZfX2J1dHRvbiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDFweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvL2ZvcmNlIGJ1dHRvbiBjb2xvclxuICAgICAgICAgICZfX2J1dHRvbi53YXJuaW5ne1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdhcm5pbmctYmFja2dyb3VuZCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXdhcm5pbmctYmFja2dyb3VuZCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAmX19idXR0b24ud2FybmluZzpob3ZlcntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmX19idXR0b24uaW5mb3JtYXRpb257XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItaW5mb3JtYXRpb24tYmFja2dyb3VuZCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWluZm9ybWF0aW9uLWJhY2tncm91bmQgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJl9fYnV0dG9uLmluZm9ybWF0aW9uOmhvdmVye1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWluZm9ybWF0aW9uLWhvdmVyLWJhY2tncm91bmQgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmX19idXR0b24uZGFuZ2Vye1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWRhbmdlci1iYWNrZ3JvdW5kICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItZGFuZ2VyLWJhY2tncm91bmQgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJl9fYnV0dG9uLmRhbmdlcjpob3ZlcntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kYW5nZXItaG92ZXItYmFja2dyb3VuZCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICZfX2J1dHRvbi5kZWZhdWx0e1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWRlZmF1bHQtYmFja2dyb3VuZCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWRlZmF1bHQtYmFja2dyb3VuZCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAmX19idXR0b24uZGVmYXVsdDpob3ZlcntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kZWZhdWx0LWhvdmVyLWJhY2tncm91bmQgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAubW9kYWwtY29tcG9uZW50IHtcbiAgICAmX19jb250ZW50IHtcbiAgICAgICZfX3JldmVhbCB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG5cbiAgICAgICAgJl9fY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4iLCIvL1BsZWFzZSB1c2UgdGhpcyBmaWxlIGZvciBhbGwgeW91ciBjb25zdGFudFxuLy9cbi8vICBleGFtcGxlXG4vLyRjb2xvci10aGVtZS1ncmVlbjogIzAwZDU5Y1xuXG5cbiRjb2xvci1ncmV5LWJvcmRlcjogI0Q2RDhEQjtcbiRjb2xvci1ncmV5LWJhY2tncm91bmQ6ICNFMkUzRTU7XG4kY29sb3ItZ3JleS10ZXh0OiAjMzkzRTQyO1xuXG4kY29sb3ItYmx1ZS1ib3JkZXI6ICNCOERBRkY7XG4kY29sb3ItYmx1ZS1iYWNrZ3JvdW5kOiAjQ0NFNUZGO1xuJGNvbG9yLWJsdWUtdGV4dDogIzAzNDM4NjtcblxuJGNvbG9yLW5ldXRyYWwtYm9yZGVyOiAjRDZEOERCO1xuJGNvbG9yLW5ldXRyYWwtYmFja2dyb3VuZDogI0UyRTNFNTtcbiRjb2xvci1uZXV0cmFsLWJhY2tncm91bmQtaG92ZXI6IGRhcmtlbigkY29sb3ItbmV1dHJhbC1iYWNrZ3JvdW5kLCA1MCUpO1xuJGNvbG9yLW5ldXRyYWwtdGV4dDogIzY1Njk2QjtcbiRjb2xvci1uZXV0cmFsLXRleHQtaG92ZXI6IHdoaXRlO1xuXG4kY29sb3ItZGFuZ2VyLWJvcmRlcjogI2Y1YzZjYjtcbiRjb2xvci1kYW5nZXItYmFja2dyb3VuZDogI0Y4RDdEQTtcbiRjb2xvci1kYW5nZXItYmFja2dyb3VuZC1ob3ZlcjogZGFya2VuKCRjb2xvci1kYW5nZXItYmFja2dyb3VuZCwgNTAlKTtcbiRjb2xvci1kYW5nZXItdGV4dDogIzk3NTA1NztcbiRjb2xvci1kYW5nZXItdGV4dC1ob3Zlcjogd2hpdGU7XG5cbiRjb2xvci1zdWNjZXNzLWJvcmRlcjogI0MzRTZDQjtcbiRjb2xvci1zdWNjZXNzLWJhY2tncm91bmQ6ICNENEVEREE7XG4kY29sb3Itc3VjY2Vzcy1iYWNrZ3JvdW5kLWhvdmVyOiBkYXJrZW4oJGNvbG9yLXN1Y2Nlc3MtYmFja2dyb3VuZCwgNTAlKTtcbiRjb2xvci1zdWNjZXNzLXRleHQ6ICMxNTU3MjQ7XG4kY29sb3Itc3VjY2Vzcy10ZXh0LWhvdmVyOiB3aGl0ZTtcblxuJGNvbG9yLWdyZXk6ICM0YjRiNGI7XG4kY29sb3ItZ3JleS1kYXJrOiAjMWIxYjFiO1xuXG4kbGluay1jb2xvcjogJGNvbG9yLWdyZXk7XG5cbiRjb2xvci1tYWluOiAjMzNhMjdmO1xuJGNvbG9yLW1haW4tdGV4dDogcmdiKDc3LCA3NywgNzcpO1xuJGNvbG9yLWJhY2tncm91bmQtbWFpbjogbGlnaHRlbigkY29sb3ItbWFpbiwgNTIpO1xuJGNvbG9yLWhvdmVyLW1haW46IGxpZ2h0ZW4oJGNvbG9yLW1haW4sIDQwKTtcblxuJGNvbG9yLXRpdGxlOiByZ2IoNDMsIDQzLCA0Myk7XG5cbiRmb250LWZhbWlseTogJ051bml0byBTYW5zJywgc2Fucy1zZXJpZjtcbiRmb250LXNpemUtbm9ybWFsOiAxNnB4O1xuJGxpbmUtaGVpZ2h0LW5vcm1hbDogMjJweDtcbiRmb250LWxpdHRsZTogMTBweDtcbiRsaW5rLWNvbG9yLWhvdmVyOiAkY29sb3ItbWFpbjtcblxuJG50LTA6ICNFNkRDQ0Y7XG4kbnQtMTogI0ZGRkZGRjtcbiRudC0yOiAjRjdFREQyO1xuJG50LTM6ICNGRkU2QkM7XG4kbnQtNDogI0ZGRDI4QjtcbiRudC01OiAjRkZCNjVCO1xuJG50LTY6ICNGRkI0MTU7XG4kbnQtNzogI0UzOTI1QztcbiRudC04OiAjRDI3MzM5O1xuJG50LTk6ICNEOTUyMTk7XG4kbnQtMTA6ICM3QkNEQTA7XG4kbnQtMTE6ICM0RDkzNzQ7XG4kbnQtMTI6ICMyQTczNTg7XG4kbnQtMTM6ICMwRDQ0MzY7XG4kbnQtMTQ6ICMwRjI4MjI7XG4kbnQtMTU6ICNCOERBRkY7XG4kbnQtMTY6ICM5YWMxZWM7XG4kbnQtMTc6ICM4MDgwODA7XG4kbnQtMTg6ICM1ZjVlNWU7XG4kbnQtMTk6ICNiOTQyMTA7XG4kbnQtMjA6ICNkYzljNGM7XG5cbiRudC1iYWNrZ3JvdW5kLWNvbG9yOiAkbnQtMTtcbiRudC1iYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0OiAjRkNGN0VGO1xuJG50LWJhY2tncm91bmQtY29sb3ItZGFyazogI0Y3QjY0QjtcbiRudC10ZXh0OiAjMTQyODIzO1xuJG50LWJhY2tncm91bmQtZGFuZ2VyOiAjQjE2RTNDO1xuJGJvcmRlci1jYWxlbmRhcjogIzg5OTU5MjtcblxuJGNvbG9yLXdhcm5pbmctYm9yZGVyOiAjRkZFRUJBO1xuJGNvbG9yLXdhcm5pbmctYmFja2dyb3VuZDogJG50LTU7XG4kY29sb3Itd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kOiAkbnQtMjA7XG4kY29sb3ItaW5mb3JtYXRpb24tYmFja2dyb3VuZDogJG50LTE1O1xuJGNvbG9yLWluZm9ybWF0aW9uLWhvdmVyLWJhY2tncm91bmQ6ICRudC0xNjtcbiRjb2xvci1kYW5nZXItYmFja2dyb3VuZDogJG50LTk7XG4kY29sb3ItZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQ6ICRudC0xOTtcbiRjb2xvci1kZWZhdWx0LWJhY2tncm91bmQ6ICRudC0xNztcbiRjb2xvci1kZWZhdWx0LWhvdmVyLWJhY2tncm91bmQ6ICRudC0xNztcbiRjb2xvci13YXJuaW5nLWJhY2tncm91bmQtaG92ZXI6IGRhcmtlbigkY29sb3Itd2FybmluZy1iYWNrZ3JvdW5kLCA1MCUpO1xuJGNvbG9yLXdhcm5pbmctdGV4dDogJG50LXRleHQ7XG4kY29sb3Itd2FybmluZy10ZXh0LWhvdmVyOiB3aGl0ZTtcblxuJGJ1dHRvbi1zdWNjZXNzLXRleHQ6IHdoaXRlO1xuJGJ1dHRvbi1zdWNjZXNzLWJhY2tncm91bmQ6ICMyQTczNTg7XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/nt-modal/nt-modal.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/nt-modal/nt-modal.component.ts ***!
  \***********************************************************/
/*! exports provided: NtModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtModalComponent", function() { return NtModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_my_modal_my_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/my-modal/my-modal.service */ "./src/app/services/my-modal/my-modal.service.ts");



var NtModalComponent = /** @class */ (function () {
    function NtModalComponent(myModals) {
        var _this = this;
        this.myModals = myModals;
        this.buttons = null;
        this.maxWidth = '95%';
        this.activated = true;
        this.autoClose = false;
        this.show = false;
        this.clickOnButton = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.iconModals = {
            info: 'fa fa-exclamation-circle fa-2x',
            danger: 'fa fa-exclamation-triangle fa-2x',
            warning: 'fa fa-exclamation-triangle fa-2x',
        };
        this.iconModal = null;
        this.escapeListener = function (event) {
            if (event.which === 27 || event.keyCode === 27) {
                _this.show = false;
            }
        };
        if (this.typeModal === undefined) {
            this.typeModal = 'default';
        }
        if (this.buttons === null) {
            this.buttons = [
                {
                    label: 'close',
                    type: this.typeModal,
                    id: 'btn-close'
                }
            ];
        }
    }
    NtModalComponent.prototype.ngOnInit = function () {
        this.initIconModal(this.typeModal);
        this.isModalInformation = this.typeModal === 'information';
        this.isModalForm = this.typeModal === 'form';
        this.myModals.set(this.name, this);
    };
    NtModalComponent.prototype.initIconModal = function (typeModal) {
        typeModal = typeModal.toLowerCase();
        switch (typeModal) {
            case 'information':
                this.iconModal = this.iconModals.info;
                break;
            case 'danger':
                this.iconModal = this.iconModals.danger;
                break;
            case 'warning':
                this.iconModal = this.iconModals.warning;
                break;
        }
    };
    NtModalComponent.prototype.clickOverlay = function (event) {
        var target = event.target;
        if (target.classList.contains('modal-component') || target.classList.contains('modal-component__content')) {
            this.toggle();
        }
    };
    NtModalComponent.prototype.setErrorMessage = function (value) {
        this.errorMessage = value;
    };
    NtModalComponent.prototype.close = function () {
        this.show = false;
        console.log(this.show);
    };
    NtModalComponent.prototype.toggle = function () {
        this.show = !this.show;
        if (this.show) {
            document.addEventListener('keyup', this.escapeListener);
        }
        else {
            document.removeEventListener('keyup', this.escapeListener);
            this.errorMessage = '';
        }
    };
    NtModalComponent.prototype.clickButton = function (event) {
        if (event === 'btn-close') {
            this.toggle();
        }
        this.clickOnButton.emit(event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NtModalComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NtModalComponent.prototype, "titleModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NtModalComponent.prototype, "typeModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NtModalComponent.prototype, "generalClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NtModalComponent.prototype, "buttons", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NtModalComponent.prototype, "maxWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NtModalComponent.prototype, "activated", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NtModalComponent.prototype, "autoClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NtModalComponent.prototype, "show", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NtModalComponent.prototype, "modalContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NtModalComponent.prototype, "clickOnButton", void 0);
    NtModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nt-modal',
            template: __webpack_require__(/*! ./nt-modal.component.html */ "./src/app/components/nt-modal/nt-modal.component.html"),
            styles: [__webpack_require__(/*! ./nt-modal.component.scss */ "./src/app/components/nt-modal/nt-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_my_modal_my_modal_service__WEBPACK_IMPORTED_MODULE_2__["MyModalService"]])
    ], NtModalComponent);
    return NtModalComponent;
}());



/***/ }),

/***/ "./src/app/components/nt-modal/nt-modal.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/nt-modal/nt-modal.module.ts ***!
  \********************************************************/
/*! exports provided: NtModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtModalModule", function() { return NtModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nt_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nt-modal.component */ "./src/app/components/nt-modal/nt-modal.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _services_my_modal_my_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/my-modal/my-modal.service */ "./src/app/services/my-modal/my-modal.service.ts");






var NtModalModule = /** @class */ (function () {
    function NtModalModule() {
    }
    NtModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            declarations: [
                _nt_modal_component__WEBPACK_IMPORTED_MODULE_3__["NtModalComponent"],
            ],
            providers: [
                _services_my_modal_my_modal_service__WEBPACK_IMPORTED_MODULE_5__["MyModalService"]
            ],
            exports: [
                _nt_modal_component__WEBPACK_IMPORTED_MODULE_3__["NtModalComponent"],
            ]
        })
    ], NtModalModule);
    return NtModalModule;
}());



/***/ }),

/***/ "./src/app/services/my-modal/my-modal.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/my-modal/my-modal.service.ts ***!
  \*******************************************************/
/*! exports provided: MyModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyModalService", function() { return MyModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyModalService = /** @class */ (function () {
    function MyModalService() {
        this.map = new Map();
    }
    MyModalService.prototype.get = function (v) {
        return this.map.get(v);
    };
    MyModalService.prototype.set = function (key, v) {
        this.map.set(key, v);
    };
    MyModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MyModalService);
    return MyModalService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/willy/Bureau/Projects/fjnr-ng-modal/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map