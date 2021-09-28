import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native'
import {fonts, colors} from '../../assets/styles/styles'





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
    height: 70, 
    width: 90,
    borderColor: 'black', 
    borderWidth: 1, 
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundLightSecondaryDark
  },

  label: {
    fontSize: 14,
    fontFamily: fonts.primary,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center'

  }
  
})



module.exports = {DropDownButton};