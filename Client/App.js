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
import { NavigationContainer } from '@react-navigation/native'
import * as API from './services/api'
import Tabs from './app/navigation/tabs';
import { 
  Nunito_200ExtraLight,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light,
  Nunito_300Light_Italic,
  Nunito_400Regular,
  Nunito_400Regular_Italic,
  Nunito_600SemiBold,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black,
  Nunito_900Black_Italic 
} from '@expo-google-fonts/nunito';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const image = '../../assets/basketball-three-people'


export default function App() {
  
  // states for moments, emotions, themes
  const [isLoading, setLoading] = useState(true)
  const [moments, setMoments] = useState([])
  const [emotions, setEmotions] = useState([])
  const [themes, setThemes] = useState([])
  let [fontsLoaded, error] = useFonts({
    Nunito_200ExtraLight,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light,
    Nunito_300Light_Italic,
    Nunito_400Regular,
    Nunito_400Regular_Italic,
    Nunito_600SemiBold,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black,
    Nunito_900Black_Italic 
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  // set the items that will represent the highlights view
  const [highlights, setHighlights] = useState([])

  // const [frontEndMoments, setfrontEndMoments] = useState([])

  // on app start fetch moments, emotions, themes data
  useEffect(()=> {
    API.fetchMoments().then((moments) => {
      // for each moment --> if no image, add default?
      setMoments(moments); setLoading(false)})
    API.fetchEmotions().then((emotions) => {setEmotions(emotions); setLoading(false)})
    API.fetchThemes().then((themes) => {setThemes(themes); setLoading(false)})
  }, [])



  return (
    <NavigationContainer style={styles.container}>
      <Tabs fontsLoaded={fontsLoaded} moments={moments} emotions={emotions} themes={themes} image={image}/>
    </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
