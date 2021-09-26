import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native'






function DropDownButton(props) {

  const {title, setModalVisible, modalVisible} = props

  return (
    <TouchableOpacity onPress={()=> setModalVisible(!modalVisible)} style={styles.dropDownButton}>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({

  dropDownButton: {
    height: 32,
    width: 80,
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  label: {
    fontSize: 12,
    fontWeight: '500'
  }
  
})



module.exports = {DropDownButton};