//@flow

import React, {Component} from 'react'
import {connect} from 'react-redux'
import Component1 from './Component1'
import {setCardData, setIsFormVisible} from '../../actions/actions'
import {onSubmit} from '../../actions/onSubmit'
import {showMainData} from '../../actions/showMainData'

type Props = {
  isError: boolean,
  creditCardNumber: string,
  expirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
  secretQuestion: string,
  secretAnswer: string,
  isFormVisible: boolean,

  onSubmit: (value: any) => void,
  showMainData: () => void,
}

type State = {}

export class ContainerC1 extends Component<Props, State> {
  render() {
    return (
      <Component1
        creditCardNumber={this.props.creditCardNumber}
        expirationDate={this.props.expirationDate}
        cvv={this.props.cvv}
        firstName={this.props.firstName}
        lastName={this.props.lastName}
        secretQuestion={this.props.secretQuestion}
        secretAnswer={this.props.secretAnswer}
        isFormVisible={this.props.isFormVisible}
        onSubmit={this.props.onSubmit}
        showMainData={this.props.showMainData}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    creditCardNumber: state.setData.creditCardNumber,
    expirationDate: state.setData.expirationDate,
    cvv: state.setData.cvv,
    firstName: state.setData.firstName,
    lastName: state.setData.lastName,
    secretQuestion: state.setData.secretQuestion,
    secretAnswer: state.setData.secretAnswer,
    isFormVisible: state.displayCard.isFormVisible,
    isFormSubmit: state.cardInfo.isFormSubmit,
  }
}

const mapDispatchToProps = {
  setCardData,
  onSubmit,
  showMainData,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerC1)
