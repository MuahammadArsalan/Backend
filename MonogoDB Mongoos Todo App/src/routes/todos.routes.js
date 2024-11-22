import express from "express"

import { addTodo, getAllTodo, singleTodoWithId } from "../controllers/todos.controller.js"
const router = express.Router()
router.post("/todo", addTodo)
router.get("/todos", getAllTodo)
router.get("/todo/:id", singleTodoWithId)

export default router
