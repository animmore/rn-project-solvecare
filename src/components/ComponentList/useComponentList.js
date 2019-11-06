import React, {useState, useEffect, useCallback} from 'react'

export const useComponentList = () => {
  const [data, setData] = useState([])
  const [textInput, setTextInput] = useState('')
  const [isAdd, setIsAdd] = useState(false)
  const [isRemove, setIsRemove] = useState(false)

  const fetchData = () => {
    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=5')
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson = responseJson.map((item) => {
          item.isSelect = false
          return item
        })
        setData(responseJson)
      })
      .catch((error) => {
        console.log('Something was wrong..')
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onSwitchChange = useCallback(
    (id, value) => {
      const newData = [...data]
      newData.map((item) => {
        if (item.id == id) {
          item.isSelect = value
        }
      })
      setData([...data])
      setIsRemove(true)
    },
    [data],
  )

  const handleTextInput = useCallback(() => {
    return (val: string) => setTextInput(val)
  }, [])

  const addItem = () => {
    const newObj = {
      id: textInput.toLocaleLowerCase() + Math.floor(Math.random() * 10),
      newValue: textInput,
      isSelect: false,
    }

    setData([...data, newObj])
    setTextInput('')
  }

  const removeItem = useCallback(() => {
    const newArray = data.filter((item) => item.isSelect === false)
    setData([...newArray])
  }, [data])

  const onFocusTextInput = useCallback(() => {
    setIsAdd(true)
    setIsRemove(false)
  }, [isRemove, isAdd])

  return {
    data,
    handleTextInput,
    onFocusTextInput,
    textInput,
    isAdd,
    isRemove,
    addItem,
    removeItem,
    onSwitchChange,
  }
}
export default useComponentList
