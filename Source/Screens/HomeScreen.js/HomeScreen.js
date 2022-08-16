import React from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.body}>
      <Text>HomeScreen</Text>

      <Button
        title="Length"
        onPress={() => {
          navigation.navigate('Length');
        }}
      />
      <Button
        title="Weight"
        onPress={() => {
          navigation.navigate('Weight');
        }}
      />

      <Button
        title="Temperature"
        onPress={() => {
          navigation.navigate('Temperature');
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'gray',
  },
  text: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default HomeScreen;
