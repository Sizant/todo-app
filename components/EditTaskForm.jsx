"use client";

import { useRouter } from "next/navigation";

export default function EditTaskForm({ id }) {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTask: e.target.edit.value }),
      });

      if (!res.ok) {
        throw new Error("Failed to update");
      }

      router.push("/tasklist");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        name="edit"
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Edit title"
      />

      <button className=" rounded-md w-fit bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Update Task
      </button>
    </form>
  );
}
