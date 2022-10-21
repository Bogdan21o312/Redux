import React from 'react';
import TodoItem from "./TodoItem";
import "../index.css"
import {useAppSelector} from "../hooks/useAppSelector";


const TodoList = () => {
    const todos = useAppSelector(state => state.todos.list)
    return (
        <ul>
            {
             todos.map(todo => <TodoItem
                 key={todo.id}
                 {...todo}
             />)
            }
        </ul>
    );
};

export default TodoList;