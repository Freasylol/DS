import { StyleSheet, Text, TextInput, View } from 'react-native';
import Navbar from './src/Navbar';
import React from 'react';

export default App = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start woour app!</Text>
      <TextInput style={{height: 40}} placeholder="bebra"/>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',   
  },
  text: {
    fontSize: 30,
    color: '#fff'
  }
});
