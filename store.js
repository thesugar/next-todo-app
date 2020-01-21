import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA5tM4PcANnpIJk-vYnYnL-q26QBhZR4zk",
    authDomain: "polished-leaf-256709.firebaseapp.com",
    databaseURL: "https://polished-leaf-256709.firebaseio.com",
    projectId: "polished-leaf-256709",
    storageBucket: "polished-leaf-256709.appspot.com",
    messagingSenderId: "766279430691",
    appId: "1:766279430691:web:153ad2000da94cc7617796",
    measurementId: "G-6M2NQ68H20"
};

// Initialize Firebase
let fireapp;

try {
    fireapp = firebase.initializeApp(firebaseConfig);
    firebase.analytics();
} catch (error) {
    console.log(error.message);
}

export default fireapp;

let initial;
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in.
    console.log('currentUserあり！')
    console.log(firebase.auth().currentUser.displayName)
  } else {
    // No user is signed in.
    console.log('currentUserなし！')
    initial = {
        login : false,
        username : 'unknown',
        email : '',
        data: [],
        items: []
    }
  }
});


// reducer
function fireReducer (state = initial, action) {
    switch (action.type){
        // dummy
        case 'UPDATE_USER':
            return action.value;
        // default
        default:
            return state;
    }
}

// initStore function
function initStore(state = initial) {
    return createStore(fireReducer, state,
        applyMiddleware(thunkMiddleware));}

export { initStore };