import * as types from "./actiontypes"

const getTodoListsRequest = ()=>{
    return {type:types.GET_TODO_LISTS_REQUEST}
}

const getTodoListSuccess = (payload)=>{
    return {type:types.GET_TODO_LISTS_SUCCESS,payload}
}

const getTodoListFailure = ()=>{
    return {type:types.GET_TODO_LISTS_FAILURE}
}

const addTodoListsRequest = ()=>{
    return {type:types.ADD_TODO_LISTS_REQUEST}
}

const addTodoListSuccess = (payload)=>{
    return {type:types.ADD_TODO_LISTS_SUCCESS,payload}
}

const addTodoListFailure = ()=>{
    return {type:types.ADD_TODO_LISTS_FAILURE}
}

const toggleTodoRequest = ()=>{
    return {type:types.TOGGLE_TODO_REQUEST}
}

const toggleTodoSuccess = (payload)=>{
    return {type:types.TOGGLE_TODO_SUCCESS,payload}
}

const toggleTodoFailure = ()=>{
    return {type:types.TOGGLE_TODO_FAILURE}
}

const deleteTodoRequest = ()=>{
    return {type:types.DELETE_TODO_REQUEST}
}

const deleteTodoSuccess = (payload)=>{
    return {type:types.DELETE_TODO_SUCCESS,payload}
}

const deleteTodoFailure = ()=>{
    return {type:types.DELETE_TODO_FAILURE}
}

const editTodoRequest = ()=>{
    return {type:types.EDIT_TODO_REQUEST}
}

const editTodoSuccess = (payload)=>{
    return {type:types.EDIT_TODO_SUCCESS,payload}
}

const editTodoFailure = ()=>{
    return {type:types.EDIT_TODO_FAILURE}
}

const resetTodoRequest = ()=>{
    return {type:types.RESET_TODO_REQUEST}
}

const resetTodoSuccess = (payload)=>{
    return {type:types.RESET_TODO_SUCCESS,payload}
}

const resetTodoFailure = ()=>{
    return {type:types.RESET_TODO_FAILURE}
}

export {getTodoListsRequest, getTodoListSuccess,getTodoListFailure,addTodoListsRequest,addTodoListSuccess,addTodoListFailure,toggleTodoFailure,toggleTodoSuccess,toggleTodoRequest,deleteTodoRequest,deleteTodoSuccess,deleteTodoFailure,editTodoRequest,editTodoSuccess,editTodoFailure,resetTodoRequest,resetTodoSuccess,resetTodoFailure}
