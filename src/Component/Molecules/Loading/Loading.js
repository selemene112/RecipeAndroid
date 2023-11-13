import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function LoadingAnimation() {
  return (
    <View style={styles.container}>
      <Text>Loading</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
