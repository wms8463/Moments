import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native'
import {fonts} from '../../assets/styles/styles'

function MomentListItemVert(props) {  
  const {onClickItem, item} = props


  return (
    <TouchableOpacity onPress={()=> {
      onClickItem(item)
      }} 
      style={{flexDirection: 'row'}}
    >

        {/* Image container */}
        <View style={styles.imageContainer}>
          { 
            item.Photos[0]? 
              <Image style={styles.image} source={{uri: item.Photos[0].name}}></Image> :
              <Image style={styles.image} source={require('../../assets/default-image.jpeg')} ></Image>
          }
        </View>

        {/* Content container */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.emotions}>
            {item.Emotions.map((emotion) => {
                return ( <Text style={styles.emotionTextEl} key={emotion.id}>{emotion.name}</Text>)
              })
            }
          </View>
          <Text style={styles.description} numberOfLines={2}>{item.description}</Text>

        </View>


    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    alignSelf: 'center',
  },

  image: {
    height: 92,
    width: 92,
    borderRadius: 92,
    borderColor: 'black',
    borderWidth: 1
  },

  textContainer: {
    flexDirection: 'column',
    overflow: 'hidden',
    height: 115,
    width: 200,
    paddingRight: 15,
    
    justifyContent: 'center'
  },

  title: {
    fontSize: 15,
    fontWeight: '800',
    fontFamily: fonts.primary,
    lineHeight: 20
  },

  emotions: {
    flexDirection: 'row',
  },

  emotionTextEl: {
    margin: 2,
    marginBottom: 5,
    fontSize: 11,
    color: 'gray',
    fontFamily: fonts.primary,
    letterSpacing: .2,
    fontWeight: '600'
  },

  description: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: fonts.primary

  },

})

module.exports = {MomentListItemVert};