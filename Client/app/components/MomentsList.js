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
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.createdAt}>{item.createdAt}</Text>
          </View>

        </View>
        )
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgreen',
    borderColor: 'black',
    borderWidth: 1,
  },

  contentContainer: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },

  momentContainer: {
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
    marginTop: 22,
    width: 295,
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightyellow'
  },

  imageContainer: {
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginLeft: 5
  },

  image: {
    height: 75,
    width: 75,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1
  },

  textContainer: {
    flexDirection: 'column'
  },

  title: {
    fontSize: 20,
    fontWeight: '500'
  },

  emotions: {
    flexDirection: 'row',
  },

  emotionTextEl: {
    margin: 2,
    fontSize: 12
  },

  createdAt: {
    fontSize: 10
  },

  
})

module.exports = {MomentsList};