import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import {fonts, colors} from '../../assets/styles/styles'




function SummaryList(props) {

  const { data } = props


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
    backgroundColor: colors.backgroundLight,
    justifyContent: 'center',
    alignContent: 'center',
    height: 70,
    borderRadius : 10,
    paddingHorizontal: 6,
    borderWidth: 1,
    shadowColor: colors.backgroundDark,
    shadowOpacity: .5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 1 }
  },


  listContentContSty: {
    alignItems: 'center',

  },

  itemcontainer: {
    borderWidth: 1,
    marginHorizontal: 11,
    width: 70,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: colors.backgroundLightSecondary
  },


  name: {
    fontSize: 11,
    fontWeight: '500',
    bottom: 3,
    fontFamily: fonts.primary
  },

  count: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: fonts.primary
  },
})


module.exports = { SummaryList };
// why did I get an error when using export default which was the auto filled format?