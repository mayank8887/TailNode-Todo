import axios from "axios";
import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {useParams,useNavigate,Link} from "react-router-dom"
import { deleteTodoFailure, deleteTodoRequest, deleteTodoSuccess, toggleTodoFailure, toggleTodoRequest, toggleTodoSuccess } from "../Redux/action";

const SingleTodo = ()=>{
    const todos = useSelector(state=>state.todos);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    const [currentTodo,setCurrentTodo] = useState(
         {}
    )

    const toggleStatus = (id,newStatus)=>{
          dispatch(toggleTodoRequest())
          axios.patch(`/todos/${id}`,{status:newStatus}).then(r=>dispatch(toggleTodoSuccess(r.data))).catch(e=>dispatch(toggleTodoFailure(e)));
          navigate("/");
    }

    const removeTodo= (id)=>{
           dispatch(deleteTodoRequest())
           axios.delete(`/todos/${id}`).then(r=>{
            dispatch(deleteTodoSuccess(id))
            navigate('/')
        })
        .catch(e=>dispatch(deleteTodoFailure(e)))
    }

    useEffect(()=>{
        let currentTodo = todos.find((item)=> item.id === Number(id));
        currentTodo && setCurrentTodo(currentTodo)
    },[todos,id])
    return(
        <div> 
            <h2>Edit Todo</h2>
            <h3>{currentTodo?.title} - {currentTodo?.status ? "Done": "not done"}</h3>
            <button onClick={()=>toggleStatus(currentTodo.id, !currentTodo.status)}>Toggle</button>
            <button onClick={()=>removeTodo(currentTodo.id)}>Remove</button>
            <Link to={`/todo/${currentTodo.id}/edit`}>
            <button>Edit</button>
            </Link>
        </div>
    )
}

export default SingleTodo