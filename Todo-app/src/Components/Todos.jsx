
import axios from "axios";
import React, { useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoLists from "./Todolists";
import ResetTodo from "./Resettodo";
import { getTodoListFailure, getTodoListsRequest, getTodoListSuccess } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux/es/exports";

const Todos = ()=>{
    const dispatch = useDispatch()
    const todos= useSelector((state)=>state.todos)
    const getTodos = ()=>{
          dispatch(getTodoListsRequest())
          axios.get("/todos").then(r=>dispatch(getTodoListSuccess(r.data))).catch(e=>dispatch(getTodoListFailure))
    }

    useEffect(()=>{
        if(todos?.length === 0){
            getTodos()
        }
        
    },[])
    console.log(todos)

    return (
        <div>
            <h1>Tailnode-Todo's App</h1>
            <AddTodo/>
            <TodoLists todoLists={todos}/>
            <ResetTodo/>
            
        </div>
        
    )
}

export default Todos