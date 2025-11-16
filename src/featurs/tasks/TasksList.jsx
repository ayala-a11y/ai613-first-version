import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateTask } from './tasksSlice';

const TasksList = () => {
    const list = useSelector(state => state.tasks.todos);
    const navigate = useNavigate();

    return <>

        <div>
            <h2>Tasks List</h2>
            {list.map((task) => (
                <div key={task.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
                    <h3>{task.title}</h3>
                    <p>{task.desc}</p>
                    <p>{task.date}</p>
                    {task.img && <img src={task.img} style={{ maxWidth: "100px" }} />}
                    <p>{task.isCompleted ? "Completed" : "Not completed"}</p>
                    <button onClick={() => navigate(`/update/${task.id}`)}>Edit Task</button>
                </div>
            ))}

        </div>
    </>
};

export default TasksList;
