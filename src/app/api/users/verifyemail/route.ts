import { connectDb } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connectDb();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;
    console.log(token);

const user=    await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if(!user){
         return NextResponse.json({ error:"Invalid token details" }, { status: 500 });
    }

    console.log(user)
    user.isVerified=true
    user.verifyToken=undefined
    user.verifyTokenExpiry=undefined

    await user.save();
     return NextResponse.json({ message:"E-mail verified successfully",success:true}, { status: 200 });

  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
  }
}
