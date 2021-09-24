import { BottomTabBar } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';







function Home (props) {
  const moments = props.moments

  const momentCount = moments.length


  return (

    <View style={styles.container}>

      <View style={styles.summaryContainer}>

          <Text style={styles.header}>Summary</Text>

          <View style = {styles.summaryComponentsContainer}>

            <View style = {styles.summaryCompBox}>
              <Text style={styles.summaryCompLabel}>Moments</Text>
              <Text style={styles.summaryCompData}>{momentCount}</Text>
            </View>

            <View style = {styles.summaryCompBox}>
              <Text style={styles.summaryCompLabel}>TBD</Text>
              <Text style={styles.summaryCompData}>TBD</Text>
            </View>

          </View>


      </View>
    </View>
   
  );
}

//       {moments.map((moment) => {
//   return (
//     <Text key={moment.id}>{moment.title}</Text>
//     )
// })}



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'tomato',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%'
  },

    // the summary container is the section of the screen for the Summary Header, and two box views, each containing a data point and lable
    summaryContainer: {
      top: 50,
      height: 250,
      width: '90%',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'black',
      alignItems: 'center'
    },

      header: {
        alignSelf: 'flex-start',
        fontSize: 30,
        fontWeight: '600'
      },

      summaryComponentsContainer: {
        flexDirection: 'row',
        width: '95%',
        alignItems: 'center',
        justifyContent: 'space-between',
        top: 15,
      },

      summaryCompBox: {
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 15,
        height: 130,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgray'
      },

        summaryCompLabel: {
          fontSize: 18,
          fontWeight: '400',
          bottom: 15,
        },

        summaryCompData: {
          fontSize: 25,
          fontWeight: '500',
        },

})



export default Home;