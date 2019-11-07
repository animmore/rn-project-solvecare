//@flow
import {ServerService} from '../services/ServerService'
export const SHOW_CARD_MAIN_DATA_REQUEST = 'SHOW_CARD_MAIN_DATA_REQUEST'
export const SHOW_CARD_MAIN_DATA_FAILURE = 'SHOW_CARD_MAIN_DATA_FAILURE'
export const SHOW_CARD_MAIN_DATA_SUCCESS = 'SHOW_CARD_MAIN_DATA_SUCCESS'

export const showMainData = (cardData) => (dispatch: any) => {
  dispatch({type: SHOW_CARD_MAIN_DATA_REQUEST})

  new ServerService()
    .validateCardData(cardData)
    .then((data) => {
      dispatch({type: SHOW_CARD_MAIN_DATA_SUCCESS, payload: data})
    })
    .catch((error) => {
      console.log('error', error)
      dispatch({type: SHOW_CARD_MAIN_DATA_FAILURE, error})
    })
}
