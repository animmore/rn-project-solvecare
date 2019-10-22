const cardRegex = RegExp(/^[0-9]{16}$/)
const cvvRegex = RegExp(/^[0-9]{3,4}$/)
const expRegex = RegExp(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)
const firstNameRegex = RegExp(/^[A-z]{2,10}$/)
const lastNameRegex = RegExp(/^[A-z]{2,10}$/)
const secretQuestionRegex = RegExp(/^[a-z]{10,20}$/)
const secretAnswerRegex = RegExp(/^[a-z]{10,20}$/)

export const onValidation = () => {
  const fieldValidationErrors = {...fieldValidationErrors}
  switch (fieldValidationErrors) {
    case 'creditCardNumber':
      fieldValidationErrors.creditCardNumber = value.match(cardRegex) ? '' : 'invalid card number'
      break
    case 'cvv':
      fieldValidationErrors.cvv = value.match(cvvRegex) ? '' : 'invalid CVV/CVC'
      break
    case 'expirationDate':
      fieldValidationErrors.expirationDate = value.match(expRegex) ? '' : 'invalid MM/YY'
      break
    case 'firstName':
      fieldValidationErrors.firstName = value.match(firstNameRegex) ? '' : 'invalid first name'
      break
    case 'lastName':
      fieldValidationErrors.lastName = value.match(lastNameRegex) ? '' : 'invalid last name'
      break
    case 'secretQuestion':
      fieldValidationErrors.secretQuestion = value.match(secretQuestionRegex)
        ? ''
        : 'invalid secret question'
      break
    case 'secretAnswer':
      fieldValidationErrors.secretAnswer = value.match(secretAnswerRegex)
        ? ''
        : 'invalid secret answer'
      break

    default:
      break
  }

  return fieldValidationErrors
}
