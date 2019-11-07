//@flow
export const onSubmit = (isFormVisible: boolean) => {
  return {
    type: 'ON_SUBMIT',
    payload: {
      isFormVisible,
    },
  }
}
