import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        taskList: []
    },
    reducers: {
        initTasks: (state, action) => {
            state.taskList = action.payload.tasks || [];
        },
        addTask: (state, action) => {
            state.taskList.push(action.payload)
            localStorage.setItem("tasks", JSON.stringify(state.taskList));
        },
        setTaskAsComplete: (state, action) => {
            const { id, checkedStatus } = action.payload;
            let idx = state.taskList.findIndex(elem => elem.id === id)
            state.taskList[idx].completed = checkedStatus;
            localStorage.setItem("tasks", JSON.stringify(state.taskList));
        },
        updateTask: (state, action) => {
            const { id, title, comments } = action.payload;
            let idx = state.taskList.findIndex(elem => elem.id === id)
            state.taskList[idx].title = title;
            state.taskList[idx].comments = comments;
            localStorage.setItem("tasks", JSON.stringify(state.taskList));
        },
        deleteTask: (state, action) => {
            const { id } = action.payload;
            state.taskList = state.taskList.filter(el => el.id !== id)
            localStorage.setItem("tasks", JSON.stringify(state.taskList));
        },
        deleteAllCompletedTasks: (state) => {
            state.taskList = state.taskList.filter(el => el.completed === false)
            localStorage.setItem("tasks", JSON.stringify(state.taskList));
        },
    }
});

export const { initTasks, addTask, setTaskAsComplete, updateTask, deleteTask, deleteAllCompletedTasks } = tasksSlice.actions;