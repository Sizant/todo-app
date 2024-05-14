"use client";

import EditTaskForm from "@/components/EditTaskForm";

import { useParams } from "next/navigation";

export default function EditTask() {
  const params = useParams();
  const id = params.id;

  return <EditTaskForm id={id} />;
}
