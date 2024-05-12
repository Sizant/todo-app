"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function EditTaskForm({id,title}) {

  const [newTask, setNewTask] = useState(title);
  const router = useRouter();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
        method:"PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({newTask}),
      });

      if(!res.ok){
        throw new Error("Failed to update");
      }
      
      router.push('/tasklist')
      router.refresh();
      
    } catch (error) {
      console.log(error)
    }
  }
  return (

    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
    <input
    onChange={(e)=> setNewTask(e.target.value)}
    value={newTask}
     className="border border-slate-500 px-8 py-2" 
    type="text" 
    placeholder="Task title" />

    <button  className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
      Update Task
    </button>

  </form>
  )
}
