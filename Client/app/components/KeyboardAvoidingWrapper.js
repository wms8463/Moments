import React from 'react';
import {KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';


function KeyboardAvoidingWrapper({children}) {
  return (
    <KeyboardAvoidingView style={{flex:1,}}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}




module.exports = { KeyboardAvoidingWrapper };