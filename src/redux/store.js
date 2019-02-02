import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import logger from 'redux-logger';
import characterReducer from './character-reducer';
import pageReducer from './page-reducer';

const store = createStore(
    combineReducers({ page: pageReducer, characters: characterReducer }),
    composeWithDevTools(applyMiddleware(logger))
);

export default store;
