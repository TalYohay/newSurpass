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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"account-page\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-2\">\n                <img src=\"../assets/images/image1.png\" width=\"100%\">\n            </div>\n            <div class=\"col-2\">\n                <div class=\"form-container\">\n                    <div class=\"form-btn\">\n                        <span (click)=\"loginSection()\">Login</span>\n                        <span (click)=\"registerSection()\">Sign up</span>\n                        <hr id=\"indicator\">\n                    </div>\n                    <!-- -------login page--------- -->\n                    <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginForm.valid && login()\" id=\"LoginFormSection\">\n                        <div class=\"form-group\">\n\n                            <input type=\"text\" class=\"form-control\" #email formControlName=\"email\" placeholder=\"Enter your email...\" required [pattern]=\"emailRegex\">\n                            <div *ngIf=\"loginForm.controls['email'].invalid && \n                        (loginForm.controls['email'].dirty || \n                        loginForm.controls['email'].touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"loginForm.controls['email'].errors.required\">\n                                    Email is required!\n                                </div>\n                                <div *ngIf=\"loginForm.controls['email'].errors.pattern\">\n                                    Invalid email!\n                                </div>\n                            </div>\n                        </div>\n\n\n\n                        <div class=\"form-group\">\n\n                            <input type=\"password\" class=\"form-control\" #password formControlName=\"password\" minlength=\"4\" placeholder=\"Enter your password...\" required>\n                            <div *ngIf=\"loginForm.controls['password'].invalid && \n                            (loginForm.controls['password'].dirty || \n                            loginForm.controls['password'].touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"loginForm.controls['password'].errors.required\">\n                                    Password is required!\n                                </div>\n                                <div *ngIf=\"loginForm.controls['password'].errors.minlength\" class=\"alert alert-danger\">\n                                    Enter atleast 4 characters.</div>\n                            </div>\n                        </div>\n                        <button type=\"submit\" class=\"btn\">Login</button>\n                        <div class=\"validation-message\" *ngIf=\"loginFailed\">Login failed!</div>\n                    </form>\n\n                    <!-- -------end of login page--------- -->\n\n\n                    <!-- -------signup page--------- -->\n\n                    <form [formGroup]=\"signUpForm\" (ngSubmit)=\"signUpForm.valid && signUp()\" id=\"RegFormSection\">\n                        <!-- signUp(userDetails) -->\n                        <div class=\"form-group\">\n\n                            <input type=\"text\" class=\"form-control\" #name formControlName=\"name\" placeholder=\"Enter your name...\" [pattern]=\"nameRegex\">\n                            <div *ngIf=\"signUpForm.controls['name'].invalid && \n                                (signUpForm.controls['name'].dirty || \n                                signUpForm.controls['name'].touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"signUpForm.controls['name'].errors.required\">\n                                    Name is required!\n                                </div>\n                                <div *ngIf=\"signUpForm.controls['name'].errors.pattern\">\n                                    Alphabetic characters only!\n                                </div>\n                            </div>\n                        </div>\n\n\n\n\n\n\n                        <div class=\"form-group\">\n\n                            <input type=\"text\" class=\"form-control\" #email formControlName=\"email\" placeholder=\"Enter your email...\" required [pattern]=\"emailRegex\">\n                            <div *ngIf=\"signUpForm.controls['email'].invalid && \n                                (signUpForm.controls['email'].dirty || \n                                signUpForm.controls['email'].touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"signUpForm.controls['email'].errors.required\">\n                                    Email is required!\n                                </div>\n                                <div *ngIf=\"signUpForm.controls['email'].errors.pattern\">\n                                    Invalid email!\n                                </div>\n                            </div>\n                        </div>\n\n\n                        <div class=\"form-group\">\n\n                            <input type=\"password\" class=\"form-control\" #password formControlName=\"password\" minlength=\"4\" placeholder=\"Enter your password...\" required>\n                            <div *ngIf=\"signUpForm.controls['password'].invalid && \n                                (signUpForm.controls['password'].dirty || \n                                signUpForm.controls['password'].touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"signUpForm.controls['password'].errors.required\">\n                                    Password is required!\n                                </div>\n                                <div *ngIf=\"signUpForm.controls['password'].errors.minlength\" class=\"alert alert-danger\">\n                                    Enter atleast 4 characters.</div>\n                            </div>\n                        </div>\n                        <button type=\"submit\" class=\"btn\">Sign Up</button>\n                    </form>\n\n\n                    <div class=\"success\" *ngIf=\"showSuccessMessage\">\n                        Saved successfully\n                    </div>\n\n                    <div class=\"alert alert-danger\" *ngIf=\"serverErrorMessages\">\n                        Email already Exists!\n                    </div>\n                    <!-- -------end of signup page--------- -->\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<app-footer></app-footer>\n<!-- \n<flash-messages></flash-messages> -->\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/accessories/accessories.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/accessories/accessories.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!----search----->\n\n<!-- <div class = \"container\">\n\n    <div class = \"center\">\n      <form class=\"form-inline ml-left\" action=\"/action_page.php\" >\n\n        <input class=\"form-control mr-sm-2\" #inputSearch type=\"text\" placeholder=\"Search...\"  [(ngModel)]=\"searchTerm\" [ngModelOptions]=\"{standalone: true}\">\n        <button class=\"btn btn-success my-2 my-sm-0\" type=\"button\" >Search</button>\n      </form>\n    </div>\n\n</div> -->\n<!----search----->\n<!-- <div class = \"AddedMessage\" *ngIf = \"AddedMessage\">\n  Product added to cart!\n</div>\n<div class = \"RemovedMessage\" *ngIf = \"RemovedMessage\">\n  Product removed from cart!\n</div> -->\n<!-- Show All Products ------------------   ---------->\n\n<!-- Show All Products ---------------------------->\n\n<div class=\"small-container\">\n    <div class=\"row row-2\">\n        <h2>Accessories</h2>\n        <!-- <select>\n<option>Default Sorting</option>\n<option>Sort by price</option>\n<option>Sort by popularity</option>\n<option>Sort by rating</option>\n<option>Sort by sale</option>\n</select> -->\n    </div>\n    <div class=\"row \">\n        <div class=\"col-4\" *ngFor=\"let p of accessories | productFilter:searchTerm | paginate: { itemsPerPage:12, currentPage: pageActual}; let i = index\">\n            <a [routerLink]=\"['/Accessories/product', p._id]\">\n                <img src=\"{{p.product_Img}}\">\n            </a>\n            <h4>{{p.product_Name}}</h4>\n            <div class=\"rating\">\n                <i class=\"fa fa-star\"></i>\n                <i class=\"fa fa-star\"></i>\n                <i class=\"fa fa-star\"></i>\n                <i class=\"fa fa-star\"></i>\n\n            </div>\n            <p>${{p.product_Price}}.00</p>\n        </div>\n        <pagination-controls (pageChange)=\"pageActual = $event\"></pagination-controls>\n\n    </div>\n</div>\n\n\n\n<!-- Show All Products ---------------------------->\n\n<!-- Show All Products ---------------------------->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-2\">\r\n            <h1>Give Your Workout<br> A new Style</h1>\r\n            <p>Success isn't always about greatness. It's about consistency. Consistent<br> hard work gains success. Greatness will come.\r\n            </p>\r\n            <a routerLink=\"products\" class=\"btn\">Explore Now &#8594;</a>\r\n        </div>\r\n        <div class=\"col-2\">\r\n            <img src=\"../assets/images/image1.png\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- ----features catergories------ -->\r\n\r\n<div class=\"catergories\">\r\n    <div class=\"small-container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-3\">\r\n                <a routerLink=\"Clothing\">\r\n                    <div class=\"category-img\">\r\n                        <img src=\"../assets/images/category-1.jpg\">\r\n                    </div>\r\n                    <div class=\"category-text\">\r\n                        <h2>Clothing</h2>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <div class=\"col-3\">\r\n                <a routerLink=\"Shoes\">\r\n                    <div class=\"category-img\">\r\n                        <img src=\"../assets/images/category-2.jpg\">\r\n                    </div>\r\n                    <div class=\"category-text\">\r\n                        <h2>Shoes</h2>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <div class=\"col-3\">\r\n                <a routerLink=\"Accessories\">\r\n                    <div class=\"category-img\">\r\n                        <img src=\"../assets/images/category-3.jpg\">\r\n                    </div>\r\n                    <div class=\"category-text\">\r\n                        <h2>Accessories</h2>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"featuredProducts\">\r\n    <div class=\"small-container\">\r\n        <h2 class=\"title\">Featured Products</h2>\r\n        <hr>\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-4\" *ngFor=\"let p of featuredProducts\">\r\n                <a [routerLink]=\"['/', p.category, 'product', p._id]\">\r\n                    <img src=\"{{p.product_Img}}\">\r\n                </a>\r\n                <h4>{{p.product_Name}}</h4>\r\n                <div class=\"rating\">\r\n                    <i class=\"fa fa-star\"></i>\r\n                    <i class=\"fa fa-star\"></i>\r\n                    <i class=\"fa fa-star\"></i>\r\n                    <i class=\"fa fa-star\"></i>\r\n                    <i class=\"fa fa-star\"></i>\r\n                </div>\r\n                <p>${{p.product_Price}}.00</p>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- ------Offers------ -->\r\n<div class=\"offer\">\r\n    <div class=\"small-container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-2\">\r\n                <img src=\"../assets/images/exclusive.png\" class=\"offer-img\">\r\n            </div>\r\n            <div class=\"col-2\">\r\n                <p>Exclusive Available on Surpass</p>\r\n                <h1>Smart Band 4</h1>\r\n                <small>\r\n                        The Mi Smart Band 4 fetures a 39.9% larger\r\n                        (than Mi Band 3) AMOLRED color full-touch display with\r\n                        adjustable brightness, so everything is clear as can be.\r\n                    </small>\r\n                <a href=\"\" class=\"btn\">Buy Now &#8594;</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- ------End of Offers------ -->\r\n\r\n<div class=\"testimonial\">\r\n    <div class=\"small-container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-3\">\r\n                <i class=\"fa fa-quote-left\"></i>\r\n                <p>\r\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.\r\n                </p>\r\n                <div class=\"rating\">\r\n                    <i class=\"fa fa-star\"></i>\r\n                    <i class=\"fa fa-star\"></i>\r\n                    <i class=\"fa fa-star\"></i>\r\n                    <i class=\"fa fa-star\"></i>\r\n\r\n                </div>\r\n                <img src=\"../assets/images/user-1.png\">\r\n                <h3>Sean Parker</h3>\r\n            </div>\r\n            <div class=\"col-3\">\r\n                <i class=\"fa fa-quote-left\"></i>\r\n                <p>\r\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.\r\n                </p>\r\n                <div class=\"rating\">\r\n                    <i class=\"fa fa-star\"></i>\r\n                    <i class=\"fa fa-star\"></i>\r\n                    <i class=\"fa fa-star\"></i>\r\n                    <i class=\"fa fa-star\"></i>\r\n\r\n                </div>\r\n                <img src=\"../assets/images/user-2.png\">\r\n                <h3>Sean Parker</h3>\r\n            </div>\r\n            <div class=\"col-3\">\r\n                <i class=\"fa fa-quote-left\"></i>\r\n                <p>\r\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.\r\n                </p>\r\n                <div class=\"rating\">\r\n                    <i class=\"fa fa-star\"></i>\r\n                    <i class=\"fa fa-star\"></i>\r\n                    <i class=\"fa fa-star\"></i>\r\n                    <i class=\"fa fa-star\"></i>\r\n\r\n                </div>\r\n                <img src=\"../assets/images/user-3.png\">\r\n                <h3>Sean Parker</h3>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- -------End of Testimonial-------- -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/clothing/clothing.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/clothing/clothing.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!----search----->\n\n<!-- <div class = \"container\">\n\n    <div class = \"center\">\n      <form class=\"form-inline ml-left\" action=\"/action_page.php\" >\n\n        <input class=\"form-control mr-sm-2\" #inputSearch type=\"text\" placeholder=\"Search...\"  [(ngModel)]=\"searchTerm\" [ngModelOptions]=\"{standalone: true}\">\n        <button class=\"btn btn-success my-2 my-sm-0\" type=\"button\" >Search</button>\n      </form>\n    </div>\n\n</div> -->\n<!----search----->\n<!-- <div class = \"AddedMessage\" *ngIf = \"AddedMessage\">\n  Product added to cart!\n</div>\n<div class = \"RemovedMessage\" *ngIf = \"RemovedMessage\">\n  Product removed from cart!\n</div> -->\n<!-- Show All Products ------------------   ---------->\n\n<!-- Show All Products ---------------------------->\n\n<div class=\"small-container\">\n    <div class=\"row row-2\">\n        <h2>Clothing</h2>\n        <!-- <select>\n<option>Default Sorting</option>\n<option>Sort by price</option>\n<option>Sort by popularity</option>\n<option>Sort by rating</option>\n<option>Sort by sale</option>\n</select> -->\n    </div>\n    <div class=\"row \">\n        <div class=\"col-4\" *ngFor=\"let p of clothing | productFilter:searchTerm | paginate: { itemsPerPage:12, currentPage: pageActual}; let i = index\">\n            <a [routerLink]=\"['/Clothing/product', p._id]\">\n                <img src=\"{{p.product_Img}}\">\n            </a>\n            <h4>{{p.product_Name}}</h4>\n            <div class=\"rating\">\n                <i class=\"fa fa-star\"></i>\n                <i class=\"fa fa-star\"></i>\n                <i class=\"fa fa-star\"></i>\n                <i class=\"fa fa-star\"></i>\n\n            </div>\n            <p>${{p.product_Price}}.00</p>\n        </div>\n        <pagination-controls (pageChange)=\"pageActual = $event\"></pagination-controls>\n\n    </div>\n</div>\n\n\n\n<!-- Show All Products ---------------------------->\n\n<!-- Show All Products ---------------------------->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/shoes/shoes.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/shoes/shoes.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!----search----->\n\n<!-- <div class = \"container\">\n\n    <div class = \"center\">\n      <form class=\"form-inline ml-left\" action=\"/action_page.php\" >\n\n        <input class=\"form-control mr-sm-2\" #inputSearch type=\"text\" placeholder=\"Search...\"  [(ngModel)]=\"searchTerm\" [ngModelOptions]=\"{standalone: true}\">\n        <button class=\"btn btn-success my-2 my-sm-0\" type=\"button\" >Search</button>\n      </form>\n    </div>\n\n</div> -->\n<!----search----->\n<!-- <div class = \"AddedMessage\" *ngIf = \"AddedMessage\">\n  Product added to cart!\n</div>\n<div class = \"RemovedMessage\" *ngIf = \"RemovedMessage\">\n  Product removed from cart!\n</div> -->\n<!-- Show All Products ------------------   ---------->\n\n<!-- Show All Products ---------------------------->\n\n<div class=\"small-container\">\n    <div class=\"row row-2\">\n        <h2>Shoes</h2>\n        <!-- <select>\n<option>Default Sorting</option>\n<option>Sort by price</option>\n<option>Sort by popularity</option>\n<option>Sort by rating</option>\n<option>Sort by sale</option>\n</select> -->\n    </div>\n    <div class=\"row\">\n        <div class=\"col-4\" *ngFor=\"let p of shoes | productFilter:searchTerm | paginate: { itemsPerPage:12, currentPage: pageActual}; let i = index\">\n            <a [routerLink]=\"['/Shoes/product', p._id]\">\n                <img src=\"{{p.product_Img}}\">\n            </a>\n            <h4>{{p.product_Name}}</h4>\n            <div class=\"rating\">\n                <i class=\"fa fa-star\"></i>\n                <i class=\"fa fa-star\"></i>\n                <i class=\"fa fa-star\"></i>\n                <i class=\"fa fa-star\"></i>\n\n            </div>\n            <p>${{p.product_Price}}.00</p>\n        </div>\n        <pagination-controls (pageChange)=\"pageActual = $event\"></pagination-controls>\n\n    </div>\n</div>\n\n\n\n<!-- Show All Products ---------------------------->\n\n<!-- Show All Products ---------------------------->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<div class=\"row\">\n    <div class=\"col-75\">\n        <div class=\"checkout-container\">\n\n            <form [formGroup]=\"checkOutForm\" (ngSubmit)=\"checkOutForm.valid && confirmOrder()\">\n                <div class=\"row\">\n\n                    <div class=\"col-50\">\n\n                        <h3>Billing Address</h3>\n                        <!-- <label for=\"fname\"><i class=\"fa fa-user\"></i> Full Name</label> -->\n                        <div class=\"form-group\">\n                            <label for=\"firstName\">First name</label>\n                            <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" #firstName [pattern]=\"nameRegex\">\n                            <div *ngIf=\"checkOutForm.controls['firstName'].invalid && \n                    (checkOutForm.controls['firstName'].dirty || \n                    checkOutForm.controls['firstName'].touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"checkOutForm.controls['firstName'].errors.required\">\n                                    First name is required!\n                                </div>\n                                <div *ngIf=\"checkOutForm.controls['firstName'].errors.pattern\">\n                                    Alphabetic characters only!\n                                </div>\n\n                            </div>\n                        </div>\n                        <!-- <label for=\"fname\"><i class=\"fa fa-user\"></i> Full Name</label> -->\n\n\n                        <!-- <input type=\"text\" id=\"fname\" name=\"firstname\" placeholder=\"John M. Doe\"> -->\n                        <div class=\"form-group\">\n                            <label for=\"lastName\">Last name</label>\n                            <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" #lastName [pattern]=\"nameRegex\">\n                            <div *ngIf=\"checkOutForm.controls['lastName'].invalid && \n                    (checkOutForm.controls['lastName'].dirty || \n                    checkOutForm.controls['lastName'].touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"checkOutForm.controls['lastName'].errors.required\">\n                                    Last name is required!\n                                </div>\n                                <div *ngIf=\"checkOutForm.controls['lastName'].errors.pattern\">\n                                    Alphabetic characters only!\n                                </div>\n                            </div>\n                        </div>\n                        <!-- <input type=\"text\" id=\"fname\" name=\"firstname\" placeholder=\"John M. Doe\"> -->\n\n\n                        <!-- <label for=\"email\"><i class=\"fa fa-envelope\"></i> Email</label> -->\n                        <div class=\"form-group\">\n                            <label for=\"email\">Email</label>\n                            <input type=\"text\" formControlName=\"email\" class=\"form-control\" #email [pattern]=\"emailRegex\">\n                            <div *ngIf=\"checkOutForm.controls['email'].invalid && \n                    (checkOutForm.controls['email'].dirty || \n                    checkOutForm.controls['email'].touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"checkOutForm.controls['email'].errors.required\">\n                                    Email is required!\n                                </div>\n                                <div *ngIf=\"checkOutForm.controls['email'].errors.pattern\">\n                                    Invalid email!\n                                </div>\n                            </div>\n                        </div>\n                        <!-- <label for=\"email\"><i class=\"fa fa-envelope\"></i> Email</label> -->\n\n\n                        <!-- <label for=\"adr\"><i class=\"fa fa-address-card-o\"></i> Phone</label> -->\n                        <div class=\"form-group\">\n                            <label for=\"phone\">Phone</label>\n                            <input type=\"text\" formControlName=\"phone\" class=\"form-control\" #phone [pattern]=\"numberRegex\">\n                            <div *ngIf=\"checkOutForm.controls['phone'].invalid && \n                    (checkOutForm.controls['phone'].dirty || \n                    checkOutForm.controls['phone'].touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"checkOutForm.controls['phone'].errors.required\">\n                                    Phone number is required!\n                                </div>\n                                <div *ngIf=\"checkOutForm.controls['phone'].errors.pattern\">\n                                    Invalid phone number!\n                                </div>\n                            </div>\n                        </div>\n                        <!-- <label for=\"adr\"><i class=\"fa fa-address-card-o\"></i> Phone</label> -->\n\n                        <!-- <label for=\"adr\"><i class=\"fa fa-address-card-o\"></i> Address</label> -->\n                        <div class=\"form-group\">\n                            <label for=\"address\">Address</label>\n                            <input type=\"text\" formControlName=\"address\" class=\"form-control\" #address>\n                            <div *ngIf=\"checkOutForm.controls['address'].invalid && \n                (checkOutForm.controls['address'].dirty || \n                checkOutForm.controls['address'].touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"checkOutForm.controls['address'].errors.required\">\n                                    Address is required!\n                                </div>\n                                <div *ngIf=\"checkOutForm.controls['address'].errors.pattern\">\n                                    Invalid address!\n                                </div>\n                            </div>\n                        </div>\n                        <!-- <label for=\"adr\"><i class=\"fa fa-address-card-o\"></i> Address</label> -->\n\n\n\n                        <!-- <label for=\"city\"><i class=\"fa fa-institution\"></i> City</label> -->\n                        <div class=\"form-group\">\n                            <label for=\"city\">City</label>\n\n                            <select class=\"custom-select d-block w-100\" formControlName=\"city\" class=\"form-control\" #city required>\n                    <option value=\"\" disabled>Choose...</option>\n                    <option>Tel Aviv</option>\n                  </select>\n                            <div *ngIf=\"checkOutForm.controls['city'].invalid && \n                    (checkOutForm.controls['city'].dirty || \n                    checkOutForm.controls['city'].touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"checkOutForm.controls['city'].errors.required\">\n                                    City is required!\n                                </div>\n                            </div>\n                        </div>\n                        <!-- <label for=\"city\"><i class=\"fa fa-institution\"></i> City</label> -->\n                        <div class=\"row\">\n                            <div class=\"col-50\">\n                                <div class=\"form-group\">\n                                    <label for=\"country\">Country</label>\n\n                                    <select class=\"custom-select d-block w-100\" formControlName=\"country\" class=\"form-control\" #country required>\n                            <option value=\"\" disabled selected>Choose...</option>\n                            <option>Israel</option>\n                            \n                          </select>\n                                    <div *ngIf=\"checkOutForm.controls['country'].invalid && \n                            (checkOutForm.controls['country'].dirty || \n                            checkOutForm.controls['country'].touched)\" class=\"alert alert-danger\">\n                                        <div *ngIf=\"checkOutForm.controls['country'].errors.required\">\n                                            Country is required!\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n\n                    </div>\n                    <div class=\"col-50\">\n                        <h3>Payment</h3>\n                        <!-- <label for=\"fname\">Accepted Cards</label>\n                        <div class=\"icon-container\">\n                            <i class=\"fa fa-cc-visa\" style=\"color:navy;\"></i>\n                            <i class=\"fa fa-cc-amex\" style=\"color:blue;\"></i>\n                            <i class=\"fa fa-cc-mastercard\" style=\"color:red;\"></i>\n                            <i class=\"fa fa-cc-discover\" style=\"color:orange;\"></i>\n                        </div> -->\n                        <div class=\"form-group\">\n                            <label for=\"nameOnCard\">Name on card</label>\n                            <input type=\"text\" formControlName=\"nameOnCard\" class=\"form-control\" #nameOnCard [pattern]=\"nameRegex\">\n                            <div *ngIf=\"checkOutForm.controls['nameOnCard'].invalid && \n                    (checkOutForm.controls['nameOnCard'].dirty || \n                    checkOutForm.controls['nameOnCard'].touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"checkOutForm.controls['nameOnCard'].errors.required\">\n                                    Name on card is required!\n                                </div>\n                                <div *ngIf=\"checkOutForm.controls['nameOnCard'].errors.pattern\">\n                                    Alphabetic characters only!\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"creditCardNumber\">Credit card number</label>\n                            <input type=\"text\" formControlName=\"creditCardNumber\" class=\"form-control\" #creditCardNumber [pattern]=\"creditCardRegex\">\n                            <div *ngIf=\"checkOutForm.controls['creditCardNumber'].invalid && \n                (checkOutForm.controls['creditCardNumber'].dirty || \n                checkOutForm.controls['creditCardNumber'].touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"checkOutForm.controls['creditCardNumber'].errors.required\">\n                                    Credit card number is required!\n                                </div>\n                                <div *ngIf=\"checkOutForm.controls['creditCardNumber'].errors.pattern\">\n                                    Invalid credit card number!\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"exp\">Expiration</label>\n                            <input type=\"text\" formControlName=\"exp\" class=\"form-control\" #exp [pattern]=\"expRegex\" placeholder=\"Ex: 12/12\">\n                            <div *ngIf=\"checkOutForm.controls['exp'].invalid && \n            (checkOutForm.controls['exp'].dirty || \n            checkOutForm.controls['exp'].touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"checkOutForm.controls['exp'].errors.required\">\n                                    Expiration is required!\n                                </div>\n                                <div *ngIf=\"checkOutForm.controls['exp'].errors.pattern\">\n                                    Invalid Expiration!\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-50\">\n                                <div class=\"form-group\">\n                                    <label for=\"cvv\">CVV</label>\n                                    <input type=\"text\" formControlName=\"cvv\" class=\"form-control\" #cvv [pattern]=\"cvvRegex\">\n                                    <div *ngIf=\"checkOutForm.controls['cvv'].invalid && \n                        (checkOutForm.controls['cvv'].dirty || \n                        checkOutForm.controls['cvv'].touched)\" class=\"alert alert-danger\">\n                                        <div *ngIf=\"checkOutForm.controls['cvv'].errors.required\">\n                                            CVV is required!\n                                        </div>\n                                        <div *ngIf=\"checkOutForm.controls['cvv'].errors.pattern\">\n                                            Invalid CVV!\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-50\">\n                                <div class=\"form-group\">\n                                    <label for=\"message\">Message</label>\n                                    <textarea formControlName=\"message\" cols=\"50\" class=\"form-control\" mdbInput id=\"exampleFormControlTextarea2\" rows=\"3\"></textarea>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\" [disabled]=\"disabledSubmitButton\">Confirm Order</button>\n            </form>\n        </div>\n    </div>\n\n\n    <div class=\"col-25\">\n        <div class=\"checkout-container\">\n            <h4>Cart <span class=\"price\" style=\"color:black\"><i class=\"fa fa-shopping-cart\"></i> <b>{{productService.itemCount()}}</b></span></h4>\n            <div *ngFor=\"let prod of productAddedToCart;\">\n                <p>{{prod.product_Name}} <span class=\"price\">{{prod.product_Price * prod.product_Quantity | currency: '$'}}</span></p>\n                <small>Quantity: {{prod.product_Quantity}}</small>\n            </div>\n            <hr>\n            <p>Total <span class=\"price\" style=\"color:black\"><b>{{allTotal | currency: '$' }}</b></span></p>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- -------------footer------------- -->\n\n<div class=\"footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"footer-col-1\">\n                <h3>Download Our App</h3>\n                <p>Downdload App for Andriod and ios mobile phone.</p>\n                <div class=\"app-logo\">\n                    <img src=\"../assets/images/play-store.png\">\n                    <img src=\"../assets/images/app-store.png\">\n                </div>\n            </div>\n            <div class=\"footer-col-2\">\n                <img src=\"../assets/images/logo3.png\" height=\"90px\">\n                <p>Our Propuse Is To Sustainably Make the Pleasure and Benefits of Sports Accessible to the Many.\n                </p>\n            </div>\n            <div class=\"footer-col-3\">\n                <h3>Useful Links</h3>\n                <ul>\n                    <li>Coupons</li>\n                    <li>Blog Post</li>\n                    <li>Return Policy</li>\n                    <li>Join Affiliate</li>\n                </ul>\n            </div>\n            <div class=\"footer-col-4\">\n                <h3>Follow Us</h3>\n                <ul>\n                    <li>Facebook</li>\n                    <li>Twitter</li>\n                    <li>Instagram</li>\n                    <li>Youtube</li>\n                </ul>\n            </div>\n        </div>\n        <hr>\n        <p class=\"copyright\">Copyright 2020</p>\n    </div>\n</div>\n<!-- -------------End of Footer------------- -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h3>Login</h3>\n    <div class=\"col-lg-7 col-md-6 mb-4\">\n\n\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginForm.valid && login()\">\n            <div class=\"form-group\">\n                <label>Email</label>\n                <input type=\"text\" class=\"form-control\" #email formControlName=\"email\" placeholder=\"Enter your email...\" required [pattern]=\"emailRegex\">\n                <div *ngIf=\"loginForm.controls['email'].invalid && \n            (loginForm.controls['email'].dirty || \n            loginForm.controls['email'].touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"loginForm.controls['email'].errors.required\">\n                        Email is required!\n                    </div>\n                    <div *ngIf=\"loginForm.controls['email'].errors.pattern\">\n                        Invalid email!\n                    </div>\n                </div>\n            </div>\n\n\n\n            <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" class=\"form-control\" #password formControlName=\"password\" minlength=\"4\" placeholder=\"Enter your password...\" required>\n                <div *ngIf=\"loginForm.controls['password'].invalid && \n                (loginForm.controls['password'].dirty || \n                loginForm.controls['password'].touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"loginForm.controls['password'].errors.required\">\n                        Password is required!\n                    </div>\n                    <div *ngIf=\"loginForm.controls['password'].errors.minlength\" class=\"alert alert-danger\">\n                        Enter atleast 4 characters.</div>\n                </div>\n\n            </div>\n\n\n\n\n            <input type=\"submit\" [disabled]=\"disabledSubmitButton\" mdbBtn color=\"btn btn-primary\" color=\"info\" value=\"Login\">\n            <div class=\"validation-message\" *ngIf=\"loginFailed\">Login failed!</div>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/about/about.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/about/about.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"small-container\">\n    <h2>About Us</h2>\n    <br>\n    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim, risus nec vestibulum imperdiet, eros felis dictum lacus, ut commodo sem lectus nec dolor. Curabitur eu mauris posuere, vehicula orci vitae, finibus neque. Sed bibendum lacinia\n        lacus, id euismod ligula molestie sit amet. Sed iaculis condimentum diam sit amet consectetur. Suspendisse quis libero quis metus laoreet imperdiet at id sem. Sed ac imperdiet magna. Suspendisse id tortor vitae sem pellentesque sagittis vitae\n        sed lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ex quam, rutrum nec arcu eget, fringilla mattis turpis. Proin varius arcu nec leo consequat, vitae cursus lectus scelerisque.\n        Sed bibendum quam quis fringilla facilisis. Aliquam euismod, dui et mattis pretium, dui nulla euismod urna, sit amet hendrerit urna arcu vel augue. Pellentesque et purus tincidunt, egestas nibh sit amet, venenatis risus. Curabitur sed elit et\n        ligula faucibus ultricies.</p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/contactus/contactus.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/contactus/contactus.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"contact-us-title\">\n        Contact Us\n    </div>\n\n    <div class=\"form-container\">\n        <form [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\">\n\n\n\n\n\n\n\n            <div class=\"form-group\">\n                <label for=\"contactFormName\">\n                    Name*\n                    <br>\n                <input type=\"text\" formControlName=\"contactFormName\" class=\"form-control\" #contactFormName [pattern]=\"nameRegex\">\n            </label>\n                <div *ngIf=\"contactForm.controls['contactFormName'].invalid && \n        (contactForm.controls['contactFormName'].dirty || \n        contactForm.controls['contactFormName'].touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"contactForm.controls['contactFormName'].errors.required\">\n                        Name is required!\n                    </div>\n                    <div *ngIf=\"contactForm.controls['contactFormName'].errors.pattern\">\n                        Alphabetic characters only!\n                    </div>\n                </div>\n            </div>\n\n\n            <div class=\"form-group\">\n                <label for=\"contactFormEmail\">Email*\n                    <br>\n                <input type=\"text\" formControlName=\"contactFormEmail\" class=\"form-control\" #contactFormEmail [pattern]=\"emailRegex\">\n            </label>\n                <div *ngIf=\"contactForm.controls['contactFormEmail'].invalid && \n        (contactForm.controls['contactFormEmail'].dirty || \n        contactForm.controls['contactFormEmail'].touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"contactForm.controls['contactFormEmail'].errors.required\">\n                        Email is required!\n                    </div>\n                    <div *ngIf=\"contactForm.controls['contactFormEmail'].errors.pattern\">\n                        Invalid Email!\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Subject*</label>\n                <br>\n                <select formControlName=\"contactFormSubjects\" class=\"form-control\">\n        <option value=\"\" disabled>Choose option</option>\n        <option value=\"Feedback\">Feedback</option>\n        <option value=\"Report a bug\">Report a bug</option>\n        <option value=\"Feature request\">Feature request</option>\n      </select>\n\n            </div>\n            <div class=\"form-group\">\n                <label for=\"contactFormMessage\">Message*</label>\n                <br>\n                <textarea formControlName=\"contactFormMessage\" class=\"form-control\" #contactFormMessage rows=\"5\" cols=\"10\"></textarea>\n                <div *ngIf=\"contactForm.controls['contactFormMessage'].invalid && \n        (contactForm.controls['contactFormMessage'].dirty || \n        contactForm.controls['contactFormMessage'].touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"contactForm.controls['contactFormMessage'].errors.required\">\n                        Message is required!\n                    </div>\n                </div>\n            </div>\n\n\n\n            <hr>\n            <!-- Send button -->\n            <!-- <div class=\"btn\" type=\"submit\">Send</div> -->\n            <button class=\"btn\" type=\"submit\" [disabled]=\"!contactForm.valid\">Confirm Order</button>\n\n\n\n        </form>\n        <!-- Default form contact -->\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/home/home.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/home/home.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p> home works</p>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- NEW NAV BAR -->\n\n\n\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.5.0/css/all.css\">\n<div class=\"header\">\n    <div class=\"container\">\n        <div class=\"navbar\">\n            <div class=\"logo\">\n                <a routerLink=\"/\"><img src=\"../assets/images/logo3.png\" width=\"110px\"></a>\n            </div>\n            <nav>\n                <ul id=\"MenuItems\">\n                    <li><a routerLink=\"/\">Home</a></li>\n                    <li><a routerLink=\"products\">Products</a></li>\n                    <li><a routerLink=\"about\">About</a></li>\n                    <li><a routerLink=\"contactus\">Contact</a></li>\n                    <li *ngIf=\"userService.loggedOut()\"><a routerLink=\"account\">Account</a></li>\n                    <li *ngIf=\"userService.loggedIn()\"><a routerLink=\"profile\"><span class=\"fas fa-user\"></span>{{this.name}}</a></li>\n                    <li *ngIf=\"userService.loggedIn()\"><a (click)=\"onLogoutClick()\"><span  class=\"fas fa-sign-in-alt\"></span>Logout</a></li>\n\n                </ul>\n            </nav>\n            <div class=\"cart\">\n                <a routerLink=\"shopping-cart\"><img src=\"../assets/images/cart.png\" width=\"30px\" height=\"30px\">\n                    <span class=\"desktop-badge desktop-melon\">{{ productService.itemCount()}}</span>\n\n                </a>\n            </div>\n            <img src=\"../assets/images/menu.png\" class=\"menu-icon\" (click)=\"menutoggle()\">\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"AddedMessage\" *ngIf=\"AddedMessage\">\n    Product added to cart!\n</div>\n<div class=\"RemovedMessage\" *ngIf=\"RemovedMessage\">\n    Product removed from cart!\n</div>\n\n\n<div class=\"container\">\n\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <img alt=\"bla\" src=\"{{productData.product_Img}}\" style=\"margin: 20px 10px; width: 300px; height: 281px\">\n        </div>\n        <div class=c ol-md-8>\n            <div class=\"text-header\">\n                <br>\n                <h2>{{productData.product_Name}}</h2>\n            </div>\n            <p>{{productData.product_Description}}</p>\n            <p>${{productData.product_Price}}</p>\n\n            <a mdbBtn color=\"primary\" mdbWavesEffect (click)='AddToCart(productData); CountCartQuantity(productData)'>Add</a>\n            <a mdbBtn color=\"danger\" mdbWavesEffect (click)='RemoveFromCart(productData)'>Remove</a>\n\n        </div>\n    </div>\n</div> -->\n\n\n<!-- --------------------------------------------------------------------------------------- -->\n\n<!-- -------Single Product details------- -->\n<div class=\"small-container single-product\">\n    <div class=\"row\">\n        <div class=\"col-2\">\n            <img src=\"{{productData.product_Img}}\" width=\"100%\" id=\"productImg\">\n\n            <!-- <div class=\"small-img-row\">\n                        <div class=\"small-img-col\">\n                            <img src=\"images/gallery-1.jpg\" width=\"100%\" class=\"small-img\">\n                        </div>\n                        <div class=\"small-img-col\">\n                            <img src=\"images/gallery-2.jpg\" width=\"100%\" class=\"small-img\">\n                        </div>\n                        <div class=\"small-img-col\">\n                            <img src=\"images/gallery-3.jpg\" width=\"100%\" class=\"small-img\">\n                        </div>\n                        <div class=\"small-img-col\">\n                            <img src=\"images/gallery-4.jpg\" width=\"100%\" class=\"small-img\">\n                        </div>\n                    </div> -->\n\n        </div>\n        <div class=\"col-2\">\n            <p>\n                <a routerLink=\"/\">Home / </a>\n                <a routerLink=\"/{{productData.category}}\">{{productData.category}}</a>\n            </p>\n            <h1>{{productData.product_Name}}</h1>\n            <h4>${{productData.product_Price}}.00</h4>\n            <!-- <select>\n                            <option>Select Size</option>\n                            <option>XXL</option>\n                            <option>XL</option>\n                            <option>Large</option>\n                            <option>Medium</option>\n                            <option>Small</option>\n                        </select> -->\n            <!-- <input type=\"number\" value=\"1\" min=\"1\" id=\"productQuantity\"> -->\n            <a class=\"btn\" (click)='AddToCart(productData); CountCartQuantity(productData)'>Add to Cart</a>\n            <h3>Product Details <i class=\"fa fa-indent\"></i></h3>\n            <br>\n            <p>{{productData.product_Description}}\n            </p>\n        </div>\n    </div>\n</div>\n<!-- <a mdbBtn color=\"primary\" mdbWavesEffect (click)='AddToCart(productData); CountCartQuantity(productData)'>Add</a>\n<a mdbBtn color=\"danger\" mdbWavesEffect (click)='RemoveFromCart(productData)'>Remove</a> -->\n<!-- \n    <div class = \"container\">\n        <div class = \"title\"><strong>Recommended Products:</strong></div>\n        <br>\n        <div class = \"row\">\n            <div class = \"row justify-content-center align-items-center\">\n                \n            <div *ngFor = \"let produ of recommendedProducts\">\n           \n                <div class = \"col\">\n                    <mdb-card class = \"space text-center\" style=\"border: 0.1em solid grey;\">\n                        \n                        Card image\n<div class=\" mx-auto \">\n\n    <a [routerLink]=\"['product', produ._id]\">\n        <div class=i mageResize>\n            <mdb-card-img src=\"{{produ.product_Img}}\" alt=\"Card image cap\"></mdb-card-img>\n        </div>\n    </a>\n</div>\n\n<mdb-card-body>\n\n\n    <mdb-card-title>\n        <h4>{{produ.product_Name}}</h4>\n    </mdb-card-title>\n\n\n    <mdb-card-text>\n        <p>{{produ.product_Description}}</p>\n        ${{produ.product_Price}}\n    </mdb-card-text>\n\n\n</mdb-card-body>\n</mdb-card>\n</div>\n</div>\n</div>\n</div>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile-orders/profile-orders.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile-orders/profile-orders.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div *ngIf=\"myOrders && myOrders.length > 0\">\n        <h2>Your Orders:</h2>\n        <div *ngFor=\"let order of myOrders\">\n            <div class=\"one-order\">\n\n                <table>\n                    <!-- <th> -->\n                    <tr>\n                        <td>\n                            Ordered on: {{order.createdAt}} | <span>Order id: {{order._id}}</span>\n                        </td>\n                    </tr>\n                    <!-- </th> -->\n                    <tbody>\n                        <div *ngFor=\"let orderItem of order.orderItems\">\n                            <tr>\n                                <th class=\"table-header-row\">\n                                    Product Details\n                                </th>\n                            </tr>\n                            <tr>\n                                <td class=\"row\">\n                                    <div class=\"col-20\">\n                                        <img alt=\"{{orderItem.product_Img}}\" src=\"{{orderItem.product_Img}}\" style=\"margin: 20px 10px; width: 100px; height: 100px\">\n                                    </div>\n                                    <div class=\"col-80\">\n                                        <!-- <div class=\"product-details\"> -->\n                                        <p>Product: {{orderItem.product_Name}}</p>\n                                        <p>Price: {{orderItem.product_Price / orderItem.product_Quantity | currency: '$'}}</p>\n                                        <p>Quantity: {{orderItem.product_Quantity}}</p>\n                                        <p>Total: {{orderItem.product_Price | currency: '$'}}</p>\n                                        <!-- </div> -->\n                                    </div>\n                                </td>\n                            </tr>\n                        </div>\n                    </tbody>\n                </table>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"no-orders\" *ngIf=\"!myOrders || myOrders.length === 0\">\n    <h2>You have no orders!</h2>\n    <a routerLink=\"/\" class=\"btn\">Continue Shopping &#8594;</a>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"user\">\n    <div class=\"container\">\n        <h2 class=\"page-header\">Hi {{user.name}}</h2>\n        <br>\n        <div class=\"personal-details-block\">\n            <div class=\"personal-details-title\">\n                Personal Details\n            </div>\n            <div class=\"my-details-content\">\n                <p><label>Name:</label> {{user.name}}</p>\n                <p><label>Email:</label> {{user.email}}</p>\n            </div>\n\n        </div>\n        <div>\n            <a class=\"btn\" routerLink=\"/profile/orders\"> My Orders <span class=\"fas fa-box-open\" ></span></a>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-cart/shopping-cart.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-cart/shopping-cart.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class = \"container\" *ngIf = \"itemInCart()\">\n        <div class = \"table-responsive\">\n            <table class = \"table\">\n                <thead class=\"black white-text\">\n                    <tr class=\"text-center\">\n                        <td><strong>Image</strong></td>\n                        <td ><strong>Product</strong></td>\n                        <td><strong>Description</strong></td>\n                        <td><strong>Price</strong></td>\n                        <td><strong>Quantity</strong></td>\n                        <td><strong>Add / Remove</strong></td>\n                        <td colspan=\"10\" ><strong>Total For Item</strong></td>\n        \n                    </tr>\n                </thead>\n                    <tbody class=\"text-center\">\n                        <tr *ngFor = \"let prod of productAddedToCart;\">\n                            <td><img src = {{prod.product_Img}} style = \"height:70px; width:70px;\"></td>\n                            <td>{{prod.product_Name}}</td>\n                            <td>{{prod.product_Description}}</td>\n                            <td>{{prod.product_Price | currency: '$'}}</td>\n                            <td>{{prod.product_Quantity}}</td>\n                            <td><a class=\"btn btn-sm\"  mdbBtn color=\"success\" mdbWavesEffect (click)=\"onAddQuantity(prod); CountCartQuantity(prod)\">+</a>\n                            <a class=\"btn btn-sm\" mdbBtn color=\"danger\" mdbWavesEffect (click)= \"onRemoveQuantity(prod)\">-</a></td> \n                            <td colspan=\"6\">{{prod.product_Price * prod.product_Quantity | currency: '$'}}</td>\n                        </tr>\n                        \n                    </tbody>\n                    <tfoot >\n                            <tr>\n                                <td><strong>Total Price</strong></td>\n                                <td colspan=\"12\" class=\"text-right\"><strong>{{allTotal | currency: '$' }}</strong></td>\n                                </tr>\n                                <tr>\n                         <td routerLink = \"/\"  class=\"btn btn-warning btn-block\" mdbWavesEffect><i class=\"fa fa-angle-left\"></i> Continue Shopping</td>\n                         <td colspan=\"10\" class=\"hidden-xs\" style=\" border: 0\"></td>\n                    \n                        <td *ngIf = \"userService.loggedIn()\" routerLink = \"/checkout\"  class=\"text-right\" class=\"btn btn-success btn-block\" mdbWavesEffect> Checkout <i class=\"fa fa-angle-right\"></i></td>\n                                            \n                        <td *ngIf = \"userService.loggedOut()\" routerLink = \"/login\"  class=\"text-right\" class=\"btn btn-danger btn-block\" mdbWavesEffect> Checkout? Please login <i class=\"fa fa-angle-right\"></i></td>\n\n                    </tr>\n                        <tr>\n                        <td mdbBtn color=\"danger\"  mdbWavesEffect (click)= \"clearCart()\"> <span class = \"fa fa-trash\"></span> Clear Cart</td>\n                    </tr>\n                    </tfoot>\n            </table>\n        </div>\n    </div>\n    <div class = \"container\" class = \"emptyCart text-center\" *ngIf = \"cartIsEmpty()\">\n        <h2>Your cart is empty!</h2>\n    </div>\n -->\n\n\n<!-- --------Cart Items Details------- -->\n<div class=\"container\" *ngIf=\"itemInCart()\">\n    <div class=\"small-container cart-page\">\n        <table>\n            <tr>\n                <th class=\"product\">Product</th>\n                <th>Quantity</th>\n                <th>Subtotal</th>\n            </tr>\n            <tr *ngFor=\"let prod of productAddedToCart;\">\n                <td>\n                    <div class=\"cart-info\">\n\n                        <img src=\"{{prod.product_Img}}\">\n\n                        <div>\n                            <p>{{prod.product_Name}}</p>\n                            <small>Price: {{prod.product_Price | currency: '$'}}</small>\n                            <br>\n                            <a class=\"btn\" (click)='removeProduct(prod)'>Remove</a>\n                        </div>\n                    </div>\n\n                </td>\n                <td>\n                    <table class=\"qtyArea\">\n                        <th> <a (click)=\"onRemoveQuantity(prod)\">-</a></th>\n\n                        <th class=\"qtyNumber\">{{prod.product_Quantity}}</th>\n                        <th> <a (click)=\"onAddQuantity(prod); CountCartQuantity(prod)\">+</a></th>\n                    </table>\n                </td>\n                <td>{{prod.product_Price * prod.product_Quantity | currency: '$'}}</td>\n            </tr>\n        </table>\n        <div class=\"total-price\">\n            <table>\n                <tr>\n                    <td>Total</td>\n                    <td>{{allTotal | currency: '$' }}</td>\n                </tr>\n            </table>\n        </div>\n        <a routerLink=\"/checkout\" class=\"checkoutBtn\">Checkout &#8594;</a>\n    </div>\n</div>\n<div class=\"small-container cart-page\" *ngIf=\"cartIsEmpty()\">\n    <div class=\"empty-cart\">\n        <h2>Your cart is empty!</h2>\n        <a routerLink=\"/\" class=\"btn\">Continue Shopping &#8594;</a>\n    </div>\n</div>\n<!-- --------End of Cart Items Details------- -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-all-products/show-all-products.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/show-all-products/show-all-products.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Show All Products ---------------------------->\n\n<div class=\"small-container\">\n    <div class=\"row row-2\">\n        <h2>All Products</h2>\n        <!-- <select>\n<option>Default Sorting</option>\n<option>Sort by price</option>\n<option>Sort by popularity</option>\n<option>Sort by rating</option>\n<option>Sort by sale</option>\n</select> -->\n    </div>\n\n\n\n\n    <div class=\"row \">\n\n        <div class=\"col-4\" *ngFor=\"let p of lstProducts | productFilter:searchTerm | paginate: { itemsPerPage:12, currentPage: pageActual}; let i = index\">\n\n\n            <a [routerLink]=\"['/', p.category, 'product', p._id]\">\n\n                <img src=\"{{p.product_Img}}\">\n            </a>\n            <h4>{{p.product_Name}}</h4>\n            <div class=\"rating\">\n                <i class=\"fa fa-star\"></i>\n                <i class=\"fa fa-star\"></i>\n                <i class=\"fa fa-star\"></i>\n                <i class=\"fa fa-star\"></i>\n                <i class=\"fa fa-star-o\"></i>\n            </div>\n            <p>${{p.product_Price}}.00</p>\n        </div>\n\n        <pagination-controls (pageChange)=\"pageActual = $event\"></pagination-controls>\n\n    </div>\n</div>\n\n\n\n<!-- Show All Products ---------------------------->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class = \"container\">\n    <h3>Sign up</h3>\n    <div class=\"col-lg-7 col-md-6 mb-4\">\n  \n    \n        <form [formGroup] = \"signUpForm\" (ngSubmit) = \"signUpForm.valid && signUp()\">\n            <!-- signUp(userDetails) -->\n        <div class = form-group>\n            <label for = \"name\">Name</label>\n            <input type = \"text\" class = \"form-control\" #name  formControlName = \"name\" placeholder=\"Enter your name...\"\n              [pattern] = \"nameRegex\">\n            <div *ngIf=\"signUpForm.controls['name'].invalid && \n            (signUpForm.controls['name'].dirty || \n            signUpForm.controls['name'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"signUpForm.controls['name'].errors.required\">\n            Name is required!\n        </div>\n        <div *ngIf=\"signUpForm.controls['name'].errors.pattern\">\n            Alphabetic characters only!\n        </div>\n        </div>\n    </div>\n\n\n\n\n\n    \n        <div class = \"form-group\">\n            <label>Email</label>    \n        <input type = \"text\" class = \"form-control\" #email formControlName = \"email\" placeholder=\"Enter your email...\"\n        required [pattern] = \"emailRegex\">\n                <div *ngIf=\"signUpForm.controls['email'].invalid && \n        (signUpForm.controls['email'].dirty || \n        signUpForm.controls['email'].touched)\" class=\"alert alert-danger\">\n    <div *ngIf=\"signUpForm.controls['email'].errors.required\">\n        Email is required!\n    </div>\n    <div *ngIf=\"signUpForm.controls['email'].errors.pattern\">\n        Invalid email!\n    </div>\n    </div>\n        </div>\n        \n\n    <div class = \"form-group\">\n        <label>Password</label>\n        <input type = \"password\" class = \"form-control\" #password  formControlName = \"password\"  minlength=\"4\" placeholder=\"Enter your password...\"\n       required>\n        <div *ngIf=\"signUpForm.controls['password'].invalid && \n        (signUpForm.controls['password'].dirty || \n        signUpForm.controls['password'].touched)\" class=\"alert alert-danger\">\n    <div *ngIf=\"signUpForm.controls['password'].errors.required\">\n        Password is required!\n    </div>\n      <div *ngIf = \"signUpForm.controls['password'].errors.minlength\" class = \"alert alert-danger\">\n          Enter atleast 4 characters.</div>\n        </div>\n    </div>\n        <input type = \"submit\"  [disabled]=\"disabledSubmitButton\" mdbBtn color = \"btn btn-primary\" color=\"info\" value = \"Sign Up\">\n</form>\n\n\n    <div class = \"success\" *ngIf = \"showSuccessMessage\">\n        Saved successfully\n    </div>\n\n    <div  class=\"alert alert-danger\" *ngIf = \"serverErrorMessages\">\n        Email already Exists!\n    </div>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/account/account.component.css":
/*!***********************************************!*\
  !*** ./src/app/account/account.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ----account page------ */\r\n\r\n.container {\r\n    max-width: 1300px;\r\n    margin: auto;\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n}\r\n\r\n.row {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n}\r\n\r\n.col-2 {\r\n    flex-basis: 50%;\r\n    min-width: 300px;\r\n}\r\n\r\n.col-2 img {\r\n    max-width: 100%;\r\n    padding: 50px 0;\r\n}\r\n\r\n.account-page {\r\n    padding: 50px 0;\r\n    background: radial-gradient(#fff, #e3eaec);\r\n}\r\n\r\n.form-container {\r\n    background: #fff;\r\n    width: 300px;\r\n    height: 400px;\r\n    position: relative;\r\n    text-align: center;\r\n    padding: 20px 0;\r\n    margin: auto;\r\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);\r\n    overflow: hidden;\r\n}\r\n\r\n.form-container span {\r\n    font-weight: bold;\r\n    padding: 0 10px;\r\n    color: #555;\r\n    cursor: pointer;\r\n    width: 100px;\r\n    display: inline-block;\r\n}\r\n\r\n.form-btn {\r\n    display: inline-block;\r\n}\r\n\r\n.form-container form {\r\n    max-width: 300px;\r\n    padding: 0 20px;\r\n    position: absolute;\r\n    top: 130px;\r\n    -webkit-transition: -webkit-transform 1s;\r\n    transition: -webkit-transform 1s;\r\n    transition: transform 1s;\r\n    transition: transform 1s, -webkit-transform 1s;\r\n}\r\n\r\nform input {\r\n    width: 150%;\r\n    height: 30px;\r\n    margin: 10px 0;\r\n    padding: 0 10px;\r\n    border: 1px solid #ccc;\r\n}\r\n\r\nform .btn {\r\n    width: 150%;\r\n    border: none;\r\n    cursor: pointer;\r\n    margin: 10px 0;\r\n}\r\n\r\nform .btn:focus {\r\n    outline: none;\r\n}\r\n\r\n#LoginFormSection {\r\n    left: -300px;\r\n}\r\n\r\n#RegFormSection {\r\n    left: 0\r\n}\r\n\r\n#indicator {\r\n    width: 100px;\r\n    border: none;\r\n    background: #ff523b;\r\n    height: 3px;\r\n    margin-top: 8px;\r\n    -webkit-transform: translateX(100px);\r\n            transform: translateX(100px);\r\n    -webkit-transition: -webkit-transform 1s;\r\n    transition: -webkit-transform 1s;\r\n    transition: transform 1s;\r\n    transition: transform 1s, -webkit-transform 1s;\r\n}\r\n\r\n.btn {\r\n    display: inline-block;\r\n    background: #ff523b;\r\n    color: #fff;\r\n    padding: 8px 30px;\r\n    margin: 30px 0;\r\n    border-radius: 30px;\r\n    -webkit-transition: background 0.5s;\r\n    transition: background 0.5s;\r\n}\r\n\r\n.btn:hover {\r\n    background: #563434;\r\n}\r\n\r\n.validation-message {\r\n    color: red;\r\n}\r\n\r\n.alert {\r\n    background-color: transparent;\r\n    border: 0;\r\n    color: red;\r\n    font-size: 14px;\r\n}\r\n\r\n.success {\r\n    padding: 20px;\r\n    background-color: transparent;\r\n    border: 0;\r\n    color: green;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n@media screen and (max-width:800px) {\r\n    /* .categories {\r\n        padding-bottom: 500px !important;\r\n    } */\r\n    .row {\r\n        text-align: center;\r\n    }\r\n    .col-2,\r\n    .col-3,\r\n    .col-4 {\r\n        flex-basis: 100%;\r\n    }\r\n    /* .account-page {\r\n        margin-bottom: auto;\r\n    } */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCOztBQUUzQjtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHdDQUF3QjtJQUF4QixnQ0FBd0I7SUFBeEIsd0JBQXdCO0lBQXhCLDhDQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7SUFDZixvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLHdDQUF3QjtJQUF4QixnQ0FBd0I7SUFBeEIsd0JBQXdCO0lBQXhCLDhDQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG1DQUEyQjtJQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJOztPQUVHO0lBQ0g7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTs7O1FBR0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7O09BRUc7QUFDUCIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLS0tLWFjY291bnQgcGFnZS0tLS0tLSAqL1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEzMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmNvbC0yIHtcclxuICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5jb2wtMiBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNTBweCAwO1xyXG59XHJcblxyXG4uYWNjb3VudC1wYWdlIHtcclxuICAgIHBhZGRpbmc6IDUwcHggMDtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjZmZmLCAjZTNlYWVjKTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZm9ybS1idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgZm9ybSB7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMzBweDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcclxufVxyXG5cclxuZm9ybSBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTUwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuZm9ybSAuYnRuIHtcclxuICAgIHdpZHRoOiAxNTAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuXHJcbmZvcm0gLmJ0bjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jTG9naW5Gb3JtU2VjdGlvbiB7XHJcbiAgICBsZWZ0OiAtMzAwcHg7XHJcbn1cclxuXHJcbiNSZWdGb3JtU2VjdGlvbiB7XHJcbiAgICBsZWZ0OiAwXHJcbn1cclxuXHJcbiNpbmRpY2F0b3Ige1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmNTIzYjtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY1MjNiO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA4cHggMzBweDtcclxuICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTYzNDM0O1xyXG59XHJcblxyXG4udmFsaWRhdGlvbi1tZXNzYWdlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5zdWNjZXNzIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODAwcHgpIHtcclxuICAgIC8qIC5jYXRlZ29yaWVzIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTAwcHggIWltcG9ydGFudDtcclxuICAgIH0gKi9cclxuICAgIC5yb3cge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5jb2wtMixcclxuICAgIC5jb2wtMyxcclxuICAgIC5jb2wtNCB7XHJcbiAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgIH1cclxuICAgIC8qIC5hY2NvdW50LXBhZ2Uge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICB9ICovXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let AccountComponent = class AccountComponent {
    constructor(userService, router, fb) {
        this.userService = userService;
        this.router = router;
        this.fb = fb;
        this.disabledSubmitButton = true;
        this.emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        this.nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    }
    oninput() {
        if (this.loginForm.valid) {
            this.disabledSubmitButton = false;
        }
    }
    ngOnInit() {
        this.LoginFormSection = document.getElementById("LoginFormSection");
        this.RegFormSection = document.getElementById("RegFormSection");
        this.indicator = document.getElementById("indicator");
        this.loginForm = this.fb.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        }),
            this.signUpForm = this.fb.group({
                name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)]],
            });
    }
    registerSection() {
        this.RegFormSection.style.transform = "translateX(0px)";
        this.LoginFormSection.style.transform = "translateX(0px)";
        this.indicator.style.transform = "translateX(100px)";
    }
    loginSection() {
        this.RegFormSection.style.transform = "translateX(300px)";
        this.LoginFormSection.style.transform = "translateX(300px)";
        this.indicator.style.transform = "translateX(0px)";
    }
    login() {
        console.log("Login form:", this.loginForm.value);
        if (this.loginForm.valid) {
            this.userService.Login(this.loginForm.value).subscribe(data => {
                console.log("data is:", data);
                this.userService.storeUserData(data['token'], data['user']);
                console.log("data.token is:", data['token'], "data.user is:", data['user']);
                this.router.navigate(['/profile']);
            }, err => {
                console.log(err, "Login failed!");
                this.loginFailed = true;
                setTimeout(() => this.loginFailed = false, 4000);
            });
        }
    }
    signUp() {
        // let userDetails: any = {}
        // userDetails.name = this.signUpForm.controls['name'].value;
        // userDetails.email = this.signUpForm.controls['email'].value;
        // userDetails.password = this.signUpForm.controls['password'].value;
        this.userService.Signup(this.signUpForm.value).subscribe(res => {
            this.showSuccessMessage = true;
            setTimeout(() => this.showSuccessMessage = false, 4000);
            this.signUpForm.reset();
            this.signUpForm.setValue({
                name: '',
                email: '',
                password: ''
            });
        }, err => {
            this.serverErrorMessages = true;
        });
    }
};
AccountComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input')
], AccountComponent.prototype, "oninput", null);
AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")).default]
    })
], AccountComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _navbar_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/about/about.component */ "./src/app/navbar/about/about.component.ts");
/* harmony import */ var _navbar_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/contactus/contactus.component */ "./src/app/navbar/contactus/contactus.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _show_all_products_show_all_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-all-products/show-all-products.component */ "./src/app/show-all-products/show-all-products.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _categories_clothing_clothing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./categories/clothing/clothing.component */ "./src/app/categories/clothing/clothing.component.ts");
/* harmony import */ var _categories_shoes_shoes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./categories/shoes/shoes.component */ "./src/app/categories/shoes/shoes.component.ts");
/* harmony import */ var _categories_accessories_accessories_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./categories/accessories/accessories.component */ "./src/app/categories/accessories/accessories.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/authguard.service */ "./src/app/services/authguard.service.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _profile_profile_orders_profile_orders_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./profile/profile-orders/profile-orders.component */ "./src/app/profile/profile-orders/profile-orders.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");





// import { HomeComponent } from './navbar/home/home.component';















const routes = [
    // {path:'', component: HomeComponent},
    { path: 'products', component: _show_all_products_show_all_products_component__WEBPACK_IMPORTED_MODULE_6__["ShowAllProductsComponent"] },
    { path: '', component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_8__["CategoriesComponent"] },
    { path: 'about', component: _navbar_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'contactus', component: _navbar_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_4__["ContactusComponent"] },
    { path: 'shopping-cart', component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartComponent"] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__["CheckoutComponent"], canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"]] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_15__["AuthguardService"]] },
    { path: 'profile/orders', component: _profile_profile_orders_profile_orders_component__WEBPACK_IMPORTED_MODULE_18__["ProfileOrdersComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_15__["AuthguardService"]] },
    { path: 'Accessories/product/:id', component: _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"] },
    { path: 'Shoes/product/:id', component: _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"] },
    { path: 'Clothing/product/:id', component: _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"] },
    { path: 'Clothing', component: _categories_clothing_clothing_component__WEBPACK_IMPORTED_MODULE_9__["ClothingComponent"] },
    { path: 'Shoes', component: _categories_shoes_shoes_component__WEBPACK_IMPORTED_MODULE_10__["ShoesComponent"] },
    { path: 'Accessories', component: _categories_accessories_accessories_component__WEBPACK_IMPORTED_MODULE_11__["AccessoriesComponent"] },
    { path: 'account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_19__["AccountComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ExceriseOne';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _show_all_products_show_all_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./show-all-products/show-all-products.component */ "./src/app/show-all-products/show-all-products.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _navbar_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/home/home.component */ "./src/app/navbar/home/home.component.ts");
/* harmony import */ var _navbar_about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar/about/about.component */ "./src/app/navbar/about/about.component.ts");
/* harmony import */ var _navbar_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navbar/contactus/contactus.component */ "./src/app/navbar/contactus/contactus.component.ts");
/* harmony import */ var _categories_clothing_clothing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./categories/clothing/clothing.component */ "./src/app/categories/clothing/clothing.component.ts");
/* harmony import */ var _categories_shoes_shoes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./categories/shoes/shoes.component */ "./src/app/categories/shoes/shoes.component.ts");
/* harmony import */ var _categories_accessories_accessories_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./categories/accessories/accessories.component */ "./src/app/categories/accessories/accessories.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./search.pipe */ "./src/app/search.pipe.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm2015/ngx-filter-pipe.js");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/authguard.service */ "./src/app/services/authguard.service.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _profile_profile_orders_profile_orders_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./profile/profile-orders/profile-orders.component */ "./src/app/profile/profile-orders/profile-orders.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
























// MDB Angular Pro














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartComponent"],
            _show_all_products_show_all_products_component__WEBPACK_IMPORTED_MODULE_8__["ShowAllProductsComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
            _navbar_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _navbar_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
            _navbar_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_14__["ContactusComponent"],
            _search_pipe__WEBPACK_IMPORTED_MODULE_21__["SearchPipe"],
            _product_product_component__WEBPACK_IMPORTED_MODULE_22__["ProductComponent"],
            _categories_categories_component__WEBPACK_IMPORTED_MODULE_26__["CategoriesComponent"],
            _categories_clothing_clothing_component__WEBPACK_IMPORTED_MODULE_15__["ClothingComponent"],
            _categories_shoes_shoes_component__WEBPACK_IMPORTED_MODULE_16__["ShoesComponent"],
            _categories_accessories_accessories_component__WEBPACK_IMPORTED_MODULE_17__["AccessoriesComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_28__["SignupComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_30__["ProfileComponent"],
            _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_32__["CheckoutComponent"],
            _profile_profile_orders_profile_orders_component__WEBPACK_IMPORTED_MODULE_33__["ProfileOrdersComponent"],
            _account_account_component__WEBPACK_IMPORTED_MODULE_35__["AccountComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["IconsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["WavesModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["CardsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["InputsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_23__["NgxPaginationModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_24__["Ng2SearchPipeModule"],
            ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_25__["FilterPipeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_34__["FlashMessagesModule"].forRoot()
        ],
        providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_10__["ProductService"], _services_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"], _services_authguard_service__WEBPACK_IMPORTED_MODULE_31__["AuthguardService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/categories/accessories/accessories.component.css":
/*!******************************************************************!*\
  !*** ./src/app/categories/accessories/accessories.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".small-container {\n    max-width: 1080px;\n    margin: auto;\n    padding-left: 25px;\n    padding-bottom: 100px;\n}\n\n.row {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n\n.row-2 {\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    margin: 100px auto 50px;\n}\n\n.col-4 {\n    flex-basis: 25%;\n    padding: 10px;\n    min-width: 200px;\n    margin-bottom: 50px;\n    -webkit-transition: -webkit-transform 0.5s;\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s;\n}\n\n.col-4 img {\n    width: 100%;\n}\n\n.col-4 p {\n    font-size: 14px;\n    color: #555\n}\n\nselect {\n    border: 1px solid #ff523b;\n    padding: 5px;\n}\n\nselect:focus {\n    outline: none;\n}\n\nh4 {\n    color: #555;\n    font-weight: normal;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.col-4 p {\n    font-size: 14px;\n}\n\n.rating .fa {\n    color: #ff523b\n}\n\n.col-4:hover {\n    -webkit-transform: translateY(-5px);\n            transform: translateY(-5px);\n}\n\n@media screen and (max-width:800px) {\n    .small-container {\n        margin-bottom: -500px;\n        text-align: center;\n    }\n    .col-2,\n    .col-3,\n    .col-4 {\n        flex-basis: 100%;\n    }\n}\n\n/* .AddedMessage{\n    padding: 20px;\n    background-color:#249424;\n    color: white;\n    margin-bottom: 15px;\n    position: fixed;\n    text-align: center;\n    top: 0;\n    width: 100%;\n    margin: 0 auto;  \n    z-index:9999; \n    }\n\n    .RemovedMessage{\n        padding: 20px;\n        background-color:red;\n        color: white;\n        margin-bottom: 15px;\n        position: fixed;\n        text-align: center;\n        top: 0;\n        width: 100%;\n        margin: 0 auto;  \n        z-index:9999; \n        } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9hY2Nlc3Nvcmllcy9hY2Nlc3Nvcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0kseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsMENBQTBCO0lBQTFCLGtDQUEwQjtJQUExQiwwQkFBMEI7SUFBMUIsa0RBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0k7UUFDSSxxQkFBcUI7UUFDckIsa0JBQWtCO0lBQ3RCO0lBQ0E7OztRQUdJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0F3QlciLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL2FjY2Vzc29yaWVzL2FjY2Vzc29yaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc21hbGwtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwODBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLnJvdy0yIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAxMDBweCBhdXRvIDUwcHg7XG59XG5cbi5jb2wtNCB7XG4gICAgZmxleC1iYXNpczogMjUlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xufVxuXG4uY29sLTQgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbC00IHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzU1NVxufVxuXG5zZWxlY3Qge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjUyM2I7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG5zZWxlY3Q6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbmg0IHtcbiAgICBjb2xvcjogIzU1NTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmNvbC00IHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJhdGluZyAuZmEge1xuICAgIGNvbG9yOiAjZmY1MjNiXG59XG5cbi5jb2wtNDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjgwMHB4KSB7XG4gICAgLnNtYWxsLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC01MDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuY29sLTIsXG4gICAgLmNvbC0zLFxuICAgIC5jb2wtNCB7XG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgfVxufVxuXG5cbi8qIC5BZGRlZE1lc3NhZ2V7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyNDk0MjQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87ICBcbiAgICB6LWluZGV4Ojk5OTk7IFxuICAgIH1cblxuICAgIC5SZW1vdmVkTWVzc2FnZXtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvOyAgXG4gICAgICAgIHotaW5kZXg6OTk5OTsgXG4gICAgICAgIH0gKi8iXX0= */");

/***/ }),

/***/ "./src/app/categories/accessories/accessories.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/categories/accessories/accessories.component.ts ***!
  \*****************************************************************/
/*! exports provided: AccessoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessoriesComponent", function() { return AccessoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");




let AccessoriesComponent = class AccessoriesComponent {
    constructor(productService) {
        this.productService = productService;
    }
    ngOnInit() {
        this.productService.getProducts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((products) => products.filter(product => product.category == 'Accessories')))
            .subscribe((data) => {
            this.accessories = data;
            console.log("Recommended Products:", this.accessories);
        });
        this.cartItemCount = JSON.parse(localStorage.getItem(this.cartItemCount));
    }
    ;
    AddToCart(product) {
        this.productService.OnAddCart(product);
        this.AddedMessage = true;
        setTimeout(() => this.AddedMessage = false, 1000);
    }
    RemoveFromCart(product) {
        this.productService.removeCartProduct(product);
        this.RemovedMessage = true;
        setTimeout(() => this.RemovedMessage = false, 1000);
        // this.productAddedToCart=this.productService.getProductFromCart();
        // let cartItem = this.productAddedToCart.find(p => p.product_Name == product.product_Name)
        // if(cartItem){
        //   this.RemovedMessage = true;
        //   setTimeout(()=> this.RemovedMessage = false,1000);
        //     }
    }
    CountCartQuantity(product) {
        this.productService.countQuantity(product);
    }
};
AccessoriesComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
];
AccessoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accessories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./accessories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/accessories/accessories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./accessories.component.css */ "./src/app/categories/accessories/accessories.component.css")).default]
    })
], AccessoriesComponent);



/***/ }),

/***/ "./src/app/categories/categories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/categories/categories.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n    /* max-width: 1300px; */\n    /* margin: auto; */\n    /* margin-bottom: 50px; */\n    padding-left: 150px;\n    padding-right: 150px;\n    background: radial-gradient(#fff, #e3eaec);\n}\n\n.small-container {\n    max-width: 1080px;\n    margin: auto;\n    padding-left: 25px;\n}\n\n.row {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n\n.col-3 {\n    flex-basis: 30%;\n    min-width: 250px;\n    margin-top: 30px;\n    margin-bottom: 30px;\n    -webkit-transition: -webkit-transform 0.5s;\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s;\n}\n\n.col-3:hover {\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px);\n}\n\n.col-3:hover .category-img img {\n    opacity: 0.5;\n    /* transition: 0.5s; */\n}\n\n.col-3 .category-text {\n    opacity: 0;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    position: absolute;\n    top: 175px;\n    left: 150px;\n}\n\n.col-3:hover .category-text {\n    opacity: 1;\n    -webkit-transition: 0.7s;\n    transition: 0.7s;\n}\n\n.col-3 img {\n    width: 100%;\n    /* position: absolute; */\n    /* object-fit: cover; */\n}\n\na {\n    color: black\n}\n\n.col-2 {\n    flex-basis: 50%;\n    /* min-width: 500px; */\n}\n\n.col-2 img {\n    max-width: 100%;\n    padding: 50px 0;\n}\n\n.col-2 h1 {\n    font-size: 50px;\n    line-height: 60px;\n    margin: 25px 0;\n}\n\n.btn {\n    display: inline-block;\n    background: #ff523b;\n    color: #fff;\n    padding: 8px 30px;\n    margin: 30px 0;\n    border-radius: 30px;\n    -webkit-transition: background 0.5s;\n    transition: background 0.5s;\n}\n\n.btn:hover {\n    background: #563434;\n}\n\n.categories {\n    margin-top: 500px;\n}\n\na {\n    text-decoration: none;\n}\n\n.col-4 {\n    flex-basis: 25%;\n    padding: 10px;\n    min-width: 200px;\n    margin-bottom: 50px;\n    -webkit-transition: -webkit-transform 0.5s;\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s;\n}\n\n.col-4 img {\n    width: 100%;\n}\n\n.col-4 p {\n    font-size: 14px;\n    color: #555\n}\n\n.title {\n    text-align: center;\n    /* margin: 0 auto 80px; */\n    position: relative;\n    line-height: 60px;\n    color: #555;\n}\n\nhr {\n    border: 3px solid #ff523b;\n    width: 10%;\n    margin: 0 auto 80px auto;\n    border-radius: 5px;\n}\n\n.col-4 p {\n    font-size: 14px;\n}\n\n.rating .fa {\n    color: #ff523b\n}\n\n.col-4:hover {\n    -webkit-transform: translateY(-5px);\n            transform: translateY(-5px);\n}\n\nh4 {\n    color: #555;\n    font-weight: normal;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.offer {\n    background: radial-gradient(#fff, #e3eaec);\n    margin-top: 80px;\n    padding: 30px 0;\n}\n\n.col-2 .offer-img {\n    padding: 50px;\n}\n\nsmall {\n    color: #555;\n}\n\n/* <!-- ------Testimonial------ --> */\n\n.testimonial {\n    padding-top: 80px;\n    padding-bottom: 80px;\n}\n\n.testimonial .col-3 {\n    text-align: center;\n    padding: 40px 20px;\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);\n    cursor: pointer;\n    -webkit-transition: -webkit-transform 0.5s;\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s;\n}\n\n.testimonial .col-3 img {\n    width: 50px;\n    margin-top: 20px;\n    border-radius: 50%;\n}\n\n.testimonial .col-3:hover {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n}\n\n.fa.fa-quote-left {\n    font-size: 34px;\n    color: #ff523b;\n}\n\n.col-3 p {\n    font-size: 12px;\n    margin: 12px 0;\n    color: #777;\n}\n\n/* <!-- ------Testimonial------ --> */\n\n.testimonial .col-3 h3 {\n    font-weight: 600;\n    color: #555;\n    font-size: 16px;\n}\n\n/* <!-- ------End of Testimonial------ --> */\n\n@media screen and (max-width:800px) {\n    .small-container {\n        padding: 0px;\n    }\n    .categories {\n        padding-bottom: 500px !important;\n    }\n    .row {\n        text-align: center;\n    }\n    .col-2 {\n        min-width: 300px;\n    }\n    .col-2,\n    .col-3,\n    .col-4 {\n        flex-basis: 100%;\n    }\n    .col-3 .category-text {\n        position: absolute;\n        top: 212.055px;\n        left: 193.1px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDBDQUEwQjtJQUExQixrQ0FBMEI7SUFBMUIsMEJBQTBCO0lBQTFCLGtEQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG9DQUE0QjtZQUE1Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysd0JBQWdCO0lBQWhCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG1DQUEyQjtJQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsMENBQTBCO0lBQTFCLGtDQUEwQjtJQUExQiwwQkFBMEI7SUFBMUIsa0RBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBR0EscUNBQXFDOztBQUVyQztJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6QyxlQUFlO0lBQ2YsMENBQTBCO0lBQTFCLGtDQUEwQjtJQUExQiwwQkFBMEI7SUFBMUIsa0RBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFHQSxxQ0FBcUM7O0FBRXJDO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUdBLDRDQUE0Qzs7QUFFNUM7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGdDQUFnQztJQUNwQztJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTs7O1FBR0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgLyogbWF4LXdpZHRoOiAxMzAwcHg7ICovXG4gICAgLyogbWFyZ2luOiBhdXRvOyAqL1xuICAgIC8qIG1hcmdpbi1ib3R0b206IDUwcHg7ICovXG4gICAgcGFkZGluZy1sZWZ0OiAxNTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoI2ZmZiwgI2UzZWFlYyk7XG59XG5cbi5zbWFsbC1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTA4MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG5cbi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5jb2wtMyB7XG4gICAgZmxleC1iYXNpczogMzAlO1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xufVxuXG4uY29sLTM6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XG59XG5cbi5jb2wtMzpob3ZlciAuY2F0ZWdvcnktaW1nIGltZyB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIC8qIHRyYW5zaXRpb246IDAuNXM7ICovXG59XG5cbi5jb2wtMyAuY2F0ZWdvcnktdGV4dCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNzVweDtcbiAgICBsZWZ0OiAxNTBweDtcbn1cblxuLmNvbC0zOmhvdmVyIC5jYXRlZ29yeS10ZXh0IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IDAuN3M7XG59XG5cbi5jb2wtMyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgICAvKiBvYmplY3QtZml0OiBjb3ZlcjsgKi9cbn1cblxuYSB7XG4gICAgY29sb3I6IGJsYWNrXG59XG5cbi5jb2wtMiB7XG4gICAgZmxleC1iYXNpczogNTAlO1xuICAgIC8qIG1pbi13aWR0aDogNTAwcHg7ICovXG59XG5cbi5jb2wtMiBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1MHB4IDA7XG59XG5cbi5jb2wtMiBoMSB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbjogMjVweCAwO1xufVxuXG4uYnRuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI2ZmNTIzYjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA4cHggMzBweDtcbiAgICBtYXJnaW46IDMwcHggMDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcbn1cblxuLmJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzU2MzQzNDtcbn1cblxuLmNhdGVnb3JpZXMge1xuICAgIG1hcmdpbi10b3A6IDUwMHB4O1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb2wtNCB7XG4gICAgZmxleC1iYXNpczogMjUlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xufVxuXG4uY29sLTQgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbC00IHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzU1NVxufVxuXG4udGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBtYXJnaW46IDAgYXV0byA4MHB4OyAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICBjb2xvcjogIzU1NTtcbn1cblxuaHIge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZjUyM2I7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBtYXJnaW46IDAgYXV0byA4MHB4IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY29sLTQgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucmF0aW5nIC5mYSB7XG4gICAgY29sb3I6ICNmZjUyM2Jcbn1cblxuLmNvbC00OmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG59XG5cbmg0IHtcbiAgICBjb2xvcjogIzU1NTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLm9mZmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoI2ZmZiwgI2UzZWFlYyk7XG4gICAgbWFyZ2luLXRvcDogODBweDtcbiAgICBwYWRkaW5nOiAzMHB4IDA7XG59XG5cbi5jb2wtMiAub2ZmZXItaW1nIHtcbiAgICBwYWRkaW5nOiA1MHB4O1xufVxuXG5zbWFsbCB7XG4gICAgY29sb3I6ICM1NTU7XG59XG5cblxuLyogPCEtLSAtLS0tLS1UZXN0aW1vbmlhbC0tLS0tLSAtLT4gKi9cblxuLnRlc3RpbW9uaWFsIHtcbiAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcbn1cblxuLnRlc3RpbW9uaWFsIC5jb2wtMyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQwcHggMjBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG59XG5cbi50ZXN0aW1vbmlhbCAuY29sLTMgaW1nIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnRlc3RpbW9uaWFsIC5jb2wtMzpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbn1cblxuLmZhLmZhLXF1b3RlLWxlZnQge1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBjb2xvcjogI2ZmNTIzYjtcbn1cblxuLmNvbC0zIHAge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW46IDEycHggMDtcbiAgICBjb2xvcjogIzc3Nztcbn1cblxuXG4vKiA8IS0tIC0tLS0tLVRlc3RpbW9uaWFsLS0tLS0tIC0tPiAqL1xuXG4udGVzdGltb25pYWwgLmNvbC0zIGgzIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuXG4vKiA8IS0tIC0tLS0tLUVuZCBvZiBUZXN0aW1vbmlhbC0tLS0tLSAtLT4gKi9cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4MDBweCkge1xuICAgIC5zbWFsbC1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIC5jYXRlZ29yaWVzIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5yb3cge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5jb2wtMiB7XG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgfVxuICAgIC5jb2wtMixcbiAgICAuY29sLTMsXG4gICAgLmNvbC00IHtcbiAgICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICB9XG4gICAgLmNvbC0zIC5jYXRlZ29yeS10ZXh0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDIxMi4wNTVweDtcbiAgICAgICAgbGVmdDogMTkzLjFweDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");




let CategoriesComponent = class CategoriesComponent {
    constructor(productService) {
        this.productService = productService;
    }
    ngOnInit() {
        this.productService.getProducts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((products) => products.filter(product => product.id == 5 || product.id == 25 || product.id == 14 || product.id == 36)))
            .subscribe((data) => {
            this.featuredProducts = data;
            console.log("featured Products:", this.featuredProducts);
        });
    }
    ;
};
CategoriesComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
];
CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories.component.css")).default]
    })
], CategoriesComponent);



/***/ }),

/***/ "./src/app/categories/clothing/clothing.component.css":
/*!************************************************************!*\
  !*** ./src/app/categories/clothing/clothing.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".small-container {\n    max-width: 1080px;\n    margin: auto;\n    padding-left: 25px;\n    padding-bottom: 100px;\n}\n\n.row {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n\n.row-2 {\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    margin: 100px auto 50px;\n}\n\n.col-4 {\n    flex-basis: 25%;\n    padding: 10px;\n    min-width: 200px;\n    margin-bottom: 50px;\n    -webkit-transition: -webkit-transform 0.5s;\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s;\n}\n\n.col-4 img {\n    width: 100%;\n}\n\n.col-4 p {\n    font-size: 14px;\n    color: #555\n}\n\nselect {\n    border: 1px solid #ff523b;\n    padding: 5px;\n}\n\nselect:focus {\n    outline: none;\n}\n\nh4 {\n    color: #555;\n    font-weight: normal;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.col-4 p {\n    font-size: 14px;\n}\n\n.rating .fa {\n    color: #ff523b\n}\n\n.col-4:hover {\n    -webkit-transform: translateY(-5px);\n            transform: translateY(-5px);\n}\n\n@media screen and (max-width:800px) {\n    .small-container {\n        margin-bottom: -500px;\n        text-align: center;\n    }\n    .col-2,\n    .col-3,\n    .col-4 {\n        flex-basis: 100%;\n    }\n}\n\n/* .AddedMessage{\n  padding: 20px;\n  background-color:#249424;\n  color: white;\n  margin-bottom: 15px;\n  position: fixed;\n  text-align: center;\n  top: 0;\n  width: 100%;\n  margin: 0 auto;  \n  z-index:9999; \n  }\n\n  .RemovedMessage{\n      padding: 20px;\n      background-color:red;\n      color: white;\n      margin-bottom: 15px;\n      position: fixed;\n      text-align: center;\n      top: 0;\n      width: 100%;\n      margin: 0 auto;  \n      z-index:9999; \n      } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9jbG90aGluZy9jbG90aGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0kseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsMENBQTBCO0lBQTFCLGtDQUEwQjtJQUExQiwwQkFBMEI7SUFBMUIsa0RBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0k7UUFDSSxxQkFBcUI7UUFDckIsa0JBQWtCO0lBQ3RCO0lBQ0E7OztRQUdJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F3QlMiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL2Nsb3RoaW5nL2Nsb3RoaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc21hbGwtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwODBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLnJvdy0yIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAxMDBweCBhdXRvIDUwcHg7XG59XG5cbi5jb2wtNCB7XG4gICAgZmxleC1iYXNpczogMjUlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xufVxuXG4uY29sLTQgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbC00IHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzU1NVxufVxuXG5zZWxlY3Qge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjUyM2I7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG5zZWxlY3Q6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbmg0IHtcbiAgICBjb2xvcjogIzU1NTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmNvbC00IHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJhdGluZyAuZmEge1xuICAgIGNvbG9yOiAjZmY1MjNiXG59XG5cbi5jb2wtNDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjgwMHB4KSB7XG4gICAgLnNtYWxsLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC01MDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuY29sLTIsXG4gICAgLmNvbC0zLFxuICAgIC5jb2wtNCB7XG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgfVxufVxuXG5cbi8qIC5BZGRlZE1lc3NhZ2V7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IzI0OTQyNDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87ICBcbiAgei1pbmRleDo5OTk5OyBcbiAgfVxuXG4gIC5SZW1vdmVkTWVzc2FnZXtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB0b3A6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogMCBhdXRvOyAgXG4gICAgICB6LWluZGV4Ojk5OTk7IFxuICAgICAgfSAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/categories/clothing/clothing.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/categories/clothing/clothing.component.ts ***!
  \***********************************************************/
/*! exports provided: ClothingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClothingComponent", function() { return ClothingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





let ClothingComponent = class ClothingComponent {
    constructor(productService, flashMessageService) {
        this.productService = productService;
        this.flashMessageService = flashMessageService;
    }
    ngOnInit() {
        this.productService.getProducts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((products) => products.filter(product => product.category == 'Clothing')))
            .subscribe((data) => {
            this.clothing = data;
            console.log("Recommended Products:", this.clothing);
        });
        this.cartItemCount = JSON.parse(localStorage.getItem(this.cartItemCount));
    }
    ;
    AddToCart(product) {
        this.productService.OnAddCart(product);
        this.AddedMessage = true;
        setTimeout(() => this.AddedMessage = false, 1000);
    }
    RemoveFromCart(product) {
        this.productService.removeCartProduct(product);
        this.RemovedMessage = true;
        setTimeout(() => this.RemovedMessage = false, 1000);
        // this.productAddedToCart=this.productService.getProductFromCart();
        // let cartItem = this.productAddedToCart.find(p => p.product_Name == product.product_Name)
        // if(cartItem){
        //   this.RemovedMessage = true;
        //   setTimeout(()=> this.RemovedMessage = false,1000);
        //     }
    }
    CountCartQuantity(product) {
        this.productService.countQuantity(product);
    }
};
ClothingComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] }
];
ClothingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clothing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clothing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/clothing/clothing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clothing.component.css */ "./src/app/categories/clothing/clothing.component.css")).default]
    })
], ClothingComponent);



/***/ }),

/***/ "./src/app/categories/shoes/shoes.component.css":
/*!******************************************************!*\
  !*** ./src/app/categories/shoes/shoes.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".small-container {\n    max-width: 1080px;\n    margin: auto;\n    padding-left: 25px;\n    padding-bottom: 100px;\n}\n\n.row {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n\n.row-2 {\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    margin: 100px auto 50px;\n}\n\n.col-4 {\n    flex-basis: 25%;\n    padding: 10px;\n    min-width: 200px;\n    margin-bottom: 50px;\n    -webkit-transition: -webkit-transform 0.5s;\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s;\n}\n\n.col-4 img {\n    width: 100%;\n}\n\n.col-4 p {\n    font-size: 14px;\n    color: #555\n}\n\nselect {\n    border: 1px solid #ff523b;\n    padding: 5px;\n}\n\nselect:focus {\n    outline: none;\n}\n\nh4 {\n    color: #555;\n    font-weight: normal;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.col-4 p {\n    font-size: 14px;\n}\n\n.rating .fa {\n    color: #ff523b\n}\n\n.col-4:hover {\n    -webkit-transform: translateY(-5px);\n            transform: translateY(-5px);\n}\n\n@media screen and (max-width:800px) {\n    .small-container {\n        margin-bottom: -500px;\n        text-align: center;\n    }\n    .col-2,\n    .col-3,\n    .col-4 {\n        flex-basis: 100%;\n    }\n}\n\n/* .AddedMessage{\n  padding: 20px;\n  background-color:#249424;\n  color: white;\n  margin-bottom: 15px;\n  position: fixed;\n  text-align: center;\n  top: 0;\n  width: 100%;\n  margin: 0 auto;  \n  z-index:9999; \n  }\n\n  .RemovedMessage{\n      padding: 20px;\n      background-color:red;\n      color: white;\n      margin-bottom: 15px;\n      position: fixed;\n      text-align: center;\n      top: 0;\n      width: 100%;\n      margin: 0 auto;  \n      z-index:9999; \n      } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9zaG9lcy9zaG9lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0kseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsMENBQTBCO0lBQTFCLGtDQUEwQjtJQUExQiwwQkFBMEI7SUFBMUIsa0RBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0k7UUFDSSxxQkFBcUI7UUFDckIsa0JBQWtCO0lBQ3RCO0lBQ0E7OztRQUdJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F3QlMiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL3Nob2VzL3Nob2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc21hbGwtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwODBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLnJvdy0yIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAxMDBweCBhdXRvIDUwcHg7XG59XG5cbi5jb2wtNCB7XG4gICAgZmxleC1iYXNpczogMjUlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xufVxuXG4uY29sLTQgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbC00IHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzU1NVxufVxuXG5zZWxlY3Qge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjUyM2I7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG5zZWxlY3Q6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbmg0IHtcbiAgICBjb2xvcjogIzU1NTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmNvbC00IHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJhdGluZyAuZmEge1xuICAgIGNvbG9yOiAjZmY1MjNiXG59XG5cbi5jb2wtNDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjgwMHB4KSB7XG4gICAgLnNtYWxsLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC01MDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuY29sLTIsXG4gICAgLmNvbC0zLFxuICAgIC5jb2wtNCB7XG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgfVxufVxuXG5cbi8qIC5BZGRlZE1lc3NhZ2V7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IzI0OTQyNDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87ICBcbiAgei1pbmRleDo5OTk5OyBcbiAgfVxuXG4gIC5SZW1vdmVkTWVzc2FnZXtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB0b3A6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogMCBhdXRvOyAgXG4gICAgICB6LWluZGV4Ojk5OTk7IFxuICAgICAgfSAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/categories/shoes/shoes.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/categories/shoes/shoes.component.ts ***!
  \*****************************************************/
/*! exports provided: ShoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoesComponent", function() { return ShoesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");




let ShoesComponent = class ShoesComponent {
    constructor(productService) {
        this.productService = productService;
    }
    ngOnInit() {
        this.productService.getProducts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((products) => products.filter(product => product.category == 'Shoes')))
            .subscribe((data) => {
            this.shoes = data;
            console.log("Recommended Products:", this.shoes);
        });
        this.cartItemCount = JSON.parse(localStorage.getItem(this.cartItemCount));
    }
    ;
    AddToCart(product) {
        this.productService.OnAddCart(product);
        this.AddedMessage = true;
        setTimeout(() => this.AddedMessage = false, 1000);
    }
    RemoveFromCart(product) {
        this.productService.removeCartProduct(product);
        this.RemovedMessage = true;
        setTimeout(() => this.RemovedMessage = false, 1000);
        // this.productAddedToCart=this.productService.getProductFromCart();
        // let cartItem = this.productAddedToCart.find(p => p.product_Name == product.product_Name)
        // if(cartItem){
        //   this.RemovedMessage = true;
        //   setTimeout(()=> this.RemovedMessage = false,1000);
        //     }
    }
    CountCartQuantity(product) {
        this.productService.countQuantity(product);
    }
};
ShoesComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
];
ShoesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shoes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shoes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/shoes/shoes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shoes.component.css */ "./src/app/categories/shoes/shoes.component.css")).default]
    })
], ShoesComponent);



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .container {\n    padding-top: 60px;\n    padding-bottom: 60px;\n} */\n\n.validation-message {\n    color: red;\n}\n\n.alert {\n    background-color: transparent;\n    border: 0;\n    color: red;\n}\n\n.row {\n    /* IE10 */\n    display: -webkit-box;\n    display: flex;\n    /* IE10 */\n    flex-wrap: wrap;\n    margin: 0 -16px;\n}\n\n.col-25 {\n    /* IE10 */\n    -webkit-box-flex: 25%;\n            flex: 25%;\n}\n\n.col-50 {\n    /* IE10 */\n    -webkit-box-flex: 50%;\n            flex: 50%;\n}\n\n.col-75 {\n    /* IE10 */\n    -webkit-box-flex: 75%;\n            flex: 75%;\n}\n\n.col-25,\n.col-50,\n.col-75 {\n    padding: 0 16px;\n}\n\n.checkout-container {\n    background-color: #f2f2f2;\n    padding: 5px 20px 15px 20px;\n    border: 1px solid lightgrey;\n    border-radius: 3px;\n    margin-left: 50px;\n    margin-bottom: 50px;\n}\n\ninput[type=text] {\n    width: 100%;\n    margin-bottom: 20px;\n    padding: 12px;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n}\n\nlabel {\n    margin-bottom: 10px;\n    display: block;\n}\n\n.icon-container {\n    margin-bottom: 20px;\n    padding: 7px 0;\n    font-size: 24px;\n}\n\n.btn {\n    background-color: #4CAF50;\n    color: white;\n    padding: 12px;\n    margin: 10px 0;\n    border: none;\n    width: 100%;\n    border-radius: 3px;\n    cursor: pointer;\n    font-size: 17px;\n}\n\n.btn:hover {\n    background-color: #45a049;\n}\n\na {\n    color: #2196F3;\n}\n\nhr {\n    border: 1px solid lightgrey;\n}\n\nspan.price {\n    float: right;\n    color: grey;\n}\n\ntextarea {\n    height: auto;\n    overflow: auto;\n    resize: vertical;\n}\n\n@media (max-width: 800px) {\n    .checkout-container {\n        margin: auto;\n    }\n    .row {\n        display: -webkit-box;\n        display: flex;\n        margin: 0;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: reverse;\n                flex-direction: column-reverse;\n        flex-wrap: nowrap;\n    }\n    .col-50 {\n        padding: 0px;\n    }\n    .col-25 {\n        margin-bottom: 20px;\n        /* padding: 0px; */\n    }\n    textarea {\n        width: 100%;\n    }\n}\n\n@media (max-width: 1024px) {\n    /* form {\n        margin-bottom: 200px;\n    } */\n    .checkout-container {\n        margin-left: 10px;\n        margin-right: 10px;\n        width: 80%;\n    }\n    .row {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: reverse;\n                flex-direction: column-reverse;\n        flex-wrap: nowrap;\n    }\n    .col-25 {\n        margin-bottom: 20px;\n        /* padding: 0px; */\n    }\n    .col-75 {\n        margin-bottom: 200px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7O0FBRUg7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUVJLFNBQVM7SUFDVCxvQkFBYTtJQUFiLGFBQWE7SUFFYixTQUFTO0lBQ1QsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFFSSxTQUFTO0lBQ1QscUJBQVM7WUFBVCxTQUFTO0FBQ2I7O0FBRUE7SUFFSSxTQUFTO0lBQ1QscUJBQVM7WUFBVCxTQUFTO0FBQ2I7O0FBRUE7SUFFSSxTQUFTO0lBQ1QscUJBQVM7WUFBVCxTQUFTO0FBQ2I7O0FBRUE7OztJQUdJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLG9CQUFhO1FBQWIsYUFBYTtRQUNiLFNBQVM7UUFDVCw0QkFBOEI7UUFBOUIsOEJBQThCO2dCQUE5Qiw4QkFBOEI7UUFDOUIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJOztPQUVHO0lBQ0g7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksb0JBQWE7UUFBYixhQUFhO1FBQ2IsNEJBQThCO1FBQTlCLDhCQUE4QjtnQkFBOUIsOEJBQThCO1FBQzlCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksb0JBQW9CO0lBQ3hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XG59ICovXG5cbi52YWxpZGF0aW9uLW1lc3NhZ2Uge1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5hbGVydCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5yb3cge1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIC8qIElFMTAgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gICAgLyogSUUxMCAqL1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW46IDAgLTE2cHg7XG59XG5cbi5jb2wtMjUge1xuICAgIC1tcy1mbGV4OiAyNSU7XG4gICAgLyogSUUxMCAqL1xuICAgIGZsZXg6IDI1JTtcbn1cblxuLmNvbC01MCB7XG4gICAgLW1zLWZsZXg6IDUwJTtcbiAgICAvKiBJRTEwICovXG4gICAgZmxleDogNTAlO1xufVxuXG4uY29sLTc1IHtcbiAgICAtbXMtZmxleDogNzUlO1xuICAgIC8qIElFMTAgKi9cbiAgICBmbGV4OiA3NSU7XG59XG5cbi5jb2wtMjUsXG4uY29sLTUwLFxuLmNvbC03NSB7XG4gICAgcGFkZGluZzogMCAxNnB4O1xufVxuXG4uY2hlY2tvdXQtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgIHBhZGRpbmc6IDVweCAyMHB4IDE1cHggMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxubGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pY29uLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nOiA3cHggMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xufVxuXG5hIHtcbiAgICBjb2xvcjogIzIxOTZGMztcbn1cblxuaHIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbn1cblxuc3Bhbi5wcmljZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiBncmV5O1xufVxuXG50ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5jaGVja291dC1jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIC5yb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgfVxuICAgIC5jb2wtNTAge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIC5jb2wtMjUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAvKiBwYWRkaW5nOiAwcHg7ICovXG4gICAgfVxuICAgIHRleHRhcmVhIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLyogZm9ybSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xuICAgIH0gKi9cbiAgICAuY2hlY2tvdXQtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG4gICAgLnJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgfVxuICAgIC5jb2wtMjUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAvKiBwYWRkaW5nOiAwcHg7ICovXG4gICAgfVxuICAgIC5jb2wtNzUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/connection.service */ "./src/app/services/connection.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/order.service */ "./src/app/services/order.service.ts");







let CheckoutComponent = class CheckoutComponent {
    constructor(productService, fb, connectionService, router, orderService) {
        this.productService = productService;
        this.fb = fb;
        this.connectionService = connectionService;
        this.router = router;
        this.orderService = orderService;
        this.emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        this.nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        this.numberRegex = /^[0-9]*$/;
        this.cvvRegex = /^[0-9]{3,4}$/;
        this.expRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
        this.creditCardRegex = /4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11}/;
        this.disabledSubmitButton = true;
    }
    oninput() {
        if (this.checkOutForm.valid) {
            this.disabledSubmitButton = false;
        }
    }
    ngOnInit() {
        this.productAddedToCart = JSON.parse(localStorage.getItem('product'));
        // this.productService.addProductToCart(this.productAddedToCart);
        this.calculateAllTotal(this.productAddedToCart);
        this.cartItemCount = JSON.parse(localStorage.getItem(this.cartItemCount));
        this.checkOutForm = this.fb.group({
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            nameOnCard: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            creditCardNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            exp: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cvv: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            message: [''],
            contactFormCopy: ['']
        });
    }
    ;
    confirmOrder() {
        let orderDetails = {};
        orderDetails.firstName = this.checkOutForm.controls['firstName'].value;
        orderDetails.lastName = this.checkOutForm.controls['lastName'].value;
        orderDetails.phone = this.checkOutForm.controls['phone'].value;
        orderDetails.address = this.checkOutForm.controls['address'].value;
        orderDetails.country = this.checkOutForm.controls['country'].value;
        orderDetails.city = this.checkOutForm.controls['city'].value;
        orderDetails.email = this.checkOutForm.controls['email'].value;
        orderDetails.message = this.checkOutForm.controls['message'].value;
        this.orderItems = [];
        for (let i in this.productAddedToCart) {
            this.orderItems.push({
                _id: this.productAddedToCart[i]._id,
                product_Quantity: this.productAddedToCart[i].product_Quantity
            });
        }
        orderDetails.orderItems = this.orderItems;
        console.log("orderDetails:", orderDetails);
        this.connectionService.sendReceipt(this.checkOutForm.value, orderDetails).subscribe((res) => {
            console.log("res is:", res);
        });
        this.orderService.CreateOrder(orderDetails).subscribe((data) => {
            console.log("data is:", data);
            this.globalResponse = data;
            console.log("globalResponse is:", this.globalResponse);
        });
        alert('Your order has been received.');
        this.checkOutForm.reset();
        this.disabledSubmitButton = true;
        this.router.navigate(['/']);
        localStorage.removeItem('product');
        localStorage.removeItem('cartItemCount');
    }
    ;
    calculateAllTotal(productAddedToCart) {
        let total = 0;
        for (let i in productAddedToCart) {
            total = total + (productAddedToCart[i].product_Quantity * productAddedToCart[i].product_Price);
            console.log("Item:", productAddedToCart[i]);
        }
        this.allTotal = total;
    }
    isValid(controlName) {
        return this.checkOutForm.get(controlName).invalid && this.checkOutForm.get(controlName).touched;
    }
};
CheckoutComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_4__["ConnectionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input')
], CheckoutComponent.prototype, "oninput", null);
CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")).default]
    })
], CheckoutComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    .container {\n        max-width: 1300px;\n        margin: auto;\n        padding-left: 25px;\n        padding-right: 25px;\n        background: #000;\n    }\n    \n    .row {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-align: center;\n                align-items: center;\n        flex-wrap: wrap;\n        justify-content: space-around;\n    }\n    \n    .footer {\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        background: #000;\n        color: #8a8a8a;\n        font-size: 14px;\n        padding: 60px 0 20px;\n        margin-bottom: -200px;\n        /* justify-content: flex-end; */\n        /* position: absolute;\n    bottom: 0; */\n        /* right: 0;\n    left: 0; */\n        /* width: 100%; */\n        /* height: 100px; */\n    }\n    \n    .footer p {\n        color: #8a8a8a;\n    }\n    \n    .footer h3 {\n        color: #fff;\n        margin-bottom: 20px;\n    }\n    \n    .footer-col-1,\n    .footer-col-2,\n    .footer-col-3,\n    .footer-col-4 {\n        min-width: 250px;\n        margin-bottom: 20px;\n    }\n    \n    .footer-col-1 {\n        flex-basis: 30%;\n    }\n    \n    .footer-col-2 {\n        -webkit-box-flex: 1;\n                flex: 1;\n        text-align: center;\n    }\n    \n    .footer-col-2 img {\n        width: 180px;\n        margin-bottom: 20px;\n    }\n    \n    .footer-col-3,\n    .footer-col-4 {\n        flex-basis: 12%;\n        text-align: center;\n    }\n    \n    .footer hr {\n        border: none;\n        background: #b5b5b5;\n        height: 1px;\n        margin: 20px 0;\n    }\n    \n    .copyright {\n        text-align: center;\n    }\n    \n    ul {\n        list-style-type: none;\n    }\n    \n    .app-logo {\n        margin-top: 20px;\n    }\n    \n    .app-logo img {\n        width: 140px;\n    }\n    \n    @media screen and (max-width:800px) {\n        .footer {\n            bottom: 0;\n            position: absolute;\n            left: 0;\n            width: 100%;\n            margin-bottom: -700px;\n            font-size: 12px;\n        }\n        .row {\n            text-align: center;\n        }\n        .footer-col-2,\n        .footer-col-2,\n        .footer-col-2 {\n            flex-basis: 100%;\n        }\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJJQUFJO1FBQ0ksaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLG9CQUFhO1FBQWIsYUFBYTtRQUNiLHlCQUFtQjtnQkFBbkIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsT0FBTztRQUNQLFNBQVM7UUFDVCxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxlQUFlO1FBQ2Ysb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQiwrQkFBK0I7UUFDL0I7Z0JBQ1E7UUFDUjtjQUNNO1FBQ04saUJBQWlCO1FBQ2pCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCOztJQUVBOzs7O1FBSUksZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxtQkFBTztnQkFBUCxPQUFPO1FBQ1Asa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLG1CQUFtQjtJQUN2Qjs7SUFFQTs7UUFFSSxlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSTtZQUNJLFNBQVM7WUFDVCxrQkFBa0I7WUFDbEIsT0FBTztZQUNQLFdBQVc7WUFDWCxxQkFBcUI7WUFDckIsZUFBZTtRQUNuQjtRQUNBO1lBQ0ksa0JBQWtCO1FBQ3RCO1FBQ0E7OztZQUdJLGdCQUFnQjtRQUNwQjtJQUNKIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDEzMDBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgfVxuICAgIFxuICAgIC5yb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIH1cbiAgICBcbiAgICAuZm9vdGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICBjb2xvcjogIzhhOGE4YTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBwYWRkaW5nOiA2MHB4IDAgMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTIwMHB4O1xuICAgICAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAqL1xuICAgICAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwOyAqL1xuICAgICAgICAvKiByaWdodDogMDtcbiAgICBsZWZ0OiAwOyAqL1xuICAgICAgICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgICAgICAgLyogaGVpZ2h0OiAxMDBweDsgKi9cbiAgICB9XG4gICAgXG4gICAgLmZvb3RlciBwIHtcbiAgICAgICAgY29sb3I6ICM4YThhOGE7XG4gICAgfVxuICAgIFxuICAgIC5mb290ZXIgaDMge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgXG4gICAgLmZvb3Rlci1jb2wtMSxcbiAgICAuZm9vdGVyLWNvbC0yLFxuICAgIC5mb290ZXItY29sLTMsXG4gICAgLmZvb3Rlci1jb2wtNCB7XG4gICAgICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIC5mb290ZXItY29sLTEge1xuICAgICAgICBmbGV4LWJhc2lzOiAzMCU7XG4gICAgfVxuICAgIFxuICAgIC5mb290ZXItY29sLTIge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5mb290ZXItY29sLTIgaW1nIHtcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICBcbiAgICAuZm9vdGVyLWNvbC0zLFxuICAgIC5mb290ZXItY29sLTQge1xuICAgICAgICBmbGV4LWJhc2lzOiAxMiU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgXG4gICAgLmZvb3RlciBociB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogI2I1YjViNTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgIH1cbiAgICBcbiAgICAuY29weXJpZ2h0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLmFwcC1sb2dvIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG4gICAgXG4gICAgLmFwcC1sb2dvIGltZyB7XG4gICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICB9XG4gICAgXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4MDBweCkge1xuICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC03MDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgICAucm93IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyLWNvbC0yLFxuICAgICAgICAuZm9vdGVyLWNvbC0yLFxuICAgICAgICAuZm9vdGVyLWNvbC0yIHtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9Il19 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n    padding-top: 70px;\n}\n\n.validation-message{\n    color: red;\n}\n\n.alert {\n    background-color: transparent;\n    border: 0;\n    color: red;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QsVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xufVxuXG4udmFsaWRhdGlvbi1tZXNzYWdle1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5hbGVydCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNvbG9yOiByZWQ7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let LoginComponent = class LoginComponent {
    constructor(userService, router, fb) {
        this.userService = userService;
        this.router = router;
        this.fb = fb;
        this.disabledSubmitButton = true;
        this.emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    }
    oninput() {
        if (this.loginForm.valid) {
            this.disabledSubmitButton = false;
        }
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    isValid(controlName) {
        return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
    }
    login() {
        console.log("Login form:", this.loginForm.value);
        if (this.loginForm.valid) {
            this.userService.Login(this.loginForm.value).subscribe(data => {
                console.log("data is:", data);
                this.userService.storeUserData(data['token'], data['user']);
                console.log("data.token is:", data['token'], "data.user is:", data['user']);
                this.router.navigate(['/profile']);
            }, err => {
                console.log(err, "Login failed!");
                this.loginFailed = true;
                setTimeout(() => this.loginFailed = false, 4000);
            });
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input')
], LoginComponent.prototype, "oninput", null);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/navbar/about/about.component.css":
/*!**************************************************!*\
  !*** ./src/app/navbar/about/about.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".small-container {\r\n    max-width: 1080px;\r\n    margin: auto;\r\n    padding-left: 25px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNtYWxsLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEwODBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/navbar/about/about.component.ts":
/*!*************************************************!*\
  !*** ./src/app/navbar/about/about.component.ts ***!
  \*************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/navbar/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/navbar/contactus/contactus.component.css":
/*!**********************************************************!*\
  !*** ./src/app/navbar/contactus/contactus.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".alert {\n    background-color: transparent;\n    border: 0;\n    color: red;\n}\n\n.container {\n    padding-top: 70px;\n    margin-bottom: 70px;\n}\n\n.contact-us-title {\n    text-align: left;\n    /* background-color: #f3f3f3; */\n    background-color: #ff523b;\n    color: white;\n    padding: 10px 10px 10px 15px;\n    width: 50%;\n    margin: auto;\n    margin-bottom: 30px;\n}\n\n.form-container {\n    border: 1px solid #dedede;\n    /* border: 1px solid #ff523b; */\n    margin-left: 450px;\n    margin-right: 450px;\n}\n\nform {\n    padding-left: 15px;\n    display: block;\n    /* font-size: 15px; */\n    margin-top: 20px;\n}\n\nform select {\n    padding: 6px 10px;\n    /* border: 1px solid rgb(204, 204, 204); */\n    border: 1px solid #ff523b;\n    margin-bottom: 10px;\n    margin-top: 5px;\n    width: 70%;\n    font-family: 'Poppins', sans-serif;\n    font-size: 15px;\n}\n\nform input {\n    padding: 6px 10px;\n    font-family: 'Poppins', sans-serif;\n    width: 70%;\n    /* border: 1px solid rgb(204, 204, 204); */\n    border: 1px solid #ff523b;\n    font-size: 15px;\n}\n\nform textarea {\n    /* border: 1px solid rgb(204, 204, 204); */\n    border: 1px solid #ff523b;\n    width: 70%;\n    font-family: 'Poppins', sans-serif;\n    font-size: 15px;\n    padding: 6px 10px;\n}\n\n.form-control {\n    margin-bottom: 10px;\n    margin-top: 5px;\n}\n\na {\n    cursor: pointer;\n}\n\n/* form .btn {\n    display: inline-block;\n    background: #ff523b;\n    color: #fff;\n    padding: 8px 30px;\n    margin: 30px 0;\n    border-radius: 30px;\n    transition: background 0.5s;\n    text-decoration: none;\n    cursor: pointer;\n    text-align: center;\n}\n\n.btn:hover {\n    background: #563434;\n} */\n\nform button {\n    display: inline-block;\n    background: #ff523b;\n    color: #fff;\n    padding: 8px 30px;\n    margin: 30px 0;\n    border-radius: 30px;\n    -webkit-transition: background 0.5s;\n    transition: background 0.5s;\n    text-decoration: none;\n    cursor: pointer;\n    text-align: center;\n    border: none;\n    font-family: 'Poppins', sans-serif;\n}\n\nform button:disabled {\n    background: #dddddd;\n}\n\nform button:hover:enabled {\n    background: #563434;\n}\n\nhr {\n    margin-top: 15px;\n    border-radius: 10px;\n    border: 2px solid #ff523b;\n    width: 70%\n}\n\n@media screen and (max-width:600px) {\n    .form-container {\n        margin: auto;\n    }\n    .contact-us-title {\n        text-align: center;\n    }\n    form {\n        text-align: center;\n    }\n    hr {\n        width: 70%;\n        margin: 10px auto;\n    }\n}\n\n@media screen and (max-width:1039px) {\n    .form-container {\n        margin: auto;\n    }\n    .contact-us-title {\n        text-align: center;\n    }\n    form {\n        text-align: center;\n    }\n    hr {\n        width: 70%;\n        margin: 10px auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsMENBQTBDO0lBQzFDLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMsVUFBVTtJQUNWLDBDQUEwQztJQUMxQyx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRzs7QUFFSDtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG1DQUEyQjtJQUEzQiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsaUJBQWlCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDA7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDcwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbn1cblxuLmNvbnRhY3QtdXMtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMzsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1MjNiO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxNXB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjZmY1MjNiOyAqL1xuICAgIG1hcmdpbi1sZWZ0OiA0NTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQ1MHB4O1xufVxuXG5mb3JtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLyogZm9udC1zaXplOiAxNXB4OyAqL1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmZvcm0gc2VsZWN0IHtcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjA0LCAyMDQsIDIwNCk7ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmNTIzYjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB3aWR0aDogNzAlO1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5mb3JtIGlucHV0IHtcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDIwNCwgMjA0LCAyMDQpOyAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjUyM2I7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5mb3JtIHRleHRhcmVhIHtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjA0LCAyMDQsIDIwNCk7ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmNTIzYjtcbiAgICB3aWR0aDogNzAlO1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi8qIGZvcm0gLmJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNmZjUyM2I7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogOHB4IDMwcHg7XG4gICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM1NjM0MzQ7XG59ICovXG5cbmZvcm0gYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI2ZmNTIzYjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA4cHggMzBweDtcbiAgICBtYXJnaW46IDMwcHggMDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbn1cblxuZm9ybSBidXR0b246ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQ6ICNkZGRkZGQ7XG59XG5cbmZvcm0gYnV0dG9uOmhvdmVyOmVuYWJsZWQge1xuICAgIGJhY2tncm91bmQ6ICM1NjM0MzQ7XG59XG5cbmhyIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmNTIzYjtcbiAgICB3aWR0aDogNzAlXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcbiAgICAuZm9ybS1jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIC5jb250YWN0LXVzLXRpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBmb3JtIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBociB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDM5cHgpIHtcbiAgICAuZm9ybS1jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIC5jb250YWN0LXVzLXRpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBmb3JtIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBociB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/navbar/contactus/contactus.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/navbar/contactus/contactus.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/connection.service */ "./src/app/services/connection.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let ContactusComponent = class ContactusComponent {
    constructor(fb, connectionService) {
        this.fb = fb;
        this.connectionService = connectionService;
        this.emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        this.nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        this.disabledSubmitButton = true;
        this.contactForm = fb.group({
            'contactFormName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'contactFormEmail': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'contactFormSubjects': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'contactFormMessage': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'contactFormCopy': [''],
        });
    }
    oninput() {
        if (this.contactForm.valid) {
            this.disabledSubmitButton = false;
        }
    }
    // onSubmit() {
    //   this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
    //     alert('Your message has been sent.');
    //     this.contactForm.reset();
    //     this.disabledSubmitButton = true;
    //   }, error => {
    //     console.log('Error', error);
    //   });
    // }
    onSubmit() {
        alert('Your message has been sent.');
        this.contactForm.reset();
        this.disabledSubmitButton = true;
    }
};
ContactusComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_1__["ConnectionService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])('input')
], ContactusComponent.prototype, "oninput", null);
ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contactus',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contactus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/contactus/contactus.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contactus.component.css */ "./src/app/navbar/contactus/contactus.component.css")).default]
    })
], ContactusComponent);



/***/ }),

/***/ "./src/app/navbar/home/home.component.css":
/*!************************************************!*\
  !*** ./src/app/navbar/home/home.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/navbar/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/navbar/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/navbar/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Poppins', sans-serif;\n}\n\n.navbar {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    padding: 20px;\n}\n\nnav {\n    -webkit-box-flex: 1;\n            flex: 1;\n    text-align: right;\n}\n\nnav ul {\n    display: inline-block;\n    list-style-type: none;\n}\n\nnav ul li {\n    display: inline-block;\n    margin-right: 20px;\n}\n\na {\n    text-decoration: none;\n    color: #555;\n    cursor: pointer;\n}\n\nspan {\n    margin-right: 5px;\n}\n\np {\n    color: #555;\n}\n\n.container {\n    max-width: 1300px;\n    margin: auto;\n    padding-left: 25px;\n    padding-right: 25px;\n}\n\n.header .row {\n    margin-top: 70px;\n}\n\nul {\n    list-style-type: none;\n}\n\n.menu-icon {\n    width: 28px;\n    margin-left: 20px;\n    display: none;\n}\n\n.desktop-melon {\n    background-color: #f16565;\n}\n\n.desktop-badge {\n    /* white-space: nowrap; */\n    text-align: center;\n    line-height: 18px;\n    padding: 0 6px;\n    height: 18px;\n    background: #f16565;\n    position: absolute;\n    border-radius: 50%;\n    font-size: 12px;\n    color: #fff;\n    left: 20px;\n    top: -2px;\n    font-weight: 700;\n}\n\n.cart {\n    display: -webkit-box;\n    display: flex;\n    text-decoration: none;\n    position: relative;\n}\n\n/* -----media query for menu---- */\n\n@media screen and (max-width:800px) {\n    nav ul {\n        position: absolute;\n        top: 70px;\n        left: 0;\n        background: white;\n        width: 100%;\n        overflow: hidden;\n        -webkit-transition: max-height 0.5s;\n        transition: max-height 0.5s;\n        right: 0;\n    }\n    nav ul li {\n        display: block;\n        margin-right: 50px;\n        margin-bottom: 10px;\n        text-align: left;\n        padding-left: 20px;\n    }\n    nav ul li a {\n        color: black;\n    }\n    .menu-icon {\n        display: block;\n        cursor: pointer;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBTztZQUFQLE9BQU87SUFDUCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBR0Esa0NBQWtDOztBQUVsQztJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxPQUFPO1FBQ1AsaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsbUNBQTJCO1FBQTNCLDJCQUEyQjtRQUMzQixRQUFRO0lBQ1o7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xufVxuXG4ubmF2YmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxubmF2IHtcbiAgICBmbGV4OiAxO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5uYXYgdWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbm5hdiB1bCBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuc3BhbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbnAge1xuICAgIGNvbG9yOiAjNTU1O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEzMDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi5oZWFkZXIgLnJvdyB7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLm1lbnUtaWNvbiB7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRlc2t0b3AtbWVsb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMTY1NjU7XG59XG5cbi5kZXNrdG9wLWJhZGdlIHtcbiAgICAvKiB3aGl0ZS1zcGFjZTogbm93cmFwOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBwYWRkaW5nOiAwIDZweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgYmFja2dyb3VuZDogI2YxNjU2NTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIHRvcDogLTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uY2FydCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5cbi8qIC0tLS0tbWVkaWEgcXVlcnkgZm9yIG1lbnUtLS0tICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODAwcHgpIHtcbiAgICBuYXYgdWwge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNzBweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNXM7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgICBuYXYgdWwgbGkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgfVxuICAgIG5hdiB1bCBsaSBhIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgICAubWVudS1pY29uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





// import { ShowAllProductsComponent } from '../show-all-products/show-all-products.component';
let NavbarComponent = class NavbarComponent {
    constructor(productService, userService, router) {
        // this.subscription = this.productService.itemCount().subscribe(cartItemCount => { this.cartItemCount = cartItemCount });
        this.productService = productService;
        this.userService = userService;
        this.router = router;
        this.isMenuCollapsed = true;
    }
    ngOnInit() {
        this.cartCount = this.productService.getTotalProducts();
        //  this.cartItemCount = this.productService.itemCount(this.cartItemCount);
        this.userService.getPorfile().subscribe(data => {
            this.user = data['user'],
                this.name = this.user.name;
            console.log("this user name:", this.user.name);
            // error => this.user = 'Profile'
        });
        // this.MenuItems.style.maxHeight = "0px";
        this.MenuItems = document.getElementById("MenuItems");
        this.MenuItems.style.maxHeight = "0px";
    }
    onLogoutClick() {
        this.userService.logout();
        console.log("You are logged out");
        this.router.navigate(['/']);
        return false;
    }
    menutoggle() {
        // document.getElementById("MenuItems").style.maxHeight = "0px";
        if (this.MenuItems.style.maxHeight == "0px") {
            this.MenuItems.style.maxHeight = "200px";
        }
        else {
            this.MenuItems.style.maxHeight = "0px";
        }
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .container{\n    padding-top:100px;\n}\n\n.imageResize{\n\n    width: 100px !important; \n    height: 100px !important;\n}\n\n.space{\n    margin-bottom: 30px; */\n\n\n/* } */\n\n\n/* .AddedMessage{\n    padding: 20px;\n    background-color:#249424;\n    color: white;\n    margin-bottom: 15px;\n    position: fixed;\n    text-align: center;\n    top: 0;\n    width: 100%;\n    margin: 0 auto;  \n    z-index:9999; \n    \n    }\n\n    .RemovedMessage{\n        padding: 20px;\n        background-color:red;\n        color: white;\n        margin-bottom: 15px;\n        position: fixed;\n        text-align: center;\n        top: 0;\n        width: 100%;\n        margin: 0 auto;  \n        z-index:9999; \n        \n        } */\n\n\n/* -------Single Product Details--------- */\n\n\n.small-container {\n    max-width: 1080px;\n    margin: auto;\n    padding-left: 25px;\n}\n\n\n.row {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n\n\n.col-2 {\n    flex-basis: 50%;\n    min-width: 300px;\n}\n\n\n.col-2 p {\n    margin-bottom: 50px;\n    color: #555;\n}\n\n\n.col-2 p a {\n    text-decoration: none;\n    color: #555;\n}\n\n\n.col-2 p a:visited {\n    text-decoration: none;\n}\n\n\n.single-product {\n    margin-top: 80px;\n}\n\n\n.single-product .col-2 img {\n    padding: 0;\n}\n\n\n.single-product .col-2 {\n    padding: 20px;\n}\n\n\n.single-product h4 {\n    margin: 20px 0;\n    font-size: 22px;\n    font-weight: bold;\n}\n\n\n.single-product select {\n    display: block;\n    padding: 10px;\n    margin-top: 20px;\n}\n\n\n.single-product input {\n    width: 50px;\n    height: 40px;\n    padding-left: 10px;\n    font-size: 20px;\n    margin-right: 10px;\n    border: 1px solid #ff523b;\n}\n\n\ninput:focus {\n    outline: none;\n}\n\n\n.single-product .fa {\n    color: #ff523b;\n    margin-left: 10px;\n}\n\n\n.small-img-row {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n}\n\n\n.small-img-col {\n    flex-basis: 24%;\n    cursor: pointer;\n}\n\n\n.col-2 img {\n    max-width: 100%;\n    padding: 50px 0;\n}\n\n\n.col-2 h1 {\n    font-size: 50px;\n    line-height: 60px;\n    margin: 25px 0;\n}\n\n\n.btn {\n    display: inline-block;\n    background: #ff523b;\n    color: #fff;\n    padding: 8px 30px;\n    margin: 30px 0;\n    border-radius: 30px;\n    -webkit-transition: background 0.5s;\n    transition: background 0.5s;\n}\n\n\n.btn:hover {\n    background: #563434;\n    cursor: pointer;\n}\n\n\nh4 {\n    color: #282c3f;\n    font-weight: normal;\n    /* overflow: hidden; */\n    font-size: 14px;\n    font-weight: 400;\n}\n\n\n@media screen and (max-width:800px) {\n    .small-container {\n        /* margin: auto !important; */\n        padding-left: 10px;\n        padding-right: 10px;\n    }\n    .col-2 img {\n        max-width: 100%;\n        /* padding: 50px 0; */\n    }\n    .row {\n        text-align: center;\n    }\n    .col-2,\n    .col-3,\n    .col-4 {\n        flex-basis: 100%;\n    }\n    .single-product .row {\n        text-align: left;\n    }\n    .single-product .col-2 {\n        padding: 20px 0;\n    }\n    .single-product h1 {\n        font-size: 26px;\n        line-height: 32px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OzBCQVcwQjs7O0FBRzFCLE1BQU07OztBQUdOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQTBCVzs7O0FBR1gsMkNBQTJDOzs7QUFFM0M7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztBQUNmOzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQThCO1lBQTlCLDhCQUE4QjtBQUNsQzs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsbUNBQTJCO0lBQTNCLDJCQUEyQjtBQUMvQjs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO1FBQzdCLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGVBQWU7UUFDZixxQkFBcUI7SUFDekI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBOzs7UUFHSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuY29udGFpbmVye1xuICAgIHBhZGRpbmctdG9wOjEwMHB4O1xufVxuXG4uaW1hZ2VSZXNpemV7XG5cbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDsgXG4gICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xufVxuXG4uc3BhY2V7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgKi9cblxuXG4vKiB9ICovXG5cblxuLyogLkFkZGVkTWVzc2FnZXtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IzI0OTQyNDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bzsgIFxuICAgIHotaW5kZXg6OTk5OTsgXG4gICAgXG4gICAgfVxuXG4gICAgLlJlbW92ZWRNZXNzYWdle1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87ICBcbiAgICAgICAgei1pbmRleDo5OTk5OyBcbiAgICAgICAgXG4gICAgICAgIH0gKi9cblxuXG4vKiAtLS0tLS0tU2luZ2xlIFByb2R1Y3QgRGV0YWlscy0tLS0tLS0tLSAqL1xuXG4uc21hbGwtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwODBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuXG4ucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uY29sLTIge1xuICAgIGZsZXgtYmFzaXM6IDUwJTtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG4uY29sLTIgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBjb2xvcjogIzU1NTtcbn1cblxuLmNvbC0yIHAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjNTU1O1xufVxuXG4uY29sLTIgcCBhOnZpc2l0ZWQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNpbmdsZS1wcm9kdWN0IHtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuXG4uc2luZ2xlLXByb2R1Y3QgLmNvbC0yIGltZyB7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLnNpbmdsZS1wcm9kdWN0IC5jb2wtMiB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLnNpbmdsZS1wcm9kdWN0IGg0IHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zaW5nbGUtcHJvZHVjdCBzZWxlY3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnNpbmdsZS1wcm9kdWN0IGlucHV0IHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmNTIzYjtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zaW5nbGUtcHJvZHVjdCAuZmEge1xuICAgIGNvbG9yOiAjZmY1MjNiO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uc21hbGwtaW1nLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zbWFsbC1pbWctY29sIHtcbiAgICBmbGV4LWJhc2lzOiAyNCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29sLTIgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNTBweCAwO1xufVxuXG4uY29sLTIgaDEge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICBtYXJnaW46IDI1cHggMDtcbn1cblxuLmJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNmZjUyM2I7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogOHB4IDMwcHg7XG4gICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXM7XG59XG5cbi5idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM1NjM0MzQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5oNCB7XG4gICAgY29sb3I6ICMyODJjM2Y7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjgwMHB4KSB7XG4gICAgLnNtYWxsLWNvbnRhaW5lciB7XG4gICAgICAgIC8qIG1hcmdpbjogYXV0byAhaW1wb3J0YW50OyAqL1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC5jb2wtMiBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIC8qIHBhZGRpbmc6IDUwcHggMDsgKi9cbiAgICB9XG4gICAgLnJvdyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmNvbC0yLFxuICAgIC5jb2wtMyxcbiAgICAuY29sLTQge1xuICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgIH1cbiAgICAuc2luZ2xlLXByb2R1Y3QgLnJvdyB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIC5zaW5nbGUtcHJvZHVjdCAuY29sLTIge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgfVxuICAgIC5zaW5nbGUtcHJvZHVjdCBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ProductComponent = class ProductComponent {
    constructor(productService, route, actRoute) {
        this.productService = productService;
        this.route = route;
        this.actRoute = actRoute;
    }
    ngOnInit() {
        this.productID = this.actRoute.snapshot.params['id'];
        // this.currentProduct = this.actRoute.snapshot.params['id'];
        this.loadProductDetails(this.productID);
        this.cartItemCount = JSON.parse(localStorage.getItem(this.cartItemCount));
        this.findRecommendedProducts();
    }
    ;
    loadProductDetails(productID) {
        this.productService.getProductById(productID).subscribe((product) => {
            this.productData = product;
            console.log("Product Data is:", this.productData);
            return this.productData;
        });
    }
    ;
    findRecommendedProducts() {
        console.log("Current Product is:", this.productData);
        this.productService.getProducts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((products) => products.filter(product => product.category == this.productData.category)))
            .subscribe((data) => {
            this.recommendedProducts = data;
            console.log("Recommended Products:", this.recommendedProducts);
        });
    }
    ;
    AddToCart(product) {
        this.productService.OnAddCart(product);
        this.AddedMessage = true;
        setTimeout(() => this.AddedMessage = false, 1000);
    }
    RemoveFromCart(product) {
        this.productService.removeCartProduct(product);
        this.RemovedMessage = true;
        setTimeout(() => this.RemovedMessage = false, 1000);
    }
    CountCartQuantity(product) {
        this.productService.countQuantity(product);
    }
};
ProductComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")).default]
    })
], ProductComponent);



/***/ }),

/***/ "./src/app/profile/profile-orders/profile-orders.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/profile/profile-orders/profile-orders.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n    padding-top: 100px;\n    padding-bottom: 100px;\n}\n\nhr {\n    height: 1px;\n    background-color: black;\n}\n\n.container h2 {\n    padding-left: 75px;\n    padding-bottom: 50px;\n}\n\n.one-order {\n    background-color: #eceaeb;\n    margin-bottom: 20px;\n    margin: auto;\n    max-width: 800px;\n    /* width: 50%; */\n}\n\n.row {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n\n.col-20 {\n    flex-basis: 20%;\n}\n\n.col-80 {\n    flex-basis: 80%;\n    font-size: 15px;\n    color: 222222;\n}\n\n/* .product-details {\n    float: left;\n} */\n\n/* \ntable {\n    border: 1px black solid;\n} */\n\ntbody {\n    background-color: white;\n}\n\ntd {\n    padding-top: 3px;\n    border: 1px solid #eceaeb;\n    padding-left: 22px;\n    /* padding-right: 22px; */\n}\n\n.table-header-row {\n    font-size: 13px;\n    padding-bottom: 7px;\n    padding-top: 7px;\n    padding-left: 22px;\n    border: 1px solid #eceaeb;\n    color: #707070;\n    width: 800px;\n    text-align: left;\n}\n\n.no-orders {\n    /* margin: auto; */\n    text-align: center;\n}\n\n/* p {\n    display: block\n} */\n\n.btn {\n    display: inline-block;\n    background: #ff523b;\n    color: #fff;\n    padding: 8px 30px;\n    margin: 30px 0;\n    border-radius: 30px;\n    -webkit-transition: background 0.5s;\n    transition: background 0.5s;\n    text-decoration: none;\n}\n\n.btn:hover {\n    background: #563434;\n}\n\n@media screen and (max-width:700px) {\n    .col-20,\n    .col-80 {\n        flex-basis: 100%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLW9yZGVycy9wcm9maWxlLW9yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBR0E7O0dBRUc7O0FBR0g7OztHQUdHOztBQUVIO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBR0E7O0dBRUc7O0FBRUg7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixtQ0FBMkI7SUFBM0IsMkJBQTJCO0lBQzNCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJOztRQUVJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLW9yZGVycy9wcm9maWxlLW9yZGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuaHIge1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uY29udGFpbmVyIGgyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDc1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbi5vbmUtb3JkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VhZWI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAvKiB3aWR0aDogNTAlOyAqL1xufVxuXG4ucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uY29sLTIwIHtcbiAgICBmbGV4LWJhc2lzOiAyMCU7XG59XG5cbi5jb2wtODAge1xuICAgIGZsZXgtYmFzaXM6IDgwJTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6IDIyMjIyMjtcbn1cblxuXG4vKiAucHJvZHVjdC1kZXRhaWxzIHtcbiAgICBmbG9hdDogbGVmdDtcbn0gKi9cblxuXG4vKiBcbnRhYmxlIHtcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcbn0gKi9cblxudGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG50ZCB7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWNlYWViO1xuICAgIHBhZGRpbmctbGVmdDogMjJweDtcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAyMnB4OyAqL1xufVxuXG4udGFibGUtaGVhZGVyLXJvdyB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gICAgcGFkZGluZy10b3A6IDdweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VjZWFlYjtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICB3aWR0aDogODAwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm5vLW9yZGVycyB7XG4gICAgLyogbWFyZ2luOiBhdXRvOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4vKiBwIHtcbiAgICBkaXNwbGF5OiBibG9ja1xufSAqL1xuXG4uYnRuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI2ZmNTIzYjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA4cHggMzBweDtcbiAgICBtYXJnaW46IDMwcHggMDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM1NjM0MzQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzAwcHgpIHtcbiAgICAuY29sLTIwLFxuICAgIC5jb2wtODAge1xuICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/profile/profile-orders/profile-orders.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/profile/profile-orders/profile-orders.component.ts ***!
  \********************************************************************/
/*! exports provided: ProfileOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileOrdersComponent", function() { return ProfileOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");



let ProfileOrdersComponent = class ProfileOrdersComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.getProfileOrders().subscribe((data) => {
            this.myOrders = data;
            console.log("My Orders:", this.myOrders);
        });
    }
    NoOrders() {
        this.myOrders.length < 0;
        return true;
    }
    HaveOrders() {
        this.myOrders.length > 0;
    }
};
ProfileOrdersComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
ProfileOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-orders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile-orders/profile-orders.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-orders.component.css */ "./src/app/profile/profile-orders/profile-orders.component.css")).default]
    })
], ProfileOrdersComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    .container {\n        padding-top: 60px;\n        max-width: 1300px;\n        margin: auto;\n        padding-left: 25px;\n        padding-right: 25px;\n    }\n    \n    .personal-details-block {\n        border: 1px solid #d7d7d7;\n        width: 50%;\n    }\n    \n    .personal-details-title {\n        border-bottom: 1px solid #d7d7d7;\n        padding: auto;\n        background-color: #f5f5f5;\n        padding-top: 8px;\n        padding-left: 10px;\n        padding-bottom: 8px;\n        font-weight: bold;\n    }\n    \n    .my-details-content {\n        padding-left: 10px;\n    }\n    \n    label {\n        font-weight: bold;\n        font-size: 13px;\n    }\n    \n    .btn {\n        display: inline-block;\n        background: #ff523b;\n        color: #fff;\n        padding: 8px 30px;\n        margin: 30px 0;\n        border-radius: 30px;\n        -webkit-transition: background 0.5s;\n        transition: background 0.5s;\n        text-decoration: none;\n        width: auto;\n        /* padding: 10px; */\n    }\n    \n    .btn:hover {\n        background: #563434;\n        /* 043867 */\n    }\n    \n    @media screen and (max-width:800px) {\n        .personal-details-block {\n            width: 100%;\n        }\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IklBQUk7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0kseUJBQXlCO1FBQ3pCLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGdDQUFnQztRQUNoQyxhQUFhO1FBQ2IseUJBQXlCO1FBQ3pCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25COztJQUVBO1FBQ0kscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsbUNBQTJCO1FBQTNCLDJCQUEyQjtRQUMzQixxQkFBcUI7UUFDckIsV0FBVztRQUNYLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixXQUFXO0lBQ2Y7O0lBRUE7UUFDSTtZQUNJLFdBQVc7UUFDZjtJQUNKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEzMDBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgfVxuICAgIFxuICAgIC5wZXJzb25hbC1kZXRhaWxzLWJsb2NrIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q3ZDdkNztcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gICAgXG4gICAgLnBlcnNvbmFsLWRldGFpbHMtdGl0bGUge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q3ZDdkNztcbiAgICAgICAgcGFkZGluZzogYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgXG4gICAgLm15LWRldGFpbHMtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG4gICAgXG4gICAgbGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgICBcbiAgICAuYnRuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmY1MjNiO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogOHB4IDMwcHg7XG4gICAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXM7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXG4gICAgfVxuICAgIFxuICAgIC5idG46aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNTYzNDM0O1xuICAgICAgICAvKiAwNDM4NjcgKi9cbiAgICB9XG4gICAgXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4MDBweCkge1xuICAgICAgICAucGVyc29uYWwtZGV0YWlscy1ibG9jayB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH0iXX0= */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProfileComponent = class ProfileComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.username = '';
    }
    ngOnInit() {
        this.userService.getPorfile().subscribe(data => {
            this.user = data['user'];
            error => this.router.navigate(['/main/login']);
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/search.pipe.ts":
/*!********************************!*\
  !*** ./src/app/search.pipe.ts ***!
  \********************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'search'
// })
// export class SearchPipe implements PipeTransform {
//   transform(value: any, ...args: any[]): any {
//     return null;
//   }
// }

let SearchPipe = class SearchPipe {
    // transform(value:any, arg ?: any): any {
    //   if(!value) return null;
    //   if(!arg) return value;
    //   arg = arg.toLowerCase();
    //   return value.filter(function(myData){
    //     return (JSON.stringify(myData.name).toLowerCase().includes(arg) || JSON.stringify(myData.description).toLowerCase().includes(arg));
    //   });
    // }
    transform(products, searchTerm) {
        if (!products || !searchTerm) {
            return products;
        }
        return products.filter(product => product.product_Name.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1);
    }
};
SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'productFilter',
        pure: false // impure pipe
    })
], SearchPipe);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");




let AuthService = class AuthService {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate() {
        const checkout = localStorage.getItem('product');
        const loggedIn = this.userService.loggedIn();
        if (checkout && loggedIn) {
            return true;
        }
        else {
            this.router.navigate(["/account"]);
            return false;
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/authguard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/authguard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardService", function() { return AuthguardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");




let AuthguardService = class AuthguardService {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate() {
        const loggedIn = localStorage.getItem('id_token');
        if (loggedIn) {
            return true;
        }
        else {
            this.router.navigate(["/account"]);
            return false;
        }
    }
};
AuthguardService.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthguardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthguardService);



/***/ }),

/***/ "./src/app/services/connection.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/connection.service.ts ***!
  \************************************************/
/*! exports provided: ConnectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionService", function() { return ConnectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ConnectionService = class ConnectionService {
    // urlReceipt = `https://surpassapp.herokuapp.com/api/sendReceipt`
    constructor(http) {
        this.http = http;
        // uri: string = 'http://localhost:3000/send';
        // urlReceipt: string  = 'http://localhost:3000/sendReceipt';
        this.uri = `https://newsurpass.herokuapp.com/`;
    }
    sendMessage(messageContent) {
        return this.http.post(`${this.uri}/send`, JSON.stringify(messageContent), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }), responseType: 'text' });
    }
    sendReceipt(messageContent, order) {
        return this.http.post(`${this.uri}/sendReceipt`, JSON.stringify(messageContent, order), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }), responseType: 'text' });
    }
};
ConnectionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ConnectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ConnectionService);



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let OrderService = class OrderService {
    constructor(http) {
        this.http = http;
        // uri = 'http://localhost:5000/api'
        this.uri = `https://newsurpass.herokuapp.com/api`;
    }
    getAllOrders() {
        return this.http.get(`${this.uri}/order`);
    }
    getOrderById(id) {
        return this.http.get(`${this.uri}/order/${id}`);
    }
    CreateOrder(orderDetails) {
        const token = localStorage.getItem('id_token');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'auth-token': token
        });
        const httpOptions = {
            headers: headers
        };
        return this.http.post(`${this.uri}/order`, orderDetails, httpOptions);
    }
    deleteOrderById(id) {
        return this.http.delete(`${this.uri}/order/${id}`);
    }
};
OrderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrderService);



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);






let ProductService = class ProductService {
    // Dependency Injection - Loosey couple 
    constructor(http, flashMessageService) {
        this.http = http;
        this.flashMessageService = flashMessageService;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // uri = 'http://localhost:5000/api/products'
        // uri2 = 'http://localhost:5000/api'
        this.uri2 = `https://newsurpass.herokuapp.com/api`;
        // this.cartItemCount = this.itemCount();
        // this.productAddedToCart = this.getProductFromCart();
    }
    // Get list of all products
    getProducts() {
        return this.http.get(`${this.uri2}`);
    }
    //Get one Product
    getProductById(id) {
        return this.http.get(`${this.uri2}/product/${id}`);
    }
    addProductToCart(product) {
        localStorage.setItem("product", JSON.stringify(product));
    }
    getProductFromCart() {
        return JSON.parse(localStorage.getItem("product"));
    }
    getById(id) {
        return this.getProductFromCart().find(x => x.id === id);
    }
    removeProductFromCart() {
        return localStorage.removeItem("product");
    }
    errorHandler(error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    }
    itemCount() {
        if (JSON.parse(localStorage.getItem("cartItemCount")) == null) {
            return this.cartItemCount = 0;
        }
        else {
            return JSON.parse(localStorage.getItem("cartItemCount"));
        }
    }
    getCartList() {
        return this.productAddedToCart;
    }
    getTotalProducts() {
        this.productAddedToCart = this.getProductFromCart();
        if (this.productAddedToCart != null) {
            this.cartItemCount = this.productAddedToCart.length;
            return this.cartItemCount;
        }
        else {
            this.cartItemCount = 0;
            return this.cartItemCount;
        }
    }
    //-----Add to cart Function-----//
    OnAddCart(product) {
        // this.flashMessageService.show('Product added to cart!', {cssClass:'alert-success', timeout: 4000});
        console.log(product);
        this.productAddedToCart = this.getProductFromCart();
        if (this.productAddedToCart == null) {
            console.log("This array is empty");
            this.productAddedToCart = [];
            this.productAddedToCart.push(product);
            this.addProductToCart(this.productAddedToCart);
            console.log('Product added to cart');
        }
        else {
            let tempProduct = this.productAddedToCart.find(p => p.product_Name == product.product_Name);
            if (tempProduct == null) {
                this.productAddedToCart.push(product);
                this.addProductToCart(this.productAddedToCart);
                console.log('Product added to cart.');
            }
            else {
                tempProduct.product_Quantity++;
                // this.productAddedToCart.find(p=>p.id==product.id).product_Quantity = product.product_Quantity +1;
                this.addProductToCart(this.productAddedToCart);
            }
        }
    }
    //-----Remove from cart Function-----//
    removeCartProduct(product) {
        // this.flashMessageService.show('Product removed from cart!', {cssClass:'alert-danger', timeout: 3000});
        this.productAddedToCart = this.getProductFromCart();
        let cartItem = this.productAddedToCart.find(p => p.product_Name == product.product_Name);
        if (cartItem) {
            let json = JSON.parse(localStorage.getItem("product"));
            for (let i = 0; i < json.length; i++) {
                if (json[i].product_Name == product.product_Name) {
                    json[i].product_Quantity--;
                    if (json[i].product_Quantity <= 0) {
                        console.log(product.product_Name);
                        console.log("Prodct removed from cart");
                        json.splice(i, 1);
                    }
                }
                localStorage.setItem("product", JSON.stringify(json));
            }
            if (this.cartItemCount > 0) {
                this.cartItemCount = JSON.parse(localStorage.getItem("cartItemCount"));
                this.cartItemCount--;
                console.log("cartItemCount:", this.cartItemCount);
                localStorage.setItem("cartItemCount", JSON.stringify(this.cartItemCount));
                if (this.cartItemCount <= 0) {
                    this.clearCart();
                }
            }
        }
    }
    //-----Count number of Products in the cart-----//
    countQuantity(product) {
        this.productAddedToCart = this.getProductFromCart();
        let cartItem = this.productAddedToCart.find(p => p.product_Name == product.product_Name);
        if (cartItem) {
            let json = JSON.parse(localStorage.getItem("product"));
            for (let i = 0; i < json.length; i++) {
                if (localStorage.getItem("cartItemCount")) {
                    this.cartItemCount = JSON.parse(localStorage.getItem("cartItemCount"));
                    this.cartItemCount++;
                    console.log("cartItemCount:", this.cartItemCount);
                    localStorage.setItem("cartItemCount", JSON.stringify(this.cartItemCount));
                    return this.cartItemCount;
                }
                else {
                    this.cartItemCount++;
                    console.log("cartItemCount:", this.cartItemCount);
                    localStorage.setItem("cartItemCount", JSON.stringify(this.cartItemCount));
                    return this.cartItemCount;
                }
            }
        }
    }
    clearCart() {
        localStorage.removeItem("product");
        this.cartItemCount = 0;
        localStorage.removeItem("cartItemCount");
    }
    calculateAllTotal(allItems) {
        let total = 0;
        for (let i in allItems) {
            total = total + (allItems[i].product_Quantity * allItems[i].product_Price);
            console.log("Item:", allItems[i]);
        }
        this.allTotal = total;
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





// import { tokenNotExpired } from 'angular2-jwt';
let UserService = class UserService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        // uri = 'http://localhost:5000/api'
        this.uri = `https://newsurpass.herokuapp.com/api`;
    }
    Signup(body) {
        return this.http.post(`${this.uri}/user/signup`, body, {
            observe: 'body'
        });
    }
    Login(user) {
        return this.http.post(`${this.uri}/user/login`, user);
    }
    getPorfile() {
        const token = localStorage.getItem('id_token');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'auth-token': token
        });
        const httpOptions = {
            headers: headers
        };
        return this.http.get(`${this.uri}/user/profile`, httpOptions);
    }
    ;
    getProfileOrders() {
        const token = localStorage.getItem('id_token');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'auth-token': token
        });
        const httpOptions = {
            headers: headers
        };
        return this.http.get(`${this.uri}/user/profile/orders`, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res['Orders']));
    }
    loggedIn() {
        return localStorage.getItem('id_token');
    }
    loggedOut() {
        return localStorage.getItem('id_token') == null;
    }
    storeUserData(token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }
    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }
    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.removeItem('id_token');
        localStorage.removeItem('user');
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n    cursor: pointer;\n}\n\n.cart-page {\n    margin: 80px auto;\n}\n\ntable {\n    width: 100%;\n    border-collapse: collapse;\n    /* table-layout: fixed; */\n}\n\n.cart-info {\n    display: -webkit-box;\n    display: flex;\n    /* align-items: center; */\n    flex-wrap: wrap;\n    /* justify-content: space-around; */\n    width: 500px !important;\n}\n\nth {\n    text-align: left;\n    padding: 5px;\n    color: #fff;\n    background: #ff523b;\n    font-weight: normal;\n}\n\n.product {\n    width: 300px !important;\n}\n\ntd {\n    padding: 10px 5px;\n    width: 100px;\n    max-width: 100px;\n    white-space: pre-wrap;\n    /* css-3 */\n    white-space: -moz-pre-wrap;\n    /* Mozilla, since 1999 */\n    white-space: -pre-wrap;\n    /* Opera 4-6 */\n    white-space: -o-pre-wrap;\n    /* Opera 7 */\n    word-wrap: break-word;\n    /* Internet Explorer 5.5+ */\n}\n\ntd .bigger {\n    width: 500px !important;\n}\n\na.btn {\n    color: #ff523b;\n    font-size: 12px;\n}\n\ntd img {\n    width: 80px;\n    height: 80px;\n    margin-right: 10px;\n}\n\n.total-price {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: end;\n            justify-content: flex-end;\n}\n\n.total-price table {\n    border-top: 3px solid #ff523b;\n    width: 100%;\n    max-width: 400px;\n}\n\ntd:last-child {\n    text-align: right;\n}\n\nth:last-child {\n    text-align: right;\n}\n\n.small-container {\n    max-width: 1080px;\n    margin: auto;\n    padding-left: 25px;\n    margin-top: 70px;\n}\n\n.small-container .empty-cart {\n    text-align: center;\n}\n\n.empty-cart .btn {\n    display: inline-block;\n    background: #ff523b;\n    color: #fff;\n    padding: 8px 30px;\n    margin: 30px 0;\n    border-radius: 30px;\n    -webkit-transition: background 0.5s;\n    transition: background 0.5s;\n    text-decoration: none;\n}\n\n.empty-cart .btn:hover {\n    background: #563434;\n}\n\ntable .qtyArea {\n    display: inline-block;\n    /* table-layout: fixed; */\n    /* width: auto; */\n    /* float: right; */\n}\n\n.qtyArea th {\n    border: 1px solid black;\n    line-height: 1;\n    text-align: center;\n}\n\n.qtyArea .qtyNumber {\n    width: 60%;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n\n.qtyArea a {\n    cursor: pointer;\n    color: white;\n    font-weight: bold;\n}\n\n.checkoutBtn {\n    float: right;\n    /* display: inline-block; */\n    background: #ff523b;\n    color: #fff;\n    padding: 8px 30px;\n    margin: 30px 0;\n    border-radius: 30px;\n    -webkit-transition: background 0.5s;\n    transition: background 0.5s;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.checkoutBtn:hover {\n    background: #563434;\n}\n\n@media screen and (max-width:600px) {\n    .small-container {\n        padding-left: 25px;\n        padding-right: 25px;\n    }\n    .cart-info p {\n        display: none\n    }\n    table .qtyArea {\n        margin: auto;\n    }\n    .cart-info {\n        width: 100px !important;\n    }\n    .checkoutBtn {\n        /* width: 100px !important;\n        height: 100px !important; */\n        float: none;\n        margin-left: 75px;\n        margin-right: 75px;\n        text-align: center;\n        /* margin-left: 150px; */\n        display: inline-block\n    }\n}\n\n@media screen and (max-width:1024px) {\n    table .qtyArea {\n        margin: auto;\n    }\n    .small-container {\n        padding-left: 25px;\n        padding-right: 25px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLG1DQUFtQztJQUNuQyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHFCQUF5QjtZQUF6Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG1DQUEyQjtJQUEzQiwyQkFBMkI7SUFDM0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG1DQUEyQjtJQUEzQiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0k7bUNBQzJCO1FBQzNCLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEI7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcnQtcGFnZSB7XG4gICAgbWFyZ2luOiA4MHB4IGF1dG87XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIC8qIHRhYmxlLWxheW91dDogZml4ZWQ7ICovXG59XG5cbi5jYXJ0LWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7ICovXG4gICAgd2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbnRoIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjZmY1MjNiO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5wcm9kdWN0IHtcbiAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbn1cblxudGQge1xuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAvKiBjc3MtMyAqL1xuICAgIHdoaXRlLXNwYWNlOiAtbW96LXByZS13cmFwO1xuICAgIC8qIE1vemlsbGEsIHNpbmNlIDE5OTkgKi9cbiAgICB3aGl0ZS1zcGFjZTogLXByZS13cmFwO1xuICAgIC8qIE9wZXJhIDQtNiAqL1xuICAgIHdoaXRlLXNwYWNlOiAtby1wcmUtd3JhcDtcbiAgICAvKiBPcGVyYSA3ICovXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIC8qIEludGVybmV0IEV4cGxvcmVyIDUuNSsgKi9cbn1cblxudGQgLmJpZ2dlciB7XG4gICAgd2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmEuYnRuIHtcbiAgICBjb2xvcjogI2ZmNTIzYjtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbnRkIGltZyB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnRvdGFsLXByaWNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi50b3RhbC1wcmljZSB0YWJsZSB7XG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmZjUyM2I7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxudGQ6bGFzdC1jaGlsZCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbnRoOmxhc3QtY2hpbGQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uc21hbGwtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwODBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG59XG5cbi5zbWFsbC1jb250YWluZXIgLmVtcHR5LWNhcnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVtcHR5LWNhcnQgLmJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNmZjUyM2I7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogOHB4IDMwcHg7XG4gICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZW1wdHktY2FydCAuYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTYzNDM0O1xufVxuXG50YWJsZSAucXR5QXJlYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC8qIHRhYmxlLWxheW91dDogZml4ZWQ7ICovXG4gICAgLyogd2lkdGg6IGF1dG87ICovXG4gICAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xufVxuXG4ucXR5QXJlYSB0aCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucXR5QXJlYSAucXR5TnVtYmVyIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucXR5QXJlYSBhIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2hlY2tvdXRCdG4ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXG4gICAgYmFja2dyb3VuZDogI2ZmNTIzYjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA4cHggMzBweDtcbiAgICBtYXJnaW46IDMwcHggMDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hlY2tvdXRCdG46aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM1NjM0MzQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcbiAgICAuc21hbGwtY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAgIH1cbiAgICAuY2FydC1pbmZvIHAge1xuICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgfVxuICAgIHRhYmxlIC5xdHlBcmVhIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICAuY2FydC1pbmZvIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jaGVja291dEJ0biB7XG4gICAgICAgIC8qIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7ICovXG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICBtYXJnaW4tbGVmdDogNzVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3NXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC8qIG1hcmdpbi1sZWZ0OiAxNTBweDsgKi9cbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjRweCkge1xuICAgIHRhYmxlIC5xdHlBcmVhIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICAuc21hbGwtY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");




let ShoppingCartComponent = class ShoppingCartComponent {
    constructor(productService, userService) {
        this.productService = productService;
        this.userService = userService;
    }
    ngOnInit() {
        this.productAddedToCart = this.productService.getProductFromCart();
        // this.productService.addProductToCart(this.productAddedToCart);
        this.calculateAllTotal(this.productAddedToCart);
        this.cartItemCount = JSON.parse(localStorage.getItem(this.cartItemCount));
    }
    onAddQuantity(product) {
        this.cartItemCount = localStorage.getItem("cartItemCount");
        // this.productAddedToCart=this.productService.getProductFromCart();
        this.productAddedToCart.find(p => p.id == product.id).product_Quantity = product.product_Quantity + 1;
        // localStorage.setItem("product", JSON.stringify(this.productAddedToCart));
        this.productService.addProductToCart(this.productAddedToCart);
        this.calculateAllTotal(this.productAddedToCart);
    }
    onRemoveQuantity(product) {
        this.cartItemCount = localStorage.getItem("cartItemCount");
        // this.productAddedToCart=this.productService.getProductFromCart();
        this.productAddedToCart.find(p => p.id == product.id).product_Quantity = product.product_Quantity - 1;
        if (product.product_Quantity <= 0) {
            let index = this.productAddedToCart.indexOf(product);
            this.productAddedToCart.splice(index, 1);
        }
        // localStorage.setItem("product", JSON.stringify(this.productAddedToCart));
        this.productService.addProductToCart(this.productAddedToCart);
        this.calculateAllTotal(this.productAddedToCart);
        if (this.cartItemCount > 0) {
            this.cartItemCount = JSON.parse(localStorage.getItem("cartItemCount"));
            this.cartItemCount--;
            console.log("cartItemCount:", this.cartItemCount);
            localStorage.setItem("cartItemCount", JSON.stringify(this.cartItemCount));
            if (this.cartItemCount <= 0) {
                this.productService.clearCart();
            }
        }
    }
    removeProduct(product) {
        this.cartItemCount = JSON.parse(localStorage.getItem("cartItemCount"));
        this.productAddedToCart = this.productService.getProductFromCart();
        let cartItem = this.productAddedToCart.find(p => p.product_Name == product.product_Name);
        if (cartItem) {
            for (let i = 0; i < this.productAddedToCart.length; i++)
                if (this.productAddedToCart[i].product_Name == product.product_Name) {
                    this.cartItemCount = this.cartItemCount - this.productAddedToCart[i].product_Quantity;
                    this.productAddedToCart.splice(i, 1);
                }
            localStorage.setItem("product", JSON.stringify(this.productAddedToCart));
            localStorage.setItem("cartItemCount", JSON.stringify(this.cartItemCount));
            if (this.cartItemCount <= 0) {
                this.productService.clearCart();
            }
        }
    }
    CountCartQuantity(product) {
        this.productService.countQuantity(product);
    }
    calculateAllTotal(productAddedToCart) {
        let total = 0;
        for (let i in productAddedToCart) {
            total = total + (productAddedToCart[i].product_Quantity * productAddedToCart[i].product_Price);
            console.log("Item:", productAddedToCart[i]);
        }
        this.allTotal = total;
    }
    cartIsEmpty() {
        return localStorage.getItem("cartItemCount") == null;
    }
    itemInCart() {
        return localStorage.getItem("product");
    }
    clearCart() {
        let alert = confirm("Clear cart?");
        if (alert) {
            this.productService.clearCart();
        }
    }
};
ShoppingCartComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopping-cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-cart/shopping-cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/shopping-cart/shopping-cart.component.css")).default]
    })
], ShoppingCartComponent);



/***/ }),

/***/ "./src/app/show-all-products/show-all-products.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/show-all-products/show-all-products.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".small-container {\n    max-width: 1080px;\n    margin: auto;\n    padding-left: 25px;\n    padding-bottom: 100px;\n}\n\n.row {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n\n.row-2 {\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    margin: 100px auto 50px;\n}\n\n.col-4 {\n    flex-basis: 25%;\n    padding: 10px;\n    min-width: 200px;\n    margin-bottom: 50px;\n    -webkit-transition: -webkit-transform 0.5s;\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s;\n}\n\n.col-4 img {\n    width: 100%;\n}\n\n.col-4 p {\n    font-size: 14px;\n    color: #555\n}\n\nselect {\n    border: 1px solid #ff523b;\n    padding: 5px;\n}\n\nselect:focus {\n    outline: none;\n}\n\nh4 {\n    color: #555;\n    font-weight: normal;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.col-4 p {\n    font-size: 14px;\n}\n\n.rating .fa {\n    color: #ff523b\n}\n\n.col-4:hover {\n    -webkit-transform: translateY(-5px);\n            transform: translateY(-5px);\n}\n\n@media screen and (max-width:800px) {\n    .small-container {\n        margin-bottom: -500px;\n        text-align: center;\n        padding: 0px;\n    }\n    .col-2,\n    .col-3,\n    .col-4 {\n        flex-basis: 100%;\n        padding: 0px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvdy1hbGwtcHJvZHVjdHMvc2hvdy1hbGwtcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDBDQUEwQjtJQUExQixrQ0FBMEI7SUFBMUIsMEJBQTBCO0lBQTFCLGtEQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJO1FBQ0kscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixZQUFZO0lBQ2hCO0lBQ0E7OztRQUdJLGdCQUFnQjtRQUNoQixZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zaG93LWFsbC1wcm9kdWN0cy9zaG93LWFsbC1wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNtYWxsLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMDgwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG5cbi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5yb3ctMiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogMTAwcHggYXV0byA1MHB4O1xufVxuXG4uY29sLTQge1xuICAgIGZsZXgtYmFzaXM6IDI1JTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbn1cblxuLmNvbC00IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb2wtNCBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM1NTVcbn1cblxuc2VsZWN0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY1MjNiO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuc2VsZWN0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5oNCB7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5jb2wtNCBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5yYXRpbmcgLmZhIHtcbiAgICBjb2xvcjogI2ZmNTIzYlxufVxuXG4uY29sLTQ6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4MDBweCkge1xuICAgIC5zbWFsbC1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtNTAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbiAgICAuY29sLTIsXG4gICAgLmNvbC0zLFxuICAgIC5jb2wtNCB7XG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/show-all-products/show-all-products.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/show-all-products/show-all-products.component.ts ***!
  \******************************************************************/
/*! exports provided: ShowAllProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAllProductsComponent", function() { return ShowAllProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");



let ShowAllProductsComponent = class ShowAllProductsComponent {
    constructor(productService) {
        this.productService = productService;
        this.count = 0;
        this.pageActual = 1;
    }
    ngOnInit() {
        this.productService.getProducts().subscribe((data) => {
            this.lstProducts = data;
        }, this.cartItemCount = JSON.parse(localStorage.getItem(this.cartItemCount)));
    }
    ;
    OnAddCart(product) {
        console.log(product);
        this.productAddedToCart = this.productService.getProductFromCart();
        if (this.productAddedToCart == null) {
            console.log("This array is empty");
            this.productAddedToCart = [];
            this.productAddedToCart.push(product);
            this.productService.addProductToCart(this.productAddedToCart);
            console.log('Product added to cart');
        }
        else {
            let tempProduct = this.productAddedToCart.find(p => p.id == product.id);
            if (tempProduct == null) {
                this.productAddedToCart.push(product);
                this.productService.addProductToCart(this.productAddedToCart);
                console.log('Product added to cart.');
            }
            else {
                tempProduct.product_Quantity++;
                // this.productAddedToCart.find(p=>p.id==product.id).product_Quantity = product.product_Quantity +1;
                this.productService.addProductToCart(this.productAddedToCart);
            }
        }
    }
    removeCartProduct(product) {
        this.cartItemCount = localStorage.getItem("cartItemCount");
        this.productAddedToCart = this.productService.getProductFromCart();
        let cartItem = this.productAddedToCart.find(p => p.id == product.id);
        if (cartItem) {
            let json = JSON.parse(localStorage.getItem("product"));
            for (let i = 0; i < json.length; i++) {
                if (json[i].id == product.id) {
                    //
                    // let temp = this.productAddedToCart.find(p=>p.id==product.id);
                    json[i].product_Quantity--;
                    // temp.product_Quantity --;
                    if (json[i].product_Quantity <= 0) {
                        //
                        console.log(product.id);
                        console.log("Prodct removed from cart ");
                        //debugger;
                        json.splice(i, 1);
                    }
                }
                localStorage.setItem("product", JSON.stringify(json));
            }
            if (this.cartItemCount > 0) {
                this.cartItemCount = JSON.parse(localStorage.getItem("cartItemCount"));
                this.cartItemCount--;
                console.log("cartItemCount:", this.cartItemCount);
                localStorage.setItem("cartItemCount", JSON.stringify(this.cartItemCount));
                return this.cartItemCount;
            }
            else {
                this.cartItemCount = 0;
                return this.cartItemCount;
            }
        }
    }
    countQuantity(product) {
        this.productAddedToCart = this.productService.getProductFromCart();
        let cartItem = this.productAddedToCart.find(p => p.id == product.id);
        if (cartItem) {
            let json = JSON.parse(localStorage.getItem("product"));
            for (let i = 0; i < json.length; i++) {
                if (localStorage.getItem("cartItemCount")) {
                    this.cartItemCount = JSON.parse(localStorage.getItem("cartItemCount"));
                    this.cartItemCount++;
                    console.log("cartItemCount:", this.cartItemCount);
                    localStorage.setItem("cartItemCount", JSON.stringify(this.cartItemCount));
                    return this.cartItemCount;
                }
                else {
                    this.cartItemCount++;
                    console.log("cartItemCount:", this.cartItemCount);
                    localStorage.setItem("cartItemCount", JSON.stringify(this.cartItemCount));
                    return this.cartItemCount;
                }
            }
        }
    }
    // sendNumber() {
    //   this.productService.sendNumber(this.countQuantity(this.cartItemCount));
    // }
    increament() {
        this.count += 1;
        console.log("count:", this.count);
        return this.count;
    }
};
ShowAllProductsComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
ShowAllProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-all-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show-all-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-all-products/show-all-products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./show-all-products.component.css */ "./src/app/show-all-products/show-all-products.component.css")).default]
    })
], ShowAllProductsComponent);



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  \n.container {\n    padding-top: 70px;\n  }\n\n  .validation-message{\n    color: red;\n  }\n\n  .alert {\n    background-color: transparent;\n    border: 0;\n    color: red;\n  }\n\n  .success{\n    padding: 20px;\n    background-color: transparent;\n    border: 0;\n    color: green;\n    margin-bottom: 15px;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IsU0FBUztJQUNULFVBQVU7RUFDWjs7RUFFRTtJQUNBLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsU0FBUztJQUNULFlBQVk7SUFDWixtQkFBbUI7SUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcbiAgfVxuXG4gIC52YWxpZGF0aW9uLW1lc3NhZ2V7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuICAuYWxlcnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMDtcbiAgICBjb2xvcjogcmVkO1xuICB9XG4gICAgXG4gICAgLnN1Y2Nlc3N7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDA7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let SignupComponent = class SignupComponent {
    constructor(userService, fb) {
        this.userService = userService;
        this.fb = fb;
        this.emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        this.nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        this.disabledSubmitButton = true;
    }
    ngOnInit() {
        this.signUpForm = this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]],
        });
    }
    oninput() {
        if (this.signUpForm.valid) {
            this.disabledSubmitButton = false;
        }
    }
    signUp() {
        // let userDetails: any = {}
        // userDetails.name = this.signUpForm.controls['name'].value;
        // userDetails.email = this.signUpForm.controls['email'].value;
        // userDetails.password = this.signUpForm.controls['password'].value;
        this.userService.Signup(this.signUpForm.value).subscribe(res => {
            this.showSuccessMessage = true;
            setTimeout(() => this.showSuccessMessage = false, 4000);
            this.signUpForm.reset();
            this.signUpForm.setValue({
                name: '',
                email: '',
                password: ''
            });
        }, err => {
            this.serverErrorMessages = true;
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input')
], SignupComponent.prototype, "oninput", null);
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")).default]
    })
], SignupComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lenovo\Desktop\MyShop-NEW 27.9.2020\MyShop-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map