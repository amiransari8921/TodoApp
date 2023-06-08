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
      // const {id, newName} = action.payload;
      // for (const item in state) {
      //   if (item.id === id) {
      //     item.name = newName;
      //   }
      // }
      console.log(action.payload);
    },
  },
});

export const {addTask, deleteTask, updateTask} = taskSlice.actions;

export default taskSlice.reducer;
