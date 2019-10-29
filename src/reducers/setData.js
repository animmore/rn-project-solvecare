//@flow
import {SET_CARD_DATA, SET_IS_FORM_VISIBLE} from '../actions/actions'

const initialValue = {
  creditCardNumber: '',
  expirationDate: '',
  cvv: '',
  firstName: '',
  lastName: '',
  secretQuestion: '',
  secretAnswer: '',
}

export const setData = (
  state: {
    creditCardNumber: string,
    expirationDate: string,
    cvv: string,
    firstName: string,
    lastName: string,
    secretQuestion: string,
    secretAnswer: string,
  } = initialValue,
  action: {
    type: string,
    payload: {
      creditCardNumber: string,
      expirationDate: string,
      cvv: string,
      firstName: string,
      lastName: string,
      secretQuestion: string,
      secretAnswer: string,
    },
  },
) => {
  switch (action.type) {
    case SET_CARD_DATA:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
