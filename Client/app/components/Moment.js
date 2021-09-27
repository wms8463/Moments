import React from 'react';
import {StyleSheet, View, Text, Modal, Image, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native'

function MomentModal(props) {
  
  // each MomentModal sends that to the modal, along with the state management
  const { modalVisible, setModalVisible, item } = props
  // const {title, description, Emotions, Themes, Photos} = item

  // each page must have a modal state that determines if it is displayerd
  // there is only one modal state and one modal
  // the touchable opacity for each dynamically passes a specific moment the same way it itself is rendered that way

  return (
    <Modal 
      animationType="slide" 
      transparent={true} 
      visible={modalVisible}
      onRequestClose={() => {
        // Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >

      <SafeAreaView style={{flex: 1, backgroundColor: 'yellow'}}>

        <View style={styles.imageAndButtonContainer}>

          <TouchableOpacity 
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.closeButton}
          >
            <Text>Back</Text>
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
    height: 200,
    borderWidth: 1,
    borderColor: 'red',
    width: '95%',
    alignSelf: 'center'
  },

  closeButton: {
    height: 50, 
    width: 90, 
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    zIndex: 2,
    position: 'absolute',
    right: 10,
    top: 10,
    borderRadius: 20,
    backgroundColor: 'white'
  },

  imageContainer:{
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
  },

  image: {
    flex: 1,
    borderRadius: 20,
    width: '100%'
  },

  titleContainer: {
    height: 110,
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: '95%',
    alignSelf: 'center'
  }, 

  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600'
  },

  summaryBar: {
    height: 90,
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    borderRadius: 20,
    justifyContent: 'space-around',
    alignItems: 'center',   
    width: '95%',
    alignSelf: 'center'
  },

  sumBarElemContainer: {
    borderColor: 'red',
    borderWidth: 1,
    width: 160,
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 70,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10
  },

  elementHeader: {
    fontSize: 17,
    fontWeight: '500',
    bottom: 4,
  },

  elementTextItemsCont: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'center'
  },

  elementText: {
    fontSize: 13,
    marginRight: 10,
  },

  descriptionContainer: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
    width: '95%',
    alignSelf: 'center',
    height: 250,
    top: 20,
    padding: 20,
    backgroundColor: 'white'
  },

  descriptionText: {
    fontSize: 19,
    lineHeight: 30
  }



})

module.exports = { MomentModal };
