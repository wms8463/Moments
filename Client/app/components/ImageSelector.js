import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

function ImageSelector(props) {


  const pickImage = async () => {
    let image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1
    })
    if (!image.cancelled) {
      setImage(image.uri)
    }
  }
  const { setImage } = props

  return (
    <View style={styles.imageComponentWrapper}>
      <View style={styles.headerAndButtonContainer}>
        <TouchableOpacity onPress={() => pickImage()}>
          <Text style={styles.label}>Add Photos</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
}


const styles = StyleSheet.create({
  imageComponentWrapper: {
    bottom: 0,
    justifyContent: 'center',
    alignContent: 'center',
    width: 200
  },

  headerAndButtonContainer: {
    height: 50,
    borderColor: 'yellow',
    borderWidth: 3,
    width: 150,
    borderRadius: 30
  },

  imageSelectContainer: {
    height: 80,
    width: 100
  },

  label: {
    alignSelf: 'center'
  }
})


module.exports = { ImageSelector };