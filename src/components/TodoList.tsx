import React, {FC} from 'react';
import TodoItem from "./TodoItem";
import {Todo} from "../App";
import "../index.css"

interface TodoListProps {
    todos: Todo[],
    removeTodo: (todoId: number) => void,
    toggleTodoComplete: (todoId: number) => void
}

const TodoList: FC<TodoListProps> = ({todos, removeTodo, toggleTodoComplete}) => {
    return (
        <ul>
            {
             todos.map((todo: any) => <TodoItem
                 key={todo.id}
                 id={todo.id}
                 text={todo.text}
                 completed={todo.completed}
                 removeTodo={removeTodo}
                 toggleTodoComplete={toggleTodoComplete}
                 {...todo}
             />)
            }
        </ul>
    );
};

export default TodoList;