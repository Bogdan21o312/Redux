import React, {useState} from 'react';
import "./index.css"

// interface Todo {
//     id:  any,
//     text: string,
//     completed: boolean
// }

// const data = {
//     id: new Date().toISOString(),
//     text: "Todo",
//     completed: false
// }

const App = () => {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')

    const addTodo = () => {
        if (text.trim().length) {
            setTodos([
                ...todos, {
                    id: new Date().toISOString(),
                    text,
                    completed: false
                }
            ])
            setText('')
        }
    }

    const removeTodo = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId))
    }

    const toggleTodoComplete = (todoId) => {
        setTodos(
            todos.map(
                todo => {
                    if (todo.id !== todoId) return todo
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
            )
        )
    }

    return (
        <div>
            <label>
                <input value={text} onChange={(e) => setText(e.target.value)}/>
                <button onClick={addTodo}>Add Todo</button>
                <ul>
                    {todos.map(todo => <li key={todo.id}>
                        <input
                            className="checkbox"
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodoComplete(todo.id)}
                        />
                        <span>{todo.text}</span>
                        <span
                            className="times"
                            onClick={() => removeTodo(todo.id)}
                        >&times;</span>
                    </li>)}
                </ul>
            </label>
        </div>
    );
};

export default App;