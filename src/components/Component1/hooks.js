import React, {useState, useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {setCardData, setIsFormVisible} from '../../actions/actions'
import {onSubmit} from '../../actions/onSubmit'
import {showMainData} from '../../actions/showMainData'
import {onValidation} from '../../services/ValidationService'

export const hooks = (showMainData) => {
  const initialCardData = {
    creditCardNumber: '',
    cvv: '',
    expirationDate: '',
    firstName: '',
    lastName: '',
    secretQuestion: '',
    secretAnswer: '',
  }

  const [cardData, setAllCardData] = useState(initialCardData)

  const handleInputChange = useCallback(
    (name: string) => {
      return (value: string) => setAllCardData({...cardData, [name]: value})
    },
    [cardData],
  )

  const handleCardInfo = () => {
    setCardData(initialCardData)
  }

  const onFormSubmit = (value) => {
    onSubmit(value)
  }

  const onValidation = () => {
    showMainData(initialCardData)
  }

  const handleChange = () => {
    handleCardInfo(), onValidation(), onFormSubmit(true)
    return true
  }

  return {handleInputChange, handleCardInfo, handleChange}
}
