import React, { useState } from "react";
import axios from "axios";
import "./Addtodo.css"
import { useDispatch,useSelector } from "react-redux/es/exports";
import { resetTodoFailure, resetTodoRequest, resetTodoSuccess } from "../Redux/action";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCapsules} from "@fortawesome/free-solid-svg-icons"

const ResetTodo = () =>{
    const dispatch = useDispatch()
    const todos= useSelector((state)=>state.todos);

    const Resettodo = (payload)=>{

        dispatch(resetTodoRequest());

        axios.post("/todos").then(()=>dispatch(resetTodoSuccess(payload))).catch((e)=>dispatch(resetTodoFailure(e)))
    }


    const handleReset = (event)=>{
        if(todos){
            const payload = [];
            Resettodo(payload)
        }
    }

    return (

        <div>
            <button className="button" onClick={handleReset}>Reset</button>
        </div>
    )
}

export default ResetTodo;