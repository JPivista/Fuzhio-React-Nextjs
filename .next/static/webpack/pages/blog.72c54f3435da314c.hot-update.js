"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./components/blog/DyamicLoopTemplate.js":
/*!***********************************************!*\
  !*** ./components/blog/DyamicLoopTemplate.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Templates_Data_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Templates/Data/posts */ \"./components/Templates/Data/posts.js\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slugify */ \"./node_modules/slugify/slugify.js\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n// pages/index.js\n\n\n\n\n\nconst Home = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        fluid: true,\n        style: {\n            background: \"#F5F5F5\"\n        },\n        className: \"p-lg-5 p-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            className: \"bg-white p-lg-5 p-3p-3\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n                className: \"p-lg-5 p-3\",\n                children: _Templates_Data_posts__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/posts/\".concat(slugify__WEBPACK_IMPORTED_MODULE_3___default()(post.title, {\n                                    lower: true\n                                })),\n                                className: \"text-black\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                                        src: post.image,\n                                        width: \"100%\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/JP/Documents/server/fuzhio-1/components/blog/DyamicLoopTemplate.js\",\n                                        lineNumber: 17,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: post.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/JP/Documents/server/fuzhio-1/components/blog/DyamicLoopTemplate.js\",\n                                        lineNumber: 18,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/JP/Documents/server/fuzhio-1/components/blog/DyamicLoopTemplate.js\",\n                                lineNumber: 16,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    style: {\n                                        color: \"#b34738\"\n                                    },\n                                    children: post.date\n                                }, void 0, false, {\n                                    fileName: \"/Users/JP/Documents/server/fuzhio-1/components/blog/DyamicLoopTemplate.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/JP/Documents/server/fuzhio-1/components/blog/DyamicLoopTemplate.js\",\n                                lineNumber: 20,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \" \",\n                                        post.excerpt\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/JP/Documents/server/fuzhio-1/components/blog/DyamicLoopTemplate.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/JP/Documents/server/fuzhio-1/components/blog/DyamicLoopTemplate.js\",\n                                lineNumber: 23,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, post.title, true, {\n                        fileName: \"/Users/JP/Documents/server/fuzhio-1/components/blog/DyamicLoopTemplate.js\",\n                        lineNumber: 15,\n                        columnNumber: 25\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/JP/Documents/server/fuzhio-1/components/blog/DyamicLoopTemplate.js\",\n                lineNumber: 11,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/JP/Documents/server/fuzhio-1/components/blog/DyamicLoopTemplate.js\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/JP/Documents/server/fuzhio-1/components/blog/DyamicLoopTemplate.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jsb2cvRHlhbWljTG9vcFRlbXBsYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGlCQUFpQjtBQUNqQjtBQUE2QjtBQUNjO0FBQ2I7QUFDK0I7QUFFN0QsTUFBTU8sT0FBTyxJQUFNO0lBQ2YscUJBQ0ksOERBQUNILHNEQUFTQTtRQUFDSSxLQUFLO1FBQUNDLE9BQU87WUFBRUMsWUFBWTtRQUFVO1FBQUdDLFdBQVU7a0JBQ3pELDRFQUFDUCxzREFBU0E7WUFBQ08sV0FBVTtzQkFDakIsNEVBQUNMLGdEQUFHQTtnQkFBQ0ssV0FBVTswQkFFVlYsaUVBQVMsQ0FBQ1ksQ0FBQUEscUJBRVAsOERBQUNDOzswQ0FDRyw4REFBQ0M7Z0NBQUVDLE1BQU0sVUFBK0MsT0FBckNkLDhDQUFPQSxDQUFDVyxLQUFLSSxLQUFLLEVBQUU7b0NBQUVDLE9BQU8sSUFBSTtnQ0FBQztnQ0FBTVAsV0FBVTs7a0RBQ2pFLDhEQUFDTixrREFBS0E7d0NBQUNjLEtBQUtOLEtBQUtPLEtBQUs7d0NBQUVDLE9BQU07Ozs7OztrREFDOUIsOERBQUNDO2tEQUFJVCxLQUFLSSxLQUFLOzs7Ozs7Ozs7Ozs7MENBRW5CLDhEQUFDSDswQ0FDRyw0RUFBQ1M7b0NBQUVkLE9BQU87d0NBQUVlLE9BQU87b0NBQVU7OENBQUlYLEtBQUtZLElBQUk7Ozs7Ozs7Ozs7OzBDQUU5Qyw4REFBQ1g7MENBQ0csNEVBQUNTOzt3Q0FBRTt3Q0FBRVYsS0FBS2EsT0FBTzs7Ozs7Ozs7Ozs7Ozt1QkFUZmIsS0FBS0ksS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQjVDO0tBekJNVjtBQTJCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Jsb2cvRHlhbWljTG9vcFRlbXBsYXRlLmpzPzU1MmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvaW5kZXguanNcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgcG9zdHMgZnJvbSAnLi4vVGVtcGxhdGVzL0RhdGEvcG9zdHMnXG5pbXBvcnQgc2x1Z2lmeSBmcm9tICdzbHVnaWZ5JztcbmltcG9ydCB7IENvbCwgQ29udGFpbmVyLCBJbWFnZSwgUm93IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkIHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjRjVGNUY1JyB9fSBjbGFzc05hbWU9J3AtbGctNSBwLTMnPlxuICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9J2JnLXdoaXRlIHAtbGctNSBwLTNwLTMnPlxuICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPSdwLWxnLTUgcC0zJz5cblxuICAgICAgICAgICAgICAgICAgICB7cG9zdHMubWFwKHBvc3QgPT4gKFxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cG9zdC50aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC9wb3N0cy8ke3NsdWdpZnkocG9zdC50aXRsZSwgeyBsb3dlcjogdHJ1ZSB9KX1gfSBjbGFzc05hbWU9J3RleHQtYmxhY2snPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwb3N0LmltYWdlfSB3aWR0aD1cIjEwMCVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjYjM0NzM4JyB9fT57cG9zdC5kYXRlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ge3Bvc3QuZXhjZXJwdH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L0NvbnRhaW5lciA+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJwb3N0cyIsInNsdWdpZnkiLCJDb2wiLCJDb250YWluZXIiLCJJbWFnZSIsIlJvdyIsIkhvbWUiLCJmbHVpZCIsInN0eWxlIiwiYmFja2dyb3VuZCIsImNsYXNzTmFtZSIsIm1hcCIsInBvc3QiLCJkaXYiLCJhIiwiaHJlZiIsInRpdGxlIiwibG93ZXIiLCJzcmMiLCJpbWFnZSIsIndpZHRoIiwiaDEiLCJwIiwiY29sb3IiLCJkYXRlIiwiZXhjZXJwdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/blog/DyamicLoopTemplate.js\n"));

/***/ })

});