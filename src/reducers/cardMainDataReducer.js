import {
  SHOW_CARD_MAIN_DATA_REQUEST,
  SHOW_CARD_MAIN_DATA_SUCCESS,
  SHOW_CARD_MAIN_DATA_FAILURE,
} from '../actions/cardMainData'

import {RequestStatus} from '../utils/RequestStatus'

const initialValue = {
  requestStatus: RequestStatus.Default,
  isFormSubmit: false,
}

export const formMainData = (state = initialValue, action) => {
  switch (action.type) {
    case SHOW_CARD_MAIN_DATA_REQUEST:
      return {
        ...state,
        requestStatus: RequestStatus.Request,
        isFormSubmit: true,
      }
    case SHOW_CARD_MAIN_DATA_SUCCESS:
      return {
        ...state,
        requestStatus: RequestStatus.Success,
        isFormSubmit: true,
      }
    case SHOW_CARD_MAIN_DATA_FAILURE:
      return {
        ...state,
        requestStatus: RequestStatus.Failure,
        isFormSubmit: true,
      }
  }
  return state
}
