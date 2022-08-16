import React,{useState} from 'react';
import {StyleSheet, Text, TextInput,View, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const TemperatureScreen = ({navigation}) => {
  const [temp, setTemp] = useState('C');
  const [input, setInput] = useState('');
  const [tempData, setTempData] = useState({});

  const cToF = celsius => (celsius * 9) / 5 + 32;

  const fToC = fahrenheit => ((fahrenheit - 32) * 5) / 9;

  const tempConvertor = () => {
    let data = {};
    switch (temp) {
      case 'C':
        {
          data.C = input;
          data.F = cToF(input);
        }
        break;
      case 'F':
        {
          data.F = input;
          data.C = fToC(input);
        }
        break;
      default:
        data = {};
    }
    setTempData(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>TemperatureScreen</Text>
      <View style={styles.main}>
        <TextInput style={styles.input} value={input} onChangeText={setInput} />
        <Picker
          selectedValue={temp}
          onValueChange={(itemValue, itemIndex) => setTemp(itemValue)}
          style={styles.picker}>
          <Picker.Item label="C" value="C" />
          <Picker.Item label="F" value="F" />
        </Picker>
        <TouchableOpacity style={styles.btn} onPress={TemperatureScreen}>
          <Text style={styles.text}>Convertor</Text>
        </TouchableOpacity>
        <Text>
          {input} {temp}
        </Text>
      </View>
      {input && Object.keys(tempData).length > 0 && (
        <View>
          <Text>{tempData.C} c</Text>
          <Text>{tempData.F} f</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
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

export default TemperatureScreen;
