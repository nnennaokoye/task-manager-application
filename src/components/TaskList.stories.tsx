import React from 'react';
import { Provider } from 'react-redux';
import { Meta, StoryFn } from '@storybook/react'; // Updated imports
import configureStore from 'redux-mock-store'; // Mock store for Storybook
import TaskList from './TaskList';
import { RootState } from '../store/store'; // Ensure RootState is correctly imported or defined

// Create a mock store for Storybook
const mockStore = configureStore<RootState>([]);
const store = mockStore({
  tasks: {
    tasks: [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
    ],
    filter: 'all',
  },
});

export default {
  title: 'Components/TaskList',
  component: TaskList,
  decorators: [(Story) => <Provider store={store}><Story /></Provider>],
} as Meta<typeof TaskList>; // Ensure proper typing here

const Template: StoryFn<React.ComponentProps<typeof TaskList>> = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {};
