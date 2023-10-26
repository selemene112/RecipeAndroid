import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function btnDeleteEditComponent(props) {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, props.buttonStyle]}
        onPress={props.onPress}>
        <Text style={[styles.buttonText, props.textStyle]}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default btnDeleteEditComponent;
