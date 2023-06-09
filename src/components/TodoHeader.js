import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTask} from '../store/taskSlice';

const TodoHeader = () => {
  const [todo, setTodo] = useState('');

  const dispatch = useDispatch();

  const onSubmitTask = () => {
    if (todo.trim().length === 0) {
      Alert.alert('You need to enter a task');
      setTodo('');
      return;
    }

    dispatch(
      addTask({
        task: todo,
      }),
    );
    setTodo('');
  };

  return (
    <View>
      <Text style={styles.text}>Todo List</Text>
      <View style={styles.view}>
        {/* TextInput */}
        <TextInput
          style={styles.textInput}
          placeholder="Add todo"
          onChangeText={setTodo}
          value={todo}
        />
        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={onSubmitTask}>
          <Text style={{color: 'white'}}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoHeader;

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: '90%',
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    margin: 10,
    width: '90%',
    borderRadius: 5,
    alignItems: 'center',
  },
});
