"use strict";
(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MovieDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8049);
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7031);




async function getStaticProps() {
    const res = await fetch("https://doubtful-tights-tuna.cyclic.app/api/movies/573a1391f29313caabcd9600");
    const movie = await res.json();
    return {
        props: {
            movie
        }
    };
}
const bio = "My name is Akshat Jain. My interest areas are Web Development, User Experience(UX), branding and animation. I like transforming concepts and ideas into a presentable and tangible form. I find the ability to influence opinions and emotions through visuals and motion very empowering, and hope to use my abilities to create an impact on people's lives.";
function About(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                text: "About the Developer"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Body, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Text, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: bio
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "A movie that I liked was",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Link, {
                                            href: "/movies/City Lights",
                                            children: "City Lights"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MovieDetails__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        movie: props.movie
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [500], () => (__webpack_exec__(414)));
module.exports = __webpack_exports__;

})();