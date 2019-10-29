//@flow

import React, {Component} from 'react'
import Component3 from '../Component3/Component3'
import PropTypes, {bool, object, number, any} from 'prop-types'
import {StyleSheet, View, Text, TextInput, Button, ScrollView} from 'react-native'
import {bold} from 'ansi-colors'
import {callApi} from '../../services/ServerService'

type Props = {
  isError: boolean,
  isFormVisible: boolean,
  creditCardNumber: string,
  expirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
  secretQuestion: string,
  secretAnswer: string,

  showMainData: () => void,
  onValidation: () => void,
  onFormSubmit: (value: boolean) => void,
  onSubmit: (value: any) => void,
  setCreditCardNumber: (value: string) => void,
  setCvv: (value: string) => void,
  setExpirationDate: (value: string) => void,
  setFirstName: (value: string) => void,
  setLastName: (value: string) => void,
  setSecretQuestion: (value: string) => void,
  setSecretAnswer: (value: string) => void,
}

type State = {}

const Component1 = ({handleChange, handleInputChange}) => {
  return (
    <View style={styles.Component1}>
      <Text style={styles.header}> Enter Yours Data </Text>

      <TextInput
        style={styles.textinput}
        placeholder="0000 0000 0000 0000"
        placeholderTextColor="#FFFFFF"
        onChangeText={handleInputChange}
      />

      <View style={styles.cont}>
        <TextInput
          style={styles.textinput}
          placeholder="CVV/CVC"
          placeholderTextColor="#FFFFFF"
          onChangeText={handleInputChange}
        />
        <TextInput
          style={styles.textinput}
          placeholder="MM/YY"
          placeholderTextColor="#FFFFFF"
          onChangeText={handleInputChange}
        />
      </View>

      <View style={styles.cont}>
        <TextInput
          style={styles.textinput}
          placeholder="Your name"
          placeholderTextColor="#FFFFFF"
          onChangeText={handleInputChange}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Your surname"
          placeholderTextColor="#FFFFFF"
          onChangeText={handleInputChange}
        />
      </View>

      <TextInput
        style={styles.textinput}
        placeholder="Your secret question"
        placeholderTextColor="#FFFFFF"
        onChangeText={handleInputChange}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Your secret answer"
        placeholderTextColor="#FFFFFF"
        onChangeText={handleInputChange}
      />

      <Button style={styles.button} title="SUBMIT" onPress={handleChange} />
    </View>
  )
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
