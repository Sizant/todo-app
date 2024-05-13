import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
  title: String,
  email: String,
});

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default Task;
