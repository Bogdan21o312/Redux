import React, {useState} from 'react';
import "./index.css"
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

export interface Todo {
    id: number | any,
    text: string | '',
    completed: boolean
}

const App = () => {
    const [todos, setTodos] = useState<Todo[]>([])
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

    const removeTodo = (todoId: number) => {
        setTodos(todos.filter((todo: Todo) => todo.id !== todoId))
    }

    const toggleTodoComplete = (todoId: number) => {
        setTodos(
            todos.map(
                (todo: Todo) => {
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
            <InputField handleSubmit={addTodo} text={text} handleInput={setText}/>
            <TodoList
                todos={todos}
                removeTodo={removeTodo}
                toggleTodoComplete={toggleTodoComplete}
            />
        </div>
    );
};

export default App;