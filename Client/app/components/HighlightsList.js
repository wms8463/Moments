import React, {useState} from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {getHighlights} from '../calculations/highlights'
import {MomentModal} from './Moment'
import {fonts, colors} from '../../assets/styles/styles'

function HighlightsList(props) {

  const {moments} = props
  const highlights = getHighlights(moments)

  const [modalVisible, setModalVisible] = useState(false)
  const [modalContent, setModalContent] = useState()
  
  const onClickItem = (item) => {
    setModalContent(item)
    setModalVisible(true)
  }
  

  return (
    <View style={styles.container}>
      {/* import momentmodal so it gets accessed */}
      {/* Add the model state visible and content variables */}
      {/* make each highlight item a touchable componenet*/}

      {modalVisible && (
        <MomentModal 
          item={modalContent} 
          modalVisible={modalVisible} 
          setModalVisible={setModalVisible} 
        />
        )
      
      }

      <FlatList 
        horizontal={true}
        data={ highlights }
        contentContainerStyle={styles.flatListStyle}
    
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={()=> {
                onClickItem(item)
                }}
            >

              <View style={styles.highlight}>

                  <Image style={styles.image} source={{uri: item.Photos[0].name}}/>

                  <View style={styles.backgroundBlur}></View>

                  <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.date}>{item.createdAt}</Text>
                  </View>

              </View>

            </TouchableOpacity>
          )
        }}
      
      />


    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderColor: 'black',
    height: 310,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignContent: 'center',
    shadowColor: colors.backgroundDark,
    shadowOpacity: .5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 1 },
    borderWidth: 1,
    backgroundColor: colors.backgroundLightSecondary,
    paddingHorizontal: 5
  },

  flatListStyle: {
    justifyContent: 'center',
    paddingTop: 15,
  },

  highlight: {
    width: 200,
    height: 250,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    margin: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    position: 'absolute',
    zIndex: 1,
    opacity: .6
  },

  backgroundBlur: {
    zIndex: 2,
    position: 'absolute',
    top: '30%',
    width: '100%',
    height: '70%',
    padding: 15,
    backgroundColor: colors.backgroundDark,
    opacity: .6,
    borderRadius: 14,
  },

  textContainer: {
    zIndex: 3,
    top: '10%',
    padding: 10
  },
  
  title: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 15,
    color: 'white',
    fontFamily: fonts.primary,
    lineHeight: 26
  },

  date: {
    color: colors.backgroundLight,
    fontWeight: '500',
    fontFamily: fonts.primary
  }

  
})


module.exports = {HighlightsList} ;