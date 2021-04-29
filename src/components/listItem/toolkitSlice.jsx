import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';

const toolkitSlice = createSlice ( {
    initialState: [],
    name: 'tasks',
    reducers: {
        switchToDoneTasks: (state, action) => {
            const doneTask = state.find ( task => task.id === action.payload );
            doneTask.isCompleted = ! doneTask.isCompleted;
        },
        deleteTask: (state, action) => {
            return state.filter ( doneTask => doneTask.id !== action.payload )
        },
        createTaskList: (state, action) => {
            state.push ( { id: uuidv4 (), isCompleted: false, text: action.payload, } )
        },
    }
} );

export const { switchToDoneTasks, deleteTask, createTaskList } = toolkitSlice.actions;
export const chooseTask = (state) => state.tasks;
export default toolkitSlice.reducer;
