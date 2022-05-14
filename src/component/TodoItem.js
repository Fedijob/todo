import React from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import { doneTask, removeTask } from "../redux/todoslice/TodoSlice";
import EditTask from "./EditTask";
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  console.log({ todo });
  return (
    <div className={`todo-item ${todo.isDone ? "Done" : "notDone"}`}>
      <div className="text">
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
      </div>
      <span onClick={() =>dispatch(doneTask({id:todo.id}))}>{todo.isDone ? "Done" : "notDone"}</span>
      <EditTask id={todo.id}/>
      <button onClick={() =>dispatch(removeTask({id:todo.id}))}>remove</button>
      
    </div>
  );
};

export default TodoItem;
