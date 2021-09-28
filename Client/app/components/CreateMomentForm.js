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
import { fonts } from '../../assets/styles/styles'
import * as ImagePicker from 'expo-image-picker'
import ImageSelector from './ImageSelector'






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

    // upload to firebase 
    // firebase gives a url back and that is what gets stored in the database


    // alert(image.uri)
  }


  const onSubmit = (data) => {
    let emotionsIDs = []
    // start point inputEmotions = 'Humor'
    // search in emotions for an emotion with a name equal to string
    // output = [2]
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

    // at them to the data object 
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

        <View style={styles.datePickerContainer}>
          <View>
            <Text style={{color: 'red'}}> Select Date</Text>
          </View>
          {
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode= {mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
              style={{justifyContent: 'center', borderColor: 'black', borderWidth: 1, width: 100, backgroundColor: 'white'}}
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

      {/* IMAGE PICKER WORKS WHEN WRITTEN OUT BUT NOT WHEN IMPORTED */}
      {/* <ImageSelector setImage={setImage}></ImageSelector> */}
      <View style={styles.imageComponentWrapper}>
        <View style={styles.headerAndButtonContainer}>
          <TouchableOpacity onPress={() => pickImage()}>
            <Text style={styles.label}>Add Photos</Text>
          </TouchableOpacity>
        </View>
      </View>


      <TouchableOpacity title="Submit" onPress={handleSubmit(onSubmit)} style= {styles.button}> 
            <Text>Create</Text>
      </TouchableOpacity>

      <View style={{height: 100, width: 100, backgroundColor:'white'}}>
        {/* {alert(image.uri)} */}

        <Image source={{uri: image.uri}} style={{flex: 1}} />
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  formContainer: {
    top:30,
    width: 300,
    height: 550,
    borderColor: 'black',
    borderWidth: 10,
    // backgroundColor: 'white'
  },

  titleInputLabelCont: {
    alignItems: 'flex-start',
    borderWidth: 10,
    borderColor: 'blue',
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
        fontFamily: fonts.semiBold
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
    borderWidth: 10,
    borderColor: 'green',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: "center",
    zIndex: 2
  },

  datePickerContainer: {
    height: 60, 
    width: 120, 
    backgroundColor: 'white', 
    borderColor: 'black', 
    borderWidth: 1, 
    borderRadius: 10,
    color: 'pink',
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