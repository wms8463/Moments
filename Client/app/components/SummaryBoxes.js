import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  FlatList 
} from 'react-native';





function SummaryBox(props) {
  const {title, data} = props
  
  return (
    <View style = {styles.summaryCompBox}>
      <Text style={styles.summaryCompLabel}>{title}</Text>
      <Text style={styles.summaryCompData}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

summaryCompBox: { borderStyle: 'solid', borderColor: 'black', borderWidth: 1,
                  borderRadius: 15, height: 110, width: 130, 
                  alignItems: 'center', justifyContent: 'center',
                  backgroundColor: 'lightgray', shadowColor: 'black',
                  shadowOpacity: .25, shadowRadius: 5
                },

    summaryCompLabel: { fontSize: 18, fontWeight: '400', bottom: 15,},
    
    summaryCompData: { fontSize: 25, fontWeight: '500',},
})

module.exports = {SummaryBox};