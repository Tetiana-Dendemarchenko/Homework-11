import {configureStore} from '@reduxjs/toolkit';
import taskReducer from '../components/listItem/toolkitSlice'

export const store = configureStore({
    reducer: {
        tasks: taskReducer
    },
});
