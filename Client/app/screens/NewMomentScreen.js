import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';




function NewMoment(props) {
  

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/coffee.jpeg')}></Image>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightyellow'
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 30
  }

})


export default NewMoment;