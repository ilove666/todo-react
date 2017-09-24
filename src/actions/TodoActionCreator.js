/**
 * Created by Center on 9/23/2017.
 */
import * as types from '../constants/ActionTypes';

export function addTodo(id, text) {
    return {
        type: types.ADD_TODO,
        id,
        text
    }
}

export function editTodo(id, text) {
    return {
        type: types.EDIT_TODO,
        id,
        text
    }
}

export function deleteTodo(id) {
    return {
        type: types.DELETE_TODO,
        id
    }
}

export function markTodo(id, marked) {
    return {
        type: types.MARK_TODO,
        id,
        marked
    }
}

export function markAll() {
    return {
        type: types.MARK_ALL
    }
}

export function clearMarked() {
    return {
        type: types.CLEAR_MARKED
    }
}