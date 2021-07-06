import {createStore,combineReducers,applyMiddleware} from 'redux'
import myReducer from '../Reducer/Reducer'
import logger from 'redux-logger'

const combinedReducers = combineReducers({myReducer});

const myStore = createStore(combinedReducers,applyMiddleware(logger));

export default myStore;