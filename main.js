(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["main"],{

/***/ 658:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 9645);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1126);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppComponent = class AppComponent {
  constructor() {}
  static #_ = this.ctorParameters = () => [];
};
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 1540:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 2327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 1126);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 3615);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 658);
/* harmony import */ var _components_zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/zipcode-entry/zipcode-entry.component */ 7667);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/location.service */ 1354);
/* harmony import */ var _pages_forecasts_page_forecasts_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/forecasts-page/forecasts-page.component */ 3559);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/weather.service */ 5527);
/* harmony import */ var _pages_current_conditions_page_current_conditions_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/current-conditions-page/current-conditions-page.component */ 3820);
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ 410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 8389);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ 5957);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 4252);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/service-worker */ 8713);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 6239);
/* harmony import */ var _interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interceptors/cache.interceptor */ 4329);
/* harmony import */ var _services_cache_resolver_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/cache-resolver.service */ 3295);
/* harmony import */ var _components_forecast_forecast_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/forecast/forecast.component */ 7768);
/* harmony import */ var _pipes_weather_icon_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/weather-icon.pipe */ 9693);
/* harmony import */ var _components_current_condition_current_condition_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/current-condition/current-condition.component */ 4709);
/* harmony import */ var _components_cache_settings_form_cache_settings_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/cache-settings-form/cache-settings-form.component */ 3669);
/* harmony import */ var _containers_cache_settings_cache_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./containers/cache-settings/cache-settings.component */ 2591);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-toastr */ 4466);
/* harmony import */ var _interceptors_error_message_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./interceptors/error-message.interceptor */ 994);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3305);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























const interceptors = [{
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS,
  useClass: _interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_9__.CacheInterceptor,
  multi: true
}, {
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS,
  useClass: _interceptors_error_message_interceptor__WEBPACK_IMPORTED_MODULE_16__.ErrorMessageInterceptor,
  multi: true
}];
let AppModule = class AppModule {};
AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__.ZipcodeEntryComponent, _pages_forecasts_page_forecasts_page_component__WEBPACK_IMPORTED_MODULE_3__.ForecastsPageComponent, _pages_current_conditions_page_current_conditions_page_component__WEBPACK_IMPORTED_MODULE_5__.CurrentConditionsPageComponent, _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__.MainPageComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule, _app_routing__WEBPACK_IMPORTED_MODULE_7__.routing, ngx_toastr__WEBPACK_IMPORTED_MODULE_22__.ToastrModule.forRoot({
    timeOut: 5000,
    progressBar: true,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true
  }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__.ServiceWorkerModule.register('/ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production
  }), _components_forecast_forecast_component__WEBPACK_IMPORTED_MODULE_11__.ForecastComponent, _pipes_weather_icon_pipe__WEBPACK_IMPORTED_MODULE_12__.WeatherIconPipe, _components_current_condition_current_condition_component__WEBPACK_IMPORTED_MODULE_13__.CurrentConditionComponent, _components_cache_settings_form_cache_settings_form_component__WEBPACK_IMPORTED_MODULE_14__.CacheSettingsFormComponent, _containers_cache_settings_cache_settings_component__WEBPACK_IMPORTED_MODULE_15__.CacheSettingsComponent],
  providers: [...interceptors, _services_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService, _services_weather_service__WEBPACK_IMPORTED_MODULE_4__.WeatherService, _services_cache_resolver_service__WEBPACK_IMPORTED_MODULE_10__.CacheResolverService],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
})], AppModule);


/***/ }),

/***/ 5957:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routing: () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 8389);
/* harmony import */ var _pages_forecasts_page_forecasts_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/forecasts-page/forecasts-page.component */ 3559);
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ 410);



const appRoutes = [{
  path: '',
  component: _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent
}, {
  path: 'forecast/:zipcode',
  component: _pages_forecasts_page_forecasts_page_component__WEBPACK_IMPORTED_MODULE_0__.ForecastsPageComponent
}];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, {
  bindToComponentInputs: true
});

/***/ }),

/***/ 3669:
/*!*********************************************************************************!*\
  !*** ./src/app/components/cache-settings-form/cache-settings-form.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheSettingsFormComponent: () => (/* binding */ CacheSettingsFormComponent)
/* harmony export */ });
/* harmony import */ var _cache_settings_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cache-settings-form.component.html?ngResource */ 1518);
/* harmony import */ var _cache_settings_form_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cache-settings-form.component.css?ngResource */ 8126);
/* harmony import */ var _cache_settings_form_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cache_settings_form_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1126);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6140);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3615);
/* harmony import */ var _models_duration_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/duration.model */ 6934);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let CacheSettingsFormComponent = class CacheSettingsFormComponent {
  set duration(duration) {
    this.form.patchValue(duration);
  }
  constructor(fb) {
    this.fb = fb;
    this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.form = this.createForm();
    this.TimeUnit = _models_duration_model__WEBPACK_IMPORTED_MODULE_2__.TimeUnit;
  }
  submit() {
    this.save.emit(this.form.value);
  }
  createForm() {
    return this.fb.group({
      time: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0)]],
      unit: [_models_duration_model__WEBPACK_IMPORTED_MODULE_2__.TimeUnit.HOURS, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NonNullableFormBuilder
  }];
  static #_2 = this.propDecorators = {
    duration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    save: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  };
};
CacheSettingsFormComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-cache-settings-form',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule],
  template: _cache_settings_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_cache_settings_form_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CacheSettingsFormComponent);


/***/ }),

/***/ 4709:
/*!*****************************************************************************!*\
  !*** ./src/app/components/current-condition/current-condition.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionComponent: () => (/* binding */ CurrentConditionComponent)
/* harmony export */ });
/* harmony import */ var _current_condition_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-condition.component.html?ngResource */ 5703);
/* harmony import */ var _current_condition_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-condition.component.css?ngResource */ 1964);
/* harmony import */ var _current_condition_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_current_condition_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1126);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6140);
/* harmony import */ var _pipes_weather_icon_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/weather-icon.pipe */ 9693);
/* harmony import */ var _tabset_tabset_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tabset/tabset.component */ 1008);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 8389);
/* harmony import */ var _tabset_tab_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tabset/tab/tab.component */ 8640);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let CurrentConditionComponent = class CurrentConditionComponent {
  constructor() {
    this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.activeTab = 0;
  }
  static #_ = this.propDecorators = {
    currentConditionsByZip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    remove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
    }]
  };
};
CurrentConditionComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-current-condition',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _pipes_weather_icon_pipe__WEBPACK_IMPORTED_MODULE_2__.WeatherIconPipe, _tabset_tabset_component__WEBPACK_IMPORTED_MODULE_3__.TabsetComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _tabset_tab_tab_component__WEBPACK_IMPORTED_MODULE_4__.TabComponent],
  template: _current_condition_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_current_condition_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CurrentConditionComponent);


/***/ }),

/***/ 7768:
/*!***********************************************************!*\
  !*** ./src/app/components/forecast/forecast.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastComponent: () => (/* binding */ ForecastComponent)
/* harmony export */ });
/* harmony import */ var _forecast_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecast.component.html?ngResource */ 1114);
/* harmony import */ var _forecast_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecast.component.css?ngResource */ 5795);
/* harmony import */ var _forecast_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forecast_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1126);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6140);
/* harmony import */ var _pipes_weather_icon_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/weather-icon.pipe */ 9693);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ForecastComponent = class ForecastComponent {
  static #_ = this.propDecorators = {
    forecast: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: [{
        required: true
      }]
    }]
  };
};
ForecastComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-forecast',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _pipes_weather_icon_pipe__WEBPACK_IMPORTED_MODULE_2__.WeatherIconPipe],
  template: _forecast_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_forecast_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForecastComponent);


/***/ }),

/***/ 8640:
/*!********************************************************!*\
  !*** ./src/app/components/tabset/tab/tab.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabComponent: () => (/* binding */ TabComponent)
/* harmony export */ });
/* harmony import */ var _tab_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.component.html?ngResource */ 8361);
/* harmony import */ var _tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.component.css?ngResource */ 9984);
/* harmony import */ var _tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1126);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6140);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let TabComponent = class TabComponent {
  constructor() {
    this.title = '';
    this.active = false;
  }
  static #_ = this.propDecorators = {
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    order: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
TabComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-tab',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
  template: _tab_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabComponent);


/***/ }),

/***/ 1008:
/*!*******************************************************!*\
  !*** ./src/app/components/tabset/tabset.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsetComponent: () => (/* binding */ TabsetComponent)
/* harmony export */ });
/* harmony import */ var _tabset_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabset.component.html?ngResource */ 3990);
/* harmony import */ var _tabset_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabset.component.css?ngResource */ 9671);
/* harmony import */ var _tabset_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabset_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1126);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6140);
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab/tab.component */ 8640);
/* harmony import */ var _models_position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/position */ 5743);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let TabsetComponent = class TabsetComponent {
  constructor() {
    this.closable = true;
    this.tabChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.tabClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  set tabComponents(tabComponents) {
    this.tabs = tabComponents;
    let activeTab = tabComponents.find(tab => tab.active);
    if (!activeTab && tabComponents.first) {
      this.selectTab(tabComponents.first);
    }
  }
  selectTab(tab) {
    this.tabs.toArray().forEach(tab => tab.active = false);
    tab.active = true;
    this.tabChanged.emit(tab.id);
  }
  closeTab(tab) {
    if (tab.active) {
      const nextTab = this.getNextTab(tab.order, _models_position__WEBPACK_IMPORTED_MODULE_3__.Position.PREVIOUS) || this.getNextTab(tab.order, _models_position__WEBPACK_IMPORTED_MODULE_3__.Position.NEXT);
      if (nextTab) {
        this.selectTab(nextTab);
      }
    }
    this.tabClosed.emit(tab.id);
  }
  getNextTab(order, position) {
    return this.tabs.find(item => item.order === order + position);
  }
  static #_ = this.propDecorators = {
    tabComponents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ContentChildren,
      args: [_tab_tab_component__WEBPACK_IMPORTED_MODULE_2__.TabComponent]
    }],
    closable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    tabChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    tabClosed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  };
};
TabsetComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-tabset',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
  template: _tabset_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tabset_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabsetComponent);


/***/ }),

/***/ 7667:
/*!*********************************************************************!*\
  !*** ./src/app/components/zipcode-entry/zipcode-entry.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipcodeEntryComponent: () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 2647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1126);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/location.service */ 1354);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ZipcodeEntryComponent = class ZipcodeEntryComponent {
  constructor(service) {
    this.service = service;
  }
  addLocation(zipcode) {
    this.service.addLocation(zipcode);
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_location_service__WEBPACK_IMPORTED_MODULE_1__.LocationService
  }];
};
ZipcodeEntryComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-zipcode-entry',
  template: _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], ZipcodeEntryComponent);


/***/ }),

/***/ 2591:
/*!***********************************************************************!*\
  !*** ./src/app/containers/cache-settings/cache-settings.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheSettingsComponent: () => (/* binding */ CacheSettingsComponent)
/* harmony export */ });
/* harmony import */ var _cache_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cache-settings.component.html?ngResource */ 6646);
/* harmony import */ var _cache_settings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cache-settings.component.css?ngResource */ 2202);
/* harmony import */ var _cache_settings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cache_settings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1126);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6140);
/* harmony import */ var _components_cache_settings_form_cache_settings_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/cache-settings-form/cache-settings-form.component */ 3669);
/* harmony import */ var _services_cache_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cache-resolver.service */ 3295);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let CacheSettingsComponent = class CacheSettingsComponent {
  constructor() {
    this.cacheResolverService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_cache_resolver_service__WEBPACK_IMPORTED_MODULE_3__.CacheResolverService);
  }
  saveCacheConfig(duration) {
    this.cacheResolverService.updateCacheConfig({
      duration
    });
    this.dialog.nativeElement.close();
  }
  static #_ = this.propDecorators = {
    dialog: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
      args: ['dialog']
    }]
  };
};
CacheSettingsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-cache-settings',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _components_cache_settings_form_cache_settings_form_component__WEBPACK_IMPORTED_MODULE_2__.CacheSettingsFormComponent],
  template: _cache_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_cache_settings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CacheSettingsComponent);


/***/ }),

/***/ 4329:
/*!***************************************************!*\
  !*** ./src/app/interceptors/cache.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheInterceptor: () => (/* binding */ CacheInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1126);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4252);
/* harmony import */ var _services_cache_resolver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/cache-resolver.service */ 3295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4385);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let CacheInterceptor = class CacheInterceptor {
  constructor() {
    this.cacheResolver = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_cache_resolver_service__WEBPACK_IMPORTED_MODULE_0__.CacheResolverService);
  }
  intercept(req, next) {
    if (req.method !== 'GET') {
      return next.handle(req);
    }
    const cachedResponse = this.cacheResolver.getCachedResponse(req.url);
    return cachedResponse ? (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(cachedResponse) : this.sendRequest(req, next);
  }
  sendRequest(req, next) {
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(event => {
      if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse) {
        this.cacheResolver.updateCache(req.url, event);
      }
    }));
  }
};
CacheInterceptor = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], CacheInterceptor);


/***/ }),

/***/ 994:
/*!***********************************************************!*\
  !*** ./src/app/interceptors/error-message.interceptor.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorMessageInterceptor: () => (/* binding */ ErrorMessageInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1126);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 788);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 3118);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 4466);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ErrorMessageInterceptor = class ErrorMessageInterceptor {
  constructor(toastr) {
    this.toastr = toastr;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(error => {
      this.toastr.error(this.extractErrorMessages(error), 'Error');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => error);
    }));
  }
  extractErrorMessages(error) {
    const message = error.error.message;
    if (message) {
      return message.charAt(0).toUpperCase() + message.slice(1);
    }
    return 'Oops! Something went wrong';
  }
  static #_ = this.ctorParameters = () => [{
    type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService
  }];
};
ErrorMessageInterceptor = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], ErrorMessageInterceptor);


/***/ }),

/***/ 6934:
/*!******************************************!*\
  !*** ./src/app/models/duration.model.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeUnit: () => (/* binding */ TimeUnit)
/* harmony export */ });
var TimeUnit;
(function (TimeUnit) {
  TimeUnit[TimeUnit["SECONDS"] = 1000] = "SECONDS";
  TimeUnit[TimeUnit["MINUTES"] = 60000] = "MINUTES";
  TimeUnit[TimeUnit["HOURS"] = 3600000] = "HOURS";
})(TimeUnit || (TimeUnit = {}));

/***/ }),

/***/ 5743:
/*!************************************!*\
  !*** ./src/app/models/position.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Position: () => (/* binding */ Position)
/* harmony export */ });
var Position;
(function (Position) {
  Position[Position["PREVIOUS"] = -1] = "PREVIOUS";
  Position[Position["CURRENT"] = 0] = "CURRENT";
  Position[Position["NEXT"] = 1] = "NEXT";
})(Position || (Position = {}));

/***/ }),

/***/ 3820:
/*!************************************************************************************!*\
  !*** ./src/app/pages/current-conditions-page/current-conditions-page.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionsPageComponent: () => (/* binding */ CurrentConditionsPageComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions-page.component.html?ngResource */ 4780);
/* harmony import */ var _current_conditions_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions-page.component.css?ngResource */ 1057);
/* harmony import */ var _current_conditions_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_current_conditions_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1126);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/weather.service */ 5527);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/location.service */ 1354);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let CurrentConditionsPageComponent = class CurrentConditionsPageComponent {
  constructor() {
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService);
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_location_service__WEBPACK_IMPORTED_MODULE_3__.LocationService);
  }
};
CurrentConditionsPageComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-current-conditions-page',
  template: _current_conditions_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_current_conditions_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CurrentConditionsPageComponent);


/***/ }),

/***/ 3559:
/*!******************************************************************!*\
  !*** ./src/app/pages/forecasts-page/forecasts-page.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastsPageComponent: () => (/* binding */ ForecastsPageComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-page.component.html?ngResource */ 2099);
/* harmony import */ var _forecasts_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-page.component.css?ngResource */ 9563);
/* harmony import */ var _forecasts_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forecasts_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1126);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/weather.service */ 5527);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ForecastsPageComponent = class ForecastsPageComponent {
  set zipcode(zipcode) {
    this.weatherService.getForecast(zipcode).subscribe(data => this.forecast = data);
  }
  constructor(weatherService) {
    this.weatherService = weatherService;
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService
  }];
  static #_2 = this.propDecorators = {
    zipcode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['zipcode']
    }]
  };
};
ForecastsPageComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-forecasts-page',
  template: _forecasts_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_forecasts_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForecastsPageComponent);


/***/ }),

/***/ 410:
/*!********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component.html?ngResource */ 6753);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1126);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MainPageComponent = class MainPageComponent {};
MainPageComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-main-page',
  template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], MainPageComponent);


/***/ }),

/***/ 9693:
/*!********************************************!*\
  !*** ./src/app/pipes/weather-icon.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherIconPipe: () => (/* binding */ WeatherIconPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1126);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WeatherIconPipe_1;

let WeatherIconPipe = class WeatherIconPipe {
  static #_ = WeatherIconPipe_1 = this;
  static #_2 = this.ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
  transform(value) {
    let iconUrl = WeatherIconPipe_1.ICON_URL;
    if (value >= 200 && value <= 232) {
      iconUrl += 'art_storm.png';
    } else if (value >= 501 && value <= 511) {
      iconUrl += 'art_rain.png';
    } else if (value === 500 || value >= 520 && value <= 531) {
      iconUrl += 'art_light_rain.png';
    } else if (value >= 600 && value <= 622) {
      iconUrl += 'art_snow.png';
    } else if (value >= 801 && value <= 804) {
      iconUrl += 'art_clouds.png';
    } else if (value === 741 || value === 761) {
      iconUrl += 'art_fog.png';
    } else {
      iconUrl += 'art_clear.png';
    }
    return iconUrl;
  }
};
WeatherIconPipe = WeatherIconPipe_1 = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'weatherIcon',
  standalone: true
})], WeatherIconPipe);


/***/ }),

/***/ 3295:
/*!****************************************************!*\
  !*** ./src/app/services/cache-resolver.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheResolverService: () => (/* binding */ CacheResolverService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1126);
/* harmony import */ var _untils_cache_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../untils/cache-config */ 3533);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let CacheResolverService = class CacheResolverService {
  constructor() {
    this.cacheConfig = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)({});
    this.cache = new Map();
    this.setupCacheConfig();
  }
  getCacheDuration() {
    return this.cacheConfig().duration;
  }
  getCachedResponse(url) {
    const cachedData = this.cache.get(url);
    if (!cachedData) {
      return null;
    }
    if (this.isExpired(cachedData.expiresIn)) {
      this.cache.delete(url);
      return null;
    }
    return cachedData.value;
  }
  updateCache(url, value) {
    this.cache.set(url, {
      expiresIn: this.getExpirationTime(),
      value
    });
  }
  updateCacheConfig(config) {
    this.cacheConfig.set(config);
  }
  setupCacheConfig() {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.effect)(() => {
      if (!this.getCacheDuration()) {
        this.cacheConfig().duration = _untils_cache_config__WEBPACK_IMPORTED_MODULE_0__.CACHE_CONFIG.duration;
      }
      this.cache.forEach(value => {
        value.expiresIn = this.getExpirationTime();
      });
    });
  }
  getExpirationTime() {
    const duration = this.getCacheDuration();
    return duration ? Date.now() + duration.time * duration.unit : null;
  }
  isExpired(expiresIn) {
    return expiresIn !== null && expiresIn < Date.now();
  }
  static #_ = this.ctorParameters = () => [];
};
CacheResolverService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], CacheResolverService);


/***/ }),

/***/ 1354:
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCATIONS: () => (/* binding */ LOCATIONS),
/* harmony export */   LocationService: () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1126);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9469);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


const LOCATIONS = 'locations';
let LocationService = class LocationService {
  constructor() {
    this.locations = [];
    this.locationsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.locations$ = this.locationsSubject.asObservable();
    let locString = localStorage.getItem(LOCATIONS);
    if (locString) {
      this.locations = JSON.parse(locString);
      this.locationsSubject.next(this.locations);
    }
  }
  addLocation(zipcode) {
    if (!this.locations.includes(zipcode)) {
      const locations = [...this.locations, zipcode];
      this.updateLocations(locations);
    }
  }
  removeLocation(zipcode) {
    const locations = this.locations.filter(item => item !== zipcode);
    this.updateLocations(locations);
  }
  updateLocations(locations) {
    this.locations = locations;
    this.locationsSubject.next(locations);
    localStorage.setItem(LOCATIONS, JSON.stringify(locations));
  }
  static #_ = this.ctorParameters = () => [];
};
LocationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], LocationService);


/***/ }),

/***/ 5527:
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherService: () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1126);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 4252);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.service */ 1354);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 3390);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3118);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5004);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WeatherService_1;






let WeatherService = class WeatherService {
  static #_ = WeatherService_1 = this;
  static #_2 = this.URL = 'https://api.openweathermap.org/data/2.5';
  static #_3 = this.APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  constructor(http, locationService) {
    this.http = http;
    this.locationService = locationService;
    this.currentConditions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([]);
    this.checkLocationChange();
  }
  getCurrentConditions() {
    return this.currentConditions.asReadonly();
  }
  getForecast(zipcode) {
    return this.http.get(`${WeatherService_1.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService_1.APPID}`);
  }
  fetchCurrentConditions(zipcode) {
    return this.http.get(`${WeatherService_1.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService_1.APPID}`);
  }
  removeLocation(zipcode) {
    this.locationService.removeLocation(zipcode);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)();
  }
  checkLocationChange() {
    this.locationService.locations$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__.takeUntilDestroyed)()).subscribe(zipcodes => {
      this.removeCurrentConditions(zipcodes);
      this.addCurrentConditions(zipcodes);
    });
  }
  removeCurrentConditions(zipcodes) {
    this.currentConditions.update(conditions => conditions.filter(condition => zipcodes.includes(condition.zip)));
  }
  addCurrentConditions(zipcodes) {
    const missingZipcodes = zipcodes.filter(zip => !this.currentConditions().some(condition => condition.zip === zip));
    missingZipcodes.forEach(zip => {
      this.fetchCurrentConditions(zip).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => this.removeLocation(zip)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(Boolean)).subscribe(data => this.currentConditions.update(conditions => [...conditions, {
        zip,
        data
      }]));
    });
  }
  static #_4 = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
  }, {
    type: _location_service__WEBPACK_IMPORTED_MODULE_0__.LocationService
  }];
};
WeatherService = WeatherService_1 = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], WeatherService);


/***/ }),

/***/ 3533:
/*!****************************************!*\
  !*** ./src/app/untils/cache-config.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CACHE_CONFIG: () => (/* binding */ CACHE_CONFIG)
/* harmony export */ });
/* harmony import */ var _models_duration_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/duration.model */ 6934);

const CACHE_CONFIG = {
  duration: {
    time: 2,
    unit: _models_duration_model__WEBPACK_IMPORTED_MODULE_0__.TimeUnit.HOURS
  }
};

/***/ }),

/***/ 6239:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 5030:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1126);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 7978);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 1540);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 6239);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ }),

/***/ 9645:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/sourceMaps.js */ 4135);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js */ 438);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8126:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/cache-settings-form/cache-settings-form.component.css?ngResource ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/sourceMaps.js */ 4135);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js */ 438);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.error {
  padding-top: 5px;
  font-size: 12px;
}

.title {
  margin: 15px 0;
}

[class*='col-'] {
  padding-right: 10px;
}
`, "",{"version":3,"sources":["webpack://./src/app/components/cache-settings-form/cache-settings-form.component.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,mBAAmB;AACrB","sourcesContent":[".error {\r\n  padding-top: 5px;\r\n  font-size: 12px;\r\n}\r\n\r\n.title {\r\n  margin: 15px 0;\r\n}\r\n\r\n[class*='col-'] {\r\n  padding-right: 10px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1964:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/current-condition/current-condition.component.css?ngResource ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/sourceMaps.js */ 4135);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js */ 438);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5795:
/*!***********************************************************************!*\
  !*** ./src/app/components/forecast/forecast.component.css?ngResource ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/sourceMaps.js */ 4135);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js */ 438);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.icon {
  width: 45px;
  height: 45px;
  position: absolute;
  right: 20px;
  top: -2px;
}
`, "",{"version":3,"sources":["webpack://./src/app/components/forecast/forecast.component.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,SAAS;AACX","sourcesContent":[".icon {\r\n  width: 45px;\r\n  height: 45px;\r\n  position: absolute;\r\n  right: 20px;\r\n  top: -2px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9984:
/*!********************************************************************!*\
  !*** ./src/app/components/tabset/tab/tab.component.css?ngResource ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/sourceMaps.js */ 4135);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js */ 438);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.tab-pane {
  padding: 1em;
}

.close {
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/app/components/tabset/tab/tab.component.css"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;AACjB","sourcesContent":[".tab-pane {\r\n  padding: 1em;\r\n}\r\n\r\n.close {\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9671:
/*!*******************************************************************!*\
  !*** ./src/app/components/tabset/tabset.component.css?ngResource ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/sourceMaps.js */ 4135);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js */ 438);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2202:
/*!***********************************************************************************!*\
  !*** ./src/app/containers/cache-settings/cache-settings.component.css?ngResource ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/sourceMaps.js */ 4135);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js */ 438);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.cache-settings {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 20px;
}

dialog {
  border-color: transparent;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 20px 8px #d0d0d0;
  height: 165px;
  width: 400px;
  position: relative;
}

dialog .close-icon {
  position: absolute;
  top: 3px;
  right: 9px;
  font-size: 20px;
}
`, "",{"version":3,"sources":["webpack://./src/app/containers/cache-settings/cache-settings.component.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,yBAAyB;EACzB,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,gCAAgC;EAChC,aAAa;EACb,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,eAAe;AACjB","sourcesContent":[".cache-settings {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  padding-bottom: 20px;\r\n}\r\n\r\ndialog {\r\n  border-color: transparent;\r\n  overflow: hidden;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  box-shadow: 0 0 20px 8px #d0d0d0;\r\n  height: 165px;\r\n  width: 400px;\r\n  position: relative;\r\n}\r\n\r\ndialog .close-icon {\r\n  position: absolute;\r\n  top: 3px;\r\n  right: 9px;\r\n  font-size: 20px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1057:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/current-conditions-page/current-conditions-page.component.css?ngResource ***!
  \************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/sourceMaps.js */ 4135);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js */ 438);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9563:
/*!******************************************************************************!*\
  !*** ./src/app/pages/forecasts-page/forecasts-page.component.css?ngResource ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/sourceMaps.js */ 4135);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js */ 438);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<router-outlet></router-outlet>\r\n";

/***/ }),

/***/ 1518:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/cache-settings-form/cache-settings-form.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\r\n  <h3 class=\"title\">Cache duration settings</h3>\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"row-no-gutters\">\r\n      <div class=\"col-xs-6\">\r\n        <div class=\"form-group\">\r\n          <input id=\"duration\" type=\"number\" name=\"duration\" class=\"form-control\" formControlName=\"time\" />\r\n          <ng-container *ngIf=\"form.controls.time.dirty\">\r\n            <div *ngIf=\"form.controls.time.errors?.min as errors\" class=\"text-danger error\">\r\n              The minimal number allowed is {{ errors.min }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-4\">\r\n        <div class=\"form-group\">\r\n          <select name=\"unit\" id=\"unit\" class=\"form-control\" formControlName=\"unit\">\r\n            <option [value]=\"TimeUnit.SECONDS\">Seconds</option>\r\n            <option [value]=\"TimeUnit.MINUTES\">Minutes</option>\r\n            <option [value]=\"TimeUnit.HOURS\">Hours</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-2\">\r\n        <button class=\"btn btn-success\" [disabled]=\"form.invalid\" (click)=\"submit()\">Save</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n";

/***/ }),

/***/ 5703:
/*!******************************************************************************************!*\
  !*** ./src/app/components/current-condition/current-condition.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-tabset (tabChanged)=\"activeTab = $event\" (tabClosed)=\"remove.emit($event)\">\r\n  <app-tab\r\n    *ngFor=\"let location of currentConditionsByZip(); index as i\"\r\n    [id]=\"location.zip\"\r\n    [order]=\"i\"\r\n    [title]=\"location.data.name + ' (' + location.zip + ')'\"\r\n    [active]=\"activeTab === i\"\r\n  >\r\n    <div class=\"well flex\" [routerLink]=\"['/forecast', location.zip]\">\r\n      <div>\r\n        <h3>{{ location.data.name }} ({{ location.zip }})</h3>\r\n        <h4>Current conditions: {{ location.data.weather[0].main }}</h4>\r\n        <h4>Temperatures today:</h4>\r\n        <p>\r\n          Current {{ location.data.main.temp | number : '.0-0' }} - Max\r\n          {{ location.data.main.temp_max | number : '.0-0' }} - Min {{ location.data.main.temp_min | number : '.0-0' }}\r\n        </p>\r\n        <p>\r\n          <a [routerLink]=\"['/forecast', location.zip]\">Show 5-day forecast for {{ location.data.name }}</a>\r\n        </p>\r\n      </div>\r\n      <div>\r\n        <img [src]=\"location.data.weather[0].id | weatherIcon\" alt=\"Weather image\" />\r\n      </div>\r\n    </div>\r\n  </app-tab>\r\n</app-tabset>\r\n";

/***/ }),

/***/ 1114:
/*!************************************************************************!*\
  !*** ./src/app/components/forecast/forecast.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">5-day forecast for {{ forecast?.city.name }}</h3>\r\n    </div>\r\n    <ul class=\"list-group\">\r\n      <li *ngFor=\"let dailyForecast of forecast?.list\" class=\"list-group-item\">\r\n        {{ dailyForecast.dt * 1000 | date : 'EEEE, MMM d' }}:\r\n        {{ dailyForecast.weather[0].main }}\r\n        - Min: {{ dailyForecast.temp.min | number : '.0-0' }} - Max: {{ dailyForecast.temp.max | number : '.0-0' }}\r\n\r\n        <img [src]=\"dailyForecast.weather[0].id | weatherIcon\" class=\"icon\" />\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 8361:
/*!*********************************************************************!*\
  !*** ./src/app/components/tabset/tab/tab.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"active\" class=\"tab-pane\">\r\n  <ng-content></ng-content>\r\n</div>\r\n";

/***/ }),

/***/ 3990:
/*!********************************************************************!*\
  !*** ./src/app/components/tabset/tabset.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ul *ngIf=\"tabs.length\" class=\"nav nav-tabs\">\r\n  <li *ngFor=\"let tab of tabs\" [class.active]=\"tab.active\" (click)=\"selectTab(tab)\">\r\n    <a href=\"#\">\r\n      {{ tab.title }}\r\n      <span *ngIf=\"closable\" class=\"close-icon\" (click)=\"closeTab(tab)\"> &times; </span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n<div class=\"tab-content\">\r\n  <ng-content></ng-content>\r\n</div>\r\n";

/***/ }),

/***/ 2647:
/*!**********************************************************************************!*\
  !*** ./src/app/components/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"well\">\r\n  <h2>Enter a zipcode:</h2>\r\n  <input type=\"text\" #zipcode placeholder=\"Zipcode\" class=\"form-control\" />\r\n  <br />\r\n  <button class=\"btn btn-primary\" (click)=\"addLocation(zipcode.value)\">Add location</button>\r\n</div>\r\n";

/***/ }),

/***/ 6646:
/*!************************************************************************************!*\
  !*** ./src/app/containers/cache-settings/cache-settings.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"cache-settings\">\r\n  <button class=\"btn btn-primary\" (click)=\"dialog.showModal()\">Cache settings</button>\r\n</div>\r\n\r\n<dialog #dialog>\r\n  <span class=\"close-icon pull-right\" (click)=\"dialog.close()\"> &times; </span>\r\n  <app-cache-settings-form\r\n    [duration]=\"cacheResolverService.getCacheDuration()\"\r\n    (save)=\"saveCacheConfig($event)\"\r\n  ></app-cache-settings-form>\r\n</dialog>\r\n";

/***/ }),

/***/ 4780:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/current-conditions-page/current-conditions-page.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-current-condition\r\n  [currentConditionsByZip]=\"weatherService.getCurrentConditions()\"\r\n  (remove)=\"locationService.removeLocation($event)\"\r\n></app-current-condition>\r\n";

/***/ }),

/***/ 2099:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/forecasts-page/forecasts-page.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-cache-settings></app-cache-settings>\r\n<app-forecast [forecast]=\"forecast\"></app-forecast>\r\n<button class=\"btn btn-success\" [routerLink]=\"'/'\">< Back to main page</button>\r\n";

/***/ }),

/***/ 6753:
/*!*********************************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\r\n  <app-cache-settings></app-cache-settings>\r\n  <app-zipcode-entry></app-zipcode-entry>\r\n  <app-current-conditions-page></app-current-conditions-page>\r\n</div>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(5030)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map