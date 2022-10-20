import React, {FC} from 'react';
import "../index.css"

interface InputFieldProps {
    text: string,
    handleSubmit: (todoId: any) => void,
    handleInput: (todoId: string) => void
}

const InputField: FC<InputFieldProps> = ({text, handleSubmit, handleInput}) => {
    return (
        <label>
            <input value={text} onChange={(e) => handleInput(e.target.value)}/>
            <button onClick={handleSubmit}>Add Todo</button>
        </label>
    );
};

export default InputField;