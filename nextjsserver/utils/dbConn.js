
import mongoose from "mongoose";


let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = {conn:null , promise :null}
}




export async function ConnectToDatabase(){


if (cached.conn) {
    console.log("Using Cached connection");
    return cached.conn
}


if (!cached.promise) {
    

cached.promise = mongoose.connect(`${process.env.MONGO_URI}nextjs`)

}



}
