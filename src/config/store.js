import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducer';

let middlewares = [thunk];
if (process.env.NODE_ENV !== 'production') {
	middlewares = [...middlewares, logger]
}

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;