import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT43_cGpavzk-wIyWL2UccjMc8tun-usY",
  authDomain: "games-9e235.firebaseapp.com",
  projectId: "games-9e235",
  storageBucket: "games-9e235.appspot.com",
  messagingSenderId: "799209103740",
  appId: "1:799209103740:web:5d7183fcc8fbd3de0fc4f9",
  measurementId: "G-S0GV66RERD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
