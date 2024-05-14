"use client";
import DeleteBtn from "@/components/DeleteBtn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { HiPencilAlt } from "react-icons/hi";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [del, setDel] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const credential = localStorage.getItem("token");

    const getTasks = async () => {
      try {
        const res = await fetch("/api/topics", {
          headers: { Authorization: "Bearer " + credential },
        });

        if (!res.ok) {
          toast.error("Please Log in first");
          router.push("/");
        }
        const data = await res.json();
        return setTasks(data.tasks);
      } catch (error) {
        console.log("Error loading topics: ", error);
      }
    };

    getTasks();
  }, [del]);

  return (
    <>
      {tasks.length == 0 ? (
        <p className="text-center mt-10">Create a task to get started</p>
      ) : (
        tasks.map((t, i) => (
          <div
            key={i}
            className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
          >
            <div>
              <h2 className="font-bold text-2xl">{t.title}</h2>
            </div>

            <div className="flex gap-2">
              <DeleteBtn id={t._id} setDel={setDel} />
              <Link href={`/editTask/${t._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))
      )}
    </>
  );
}
