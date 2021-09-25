import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';



function MomentsList(props) {

  const {moments} = props

  return (

    <FlatList 
      style = {styles.container}
      contentContainerStyle={styles.contentContainer}
      data = {moments}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return (
        <View style={styles.momentContainer}>
          {/* Image container */}
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: item.Photos[0].name}}></Image>
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

        </View>
        )
      }}
    />
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
    height: 103,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray'
  },

  imageContainer: {
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginLeft: 3
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
    flex: 1
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

module.exports = {MomentsList};