import { connectDb } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/utils/getDatafromToken";

connectDb();

export async function POST(request: NextRequest) {
  //extract data from token
  const userid = await getDataFromToken(request);
  const user=await User.findOne({_id:userid}).select("-password");
  return NextResponse.json({message:"user found",
    data:user
  })
}
