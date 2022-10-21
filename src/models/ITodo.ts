export interface Todo {
    id: string,
    text: string,
    completed: boolean
}

interface TodoState {
    list: Todo[]
}

export const initialState: TodoState = {
    list: []
}