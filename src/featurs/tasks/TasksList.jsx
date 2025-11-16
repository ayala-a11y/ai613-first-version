import React from 'react';
import { useSelector } from 'react-redux';

const TasksList = () => {
    const list = useSelector(state => state.tasks.todos);
    
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
                </div>
            ))}
        </div>
    </>
};

export default TasksList;
