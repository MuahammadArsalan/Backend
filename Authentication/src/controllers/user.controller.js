import Users from '../models/user.model.js'
import  jwt  from 'jsonwebtoken'
import User from '../models/user.model.js'
import bcrypt from 'bcrypt'

const generateAccessToken  = (user) =>{
return jwt.sign({email:user.email}, process.env.ACCESS_JWT_SECRET ,{expiresIn:'5h'}) 
}


const generateRefreshToken = (user)=>{
    return jwt.sign({email:user.email},process.env.REFRESH_JWT_SECRET ,{expiresIn:"6d"})
}





// register route 


 const registerUser = async(req,res) => {

const {email, password} = req.body
if(!email){return res.status(400).json({messaage:"email is required"})}
if(!password){return res.status(400).json({messaage:"password is required"})}

const user = await User.findOne({
    email:email
}) 
if(user) return res.status(401).json({
    messaage:"User already exist"
})
const createUser = await User.create({
    email,password
})
res.json({
    messaage:"User added Successfully",
    data: createUser
})

}



//login


const loginUser  = async(req,res)=>{


const {email,password} = req.body

if (!email) {
    return res.status(400).json({messaage:"Email is required"})
}
if (!password) {
    return res.status(400).json({messaage:"password is required"})
}

// user check kar k h ya nh

const user =await User.findOne({email})
// agar nh h to not found 

if (!user) {
    return res.status.json({
        messaage:"no user found"
    })
}

// agar h to password comapare

const confirmPassword = await bcrypt.compare(password,user.password);
if (!confirmPassword) {
    return res.status(400).json({
        messaage:"Incorrect password"
    })
}

// const accesstoken = generateAccessToken(user)
// const refershToken = generateRefreshToken(user)

// console.log(accesstoken);
// console.log(refershToken);


}



export  {registerUser, loginUser} 