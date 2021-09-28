import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {SummaryList} from './SummaryList'
import {colors, fonts} from '../../assets/styles/styles'


function HomeSummaryView(props) {
  const {momentCount, emotionsDescending, themesDescending} = props


  return (
    <View style={styles.summaryContainer}>

          <View style={styles.headerContainer}>
            <Text style={styles.header}>Summary</Text>
            <View style={styles.countContainer}>
              <Text style={styles.countTextLabel}> Total #</Text>
              <Text style={styles.countText}> {momentCount} </Text>
            </View>
          </View>

          <View style={styles.longCompContainer}>
            <View style={styles.summaryCompCont}>
              <Text style={styles.subHeader}>Emotions</Text>
              <SummaryList data={emotionsDescending}></SummaryList>
            </View>

            <View style={styles.summaryCompCont}>
              <Text style={styles.subHeader}>Themes</Text>
              <SummaryList data={themesDescending}></SummaryList>
            </View>
          </View>

        </View>
  );
}

const styles = StyleSheet.create({
  summaryContainer: { 
    height: 330, 
    position: 'relative',
    width: '90%', 
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: colors.backgroundLight,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 18

  },

  headerContainer: { 
    flexDirection: 'row', 
    width: '100%', 
    alignItems: 'center',
    justifyContent: 'space-between',  
    paddingHorizontal: 5,
    height: 50, 
    alignSelf:'flex-start',
    },

    header: { 
      fontSize: 28, 
      fontWeight: '800',
      fontFamily: fonts.primary,
      color: colors.fontDark
    },

    countContainer: {
      width: 80,
      height: 42,
      backgroundColor: colors.backgroundLightSecondary,
      alignContent: 'center',
      justifyContent: 'center',
      borderColor: 'black',
      borderWidth: .5,
      borderRadius: 15,
      padding: 10,
      flexDirection: 'column'
    },

    countTextLabel: {
      fontSize: 13,
      textAlign: 'center'
    },

    countText: {
      fontSize: 13,
      fontWeight: '600',
      textAlign: 'center'
    },


  longCompContainer: { 
    width: '100%', 
    justifyContent: 'space-between',
    marginBottom: 10,
    },

  summaryCompCont: {
    marginTop: 15
  },

  subHeader: { 
    fontSize: 16, 
    fontWeight: '700',
    fontFamily: fonts.fontPrimary,
    marginBottom: 8
  },
})

module.exports = {HomeSummaryView};