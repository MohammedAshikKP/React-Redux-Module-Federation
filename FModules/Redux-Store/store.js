import { combineReducers, createStore } from 'redux';

import {DateCounterReducer} from './DateCounterStore/reducer';
import {CounterReducer} from './NumberCounterStore/reducer'

const rootReducer = combineReducers({
   DateCounterReducer,
   CounterReducer,
});

const store = createStore(rootReducer);
export default store;
