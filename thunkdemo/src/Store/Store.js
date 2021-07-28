import {createStore,combineReducers,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import myReducer from '../Reducer/Reducer'

const combinedReducers = combineReducers({myReducer})

const myStore = createStore(combinedReducers,applyMiddleware(logger,thunk))

export default myStore;