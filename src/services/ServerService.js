import {onValidation} from './ValidationService'

const callApi = (values) => {
  return new Promise((resolve, reject) => {
    const error = onValidation(values)

    const sendResponse = () => {
      error ? reject(error) : resolve()
    }

    setTimeout(sendResponse, 200)
  })
}

const onServerValidation = (values) => { 
  return callApi(values)
}

class ServerService {
  validateCardData(values) {
    return onServerValidation(values)
  }
}

export {ServerService}
