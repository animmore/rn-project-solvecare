import React, { Component } from "react";
import {StyleSheet, View, Text, ScrollView} from 'react-native'
import Component1 from './components/Component1'
import Component2 from './components/Component2'

type Props = {
  onSubmit: (
    creditCardNumber: string,
    firstName: string,
    lastName: string,
    typeOfCard: string,
  ) => void,
}

type State = {|
  creditCardNumber: string,
  expirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
  secretQuestion: string,
  secretAnswer: string,
  typeOfCard: string,
|}

export class App extends Component {
  state = {
    creditCardNumber: '',
    cvv: '',
    expirationDate: '',
    firstName: '',
    lastName: '',
    secretQuestion: '',
    secretAnswer: '',
    typeOfCard: '',
  }

  onSubmit = (
    firstName: string,
    lastName: string,
    creditCardNumber: string,
    typeOfCard: string,
  ) => {
    this.setState({
      firstName,
      lastName,
      creditCardNumber,
      typeOfCard,
    })
  }

  render() {
    console.log(this.props.firstName)
    return <ScrollView style={styles.container}>
      <Component1 onSubmit={this.onSubmit}/>
      <Component2
      firstName={this.state.firstName}
      lastName={this.state.lastName}
      creditCardNumber={this.state.creditCardNumber}
      typeOfCard={this.state.typeOfCard}
    />
    </ScrollView>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
  },
})

export default App