webpackHotUpdate("static/development/pages/address.js",{

/***/ "./components/Address.js":
/*!*******************************!*\
  !*** ./components/Address.js ***!
  \*******************************/
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







var _jsxFileName = "/Users/thesugar/next-todo-app/components/Address.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;







var Address =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Address, _Component);

  function Address(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Address);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Address).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "style", {
      fontSize: "12pt",
      padding: "5px 10px"
    });

    _this.logined = _this.logined.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  } // login, logout 処理


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Address, [{
    key: "logined",
    value: function logined() {
      this.getFireData();
    }
  }, {
    key: "logouted",
    value: function logouted() {
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/address');
    } // get data from Firebase

  }, {
    key: "getFireData",
    value: function getFireData() {
      if (this.props.email == undefined || this.props.email == '') {
        return;
      }

      var email = _static_address_lib__WEBPACK_IMPORTED_MODULE_11__["default"].encodeEmail(this.props.email);
      var db = firebase__WEBPACK_IMPORTED_MODULE_10___default.a.firestore(); // firestore のオブジェクト取得

      var ref = db.collection('tasks');
      var self = this;
      ref.get().then(function (querySnapshot) {
        var d = [];
        querySnapshot.forEach(function (doc, index, querySnapshot) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          d.push(_static_address_lib__WEBPACK_IMPORTED_MODULE_11__["default"].deepCopy(doc.data())); // d.push してるのにループのたびにdispatchしてるから無駄な部分はある
          // forEach の中で querySnapshot の length が取得できればいいが、、

          self.props.dispatch({
            type: 'UPDATE_USER',
            value: {
              login: self.props.login,
              username: self.props.username,
              email: self.props.email,
              data: d,
              items: self.getItem(d)
            }
          });
        });
      });
    } // data を元に表示項目を作成

  }, {
    key: "getItem",
    value: function getItem(data) {
      console.log('data is');
      console.log(data);

      if (data == undefined) {
        return;
      }

      var res = [];

      for (var i = 0; i < data.length; i++) {
        res.push(__jsx("li", {
          key: data[i]['id'],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, data[i]['title'], __jsx("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, __jsx("li", {
          key: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, data[i]['detail']), __jsx("li", {
          key: 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, type(data[i]['deadline'])))));
      }

      return res;
    } // データ表示ページの移動

  }, {
    key: "go",
    value: function go(email) {
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/address_show?email=' + email);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx(_components_Account__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onLogined: this.logined,
        onLogouted: this.logouted,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, this.props.items == [] ? __jsx("li", {
        key: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "no item.") : this.props.items));
    }
  }]);

  return Address;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Address = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(function (state) {
  return state;
})(Address);
/* harmony default export */ __webpack_exports__["default"] = (Address);

/***/ })

})
//# sourceMappingURL=address.js.1b6b7257e8bfadf6a2a9.hot-update.js.map