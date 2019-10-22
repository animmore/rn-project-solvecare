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
}

export class Component2 extends Component<Props, State> {
  state = {
    typeOfCard: '',
  }

  componentDidUpdate = (prevProps: Props) => {
    if (prevProps.creditCardNumber !== this.props.creditCardNumber) {
      this.onTypeOfCard()
    }
  }

  onTypeOfCard = () => {
    const {creditCardNumber} = this.props
    const lastNums = creditCardNumber.slice(12, 16)
    const typeOfCard = lastNums < 2000 ? 'Visa' : 'Master Card'

    this.setState({
      typeOfCard,
    })
  }

  render() {
    const {firstName, lastName, creditCardNumber} = this.props
    const {typeOfCard} = this.state
    const {isFormVisible} = this.props
    if (!isFormVisible || (!firstName && !lastName && !creditCardNumber)) {
      return null
    }
    console.log(isFormVisible)
    console.log(typeOfCard)
    return (
      <View style={styles.Component2}>
        <Component2 />
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
