import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

export default function HomeScreen() {
  const route = useRoute();
  const {email} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>email: {email}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text:{
    fontSize:20,
    borderRadius:10,
    borderWidth:2,
    padding:10,
    color:'black'
  }
});
