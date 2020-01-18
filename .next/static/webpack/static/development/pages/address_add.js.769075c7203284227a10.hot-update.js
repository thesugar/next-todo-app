webpackHotUpdate("static/development/pages/address_add.js",{

/***/ "./components/AddressAdd.js":
/*!**********************************!*\
  !*** ./components/AddressAdd.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_address_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../static/address_lib */ "./static/address_lib.js");
/* harmony import */ var _components_Account__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Account */ "./components/Account.js");







var _jsxFileName = "/Users/thesugar/next-todo-app/components/AddressAdd.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;







var AddressAdd =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AddressAdd, _Component);

  function AddressAdd(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddressAdd);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AddressAdd).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "style", {
      fontSize: "12pt",
      padding: "5px 10px"
    });

    if (_this.props.login == false) {
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/address');
    }

    _this.state = {
      title: '',
      detail: '',
      deadline: '',
      concerns: '',
      message: 'タスクを追加するには以下を入力してください'
    };
    _this.logined = _this.logined.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onChangeTitle = _this.onChangeTitle.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onChangeDetail = _this.onChangeDetail.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onChangeDeadline = _this.onChangeDeadline.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onChangeConcerns = _this.onChangeConcerns.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.doAction = _this.doAction.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  } // login, logout 処理


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AddressAdd, [{
    key: "logined",
    value: function logined() {
      console.log('logined.');
    }
  }, {
    key: "logouted",
    value: function logouted() {
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/address');
    } // フィールド入力処理

  }, {
    key: "onChangeTitle",
    value: function onChangeTitle(e) {
      this.setState({
        title: e.target.value
      });
    }
  }, {
    key: "onChangeDetail",
    value: function onChangeDetail(e) {
      this.setState({
        detail: e.target.value
      });
    }
  }, {
    key: "onChangeDeadline",
    value: function onChangeDeadline(e) {
      this.setState({
        deadline: e.target.value
      });
    }
  }, {
    key: "onChangeConcerns",
    value: function onChangeConcerns(e) {
      this.setState({
        concerns: e.target.value
      });
    } // データの登録処理

  }, {
    key: "doAction",
    value: function doAction(e) {
      var data = {
        title: this.state.title,
        detail: this.state.detail,
        deadline: this.state.deadline,
        concerns: this.state.concerns,
        publisher: firebase__WEBPACK_IMPORTED_MODULE_10___default.a.auth().currentUser.uid,
        state: 'doing'
      };
      var db = firebase__WEBPACK_IMPORTED_MODULE_10___default.a.firestore(); // Firestore の登録処理

      db.collection('tasks').add({
        data: data
      }).then(function (doc) {
        console.log("\u8FFD\u52A0\u306B\u6210\u529F\u3057\u307E\u3057\u305F (".concat(doc.id, ")"));
      })["catch"](function (error) {
        console.log("\u8FFD\u52A0\u306B\u5931\u6557\u3057\u307E\u3057\u305F (".concat(error, ")"));
      });
      this.setState({
        title: '',
        detail: '',
        deadline: '',
        concerns: '',
        message: '登録しました。'
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx(_components_Account__WEBPACK_IMPORTED_MODULE_12__["default"], {
        self: this,
        onLogined: this.logined,
        onLogouted: this.logouted,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, this.state.message), this.props.login ? __jsx("table", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "\u30BF\u30B9\u30AF\u540D:"), __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, __jsx("input", {
        type: "text",
        size: "30",
        value: this.state.title,
        onChange: this.onChangeTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }))), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "\u30BF\u30B9\u30AF\u8A73\u7D30:"), __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, __jsx("input", {
        type: "text",
        size: "30",
        value: this.state.detail,
        onChange: this.onChangeDetail,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }))), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "\u671F\u9650:"), __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, __jsx("input", {
        type: "text",
        size: "30",
        value: this.state.deadline,
        onChange: this.onChangeDeadline,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }))), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "\u30B0\u30EB\u30FC\u30D7:"), __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, __jsx("input", {
        type: "text",
        size: "30",
        value: this.state.concerns,
        onChange: this.onChangeConcerns,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }))), __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, __jsx("button", {
        onClick: this.doAction,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "\u767B\u9332"))))) : __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "please login..."));
    }
  }]);

  return AddressAdd;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

AddressAdd = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(function (state) {
  return state;
})(AddressAdd);
/* harmony default export */ __webpack_exports__["default"] = (AddressAdd);

/***/ })

})
//# sourceMappingURL=address_add.js.769075c7203284227a10.hot-update.js.map