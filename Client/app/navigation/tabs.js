import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import MomentsScreen from '../screens/MomentsScreen';
import NewMomentScreen from '../screens/NewMomentScreen';


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator 
      // insert some tab bar options (wasnt working before) 
     >
      <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="New" component={NewMomentScreen}></Tab.Screen>
      <Tab.Screen name="Moments" component={MomentsScreen}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default Tabs;