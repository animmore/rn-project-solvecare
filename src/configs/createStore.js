import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from '../../src/configs/rootReducer'
// import {createLogger} from 'redux-logger'
// import logger from 'redux-logger'

export const store = createStore(rootReducer, applyMiddleware(thunk)) // logger
