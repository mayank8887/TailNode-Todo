
import React from "react";
import {Route,Routes} from "react-router-dom"
import Homepage from "./Homepage"
import SingleTodo from "./Singletodo";
import EditTodo from "./Edittodo";

const AllRoutes = ()=>{
    return (
        <div>
            <Routes>
             <Route path="/" element={<Homepage/>}/>
             <Route path="/todo/:id" element={<SingleTodo/>}/>
             <Route path="/todo/:id/edit" element={<EditTodo/>}/>
            </Routes>
        </div>

    )
}

export default AllRoutes