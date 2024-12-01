import mongoose, { Schema, Types } from "mongoose";


const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        email:{
            type:String,
            required:[true,'Email is required'],
            unique:true
        
        },
        password:{
            type:String,
            required:[true,'Password is required']
        }
    }
)

export default mongoose.model('Users',userSchema)
