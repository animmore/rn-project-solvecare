// @flow
import React, {Component} from 'react'
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

type Props = {}

type State = {
  data: any,
  valueSwitch: boolean,
}

export class ComponentList extends Component<Props, State> {
  state = {
    data: [],
    valueSwitch: false,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch('https://randomuser.me/api?results=5')
    const json = await response.json()
    this.setState({data: json.results})
  }

  addItem = () => {}

  removeItem = () => {}

  handleInputChange = (name: string) => {
    return (value: string) => this.setState({[name]: value})
  }

  handleSwitch = (switchValue: boolean) => {
    this.setState({valueSwitch: switchValue})
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({item, index}) => (
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Switch value={this.state.valueSwitch} onValueChange={this.handleSwitch} />
              <Text style={styles.numUsers}>{index + 1}</Text>
              <Text style={styles.userName}>{` ${item.name.first} ${item.name.last}`}</Text>
            </View>
          )} //<Image source={{uri: item.picture.large}} style={styles.images} />
        />
        <TextInput
          placeholder="Type something..."
          style={styles.addInput}
          onChangeText={this.handleInputChange}
        />
        <Button title="Add" onPress={this.addItem} />
        <Button title="Delete" onPress={this.removeItem} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafa6e',
  },
  addInput: {
    width: '70%',
    fontSize: 22,
  },
  containerBtn: {
    flex: 1,
    marginBottom: 50,
  },
  images: {
    width: '50%',
    height: 100,
    margin: 7,
    borderRadius: 7,
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
