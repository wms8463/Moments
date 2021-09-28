import React from 'react';
import {StyleSheet, View, Text, Modal, Image, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native'
import {colors, fonts } from '../../assets/styles/styles'




function MomentModal(props) {
  
  const { modalVisible, setModalVisible, item } = props



  return (
    <Modal 
      animationType="slide" 
      transparent={true} 
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >

      <SafeAreaView style={{flex: 1, backgroundColor: colors.backgroundLight}}>

        <View style={styles.imageAndButtonContainer}>

          <TouchableOpacity 
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.closeButtonContainer}
          >
            <Text style={styles.closeButtonText}>Back</Text>
          </TouchableOpacity>

          <View style={styles.imageContainer}>
            { 
              item.Photos[0]? 
                <Image style={styles.image} source={{uri: item.Photos[0].name}}></Image> :
                <Image style={styles.image} source={require('../../assets/default-image.jpeg')}></Image>
            }
          </View>
        </View>


        <View style = {styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>


        <View style={styles.summaryBar}>
          <View style={styles.sumBarElemContainer}>
            <Text style={styles.elementHeader}>Emotions</Text>
            <View style={styles.elementTextItemsCont}>
              {item.Emotions.map((emotion) => {
                  return ( <Text style={styles.elementText} key={emotion.id}>{emotion.name}</Text>)
                })
              }
            </View>
          </View>
          <View style={styles.sumBarElemContainer}>
            <Text style={styles.elementHeader}>Themes</Text>
            <View style={styles.elementTextItemsCont}>
              {item.Themes.map((theme) => {
                  return ( <Text style={styles.elementText} key={theme.id}>{theme.name}</Text>)
                })
              }
            </View>
          </View>
        </View>


        <View style={styles.descriptionContainer}>
          <ScrollView>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </ScrollView>

        </View>


      </SafeAreaView>

    </Modal>
      
  );
}


const styles = StyleSheet.create({
  imageAndButtonContainer: {
    height: 220,
    width: '92%',
    alignSelf: 'center'
  },

  closeButtonContainer:{
    height: 50, 
    width: 90, 
    justifyContent: 'center',
    alignContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    zIndex: 1,
    position: 'absolute',
    right: 10,
    top: 15,
    borderRadius: 20,
    backgroundColor: colors.backgroundDark,
  },



  closeButtonText: { 
    fontFamily: fonts.primary, 
    color: 'white',
    fontWeight: '600',
    fontSize: 17,
    zIndex: 2,
    textAlign: 'center'
  },

  imageContainer:{
    flex: 1,

  },

  image: {
    flex: 1,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    width: '100%'
  },

  titleContainer: {
    height: 115,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: '95%',
    alignSelf: 'center'
  }, 

  title: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: fonts.primary,
    lineHeight: 36,
    paddingHorizontal: 15,
    letterSpacing: .9,
  },

  summaryBar: {
    height: 95,
    backgroundColor: colors.backgroundAccentDark,
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 20,
    justifyContent: 'space-around',
    alignItems: 'center',   
    width: '92%',
    alignSelf: 'center',
    paddingHorizontal: 10
  },


  sumBarElemContainer: {
    borderColor: 'black',
    borderWidth: 1,
    width: 145,
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 75,
    backgroundColor: colors.backgroundLight,
    padding: 10,
    borderRadius: 10
  },

  elementHeader: {
    fontSize: 15,
    fontWeight: '700',
    bottom: 4,
    color: 'black',
    fontFamily: fonts.primary
  },

  elementTextItemsCont: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
  },

  elementText: {
    fontSize: 12,
    marginRight: 10,
    color: 'black',
    fontFamily: fonts.primary
  },

  descriptionContainer: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    width: '92%',
    alignSelf: 'center',
    height: 280,
    top: 20,
    padding: 20,
    paddingHorizontal: 22,
    backgroundColor: colors.backgroundAccentDark
  },

  descriptionText: {
    fontSize: 18,
    lineHeight: 33,
    color: 'white',
    fontFamily: fonts.primary
  }



})

module.exports = { MomentModal };
