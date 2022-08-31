import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { configureStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import stockDataReducer from './Stock';

const reducer = combineReducers({ stockDataReducer });
const store = configureStore(reducer, applyMiddleware(logger, thunk));

export default store;
