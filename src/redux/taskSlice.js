import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  filter: 'all', // 'done', 'not-done'
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: nanoid(),
        description: action.payload,
        isDone: false,
      };
      state.tasks.push(newTask);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    editTask: (state, action) => {
      const { id, newDescription } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) task.description = newDescription;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleTask, editTask, setFilter } = taskSlice.actions;
export default taskSlice.reducer;
