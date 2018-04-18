import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App.js';
import { Provider } from 'react-redux';
import configureStore from './store.js';
import {HashRouter as Router
	, Route
	, hashHistory} from 'react-router-dom'
// import Router from 'react-router'
// import Route from 'react-router'

import MainPage from './m-homePage/Components/index.js';
import * as firebase from 'firebase';

var config = {
	apiKey: "AIzaSyCADM2TpwQxZ0nZHNkvwF7EkIsbFqgWg0Y",
	authDomain: "designme-353f7.firebaseapp.com",
	databaseURL: "https://designme-353f7.firebaseio.com",
	projectId: "designme-353f7",
	storageBucket: "",
	messagingSenderId: "705980457637"
};
firebase.initializeApp(config);
 
ReactDOM.render(
	<Provider store={configureStore()}>
		<div>
			<Router>
    			<Route path={'/'} component={MainPage} />
    		</Router>
    	</div>
	</Provider>
, document.getElementById('app'));