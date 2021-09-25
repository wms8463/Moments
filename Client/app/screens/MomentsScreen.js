import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';






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
      <View style={styles.summaryBar}>
        <Text style={{fontSize: 10}}>Summary Item Filler</Text>
      </View>

      {/* Filter Bar --> mvp just set the space */}
      <View style={styles.filterBar}>
        <Text style={{fontSize: 10}}>Filter Bar Filler</Text>
      </View>


      {/* Flat List displaying the moment components */}




      <FlatList 
        data = {moments}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.createdAt}</Text>
            <View style={styles.emotions}>
              {item.Emotions.map((emotion) => {
                  return ( <Text key={emotion.id}>{emotion.name}</Text>)
                })
              }
            </View>
          </View>
          )
        }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  headerBar: {
    height: '20%',
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
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  }
  
})



export default Moments;