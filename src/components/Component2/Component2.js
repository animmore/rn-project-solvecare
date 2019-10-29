//@flow
import React, {Component} from 'react'
import {StyleSheet, View, Text, TextInput, ActivityIndicator} from 'react-native'

type Props = {
  firstName: string,
  lastName: string,
  creditCardNumber: string,
  typeOfCard: any,

  isLoading: boolean,
  isError: boolean,
  isFormVisible: boolean,
}

type State = {
  typeOfCard: string,
}

const Component2 = ({
  typeOfCard,
  firstName,
  lastName,
  creditCardNumber,
  isError,
  isLoading,
  isFormVisible,
}) => {
  if (isError) {
    return (
      <View style={styles.err}>
        <Text style={styles.errMessage}>
          You have entered invalid data. {'\n'} Please, try again!
        </Text>
      </View>
    )
  }

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  if (isFormVisible && !isError) {
    return (
      <View style={styles.Component2}>
        <TextInput
          style={styles.textinput}
          placeholder="First Name"
          placeholderTextColor="#FFFFFF"
          value={firstName}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Last Name"
          placeholderTextColor="#FFFFFF"
          value={lastName}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Credit Card"
          placeholderTextColor="#FFFFFF"
          value={creditCardNumber.slice(12, 16)}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Type of Card"
          placeholderTextColor="#FFFFFF"
          value={typeOfCard}
        />
      </View>
    )
  }
  return <View />
}

const styles = StyleSheet.create({
  Component2: {
    alignSelf: 'stretch',
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
  err: {
    marginTop: 50,
  },
  errMessage: {
    fontSize: 22,
    textAlign: 'center',
    color: 'red',
  },
})

export default Component2
