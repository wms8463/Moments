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



export default function App() {

  const [isLoading, setLoading] = useState(true)
  const [moments, setMoments] = useState([])
  const [emotions, setEmotions] = useState([])
  const [themes, setThemes] = useState([])



  useEffect(()=> {
    API.fetchMoments().then((moments) => {
      setMoments(moments); 
      setLoading(false)})
    API.fetchEmotions().then((emotions) => {
      setEmotions(emotions); 
      setLoading(false)})
    API.fetchThemes().then((themes) => {
      setThemes(themes); 
      setLoading(false)})
  }, [])

  


  return (
    <NavigationContainer>

      <SafeAreaView style={styles.container}>

        <FlatList
          data = {emotions}
          keyExtractor = {(item) => item.id}
          renderItem = {({item}) => (
            <Text>{item.name}</Text>
            )}
            />
      
      </SafeAreaView>

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
