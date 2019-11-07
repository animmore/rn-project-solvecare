import React, {useState, useCallback} from 'react'
import {setCardData, setIsFormVisible} from '../../actions/actions'
import {onSubmit} from '../../actions/onSubmit'
import {showMainData} from '../../actions/showMainData'

import {useDispatch} from 'react-redux'

export const useComponent1 = () => {
  const dispatch = useDispatch()

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

    dispatch(
      setCardData(
        creditCardNumber,
        cvv,
        expirationDate,
        firstName,
        lastName,
        secretQuestion,
        secretAnswer,
      ),
    )
  }, [cardData])

  const handleInputChange = useCallback((name: string) => {
    return (value: string) => setAllCardData({...cardData, [name]: value})
  })

  const onFormSubmit = useCallback((value) => {
    dispatch(onSubmit(value))
  })

  const onValidation = useCallback(() => {
    dispatch(showMainData(cardData))
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
