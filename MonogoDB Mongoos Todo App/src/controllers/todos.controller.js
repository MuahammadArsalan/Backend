import mongoose from "mongoose";
import Todos from "../models/todos.models.js"

const addTodo =  (req,res) =>{
    
    const {title , description} = req.body;

    if(!title || !description){
        res.status(400).json({
            message:"Enter title & description"
        })
        return
    }

const todo = Todos.create({
    title,
    description,
});
res.status(201).json({
    message:"User added to database suceessfully"
})


}


