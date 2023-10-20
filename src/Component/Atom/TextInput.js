import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

function TextInputComponent(props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.isPassword}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1, // Ketebalan garis
    borderColor: 'black', // Warna garis
    borderRadius: 10, // Radius sudut
    paddingLeft: 10, // Jarak dari sisi kiri
    paddingRight: 10, // Jarak dari sisi kanan
    marginBottom: 10,
  },
});

export default TextInputComponent;
