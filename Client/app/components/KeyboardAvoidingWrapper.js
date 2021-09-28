import React from 'react';
import {KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';


function KeyboardAvoidingWrapper({children}) {

  

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior='padding'>
      <ScrollView style={{flex: 1}}>
        <TouchableWithoutFeedback 
          onPress={Keyboard.dismiss} 
          style={{flex: 1}}
        >
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}




module.exports = { KeyboardAvoidingWrapper };