// ./src/index.jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import App from './App.component.jsx'
import ScrollToTop from './helpers/ScrollToTop.component.jsx'

import RootReducer from './RootReducer.js'

const persistedState = localStorage.getItem("saveData") ? JSON.parse(localStorage.getItem('saveData')) : {};
const store = createStore(RootReducer, persistedState, applyMiddleware(thunkMiddleware));
window.store = store;

ReactDOM.render(
	<BrowserRouter>
		<ScrollToTop />
		<Provider store={store}>
			<App></App>
		</Provider>
	</BrowserRouter>
	,
	document.getElementById('application')
);

store.subscribe(()=>{
	const saveData = {
		mailingList: store.getState().mailingList
	};
  	localStorage.setItem("saveData", JSON.stringify(saveData));
})
