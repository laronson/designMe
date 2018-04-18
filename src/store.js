import { combineReducers } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import mainPageReducer from './m-homePage/Reducers/index.js';

const rootReducer = combineReducers({
	mainPageReducer
});

const middleWare = [thunkMiddleware, createLogger()];
//prepare for production env if gets to that point
// if(true) {
// 	middleWare.push(createLogger());
// }

const createStoreWithMiddleWare = applyMiddleware(...middleWare)(createStore);
export default function configureStore(initialState) {
	return createStoreWithMiddleWare(rootReducer, initialState)
}

