import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function ButtonComponent(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, props.buttonStyle]}
        onPress={props.onPress}>
        <Text style={[styles.buttonText, props.textStyle]}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'yellow',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default ButtonComponent;
