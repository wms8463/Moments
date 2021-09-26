import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import MomentsScreen from '../screens/MomentsScreen';
import NewMomentScreen from '../screens/NewMomentScreen';
import Icon from 'react-native-vector-icons'


const Tab = createBottomTabNavigator();


const Tabs = (props) => {
  const {moments, emotions, themes, image} = props
  const homeIcon = <Icon name="rocket" size={30} color="#900" />;
 
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'blue',
      }}
  

      // insert some tab bar options (wasnt working before) 
     >
      <Tab.Screen 
        name="Home" 
        options={{
          tabBarLabel: 'Home', 
          tabBarIcon: homeIcon
        }} 
        children={ () => <HomeScreen moments={moments}/>}
      ></Tab.Screen>
      <Tab.Screen name="Moments" children={() => <MomentsScreen moments={moments}/>}></Tab.Screen>
      <Tab.Screen name="New" children={() => <NewMomentScreen emotions={emotions} themes={themes} image={image}/>}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default Tabs;