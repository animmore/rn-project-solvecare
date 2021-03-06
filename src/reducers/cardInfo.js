//@flow

import {
  SHOW_CARD_MAIN_DATA_REQUEST,
  SHOW_CARD_MAIN_DATA_SUCCESS,
  SHOW_CARD_MAIN_DATA_FAILURE,
} from '../actions/showMainData'

import {RequestStatus} from '../utils/RequestStatus'

const initialValue = {
  requestStatus: RequestStatus.Default,
  isFormSubmit: false,
}

export const cardInfo = (
  state: {
    requestStatus: string,
    isFormSubmit: boolean,
  } = initialValue,
  action: {type: string, isFormSubmit: boolean},
) => {
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
