import {onValidation} from './ValidationService'

const callApi = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(onValidation()), 3000)
  })
}

const onServerValidation = () => {
  return callApi();
};

class ServerService {
  callServerValidation() {
    return onServerValidation();
  }
}

export {ServerService};