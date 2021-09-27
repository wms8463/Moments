import React, { useState } from "react";
import { 
  Alert, 
  Text, 
  View, 
  TextInput, 
  Modal, 
  TouchableOpacity, 
  StyleSheet, 
  Button
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { CustomPicker } from './CustomPicker'
import { DropDownButton } from './DropDownButton'
import { FormDescriptionComponent } from './FormDescriptionComponent'
import {postForm} from '../../services/api'

function MomentForm(props) {

  const { emotions, themes } = props
  const { control, handleSubmit, reset, formState: { errors } } = useForm();

  const [ emotionModal, setEmotionModal ] = useState(false);
  const [ themeModal, setThemeModal ] = useState(false);

  const [inputEmotions, setInputEmotion] = useState([]);
  const [inputThemes, setInputThemes] = useState([]);


  const buttonTitleEmotion = 'Emotions'
  const buttonTitleTheme = 'Themes'


  const onSubmit = (data) => {
    let emotionsIDs = []
    emotions.forEach(emotion => {
      if (emotion.name === inputEmotions) emotionsIDs.push(emotion.id)
    })
    let themesIDs = []
    themes.forEach(theme => {
      if (theme.name === inputThemes) themesIDs.push(theme.id)
    })

    // at them to the data object 
    data.emotion = emotionsIDs,
    data.theme = themesIDs

    // invoke the PostForm function
    postForm(data)

    reset()

  };


  return (
    <View style={styles.formContainer}>
      <View style={styles.titleInputLabelCont}>
        <Text style={styles.titleLabel}>Title</Text>

        <Controller control={control} rules= {{required: {value: true, message: 'Title required'}}} 
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.titleInput}
              placeholder='Give your moment a title'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name= "title"
          defaultValue= ""
        />
        {errors.title && <Text>Title is required.</Text>}
      </View>



      {/* Select Emotions and Themes */}
      <View style = {styles.dropDownListCont}>
        <DropDownButton title={buttonTitleEmotion} modalVisible={emotionModal} setModalVisible={setEmotionModal} ></DropDownButton>
        <CustomPicker 
          modalVisible= { emotionModal } setModalVisible= { setEmotionModal } 
          value= { inputEmotions } setValue= { setInputEmotion } items= { emotions }
        ></CustomPicker>

        <DropDownButton title={buttonTitleTheme} modalVisible={themeModal} setModalVisible={setThemeModal} ></DropDownButton>
        <CustomPicker 
          modalVisible= { themeModal } setModalVisible= { setThemeModal } 
          value= { inputThemes } setValue= { setInputThemes } items= { themes }
        ></CustomPicker>
      </View>


      {/* <FormDescriptionComponent control={control} formState= {{formState: {errors}}} ></FormDescriptionComponent> */}
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
        {errors.description && <Text>Description is required</Text>}
      </View>


      <TouchableOpacity title="Submit" onPress={handleSubmit(onSubmit)} style= {styles.button}> 
            <Text>Create</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  formContainer: {
    top:30,
    width: 300,
    height: 460,
    borderColor: 'black',
    borderWidth: 1,
  },

  titleInputLabelCont: {
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: 'red',
    height: 90,
    marginBottom: 10
  },

  titleLabel: {
    fontSize: 21,
    fontWeight: '500',
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    margin: 2,
  },

  titleInput: {
    paddingLeft: 10,
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 18,
    fontWeight: '500',
    opacity: 1,
  },

  dropDownListCont: {
    height: 60,
    marginTop: 5,
    marginBottom: 25,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'green',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: "center"
  },

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
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 15,
    fontWeight: '400',
    opacity: 1,
    flexShrink: 1
  },

  button: {
    width: 100,
    height: 50,
    backgroundColor: 'white',
    top: 10,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }

  
})

module.exports = { MomentForm }