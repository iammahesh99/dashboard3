import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './chat';
import * as serviceWorker from './serviceWorker';
import './index.css';
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyCocnj6dPiYXUwA4vZVAztDGDdMGVoTh8k",
    authDomain: "react-dashboard-2bd71.firebaseapp.com",
    databaseURL: "https://react-dashboard-2bd71.firebaseio.com",
    projectId: "react-dashboard-2bd71",
    storageBucket: "react-dashboard-2bd71.appspot.com",
    messagingSenderId: "223418681944",
    appId: "1:223418681944:web:64bb19cf170cb4275f582d",
    measurementId: "G-3HZ1N0S20Q"
})




ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>
	, document.getElementById('root'));

	
	serviceWorker.unregister();


