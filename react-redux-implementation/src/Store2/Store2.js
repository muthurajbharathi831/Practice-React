import {createStore,combineReducers,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import myReducer2 from '../Reducer2/Reducer2'

const combinedReducers = combineReducers({myReducer2})
const myStore2 = createStore(combinedReducers,applyMiddleware(logger))

export default myStore2;