import React, {useState, useEffect, useCallback} from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TextInput,
  Image,
  Button,
  Switch,
} from 'react-native'

export const useComponentList = () => {
  const [data, setData] = useState([])
  const [textInput, setTextInput] = useState('')
  const [isAdd, setIsAdd] = useState(true)
  const [isRemove, setIsRemove] = useState(true)

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
    },
    [data],
  )

  const handleTextInput = useCallback(() => {
    return (val: string) => setTextInput(val)
  }, [])

  const addItem = () => {
    const newObj = {
      id: Math.floor(Math.random() * 10),
      title: textInput,
      isSelect: false,
    }

    setData([newObj, ...data])
    setTextInput('')
  }

  const removeItem = useCallback(() => {
    const newArray = data.filter((item) => item.isSelect === false)
    setData([...newArray])
  }, [data])

  const onFocusTextInput = useCallback(() => {
    setIsRemove(false)
  }, [isRemove])

  const renderItem = (items) => {
    return (
      <View style={styles.item}>
        <View style={styles.switch}>
          <Switch onValueChange={(value) => onSwitchChange(item.id, value)} value={item.isSelect} />
        </View>
        <Text style={styles.numUsers}>{item.id}</Text>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userName}>{item.title}</Text>
      </View>
    )
  }

  return {
    renderItem,
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
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafa6e',
  },
  header: {
    alignSelf: 'center',
    fontSize: 22,
    marginTop: 30,
  },
  addInput: {
    width: '70%',
    fontSize: 22,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  containerBtn: {
    flex: 1,
    marginBottom: 50,
  },
  userName: {
    fontSize: 19,
  },
  numUsers: {
    fontSize: 19,
    color: '#23AA8F',
  },
})
