import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { MomentForm } from '../components/CreateMomentForm'
import { KeyboardAvoidingWrapper } from '../components/KeyboardAvoidingWrapper'
import { colors } from '../../assets/styles/styles'  




const {height} = Dimensions.get('screen')
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
    height: height,
    alignContent: 'center', 
    justifyContent: 'center',
    backgroundColor: colors.backgroundDark
  },

  container: {
    height: height,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  
  formContainer: {
    height: 620,
    top: 70,
    width: '90%',
    backgroundColor: colors.backgroundLightSecondary,
    borderRadius: 20,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1
  },

})


export default NewMoment;