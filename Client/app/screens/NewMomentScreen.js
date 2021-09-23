import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function NewMoment(props) {
  return (
    <View style={styles.container}>
      <Text>New Moment Screen</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightyellow'
  }
})


export default NewMoment;