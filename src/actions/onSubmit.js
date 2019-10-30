//@flow
export const onSubmit = (isFormVisible:boolean) => {
  // validation

  return {
    type: 'ON_SUBMIT',
    payload: {
      isFormVisible,
    },
  }
}
