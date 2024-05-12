import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    await connectMongoDB();

    const user = await User.findOne({
      email: body.email,
    });

    if (user) {
      throw Error("User already exists!");
    }

    await User.create({
      username: body.username,
      email: body.email,
      password: body.password,
    });
    return NextResponse.json({ message: "User Created", success: true });
  } catch (error) {
    return NextResponse.json({ message: error.message, success: false });
  }
}
