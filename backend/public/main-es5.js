(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  \n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Exo+2%3A400%2C300%2C500%2C600%2C700%7COpen+Sans%3A300%2C400%2C700&amp;subset=latin%2Clatin-ext&amp;ver=1.0.2\" type=\"text/css\" media=\"all\">\n  <link rel=\"stylesheet\" type=\"text/css\" media=\"all\" href=\"/assets/css/style.css\">\n\n  <title>Bunanycaronline</title>        \n</head>\n\n<div id=\"main-wrapper\">\n\n<!-- header -->\n<header>\n  <div id=\"header-main\">\n      <div class=\"container clearfix\">\n          <div id=\"header-left\">\n              <div class=\"clearfix\">\n                  <!--Logo-->\n                  <a class=\"header-logo\" href=\"/\">\n                      <img src=\"/assets/img/logo.jpg\" alt=\"Logo\">\n                  </a>\n              </div>\n          </div>\n          <div id=\"header-right\">\n              <div id=\"header-authentication\" *ngIf=\"!currentUser\">\n                  <button type=\"button\" data-toggle=\"modal\" data-target=\"#loginPopup\">LOGIN</button>\n                  <span>|</span>\n                  <button type=\"button\" data-toggle=\"modal\" data-target=\"#registerPopup\">REGISTER</button>\n              </div>\n              <div id=\"header-authentication\" *ngIf=\"currentUser\">\n                    <div class=\"dropdown\" id = \"nav-mainMenu-links\">\n                        <button class=\"dropdown-toggle\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                            {{currentUser.username}}\n                        </button>\n                        <div id=\"header-authentication\" *ngIf=\"currentUser.type == 'ADMIN'\">\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                                <a class=\"dropdown-item\" href=\"monitor-page\">Ad Manage</a>\n                                <a class=\"dropdown-item\" href=\"user-profile/{{currentUser.id}}\">User Profile</a>\n                                <a class=\"dropdown-item\" (click)=\"logout()\">LOGOUT</a>\n                            </div>\n                        </div>\n                        <div id=\"header-authentication\" *ngIf=\"currentUser.type == 'USER'\">\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                                <a class=\"dropdown-item\" href=\"user-profile/{{currentUser.id}}\">User Profile</a>\n                                <a class=\"dropdown-item\" (click)=\"logout()\">LOGOUT</a>\n                            </div>\n                        </div>\n                    </div>                  \n              </div>\n            \n              <div id=\"header-select\">\n                  <div>\n                    <a id=\"header-language\" href=\"#\" data-toggle=\"dropdown\" data-width=\"100%\">\n                        <img src=\"/assets/img/lang-eng.png\">ENGLISH</a>\n                    <ul class=\"dropdown-menu dropdown-menu-right\">\n                        <li><a href=\"#\">Arabic</a></li>\n                        <li><a href=\"#\">French</a></li>\n                    </ul>\n                  </div>\n                  <!--<div>\n                  <a id=\"header-currency\" href=\"#\" data-toggle=\"dropdown\" data-width=\"100%\">\n                      <i class=\"fa fa-money\" style=\"margin-right: 3px;\"></i>AED</a>\n                  <ul class=\"dropdown-menu dropdown-menu-right\">\n                      <li><a href=\"#\">USD</a></li>\n                      <li><a href=\"#\">INR</a></li>\n                  </ul>\n                  </div>-->\n              </div>\n          </div>\n      </div>\n  </div>\n\n  <nav id=\"mainMenu\">\n      <div class=\"container\">\n          <div id=\"mainMenu-inner\">\n              <a href=\"javascript:void(0);\" id=\"mainMenu-icon\" (click)=\"menuFunction()\">\n                  <i class=\"fa fa-bars\"></i>\n              </a>\n              <ul id=\"mainMenu-links\" class=\"clearfix\">\n                  <li><a href=\"#\" class=\"active\">Home</a>\n                  </li>\n                  <li><a href=\"/car-search\">Cars</a>\n                  </li>\n                  <li><a href=\"#\">Boats</a>\n                  </li>\n                  <li><a href=\"#\">About</a>\n                  </li>\n                  <li><a href=\"#\">Contact</a>\n                  </li>\n              </ul>\n          </div>\n      </div>\n  </nav>\n</header>\n\n<!-- main content -->\n<router-outlet></router-outlet>\n\n<!-- header -->\n<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12\">\n        <div class=\"clearfix\">\n          <ul id=\"footer-links\">\n            <li><a href=\"\">Home</a> |\n            </li>\n            <li><a href=\"/car-search\"> Cars</a> |\n            </li>\n            <li><a href=\"#\"> Boats</a> |\n            </li>\n            <li><a href=\"#\"> About</a> |\n            </li>\n            <li><a href=\"#\"> Contact</a> \n            </li>\n          </ul>\n          <div id=\"footer-right\">© 2019 BUYANYCARONLINE</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n\n<div class=\"modal fade\" id=\"loginPopup\">\n  <div class=\"modal-dialog\" style=\"max-width: 350px;\">\n      <div class=\"modal-content popup-form\">\n          <!-- Modal Header -->\n          <div class=\"modal-dialog-loader\" style = \"display:none;\"></div>\n          <div class=\"modal-header pf-header\">\n              <h4 class=\"pf-title\">Login</h4>\n              <button type=\"button\" class=\"close pf-close\" data-dismiss=\"modal\">\n                  <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n              </button>\n          </div>\n          <div class=\"pf-content\">\n                <form [formGroup]=\"loginForm\" method=\"post\">\n                    <div class=\"form-group\">\n                        <label class=\"pf-label\">User Name</label>\n                        <input type=\"text\" formControlName=\"username\" class=\"form-control pf-textInput\" [ngClass]=\"{ 'is-invalid': submitted && fLogin.username.errors }\" placeholder=\"Enter your user name\"/>\n                        <div *ngIf=\"submitted && fLogin.username.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"fLogin.username.errors.required\">User Name is required</div>\n                            <div *ngIf=\"fLogin.username.errors.email\">Email is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"pf-label\">Password</label>\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control pf-textInput\" [ngClass]=\"{ 'is-invalid': submitted && fLogin.password.errors }\" placeholder=\"Enter your password\"/>\n                        <div *ngIf=\"submitted && fLogin.password.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"fLogin.password.errors.required\">Password is required</div>\n                            <div *ngIf=\"fLogin.password.errors.minlength\">Password must be at least 6 characters</div>\n                            <div *ngIf=\"fLogin.password.errors.incorrect\">Invalid username or password.</div>\n                        </div>\n                    </div>\n                    <input (click)=\"onLoginSubmit($event)\" type=\"submit\" value=\"Login\" class=\"pf-submit\">\n                </form>\n          </div>\n      </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"registerPopup\">\n  <div class=\"modal-dialog\" style=\"max-width: 350px;\">\n      <div class=\"modal-content popup-form\">\n          <!-- Modal Header -->\n          <div class=\"modal-dialog-loader\" style = \"display:none;\"></div>\n          <div class=\"modal-header pf-header\">\n              <h4 class=\"pf-title\">Register</h4>\n              <button type=\"button\" class=\"close pf-close\" data-dismiss=\"modal\">\n                  <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n              </button>\n          </div>\n          <div class=\"pf-content\">\n                <form [formGroup]=\"registerForm\" method=\"post\">\n                    <div class=\"form-group\">\n                        <label class=\"pf-label\">User Name</label>\n                        <input email type=\"text\" formControlName=\"username\" class=\"form-control pf-textInput\" [ngClass]=\"{ 'is-invalid': submitted && fRegister.username.errors }\" placeholder=\"Enter your user name\"/>\n                        <div *ngIf=\"submitted && fRegister.username.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"fRegister.username.errors.required\">User Name is required</div>\n                            <div *ngIf=\"fRegister.username.errors.exist\">User name already used</div>\n                            <div *ngIf=\"fRegister.username.errors.email\">Email is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"pf-label\">Password</label>\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control pf-textInput\" [ngClass]=\"{ 'is-invalid': submitted && fRegister.password.errors }\"  placeholder=\"Enter your password\"/>\n                        <div *ngIf=\"submitted && fRegister.password.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"fRegister.password.errors.required\">Password is required</div>\n                            <div *ngIf=\"fRegister.password.errors.minlength\">Password must be at least 6 characters</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"pf-label\">Confirm Password</label>\n                        <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control pf-textInput\" [ngClass]=\"{ 'is-invalid': submitted && fRegister.confirmPassword.errors }\"  placeholder=\"Enter your confirm password\" />\n                        <div *ngIf=\"submitted && fRegister.confirmPassword.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"fRegister.confirmPassword.errors.required\">Confirm Password is required</div>\n                            <div *ngIf=\"fRegister.confirmPassword.errors.minlength\">Password must be at least 6 characters</div>\n                            <div *ngIf=\"fRegister.confirmPassword.errors.mustMatch\">Passwords must match</div>\n                        </div>\n                    </div>\n                    <input (click)=\"onRegisterSubmit($event)\" type=\"submit\" value=\"Register\" class=\"pf-submit\">\n                </form>\n          </div>\n      </div>\n  </div>\n</div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/car-detail/car-detail.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/car-detail/car-detail.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content-wrapper\">\n\t<div class=\"container\" id=\"vd-container\">\n\t\t<div class=\"row\">\n\t\t\t<div id=\"vdBox-container\">\n\t\t\t\t<div id=\"vd-box\">\n\t\t\t\t\t<div id=\"vdHeader\">\n\t\t\t\t\t\t<div id=\"vdHeader-title\">{{car.title}}</div>\n\t\t\t\t\t\t<div><span>Price: </span>{{car.price | currency}}</div>\n\t\t\t\t\t\t<div><span>Created Date: </span>{{car.year}}</div>\n\t\t\t\t\t<div id=\"vdViewedHeader\">\n\t\t\t\t\t\t<div><span>Viewed This: </span>{{car.visitcount}}</div> \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t<div id=\"vd-preview\">\n\t\t\t\t\t<div id=\"vd-previewImage\">\n\t\t\t\t\t\t<i id=\"vd-previewImageLeft\" class=\"fa fa-caret-left\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<img *ngIf = \"previewImgFile\" [src] = \"previewImgFile\">\n\t\t\t\t\t\t<i id=\"vd-previewImageFullScreen\" class=\"fa fa-arrows-alt\" aria-hidden=\"true\"></i>\t\n\t\t\t\t\t\t<i id=\"vd-previewImageRight\" class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id=\"vdPreviewItems\">\n\t\t\t\t\t\t\t<div class=\"vdItem-image\" *ngFor = \"let imgFile of imgFiles\">\n\t\t\t\t\t\t\t\t<img [src]=\"imgFile\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id=\"vd-info\">\n\t\t\t\t\t\t\t<div id=\"vdInfo-innerLeft\">\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div><span>Make: </span>{{car.make}}</div>\n\t\t\t\t\t\t\t\t<div><span>Model: </span>{{car.model}}</div>\n\t\t\t\t\t\t\t\t<div><span>Year:</span>{{car.year}}</div>\n\t\t\t\t\t\t\t\t<div><span>Price:</span>{{car.price | currency}}</div>\n\t\t\t\t\t\t\t\t<div><span>Transmission:</span>{{car.transmission}}</div>\n\t\t\t\t\t\t\t\t<div><span>FuelType:</span>{{car.fueltype}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id=\"vdInfo-innerRight\">\n\t\t\t\t\t\t\t\t<div><span>Description: </span>\n\t\t\t\t\t\t\t\t\t{{car.description}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div><span>Features: </span>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<ul *ngFor = \"let feature of features\">\n\t\t\t\t\t\t\t\t\t\t<li>{{feature}}</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div id=\"imagePopupContainer\">\n\t<div style=\"padding-top: 40px;\">\n\t\t<i id=\"closeImagePopupContainer\" class=\"fa fa-times\" aria-hidden=\"true\"></i>\n\t\t<img *ngIf = \"previewImgFile\" id=\"popupImage\" [src] = \"previewImgFile\">\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/car-search/car-search.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/car-search/car-search.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content-wrapper\">\n\t<div class=\"container\" id=\"sr-container\">\n\t\t<div class=\"loader\" style = \"display:block;\"></div>\n\t\t<div class=\"row\">\n\t\t\t<div id=\"findBox-container\">\n\t\t\t\t<div id=\"find-box\">\n\t\t\t\t\t<h2>FIND</h2>\n\t\t\t\t\t<form [formGroup]=\"findForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"hf-label\">MAKE</div>\n\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t<select formControlName = \"make\" class = \"selectpicker\" (change) = \"onMakeChange($event)\" title=\"SELECT NAME\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t<option [value] = \"\"></option>\n\t\t\t\t\t\t\t\t\t<option *ngFor =  \"let make of makes\" [value] = \"make.id\">{{make.value}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"hf-label\">MODEL</div>\n\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t<select formControlName = \"model\" class=\"selectpicker\" title=\"SELECT MODEL\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t<option [value] = \"\"></option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let model of models\" [value]=\"model.id\" >{{model.modelvalue}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"hf-label\">YEAR</div>\n\t\t\t\t\t\t\t<div class=\"hf-select half\">\n\t\t\t\t\t\t\t\t<select formControlName = \"fromYear\" class=\"selectpicker\" title=\"FROM\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t<option [value] = \"\"></option>\n\t\t\t\t\t\t\t\t\t<option [value]=\"year\" *ngFor=\"let year of fromYears\">{{year}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"hf-select half\">\n\t\t\t\t\t\t\t\t<select formControlName = \"toYear\" class=\"selectpicker\" title=\"TO\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t<option [value] = \"\"></option>\n\t\t\t\t\t\t\t\t\t<option [value]=\"year\" *ngFor=\"let year of toYears\">{{year}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"hf-label\">PRICE</div>\n\t\t\t\t\t\t\t<div class=\"hf-select half\">\n\t\t\t\t\t\t\t\t<select formControlName = \"fromPrice\" class=\"selectpicker\" title=\"FROM\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t<option [value] = \"\"></option>\n\t\t\t\t\t\t\t\t\t<option [value]=\"price\" *ngFor=\"let price of fromPrices\">{{price}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"hf-select half\">\n\t\t\t\t\t\t\t\t<select formControlName = \"toPrice\" class=\"selectpicker\" title=\"TO\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t<option [value] = \"\"></option>\n\t\t\t\t\t\t\t\t\t<option [value]=\"price\" *ngFor=\"let price of toPrices\">{{price}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"hf-label\">ORDER</div>\n\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t<select formControlName = \"orderid\" class=\"selectpicker\" title=\"SELECT ORDER\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t<option value = \"HIGHEST_PRICE\">Highest Price</option>\n\t\t\t\t\t\t\t\t\t<option value = \"LOWEST_PRICE\">Lowest Price</option>\n\t\t\t\t\t\t\t\t\t<option value = \"NEWEST\">Newest</option>\n\t\t\t\t\t\t\t\t\t<option value = \"OLDEST\">Oldest</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"button\" id=\"hf-button\">Search</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id=\"searchResultsBox-container\">\n\t\t\t\t<div id=\"searchResults-box\">\n\t\t\t\t\t<div style=\"border-bottom: 1px solid #2f3c40;\">\n\t\t\t\t\t\t<h2>Search Results</h2>\n\t\t\t\t\t\t<div id=\"sortby-container\">\n\t\t\t\t\t\t\t<div id=\"sortby-label\">Sort by:</div>\n\t\t\t\t\t\t\t<div id=\"sortby\">\n\t\t\t\t\t\t\t\t<a id=\"sortby-selected\" href=\"#\" data-toggle=\"dropdown\" \n\t\t\t\t\t\t\t\t   data-width=\"100%\">Highest Price</a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-right\">\n\t\t\t\t\t\t\t\t\t<li><a>Highest Price</a></li>\n\t\t\t\t\t\t\t\t\t<li><a>Lowest Price</a></li>\n\t\t\t\t\t\t\t\t\t<li><a>Newest</a></li>\n\t\t\t\t\t\t\t\t\t<li><a>Oldest</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"searchResults-item\" *ngFor = \"let car of cars\">\n\t\t\t\t\t\t<div class=\"searchResult-image\">\n\t\t\t\t\t\t\t<img [src]=\"car.imgFile\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"searchResult-info\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<a (click)=\"getCarDetailById(car.id, car.ad_id)\" class=\"searchResultInfo-title\"> {{car.title}}</a>\n\t\t\t\t\t\t\t\t<div class=\"searchResultInfo-price\"> {{car.price | currency}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<div class=\"searchResult-info-inner1\">\n\t\t\t\t\t\t\t\t\t<div><span>Make:</span> {{car.make}}</div>\n\t\t\t\t\t\t\t\t\t<div><span>Model:</span> {{car.model}}</div>\n\t\t\t\t\t\t\t\t\t<div><span>Transmission:</span> {{car.transmission}}</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"searchResult-info-inner2\">\n\t\t\t\t\t\t\t\t\t<div><span>Fuel Type:</span> {{car.fueltype}}</div>\n\t\t\t\t\t\t\t\t\t<div><span>Condition:</span> {{car.condition}}</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"searchResultInfo-date\"><span>Created Date:</span> {{car.year}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id=\"adBox-container\">\n\t\t\t\t<div id=\"ad-box\">Empty block for ads</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/index/index.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/index/index.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--main content-->\n\t<div id=\"home-main\">\n\t\t<div class=\"container-fluid\" id=\"home-container\">\n\t\t\t<div id=\"home-bg\">\n\t\t\t\t<div id=\"home-bg-inner\">\n\t\t\t\t\t<div id=\"home-form\" class=\"clearfix\">\n\t\t\t\t\t\t<a (click) = \"onPlaceAd()\" id=\"placeAd\"><i class=\"fa fa-plus-square\" aria-hidden=\"true\"></i> Place Ad</a>\n\t\t\t\t\t\t<div style=\"position: relative;\">\n\n\t\t\t\t\t\t\t<h2>FIND VEHICLE</h2>\n\t\t\t\t\t\t\t<form [formGroup]=\"findForm\" (ngSubmit) = \"onSubmit()\" mothod = \"post\" style=\"margin: 0;\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-label\" style=\"\">Motor</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t\t\t<select formControlName = \"motor\" class = \"selectpicker\" title=\"SELECT MOTOR\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor =  \"let motor of motors\" [value] = \"motor.id\">{{motor.value}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-label\" style=\"\">MAKE</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t\t\t<select formControlName = \"make\" class = \"selectpicker\" (change) = \"onMakeChange($event)\" title=\"SELECT MAKE\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor =  \"let make of makes\" [value] = \"make.id\">{{make.value}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-label\">MODEL</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t\t\t<select id = \"modelnew\" formControlName = \"model\" class=\"selectpicker\" title=\"SELECT MODEL\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let model of models\" [value]=\"model.id\" >{{model.modelvalue}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-12 advancedf\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-label\">PRICE</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-select half\">\n\t\t\t\t\t\t\t\t\t\t\t<select formControlName = \"fromPrice\" class=\"selectpicker\" title=\"FROM\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"price\" *ngFor=\"let price of fromPrices\">{{price}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-select half\">\n\t\t\t\t\t\t\t\t\t\t\t<select formControlName = \"toPrice\" class=\"selectpicker\" title=\"TO\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"price\" *ngFor=\"let price of toPrices\">{{price}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-12 advancedf\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-label\">YEAR</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-select half\">\n\t\t\t\t\t\t\t\t\t\t\t<select formControlName = \"fromYear\" class=\"selectpicker\" title=\"FROM\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"year\" *ngFor=\"let year of fromYears\">{{year}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-select half\">\n\t\t\t\t\t\t\t\t\t\t\t<select formControlName = \"toYear\" class=\"selectpicker\" title=\"TO\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"year\" *ngFor=\"let year of toYears\">{{year}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-12 advancedf\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-label\">COLOR</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t\t\t<select formControlName = \"color\" class=\"selectpicker\" title=\"SELECT COLOR\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let color of colors\" [value]=\"color\" >{{color}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-12 advancedf\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-label\">TRANSMISSION</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t\t\t<select formControlName = \"transmission\" class=\"selectpicker\" title=\"SELECT TRANSMISSION\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let transmission of transmissions\" [value]=\"transmission\" >{{transmission}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-12 advancedf\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-label\">FUEL TYPE</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t\t\t<select formControlName = \"fueltype\" class=\"selectpicker\" title=\"SELECT FUELTYPE\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let fueltype of fueltypes\" [value]=\"fueltype\" >{{fueltype}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-12 advancedf\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-label\">CONDITION\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t\t\t<select formControlName = \"condition\" class=\"selectpicker\" title=\"SELECT CONDITION\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let condition of conditions\" [value]=\"condition\" >{{condition}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" (click)=\"showHomeAdvanced()\" id=\"home-advanced\">ADVANCED SEARCH <i class=\"fa fa-angle-double-down\" aria-hidden=\"true\"></i></a>\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"button\" id=\"hf-button\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i> Search</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/manage-ad/manage-ad.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/manage-ad/manage-ad.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--main content-->\n<div class=\"main-content-wrapper\">\n\t<div class=\"container\" id=\"map-container\">\n\t\t<div class=\"row\">\n\t\t\t<div id=\"adInfoBox-container\">\n\t\t\t\t<div id=\"adInfo-box\">\n\t\t\t\t\t<input id = \"ad_id\" type = \"hidden\" value = \"{{car.ad_id}}\" />\n\t\t\t\t\t<input id = \"vehicle_id\" type = \"hidden\" value = \"{{car.vehicle_id}}\" />\n\t\t\t\t\t<input id = \"car_id\" type = \"hidden\" value = \"{{car.id}}\" />\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span>Title: </span><a>{{car.title}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t<input id = \"title\" class = \"ba-input\" type = \"text\" placeholder = \"Enter title\">\n\t\t\t\t\t\t\t<i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span>Price: </span><a>{{car.price | currency}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t<input id = \"price\" class = \"ba-input\" type = \"text\" placeholder = \"Enter price\">\n\t\t\t\t\t\t\t<i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span>Description: </span><br><a>{{car.description}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t<textarea id=\"description\" cols=\"30\" rows=\"10\" aria-invalid=\"false\" placeholder=\"Enter description\" class=\"ba-input\"></textarea>\n\t\t\t\t\t\t\t<i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hf-label\">Vehicle Details</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<input id = \"make\" type = \"hidden\" value = \"{{car.make_id}}\" />\n\t\t\t\t\t\t\t<span>Make: </span><a>{{car.make}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t<select id = \"make_id\" class=\"ba-select\" title=\"SELECT MAKE\" (change) = \"onMakeChange($event)\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t<option *ngFor=\"let make of makes\" [value]=\"make.id\" >{{make.value}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t<i class=\"fa fa-check d-none\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<input id = \"model\" type = \"hidden\" value = \"{{car.model_id}}\" />\n\t\t\t\t\t\t\t<span>Model: </span><a>{{car.model}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t<select id = \"model_id\" class=\"ba-select\" title=\"SELECT MODEL\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t<option *ngFor=\"let model of models\" [value]=\"model.id\" >{{model.modelvalue}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t<i class=\"fa fa-check d-none\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span>Year: </span><a>{{car.year}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t<select id = \"year\" class=\"ba-select\" title=\"SELECT YEAR\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t<option *ngFor=\"let year of years\" [value]=\"year\" >{{year}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t<i class=\"fa fa-check d-none\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span>Fuel Type: </span><a>{{car.fueltype}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t<select id = \"fueltype\" class=\"ba-select\" title=\"SELECT TRANSMISSION\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t<option *ngFor=\"let fueltype of fueltypes\" [value]=\"fueltype\" >{{fueltype}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t<i class=\"fa fa-check d-none\" aria-hidden=\"true\"></i>\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span>Condition: </span><a>{{car.condition}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t<select id = \"condition\" class=\"ba-select\" title=\"SELECT CONDITION\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t<option *ngFor=\"let condition of conditions\" [value]=\"condition\" >{{condition}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t<i class=\"fa fa-check d-none\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span>Transmission: </span><a>{{car.transmission}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t<select id = \"transmission\" class=\"ba-select\" title=\"SELECT TRANSMISSION\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t<option *ngFor=\"let transmission of transmissions\" [value]=\"transmission\" >{{transmission}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t<i class=\"fa fa-check d-none\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span>Color: </span><a>{{car.color}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t<select id = \"color\" class=\"ba-select\" title=\"SELECT COLOR\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t<option *ngFor=\"let color of colors\" [value]=\"color\" >{{color}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t<i class=\"fa fa-check d-none\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id=\"PhotoBox-container\">\n\t\t\t\t<div id=\"Photo-box\">\n\t\t\t\t\t<div style=\"border-bottom: 1px solid #2f3c40;\">\n\t\t\t\t\t\t<h2>Photos</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"PhotoBoxItem-container\">\n\t\t\t\t\t\t<div class=\"PhotoBox-item\" *ngFor = \"let imgFile of imgFiles; let i = index\">\n\t\t\t\t\t\t\t<div class=\"PhotoBox-image\">\n\t\t\t\t\t\t\t\t<img [src]=\"imgFile\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button class=\"PhotoBox-delete\" (click) = \"onDeleteSubmit(imgFile)\" [attr.data-index]=\"i\">Delete</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"PhotoBox-preview\">\n\t\t\t\t\t\t<img *ngIf = \"previewImgFile\" src=\"{{previewImgFile}}\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"publishButton-container\">\n\t\t\t\t\t<button id=\"publishButton\" (click) = \"onPublishSubmit()\">Publish</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/monitor-page/monitor-page.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/monitor-page/monitor-page.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--main content-->\n<div class=\"main-content-wrapper\">\n  <div class=\"container\" id=\"ma-container\">\n    <div class=\"row\">\n      <div id=\"adListBox-container\">\n        <div id=\"adList-box\">\n          <div class=\"adList-item\" *ngFor = \"let ad of ads\">\n            <div class=\"adList-info\">\n              <div><span style='cursor:pointer;' (click)=\"getCarByAdId(ad.id)\" >Ad Number: </span>222</div>\n              <div><span>Title: </span>{{ad.title}}</div>\n              <div><span>Price: </span>{{ad.price | currency}}</div>\n              <div><span>Created Date: </span>{{ad.create_at}}</div>\n            </div>\n            <div class=\"adList-buttons\">\n              <button>Approve</button>\n              <button>Reject</button>\n              <button (click)=\"deleteAd(ad)\"><i class = \"fa fa-trash\"></i></button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div id=\"adSelectedBox-container\">\n        <div id=\"adSelectedSearch-box\">Search: \n          <input type=\"text\" placeholder=\"Ad Number..\">\n          <button><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n        </div>\n        <div id=\"adSelected-box\">\n          <div id=\"adSelected-number\"><span>Ad Number: </span></div>\n          <div id=\"adSelected-info\">\n            <div class=\"hf-label\">Vehicle Details</div>\n            <div><span>Make: </span> {{car.make}}</div>\n            <div><span>Model: </span> {{car.model}}</div>\n            <div><span>Year:</span> {{car.year}}</div>\n            <div><span>Price:</span> {{car.price | currency}}</div>\n            <div><span>Transmission:</span> {{car.transmission}}</div>\n            <div><span>Fuel:</span> {{car.fueltype}}\n            </div>\n            <div><span>Description: </span>\n              <br>{{car.description}}\n            </div>\n            <div><span>Features: </span>\n              <br>\n              <ul *ngFor = \"let feature of features\">\n                <li>{{feature}}</li>\n              </ul>\n            </div>\n          </div>\n          <div id=\"adSelected-preview\">\n            <div id=\"adSelected-previewImage\">\n              <i class=\"fa fa-caret-left\" aria-hidden=\"true\" style=\"left:5px;\" id='vd-previewImageLeft'></i>\n              <img *ngIf = \"previewImgFile\" [src]=\"previewImgFile\">\n              <i class=\"fa fa-caret-right\" aria-hidden=\"true\" style=\"right: 5px;\" id='vd-previewImageRight'></i>\n            </div>\n            <div id=\"adSelectedPreviewItems\">\n              <div class=\"adSelectedItem-image\" *ngFor = \"let imgFile of imgFiles\">\n                <img [src]=\"imgFile\" />\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\t"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/new-ad/new-ad.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/new-ad/new-ad.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--main content-->\n<div class=\"main-content-wrapper\">\n\t<div class=\"container\" id=\"nap-container\">\n\t\t<div class=\"loader\" style = \"display:none;\"></div>\n\t\t<div class=\"row\">\n\t\t\t<form [formGroup]=\"newForm\" id = \"newForm\" method=\"post\">\n\t\t\t\t<div id=\"vehicleDetailsBox-container\">\n\t\t\t\t\t<div id=\"vehicleDetails-box\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<h2>Ad Details</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"hf-label\" style=\"\">TITLE</div>\n\t\t\t\t\t\t\t\t<input formControlName = \"title\" class = \"form-control ad-input\" type = \"text\" [ngClass]=\"{ 'is-invalid': submitted && fNew.title.errors }\" placeholder = \"Enter title\"/>\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fNew.title.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"fNew.title.errors.required\">Title is required</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"hf-label\" style=\"\">PRICE</div>\n\t\t\t\t\t\t\t\t<input formControlName = \"price\" class = \"form-control ad-input\" type = \"number\" [ngClass]=\"{ 'is-invalid': submitted && fNew.price.errors }\" placeholder = \"Enter price\"/>\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fNew.price.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"fNew.price.errors.required\">Price is only required number</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"hf-label\" style=\"\">DESCRIPTION</div>\n\t\t\t\t\t\t\t\t<textarea formControlName=\"description\" class=\"form-control ad-textarea\" cols=\"30\" rows=\"10\" aria-invalid=\"false\" [ngClass]=\"{ 'is-invalid': submitted && fNew.description.errors }\" placeholder=\"Enter description\" id = \"description\"></textarea>\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fNew.description.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"fNew.description.errors.required\">Description is required</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"vehicleDetailsBox2-container\">\n\t\t\t\t\t<div id=\"vehicleDetails-box\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<h2>Vehicle Details</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"hf-label\" style=\"\">MAKE</div>\n\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t<select formControlName = \"make_id\" class = \"form-control selectpicker\" [ngClass]=\"{ 'is-invalid': submitted && fNew.make_id.errors }\" (change) = \"onMakeChange($event)\" title=\"SELECT NAME\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor =  \"let make of makes\" [value] = \"make.id\">{{make.value}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fNew.make_id.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"fNew.make_id.errors.required\">Make is required</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"hf-label\">MODEL</div>\n\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t<select formControlName = \"model_id\" class=\"form-control selectpicker\" [ngClass]=\"{ 'is-invalid': submitted && fNew.model_id.errors }\" title=\"SELECT MODEL\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let model of models\" [value]=\"model.id\" >{{model.modelvalue}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fNew.model_id.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"fNew.model_id.errors.required\">Model is required</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"hf-label\">YEAR</div>\n\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t<select formControlName = \"year\" class=\"form-control selectpicker\" [ngClass]=\"{ 'is-invalid': submitted && fNew.year.errors }\" title=\"SELECT YEAR\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let year of years\" [value]=\"year\" >{{year}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fNew.year.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"fNew.year.errors.required\">Year is required</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"hf-label\">FUEL TYPE</div>\n\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t<select formControlName = \"fueltype\" class=\"form-control selectpicker\" [ngClass]=\"{ 'is-invalid': submitted && fNew.fueltype.errors }\" title=\"SELECT FUELTYPE\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let fueltype of fueltypes\" [value]=\"fueltype\" >{{fueltype}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fNew.fueltype.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"fNew.fueltype.errors.required\">Fueltype is required</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"hf-label\">CONDITION\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t<select formControlName = \"condition\" class=\"form-control selectpicker\" [ngClass]=\"{ 'is-invalid': submitted && fNew.condition.errors }\" title=\"SELECT CONDITION\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let condition of conditions\" [value]=\"condition\" >{{condition}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fNew.condition.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"fNew.condition.errors.required\">Condition is required</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"hf-label\">TRANSMISSION</div>\n\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t<select formControlName = \"transmission\" class=\"form-control selectpicker\" [ngClass]=\"{ 'is-invalid': submitted && fNew.transmission.errors }\" title=\"SELECT TRANSMISSION\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let transmission of transmissions\" [value]=\"transmission\" >{{transmission}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fNew.transmission.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"fNew.transmission.errors.required\">Transmission is required</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"hf-label\">COLOR</div>\n\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t<select formControlName = \"color\" class=\"form-control selectpicker\" [ngClass]=\"{ 'is-invalid': submitted && fNew.color.errors }\" title=\"SELECT COLOR\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let color of colors\" [value]=\"color\" >{{color}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fNew.color.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"fNew.color.errors.required\">Color is required</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"hf-label\">Features</div>\n\t\t\t\t\t\t\t\t<label class=\"hf-checkbox\" *ngFor=\"let feature of features\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [value]=\"feature\">{{feature}}\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"button\" id=\"hf-button\">Save</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t<div id=\"uploadPhotoBox-container\" style = \"display:block;\">\n\t\t\t\t<div id=\"uploadPhoto-box\"  style = \"display:block;\">\n\t\t\t\t\t<div style=\"border-bottom: 1px solid #2f3c40;\">\n\t\t\t\t\t\t<h2>Upload Photos</h2>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<form [formGroup]=\"uploadForm\" (ngSubmit)=\"onUploadSubmit()\">\n\t\t\t\t\t\t\t\t<div class=\"custom-file col-md-8\">\n\t\t\t\t\t\t\t\t\t<input type=\"file\" class=\"custom-file-input\" name=\"carimg\" (change)=\"onFileChange($event)\">\n\t\t\t\t\t\t\t\t\t<label class=\"custom-file-label\" for=\"customFile\">Choose file</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<button class=\"col-md-4 pt-2 uploadPhotoBox-uploadButton\" type=\"submit\">Upload</button>\n\t\t\t\t\t\t\t</form>\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"uploadPhotoBoxItem-container\">\n\t\t\t\t\t\t<div class=\"uploadPhotoBox-item\" *ngFor = \"let imgFile of imgFiles;\">\n\t\t\t\t\t\t\t<div class=\"uploadPhotoBox-image\">\n\t\t\t\t\t\t\t\t<img [src]=\"imgFile\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button class=\"uploadPhotoBox-delete\" (click) = \"onDeleteSubmit(imgFile)\" [attr.data-index]=\"i\">Delete</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"uploadPhotoBox-preview\">\n\t\t\t\t\t\t<img *ngIf = \"previewImgFile\" src=\"{{previewImgFile}}\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"publishButton-container\">\n\t\t\t\t\t<button id=\"publishButton\" (click) = \"onPublishSubmit()\">Publish</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-profile/user-profile.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-profile/user-profile.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--main content-->\n<div class=\"main-content-wrapper\">\n\t<div class=\"container\" id=\"up-container\">\n\t\t<div class=\"row\">\n\t\t\t<form [formGroup]=\"accountForm\" method=\"post\">\n\t\t\t<div id=\"AccSettingsBox-container\">\n\t\t\t\t<div id=\"AccSettings-box\">\n\t\t\t\t\t<h2>Account Settings</h2>\n\t\t\t\t\t<div style=\"margin-top: 20px;\">\n\t\t\t\t\t\t<input id = \"userid\" type = \"hidden\" value = \"{{user.id}}\" />\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<span>Name: </span><a>{{user.username}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t\t<input email type=\"text\" id=\"username\" formControlName=\"username\" class=\"form-control ba-input\" [ngClass]=\"{ 'is-invalid': submitted && fAccount.username.errors }\" placeholder=\"Enter email address\"/>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fAccount.username.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"fAccount.username.errors.exist\">User name already used</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"fAccount.username.errors.email\">Email is required</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<span>Password: </span><a>**********</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t\t<input id = \"password\" formControlName=\"password\" class = \"form-control ba-input\" type = \"password\" [ngClass]=\"{ 'is-invalid': submitted && fAccount.password.errors }\" placeholder = \"Enter password\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fAccount.password.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"fAccount.password.errors.required\">Password is required</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"fAccount.password.errors.minlength\">Password must be at least 6 characters</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div id=\"confimrPasswordDiv\" class = \"d-none\">\n\t\t\t\t\t\t\t\t<input id = \"confirmPassword\" formControlName=\"confirmPassword\" class = \"form-control ba-input\" type = \"password\" [ngClass]=\"{ 'is-invalid': submitted && fAccount.confirmPassword.errors }\" placeholder = \"Enter confirm password\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fAccount.confirmPassword.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"fAccount.confirmPassword.errors.required\">Confirm Password is required</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"fAccount.confirmPassword.errors.minlength\">Password must be at least 6 characters</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"fAccount.confirmPassword.errors.mustMatch\">Passwords must match</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"hf-label\">ADDRESS</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<span>Country: </span><a>{{user.country}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t\t<input id = \"country\" class = \"ba-input\" type = \"text\" placeholder = \"Enter country\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<span>City: </span><a>{{user.city}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t\t<input id = \"city\" class = \"ba-input\" type = \"text\" placeholder = \"Enter city\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<span>Street: </span><a>{{user.address}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t\t<input id = \"address\" class = \"ba-input\" type = \"text\" placeholder = \"Enter street\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"hf-label\">Contact details</div>\n\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<span>Mobile: </span><a>{{user.mobile}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t\t<input id = \"mobile\" class = \"ba-input\" type = \"text\" placeholder = \"Enter mobile number\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--<div style=\"text-align:center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"button\" id=\"hf-button\">Save</button>\n\t\t\t\t\t</div>-->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</form>\n\t\t\t<div id=\"manageAdsBox-container\">\n\t\t\t\t<div id=\"manageAds-box\">\n\t\t\t\t\t<h2>Manage Ads</h2>\n\t\t\t\t\t<div class=\"manageAdsItem\"  *ngFor = \"let ad of ads\">\n\t\t\t\t\t\t<div class=\"manageAdsItem-left\">\n\t\t\t\t\t\t\t<div><span>Title: </span>{{ad.title}}</div>\n\t\t\t\t\t\t\t<div><span>Price: </span>{{ad.price | currency}}</div>\n\t\t\t\t\t\t\t<div><span>Description: </span>{{ad.description}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"manageAdsItem-right\">\n\t\t\t\t\t\t\t<a href = \"/manage-ad/{{ad.id}}\">\n\t\t\t\t\t\t\t\t<button>Modify</button>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<button>Mark as sold</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id=\"NewAdBox-container\">\n\t\t\t\t<div id=\"NewAd-box\">\n\t\t\t\t\t<h2>New Ad?</h2>\n\t\t\t\t\t<a href = \"/new-ad/{{user.id}}\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"button\">\n\t\t\t\t\t\t<i class=\"fa fa-plus-square\" aria-hidden=\"true\"></i> Click here</button>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _new_ad_new_ad_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-ad/new-ad.component */ "./src/app/new-ad/new-ad.component.ts");
/* harmony import */ var _manage_ad_manage_ad_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manage-ad/manage-ad.component */ "./src/app/manage-ad/manage-ad.component.ts");
/* harmony import */ var _car_search_car_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./car-search/car-search.component */ "./src/app/car-search/car-search.component.ts");
/* harmony import */ var _car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./car-detail/car-detail.component */ "./src/app/car-detail/car-detail.component.ts");
/* harmony import */ var _monitor_page_monitor_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./monitor-page/monitor-page.component */ "./src/app/monitor-page/monitor-page.component.ts");











var routes = [
    { path: '', component: _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"] },
    { path: 'user-profile/:user_id', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'new-ad/:user_id', component: _new_ad_new_ad_component__WEBPACK_IMPORTED_MODULE_6__["NewAdComponent"] },
    { path: 'manage-ad/:ad_id', component: _manage_ad_manage_ad_component__WEBPACK_IMPORTED_MODULE_7__["ManageAdComponent"] },
    { path: 'monitor-page', component: _monitor_page_monitor_page_component__WEBPACK_IMPORTED_MODULE_10__["MonitorPageComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'car-search', component: _car_search_car_search_component__WEBPACK_IMPORTED_MODULE_8__["CarSearchComponent"] },
    { path: 'car-detail', component: _car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_9__["CarDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _modules_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/user.service */ "./src/app/modules/user.service.ts");
/* harmony import */ var _auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/authentication.service */ "./src/app/auth/authentication.service.ts");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__);








var AppComponent = /** @class */ (function () {
    function AppComponent(formBuilder, router, authenticationService, userService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.title = 'buyanycaronline';
        this.loading = false;
        this.submitted = false;
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
        });
        this.registerForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
        }, {
            validator: this.MustMatch('password', 'confirmPassword')
        });
    };
    AppComponent.prototype.MustMatch = function (controlName, matchingControlName) {
        return function (formGroup) {
            var control = formGroup.controls[controlName];
            var matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    };
    Object.defineProperty(AppComponent.prototype, "fLogin", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "fRegister", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        $('.modal-dialog-loader').show();
        var password = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__["Md5"].hashStr(this.fLogin.password.value).toString();
        this.authenticationService.login(this.fLogin.username.value, password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            $('.modal-dialog-loader').hide();
            $('#loginPopup').modal('toggle');
            if (data.type == 'ADMIN')
                _this.router.navigate(["/monitor-page"]);
            else
                _this.router.navigate(['/user-profile/' + data.id]);
        }, function (err) {
            $('.modal-dialog-loader').hide();
            _this.loginForm.controls["password"].setErrors({ incorrect: true });
            _this.loading = false;
        });
    };
    AppComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        $('.modal-dialog-loader').show();
        this.user = {
            id: '',
            username: this.fRegister.username.value,
            password: ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__["Md5"].hashStr(this.fRegister.password.value).toString(),
            type: '',
            message_id: '',
            billinginfo_id: '',
            token: ''
        };
        this.userService.addUser(this.user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (user) {
            $('.modal-dialog-loader').hide();
            if (user && user.token) {
                $('#registerPopup').modal('toggle');
                _this.authenticationService.register(user);
                _this.currentUser = user;
                if (user.type == 'ADMIN')
                    _this.router.navigate(["/monitor-page"]);
                else
                    _this.router.navigate(['/user-profile/' + user.id]);
            }
        }, function (err) {
            $('.modal-dialog-loader').hide();
            _this.registerForm.controls["username"].setErrors({ exist: true });
            _this.loading = false;
        });
    };
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['']);
    };
    AppComponent.prototype.menuFunction = function () {
        var x = document.getElementById("mainMenu-links");
        if (x.className === "clearfix") {
            x.className += " open";
        }
        else {
            x.className = "clearfix";
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _modules_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_car_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/car.service */ "./src/app/modules/car.service.ts");
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/config */ "./src/app/modules/config.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _new_ad_new_ad_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-ad/new-ad.component */ "./src/app/new-ad/new-ad.component.ts");
/* harmony import */ var _manage_ad_manage_ad_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./manage-ad/manage-ad.component */ "./src/app/manage-ad/manage-ad.component.ts");
/* harmony import */ var _car_search_car_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./car-search/car-search.component */ "./src/app/car-search/car-search.component.ts");
/* harmony import */ var _car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./car-detail/car-detail.component */ "./src/app/car-detail/car-detail.component.ts");
/* harmony import */ var _monitor_page_monitor_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./monitor-page/monitor-page.component */ "./src/app/monitor-page/monitor-page.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"],
                _new_ad_new_ad_component__WEBPACK_IMPORTED_MODULE_11__["NewAdComponent"],
                _manage_ad_manage_ad_component__WEBPACK_IMPORTED_MODULE_12__["ManageAdComponent"],
                _car_search_car_search_component__WEBPACK_IMPORTED_MODULE_13__["CarSearchComponent"],
                _car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_14__["CarDetailComponent"],
                _monitor_page_monitor_page_component__WEBPACK_IMPORTED_MODULE_15__["MonitorPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [
                _modules_car_service__WEBPACK_IMPORTED_MODULE_7__["CarService"],
                _modules_config__WEBPACK_IMPORTED_MODULE_8__["CommonService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/auth/authentication.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate([''], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/authentication.service.ts":
/*!************************************************!*\
  !*** ./src/app/auth/authentication.service.ts ***!
  \************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/config */ "./src/app/modules/config.ts");






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, commonService) {
        this.http = http;
        this.commonService = commonService;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.commonService.baseurl + '/users/authenticate', { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.currentUserSubject.next(user);
            }
            return user;
        }));
    };
    AuthenticationService.prototype.register = function (user) {
        if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
        }
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService.prototype.setCurrentUser = function (user) {
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](user);
        this.currentUser = this.currentUserSubject.asObservable();
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _modules_config__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/car-detail/car-detail.component.css":
/*!*****************************************************!*\
  !*** ./src/app/car-detail/car-detail.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhci1kZXRhaWwvY2FyLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/car-detail/car-detail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/car-detail/car-detail.component.ts ***!
  \****************************************************/
/*! exports provided: CarDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailComponent", function() { return CarDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_ad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/ad.service */ "./src/app/modules/ad.service.ts");
/* harmony import */ var _modules_car_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/car.service */ "./src/app/modules/car.service.ts");
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/config */ "./src/app/modules/config.ts");






var CarDetailComponent = /** @class */ (function () {
    function CarDetailComponent(carService, adService, commonService, router) {
        this.carService = carService;
        this.adService = adService;
        this.commonService = commonService;
        this.router = router;
    }
    CarDetailComponent.prototype.ngOnInit = function () {
        var car_id = localStorage.getItem("car_id");
        var ad_id = localStorage.getItem("ad_id");
        if (!car_id) {
            alert("Something wrong!");
            this.router.navigate(['']);
            return;
        }
        this.car = {};
        this.getCarById(car_id);
        this.increaseVisitCount(ad_id);
        $(document).ready(function () {
            var slideIndex = 0;
            $("body").on("click", ".vdItem-image", function () {
                var imageSrc = $(this).find('img').attr('src');
                $("#vd-previewImage").find('img').attr('src', imageSrc);
            });
            $("#vd-previewImageLeft").click(function () {
                slideIndex -= 1;
                if (slideIndex < 0)
                    slideIndex = $(".vdItem-image").length - 1;
                setImage();
            });
            $("#vd-previewImageRight").click(function () {
                slideIndex += 1;
                if (slideIndex > $(".vdItem-image").length - 1)
                    slideIndex = 0;
                setImage();
            });
            $("#vd-previewImageFullScreen").click(function () {
                $("#popupImage").attr('src', $("#vd-previewImage").find('img').attr('src'));
                $("#imagePopupContainer").css('display', 'block');
                $("body").css('overflow', 'hidden');
            });
            $("#closeImagePopupContainer").click(function () {
                $("#imagePopupContainer").css('display', 'none');
                $("body").css('overflow', 'auto');
            });
            function setImage() {
                var imageSrc = $(".vdItem-image").eq(slideIndex).find('img').attr('src');
                $("#vd-previewImage").find('img').attr('src', imageSrc);
            }
        });
    };
    CarDetailComponent.prototype.getCarById = function (id) {
        var _this = this;
        this.carService.getCarById(id).subscribe(function (data) {
            _this.car = data;
            var imgFiles = [];
            _this.imgFiles = [];
            _this.previewImgFile = "";
            imgFiles = JSON.parse(data.imgfiles);
            for (var i = 0; i < imgFiles.length; i++) {
                _this.imgFiles[i] = _this.commonService.baseurl + "/uploads/cars/" + imgFiles[i];
                if (i == 0)
                    _this.previewImgFile = _this.imgFiles[0];
            }
            _this.features = JSON.parse(data.features);
        });
    };
    CarDetailComponent.prototype.increaseVisitCount = function (ad_id) {
        var _this = this;
        this.adService.increaseVisitCount(ad_id).subscribe(function (data) {
            _this.car = data;
            if (data.status == "success") {
                _this.visitCount = data.visitCount;
            }
        });
    };
    CarDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-car-detail',
            template: __webpack_require__(/*! raw-loader!./car-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/car-detail/car-detail.component.html"),
            styles: [__webpack_require__(/*! ./car-detail.component.css */ "./src/app/car-detail/car-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modules_car_service__WEBPACK_IMPORTED_MODULE_4__["CarService"],
            _modules_ad_service__WEBPACK_IMPORTED_MODULE_3__["AdService"],
            _modules_config__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CarDetailComponent);
    return CarDetailComponent;
}());



/***/ }),

/***/ "./src/app/car-search/car-search.component.css":
/*!*****************************************************!*\
  !*** ./src/app/car-search/car-search.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhci1zZWFyY2gvY2FyLXNlYXJjaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/car-search/car-search.component.ts":
/*!****************************************************!*\
  !*** ./src/app/car-search/car-search.component.ts ***!
  \****************************************************/
/*! exports provided: CarSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarSearchComponent", function() { return CarSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_car_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/car.service */ "./src/app/modules/car.service.ts");
/* harmony import */ var _modules_make_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/make.service */ "./src/app/modules/make.service.ts");
/* harmony import */ var _modules_model_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/model.service */ "./src/app/modules/model.service.ts");
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/config */ "./src/app/modules/config.ts");








var CarSearchComponent = /** @class */ (function () {
    function CarSearchComponent(formBuilder, carService, makeService, modelService, commonService, route, router) {
        this.formBuilder = formBuilder;
        this.carService = carService;
        this.makeService = makeService;
        this.modelService = modelService;
        this.commonService = commonService;
        this.route = route;
        this.router = router;
        this.submitted = false;
    }
    CarSearchComponent.prototype.ngOnInit = function () {
        $('.loader').show();
        this.getAllMakes();
        this.fromYears = this.commonService.years;
        this.toYears = this.commonService.years;
        this.fromPrices = this.commonService.fromPrices;
        this.toPrices = this.commonService.toPrices;
        this.findForm = this.formBuilder.group({
            make: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fromYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            toYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fromPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            toPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            orderid: ['HIGHEST_PRICE', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        var search_params = JSON.parse(localStorage.getItem("search_params"));
        localStorage.removeItem("search_params");
        if (!search_params) {
            this.getAllCar();
        }
        else {
            this.getSearchAllCarOnIndex(search_params);
        }
    };
    CarSearchComponent.prototype.getCarById = function (id) {
        var _this = this;
        this.carService.getCarById(id).subscribe(function (data) {
            _this.car = data;
        });
    };
    CarSearchComponent.prototype.getAllCar = function () {
        var _this = this;
        this.carService.getAllCar().subscribe(function (data) {
            $('.loader').hide();
            _this.cars = data;
            for (var i = 0; i < _this.cars.length; i++) {
                var imgArray = JSON.parse(_this.cars[i].imgfiles);
                if (imgArray.length > 0)
                    _this.cars[i].imgFile = _this.commonService.baseurl + "/uploads/cars/" + imgArray[0];
            }
        });
    };
    ;
    CarSearchComponent.prototype.getAllMakes = function () {
        var _this = this;
        this.makeService.getAllMakes().subscribe(function (data) {
            _this.makes = data;
            setTimeout("$('.selectpicker').selectpicker('refresh')", 0);
        });
    };
    ;
    CarSearchComponent.prototype.getModelByMakeId = function (make_id) {
        var _this = this;
        this.modelService.getAllModelByMakeId(make_id).subscribe(function (data) {
            _this.models = data;
            setTimeout("$('.selectpicker').selectpicker('refresh')", 0);
        });
    };
    CarSearchComponent.prototype.getCarDetailById = function (car_id, ad_id) {
        localStorage.removeItem("car_id");
        localStorage.setItem("car_id", car_id);
        localStorage.removeItem("ad_id");
        localStorage.setItem("ad_id", ad_id);
        this.router.navigate(['car-detail']);
    };
    CarSearchComponent.prototype.getSearchAllCarOnIndex = function (params) {
        var _this = this;
        this.carService.getSearchAllCarOnIndex(params).subscribe(function (data) {
            $('.loader').hide();
            _this.cars = data;
        });
    };
    CarSearchComponent.prototype.onMakeChange = function (event) {
        var value = event.srcElement.value;
        this.getModelByMakeId(value);
    };
    CarSearchComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        $('.loader').show();
        this.carService.getSearchAllCar(this.findForm.value)
            .subscribe(function (data) {
            $('.loader').hide();
            _this.cars = data;
        });
    };
    Object.defineProperty(CarSearchComponent.prototype, "f", {
        // get the form short name to access the form fields
        get: function () { return this.findForm.controls; },
        enumerable: true,
        configurable: true
    });
    CarSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-car-search',
            template: __webpack_require__(/*! raw-loader!./car-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/car-search/car-search.component.html"),
            styles: [__webpack_require__(/*! ./car-search.component.css */ "./src/app/car-search/car-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _modules_car_service__WEBPACK_IMPORTED_MODULE_4__["CarService"],
            _modules_make_service__WEBPACK_IMPORTED_MODULE_5__["MakeService"],
            _modules_model_service__WEBPACK_IMPORTED_MODULE_6__["ModelService"],
            _modules_config__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CarSearchComponent);
    return CarSearchComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_car_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/car.service */ "./src/app/modules/car.service.ts");
/* harmony import */ var _auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/authentication.service */ "./src/app/auth/authentication.service.ts");
/* harmony import */ var _modules_make_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/make.service */ "./src/app/modules/make.service.ts");
/* harmony import */ var _modules_model_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/model.service */ "./src/app/modules/model.service.ts");
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/config */ "./src/app/modules/config.ts");









var IndexComponent = /** @class */ (function () {
    function IndexComponent(formBuilder, authenticationService, carService, makeService, modelService, commonService, router) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.carService = carService;
        this.makeService = makeService;
        this.modelService = modelService;
        this.commonService = commonService;
        this.router = router;
        this.submitted = false;
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.motors = this.commonService.motors;
        this.fromYears = this.commonService.years;
        this.toYears = this.commonService.years;
        this.fromPrices = this.commonService.fromPrices;
        this.toPrices = this.commonService.toPrices;
        this.fueltypes = this.commonService.fueltypes;
        this.conditions = this.commonService.conditions;
        this.transmissions = this.commonService.transmissions;
        this.colors = this.commonService.colors;
        this.getAllMakes();
        this.findForm = this.formBuilder.group({
            motor: ['cars', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            make: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fromYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            toYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fromPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            toPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            color: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            transmission: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fueltype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            condition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    IndexComponent.prototype.onPlaceAd = function () {
        if (this.currentUser)
            this.router.navigate(['/new-ad/' + this.currentUser.id]);
        else
            $('#loginPopup').modal('toggle');
    };
    IndexComponent.prototype.onSubmit = function () {
        localStorage.removeItem("search_params");
        localStorage.setItem("search_params", JSON.stringify(this.findForm.value));
        this.router.navigate(['car-search']);
    };
    IndexComponent.prototype.onMakeChange = function (event) {
        var value = event.srcElement.value;
        this.getModelByMakeId(value);
    };
    IndexComponent.prototype.getAllMakes = function () {
        var _this = this;
        this.makeService.getAllMakes().subscribe(function (data) {
            _this.makes = data;
            setTimeout("$('.selectpicker').selectpicker('refresh')", 0);
        });
    };
    ;
    IndexComponent.prototype.getModelByMakeId = function (make_id) {
        var _this = this;
        this.modelService.getAllModelByMakeId(make_id).subscribe(function (data) {
            _this.models = data;
            setTimeout("$('.selectpicker').selectpicker('refresh')", 0);
        });
    };
    IndexComponent.prototype.showHomeAdvanced = function () {
        var x = document.getElementById("home-form");
        if (x.className === "clearfix") {
            x.className += " open";
        }
        else {
            x.className = "clearfix";
        }
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/index.js!./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _modules_car_service__WEBPACK_IMPORTED_MODULE_4__["CarService"],
            _modules_make_service__WEBPACK_IMPORTED_MODULE_6__["MakeService"],
            _modules_model_service__WEBPACK_IMPORTED_MODULE_7__["ModelService"],
            _modules_config__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/manage-ad/manage-ad.component.css":
/*!***************************************************!*\
  !*** ./src/app/manage-ad/manage-ad.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS1hZC9tYW5hZ2UtYWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/manage-ad/manage-ad.component.ts":
/*!**************************************************!*\
  !*** ./src/app/manage-ad/manage-ad.component.ts ***!
  \**************************************************/
/*! exports provided: ManageAdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAdComponent", function() { return ManageAdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_ad_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/ad.service */ "./src/app/modules/ad.service.ts");
/* harmony import */ var _modules_vehicle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/vehicle.service */ "./src/app/modules/vehicle.service.ts");
/* harmony import */ var _modules_car_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/car.service */ "./src/app/modules/car.service.ts");
/* harmony import */ var _modules_make_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/make.service */ "./src/app/modules/make.service.ts");
/* harmony import */ var _modules_model_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/model.service */ "./src/app/modules/model.service.ts");
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/config */ "./src/app/modules/config.ts");











var ManageAdComponent = /** @class */ (function () {
    function ManageAdComponent(formBuilder, adService, vehicleService, carService, makeService, modelService, commonService, route, router) {
        this.formBuilder = formBuilder;
        this.adService = adService;
        this.vehicleService = vehicleService;
        this.carService = carService;
        this.makeService = makeService;
        this.modelService = modelService;
        this.commonService = commonService;
        this.route = route;
        this.router = router;
    }
    ManageAdComponent.prototype.ngOnInit = function () {
        this.car = {};
        this.years = this.commonService.years;
        this.fueltypes = this.commonService.fueltypes;
        this.conditions = this.commonService.conditions;
        this.transmissions = this.commonService.transmissions;
        this.colors = this.commonService.colors;
        this.features = this.commonService.features;
        var ad_id = this.route.snapshot.paramMap.get('ad_id');
        this.getCarByAdId(ad_id);
        this.getAllMakes();
        var self = this;
        $(document).ready(function () {
            $(".ba-input").change(function () {
                var fname = $(this).attr('id');
                var fvalue = $(this).val();
                $(this).parent("div").prev().find("a").text(fvalue);
                $(".fa-check").click();
                if (fname == 'title' || fname == 'price' || fname == 'description') {
                    var id = $("#ad_id").val();
                    self.updateAd(id, fname, fvalue);
                }
            });
            $(".ba-select").change(function () {
                var fname = $(this).attr('id');
                var fvalue = $(this).val();
                var text = fvalue;
                if (fname == 'make_id' || fname == 'model_id')
                    text = $(this).find("option:selected").text();
                $(this).parent("div").prev().find("a").text(text);
                $(".fa-check").click();
                if (fname == 'make_id' ||
                    fname == 'model_id' ||
                    fname == 'year' ||
                    fname == 'condition') {
                    var id = $("#vehicle_id").val();
                    self.updateVehicle(id, fname, fvalue);
                }
                else if (fname == 'color' ||
                    fname == 'transmission' ||
                    fname == 'fueltype') {
                    var id = $("#car_id").val();
                    self.updateCar(id, fname, fvalue);
                }
            });
            $(".fa-pencil").click(function () {
                $(this).parent("div").removeClass("d-block");
                $(this).parent("div").addClass("d-none");
                $(this).parent("div").next().removeClass("d-none");
                $(this).parent("div").next().addClass("d-block");
                $(this).parent("div").next().find("input").focus();
                $(this).parent("div").next().find("select").focus();
            });
            $(".fa-check").click(function () {
                $(this).parent("div").removeClass("d-block");
                $(this).parent("div").addClass("d-none");
                $(this).parent("div").prev().removeClass("d-none");
                $(this).parent("div").prev().addClass("d-block");
            });
            $(".PhotoBox-image").click(function () {
                $("#PhotoBox-preview").html($(this).html());
            });
            $(".PhotoBox-delete").click(function () {
                $(this).parent(".PhotoBox-item").css('display', 'none');
            });
            $("body").on("click", ".PhotoBox-image", function () {
                var imageSrc = $(this).find('img').attr('src');
                $("#PhotoBox-preview").find('img').attr('src', imageSrc);
            });
        });
    };
    ManageAdComponent.prototype.onMakeChange = function (event) {
        var value = event.srcElement.value;
        this.getModelByMakeId(value);
    };
    ManageAdComponent.prototype.onDeleteSubmit = function (imgFile) {
        var _this = this;
        var pathArray = imgFile.split("/");
        var imgFileName = pathArray[pathArray.length - 1];
        this.carService.updateCarImageById(this.car_id, imgFileName)
            .subscribe(function (data) {
            _this.getCarAloneById(_this.car_id);
        });
    };
    ManageAdComponent.prototype.onPublishSubmit = function () {
        this.adService.updateAd(this.car.ad_id, 'publish', 'true').subscribe(function (data) {
        });
    };
    ManageAdComponent.prototype.getAllMakes = function () {
        var _this = this;
        this.makeService.getAllMakes().subscribe(function (data) {
            _this.makes = data;
        });
    };
    ;
    ManageAdComponent.prototype.getModelByMakeId = function (make_id) {
        var _this = this;
        this.modelService.getAllModelByMakeId(make_id).subscribe(function (data) {
            _this.models = data;
        });
    };
    ManageAdComponent.prototype.getCarByAdId = function (ad_id) {
        var _this = this;
        this.carService.getCarByAdId(ad_id).subscribe(function (data) {
            _this.car = data;
            _this.car_id = data.id;
            _this.getCarAloneById(_this.car_id);
        });
    };
    ManageAdComponent.prototype.getCarAloneById = function (car_id) {
        var _this = this;
        this.carService.getCarAloneById(car_id)
            .subscribe(function (data) {
            var imgFiles = [];
            _this.imgFiles = [];
            _this.previewImgFile = "";
            imgFiles = JSON.parse(data.imgfiles);
            for (var i = 0; i < imgFiles.length; i++) {
                _this.imgFiles[i] = _this.commonService.baseurl + "/uploads/cars/" + imgFiles[i];
                if (i == 0)
                    _this.previewImgFile = _this.imgFiles[0];
            }
        });
    };
    ManageAdComponent.prototype.updateAd = function (id, fname, fvalue) {
        this.adService.updateAd(id, fname, fvalue)
            .subscribe(function (data) {
        });
    };
    ManageAdComponent.prototype.updateVehicle = function (id, fname, fvalue) {
        this.vehicleService.updateVehicle(id, fname, fvalue)
            .subscribe(function (data) {
        });
    };
    ManageAdComponent.prototype.updateCar = function (id, fname, fvalue) {
        this.carService.updateCar(id, fname, fvalue)
            .subscribe(function (data) {
        });
    };
    ManageAdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-ad',
            template: __webpack_require__(/*! raw-loader!./manage-ad.component.html */ "./node_modules/raw-loader/index.js!./src/app/manage-ad/manage-ad.component.html"),
            styles: [__webpack_require__(/*! ./manage-ad.component.css */ "./src/app/manage-ad/manage-ad.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _modules_ad_service__WEBPACK_IMPORTED_MODULE_4__["AdService"],
            _modules_vehicle_service__WEBPACK_IMPORTED_MODULE_5__["VehicleService"],
            _modules_car_service__WEBPACK_IMPORTED_MODULE_6__["CarService"],
            _modules_make_service__WEBPACK_IMPORTED_MODULE_7__["MakeService"],
            _modules_model_service__WEBPACK_IMPORTED_MODULE_8__["ModelService"],
            _modules_config__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ManageAdComponent);
    return ManageAdComponent;
}());



/***/ }),

/***/ "./src/app/modules/ad.service.ts":
/*!***************************************!*\
  !*** ./src/app/modules/ad.service.ts ***!
  \***************************************/
/*! exports provided: AdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdService", function() { return AdService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/modules/config.ts");




var AdService = /** @class */ (function () {
    function AdService(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    AdService.prototype.getAdById = function (id) {
        return this.http.get(this.commonService.baseurl + '/ads/' + id);
    };
    AdService.prototype.getAllAd = function () {
        return this.http.get(this.commonService.baseurl + '/ads');
    };
    AdService.prototype.getAllAdByUserId = function (user_id) {
        return this.http.get(this.commonService.baseurl + '/ads/userid/' + user_id);
    };
    AdService.prototype.addAd = function (ad) {
        return this.http.post(this.commonService.baseurl + '/ads', ad);
    };
    AdService.prototype.updateAd = function (id, fname, fvalue) {
        return this.http.put(this.commonService.baseurl + '/ads/' + id, { fname: fname, fvalue: fvalue });
    };
    AdService.prototype.increaseVisitCount = function (id) {
        return this.http.put(this.commonService.baseurl + '/ads/increase/' + id, { fname: 'visitcount', fvalue: '' });
    };
    AdService.prototype.deleteAd = function (id) {
        return this.http.delete(this.commonService.baseurl + '/ads/' + id);
    };
    AdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], AdService);
    return AdService;
}());



/***/ }),

/***/ "./src/app/modules/billinginfo.service.ts":
/*!************************************************!*\
  !*** ./src/app/modules/billinginfo.service.ts ***!
  \************************************************/
/*! exports provided: BillingInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingInfoService", function() { return BillingInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/modules/config.ts");




var BillingInfoService = /** @class */ (function () {
    function BillingInfoService(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    BillingInfoService.prototype.getBillingInfoById = function (id) {
        return this.http.get(this.commonService.baseurl + '/billinginfos/' + id);
    };
    BillingInfoService.prototype.getAllBillingInfo = function () {
        return this.http.get(this.commonService.baseurl + '/billinginfos');
    };
    BillingInfoService.prototype.updateBillingInfo = function (user_id, fname, fvalue) {
        return this.http.put(this.commonService.baseurl + '/billinginfos/' + user_id, { fname: fname, fvalue: fvalue });
    };
    BillingInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], BillingInfoService);
    return BillingInfoService;
}());



/***/ }),

/***/ "./src/app/modules/car.service.ts":
/*!****************************************!*\
  !*** ./src/app/modules/car.service.ts ***!
  \****************************************/
/*! exports provided: CarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarService", function() { return CarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/modules/config.ts");




var CarService = /** @class */ (function () {
    function CarService(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    CarService.prototype.getCarById = function (id) {
        return this.http.get(this.commonService.baseurl + '/cars/' + id);
    };
    CarService.prototype.getCarByAdId = function (ad_id) {
        return this.http.get(this.commonService.baseurl + '/cars/ad/' + ad_id);
    };
    CarService.prototype.getAllCar = function () {
        return this.http.get(this.commonService.baseurl + '/cars');
    };
    CarService.prototype.getSearchAllCar = function (search) {
        return this.http.post(this.commonService.baseurl + '/cars/search', search);
    };
    CarService.prototype.getSearchAllCarOnIndex = function (search) {
        return this.http.post(this.commonService.baseurl + '/cars/search-index', search);
    };
    CarService.prototype.getCarAloneById = function (id) {
        return this.http.get(this.commonService.baseurl + '/cars/alone/' + id);
    };
    CarService.prototype.addCar = function (car) {
        return this.http.post(this.commonService.baseurl + '/cars', car);
    };
    CarService.prototype.updateCar = function (id, fname, fvalue) {
        return this.http.put(this.commonService.baseurl + '/cars/' + id, { fname: fname, fvalue: fvalue });
    };
    CarService.prototype.updateCarImageById = function (id, imgFile) {
        return this.http.put(this.commonService.baseurl + '/cars/img/' + id, { imgFile: imgFile });
    };
    CarService.prototype.deleteCarByVehicleId = function (vehicle_id) {
        return this.http.delete(this.commonService.baseurl + '/cars/vehicle/' + vehicle_id);
    };
    CarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], CarService);
    return CarService;
}());



/***/ }),

/***/ "./src/app/modules/config.ts":
/*!***********************************!*\
  !*** ./src/app/modules/config.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
var CommonService = /** @class */ (function () {
    function CommonService() {
        this.baseurl = "http://localhost:3000";
        this.motors = [
            {
                "id": "cars",
                "value": "CAR"
            },
            {
                "id": "boats",
                "value": "BOAT"
            },
            {
                "id": "motorcycles",
                "value": "MOTORCYCLE"
            },
            {
                "id": "heavyvehicles",
                "value": "HEAVYVEHICLE"
            },
            {
                "id": "numberplates",
                "value": "NUMBERPLATE"
            }
        ];
        this.years = [
            2015,
            2016,
            2017,
            2018,
            2019,
            2020
        ];
        this.fueltypes = [
            "Fueltype1",
            "Fueltype2"
        ];
        this.conditions = [
            "Condition1",
            "Condition2"
        ];
        this.transmissions = [
            "Transmission1",
            "Transmission2"
        ];
        this.colors = [
            "Red",
            "Green",
            "Blue"
        ];
        this.features = [
            "4 Wheel Drive",
            "Cruise Control",
            "Bluetooth System",
            "Air Conditioner"
        ];
        this.fromPrices = [
            5000,
            10000,
            20000
        ];
        this.toPrices = [
            100000,
            200000,
            500000
        ];
    }
    return CommonService;
}());



/***/ }),

/***/ "./src/app/modules/make.service.ts":
/*!*****************************************!*\
  !*** ./src/app/modules/make.service.ts ***!
  \*****************************************/
/*! exports provided: MakeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeService", function() { return MakeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/modules/config.ts");




var MakeService = /** @class */ (function () {
    function MakeService(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    MakeService.prototype.getMakeById = function (id) {
        return this.http.get(this.commonService.baseurl + '/makes/' + id);
    };
    MakeService.prototype.getAllMakes = function () {
        return this.http.get(this.commonService.baseurl + '/makes');
    };
    MakeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], MakeService);
    return MakeService;
}());



/***/ }),

/***/ "./src/app/modules/model.service.ts":
/*!******************************************!*\
  !*** ./src/app/modules/model.service.ts ***!
  \******************************************/
/*! exports provided: ModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return ModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/modules/config.ts");




var ModelService = /** @class */ (function () {
    function ModelService(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    ModelService.prototype.getModelById = function (id) {
        return this.http.get(this.commonService.baseurl + '/models/' + id);
    };
    ModelService.prototype.getAllModels = function () {
        return this.http.get(this.commonService.baseurl + '/models');
    };
    ModelService.prototype.getAllModelByMakeId = function (make_id) {
        return this.http.get(this.commonService.baseurl + '/models/makeid/' + make_id);
    };
    ModelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], ModelService);
    return ModelService;
}());



/***/ }),

/***/ "./src/app/modules/upload.service.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/upload.service.ts ***!
  \*******************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/app/modules/config.ts");





var UploadService = /** @class */ (function () {
    function UploadService(httpClient, commonService) {
        this.httpClient = httpClient;
        this.commonService = commonService;
        this.SERVER_URL = this.commonService.baseurl + "/cars/upload/";
    }
    UploadService.prototype.upload = function (data, car_id) {
        var uploadURL = "" + this.SERVER_URL;
        return this.httpClient.post(uploadURL + car_id, data, {
            reportProgress: true,
            observe: 'events'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress:
                    var progress = Math.round(100 * event.loaded / event.total);
                    return { status: 'progress', message: progress };
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response:
                    return event.body;
                default:
                    return "Unhandled event: " + event.type;
            }
        }));
    };
    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/modules/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/modules/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/modules/config.ts");




var UserService = /** @class */ (function () {
    function UserService(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    UserService.prototype.getUserById = function (id) {
        return this.http.get(this.commonService.baseurl + '/users/' + id);
    };
    UserService.prototype.getAllUser = function () {
        return this.http.get(this.commonService.baseurl + '/users');
    };
    UserService.prototype.addUser = function (user) {
        return this.http.post(this.commonService.baseurl + '/users', user);
    };
    UserService.prototype.updateUser = function (user_id, fname, fvalue) {
        return this.http.put(this.commonService.baseurl + '/users/' + user_id, { fname: fname, fvalue: fvalue });
    };
    UserService.prototype.updateUser2 = function (user_id, user) {
        return this.http.put(this.commonService.baseurl + '/users2/' + user_id, { user: user });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/modules/vehicle.service.ts":
/*!********************************************!*\
  !*** ./src/app/modules/vehicle.service.ts ***!
  \********************************************/
/*! exports provided: VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return VehicleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/modules/config.ts");




var VehicleService = /** @class */ (function () {
    function VehicleService(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    VehicleService.prototype.getVehicleById = function (id) {
        return this.http.get(this.commonService.baseurl + '/vehicles/' + id);
    };
    VehicleService.prototype.getAllVehicle = function () {
        return this.http.get(this.commonService.baseurl + '/vehicles');
    };
    VehicleService.prototype.addVehicle = function (vehicle) {
        return this.http.post(this.commonService.baseurl + '/vehicles', vehicle);
    };
    VehicleService.prototype.updateVehicle = function (id, fname, fvalue) {
        return this.http.put(this.commonService.baseurl + '/vehicles/' + id, { fname: fname, fvalue: fvalue });
    };
    VehicleService.prototype.deleteVehicle = function (id) {
        return this.http.delete(this.commonService.baseurl + '/vehicles/' + id);
    };
    VehicleService.prototype.deleteVehicleByAdId = function (ad_id) {
        return this.http.delete(this.commonService.baseurl + '/vehicles/ad/' + ad_id);
    };
    VehicleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], VehicleService);
    return VehicleService;
}());



/***/ }),

/***/ "./src/app/monitor-page/monitor-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/monitor-page/monitor-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vbml0b3ItcGFnZS9tb25pdG9yLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/monitor-page/monitor-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/monitor-page/monitor-page.component.ts ***!
  \********************************************************/
/*! exports provided: MonitorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorPageComponent", function() { return MonitorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_ad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/ad.service */ "./src/app/modules/ad.service.ts");
/* harmony import */ var _modules_vehicle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/vehicle.service */ "./src/app/modules/vehicle.service.ts");
/* harmony import */ var _modules_car_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/car.service */ "./src/app/modules/car.service.ts");
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/config */ "./src/app/modules/config.ts");







var MonitorPageComponent = /** @class */ (function () {
    function MonitorPageComponent(adService, vehicleService, carService, commonService, router) {
        this.adService = adService;
        this.vehicleService = vehicleService;
        this.carService = carService;
        this.commonService = commonService;
        this.router = router;
    }
    MonitorPageComponent.prototype.ngOnInit = function () {
        /*let car_id = localStorage.getItem("car_id");
        if(!car_id){
          alert("Something wrong!");
          this.router.navigate(['']);
          return;
        }*/
        this.car = {};
        this.getAllAd();
        //this.getCarById('4CqIoK3oZrbVxPsffotO');
        $(document).ready(function () {
            var slideIndex = 0;
            $("body").on("click", ".adSelectedItem-image", function () {
                var imageSrc = $(this).find('img').attr('src');
                $("#adSelected-previewImage").find('img').attr('src', imageSrc);
            });
            $("#vd-previewImageLeft").click(function () {
                slideIndex -= 1;
                if (slideIndex < 0)
                    slideIndex = $(".adSelectedItem-image").length - 1;
                setImage();
            });
            $("#vd-previewImageRight").click(function () {
                slideIndex += 1;
                if (slideIndex > $(".adSelectedItem-image").length - 1)
                    slideIndex = 0;
                setImage();
            });
            function setImage() {
                var imageSrc = $(".adSelectedItem-image").eq(slideIndex).find('img').attr('src');
                $("#adSelected-previewImage").find('img').attr('src', imageSrc);
            }
        });
    };
    MonitorPageComponent.prototype.getAllAd = function () {
        var _this = this;
        this.adService.getAllAd().subscribe(function (data) {
            _this.ads = data;
            if (data[0])
                _this.getCarByAdId(data[0].id);
            else
                _this.car = {};
        });
    };
    ;
    MonitorPageComponent.prototype.getCarById = function (id) {
        var _this = this;
        this.carService.getCarById(id).subscribe(function (data) {
            _this.car = data;
        });
    };
    MonitorPageComponent.prototype.getCarByAdId = function (ad_id) {
        var _this = this;
        this.carService.getCarByAdId(ad_id).subscribe(function (data) {
            _this.car = data;
            var imgFiles = [];
            _this.imgFiles = [];
            _this.previewImgFile = "";
            imgFiles = JSON.parse(data.imgfiles);
            for (var i = 0; i < imgFiles.length; i++) {
                _this.imgFiles[i] = _this.commonService.baseurl + "/uploads/cars/" + imgFiles[i];
                if (i == 0)
                    _this.previewImgFile = _this.imgFiles[0];
            }
            _this.features = JSON.parse(data.features);
        });
    };
    MonitorPageComponent.prototype.deleteAd = function (ad) {
        var _this = this;
        this.adService.deleteAd(ad.id).subscribe(function (data) {
            _this.deleteVehicleByAdId(ad.id);
            _this.getAllAd();
        });
    };
    MonitorPageComponent.prototype.deleteVehicleByAdId = function (ad_id) {
        var _this = this;
        this.vehicleService.deleteVehicleByAdId(ad_id).subscribe(function (data) {
            _this.deleteCarByVehicleId(data.id);
        });
    };
    MonitorPageComponent.prototype.deleteCarByVehicleId = function (vehicle_id) {
        this.carService.deleteCarByVehicleId(vehicle_id).subscribe(function (data) {
        });
    };
    MonitorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-monitor-page',
            template: __webpack_require__(/*! raw-loader!./monitor-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/monitor-page/monitor-page.component.html"),
            styles: [__webpack_require__(/*! ./monitor-page.component.css */ "./src/app/monitor-page/monitor-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modules_ad_service__WEBPACK_IMPORTED_MODULE_3__["AdService"],
            _modules_vehicle_service__WEBPACK_IMPORTED_MODULE_4__["VehicleService"],
            _modules_car_service__WEBPACK_IMPORTED_MODULE_5__["CarService"],
            _modules_config__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MonitorPageComponent);
    return MonitorPageComponent;
}());



/***/ }),

/***/ "./src/app/new-ad/new-ad.component.css":
/*!*********************************************!*\
  !*** ./src/app/new-ad/new-ad.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1hZC9uZXctYWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/new-ad/new-ad.component.ts":
/*!********************************************!*\
  !*** ./src/app/new-ad/new-ad.component.ts ***!
  \********************************************/
/*! exports provided: NewAdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAdComponent", function() { return NewAdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_ad_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/ad.service */ "./src/app/modules/ad.service.ts");
/* harmony import */ var _modules_vehicle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/vehicle.service */ "./src/app/modules/vehicle.service.ts");
/* harmony import */ var _modules_car_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/car.service */ "./src/app/modules/car.service.ts");
/* harmony import */ var _modules_make_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/make.service */ "./src/app/modules/make.service.ts");
/* harmony import */ var _modules_model_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/model.service */ "./src/app/modules/model.service.ts");
/* harmony import */ var _modules_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/upload.service */ "./src/app/modules/upload.service.ts");
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modules/config */ "./src/app/modules/config.ts");












var NewAdComponent = /** @class */ (function () {
    function NewAdComponent(formBuilder, adService, vehicleService, carService, makeService, modelService, uploadService, commonService, cdRef, route, router) {
        this.formBuilder = formBuilder;
        this.adService = adService;
        this.vehicleService = vehicleService;
        this.carService = carService;
        this.makeService = makeService;
        this.modelService = modelService;
        this.uploadService = uploadService;
        this.commonService = commonService;
        this.cdRef = cdRef;
        this.route = route;
        this.router = router;
        this.submitted = false;
        this.uploadResponse = { status: '', message: '', filePath: '' };
    }
    NewAdComponent.prototype.ngOnInit = function () {
        this.getAllMakes();
        this.years = this.commonService.years;
        this.fueltypes = this.commonService.fueltypes;
        this.conditions = this.commonService.conditions;
        this.transmissions = this.commonService.transmissions;
        this.colors = this.commonService.colors;
        this.features = this.commonService.features;
        this.newForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            make_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            model_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            color: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            transmission: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            year: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fueltype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            condition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.uploadForm = this.formBuilder.group({
            carimg: ['']
        });
        this.user_id = this.route.snapshot.paramMap.get('user_id');
        var self = this;
        $(document).ready(function () {
            $("body").find("#newForm").submit(function (e) {
                e.preventDefault();
                if (!self.onSaveSubmit())
                    return;
                $("#uploadPhoto-box").css("display", "block");
                $("#publishButton-container").css("display", "block");
                $("#uploadPhotoBox-container").css("opacity", "1");
                self.selFeatures = [];
                var index = 0;
                $('input[type="checkbox"]:checked').each(function () {
                    self.selFeatures[index] = this.value;
                    index++;
                });
                /*$("body").on("click", ".uploadPhotoBox-delete", function() {
                  $(this).closest('.uploadPhotoBox-item').css('display', 'none');
                });*/
            });
        });
    };
    Object.defineProperty(NewAdComponent.prototype, "fNew", {
        get: function () { return this.newForm.controls; },
        enumerable: true,
        configurable: true
    });
    NewAdComponent.prototype.ngAfterViewInit = function () {
        $('.selectpicker').selectpicker('refresh');
    };
    NewAdComponent.prototype.getAllMakes = function () {
        var _this = this;
        this.makeService.getAllMakes().subscribe(function (data) {
            _this.makes = data;
            setTimeout("$('.selectpicker').selectpicker('refresh')", 0);
        });
    };
    ;
    NewAdComponent.prototype.getModelByMakeId = function (make_id) {
        var _this = this;
        this.modelService.getAllModelByMakeId(make_id).subscribe(function (data) {
            _this.models = data;
            setTimeout("$('.selectpicker').selectpicker('refresh')", 0);
        });
    };
    NewAdComponent.prototype.onMakeChange = function (event) {
        var value = event.srcElement.value;
        this.getModelByMakeId(value);
    };
    NewAdComponent.prototype.onSaveSubmit = function () {
        this.submitted = true;
        if (this.newForm.invalid) {
            setTimeout("$('.selectpicker').selectpicker('refresh')", 0);
            return false;
        }
        this.ad = {
            id: '',
            title: this.newForm.value.title,
            price: this.newForm.value.price,
            description: this.newForm.value.description,
            user_id: this.user_id,
            city: '',
            no: 0,
            approve: 0,
            publish: false,
            visitcount: 0
        };
        this.addAd();
        return true;
    };
    NewAdComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.uploadForm.get('carimg').setValue(file);
        }
    };
    NewAdComponent.prototype.onUploadSubmit = function () {
        var _this = this;
        $('.loader').show();
        var formData = new FormData();
        formData.append('file', this.uploadForm.get('carimg').value);
        this.uploadService.upload(formData, this.car_id).subscribe(function (data) {
            if (data.success == true) {
                $('.loader').hide();
                _this.getCarAloneById(_this.car_id);
            }
        });
    };
    NewAdComponent.prototype.onDeleteSubmit = function (imgFile) {
        var _this = this;
        var pathArray = imgFile.split("/");
        var imgFileName = pathArray[pathArray.length - 1];
        this.carService.updateCarImageById(this.car_id, imgFileName)
            .subscribe(function (data) {
            _this.getCarAloneById(_this.car_id);
        });
    };
    NewAdComponent.prototype.onPublishSubmit = function () {
        var _this = this;
        this.adService.updateAd(this.vehicle.ad_id, 'publish', 'true').subscribe(function (data) {
            _this.router.navigate(["/car-search"]);
        });
    };
    Object.defineProperty(NewAdComponent.prototype, "f", {
        // get the form short name to access the form fields
        get: function () { return this.newForm.controls; },
        enumerable: true,
        configurable: true
    });
    NewAdComponent.prototype.getCarAloneById = function (car_id) {
        var _this = this;
        this.carService.getCarAloneById(car_id)
            .subscribe(function (data) {
            var imgFiles = [];
            _this.imgFiles = [];
            _this.previewImgFile = "";
            imgFiles = JSON.parse(data.imgfiles);
            for (var i = 0; i < imgFiles.length; i++) {
                _this.imgFiles[i] = _this.commonService.baseurl + "/uploads/cars/" + imgFiles[i];
                if (i == 0)
                    _this.previewImgFile = _this.imgFiles[0];
            }
        });
    };
    NewAdComponent.prototype.addAd = function () {
        var _this = this;
        this.adService.addAd(this.ad)
            .subscribe(function (data) {
            _this.vehicle = {
                id: '',
                ad_id: data.id,
                make_id: _this.newForm.value.make_id,
                model_id: _this.newForm.value.model_id,
                warrenty: true,
                cylinders: 0,
                condition: _this.newForm.value.condition,
                year: Number(_this.newForm.value.year),
                fueltype: _this.newForm.value.fueltype
            };
            _this.addVehicle();
        });
    };
    NewAdComponent.prototype.addVehicle = function () {
        var _this = this;
        this.vehicleService.addVehicle(this.vehicle)
            .subscribe(function (data) {
            _this.car = {
                id: '',
                vehicle_id: data.id,
                distance: '',
                bodytype: 0,
                doors: 0,
                features: JSON.stringify(_this.selFeatures),
                horsepower: 0,
                transmission: _this.newForm.value.transmission,
                color: _this.newForm.value.color,
                fueltype: _this.newForm.value.fueltype,
                regionalspecs: 0,
                imgincrement: 0,
                imgfiles: '[]'
            };
            _this.addCar();
        });
    };
    NewAdComponent.prototype.addCar = function () {
        var _this = this;
        this.carService.addCar(this.car)
            .subscribe(function (data) {
            _this.car_id = data.id;
        });
    };
    NewAdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-ad',
            template: __webpack_require__(/*! raw-loader!./new-ad.component.html */ "./node_modules/raw-loader/index.js!./src/app/new-ad/new-ad.component.html"),
            styles: [__webpack_require__(/*! ./new-ad.component.css */ "./src/app/new-ad/new-ad.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _modules_ad_service__WEBPACK_IMPORTED_MODULE_4__["AdService"],
            _modules_vehicle_service__WEBPACK_IMPORTED_MODULE_5__["VehicleService"],
            _modules_car_service__WEBPACK_IMPORTED_MODULE_6__["CarService"],
            _modules_make_service__WEBPACK_IMPORTED_MODULE_7__["MakeService"],
            _modules_model_service__WEBPACK_IMPORTED_MODULE_8__["ModelService"],
            _modules_upload_service__WEBPACK_IMPORTED_MODULE_9__["UploadService"],
            _modules_config__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewAdComponent);
    return NewAdComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/user.service */ "./src/app/modules/user.service.ts");
/* harmony import */ var _modules_billinginfo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/billinginfo.service */ "./src/app/modules/billinginfo.service.ts");
/* harmony import */ var _modules_ad_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/ad.service */ "./src/app/modules/ad.service.ts");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__);









var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(formBuilder, userService, billinginfoService, adService, route, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.billinginfoService = billinginfoService;
        this.adService = adService;
        this.route = route;
        this.router = router;
        this.submitted = false;
        this.loading = false;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.user = {};
        var user_id = this.route.snapshot.paramMap.get('user_id');
        this.getUserById(user_id);
        this.getAllAdByUserId(user_id);
        this.accountForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
        }, {
            validator: this.MustMatch('password', 'confirmPassword')
        });
        var self = this;
        $(document).ready(function () {
            $('#username').keyup(function (e) {
                if (e.keyCode == 13) {
                    self.submitted = true;
                    if (self.fAccount.username.errors) {
                        return;
                    }
                    var userid = $("#userid").val();
                    var fname = "username";
                    var fvalue = $(this).val();
                    $(this).parent("div").prev().find("a").text(fvalue);
                    $(".fa-check").click();
                    self.updateUser(userid, fname, fvalue);
                }
            });
            $('#confirmPassword').keyup(function (e) {
                if (e.keyCode == 13) {
                    self.submitted = true;
                    if (self.fAccount.password.errors || self.fAccount.confirmPassword.errors) {
                        return;
                    }
                    var userid = $("#userid").val();
                    var fname = "password";
                    var fvalue = $(this).val();
                    fvalue = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__["Md5"].hashStr(fvalue).toString();
                    $(".fa-check").click();
                    self.updateUser(userid, fname, fvalue);
                }
            });
            $('#country, #city, #address, #mobile').keyup(function (e) {
                if (e.keyCode == 13) {
                    self.submitted = true;
                    var userid = $("#userid").val();
                    var fname = $(this).attr('id');
                    var fvalue = $(this).val();
                    $(this).parent("div").prev().find("a").text(fvalue);
                    $(".fa-check").click();
                    self.updateBillingInfo(userid, fname, fvalue);
                }
            });
            $(".fa-pencil").click(function () {
                $(".fa-check").click();
                if ($(this).parent("div").next().find("input").attr('id') == 'password') {
                    $("#confimrPasswordDiv").removeClass("d-none");
                    $("#confimrPasswordDiv").addClass("d-block");
                }
                $(this).parent("div").removeClass("d-block");
                $(this).parent("div").addClass("d-none");
                $(this).parent("div").next().removeClass("d-none");
                $(this).parent("div").next().addClass("d-block");
                $(this).parent("div").next().find("input").focus();
            });
            $(".fa-check").click(function () {
                if ($(this).parent("div").find("input").attr('id') == 'password') {
                    $("#confimrPasswordDiv").removeClass("d-block");
                    $("#confimrPasswordDiv").addClass("d-none");
                }
                $(this).parent("div").removeClass("d-block");
                $(this).parent("div").addClass("d-none");
                $(this).prev("input").val("");
                $(this).parent("div").prev().removeClass("d-none");
                $(this).parent("div").prev().addClass("d-block");
            });
        });
    };
    Object.defineProperty(UserProfileComponent.prototype, "fAccount", {
        get: function () { return this.accountForm.controls; },
        enumerable: true,
        configurable: true
    });
    UserProfileComponent.prototype.MustMatch = function (controlName, matchingControlName) {
        return function (formGroup) {
            var control = formGroup.controls[controlName];
            var matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    };
    UserProfileComponent.prototype.onAccountSubmit = function () {
        this.submitted = true;
        if (this.accountForm.invalid) {
            return;
        }
        this.loading = true;
        $('.modal-dialog-loader').show();
        var updateUser = {
            id: this.user.id,
            username: this.fAccount.username.value,
            password: ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__["Md5"].hashStr(this.fAccount.password.value).toString(),
            type: this.user.type,
            message_id: this.user.message_id,
            billinginfo_id: this.user.billinginfo_id,
            token: this.user.token
        };
        this.updateUser2(this.user.id, updateUser);
    };
    UserProfileComponent.prototype.getUserById = function (id) {
        var _this = this;
        this.userService.getUserById(id).subscribe(function (data) {
            _this.user = data;
            _this.billinginfoService.getBillingInfoById(data.billinginfo_id).subscribe(function (data) {
                var user_id = _this.user.id;
                var username = _this.user.username;
                Object.assign(_this.user, data);
                _this.user.id = user_id;
                _this.user.username = username;
            });
        });
    };
    UserProfileComponent.prototype.getAllAdByUserId = function (id) {
        var _this = this;
        this.adService.getAllAdByUserId(id).subscribe(function (data) {
            _this.ads = data;
        });
    };
    UserProfileComponent.prototype.updateUser = function (user_id, fname, fvalue) {
        this.userService.updateUser(user_id, fname, fvalue)
            .subscribe(function (data) {
        });
    };
    UserProfileComponent.prototype.updateUser2 = function (user_id, user) {
        var _this = this;
        this.userService.updateUser2(user_id, user)
            .subscribe(function (user) {
            $('.modal-dialog-loader').hide();
            if (user && user.token) {
                _this.user = user;
            }
        }, function (err) {
            $('.modal-dialog-loader').hide();
            _this.accountForm.controls["username"].setErrors({ exist: true });
            _this.loading = false;
        });
    };
    UserProfileComponent.prototype.updateBillingInfo = function (user_id, fname, fvalue) {
        var _this = this;
        this.userService.getUserById(user_id)
            .subscribe(function (data) {
            var billinginfo_id = data.billinginfo_id;
            _this.billinginfoService.updateBillingInfo(billinginfo_id, fname, fvalue)
                .subscribe(function (data) {
            });
        });
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _modules_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _modules_billinginfo_service__WEBPACK_IMPORTED_MODULE_5__["BillingInfoService"],
            _modules_ad_service__WEBPACK_IMPORTED_MODULE_6__["AdService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserProfileComponent);
    return UserProfileComponent;
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

module.exports = __webpack_require__(/*! E:\WWW\WWW\Angular & Express & Firebase\work\Angular7CRUD\Angular-CRUD\buyanycaronline\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map