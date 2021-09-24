import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';






function Moments(props) {
  const moments = props.moments



  return (
    <View style={styles.container}>
      <FlatList 
        data = {moments}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.createdAt}</Text>
            <View style={styles.emotions}>
              {item.Emotions.map((emotion) => {
                  return ( <Text key={emotion.id}>{emotion.name}</Text>)
                })
              }
            </View>
          </View>
          )
        }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  emotion: {
    flexDirection: 'row',
  },
})



export default Moments;