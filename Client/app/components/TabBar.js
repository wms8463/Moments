import React, { useState } from 'react';
import {View, StyleSheet, Dimensions} from 'react-native'
import {Tab} from './Tab'

const {width} = Dimensions.get('screen')


function TabBar(props) {
  const {state, navigation} = props
  const {routes} = state
  // alert(state.routes[0].name)
  const [selected, setSelected] = useState("Home")

  const renderColor = (currentTab) => (currentTab === selected ? 'black' : 'gray')
  const handleClick = (activeTab, index) => {
    setSelected(activeTab)
    if (state.index !== index) {

      navigation.navigate(activeTab)
    }
  }  

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {
          routes.map((route, index) => (
            <Tab 
              tab={route} 
              icon={route.params.icon} 
              onPress={() => handleClick(route.name, index)} 
              color={renderColor(route.name)} 
              key={route.key} 
            />
            ))
        }

      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 20,
    width: width,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },

  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 280,
    justifyContent: 'space-between',
    height: 70,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 2,
    padding: 10,
    marginBottom: 50,
    borderColor: 'black',
    borderWidth: 1,

  },
})

module.exports = { TabBar };