import React,{useState,useEffect} from "react";
import axios from "axios";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import {useNavigate,useParams} from "react-router-dom"
import { editTodoFailure, editTodoRequest, editTodoSuccess } from "../Redux/action";

const EditTodo = () =>{
    const todos = useSelector(state=>state.todos);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    const [currentTodo,setCurrentTodo] = useState(
         {}
    )
      
    const editTodo = (payload)=>{
        dispatch(editTodoRequest());

    axios.patch(`/todos/${payload.id}`,{title:payload.title}).then(r=>{
        dispatch(editTodoSuccess(r.data))
        navigate('/')
        
    })
        .catch((e)=>dispatch(editTodoFailure(e)))
    }


    const handleedit = ()=>{
        if(currentTodo){
            const payload = {title:currentTodo,status:false,id:+(id)}
            console.log(payload)
            editTodo(payload)
            setCurrentTodo("")
        }
    }
    
    
    useEffect(()=>{
        let currentTodo = todos.find((item)=> item.id === Number(id));
        currentTodo && setCurrentTodo(currentTodo)
    },[id])

    console.log(currentTodo)
    return(
        <div>
            <h3>Edit Todo</h3>
            <input type="text" placeholder="Edit todo here..." onChange={(e)=>setCurrentTodo(e.target.value)} />
            <button onClick={()=>handleedit()}>Edit</button>
        </div>
    )
}

export default EditTodo