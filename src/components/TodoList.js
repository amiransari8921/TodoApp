import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
//Ionicons
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {deleteTask, updateState, updateTask} from '../store/taskSlice';
import {useDispatch} from 'react-redux';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.tasks);

  //delete item by checking if id is equal to the id of the item
  const onDelete = id => {
    dispatch(
      deleteTask({
        id: id,
      }),
    );
  };
  const handleChange = (id, text) => {
    dispatch(updateTask({id, text}));
  };

  const handleSave = id => {
    dispatch(updateState({id}));
  };

  //while updating a task
  const onUpdate = (id, name) => {
    dispatch(updateState({id: id}));
  };

  //renderItem function with a delete and edit button
  const renderItem = ({item}) => {
    if (item.editMode) {
      return (
        <View style={styles.item}>
          <TextInput
            style={styles.textInput}
            onChangeText={text => {
              handleChange(item.id, text);
            }}
            defaultValue={item.name}></TextInput>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleSave(item.id);
            }}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        <TouchableOpacity
          style={styles.update}
          onPress={() => onUpdate(item.id, item.name)}>
          <Icon name="document" size={30} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDelete(item.id)}>
          <Icon name="trash" size={30} color="red" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#e9e9e9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    width: 180,
    fontSize: 20,
  },
  delete: {
    fontSize: 24,
    color: 'red',
  },
  update: {
    width: 12,
    color: 'blue',
  },
  text: {
    fontSize: 24,
    padding: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    width: 60,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: 'grey',
    marginBottom:11
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    width: '75%',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 15,
  },
});
