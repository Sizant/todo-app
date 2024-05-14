"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

export default function newTask() {
  const [title, setTitle] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      alert("Title cannot be empty");
      return;
    }

    try {
      const info = localStorage.getItem("token");
      const userEmail = jwtDecode(info).email;

      const res = await fetch("/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, email: userEmail }),
      });
      const json = await res.json();

      if (res.ok) {
        toast.success(json.message);
        router.push("/tasklist");
        router.refresh();
      } else {
        throw Error("failed to create a task");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      toast.error("Please Log in first");
      router.push("/");
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Task title"
      />

      <button
        type="submit"
        className=" rounded-md w-fit bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add Task
      </button>
    </form>
  );
}
