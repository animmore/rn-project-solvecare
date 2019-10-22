import {combineReducers} from 'redux'
import {formReducer} from '../reducers/reducers'
import {onSubmitReducer} from '../reducers/onSubmitReducer'
import {formMainData} from '../reducers/cardMainDataReducer'
export const rootReducer = combineReducers({
  form: formReducer,
  show: onSubmitReducer,
  main: formMainData,
})
