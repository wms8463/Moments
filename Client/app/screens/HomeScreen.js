// import { BottomTabBar } from '@react-navigation/bottom-tabs';
import React from 'react';
import { 
  View, 
  StyleSheet, 
  ScrollView, 
} from 'react-native';
import { emotionSummary, themeSummary } from '../calculations/summary'
import {colors} from '../../assets/styles/styles'
import {HomeScreenTitle} from '../components/HomeScreenTitle'
import {HomeSummaryView} from '../components/HomeSummaryView'
import {HomeHighlightsView} from '../components/HomeHighlightsView'

function Home (props) {

  const { moments } = props
  const momentCount = moments.length
  const emotionsDescending = emotionSummary(moments)
  const themesDescending = themeSummary(moments)
  
  return (
    <View style= {styles.container} >

      <ScrollView  contentContainerStyle={styles.scrollcontainer}>
   
        <HomeScreenTitle></HomeScreenTitle>

        {/* COMPONENT 1 OF 2 */}
        <HomeSummaryView 
          emotionsDescending={emotionsDescending} 
          themesDescending={themesDescending}
          momentCount={momentCount}
        ></HomeSummaryView>
     
        <HomeHighlightsView moments= {moments}></HomeHighlightsView>

      </ScrollView>
    </View>

  );
}



const styles = StyleSheet.create({
  // SCROLLVIEW CONTAINER
  container: { 
    backgroundColor: colors.backgroundDark,  
  },

  scrollcontainer : { 
    justifyContent: 'flex-start', 
    width: '100%', 
    flexDirection: 'column', 
    alignItems: 'center', 
    paddingBottom: 100},

})



export default Home;