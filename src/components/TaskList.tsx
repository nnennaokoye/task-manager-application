import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask } from '../store/taskSlice';
import '../style.css'; 

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface RootState {
  tasks: {
    tasks: Task[];
    filter: 'all' | 'completed' | 'uncompleted'; 
  };
}

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const filter = useSelector((state: RootState) => state.tasks.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return filter === 'completed' ? task.completed : !task.completed;
  });

  return (
    <div className="task-list-container">
      <ul>
        {filteredTasks.map((task: Task) => (
          <li key={task.id} className="task-list-item">
            <span className={`task-text ${task.completed ? 'completed' : ''}`}>
              {task.title}
            </span>
            <button className="task-button" onClick={() => dispatch(toggleTask(task.id))}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
