import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native'

function Moment(props) {
  return (
    <View>
      {/* Photo or defualt at the top */}
      <Image source={require('./../../assets/default-image.jpeg')}/>
      {/* Title */}
      {/* Summary Bar - emotions, themes, date */}
    </View>
      
  );
}


const styles = StyleSheet.create({
  
})

module.exports = { Moment };
