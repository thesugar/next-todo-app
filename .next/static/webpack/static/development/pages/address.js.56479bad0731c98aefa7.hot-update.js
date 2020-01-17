webpackHotUpdate("static/development/pages/address.js",{

/***/ "./components/Account.js":
/*!*******************************!*\
  !*** ./components/Account.js ***!
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
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/thesugar/next-todo-app/components/Account.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var Account =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Account, _Component);

  function Account(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Account);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Account).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "style", {
      fontSize: "12pt",
      padding: "5px 10px"
    });

    _this.login_check = _this.login_check.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Account, [{
    key: "login",
    value: function login() {
      var _this2 = this;

      firebase__WEBPACK_IMPORTED_MODULE_9___default.a.auth().setPersistence(firebase__WEBPACK_IMPORTED_MODULE_9___default.a.auth.Auth.Persistence.LOCAL).then(function () {
        var provider = new firebase__WEBPACK_IMPORTED_MODULE_9___default.a.auth.GoogleAuthProvider();
        var self = _this2;
        firebase__WEBPACK_IMPORTED_MODULE_9___default.a.auth().setPersistence(firebase__WEBPACK_IMPORTED_MODULE_9___default.a.auth.Auth.Persistence.LOCAL);
        firebase__WEBPACK_IMPORTED_MODULE_9___default.a.auth().signInWithPopup(provider).then(function (result) {
          _this2.props.dispatch({
            type: 'UPDATE_USER',
            value: {
              login: true,
              username: result.user.displayName,
              email: result.user.email,
              data: _this2.props.data,
              items: _this2.props.items
            }
          });

          _this2.props.onLogined();
        });
      });
    }
  }, {
    key: "logout",
    value: function logout() {
      console.log("logout");
      firebase__WEBPACK_IMPORTED_MODULE_9___default.a.auth().signOut();
      this.props.dispatch({
        type: 'UPDATE_USER',
        value: {
          login: false,
          username: '(click here!)',
          email: '',
          data: [],
          items: []
        }
      });
      this.props.onLogouted();
    } // check if user is logged in or logged out

  }, {
    key: "login_check",
    value: function login_check() {
      if (this.props.login == false) {
        this.login();
      } else {
        this.logout();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      firebase__WEBPACK_IMPORTED_MODULE_9___default.a.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          _this3.username_ = user.displayName;
        } else {// No user is signed in.
        }
      });
      return __jsx("p", {
        className: "login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("span", {
        className: "acount",
        onClick: this.login_check,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "LOGINED: ", this.props.username));
    }
  }]);

  return Account;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Account = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(function (state) {
  return state;
})(Account);
/* harmony default export */ __webpack_exports__["default"] = (Account);

/***/ })

})
//# sourceMappingURL=address.js.56479bad0731c98aefa7.hot-update.js.map