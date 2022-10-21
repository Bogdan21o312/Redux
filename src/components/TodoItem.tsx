import React, {FC} from 'react';
import "../index.css"
import {removeTodo, toggleTodoComplete} from "../store/todoSlice";
import {Todo} from "../models/ITodo";
import {useAppDispatch} from "../hooks/useAppDispatch";

const TodoItem: FC<Todo> = ({id, text, completed}) => {
    const dispatch = useAppDispatch()
    return (
        <div>
            <ul>
                <li key={id}>
                    <input
                        className="checkbox"
                        type="checkbox"
                        checked={completed}
                        onChange={() => dispatch(toggleTodoComplete(id))
                    }
                    />
                    <span>{text}</span>
                    <span
                        className="times"
                        onClick={() =>
                            dispatch(removeTodo(id))
                        }
                    >&times;</span>
                </li>
            </ul>
        </div>
    );
};

export default TodoItem;