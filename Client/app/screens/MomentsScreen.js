import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MomentsList } from '../components/MomentsList'





function Moments(props) {
  const moments = props.moments

  return (
    // Container for the full screen - no scroll
    <View style={styles.container}>


      {/* Top Bar with a header */}
      <View style={styles.headerBar}>
        <Text style={styles.header}>Moments</Text>
      </View>

      {/* Narrow bar with a few highlights --> mvp just set space */}
      {/* <View style={styles.summaryBar}>
        <Text style={{fontSize: 10}}>Summary Item Filler</Text>
      </View> */}

      {/* Filter Bar --> mvp just set the space */}
      <View style={styles.filterBar}>
        <Text style={{fontSize: 10, color: 'white'}}>Filter Bar Filler</Text>
      </View>


      {/* Flat List displaying the moment components */}
      <View style={{flex: 1, backgroundColor: 'white',}}>
        <MomentsList moments={moments}></MomentsList>
      </View>


    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },

  headerBar: {
    height: '17%',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    fontSize: 35,
    top: 15
  },
  summaryBar: {
    height: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },

  filterBar: {
    height: 60,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: .5,
    borderColor: 'white'
  }
  
})



export default Moments;