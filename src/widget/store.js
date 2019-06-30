import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const initState = {};

const middlware = [thunk];

const store = createStore(
    rootReducer,
    initState, 
    applyMiddleware(...middlware)
);

export default store