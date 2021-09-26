import React from 'react';
import {StyleSheet, View, Text, TextInput, Controller} from 'react-native'



function FormDescriptionComponent(props) {
  const {control, formState} = props
  
  return (
    <View style={styles.descInputLabelCont}>
        <Text style={styles.descLabel}>Description</Text>
        <Controller control={control} rules= {{required: {value: true, message: 'Description required'}}}
          render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.descInput}
                  error={errors.description}
                  placeholder='Provide some detail about the moment'
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  multiline= 'true'
                  />
                  )}
                  name= "description"
                  defaultValue= ""
        
        />
        {/* {errors.description && <Text>Description is required</Text>} */}

      </View>
  );
}


const styles = StyleSheet.create({
  descInputLabelCont: {
    borderWidth: 1,
    borderColor: 'red',
    height: 200,
    bottom: 0
  },

  descLabel: {
    fontSize: 21,
    fontWeight: '500',
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    margin: 2,
  },

  descInput: {
    padding: 12,
    paddingTop: 20,
    flex: 1,
    width: '100%',
    backgroundColor: 'lightgray',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 15,
    fontWeight: '400',
    opacity: 1,
    flexShrink: 1
  },
})

module.exports = { FormDescriptionComponent };