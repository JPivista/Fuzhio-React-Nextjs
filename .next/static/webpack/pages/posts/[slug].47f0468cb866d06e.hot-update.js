"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Templates_Data_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/Templates/Data/posts */ \"./components/Templates/Data/posts.js\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slugify */ \"./node_modules/slugify/slugify.js\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_common_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/common/Header */ \"./components/common/Header/index.jsx\");\n/* harmony import */ var _components_common_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/common/Footer */ \"./components/common/Footer/index.jsx\");\n// pages/posts/[slug].js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Post = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { slug  } = router.query;\n    const post = _components_Templates_Data_posts__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find((post)=>slugify__WEBPACK_IMPORTED_MODULE_3___default()(post.title, {\n            lower: true\n        }) === slug);\n    if (!post) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Post not found\"\n        }, void 0, false, {\n            fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n            lineNumber: 19,\n            columnNumber: 16\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                fluid: true,\n                style: {\n                    background: \"#F5F5F5\"\n                },\n                className: \"p-lg-5 p-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                    className: \"bg-white p-lg-5 p-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n                        className: \"p-lg-5 p-3 bg-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Image, {\n                                src: post.image,\n                                width: \"100%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                                lineNumber: 28,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"pt-2\",\n                                children: post.title\n                            }, void 0, false, {\n                                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                                lineNumber: 29,\n                                columnNumber: 25\n                            }, undefined),\n                            post.content.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: item.type === \"title\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: [\n                                            \" \",\n                                            item.text\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                                        lineNumber: 34,\n                                        columnNumber: 37\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            lineHeight: \"32px\"\n                                        },\n                                        children: item.text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                                        lineNumber: 36,\n                                        columnNumber: 37\n                                    }, undefined)\n                                }, index, false, {\n                                    fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                                    lineNumber: 32,\n                                    columnNumber: 29\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3QkFBd0I7QUFDeEI7O0FBQXdDO0FBQ1k7QUFDdEI7QUFFMEI7QUFFTDtBQUNBO0FBR25ELE1BQU1RLE9BQU8sSUFBTTs7SUFDZixNQUFNQyxTQUFTVCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFVSxLQUFJLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUU3QixNQUFNQyxPQUFPWCw2RUFBVSxDQUFDVyxDQUFBQSxPQUFRViw4Q0FBT0EsQ0FBQ1UsS0FBS0UsS0FBSyxFQUFFO1lBQUVDLE9BQU8sSUFBSTtRQUFDLE9BQU9MO0lBRXpFLElBQUksQ0FBQ0UsTUFBTTtRQUNQLHFCQUFPLDhEQUFDSTtzQkFBRTs7Ozs7O0lBQ2QsQ0FBQztJQUVELHFCQUNJOzswQkFDSSw4REFBQ1YsaUVBQU1BOzs7OzswQkFDUCw4REFBQ0gsc0RBQVNBO2dCQUFDYyxLQUFLO2dCQUFDQyxPQUFPO29CQUFFQyxZQUFZO2dCQUFVO2dCQUFHQyxXQUFVOzBCQUN6RCw0RUFBQ2pCLHNEQUFTQTtvQkFBQ2lCLFdBQVU7OEJBQ2pCLDRFQUFDZixnREFBR0E7d0JBQUNlLFdBQVU7OzBDQUNYLDhEQUFDaEIsa0RBQUtBO2dDQUFDaUIsS0FBS1QsS0FBS1UsS0FBSztnQ0FBRUMsT0FBTTs7Ozs7OzBDQUM5Qiw4REFBQ0M7Z0NBQUdKLFdBQVU7MENBQVFSLEtBQUtFLEtBQUs7Ozs7Ozs0QkFFL0JGLEtBQUthLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNyQiw4REFBQ0M7OENBQ0lGLEtBQUtHLElBQUksS0FBSyx3QkFDWCw4REFBQ047OzRDQUFHOzRDQUFFRyxLQUFLSSxJQUFJOzs7Ozs7a0VBRWYsOERBQUNmO3dDQUFFRSxPQUFPOzRDQUFFYyxZQUFZO3dDQUFPO2tEQUFJTCxLQUFLSSxJQUFJOzs7OztpREFDL0M7bUNBTEtIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBWTFCLDhEQUFDckIsaUVBQU1BOzs7Ozs7O0FBR25CO0dBbkNNQzs7UUFDYVIsa0RBQVNBOzs7S0FEdEJRO0FBcUNOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL1tzbHVnXS5qcz82OTBlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL3Bvc3RzL1tzbHVnXS5qc1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHBvc3RzIGZyb20gJy9jb21wb25lbnRzL1RlbXBsYXRlcy9EYXRhL3Bvc3RzJ1xuaW1wb3J0IHNsdWdpZnkgZnJvbSAnc2x1Z2lmeSc7XG5cbmltcG9ydCB7IENvbnRhaW5lciwgSW1hZ2UsIFJvdyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9Gb290ZXInXG5cblxuY29uc3QgUG9zdCA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcblxuICAgIGNvbnN0IHBvc3QgPSBwb3N0cy5maW5kKHBvc3QgPT4gc2x1Z2lmeShwb3N0LnRpdGxlLCB7IGxvd2VyOiB0cnVlIH0pID09PSBzbHVnKTtcblxuICAgIGlmICghcG9zdCkge1xuICAgICAgICByZXR1cm4gPHA+UG9zdCBub3QgZm91bmQ8L3A+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkIHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjRjVGNUY1JyB9fSBjbGFzc05hbWU9J3AtbGctNSBwLTMnPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPSdiZy13aGl0ZSBwLWxnLTUgcC0zJz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9J3AtbGctNSBwLTMgYmctd2hpdGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17cG9zdC5pbWFnZX0gd2lkdGg9XCIxMDAlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3B0LTInPntwb3N0LnRpdGxlfTwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LmNvbnRlbnQubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnR5cGUgPT09ICd0aXRsZScgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+IHtpdGVtLnRleHR9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGxpbmVIZWlnaHQ6ICczMnB4JyB9fT57aXRlbS50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuXG5cblxuXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwicG9zdHMiLCJzbHVnaWZ5IiwiQ29udGFpbmVyIiwiSW1hZ2UiLCJSb3ciLCJIZWFkZXIiLCJGb290ZXIiLCJQb3N0Iiwicm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwicG9zdCIsImZpbmQiLCJ0aXRsZSIsImxvd2VyIiwicCIsImZsdWlkIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiY2xhc3NOYW1lIiwic3JjIiwiaW1hZ2UiLCJ3aWR0aCIsImgyIiwiY29udGVudCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImRpdiIsInR5cGUiLCJ0ZXh0IiwibGluZUhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n"));

/***/ })

});