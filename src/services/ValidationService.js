const cardRegex = RegExp(/^[0-9]{16}$/)
const cvvRegex = RegExp(/^[0-9]{3,4}$/)
const expRegex = RegExp(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)
const firstNameRegex = RegExp(/^[A-z]{2,10}$/)
const lastNameRegex = RegExp(/^[A-z]{2,10}$/)
const secretQuestionRegex = RegExp(/^[A-z]{10,20}$/)
const secretAnswerRegex = RegExp(/^[A-z]{10,20}$/)

function assert(expression, message, errors) {
  if (!expression) {
    errors.push(message)
  }
}

export const onValidation = (values) => {
  const errors = []

  const {
    creditCardNumber,
    cvv,
    expirationDate,
    firstName,
    lastName,
    secretQuestion,
    secretAnswer,
  } = values

  assert(creditCardNumber.match(cardRegex), 'invalid card number', errors)
  assert(cvv.match(cvvRegex), 'invalid CVV/CVC', errors)
  assert(expirationDate.match(expRegex), 'invalid MM/YY', errors)
  assert(firstName.match(firstNameRegex), 'invalid first name', errors)
  assert(lastName.match(lastNameRegex), 'invalid last name', errors)
  assert(secretQuestion.match(secretQuestionRegex), 'invalid secret question', errors)
  assert(secretAnswer.match(secretAnswerRegex), 'invalid secret answer', errors)

  return errors[0]
}
