import { View, Text } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

export default function HomeScreen() {
  const route = useRoute();
  const {email}=route.params;
  return (
    <View>
      <Text>email: {email}</Text>
    </View>
  )
}