import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';

export const rootReducer = combineReducers({
    reducers: reducers, 
})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))