import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button className="button">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button className="button"
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;