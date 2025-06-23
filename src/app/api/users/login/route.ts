import { connectDb } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";

import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connectDb();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    console.log("User exist", user);

    const validPass = await bcrypt.compare(password, user.password);

    if (!validPass) {
      return NextResponse.json({ error: "Wrong credentials" }, { status: 400 });
    }
    const tokenPayload = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = await jwt.sign(tokenPayload, process.env.token_secret!, {
      expiresIn: "1h",
    });

    const response = NextResponse.json({
      message: "Logged in Success",
      success: true,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
    //validation
    console.log(reqBody);
  } catch {
    return NextResponse.json({ error: "User not found" }, { status: 400 });
  }
}
