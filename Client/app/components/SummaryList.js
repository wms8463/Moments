import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';





function SummaryList(props) {

  const { data } = props

  // alert(data[0].emotion)
  // const test = data[0].emotion

  return (
    <View style={styles.container}>

      {/* <Text>{data[1].emotion}</Text> */}

      <FlatList 
      style = {styles.list}
      horizontal={true}
      data = {data}
      renderItem = { ({item}) => {
        return (
          <View style={styles.itemcontainer}>
            <Text style={styles.emotion}>{item.emotion}</Text>
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
    height: 110,
    borderRadius : 20,
  },

  list: {
    borderWidth: 1,
    borderColor: 'red',
  },

  itemcontainer: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 11,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'lightblue'
  },


  emotion: {
    fontSize: 13,
    fontWeight: '500',
    bottom: 10,
  },

  count: {
    fontSize: 20,
    fontWeight: '600',
  },
})


module.exports = { SummaryList };
// why did I get an error when using export default which was the auto filled format?