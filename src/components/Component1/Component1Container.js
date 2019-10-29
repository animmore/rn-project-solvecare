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

  setCardData: (
    creditCardNumber: string,
    cvv: string,
    expirationDate: string,
    firstName: string,
    lastName: string,
    secretQuestion: string,
    secretAnswer: string,
  ) => void,
  
  onSubmit: (value: any) => void,
  showMainData: () => void,
}

type State = {}

export class Component1Container extends Component<Props, State> {
  constructor() {
    super()
    this.state = {
      creditCardNumber: '',
      cvv: '',
      expirationDate: '',
      firstName: '',
      lastName: '',
      secretQuestion: '',
      secretAnswer: '',
    }
    this.handleCardInfo = this.handleCardInfo.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  handleCardInfo = () => {
    const {
      creditCardNumber,
      cvv,
      expirationDate,
      firstName,
      lastName,
      secretQuestion,
      secretAnswer,
    } = this.state

    this.props.setCardData(
      creditCardNumber,
      cvv,
      expirationDate,
      firstName,
      lastName,
      secretQuestion,
      secretAnswer,
    )
  }

  onFormSubmit: (value: boolean) => void
  onFormSubmit(value: boolean) {
    this.props.onSubmit(value)
  }

  handleInputChange = (name: string) => (event: SyntheticEvent<HTMLInputElement>) => {
    const {name, value} = event.currentTarget
    this.setState({[name]: value})
  }

  onValidation() {
    this.props.showMainData()
  }

  handleChange = () => {
    this.onValidation(), this.handleCardInfo(), this.onFormSubmit(true)
    return true
  }

  render() {
    return (
      <Component1
        handleChange={this.handleChange}
        handleInputChange={this.handleInputChange}
        isFormVisible={this.props.isFormVisible}
        onSubmit={this.props.onSubmit}
        showMainData={this.props.showMainData}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
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
)(Component1Container)
