import React, {Component} from 'react'
import Component3 from './Component3'
import PropTypes, {bool, object, number, any} from 'prop-types'
// import {FormErrors} from '../FormErrors'
import {StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import {bold} from 'ansi-colors'

type Props = {|
  onSubmit: (
    creditCardNumber: string,
    firstName: string,
    lastName: string,
    typeOfCard: string,
  ) => void,
|}

type State = {|
  creditCardNumber: string,
  expirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
  secretQuestion: string,
  secretAnswer: string,
  submitFormVisible: boolean,
  typeOfCard: string,

  fieldValidationErrors: object,

  formValid: any,
  formErrors: object,
|}

const cardRegex = RegExp(/^[0-9]{16}$/)
const cvvRegex = RegExp(/^[0-9]{3,4}$/)
const expRegex = RegExp(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)

export class Component1 extends Component<Props, State> {
  state = {
    creditCardNumber: '',
    cvv: '',
    expirationDate: '',
    firstName: '',
    lastName: '',
    secretQuestion: '',
    secretAnswer: '',
    submitFormVisible: false,
    typeOfCard: '',

    formValid: object,
    fieldValidationErrors: '',
    formErrors: {
      creditCardNumber: '',
      cvv: '',
      expirationDate: '',
      firstName: '',
      lastName: '',
      secretQuestion: '',
      secretAnswer: '',
    },
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.formErrors.creditCardNumber &&
        this.state.formErrors.cvv &&
        this.state.formErrors.expirationDate &&
        this.state.formErrors.firstName &&
        this.state.formErrors.lastName &&
        this.state.formErrors.secretQuestion &&
        this.state.formErrors.secretAnswer,
    })
  }

  handleSubmit = () => {
    const {firstName, lastName, creditCardNumber, typeOfCard} = this.state

    this.props.onSubmit(firstName, lastName, creditCardNumber, typeOfCard)
  }

  handleInputChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const {name, value} = event.currentTarget
    this.setState({[name]: value}, () => {
      this.validateField(name, value)
    })
  }

  validateField(fieldName: string, value: string) {
    const fieldValidationErrors = this.state.formErrors
    const {creditCardNumber} = this.state
    const {cvv} = this.state
    const {expirationDate} = this.state
    const {firstName} = this.state
    const {lastName} = this.state
    const {secretQuestion} = this.state
    const {secretAnswer} = this.state

    switch (fieldName) {
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
        fieldValidationErrors.firstName = value.length < 3 ? 'minimum 3 characaters required' : ''
        break
      case 'lastName':
        fieldValidationErrors.lastName = value.length < 2 ? 'minimum 3 characaters required' : ''
        break
      case 'secretQuestion':
        fieldValidationErrors.secretQuestion =
          value.length < 9 ? 'minimum 10 characaters required' : ''
        break
      case 'secretAnswer':
        fieldValidationErrors.secretAnswer =
          value.length < 3 ? 'minimum 4 characaters required' : ''
        break

      default:
        break
    }

    this.setState({fieldValidationErrors, [fieldName]: value}, () => console.log(this.state))
  }

  handleTypeOfCardChange = (typeOfCard: string) => {
    this.setState({typeOfCard})
  }

  render() {
    console.log('(render) Component1')
    const {fieldValidationErrors, creditCardNumber} = this.state

    return (
      <View style={styles.Component1}>
        <Text style={styles.header}> Enter Yours Data </Text>

        <TextInput
          style={styles.textinput}
          placeholder="0000 0000 0000 0000"
          placeholderTextColor="#FFFFFF"
          onChangeText={(creditCardNumber) => this.setState({creditCardNumber})}
          value={this.state.creditCardNumber}
        />

        <View style={styles.cont}>
          <TextInput
            style={styles.textinput}
            placeholder="CVV/CVC"
            placeholderTextColor="#FFFFFF"
            onChangeText={(cvv) => this.setState({cvv})}
            value={this.state.cvv}
          />
          <TextInput
            style={styles.textinput}
            placeholder="MM/YY"
            placeholderTextColor="#FFFFFF"
            onChangeText={(expirationDate) => this.setState({expirationDate})}
            value={this.state.expirationDate}
          />
        </View>

        <View style={styles.cont}>
          <TextInput
            style={styles.textinput}
            placeholder="Your name"
            placeholderTextColor="#FFFFFF"
            onChangeText={(firstName) => this.setState({firstName})}
            value={this.state.firstName}
          />
          <TextInput
            style={styles.textinput}
            placeholder="Your surname"
            placeholderTextColor="#FFFFFF"
            onChangeText={(lastName) => this.setState({lastName})}
            value={this.state.lastName}
          />
        </View>

        <TextInput
          style={styles.textinput}
          placeholder="Your secret question"
          placeholderTextColor="#FFFFFF"
          onChangeText={(secretQuestion) => this.setState({secretQuestion})}
          value={this.state.secretQuestion}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Your secret answer"
          placeholderTextColor="#FFFFFF"
          onChangeText={(secretAnswer) => this.setState({secretAnswer})}
          value={this.state.secretAnswer}
        />

        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.btntext}>SUBMIT</Text>
        </TouchableOpacity>
        <View>
          <Component3
            onTypeOfCard={this.handleTypeOfCardChange}
            creditCardNumber={this.state.creditCardNumber}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Component1: {
    alignSelf: 'stretch',
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
    paddingBottom: 30,
    marginBottom: 20,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  textinput: {
    alignSelf: 'stretch',
    fontSize: 18,
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  cont: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    alignSelf: 'center',
    width: 200,
    borderRadius: 30,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
})

export default Component1
