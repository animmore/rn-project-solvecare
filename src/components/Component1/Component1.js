/*eslint-disable*/
import React, {Component} from 'react'
import Component3 from '../Component3/Component3'
import PropTypes, {bool, object, number, any} from 'prop-types'
// import {FormErrors} from '../FormErrors'
import {StyleSheet, View, Text, TextInput, Button, ScrollView} from 'react-native'
import {bold} from 'ansi-colors'
import {callApi} from '../../services/ServerService'

type Props = {}

type State = {}

const cardRegex = RegExp(/^[0-9]{16}$/)
const cvvRegex = RegExp(/^[0-9]{3,4}$/)
const expRegex = RegExp(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)

export class Component1 extends Component<Props, State> {
  constructor() {
    super()

    state = {
      formValid: false,
      fieldValidationErrors: '',
      formErrors: {
        creditCardNumber: true,
        expirationDate: true,
        cvv: true,
        firstName: true,
        lastName: true,
        secretQuestion: true,
        secretAnswer: true,
      },
    }

    this.onChangeCreditCardNumber = this.onChangeCreditCardNumber.bind(this)
    this.onChangeCvv = this.onChangeCvv.bind(this)
    this.onChangeExpirationDate = this.onChangeExpirationDate.bind(this)
    this.onChangeFirstName = this.onChangeFirstName.bind(this)
    this.onChangeLastName = this.onChangeLastName.bind(this)
    this.onChangeSecretQuestion = this.onChangeSecretQuestion.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onChangeCreditCardNumber(value) {
    this.props.setCreditCardNumber(value)
  }
  onChangeCvv(value) {
    this.props.setCvv(value)
  }
  onChangeExpirationDate(value) {
    this.props.setExpirationDate(value)
  }
  onChangeFirstName(value) {
    this.props.setFirstName(value)
  }
  onChangeLastName(value) {
    this.props.setLastName(value)
  }

  onChangeSecretQuestion(value) {
    this.props.setSecretQuestion(value)
  }
  onChangeSecretAnswer(value) {
    this.props.setSecretAnswer(value)
  }
  onFormSubmit(value) {
    this.props.onSubmit(value)
  }

  handleInputChange = (name: string) => (event) => {
    const {name, value} = event.currentTarget
    this.setState({[name]: value})
  }

  handleTypeOfCardChange = (typeOfCard: string) => {
    this.setState({typeOfCard})
  }

  onValidation() {
    this.props.showMainData()
  }

  handleChange = () => {
    this.onValidation(), this.onFormSubmit(true)
    return true
  }

  render() {
    console.log(this.props.isFormVisible)

    return (
      <View style={styles.Component1} onSubmit={this.handleSubmit}>
        <Text style={styles.header}> Enter Yours Data </Text>

        <TextInput
          style={styles.textinput}
          placeholder="0000 0000 0000 0000"
          placeholderTextColor="#FFFFFF"
          onChangeText={this.onChangeCreditCardNumber}
          value={this.props.creditCardNumber}
        />

        <View style={styles.cont}>
          <TextInput
            style={styles.textinput}
            placeholder="CVV/CVC"
            placeholderTextColor="#FFFFFF"
            onChangeText={this.onChangeCvv}
            value={this.props.cvv}
          />
          <TextInput
            style={styles.textinput}
            placeholder="MM/YY"
            placeholderTextColor="#FFFFFF"
            onChangeText={this.onChangeExpirationDate}
            value={this.props.expirationDate}
          />
        </View>

        <View style={styles.cont}>
          <TextInput
            style={styles.textinput}
            placeholder="Your name"
            placeholderTextColor="#FFFFFF"
            onChangeText={this.onChangeFirstName}
            value={this.props.firstName}
          />
          <TextInput
            style={styles.textinput}
            placeholder="Your surname"
            placeholderTextColor="#FFFFFF"
            onChangeText={this.onChangeLastName}
            value={this.props.lastName}
          />
        </View>

        <TextInput
          style={styles.textinput}
          placeholder="Your secret question"
          placeholderTextColor="#FFFFFF"
          onChangeText={this.onChangeSecretQuestion}
          value={this.props.secretQuestion}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Your secret answer"
          placeholderTextColor="#FFFFFF"
          onChangeText={this.onChangeSecretAnswer}
          value={this.props.secretAnswer}
        />

        <Button style={styles.button} title="SUBMIT" onPress={this.handleChange} />
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
