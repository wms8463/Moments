import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';





function SummaryList(props) {

  const { data } = props

 // I would need to pass only the list of moments rather than iterate over
 // it twice

  return (
    <View style={styles.container}>


      <FlatList 
      style = {styles.list}
      contentContainerStyle = {styles.listContentContSty}
      horizontal={true}
      data = {data}
      renderItem = { ({item}) => {
        return (
          <View style={styles.itemcontainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.count}>{item.count}</Text>
          </View>
          )
      }} 
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderColor: 'green',
    height: 80,
    borderRadius : 20,
  },

  list: {
    borderWidth: 1,
    borderColor: 'red',
  },

  listContentContSty: {
    alignItems: 'center',
  },

  itemcontainer: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 11,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'lightgray'
  },


  name: {
    fontSize: 11,
    fontWeight: '500',
    bottom: 5,
  },

  count: {
    fontSize: 15,
    fontWeight: '600',
  },
})


module.exports = { SummaryList };
// why did I get an error when using export default which was the auto filled format?