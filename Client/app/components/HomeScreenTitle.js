import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {colors, fonts} from '../../assets/styles/styles'


function HomeScreenTitle() {

  return (
    <View style={styles.pageTitleContainer}>
      <Text style={styles.pageTitleText}>Moments</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  pageTitleContainer: {
    height: 150, 
    alignContent: 'center', 
    justifyContent: 'flex-start', 
    marginTop: 50,
    marginBottom: 20
  },

  pageTitleText: {
    fontSize: 50, 
    letterSpacing: 3,
    top: 45, 
    fontWeight: '700',
    color: colors.fontPrimary,
    fontFamily: fonts.primary
  },
})
module.exports = {HomeScreenTitle};