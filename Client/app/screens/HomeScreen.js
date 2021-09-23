import React from 'react';
import { View, Text, StyleSheet } from 'react-native';




function Home (props) {

  const moments = props.moments

  return (
    <View style={styles.container}>
      {moments.forEach(moment => {
        <Text>{moment.name}</Text>
      })}
      <Text>Hi</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue'
  }
})



export default Home;