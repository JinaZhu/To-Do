import React, { useState, useRef } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

const TodoList = () => {
    const [items, setItems] = useState([])
    let inputElement = useRef()

    function addItem(e) {
        e.preventDefault();
        if (inputElement.value !== "") {
            var newItem = {
                text: inputElement.value,
                key: Date.now()
            };
            setItems(items.concat(newItem))
        }
        inputElement = "";
    }

    const deleteItem = (key) => {
        var filteredItems = items.filter(item => item.key !== key)
        setItems(filteredItems)
    }
    return (
        <div className="todoListMain">
            <div className="header">
                <form onSubmit={addItem}>
                    <input ref={(el) => inputElement = el} placeholder="enter task">
                    </input>
                    <button type="submit">add</button>
                </form>
            </div>
            <TodoItems entries={items} remove={deleteItem} />
        </div>
    )

}

export default TodoList; 