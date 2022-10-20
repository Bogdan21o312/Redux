import React, {FC} from 'react';
import "../index.css"
import {useDispatch} from "react-redux";
import {removeTodo, toggleTodoComplete} from "../store/todoSlice";

interface TodoItemProps {
    id:  any,
    text: string,
    completed: boolean,
}

const TodoItem: FC<TodoItemProps> = ({id, text, completed}) => {
    const dispatch = useDispatch()
    return (
        <div>
            <ul>
                <li key={id}>
                    <input
                        className="checkbox"
                        type="checkbox"
                        checked={completed}
                        onChange={() => dispatch(toggleTodoComplete({id}))
                    }
                    />
                    <span>{text}</span>
                    <span
                        className="times"
                        onClick={() =>
                            dispatch(removeTodo({id}))
                        }
                    >&times;</span>
                </li>
            </ul>
        </div>
    );
};

export default TodoItem;