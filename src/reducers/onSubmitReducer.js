const initialValue = {
  isFormVisible: false,
}

export const onSubmitReducer = (state = initialValue, action) => {
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
