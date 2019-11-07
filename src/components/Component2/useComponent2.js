import React, {useState, useCallback, useEffect} from 'react'

const useComponent2 = () => {
  const [typeOfCard, setTypeOfCard] = useState('')

  useEffect(() => {
    onTypeOfCard()
  }, [creditCardNumber])

  const onTypeOfCard = useCallback(() => {
    creditCardNumber.length === 16 && Number(creditCardNumber.slice(12, 16)) > 2000
      ? (typeOfCard = 'MasterCard')
      : creditCardNumber.length === 16 && Number(creditCardNumber.slice(12, 16)) < 2000
      ? (typeOfCard = 'Visa')
      : (typeOfCard = '')
    setTypeOfCard(typeOfCard)
  }, [creditCardNumber])

  return {
    creditCardNumber,
    firstName,
    lastName,
    typeOfCard,
    isFormVisible,
    isLoading,
    isError,
  }
}
