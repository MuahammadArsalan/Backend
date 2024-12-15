
import mongoose from 'mongoose';
import Course from '../models/course.model.js'
import Student from "../models/students.model.js";

const addStudent = async(req,res) => {

const {name , email , enrolledCourse } = req.body ;

if (!name) return res.json({message:"Name is required"})
if (!email) return res.json({message:"email is required"})

const student =await Student.create({
    name,
    email,
    enrolledCourse
})

const course = await Course.findByIdAndUpdate(enrolledCourse, {
    $push: { enrolledStudents: student._id },
  });

res.json({
  message:"Student enrolled successfully",
  data:student

}
  
)



}




// get student 


const getStudent = async (req,res) => {
const {id}  =  req.params;

if(!mongoose.Types.ObjectId.isValid(id)){
res.json({message:"Not a valid ID"})
return
}

const student = await Student.findById(id).populate("enrolledCourse")
// 

if (!student)return res.json({message:"No student found"})

  res.status(200).json({
    data:student
   })



}






export {addStudent , getStudent }


