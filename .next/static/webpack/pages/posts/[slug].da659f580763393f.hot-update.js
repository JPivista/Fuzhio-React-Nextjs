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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Templates_Data_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/Templates/Data/posts */ \"./components/Templates/Data/posts.js\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slugify */ \"./node_modules/slugify/slugify.js\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_common_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/common/Header */ \"./components/common/Header/index.jsx\");\n/* harmony import */ var _components_common_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/common/Footer */ \"./components/common/Footer/index.jsx\");\n// pages/posts/[slug].js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Post = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { slug  } = router.query;\n    const post = _components_Templates_Data_posts__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find((post)=>slugify__WEBPACK_IMPORTED_MODULE_3___default()(post.title, {\n            lower: true\n        }) === slug);\n    if (!post) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Post not found\"\n        }, void 0, false, {\n            fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n            lineNumber: 19,\n            columnNumber: 16\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                fluid: true,\n                style: {\n                    background: \"#F5F5F5\"\n                },\n                className: \"p-lg-5 p-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n                        className: \"p-lg-5 p-3 bg-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Image, {\n                                src: post.image,\n                                width: \"100%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                                lineNumber: 28,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"pt-2\",\n                                children: post.title\n                            }, void 0, false, {\n                                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                                lineNumber: 29,\n                                columnNumber: 25\n                            }, undefined),\n                            post.content.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: item.type === \"title\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: item.text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                                        lineNumber: 34,\n                                        columnNumber: 37\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: item.text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                                        lineNumber: 36,\n                                        columnNumber: 37\n                                    }, undefined)\n                                }, index, false, {\n                                    fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                                    lineNumber: 32,\n                                    columnNumber: 29\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3QkFBd0I7QUFDeEI7O0FBQXdDO0FBQ1k7QUFDdEI7QUFFMEI7QUFFTDtBQUNBO0FBR25ELE1BQU1RLE9BQU8sSUFBTTs7SUFDZixNQUFNQyxTQUFTVCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFVSxLQUFJLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUU3QixNQUFNQyxPQUFPWCw2RUFBVSxDQUFDVyxDQUFBQSxPQUFRViw4Q0FBT0EsQ0FBQ1UsS0FBS0UsS0FBSyxFQUFFO1lBQUVDLE9BQU8sSUFBSTtRQUFDLE9BQU9MO0lBRXpFLElBQUksQ0FBQ0UsTUFBTTtRQUNQLHFCQUFPLDhEQUFDSTtzQkFBRTs7Ozs7O0lBQ2QsQ0FBQztJQUVELHFCQUNJOzswQkFDSSw4REFBQ1YsaUVBQU1BOzs7OzswQkFDUCw4REFBQ0gsc0RBQVNBO2dCQUFDYyxLQUFLO2dCQUFDQyxPQUFPO29CQUFFQyxZQUFZO2dCQUFVO2dCQUFHQyxXQUFVOzBCQUN6RCw0RUFBQ2pCLHNEQUFTQTs4QkFDTiw0RUFBQ0UsZ0RBQUdBO3dCQUFDZSxXQUFVOzswQ0FDWCw4REFBQ2hCLGtEQUFLQTtnQ0FBQ2lCLEtBQUtULEtBQUtVLEtBQUs7Z0NBQUVDLE9BQU07Ozs7OzswQ0FDOUIsOERBQUNDO2dDQUFHSixXQUFVOzBDQUFRUixLQUFLRSxLQUFLOzs7Ozs7NEJBRS9CRixLQUFLYSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDckIsOERBQUNDOzhDQUNJRixLQUFLRyxJQUFJLEtBQUssd0JBQ1gsOERBQUNOO2tEQUFJRyxLQUFLSSxJQUFJOzs7OztrRUFFZCw4REFBQ2Y7a0RBQUdXLEtBQUtJLElBQUk7Ozs7O2lEQUNoQjttQ0FMS0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFZMUIsOERBQUNyQixpRUFBTUE7Ozs7Ozs7QUFHbkI7R0FuQ01DOztRQUNhUixrREFBU0E7OztLQUR0QlE7QUFxQ04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzPzY5MGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvcG9zdHMvW3NsdWddLmpzXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgcG9zdHMgZnJvbSAnL2NvbXBvbmVudHMvVGVtcGxhdGVzL0RhdGEvcG9zdHMnXG5pbXBvcnQgc2x1Z2lmeSBmcm9tICdzbHVnaWZ5JztcblxuaW1wb3J0IHsgQ29udGFpbmVyLCBJbWFnZSwgUm93IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9IZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0Zvb3RlcidcblxuXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gICAgY29uc3QgcG9zdCA9IHBvc3RzLmZpbmQocG9zdCA9PiBzbHVnaWZ5KHBvc3QudGl0bGUsIHsgbG93ZXI6IHRydWUgfSkgPT09IHNsdWcpO1xuXG4gICAgaWYgKCFwb3N0KSB7XG4gICAgICAgIHJldHVybiA8cD5Qb3N0IG5vdCBmb3VuZDwvcD47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDxDb250YWluZXIgZmx1aWQgc3R5bGU9e3sgYmFja2dyb3VuZDogJyNGNUY1RjUnIH19IGNsYXNzTmFtZT0ncC1sZy01IHAtMyc+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9J3AtbGctNSBwLTMgYmctd2hpdGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17cG9zdC5pbWFnZX0gd2lkdGg9XCIxMDAlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3B0LTInPntwb3N0LnRpdGxlfTwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LmNvbnRlbnQubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnR5cGUgPT09ICd0aXRsZScgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2l0ZW0udGV4dH08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0udGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcblxuXG5cblxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInBvc3RzIiwic2x1Z2lmeSIsIkNvbnRhaW5lciIsIkltYWdlIiwiUm93IiwiSGVhZGVyIiwiRm9vdGVyIiwiUG9zdCIsInJvdXRlciIsInNsdWciLCJxdWVyeSIsInBvc3QiLCJmaW5kIiwidGl0bGUiLCJsb3dlciIsInAiLCJmbHVpZCIsInN0eWxlIiwiYmFja2dyb3VuZCIsImNsYXNzTmFtZSIsInNyYyIsImltYWdlIiwid2lkdGgiLCJoMiIsImNvbnRlbnQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJkaXYiLCJ0eXBlIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n"));

/***/ })

});