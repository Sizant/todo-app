import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    await connectMongoDB();
    const user = await User.findOne({
      email: body.email,
      password: body.password,
    });
    if (user) {
      console.log("Logged IN");
    } else {
      throw Error("Please verify credentials");
    }
    return NextResponse.json({ message: "Logged in", success: true });
  } catch (error) {
    return NextResponse.json({ message: error.message, success: false });
  }
}
