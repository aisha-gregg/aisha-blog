module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/about/about.jsx":
/*!************************************!*\
  !*** ./components/about/about.jsx ***!
  \************************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _about_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.module.css */ "./components/about/about.module.css");
/* harmony import */ var _about_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_about_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Aisha\\workspace\\aisha-blog\\components\\about\\about.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function About() {
  return __jsx("main", {
    className: _about_module_css__WEBPACK_IMPORTED_MODULE_1___default.a["wrapper-content"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("section", {
    className: _about_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.introduction,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("img", {
    src: "./img/index-photo.jpg",
    alt: "profilepic",
    className: _about_module_css__WEBPACK_IMPORTED_MODULE_1___default.a["profile-photo"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h2", {
    className: _about_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.about,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "About me"), __jsx("p", {
    className: _about_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Hi. I am Aisha Kamilah; travel enthusiast and blogger. I am from the beautiful twin isles of", " ", __jsx("a", {
    href: "https://www.google.com/maps?q=trinidad+and+tobago&rlz=1C1GCEA_enES871ES871&um=1&ie=UTF-8&sa=X&ved=2ahUKEwj7tNvOioTpAhUPlhQKHUxpC8YQ_AUoAXoECBkQAw",
    rel: "noopener noreferrer",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Trinidad and Tobago"), ". Now I live in Spain and travel frequently across Europe. For the past couple years up until now, and after visiting over 30 cities, my perspectives and visions of all that I have known continues to be challenged. I want to somehow share my stories with the world."), __jsx("p", {
    className: _about_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./components/about/about.module.css":
/*!*******************************************!*\
  !*** ./components/about/about.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper-content": "about_wrapper-content__2d0XC",
	"profile-photo": "about_profile-photo___gt73",
	"about": "about_about__1jfcF",
	"text": "about_text__pedTC",
	"introduction": "about_introduction__o3AFB"
};


/***/ }),

/***/ "./components/feature-image/FeatureImage.jsx":
/*!***************************************************!*\
  !*** ./components/feature-image/FeatureImage.jsx ***!
  \***************************************************/
/*! exports provided: FeatureImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureImage", function() { return FeatureImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _feature_image_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature-image.module.css */ "./components/feature-image/feature-image.module.css");
/* harmony import */ var _feature_image_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_feature_image_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ "classnames/bind");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Aisha\\workspace\\aisha-blog\\components\\feature-image\\FeatureImage.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_feature_image_module_css__WEBPACK_IMPORTED_MODULE_1___default.a);
function FeatureImage({
  text,
  image,
  onClick,
  className
}) {
  return __jsx("div", {
    className: cx("container", className, {
      "non-navigable": onClick === undefined
    }),
    onClick: () => onClick !== undefined && onClick(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("img", {
    src: image,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("h2", {
    className: cx("title"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, text));
}

/***/ }),

/***/ "./components/feature-image/feature-image.module.css":
/*!***********************************************************!*\
  !*** ./components/feature-image/feature-image.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "feature-image_container__39DH0",
	"non-navigable": "feature-image_non-navigable__-MUf3",
	"title": "feature-image_title__kcVw6"
};


/***/ }),

/***/ "./components/footer/Footer.jsx":
/*!**************************************!*\
  !*** ./components/footer/Footer.jsx ***!
  \**************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.module.css */ "./components/footer/footer.module.css");
/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _link_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link/Link */ "./components/link/Link.jsx");
/* harmony import */ var _social_media_links_SocialMediaLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../social-media-links/SocialMediaLinks */ "./components/social-media-links/SocialMediaLinks.jsx");
var _jsxFileName = "C:\\Users\\Aisha\\workspace\\aisha-blog\\components\\footer\\Footer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Footer() {
  return __jsx("footer", {
    className: _footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: _footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.links,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h5", {
    className: "alternate-title" + " " + _footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Last Updated: April 2020 Follow me!")), __jsx(_social_media_links_SocialMediaLinks__WEBPACK_IMPORTED_MODULE_3__["SocialMediaLinks"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/footer/footer.module.css":
/*!*********************************************!*\
  !*** ./components/footer/footer.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "footer_footer__1pkyR",
	"links": "footer_links__8BnX8",
	"title": "footer_title__2mXA6"
};


/***/ }),

/***/ "./components/header/Header.jsx":
/*!**************************************!*\
  !*** ./components/header/Header.jsx ***!
  \**************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.module.css */ "./components/header/header.module.css");
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Aisha\\workspace\\aisha-blog\\components\\header\\Header.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Header() {
  return __jsx("header", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.intro,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("h1", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "The adventures of A.K"), __jsx("h2", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.subheading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "\u2014Wandering at heart's risk")), __jsx("img", {
    src: "./img/profile1.png",
    alt: "Me",
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.profile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/header/header.module.css":
/*!*********************************************!*\
  !*** ./components/header/header.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header_header__HDboe",
	"title": "header_title__2mio9",
	"intro": "header_intro__mAc3f",
	"subheading": "header_subheading__1Bhq1",
	"link": "header_link__21Pi4",
	"profile": "header_profile__32dfJ"
};


/***/ }),

/***/ "./components/image-section/ImageSection.jsx":
/*!***************************************************!*\
  !*** ./components/image-section/ImageSection.jsx ***!
  \***************************************************/
/*! exports provided: ImageSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSection", function() { return ImageSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image_section_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-section.module.css */ "./components/image-section/image-section.module.css");
/* harmony import */ var _image_section_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_image_section_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _feature_image_FeatureImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feature-image/FeatureImage */ "./components/feature-image/FeatureImage.jsx");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames/bind */ "classnames/bind");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Aisha\\workspace\\aisha-blog\\components\\image-section\\ImageSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const cx = classnames_bind__WEBPACK_IMPORTED_MODULE_3___default.a.bind(_image_section_module_css__WEBPACK_IMPORTED_MODULE_1___default.a);
function ImageSection({
  title,
  images
}) {
  const render = images.map((image, index) => __jsx(_feature_image_FeatureImage__WEBPACK_IMPORTED_MODULE_2__["FeatureImage"], {
    text: image.text,
    image: image.image,
    onClick: image.onClick,
    className: cx({
      first: index === 0,
      third: index === 2,
      fifth: index === 4
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
  return __jsx("section", {
    className: _image_section_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h2", {
    className: cx("alternate-title", "animation-wrapper"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, title), __jsx("div", {
    className: cx("animation-wrapper", "images"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, render));
}

/***/ }),

/***/ "./components/image-section/image-section.module.css":
/*!***********************************************************!*\
  !*** ./components/image-section/image-section.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"animation-wrapper": "image-section_animation-wrapper__LuZaJ",
	"slide": "image-section_slide__1YkJs",
	"first": "image-section_first__1ekZX",
	"third": "image-section_third__3VAgm",
	"fifth": "image-section_fifth__2kuVI",
	"images": "image-section_images__1pbtJ"
};


/***/ }),

/***/ "./components/link/Link.jsx":
/*!**********************************!*\
  !*** ./components/link/Link.jsx ***!
  \**********************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _link_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link.module.css */ "./components/link/link.module.css");
/* harmony import */ var _link_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_link_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames/bind */ "classnames/bind");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Aisha\\workspace\\aisha-blog\\components\\link\\Link.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const cx = classnames_bind__WEBPACK_IMPORTED_MODULE_3___default.a.bind(_link_module_css__WEBPACK_IMPORTED_MODULE_2___default.a);
function Link({
  children,
  to,
  className
}) {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: cx("link", className),
    href: to,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, children));
}

/***/ }),

/***/ "./components/link/link.module.css":
/*!*****************************************!*\
  !*** ./components/link/link.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"link": "link_link__3wj2w"
};


/***/ }),

/***/ "./components/page/Page.jsx":
/*!**********************************!*\
  !*** ./components/page/Page.jsx ***!
  \**********************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/Header */ "./components/header/Header.jsx");
/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.module.css */ "./components/page/page.module.css");
/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/Footer */ "./components/footer/Footer.jsx");
var _jsxFileName = "C:\\Users\\Aisha\\workspace\\aisha-blog\\components\\page\\Page.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Page({
  children
}) {
  return __jsx("div", {
    className: _page_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_header_Header__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "The adventures of AK Gregg"), __jsx("svg", {
    className: _page_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.line,
    width: "1000",
    height: "300",
    viewBox: "0 0 151 957",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("path", {
    d: "M53.9046 0L54.1063 5.76998L59.0024 2.71025L53.9046 0ZM53.9046 239L54.2581 239.354L54.2581 239.354L53.9046 239ZM60.9046 485L61.2581 484.646L61.2581 484.646L60.9046 485ZM126.905 728L127.285 728.324L127.285 728.324L126.905 728ZM126.905 955L123.359 950.443L121.186 955.792L126.905 955ZM55.0635 2.79284C55.4202 3.3609 55.78 3.93314 56.1427 4.50949L56.9891 3.97684C56.6265 3.40071 56.2668 2.82878 55.9104 2.26109L55.0635 2.79284ZM57.2135 6.20982C57.5661 6.76944 57.9213 7.33299 58.2787 7.90009L59.1247 7.36698C58.7673 6.79971 58.4122 6.2364 58.0596 5.67673L57.2135 6.20982ZM59.3574 9.61269C59.7127 10.1771 60.07 10.745 60.4291 11.3165L61.2758 10.7844C60.9165 10.2127 60.5591 9.64449 60.2037 9.07993L59.3574 9.61269ZM61.4902 13.0073C61.8456 13.5743 62.2024 14.1447 62.5607 14.7184L63.4089 14.1887C63.0503 13.6145 62.6932 13.0437 62.3376 12.4763L61.4902 13.0073ZM63.6295 16.4334C63.9787 16.9949 64.3289 17.5595 64.6802 18.1272L65.5306 17.6011C65.1789 17.0327 64.8282 16.4675 64.4787 15.9054L63.6295 16.4334ZM65.7366 19.8394C66.0896 20.4132 66.4434 20.9901 66.7979 21.5699L67.6511 21.0484C67.2961 20.4677 66.9418 19.89 66.5884 19.3154L65.7366 19.8394ZM67.8335 23.27C68.1791 23.8392 68.5251 24.4113 68.8714 24.9862L69.728 24.4702C69.381 23.8943 69.0345 23.3212 68.6883 22.7511L67.8335 23.27ZM69.9111 26.7192C70.2529 27.2914 70.5949 27.8663 70.9369 28.4438L71.7973 27.9343C71.4547 27.3556 71.112 26.7796 70.7695 26.2063L69.9111 26.7192ZM71.9523 30.1668C72.2907 30.7437 72.629 31.3233 72.967 31.9054L73.8318 31.4032C73.493 30.8198 73.154 30.239 72.8149 29.6608L71.9523 30.1668ZM73.9779 33.6554C74.3082 34.2304 74.6381 34.8079 74.9675 35.3878L75.837 34.8939C75.5068 34.3125 75.1761 33.7337 74.845 33.1573L73.9779 33.6554ZM75.9541 37.1347C76.2824 37.7195 76.61 38.3066 76.9368 38.8961L77.8114 38.4112C77.4837 37.8201 77.1552 37.2315 76.8261 36.6452L75.9541 37.1347ZM77.9053 40.6543C78.2247 41.238 78.5432 41.824 78.8607 42.4122L79.7407 41.9372C79.4223 41.3473 79.1028 40.7596 78.7825 40.1743L77.9053 40.6543ZM79.8102 44.1837C80.1256 44.7765 80.4399 45.3714 80.753 45.9686L81.6387 45.5043C81.3247 44.9053 81.0094 44.3085 80.693 43.714L79.8102 44.1837ZM81.6753 47.7416C81.9811 48.3342 82.2856 48.9289 82.5887 49.5257L83.4803 49.0729C83.1762 48.4741 82.8707 47.8775 82.5639 47.283L81.6753 47.7416ZM83.4934 51.3224C83.7925 51.9215 84.09 52.5226 84.3859 53.1258L85.2837 52.6854C84.9868 52.0801 84.6882 51.4769 84.3881 50.8758L83.4934 51.3224ZM85.2602 54.9246C85.55 55.5262 85.8379 56.1298 86.1241 56.7354L87.0282 56.3082C86.741 55.7003 86.452 55.0945 86.1612 54.4907L85.2602 54.9246ZM86.9767 58.5581C87.2574 59.1642 87.5361 59.7722 87.8128 60.3821L88.7235 59.9691C88.4457 59.3567 88.1659 58.7463 87.8841 58.1379L86.9767 58.5581ZM88.6325 62.2089C88.9036 62.8197 89.1726 63.4324 89.4393 64.0469L90.3566 63.6488C90.0888 63.0317 89.8187 62.4165 89.5465 61.8032L88.6325 62.2089ZM90.2325 65.8962C90.4927 66.5102 90.7507 67.126 91.0061 67.7436L91.9302 67.3614C91.6736 66.7411 91.4146 66.1225 91.1532 65.5059L90.2325 65.8962ZM91.7636 69.5984C92.0136 70.2184 92.2611 70.8402 92.5059 71.4638L93.4367 71.0984C93.1908 70.4719 92.9422 69.8473 92.6911 69.2244L91.7636 69.5984ZM93.2322 73.3398C93.4698 73.9623 93.7047 74.5864 93.9367 75.2122L94.8743 74.8646C94.6411 74.2357 94.4051 73.6086 94.1664 72.9832L93.2322 73.3398ZM94.6243 77.0947C94.8505 77.7239 95.0739 78.3548 95.2942 78.9873L96.2386 78.6584C96.0171 78.0227 95.7927 77.3886 95.5652 76.7563L94.6243 77.0947ZM95.9453 80.8878C96.1581 81.5194 96.3677 82.1527 96.5742 82.7875L97.5252 82.4783C97.3176 81.84 97.1068 81.2035 96.893 80.5686L95.9453 80.8878ZM97.1839 84.6969C97.3838 85.335 97.5805 85.9747 97.7738 86.6159L98.7312 86.3273C98.5369 85.6826 98.3392 85.0394 98.1381 84.3979L97.1839 84.6969ZM98.3421 88.5404C98.5273 89.1807 98.7091 89.8226 98.8873 90.466L99.851 90.1991C99.6718 89.552 99.489 88.9065 99.3028 88.2625L98.3421 88.5404ZM99.4111 92.4008C99.5821 93.0472 99.7494 93.6951 99.913 94.3445L100.883 94.1003C100.718 93.447 100.55 92.7953 100.378 92.145L99.4111 92.4008ZM100.391 96.2916C100.546 96.9398 100.697 97.5895 100.844 98.2407L101.82 98.0201C101.672 97.3649 101.519 96.7113 101.364 96.0591L100.391 96.2916ZM101.274 100.198C101.414 100.852 101.549 101.508 101.68 102.165L102.661 101.969C102.529 101.308 102.393 100.648 102.252 99.9899L101.274 100.198ZM102.06 104.131C102.182 104.786 102.3 105.443 102.414 106.1L103.399 105.93C103.285 105.268 103.166 104.607 103.043 103.948L102.06 104.131ZM102.742 108.078C102.848 108.738 102.948 109.4 103.045 110.063L104.034 109.919C103.937 109.251 103.836 108.585 103.73 107.92L102.742 108.078ZM103.319 112.046C103.406 112.706 103.488 113.367 103.566 114.03L104.559 113.914C104.481 113.246 104.398 112.58 104.311 111.915L103.319 112.046ZM103.786 116.022C103.854 116.688 103.918 117.354 103.977 118.022L104.973 117.934C104.914 117.261 104.849 116.59 104.78 115.92L103.786 116.022ZM104.14 120.015C104.189 120.679 104.233 121.344 104.273 122.01L105.271 121.95C105.231 121.279 105.186 120.61 105.137 119.941L104.14 120.015ZM104.377 124.011C104.407 124.679 104.432 125.349 104.452 126.02L105.452 125.99C105.432 125.314 105.407 124.64 105.376 123.966L104.377 124.011ZM104.497 128.018C104.507 128.683 104.512 129.348 104.512 130.015L105.512 130.015C105.512 129.344 105.507 128.673 105.497 128.003L104.497 128.018ZM104.496 132.019C104.486 132.688 104.47 133.358 104.45 134.03L105.449 134.061C105.47 133.384 105.486 132.709 105.496 132.035L104.496 132.019ZM104.373 136.027C104.342 136.69 104.306 137.354 104.265 138.019L105.263 138.081C105.305 137.411 105.341 136.741 105.372 136.073L104.373 136.027ZM104.126 140.018C104.074 140.685 104.017 141.353 103.955 142.023L104.951 142.115C105.014 141.441 105.071 140.767 105.123 140.095L104.126 140.018ZM103.754 144.013C103.682 144.672 103.605 145.332 103.522 145.992L104.515 146.116C104.598 145.45 104.676 144.785 104.748 144.122L103.754 144.013ZM103.259 147.977C103.165 148.639 103.067 149.303 102.962 149.967L103.95 150.122C104.055 149.452 104.155 148.784 104.249 148.116L103.259 147.977ZM102.636 151.947C102.523 152.598 102.405 153.25 102.281 153.903L103.264 154.089C103.388 153.431 103.507 152.774 103.621 152.117L102.636 151.947ZM101.894 155.865C101.759 156.519 101.619 157.175 101.474 157.831L102.45 158.048C102.597 157.386 102.738 156.726 102.874 156.066L101.894 155.865ZM101.021 159.799C100.868 160.44 100.71 161.081 100.547 161.723L101.516 161.97C101.68 161.323 101.84 160.677 101.994 160.031L101.021 159.799ZM100.039 163.653C99.865 164.296 99.685 164.941 99.4994 165.586L100.46 165.863C100.647 165.212 100.829 164.563 101.005 163.914L100.039 163.653ZM98.9259 167.524C98.7331 168.158 98.5349 168.792 98.3312 169.427L99.2834 169.732C99.4886 169.093 99.6883 168.454 99.8826 167.815L98.9259 167.524ZM97.71 171.315C97.4975 171.945 97.2796 172.575 97.0562 173.207L97.9989 173.54C98.224 172.904 98.4435 172.269 98.6576 171.634L97.71 171.315ZM96.3695 175.103C96.1361 175.732 95.8973 176.362 95.6529 176.993L96.5853 177.354C96.8315 176.719 97.0721 176.084 97.3071 175.45L96.3695 175.103ZM94.9254 178.831C94.6777 179.445 94.4246 180.059 94.1662 180.673L95.088 181.061C95.3482 180.442 95.6031 179.824 95.8527 179.206L94.9254 178.831ZM93.3747 182.519C93.1055 183.134 92.8308 183.751 92.5507 184.368L93.4612 184.781C93.7433 184.16 94.0198 183.539 94.2909 182.919L93.3747 182.519ZM91.7088 186.188C91.4289 186.783 91.1439 187.378 90.8537 187.973L91.7526 188.411C92.0448 187.812 92.3317 187.213 92.6136 186.614L91.7088 186.188ZM89.9675 189.761C89.6669 190.358 89.3611 190.955 89.05 191.552L89.937 192.014C90.2501 191.413 90.558 190.812 90.8606 190.211L89.9675 189.761ZM88.1009 193.346C87.7869 193.93 87.4678 194.515 87.1435 195.1L88.0182 195.585C88.3445 194.996 88.6657 194.407 88.9817 193.819L88.1009 193.346ZM86.1735 196.825C85.8453 197.4 85.512 197.976 85.1737 198.552L86.036 199.059C86.3764 198.479 86.7118 197.9 87.0421 197.321L86.1735 196.825ZM84.1436 200.283C83.7952 200.86 83.4417 201.437 83.0831 202.015L83.9328 202.542C84.2936 201.961 84.6492 201.38 84.9997 200.799L84.1436 200.283ZM82.0159 203.712C81.6637 204.265 81.3067 204.819 80.945 205.372L81.7822 205.919C82.146 205.362 82.505 204.806 82.8593 204.25L82.0159 203.712ZM79.8456 207.034C79.4744 207.588 79.0984 208.143 78.7175 208.698L79.542 209.264C79.925 208.706 80.3032 208.148 80.6765 207.591L79.8456 207.034ZM77.5604 210.364C77.1728 210.916 76.7805 211.468 76.3833 212.02L77.1951 212.604C77.5944 212.049 77.9889 211.494 78.3785 210.939L77.5604 210.364ZM75.2258 213.611C74.8355 214.142 74.4407 214.673 74.0414 215.204L74.8408 215.805C75.2421 215.271 75.639 214.737 76.0314 214.203L75.2258 213.611ZM72.8298 216.799C72.4214 217.331 72.0084 217.863 71.5909 218.395L72.3778 219.012C72.7974 218.477 73.2125 217.942 73.6229 217.408L72.8298 216.799ZM70.3244 219.994C69.9098 220.511 69.4908 221.029 69.0674 221.548L69.8419 222.18C70.2673 221.66 70.6884 221.139 71.1051 220.619L70.3244 219.994ZM67.812 223.07C67.3893 223.578 66.9624 224.086 66.5312 224.594L67.2937 225.241C67.7269 224.73 68.1558 224.22 68.5805 223.71L67.812 223.07ZM65.2248 226.119C64.7851 226.627 64.3411 227.136 63.8927 227.645L64.6431 228.306C65.0935 227.795 65.5395 227.284 65.9813 226.773L65.2248 226.119ZM62.5346 229.173C62.0938 229.664 61.649 230.156 61.2002 230.647L61.9387 231.321C62.3895 230.828 62.8363 230.334 63.279 229.841L62.5346 229.173ZM59.8634 232.099C59.4138 232.583 58.9603 233.068 58.5028 233.552L59.2299 234.239C59.6893 233.752 60.1447 233.266 60.5962 232.78L59.8634 232.099ZM57.1182 235.006C56.6527 235.491 56.1832 235.976 55.7096 236.462L56.4253 237.16C56.9007 236.673 57.3722 236.186 57.8396 235.699L57.1182 235.006ZM54.2767 237.918C54.0358 238.161 53.7939 238.404 53.551 238.646L54.2581 239.354C54.502 239.11 54.7448 238.866 54.9867 238.622L54.2767 237.918ZM53.551 238.646C53.3077 238.89 53.0654 239.133 52.8241 239.376L53.5341 240.081C53.7745 239.838 54.0158 239.596 54.2581 239.354L53.551 238.646ZM51.3875 240.837C50.9125 241.324 50.4413 241.811 49.9739 242.298L50.6955 242.991C51.161 242.505 51.6302 242.02 52.1033 241.535L51.3875 240.837ZM48.5831 243.76C48.1233 244.248 47.6673 244.736 47.2151 245.223L47.9484 245.903C48.3987 245.418 48.8528 244.932 49.3106 244.447L48.5831 243.76ZM45.8697 246.687C45.419 247.182 44.972 247.676 44.5289 248.171L45.2739 248.838C45.7151 248.346 46.16 247.853 46.6088 247.36L45.8697 246.687ZM43.168 249.705C42.7184 250.216 42.2729 250.728 41.8315 251.239L42.5885 251.893C43.028 251.383 43.4715 250.874 43.919 250.365L43.168 249.705ZM40.5192 252.774C40.0858 253.286 39.6564 253.798 39.231 254.31L40.0001 254.949C40.4235 254.439 40.8509 253.93 41.2823 253.421L40.5192 252.774ZM37.9668 255.846C37.5426 256.366 37.1225 256.886 36.7065 257.407L37.4877 258.031C37.9016 257.513 38.3197 256.995 38.7419 256.477L37.9668 255.846ZM35.4359 259.013C35.0166 259.548 34.6017 260.083 34.1909 260.619L34.9844 261.227C35.3931 260.695 35.806 260.162 36.2232 259.629L35.4359 259.013ZM32.9716 262.225C32.5693 262.761 32.1714 263.296 31.7776 263.832L32.5833 264.424C32.975 263.892 33.371 263.359 33.7712 262.826L32.9716 262.225ZM30.6088 265.439C30.2121 265.99 29.8199 266.541 29.432 267.093L30.2499 267.668C30.6357 267.12 31.0259 266.571 31.4205 266.023L30.6088 265.439ZM28.2667 268.768C27.8827 269.327 27.5033 269.885 27.1283 270.444L27.9585 271.001C28.3314 270.446 28.7089 269.89 29.0908 269.335L28.2667 268.768ZM26.0166 272.119C25.6504 272.678 25.2887 273.236 24.9314 273.794L25.7737 274.334C26.129 273.778 26.4887 273.223 26.8528 272.668L26.0166 272.119ZM23.8624 275.486C23.5 276.066 23.1422 276.647 22.7892 277.228L23.6436 277.747C23.9946 277.17 24.3503 276.593 24.7107 276.015L23.8624 275.486ZM21.7441 278.969C21.4004 279.549 21.0613 280.129 20.7269 280.71L21.5933 281.209C21.9257 280.632 22.2628 280.055 22.6045 279.478L21.7441 278.969ZM19.7374 282.45C19.412 283.03 19.0913 283.61 18.775 284.19L19.653 284.669C19.9673 284.092 20.2862 283.516 20.6096 282.939L19.7374 282.45ZM17.8062 285.993C17.4881 286.594 17.1749 287.195 16.8665 287.796L17.7561 288.252C18.0626 287.655 18.3739 287.058 18.69 286.461L17.8062 285.993ZM15.9557 289.597C15.6569 290.197 15.3629 290.797 15.0736 291.397L15.9743 291.832C16.2618 291.236 16.554 290.639 16.8509 290.043L15.9557 289.597ZM14.22 293.196C13.9309 293.816 13.6469 294.435 13.3679 295.053L14.2795 295.465C14.5567 294.85 14.8389 294.235 15.1261 293.619L14.22 293.196ZM12.5449 296.911C12.2755 297.53 12.011 298.148 11.7515 298.767L12.6736 299.154C12.9314 298.54 13.1941 297.925 13.4618 297.31L12.5449 296.911ZM10.9876 300.621C10.7372 301.241 10.4916 301.86 10.2509 302.479L11.1829 302.841C11.422 302.226 11.6659 301.611 11.9147 300.996L10.9876 300.621ZM9.52403 304.386C9.28683 305.022 9.0547 305.657 8.82761 306.291L9.76916 306.628C9.99472 305.998 10.2253 305.367 10.4609 304.736L9.52403 304.386ZM8.16137 308.194C7.94428 308.828 7.73219 309.462 7.52502 310.095L8.47545 310.406C8.68119 309.777 8.89184 309.148 9.10744 308.518L8.16137 308.194ZM6.91257 312.012C6.70997 312.662 6.51253 313.311 6.3202 313.96L7.27895 314.244C7.46994 313.6 7.66602 312.955 7.86722 312.31L6.91257 312.012ZM5.75848 315.904C5.57632 316.552 5.39922 317.199 5.22713 317.846L6.19351 318.103C6.3644 317.461 6.54026 316.818 6.72114 316.175L5.75848 315.904ZM4.72585 319.785C4.56084 320.442 4.40097 321.099 4.24618 321.755L5.21947 321.985C5.37316 321.333 5.53191 320.681 5.69575 320.029L4.72585 319.785ZM3.79448 323.734C3.64903 324.393 3.50866 325.051 3.37334 325.709L4.35282 325.91C4.48718 325.257 4.62655 324.604 4.77098 323.949L3.79448 323.734ZM2.98242 327.68C2.85648 328.34 2.73557 328.999 2.61964 329.658L3.6045 329.831C3.7196 329.177 3.83964 328.523 3.96469 327.868L2.98242 327.68ZM2.28186 331.662C2.17436 332.329 2.07194 332.996 1.97454 333.662L2.96401 333.807C3.06072 333.146 3.1624 332.484 3.26913 331.821L2.28186 331.662ZM1.69735 335.658C1.60993 336.322 1.52748 336.986 1.44993 337.649L2.44316 337.765C2.52015 337.107 2.60202 336.448 2.6888 335.788L1.69735 335.658ZM1.22896 339.665C1.16012 340.338 1.09631 341.01 1.03744 341.682L2.03362 341.769C2.09206 341.102 2.15543 340.435 2.22377 339.767L1.22896 339.665ZM0.875679 343.693C0.826676 344.363 0.78257 345.032 0.743301 345.7L1.74158 345.759C1.78057 345.095 1.82436 344.431 1.87301 343.766L0.875679 343.693ZM0.639282 347.716C0.60926 348.392 0.584157 349.067 0.563909 349.742L1.56346 349.772C1.58356 349.102 1.60849 348.432 1.6383 347.761L0.639282 347.716ZM0.517671 351.761C0.507072 352.434 0.501265 353.105 0.500186 353.775L1.50018 353.777C1.50126 353.111 1.50702 352.445 1.51755 351.777L0.517671 351.761ZM0.511148 355.789C0.519595 356.466 0.532826 357.141 0.550773 357.816L1.55042 357.789C1.5326 357.119 1.51946 356.448 1.51107 355.776L0.511148 355.789ZM0.618698 359.836C0.646012 360.508 0.677978 361.179 0.714528 361.849L1.71304 361.795C1.67674 361.129 1.645 360.463 1.61787 359.795L0.618698 359.836ZM0.837891 363.857C0.88403 364.532 0.934784 365.205 0.990084 365.878L1.98672 365.796C1.93179 365.128 1.88139 364.459 1.83556 363.788L0.837891 363.857ZM1.16956 367.892C1.23389 368.562 1.30269 369.23 1.37591 369.898L2.36995 369.789C2.29722 369.126 2.22888 368.462 2.16498 367.796L1.16956 367.892ZM1.60872 371.897C1.69132 372.567 1.77833 373.236 1.86968 373.904L2.86044 373.768C2.7697 373.105 2.68326 372.44 2.60121 371.775L1.60872 371.897ZM2.1571 375.905C2.25721 376.571 2.3616 377.235 2.47021 377.898L3.45706 377.737C3.34915 377.078 3.24544 376.418 3.14598 375.756L2.1571 375.905ZM2.80859 379.883C2.92622 380.547 3.04803 381.21 3.17397 381.871L4.15631 381.684C4.03117 381.027 3.91014 380.369 3.79327 379.709L2.80859 379.883ZM3.56499 383.855C3.69943 384.515 3.83793 385.173 3.98042 385.83L4.95769 385.618C4.81608 384.965 4.67845 384.311 4.54486 383.655L3.56499 383.855ZM4.41981 387.796C4.57089 388.452 4.72594 389.108 4.88486 389.761L5.85655 389.525C5.69859 388.875 5.5445 388.224 5.39435 387.572L4.41981 387.796ZM5.37469 391.723C5.54183 392.375 5.7128 393.026 5.88753 393.675L6.85315 393.415C6.67946 392.77 6.50952 392.123 6.3434 391.474L5.37469 391.723ZM6.42295 395.617C6.60583 396.265 6.79243 396.912 6.98267 397.556L7.94179 397.273C7.75267 396.632 7.56717 395.99 7.38537 395.345L6.42295 395.617ZM7.56625 399.492C7.76439 400.136 7.96613 400.777 8.17139 401.417L9.12362 401.112C8.91954 400.476 8.71896 399.838 8.52197 399.198L7.56625 399.492ZM8.79764 403.332C9.01062 403.971 9.22708 404.608 9.44692 405.243L10.3919 404.916C10.1733 404.284 9.95806 403.651 9.74629 403.016L8.79764 403.332ZM10.1191 407.15C10.3466 407.783 10.5774 408.415 10.8114 409.045L11.7488 408.697C11.5161 408.071 11.2865 407.442 11.0604 406.812L10.1191 407.15ZM11.5233 410.929C11.7647 411.558 12.0094 412.184 12.2571 412.809L13.1867 412.44C12.9402 411.819 12.6969 411.196 12.4568 410.571L11.5233 410.929ZM13.013 414.684C13.268 415.308 13.5262 415.929 13.7873 416.548L14.7087 416.159C14.4489 415.543 14.1921 414.926 13.9384 414.306L13.013 414.684ZM14.5797 418.399C14.848 419.016 15.1192 419.632 15.3933 420.245L16.3063 419.837C16.0336 419.227 15.7638 418.615 15.4969 418L14.5797 418.399ZM16.2279 422.087C16.509 422.699 16.7929 423.309 17.0795 423.916L17.9839 423.49C17.6987 422.885 17.4162 422.279 17.1366 421.67L16.2279 422.087ZM17.9475 425.732C18.2411 426.338 18.5375 426.942 18.8364 427.544L19.732 427.099C19.4345 426.5 19.1397 425.899 18.8475 425.296L17.9475 425.732ZM19.7452 429.351C20.0508 429.951 20.3588 430.548 20.6694 431.144L21.5559 430.681C21.2469 430.089 20.9404 429.494 20.6363 428.897L19.7452 429.351ZM21.6083 432.922C21.9261 433.517 22.2463 434.109 22.5688 434.699L23.4462 434.219C23.1252 433.632 22.8066 433.043 22.4903 432.451L21.6083 432.922ZM23.5475 436.469C23.8761 437.056 24.2069 437.641 24.5399 438.224L25.408 437.727C25.0765 437.148 24.7473 436.565 24.4203 435.981L23.5475 436.469ZM25.5453 439.963C25.8862 440.546 26.2293 441.127 26.5744 441.705L27.433 441.192C27.0895 440.617 26.748 440.039 26.4087 439.458L25.5453 439.963ZM27.6189 443.436C27.9691 444.011 28.3213 444.582 28.6753 445.151L29.5243 444.623C29.1719 444.056 28.8213 443.487 28.4727 442.916L27.6189 443.436ZM29.7431 446.849C30.1064 447.421 30.4716 447.99 30.8385 448.557L31.6777 448.013C31.3125 447.449 30.9489 446.883 30.5873 446.313L29.7431 446.849ZM31.9451 450.247C32.3157 450.808 32.6879 451.366 33.0617 451.92L33.891 451.362C33.5188 450.809 33.1482 450.254 32.7793 449.696L31.9451 450.247ZM34.1924 453.582C34.5763 454.141 34.9618 454.697 35.3487 455.249L36.1678 454.676C35.7826 454.126 35.3989 453.572 35.0167 453.016L34.1924 453.582ZM36.5135 456.897C36.9032 457.444 37.2942 457.987 37.6865 458.526L38.4954 457.938C38.1049 457.401 37.7155 456.86 37.3276 456.317L36.5135 456.897ZM38.8807 460.154C39.2839 460.699 39.6882 461.24 40.0937 461.777L40.8921 461.175C40.4884 460.64 40.0858 460.101 39.6844 459.559L38.8807 460.154ZM41.3132 463.38C41.7208 463.911 42.1293 464.438 42.5387 464.961L43.3265 464.346C42.9189 463.824 42.5121 463.299 42.1063 462.771L41.3132 463.38ZM43.7981 466.558C44.2194 467.087 44.6414 467.612 45.0642 468.134L45.8411 467.504C45.4201 466.985 44.9999 466.462 44.5804 465.935L43.7981 466.558ZM46.3346 469.687C46.7637 470.207 47.1935 470.723 47.6238 471.235L48.3894 470.592C47.9611 470.082 47.5332 469.568 47.1059 469.05L46.3346 469.687ZM48.9368 472.784C49.3749 473.296 49.8134 473.804 50.2521 474.308L51.0063 473.652C50.5695 473.15 50.1329 472.644 49.6967 472.134L48.9368 472.784ZM51.5691 475.807C52.0225 476.319 52.4761 476.826 52.9296 477.328L53.6719 476.658C53.2204 476.158 52.7688 475.653 52.3175 475.144L51.5691 475.807ZM54.2901 478.821C54.7436 479.315 55.1969 479.803 55.6499 480.287L56.3799 479.604C55.9289 479.122 55.4777 478.636 55.0263 478.145L54.2901 478.821ZM57.043 481.761C57.5121 482.253 57.9808 482.74 58.449 483.221L59.166 482.524C58.7001 482.045 58.2335 481.561 57.7666 481.071L57.043 481.761ZM59.8515 484.651C60.0848 484.886 60.318 485.121 60.551 485.354L61.2581 484.646C61.0263 484.415 60.7942 484.181 60.5619 483.947L59.8515 484.651ZM60.551 485.354C60.7799 485.582 61.0097 485.813 61.2402 486.045L61.9501 485.341C61.7187 485.108 61.488 484.876 61.2581 484.646L60.551 485.354ZM62.6325 487.46C63.0996 487.938 63.5697 488.423 64.0427 488.915L64.7633 488.222C64.2887 487.728 63.8168 487.241 63.3479 486.761L62.6325 487.46ZM65.447 490.386C65.8968 490.86 66.3489 491.34 66.8033 491.826L67.5337 491.143C67.0778 490.656 66.6241 490.174 66.1728 489.698L65.447 490.386ZM68.1728 493.301C68.6314 493.798 69.092 494.3 69.5547 494.809L70.2941 494.135C69.83 493.626 69.3679 493.121 68.9077 492.623L68.1728 493.301ZM70.8885 496.283C71.3306 496.775 71.7743 497.271 72.2195 497.773L72.9673 497.109C72.5207 496.606 72.0756 496.108 71.6322 495.614L70.8885 496.283ZM73.5596 499.291C74.0037 499.797 74.4493 500.308 74.8961 500.824L75.6517 500.169C75.2036 499.652 74.7568 499.139 74.3113 498.632L73.5596 499.291ZM76.1911 502.326C76.6239 502.832 77.0577 503.341 77.4925 503.854L78.2555 503.208C77.8195 502.693 77.3845 502.182 76.9505 501.676L76.1911 502.326ZM78.7997 505.406C79.2296 505.919 79.6604 506.437 80.0919 506.958L80.8621 506.32C80.4294 505.797 79.9975 505.279 79.5664 504.764L78.7997 505.406ZM81.3577 508.495C81.7802 509.01 82.2034 509.53 82.6272 510.053L83.4042 509.424C82.9793 508.899 82.555 508.378 82.1313 507.861L81.3577 508.495ZM83.8999 511.633C84.3183 512.155 84.7371 512.68 85.1563 513.209L85.9399 512.588C85.5197 512.058 85.0997 511.531 84.6802 511.007L83.8999 511.633ZM86.3911 514.775C86.803 515.3 87.2152 515.829 87.6275 516.36L88.4175 515.747C88.0042 515.214 87.591 514.684 87.178 514.158L86.3911 514.775ZM88.8649 517.963C89.2733 518.495 89.6817 519.03 90.0902 519.568L90.8866 518.963C90.4771 518.424 90.0676 517.888 89.6581 517.354L88.8649 517.963ZM91.2931 521.16C91.694 521.694 92.0949 522.23 92.4956 522.769L93.2981 522.172C92.8964 521.632 92.4945 521.095 92.0925 520.56L91.2931 521.16ZM93.6973 524.394C94.0962 524.936 94.4949 525.481 94.8934 526.029L95.7019 525.441C95.3025 524.892 94.9028 524.345 94.5028 523.802L93.6973 524.394ZM96.0635 527.646C96.4532 528.187 96.8426 528.731 97.2316 529.277L98.0461 528.697C97.6562 528.149 97.2658 527.604 96.8751 527.061L96.0635 527.646ZM98.3973 530.923C98.7854 531.474 99.173 532.027 99.5601 532.582L100.381 532.011C99.9925 531.454 99.6039 530.899 99.2148 530.347L98.3973 530.923ZM100.7 534.228C101.079 534.777 101.457 535.328 101.834 535.881L102.66 535.318C102.282 534.763 101.903 534.211 101.524 533.66L100.7 534.228ZM102.963 537.547C103.339 538.105 103.714 538.664 104.088 539.226L104.92 538.671C104.545 538.108 104.169 537.547 103.792 536.988L102.963 537.547ZM105.201 540.905C105.567 541.461 105.933 542.02 106.298 542.58L107.136 542.034C106.77 541.472 106.403 540.912 106.036 540.354L105.201 540.905ZM107.391 544.267C107.754 544.831 108.116 545.397 108.478 545.965L109.321 545.428C108.959 544.859 108.596 544.291 108.232 543.725L107.391 544.267ZM109.558 547.673C109.913 548.238 110.267 548.804 110.62 549.372L111.469 548.844C111.116 548.275 110.761 547.707 110.405 547.141L109.558 547.673ZM111.675 551.08C112.025 551.651 112.375 552.224 112.723 552.798L113.578 552.28C113.229 551.704 112.878 551.13 112.527 550.557L111.675 551.08ZM113.763 554.526C114.107 555.101 114.45 555.678 114.792 556.256L115.653 555.747C115.31 555.167 114.966 554.589 114.621 554.012L113.763 554.526ZM115.808 557.987C116.145 558.565 116.481 559.145 116.816 559.726L117.682 559.227C117.347 558.644 117.01 558.063 116.672 557.483L115.808 557.987ZM117.815 561.474C118.146 562.058 118.477 562.643 118.805 563.23L119.678 562.741C119.348 562.153 119.017 561.566 118.684 560.98L117.815 561.474ZM119.781 564.985C120.105 565.571 120.427 566.158 120.748 566.747L121.626 566.269C121.304 565.679 120.981 565.089 120.657 564.502L119.781 564.985ZM121.704 568.516C122.021 569.107 122.336 569.7 122.65 570.293L123.534 569.826C123.219 569.23 122.903 568.636 122.585 568.044L121.704 568.516ZM123.585 572.075C123.894 572.669 124.202 573.265 124.507 573.861L125.397 573.405C125.091 572.807 124.782 572.209 124.472 571.613L123.585 572.075ZM125.419 575.653C125.721 576.252 126.02 576.851 126.318 577.452L127.214 577.007C126.915 576.405 126.614 575.803 126.311 575.203L125.419 575.653ZM127.207 579.256C127.501 579.859 127.793 580.462 128.083 581.067L128.984 580.634C128.693 580.028 128.4 579.422 128.105 578.818L127.207 579.256ZM128.946 582.883C129.232 583.49 129.516 584.097 129.797 584.705L130.705 584.285C130.422 583.675 130.138 583.066 129.851 582.457L128.946 582.883ZM130.635 586.532C130.912 587.142 131.187 587.753 131.459 588.365L132.373 587.958C132.099 587.344 131.823 586.731 131.545 586.119L130.635 586.532ZM132.272 590.206C132.541 590.821 132.807 591.437 133.071 592.053L133.99 591.659C133.725 591.041 133.458 590.423 133.188 589.806L132.272 590.206ZM133.854 593.903C134.113 594.521 134.37 595.139 134.623 595.758L135.549 595.378C135.294 594.757 135.037 594.137 134.777 593.517L133.854 593.903ZM135.379 597.621C135.629 598.245 135.876 598.869 136.121 599.493L137.052 599.129C136.807 598.502 136.558 597.875 136.307 597.249L135.379 597.621ZM136.847 601.369C137.086 601.994 137.322 602.62 137.556 603.247L138.493 602.897C138.258 602.268 138.021 601.64 137.781 601.011L136.847 601.369ZM138.249 605.128C138.478 605.76 138.705 606.393 138.929 607.026L139.872 606.692C139.647 606.057 139.419 605.421 139.189 604.787L138.249 605.128ZM139.591 608.926C139.809 609.56 140.024 610.194 140.236 610.829L141.184 610.512C140.972 609.875 140.756 609.238 140.537 608.601L139.591 608.926ZM140.862 612.733C141.068 613.371 141.271 614.009 141.471 614.648L142.426 614.349C142.225 613.707 142.021 613.066 141.813 612.425L140.862 612.733ZM142.065 616.573C142.259 617.216 142.45 617.858 142.638 618.501L143.598 618.22C143.409 617.574 143.217 616.929 143.022 616.284L142.065 616.573ZM143.191 620.429C143.372 621.072 143.55 621.715 143.724 622.358L144.689 622.096C144.514 621.45 144.336 620.804 144.154 620.158L143.191 620.429ZM144.241 624.307C144.409 624.957 144.574 625.608 144.736 626.258L145.706 626.017C145.544 625.363 145.378 624.71 145.209 624.056L144.241 624.307ZM145.209 628.209C145.363 628.859 145.513 629.51 145.659 630.16L146.635 629.94C146.488 629.286 146.337 628.633 146.182 627.979L145.209 628.209ZM146.089 632.122C146.23 632.78 146.366 633.438 146.498 634.095L147.478 633.898C147.345 633.237 147.208 632.575 147.067 631.914L146.089 632.122ZM146.882 636.067C147.007 636.724 147.126 637.381 147.242 638.038L148.227 637.864C148.111 637.204 147.99 636.543 147.865 635.882L146.882 636.067ZM147.577 640.01C147.686 640.675 147.79 641.339 147.89 642.003L148.879 641.854C148.779 641.186 148.674 640.518 148.564 639.849L147.577 640.01ZM148.177 643.993C148.268 644.656 148.354 645.319 148.436 645.981L149.429 645.858C149.346 645.191 149.259 644.524 149.168 643.857L148.177 643.993ZM148.669 647.966C148.742 648.634 148.811 649.301 148.875 649.968L149.871 649.873C149.806 649.201 149.737 648.529 149.663 647.856L148.669 647.966ZM149.053 651.972C149.108 652.64 149.157 653.306 149.202 653.972L150.2 653.905C150.155 653.234 150.105 652.563 150.05 651.891L149.053 651.972ZM149.321 655.969C149.356 656.638 149.386 657.306 149.411 657.974L150.41 657.936C150.386 657.264 150.355 656.591 150.32 655.917L149.321 655.969ZM149.47 659.985C149.485 660.654 149.494 661.323 149.498 661.991L150.498 661.985C150.494 661.312 150.484 660.638 150.47 659.963L149.47 659.985ZM149.493 663.992C149.486 664.661 149.473 665.328 149.455 665.994L150.455 666.021C150.473 665.349 150.486 664.676 150.493 664.003L149.493 663.992ZM149.384 668.004C149.355 668.673 149.32 669.341 149.279 670.008L150.277 670.069C150.318 669.396 150.354 668.723 150.383 668.048L149.384 668.004ZM149.14 672.005C149.087 672.671 149.029 673.335 148.965 673.998L149.96 674.094C150.025 673.425 150.084 672.755 150.136 672.084L149.14 672.005ZM148.753 675.996C148.676 676.661 148.594 677.324 148.505 677.987L149.496 678.119C149.586 677.451 149.669 676.781 149.746 676.11L148.753 675.996ZM148.22 679.969C148.119 680.629 148.012 681.287 147.898 681.944L148.883 682.115C148.998 681.451 149.107 680.787 149.209 680.121L148.22 679.969ZM147.537 683.917C147.41 684.573 147.277 685.228 147.138 685.881L148.115 686.09C148.256 685.43 148.391 684.769 148.519 684.107L147.537 683.917ZM146.699 687.836C146.547 688.487 146.387 689.135 146.221 689.782L147.19 690.031C147.358 689.377 147.519 688.722 147.673 688.065L146.699 687.836ZM145.705 691.716C145.526 692.359 145.34 693 145.148 693.639L146.106 693.927C146.3 693.281 146.487 692.633 146.668 691.984L145.705 691.716ZM144.551 695.552C144.345 696.188 144.132 696.822 143.912 697.455L144.857 697.783C145.079 697.144 145.294 696.503 145.502 695.86L144.551 695.552ZM143.236 699.336C143.004 699.96 142.766 700.582 142.52 701.202L143.45 701.57C143.698 700.944 143.939 700.315 144.174 699.684L143.236 699.336ZM141.763 703.057C141.503 703.674 141.236 704.288 140.963 704.901L141.876 705.309C142.152 704.69 142.422 704.068 142.684 703.445L141.763 703.057ZM140.127 706.718C139.843 707.318 139.552 707.916 139.255 708.512L140.149 708.959C140.45 708.356 140.744 707.752 141.031 707.146L140.127 706.718ZM138.34 710.293C138.028 710.885 137.709 711.474 137.383 712.062L138.257 712.547C138.587 711.953 138.91 711.357 139.225 710.759L138.34 710.293ZM136.389 713.807C136.056 714.377 135.716 714.946 135.369 715.512L136.221 716.035C136.572 715.462 136.916 714.888 137.253 714.311L136.389 713.807ZM134.306 717.205C133.945 717.768 133.577 718.328 133.201 718.885L134.031 719.444C134.41 718.88 134.783 718.314 135.148 717.746L134.306 717.205ZM132.053 720.553C131.674 721.09 131.289 721.626 130.896 722.16L131.702 722.752C132.098 722.213 132.488 721.672 132.871 721.128L132.053 720.553ZM129.699 723.752C129.293 724.281 128.881 724.807 128.461 725.331L129.241 725.956C129.665 725.427 130.082 724.895 130.493 724.361L129.699 723.752ZM127.18 726.898C126.963 727.158 126.745 727.417 126.524 727.676L127.285 728.324C127.508 728.063 127.729 727.801 127.948 727.538L127.18 726.898ZM126.524 727.676C126.305 727.933 126.086 728.191 125.868 728.448L126.631 729.095C126.848 728.838 127.066 728.581 127.285 728.324L126.524 727.676ZM124.567 729.992C124.136 730.507 123.708 731.021 123.282 731.535L124.052 732.173C124.477 731.66 124.904 731.147 125.334 730.634L124.567 729.992ZM122.013 733.077C121.592 733.591 121.174 734.105 120.759 734.618L121.537 735.247C121.951 734.735 122.367 734.223 122.787 733.711L122.013 733.077ZM119.521 736.158C119.107 736.676 118.696 737.193 118.287 737.711L119.072 738.331C119.479 737.815 119.889 737.299 120.302 736.782L119.521 736.158ZM117.039 739.301C116.626 739.831 116.215 740.36 115.808 740.89L116.6 741.5C117.006 740.972 117.416 740.444 117.828 739.916L117.039 739.301ZM114.593 742.477C114.19 743.006 113.791 743.534 113.394 744.063L114.194 744.663C114.589 744.136 114.988 743.609 115.389 743.082L114.593 742.477ZM112.212 745.647C111.817 746.179 111.425 746.711 111.036 747.243L111.843 747.834C112.231 747.304 112.622 746.773 113.015 746.242L112.212 745.647ZM109.848 748.879C109.455 749.423 109.064 749.968 108.677 750.512L109.492 751.092C109.878 750.55 110.267 750.007 110.659 749.464L109.848 748.879ZM107.523 752.144C107.142 752.687 106.763 753.231 106.387 753.774L107.209 754.343C107.584 753.802 107.961 753.26 108.342 752.718L107.523 752.144ZM105.268 755.401C104.892 755.952 104.52 756.501 104.15 757.051L104.98 757.609C105.348 757.062 105.72 756.513 106.094 755.965L105.268 755.401ZM103.029 758.73C102.658 759.29 102.291 759.849 101.926 760.408L102.763 760.954C103.127 760.397 103.493 759.84 103.862 759.283L103.029 758.73ZM100.841 762.082C100.483 762.64 100.127 763.198 99.7749 763.755L100.62 764.289C100.971 763.734 101.325 763.179 101.683 762.623L100.841 762.082ZM98.7267 765.425C98.3708 765.996 98.0181 766.567 97.6685 767.138L98.5212 767.66C98.8695 767.092 99.2209 766.523 99.5755 765.953L98.7267 765.425ZM96.6226 768.859C96.2772 769.433 95.935 770.006 95.596 770.578L96.4564 771.088C96.7941 770.517 97.1351 769.947 97.4792 769.375L96.6226 768.859ZM94.5885 772.294C94.2559 772.866 93.9265 773.437 93.6003 774.007L94.4684 774.504C94.7933 773.935 95.1215 773.367 95.4528 772.797L94.5885 772.294ZM92.6194 775.738C92.2886 776.327 91.9613 776.915 91.6373 777.503L92.5131 777.986C92.8358 777.4 93.1618 776.814 93.4913 776.228L92.6194 775.738ZM90.6756 779.265C90.3584 779.851 90.0446 780.437 89.7341 781.023L90.6176 781.491C90.9268 780.908 91.2393 780.325 91.5552 779.74L90.6756 779.265ZM88.8128 782.777C88.5081 783.364 88.2067 783.949 87.9087 784.534L88.7997 784.988C89.0965 784.405 89.3966 783.822 89.7 783.239L88.8128 782.777ZM86.998 786.341C86.698 786.942 86.4015 787.543 86.1087 788.143L87.0073 788.582C87.299 787.984 87.5941 787.386 87.8929 786.787L86.998 786.341ZM85.2406 789.941C84.9548 790.54 84.6726 791.138 84.3938 791.735L85.3 792.158C85.5775 791.564 85.8585 790.968 86.1431 790.372L85.2406 789.941ZM83.568 793.526C83.2871 794.142 83.01 794.757 82.7366 795.371L83.6503 795.778C83.9224 795.166 84.1983 794.554 84.4779 793.94L83.568 793.526ZM81.9277 797.212C81.6618 797.825 81.3997 798.437 81.1412 799.048L82.0622 799.437C82.3195 798.829 82.5804 798.22 82.8451 797.61L81.9277 797.212ZM80.377 800.879C80.1253 801.49 79.8773 802.1 79.633 802.71L80.5612 803.082C80.8043 802.475 81.0511 801.868 81.3016 801.259L80.377 800.879ZM78.8895 804.591C78.6457 805.217 78.4057 805.842 78.1697 806.467L79.105 806.82C79.3399 806.199 79.5787 805.577 79.8214 804.954L78.8895 804.591ZM77.4733 808.337C77.2451 808.959 77.0208 809.58 76.8003 810.201L77.7426 810.536C77.9619 809.918 78.1851 809.3 78.4122 808.681L77.4733 808.337ZM76.1439 812.079C75.9243 812.717 75.7089 813.355 75.4975 813.992L76.4466 814.307C76.6568 813.673 76.8711 813.039 77.0896 812.404L76.1439 812.079ZM74.8758 815.898C74.6726 816.533 74.4736 817.166 74.2787 817.798L75.2343 818.093C75.4281 817.464 75.6261 816.834 75.8281 816.203L74.8758 815.898ZM73.7061 819.691C73.515 820.335 73.3282 820.978 73.1456 821.62L74.1074 821.894C74.289 821.256 74.4748 820.616 74.6648 819.975L73.7061 819.691ZM72.6057 823.56C72.4301 824.205 72.2588 824.849 72.0917 825.492L73.0596 825.744C73.2256 825.105 73.396 824.464 73.5706 823.823L72.6057 823.56ZM71.6034 827.416C71.4437 828.062 71.2884 828.705 71.1373 829.348L72.1108 829.577C72.2609 828.938 72.4154 828.298 72.5741 827.657L71.6034 827.416ZM70.6869 831.317C70.5413 831.971 70.4002 832.625 70.2636 833.277L71.2423 833.482C71.3781 832.834 71.5183 832.184 71.6631 831.534L70.6869 831.317ZM69.8672 835.228C69.7396 835.877 69.6164 836.524 69.4977 837.17L70.4813 837.351C70.5992 836.709 70.7216 836.066 70.8484 835.421L69.8672 835.228ZM69.1456 839.158C69.0327 839.821 68.9244 840.482 68.8209 841.141L69.8088 841.297C69.9116 840.642 70.0192 839.985 70.1314 839.326L69.1456 839.158ZM68.5243 843.115C68.4301 843.771 68.3406 844.425 68.2557 845.078L69.2474 845.206C69.3317 844.558 69.4206 843.908 69.5141 843.257L68.5243 843.115ZM68.0103 847.072C67.9326 847.741 67.8599 848.407 67.7921 849.072L68.7869 849.174C68.8543 848.514 68.9265 847.851 69.0036 847.188L68.0103 847.072ZM67.6033 851.061C67.5453 851.722 67.4921 852.381 67.4437 853.038L68.441 853.112C68.489 852.459 68.5418 851.805 68.5995 851.149L67.6033 851.061ZM67.3111 855.04C67.2715 855.712 67.237 856.382 67.2076 857.05L68.2066 857.094C68.2358 856.431 68.2701 855.766 68.3094 855.099L67.3111 855.04ZM67.1346 859.047C67.1154 859.711 67.1011 860.372 67.092 861.032L68.0919 861.046C68.101 860.391 68.1151 859.735 68.1342 859.076L67.1346 859.047ZM67.0796 863.04C67.0807 863.712 67.087 864.383 67.0987 865.051L68.0985 865.034C68.087 864.371 68.0807 863.706 68.0796 863.038L67.0796 863.04ZM67.1493 867.048C67.1714 867.711 67.1988 868.372 67.2314 869.031L68.2301 868.981C68.1978 868.328 68.1707 867.673 68.1488 867.015L67.1493 867.048ZM67.3474 871.041C67.3917 871.711 67.4414 872.379 67.4966 873.044L68.4932 872.962C68.4385 872.302 68.3892 871.64 68.3452 870.975L67.3474 871.041ZM67.6783 875.032C67.7444 875.693 67.8159 876.351 67.8928 877.007L68.886 876.89C68.8097 876.24 68.7389 875.588 68.6734 874.932L67.6783 875.032ZM68.1454 879.009C68.2352 879.673 68.3306 880.335 68.4315 880.994L69.42 880.842C69.3199 880.189 69.2254 879.534 69.1364 878.875L68.1454 879.009ZM68.7511 882.961C68.8641 883.62 68.9828 884.276 69.1071 884.928L70.0894 884.741C69.9663 884.094 69.8487 883.445 69.7367 882.792L68.7511 882.961ZM69.5019 886.902C69.6392 887.557 69.7823 888.208 69.931 888.857L70.9057 888.633C70.7584 887.991 70.6167 887.345 70.4806 886.697L69.5019 886.902ZM70.3942 890.793C70.5568 891.445 70.7252 892.094 70.8994 892.739L71.8648 892.479C71.6923 891.839 71.5255 891.197 71.3645 890.551L70.3942 890.793ZM71.4414 894.672C71.6278 895.313 71.8201 895.951 72.0182 896.585L72.9727 896.287C72.7766 895.659 72.5862 895.028 72.4016 894.393L71.4414 894.672ZM72.6325 898.485C72.8456 899.123 73.0647 899.757 73.2897 900.387L74.2315 900.051C74.0088 899.427 73.7919 898.8 73.5809 898.168L72.6325 898.485ZM73.9822 902.267C74.2189 902.89 74.4614 903.509 74.7098 904.124L75.6371 903.749C75.3913 903.141 75.1512 902.528 74.9169 901.911L73.9822 902.267ZM75.4813 905.979C75.7451 906.595 76.0148 907.207 76.2904 907.815L77.2013 907.403C76.9285 906.801 76.6616 906.195 76.4006 905.585L75.4813 905.979ZM77.135 909.628C77.4237 910.231 77.7183 910.829 78.0188 911.424L78.9112 910.973C78.614 910.385 78.3225 909.792 78.0369 909.196L77.135 909.628ZM78.9441 913.207C79.2585 913.797 79.5787 914.383 79.9049 914.964L80.7771 914.475C80.4545 913.9 80.1376 913.32 79.8266 912.737L78.9441 913.207ZM80.9012 916.696C81.2418 917.274 81.5883 917.847 81.9407 918.415L82.7907 917.889C82.4422 917.326 82.0994 916.759 81.7625 916.188L80.9012 916.696ZM83.0157 920.108C83.3799 920.667 83.7499 921.223 84.1257 921.773L84.9516 921.209C84.5799 920.665 84.214 920.116 83.8539 919.562L83.0157 920.108ZM85.2743 923.416C85.6636 923.96 86.0587 924.499 86.4597 925.034L87.2596 924.434C86.8632 923.905 86.4725 923.372 86.0875 922.834L85.2743 923.416ZM87.6797 926.623C88.0923 927.148 88.5106 927.669 88.9347 928.185L89.7071 927.549C89.2878 927.04 88.8741 926.525 88.4661 926.005L87.6797 926.623ZM90.2253 929.719C90.6611 930.225 91.1026 930.727 91.5498 931.223L92.2929 930.554C91.8508 930.063 91.4142 929.567 90.9832 929.066L90.2253 929.719ZM92.9081 932.698C93.3656 933.184 93.8286 933.665 94.2972 934.14L95.0096 933.439C94.5463 932.968 94.0884 932.493 93.636 932.013L92.9081 932.698ZM95.7194 935.552C96.199 936.018 96.684 936.479 97.1745 936.934L97.8549 936.201C97.3699 935.751 96.8903 935.295 96.416 934.835L95.7194 935.552ZM98.657 938.28C99.1556 938.723 99.6596 939.16 100.169 939.593L100.816 938.831C100.312 938.403 99.8141 937.97 99.321 937.532L98.657 938.28ZM101.712 940.875C102.231 941.295 102.755 941.711 103.283 942.122L103.897 941.332C103.373 940.926 102.856 940.515 102.343 940.098L101.712 940.875ZM104.876 943.33C105.412 943.728 105.953 944.12 106.499 944.507L107.077 943.691C106.537 943.308 106.002 942.92 105.472 942.527L104.876 943.33ZM108.152 945.652C108.702 946.025 109.257 946.392 109.817 946.754L110.36 945.914C109.806 945.556 109.257 945.193 108.713 944.824L108.152 945.652ZM111.51 947.822C112.079 948.173 112.652 948.519 113.231 948.859L113.738 947.997C113.165 947.661 112.597 947.319 112.034 946.971L111.51 947.822ZM114.968 949.857C115.547 950.181 116.131 950.501 116.72 950.815L117.19 949.933C116.608 949.622 116.03 949.306 115.457 948.984L114.968 949.857ZM118.499 951.742C119.096 952.045 119.698 952.343 120.304 952.636L120.738 951.735C120.138 951.446 119.543 951.151 118.952 950.85L118.499 951.742ZM122.105 953.484C122.709 953.761 123.318 954.033 123.931 954.3L124.33 953.383C123.723 953.119 123.12 952.849 122.522 952.575L122.105 953.484ZM53.9046 0L54.3081 11.54L64.1002 5.4205L53.9046 0ZM53.9046 239L54.6117 239.707L54.6117 239.707L53.9046 239ZM60.9046 485L61.6117 484.293L61.6117 484.293L60.9046 485ZM126.905 728L127.666 728.649L127.666 728.649L126.905 728ZM126.905 955L119.814 945.886L115.467 956.584L126.905 955ZM54.64 3.05872C54.9968 3.62696 55.3568 4.19935 55.7195 4.77581L57.4122 3.71052C57.0497 3.13449 56.6902 2.56272 56.3338 1.99521L54.64 3.05872ZM56.7905 6.47636C57.1431 7.03596 57.4983 7.59963 57.8556 8.16664L59.5477 7.10042C59.1902 6.53307 58.8353 5.96988 58.4826 5.41019L56.7905 6.47636ZM58.9343 9.87906C59.2895 10.4434 59.6467 11.0112 60.0057 11.5825L61.6991 10.5184C61.3398 9.94649 60.9823 9.37819 60.6268 8.81355L58.9343 9.87906ZM61.0665 13.2729C61.4218 13.8397 61.7785 14.4098 62.1366 14.9832L63.833 13.9238C63.4743 13.3494 63.117 12.7784 62.7613 12.2108L61.0665 13.2729ZM63.2049 16.6974C63.5539 17.2587 63.904 17.823 64.255 18.3903L65.9558 17.338C65.6039 16.7693 65.253 16.2037 64.9033 15.6413L63.2049 16.6974ZM65.3108 20.1014C65.6635 20.6748 66.0171 21.2513 66.3713 21.8307L68.0777 20.7876C67.7225 20.2065 67.3679 19.6284 67.0142 19.0534L65.3108 20.1014ZM67.4061 23.5294C67.7514 24.0982 68.0971 24.6698 68.4431 25.2442L70.1562 24.2122C69.809 23.6358 69.4621 23.0622 69.1158 22.4916L67.4061 23.5294ZM69.4818 26.9756C69.8233 27.5473 70.165 28.1216 70.5066 28.6986L72.2276 27.6796C71.8845 27.1003 71.5416 26.5237 71.1988 25.9499L69.4818 26.9756ZM71.5211 30.4198C71.8591 30.9961 72.197 31.575 72.5346 32.1564L74.2642 31.1521C73.9251 30.5681 73.5857 29.9866 73.2462 29.4079L71.5211 30.4198ZM73.5443 33.9045C73.8742 34.4788 74.2038 35.0556 74.5328 35.6348L76.2718 34.6469C75.9411 34.0648 75.61 33.4853 75.2785 32.9082L73.5443 33.9045ZM75.5181 37.3795C75.846 37.9635 76.1731 38.5498 76.4995 39.1385L78.2487 38.1688C77.9205 37.5769 77.5916 36.9874 77.2621 36.4005L75.5181 37.3795ZM77.4666 40.8943C77.7856 41.4772 78.1037 42.0624 78.4208 42.6497L80.1807 41.6997C79.8618 41.1089 79.5419 40.5204 79.2211 39.9342L77.4666 40.8943ZM79.3688 44.4186C79.6838 45.0104 79.9976 45.6045 80.3101 46.2008L82.0815 45.2722C81.767 44.6722 81.4513 44.0745 81.1344 43.4791L79.3688 44.4186ZM81.231 47.9709C81.5363 48.5626 81.8403 49.1563 82.1429 49.7521L83.9261 48.8465C83.6215 48.2467 83.3155 47.6491 83.0082 47.0537L81.231 47.9709ZM83.0461 51.5458C83.3447 52.1438 83.6417 52.7439 83.937 53.346L85.7326 52.4652C85.4352 51.8588 85.1361 51.2545 84.8355 50.6524L83.0461 51.5458ZM84.8098 55.1415C85.099 55.742 85.3864 56.3445 85.672 56.949L87.4803 56.0946C87.1926 55.4856 86.903 54.8786 86.6117 54.2737L84.8098 55.1415ZM86.523 58.7682C86.8031 59.3731 87.0813 59.98 87.3574 60.5887L89.1788 59.7625C88.9005 59.149 88.6202 58.5374 88.3379 57.9278L86.523 58.7682ZM88.1755 62.4117C88.4461 63.0213 88.7145 63.6327 88.9806 64.246L90.8153 63.4498C90.5469 62.8313 90.2763 62.2148 90.0035 61.6003L88.1755 62.4117ZM89.7721 66.0913C90.0318 66.704 90.2892 67.3185 90.5441 67.9347L92.3922 67.1703C92.1351 66.5486 91.8755 65.9287 91.6135 65.3108L89.7721 66.0913ZM91.2999 69.7853C91.5493 70.404 91.7962 71.0244 92.0404 71.6465L93.9021 70.9157C93.6556 70.2878 93.4065 69.6617 93.1548 69.0375L91.2999 69.7853ZM92.7651 73.5182C93.0021 74.1391 93.2364 74.7617 93.4679 75.3861L95.3431 74.6907C95.1094 74.0604 94.8728 73.4317 94.6335 72.8049L92.7651 73.5182ZM94.1538 77.264C94.3795 77.8916 94.6023 78.5209 94.8221 79.1518L96.7108 78.4939C96.4888 77.8566 96.2637 77.221 96.0357 76.5871L94.1538 77.264ZM95.4715 81.0474C95.6837 81.6774 95.8928 82.309 96.0987 82.9422L98.0006 82.3236C97.7925 81.6837 97.5812 81.0455 97.3668 80.409L95.4715 81.0474ZM96.7067 84.8465C96.9062 85.4828 97.1023 86.1207 97.295 86.7602L99.21 86.183C99.0151 85.5365 98.8168 84.8916 98.6152 84.2484L96.7067 84.8465ZM97.8618 88.6793C98.0465 89.3179 98.2278 89.9579 98.4054 90.5995L100.333 90.0656C100.153 89.4167 99.9698 88.7693 99.7831 88.1236L97.8618 88.6793ZM98.9278 92.5286C99.0982 93.1731 99.2651 93.8192 99.4281 94.4667L101.368 93.9782C101.203 93.323 101.034 92.6693 100.861 92.0172L98.9278 92.5286ZM99.9047 96.4079C100.059 97.0541 100.21 97.7018 100.357 98.351L102.307 97.9098C102.159 97.2526 102.006 96.597 101.85 95.9428L99.9047 96.4079ZM100.785 100.303C100.924 100.954 101.059 101.608 101.19 102.263L103.151 101.871C103.019 101.208 102.882 100.546 102.741 99.8857L100.785 100.303ZM101.569 104.223C101.69 104.876 101.808 105.53 101.921 106.186L103.892 105.845C103.777 105.181 103.658 104.518 103.535 103.857L101.569 104.223ZM102.249 108.156C102.353 108.814 102.454 109.474 102.55 110.135L104.529 109.847C104.432 109.177 104.33 108.509 104.224 107.842L102.249 108.156ZM102.823 112.111C102.91 112.769 102.992 113.428 103.069 114.088L105.056 113.855C104.977 113.186 104.894 112.517 104.806 111.85L102.823 112.111ZM103.288 116.074C103.357 116.736 103.42 117.401 103.479 118.066L105.471 117.889C105.412 117.214 105.347 116.541 105.278 115.868L103.288 116.074ZM103.641 120.052C103.69 120.714 103.734 121.376 103.774 122.039L105.77 121.92C105.73 121.247 105.685 120.575 105.636 119.904L103.641 120.052ZM103.878 124.034C103.908 124.699 103.933 125.366 103.953 126.035L105.952 125.975C105.932 125.297 105.906 124.62 105.876 123.944L103.878 124.034ZM103.997 128.025C104.007 128.688 104.012 129.351 104.012 130.015L106.012 130.016C106.012 129.341 106.007 128.668 105.997 127.996L103.997 128.025ZM103.996 132.011C103.986 132.678 103.971 133.346 103.95 134.014L105.949 134.076C105.97 133.397 105.986 132.719 105.996 132.042L103.996 132.011ZM103.873 136.004C103.843 136.664 103.807 137.326 103.766 137.989L105.762 138.112C105.804 137.439 105.84 136.767 105.871 136.096L103.873 136.004ZM103.628 139.979C103.576 140.644 103.519 141.31 103.457 141.976L105.449 142.162C105.512 141.485 105.569 140.809 105.622 140.134L103.628 139.979ZM103.257 143.959C103.185 144.615 103.108 145.272 103.026 145.93L105.011 146.178C105.094 145.51 105.172 144.842 105.245 144.176L103.257 143.959ZM102.764 147.907C102.671 148.567 102.572 149.228 102.468 149.889L104.444 150.199C104.55 149.527 104.65 148.856 104.744 148.186L102.764 147.907ZM102.143 151.862C102.031 152.51 101.913 153.16 101.79 153.81L103.755 154.182C103.88 153.521 103.999 152.862 104.114 152.203L102.143 151.862ZM101.404 155.764C101.27 156.416 101.131 157.069 100.986 157.723L102.938 158.156C103.085 157.492 103.227 156.829 103.363 156.167L101.404 155.764ZM100.535 159.683C100.382 160.321 100.225 160.96 100.062 161.6L102 162.094C102.166 161.444 102.326 160.795 102.48 160.147L100.535 159.683ZM99.5569 163.522C99.3831 164.163 99.2038 164.805 99.0189 165.448L100.941 166.001C101.129 165.348 101.311 164.696 101.487 164.045L99.5569 163.522ZM98.4475 167.379C98.2555 168.01 98.058 168.642 97.8551 169.274L99.7595 169.885C99.9655 169.243 100.166 168.602 100.361 167.961L98.4475 167.379ZM97.2362 171.155C97.0245 171.783 96.8075 172.411 96.5849 173.04L98.4703 173.707C98.6962 173.069 98.9165 172.431 99.1313 171.794L97.2362 171.155ZM95.9006 174.929C95.6682 175.556 95.4302 176.184 95.1867 176.812L97.0516 177.535C97.2986 176.897 97.5401 176.26 97.7759 175.624L95.9006 174.929ZM94.4618 178.644C94.2149 179.255 93.9628 179.867 93.7053 180.479L95.5489 181.255C95.8101 180.634 96.0658 180.013 96.3163 179.393L94.4618 178.644ZM92.9166 182.318C92.6483 182.932 92.3746 183.546 92.0955 184.161L93.9165 184.988C94.1995 184.365 94.477 183.742 94.7491 183.12L92.9166 182.318ZM91.2564 185.975C90.9775 186.568 90.6934 187.161 90.4042 187.754L92.2021 188.63C92.4952 188.029 92.7832 187.428 93.0659 186.827L91.2564 185.975ZM89.521 189.536C89.2214 190.131 88.9166 190.726 88.6065 191.321L90.3805 192.245C90.6946 191.641 91.0035 191.039 91.3071 190.436L89.521 189.536ZM87.6605 193.109C87.3475 193.692 87.0294 194.274 86.7062 194.858L88.4556 195.827C88.7829 195.236 89.1051 194.646 89.4221 194.056L87.6605 193.109ZM85.7393 196.577C85.412 197.151 85.0797 197.725 84.7425 198.299L86.4672 199.312C86.8087 198.73 87.145 198.149 87.4764 197.568L85.7393 196.577ZM83.7156 200.024C83.3682 200.599 83.0158 201.175 82.6583 201.751L84.3577 202.806C84.7195 202.223 85.0762 201.64 85.4277 201.058L83.7156 200.024ZM81.5942 203.444C81.243 203.995 80.8871 204.547 80.5265 205.099L82.2008 206.193C82.5656 205.634 82.9257 205.076 83.281 204.518L81.5942 203.444ZM79.4302 206.756C79.06 207.309 78.685 207.862 78.3052 208.415L79.9543 209.547C80.3384 208.987 80.7176 208.428 81.092 207.869L79.4302 206.756ZM77.1513 210.077C76.7648 210.627 76.3735 211.177 75.9774 211.728L77.6009 212.896C78.0013 212.339 78.3969 211.783 78.7876 211.227L77.1513 210.077ZM74.823 213.315C74.4337 213.844 74.0399 214.374 73.6417 214.904L75.2405 216.105C75.6429 215.57 76.0408 215.035 76.4342 214.5L74.823 213.315ZM72.4332 216.494C72.0258 217.025 71.6139 217.556 71.1974 218.087L72.7712 219.321C73.1919 218.785 73.608 218.248 74.0195 217.712L72.4332 216.494ZM69.9341 219.681C69.5205 220.198 69.1025 220.714 68.6801 221.232L70.2291 222.497C70.6556 221.975 71.0777 221.453 71.4954 220.931L69.9341 219.681ZM67.4278 222.75C67.0061 223.257 66.5802 223.763 66.15 224.27L67.6749 225.564C68.1091 225.053 68.539 224.541 68.9647 224.03L67.4278 222.75ZM64.8466 225.792C64.4079 226.299 63.9649 226.807 63.5175 227.315L65.0183 228.637C65.4697 228.124 65.9167 227.612 66.3595 227.1L64.8466 225.792ZM62.1624 228.839C61.7226 229.329 61.2788 229.82 60.8309 230.31L62.308 231.659C62.7598 231.164 63.2075 230.669 63.6511 230.174L62.1624 228.839ZM59.497 231.759C59.0484 232.242 58.5958 232.725 58.1392 233.209L59.5934 234.582C60.0538 234.094 60.5102 233.607 60.9626 233.12L59.497 231.759ZM56.7576 234.66C56.293 235.144 55.8244 235.628 55.3518 236.112L56.7831 237.509C57.2595 237.021 57.7319 236.533 58.2003 236.045L56.7576 234.66ZM53.9217 237.566C53.6813 237.808 53.4399 238.05 53.1975 238.293L54.6117 239.707C54.856 239.463 55.0993 239.218 55.3416 238.974L53.9217 237.566ZM53.1975 238.293C52.9537 238.537 52.7109 238.78 52.4691 239.024L53.8891 240.433C54.129 240.191 54.3699 239.949 54.6117 239.707L53.1975 238.293ZM51.0296 240.488C50.5536 240.976 50.0814 241.464 49.613 241.952L51.0564 243.337C51.5208 242.852 51.9891 242.368 52.4612 241.884L51.0296 240.488ZM48.2194 243.417C47.7586 243.906 47.3017 244.395 46.8485 244.883L48.3151 246.243C48.7644 245.759 49.2175 245.274 49.6744 244.79L48.2194 243.417ZM45.5002 246.35C45.0484 246.846 44.6005 247.342 44.1565 247.838L45.6464 249.172C46.0866 248.68 46.5306 248.189 46.9784 247.697L45.5002 246.35ZM42.7925 249.375C42.3419 249.887 41.8954 250.4 41.4529 250.913L42.9671 252.219C43.4055 251.711 43.848 251.203 44.2946 250.695L42.7925 249.375ZM40.1376 252.451C39.7032 252.964 39.2729 253.477 38.8465 253.99L40.3847 255.268C40.8071 254.76 41.2334 254.252 41.6638 253.744L40.1376 252.451ZM37.5793 255.53C37.1541 256.051 36.733 256.573 36.316 257.094L37.8782 258.343C38.2912 257.827 38.7083 257.31 39.1294 256.793L37.5793 255.53ZM35.0422 258.704C34.6219 259.241 34.2059 259.778 33.7942 260.315L35.3811 261.532C35.7888 261 36.2007 260.469 36.6168 259.937L35.0422 258.704ZM32.5718 261.925C32.1685 262.462 31.7695 262.999 31.3747 263.536L32.9861 264.721C33.3768 264.189 33.7718 263.658 34.1709 263.126L32.5718 261.925ZM30.203 265.147C29.8053 265.7 29.412 266.252 29.0231 266.805L30.6588 267.956C31.0436 267.409 31.4328 266.862 31.8264 266.315L30.203 265.147ZM27.8546 268.485C27.4697 269.045 27.0892 269.605 26.7132 270.165L28.3736 271.28C28.7455 270.726 29.1219 270.172 29.5028 269.618L27.8546 268.485ZM25.5984 271.845C25.2313 272.405 24.8686 272.965 24.5103 273.525L26.1949 274.603C26.5492 274.049 26.9079 273.496 27.271 272.942L25.5984 271.845ZM23.4383 275.221C23.0748 275.803 22.7161 276.386 22.362 276.968L24.0708 278.007C24.4208 277.431 24.7755 276.856 25.1349 276.28L23.4383 275.221ZM21.3139 278.714C20.9692 279.296 20.6291 279.878 20.2937 280.46L22.0264 281.459C22.3579 280.884 22.694 280.308 23.0347 279.733L21.3139 278.714ZM19.3013 282.205C18.975 282.787 18.6532 283.369 18.3361 283.951L20.092 284.908C20.4054 284.333 20.7233 283.758 21.0457 283.183L19.3013 282.205ZM17.3643 285.759C17.0452 286.362 16.731 286.965 16.4217 287.567L18.2008 288.481C18.5064 287.886 18.8167 287.29 19.1319 286.695L17.3643 285.759ZM15.5081 289.374C15.2083 289.976 14.9134 290.578 14.6232 291.18L16.4247 292.049C16.7112 291.455 17.0025 290.86 17.2985 290.265L15.5081 289.374ZM13.7669 292.985C13.4769 293.606 13.192 294.227 12.9121 294.848L14.7353 295.67C15.0116 295.057 15.2929 294.444 15.5792 293.831L13.7669 292.985ZM12.0864 296.711C11.8161 297.332 11.5509 297.953 11.2905 298.573L13.1346 299.347C13.3916 298.735 13.6535 298.122 13.9202 297.51L12.0864 296.711ZM10.524 300.434C10.2728 301.055 10.0264 301.677 9.7849 302.298L11.6489 303.022C11.8872 302.41 12.1303 301.797 12.3783 301.183L10.524 300.434ZM9.0556 304.211C8.8176 304.849 8.58469 305.486 8.35683 306.123L10.2399 306.797C10.4647 306.168 10.6945 305.54 10.9293 304.911L9.0556 304.211ZM7.68833 308.032C7.4705 308.669 7.25768 309.304 7.04981 309.94L8.95067 310.562C9.1557 309.935 9.36562 309.308 9.58048 308.68L7.68833 308.032ZM6.43525 311.863C6.23195 312.515 6.03382 313.166 5.84082 313.817L7.75832 314.386C7.94865 313.744 8.14404 313.102 8.34454 312.459L6.43525 311.863ZM5.27715 315.769C5.09436 316.419 4.91664 317.069 4.74394 317.718L6.6767 318.232C6.84698 317.592 7.02222 316.951 7.20248 316.31L5.27715 315.769ZM4.2409 319.663C4.07531 320.323 3.91487 320.982 3.75954 321.641L5.70612 322.1C5.85926 321.45 6.01744 320.801 6.1807 320.15L4.2409 319.663ZM3.30624 323.626C3.16027 324.287 3.0194 324.948 2.88359 325.608L4.84256 326.011C4.97644 325.36 5.11531 324.709 5.25922 324.057L3.30624 323.626ZM2.49128 327.587C2.36489 328.249 2.24355 328.91 2.12721 329.571L4.09693 329.918C4.21162 329.266 4.33123 328.614 4.45582 327.961L2.49128 327.587ZM1.78822 331.583C1.68034 332.252 1.57755 332.921 1.4798 333.59L3.45875 333.879C3.5551 333.22 3.65642 332.561 3.76277 331.901L1.78822 331.583ZM1.20162 335.593C1.11389 336.259 1.03114 336.926 0.953318 337.591L2.93978 337.823C3.01649 337.167 3.09806 336.511 3.18453 335.853L1.20162 335.593ZM0.731557 339.614C0.662473 340.29 0.598426 340.964 0.539355 341.638L2.53171 341.813C2.58994 341.148 2.65308 340.483 2.72118 339.818L0.731557 339.614ZM0.377013 343.657C0.327834 344.329 0.283571 345 0.244163 345.671L2.24072 345.788C2.27957 345.127 2.3232 344.465 2.37168 343.803L0.377013 343.657ZM0.139774 347.694C0.109646 348.372 0.0844536 349.05 0.0641346 349.727L2.06323 349.787C2.08327 349.12 2.1081 348.452 2.13781 347.783L0.139774 347.694ZM0.0177331 351.753C0.00709638 352.428 0.00126894 353.102 0.000186937 353.774L2.00018 353.778C2.00125 353.114 2.007 352.45 2.01748 351.785L0.0177331 351.753ZM0.0111867 355.795C0.0196638 356.474 0.0329402 357.152 0.0509494 357.829L2.05024 357.776C2.03248 357.108 2.01939 356.44 2.01103 355.77L0.0111867 355.795ZM0.11911 359.856C0.146519 360.531 0.178594 361.204 0.21527 361.877L2.2123 361.768C2.17613 361.105 2.14449 360.44 2.11746 359.775L0.11911 359.856ZM0.339055 363.891C0.385352 364.568 0.436278 365.244 0.491766 365.919L2.48504 365.755C2.4303 365.089 2.38006 364.422 2.3344 363.754L0.339055 363.891ZM0.671848 367.939C0.736392 368.612 0.805428 369.283 0.87889 369.953L2.86697 369.735C2.79449 369.074 2.72637 368.412 2.6627 367.748L0.671848 367.939ZM1.11248 371.958C1.19535 372.631 1.28265 373.302 1.37429 373.971L3.35583 373.7C3.26538 373.039 3.17924 372.377 3.09746 371.714L1.11248 371.958ZM1.66265 375.979C1.76309 376.647 1.86783 377.314 1.97678 377.979L3.95048 377.656C3.84293 376.999 3.73955 376.341 3.64042 375.682L1.66265 375.979ZM2.31626 379.971C2.43426 380.637 2.55647 381.302 2.6828 381.965L4.64748 381.591C4.52274 380.936 4.4021 380.279 4.2856 379.622L2.31626 379.971ZM3.07506 383.955C3.20992 384.617 3.34885 385.277 3.49179 385.936L5.44632 385.512C5.30516 384.861 5.16796 384.209 5.03479 383.556L3.07506 383.955ZM3.93254 387.908C4.08409 388.567 4.23961 389.224 4.39902 389.879L6.34239 389.407C6.18492 388.759 6.0313 388.11 5.88162 387.459L3.93254 387.908ZM4.89034 391.847C5.05798 392.501 5.22947 393.154 5.40472 393.805L7.33596 393.285C7.1628 392.642 6.99337 391.997 6.82775 391.35L4.89034 391.847ZM5.94173 395.753C6.12516 396.403 6.3123 397.051 6.5031 397.698L8.42136 397.132C8.23279 396.493 8.04784 395.852 7.86659 395.209L5.94173 395.753ZM7.08839 399.639C7.28711 400.285 7.48943 400.928 7.69527 401.57L9.59973 400.959C9.39624 400.325 9.19625 399.689 8.99983 399.051L7.08839 399.639ZM8.32331 403.49C8.5369 404.131 8.75397 404.77 8.97443 405.406L10.8644 404.752C10.6464 404.122 10.4318 403.491 10.2206 402.858L8.32331 403.49ZM9.64854 407.319C9.87661 407.954 10.108 408.588 10.3427 409.219L12.2175 408.523C11.9854 407.898 11.7565 407.272 11.531 406.643L9.64854 407.319ZM11.0566 411.109C11.2986 411.739 11.5439 412.367 11.7924 412.993L13.6514 412.256C13.4056 411.636 13.163 411.015 12.9236 410.392L11.0566 411.109ZM12.5502 414.874C12.806 415.499 13.0648 416.121 13.3266 416.742L15.1694 415.965C14.9103 415.351 14.6542 414.734 14.4012 414.116L12.5502 414.874ZM14.1211 418.598C14.3901 419.217 14.662 419.834 14.9368 420.449L16.7628 419.633C16.4908 419.025 16.2217 418.414 15.9555 417.801L14.1211 418.598ZM15.7736 422.296C16.0553 422.909 16.3399 423.521 16.6273 424.13L18.436 423.276C18.1516 422.673 17.8699 422.068 17.591 421.461L15.7736 422.296ZM17.4975 425.95C17.7919 426.558 18.0889 427.163 18.3886 427.767L20.1798 426.877C19.8831 426.28 19.5889 425.68 19.2975 425.078L17.4975 425.95ZM19.2997 429.578C19.606 430.179 19.9148 430.778 20.2261 431.375L21.9992 430.45C21.691 429.859 21.3852 429.266 21.0819 428.67L19.2997 429.578ZM21.1673 433.158C21.4858 433.754 21.8068 434.348 22.1301 434.939L23.885 433.98C23.5647 433.394 23.2468 432.806 22.9314 432.215L21.1673 433.158ZM23.1111 436.713C23.4405 437.302 23.772 437.888 24.1058 438.472L25.842 437.479C25.5114 436.901 25.1829 436.32 24.8567 435.737L23.1111 436.713ZM25.1136 440.215C25.4553 440.8 25.7991 441.382 26.145 441.961L27.8623 440.936C27.5196 440.362 27.1789 439.785 26.8404 439.206L25.1136 440.215ZM27.192 443.696C27.543 444.272 27.896 444.845 28.2508 445.415L29.9488 444.358C29.5972 443.793 29.2474 443.226 28.8996 442.655L27.192 443.696ZM29.321 447.117C29.6852 447.691 30.0512 448.261 30.4189 448.829L32.0973 447.741C31.7329 447.179 31.3702 446.613 31.0093 446.045L29.321 447.117ZM31.528 450.523C31.8994 451.085 32.2724 451.644 32.6471 452.2L34.3056 451.082C33.9343 450.531 33.5645 449.977 33.1965 449.42L31.528 450.523ZM33.7803 453.865C34.1651 454.425 34.5513 454.982 34.9391 455.536L36.5774 454.389C36.1931 453.84 35.8102 453.288 35.4288 452.733L33.7803 453.865ZM36.1065 457.188C36.497 457.735 36.8889 458.279 37.2821 458.82L38.8999 457.644C38.5102 457.108 38.1217 456.569 37.7346 456.026L36.1065 457.188ZM38.4789 460.452C38.8829 460.997 39.2881 461.54 39.6945 462.079L41.2913 460.874C40.8885 460.34 40.4868 459.803 40.0863 459.262L38.4789 460.452ZM40.9167 463.684C41.3251 464.216 41.7345 464.745 42.1448 465.269L43.7204 464.038C43.3137 463.517 42.9078 462.994 42.5029 462.466L40.9167 463.684ZM43.4069 466.869C43.8291 467.399 44.2521 467.926 44.6758 468.449L46.2295 467.189C45.8094 466.671 45.3901 466.149 44.9716 465.623L43.4069 466.869ZM45.9489 470.005C46.379 470.526 46.8097 471.044 47.2409 471.557L48.7723 470.27C48.3448 469.762 47.9179 469.249 47.4915 468.732L45.9489 470.005ZM48.5568 473.109C48.9959 473.623 49.4353 474.132 49.875 474.637L51.3833 473.323C50.9475 472.823 50.5119 472.318 50.0767 471.809L48.5568 473.109ZM51.195 476.139C51.6494 476.652 52.1039 477.16 52.5585 477.663L54.043 476.323C53.5925 475.824 53.142 475.32 52.6916 474.812L51.195 476.139ZM53.9221 479.16C54.3765 479.654 54.8308 480.144 55.2849 480.629L56.7449 479.262C56.2949 478.781 55.8447 478.296 55.3944 477.806L53.9221 479.16ZM56.6812 482.106C57.1514 482.599 57.6212 483.087 58.0904 483.57L59.5245 482.176C59.0597 481.698 58.5943 481.214 58.1284 480.726L56.6812 482.106ZM59.4963 485.003C59.7302 485.239 59.9639 485.474 60.1975 485.707L61.6117 484.293C61.3804 484.062 61.1489 483.829 60.9171 483.595L59.4963 485.003ZM60.1975 485.707C60.4259 485.936 60.6552 486.166 60.8852 486.398L62.3051 484.989C62.0732 484.755 61.842 484.523 61.6117 484.293L60.1975 485.707ZM62.2748 487.809C62.7411 488.287 63.2103 488.771 63.6823 489.262L65.1237 487.875C64.6482 487.381 64.1754 486.893 63.7056 486.412L62.2748 487.809ZM65.0842 490.73C65.5332 491.203 65.9845 491.683 66.4381 492.168L67.8989 490.802C67.4423 490.313 66.9878 489.831 66.5356 489.354L65.0842 490.73ZM67.8053 493.64C68.2631 494.136 68.7231 494.638 69.1849 495.145L70.6639 493.799C70.199 493.288 69.7361 492.783 69.2752 492.283L67.8053 493.64ZM70.5167 496.617C70.9581 497.108 71.4011 497.604 71.8457 498.105L73.3411 496.777C72.8939 496.273 72.4482 495.774 72.004 495.28L70.5167 496.617ZM73.1837 499.621C73.6272 500.126 74.0721 500.636 74.5182 501.151L76.0296 499.841C75.5808 499.324 75.1333 498.81 74.6872 498.302L73.1837 499.621ZM75.8114 502.652C76.2436 503.156 76.6768 503.665 77.111 504.177L78.6371 502.884C78.2004 502.369 77.7648 501.858 77.3301 501.35L75.8114 502.652ZM78.4164 505.727C78.8457 506.24 79.2759 506.756 79.7068 507.277L81.2472 506.001C80.8139 505.478 80.3814 504.958 79.9497 504.443L78.4164 505.727ZM80.9709 508.811C81.3929 509.327 81.8155 509.845 82.2387 510.368L83.7927 509.109C83.3673 508.584 82.9424 508.062 82.5181 507.544L80.9709 508.811ZM83.5097 511.945C83.9275 512.467 84.3458 512.991 84.7644 513.52L86.3318 512.277C85.9109 511.746 85.4905 511.219 85.0704 510.695L83.5097 511.945ZM85.9977 515.084C86.4091 515.608 86.8207 516.136 87.2325 516.666L88.8126 515.44C88.3987 514.907 87.9849 514.377 87.5714 513.849L85.9977 515.084ZM88.4683 518.268C88.8761 518.799 89.2841 519.333 89.692 519.871L91.2848 518.661C90.8747 518.121 90.4647 517.584 90.0547 517.05L88.4683 518.268ZM90.8934 521.461C91.2938 521.994 91.6941 522.529 92.0943 523.067L93.6993 521.874C93.2971 521.333 92.8947 520.795 92.4923 520.259L90.8934 521.461ZM93.2945 524.69C93.6929 525.232 94.0911 525.776 94.4891 526.323L96.1062 525.146C95.7063 524.597 95.306 524.05 94.9056 523.505L93.2945 524.69ZM95.6577 527.938C96.0469 528.479 96.4358 529.022 96.8243 529.567L98.4534 528.407C98.0629 527.859 97.6721 527.313 97.2808 526.769L95.6577 527.938ZM97.9885 531.211C98.3761 531.761 98.7633 532.313 99.1499 532.868L100.791 531.725C100.402 531.167 100.013 530.612 99.6235 530.059L97.9885 531.211ZM100.289 534.512C100.667 535.06 101.044 535.61 101.421 536.163L103.073 535.036C102.695 534.481 102.315 533.928 101.936 533.377L100.289 534.512ZM102.548 537.827C102.924 538.383 103.298 538.942 103.672 539.503L105.336 538.394C104.961 537.83 104.584 537.268 104.207 536.709L102.548 537.827ZM104.783 541.18C105.149 541.735 105.515 542.293 105.879 542.853L107.555 541.761C107.189 541.199 106.821 540.638 106.453 540.079L104.783 541.18ZM106.97 544.537C107.333 545.101 107.695 545.666 108.056 546.233L109.743 545.159C109.38 544.589 109.017 544.021 108.652 543.455L106.97 544.537ZM109.135 547.939C109.49 548.503 109.843 549.069 110.195 549.636L111.894 548.58C111.54 548.01 111.185 547.442 110.828 546.875L109.135 547.939ZM111.249 551.342C111.599 551.912 111.947 552.484 112.295 553.057L114.005 552.021C113.656 551.444 113.305 550.869 112.953 550.296L111.249 551.342ZM113.334 554.783C113.678 555.357 114.02 555.933 114.361 556.51L116.083 555.493C115.74 554.912 115.396 554.333 115.05 553.756L113.334 554.783ZM115.376 558.238C115.713 558.816 116.048 559.395 116.382 559.975L118.116 558.978C117.78 558.394 117.442 557.812 117.104 557.231L115.376 558.238ZM117.38 561.721C117.711 562.304 118.041 562.888 118.369 563.474L120.114 562.497C119.784 561.908 119.452 561.32 119.119 560.733L117.38 561.721ZM119.344 565.227C119.667 565.812 119.988 566.398 120.308 566.986L122.065 566.03C121.743 565.439 121.42 564.849 121.094 564.26L119.344 565.227ZM121.263 568.753C121.58 569.343 121.895 569.934 122.208 570.527L123.976 569.592C123.661 568.996 123.344 568.401 123.026 567.807L121.263 568.753ZM123.141 572.306C123.45 572.899 123.757 573.494 124.062 574.089L125.842 573.177C125.535 572.578 125.226 571.979 124.915 571.383L123.141 572.306ZM124.972 575.878C125.274 576.476 125.573 577.074 125.871 577.674L127.662 576.785C127.363 576.181 127.061 575.579 126.758 574.978L124.972 575.878ZM126.757 579.475C127.051 580.077 127.342 580.68 127.632 581.283L129.435 580.418C129.144 579.811 128.85 579.204 128.555 578.598L126.757 579.475ZM128.494 583.097C128.779 583.702 129.062 584.308 129.343 584.915L131.158 584.075C130.876 583.464 130.59 582.853 130.303 582.244L128.494 583.097ZM130.18 586.739C130.456 587.348 130.731 587.958 131.003 588.568L132.829 587.754C132.555 587.139 132.279 586.525 132.001 585.912L130.18 586.739ZM131.814 590.407C132.082 591.02 132.348 591.635 132.611 592.25L134.45 591.463C134.184 590.843 133.917 590.224 133.647 589.606L131.814 590.407ZM133.393 594.097C133.652 594.713 133.907 595.33 134.161 595.948L136.011 595.189C135.756 594.566 135.498 593.945 135.238 593.324L133.393 594.097ZM134.915 597.808C135.164 598.43 135.411 599.052 135.655 599.676L137.518 598.946C137.272 598.318 137.023 597.69 136.771 597.063L134.915 597.808ZM136.38 601.547C136.619 602.171 136.854 602.796 137.088 603.422L138.962 602.723C138.726 602.092 138.489 601.462 138.248 600.833L136.38 601.547ZM137.779 605.299C138.008 605.93 138.234 606.561 138.457 607.192L140.343 606.526C140.118 605.889 139.89 605.252 139.658 604.616L137.779 605.299ZM139.119 609.089C139.336 609.721 139.55 610.354 139.762 610.987L141.659 610.354C141.446 609.715 141.229 609.077 141.01 608.438L139.119 609.089ZM140.386 612.887C140.592 613.524 140.795 614.16 140.994 614.797L142.903 614.199C142.701 613.556 142.497 612.914 142.289 612.272L140.386 612.887ZM141.586 616.718C141.78 617.359 141.971 618 142.158 618.641L144.078 618.08C143.889 617.433 143.696 616.785 143.5 616.139L141.586 616.718ZM142.71 620.564C142.891 621.205 143.068 621.847 143.241 622.488L145.172 621.966C144.996 621.318 144.818 620.67 144.635 620.022L142.71 620.564ZM143.757 624.433C143.925 625.081 144.09 625.73 144.251 626.379L146.192 625.897C146.029 625.241 145.863 624.586 145.693 623.93L143.757 624.433ZM144.722 628.324C144.876 628.973 145.026 629.621 145.171 630.269L147.123 629.83C146.975 629.175 146.824 628.519 146.669 627.864L144.722 628.324ZM145.6 632.226C145.74 632.882 145.876 633.538 146.008 634.194L147.969 633.799C147.835 633.136 147.698 632.473 147.556 631.809L145.6 632.226ZM146.391 636.16C146.515 636.815 146.634 637.47 146.75 638.125L148.719 637.777C148.603 637.115 148.482 636.452 148.356 635.789L146.391 636.16ZM147.084 640.091C147.192 640.754 147.296 641.416 147.396 642.077L149.374 641.78C149.273 641.109 149.167 640.439 149.058 639.768L147.084 640.091ZM147.681 644.061C147.772 644.722 147.858 645.382 147.94 646.042L149.925 645.796C149.842 645.128 149.755 644.458 149.663 643.789L147.681 644.061ZM148.172 648.021C148.245 648.686 148.314 649.351 148.377 650.016L150.368 649.825C150.303 649.151 150.234 648.476 150.16 647.802L148.172 648.021ZM148.555 652.013C148.609 652.678 148.659 653.342 148.703 654.006L150.699 653.872C150.654 653.198 150.603 652.524 150.548 651.85L148.555 652.013ZM148.822 655.995C148.857 656.661 148.887 657.327 148.912 657.992L150.91 657.918C150.885 657.243 150.855 656.567 150.819 655.89L148.822 655.995ZM148.97 659.996C148.985 660.663 148.994 661.329 148.998 661.994L150.998 661.983C150.994 661.307 150.984 660.63 150.97 659.952L148.97 659.996ZM148.993 663.987C148.986 664.653 148.974 665.317 148.956 665.981L150.955 666.035C150.973 665.36 150.986 664.684 150.993 664.008L148.993 663.987ZM148.885 667.982C148.856 668.648 148.821 669.314 148.78 669.978L150.776 670.1C150.818 669.424 150.853 668.748 150.883 668.07L148.885 667.982ZM148.641 671.966C148.589 672.629 148.531 673.29 148.467 673.95L150.458 674.142C150.523 673.47 150.582 672.797 150.635 672.123L148.641 671.966ZM148.256 675.939C148.18 676.601 148.098 677.261 148.009 677.92L149.992 678.186C150.082 677.514 150.166 676.842 150.243 676.168L148.256 675.939ZM147.726 679.894C147.625 680.55 147.518 681.205 147.405 681.859L149.376 682.2C149.491 681.533 149.6 680.866 149.703 680.197L147.726 679.894ZM147.046 683.822C146.92 684.475 146.788 685.127 146.649 685.777L148.604 686.195C148.746 685.532 148.881 684.867 149.01 684.201L147.046 683.822ZM146.212 687.722C146.061 688.369 145.902 689.014 145.737 689.658L147.675 690.155C147.843 689.498 148.005 688.839 148.159 688.179L146.212 687.722ZM145.223 691.582C145.045 692.221 144.86 692.859 144.669 693.495L146.584 694.071C146.78 693.422 146.968 692.771 147.15 692.118L145.223 691.582ZM144.075 695.398C143.87 696.031 143.658 696.661 143.44 697.291L145.329 697.947C145.552 697.304 145.768 696.66 145.978 696.014L144.075 695.398ZM142.767 699.162C142.537 699.783 142.3 700.401 142.055 701.018L143.915 701.754C144.164 701.124 144.407 700.492 144.642 699.858L142.767 699.162ZM141.302 702.863C141.044 703.476 140.778 704.087 140.506 704.697L142.332 705.513C142.61 704.89 142.881 704.266 143.145 703.639L141.302 702.863ZM139.675 706.504C139.393 707.101 139.104 707.695 138.807 708.288L140.596 709.182C140.899 708.577 141.194 707.969 141.483 707.36L139.675 706.504ZM137.898 710.06C137.588 710.648 137.27 711.235 136.946 711.819L138.694 712.79C139.026 712.193 139.35 711.594 139.667 710.992L137.898 710.06ZM135.957 713.555C135.626 714.122 135.288 714.688 134.943 715.251L136.648 716.296C137 715.721 137.346 715.143 137.685 714.563L135.957 713.555ZM133.886 716.935C133.526 717.494 133.16 718.051 132.787 718.606L134.446 719.723C134.827 719.156 135.201 718.587 135.568 718.016L133.886 716.935ZM131.645 720.265C131.268 720.8 130.884 721.332 130.494 721.863L132.105 723.048C132.503 722.507 132.895 721.963 133.28 721.416L131.645 720.265ZM129.303 723.448C128.899 723.973 128.488 724.497 128.071 725.019L129.632 726.269C130.058 725.737 130.477 725.202 130.889 724.666L129.303 723.448ZM126.796 726.577C126.581 726.836 126.363 727.094 126.143 727.351L127.666 728.649C127.89 728.386 128.112 728.123 128.332 727.859L126.796 726.577ZM126.143 727.351C125.924 727.609 125.705 727.867 125.486 728.125L127.012 729.418C127.229 729.161 127.447 728.905 127.666 728.649L126.143 727.351ZM124.184 729.671C123.752 730.186 123.323 730.701 122.897 731.216L124.438 732.492C124.861 731.98 125.288 731.468 125.717 730.955L124.184 729.671ZM121.626 732.761C121.205 733.275 120.786 733.789 120.37 734.304L121.925 735.561C122.339 735.05 122.755 734.539 123.174 734.027L121.626 732.761ZM119.13 735.846C118.716 736.364 118.304 736.883 117.895 737.401L119.464 738.641C119.871 738.125 120.281 737.61 120.693 737.094L119.13 735.846ZM116.645 738.993C116.231 739.524 115.82 740.054 115.412 740.584L116.996 741.805C117.402 741.278 117.81 740.751 118.222 740.223L116.645 738.993ZM114.195 742.174C113.792 742.704 113.392 743.233 112.994 743.762L114.594 744.963C114.988 744.437 115.386 743.911 115.787 743.385L114.195 742.174ZM111.81 745.349C111.415 745.882 111.023 746.415 110.633 746.948L112.247 748.129C112.634 747.6 113.024 747.07 113.417 746.54L111.81 745.349ZM109.443 748.586C109.049 749.132 108.658 749.677 108.27 750.222L109.899 751.382C110.284 750.84 110.673 750.299 111.064 749.756L109.443 748.586ZM107.114 751.856C106.732 752.401 106.352 752.945 105.976 753.489L107.62 754.627C107.994 754.087 108.371 753.547 108.751 753.006L107.114 751.856ZM104.855 755.119C104.479 755.671 104.106 756.221 103.735 756.772L105.395 757.888C105.763 757.342 106.133 756.794 106.507 756.247L104.855 755.119ZM102.612 758.454C102.241 759.015 101.872 759.575 101.507 760.134L103.182 761.227C103.545 760.672 103.911 760.116 104.279 759.559L102.612 758.454ZM100.421 761.812C100.062 762.371 99.7054 762.929 99.3524 763.487L101.042 764.557C101.393 764.003 101.747 763.448 102.103 762.893L100.421 761.812ZM98.3022 765.16C97.9457 765.733 97.5923 766.305 97.2422 766.876L98.9476 767.921C99.2952 767.354 99.646 766.786 99.9999 766.218L98.3022 765.16ZM96.1943 768.601C95.8482 769.176 95.5054 769.75 95.1657 770.323L96.8866 771.343C97.2237 770.773 97.564 770.204 97.9075 769.633L96.1943 768.601ZM94.1564 772.043C93.8231 772.615 93.4931 773.187 93.1662 773.759L94.9024 774.752C95.2267 774.185 95.5542 773.617 95.885 773.049L94.1564 772.043ZM92.1834 775.493C91.852 776.083 91.524 776.673 91.1994 777.262L92.951 778.227C93.273 777.643 93.5984 777.058 93.9272 776.473L92.1834 775.493ZM90.2358 779.027C89.9179 779.615 89.6035 780.202 89.2924 780.789L91.0593 781.726C91.3679 781.144 91.6798 780.561 91.9951 779.978L90.2358 779.027ZM88.3692 782.547C88.0638 783.134 87.7618 783.721 87.4632 784.307L89.2452 785.215C89.5414 784.634 89.8408 784.052 90.1437 783.469L88.3692 782.547ZM86.5506 786.117C86.2499 786.72 85.9528 787.322 85.6593 787.924L87.4567 788.801C87.7477 788.205 88.0422 787.608 88.3403 787.01L86.5506 786.117ZM84.7894 789.726C84.503 790.326 84.2201 790.925 83.9407 791.524L85.7531 792.37C86.03 791.776 86.3104 791.182 86.5943 790.588L84.7894 789.726ZM83.1131 793.318C82.8315 793.936 82.5538 794.552 82.2798 795.168L84.1071 795.981C84.3786 795.371 84.6538 794.76 84.9328 794.148L83.1131 793.318ZM81.469 797.013C81.2025 797.627 80.9398 798.24 80.6807 798.853L82.5227 799.632C82.7794 799.025 83.0397 798.418 83.3038 797.809L81.469 797.013ZM79.9147 800.688C79.6624 801.301 79.4138 801.913 79.1689 802.523L81.0253 803.268C81.2678 802.663 81.514 802.057 81.764 801.45L79.9147 800.688ZM78.4236 804.409C78.1791 805.037 77.9386 805.664 77.702 806.29L79.5727 806.997C79.807 806.377 80.0452 805.757 80.2873 805.135L78.4236 804.409ZM77.0039 808.164C76.7751 808.788 76.5502 809.411 76.3292 810.033L78.2138 810.703C78.4325 810.087 78.6551 809.471 78.8816 808.853L77.0039 808.164ZM75.6711 811.916C75.4509 812.556 75.2349 813.196 75.023 813.834L76.9211 814.464C77.1308 813.833 77.3446 813.2 77.5624 812.566L75.6711 811.916ZM74.3996 815.746C74.1959 816.382 73.9963 817.017 73.8009 817.651L75.7121 818.24C75.9054 817.613 76.1028 816.985 76.3043 816.356L74.3996 815.746ZM73.2267 819.549C73.0351 820.195 72.8477 820.84 72.6646 821.484L74.5883 822.031C74.7694 821.394 74.9547 820.756 75.1442 820.117L73.2267 819.549ZM72.1233 823.429C71.9471 824.076 71.7753 824.722 71.6078 825.366L73.5435 825.869C73.7091 825.232 73.8789 824.594 74.0531 823.954L72.1233 823.429ZM71.1181 827.296C70.9579 827.943 70.8021 828.589 70.6506 829.233L72.5975 829.691C72.7472 829.054 72.9012 828.416 73.0595 827.777L71.1181 827.296ZM70.1988 831.208C70.0528 831.865 69.9113 832.52 69.7742 833.174L71.7317 833.584C71.8671 832.938 72.0069 832.291 72.1512 831.642L70.1988 831.208ZM69.3766 835.131C69.2486 835.782 69.1251 836.432 69.006 837.08L70.973 837.441C71.0906 836.802 71.2126 836.16 71.3391 835.517L69.3766 835.131ZM68.6527 839.074C68.5394 839.739 68.4308 840.402 68.3269 841.064L70.3027 841.374C70.4052 840.721 70.5124 840.067 70.6243 839.41L68.6527 839.074ZM68.0294 843.044C67.9349 843.702 67.8451 844.358 67.7599 845.013L69.7432 845.271C69.8272 844.625 69.9158 843.977 70.0091 843.328L68.0294 843.044ZM67.5136 847.015C67.4357 847.685 67.3627 848.354 67.2947 849.022L69.2844 849.224C69.3515 848.567 69.4234 847.907 69.5002 847.245L67.5136 847.015ZM67.1052 851.017C67.047 851.681 66.9936 852.342 66.9451 853.002L68.9397 853.148C68.9875 852.498 69.0401 851.846 69.0976 851.192L67.1052 851.017ZM66.812 855.011C66.7722 855.685 66.7376 856.358 66.7081 857.028L68.7062 857.116C68.7352 856.456 68.7693 855.793 68.8085 855.129L66.812 855.011ZM66.6348 859.033C66.6155 859.699 66.6012 860.363 66.592 861.025L68.5918 861.053C68.6009 860.401 68.6149 859.747 68.634 859.091L66.6348 859.033ZM66.5796 863.04C66.5807 863.716 66.5871 864.389 66.5987 865.06L68.5984 865.025C68.5869 864.365 68.5807 863.702 68.5796 863.037L66.5796 863.04ZM66.6496 867.065C66.6718 867.731 66.6993 868.394 66.732 869.056L68.7295 868.957C68.6974 868.306 68.6703 867.653 68.6485 866.998L66.6496 867.065ZM66.8485 871.074C66.893 871.747 66.9429 872.418 66.9983 873.086L68.9915 872.92C68.937 872.264 68.8879 871.604 68.8441 870.942L66.8485 871.074ZM67.1808 875.082C67.2472 875.745 67.319 876.407 67.3962 877.065L69.3826 876.832C69.3067 876.185 69.2361 875.535 69.1709 874.883L67.1808 875.082ZM67.6499 879.076C67.7401 879.743 67.8359 880.408 67.9373 881.07L69.9142 880.767C69.8146 880.117 69.7205 879.464 69.6319 878.808L67.6499 879.076ZM68.2583 883.046C68.3719 883.708 68.4911 884.366 68.6159 885.022L70.5806 884.648C70.458 884.004 70.341 883.357 70.2295 882.708L68.2583 883.046ZM69.0126 887.005C69.1505 887.663 69.2943 888.317 69.4437 888.969L71.3931 888.522C71.2464 887.882 71.1054 887.24 70.97 886.594L69.0126 887.005ZM69.9091 890.914C70.0724 891.569 70.2416 892.221 70.4166 892.869L72.3476 892.348C72.1759 891.712 72.0099 891.073 71.8497 890.43L69.9091 890.914ZM70.9613 894.812C71.1487 895.456 71.3419 896.097 71.5409 896.734L73.4499 896.138C73.2548 895.513 73.0654 894.885 72.8816 894.253L70.9613 894.812ZM72.1583 898.644C72.3725 899.285 72.5927 899.922 72.8188 900.555L74.7024 899.883C74.4808 899.262 74.2651 898.638 74.0551 898.01L72.1583 898.644ZM73.5148 902.444C73.7527 903.07 73.9965 903.693 74.2461 904.311L76.1007 903.562C75.8562 902.957 75.6174 902.347 75.3843 901.734L73.5148 902.444ZM75.0217 906.176C75.2868 906.795 75.558 907.411 75.835 908.022L77.6567 907.196C77.3854 906.598 77.1199 905.995 76.8602 905.389L75.0217 906.176ZM76.6841 909.844C76.9743 910.45 77.2704 911.052 77.5725 911.649L79.3575 910.747C79.0618 910.162 78.7719 909.573 78.4879 908.98L76.6841 909.844ZM78.5028 913.442C78.8189 914.035 79.1409 914.624 79.4688 915.209L81.2132 914.23C80.8923 913.658 80.5772 913.082 80.2679 912.501L78.5028 913.442ZM80.4705 916.95C80.8129 917.531 81.1614 918.107 81.5158 918.679L83.2157 917.625C82.8691 917.066 82.5282 916.502 82.1932 915.934L80.4705 916.95ZM82.5966 920.38C82.9628 920.943 83.3348 921.501 83.7128 922.055L85.3646 920.927C84.995 920.386 84.6311 919.84 84.2729 919.29L82.5966 920.38ZM84.8677 923.707C85.2592 924.254 85.6565 924.796 86.0597 925.334L87.6596 924.134C87.2654 923.608 86.8769 923.078 86.4941 922.543L84.8677 923.707ZM87.2865 926.932C87.7014 927.46 88.1221 927.984 88.5485 928.502L90.0933 927.232C89.6763 926.725 89.265 926.213 88.8592 925.697L87.2865 926.932ZM89.8463 930.045C90.2846 930.554 90.7286 931.058 91.1782 931.558L92.6645 930.22C92.2249 929.731 91.7907 929.238 91.3622 928.74L89.8463 930.045ZM92.5441 933.041C93.0041 933.529 93.4698 934.013 93.941 934.491L95.3659 933.088C94.9051 932.62 94.4498 932.147 94 931.67L92.5441 933.041ZM95.3711 935.911C95.8534 936.379 96.3411 936.842 96.8343 937.3L98.1951 935.835C97.7128 935.387 97.2359 934.934 96.7643 934.476L95.3711 935.911ZM98.325 938.654C98.8264 939.099 99.3331 939.539 99.8452 939.974L101.14 938.449C100.639 938.024 100.143 937.594 99.6529 937.158L98.325 938.654ZM101.397 941.263C101.919 941.686 102.445 942.104 102.977 942.517L104.203 940.937C103.683 940.533 103.168 940.124 102.658 939.71L101.397 941.263ZM104.578 943.732C105.117 944.131 105.661 944.526 106.21 944.915L107.366 943.283C106.829 942.903 106.297 942.517 105.77 942.125L104.578 943.732ZM107.872 946.066C108.425 946.441 108.983 946.81 109.546 947.174L110.631 945.494C110.08 945.138 109.534 944.777 108.993 944.41L107.872 946.066ZM111.247 948.248C111.819 948.601 112.396 948.948 112.977 949.29L113.991 947.566C113.422 947.231 112.857 946.891 112.297 946.546L111.247 948.248ZM114.723 950.293C115.306 950.619 115.893 950.94 116.484 951.256L117.426 949.492C116.846 949.183 116.272 948.868 115.701 948.548L114.723 950.293ZM118.272 952.188C118.872 952.493 119.477 952.792 120.086 953.086L120.956 951.285C120.359 950.997 119.766 950.703 119.178 950.405L118.272 952.188ZM121.896 953.938C122.504 954.217 123.116 954.49 123.732 954.758L124.53 952.924C123.926 952.661 123.326 952.393 122.73 952.12L121.896 953.938Z",
    fill: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("path", {
    d: "M53.9046 0L54.1063 5.76998L59.0024 2.71025L53.9046 0ZM53.9046 239L54.2581 239.354L54.2581 239.354L53.9046 239ZM60.9046 485L61.2581 484.646L61.2581 484.646L60.9046 485ZM126.905 728L127.285 728.324L127.285 728.324L126.905 728ZM126.905 955L123.359 950.443L121.186 955.792L126.905 955ZM55.0635 2.79284C55.4202 3.3609 55.78 3.93314 56.1427 4.50949L56.9891 3.97684C56.6265 3.40071 56.2668 2.82878 55.9104 2.26109L55.0635 2.79284ZM57.2135 6.20982C57.5661 6.76944 57.9213 7.33299 58.2787 7.90009L59.1247 7.36698C58.7673 6.79971 58.4122 6.2364 58.0596 5.67673L57.2135 6.20982ZM59.3574 9.61269C59.7127 10.1771 60.07 10.745 60.4291 11.3165L61.2758 10.7844C60.9165 10.2127 60.5591 9.64449 60.2037 9.07993L59.3574 9.61269ZM61.4902 13.0073C61.8456 13.5743 62.2024 14.1447 62.5607 14.7184L63.4089 14.1887C63.0503 13.6145 62.6932 13.0437 62.3376 12.4763L61.4902 13.0073ZM63.6295 16.4334C63.9787 16.9949 64.3289 17.5595 64.6802 18.1272L65.5306 17.6011C65.1789 17.0327 64.8282 16.4675 64.4787 15.9054L63.6295 16.4334ZM65.7366 19.8394C66.0896 20.4132 66.4434 20.9901 66.7979 21.5699L67.6511 21.0484C67.2961 20.4677 66.9418 19.89 66.5884 19.3154L65.7366 19.8394ZM67.8335 23.27C68.1791 23.8392 68.5251 24.4113 68.8714 24.9862L69.728 24.4702C69.381 23.8943 69.0345 23.3212 68.6883 22.7511L67.8335 23.27ZM69.9111 26.7192C70.2529 27.2914 70.5949 27.8663 70.9369 28.4438L71.7973 27.9343C71.4547 27.3556 71.112 26.7796 70.7695 26.2063L69.9111 26.7192ZM71.9523 30.1668C72.2907 30.7437 72.629 31.3233 72.967 31.9054L73.8318 31.4032C73.493 30.8198 73.154 30.239 72.8149 29.6608L71.9523 30.1668ZM73.9779 33.6554C74.3082 34.2304 74.6381 34.8079 74.9675 35.3878L75.837 34.8939C75.5068 34.3125 75.1761 33.7337 74.845 33.1573L73.9779 33.6554ZM75.9541 37.1347C76.2824 37.7195 76.61 38.3066 76.9368 38.8961L77.8114 38.4112C77.4837 37.8201 77.1552 37.2315 76.8261 36.6452L75.9541 37.1347ZM77.9053 40.6543C78.2247 41.238 78.5432 41.824 78.8607 42.4122L79.7407 41.9372C79.4223 41.3473 79.1028 40.7596 78.7825 40.1743L77.9053 40.6543ZM79.8102 44.1837C80.1256 44.7765 80.4399 45.3714 80.753 45.9686L81.6387 45.5043C81.3247 44.9053 81.0094 44.3085 80.693 43.714L79.8102 44.1837ZM81.6753 47.7416C81.9811 48.3342 82.2856 48.9289 82.5887 49.5257L83.4803 49.0729C83.1762 48.4741 82.8707 47.8775 82.5639 47.283L81.6753 47.7416ZM83.4934 51.3224C83.7925 51.9215 84.09 52.5226 84.3859 53.1258L85.2837 52.6854C84.9868 52.0801 84.6882 51.4769 84.3881 50.8758L83.4934 51.3224ZM85.2602 54.9246C85.55 55.5262 85.8379 56.1298 86.1241 56.7354L87.0282 56.3082C86.741 55.7003 86.452 55.0945 86.1612 54.4907L85.2602 54.9246ZM86.9767 58.5581C87.2574 59.1642 87.5361 59.7722 87.8128 60.3821L88.7235 59.9691C88.4457 59.3567 88.1659 58.7463 87.8841 58.1379L86.9767 58.5581ZM88.6325 62.2089C88.9036 62.8197 89.1726 63.4324 89.4393 64.0469L90.3566 63.6488C90.0888 63.0317 89.8187 62.4165 89.5465 61.8032L88.6325 62.2089ZM90.2325 65.8962C90.4927 66.5102 90.7507 67.126 91.0061 67.7436L91.9302 67.3614C91.6736 66.7411 91.4146 66.1225 91.1532 65.5059L90.2325 65.8962ZM91.7636 69.5984C92.0136 70.2184 92.2611 70.8402 92.5059 71.4638L93.4367 71.0984C93.1908 70.4719 92.9422 69.8473 92.6911 69.2244L91.7636 69.5984ZM93.2322 73.3398C93.4698 73.9623 93.7047 74.5864 93.9367 75.2122L94.8743 74.8646C94.6411 74.2357 94.4051 73.6086 94.1664 72.9832L93.2322 73.3398ZM94.6243 77.0947C94.8505 77.7239 95.0739 78.3548 95.2942 78.9873L96.2386 78.6584C96.0171 78.0227 95.7927 77.3886 95.5652 76.7563L94.6243 77.0947ZM95.9453 80.8878C96.1581 81.5194 96.3677 82.1527 96.5742 82.7875L97.5252 82.4783C97.3176 81.84 97.1068 81.2035 96.893 80.5686L95.9453 80.8878ZM97.1839 84.6969C97.3838 85.335 97.5805 85.9747 97.7738 86.6159L98.7312 86.3273C98.5369 85.6826 98.3392 85.0394 98.1381 84.3979L97.1839 84.6969ZM98.3421 88.5404C98.5273 89.1807 98.7091 89.8226 98.8873 90.466L99.851 90.1991C99.6718 89.552 99.489 88.9065 99.3028 88.2625L98.3421 88.5404ZM99.4111 92.4008C99.5821 93.0472 99.7494 93.6951 99.913 94.3445L100.883 94.1003C100.718 93.447 100.55 92.7953 100.378 92.145L99.4111 92.4008ZM100.391 96.2916C100.546 96.9398 100.697 97.5895 100.844 98.2407L101.82 98.0201C101.672 97.3649 101.519 96.7113 101.364 96.0591L100.391 96.2916ZM101.274 100.198C101.414 100.852 101.549 101.508 101.68 102.165L102.661 101.969C102.529 101.308 102.393 100.648 102.252 99.9899L101.274 100.198ZM102.06 104.131C102.182 104.786 102.3 105.443 102.414 106.1L103.399 105.93C103.285 105.268 103.166 104.607 103.043 103.948L102.06 104.131ZM102.742 108.078C102.848 108.738 102.948 109.4 103.045 110.063L104.034 109.919C103.937 109.251 103.836 108.585 103.73 107.92L102.742 108.078ZM103.319 112.046C103.406 112.706 103.488 113.367 103.566 114.03L104.559 113.914C104.481 113.246 104.398 112.58 104.311 111.915L103.319 112.046ZM103.786 116.022C103.854 116.688 103.918 117.354 103.977 118.022L104.973 117.934C104.914 117.261 104.849 116.59 104.78 115.92L103.786 116.022ZM104.14 120.015C104.189 120.679 104.233 121.344 104.273 122.01L105.271 121.95C105.231 121.279 105.186 120.61 105.137 119.941L104.14 120.015ZM104.377 124.011C104.407 124.679 104.432 125.349 104.452 126.02L105.452 125.99C105.432 125.314 105.407 124.64 105.376 123.966L104.377 124.011ZM104.497 128.018C104.507 128.683 104.512 129.348 104.512 130.015L105.512 130.015C105.512 129.344 105.507 128.673 105.497 128.003L104.497 128.018ZM104.496 132.019C104.486 132.688 104.47 133.358 104.45 134.03L105.449 134.061C105.47 133.384 105.486 132.709 105.496 132.035L104.496 132.019ZM104.373 136.027C104.342 136.69 104.306 137.354 104.265 138.019L105.263 138.081C105.305 137.411 105.341 136.741 105.372 136.073L104.373 136.027ZM104.126 140.018C104.074 140.685 104.017 141.353 103.955 142.023L104.951 142.115C105.014 141.441 105.071 140.767 105.123 140.095L104.126 140.018ZM103.754 144.013C103.682 144.672 103.605 145.332 103.522 145.992L104.515 146.116C104.598 145.45 104.676 144.785 104.748 144.122L103.754 144.013ZM103.259 147.977C103.165 148.639 103.067 149.303 102.962 149.967L103.95 150.122C104.055 149.452 104.155 148.784 104.249 148.116L103.259 147.977ZM102.636 151.947C102.523 152.598 102.405 153.25 102.281 153.903L103.264 154.089C103.388 153.431 103.507 152.774 103.621 152.117L102.636 151.947ZM101.894 155.865C101.759 156.519 101.619 157.175 101.474 157.831L102.45 158.048C102.597 157.386 102.738 156.726 102.874 156.066L101.894 155.865ZM101.021 159.799C100.868 160.44 100.71 161.081 100.547 161.723L101.516 161.97C101.68 161.323 101.84 160.677 101.994 160.031L101.021 159.799ZM100.039 163.653C99.865 164.296 99.685 164.941 99.4994 165.586L100.46 165.863C100.647 165.212 100.829 164.563 101.005 163.914L100.039 163.653ZM98.9259 167.524C98.7331 168.158 98.5349 168.792 98.3312 169.427L99.2834 169.732C99.4886 169.093 99.6883 168.454 99.8826 167.815L98.9259 167.524ZM97.71 171.315C97.4975 171.945 97.2796 172.575 97.0562 173.207L97.9989 173.54C98.224 172.904 98.4435 172.269 98.6576 171.634L97.71 171.315ZM96.3695 175.103C96.1361 175.732 95.8973 176.362 95.6529 176.993L96.5853 177.354C96.8315 176.719 97.0721 176.084 97.3071 175.45L96.3695 175.103ZM94.9254 178.831C94.6777 179.445 94.4246 180.059 94.1662 180.673L95.088 181.061C95.3482 180.442 95.6031 179.824 95.8527 179.206L94.9254 178.831ZM93.3747 182.519C93.1055 183.134 92.8308 183.751 92.5507 184.368L93.4612 184.781C93.7433 184.16 94.0198 183.539 94.2909 182.919L93.3747 182.519ZM91.7088 186.188C91.4289 186.783 91.1439 187.378 90.8537 187.973L91.7526 188.411C92.0448 187.812 92.3317 187.213 92.6136 186.614L91.7088 186.188ZM89.9675 189.761C89.6669 190.358 89.3611 190.955 89.05 191.552L89.937 192.014C90.2501 191.413 90.558 190.812 90.8606 190.211L89.9675 189.761ZM88.1009 193.346C87.7869 193.93 87.4678 194.515 87.1435 195.1L88.0182 195.585C88.3445 194.996 88.6657 194.407 88.9817 193.819L88.1009 193.346ZM86.1735 196.825C85.8453 197.4 85.512 197.976 85.1737 198.552L86.036 199.059C86.3764 198.479 86.7118 197.9 87.0421 197.321L86.1735 196.825ZM84.1436 200.283C83.7952 200.86 83.4417 201.437 83.0831 202.015L83.9328 202.542C84.2936 201.961 84.6492 201.38 84.9997 200.799L84.1436 200.283ZM82.0159 203.712C81.6637 204.265 81.3067 204.819 80.945 205.372L81.7822 205.919C82.146 205.362 82.505 204.806 82.8593 204.25L82.0159 203.712ZM79.8456 207.034C79.4744 207.588 79.0984 208.143 78.7175 208.698L79.542 209.264C79.925 208.706 80.3032 208.148 80.6765 207.591L79.8456 207.034ZM77.5604 210.364C77.1728 210.916 76.7805 211.468 76.3833 212.02L77.1951 212.604C77.5944 212.049 77.9889 211.494 78.3785 210.939L77.5604 210.364ZM75.2258 213.611C74.8355 214.142 74.4407 214.673 74.0414 215.204L74.8408 215.805C75.2421 215.271 75.639 214.737 76.0314 214.203L75.2258 213.611ZM72.8298 216.799C72.4214 217.331 72.0084 217.863 71.5909 218.395L72.3778 219.012C72.7974 218.477 73.2125 217.942 73.6229 217.408L72.8298 216.799ZM70.3244 219.994C69.9098 220.511 69.4908 221.029 69.0674 221.548L69.8419 222.18C70.2673 221.66 70.6884 221.139 71.1051 220.619L70.3244 219.994ZM67.812 223.07C67.3893 223.578 66.9624 224.086 66.5312 224.594L67.2937 225.241C67.7269 224.73 68.1558 224.22 68.5805 223.71L67.812 223.07ZM65.2248 226.119C64.7851 226.627 64.3411 227.136 63.8927 227.645L64.6431 228.306C65.0935 227.795 65.5395 227.284 65.9813 226.773L65.2248 226.119ZM62.5346 229.173C62.0938 229.664 61.649 230.156 61.2002 230.647L61.9387 231.321C62.3895 230.828 62.8363 230.334 63.279 229.841L62.5346 229.173ZM59.8634 232.099C59.4138 232.583 58.9603 233.068 58.5028 233.552L59.2299 234.239C59.6893 233.752 60.1447 233.266 60.5962 232.78L59.8634 232.099ZM57.1182 235.006C56.6527 235.491 56.1832 235.976 55.7096 236.462L56.4253 237.16C56.9007 236.673 57.3722 236.186 57.8396 235.699L57.1182 235.006ZM54.2767 237.918C54.0358 238.161 53.7939 238.404 53.551 238.646L54.2581 239.354C54.502 239.11 54.7448 238.866 54.9867 238.622L54.2767 237.918ZM53.551 238.646C53.3077 238.89 53.0654 239.133 52.8241 239.376L53.5341 240.081C53.7745 239.838 54.0158 239.596 54.2581 239.354L53.551 238.646ZM51.3875 240.837C50.9125 241.324 50.4413 241.811 49.9739 242.298L50.6955 242.991C51.161 242.505 51.6302 242.02 52.1033 241.535L51.3875 240.837ZM48.5831 243.76C48.1233 244.248 47.6673 244.736 47.2151 245.223L47.9484 245.903C48.3987 245.418 48.8528 244.932 49.3106 244.447L48.5831 243.76ZM45.8697 246.687C45.419 247.182 44.972 247.676 44.5289 248.171L45.2739 248.838C45.7151 248.346 46.16 247.853 46.6088 247.36L45.8697 246.687ZM43.168 249.705C42.7184 250.216 42.2729 250.728 41.8315 251.239L42.5885 251.893C43.028 251.383 43.4715 250.874 43.919 250.365L43.168 249.705ZM40.5192 252.774C40.0858 253.286 39.6564 253.798 39.231 254.31L40.0001 254.949C40.4235 254.439 40.8509 253.93 41.2823 253.421L40.5192 252.774ZM37.9668 255.846C37.5426 256.366 37.1225 256.886 36.7065 257.407L37.4877 258.031C37.9016 257.513 38.3197 256.995 38.7419 256.477L37.9668 255.846ZM35.4359 259.013C35.0166 259.548 34.6017 260.083 34.1909 260.619L34.9844 261.227C35.3931 260.695 35.806 260.162 36.2232 259.629L35.4359 259.013ZM32.9716 262.225C32.5693 262.761 32.1714 263.296 31.7776 263.832L32.5833 264.424C32.975 263.892 33.371 263.359 33.7712 262.826L32.9716 262.225ZM30.6088 265.439C30.2121 265.99 29.8199 266.541 29.432 267.093L30.2499 267.668C30.6357 267.12 31.0259 266.571 31.4205 266.023L30.6088 265.439ZM28.2667 268.768C27.8827 269.327 27.5033 269.885 27.1283 270.444L27.9585 271.001C28.3314 270.446 28.7089 269.89 29.0908 269.335L28.2667 268.768ZM26.0166 272.119C25.6504 272.678 25.2887 273.236 24.9314 273.794L25.7737 274.334C26.129 273.778 26.4887 273.223 26.8528 272.668L26.0166 272.119ZM23.8624 275.486C23.5 276.066 23.1422 276.647 22.7892 277.228L23.6436 277.747C23.9946 277.17 24.3503 276.593 24.7107 276.015L23.8624 275.486ZM21.7441 278.969C21.4004 279.549 21.0613 280.129 20.7269 280.71L21.5933 281.209C21.9257 280.632 22.2628 280.055 22.6045 279.478L21.7441 278.969ZM19.7374 282.45C19.412 283.03 19.0913 283.61 18.775 284.19L19.653 284.669C19.9673 284.092 20.2862 283.516 20.6096 282.939L19.7374 282.45ZM17.8062 285.993C17.4881 286.594 17.1749 287.195 16.8665 287.796L17.7561 288.252C18.0626 287.655 18.3739 287.058 18.69 286.461L17.8062 285.993ZM15.9557 289.597C15.6569 290.197 15.3629 290.797 15.0736 291.397L15.9743 291.832C16.2618 291.236 16.554 290.639 16.8509 290.043L15.9557 289.597ZM14.22 293.196C13.9309 293.816 13.6469 294.435 13.3679 295.053L14.2795 295.465C14.5567 294.85 14.8389 294.235 15.1261 293.619L14.22 293.196ZM12.5449 296.911C12.2755 297.53 12.011 298.148 11.7515 298.767L12.6736 299.154C12.9314 298.54 13.1941 297.925 13.4618 297.31L12.5449 296.911ZM10.9876 300.621C10.7372 301.241 10.4916 301.86 10.2509 302.479L11.1829 302.841C11.422 302.226 11.6659 301.611 11.9147 300.996L10.9876 300.621ZM9.52403 304.386C9.28683 305.022 9.0547 305.657 8.82761 306.291L9.76916 306.628C9.99472 305.998 10.2253 305.367 10.4609 304.736L9.52403 304.386ZM8.16137 308.194C7.94428 308.828 7.73219 309.462 7.52502 310.095L8.47545 310.406C8.68119 309.777 8.89184 309.148 9.10744 308.518L8.16137 308.194ZM6.91257 312.012C6.70997 312.662 6.51253 313.311 6.3202 313.96L7.27895 314.244C7.46994 313.6 7.66602 312.955 7.86722 312.31L6.91257 312.012ZM5.75848 315.904C5.57632 316.552 5.39922 317.199 5.22713 317.846L6.19351 318.103C6.3644 317.461 6.54026 316.818 6.72114 316.175L5.75848 315.904ZM4.72585 319.785C4.56084 320.442 4.40097 321.099 4.24618 321.755L5.21947 321.985C5.37316 321.333 5.53191 320.681 5.69575 320.029L4.72585 319.785ZM3.79448 323.734C3.64903 324.393 3.50866 325.051 3.37334 325.709L4.35282 325.91C4.48718 325.257 4.62655 324.604 4.77098 323.949L3.79448 323.734ZM2.98242 327.68C2.85648 328.34 2.73557 328.999 2.61964 329.658L3.6045 329.831C3.7196 329.177 3.83964 328.523 3.96469 327.868L2.98242 327.68ZM2.28186 331.662C2.17436 332.329 2.07194 332.996 1.97454 333.662L2.96401 333.807C3.06072 333.146 3.1624 332.484 3.26913 331.821L2.28186 331.662ZM1.69735 335.658C1.60993 336.322 1.52748 336.986 1.44993 337.649L2.44316 337.765C2.52015 337.107 2.60202 336.448 2.6888 335.788L1.69735 335.658ZM1.22896 339.665C1.16012 340.338 1.09631 341.01 1.03744 341.682L2.03362 341.769C2.09206 341.102 2.15543 340.435 2.22377 339.767L1.22896 339.665ZM0.875679 343.693C0.826676 344.363 0.78257 345.032 0.743301 345.7L1.74158 345.759C1.78057 345.095 1.82436 344.431 1.87301 343.766L0.875679 343.693ZM0.639282 347.716C0.60926 348.392 0.584157 349.067 0.563909 349.742L1.56346 349.772C1.58356 349.102 1.60849 348.432 1.6383 347.761L0.639282 347.716ZM0.517671 351.761C0.507072 352.434 0.501265 353.105 0.500186 353.775L1.50018 353.777C1.50126 353.111 1.50702 352.445 1.51755 351.777L0.517671 351.761ZM0.511148 355.789C0.519595 356.466 0.532826 357.141 0.550773 357.816L1.55042 357.789C1.5326 357.119 1.51946 356.448 1.51107 355.776L0.511148 355.789ZM0.618698 359.836C0.646012 360.508 0.677978 361.179 0.714528 361.849L1.71304 361.795C1.67674 361.129 1.645 360.463 1.61787 359.795L0.618698 359.836ZM0.837891 363.857C0.88403 364.532 0.934784 365.205 0.990084 365.878L1.98672 365.796C1.93179 365.128 1.88139 364.459 1.83556 363.788L0.837891 363.857ZM1.16956 367.892C1.23389 368.562 1.30269 369.23 1.37591 369.898L2.36995 369.789C2.29722 369.126 2.22888 368.462 2.16498 367.796L1.16956 367.892ZM1.60872 371.897C1.69132 372.567 1.77833 373.236 1.86968 373.904L2.86044 373.768C2.7697 373.105 2.68326 372.44 2.60121 371.775L1.60872 371.897ZM2.1571 375.905C2.25721 376.571 2.3616 377.235 2.47021 377.898L3.45706 377.737C3.34915 377.078 3.24544 376.418 3.14598 375.756L2.1571 375.905ZM2.80859 379.883C2.92622 380.547 3.04803 381.21 3.17397 381.871L4.15631 381.684C4.03117 381.027 3.91014 380.369 3.79327 379.709L2.80859 379.883ZM3.56499 383.855C3.69943 384.515 3.83793 385.173 3.98042 385.83L4.95769 385.618C4.81608 384.965 4.67845 384.311 4.54486 383.655L3.56499 383.855ZM4.41981 387.796C4.57089 388.452 4.72594 389.108 4.88486 389.761L5.85655 389.525C5.69859 388.875 5.5445 388.224 5.39435 387.572L4.41981 387.796ZM5.37469 391.723C5.54183 392.375 5.7128 393.026 5.88753 393.675L6.85315 393.415C6.67946 392.77 6.50952 392.123 6.3434 391.474L5.37469 391.723ZM6.42295 395.617C6.60583 396.265 6.79243 396.912 6.98267 397.556L7.94179 397.273C7.75267 396.632 7.56717 395.99 7.38537 395.345L6.42295 395.617ZM7.56625 399.492C7.76439 400.136 7.96613 400.777 8.17139 401.417L9.12362 401.112C8.91954 400.476 8.71896 399.838 8.52197 399.198L7.56625 399.492ZM8.79764 403.332C9.01062 403.971 9.22708 404.608 9.44692 405.243L10.3919 404.916C10.1733 404.284 9.95806 403.651 9.74629 403.016L8.79764 403.332ZM10.1191 407.15C10.3466 407.783 10.5774 408.415 10.8114 409.045L11.7488 408.697C11.5161 408.071 11.2865 407.442 11.0604 406.812L10.1191 407.15ZM11.5233 410.929C11.7647 411.558 12.0094 412.184 12.2571 412.809L13.1867 412.44C12.9402 411.819 12.6969 411.196 12.4568 410.571L11.5233 410.929ZM13.013 414.684C13.268 415.308 13.5262 415.929 13.7873 416.548L14.7087 416.159C14.4489 415.543 14.1921 414.926 13.9384 414.306L13.013 414.684ZM14.5797 418.399C14.848 419.016 15.1192 419.632 15.3933 420.245L16.3063 419.837C16.0336 419.227 15.7638 418.615 15.4969 418L14.5797 418.399ZM16.2279 422.087C16.509 422.699 16.7929 423.309 17.0795 423.916L17.9839 423.49C17.6987 422.885 17.4162 422.279 17.1366 421.67L16.2279 422.087ZM17.9475 425.732C18.2411 426.338 18.5375 426.942 18.8364 427.544L19.732 427.099C19.4345 426.5 19.1397 425.899 18.8475 425.296L17.9475 425.732ZM19.7452 429.351C20.0508 429.951 20.3588 430.548 20.6694 431.144L21.5559 430.681C21.2469 430.089 20.9404 429.494 20.6363 428.897L19.7452 429.351ZM21.6083 432.922C21.9261 433.517 22.2463 434.109 22.5688 434.699L23.4462 434.219C23.1252 433.632 22.8066 433.043 22.4903 432.451L21.6083 432.922ZM23.5475 436.469C23.8761 437.056 24.2069 437.641 24.5399 438.224L25.408 437.727C25.0765 437.148 24.7473 436.565 24.4203 435.981L23.5475 436.469ZM25.5453 439.963C25.8862 440.546 26.2293 441.127 26.5744 441.705L27.433 441.192C27.0895 440.617 26.748 440.039 26.4087 439.458L25.5453 439.963ZM27.6189 443.436C27.9691 444.011 28.3213 444.582 28.6753 445.151L29.5243 444.623C29.1719 444.056 28.8213 443.487 28.4727 442.916L27.6189 443.436ZM29.7431 446.849C30.1064 447.421 30.4716 447.99 30.8385 448.557L31.6777 448.013C31.3125 447.449 30.9489 446.883 30.5873 446.313L29.7431 446.849ZM31.9451 450.247C32.3157 450.808 32.6879 451.366 33.0617 451.92L33.891 451.362C33.5188 450.809 33.1482 450.254 32.7793 449.696L31.9451 450.247ZM34.1924 453.582C34.5763 454.141 34.9618 454.697 35.3487 455.249L36.1678 454.676C35.7826 454.126 35.3989 453.572 35.0167 453.016L34.1924 453.582ZM36.5135 456.897C36.9032 457.444 37.2942 457.987 37.6865 458.526L38.4954 457.938C38.1049 457.401 37.7155 456.86 37.3276 456.317L36.5135 456.897ZM38.8807 460.154C39.2839 460.699 39.6882 461.24 40.0937 461.777L40.8921 461.175C40.4884 460.64 40.0858 460.101 39.6844 459.559L38.8807 460.154ZM41.3132 463.38C41.7208 463.911 42.1293 464.438 42.5387 464.961L43.3265 464.346C42.9189 463.824 42.5121 463.299 42.1063 462.771L41.3132 463.38ZM43.7981 466.558C44.2194 467.087 44.6414 467.612 45.0642 468.134L45.8411 467.504C45.4201 466.985 44.9999 466.462 44.5804 465.935L43.7981 466.558ZM46.3346 469.687C46.7637 470.207 47.1935 470.723 47.6238 471.235L48.3894 470.592C47.9611 470.082 47.5332 469.568 47.1059 469.05L46.3346 469.687ZM48.9368 472.784C49.3749 473.296 49.8134 473.804 50.2521 474.308L51.0063 473.652C50.5695 473.15 50.1329 472.644 49.6967 472.134L48.9368 472.784ZM51.5691 475.807C52.0225 476.319 52.4761 476.826 52.9296 477.328L53.6719 476.658C53.2204 476.158 52.7688 475.653 52.3175 475.144L51.5691 475.807ZM54.2901 478.821C54.7436 479.315 55.1969 479.803 55.6499 480.287L56.3799 479.604C55.9289 479.122 55.4777 478.636 55.0263 478.145L54.2901 478.821ZM57.043 481.761C57.5121 482.253 57.9808 482.74 58.449 483.221L59.166 482.524C58.7001 482.045 58.2335 481.561 57.7666 481.071L57.043 481.761ZM59.8515 484.651C60.0848 484.886 60.318 485.121 60.551 485.354L61.2581 484.646C61.0263 484.415 60.7942 484.181 60.5619 483.947L59.8515 484.651ZM60.551 485.354C60.7799 485.582 61.0097 485.813 61.2402 486.045L61.9501 485.341C61.7187 485.108 61.488 484.876 61.2581 484.646L60.551 485.354ZM62.6325 487.46C63.0996 487.938 63.5697 488.423 64.0427 488.915L64.7633 488.222C64.2887 487.728 63.8168 487.241 63.3479 486.761L62.6325 487.46ZM65.447 490.386C65.8968 490.86 66.3489 491.34 66.8033 491.826L67.5337 491.143C67.0778 490.656 66.6241 490.174 66.1728 489.698L65.447 490.386ZM68.1728 493.301C68.6314 493.798 69.092 494.3 69.5547 494.809L70.2941 494.135C69.83 493.626 69.3679 493.121 68.9077 492.623L68.1728 493.301ZM70.8885 496.283C71.3306 496.775 71.7743 497.271 72.2195 497.773L72.9673 497.109C72.5207 496.606 72.0756 496.108 71.6322 495.614L70.8885 496.283ZM73.5596 499.291C74.0037 499.797 74.4493 500.308 74.8961 500.824L75.6517 500.169C75.2036 499.652 74.7568 499.139 74.3113 498.632L73.5596 499.291ZM76.1911 502.326C76.6239 502.832 77.0577 503.341 77.4925 503.854L78.2555 503.208C77.8195 502.693 77.3845 502.182 76.9505 501.676L76.1911 502.326ZM78.7997 505.406C79.2296 505.919 79.6604 506.437 80.0919 506.958L80.8621 506.32C80.4294 505.797 79.9975 505.279 79.5664 504.764L78.7997 505.406ZM81.3577 508.495C81.7802 509.01 82.2034 509.53 82.6272 510.053L83.4042 509.424C82.9793 508.899 82.555 508.378 82.1313 507.861L81.3577 508.495ZM83.8999 511.633C84.3183 512.155 84.7371 512.68 85.1563 513.209L85.9399 512.588C85.5197 512.058 85.0997 511.531 84.6802 511.007L83.8999 511.633ZM86.3911 514.775C86.803 515.3 87.2152 515.829 87.6275 516.36L88.4175 515.747C88.0042 515.214 87.591 514.684 87.178 514.158L86.3911 514.775ZM88.8649 517.963C89.2733 518.495 89.6817 519.03 90.0902 519.568L90.8866 518.963C90.4771 518.424 90.0676 517.888 89.6581 517.354L88.8649 517.963ZM91.2931 521.16C91.694 521.694 92.0949 522.23 92.4956 522.769L93.2981 522.172C92.8964 521.632 92.4945 521.095 92.0925 520.56L91.2931 521.16ZM93.6973 524.394C94.0962 524.936 94.4949 525.481 94.8934 526.029L95.7019 525.441C95.3025 524.892 94.9028 524.345 94.5028 523.802L93.6973 524.394ZM96.0635 527.646C96.4532 528.187 96.8426 528.731 97.2316 529.277L98.0461 528.697C97.6562 528.149 97.2658 527.604 96.8751 527.061L96.0635 527.646ZM98.3973 530.923C98.7854 531.474 99.173 532.027 99.5601 532.582L100.381 532.011C99.9925 531.454 99.6039 530.899 99.2148 530.347L98.3973 530.923ZM100.7 534.228C101.079 534.777 101.457 535.328 101.834 535.881L102.66 535.318C102.282 534.763 101.903 534.211 101.524 533.66L100.7 534.228ZM102.963 537.547C103.339 538.105 103.714 538.664 104.088 539.226L104.92 538.671C104.545 538.108 104.169 537.547 103.792 536.988L102.963 537.547ZM105.201 540.905C105.567 541.461 105.933 542.02 106.298 542.58L107.136 542.034C106.77 541.472 106.403 540.912 106.036 540.354L105.201 540.905ZM107.391 544.267C107.754 544.831 108.116 545.397 108.478 545.965L109.321 545.428C108.959 544.859 108.596 544.291 108.232 543.725L107.391 544.267ZM109.558 547.673C109.913 548.238 110.267 548.804 110.62 549.372L111.469 548.844C111.116 548.275 110.761 547.707 110.405 547.141L109.558 547.673ZM111.675 551.08C112.025 551.651 112.375 552.224 112.723 552.798L113.578 552.28C113.229 551.704 112.878 551.13 112.527 550.557L111.675 551.08ZM113.763 554.526C114.107 555.101 114.45 555.678 114.792 556.256L115.653 555.747C115.31 555.167 114.966 554.589 114.621 554.012L113.763 554.526ZM115.808 557.987C116.145 558.565 116.481 559.145 116.816 559.726L117.682 559.227C117.347 558.644 117.01 558.063 116.672 557.483L115.808 557.987ZM117.815 561.474C118.146 562.058 118.477 562.643 118.805 563.23L119.678 562.741C119.348 562.153 119.017 561.566 118.684 560.98L117.815 561.474ZM119.781 564.985C120.105 565.571 120.427 566.158 120.748 566.747L121.626 566.269C121.304 565.679 120.981 565.089 120.657 564.502L119.781 564.985ZM121.704 568.516C122.021 569.107 122.336 569.7 122.65 570.293L123.534 569.826C123.219 569.23 122.903 568.636 122.585 568.044L121.704 568.516ZM123.585 572.075C123.894 572.669 124.202 573.265 124.507 573.861L125.397 573.405C125.091 572.807 124.782 572.209 124.472 571.613L123.585 572.075ZM125.419 575.653C125.721 576.252 126.02 576.851 126.318 577.452L127.214 577.007C126.915 576.405 126.614 575.803 126.311 575.203L125.419 575.653ZM127.207 579.256C127.501 579.859 127.793 580.462 128.083 581.067L128.984 580.634C128.693 580.028 128.4 579.422 128.105 578.818L127.207 579.256ZM128.946 582.883C129.232 583.49 129.516 584.097 129.797 584.705L130.705 584.285C130.422 583.675 130.138 583.066 129.851 582.457L128.946 582.883ZM130.635 586.532C130.912 587.142 131.187 587.753 131.459 588.365L132.373 587.958C132.099 587.344 131.823 586.731 131.545 586.119L130.635 586.532ZM132.272 590.206C132.541 590.821 132.807 591.437 133.071 592.053L133.99 591.659C133.725 591.041 133.458 590.423 133.188 589.806L132.272 590.206ZM133.854 593.903C134.113 594.521 134.37 595.139 134.623 595.758L135.549 595.378C135.294 594.757 135.037 594.137 134.777 593.517L133.854 593.903ZM135.379 597.621C135.629 598.245 135.876 598.869 136.121 599.493L137.052 599.129C136.807 598.502 136.558 597.875 136.307 597.249L135.379 597.621ZM136.847 601.369C137.086 601.994 137.322 602.62 137.556 603.247L138.493 602.897C138.258 602.268 138.021 601.64 137.781 601.011L136.847 601.369ZM138.249 605.128C138.478 605.76 138.705 606.393 138.929 607.026L139.872 606.692C139.647 606.057 139.419 605.421 139.189 604.787L138.249 605.128ZM139.591 608.926C139.809 609.56 140.024 610.194 140.236 610.829L141.184 610.512C140.972 609.875 140.756 609.238 140.537 608.601L139.591 608.926ZM140.862 612.733C141.068 613.371 141.271 614.009 141.471 614.648L142.426 614.349C142.225 613.707 142.021 613.066 141.813 612.425L140.862 612.733ZM142.065 616.573C142.259 617.216 142.45 617.858 142.638 618.501L143.598 618.22C143.409 617.574 143.217 616.929 143.022 616.284L142.065 616.573ZM143.191 620.429C143.372 621.072 143.55 621.715 143.724 622.358L144.689 622.096C144.514 621.45 144.336 620.804 144.154 620.158L143.191 620.429ZM144.241 624.307C144.409 624.957 144.574 625.608 144.736 626.258L145.706 626.017C145.544 625.363 145.378 624.71 145.209 624.056L144.241 624.307ZM145.209 628.209C145.363 628.859 145.513 629.51 145.659 630.16L146.635 629.94C146.488 629.286 146.337 628.633 146.182 627.979L145.209 628.209ZM146.089 632.122C146.23 632.78 146.366 633.438 146.498 634.095L147.478 633.898C147.345 633.237 147.208 632.575 147.067 631.914L146.089 632.122ZM146.882 636.067C147.007 636.724 147.126 637.381 147.242 638.038L148.227 637.864C148.111 637.204 147.99 636.543 147.865 635.882L146.882 636.067ZM147.577 640.01C147.686 640.675 147.79 641.339 147.89 642.003L148.879 641.854C148.779 641.186 148.674 640.518 148.564 639.849L147.577 640.01ZM148.177 643.993C148.268 644.656 148.354 645.319 148.436 645.981L149.429 645.858C149.346 645.191 149.259 644.524 149.168 643.857L148.177 643.993ZM148.669 647.966C148.742 648.634 148.811 649.301 148.875 649.968L149.871 649.873C149.806 649.201 149.737 648.529 149.663 647.856L148.669 647.966ZM149.053 651.972C149.108 652.64 149.157 653.306 149.202 653.972L150.2 653.905C150.155 653.234 150.105 652.563 150.05 651.891L149.053 651.972ZM149.321 655.969C149.356 656.638 149.386 657.306 149.411 657.974L150.41 657.936C150.386 657.264 150.355 656.591 150.32 655.917L149.321 655.969ZM149.47 659.985C149.485 660.654 149.494 661.323 149.498 661.991L150.498 661.985C150.494 661.312 150.484 660.638 150.47 659.963L149.47 659.985ZM149.493 663.992C149.486 664.661 149.473 665.328 149.455 665.994L150.455 666.021C150.473 665.349 150.486 664.676 150.493 664.003L149.493 663.992ZM149.384 668.004C149.355 668.673 149.32 669.341 149.279 670.008L150.277 670.069C150.318 669.396 150.354 668.723 150.383 668.048L149.384 668.004ZM149.14 672.005C149.087 672.671 149.029 673.335 148.965 673.998L149.96 674.094C150.025 673.425 150.084 672.755 150.136 672.084L149.14 672.005ZM148.753 675.996C148.676 676.661 148.594 677.324 148.505 677.987L149.496 678.119C149.586 677.451 149.669 676.781 149.746 676.11L148.753 675.996ZM148.22 679.969C148.119 680.629 148.012 681.287 147.898 681.944L148.883 682.115C148.998 681.451 149.107 680.787 149.209 680.121L148.22 679.969ZM147.537 683.917C147.41 684.573 147.277 685.228 147.138 685.881L148.115 686.09C148.256 685.43 148.391 684.769 148.519 684.107L147.537 683.917ZM146.699 687.836C146.547 688.487 146.387 689.135 146.221 689.782L147.19 690.031C147.358 689.377 147.519 688.722 147.673 688.065L146.699 687.836ZM145.705 691.716C145.526 692.359 145.34 693 145.148 693.639L146.106 693.927C146.3 693.281 146.487 692.633 146.668 691.984L145.705 691.716ZM144.551 695.552C144.345 696.188 144.132 696.822 143.912 697.455L144.857 697.783C145.079 697.144 145.294 696.503 145.502 695.86L144.551 695.552ZM143.236 699.336C143.004 699.96 142.766 700.582 142.52 701.202L143.45 701.57C143.698 700.944 143.939 700.315 144.174 699.684L143.236 699.336ZM141.763 703.057C141.503 703.674 141.236 704.288 140.963 704.901L141.876 705.309C142.152 704.69 142.422 704.068 142.684 703.445L141.763 703.057ZM140.127 706.718C139.843 707.318 139.552 707.916 139.255 708.512L140.149 708.959C140.45 708.356 140.744 707.752 141.031 707.146L140.127 706.718ZM138.34 710.293C138.028 710.885 137.709 711.474 137.383 712.062L138.257 712.547C138.587 711.953 138.91 711.357 139.225 710.759L138.34 710.293ZM136.389 713.807C136.056 714.377 135.716 714.946 135.369 715.512L136.221 716.035C136.572 715.462 136.916 714.888 137.253 714.311L136.389 713.807ZM134.306 717.205C133.945 717.768 133.577 718.328 133.201 718.885L134.031 719.444C134.41 718.88 134.783 718.314 135.148 717.746L134.306 717.205ZM132.053 720.553C131.674 721.09 131.289 721.626 130.896 722.16L131.702 722.752C132.098 722.213 132.488 721.672 132.871 721.128L132.053 720.553ZM129.699 723.752C129.293 724.281 128.881 724.807 128.461 725.331L129.241 725.956C129.665 725.427 130.082 724.895 130.493 724.361L129.699 723.752ZM127.18 726.898C126.963 727.158 126.745 727.417 126.524 727.676L127.285 728.324C127.508 728.063 127.729 727.801 127.948 727.538L127.18 726.898ZM126.524 727.676C126.305 727.933 126.086 728.191 125.868 728.448L126.631 729.095C126.848 728.838 127.066 728.581 127.285 728.324L126.524 727.676ZM124.567 729.992C124.136 730.507 123.708 731.021 123.282 731.535L124.052 732.173C124.477 731.66 124.904 731.147 125.334 730.634L124.567 729.992ZM122.013 733.077C121.592 733.591 121.174 734.105 120.759 734.618L121.537 735.247C121.951 734.735 122.367 734.223 122.787 733.711L122.013 733.077ZM119.521 736.158C119.107 736.676 118.696 737.193 118.287 737.711L119.072 738.331C119.479 737.815 119.889 737.299 120.302 736.782L119.521 736.158ZM117.039 739.301C116.626 739.831 116.215 740.36 115.808 740.89L116.6 741.5C117.006 740.972 117.416 740.444 117.828 739.916L117.039 739.301ZM114.593 742.477C114.19 743.006 113.791 743.534 113.394 744.063L114.194 744.663C114.589 744.136 114.988 743.609 115.389 743.082L114.593 742.477ZM112.212 745.647C111.817 746.179 111.425 746.711 111.036 747.243L111.843 747.834C112.231 747.304 112.622 746.773 113.015 746.242L112.212 745.647ZM109.848 748.879C109.455 749.423 109.064 749.968 108.677 750.512L109.492 751.092C109.878 750.55 110.267 750.007 110.659 749.464L109.848 748.879ZM107.523 752.144C107.142 752.687 106.763 753.231 106.387 753.774L107.209 754.343C107.584 753.802 107.961 753.26 108.342 752.718L107.523 752.144ZM105.268 755.401C104.892 755.952 104.52 756.501 104.15 757.051L104.98 757.609C105.348 757.062 105.72 756.513 106.094 755.965L105.268 755.401ZM103.029 758.73C102.658 759.29 102.291 759.849 101.926 760.408L102.763 760.954C103.127 760.397 103.493 759.84 103.862 759.283L103.029 758.73ZM100.841 762.082C100.483 762.64 100.127 763.198 99.7749 763.755L100.62 764.289C100.971 763.734 101.325 763.179 101.683 762.623L100.841 762.082ZM98.7267 765.425C98.3708 765.996 98.0181 766.567 97.6685 767.138L98.5212 767.66C98.8695 767.092 99.2209 766.523 99.5755 765.953L98.7267 765.425ZM96.6226 768.859C96.2772 769.433 95.935 770.006 95.596 770.578L96.4564 771.088C96.7941 770.517 97.1351 769.947 97.4792 769.375L96.6226 768.859ZM94.5885 772.294C94.2559 772.866 93.9265 773.437 93.6003 774.007L94.4684 774.504C94.7933 773.935 95.1215 773.367 95.4528 772.797L94.5885 772.294ZM92.6194 775.738C92.2886 776.327 91.9613 776.915 91.6373 777.503L92.5131 777.986C92.8358 777.4 93.1618 776.814 93.4913 776.228L92.6194 775.738ZM90.6756 779.265C90.3584 779.851 90.0446 780.437 89.7341 781.023L90.6176 781.491C90.9268 780.908 91.2393 780.325 91.5552 779.74L90.6756 779.265ZM88.8128 782.777C88.5081 783.364 88.2067 783.949 87.9087 784.534L88.7997 784.988C89.0965 784.405 89.3966 783.822 89.7 783.239L88.8128 782.777ZM86.998 786.341C86.698 786.942 86.4015 787.543 86.1087 788.143L87.0073 788.582C87.299 787.984 87.5941 787.386 87.8929 786.787L86.998 786.341ZM85.2406 789.941C84.9548 790.54 84.6726 791.138 84.3938 791.735L85.3 792.158C85.5775 791.564 85.8585 790.968 86.1431 790.372L85.2406 789.941ZM83.568 793.526C83.2871 794.142 83.01 794.757 82.7366 795.371L83.6503 795.778C83.9224 795.166 84.1983 794.554 84.4779 793.94L83.568 793.526ZM81.9277 797.212C81.6618 797.825 81.3997 798.437 81.1412 799.048L82.0622 799.437C82.3195 798.829 82.5804 798.22 82.8451 797.61L81.9277 797.212ZM80.377 800.879C80.1253 801.49 79.8773 802.1 79.633 802.71L80.5612 803.082C80.8043 802.475 81.0511 801.868 81.3016 801.259L80.377 800.879ZM78.8895 804.591C78.6457 805.217 78.4057 805.842 78.1697 806.467L79.105 806.82C79.3399 806.199 79.5787 805.577 79.8214 804.954L78.8895 804.591ZM77.4733 808.337C77.2451 808.959 77.0208 809.58 76.8003 810.201L77.7426 810.536C77.9619 809.918 78.1851 809.3 78.4122 808.681L77.4733 808.337ZM76.1439 812.079C75.9243 812.717 75.7089 813.355 75.4975 813.992L76.4466 814.307C76.6568 813.673 76.8711 813.039 77.0896 812.404L76.1439 812.079ZM74.8758 815.898C74.6726 816.533 74.4736 817.166 74.2787 817.798L75.2343 818.093C75.4281 817.464 75.6261 816.834 75.8281 816.203L74.8758 815.898ZM73.7061 819.691C73.515 820.335 73.3282 820.978 73.1456 821.62L74.1074 821.894C74.289 821.256 74.4748 820.616 74.6648 819.975L73.7061 819.691ZM72.6057 823.56C72.4301 824.205 72.2588 824.849 72.0917 825.492L73.0596 825.744C73.2256 825.105 73.396 824.464 73.5706 823.823L72.6057 823.56ZM71.6034 827.416C71.4437 828.062 71.2884 828.705 71.1373 829.348L72.1108 829.577C72.2609 828.938 72.4154 828.298 72.5741 827.657L71.6034 827.416ZM70.6869 831.317C70.5413 831.971 70.4002 832.625 70.2636 833.277L71.2423 833.482C71.3781 832.834 71.5183 832.184 71.6631 831.534L70.6869 831.317ZM69.8672 835.228C69.7396 835.877 69.6164 836.524 69.4977 837.17L70.4813 837.351C70.5992 836.709 70.7216 836.066 70.8484 835.421L69.8672 835.228ZM69.1456 839.158C69.0327 839.821 68.9244 840.482 68.8209 841.141L69.8088 841.297C69.9116 840.642 70.0192 839.985 70.1314 839.326L69.1456 839.158ZM68.5243 843.115C68.4301 843.771 68.3406 844.425 68.2557 845.078L69.2474 845.206C69.3317 844.558 69.4206 843.908 69.5141 843.257L68.5243 843.115ZM68.0103 847.072C67.9326 847.741 67.8599 848.407 67.7921 849.072L68.7869 849.174C68.8543 848.514 68.9265 847.851 69.0036 847.188L68.0103 847.072ZM67.6033 851.061C67.5453 851.722 67.4921 852.381 67.4437 853.038L68.441 853.112C68.489 852.459 68.5418 851.805 68.5995 851.149L67.6033 851.061ZM67.3111 855.04C67.2715 855.712 67.237 856.382 67.2076 857.05L68.2066 857.094C68.2358 856.431 68.2701 855.766 68.3094 855.099L67.3111 855.04ZM67.1346 859.047C67.1154 859.711 67.1011 860.372 67.092 861.032L68.0919 861.046C68.101 860.391 68.1151 859.735 68.1342 859.076L67.1346 859.047ZM67.0796 863.04C67.0807 863.712 67.087 864.383 67.0987 865.051L68.0985 865.034C68.087 864.371 68.0807 863.706 68.0796 863.038L67.0796 863.04ZM67.1493 867.048C67.1714 867.711 67.1988 868.372 67.2314 869.031L68.2301 868.981C68.1978 868.328 68.1707 867.673 68.1488 867.015L67.1493 867.048ZM67.3474 871.041C67.3917 871.711 67.4414 872.379 67.4966 873.044L68.4932 872.962C68.4385 872.302 68.3892 871.64 68.3452 870.975L67.3474 871.041ZM67.6783 875.032C67.7444 875.693 67.8159 876.351 67.8928 877.007L68.886 876.89C68.8097 876.24 68.7389 875.588 68.6734 874.932L67.6783 875.032ZM68.1454 879.009C68.2352 879.673 68.3306 880.335 68.4315 880.994L69.42 880.842C69.3199 880.189 69.2254 879.534 69.1364 878.875L68.1454 879.009ZM68.7511 882.961C68.8641 883.62 68.9828 884.276 69.1071 884.928L70.0894 884.741C69.9663 884.094 69.8487 883.445 69.7367 882.792L68.7511 882.961ZM69.5019 886.902C69.6392 887.557 69.7823 888.208 69.931 888.857L70.9057 888.633C70.7584 887.991 70.6167 887.345 70.4806 886.697L69.5019 886.902ZM70.3942 890.793C70.5568 891.445 70.7252 892.094 70.8994 892.739L71.8648 892.479C71.6923 891.839 71.5255 891.197 71.3645 890.551L70.3942 890.793ZM71.4414 894.672C71.6278 895.313 71.8201 895.951 72.0182 896.585L72.9727 896.287C72.7766 895.659 72.5862 895.028 72.4016 894.393L71.4414 894.672ZM72.6325 898.485C72.8456 899.123 73.0647 899.757 73.2897 900.387L74.2315 900.051C74.0088 899.427 73.7919 898.8 73.5809 898.168L72.6325 898.485ZM73.9822 902.267C74.2189 902.89 74.4614 903.509 74.7098 904.124L75.6371 903.749C75.3913 903.141 75.1512 902.528 74.9169 901.911L73.9822 902.267ZM75.4813 905.979C75.7451 906.595 76.0148 907.207 76.2904 907.815L77.2013 907.403C76.9285 906.801 76.6616 906.195 76.4006 905.585L75.4813 905.979ZM77.135 909.628C77.4237 910.231 77.7183 910.829 78.0188 911.424L78.9112 910.973C78.614 910.385 78.3225 909.792 78.0369 909.196L77.135 909.628ZM78.9441 913.207C79.2585 913.797 79.5787 914.383 79.9049 914.964L80.7771 914.475C80.4545 913.9 80.1376 913.32 79.8266 912.737L78.9441 913.207ZM80.9012 916.696C81.2418 917.274 81.5883 917.847 81.9407 918.415L82.7907 917.889C82.4422 917.326 82.0994 916.759 81.7625 916.188L80.9012 916.696ZM83.0157 920.108C83.3799 920.667 83.7499 921.223 84.1257 921.773L84.9516 921.209C84.5799 920.665 84.214 920.116 83.8539 919.562L83.0157 920.108ZM85.2743 923.416C85.6636 923.96 86.0587 924.499 86.4597 925.034L87.2596 924.434C86.8632 923.905 86.4725 923.372 86.0875 922.834L85.2743 923.416ZM87.6797 926.623C88.0923 927.148 88.5106 927.669 88.9347 928.185L89.7071 927.549C89.2878 927.04 88.8741 926.525 88.4661 926.005L87.6797 926.623ZM90.2253 929.719C90.6611 930.225 91.1026 930.727 91.5498 931.223L92.2929 930.554C91.8508 930.063 91.4142 929.567 90.9832 929.066L90.2253 929.719ZM92.9081 932.698C93.3656 933.184 93.8286 933.665 94.2972 934.14L95.0096 933.439C94.5463 932.968 94.0884 932.493 93.636 932.013L92.9081 932.698ZM95.7194 935.552C96.199 936.018 96.684 936.479 97.1745 936.934L97.8549 936.201C97.3699 935.751 96.8903 935.295 96.416 934.835L95.7194 935.552ZM98.657 938.28C99.1556 938.723 99.6596 939.16 100.169 939.593L100.816 938.831C100.312 938.403 99.8141 937.97 99.321 937.532L98.657 938.28ZM101.712 940.875C102.231 941.295 102.755 941.711 103.283 942.122L103.897 941.332C103.373 940.926 102.856 940.515 102.343 940.098L101.712 940.875ZM104.876 943.33C105.412 943.728 105.953 944.12 106.499 944.507L107.077 943.691C106.537 943.308 106.002 942.92 105.472 942.527L104.876 943.33ZM108.152 945.652C108.702 946.025 109.257 946.392 109.817 946.754L110.36 945.914C109.806 945.556 109.257 945.193 108.713 944.824L108.152 945.652ZM111.51 947.822C112.079 948.173 112.652 948.519 113.231 948.859L113.738 947.997C113.165 947.661 112.597 947.319 112.034 946.971L111.51 947.822ZM114.968 949.857C115.547 950.181 116.131 950.501 116.72 950.815L117.19 949.933C116.608 949.622 116.03 949.306 115.457 948.984L114.968 949.857ZM118.499 951.742C119.096 952.045 119.698 952.343 120.304 952.636L120.738 951.735C120.138 951.446 119.543 951.151 118.952 950.85L118.499 951.742ZM122.105 953.484C122.709 953.761 123.318 954.033 123.931 954.3L124.33 953.383C123.723 953.119 123.12 952.849 122.522 952.575L122.105 953.484ZM53.9046 0L54.3081 11.54L64.1002 5.4205L53.9046 0ZM53.9046 239L54.6117 239.707L54.6117 239.707L53.9046 239ZM60.9046 485L61.6117 484.293L61.6117 484.293L60.9046 485ZM126.905 728L127.666 728.649L127.666 728.649L126.905 728ZM126.905 955L119.814 945.886L115.467 956.584L126.905 955ZM54.64 3.05872C54.9968 3.62696 55.3568 4.19935 55.7195 4.77581L57.4122 3.71052C57.0497 3.13449 56.6902 2.56272 56.3338 1.99521L54.64 3.05872ZM56.7905 6.47636C57.1431 7.03596 57.4983 7.59963 57.8556 8.16664L59.5477 7.10042C59.1902 6.53307 58.8353 5.96988 58.4826 5.41019L56.7905 6.47636ZM58.9343 9.87906C59.2895 10.4434 59.6467 11.0112 60.0057 11.5825L61.6991 10.5184C61.3398 9.94649 60.9823 9.37819 60.6268 8.81355L58.9343 9.87906ZM61.0665 13.2729C61.4218 13.8397 61.7785 14.4098 62.1366 14.9832L63.833 13.9238C63.4743 13.3494 63.117 12.7784 62.7613 12.2108L61.0665 13.2729ZM63.2049 16.6974C63.5539 17.2587 63.904 17.823 64.255 18.3903L65.9558 17.338C65.6039 16.7693 65.253 16.2037 64.9033 15.6413L63.2049 16.6974ZM65.3108 20.1014C65.6635 20.6748 66.0171 21.2513 66.3713 21.8307L68.0777 20.7876C67.7225 20.2065 67.3679 19.6284 67.0142 19.0534L65.3108 20.1014ZM67.4061 23.5294C67.7514 24.0982 68.0971 24.6698 68.4431 25.2442L70.1562 24.2122C69.809 23.6358 69.4621 23.0622 69.1158 22.4916L67.4061 23.5294ZM69.4818 26.9756C69.8233 27.5473 70.165 28.1216 70.5066 28.6986L72.2276 27.6796C71.8845 27.1003 71.5416 26.5237 71.1988 25.9499L69.4818 26.9756ZM71.5211 30.4198C71.8591 30.9961 72.197 31.575 72.5346 32.1564L74.2642 31.1521C73.9251 30.5681 73.5857 29.9866 73.2462 29.4079L71.5211 30.4198ZM73.5443 33.9045C73.8742 34.4788 74.2038 35.0556 74.5328 35.6348L76.2718 34.6469C75.9411 34.0648 75.61 33.4853 75.2785 32.9082L73.5443 33.9045ZM75.5181 37.3795C75.846 37.9635 76.1731 38.5498 76.4995 39.1385L78.2487 38.1688C77.9205 37.5769 77.5916 36.9874 77.2621 36.4005L75.5181 37.3795ZM77.4666 40.8943C77.7856 41.4772 78.1037 42.0624 78.4208 42.6497L80.1807 41.6997C79.8618 41.1089 79.5419 40.5204 79.2211 39.9342L77.4666 40.8943ZM79.3688 44.4186C79.6838 45.0104 79.9976 45.6045 80.3101 46.2008L82.0815 45.2722C81.767 44.6722 81.4513 44.0745 81.1344 43.4791L79.3688 44.4186ZM81.231 47.9709C81.5363 48.5626 81.8403 49.1563 82.1429 49.7521L83.9261 48.8465C83.6215 48.2467 83.3155 47.6491 83.0082 47.0537L81.231 47.9709ZM83.0461 51.5458C83.3447 52.1438 83.6417 52.7439 83.937 53.346L85.7326 52.4652C85.4352 51.8588 85.1361 51.2545 84.8355 50.6524L83.0461 51.5458ZM84.8098 55.1415C85.099 55.742 85.3864 56.3445 85.672 56.949L87.4803 56.0946C87.1926 55.4856 86.903 54.8786 86.6117 54.2737L84.8098 55.1415ZM86.523 58.7682C86.8031 59.3731 87.0813 59.98 87.3574 60.5887L89.1788 59.7625C88.9005 59.149 88.6202 58.5374 88.3379 57.9278L86.523 58.7682ZM88.1755 62.4117C88.4461 63.0213 88.7145 63.6327 88.9806 64.246L90.8153 63.4498C90.5469 62.8313 90.2763 62.2148 90.0035 61.6003L88.1755 62.4117ZM89.7721 66.0913C90.0318 66.704 90.2892 67.3185 90.5441 67.9347L92.3922 67.1703C92.1351 66.5486 91.8755 65.9287 91.6135 65.3108L89.7721 66.0913ZM91.2999 69.7853C91.5493 70.404 91.7962 71.0244 92.0404 71.6465L93.9021 70.9157C93.6556 70.2878 93.4065 69.6617 93.1548 69.0375L91.2999 69.7853ZM92.7651 73.5182C93.0021 74.1391 93.2364 74.7617 93.4679 75.3861L95.3431 74.6907C95.1094 74.0604 94.8728 73.4317 94.6335 72.8049L92.7651 73.5182ZM94.1538 77.264C94.3795 77.8916 94.6023 78.5209 94.8221 79.1518L96.7108 78.4939C96.4888 77.8566 96.2637 77.221 96.0357 76.5871L94.1538 77.264ZM95.4715 81.0474C95.6837 81.6774 95.8928 82.309 96.0987 82.9422L98.0006 82.3236C97.7925 81.6837 97.5812 81.0455 97.3668 80.409L95.4715 81.0474ZM96.7067 84.8465C96.9062 85.4828 97.1023 86.1207 97.295 86.7602L99.21 86.183C99.0151 85.5365 98.8168 84.8916 98.6152 84.2484L96.7067 84.8465ZM97.8618 88.6793C98.0465 89.3179 98.2278 89.9579 98.4054 90.5995L100.333 90.0656C100.153 89.4167 99.9698 88.7693 99.7831 88.1236L97.8618 88.6793ZM98.9278 92.5286C99.0982 93.1731 99.2651 93.8192 99.4281 94.4667L101.368 93.9782C101.203 93.323 101.034 92.6693 100.861 92.0172L98.9278 92.5286ZM99.9047 96.4079C100.059 97.0541 100.21 97.7018 100.357 98.351L102.307 97.9098C102.159 97.2526 102.006 96.597 101.85 95.9428L99.9047 96.4079ZM100.785 100.303C100.924 100.954 101.059 101.608 101.19 102.263L103.151 101.871C103.019 101.208 102.882 100.546 102.741 99.8857L100.785 100.303ZM101.569 104.223C101.69 104.876 101.808 105.53 101.921 106.186L103.892 105.845C103.777 105.181 103.658 104.518 103.535 103.857L101.569 104.223ZM102.249 108.156C102.353 108.814 102.454 109.474 102.55 110.135L104.529 109.847C104.432 109.177 104.33 108.509 104.224 107.842L102.249 108.156ZM102.823 112.111C102.91 112.769 102.992 113.428 103.069 114.088L105.056 113.855C104.977 113.186 104.894 112.517 104.806 111.85L102.823 112.111ZM103.288 116.074C103.357 116.736 103.42 117.401 103.479 118.066L105.471 117.889C105.412 117.214 105.347 116.541 105.278 115.868L103.288 116.074ZM103.641 120.052C103.69 120.714 103.734 121.376 103.774 122.039L105.77 121.92C105.73 121.247 105.685 120.575 105.636 119.904L103.641 120.052ZM103.878 124.034C103.908 124.699 103.933 125.366 103.953 126.035L105.952 125.975C105.932 125.297 105.906 124.62 105.876 123.944L103.878 124.034ZM103.997 128.025C104.007 128.688 104.012 129.351 104.012 130.015L106.012 130.016C106.012 129.341 106.007 128.668 105.997 127.996L103.997 128.025ZM103.996 132.011C103.986 132.678 103.971 133.346 103.95 134.014L105.949 134.076C105.97 133.397 105.986 132.719 105.996 132.042L103.996 132.011ZM103.873 136.004C103.843 136.664 103.807 137.326 103.766 137.989L105.762 138.112C105.804 137.439 105.84 136.767 105.871 136.096L103.873 136.004ZM103.628 139.979C103.576 140.644 103.519 141.31 103.457 141.976L105.449 142.162C105.512 141.485 105.569 140.809 105.622 140.134L103.628 139.979ZM103.257 143.959C103.185 144.615 103.108 145.272 103.026 145.93L105.011 146.178C105.094 145.51 105.172 144.842 105.245 144.176L103.257 143.959ZM102.764 147.907C102.671 148.567 102.572 149.228 102.468 149.889L104.444 150.199C104.55 149.527 104.65 148.856 104.744 148.186L102.764 147.907ZM102.143 151.862C102.031 152.51 101.913 153.16 101.79 153.81L103.755 154.182C103.88 153.521 103.999 152.862 104.114 152.203L102.143 151.862ZM101.404 155.764C101.27 156.416 101.131 157.069 100.986 157.723L102.938 158.156C103.085 157.492 103.227 156.829 103.363 156.167L101.404 155.764ZM100.535 159.683C100.382 160.321 100.225 160.96 100.062 161.6L102 162.094C102.166 161.444 102.326 160.795 102.48 160.147L100.535 159.683ZM99.5569 163.522C99.3831 164.163 99.2038 164.805 99.0189 165.448L100.941 166.001C101.129 165.348 101.311 164.696 101.487 164.045L99.5569 163.522ZM98.4475 167.379C98.2555 168.01 98.058 168.642 97.8551 169.274L99.7595 169.885C99.9655 169.243 100.166 168.602 100.361 167.961L98.4475 167.379ZM97.2362 171.155C97.0245 171.783 96.8075 172.411 96.5849 173.04L98.4703 173.707C98.6962 173.069 98.9165 172.431 99.1313 171.794L97.2362 171.155ZM95.9006 174.929C95.6682 175.556 95.4302 176.184 95.1867 176.812L97.0516 177.535C97.2986 176.897 97.5401 176.26 97.7759 175.624L95.9006 174.929ZM94.4618 178.644C94.2149 179.255 93.9628 179.867 93.7053 180.479L95.5489 181.255C95.8101 180.634 96.0658 180.013 96.3163 179.393L94.4618 178.644ZM92.9166 182.318C92.6483 182.932 92.3746 183.546 92.0955 184.161L93.9165 184.988C94.1995 184.365 94.477 183.742 94.7491 183.12L92.9166 182.318ZM91.2564 185.975C90.9775 186.568 90.6934 187.161 90.4042 187.754L92.2021 188.63C92.4952 188.029 92.7832 187.428 93.0659 186.827L91.2564 185.975ZM89.521 189.536C89.2214 190.131 88.9166 190.726 88.6065 191.321L90.3805 192.245C90.6946 191.641 91.0035 191.039 91.3071 190.436L89.521 189.536ZM87.6605 193.109C87.3475 193.692 87.0294 194.274 86.7062 194.858L88.4556 195.827C88.7829 195.236 89.1051 194.646 89.4221 194.056L87.6605 193.109ZM85.7393 196.577C85.412 197.151 85.0797 197.725 84.7425 198.299L86.4672 199.312C86.8087 198.73 87.145 198.149 87.4764 197.568L85.7393 196.577ZM83.7156 200.024C83.3682 200.599 83.0158 201.175 82.6583 201.751L84.3577 202.806C84.7195 202.223 85.0762 201.64 85.4277 201.058L83.7156 200.024ZM81.5942 203.444C81.243 203.995 80.8871 204.547 80.5265 205.099L82.2008 206.193C82.5656 205.634 82.9257 205.076 83.281 204.518L81.5942 203.444ZM79.4302 206.756C79.06 207.309 78.685 207.862 78.3052 208.415L79.9543 209.547C80.3384 208.987 80.7176 208.428 81.092 207.869L79.4302 206.756ZM77.1513 210.077C76.7648 210.627 76.3735 211.177 75.9774 211.728L77.6009 212.896C78.0013 212.339 78.3969 211.783 78.7876 211.227L77.1513 210.077ZM74.823 213.315C74.4337 213.844 74.0399 214.374 73.6417 214.904L75.2405 216.105C75.6429 215.57 76.0408 215.035 76.4342 214.5L74.823 213.315ZM72.4332 216.494C72.0258 217.025 71.6139 217.556 71.1974 218.087L72.7712 219.321C73.1919 218.785 73.608 218.248 74.0195 217.712L72.4332 216.494ZM69.9341 219.681C69.5205 220.198 69.1025 220.714 68.6801 221.232L70.2291 222.497C70.6556 221.975 71.0777 221.453 71.4954 220.931L69.9341 219.681ZM67.4278 222.75C67.0061 223.257 66.5802 223.763 66.15 224.27L67.6749 225.564C68.1091 225.053 68.539 224.541 68.9647 224.03L67.4278 222.75ZM64.8466 225.792C64.4079 226.299 63.9649 226.807 63.5175 227.315L65.0183 228.637C65.4697 228.124 65.9167 227.612 66.3595 227.1L64.8466 225.792ZM62.1624 228.839C61.7226 229.329 61.2788 229.82 60.8309 230.31L62.308 231.659C62.7598 231.164 63.2075 230.669 63.6511 230.174L62.1624 228.839ZM59.497 231.759C59.0484 232.242 58.5958 232.725 58.1392 233.209L59.5934 234.582C60.0538 234.094 60.5102 233.607 60.9626 233.12L59.497 231.759ZM56.7576 234.66C56.293 235.144 55.8244 235.628 55.3518 236.112L56.7831 237.509C57.2595 237.021 57.7319 236.533 58.2003 236.045L56.7576 234.66ZM53.9217 237.566C53.6813 237.808 53.4399 238.05 53.1975 238.293L54.6117 239.707C54.856 239.463 55.0993 239.218 55.3416 238.974L53.9217 237.566ZM53.1975 238.293C52.9537 238.537 52.7109 238.78 52.4691 239.024L53.8891 240.433C54.129 240.191 54.3699 239.949 54.6117 239.707L53.1975 238.293ZM51.0296 240.488C50.5536 240.976 50.0814 241.464 49.613 241.952L51.0564 243.337C51.5208 242.852 51.9891 242.368 52.4612 241.884L51.0296 240.488ZM48.2194 243.417C47.7586 243.906 47.3017 244.395 46.8485 244.883L48.3151 246.243C48.7644 245.759 49.2175 245.274 49.6744 244.79L48.2194 243.417ZM45.5002 246.35C45.0484 246.846 44.6005 247.342 44.1565 247.838L45.6464 249.172C46.0866 248.68 46.5306 248.189 46.9784 247.697L45.5002 246.35ZM42.7925 249.375C42.3419 249.887 41.8954 250.4 41.4529 250.913L42.9671 252.219C43.4055 251.711 43.848 251.203 44.2946 250.695L42.7925 249.375ZM40.1376 252.451C39.7032 252.964 39.2729 253.477 38.8465 253.99L40.3847 255.268C40.8071 254.76 41.2334 254.252 41.6638 253.744L40.1376 252.451ZM37.5793 255.53C37.1541 256.051 36.733 256.573 36.316 257.094L37.8782 258.343C38.2912 257.827 38.7083 257.31 39.1294 256.793L37.5793 255.53ZM35.0422 258.704C34.6219 259.241 34.2059 259.778 33.7942 260.315L35.3811 261.532C35.7888 261 36.2007 260.469 36.6168 259.937L35.0422 258.704ZM32.5718 261.925C32.1685 262.462 31.7695 262.999 31.3747 263.536L32.9861 264.721C33.3768 264.189 33.7718 263.658 34.1709 263.126L32.5718 261.925ZM30.203 265.147C29.8053 265.7 29.412 266.252 29.0231 266.805L30.6588 267.956C31.0436 267.409 31.4328 266.862 31.8264 266.315L30.203 265.147ZM27.8546 268.485C27.4697 269.045 27.0892 269.605 26.7132 270.165L28.3736 271.28C28.7455 270.726 29.1219 270.172 29.5028 269.618L27.8546 268.485ZM25.5984 271.845C25.2313 272.405 24.8686 272.965 24.5103 273.525L26.1949 274.603C26.5492 274.049 26.9079 273.496 27.271 272.942L25.5984 271.845ZM23.4383 275.221C23.0748 275.803 22.7161 276.386 22.362 276.968L24.0708 278.007C24.4208 277.431 24.7755 276.856 25.1349 276.28L23.4383 275.221ZM21.3139 278.714C20.9692 279.296 20.6291 279.878 20.2937 280.46L22.0264 281.459C22.3579 280.884 22.694 280.308 23.0347 279.733L21.3139 278.714ZM19.3013 282.205C18.975 282.787 18.6532 283.369 18.3361 283.951L20.092 284.908C20.4054 284.333 20.7233 283.758 21.0457 283.183L19.3013 282.205ZM17.3643 285.759C17.0452 286.362 16.731 286.965 16.4217 287.567L18.2008 288.481C18.5064 287.886 18.8167 287.29 19.1319 286.695L17.3643 285.759ZM15.5081 289.374C15.2083 289.976 14.9134 290.578 14.6232 291.18L16.4247 292.049C16.7112 291.455 17.0025 290.86 17.2985 290.265L15.5081 289.374ZM13.7669 292.985C13.4769 293.606 13.192 294.227 12.9121 294.848L14.7353 295.67C15.0116 295.057 15.2929 294.444 15.5792 293.831L13.7669 292.985ZM12.0864 296.711C11.8161 297.332 11.5509 297.953 11.2905 298.573L13.1346 299.347C13.3916 298.735 13.6535 298.122 13.9202 297.51L12.0864 296.711ZM10.524 300.434C10.2728 301.055 10.0264 301.677 9.7849 302.298L11.6489 303.022C11.8872 302.41 12.1303 301.797 12.3783 301.183L10.524 300.434ZM9.0556 304.211C8.8176 304.849 8.58469 305.486 8.35683 306.123L10.2399 306.797C10.4647 306.168 10.6945 305.54 10.9293 304.911L9.0556 304.211ZM7.68833 308.032C7.4705 308.669 7.25768 309.304 7.04981 309.94L8.95067 310.562C9.1557 309.935 9.36562 309.308 9.58048 308.68L7.68833 308.032ZM6.43525 311.863C6.23195 312.515 6.03382 313.166 5.84082 313.817L7.75832 314.386C7.94865 313.744 8.14404 313.102 8.34454 312.459L6.43525 311.863ZM5.27715 315.769C5.09436 316.419 4.91664 317.069 4.74394 317.718L6.6767 318.232C6.84698 317.592 7.02222 316.951 7.20248 316.31L5.27715 315.769ZM4.2409 319.663C4.07531 320.323 3.91487 320.982 3.75954 321.641L5.70612 322.1C5.85926 321.45 6.01744 320.801 6.1807 320.15L4.2409 319.663ZM3.30624 323.626C3.16027 324.287 3.0194 324.948 2.88359 325.608L4.84256 326.011C4.97644 325.36 5.11531 324.709 5.25922 324.057L3.30624 323.626ZM2.49128 327.587C2.36489 328.249 2.24355 328.91 2.12721 329.571L4.09693 329.918C4.21162 329.266 4.33123 328.614 4.45582 327.961L2.49128 327.587ZM1.78822 331.583C1.68034 332.252 1.57755 332.921 1.4798 333.59L3.45875 333.879C3.5551 333.22 3.65642 332.561 3.76277 331.901L1.78822 331.583ZM1.20162 335.593C1.11389 336.259 1.03114 336.926 0.953318 337.591L2.93978 337.823C3.01649 337.167 3.09806 336.511 3.18453 335.853L1.20162 335.593ZM0.731557 339.614C0.662473 340.29 0.598426 340.964 0.539355 341.638L2.53171 341.813C2.58994 341.148 2.65308 340.483 2.72118 339.818L0.731557 339.614ZM0.377013 343.657C0.327834 344.329 0.283571 345 0.244163 345.671L2.24072 345.788C2.27957 345.127 2.3232 344.465 2.37168 343.803L0.377013 343.657ZM0.139774 347.694C0.109646 348.372 0.0844536 349.05 0.0641346 349.727L2.06323 349.787C2.08327 349.12 2.1081 348.452 2.13781 347.783L0.139774 347.694ZM0.0177331 351.753C0.00709638 352.428 0.00126894 353.102 0.000186937 353.774L2.00018 353.778C2.00125 353.114 2.007 352.45 2.01748 351.785L0.0177331 351.753ZM0.0111867 355.795C0.0196638 356.474 0.0329402 357.152 0.0509494 357.829L2.05024 357.776C2.03248 357.108 2.01939 356.44 2.01103 355.77L0.0111867 355.795ZM0.11911 359.856C0.146519 360.531 0.178594 361.204 0.21527 361.877L2.2123 361.768C2.17613 361.105 2.14449 360.44 2.11746 359.775L0.11911 359.856ZM0.339055 363.891C0.385352 364.568 0.436278 365.244 0.491766 365.919L2.48504 365.755C2.4303 365.089 2.38006 364.422 2.3344 363.754L0.339055 363.891ZM0.671848 367.939C0.736392 368.612 0.805428 369.283 0.87889 369.953L2.86697 369.735C2.79449 369.074 2.72637 368.412 2.6627 367.748L0.671848 367.939ZM1.11248 371.958C1.19535 372.631 1.28265 373.302 1.37429 373.971L3.35583 373.7C3.26538 373.039 3.17924 372.377 3.09746 371.714L1.11248 371.958ZM1.66265 375.979C1.76309 376.647 1.86783 377.314 1.97678 377.979L3.95048 377.656C3.84293 376.999 3.73955 376.341 3.64042 375.682L1.66265 375.979ZM2.31626 379.971C2.43426 380.637 2.55647 381.302 2.6828 381.965L4.64748 381.591C4.52274 380.936 4.4021 380.279 4.2856 379.622L2.31626 379.971ZM3.07506 383.955C3.20992 384.617 3.34885 385.277 3.49179 385.936L5.44632 385.512C5.30516 384.861 5.16796 384.209 5.03479 383.556L3.07506 383.955ZM3.93254 387.908C4.08409 388.567 4.23961 389.224 4.39902 389.879L6.34239 389.407C6.18492 388.759 6.0313 388.11 5.88162 387.459L3.93254 387.908ZM4.89034 391.847C5.05798 392.501 5.22947 393.154 5.40472 393.805L7.33596 393.285C7.1628 392.642 6.99337 391.997 6.82775 391.35L4.89034 391.847ZM5.94173 395.753C6.12516 396.403 6.3123 397.051 6.5031 397.698L8.42136 397.132C8.23279 396.493 8.04784 395.852 7.86659 395.209L5.94173 395.753ZM7.08839 399.639C7.28711 400.285 7.48943 400.928 7.69527 401.57L9.59973 400.959C9.39624 400.325 9.19625 399.689 8.99983 399.051L7.08839 399.639ZM8.32331 403.49C8.5369 404.131 8.75397 404.77 8.97443 405.406L10.8644 404.752C10.6464 404.122 10.4318 403.491 10.2206 402.858L8.32331 403.49ZM9.64854 407.319C9.87661 407.954 10.108 408.588 10.3427 409.219L12.2175 408.523C11.9854 407.898 11.7565 407.272 11.531 406.643L9.64854 407.319ZM11.0566 411.109C11.2986 411.739 11.5439 412.367 11.7924 412.993L13.6514 412.256C13.4056 411.636 13.163 411.015 12.9236 410.392L11.0566 411.109ZM12.5502 414.874C12.806 415.499 13.0648 416.121 13.3266 416.742L15.1694 415.965C14.9103 415.351 14.6542 414.734 14.4012 414.116L12.5502 414.874ZM14.1211 418.598C14.3901 419.217 14.662 419.834 14.9368 420.449L16.7628 419.633C16.4908 419.025 16.2217 418.414 15.9555 417.801L14.1211 418.598ZM15.7736 422.296C16.0553 422.909 16.3399 423.521 16.6273 424.13L18.436 423.276C18.1516 422.673 17.8699 422.068 17.591 421.461L15.7736 422.296ZM17.4975 425.95C17.7919 426.558 18.0889 427.163 18.3886 427.767L20.1798 426.877C19.8831 426.28 19.5889 425.68 19.2975 425.078L17.4975 425.95ZM19.2997 429.578C19.606 430.179 19.9148 430.778 20.2261 431.375L21.9992 430.45C21.691 429.859 21.3852 429.266 21.0819 428.67L19.2997 429.578ZM21.1673 433.158C21.4858 433.754 21.8068 434.348 22.1301 434.939L23.885 433.98C23.5647 433.394 23.2468 432.806 22.9314 432.215L21.1673 433.158ZM23.1111 436.713C23.4405 437.302 23.772 437.888 24.1058 438.472L25.842 437.479C25.5114 436.901 25.1829 436.32 24.8567 435.737L23.1111 436.713ZM25.1136 440.215C25.4553 440.8 25.7991 441.382 26.145 441.961L27.8623 440.936C27.5196 440.362 27.1789 439.785 26.8404 439.206L25.1136 440.215ZM27.192 443.696C27.543 444.272 27.896 444.845 28.2508 445.415L29.9488 444.358C29.5972 443.793 29.2474 443.226 28.8996 442.655L27.192 443.696ZM29.321 447.117C29.6852 447.691 30.0512 448.261 30.4189 448.829L32.0973 447.741C31.7329 447.179 31.3702 446.613 31.0093 446.045L29.321 447.117ZM31.528 450.523C31.8994 451.085 32.2724 451.644 32.6471 452.2L34.3056 451.082C33.9343 450.531 33.5645 449.977 33.1965 449.42L31.528 450.523ZM33.7803 453.865C34.1651 454.425 34.5513 454.982 34.9391 455.536L36.5774 454.389C36.1931 453.84 35.8102 453.288 35.4288 452.733L33.7803 453.865ZM36.1065 457.188C36.497 457.735 36.8889 458.279 37.2821 458.82L38.8999 457.644C38.5102 457.108 38.1217 456.569 37.7346 456.026L36.1065 457.188ZM38.4789 460.452C38.8829 460.997 39.2881 461.54 39.6945 462.079L41.2913 460.874C40.8885 460.34 40.4868 459.803 40.0863 459.262L38.4789 460.452ZM40.9167 463.684C41.3251 464.216 41.7345 464.745 42.1448 465.269L43.7204 464.038C43.3137 463.517 42.9078 462.994 42.5029 462.466L40.9167 463.684ZM43.4069 466.869C43.8291 467.399 44.2521 467.926 44.6758 468.449L46.2295 467.189C45.8094 466.671 45.3901 466.149 44.9716 465.623L43.4069 466.869ZM45.9489 470.005C46.379 470.526 46.8097 471.044 47.2409 471.557L48.7723 470.27C48.3448 469.762 47.9179 469.249 47.4915 468.732L45.9489 470.005ZM48.5568 473.109C48.9959 473.623 49.4353 474.132 49.875 474.637L51.3833 473.323C50.9475 472.823 50.5119 472.318 50.0767 471.809L48.5568 473.109ZM51.195 476.139C51.6494 476.652 52.1039 477.16 52.5585 477.663L54.043 476.323C53.5925 475.824 53.142 475.32 52.6916 474.812L51.195 476.139ZM53.9221 479.16C54.3765 479.654 54.8308 480.144 55.2849 480.629L56.7449 479.262C56.2949 478.781 55.8447 478.296 55.3944 477.806L53.9221 479.16ZM56.6812 482.106C57.1514 482.599 57.6212 483.087 58.0904 483.57L59.5245 482.176C59.0597 481.698 58.5943 481.214 58.1284 480.726L56.6812 482.106ZM59.4963 485.003C59.7302 485.239 59.9639 485.474 60.1975 485.707L61.6117 484.293C61.3804 484.062 61.1489 483.829 60.9171 483.595L59.4963 485.003ZM60.1975 485.707C60.4259 485.936 60.6552 486.166 60.8852 486.398L62.3051 484.989C62.0732 484.755 61.842 484.523 61.6117 484.293L60.1975 485.707ZM62.2748 487.809C62.7411 488.287 63.2103 488.771 63.6823 489.262L65.1237 487.875C64.6482 487.381 64.1754 486.893 63.7056 486.412L62.2748 487.809ZM65.0842 490.73C65.5332 491.203 65.9845 491.683 66.4381 492.168L67.8989 490.802C67.4423 490.313 66.9878 489.831 66.5356 489.354L65.0842 490.73ZM67.8053 493.64C68.2631 494.136 68.7231 494.638 69.1849 495.145L70.6639 493.799C70.199 493.288 69.7361 492.783 69.2752 492.283L67.8053 493.64ZM70.5167 496.617C70.9581 497.108 71.4011 497.604 71.8457 498.105L73.3411 496.777C72.8939 496.273 72.4482 495.774 72.004 495.28L70.5167 496.617ZM73.1837 499.621C73.6272 500.126 74.0721 500.636 74.5182 501.151L76.0296 499.841C75.5808 499.324 75.1333 498.81 74.6872 498.302L73.1837 499.621ZM75.8114 502.652C76.2436 503.156 76.6768 503.665 77.111 504.177L78.6371 502.884C78.2004 502.369 77.7648 501.858 77.3301 501.35L75.8114 502.652ZM78.4164 505.727C78.8457 506.24 79.2759 506.756 79.7068 507.277L81.2472 506.001C80.8139 505.478 80.3814 504.958 79.9497 504.443L78.4164 505.727ZM80.9709 508.811C81.3929 509.327 81.8155 509.845 82.2387 510.368L83.7927 509.109C83.3673 508.584 82.9424 508.062 82.5181 507.544L80.9709 508.811ZM83.5097 511.945C83.9275 512.467 84.3458 512.991 84.7644 513.52L86.3318 512.277C85.9109 511.746 85.4905 511.219 85.0704 510.695L83.5097 511.945ZM85.9977 515.084C86.4091 515.608 86.8207 516.136 87.2325 516.666L88.8126 515.44C88.3987 514.907 87.9849 514.377 87.5714 513.849L85.9977 515.084ZM88.4683 518.268C88.8761 518.799 89.2841 519.333 89.692 519.871L91.2848 518.661C90.8747 518.121 90.4647 517.584 90.0547 517.05L88.4683 518.268ZM90.8934 521.461C91.2938 521.994 91.6941 522.529 92.0943 523.067L93.6993 521.874C93.2971 521.333 92.8947 520.795 92.4923 520.259L90.8934 521.461ZM93.2945 524.69C93.6929 525.232 94.0911 525.776 94.4891 526.323L96.1062 525.146C95.7063 524.597 95.306 524.05 94.9056 523.505L93.2945 524.69ZM95.6577 527.938C96.0469 528.479 96.4358 529.022 96.8243 529.567L98.4534 528.407C98.0629 527.859 97.6721 527.313 97.2808 526.769L95.6577 527.938ZM97.9885 531.211C98.3761 531.761 98.7633 532.313 99.1499 532.868L100.791 531.725C100.402 531.167 100.013 530.612 99.6235 530.059L97.9885 531.211ZM100.289 534.512C100.667 535.06 101.044 535.61 101.421 536.163L103.073 535.036C102.695 534.481 102.315 533.928 101.936 533.377L100.289 534.512ZM102.548 537.827C102.924 538.383 103.298 538.942 103.672 539.503L105.336 538.394C104.961 537.83 104.584 537.268 104.207 536.709L102.548 537.827ZM104.783 541.18C105.149 541.735 105.515 542.293 105.879 542.853L107.555 541.761C107.189 541.199 106.821 540.638 106.453 540.079L104.783 541.18ZM106.97 544.537C107.333 545.101 107.695 545.666 108.056 546.233L109.743 545.159C109.38 544.589 109.017 544.021 108.652 543.455L106.97 544.537ZM109.135 547.939C109.49 548.503 109.843 549.069 110.195 549.636L111.894 548.58C111.54 548.01 111.185 547.442 110.828 546.875L109.135 547.939ZM111.249 551.342C111.599 551.912 111.947 552.484 112.295 553.057L114.005 552.021C113.656 551.444 113.305 550.869 112.953 550.296L111.249 551.342ZM113.334 554.783C113.678 555.357 114.02 555.933 114.361 556.51L116.083 555.493C115.74 554.912 115.396 554.333 115.05 553.756L113.334 554.783ZM115.376 558.238C115.713 558.816 116.048 559.395 116.382 559.975L118.116 558.978C117.78 558.394 117.442 557.812 117.104 557.231L115.376 558.238ZM117.38 561.721C117.711 562.304 118.041 562.888 118.369 563.474L120.114 562.497C119.784 561.908 119.452 561.32 119.119 560.733L117.38 561.721ZM119.344 565.227C119.667 565.812 119.988 566.398 120.308 566.986L122.065 566.03C121.743 565.439 121.42 564.849 121.094 564.26L119.344 565.227ZM121.263 568.753C121.58 569.343 121.895 569.934 122.208 570.527L123.976 569.592C123.661 568.996 123.344 568.401 123.026 567.807L121.263 568.753ZM123.141 572.306C123.45 572.899 123.757 573.494 124.062 574.089L125.842 573.177C125.535 572.578 125.226 571.979 124.915 571.383L123.141 572.306ZM124.972 575.878C125.274 576.476 125.573 577.074 125.871 577.674L127.662 576.785C127.363 576.181 127.061 575.579 126.758 574.978L124.972 575.878ZM126.757 579.475C127.051 580.077 127.342 580.68 127.632 581.283L129.435 580.418C129.144 579.811 128.85 579.204 128.555 578.598L126.757 579.475ZM128.494 583.097C128.779 583.702 129.062 584.308 129.343 584.915L131.158 584.075C130.876 583.464 130.59 582.853 130.303 582.244L128.494 583.097ZM130.18 586.739C130.456 587.348 130.731 587.958 131.003 588.568L132.829 587.754C132.555 587.139 132.279 586.525 132.001 585.912L130.18 586.739ZM131.814 590.407C132.082 591.02 132.348 591.635 132.611 592.25L134.45 591.463C134.184 590.843 133.917 590.224 133.647 589.606L131.814 590.407ZM133.393 594.097C133.652 594.713 133.907 595.33 134.161 595.948L136.011 595.189C135.756 594.566 135.498 593.945 135.238 593.324L133.393 594.097ZM134.915 597.808C135.164 598.43 135.411 599.052 135.655 599.676L137.518 598.946C137.272 598.318 137.023 597.69 136.771 597.063L134.915 597.808ZM136.38 601.547C136.619 602.171 136.854 602.796 137.088 603.422L138.962 602.723C138.726 602.092 138.489 601.462 138.248 600.833L136.38 601.547ZM137.779 605.299C138.008 605.93 138.234 606.561 138.457 607.192L140.343 606.526C140.118 605.889 139.89 605.252 139.658 604.616L137.779 605.299ZM139.119 609.089C139.336 609.721 139.55 610.354 139.762 610.987L141.659 610.354C141.446 609.715 141.229 609.077 141.01 608.438L139.119 609.089ZM140.386 612.887C140.592 613.524 140.795 614.16 140.994 614.797L142.903 614.199C142.701 613.556 142.497 612.914 142.289 612.272L140.386 612.887ZM141.586 616.718C141.78 617.359 141.971 618 142.158 618.641L144.078 618.08C143.889 617.433 143.696 616.785 143.5 616.139L141.586 616.718ZM142.71 620.564C142.891 621.205 143.068 621.847 143.241 622.488L145.172 621.966C144.996 621.318 144.818 620.67 144.635 620.022L142.71 620.564ZM143.757 624.433C143.925 625.081 144.09 625.73 144.251 626.379L146.192 625.897C146.029 625.241 145.863 624.586 145.693 623.93L143.757 624.433ZM144.722 628.324C144.876 628.973 145.026 629.621 145.171 630.269L147.123 629.83C146.975 629.175 146.824 628.519 146.669 627.864L144.722 628.324ZM145.6 632.226C145.74 632.882 145.876 633.538 146.008 634.194L147.969 633.799C147.835 633.136 147.698 632.473 147.556 631.809L145.6 632.226ZM146.391 636.16C146.515 636.815 146.634 637.47 146.75 638.125L148.719 637.777C148.603 637.115 148.482 636.452 148.356 635.789L146.391 636.16ZM147.084 640.091C147.192 640.754 147.296 641.416 147.396 642.077L149.374 641.78C149.273 641.109 149.167 640.439 149.058 639.768L147.084 640.091ZM147.681 644.061C147.772 644.722 147.858 645.382 147.94 646.042L149.925 645.796C149.842 645.128 149.755 644.458 149.663 643.789L147.681 644.061ZM148.172 648.021C148.245 648.686 148.314 649.351 148.377 650.016L150.368 649.825C150.303 649.151 150.234 648.476 150.16 647.802L148.172 648.021ZM148.555 652.013C148.609 652.678 148.659 653.342 148.703 654.006L150.699 653.872C150.654 653.198 150.603 652.524 150.548 651.85L148.555 652.013ZM148.822 655.995C148.857 656.661 148.887 657.327 148.912 657.992L150.91 657.918C150.885 657.243 150.855 656.567 150.819 655.89L148.822 655.995ZM148.97 659.996C148.985 660.663 148.994 661.329 148.998 661.994L150.998 661.983C150.994 661.307 150.984 660.63 150.97 659.952L148.97 659.996ZM148.993 663.987C148.986 664.653 148.974 665.317 148.956 665.981L150.955 666.035C150.973 665.36 150.986 664.684 150.993 664.008L148.993 663.987ZM148.885 667.982C148.856 668.648 148.821 669.314 148.78 669.978L150.776 670.1C150.818 669.424 150.853 668.748 150.883 668.07L148.885 667.982ZM148.641 671.966C148.589 672.629 148.531 673.29 148.467 673.95L150.458 674.142C150.523 673.47 150.582 672.797 150.635 672.123L148.641 671.966ZM148.256 675.939C148.18 676.601 148.098 677.261 148.009 677.92L149.992 678.186C150.082 677.514 150.166 676.842 150.243 676.168L148.256 675.939ZM147.726 679.894C147.625 680.55 147.518 681.205 147.405 681.859L149.376 682.2C149.491 681.533 149.6 680.866 149.703 680.197L147.726 679.894ZM147.046 683.822C146.92 684.475 146.788 685.127 146.649 685.777L148.604 686.195C148.746 685.532 148.881 684.867 149.01 684.201L147.046 683.822ZM146.212 687.722C146.061 688.369 145.902 689.014 145.737 689.658L147.675 690.155C147.843 689.498 148.005 688.839 148.159 688.179L146.212 687.722ZM145.223 691.582C145.045 692.221 144.86 692.859 144.669 693.495L146.584 694.071C146.78 693.422 146.968 692.771 147.15 692.118L145.223 691.582ZM144.075 695.398C143.87 696.031 143.658 696.661 143.44 697.291L145.329 697.947C145.552 697.304 145.768 696.66 145.978 696.014L144.075 695.398ZM142.767 699.162C142.537 699.783 142.3 700.401 142.055 701.018L143.915 701.754C144.164 701.124 144.407 700.492 144.642 699.858L142.767 699.162ZM141.302 702.863C141.044 703.476 140.778 704.087 140.506 704.697L142.332 705.513C142.61 704.89 142.881 704.266 143.145 703.639L141.302 702.863ZM139.675 706.504C139.393 707.101 139.104 707.695 138.807 708.288L140.596 709.182C140.899 708.577 141.194 707.969 141.483 707.36L139.675 706.504ZM137.898 710.06C137.588 710.648 137.27 711.235 136.946 711.819L138.694 712.79C139.026 712.193 139.35 711.594 139.667 710.992L137.898 710.06ZM135.957 713.555C135.626 714.122 135.288 714.688 134.943 715.251L136.648 716.296C137 715.721 137.346 715.143 137.685 714.563L135.957 713.555ZM133.886 716.935C133.526 717.494 133.16 718.051 132.787 718.606L134.446 719.723C134.827 719.156 135.201 718.587 135.568 718.016L133.886 716.935ZM131.645 720.265C131.268 720.8 130.884 721.332 130.494 721.863L132.105 723.048C132.503 722.507 132.895 721.963 133.28 721.416L131.645 720.265ZM129.303 723.448C128.899 723.973 128.488 724.497 128.071 725.019L129.632 726.269C130.058 725.737 130.477 725.202 130.889 724.666L129.303 723.448ZM126.796 726.577C126.581 726.836 126.363 727.094 126.143 727.351L127.666 728.649C127.89 728.386 128.112 728.123 128.332 727.859L126.796 726.577ZM126.143 727.351C125.924 727.609 125.705 727.867 125.486 728.125L127.012 729.418C127.229 729.161 127.447 728.905 127.666 728.649L126.143 727.351ZM124.184 729.671C123.752 730.186 123.323 730.701 122.897 731.216L124.438 732.492C124.861 731.98 125.288 731.468 125.717 730.955L124.184 729.671ZM121.626 732.761C121.205 733.275 120.786 733.789 120.37 734.304L121.925 735.561C122.339 735.05 122.755 734.539 123.174 734.027L121.626 732.761ZM119.13 735.846C118.716 736.364 118.304 736.883 117.895 737.401L119.464 738.641C119.871 738.125 120.281 737.61 120.693 737.094L119.13 735.846ZM116.645 738.993C116.231 739.524 115.82 740.054 115.412 740.584L116.996 741.805C117.402 741.278 117.81 740.751 118.222 740.223L116.645 738.993ZM114.195 742.174C113.792 742.704 113.392 743.233 112.994 743.762L114.594 744.963C114.988 744.437 115.386 743.911 115.787 743.385L114.195 742.174ZM111.81 745.349C111.415 745.882 111.023 746.415 110.633 746.948L112.247 748.129C112.634 747.6 113.024 747.07 113.417 746.54L111.81 745.349ZM109.443 748.586C109.049 749.132 108.658 749.677 108.27 750.222L109.899 751.382C110.284 750.84 110.673 750.299 111.064 749.756L109.443 748.586ZM107.114 751.856C106.732 752.401 106.352 752.945 105.976 753.489L107.62 754.627C107.994 754.087 108.371 753.547 108.751 753.006L107.114 751.856ZM104.855 755.119C104.479 755.671 104.106 756.221 103.735 756.772L105.395 757.888C105.763 757.342 106.133 756.794 106.507 756.247L104.855 755.119ZM102.612 758.454C102.241 759.015 101.872 759.575 101.507 760.134L103.182 761.227C103.545 760.672 103.911 760.116 104.279 759.559L102.612 758.454ZM100.421 761.812C100.062 762.371 99.7054 762.929 99.3524 763.487L101.042 764.557C101.393 764.003 101.747 763.448 102.103 762.893L100.421 761.812ZM98.3022 765.16C97.9457 765.733 97.5923 766.305 97.2422 766.876L98.9476 767.921C99.2952 767.354 99.646 766.786 99.9999 766.218L98.3022 765.16ZM96.1943 768.601C95.8482 769.176 95.5054 769.75 95.1657 770.323L96.8866 771.343C97.2237 770.773 97.564 770.204 97.9075 769.633L96.1943 768.601ZM94.1564 772.043C93.8231 772.615 93.4931 773.187 93.1662 773.759L94.9024 774.752C95.2267 774.185 95.5542 773.617 95.885 773.049L94.1564 772.043ZM92.1834 775.493C91.852 776.083 91.524 776.673 91.1994 777.262L92.951 778.227C93.273 777.643 93.5984 777.058 93.9272 776.473L92.1834 775.493ZM90.2358 779.027C89.9179 779.615 89.6035 780.202 89.2924 780.789L91.0593 781.726C91.3679 781.144 91.6798 780.561 91.9951 779.978L90.2358 779.027ZM88.3692 782.547C88.0638 783.134 87.7618 783.721 87.4632 784.307L89.2452 785.215C89.5414 784.634 89.8408 784.052 90.1437 783.469L88.3692 782.547ZM86.5506 786.117C86.2499 786.72 85.9528 787.322 85.6593 787.924L87.4567 788.801C87.7477 788.205 88.0422 787.608 88.3403 787.01L86.5506 786.117ZM84.7894 789.726C84.503 790.326 84.2201 790.925 83.9407 791.524L85.7531 792.37C86.03 791.776 86.3104 791.182 86.5943 790.588L84.7894 789.726ZM83.1131 793.318C82.8315 793.936 82.5538 794.552 82.2798 795.168L84.1071 795.981C84.3786 795.371 84.6538 794.76 84.9328 794.148L83.1131 793.318ZM81.469 797.013C81.2025 797.627 80.9398 798.24 80.6807 798.853L82.5227 799.632C82.7794 799.025 83.0397 798.418 83.3038 797.809L81.469 797.013ZM79.9147 800.688C79.6624 801.301 79.4138 801.913 79.1689 802.523L81.0253 803.268C81.2678 802.663 81.514 802.057 81.764 801.45L79.9147 800.688ZM78.4236 804.409C78.1791 805.037 77.9386 805.664 77.702 806.29L79.5727 806.997C79.807 806.377 80.0452 805.757 80.2873 805.135L78.4236 804.409ZM77.0039 808.164C76.7751 808.788 76.5502 809.411 76.3292 810.033L78.2138 810.703C78.4325 810.087 78.6551 809.471 78.8816 808.853L77.0039 808.164ZM75.6711 811.916C75.4509 812.556 75.2349 813.196 75.023 813.834L76.9211 814.464C77.1308 813.833 77.3446 813.2 77.5624 812.566L75.6711 811.916ZM74.3996 815.746C74.1959 816.382 73.9963 817.017 73.8009 817.651L75.7121 818.24C75.9054 817.613 76.1028 816.985 76.3043 816.356L74.3996 815.746ZM73.2267 819.549C73.0351 820.195 72.8477 820.84 72.6646 821.484L74.5883 822.031C74.7694 821.394 74.9547 820.756 75.1442 820.117L73.2267 819.549ZM72.1233 823.429C71.9471 824.076 71.7753 824.722 71.6078 825.366L73.5435 825.869C73.7091 825.232 73.8789 824.594 74.0531 823.954L72.1233 823.429ZM71.1181 827.296C70.9579 827.943 70.8021 828.589 70.6506 829.233L72.5975 829.691C72.7472 829.054 72.9012 828.416 73.0595 827.777L71.1181 827.296ZM70.1988 831.208C70.0528 831.865 69.9113 832.52 69.7742 833.174L71.7317 833.584C71.8671 832.938 72.0069 832.291 72.1512 831.642L70.1988 831.208ZM69.3766 835.131C69.2486 835.782 69.1251 836.432 69.006 837.08L70.973 837.441C71.0906 836.802 71.2126 836.16 71.3391 835.517L69.3766 835.131ZM68.6527 839.074C68.5394 839.739 68.4308 840.402 68.3269 841.064L70.3027 841.374C70.4052 840.721 70.5124 840.067 70.6243 839.41L68.6527 839.074ZM68.0294 843.044C67.9349 843.702 67.8451 844.358 67.7599 845.013L69.7432 845.271C69.8272 844.625 69.9158 843.977 70.0091 843.328L68.0294 843.044ZM67.5136 847.015C67.4357 847.685 67.3627 848.354 67.2947 849.022L69.2844 849.224C69.3515 848.567 69.4234 847.907 69.5002 847.245L67.5136 847.015ZM67.1052 851.017C67.047 851.681 66.9936 852.342 66.9451 853.002L68.9397 853.148C68.9875 852.498 69.0401 851.846 69.0976 851.192L67.1052 851.017ZM66.812 855.011C66.7722 855.685 66.7376 856.358 66.7081 857.028L68.7062 857.116C68.7352 856.456 68.7693 855.793 68.8085 855.129L66.812 855.011ZM66.6348 859.033C66.6155 859.699 66.6012 860.363 66.592 861.025L68.5918 861.053C68.6009 860.401 68.6149 859.747 68.634 859.091L66.6348 859.033ZM66.5796 863.04C66.5807 863.716 66.5871 864.389 66.5987 865.06L68.5984 865.025C68.5869 864.365 68.5807 863.702 68.5796 863.037L66.5796 863.04ZM66.6496 867.065C66.6718 867.731 66.6993 868.394 66.732 869.056L68.7295 868.957C68.6974 868.306 68.6703 867.653 68.6485 866.998L66.6496 867.065ZM66.8485 871.074C66.893 871.747 66.9429 872.418 66.9983 873.086L68.9915 872.92C68.937 872.264 68.8879 871.604 68.8441 870.942L66.8485 871.074ZM67.1808 875.082C67.2472 875.745 67.319 876.407 67.3962 877.065L69.3826 876.832C69.3067 876.185 69.2361 875.535 69.1709 874.883L67.1808 875.082ZM67.6499 879.076C67.7401 879.743 67.8359 880.408 67.9373 881.07L69.9142 880.767C69.8146 880.117 69.7205 879.464 69.6319 878.808L67.6499 879.076ZM68.2583 883.046C68.3719 883.708 68.4911 884.366 68.6159 885.022L70.5806 884.648C70.458 884.004 70.341 883.357 70.2295 882.708L68.2583 883.046ZM69.0126 887.005C69.1505 887.663 69.2943 888.317 69.4437 888.969L71.3931 888.522C71.2464 887.882 71.1054 887.24 70.97 886.594L69.0126 887.005ZM69.9091 890.914C70.0724 891.569 70.2416 892.221 70.4166 892.869L72.3476 892.348C72.1759 891.712 72.0099 891.073 71.8497 890.43L69.9091 890.914ZM70.9613 894.812C71.1487 895.456 71.3419 896.097 71.5409 896.734L73.4499 896.138C73.2548 895.513 73.0654 894.885 72.8816 894.253L70.9613 894.812ZM72.1583 898.644C72.3725 899.285 72.5927 899.922 72.8188 900.555L74.7024 899.883C74.4808 899.262 74.2651 898.638 74.0551 898.01L72.1583 898.644ZM73.5148 902.444C73.7527 903.07 73.9965 903.693 74.2461 904.311L76.1007 903.562C75.8562 902.957 75.6174 902.347 75.3843 901.734L73.5148 902.444ZM75.0217 906.176C75.2868 906.795 75.558 907.411 75.835 908.022L77.6567 907.196C77.3854 906.598 77.1199 905.995 76.8602 905.389L75.0217 906.176ZM76.6841 909.844C76.9743 910.45 77.2704 911.052 77.5725 911.649L79.3575 910.747C79.0618 910.162 78.7719 909.573 78.4879 908.98L76.6841 909.844ZM78.5028 913.442C78.8189 914.035 79.1409 914.624 79.4688 915.209L81.2132 914.23C80.8923 913.658 80.5772 913.082 80.2679 912.501L78.5028 913.442ZM80.4705 916.95C80.8129 917.531 81.1614 918.107 81.5158 918.679L83.2157 917.625C82.8691 917.066 82.5282 916.502 82.1932 915.934L80.4705 916.95ZM82.5966 920.38C82.9628 920.943 83.3348 921.501 83.7128 922.055L85.3646 920.927C84.995 920.386 84.6311 919.84 84.2729 919.29L82.5966 920.38ZM84.8677 923.707C85.2592 924.254 85.6565 924.796 86.0597 925.334L87.6596 924.134C87.2654 923.608 86.8769 923.078 86.4941 922.543L84.8677 923.707ZM87.2865 926.932C87.7014 927.46 88.1221 927.984 88.5485 928.502L90.0933 927.232C89.6763 926.725 89.265 926.213 88.8592 925.697L87.2865 926.932ZM89.8463 930.045C90.2846 930.554 90.7286 931.058 91.1782 931.558L92.6645 930.22C92.2249 929.731 91.7907 929.238 91.3622 928.74L89.8463 930.045ZM92.5441 933.041C93.0041 933.529 93.4698 934.013 93.941 934.491L95.3659 933.088C94.9051 932.62 94.4498 932.147 94 931.67L92.5441 933.041ZM95.3711 935.911C95.8534 936.379 96.3411 936.842 96.8343 937.3L98.1951 935.835C97.7128 935.387 97.2359 934.934 96.7643 934.476L95.3711 935.911ZM98.325 938.654C98.8264 939.099 99.3331 939.539 99.8452 939.974L101.14 938.449C100.639 938.024 100.143 937.594 99.6529 937.158L98.325 938.654ZM101.397 941.263C101.919 941.686 102.445 942.104 102.977 942.517L104.203 940.937C103.683 940.533 103.168 940.124 102.658 939.71L101.397 941.263ZM104.578 943.732C105.117 944.131 105.661 944.526 106.21 944.915L107.366 943.283C106.829 942.903 106.297 942.517 105.77 942.125L104.578 943.732ZM107.872 946.066C108.425 946.441 108.983 946.81 109.546 947.174L110.631 945.494C110.08 945.138 109.534 944.777 108.993 944.41L107.872 946.066ZM111.247 948.248C111.819 948.601 112.396 948.948 112.977 949.29L113.991 947.566C113.422 947.231 112.857 946.891 112.297 946.546L111.247 948.248ZM114.723 950.293C115.306 950.619 115.893 950.94 116.484 951.256L117.426 949.492C116.846 949.183 116.272 948.868 115.701 948.548L114.723 950.293ZM118.272 952.188C118.872 952.493 119.477 952.792 120.086 953.086L120.956 951.285C120.359 950.997 119.766 950.703 119.178 950.405L118.272 952.188ZM121.896 953.938C122.504 954.217 123.116 954.49 123.732 954.758L124.53 952.924C123.926 952.661 123.326 952.393 122.73 952.12L121.896 953.938Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx("div", {
    className: _page_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, children), __jsx(_footer_Footer__WEBPACK_IMPORTED_MODULE_3__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/page/page.module.css":
/*!*****************************************!*\
  !*** ./components/page/page.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "page_content__1edrH",
	"line": "page_line__Ip0Dd",
	"wrapper": "page_wrapper__1LHDR"
};


/***/ }),

/***/ "./components/social-media-links/SocialMediaLinks.jsx":
/*!************************************************************!*\
  !*** ./components/social-media-links/SocialMediaLinks.jsx ***!
  \************************************************************/
/*! exports provided: SocialMediaLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaLinks", function() { return SocialMediaLinks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _social_media_links_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-media-links.module.css */ "./components/social-media-links/social-media-links.module.css");
/* harmony import */ var _social_media_links_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_social_media_links_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Aisha\\workspace\\aisha-blog\\components\\social-media-links\\SocialMediaLinks.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SocialMediaLinks({
  className
}) {
  return __jsx("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: _social_media_links_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contact,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.facebook.com/ak.gregg.3",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("img", {
    src: "./img/fb-logo.png",
    alt: "Facebook logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), __jsx("a", {
    href: "https://www.instagram.com/kamii_90/",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("img", {
    src: "./img/insta-logo.jpg",
    alt: "Instagram logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), __jsx("a", {
    href: "https://twitter.com/gregg_aisha ",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("img", {
    src: "./img/twitter-logo.jpg",
    alt: "Twitter logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./components/social-media-links/social-media-links.module.css":
/*!*********************************************************************!*\
  !*** ./components/social-media-links/social-media-links.module.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"contact": "social-media-links_contact__AISnu",
	"contactbox": "social-media-links_contactbox__3p5_6"
};


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/home.module.css":
/*!*******************************!*\
  !*** ./pages/home.module.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper-content": "home_wrapper-content__3lUDt",
	"introduction": "home_introduction__1bqf-",
	"first-letter": "home_first-letter__1CFv0",
	"description": "home_description__1Gulq",
	"posts": "home_posts__3PUQN"
};


/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.module.css */ "./pages/home.module.css");
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_image_section_ImageSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/image-section/ImageSection */ "./components/image-section/ImageSection.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_about_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/about/about */ "./components/about/about.jsx");
/* harmony import */ var _components_page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/page/Page */ "./components/page/Page.jsx");
var _jsxFileName = "C:\\Users\\Aisha\\workspace\\aisha-blog\\pages\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Home() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return __jsx(_components_page_Page__WEBPACK_IMPORTED_MODULE_5__["Page"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("main", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a["wrapper-content"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("section", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.introduction,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_components_about_about__WEBPACK_IMPORTED_MODULE_4__["About"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(_components_image_section_ImageSection__WEBPACK_IMPORTED_MODULE_2__["ImageSection"], {
    title: "My Posts",
    images: [{
      text: "Boungiorno Italy Part II",
      image: "./img/italy2.jpg",
      onClick: () => router.push("/posts/Italy2")
    }, {
      text: "Lisbon",
      image: "./img/lisbon.jpg",
      onClick: () => router.push("/posts/lisbon")
    }, {
      text: "Morocco Part I",
      image: "./img/morocco1.jpg",
      onClick: () => router.push("/posts/morocco1")
    }, {
      text: "Morocco Part II",
      image: "./img/morocco-main.jpg",
      onClick: () => router.push("/posts/morocco2")
    }, {
      text: "Life abroad",
      image: "./img/lifeabroad.jpg",
      onClick: () => router.push("/posts/life-abroad")
    }, {
      title: "My Posts",
      text: "Oh my, Marseille!",
      image: "./img/cathedral.jpg",
      onClick: () => router.push("/posts/marseille")
    }, {
      text: "Surviving quarantine",
      image: "./img/quarantine.jpg",
      onClick: () => router.push("/posts/quarantine")
    }, {
      text: "Boungiorno Italy Part I",
      image: "./img/italy.png",
      onClick: () => router.push("/posts/Italy1")
    }, {
      text: "London Adventures (Coming soon)",
      image: "./img/london.jpg"
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })));
}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Aisha\workspace\aisha-blog\pages\index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "classnames/bind":
/*!**********************************!*\
  !*** external "classnames/bind" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames/bind");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map