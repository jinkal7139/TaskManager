import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  filter: 'All', 
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) task.status = status;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, updateTaskStatus, deleteTask, setFilter } = taskSlice.actions;
export const selectTasks = (state) => state.tasks.tasks;
export const selectFilter = (state) => state.tasks.filter;
export const selectFilteredTasks = (state) => {
  const tasks = state.tasks.tasks;
  const filter = state.tasks.filter;
  if (filter === 'All') return tasks;
  return tasks.filter((task) => task.status === filter);
};

export default taskSlice.reducer;
