import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './tasksSlice';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
    const dispatch = useDispatch();//מביא את הפונקציה שליחה
    const navigate = useNavigate();// פונקציה לניווט בין דפים

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('');
    const [img, setImg] = useState(null); // כאן נשמור את התמונה שנבחרה
    const [isCompleted, setIsCompleted] = useState(false);

    const handleImageChange = (e) => {//פונקציה הנותנת אפשרות לגשת לקבצים ע"מ לבחור תמונה
        const file = e.target.files[0];
        if (file) {//אם בחרנו קובץ
            const reader = new FileReader();// יצירת אובייקט לקריאת הקובץ
            reader.onloadend = () => {
                setImg(reader.result); 
            };
            reader.readAsDataURL(file);
        }
    };

    const submit = () => {//שמירת המשימה החדשה
        if (!title || !desc || !date) {//אם לא מילאנו הכל
            alert('Please fill all required fields');
            return;//לא נותן להוסיף
        }
        const newTask = {//יוצר אובייקט חדש
            title,
            desc,
            date,
            img,
            isCompleted,
        };
        dispatch(addTask(newTask));//אחרת מזין את הפרטים שהכנסנו למטה ומוסיף את הקובץ
         alert('your task added successfully');
        navigate('/update'); // חוזרים לרשימת המשימות אחרי הוספה
    };

    return <>
        <div>
            <h2>Add New Task</h2>
            <form>
                <div>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Description"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        
                    />
                </div>
                <div>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        
                    />
                </div>
                <div>
                    <label>
                        Task Image:
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                    </label>
                </div>

                {/* Preview של התמונה שנבחרה */}
                {img && <img src={img} alt="Preview" style={{ maxWidth: '100px', marginTop: '10px' }} />}

                <div>
                    <label>
                        Completed:
                        <input
                            type="checkbox"
                            checked={isCompleted}
                            onChange={(e) => setIsCompleted(e.target.checked)}
                        />
                    </label>
                </div>

                <button type="button" onClick={submit}>
                    Add Task
                </button>
            </form>
        </div>
    </>
};

export default AddTask;
