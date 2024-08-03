import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';
import axios from 'axios';
import '../style.css';

export interface AddTaskProps {}

const AddTask: React.FC<AddTaskProps> = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = async () => {
        if (!title) return; // Prevent adding empty tasks

        const newTask = { title, completed: false };

        try {
            console.log('Adding task:', newTask); // Debugging line
            const response = await axios.post('http://localhost:5000/api/tasks', newTask);
            console.log('Task added response:', response.data); // Debugging line
            dispatch(addTask(response.data));
            setTitle('');
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    return (
        <div className="add-task-container">
            <input
                type="text"
                className="add-task-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="New Task Title"
            />
            <button className="add-task-button" onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default AddTask;
