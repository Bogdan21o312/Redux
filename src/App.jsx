import React, {useState} from 'react';

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

    return (
        <div>
            <label>
                <input value={text} onChange={(e) => setText(e.target.value)}/>
                <button onClick={addTodo}>Add Todo</button>
                <ul>
                    {todos.map(todo => <li key={todo.id}>
                        <input type="checkbox"/>
                        <span>{todo.text}</span>
                        <span>&times;</span>
                    </li>)}
                </ul>
            </label>
        </div>
    );
};

export default App;