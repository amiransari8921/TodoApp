import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
//Ionicons
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {deleteTask, updateTask} from '../redux/taskSlice';
import {useDispatch} from 'react-redux';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.tasks);
  const [isModalVisible, setisModalVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const [id, setid] = useState('');
  const [taskName, setTaskName] = useState('');

  //delete item by checking if id is equal to the id of the item
  const onDelete = id => {
    dispatch(
      deleteTask({
        id: id,
      }),
    );
  };

  //while updating a task
  const onUpdate = async (id, name) => {
    setisModalVisible(true);
    setInputText(name);
    setid(id);
  };

  //renderItem function with a delete and edit button
  const renderItem = ({item}) => {
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

  const onPressSaveEdit = async () => {
    setTaskName(inputText);
    setisModalVisible(false);
    dispatch(
      updateTask({
        id: id,
        todo: taskName,
      }),
    );
  };

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Modal
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => setisModalVisible(false)}>
        <View>
          <Text>Change to :</Text>
          <TextInput
            onChangeText={text => {
              setInputText(text);
            }}
            defaultValue={inputText}
            editable={true}></TextInput>
          <TouchableOpacity
            onPress={() => {
              onPressSaveEdit();
            }}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
});
