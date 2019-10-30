//@flow
const initialValue = {
  isFormVisible: false,
}

export const displayCard = (
  state: {
    isFormVisible: boolean,
  } = initialValue,
  action: {type:string, payload: any},
) => {
  switch (action.type) {
    case 'ON_SUBMIT':
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}
