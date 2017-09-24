/**
 * Created by Center on 9/23/2017.
 */
import {ADD_TODO, EDIT_TODO, DELETE_TODO, MARK_TODO, MARK_ALL, CLEAR_MARKED} from '../constants/ActionTypes';

const initalState = [{
    id: 0,
    text: 'Todo Redux',
    marked: false
}]

export default function TodoReducers(state = initalState, action){
    switch (action.type) {
        case ADD_TODO:
            return [{
                id: state.length === 0 ? 0 : state[0].id + 1,
                text: action.text,
                marked: false
            }, ...state];
        case EDIT_TODO:
            return state.map((todo) => todo.id === action.id ? {...todo, text: action.text} : todo);
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.id);
        case MARK_TODO:
            return state.map((todo) => todo.id === action.id ? {...todo, marked: action.marked} : todo);
        case MARK_ALL:
            var allMarked = state.every((todo) => todo.marked);
            return state.map((todo) => {return {...todo, marked: !allMarked};});
        case CLEAR_MARKED:
            return state.map((todo) => {return {...todo, marked: false};});
        default:
            return state;
    }
}