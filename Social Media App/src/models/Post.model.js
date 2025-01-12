import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        title:{
            type:String , required:[true,'Title is required']
        },
        image:{
            type:String , 
        },
        like:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    }],
    comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comments"
    }],
    UserID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
        }
    },
    {
        timestamps:true
    }
)

export default mongoose.model("Post",PostSchema)