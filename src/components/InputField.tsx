import React, {FC} from 'react';

interface InputFieldProps {
    text: any,
    handleSubmit: any,
    handleInput: any
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