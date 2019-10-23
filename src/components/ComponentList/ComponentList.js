//@flow

import React, {Component} from 'react'
import {FlatList, StyleSheet, Text, View, ActivityIndicator, Image} from 'react-native'

type Props = {}

type State = {
  data: any,
}

export class ComponentList extends Component<Props, State> {
  state = {
    data: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch('https://randomuser.me/api?results=500')
    const json = await response.json()
    this.setState({data: json.results})
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => (
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Image source={{uri: item.picture.large}} style={styles.images} />
              <Text style={styles.numUsers}>{index + 1}</Text>
              <Text style={styles.userName}>{` ${item.name.first} ${item.name.last}`}</Text>
            </View>
          )}
        />
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
