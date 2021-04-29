import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {createTaskList} from "./toolkitSlice";

function CreateListItem() {
    const [task, setTask] = useState<string>(" ");

    const onTaskSubmission = (e: any) => {
        e.preventDefault();
        if (!task) return;
        dispatch(createTaskList(task));
        setTask(" ");
    }

    const onTaskChange = (e: any) => {
        setTask(e.target.value);
    }

    const dispatch = useDispatch();

    return (
        <form className='form' onSubmit={onTaskSubmission}>
            <input type='text' className='input' placeholder='Enter your task' value={task} onChange={onTaskChange}/>
            <button className="addTaskBtn" type='submit'>Add task</button>
        </form>
    )
}

export default CreateListItem;
