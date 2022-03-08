import { ADD_TODO, CHANGE_STATUS, DELETE_TODO } from "./actionTypes"

export const addTodo = (item) => {
    return {
        type: ADD_TODO,
        payload: item
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const toggleStatus = (id) => {
    return {
        type: CHANGE_STATUS,
        payload: id
    }
}