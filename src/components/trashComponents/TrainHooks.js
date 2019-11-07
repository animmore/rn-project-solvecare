import React, {useState, useCallback, useEffect} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import {white} from 'ansi-colors'

const TrainHooks = () => {
  const [count, setCount] = useState(0)

  add = () => {
    setCount(count + 1)
  }

  clear = () => {
    setCount(count * 0)
  }

  return (
    <View style={styles.view}>
      <Text>You clicked {count} times</Text>
      <Button title={'do it'} onPress={add} />
      <Button title={'clear count'} onPress={clear} />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    margin: 50,
    backgroundColor: 'white',
  },
})

export default TrainHooks
