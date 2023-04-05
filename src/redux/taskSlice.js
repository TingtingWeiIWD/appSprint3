import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const initialTasks = [];
export const taskSlice = createSlice({
  name: "task",
  initialState: { tasks: initialTasks },

  reducers: {
    clearTasks: (state) => {
      state.tasks = [];
    },

    changeStatus: (state, action) => {
      const id = action.payload;
      state.tasks.forEach((task) => {
        if (task.id === id) {
          if (task.status === 3) {
            task.status = 1;
          } else {
            task.status++;
          }
        }
      });
    },

    removeTask: (state, action) => {
      const id = action.payload;
      let newTasks = [];
      state.tasks.forEach((task) => {
        if (task.id !== id) {
          newTasks.push(task);
        }
      });
      state.tasks = newTasks;
    },

    addTask: (state, action) => {
      state.tasks.unshift(action.payload);
    },
    setTask: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { clearTasks, changeStatus, removeTask, addTask, setTask } =
  taskSlice.actions;
export default taskSlice.reducer;
