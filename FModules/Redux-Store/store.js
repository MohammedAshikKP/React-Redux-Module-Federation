import { combineReducers, createStore } from 'redux';

import {DateCounterReducer} from './DateCounterStore/reducer';
import {CounterReducer} from './NumberCounterStore/reducer'
import * as actions from './actions'
import * as selectors from './selectors'
const rootReducer = combineReducers({
   DateCounterReducer,
   CounterReducer,
});

const store = createStore(rootReducer);
export  {store,actions,selectors} ;
