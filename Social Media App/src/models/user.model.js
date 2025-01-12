import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userName:{
            type:String , required:[true,'Name is required']
        },
        email:{
            type:String , required:[true,'Email is required']
        },
        password:{
            type:String , required:[true,'Password is reuired']
        }
    },{
        timestamps:true
    }
)

export default mongoose.model("Users",userSchema)