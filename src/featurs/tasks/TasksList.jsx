import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateTask } from './tasksSlice';

const TasksList = () => {
    const list = useSelector(state => state.tasks.todos);
    const navigate = useNavigate();

    // שדות חיפוש
    const [titleSearch, setTitleSearch] = useState("");
    const [dateSearch, setDateSearch] = useState("");
    const [completedFilter, setCompletedFilter] = useState("all");

    // סינון הרשימה
    const filteredList = list.filter(task => {
        // חיפוש לפי כותרת
        const titleMatch = task.title.toLowerCase().includes(titleSearch.toLowerCase());

        // חיפוש לפי תאריך
        const dateMatch = dateSearch === "" || task.date === dateSearch;

        // סינון לפי הושלם\לא הושלם
        const completedMatch =
            completedFilter === "all" ||
            (completedFilter === "completed" && task.isCompleted) ||
            (completedFilter === "notCompleted" && !task.isCompleted);

        return titleMatch && dateMatch && completedMatch;
    });

    return (
        <>
            <div>
                <h2>Tasks List</h2>

                {/* חיפוש לפי כותרת */}
                <input
                    type="text"
                    placeholder="חיפוש לפי כותרת"
                    value={titleSearch}
                    onChange={(e) => setTitleSearch(e.target.value)}
                />

                {/* חיפוש לפי תאריך */}
                <input
                    type="date"
                    value={dateSearch}
                    onChange={(e) => setDateSearch(e.target.value)}
                />

                {/* סינון לפי הושלמה משימה */}
                <select
                    value={completedFilter}
                    onChange={(e) => setCompletedFilter(e.target.value)}
                >
                    <option value="all">הכול</option>
                    <option value="completed">הושלמו</option>
                    <option value="notCompleted">לא הושלמו</option>
                </select>

                <hr />

                {filteredList.map((task) => (
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
    );
};

export default TasksList;
