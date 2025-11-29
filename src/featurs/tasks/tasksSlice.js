import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: 1, date: "03-03-2023", title: "create new feature", desc: "upgrade the app", img: "/1.png", isCompleted: false },

        { id: 2, date: "10-04-2023", title: "fix login bug", desc: "handle incorrect credentials", img: "/2.png", isCompleted: false },

        { id: 3, date: "15-04-2023", title: "add user dashboard", desc: "create main user overview screen", img: "/3.png", isCompleted: true }
    ],

};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {

        someArived: (state, action) => {// פעולה שמקבלת מערך של משימות ומעדכנת את המצב הראשוני
            const allTasks = action.payload;
            state.todos = [...allTasks]
        },
        addTask: (state, action) => {
            const newTask = action.payload;
            newTask.id = state.todos[state.todos.length - 1].id + 1;
            state.todos.push(newTask)
        },
        updateTask: (state, action) => {
            const updatedTask = action.payload;
            const index = state.todos.findIndex(t => t.id == updatedTask.id);

            if (index === -1) {
                console.error("Task not found:", updatedTask.id);//בדיקה ע"מ שלא יפול
                return;
            }

            state.todos[index] = { ...updatedTask };
        }

    }
});
export const { someArived, addTask, updateTask } = tasksSlice.actions;

export default tasksSlice.reducer;