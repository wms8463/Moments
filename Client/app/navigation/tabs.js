import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import MomentsScreen from '../screens/MomentsScreen';
import NewMomentScreen from '../screens/NewMomentScreen';


const Tab = createBottomTabNavigator();


const Tabs = (props) => {
  const {moments, emotions, themes} = props
 
  return (
    <Tab.Navigator 
      screenOptions={{headerShown: false}}
      // insert some tab bar options (wasnt working before) 
     >
      <Tab.Screen name="Home" children={() => <HomeScreen moments={moments}/>}></Tab.Screen>
      <Tab.Screen name="Moments" children={() => <MomentsScreen moments={moments}/>}></Tab.Screen>
      <Tab.Screen name="New" component={NewMomentScreen}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default Tabs;