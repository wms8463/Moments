import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Moments(props) {
  return (
    <View style={styles.container}>
      <Text>Moments Screen</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato'
  }
})



export default Moments;