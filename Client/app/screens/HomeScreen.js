// import { BottomTabBar } from '@react-navigation/bottom-tabs';
import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  FlatList 
} from 'react-native';
import { emotionSummary } from '../calculations/summary'
import { SummaryBox } from '../components/SummaryBoxes.js'
import { SummaryList } from '../components/SummaryList'
import {HighlightsList} from '../components/HighlightsList'




function Home (props) {

  const { moments } = props
  const momentCount = moments.length
  const filler = 'TBD'
  const title = 'Moments'
  const emotionsDescending = emotionSummary(moments)


  return (
      
    <ScrollView style= {styles.container} contentContainerStyle={styles.scrollcontainer}>

      {/* COMPONENT 1 OF 2 */}
      <View style={styles.summaryContainer}>

        {/* 1 OF 3 */}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Summary</Text>
        </View>

        {/* 2 OF 3 */}
        <View style = {styles.summBoxCompCont}>
          <SummaryBox title={title} data={momentCount}></SummaryBox>
          <SummaryBox title={filler} data={filler}></SummaryBox>
        </View>

        {/* 3 OF 3 */}
        <View style={styles.longCompContainer}>
          <SummaryList data={emotionsDescending}></SummaryList>
        </View>

      </View>

      {/* COMPONENT 2 OF 2 */}
      <View style={styles.highlightsContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Highlights</Text>
        </View>
        <View style={styles.highlightlistcontainer}>
          <HighlightsList></HighlightsList>
        </View>
      </View>


    </ScrollView>

  );
}



const styles = StyleSheet.create({
  // SCROLLVIEW CONTAINER
  container: { backgroundColor: 'lightyellow',  },

  scrollcontainer : { justifyContent: 'flex-start', width: '100%', 
              flexDirection: 'column', alignItems: 'center', paddingBottom: 100},

  // SUMMARY CONTAINER
  summaryContainer: {  top: 70, height: 350, width: '90%', borderStyle: 'solid',
                      borderWidth: 1, borderColor: 'black', alignItems: 'center',
                    },

      // ONE OF THREE
      headerContainer: { flexDirection: 'row', width: '95%', alignItems: 'flex-end',
                         justifyContent: 'flex-start',  borderColor: 'black',
                         borderWidth: 1, height: 50, alignSelf:'flex-start',
                        },

          header: { fontSize: 30, fontWeight: '600'
                  },

      // TWO OF THREE
      summBoxCompCont: { flexDirection: 'row', width: '95%', alignItems: 'center',
                         justifyContent: 'space-around', borderWidth: 1,
                         borderColor: 'black', height: 140
                        },

      // THREE OF THREE                         
      longCompContainer: { width: '100%', borderWidth: 1, borderColor: 'black', 
                           height: 150, justifyContent: 'center'
                           },
  
  highlightsContainer: {
                        top: 70, height: 350, width: '90%', borderStyle: 'solid',
                        borderWidth: 1, borderColor: 'black', alignItems: 'center', 
                        justifyContent: 'space-around'
                       },
      
      highlightlistcontainer : {
        width: '100%',
      }


})



export default Home;