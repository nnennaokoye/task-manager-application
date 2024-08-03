import React from 'react';
import { Provider } from 'react-redux';
import { Meta, StoryFn } from '@storybook/react';
import store from '../store/store';
import AddTask, { AddTaskProps } from './AddTask';

export default {
  title: 'Components/AddTask',
  component: AddTask,
  decorators: [(Story) => <Provider store={store}><Story /></Provider>],
} as Meta<typeof AddTask>; 

const Template: StoryFn<typeof AddTask> = (args: AddTaskProps) => <AddTask {...args} />;


export const Default = Template.bind({});
Default.args = {};
