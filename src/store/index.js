import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from './middleware/thunk.js';

import reviewsReducer from './reviewsReducer.js';


let reducers = {
  reviews: reviewsReducer,
};

const store = () => createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunk)));

export default store();