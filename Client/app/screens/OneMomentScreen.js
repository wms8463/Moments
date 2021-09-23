import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MomentView(props) {
  return (
    <View style={styles.container}>
      <Text>Moment View Screen</Text>
    </View>
  );
}

export default MomentView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  }
})