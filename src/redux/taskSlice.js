import {createSlice, nanoid} from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: nanoid(),
        name: action.payload.task,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    updateTask: (state, action) => {
      const {id, todo} = action.payload;
      const task = state.find(task => task.id === id);
      if (task) {
        task.name = todo;
      }
    },
  },
});

export const {addTask, deleteTask, updateTask} = taskSlice.actions;

export default taskSlice.reducer;
