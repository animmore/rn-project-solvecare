import React, {Component} from 'react'
import PropTypes, {number, any} from 'prop-types'
import {StyleSheet, View, Text} from 'react-native'

type Props = {
  creditCardNumber: any,
  onTypeOfCard: (v1: string) => void,
}

type State = {
  typeOfCard: string,
}

export class Component3 extends React.PureComponent<Props, State> {
  state = {
    typeOfCard: '',
  }

  componentDidMount() {
    const {creditCardNumber} = this.props

    const lastNums = creditCardNumber.slice(12, 16)
    const typeOfCard = lastNums < 2000 ? 'Visa' : 'Master Card'

    this.setState({typeOfCard})
  }

  componentDidUpdate = (prevProps: Props) => {
    const {creditCardNumber, onTypeOfCard} = this.props
    if (prevProps.creditCardNumber !== creditCardNumber) {
      const lastNums = creditCardNumber.slice(12, 16)
      const typeOfCard = lastNums < 2000 ? 'Visa' : 'Master Card'

      this.setState({
        typeOfCard,
      })

      this.props.onTypeOfCard(typeOfCard)
    }
  }

  render() {
    console.log('(render) Component3')
    if (!this.state.typeOfCard) {
      return null
    }

    return <View></View>
  }
}


export default Component3