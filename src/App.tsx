import React, {useState} from 'react';
import "./index.css"
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import {useDispatch} from "react-redux";
import {addTodo} from "./store/todoSlice";

const App = () => {
    // const [todos, setTodos] = useState<Todo[]>([])
    const [text, setText] = useState('')
    //
    // const addTodo = () => {
    //     if (text.trim().length) {
    //         setTodos([
    //             ...todos, {
    //                 id: new Date().toISOString(),
    //                 text,
    //                 completed: false
    //             }
    //         ])
    //         setText('')
    //     }
    // }

    const removeTodo = (todoId: number) => {
    }

    const dispatch = useDispatch()

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