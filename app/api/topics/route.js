import connectMongoDB from "@/libs/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const body = await request.json();
  await connectMongoDB();
  await Task.create({ title: body.title, email: body.email });
  return NextResponse.json({ message: "Task Created" }, { status: 201 });
}

export async function GET(request) {
  const val = request.headers.get("authorization").split(" ")[1];

  // var decoded = jwt.verify(val, "secret");
  // console.log(decoded.email);

  await connectMongoDB();
  const tasks = await Task.find({ email: jwt.verify(val, "secret").email });
  return NextResponse.json({ tasks });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Task.findByIdAndDelete(id);
  return NextResponse.json({ message: "Task Deleted" }, { status: 200 });
}
