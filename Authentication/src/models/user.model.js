import mongoose, { Schema, Types } from "mongoose";


const schema = mongoose.Schema

const userSchema = new schema(
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


userSchema.pre('save',async function(next){
if (!this.isModified('password') ) {
    return next(1)
}


})

export default mongoose.model('Users',userSchema)
