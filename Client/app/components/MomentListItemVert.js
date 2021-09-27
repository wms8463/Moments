import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native'

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
          {/* <Text style={styles.createdAt}>{item.createdAt}</Text> */}
        </View>


    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({


  imageContainer: {
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginLeft: 3,
    // borderColor: 'yellow',
    // borderWidth: 1,
    alignSelf: 'center'
  },

  image: {
    height: 75,
    width: 75,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 1
  },

  textContainer: {
    flexDirection: 'column',
    overflow: 'hidden',
    flex: 1,
    // borderColor: 'yellow',
    // borderWidth: 1,
  },

  title: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 10
  },

  emotions: {
    flexDirection: 'row',
  },

  emotionTextEl: {
    margin: 2,
    marginBottom: 5,
    fontSize: 11,
    opacity: .5
  },

  description: {
    fontSize: 12,
    marginBottom: 5
  },

  createdAt: {
    fontSize: 10
  },
})
module.exports = {MomentListItemVert};