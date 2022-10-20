import {createSlice} from "@reduxjs/toolkit";
import {Todo} from "../models/ITdo";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo<Todo>(state: any, action: any) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload,
                completed: false,
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter((todo: Todo) => todo.id !== action.payload.id)
        },
        toggleTodoComplete(state, action) {
            const toggleTodo: any = state.todos.find((todo: Todo) => todo.id === action.payload.id)
            toggleTodo.completed = !toggleTodo.completed
        }
    }
})

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions

export default todoSlice.reducer