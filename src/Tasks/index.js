import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`tasks__item ${hideDone && task.done ? "tasks__item--hidden" : ""}`}
            >
                <button
                    className="tasks__button tasks__button--done"
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </button>
                <span className={`tasks__span ${task.done ? "tasks__span--done" : ""}`}>
                    {task.id}. {task.content}
                </span>
                <button
                    className="tasks__button tasks__button--remove"
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;