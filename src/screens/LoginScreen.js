import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const user = await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Home', {email: user.user.email});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo-App</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your email"
        onChangeText={text => {
          setEmail(text);
        }}></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your password"
        onChangeText={text => {
          setPassword(text);
        }}></TextInput>
      <TouchableOpacity
        onPress={() => {
          handleLogin();
        }}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('Signup')}}>
        <Text style={styles.text}>New User SignUp?</Text>
      </TouchableOpacity>
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
  textInput: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    width: '90%',
    backgroundColor: 'white',
    marginBottom: 20,
  },
  text: {
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'blue',
    color: 'white',
  },
  heading: {
    marginBottom: 40,
    fontSize: 40,
  },
});
