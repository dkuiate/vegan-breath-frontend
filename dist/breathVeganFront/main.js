(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ryl/Bureau/forkekone/vegan-breath-frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "49KJ":
/*!*****************************************************************!*\
  !*** ./src/app/modules/registration/log-in/log-in.component.ts ***!
  \*****************************************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _apiServices_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apiServices/auth.service */ "k1qI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _apiServices_form_control_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../apiServices/form-control.service */ "blLT");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












class LogInComponent {
    constructor(authService, router, formControlService) {
        this.authService = authService;
        this.router = router;
        this.formControlService = formControlService;
    }
    ngOnInit() {
    }
    login(username, password) {
        this.authService.login(username, password).subscribe(_success => this.router.navigate(['']), error => this.error = error);
    }
    signup() {
        if (!this.formControlService.loginForm.valid)
            this.router.navigate(['signup']);
    }
}
LogInComponent.ɵfac = function LogInComponent_Factory(t) { return new (t || LogInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apiServices_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apiServices_form_control_service__WEBPACK_IMPORTED_MODULE_3__["FormControlService"])); };
LogInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogInComponent, selectors: [["app-log-in"]], decls: 19, vars: 1, consts: [["fxLayoutAlign", "center center", "fxFlexFill", "", 1, "main-div"], ["fxFlex", "25"], [1, "toolbar-green"], ["fxLayoutAlign", "stretch", "fxLayout", "column", 1, "login-form", 3, "formGroup", "submit"], ["matInput", "", "placeholder", "Username", "formControlName", "username"], ["username", ""], ["matInput", "", "placeholder", "Password", "type", "password", "formControlName", "password"], ["password", ""], ["mat-raised-button", "", "type", "submit", 1, "green-button", 3, "click"], ["mat-raised-button", "", 1, "green-button", 2, "margin-top", "10px", 3, "click"]], template: function LogInComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LogInComponent_Template_form_submit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx.login(_r0.value, _r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Invalid email address or username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Provide a password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogInComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx.login(_r0.value, _r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogInComponent_Template_button_click_17_listener() { return ctx.signup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sign-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formControlService.loginForm);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexFillDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], styles: [".main-div[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n    padding: 0px;\n}\n\n.login-form[_ngcontent-%COMP%] {\npadding: 20px;\n}\n\n.mat-toobar[_ngcontent-%COMP%]{\n    background: #439c1d!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZWdpc3RyYXRpb24vbG9nLWluL2xvZy1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVnaXN0cmF0aW9uL2xvZy1pbi9sb2ctaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWRpdiBtYXQtY2FyZCB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4ubG9naW4tZm9ybSB7XG5wYWRkaW5nOiAyMHB4O1xufVxuXG4ubWF0LXRvb2JhcntcbiAgICBiYWNrZ3JvdW5kOiAjNDM5YzFkIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-log-in',
                templateUrl: './log-in.component.html',
                styleUrls: ['./log-in.component.css']
            }]
    }], function () { return [{ type: _apiServices_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _apiServices_form_control_service__WEBPACK_IMPORTED_MODULE_3__["FormControlService"] }]; }, null); })();


/***/ }),

/***/ "6FYG":
/*!****************************************************!*\
  !*** ./src/shared/browser/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _app_modules_popup_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/modules/popup/pop-up/pop-up.component */ "EY85");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_apiServices_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/apiServices/common.service */ "qGym");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");













function NavigationComponent_div_7_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](link_r3.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r3.label);
} }
function NavigationComponent_div_7_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](link_r3.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r3.label);
} }
function NavigationComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavigationComponent_div_7_button_2_Template, 2, 4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavigationComponent_div_7_button_3_Template, 4, 5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_div_7_Template_button_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onAdd($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_div_7_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r3 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", link_r3.path)("active", _r4.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r3.label === "Accueil" || link_r3.label === "Connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r3.label !== "Accueil" && link_r3.label !== "Connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", link_r3.subPath);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r3.subLabel1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", link_r3.subPath2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r3.subLabel2);
} }
function NavigationComponent_div_10_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](link_r13.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r13.label);
} }
function NavigationComponent_div_10_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](link_r13.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r13.label);
} }
function NavigationComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavigationComponent_div_10_button_2_Template, 2, 4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavigationComponent_div_10_button_3_Template, 2, 5, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_div_10_Template_button_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onAdd($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r13 = ctx.$implicit;
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", link_r13.path)("active", _r14.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r13.label === "Accueil" || link_r13.label === "Connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r13.label !== "Accueil" && link_r13.label !== "Connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", link_r13.subPath);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r13.subLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", link_r13.subPath2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r13.subLabel2);
} }
class NavigationComponent {
    constructor(router, dialog, commonService) {
        this.router = router;
        this.dialog = dialog;
        this.commonService = commonService;
        this.activeLinkIndex = -1;
        this.navLinks = [
            {
                label: 'Accueil',
                path: '/',
                style: 'button-style',
                index: 0
            },
            {
                label: 'Recette',
                subLabel1: 'Ajouter une recette',
                dropDown: 'recipe',
                subLabel2: 'Voir liste des recettes',
                // subPath2: './see_recipes_list',
                style: 'button-style',
                index: 1
            },
            {
                label: 'Magasin',
                subLabel1: 'Ajouter un magasin',
                dropDown: 'shop',
                subLabel2: 'Voir liste des magasins',
                // subPath2: './see_shops_list',
                style: 'button-style',
                index: 2
            },
            {
                label: 'Restaurant',
                subLabel1: 'Ajouter un restaurant',
                dropDown: 'restaurant',
                subLabel2: 'Voir liste des restaurants',
                // subPath2: './see_restaurants_list',
                style: 'button-style',
                index: 3
            },
            {
                label: 'Connexion',
                path: '/login',
                style: 'connexion-button-style',
                index: 4
            },
        ];
    }
    ngOnInit() {
        this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => {
                if (tab.path !== undefined && tab.path.charAt(0) === '.') {
                    return tab.path;
                }
                else {
                    return { subLabelIndex: tab.subPath, subLabelIndex2: tab.subPath2 };
                }
            }));
        });
        this.commonService.setListData(this.navLinks);
    }
    onAdd(event) {
        if (event.target.textContent === 'Ajouter un restaurant') {
            this.commonService.setElement('un restaurant');
        }
        if (event.target.textContent === 'Ajouter un magasin') {
            this.commonService.setElement('un magasin');
        }
        if (event.target.textContent === 'Ajouter une recette') {
            this.commonService.setElement('une recette');
        }
        console.log(event.target);
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = false;
        dialogConfig.height = '500px';
        dialogConfig.width = '600px';
        this.dialog.open(_app_modules_popup_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_2__["PopUpComponent"], dialogConfig);
    }
    onList(event) {
        console.log(event.target);
        if (event.target.textContent === 'Voir liste des restaurants') {
            this.router.navigate(['/restaurantList']);
        }
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_apiServices_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-browser"]], decls: 11, vars: 3, consts: [[1, "navigation-container"], ["mat-icon-button", "", "fxHide.gt-sm", "", 1, "button-burger", 3, "matMenuTriggerFor"], ["class", "group-menu-button", "routerLinkActive", "", "fxHide.lt-md", "", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], ["menuHeader", "matMenu"], ["class", "group-menu-button", "routerLinkActive", "", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], ["routerLinkActive", "", "fxHide.lt-md", "", 1, "group-menu-button", 3, "routerLink", "active"], ["rla", "routerLinkActive"], ["mat-button", "", "routerLink", "link.path", 3, "class", 4, "ngIf"], ["mat-button", "", 3, "class", "matMenuTriggerFor", 4, "ngIf"], ["yPosition", "above", 1, "custom-mat-menu"], ["homeMenu", "matMenu"], ["mat-menu-item", "", 3, "routerLink", "click"], ["mat-button", "", "routerLink", "link.path"], ["mat-button", "", 3, "matMenuTriggerFor"], ["routerLinkActive", "", 1, "group-menu-button", 3, "routerLink", "active"], ["mat-menu-item", "", "routerLink", "link.path", 3, "class", 4, "ngIf"], ["mat-menu-item", "", 3, "class", "matMenuTriggerFor", 4, "ngIf"], ["yPosition", "below", 1, "custom-mat-menu"], ["menuSmallScreen", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", "routerLink", "link.path"], ["mat-menu-item", "", 3, "matMenuTriggerFor"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Vegan Breath");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavigationComponent_div_7_Template, 10, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavigationComponent_div_10_Template, 10, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navLinks);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultShowHideDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"]], styles: [".navigation-container[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #FFD484 53.25%, #EDEFF1 53.26%, #EDEFF1 99.99%, #EDEFF1 100%);\n}\n\n.navigation-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 30px;\n  color: #439C1D;\n  font-weight: 700;\n  font-size: 22px;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.group-menu-button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.group-menu-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #439C1D;\n  font-weight: 500;\n  border-radius: 50px;\n  border: 1px solid #439C1D;\n  outline: none !important;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.button-style[_ngcontent-%COMP%] {\n  background: #FFD484 !important;\n}\n\n.custom-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: relative;\n  top: 2px;\n}\n\n.group-menu-button[_ngcontent-%COMP%]:nth-child(7) {\n  position: absolute;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvYnJvd3Nlci9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0dBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUNBQUE7QUFDSjs7QUFFQTtFQUNJLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6InNyYy9zaGFyZWQvYnJvd3Nlci9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24tY29udGFpbmVyIC5tYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjRkZENDg0IDUzLjI1JSwgI0VERUZGMSA1My4yNiUsICNFREVGRjEgOTkuOTklLCAjRURFRkYxIDEwMCUpO1xufVxuXG4ubmF2aWdhdGlvbi1jb250YWluZXIgc3BhbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIGNvbG9yOiAjNDM5QzFEO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG5cbi5ncm91cC1tZW51LWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5ncm91cC1tZW51LWJ1dHRvbiBidXR0b24ge1xuICAgIGNvbG9yOiAjNDM5QzFEO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDM5QzFEO1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG4uYnV0dG9uLXN0eWxlIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZENDg0ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tYnV0dG9uIG1hdC1pY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAycHg7XG59XG5cbi5ncm91cC1tZW51LWJ1dHRvbjpudGgtY2hpbGQoNykge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbn1cblxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-browser',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _app_apiServices_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: true
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

/***/ "EY85":
/*!**********************************************************!*\
  !*** ./src/app/modules/popup/pop-up/pop-up.component.ts ***!
  \**********************************************************/
/*! exports provided: PopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpComponent", function() { return PopUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_restaurant_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/restaurant.interface */ "x79X");
/* harmony import */ var _apiServices_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apiServices/common.service */ "qGym");
/* harmony import */ var _apiServices_form_control_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../apiServices/form-control.service */ "blLT");
/* harmony import */ var _apiServices_restaurants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../apiServices/restaurants.service */ "hdaJ");
/* harmony import */ var _apiServices_shops_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../apiServices/shops.service */ "cwam");
/* harmony import */ var _apiServices_recepee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../apiServices/recepee.service */ "qBBi");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");















class PopUpComponent {
    constructor(commonService, formControlService, restaurantService, shopService, recepeeService) {
        this.commonService = commonService;
        this.formControlService = formControlService;
        this.restaurantService = restaurantService;
        this.shopService = shopService;
        this.recepeeService = recepeeService;
        this.content = this.commonService.getListData();
        this.elementCreation = new _models_restaurant_interface__WEBPACK_IMPORTED_MODULE_1__["RestaurantModel"]();
    }
    ngOnInit() {
        this.element = this.commonService.getElement();
    }
    ngOnChanges() {
        this.element = this.commonService.getElement();
    }
    createElement() {
        if (this.commonService.getElement() === 'un restaurant') {
            this.createRestaurant();
        }
        if (this.commonService.getElement() === 'un magasin') {
            this.createShop();
        }
        if (this.commonService.getElement() === 'une recette') {
            this.createRecette();
        }
    }
    createRestaurant() {
        this.elementCreation.picture = 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/vegetarian_diet_slideshow/getty_rf_photo_of_veggie_stir-fry.jpg';
        this.elementCreation.email = 'dd@admin.com';
        if (this.formControlService.addingItemForm.valid) {
            // tslint:disable-next-line:max-line-length
            this.restaurantService.addRestaurant(this.elementCreation.title, this.elementCreation.email, this.elementCreation.picture, this.elementCreation.description).subscribe((data) => {
                this.elementCreation = data;
                window.alert('votre restaurant sera ajouté après validation admin');
                console.log('createdData', data);
            }, (error) => {
                // window.alert('Ajout imposible du  magasin, essayer encore');
                console.log(error);
            });
        }
    }
    createShop() {
        this.elementCreation.email = 'user@user.com';
        if (this.formControlService.addingItemForm.valid) {
            // tslint:disable-next-line:max-line-length
            this.shopService.addShops(this.elementCreation.title, this.elementCreation.email, this.elementCreation.picture, this.elementCreation.description).subscribe((data) => {
                this.shopCreation = data;
                window.alert('votre magasin sera ajouté après validation admin');
                console.log('createdData', data);
            }, (error) => {
                // window.alert('Ajout imposible du  magasin, essayer encore');
                console.log(error);
            });
        }
    }
    discard() {
        console.log('close pop up');
    }
    addTitle(event) {
        const value = event.target.value;
        if (value || '') {
            this.elementCreation.title = value;
        }
    }
    addImage(event) {
        const value = event.target.value;
        if (value || '') {
            this.elementCreation.picture = value;
        }
    }
    addDescription(event) {
        const value = event.target.value;
        if (value || '') {
            this.elementCreation.description = value;
        }
        console.log('rightValue', value);
    }
    createRecette() {
        this.elementCreation.email = 'dd@admina.com';
        if (this.formControlService.addingItemForm.valid) {
            // tslint:disable-next-line:max-line-length
            this.recepeeService.addRecepee(this.elementCreation.title, this.elementCreation.email, this.elementCreation.picture, this.elementCreation.description).subscribe((data) => {
                this.elementCreation = data;
                window.alert('votre recette sera ajouté après validation admin');
                console.log('createdData', data);
            }, (error) => {
                // window.alert('Ajout imposible du  magasin, essayer encore');
                console.log(error);
            });
        }
    }
}
PopUpComponent.ɵfac = function PopUpComponent_Factory(t) { return new (t || PopUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apiServices_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apiServices_form_control_service__WEBPACK_IMPORTED_MODULE_3__["FormControlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apiServices_restaurants_service__WEBPACK_IMPORTED_MODULE_4__["RestaurantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apiServices_shops_service__WEBPACK_IMPORTED_MODULE_5__["ShopsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apiServices_recepee_service__WEBPACK_IMPORTED_MODULE_6__["RecepeeService"])); };
PopUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopUpComponent, selectors: [["app-pop-up"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 42, vars: 2, consts: [["fxLayoutAlign", "center center", "fxFlexFill", "", 1, "main-div"], [1, "formClass", 3, "formGroup", "submit"], [1, "toolbar-green"], ["fxLayout", "column", "fxLayoutAlign", "space-between stretch"], ["matInput", "", "placeholder", "Placeholder", "formControlName", "title", 3, "keyup"], ["title", ""], ["matInput", "", "placeholder", "Placeholder", "formControlName", "image", "type", "url", 3, "keyup"], ["image", ""], ["matSuffix", ""], ["matInput", "", "formControlName", "description", 3, "keyup"], ["description", ""], ["fxLayout", "row", "fxLayoutAlign", "space-evenly center", "fxFlex", "100"], ["fxFlex", "30"], ["fxFlex", "10", "mat-button", "", 1, "green-button", 3, "click"], ["fxFlex", "10", "mat-button", "", "color", "warn", 1, "red-button", 3, "click"]], template: function PopUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function PopUpComponent_Template_form_submit_1_listener() { return ctx.createElement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Titre*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ins\u00E9rer un titre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PopUpComponent_Template_input_keyup_11_listener($event) { return ctx.addTitle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ce champ est obligatoire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Image*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Ins\u00E9rer une url");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PopUpComponent_Template_input_keyup_20_listener($event) { return ctx.addImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Ce champ est obligatoire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "insert_photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Ins\u00E9rer une description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "textarea", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PopUpComponent_Template_textarea_keyup_29_listener($event) { return ctx.addDescription($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Descrition trop courte, min 20 carat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Description*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopUpComponent_Template_button_click_38_listener() { return ctx.createElement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Ajouter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopUpComponent_Template_button_click_40_listener() { return ctx.discard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formControlService.addingItemForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ajouter ", ctx.element, "");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["FlexFillDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"]], styles: [".description-input[_ngcontent-%COMP%]{\n    padding: 20px 10px;\n    line-height: 28px;\n}\n\ntextarea[_ngcontent-%COMP%] {\n    width: 356px;\n    height: 199px;\n    left: 14px;\n    top: 318px;\n}\n\n.formClass[_ngcontent-%COMP%]{\n  width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3B1cC9wb3AtdXAvcG9wLXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0lBQ1YsVUFBVTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wb3B1cC9wb3AtdXAvcG9wLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVzY3JpcHRpb24taW5wdXR7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuXG50ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDM1NnB4O1xuICAgIGhlaWdodDogMTk5cHg7XG4gICAgbGVmdDogMTRweDtcbiAgICB0b3A6IDMxOHB4O1xufVxuXG4uZm9ybUNsYXNze1xuICB3aWR0aDogNjAwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pop-up',
                templateUrl: './pop-up.component.html',
                styleUrls: ['./pop-up.component.css']
            }]
    }], function () { return [{ type: _apiServices_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: _apiServices_form_control_service__WEBPACK_IMPORTED_MODULE_3__["FormControlService"] }, { type: _apiServices_restaurants_service__WEBPACK_IMPORTED_MODULE_4__["RestaurantsService"] }, { type: _apiServices_shops_service__WEBPACK_IMPORTED_MODULE_5__["ShopsService"] }, { type: _apiServices_recepee_service__WEBPACK_IMPORTED_MODULE_6__["RecepeeService"] }]; }, null); })();


/***/ }),

/***/ "FiUw":
/*!*************************************************!*\
  !*** ./src/shared/browser/navigation.module.ts ***!
  \*************************************************/
/*! exports provided: NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation.component */ "6FYG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");












class NavigationModule {
}
NavigationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NavigationModule });
NavigationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NavigationModule_Factory(t) { return new (t || NavigationModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NavigationModule, { declarations: [_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"]], exports: [_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"]
                ],
                providers: [],
                exports: [
                    _navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "H8yK":
/*!*********************************************************!*\
  !*** ./src/app/modules/home/footer/footer.component.ts ***!
  \*********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "IxbX":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/generic-components-module/favorites-list/favorites-list.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: FavoritesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesListComponent", function() { return FavoritesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_favorites_manager_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/favorites-manager.services */ "sL5/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_vegan_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/vegan-details.service */ "neZ6");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








function FavoritesListComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoritesListComponent_ul_6_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const flr_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.selectedVegan(flr_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoritesListComponent_ul_6_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const flr_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.deleteFavoris(flr_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Supprimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flr_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", flr_r1.title, " ");
} }
class FavoritesListComponent {
    constructor(favoriteManagerService, router, veganDetailsService) {
        this.favoriteManagerService = favoriteManagerService;
        this.router = router;
        this.veganDetailsService = veganDetailsService;
        this.favoritesListResult = this.veganDetailsService.favoritesListResult;
    }
    ngOnInit() {
        this.displayFavoritesList();
    }
    displayFavoritesList() {
        this.veganDetailsService.favoritesListResult = this.favoriteManagerService.getFavoriteStorage();
        console.log(this.veganDetailsService.favoritesListResult);
    }
    deleteFavoris(currentProduct) {
        currentProduct.favoriteState = false;
        const indexPosition = this.veganDetailsService.favoritesListResult.map(res => res.id).indexOf(currentProduct.id);
        if (indexPosition !== -1) {
            this.veganDetailsService.favoritesListResult.splice(indexPosition, 1);
            const newTitle = this.changeTitle(currentProduct.title).replace(/ /g, '');
            this.veganDetailsService.changeStateFavorite(newTitle, indexPosition, currentProduct.favoriteState);
        }
    }
    changeTitle(title) {
        const lowerCaseTitle = title.toLowerCase();
        const removeLastChar = lowerCaseTitle.substring(0, lowerCaseTitle.length - 1);
        return removeLastChar + 'Details';
    }
    selectedVegan(favoriteList) {
        this.router.navigate(['/details', favoriteList.id, favoriteList.title.replace(/ /g, '')]);
    }
}
FavoritesListComponent.ɵfac = function FavoritesListComponent_Factory(t) { return new (t || FavoritesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_favorites_manager_services__WEBPACK_IMPORTED_MODULE_1__["FavoriteManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_vegan_details_service__WEBPACK_IMPORTED_MODULE_3__["VeganDetailsService"])); };
FavoritesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavoritesListComponent, selectors: [["app-favorites-list"]], decls: 7, vars: 1, consts: [[1, "favorite-list-container"], [1, "favorite-title"], [1, "favorite-list"], [4, "ngFor", "ngForOf"], [3, "click"], ["mat-raised-button", "", 3, "click"]], template: function FavoritesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mes Favoris");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FavoritesListComponent_ul_6_Template, 5, 1, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.favoritesListResult);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: [".favorite-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 170px 0 12px 0;\n  font-size: 48px;\n  font-weight: 400;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.favorite-list[_ngcontent-%COMP%] {\n  margin-top: 66px;\n}\n\n.favorite-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #007BFF;\n  font-size: 20px;\n  font-weight: 400;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.favorite-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 30px;\n  border-radius: 50%;\n  background-color: #439C1D;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmljLWNvbXBvbmVudHMtbW9kdWxlL2Zhdm9yaXRlcy1saXN0L2Zhdm9yaXRlcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2dlbmVyaWMtY29tcG9uZW50cy1tb2R1bGUvZmF2b3JpdGVzLWxpc3QvZmF2b3JpdGVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmF2b3JpdGUtdGl0bGUgaDJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxNzBweCAwIDEycHggMDtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG4uZmF2b3JpdGUtbGlzdCB7XG4gIG1hcmdpbi10b3A6IDY2cHg7XG59XG5cbi5mYXZvcml0ZS1saXN0IGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzAwN0JGRjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG4uZmF2b3JpdGUtbGlzdCBidXR0b24ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzOUMxRDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-favorites-list',
                templateUrl: './favorites-list.component.html',
                styleUrls: ['./favorites-list.component.scss']
            }]
    }], function () { return [{ type: _service_favorites_manager_services__WEBPACK_IMPORTED_MODULE_1__["FavoriteManagerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_vegan_details_service__WEBPACK_IMPORTED_MODULE_3__["VeganDetailsService"] }]; }, null); })();


/***/ }),

/***/ "Km2g":
/*!*********************************************!*\
  !*** ./src/app/modules/shop/shop.module.ts ***!
  \*********************************************/
/*! exports provided: ShopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopModule", function() { return ShopModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shop_list_shop_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop-list/shop-list.component */ "OMjj");




class ShopModule {
}
ShopModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShopModule });
ShopModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShopModule_Factory(t) { return new (t || ShopModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShopModule, { declarations: [_shop_list_shop_list_component__WEBPACK_IMPORTED_MODULE_2__["ShopListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_shop_list_shop_list_component__WEBPACK_IMPORTED_MODULE_2__["ShopListComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "NHfp":
/*!*****************************************************!*\
  !*** ./src/app/modules/home/body/body.component.ts ***!
  \*****************************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _apiServices_restaurants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apiServices/restaurants.service */ "hdaJ");
/* harmony import */ var _apiServices_recepee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../apiServices/recepee.service */ "qBBi");
/* harmony import */ var _apiServices_shops_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../apiServices/shops.service */ "cwam");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _apiServices_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../apiServices/common.service */ "qGym");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _generic_components_module_vegan_cards_vegan_cards_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../generic-components-module/vegan-cards/vegan-cards.component */ "rqev");













class BodyComponent {
    constructor(restaurantService, recepeeService, shopsService, router, commonService) {
        this.restaurantService = restaurantService;
        this.recepeeService = recepeeService;
        this.shopsService = shopsService;
        this.router = router;
        this.commonService = commonService;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.data = [];
    }
    ngOnInit() {
        let title = 'Angular Google Maps Example';
        let lat = 48.8534;
        let lng = 2.3488;
        let myCurrentPosition = { lat: null, lng: null };
        // restaurants
        this.subscription = this.restaurantService.getRestaurants().subscribe((restaurantList) => {
            this.restaurantList = restaurantList;
        }, (error) => {
            window.alert('Impossible dafficher les restaurants');
            console.log('errror on loading restaurants', error);
        }, () => {
            console.log('restaurantsList', this.restaurantList);
        });
        console.log('restaurants', this.restaurantList);
        // Recepee
        this.recepeeSubscription = this.recepeeService.getRecepee().subscribe((recepeeList) => {
            this.recepeeList = recepeeList;
        }, (error) => {
            window.alert('impossible dafficher les recettes');
            console.log(error);
        }, () => {
            console.log('recepeeList', this.recepeeList);
        });
        this.shopSubcription = this.shopsService.getShops().subscribe((shopList) => {
            this.shopList = shopList;
        }, (error) => {
            window.alert('impossible dafficher les boutiques');
            console.log(error);
        }, () => {
            console.log('shopList', this.shopList);
        });
    }
    dispayDistributionAround() {
        this.router.navigate(['/map']);
    }
    getText(event) {
        this.inputSearchValue = event.target.value;
        this.commonService.setSearchText(this.inputSearchValue);
        this.router.navigate(['/map']);
    }
}
BodyComponent.ɵfac = function BodyComponent_Factory(t) { return new (t || BodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apiServices_restaurants_service__WEBPACK_IMPORTED_MODULE_2__["RestaurantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apiServices_recepee_service__WEBPACK_IMPORTED_MODULE_3__["RecepeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apiServices_shops_service__WEBPACK_IMPORTED_MODULE_4__["ShopsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apiServices_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"])); };
BodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BodyComponent, selectors: [["app-body"]], decls: 39, vars: 3, consts: [[1, "container-fluid"], [1, "row"], [1, "col-lg-12", "no-padding"], [1, "banner"], ["src", "assets/imgs/banner.jpg"], [1, "col-lg-12"], [1, "search-field"], ["appearance", "outline"], ["matInput", "", "placeholder", "Entrer une ville ou region", 3, "keyup.enter"], ["mat-raised-button", "", 3, "click"], [1, "col-lg-12", "offset-lg-11", "col-12", "offset-11", "offset-sm-5", "mt-5"], [1, "last-news-title"], [1, "col-lg-4", "mt-5"], [1, "recipe-title"], [3, "veganInformations"]], template: function BodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Location des distributions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function BodyComponent_Template_input_keyup_enter_10_listener($event) { return ctx.getText($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BodyComponent_Template_button_click_11_listener() { return ctx.dispayDistributionAround(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Carte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Les derni\u00E8res actualit\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Recettes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-vegan-cards", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Magasins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-vegan-cards", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Restaurants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-vegan-cards", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("veganInformations", ctx.recepeeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("veganInformations", ctx.shopList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("veganInformations", ctx.restaurantList);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _generic_components_module_vegan_cards_vegan_cards_component__WEBPACK_IMPORTED_MODULE_11__["VeganCardsComponent"]], styles: [".banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n   width: 100%;\n}\n\n.search-field[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    top: -226px;\n    right: -170px;\n}\n\n.search-field[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 577px;\n  z-index: 1;\n}\n\n.search-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    height: 43px;\n    width: 167px;\n    border-radius: 50px;\n    background-color: #439C1D;\n    color: white;\n}\n\n.last-news-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 48px;\n    font-family: 'Montserrat', sans-serif;\n    text-align: center;\n}\n\n.recipe-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 0;\n}\n\nmat-divider[_ngcontent-%COMP%] {\n   background: #439C1D;\n   width: 1439px;\n}\n\n.recipes-list[_ngcontent-%COMP%] {\n    margin-top: 30px;\n}\n\n.recipes[_ngcontent-%COMP%] {\n    width: 225px;\n    height: 344.38px;\n    border: 1px solid #439C1D;\n}\n\n.recipes-header[_ngcontent-%COMP%] {\n    width: 225px;\n    height: 34.44px;\n    background-color: #439C1D;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.recipes-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: white;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: bold;\n    margin: 0;\n}\n\n.container-picture[_ngcontent-%COMP%] {\n    width: 162.9px;\n    height: 154.48px;\n    border: 1px solid #439C1D;\n    margin: 20px 0px 0px 30px;\n}\n\n.container-picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 162.9px;\n    height: 154.48px;\n}\n\n.short-description[_ngcontent-%COMP%] {\n    width: 163px;\n    height: 75px;\n    margin: 20px 0px 0px 30px;\n}\n\n.short-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 15px 0 0 0;\n  font-family: 'Montserrat',sans-serif;\n  font-size: 14px;\n}\n\n.see-description-button[_ngcontent-%COMP%] {\n    float: right;\n    position: relative;\n    top: 10px;\n    right: 10px;\n}\n\n.see-description-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 26px;\n    background: #439C1D;\n    border-radius: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    outline: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2JvZHkvYm9keS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csV0FBVztBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQ0FBcUM7SUFDckMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0dBQ0csbUJBQW1CO0dBQ25CLGFBQWE7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxpQkFBaUI7SUFDakIsU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxlQUFlO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ib2R5L2JvZHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXIgaW1nIHtcbiAgIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VhcmNoLWZpZWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMjI2cHg7XG4gICAgcmlnaHQ6IC0xNzBweDtcbn1cblxuLnNlYXJjaC1maWVsZCBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA1NzdweDtcbiAgei1pbmRleDogMTtcbn1cblxuLnNlYXJjaC1maWVsZCBidXR0b24ge1xuICAgIGhlaWdodDogNDNweDtcbiAgICB3aWR0aDogMTY3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM5QzFEO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxhc3QtbmV3cy10aXRsZSBoMSB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmVjaXBlLXRpdGxlIGgyIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbm1hdC1kaXZpZGVyIHtcbiAgIGJhY2tncm91bmQ6ICM0MzlDMUQ7XG4gICB3aWR0aDogMTQzOXB4O1xufVxuXG4ucmVjaXBlcy1saXN0IHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ucmVjaXBlcyB7XG4gICAgd2lkdGg6IDIyNXB4O1xuICAgIGhlaWdodDogMzQ0LjM4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQzOUMxRDtcbn1cblxuLnJlY2lwZXMtaGVhZGVyIHtcbiAgICB3aWR0aDogMjI1cHg7XG4gICAgaGVpZ2h0OiAzNC40NHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzlDMUQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucmVjaXBlcy1oZWFkZXIgaDMge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmNvbnRhaW5lci1waWN0dXJlIHtcbiAgICB3aWR0aDogMTYyLjlweDtcbiAgICBoZWlnaHQ6IDE1NC40OHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MzlDMUQ7XG4gICAgbWFyZ2luOiAyMHB4IDBweCAwcHggMzBweDtcbn1cblxuLmNvbnRhaW5lci1waWN0dXJlIGltZyB7XG4gICAgd2lkdGg6IDE2Mi45cHg7XG4gICAgaGVpZ2h0OiAxNTQuNDhweDtcbn1cblxuLnNob3J0LWRlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogMTYzcHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIG1hcmdpbjogMjBweCAwcHggMHB4IDMwcHg7XG59XG5cbi5zaG9ydC1kZXNjcmlwdGlvbiBwIHtcbiAgbWFyZ2luOiAxNXB4IDAgMCAwO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnNlZS1kZXNjcmlwdGlvbi1idXR0b24ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xufVxuXG4uc2VlLWRlc2NyaXB0aW9uLWJ1dHRvbiBidXR0b24ge1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogMjZweDtcbiAgICBiYWNrZ3JvdW5kOiAjNDM5QzFEO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-body',
                templateUrl: './body.component.html',
                styleUrls: ['./body.component.css']
            }]
    }], function () { return [{ type: _apiServices_restaurants_service__WEBPACK_IMPORTED_MODULE_2__["RestaurantsService"] }, { type: _apiServices_recepee_service__WEBPACK_IMPORTED_MODULE_3__["RecepeeService"] }, { type: _apiServices_shops_service__WEBPACK_IMPORTED_MODULE_4__["ShopsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _apiServices_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "OMjj":
/*!***************************************************************!*\
  !*** ./src/app/modules/shop/shop-list/shop-list.component.ts ***!
  \***************************************************************/
/*! exports provided: ShopListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopListComponent", function() { return ShopListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _apiServices_shop_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apiServices/shop-service.service */ "ciwe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ShopListComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopListComponent_li_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const item_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.delete(item_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r5.description, "x ", item_r5.name, " ");
} }
class ShopListComponent {
    constructor(shopService) {
        this.shopService = shopService;
    }
    ngOnInit() {
        this.shopService.getShopItem().subscribe((items) => this.items = items, (error) => this.error = error);
    }
    add(itemName, itemDescription, itemTown, itemZipCode) {
        this.shopService.createShopItem(itemName, itemDescription, itemTown, itemZipCode).subscribe((item) => this.items.push(item));
    }
    delete(id) {
        this.shopService.deleteShopItem(id).subscribe((success) => this.items.splice(this.items.findIndex(item => item.id === id)));
    }
}
ShopListComponent.ɵfac = function ShopListComponent_Factory(t) { return new (t || ShopListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apiServices_shop_service_service__WEBPACK_IMPORTED_MODULE_1__["ShopServiceService"])); };
ShopListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShopListComponent, selectors: [["app-shop-list"]], decls: 16, vars: 2, consts: [[2, "text-align", "center"], [4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Qtd"], ["itemDescription", ""], ["type", "text", "placeholder", "Name"], ["itemName", ""], ["type", "text", "placeholder", "Town"], ["itemTown", ""], ["type", "text", "placeholder", "ZIP"], ["itemZipCode", ""], [3, "click"]], template: function ShopListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Shop List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShopListComponent_li_4_Template, 5, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopListComponent_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx.add(_r2.value, _r1.value, _r3.value, _r4.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.error == null ? null : ctx.error.message, "\n");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9zaG9wLWxpc3Qvc2hvcC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shop-list',
                templateUrl: './shop-list.component.html',
                styleUrls: ['./shop-list.component.css']
            }]
    }], function () { return [{ type: _apiServices_shop_service_service__WEBPACK_IMPORTED_MODULE_1__["ShopServiceService"] }]; }, null); })();


/***/ }),

/***/ "OPTl":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/generic-components-module/generic-components.component.ts ***!
  \***********************************************************************************/
/*! exports provided: GenericComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericComponent", function() { return GenericComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GenericComponent {
    constructor() { }
    ngOnInit() {
    }
}
GenericComponent.ɵfac = function GenericComponent_Factory(t) { return new (t || GenericComponent)(); };
GenericComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GenericComponent, selectors: [["app-generic-components"]], decls: 2, vars: 0, template: function GenericComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "generic-components works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ2VuZXJpYy1jb21wb25lbnRzLW1vZHVsZS9nZW5lcmljLWNvbXBvbmVudHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenericComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-generic-components',
                templateUrl: './generic-components.component.html',
                styleUrls: ['./generic-components.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OT9w":
/*!*****************************************************************!*\
  !*** ./src/app/modules/registration/signup/signup.component.ts ***!
  \*****************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! codelyzer/util/isNotNullOrUndefined */ "pfSe");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apiServices_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apiServices/auth.service */ "k1qI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _apiServices_form_control_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../apiServices/form-control.service */ "blLT");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");













function SignupComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Minimum 4 charactors needed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Minimum 8 charactors needed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "At least one number required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "At least one capital case.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SignupComponent {
    constructor(authService, router, formControlService) {
        this.authService = authService;
        this.router = router;
        this.formControlService = formControlService;
    }
    ngOnInit() {
    }
    submit() {
        return;
    }
    signup(username, email, password1, password2) {
        this.authService.signup(username, email, password1, password2).subscribe((response) => {
            window.alert('Welcome, you can now log in');
            this.router.navigate(['login']);
        }, (error) => {
            console.log('erreur', error);
            if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_1__["isNotNullOrUndefined"])(error.error.email)) {
                window.alert(`error: ${error.error.email} try again`);
            }
            if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_1__["isNotNullOrUndefined"])(error.e.username)) {
                window.alert(`error: ${error.error.email} try again`);
            }
            if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_1__["isNotNullOrUndefined"])(error.error.global[0])) {
                window.alert(error.error.global[0]);
            }
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apiServices_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apiServices_form_control_service__WEBPACK_IMPORTED_MODULE_4__["FormControlService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 27, vars: 7, consts: [["fxLayoutAlign", "center center", "fxFlexFill", "", 1, "main-div"], ["fxFlex", "25"], [1, "toolbar-green"], ["fxLayoutAlign", "stretch", "fxLayout", "column", 1, "login-form", 3, "formGroup", "submit"], ["matInput", "", "placeholder", "Username", "formControlName", "username"], ["username", ""], [4, "ngIf"], ["matInput", "", "placeholder", "email", "formControlName", "email"], ["email", ""], ["matInput", "", "placeholder", "choose a password", "type", "password", "formControlName", "password"], ["password1", ""], ["matInput", "", "placeholder", "confirm Password", "type", "password"], ["password2", ""], [1, "green-button", 3, "click"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SignupComponent_Template_form_submit_4_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SignupComponent_mat_error_8_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SignupComponent_mat_error_9_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Invalid email address.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SignupComponent_mat_error_18_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignupComponent_mat_error_19_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SignupComponent_mat_error_20_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SignupComponent_mat_error_21_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return ctx.signup(_r0.value, _r3.value, _r4.value, _r9.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formControlService.signUpForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formControlService.signUpForm.controls["username"].errors == null ? null : ctx.formControlService.signUpForm.controls["username"].errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formControlService.signUpForm.controls["username"].errors == null ? null : ctx.formControlService.signUpForm.controls["username"].errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formControlService.signUpForm.controls["password"].errors == null ? null : ctx.formControlService.signUpForm.controls["password"].errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formControlService.signUpForm.controls["password"].errors == null ? null : ctx.formControlService.signUpForm.controls["password"].errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formControlService.signUpForm.controls["password"].errors == null ? null : ctx.formControlService.signUpForm.controls["password"].errors.hasNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formControlService.signUpForm.controls["password"].errors == null ? null : ctx.formControlService.signUpForm.controls["password"].errors.hasCapitalCase);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexFillDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]], styles: [".main-div[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n    padding: 0px;\n}\n\n.login-form[_ngcontent-%COMP%] {\npadding: 20px;\n}\n\n.mat-toolbar[_ngcontent-%COMP%]{\n\n    background: #439C1D!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZWdpc3RyYXRpb24vc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7SUFFSSw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3JlZ2lzdHJhdGlvbi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1kaXYgbWF0LWNhcmQge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLmxvZ2luLWZvcm0ge1xucGFkZGluZzogMjBweDtcbn1cblxuLm1hdC10b29sYmFye1xuXG4gICAgYmFja2dyb3VuZDogIzQzOUMxRCFpbXBvcnRhbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: _apiServices_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _apiServices_form_control_service__WEBPACK_IMPORTED_MODULE_4__["FormControlService"] }]; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_browser_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/browser/navigation.component */ "6FYG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-browser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_shared_browser_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "THjO":
/*!*********************************************************!*\
  !*** ./src/app/modules/home/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 0, template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "header works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Xbeu":
/*!********************************************************************************!*\
  !*** ./src/app/modules/generic-components-module/generic-components.module.ts ***!
  \********************************************************************************/
/*! exports provided: GenericComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericComponentsModule", function() { return GenericComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _generic_components_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generic-components.component */ "OPTl");
/* harmony import */ var _generic_components_module_vegan_details_vegan_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generic-components-module/vegan-details/vegan-details.component */ "pjXi");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _generic_components_module_favorites_list_favorites_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../generic-components-module/favorites-list/favorites-list.component */ "IxbX");
/* harmony import */ var _service_favorites_manager_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/favorites-manager.services */ "sL5/");
/* harmony import */ var _service_vegan_details_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../service/vegan-details.service */ "neZ6");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
















const routes = [
    { path: 'recipeDetails/:id/:title', component: _generic_components_module_vegan_details_vegan_details_component__WEBPACK_IMPORTED_MODULE_6__["VeganDetailsComponent"] },
    { path: 'shopDetails/:id/:title', component: _generic_components_module_vegan_details_vegan_details_component__WEBPACK_IMPORTED_MODULE_6__["VeganDetailsComponent"] },
    { path: 'restaurantDetails/:id/:title', component: _generic_components_module_vegan_details_vegan_details_component__WEBPACK_IMPORTED_MODULE_6__["VeganDetailsComponent"] },
];
class GenericComponentsModule {
}
GenericComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GenericComponentsModule });
GenericComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GenericComponentsModule_Factory(t) { return new (t || GenericComponentsModule)(); }, providers: [_service_favorites_manager_services__WEBPACK_IMPORTED_MODULE_11__["FavoriteManagerService"], _service_vegan_details_service__WEBPACK_IMPORTED_MODULE_12__["VeganDetailsService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GenericComponentsModule, { declarations: [_generic_components_component__WEBPACK_IMPORTED_MODULE_5__["GenericComponent"],
        _generic_components_module_vegan_details_vegan_details_component__WEBPACK_IMPORTED_MODULE_6__["VeganDetailsComponent"],
        _generic_components_module_favorites_list_favorites_list_component__WEBPACK_IMPORTED_MODULE_10__["FavoritesListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"]], exports: [_generic_components_component__WEBPACK_IMPORTED_MODULE_5__["GenericComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenericComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _generic_components_component__WEBPACK_IMPORTED_MODULE_5__["GenericComponent"],
                    _generic_components_module_vegan_details_vegan_details_component__WEBPACK_IMPORTED_MODULE_6__["VeganDetailsComponent"],
                    _generic_components_module_favorites_list_favorites_list_component__WEBPACK_IMPORTED_MODULE_10__["FavoritesListComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"]
                ],
                providers: [_service_favorites_manager_services__WEBPACK_IMPORTED_MODULE_11__["FavoriteManagerService"], _service_vegan_details_service__WEBPACK_IMPORTED_MODULE_12__["VeganDetailsService"]],
                exports: [
                    _generic_components_component__WEBPACK_IMPORTED_MODULE_5__["GenericComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _modules_registration_registration_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/registration/registration.module */ "z2j9");
/* harmony import */ var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/home/home.module */ "iydT");
/* harmony import */ var _modules_shop_shop_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/shop/shop.module */ "Km2g");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_browser_navigation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/browser/navigation.module */ "FiUw");
/* harmony import */ var _app_modules_generic_components_module_generic_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/modules/generic-components-module/generic-components.module */ "Xbeu");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _modules_generic_components_module_vegan_cards_vegan_cards_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/generic-components-module/vegan-cards/vegan-cards.component */ "rqev");
/* harmony import */ var _modules_home_body_body_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/home/body/body.component */ "NHfp");
/* harmony import */ var _apiServices_shop_service_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./apiServices/shop-service.service */ "ciwe");
/* harmony import */ var _apiServices_form_control_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./apiServices/form-control.service */ "blLT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _apiServices_auth_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./apiServices/auth.service */ "k1qI");
/* harmony import */ var _apimap_apimap_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./apimap/apimap.component */ "aQD3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _modules_popup_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./modules/popup/pop-up/pop-up.component */ "EY85");
/* harmony import */ var _modules_restaurants_restaurants_list_restaurants_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./modules/restaurants/restaurants-list/restaurants-list.component */ "iYD7");




















//Material















// import { BodyComponent } from './body/body.component';
const routes = [
    // { path: '', redirectTo: '/first', pathMatch: 'full' },
    {
        path: '',
        component: _modules_home_body_body_component__WEBPACK_IMPORTED_MODULE_15__["BodyComponent"]
    },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _apiServices_shop_service_service__WEBPACK_IMPORTED_MODULE_16__["ShopServiceService"],
        _apiServices_auth_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"],
        _apiServices_auth_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"],
        _apiServices_form_control_service__WEBPACK_IMPORTED_MODULE_17__["FormControlService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: _apiServices_auth_service__WEBPACK_IMPORTED_MODULE_25__["AuthInterceptor"],
            multi: true,
        }
    ], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
            _modules_registration_registration_module__WEBPACK_IMPORTED_MODULE_3__["RegistrationModule"],
            _modules_home_home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"],
            _modules_shop_shop_module__WEBPACK_IMPORTED_MODULE_5__["ShopModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_24__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyAABqwkqj04XsQ01mQ2X7m-GYDmjtoPLqk',
                libraries: ['places']
            }),
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
            _modules_home_home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__["MatDividerModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
            _app_modules_generic_components_module_generic_components_module__WEBPACK_IMPORTED_MODULE_9__["GenericComponentsModule"],
            _shared_browser_navigation_module__WEBPACK_IMPORTED_MODULE_8__["NavigationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
        _apimap_apimap_component__WEBPACK_IMPORTED_MODULE_26__["ApimapComponent"],
        _modules_generic_components_module_vegan_cards_vegan_cards_component__WEBPACK_IMPORTED_MODULE_14__["VeganCardsComponent"],
        _modules_popup_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_30__["PopUpComponent"],
        _modules_home_body_body_component__WEBPACK_IMPORTED_MODULE_15__["BodyComponent"],
        _modules_restaurants_restaurants_list_restaurants_list_component__WEBPACK_IMPORTED_MODULE_31__["RestaurantsListComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
        _modules_registration_registration_module__WEBPACK_IMPORTED_MODULE_3__["RegistrationModule"],
        _modules_home_home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"],
        _modules_shop_shop_module__WEBPACK_IMPORTED_MODULE_5__["ShopModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _agm_core__WEBPACK_IMPORTED_MODULE_24__["AgmCoreModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
        _modules_home_home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__["MatDividerModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
        _app_modules_generic_components_module_generic_components_module__WEBPACK_IMPORTED_MODULE_9__["GenericComponentsModule"],
        _shared_browser_navigation_module__WEBPACK_IMPORTED_MODULE_8__["NavigationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                    _apimap_apimap_component__WEBPACK_IMPORTED_MODULE_26__["ApimapComponent"],
                    _modules_generic_components_module_vegan_cards_vegan_cards_component__WEBPACK_IMPORTED_MODULE_14__["VeganCardsComponent"],
                    _modules_popup_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_30__["PopUpComponent"],
                    _modules_home_body_body_component__WEBPACK_IMPORTED_MODULE_15__["BodyComponent"],
                    _modules_restaurants_restaurants_list_restaurants_list_component__WEBPACK_IMPORTED_MODULE_31__["RestaurantsListComponent"]
                ],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
                    _modules_registration_registration_module__WEBPACK_IMPORTED_MODULE_3__["RegistrationModule"],
                    _modules_home_home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"],
                    _modules_shop_shop_module__WEBPACK_IMPORTED_MODULE_5__["ShopModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_24__["AgmCoreModule"].forRoot({
                        apiKey: 'AIzaSyAABqwkqj04XsQ01mQ2X7m-GYDmjtoPLqk',
                        libraries: ['places']
                    }),
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
                    _modules_home_home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__["MatDividerModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
                    _app_modules_generic_components_module_generic_components_module__WEBPACK_IMPORTED_MODULE_9__["GenericComponentsModule"],
                    _shared_browser_navigation_module__WEBPACK_IMPORTED_MODULE_8__["NavigationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"]
                ],
                providers: [
                    _apiServices_shop_service_service__WEBPACK_IMPORTED_MODULE_16__["ShopServiceService"],
                    _apiServices_auth_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"],
                    _apiServices_auth_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"],
                    _apiServices_form_control_service__WEBPACK_IMPORTED_MODULE_17__["FormControlService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                        useClass: _apiServices_auth_service__WEBPACK_IMPORTED_MODULE_25__["AuthInterceptor"],
                        multi: true,
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
                entryComponents: [_modules_popup_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_30__["PopUpComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aQD3":
/*!********************************************!*\
  !*** ./src/app/apimap/apimap.component.ts ***!
  \********************************************/
/*! exports provided: ApimapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApimapComponent", function() { return ApimapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! codelyzer/util/isNotNullOrUndefined */ "pfSe");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apiServices_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apiServices/common.service */ "qGym");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class ApimapComponent {
    constructor(commonService) {
        this.commonService = commonService;
        this.title = 'Angular Google Maps Example';
        this.lat = 48.8534;
        this.lng = 2.3488;
        this.myCurrentPosition = { lat: this.lat, lng: this.lng };
    }
    ngOnInit() {
        this.currentPosition();
        let map;
        let service;
        var paris = new google.maps.LatLng(this.lat, this.lng);
        map = new google.maps.Map(document.getElementById('map'), {
            center: paris,
            zoom: 15
        });
        let infowindow;
        if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_1__["isNotNullOrUndefined"])(this.commonService.getSearchText())) {
            console.log('merde');
            let request = {
                location: paris,
                radius: '500',
                query: this.commonService.getSearchText(),
                type: 'vegan'
            };
            service = new google.maps.places.PlacesService(map);
            service.textSearch(request, callback);
            function callback(results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (let i = 0; i < results.length; i++) {
                        const place = results[i];
                        console.log('you got it', place);
                    }
                }
            }
        }
    }
    currentPosition() {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            this.myCurrentPosition = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
        });
    }
}
ApimapComponent.ɵfac = function ApimapComponent_Factory(t) { return new (t || ApimapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apiServices_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"])); };
ApimapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApimapComponent, selectors: [["app-apimap"]], decls: 5, vars: 4, consts: [[3, "latitude", "longitude"], [1, "back-to-home"], ["routerLink", "/"]], template: function ApimapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "agm-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "agm-marker", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " <- Retour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.myCurrentPosition.lat)("longitude", ctx.myCurrentPosition.lng);
    } }, directives: [_agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMarker"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["agm-map[_ngcontent-%COMP%] {\n  height: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBpbWFwL2FwaW1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBpbWFwL2FwaW1hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gIGhlaWdodDogNjAwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApimapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-apimap',
                templateUrl: './apimap.component.html',
                styleUrls: ['./apimap.component.css']
            }]
    }], function () { return [{ type: _apiServices_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "blLT":
/*!*****************************************************!*\
  !*** ./src/app/apiServices/form-control.service.ts ***!
  \*****************************************************/
/*! exports provided: FormControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlService", function() { return FormControlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class FormControlService {
    constructor(fb) {
        this.fb = fb;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                FormControlService.patternValidator(/\d/, { hasNumber: true }),
                FormControlService.patternValidator(/[A-Z]/, { hasCapitalCase: true })])),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, FormControlService.passwordMatchValidator]),
        });
        this.addingItemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(20)]),
        });
    }
    // tslint:disable-next-line:typedef
    initializeLoginForm() {
        this.loginForm.setValue({
            userName: '',
            password: ''
        });
    }
    // tslint:disable-next-line:typedef
    initializeSignUpForm() {
        this.signUpForm.setValue({
            userName: '',
            password: '',
            email: '',
            confirmPassword: ''
        });
    }
    static patternValidator(regex, error) {
        return (control) => {
            if (!control.value) {
                return null;
            }
            const valid = regex.test(control.value);
            return valid ? null : error;
        };
    }
    static passwordMatchValidator(control) {
        const password = control.get('password').value;
        const confirmPassword = control.get('confirmPassword').value;
        if (password !== confirmPassword) {
            control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
        }
    }
}
FormControlService.ɵfac = function FormControlService_Factory(t) { return new (t || FormControlService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
FormControlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FormControlService, factory: FormControlService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormControlService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "ciwe":
/*!*****************************************************!*\
  !*** ./src/app/apiServices/shop-service.service.ts ***!
  \*****************************************************/
/*! exports provided: ShopServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopServiceService", function() { return ShopServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ShopServiceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiRoot = 'https://vegan-breath.herokuapp.com/';
    }
    getShopItem() {
        return this.httpClient.get(this.apiRoot.concat('shop-item'));
    }
    createShopItem(name, description, town, zipCode) {
        return this.httpClient.post(this.apiRoot.concat('shopping-item/'), { name, description, town, zipCode });
    }
    deleteShopItem(id) {
        return this.httpClient.delete(this.apiRoot.concat(`shopping-item/${id}/`));
    }
}
ShopServiceService.ɵfac = function ShopServiceService_Factory(t) { return new (t || ShopServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ShopServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShopServiceService, factory: ShopServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "cwam":
/*!**********************************************!*\
  !*** ./src/app/apiServices/shops.service.ts ***!
  \**********************************************/
/*! exports provided: ShopsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopsService", function() { return ShopsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ShopsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiRoot = 'https://vegan-breath.herokuapp.com/';
    }
    getShops() {
        return this.httpClient.get(this.apiRoot.concat('api/vegan/lastShop'));
    }
    getAllShops() {
        return this.httpClient.get(this.apiRoot.concat('api/vegan/shops'));
    }
    getById(id) {
        return this.httpClient.get(this.apiRoot.concat(`api/vegan/shopDetails/${id}`));
    }
    addShops(title, email, picture, description) {
        return this.httpClient.post(this.apiRoot.concat('api/vegan/addShop'), { title, email, picture, description });
    }
}
ShopsService.ɵfac = function ShopsService_Factory(t) { return new (t || ShopsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ShopsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShopsService, factory: ShopsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "hdaJ":
/*!****************************************************!*\
  !*** ./src/app/apiServices/restaurants.service.ts ***!
  \****************************************************/
/*! exports provided: RestaurantsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsService", function() { return RestaurantsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class RestaurantsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiRoot = 'https://vegan-breath.herokuapp.com/';
    }
    getRestaurants() {
        return this.httpClient.get(this.apiRoot.concat('api/vegan/lastRestaurants'));
    }
    getById(id) {
        return this.httpClient.get(this.apiRoot.concat(`api/vegan/restaurantDetails/${id}`));
    }
    getAllRestaurants() {
        return this.httpClient.get(this.apiRoot.concat('api/vegan/restaurants'));
    }
    addRestaurant(title, email, picture, description) {
        return this.httpClient.post(this.apiRoot.concat('api/vegan/addRestaurants'), { title, email, picture, description });
    }
}
RestaurantsService.ɵfac = function RestaurantsService_Factory(t) { return new (t || RestaurantsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RestaurantsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RestaurantsService, factory: RestaurantsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestaurantsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "iYD7":
/*!************************************************************************************!*\
  !*** ./src/app/modules/restaurants/restaurants-list/restaurants-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: RestaurantsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsListComponent", function() { return RestaurantsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _apiServices_restaurants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apiServices/restaurants.service */ "hdaJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");






function RestaurantsListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const detail_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", detail_r1.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detail_r1.description, " ");
} }
class RestaurantsListComponent {
    constructor(restaurantService) {
        this.restaurantService = restaurantService;
    }
    ngOnInit() {
        this.restaurantService.getAllRestaurants().subscribe((data) => {
            this.restaurantList = data;
            console.log(this.restaurantList);
        }),
            (error) => {
                console.log(error);
                window.alert('unable to show restaurants');
            };
    }
}
RestaurantsListComponent.ɵfac = function RestaurantsListComponent_Factory(t) { return new (t || RestaurantsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apiServices_restaurants_service__WEBPACK_IMPORTED_MODULE_1__["RestaurantsService"])); };
RestaurantsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RestaurantsListComponent, selectors: [["app-restaurants-list"]], decls: 3, vars: 1, consts: [[1, "mat-display-1"], [4, "ngFor", "ngForOf"], ["div", "", "fxLayout", "row", "fxLayoutAlign", "space-evenly center", 1, "mat-card"], ["fxFlex", "20"], [1, "image", 3, "src"], ["fxFlex", "30"]], template: function RestaurantsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Toutes les informations sur nos restaurants ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RestaurantsListComponent_div_2_Template, 8, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.restaurantList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"]], styles: [".mat-card[_ngcontent-%COMP%]{\n  margin-top: 30px;\n  background: aliceblue;\n  margin-left: 80px;\n  margin-right: 80px;\n  border: 5px solid #439c1d;\n  border-radius: 25px\n\n}\n\n.mat-display-1[_ngcontent-%COMP%]{\n  text-align: center;\n  margin-top: 20px;\n  -webkit-text-decoration-color: #439c1d;\n          text-decoration-color: #439c1d;\n}\n\n.image[_ngcontent-%COMP%]{\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXN0YXVyYW50cy9yZXN0YXVyYW50cy1saXN0L3Jlc3RhdXJhbnRzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekI7O0FBRUY7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNDQUE4QjtVQUE5Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Jlc3RhdXJhbnRzL3Jlc3RhdXJhbnRzLWxpc3QvcmVzdGF1cmFudHMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJke1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDgwcHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkICM0MzljMWQ7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHhcblxufVxuXG4ubWF0LWRpc3BsYXktMXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICM0MzljMWQ7XG59XG5cbi5pbWFnZXtcbiAgd2lkdGg6IDI1MHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestaurantsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-restaurants-list',
                templateUrl: './restaurants-list.component.html',
                styleUrls: ['./restaurants-list.component.css']
            }]
    }], function () { return [{ type: _apiServices_restaurants_service__WEBPACK_IMPORTED_MODULE_1__["RestaurantsService"] }]; }, null); })();


/***/ }),

/***/ "iydT":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "THjO");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "H8yK");





class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                exports: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "k1qI":
/*!*********************************************!*\
  !*** ./src/app/apiServices/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService, AuthInterceptor, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiRoot = 'https://vegan-breath.herokuapp.com/auth/';
    }
    parseJwt(token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    }
    setSession(authResult) {
        const token = authResult.token;
        const payload = this.parseJwt(token);
        // const payload = <JWTPayload> jwtDecode(token);
        const expiresAt = moment__WEBPACK_IMPORTED_MODULE_1__["unix"](payload.exp);
        localStorage.setItem('token', authResult.token);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    }
    get token() {
        return localStorage.getItem('token');
    }
    login(username, password) {
        return this.httpClient.post(this.apiRoot.concat('login/'), { username, password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => this.setSession(response)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
    }
    signup(username, email, password1, password2) {
        return this.httpClient.post(this.apiRoot.concat('signup/'), { username, email, password1, password2 }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => this.setSession(response)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('expires_at');
    }
    refreshToken() {
        if (moment__WEBPACK_IMPORTED_MODULE_1__().isBetween(this.getExpiration().subtract(1, 'days'), this.getExpiration())) {
            return this.httpClient.post(this.apiRoot.concat('refresh-token/'), { token: this.token }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => this.setSession(response)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])()).subscribe();
        }
    }
    getExpiration() {
        const expiration = localStorage.getItem('expires_at');
        const expiresAt = JSON.parse(expiration);
        return moment__WEBPACK_IMPORTED_MODULE_1__(expiresAt);
    }
    isLoggedIn() {
        return moment__WEBPACK_IMPORTED_MODULE_1__().isBefore(this.getExpiration());
    }
    isLoggedOut() {
        return !this.isLoggedIn();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();
class AuthInterceptor {
    intercept(req, next) {
        const token = localStorage.getItem('token');
        if (token) {
            const cloned = req.clone({
                headers: req.headers.set('Authorization', 'JWT '.concat(token))
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.isLoggedIn()) {
            this.authService.refreshToken();
            return true;
        }
        else {
            this.authService.logout();
            this.router.navigate(['login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: AuthService }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "neZ6":
/*!**************************************************!*\
  !*** ./src/app/service/vegan-details.service.ts ***!
  \**************************************************/
/*! exports provided: VeganDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VeganDetailsService", function() { return VeganDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class VeganDetailsService {
    constructor() {
        this.favoritesListResult = [];
        this.productDetailsList = [
            {
                productDetails: 'recetteDetails',
                recetteDetails: [
                    {
                        id: 0,
                        title: 'Recette 1',
                        picture: 'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
                        subTitle1: 'Ingrédients',
                        informationsList: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
                        subTitle2: 'Réalisation de la recette',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        favoriteState: false
                    },
                    {
                        id: 1,
                        title: 'Recette 2',
                        picture: 'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
                        subTitle1: 'Ingrédients',
                        informationsList: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
                        subTitle2: 'Réalisation de la recette',
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        favoriteState: false
                    },
                    {
                        id: 2,
                        title: 'Recette 3',
                        picture: 'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
                        subTitle1: 'Ingrédients',
                        informationsList: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
                        subTitle2: 'Réalisation de la recette',
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        favoriteState: false
                    },
                    {
                        id: 3,
                        title: 'Recette 4',
                        picture: 'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
                        subTitle1: 'Ingrédients',
                        informationsList: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
                        subTitle2: 'Réalisation de la recette',
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        favoriteState: false
                    }
                ]
            },
            {
                productDetails: 'magasinDetails',
                title1: 'Informations',
                title2: 'Description',
                magasinDetails: [
                    {
                        id: 0,
                        title: 'Magasin 1',
                        picture: 'assets/imgs/mockup-black-t-shirt-Front.jpg',
                        subTitle1: 'Informations du lieux',
                        informationsList: ['Site web', 'Adresse', 'Numéro de téléphone', 'Email', 'Horraire'],
                        subTitle2: 'Description du produit',
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        favoriteState: false
                    },
                    {
                        id: 1,
                        title: 'Magasin 2',
                        picture: 'assets/imgs/mockup-black-t-shirt-Front.jpg',
                        subTitle1: 'Informations du lieux',
                        informationsList: ['Site web', 'Adresse', 'Numéro de téléphone', 'Email', 'Horraire'],
                        subTitle2: 'Description du produit',
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        favoriteState: false
                    },
                    {
                        id: 2,
                        title: 'Magasin 3',
                        picture: 'assets/imgs/Huile_de_noix_de_coco.jpg',
                        subTitle1: 'Informations du lieux',
                        informationsList: ['Site web', 'Adresse', 'Numéro de téléphone', 'Email', 'Horraire'],
                        subTitle2: 'Description du produit',
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        favoriteState: false
                    },
                    {
                        id: 3,
                        title: 'Magasin 4',
                        picture: 'assets/imgs/Huile_de_noix_de_coco.jpg',
                        subTitle1: 'Informations du lieux',
                        informationsList: ['Site web', 'Adresse', 'Numéro de téléphone', 'Email', 'Horraire'],
                        subTitle2: 'Description du produit',
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        favoriteState: false
                    }
                ]
            },
            {
                productDetails: 'restaurantDetails',
                restaurantDetails: [
                    {
                        id: 0,
                        title: 'Restaurant 1',
                        picture: 'assets/imgs/restaurant-449952_1920.jpg',
                    },
                    {
                        id: 1,
                        title: 'Restaurant 2',
                        picture: 'assets/imgs/restaurant-449952_1920.jpg',
                    },
                    {
                        id: 2,
                        title: 'Restaurant 3',
                        picture: 'assets/imgs/restaurant-449952_1920.jpg',
                    },
                    {
                        id: 3,
                        title: 'Restaurant 4',
                        picture: 'assets/imgs/restaurant-449952_1920.jpg',
                    }
                ]
            }
        ];
    }
    getProductDetailsList() {
        return this.productDetailsList;
    }
    changeStateFavorite(productCurrentTittle, index, favoriteState) {
        for (const product of this.productDetailsList) {
            console.log(productCurrentTittle);
            if (productCurrentTittle == product.productDetails) {
                product[productCurrentTittle].find(p => {
                    if (p.id == index) {
                        p.favoriteState = favoriteState;
                        console.log('test');
                    }
                });
            }
        }
    }
    changeTitle(title) {
        const lowerCaseTitle = title.toLowerCase();
        const removeLastChar = lowerCaseTitle.substring(0, lowerCaseTitle.length - 1);
        return removeLastChar + 'Details';
    }
    currentProduct(productCurrentTittle, index, favoriteState) {
        for (const product of this.productDetailsList) {
            console.log(productCurrentTittle);
            if (productCurrentTittle === product.productDetails) {
                return product[productCurrentTittle].find(p => p.id = index);
            }
        }
    }
}
VeganDetailsService.ɵfac = function VeganDetailsService_Factory(t) { return new (t || VeganDetailsService)(); };
VeganDetailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VeganDetailsService, factory: VeganDetailsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VeganDetailsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "pjXi":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/generic-components-module/vegan-details/vegan-details.component.ts ***!
  \********************************************************************************************/
/*! exports provided: VeganDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VeganDetailsComponent", function() { return VeganDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_favorites_manager_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/favorites-manager.services */ "sL5/");
/* harmony import */ var _service_vegan_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/vegan-details.service */ "neZ6");
/* harmony import */ var _apiServices_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../apiServices/common.service */ "qGym");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











function VeganDetailsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VeganDetailsComponent_div_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.printPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "print");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Imprimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "share");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Partager");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VeganDetailsComponent_div_16_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const pda_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.favoriteManager(pda_r1.id, pda_r1.title, pda_r1.favoriteState); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Favoris");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class VeganDetailsComponent {
    constructor(activatedRoute, favoriteManagerService, veganDetailsService, commonService) {
        this.activatedRoute = activatedRoute;
        this.favoriteManagerService = favoriteManagerService;
        this.veganDetailsService = veganDetailsService;
        this.commonService = commonService;
        this.productDetailsArray = [];
    }
    ngOnInit() {
        this.onDisplayDetails();
        this.detailData = this.commonService.getItemDetail();
    }
    onDisplayDetails() {
        this.activatedRoute.paramMap
            .subscribe((res) => {
            this.productDetailsArray = [];
            const currentDetailsResult = this.getCurrentDetails(res.params.id, res.params.title);
            this.productDetailsArray.push(currentDetailsResult);
        });
    }
    getCurrentDetails(id, title) {
        const newTitle = this.veganDetailsService.changeTitle(title);
        const productDetailsList = this.veganDetailsService.getProductDetailsList();
        for (const product of productDetailsList) {
            const idNumber = this.convertStringToInt(id);
            console.log('veganif', newTitle, product.productDetails);
            if (newTitle === product.productDetails) {
                return product[newTitle].find(p => p.id == idNumber);
            }
        }
    }
    //convert the values of type string in int
    convertStringToInt(value) {
        if (value < '1') {
            return parseFloat(value);
        }
        else {
            return parseInt(value, 10);
        }
    }
    favoriteManager(id, title, favoriteState) {
        favoriteState = true;
        const changeTitleResult = this.veganDetailsService.changeTitle(title).replace(/ /g, '');
        this.veganDetailsService.changeStateFavorite(changeTitleResult, id, favoriteState);
        this.favoriteManagerService.setFavoriteStorage({ id: id, title: title, favoriteState: true });
    }
    favoriteState(productDetailsCurrent) {
        const newTitle = this.veganDetailsService.changeTitle(productDetailsCurrent.title).replace(/ /g, '');
        productDetailsCurrent.favoriteState = !productDetailsCurrent.favoriteState;
        if (productDetailsCurrent.favoriteState === true) {
            this.favoriteManagerService.setFavoriteStorage({
                id: productDetailsCurrent.id,
                title: productDetailsCurrent.title,
                favoriteState: productDetailsCurrent.favoriteState
            });
        }
        else {
            this.favoriteManagerService.setFavoriteStorage({
                id: productDetailsCurrent.id,
                title: productDetailsCurrent.title,
                favoriteState: productDetailsCurrent.favoriteState
            });
            this.veganDetailsService.favoritesListResult.splice(productDetailsCurrent.id, 1);
        }
    }
    printPage() {
        window.print();
    }
}
VeganDetailsComponent.ɵfac = function VeganDetailsComponent_Factory(t) { return new (t || VeganDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_favorites_manager_services__WEBPACK_IMPORTED_MODULE_2__["FavoriteManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_vegan_details_service__WEBPACK_IMPORTED_MODULE_3__["VeganDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apiServices_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"])); };
VeganDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VeganDetailsComponent, selectors: [["app-vegan-details"]], decls: 23, vars: 1, consts: [["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu", 1, "image"], ["fxLayout", "row", "fxLayoutAlign", "center center", "class", "image", 4, "ngFor", "ngForOf"], ["routerLink", "/"], ["routerLink", "/favoriteList"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "image"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", ""]], template: function VeganDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "titre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " ici la description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " ici la description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, VeganDetailsComponent_div_16_Template, 13, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " <- Retour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Favoris");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productDetailsArray);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], styles: [".follow-product[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.follow-product[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: #439C1D;\n}\n\n.product-detail-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin: 146px 0 20px 0;\n  text-align: center;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.product-detail-picture[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.product-detail-picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 443px;\n  height: 457px;\n  border: 1px solid #439C1D;\n}\n\n.head-detail-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.ingredients-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 170px 0 12px 0;\n  font-size: 48px;\n  font-weight: 400;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.ingredients-list[_ngcontent-%COMP%] {\n  margin-top: 66px;\n}\n\n.ingredients-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n}\n\n.ingredients-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker {\n  height: 15px !important;\n  width: 15px !important;\n  color: #439C1D;\n}\n\n.making-recipe-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 170px 0 12px 0;\n  font-size: 48px;\n  font-weight: 400;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.making-recipe-description[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.making-recipe-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  margin-top: 66px;\n}\n\n.group-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 66px;\n}\n\n.group-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #439C1D;\n  color: white;\n  border-radius: 0;\n  width: 120px;\n}\n\n.group-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n  margin-right: 8px;\n  filter: invert(100%);\n  -webkit-filter: invert(100%);\n}\n\n.back-to-home[_ngcontent-%COMP%] {\n  margin: 66px 0 20px 0;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\n.image[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmljLWNvbXBvbmVudHMtbW9kdWxlL3ZlZ2FuLWRldGFpbHMvdmVnYW4tZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUFFRjs7QUFDQTtFQUNHLGdCQUFBO0FBRUg7O0FBQ0E7RUFDRSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7QUFFRjs7QUFDQTtFQUNFLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxtRkFBQTtFQUNBLHNCQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ2VuZXJpYy1jb21wb25lbnRzLW1vZHVsZS92ZWdhbi1kZXRhaWxzL3ZlZ2FuLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9sbG93LXByb2R1Y3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG59XG5cbi5mb2xsb3ctcHJvZHVjdCAubWF0LWljb24ge1xuICBjb2xvcjogIzQzOUMxRDtcbn1cbi5wcm9kdWN0LWRldGFpbC10aXRsZSBoMSB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgbWFyZ2luOiAxNDZweCAwIDIwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG4ucHJvZHVjdC1kZXRhaWwtcGljdHVyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvZHVjdC1kZXRhaWwtcGljdHVyZSBpbWcge1xuICB3aWR0aDogNDQzcHg7XG4gIGhlaWdodDogNDU3cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0MzlDMUQ7XG59XG5cbi5oZWFkLWRldGFpbC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmluZ3JlZGllbnRzLXRpdGxlIGgye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTcwcHggMCAxMnB4IDA7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuLmluZ3JlZGllbnRzLWxpc3Qge1xuICAgbWFyZ2luLXRvcDogNjZweDtcbn1cblxuLmluZ3JlZGllbnRzLWxpc3QgbGkge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5pbmdyZWRpZW50cy1saXN0IGxpOjptYXJrZXIge1xuICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDE1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM0MzlDMUQ7XG59XG5cbi5tYWtpbmctcmVjaXBlLXRpdGxlIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDE3MHB4IDAgMTJweCAwO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG5cbi5tYWtpbmctcmVjaXBlLWRlc2NyaXB0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tYWtpbmctcmVjaXBlLWRlc2NyaXB0aW9uIHAge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDY2cHg7XG59XG5cbi5ncm91cC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNjZweDtcbn1cblxuLmdyb3VwLWJ1dHRvbiBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM5QzFEO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLmdyb3VwLWJ1dHRvbiBpbWcge1xuICB3aWR0aDogMjFweDtcbiAgaGVpZ2h0OiAyMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSk7XG59XG5cbi5iYWNrLXRvLWhvbWUge1xuICBtYXJnaW46IDY2cHggMCAyMHB4IDA7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uaW1hZ2V7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMzAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VeganDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vegan-details',
                templateUrl: './vegan-details.component.html',
                styleUrls: ['./vegan-details.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _service_favorites_manager_services__WEBPACK_IMPORTED_MODULE_2__["FavoriteManagerService"] }, { type: _service_vegan_details_service__WEBPACK_IMPORTED_MODULE_3__["VeganDetailsService"] }, { type: _apiServices_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "qBBi":
/*!************************************************!*\
  !*** ./src/app/apiServices/recepee.service.ts ***!
  \************************************************/
/*! exports provided: RecepeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecepeeService", function() { return RecepeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class RecepeeService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiRoot = 'https://vegan-breath.herokuapp.com/';
    }
    getRecepee() {
        return this.httpClient.get(this.apiRoot.concat('api/vegan/lastRecette'));
    }
    getAllRecepee() {
        return this.httpClient.get(this.apiRoot.concat('api/vegan/recettes'));
    }
    addRecepee(title, email, picture, description) {
        return this.httpClient.post(this.apiRoot.concat('api/vegan/addRecette'), { title, email, picture, description });
    }
}
RecepeeService.ɵfac = function RecepeeService_Factory(t) { return new (t || RecepeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RecepeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RecepeeService, factory: RecepeeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecepeeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "qGym":
/*!***********************************************!*\
  !*** ./src/app/apiServices/common.service.ts ***!
  \***********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CommonService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.KEY = 'AIzaSyAABqwkqj04XsQ01mQ2X7m-GYDmjtoPLqk';
        this.listData = [];
    }
    getListData() {
        return this.listData;
    }
    setListData(listData) {
        this.listData = listData;
    }
    getElement() {
        return this.element;
    }
    setElement(element) {
        this.element = element;
    }
    getItemDetail() {
        return this.itemDetail;
    }
    setItemDetail(itemDetail) {
        this.itemDetail = itemDetail;
    }
    getSearchText() {
        return this.searchInput;
    }
    setSearchText(searchInput) {
        this.searchInput = searchInput;
    }
    getPlaces() {
        return this.httpClient.get(`http://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=vegan&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&${this.KEY}
`);
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "rqev":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/generic-components-module/vegan-cards/vegan-cards.component.ts ***!
  \****************************************************************************************/
/*! exports provided: VeganCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VeganCardsComponent", function() { return VeganCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_vegan_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/vegan-details.service */ "neZ6");
/* harmony import */ var _service_favorites_manager_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/favorites-manager.services */ "sL5/");
/* harmony import */ var _apiServices_restaurants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../apiServices/restaurants.service */ "hdaJ");
/* harmony import */ var _apiServices_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../apiServices/common.service */ "qGym");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











function VeganCardsComponent_mat_card_1_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " favorite ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VeganCardsComponent_mat_card_1_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " favorite_border ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VeganCardsComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VeganCardsComponent_mat_card_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const vegan_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.changeFavoriteState(vegan_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VeganCardsComponent_mat_card_1_mat_icon_5_Template, 2, 0, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VeganCardsComponent_mat_card_1_mat_icon_6_Template, 2, 0, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-actions", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VeganCardsComponent_mat_card_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const vegan_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.showDetails(vegan_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Voir d\u00E9tails");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vegan_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vegan_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", vegan_r1.favoriteState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !vegan_r1.favoriteState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", vegan_r1.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", vegan_r1.description, " ");
} }
class VeganCardsComponent {
    constructor(router, veganDetailsService, favoriteManagerService, restaurantService, commonService) {
        this.router = router;
        this.veganDetailsService = veganDetailsService;
        this.favoriteManagerService = favoriteManagerService;
        this.restaurantService = restaurantService;
        this.commonService = commonService;
    }
    ngOnInit() {
    }
    showDetails(vegan) {
        this.restaurantService.getById(vegan.id).subscribe((data) => {
            this.itemDetail = data;
            this.commonService.setItemDetail(this.itemDetail);
            console.log('data', data);
            console.log('veganinformation', this.veganInformations);
        }, (error) => {
            console.log('erreur sur details', error);
            window.alert('impossible de renvoyer les details pour ce restaurant');
        });
        this.router.navigate([`/details`, vegan.id, vegan.title.replace(/ /g, '')]);
    }
    getSettingsFavoris() {
        this.veganDetailsService.favoritesListResult;
    }
    changeFavoriteState(veganProductCurrent) {
        console.log(veganProductCurrent);
        veganProductCurrent.favoriteState = !veganProductCurrent.favoriteState;
        const newTitle = this.veganDetailsService.changeTitle(veganProductCurrent.title).replace(/ /g, '');
        this.veganDetailsService.changeStateFavorite(newTitle, veganProductCurrent.id, veganProductCurrent.favoriteState);
        // tslint:disable-next-line:max-line-length
        this.favoriteManagerService.setFavoriteStorage({ id: veganProductCurrent.id, title: veganProductCurrent.title, favoriteState: veganProductCurrent.favoriteState });
        if (!veganProductCurrent.favoriteState) {
            const newTitle = this.veganDetailsService.changeTitle(veganProductCurrent.title).replace(/ /g, '');
            this.veganDetailsService.changeStateFavorite(newTitle, veganProductCurrent.id, veganProductCurrent.favoriteState);
            this.veganDetailsService.favoritesListResult.splice(veganProductCurrent.id, 1);
        }
    }
}
VeganCardsComponent.ɵfac = function VeganCardsComponent_Factory(t) { return new (t || VeganCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_vegan_details_service__WEBPACK_IMPORTED_MODULE_2__["VeganDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_favorites_manager_services__WEBPACK_IMPORTED_MODULE_3__["FavoriteManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apiServices_restaurants_service__WEBPACK_IMPORTED_MODULE_4__["RestaurantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apiServices_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"])); };
VeganCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VeganCardsComponent, selectors: [["app-vegan-cards"]], inputs: { veganInformations: "veganInformations" }, decls: 2, vars: 1, consts: [[1, "vegan-card-list"], ["class", "vegan-card", 4, "ngFor", "ngForOf"], [1, "vegan-card"], [1, "vegan-card-header"], ["mat-icon-button", "", 3, "click"], ["aria-label", "Example icon-button with a heart icon", 4, "ngIf"], [1, "vegan-card-picture"], [3, "src"], [1, "vegan-card-short-description"], [1, "vegan-card-see-description-button"], ["mat-raised-button", "", 3, "click"], ["aria-label", "Example icon-button with a heart icon"]], template: function VeganCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VeganCardsComponent_mat_card_1_Template, 16, 5, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.veganInformations);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], styles: [".vegan-card-list[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  display: flex;\n  width: 100%;\n}\n\n.vegan-card-list[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  padding: 0px;\n  background-color: white;\n}\n\n.vegan-card[_ngcontent-%COMP%] {\n  width: 225px;\n  height: 344.38px;\n  border: 1px solid #439C1D;\n  margin-right: 20px;\n}\n\n.vegan-card-header[_ngcontent-%COMP%] {\n  width: 225px;\n  height: 34.44px;\n  background-color: #439C1D;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.vegan-card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: bold;\n  margin: 0;\n}\n\n.vegan-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.mat-card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], mat-icon[_ngcontent-%COMP%] {\n  position: relative;\n  right: -12px;\n}\n\n.vegan-card-picture[_ngcontent-%COMP%] {\n  width: 162.9px;\n  height: 154.48px;\n  border: 1px solid #439C1D;\n  margin: 20px 0px 0px 30px;\n}\n\n.vegan-card-picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 162.9px;\n  height: 154.48px;\n}\n\n.vegan-card-short-description[_ngcontent-%COMP%] {\n  width: 163px;\n  height: 75px;\n  margin: 20px 0px 0px 30px;\n}\n\n.vegan-card-short-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 15px 0 0 0;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  color: black;\n}\n\n.vegan-card-see-description-button[_ngcontent-%COMP%] {\n  float: right;\n  position: relative;\n  top: 10px;\n  right: 10px;\n}\n\n.vegan-card-see-description-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 26px;\n  background: #439C1D;\n  border-radius: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  outline: none !important;\n  position: relative;\n  top: -20px;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmljLWNvbXBvbmVudHMtbW9kdWxlL3ZlZ2FuLWNhcmRzL3ZlZ2FuLWNhcmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQUVKOztBQUNBO0VBQ0ksU0FBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2dlbmVyaWMtY29tcG9uZW50cy1tb2R1bGUvdmVnYW4tY2FyZHMvdmVnYW4tY2FyZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVnYW4tY2FyZC1saXN0IHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi52ZWdhbi1jYXJkLWxpc3QgLm1hdC1jYXJkIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4udmVnYW4tY2FyZCB7XG4gICAgd2lkdGg6IDIyNXB4O1xuICAgIGhlaWdodDogMzQ0LjM4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQzOUMxRDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi52ZWdhbi1jYXJkLWhlYWRlciB7XG4gICAgd2lkdGg6IDIyNXB4O1xuICAgIGhlaWdodDogMzQuNDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM5QzFEO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnZlZ2FuLWNhcmQtaGVhZGVyIGgzIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi52ZWdhbi1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLm1hdC1jYXJkLWhlYWRlciBidXR0b24sIG1hdC1pY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IC0xMnB4O1xufVxuXG4udmVnYW4tY2FyZC1waWN0dXJlIHtcbiAgICB3aWR0aDogMTYyLjlweDtcbiAgICBoZWlnaHQ6IDE1NC40OHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MzlDMUQ7XG4gICAgbWFyZ2luOiAyMHB4IDBweCAwcHggMzBweDtcbn1cblxuLnZlZ2FuLWNhcmQtcGljdHVyZSBpbWcge1xuICAgIHdpZHRoOiAxNjIuOXB4O1xuICAgIGhlaWdodDogMTU0LjQ4cHg7XG59XG5cbi52ZWdhbi1jYXJkLXNob3J0LWRlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogMTYzcHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIG1hcmdpbjogMjBweCAwcHggMHB4IDMwcHg7XG59XG5cbi52ZWdhbi1jYXJkLXNob3J0LWRlc2NyaXB0aW9uIHAge1xuICBtYXJnaW46IDE1cHggMCAwIDA7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsc2Fucy1zZXJpZjsgIFxuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnZlZ2FuLWNhcmQtc2VlLWRlc2NyaXB0aW9uLWJ1dHRvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG59XG5cbi52ZWdhbi1jYXJkLXNlZS1kZXNjcmlwdGlvbi1idXR0b24gYnV0dG9uIHtcbiAgICB3aWR0aDogOTBweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgYmFja2dyb3VuZDogIzQzOUMxRDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTIwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VeganCardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vegan-cards',
                templateUrl: './vegan-cards.component.html',
                styleUrls: ['./vegan-cards.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_vegan_details_service__WEBPACK_IMPORTED_MODULE_2__["VeganDetailsService"] }, { type: _service_favorites_manager_services__WEBPACK_IMPORTED_MODULE_3__["FavoriteManagerService"] }, { type: _apiServices_restaurants_service__WEBPACK_IMPORTED_MODULE_4__["RestaurantsService"] }, { type: _apiServices_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }]; }, { veganInformations: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "sL5/":
/*!*******************************************************!*\
  !*** ./src/app/service/favorites-manager.services.ts ***!
  \*******************************************************/
/*! exports provided: FavoriteManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteManagerService", function() { return FavoriteManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FavoriteManagerService {
    constructor() {
        this.favoritesArray = [];
        this.productDetailsUpdate = [];
    }
    setFavoriteStorage(detailsProductCurrent) {
        const checkedFavoriteExist = this.favoritesArray.map((res) => res.title).indexOf(detailsProductCurrent.title);
        console.log(checkedFavoriteExist);
        if (checkedFavoriteExist === -1) {
            console.log(this.favoritesArray);
            this.favoritesArray.push(detailsProductCurrent);
        }
    }
    getFavoriteStorage() {
        return this.favoritesArray;
    }
}
FavoriteManagerService.ɵfac = function FavoriteManagerService_Factory(t) { return new (t || FavoriteManagerService)(); };
FavoriteManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FavoriteManagerService, factory: FavoriteManagerService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoriteManagerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _apiServices_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiServices/auth.service */ "k1qI");
/* harmony import */ var _modules_registration_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/registration/log-in/log-in.component */ "49KJ");
/* harmony import */ var _modules_registration_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/registration/signup/signup.component */ "OT9w");
/* harmony import */ var _apimap_apimap_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apimap/apimap.component */ "aQD3");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _app_modules_generic_components_module_vegan_details_vegan_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/modules/generic-components-module/vegan-details/vegan-details.component */ "pjXi");
/* harmony import */ var _app_modules_generic_components_module_favorites_list_favorites_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/modules/generic-components-module/favorites-list/favorites-list.component */ "IxbX");
/* harmony import */ var _modules_restaurants_restaurants_list_restaurants_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/restaurants/restaurants-list/restaurants-list.component */ "iYD7");
/* harmony import */ var _modules_home_body_body_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/home/body/body.component */ "NHfp");













const routes = [
    {
        path: 'signup',
        component: _modules_registration_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    },
    {
        path: '',
        component: _modules_home_body_body_component__WEBPACK_IMPORTED_MODULE_10__["BodyComponent"],
    },
    {
        path: 'login',
        component: _modules_registration_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__["LogInComponent"]
    },
    {
        path: 'lazyRegistration',
        loadChildren: './modules/registration/registration-routing.module#RegistrationRoutingModule'
    },
    {
        path: 'recepeList',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-recepee-recepee-module */ "modules-recepee-recepee-module").then(__webpack_require__.bind(null, /*! ./modules/recepee/recepee.module */ "4QfD"))
            .then(mod => mod.RecepeeModule),
        canActivate: [_apiServices_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'map',
        component: _apimap_apimap_component__WEBPACK_IMPORTED_MODULE_5__["ApimapComponent"]
    },
    {
        path: 'shopList',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./modules/shop/shop.module */ "Km2g"))
            .then(mod => mod.ShopModule),
    },
    {
        path: 'restaurantList',
        component: _modules_restaurants_restaurants_list_restaurants_list_component__WEBPACK_IMPORTED_MODULE_9__["RestaurantsListComponent"]
    },
    /*{
      path: 'resteurants',
      loadChildren: './modules/restaurants/restaurants-routing.module#RestaurantsRoutingModule'
    },*/
    {
        path: 'details/:id/:title',
        component: _app_modules_generic_components_module_vegan_details_vegan_details_component__WEBPACK_IMPORTED_MODULE_7__["VeganDetailsComponent"]
    },
    {
        path: 'favoriteList',
        component: _app_modules_generic_components_module_favorites_list_favorites_list_component__WEBPACK_IMPORTED_MODULE_8__["FavoritesListComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"]],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "x79X":
/*!************************************************!*\
  !*** ./src/app/models/restaurant.interface.ts ***!
  \************************************************/
/*! exports provided: RestaurantModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantModel", function() { return RestaurantModel; });
class RestaurantModel {
}


/***/ }),

/***/ "z2j9":
/*!*************************************************************!*\
  !*** ./src/app/modules/registration/registration.module.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModule", function() { return RegistrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log-in/log-in.component */ "49KJ");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "OT9w");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");












class RegistrationModule {
}
RegistrationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegistrationModule });
RegistrationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegistrationModule_Factory(t) { return new (t || RegistrationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegistrationModule, { declarations: [_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_2__["LogInComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_2__["LogInComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map