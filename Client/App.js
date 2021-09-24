import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  FlatList, 
  View, 
  ActivityIndicator 
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import * as API from './services/api'
import Tabs from './app/navigation/tabs';



export default function App() {

  // states for moments, emotions, themes
  const [isLoading, setLoading] = useState(true)
  const [moments, setMoments] = useState([])
  const [emotions, setEmotions] = useState([])
  const [themes, setThemes] = useState([])

  // on app start fetch moments, emotions, themes data
  useEffect(()=> {
    API.fetchMoments().then((moments) => {setMoments(moments); setLoading(false)})
    API.fetchEmotions().then((emotions) => {setEmotions(emotions); setLoading(false)})
    API.fetchThemes().then((themes) => {setThemes(themes); setLoading(false)})
  }, [])

  


  return (
    <NavigationContainer>
      <Tabs  moments={moments}/>
    </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
