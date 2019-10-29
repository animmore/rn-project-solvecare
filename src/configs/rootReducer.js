import {combineReducers} from 'redux'
import {creditCardData} from '../reducers/creditCardData'
import {displayCard} from '../reducers/displayCard'
import {cardInfo} from '../reducers/cardInfo'
export const rootReducer = combineReducers({
  creditCardData,
  displayCard,
  cardInfo,
})
