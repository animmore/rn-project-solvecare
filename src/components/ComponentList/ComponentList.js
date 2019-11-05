import React, {useState, useEffect, useCallback} from 'react'
import {FlatList, ScrollView, StyleSheet, Text, View, TextInput, Button, Switch} from 'react-native'
import useComponentList from './useComponentList'

const ComponentList = () => {
  const {
    data,
    handleTextInput,
    onFocusTextInput,
    textInput,
    isAdd,
    isRemove,
    addItem,
    removeItem,
    onSwitchChange,
  } = useComponentList()

  const renderItem = ({item, index}) => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.header}>List of users</Text>

      <FlatList
        data={data}
        renderItem={(item, index) => renderItem(item, index)}
        keyExtractor={(data, index) => `${index}`}
      />
      <View>
        <TextInput
          onChangeText={handleTextInput('textInput')}
          value={textInput}
          style={styles.addInput}
        />
      </View>
      <View style={styles.containerBtn}>
        <Button style={styles.btn} title="Add item" onPress={addItem} disabled={!isAdd} />
        <Button style={styles.btn} title="Remove item" onPress={removeItem} disabled={!isRemove} />
      </View>
    </View>
  )
}

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

export default ComponentList
