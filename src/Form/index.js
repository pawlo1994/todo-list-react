import { useState } from "react";
import { StyledForm, StyledInput, StyledButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!newTaskContent.trim()) {
            setNewTaskContent("");
            return;
        }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    }

    return (
        <StyledForm
            onSubmit={onFormSubmit}
        >
            <StyledInput
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                required
            />
            <StyledButton>Dodaj zadanie</StyledButton>
        </StyledForm>
    )
};

export default Form;