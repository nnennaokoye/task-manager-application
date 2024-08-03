import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TasksState {
  tasks: Task[];
  filter: 'all' | 'completed' | 'uncompleted';
}

const initialState: TasksState = {
  tasks: [],
  filter: 'all',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
    toggleTask(state, action: PayloadAction<number>) {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    filterTasks(state, action: PayloadAction<'all' | 'completed' | 'uncompleted'>) {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleTask, filterTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
