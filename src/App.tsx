import React, {useState} from 'react';
import "./index.css"
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import {addTodo} from "./store/todoSlice";
import {useAppDispatch} from "./hooks/useAppDispatch";

const App = () => {
    const [text, setText] = useState('')

    const removeTodo = (todoId: number) => {
    }

    // const handleInput = () => {
    //     if (text.trim().length) {
    //
    //     }
    // }

    const dispatch = useAppDispatch()

    const addTask = () => {
        dispatch(addTodo(text))
        setText('')
    }

    return (
        <div>
            <InputField handleSubmit={addTask} text={text} handleInput={setText}/>
            <TodoList/>
        </div>
    );
};

export default App;