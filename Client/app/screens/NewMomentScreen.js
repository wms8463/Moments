import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MomentForm } from '../components/CreateMomentForm'
import { ImageSelector } from '../components/ImageSelector'
import { KeyboardAvoidingWrapper } from '../components/KeyboardAvoidingWrapper'



function NewMoment(props) {
  const {emotions, themes} = props


  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container}>
        <Image 
          source={require('../../assets/demo/zen-rocks.jpeg')}
          style={{zIndex: -1, position:'absolute', }}
          blurRadius={10}
          resizeMode='contain'
          />

        <View style={styles.formContainer}>
          <View style={styles.formInputsContainer}>
            <MomentForm emotions={emotions} themes={themes}></MomentForm>
          </View>

          <ImageSelector></ImageSelector>
        </View>

      </View>
    </KeyboardAvoidingWrapper>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightyellow',
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowColor: 'black',
  },
  
  formContainer: {
    height: 650,
    width: '90%',
    backgroundColor: 'lightgray',
    borderRadius: 20,
    top: 50,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center'
  },

})


export default NewMoment;