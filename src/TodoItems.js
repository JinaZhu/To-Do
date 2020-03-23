import React from "react";
import FlipMove from 'react-flip-move';

const TodoItems = ({ entries, remove }) => {

    const allTask = entries.map((task) => {
        return <li onClick={() => remove(task.key)} key={task.key}>{task.text}</li>
    })

    return (
        <ul className="theList">
            <FlipMove duration={150} easing="ease-out">
                {allTask}
            </FlipMove>
        </ul>
    )
}

export default TodoItems;

