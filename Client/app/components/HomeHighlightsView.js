import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {HighlightsList} from './HighlightsList'
import {colors, fonts} from '../../assets/styles/styles'


function HomeHighlightsView(props) {
const {moments} = props

  return (
    <View style={styles.highlightsContainer}>
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Today's Picks</Text>
    </View>
    <View style={styles.highlightlistcontainer}>
      <HighlightsList moments = {moments}></HighlightsList>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  highlightsContainer: {
    top: 20, 
    height: 430, 
    position: 'relative',
    width: '90%', 
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: colors.backgroundLight,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 18
    },

    headerContainer: { 
      flexDirection: 'row', 
      width: '100%', 
      alignItems: 'center',
      justifyContent: 'space-between',  
      paddingHorizontal: 10,
      height: 45, 
      top: 5,
      },

      header: { 
        fontSize: 27, 
        fontWeight: '700',
        fontFamily: fonts.primary,
        color: colors.fontDark,
        textAlign: 'center',
        width: '100%'
      },
      
      highlightlistcontainer : {
        width: '100%',
      }

})

module.exports = {HomeHighlightsView};