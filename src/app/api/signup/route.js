import Users from "@/src/models/UserSchema";
import { connectToDatabase } from "@/src/utils/dbConnection";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req) => {
  try {
    await connectToDatabase();

    let { name, email, password, location } = await req.json();

    // Check if user already exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    let hashPassword = await bcrypt.hash(password, 10);

    await Users.create({
      name,
      email,
      password: hashPassword,
      location,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Invalid Credentials" },
      { status: 500 }
    );
  }
};
