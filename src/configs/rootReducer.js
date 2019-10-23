import {combineReducers} from 'redux'
import {setData} from '../reducers/setData'
import {displayCard} from '../reducers/displayCard'
import {cardInfo} from '../reducers/cardInfo'
export const rootReducer = combineReducers({
  setData,
  displayCard,
  cardInfo,
})
