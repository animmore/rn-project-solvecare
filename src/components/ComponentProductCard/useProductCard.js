import React, {useState, useCallback} from 'react'

const useProductCard = () => {
  const [data, setData] = useState({
    product: '',
    weight: '',
    size: '',
    producedBy: '',
    isCreated: false,
  })

  const {product, weight, size, producedBy, isCreated} = data

  const handleTextInput = () =>
    useCallback(() => {
      return (value: string) => setTextInput(value)
    })

  const createProduct = useCallback(() => {
    setData({...data, isCreated: true})
  })

  const editProduct = useCallback(() => {
    setData({...data, isCreated: false})
  })

  const onValueChange = useCallback((itemValue) => {
    setData({...data, producedBy: itemValue})
  })

  return {
    product,
    weight,
    size,
    producedBy,
    isCreated,
    handleTextInput,
    createProduct,
    editProduct,
    onValueChange,
  }
}

export default useProductCard
