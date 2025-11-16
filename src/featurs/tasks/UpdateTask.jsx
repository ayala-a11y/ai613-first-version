import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateTask } from './tasksSlice';

const UpdateTask = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const numericId = Number(id);//ממירה למספר כלומר מוציאה את זה ממחרוזת

    const task = useSelector(state =>
        state.tasks.todos.find(t => t.id === numericId)
    );



    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('');
    const [img, setImg] = useState(null);
    const [isCompleted, setIsCompleted] = useState(false);



    useEffect(() => {


        if (task) {
            setTitle(task.title);
            setDesc(task.desc);
            setDate(task.date);
            setImg(task.img);
            setIsCompleted(task.isCompleted);
        }
    }, [task]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImg(reader.result);
            reader.readAsDataURL(file);
        }
    };

    if (!task) {
        return <h2>Task not found</h2>;
    }


    const submit = () => {
        if (!title || !desc || !date) {
            alert('Please fill all required fields');
            return;
        }

        dispatch(updateTask({
            id: numericId,
            title,
            desc,
            date,
            img,
            isCompleted
        }));

        alert('Task updated successfully');
        navigate('/');
    };

    return <>
        <div>
            <h2>Update Task</h2>

            <form>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

                <input type="file" accept="image/*" onChange={handleImageChange} />

                {img && <img src={img} style={{ width: "100px" }} />}

                <label>
                    Completed:
                    <input type="checkbox" checked={isCompleted} onChange={(e) => setIsCompleted(e.target.checked)} />
                </label>

                <button type="button" onClick={submit}>Update Task</button>
            </form>
        </div>
    </>
};

export default UpdateTask;
