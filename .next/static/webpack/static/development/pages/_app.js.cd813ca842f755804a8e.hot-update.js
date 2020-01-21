webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: default, initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);



var firebaseConfig = {
  apiKey: "AIzaSyA5tM4PcANnpIJk-vYnYnL-q26QBhZR4zk",
  authDomain: "polished-leaf-256709.firebaseapp.com",
  databaseURL: "https://polished-leaf-256709.firebaseio.com",
  projectId: "polished-leaf-256709",
  storageBucket: "polished-leaf-256709.appspot.com",
  messagingSenderId: "766279430691",
  appId: "1:766279430691:web:153ad2000da94cc7617796",
  measurementId: "G-6M2NQ68H20"
}; // Initialize Firebase

var fireapp;

try {
  fireapp = firebase__WEBPACK_IMPORTED_MODULE_2___default.a.initializeApp(firebaseConfig);
  firebase__WEBPACK_IMPORTED_MODULE_2___default.a.analytics();
} catch (error) {
  console.log(error.message);
}

/* harmony default export */ __webpack_exports__["default"] = (fireapp);
var initial;
firebase__WEBPACK_IMPORTED_MODULE_2___default.a.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    console.log('currentUserあり！');
    console.log(firebase__WEBPACK_IMPORTED_MODULE_2___default.a.auth().currentUser.displayName);
  } else {
    // No user is signed in.
    console.log('currentUserなし！');
    initial = {
      login: false,
      username: 'unknown',
      email: '',
      data: [],
      items: []
    };
  }
}); // reducer

function fireReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    // dummy
    case 'UPDATE_USER':
      return action.value;
    // default

    default:
      return state;
  }
} // initStore function


function initStore() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(fireReducer, state, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]));
}



/***/ })

})
//# sourceMappingURL=_app.js.cd813ca842f755804a8e.hot-update.js.map