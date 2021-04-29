import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {chooseTask, switchToDoneTasks, deleteTask} from '../components/listItem/toolkitSlice';
import CreateListItem from '../components/listItem/createListItem';
import TodoItemsList from '../components/list/todoItemsList';

const App = () => {
    const tasks = useSelector(chooseTask);
    const onSwitch = (id: any) => dispatch(switchToDoneTasks(id));
    const onDelete = (id: any) => dispatch(deleteTask(id));
    const dispatch = useDispatch();

    return (
        <div className="wrapper">
            <span className="main-title">MY PLANS FOR TODAY:</span>
            <CreateListItem/>
            <TodoItemsList tasks={tasks} switchTask={onSwitch} deleteTask={onDelete} />
        </div>
    );
}

export default App;
