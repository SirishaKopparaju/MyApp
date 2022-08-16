import React,{useState} from 'react';
import {  StyleSheet,TouchableOpacity,Text,View,TextInput} from 'react-native'
import { Picker } from '@react-native-picker/picker'

const WeightScreen = ({navigation}) => {
  const [wgt, setWgt] = useState('Kg');
  const [input, setInput] = useState('');
  return (
    <View style={styless.container}>
      <Text style={styless.paragraph}>WeightScreen</Text>
      <View style={styless.main}>
        <TextInput
          style={styless.input}
          value={input}
          onChangeText={setInput}
        />
        <Picker
          selectedValue={wgt}
          onValueChange={(itemValue, itemIndex) => setWgt(itemValue)}
          style={styless.picker}>
          <Picker.Item label="Kg" value="Kg" />
          <Picker.Item label="g" value="g" />
          <Picker.Item label="mg" value="mg" />

        </Picker>
        <TouchableOpacity style={styless.btn} onPress={WeightScreen}>
          <Text style={styless.text}>Convertor</Text>
        </TouchableOpacity>
        <Text>
          {input} {wgt}
        </Text>
      </View>
    </View>
  );
};

const styless = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
    marginBottom: 50,
  },
  paragraph: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'gray',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 16,
    padding: 8,
    width: 150,
    color:'gray'
  },
  btn: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    width: 150,
    textAlign: 'center',
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  picker: {
    color: 'white',
    width: 100,
    padding: 8,
    backgroundColor: 'gray',
  },
  text:{
    textAlign: 'center',
    color: 'gray',

  }
});


export default WeightScreen;
