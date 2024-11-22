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


const getAllTodo = async(req,res)=>{

    const todos = await Todos.find({})
res.status(200).json(todos)
}

const singleTodoWithId = async(req,res) =>{
const {id} = req.params


if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
        message:"Invalid Id"
    })
}
const todo = await Todos.findById(id)
if (!todo) {
    res.status(404).json({
        message:"Todo not found !"
    })
    return
 }

res.status(200).json(todo)



}



export { addTodo , getAllTodo ,singleTodoWithId};