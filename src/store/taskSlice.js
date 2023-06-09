import {createSlice, nanoid} from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: nanoid(),
        name: action.payload.task,
        editMode: false,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    updateTask: (state, action) => {
      const {id, text} = action.payload;
      const item = state.find( item => item.id===id);
      if (item){
        item.name= text;
      }
    },
    updateState: (state, action) => {
      const id=action.payload.id;
      console.log(id);
      const item = state.find(item => item.id === id);
      if (item){
        if(item.editMode===false){
          item.editMode=true;
        }
        else if (item.editMode===true){
          item.editMode=false;
        }
      }
    },
  },
});

export const {addTask, deleteTask, updateTask, updateState} = taskSlice.actions;

export default taskSlice.reducer;
