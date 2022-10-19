import React, {FC} from 'react';
import "../index.css"

interface TodoItemProps {
    id:  any,
    text: string,
    completed: boolean,
    toggleTodoComplete: (todoId: number) => void,
    removeTodo: (todoId: number) => void
}

const TodoItem: FC<TodoItemProps> = ({id, text, completed, removeTodo, toggleTodoComplete}) => {
    return (
        <div>
            <ul>
                <li key={id}>
                    <input
                        className="checkbox"
                        type="checkbox"
                        checked={completed}
                        onChange={() => toggleTodoComplete(id)}
                    />
                    <span>{text}</span>
                    <span
                        className="times"
                        onClick={() => removeTodo(id)}
                    >&times;</span>
                </li>
            </ul>
        </div>
    );
};

export default TodoItem;