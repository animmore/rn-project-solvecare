import React from 'react'
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
import useProductCard from './useProductCard'

const ProductCard = () => {
  const {
    product,
    weight,
    size,
    producedBy,
    isCreated,
    handleTextInput,
    createProduct,
    editProduct,
    onValueChange,
  } = useProductCard()

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product card</Text>
      <View>
        <TextInput
          placeholder="Enter name of product"
          style={styles.textinput}
          onChangeText={handleTextInput('product')}
        />
        <TextInput
          placeholder="Enter weight of product"
          style={styles.textinput}
          onChangeText={handleTextInput('weight')}
        />
        <TextInput
          placeholder="Enter size of product"
          style={styles.textinput}
          onChangeText={handleTextInput('size')}
        />
        <View style={styles.pickerCont}>
          <Text style={styles.pickerTitle}> Made in: {producedBy} </Text>
          <Picker
            selectedValue={producedBy}
            onValueChange={onValueChange}
            style={{height: 50, width: 120}}
          >
            <Picker.Item label="USA" value="USA" />
            <Picker.Item label="Ukraine" value="Ukraine" />
            <Picker.Item label="China" value="China" />
          </Picker>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button title="Create" onPress={createProduct} />
      </View>

      <View style={styles.btnTabContainer}>
      
        <TouchableOpacity style={styles.btnTab}>
          <Text style={styles.textBtnTab}>CREATE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnTab}>
          <Text style={styles.textBtnTab}>EDIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  
}

const styles = StyleSheet.create({
  textBtnTab: {
    alignSelf: 'center',
    alignContent: 'center',
  },
  container: {
    alignSelf: 'stretch',
  },
  header: {
    alignSelf: 'center',
    fontSize: 22,
    marginTop: 45,
  },
  pickerCont: {
    margin: 20,
  },
  pickerTitle: {
    fontSize: 22,
  },
  btnTabContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 70,
  },
  btnTab: {
    // width: 150,
    // height: 45,
    // backgroundColor: 'gray',
    // borderRadius: 15,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,

    marginTop: 150,
  },
  textinput: {
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
