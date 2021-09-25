import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';


function ImageSelector(props) {
  return (
    <View style={styles.imageSelectContainer}>
      <Text style={styles.label}>Add Photos</Text>
    </View>
    )
}


const styles = StyleSheet.create({
  imageSelectContainer: {
    height: 110,
    width: '45%',
    backgroundColor: 'lightgrey',
    top: 40,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 25,
    alignContent: 'center',
    justifyContent: 'center',
    opacity: 1,
  },

  label: {
    alignSelf: 'center'
  }
})


module.exports = { ImageSelector };