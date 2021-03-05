import React from 'react';
import {connect} from 'react-redux';
import {addItems, deleteItem } from '../actions';

const App = ({qty, dispatch}) => {
    let input, item;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.value.trim()) {
            return
        }
        item = {
            text: input.value
        }
        dispatch(addItems(item));
        input.value = '';
    };

    return (
        <div className={'wrapper'}>
            <h1>TODO LIST WITH REDUX</h1>
            <form onSubmit={handleSubmit}>
                <div className={'div-wrapper'}>
                    <label>Plans for today: </label>
                    <input type="text" placeholder="Enter your task" name="name" ref={node => (input = node)}/>
                </div>
                <div className={'div-wrapper'}>
                    <label>&nbsp;</label>
                    <input type="submit" value="Add Task"/>
                </div>
            </form>
        </div>
    )
}

export default connect()(App)