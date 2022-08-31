import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { configureStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import stockDataReducer from './Stock';

const rootReducer = combineReducers({
  stockDataReducer,
});
const store = configureStore({ reducer: rootReducer }, applyMiddleware(logger, thunk));

export default store;
