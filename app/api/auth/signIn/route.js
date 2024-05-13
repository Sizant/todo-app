import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    const body = await request.json();
    await connectMongoDB();

    const user = await User.findOne({
      email: body.email,
    });

    if (user) {
      const test = bcrypt.compareSync(body.password, user.password);
      console.log(test, "test");
      if (test) {
        const token = jwt.sign(
          { email: user.email, username: user.username },
          "secret"
        );

        return NextResponse.json({
          message: "Logged in",
          token,
          success: true,
        });
      } else {
        throw Error("Inavlid Credentials");
      }
    } else {
      throw Error("Inavlid Credentials");
    }
  } catch (error) {
    return NextResponse.json({ message: error.message, success: false });
  }
}
