import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSliece';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
