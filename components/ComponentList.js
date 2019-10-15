// import React, {Component} from 'react'
// import {
//   AppRegistry,
//   FlatList,
//   StyleSheet,
//   Item,
//   Text,
//   View,
//   Image,
//   ActivityIndicator,
//   ListItem,
// } from 'react-native'

// export class ComponentList extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {isLoading: true}
//   }
//   componentDidMount() {
//     return fetch('https://randomuser.me/api/?results=5')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         this.setState(
//           {
//             isLoading: false,
//             getData: responseJson.results,
//           },
//           function() {},
//         )
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }
//   /* <Image style={styles.imgs} source={(uri: item.picture.large)} /> */

//   renderItem = ({item}) => {
//     const name = item.name.first + ' ' + item.name.last
//     return <ListItem title={name} />
//   }

//   render() {
//     if (this.state.isLoading) {
//       return (
//         <View style={{flex: 1, padding: 20}}>
//           <ActivityIndicator />
//         </View>
//       )
//     }
//     return (
//       <View style={{flex: 1, paddingTop: 20}}>
//         <FlatList data={this.state.getData} renderItem={({item}) => this.renderItem(item)} />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   imgs: {
//     width: 100,
//     height: 100,
//   },
// })

// export default ComponentList

import React, {Component} from 'react'
import {FlatList, StyleSheet, Text, View, ActivityIndicator, Image} from 'react-native'

export class ComponentList extends Component {
  state = {
    data: [],
    isLoading: true,
  }

  componentWillMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch('https://randomuser.me/api?results=50')
    const json = await response.json()
    this.setState({data: json.results})
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({item}) => (
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Image source={{uri: item.picture.large}} style={styles.images} />
              <Text style={styles.userName}>{`${item.name.first} ${item.name.last}`}</Text>
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
    fontSize: 20,
  },
})

export default ComponentList
