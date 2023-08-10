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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Templates_Data_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/Templates/Data/posts */ \"./components/Templates/Data/posts.js\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slugify */ \"./node_modules/slugify/slugify.js\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_common_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/common/Header */ \"./components/common/Header/index.jsx\");\n// pages/posts/[slug].js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst BlogPost = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { slug  } = router.query;\n    const post = _components_Templates_Data_posts__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find((post)=>slugify__WEBPACK_IMPORTED_MODULE_3___default()(post.title, {\n            lower: true\n        }) === slug);\n    if (!post) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Post not found\"\n        }, void 0, false, {\n            fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n            lineNumber: 17,\n            columnNumber: 16\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                children: post.content.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Image, {\n                                src: post.image,\n                                width: \"100%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                                lineNumber: 28,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"pt-2\",\n                                children: post.title\n                            }, void 0, false, {\n                                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                                lineNumber: 29,\n                                columnNumber: 25\n                            }, undefined),\n                            item.type === \"title\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: item.text\n                            }, void 0, false, {\n                                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                                lineNumber: 32,\n                                columnNumber: 29\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.text\n                            }, void 0, false, {\n                                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                                lineNumber: 34,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(BlogPost, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = BlogPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPost);\nvar _c;\n$RefreshReg$(_c, \"BlogPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHdCQUF3QjtBQUN4Qjs7QUFBd0M7QUFDWTtBQUN0QjtBQUNxQjtBQUVBO0FBR25ELE1BQU1NLFdBQVcsSUFBTTs7SUFDbkIsTUFBTUMsU0FBU1Asc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVEsS0FBSSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFN0IsTUFBTUMsT0FBT1QsNkVBQVUsQ0FBQ1MsQ0FBQUEsT0FBUVIsOENBQU9BLENBQUNRLEtBQUtFLEtBQUssRUFBRTtZQUFFQyxPQUFPLElBQUk7UUFBQyxPQUFPTDtJQUV6RSxJQUFJLENBQUNFLE1BQU07UUFDUCxxQkFBTyw4REFBQ0k7c0JBQUU7Ozs7OztJQUNkLENBQUM7SUFFRCxxQkFDSTs7MEJBQ0ksOERBQUNULGlFQUFNQTs7Ozs7MEJBRVAsOERBQUNGLHNEQUFTQTswQkFFTE8sS0FBS0ssT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ3JCLDhEQUFDQzs7MENBQ0csOERBQUNmLGtEQUFLQTtnQ0FBQ2dCLEtBQUtWLEtBQUtXLEtBQUs7Z0NBQUVDLE9BQU07Ozs7OzswQ0FDOUIsOERBQUNDO2dDQUFHQyxXQUFVOzBDQUFRZCxLQUFLRSxLQUFLOzs7Ozs7NEJBQy9CSyxLQUFLUSxJQUFJLEtBQUssd0JBRVgsOERBQUNGOzBDQUFJTixLQUFLUyxJQUFJOzs7OzswREFFZCw4REFBQ1o7MENBQUdHLEtBQUtTLElBQUk7Ozs7O3lDQUNoQjs7dUJBUktSOzs7Ozs7Ozs7Ozs7QUFlOUI7R0FoQ01aOztRQUNhTixrREFBU0E7OztLQUR0Qk07QUFrQ04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzPzY5MGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvcG9zdHMvW3NsdWddLmpzXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgcG9zdHMgZnJvbSAnL2NvbXBvbmVudHMvVGVtcGxhdGVzL0RhdGEvcG9zdHMnXG5pbXBvcnQgc2x1Z2lmeSBmcm9tICdzbHVnaWZ5JztcbmltcG9ydCB7IENvbnRhaW5lciwgSW1hZ2UgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0hlYWRlcidcblxuXG5jb25zdCBCbG9nUG9zdCA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcblxuICAgIGNvbnN0IHBvc3QgPSBwb3N0cy5maW5kKHBvc3QgPT4gc2x1Z2lmeShwb3N0LnRpdGxlLCB7IGxvd2VyOiB0cnVlIH0pID09PSBzbHVnKTtcblxuICAgIGlmICghcG9zdCkge1xuICAgICAgICByZXR1cm4gPHA+UG9zdCBub3QgZm91bmQ8L3A+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG5cbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgey8qIDxoMT57cG9zdC50aXRsZX08L2gxPiAqL31cbiAgICAgICAgICAgICAgICB7cG9zdC5jb250ZW50Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Bvc3QuaW1hZ2V9IHdpZHRoPVwiMTAwJVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdwdC0yJz57cG9zdC50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udHlwZSA9PT0gJ3RpdGxlJyA/IChcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57aXRlbS50ZXh0fTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC8+XG5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZ1Bvc3Q7XG5cblxuXG5cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJwb3N0cyIsInNsdWdpZnkiLCJDb250YWluZXIiLCJJbWFnZSIsIkhlYWRlciIsIkJsb2dQb3N0Iiwicm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwicG9zdCIsImZpbmQiLCJ0aXRsZSIsImxvd2VyIiwicCIsImNvbnRlbnQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJkaXYiLCJzcmMiLCJpbWFnZSIsIndpZHRoIiwiaDIiLCJjbGFzc05hbWUiLCJ0eXBlIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n"));

/***/ })

});