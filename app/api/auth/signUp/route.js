import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

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

    const saltRound = 10;

    bcrypt.hash(body.password, saltRound, async function (err, hash) {
      await User.create({
        username: body.username,
        email: body.email,
        password: hash,
      });
    });

    return NextResponse.json({ message: "User Created", success: true });
  } catch (error) {
    return NextResponse.json({ message: error.message, success: false });
  }
}
