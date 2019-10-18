/*eslint-disable*/
import React, {Component} from 'react'
import {StyleSheet, View, Text, TextInput} from 'react-native'

type Props = {
  firstName: string,
  lastName: string,
  creditCardNumber: string,
  typeOfCard: string,
}

type State = {
  isFormVisible: boolean,
  timerID: boolean,
  startAt: any,
}

export class Component2 extends Component<Props, State> {
  state = {
    isFormVisible: false,
    timerID: false,
    startAt: '',
  }

  startTimer = () => {
    const timerID = setTimeout(() => {
      this.setState({
        isFormVisible: false,
        timerID: false,
        startAt: '',
      })
    }, 5000)

    this.setState({
      isFormVisible: true,
      timerID: true,
      startAt: Date.now(),
    })
  }

  componentDidUpdate(prevProps: Props) {
    if (
      prevProps.firstName === this.props.firstName &&
      prevProps.lastName === this.props.lastName &&
      prevProps.creditCardNumber === this.props.creditCardNumber
    ) {
      return
    }

    if (!this.state.isFormVisible) {
      return this.startTimer()
    }

    const {timerID} = this.state
    this.startTimer()
  }

  render() {
    
    console.log('(render) Component2')
    const {firstName, lastName, creditCardNumber, typeOfCard} = this.props
    const {isFormVisible} = this.state
    if (!isFormVisible || (!firstName && !lastName && !creditCardNumber)) {
      return null
    }

    return (
      <View style={styles.Component2}>
        <Component2 />
        <TextInput
          style={styles.textinput}
          placeholder="First Name"
          placeholderTextColor="#FFFFFF"
          value={this.props.firstName}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Last Name"
          placeholderTextColor="#FFFFFF"
          value={this.props.lastName}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Credit Card"
          placeholderTextColor="#FFFFFF"
          value={this.props.creditCardNumber.slice(12, 16)}
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
})

export default Component2
