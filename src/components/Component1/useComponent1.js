import React, {useState, useCallback} from 'react'
import {setCardData, setIsFormVisible} from '../../actions/actions'
import {onSubmit} from '../../actions/onSubmit'
import {showMainData} from '../../actions/showMainData'

export const useComponent1 = (showMainData, onSubmit, setCardData, setIsFormVisible) => {
  const [cardData, setAllCardData] = useState({
    creditCardNumber: '',
    cvv: '',
    expirationDate: '',
    firstName: '',
    lastName: '',
    secretQuestion: '',
    secretAnswer: '',
  })

  const {
    creditCardNumber,
    cvv,
    expirationDate,
    firstName,
    lastName,
    secretQuestion,
    secretAnswer,
  } = cardData

  handleCardInfo = useCallback(() => {
    const {
      creditCardNumber,
      cvv,
      expirationDate,
      firstName,
      lastName,
      secretQuestion,
      secretAnswer,
    } = cardData

    setCardData(
      creditCardNumber,
      cvv,
      expirationDate,
      firstName,
      lastName,
      secretQuestion,
      secretAnswer,
    )
  }, [cardData])

  const handleInputChange = useCallback((name: string) => {
    return (value: string) => setAllCardData({...cardData, [name]: value})
  })

  const onFormSubmit = useCallback((value) => {
    onSubmit(value)
  })

  const onValidation = useCallback(() => {
    showMainData(cardData)
  })

  const handleChange = useCallback(() => {
    handleCardInfo(), onValidation(), onFormSubmit(true)
    return true
  })

  return {
    creditCardNumber,
    cvv,
    expirationDate,
    firstName,
    lastName,
    secretQuestion,
    secretAnswer,
    handleInputChange,
    handleCardInfo,
    handleChange,
  }
}
