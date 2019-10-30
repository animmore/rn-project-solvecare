//@flow
import React, {Component} from 'react'
import Component2 from './Component2'
import {connect} from 'react-redux'
import {RequestStatus} from '../../utils/RequestStatus'

type Props = {
  firstName: string,
  lastName: string,
  creditCardNumber: string,
  isLoading: boolean,
  isError: boolean,
  isFormVisible: boolean,
  
}

type State = {
  typeOfCard: string,
}

export class Component2Container extends Component<Props, State> {
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
    return (
      <Component2
        typeOfCard={this.state.typeOfCard}
        creditCardNumber={this.props.creditCardNumber}
        firstName={this.props.firstName}
        lastName={this.props.lastName}
        onTypeOfCard={this.onTypeOfCard}
        isFormVisible={this.props.isFormVisible}
        isError={this.props.isError}
        isLoading={this.props.isLoading}
      />
    )
  }
}
const mapStateToProps = (state, props) => {
  return {
    isFormVisible: state.displayCard.isFormVisible,
    creditCardNumber: state.creditCardData.creditCardNumber,
    firstName: state.creditCardData.firstName,
    lastName: state.creditCardData.lastName,
    isLoading: state.cardInfo.requestStatus === RequestStatus.Request,
    isError: state.cardInfo.requestStatus === RequestStatus.Failure,
  }
}

export default connect(mapStateToProps)(Component2Container)
