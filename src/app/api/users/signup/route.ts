 import { connectDb } from "@/dbConfig/dbConfig";
 import User from "@/models/userModel";
 import { NextRequest,NextResponse} from 'next/server';
 import bcryptjs from "bcryptjs";
import { sendEmail } from "@/utils/mailer";

 connectDb();
 export async function POST(req:NextRequest){
    try {
    const reqBody= req.json()
    const {username,email,password}=reqBody
    //validation
    console.log(reqBody);
  
     const user =await User.findOne({email})
     if(user){
        return NextResponse.json({error:"User Already exists"},{status:400})
     }
    
     const salt= await bcryptjs.genSalt(10);
     const hashpassword=await bcryptjs.hash(password,salt);

     const regUser=new User({
        username,
        password:hashpassword,
        email
     })


     const savedUser=await regUser.save();
     console.log(savedUser);

     //Sending verify email
     await sendEmail({email,emailtype:"VERIFY",userId:savedUser._id})

     return NextResponse.json({
        message:"User registered successfully",
        success:true,
        savedUser
     })

    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
        
    }
 }