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
import ContainerC1 from '../Component1/ContainerC1'
import ContainerC2 from '../Component2/ContainerC2'
import {Provider} from 'react-redux'
import {store} from '../../configs/createStore'

import ComponentList from '../ComponentList/ComponentList'
// import ProductCard from './components/ProductCard'

// type Props = {}

// type State = {}

// export class App extends Component<Props, State> {

//   render() {
//     return (
//       <Provider store={store}>
//         <ScrollView style={styles.container}>
//           <ContainerC1 />
//           <ContainerC2 />
//         </ScrollView>
//       </Provider>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#222222',
//   },
// })

ComponentList
const App: () => React$Node = () => {
  return <ComponentList />
}

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
