import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./todoList";

var destination = document.querySelector("#container")

ReactDOM.render(
    <div>
        <h1 align="center">To Do</h1>
        <TodoList />
    </div>,
    destination
);