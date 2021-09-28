import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { MomentsList } from '../components/MomentsList'
import {fonts, colors} from '../../assets/styles/styles'




function Moments(props) {

  const moments = props.moments
  const [filteredData, setFilteredData] = useState([...moments])
  const [search, setSearch] = useState('')


  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <Text style={styles.header}>All Moments</Text>
      </View>

      <View style={styles.searchBarContainer}>
        <TextInput 
          style={styles.searchBar}
          value={search}
          placeholder="Search..."
          onChangeText={(text) => searchFilter(text)}
        />
      </View>

      <View style={{flex: 1, backgroundColor: 'white',}}>
        <MomentsList moments={moments}></MomentsList>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerBar: {
    height: '22%',
    backgroundColor: colors.backgroundLightSecondary,
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    fontSize: 40,
    top: 25,
    fontFamily: fonts.primary,
    fontWeight: '700',
    letterSpacing: 3.5
  },

  searchBarContainer: {
    height: 70,
    backgroundColor: colors.backgroundDark,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: .5,
    borderColor: 'white'
  },

  searchBar: {
    height: 40,
    backgroundColor: 'white',
    width: '85%',
    paddingLeft: 20,
    borderRadius: 15
  }
  
})



export default Moments;