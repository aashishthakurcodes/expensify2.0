import { connectDb } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";


connectDb();

export async function GET(request: NextResponse) {
  try {
    const response = NextResponse.json({
      message: "Logout Successfully",
    });
    response.cookies.set("token",  "",{
        httpOnly:true,
        expires:new Date(0)
    })
    return response
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
