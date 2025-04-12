import Users from "@/src/models/UserSchema";
import { connectToDatabase } from "@/src/utils/dbConnection";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req) => {
  try {
    await connectToDatabase();

    let { email, password } = await req.json();

    // Check if user already exists
    const existingUser = await Users.findOne({ email });

    if (!existingUser) {
      return NextResponse.json(
        { message: "Invalid Credentials" },
        { status: 400 }
      );
    }

    let checkPass = await bcrypt.compare(password, existingUser.password);

    if (!checkPass) {
      return NextResponse.json(
        { message: "Invalid Credentials" },
        { status: 400 }
      );
    }

    let token = jwt.sign(
      { id: existingUser._id, isAdmin: existingUser.isAdmin },
      process.env.secret,
      {
        expiresIn: "7d",
      }
    );

    const response = NextResponse.json(
      { success: true, authToken: token, isAdmin: existingUser.isAdmin },
      { status: 200 }
    );

    // Set JWT token in HTTP-only cookie
    response.cookies.set("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: "/",
    });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "There is something wrong. Please try again" },
      { status: 500 }
    );
  }
};
