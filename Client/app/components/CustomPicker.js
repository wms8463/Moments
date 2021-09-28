import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal} from 'react-native'
import {Picker} from '@react-native-picker/picker';



function CustomPicker(props) {
  // props for modal state
  const { modalVisible, setModalVisible, value, setValue, items } = props

  return (
    <Modal 
      animationType="slide" 
      transparent={true} 
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
        >
          <View style={{flex: 1}}>
            <View style={styles.pickerContainer}>
              <TouchableOpacity 
                onPress={() => setModalVisible(!modalVisible)}
                style={styles.closeButton}
              >
                <Text>Close</Text>
              </TouchableOpacity>

              <Picker
                selectedValue={value}
                onValueChange={(itemValue) =>
                  setValue(itemValue)
                }
                style={styles.pickerElement}
              >
                
                {items.map((item => {
                  return (
                    <Picker.Item label={item.name} value={item.name} key={item.id}/>
                  )
                }))}    

              </Picker>

            </View>
          </View>
        </Modal>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: 'white', 
    width: '100%', 
    height: '40%', 
    position: 'absolute', 
    bottom: 0
  },

  closeButton: {
    height: 40, 
    width: '100%', 
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1
  },

  pickerElement: {
    borderWidth: 1, 
    borderColor: 'green', 
    height: 250
  }
  
})

module.exports = { CustomPicker };