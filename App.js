import  React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import HomeScreen from './Source/Screens/HomeScreen.js/HomeScreen';
import LengthScreen from './Source/Screens/HomeScreen.js/LengthScreen'
import WeightScreen from './Source/Screens/HomeScreen.js/WeightScreen';
import TemperatureScreen from './Source/Screens/HomeScreen.js/TemperatureScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Unit Convertor' }}
        />
        <Stack.Screen name="Length" component={LengthScreen} />
        <Stack.Screen name="Weight" component={WeightScreen} />
        <Stack.Screen name='Temperature' component={TemperatureScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};
export default MyStack