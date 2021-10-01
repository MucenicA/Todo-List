import React from 'react';

 
const ToDoListItem = ({task, id}) => {
    return (
        <div className="todolist__item">
            <p className="todolist__text">{id+1}. {task}</p>
            <div className="todolist__actions">
                <button className="todolist__btn" type="button" ><img className="todolist__img" src={require('./clarity_edit-line.png').default}/> </button>
                <button className="todolist__btn" type="button" ><img className="todolist__img" src={require('./bi_trash.png').default}/> </button>
            </div>
        </div>
    )
};

export default ToDoListItem;