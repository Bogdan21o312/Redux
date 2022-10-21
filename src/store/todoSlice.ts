import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Todo, initialState} from "../models/ITodo";

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.list.push({
                id: new Date().toISOString(),
                text: action.payload,
                completed: false,
            })
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.list = state.list.filter((todo: Todo) => todo.id !== action.payload)
        },
        toggleTodoComplete(state, action: PayloadAction<string>) {
            const toggleTodo: any = state.list.find((todo: Todo) => todo.id === action.payload)
            if (toggleTodo) {
                toggleTodo.completed = !toggleTodo.completed
            }
        }
    }
})

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions

export default todoSlice.reducer