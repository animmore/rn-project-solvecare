import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  Picker,
  Alert,
} from 'react-native'

export class ProductCard extends Component {
  state = {
    title: '',
    weight: '',
    size: '',
    producedBy: '',
    pickerValue: '',
  }

  handleChange = ({target}) => {
    this.setState({[target.name]: target.value})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btntext}>Create</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btntext}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            placeholder="Enter title"
            style={styles.textinput}
            placeholderTextColor="black"
          />

          <TextInput
            placeholder="Enter weight"
            style={styles.textinput}
            placeholderTextColor="black"
          />

          <TextInput
            placeholder="Enter size"
            style={styles.textinput}
            placeholderTextColor="black"
          />

          <View style={styles.pickerCont}>
            <Text> Produced by: </Text>
            <Picker
              selectedValue={this.state.pickerValue}
              onValueChange={(itemValue, itemIndex) => this.setState({pickerValue: itemValue})}
              itemStyle={{color: 'black'}}
              style={{height: 50, width: 120}}
            >
              <Picker.Item label="USA" value="USA" />
              <Picker.Item label="Ukraine" value="Ukraine" />
              <Picker.Item label="China" value="China" />
            </Picker>
          </View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  pickerCont: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
  },
  textinput: {
    alignSelf: 'stretch',
    fontSize: 18,
    height: 40,
    marginTop: 30,
    marginBottom: 30,
    borderBottomColor: '#4b78d6',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  button: {
    width: 100,
    height: 30,
    alignItems: 'center',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#3e65b3',
    backgroundColor: '#4b78d6',
  },
  btntext: {
    fontSize: 20,
  },
})

export default ProductCard
