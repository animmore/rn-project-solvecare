export const onSubmit = (isFormVisible) => {
  // validation

  return {
    type: 'ON_SUBMIT',
    payload: {
      isFormVisible,
    },
  }
}
