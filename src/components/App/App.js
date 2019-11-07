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

import Component1 from '../Component1/Component1'
import Component2Container from '../Component2/Component2Container'
import {Provider} from 'react-redux'
import {store} from '../../configs/createStore'

import ComponentList from '../ComponentList/ComponentList'
import ProductCard from '../ComponentProductCard/ProductCard'
import TrainHooks from '../trashComponents/TrainHooks'

type Props = {}

type State = {}

export class App extends Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <ScrollView style={styles.container}>
          {/* <TrainHooks /> */}
          <Component1 />
          <Component2Container />
          {/* <ProductCard /> */}
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

export default App
