import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import {mockitems} from '../calculations/highlightsmockdata'



function HighlightsList(props) {

  const highlights = mockitems

  return (
    <View style={styles.container}>
      <FlatList 
        horizontal={true}
        data={highlights}
        renderItem={({item}) => {
          return (
            <View style={styles.highlight}>
              <Text>{item}</Text>
            </View>
          )
        }}
      
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderColor: 'blue',
    borderWidth: 1,
    height: 300,
    width: '100%',
    backgroundColor: 'lightgreen',
    borderRadius: 10
  },
  highlight: {
    width: 200,
    height: 250,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    backgroundColor: 'white'
  }

  
})


module.exports = {HighlightsList} ;