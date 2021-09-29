import React from 'react'
import './Column.scss';
import Task from './../Task/Task';

function Column() {
    return (
        <div className="column">
        <header> brainstore</header>
        <ul className="task-list">
            <Task />
            <li className="task-item">
                Add what you'd like to work on bellow
            </li>
            <li className="task-item">
                Add what you'd like to work on bellow
            </li>
            <li className="task-item">
                Add what you'd like to work on bellow
            </li>
            <li className="task-item">
                Add what you'd like to work on bellow
            </li>
        </ul>
        <footer>Add another card</footer>
    </div>
    )
}

export default Column
