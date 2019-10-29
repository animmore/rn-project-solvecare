import {Action} from 'rxjs/internal/scheduler/Action'
import {statement} from '@babel/template'

/*eslint-disable*/

export const SET_IS_FORM_VISIBLE = 'SET_IS_FORM_VISIBLE'
export const SET_CARD_DATA = 'SET_CARD_DATA'

export const setIsFormVisible = (isFormVisible: boolean) => ({
  type: SET_IS_FORM_VISIBLE,
  payload: isFormVisible,
})

export const setCardData = (
  creditCardNumber: string,
  expirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
  secretQuestion: string,
  secretAnswer: string,
) => {
  return
  {
    type: SET_CARD_DATA
    payload: {
      creditCardNumber, expirationDate, cvv, firstName, lastName, secretQuestion, secretAnswer
    }
  }
}

//validation

// payload, err(or), meta
