import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons';




function Tab(props) {
  const {color, tab, onPress, icon} = props


  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon && <Ionicons name={icon} size={20} color= {color} />}
      <Text style= {{ color, fontSize: 11, marginTop: 3 }}>{tab.name}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 75,
    height: 55,
    backgroundColor: 'lightblue',
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    borderRadius: 10
  },
  
})
module.exports = {Tab};