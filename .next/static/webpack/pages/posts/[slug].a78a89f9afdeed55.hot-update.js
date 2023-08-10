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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Templates_Data_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/Templates/Data/posts */ \"./components/Templates/Data/posts.js\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slugify */ \"./node_modules/slugify/slugify.js\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_common_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/common/Header */ \"./components/common/Header/index.jsx\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n// pages/posts/[slug].js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Post = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { slug  } = router.query;\n    const post = _components_Templates_Data_posts__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find((post)=>slugify__WEBPACK_IMPORTED_MODULE_3___default()(post.title, {\n            lower: true\n        }) === slug);\n    if (!post) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Post not found\"\n        }, void 0, false, {\n            fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n            lineNumber: 16,\n            columnNumber: 16\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Image, {\n                        src: post.image,\n                        width: \"100%\"\n                    }, void 0, false, {\n                        fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"pt-2\",\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, undefined),\n                    post.content.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: item.type === \"title\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: item.text\n                            }, void 0, false, {\n                                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                                lineNumber: 29,\n                                columnNumber: 33\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.text\n                            }, void 0, false, {\n                                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                                lineNumber: 31,\n                                columnNumber: 33\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                            lineNumber: 27,\n                            columnNumber: 25\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                lineNumber: 22,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHdCQUF3QjtBQUN4Qjs7QUFBd0M7QUFDWTtBQUN0QjtBQUVxQjtBQUNLO0FBRXhELE1BQU1PLE9BQU8sSUFBTTs7SUFDZixNQUFNQyxTQUFTUixzREFBU0E7SUFDeEIsTUFBTSxFQUFFUyxLQUFJLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUU3QixNQUFNQyxPQUFPViw2RUFBVSxDQUFDVSxDQUFBQSxPQUFRVCw4Q0FBT0EsQ0FBQ1MsS0FBS0UsS0FBSyxFQUFFO1lBQUVDLE9BQU8sSUFBSTtRQUFDLE9BQU9MO0lBRXpFLElBQUksQ0FBQ0UsTUFBTTtRQUNQLHFCQUFPLDhEQUFDSTtzQkFBRTs7Ozs7O0lBQ2QsQ0FBQztJQUVELHFCQUNJO2tCQUNJLDRFQUFDWCxzREFBU0E7c0JBQ04sNEVBQUNFLGdEQUFHQTs7a0NBQ0EsOERBQUNELGtEQUFLQTt3QkFBQ1csS0FBS0wsS0FBS00sS0FBSzt3QkFBRUMsT0FBTTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUdDLFdBQVU7a0NBQVFULEtBQUtFLEtBQUs7Ozs7OztvQkFFL0JGLEtBQUtVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNyQiw4REFBQ0M7c0NBQ0lGLEtBQUtHLElBQUksS0FBSyx3QkFDWCw4REFBQ1A7MENBQUlJLEtBQUtJLElBQUk7Ozs7OzBEQUVkLDhEQUFDWjswQ0FBR1EsS0FBS0ksSUFBSTs7Ozs7eUNBQ2hCOzJCQUxLSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZbEM7R0E5Qk1qQjs7UUFDYVAsa0RBQVNBOzs7S0FEdEJPO0FBZ0NOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL1tzbHVnXS5qcz82OTBlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL3Bvc3RzL1tzbHVnXS5qc1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHBvc3RzIGZyb20gJy9jb21wb25lbnRzL1RlbXBsYXRlcy9EYXRhL3Bvc3RzJ1xuaW1wb3J0IHNsdWdpZnkgZnJvbSAnc2x1Z2lmeSc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vSGVhZGVyJ1xuaW1wb3J0IHsgQ29udGFpbmVyLCBJbWFnZSwgUm93IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuY29uc3QgUG9zdCA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcblxuICAgIGNvbnN0IHBvc3QgPSBwb3N0cy5maW5kKHBvc3QgPT4gc2x1Z2lmeShwb3N0LnRpdGxlLCB7IGxvd2VyOiB0cnVlIH0pID09PSBzbHVnKTtcblxuICAgIGlmICghcG9zdCkge1xuICAgICAgICByZXR1cm4gPHA+UG9zdCBub3QgZm91bmQ8L3A+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Bvc3QuaW1hZ2V9IHdpZHRoPVwiMTAwJVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3B0LTInPntwb3N0LnRpdGxlfTwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAge3Bvc3QuY29udGVudC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnR5cGUgPT09ICd0aXRsZScgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57aXRlbS50ZXh0fTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0udGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcblxuXG5cblxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInBvc3RzIiwic2x1Z2lmeSIsIkhlYWRlciIsIkNvbnRhaW5lciIsIkltYWdlIiwiUm93IiwiUG9zdCIsInJvdXRlciIsInNsdWciLCJxdWVyeSIsInBvc3QiLCJmaW5kIiwidGl0bGUiLCJsb3dlciIsInAiLCJzcmMiLCJpbWFnZSIsIndpZHRoIiwiaDIiLCJjbGFzc05hbWUiLCJjb250ZW50IiwibWFwIiwiaXRlbSIsImluZGV4IiwiZGl2IiwidHlwZSIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n"));

/***/ })

});