import React from 'react';
import TodoItem from "./TodoItem";
import "../index.css"
import {useSelector} from "react-redux";


const TodoList = () => {
    const todos = useSelector((state: any) => state.todos.todos)
    return (
        <ul>
            {
             todos.map((todo: any) => <TodoItem
                 key={todo.id}
                 {...todo}
             />)
            }
        </ul>
    );
};

export default TodoList;