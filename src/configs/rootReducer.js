import {combineReducers} from 'redux'
import {formReducer} from '../reducers/reducers'
import {onSubmitReducer} from '../reducers/onSubmitReducer'

export const rootReducer = combineReducers({
  form: formReducer,
  show: onSubmitReducer,
})
