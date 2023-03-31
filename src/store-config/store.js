import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loadFromLocalStorage } from './localStorage';
import TaskReducer from '../store/reducer';

const rootReducer = combineReducers({
  cardReducer: TaskReducer  
});

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadFromLocalStorage(),
    devTools: true
});
