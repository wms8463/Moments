import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import * as API from './services/api'
import Tabs from './app/navigation/tabs';


const image = '../../assets/basketball-three-people'


export default function App() {
  

  // const [isLoading, setLoading] = useState(true)
  const [moments, setMoments] = useState([])
  const [emotions, setEmotions] = useState([])
  const [themes, setThemes] = useState([])
  




  // on app start fetch moments, emotions, themes data
  useEffect(()=> {
    API.fetchMoments().then((moments) => {
      setMoments(moments); })
    API.fetchEmotions().then((emotions) => {setEmotions(emotions);})
    API.fetchThemes().then((themes) => {setThemes(themes); })
  }, [])



  return (
    <NavigationContainer style={styles.container}>
      <Tabs  moments={moments} emotions={emotions} themes={themes} image={image}/>
    </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
