import React, { useState } from "react";
import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Platform,
  Image
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { CustomPicker } from './CustomPicker'
import { DropDownButton } from './DropDownButton'
import {postForm} from '../../services/api'
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker'
import ImageSelector from './ImageSelector'
import {colors, fonts} from '../../assets/styles/styles'




function MomentForm (props) {
  
  const { emotions, themes } = props

  const { control, handleSubmit, reset, formState: { errors } } = useForm();
  
  // do i need both of these?
  const [ emotionModal, setEmotionModal ] = useState(false);
  const [ themeModal, setThemeModal ] = useState(false);
  
  const [inputEmotions, setInputEmotions] = useState([]);
  const [inputThemes, setInputThemes] = useState([]);
  
  const buttonTitleEmotion = 'Emotions'
  const buttonTitleTheme = 'Themes'

  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const [image, setImage] = useState([]) 
  const pickImage = async () => {
    let image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1
    })
    if (!image.cancelled) {
      setImage(image.uri)
    }
  }


  const onSubmit = (data) => {
    let emotionsIDs = []
    emotions.forEach(emotion => {
      if (emotion.name === inputEmotions) {
        emotionsIDs.push(emotion.id)
      }
    })

    let themesIDs = []
    themesIDs.push(inputThemes)
    themes.forEach(theme => {
      if (theme.name === inputThemes) themesIDs.push(theme.id)
    })
    // add them to the data object 
    data.emotions = emotionsIDs,
    data.themes = themesIDs
    // invoke the PostForm function
    postForm(data)
     // set state for some kind of animation
    reset()
  };


  return (

    <View style={styles.formContainer}>


      <View style={styles.titleInputLabelCont}>
        <Text style={styles.titleLabel}>Title</Text>

        <Controller 
          control={control} 
          rules= {{required: {value: true, message: 'Title required'}}} 
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              style={styles.titleInput} 
              placeholder='Enter title' 
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

        <View style={styles.datePickerContainer}>
          <View>
            <Text style={styles.dateTimePickerLabel}>Date</Text>
          </View>
          {
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode= {mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
              style={styles.dateTimePickerButton}
            />
          }
        </View>



        <DropDownButton title={buttonTitleEmotion} modalVisible={emotionModal} setModalVisible={setEmotionModal} ></DropDownButton>
        <CustomPicker 
          modalVisible= { emotionModal } 
          setModalVisible= { setEmotionModal } 
          value= { inputEmotions } 
          setValue= { setInputEmotions } 
          items= { emotions }
        ></CustomPicker>

        <DropDownButton title={buttonTitleTheme} modalVisible={themeModal} setModalVisible={setThemeModal} ></DropDownButton>
        <CustomPicker 
          modalVisible= { themeModal } 
          setModalVisible= { setThemeModal } 
          value= { inputThemes } 
          setValue= { setInputThemes } 
          items= { themes }
        ></CustomPicker>


      </View>


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

      {/* IMAGE PICKER WORKS WHEN WRITTEN OUT BUT NOT WHEN IMPORTED */}
      <View style={styles.imageComponentWrapper}>
        <View style={styles.headerAndButtonContainer}>
          <TouchableOpacity onPress={() => pickImage()}>
            <Text style={styles.label}>Add Photos</Text>
          </TouchableOpacity>
        </View>
      </View>


      <TouchableOpacity title="Submit" onPress={handleSubmit(onSubmit)} style= {styles.button}> 
            <Text style={{color: 'white'}}>Create</Text>
      </TouchableOpacity>


    </View>

  );
}

const styles = StyleSheet.create({
  formContainer: {
    top:30,
    width: 310,
    height: 550,
    backgroundColor: colors.backgroundLightSecondary  
  },

  titleInputLabelCont: {
    alignItems: 'flex-start',
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
    padding: 7
  },

  titleLabel: {
    fontSize: 17,
    fontWeight: '700',
    width: '100%',
    marginBottom: 5,
    fontFamily: fonts.primary,
  },

  titleInput: {
    paddingLeft: 10,
    height: 45,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    fontSize: 18,
    fontFamily: fonts.primary,
    fontWeight: '500',
    opacity: 1,
    borderRadius: 10
  },

  dropDownListCont: {
    height: 90,
    marginTop: 5,
    marginBottom: 25,
    backgroundColor: 'white',
    borderWidth: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: "center",
    zIndex: 2,
    borderRadius: 10
  },

  datePickerContainer: {
    height: 70, 
    width: 90,
    borderColor: 'black', 
    borderWidth: 1, 
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundLightSecondaryDark
  },

  dateTimePickerLabel: {
    fontFamily: fonts.primary,
    textAlign: 'center',
    color: 'white',
    marginBottom: 4,
    fontSize: 15,
    fontWeight: '700'
  },

  dateTimePickerButton: {
    justifyContent: 'center', 
    borderColor: 'black', 
    backgroundColor: 'white',
    borderRadius: 10,
    width: 75,
    alignSelf: 'center',
    height: 28,
    fontSize: 5
  },

  descInputLabelCont: {
    height: 200,
    bottom: 0
  },

  descLabel: {
    fontSize: 17,
    fontWeight: '700',
    width: '100%',
    marginBottom: 5,
    fontFamily: fonts.primary,
  },

  descInput: {
    padding: 12,
    paddingTop: 20,
    opacity: 1,
    flexShrink: 1,
    height: 150,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    fontSize: 15,
    fontFamily: fonts.primary,
    fontWeight: '400',
    borderRadius: 5
  },

  imageComponentWrapper: {
    width: 150,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    top: 5,
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundAccentDark
  },

  label: {
    fontFamily: fonts.primary,
    textAlign: 'center',
    color: 'white'
  },

  button: {
    width: 150,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: colors.backgroundDark,
    top: 25,
    borderColor: 'black',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }

  
})

module.exports = { MomentForm }