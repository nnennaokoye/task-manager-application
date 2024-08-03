import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTasks } from '../store/taskSlice';

const TaskFilter: React.FC = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = event.target.value as 'all' | 'completed' | 'uncompleted';
    dispatch(filterTasks(filterValue));
  };

  return (
    <div>
      <label htmlFor="task-filter">Filter tasks: </label>
      <select id="task-filter" onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default TaskFilter;
