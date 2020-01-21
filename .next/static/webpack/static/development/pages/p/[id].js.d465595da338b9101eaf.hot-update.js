webpackHotUpdate("static/development/pages/p/[id].js",{

/***/ "./components/TaskDetail.js":
/*!**********************************!*\
  !*** ./components/TaskDetail.js ***!
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/Users/thesugar/next-todo-app/components/TaskDetail.js";
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
      // 個別タスクのページを直接開いてそこでログインを行った場合のみ
      // ここで Firestore からのデータ取得が行われる。
      // タスク一覧から遷移した場合は props を読むので Firestore との通信は行われない（はず）。
      if (firebase__WEBPACK_IMPORTED_MODULE_10___default.a.auth().currentUser == undefined || firebase__WEBPACK_IMPORTED_MODULE_10___default.a.auth().currentUser == null) {
        return;
      }

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
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
          href: "/p/[id]",
          as: "/p/".concat(data[i]['title']),
          info: data[i],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, __jsx("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, data[i]['title'])), __jsx("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, __jsx("li", {
          key: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, data[i]['detail']), __jsx("li", {
          key: 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, new Date(data[i]['deadline'].seconds * 1000).toLocaleDateString()))));
      }

      return res;
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx(_components_Account__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onLogined: this.logined,
        onLogouted: this.logouted,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, this.props.items == [] ? __jsx("li", {
        key: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "no item.") : __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, this.props.taskData[this.props.docId]['title']), __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "\u8A73\u7D30"), __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, this.props.taskData[this.props.docId]['detail']), __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "\u72B6\u614B"), __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, this.props.taskData[this.props.docId]['state']), __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "\u671F\u65E5"), __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, new Date(this.props.taskData[this.props.docId]['deadline'].seconds * 1000).toLocaleDateString()), __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "\u3053\u306E\u30BF\u30B9\u30AF\u306E\u767B\u9332\u8005"), __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, this.props.taskData[this.props.docId]['publisher']), __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "\u30B0\u30EB\u30FC\u30D7\u540D"), __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, this.props.taskData[this.props.docId]['concerns']), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "\u30BF\u30B9\u30AF\u306E\u5185\u5BB9\u3092\u7DE8\u96C6\u3059\u308B"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "\u30BF\u30B9\u30AF\u3092\u524A\u9664\u3059\u308B"))));
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
//# sourceMappingURL=[id].js.d465595da338b9101eaf.hot-update.js.map