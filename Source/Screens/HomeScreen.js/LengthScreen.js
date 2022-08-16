import React,{useState}from 'react';
import {  StyleSheet,TouchableOpacity,Text,View,TextInput} from 'react-native'
import { Picker } from '@react-native-picker/picker'


const LengthScreen = ({navigation}) => {
  const [lgt, setLgt] = useState('Kg');
  const [input, setInput] = useState('');
  return (
    <View style={style.container}>
      <Text style={style.para}>LengthScreen</Text>
      <View style={style.main}>
        <TextInput
          style={style.input}
          value={input}
          onChangeText={setInput}
        />
        <Picker
          selectedValue={lgt}
          onValueChange={(itemValue, itemIndex) => setLgt(itemValue)}
          style={style.picker}>
          <Picker.Item label="Km" value="Km" />
          <Picker.Item label="m" value="m" />
          <Picker.Item label="cm" value="cm" />
          <Picker.Item label="mm" value="mm" />
          <Picker.Item label="nm" value="nm" />

        </Picker>
        <TouchableOpacity style={style.btn} onPress={LengthScreen}>
          <Text style={style.text}>Convertor</Text>
        </TouchableOpacity>
        <Text>
          {input} {lgt}
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
    marginBottom: 50,
  },
  para: {
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


export default LengthScreen;
