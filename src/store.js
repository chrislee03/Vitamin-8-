//create reducer function that updates state of the store
import {configureStore} from '@reduxjs/toolkit'

const initialState = { 
    todos: []
};

function todoReducer(state = initialState, action) { 
    switch (action.type) { 
        case "ADD_TODO":
            return {...state, todos: [...state.todos, action.payload]}
        case "DELETE_TODO":
            return {...state, todos: state.todos.filter(item => item !== action.payload)}
        default:
            return state
    }
}

//create store based on reducer function 
const store = configureStore({
    reducer: todoReducer
})

export default store;