import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MomentsList } from '../components/MomentsList'
import {fonts, colors} from '../../assets/styles/styles'




function Moments(props) {
  const moments = props.moments

  return (
    <View style={styles.container}>

      <View style={styles.headerBar}>
        <Text style={styles.header}>All Moments</Text>
      </View>


      <View style={styles.filterBar}>
        <Text style={{fontSize: 10, color: 'white'}}>Search Bar Filler</Text>
      </View>


      <View style={{flex: 1, backgroundColor: 'white',}}>
        <MomentsList moments={moments}></MomentsList>
      </View>


    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerBar: {
    height: '22%',
    backgroundColor: colors.backgroundLightSecondary,
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    fontSize: 40,
    top: 25,
    fontFamily: fonts.primary,
    fontWeight: '700',
    letterSpacing: 3.5
  },


  filterBar: {
    height: 80,
    backgroundColor: colors.backgroundDark,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: .5,
    borderColor: 'white'
  }
  
})



export default Moments;