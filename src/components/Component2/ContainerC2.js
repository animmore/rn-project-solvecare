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

type State = {}

export class ContainerC2 extends Component<Props, State> {
  render() {
    return (
      <Component2
        creditCardNumber={this.props.creditCardNumber}
        firstName={this.props.firstName}
        lastName={this.props.lastName}
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
    creditCardNumber: state.setData.creditCardNumber,
    firstName: state.setData.firstName,
    lastName: state.setData.lastName,
    isLoading: state.cardInfo.requestStatus === RequestStatus.Request,
    isError: state.cardInfo.requestStatus === RequestStatus.Failure,
  }
}

export default connect(mapStateToProps)(ContainerC2)
