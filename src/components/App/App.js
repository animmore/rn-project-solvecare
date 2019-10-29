//@flow
/*eslint-disable*/
import React, {Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import Component1Container from '../Component1/Component1Container'
import Component2Container from '../Component2/Component2Container'
import {Provider} from 'react-redux'
import {store} from '../../configs/createStore'

import ComponentList from '../ComponentList/ComponentList'
// import ProductCard from './components/ProductCard'

type Props = {}

type State = {}

export class App extends Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <ScrollView style={styles.container}>
          <Component1Container />
          <Component2Container />
        </ScrollView>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
  },
})

// ComponentList
// const App: () => React$Node = () => {
//   return <ComponentList />
// }

// ProductCard
// export class App extends Component {
//   render() {
//     return (
//       <ScrollView style={styles.container}>
//         <ProductCard/>
//       </ScrollView>
//     )
//   }
// }

//  const styles = StyleSheet.create({
//    container: {
//      flex: 1,
//    },
//  })

export default App
