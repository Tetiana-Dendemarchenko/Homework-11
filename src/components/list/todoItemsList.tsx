import React, {useMemo} from 'react';
import ListItem from '../listItem/listItem';
import './todoItemList.css';

function TodoItemsList({tasks, switchTask, deleteTask}: any) {
    const {needToDo, completedTasks}: any = useMemo(() => {
        const needToDo: Array<any> = [];
        const completedTasks: Array<any> = [];

        tasks.forEach((task: any) => {
            const listItem = (
                <ListItem key={task.id} task={task} onClick={() => switchTask(task.id)} deleteTodo={deleteTask}/>
            );

            (task.isCompleted ? completedTasks : needToDo).push(listItem)
        });

        return {needToDo, completedTasks};
    }, [tasks]);

    return (<>
            <span className="taskList">What I need to do</span>
            <ul className="needToDo">{needToDo}</ul>
            <hr/>
            <span className="taskList">Completed tasks</span>
            <ul className="completedTasks">{completedTasks}</ul>
        </>
    )
}

export default TodoItemsList;
