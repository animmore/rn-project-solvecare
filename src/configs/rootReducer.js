import {combineReducers} from 'redux'
import {data} from '../reducers/data'
import {onSubmitReducer} from '../reducers/onSubmitReducer'
import {cardInfo} from '../reducers/cardInfo'
export const rootReducer = combineReducers({
  form: data,
  show: onSubmitReducer,
  cardInfo,
})
