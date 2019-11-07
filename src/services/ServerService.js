
import {onValidation} from './ValidationService'

const callApi = (initialCardData) => {
  return new Promise((resolve, reject) => {
    const error = onValidation(initialCardData)
    console.log(initialCardData)
    const sendResponse = () => {
      error ? reject(error) : resolve()
    }

    setTimeout(sendResponse, 200)
  })
}

const onServerValidation = (initialCardData) => {
  return callApi(initialCardData)
}

class ServerService {
  validateCardData(initialCardData) {
    return onServerValidation(initialCardData)
  }
}

export {ServerService}
