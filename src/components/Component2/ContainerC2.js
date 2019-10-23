/*eslint-disable*/
import React, {Component} from 'react'
import Component2 from './Component2'
import {connect} from 'react-redux'
import {RequestStatus} from '../../utils/RequestStatus'

export class ContainerC2 extends Component {
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
