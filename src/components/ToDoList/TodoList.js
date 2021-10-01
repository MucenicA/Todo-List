import React, { useState, useContext } from "react";
import { Context } from "./Context";
import ToDoListItem from "./ToDoListItem";

const TodoList = () => {
  const [todoList, setTodoList] = useContext(Context);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
      e.preventDefault();
      setTodoList(prevState => [...prevState,input]);
  }

  return (
    <div className="todolist-wrapper">
        <p className="todolist-text">To do list:</p>

      {todoList.map((item, idx) => (
        <ToDoListItem task={item} key={idx} id={idx}/>
      ))}
     

      <form onSubmit={onSubmit} className="todolist-form">
        <textarea className="todolist-input" rows={8} value={input} onChange={handleInput}  />
        <button className="todolist-button" type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TodoList;
