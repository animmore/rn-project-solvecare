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
    isFormVisible: state.show.isFormVisible,
    creditCardNumber: state.form.creditCardNumber,
    firstName: state.form.firstName,
    lastName: state.form.lastName,
    isLoading: state.main.requestStatus === RequestStatus.Request,
    isError: state.main.requestStatus === RequestStatus.Failure,
  }
}

export default connect(mapStateToProps)(ContainerC2)
