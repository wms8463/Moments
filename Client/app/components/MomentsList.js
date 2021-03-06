import React, {useState} from 'react';
import { 
  View, FlatList, StyleSheet,
} from 'react-native';
import { MomentModal } from  './Moment'
import { MomentListItemVert } from './MomentListItemVert'
import {colors} from '../../assets/styles/styles'



function MomentsList(props) {


  const [modalVisible, setModalVisible] = useState(false)
  const [modalContent, setModalContent] = useState()
  
  const {filteredData} = props

  const onClickItem = (item) => {
    setModalContent(item)
    setModalVisible(true)
  }

  const itemView = ({item}) => {
    return (
      <View style={styles.momentContainer}>
        <MomentListItemVert 
          item={item} 
          onClickItem = {onClickItem}
        ></MomentListItemVert>
      </View>
    )
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
        data = {filteredData}
        keyExtractor={item => item.id}
        renderItem={itemView}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundDark,
    borderColor: 'black',
  },

  contentContainer: {
    alignItems: 'center',
    width: '100%',
    paddingTop: 30,
    paddingBottom: 400
  },

  momentContainer: {
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    paddingRight: 10,
    marginBottom: 25,
    width: 330,
    height: 140,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.backgroundLight,
    shadowColor: colors.backgroundLight,
    shadowOpacity: .25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 }
  },

})

module.exports = {MomentsList};

