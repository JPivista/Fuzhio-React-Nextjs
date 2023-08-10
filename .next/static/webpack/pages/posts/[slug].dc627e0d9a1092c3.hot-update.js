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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Templates_Data_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/Templates/Data/posts */ \"./components/Templates/Data/posts.js\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slugify */ \"./node_modules/slugify/slugify.js\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_common_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/common/Header */ \"./components/common/Header/index.jsx\");\n/* harmony import */ var _components_common_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/common/Footer */ \"./components/common/Footer/index.jsx\");\n// pages/posts/[slug].js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst BlogPost = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { slug  } = router.query;\n    const post = _components_Templates_Data_posts__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find((post)=>slugify__WEBPACK_IMPORTED_MODULE_3___default()(post.title, {\n            lower: true\n        }) === slug);\n    if (!post) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Post not found\"\n        }, void 0, false, {\n            fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n            lineNumber: 19,\n            columnNumber: 16\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                children: post.content.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Image, {\n                                src: post.image,\n                                width: \"100%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"pt-2\",\n                                children: post.title\n                            }, void 0, false, {\n                                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                                lineNumber: 31,\n                                columnNumber: 25\n                            }, undefined),\n                            item.type === \"title\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: item.text\n                            }, void 0, false, {\n                                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                                lineNumber: 34,\n                                columnNumber: 29\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.text\n                            }, void 0, false, {\n                                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                                lineNumber: 36,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/JP/Documents/server/fuzhio-1/pages/posts/[slug].js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(BlogPost, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = BlogPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPost);\nvar _c;\n$RefreshReg$(_c, \"BlogPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3QkFBd0I7QUFDeEI7O0FBQXdDO0FBQ1k7QUFDdEI7QUFDcUI7QUFFQTtBQUNBO0FBSW5ELE1BQU1PLFdBQVcsSUFBTTs7SUFDbkIsTUFBTUMsU0FBU1Isc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVMsS0FBSSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFN0IsTUFBTUMsT0FBT1YsNkVBQVUsQ0FBQ1UsQ0FBQUEsT0FBUVQsOENBQU9BLENBQUNTLEtBQUtFLEtBQUssRUFBRTtZQUFFQyxPQUFPLElBQUk7UUFBQyxPQUFPTDtJQUV6RSxJQUFJLENBQUNFLE1BQU07UUFDUCxxQkFBTyw4REFBQ0k7c0JBQUU7Ozs7OztJQUNkLENBQUM7SUFFRCxxQkFDSTs7MEJBQ0ksOERBQUNWLGlFQUFNQTs7Ozs7MEJBRVAsOERBQUNGLHNEQUFTQTswQkFFTFEsS0FBS0ssT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ3JCLDhEQUFDQzs7MENBQ0csOERBQUNoQixrREFBS0E7Z0NBQUNpQixLQUFLVixLQUFLVyxLQUFLO2dDQUFFQyxPQUFNOzs7Ozs7MENBQzlCLDhEQUFDQztnQ0FBR0MsV0FBVTswQ0FBUWQsS0FBS0UsS0FBSzs7Ozs7OzRCQUMvQkssS0FBS1EsSUFBSSxLQUFLLHdCQUVYLDhEQUFDRjswQ0FBSU4sS0FBS1MsSUFBSTs7Ozs7MERBRWQsOERBQUNaOzBDQUFHRyxLQUFLUyxJQUFJOzs7Ozt5Q0FDaEI7O3VCQVJLUjs7Ozs7Ozs7OzswQkFhbEIsOERBQUNiLGlFQUFNQTs7Ozs7OztBQUluQjtHQWxDTUM7O1FBQ2FQLGtEQUFTQTs7O0tBRHRCTztBQW9DTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9bc2x1Z10uanM/NjkwZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9wb3N0cy9bc2x1Z10uanNcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBwb3N0cyBmcm9tICcvY29tcG9uZW50cy9UZW1wbGF0ZXMvRGF0YS9wb3N0cydcbmltcG9ydCBzbHVnaWZ5IGZyb20gJ3NsdWdpZnknO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBJbWFnZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9Gb290ZXInXG5cblxuXG5jb25zdCBCbG9nUG9zdCA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcblxuICAgIGNvbnN0IHBvc3QgPSBwb3N0cy5maW5kKHBvc3QgPT4gc2x1Z2lmeShwb3N0LnRpdGxlLCB7IGxvd2VyOiB0cnVlIH0pID09PSBzbHVnKTtcblxuICAgIGlmICghcG9zdCkge1xuICAgICAgICByZXR1cm4gPHA+UG9zdCBub3QgZm91bmQ8L3A+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG5cbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgey8qIDxoMT57cG9zdC50aXRsZX08L2gxPiAqL31cbiAgICAgICAgICAgICAgICB7cG9zdC5jb250ZW50Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Bvc3QuaW1hZ2V9IHdpZHRoPVwiMTAwJVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdwdC0yJz57cG9zdC50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udHlwZSA9PT0gJ3RpdGxlJyA/IChcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57aXRlbS50ZXh0fTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8Lz5cblxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nUG9zdDtcblxuXG5cblxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInBvc3RzIiwic2x1Z2lmeSIsIkNvbnRhaW5lciIsIkltYWdlIiwiSGVhZGVyIiwiRm9vdGVyIiwiQmxvZ1Bvc3QiLCJyb3V0ZXIiLCJzbHVnIiwicXVlcnkiLCJwb3N0IiwiZmluZCIsInRpdGxlIiwibG93ZXIiLCJwIiwiY29udGVudCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImRpdiIsInNyYyIsImltYWdlIiwid2lkdGgiLCJoMiIsImNsYXNzTmFtZSIsInR5cGUiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n"));

/***/ })

});