import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Navbar = (props) => {
  return (
    <View style={styles.navbar}>
        <Text style={styles.text}>Textfkdsajfdlsajffdsa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    navbar: {
      height: 100,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',   
    },
    text: {
      fontSize: 30,
      color: '#fff'
    }
});