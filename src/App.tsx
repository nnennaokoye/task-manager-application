import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Task Manager</h1>
        <AddTask />
        <TaskFilter />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
