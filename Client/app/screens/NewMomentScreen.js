import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MomentForm } from '../components/CreateMomentForm'
import { KeyboardAvoidingWrapper } from '../components/KeyboardAvoidingWrapper'
import { colors } from '../../assets/styles/styles'  


function NewMoment(props) {
  const {emotions, themes} = props


  return (
    <View style={styles.fullScreenContainer}>

      <KeyboardAvoidingWrapper >
        <View style={styles.container} >

          <View style={styles.formContainer}>
            
            <View style={styles.formInputsContainer}>
              <MomentForm emotions={emotions} themes={themes}></MomentForm>
            </View>

          </View>

        </View>
      </KeyboardAvoidingWrapper>
    </View>
 
  );
}


const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1, 
    alignContent: 'center', 
    justifyContent: 'center',
    backgroundColor: colors.backgroundDark
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  formContainer: {
    height: 620,
    width: '90%',
    backgroundColor: colors.backgroundLightSecondary,
    borderRadius: 20,
    top: 70,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1
  },

})


export default NewMoment;