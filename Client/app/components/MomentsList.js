import React, {useState} from 'react';
import { set } from 'react-hook-form';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MomentModal } from  './Moment'
import { MomentListItemVert } from './MomentListItemVert'


function MomentsList(props) {

  const { moments } = props

  const [modalVisible, setModalVisible] = useState(false)
  const [modalContent, setModalContent] = useState()
  
  const onClickItem = (item) => {
    setModalContent(item)
    setModalVisible(true)
  }

  return (
    <View>
      {modalVisible && (
        <MomentModal 
          item={modalContent} 
          modalVisible={modalVisible} 
          setModalVisible={setModalVisible} 
        />
        )
      
      }
      
      <FlatList 
        style = {styles.container}
        contentContainerStyle={styles.contentContainer}
        data = {moments}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.momentContainer}>

              <MomentListItemVert 
                item={item} 
                onClickItem = {onClickItem}
                // setModalContent={setModalContent} 
                // modalVisible={modalVisible} 
                // setModalVisible={setModalVisible}
              ></MomentListItemVert>

            </View>
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: 1,

  },

  contentContainer: {
    alignItems: 'center',
    width: '100%',
    paddingTop: 30,
    paddingBottom: 30
  },

  momentContainer: {
    borderRadius: 12,
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
    marginBottom: 20,
    width: 310,
    height: 115,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray'
  },

})

module.exports = {MomentsList};

