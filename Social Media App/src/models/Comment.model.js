import mongoose from "mongoose";

const commnetSchema = new mongoose.Schema(
    {
        text:{
            type:String , required:[true,'Text is required']
        },
postID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Post"
},
UserID:{
    type:mongoose.Schema.Types.ObjectId,
ref:"Users"
}

    },
    {
        timestamps:true
    }
)

export default mongoose.model("Comments",commnetSchema)