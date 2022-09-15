import React from "react";
import {Link} from "react-router-dom"

const TodoLists = ({todoLists})=>{
    return(
        <>
        <div>
            <h2>Task's Pending</h2>
            {todoLists?.slice(0).reverse().map((item)=>{
                return (
                <div key={item.id}>
                    <Link to={`/todo/${item.id}`}><div>{item.status? "":item.title} </div></Link>
            
                </div>
                )
            })}
        </div>
        <div>
            <h2>Completed Todo's</h2>
           {todoLists?.slice(0).reverse().map((item)=>{
            return (
               <div key={item.id} style={{"textDecorationLine": "line-through"}}>
                <Link to={`/todo/${item.id}`}><div>{item.status? item.title:""}</div></Link>

                </div>
            )
           })}
        </div>
        </>
    )
}

export default TodoLists;