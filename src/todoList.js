import React, { useState, useRef } from "react";

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
        console.log(items)

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
        </div>
    )

}

export default TodoList; 