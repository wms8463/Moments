import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import MomentsScreen from '../screens/MomentsScreen';
import NewMomentScreen from '../screens/NewMomentScreen';
import {TabBar} from '../components/TabBar'


const Tab = createBottomTabNavigator();


const Tabs = (props) => {
  const {moments, emotions, themes, image} = props
 
  return (
    <Tab.Navigator 
      tabBar={(props) => <TabBar {...props}/>}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'blue',
      }}
    >

      <Tab.Screen  
        name="Home" 
        initialParams={{icon: 'ios-home-outline'}}
        children={ () => <HomeScreen moments={moments}/>}
      ></Tab.Screen>

      <Tab.Screen 
        name="New" 
        initialParams={{icon: 'create-outline'}}
        // import { Ionicons } from '@expo/vector-icons';
        // <Ionicons name="create-outline" size={24} color="black" />
        children={() => <NewMomentScreen emotions={emotions} themes={themes} image={image}/>}
      ></Tab.Screen>

      <Tab.Screen 
        name="Moments" 
        initialParams={{icon: 'list-outline'}}
        // import { Ionicons } from '@expo/vector-icons';
        // <Ionicons name="list-outline" size={24} color="black" />
        children={() => <MomentsScreen moments={moments}/>}
      ></Tab.Screen>


    </Tab.Navigator>
  );
}

export default Tabs;