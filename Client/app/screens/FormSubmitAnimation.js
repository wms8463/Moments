import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from '@react-navigation/native'

import LottieView from "lottie-react-native";




export default function FormSubmitAnimation() {
  const navigation= useNavigation()
  const [finish, setFinish] = useState(false)

  const handleFinish = () => {
    setFinish(true)
    navigation.navigate('home')
  }

  return (
    <View>
      <LottieView
        source={require("../../assets/animations/69722-check-sucess.json")}
        style={styles.animation}
        autoPlay
        onAnimationFinish= { () => {handleFinish}}
        loop={false}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  animation: {
    width: 100,
    height: 100,
  },
});

