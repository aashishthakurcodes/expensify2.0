import mongoose from "mongoose"


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please provide usernamme"],
        unique:[true,"Id Should be unique"]
    },
     email:{
        type:String,
        required:[true,"Please provide E-mail"],
        unique:[true,"Email Should be unique"]
    },
     password:{
        type:String,
        required:[true,"Please provide password"],
        
    },
     isVerified:{
        type:Boolean,
        default:false
        
    },
     isAdmin:{
        type:Boolean,
        default:false
        
    },
     forgetPasswordToken:String,
     forgetPasswordTokenExpiry:Date,
     verifyToken:String,
    verifyTokenExpiry:Date,

})

const User=mongoose.models.users || mongoose.model("users",userSchema)

export default User