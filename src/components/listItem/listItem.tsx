import React from 'react';
import './listItem.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

function ListItem({onClick, deleteTodo, task}: any) {
    const onDelete = (event: any) => {
        event.stopPropagation();
        deleteTodo(task.id);
    }

    return (
        <li onClick={onClick}>
            <div className={task.isCompleted ? "completed" : "new"}>
                {task.isCompleted}
                <span>{task.text}</span>
                <FontAwesomeIcon onClick={onDelete} className="faicons trash-can" icon="trash"/>
            </div>
        </li>
    )
}

export default ListItem;
