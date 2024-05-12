'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

  export default function newTask() {

  const [title, setTitle] = useState("")

  const router = useRouter();


  const handleSubmit =async (e) =>{
    e.preventDefault();
    
    if(!title){
      alert('Title cannot be empty')
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/topics',{
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({title})
      });

      if(res.ok){
        router.push('/tasklist')
        router.refresh();
      }else{
        throw Error("failed to create a task")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return <form onSubmit={handleSubmit} className="flex flex-col gap-3">

    <input
    onChange={(e)=> setTitle(e.target.value)}
    value={title}
    className="border border-slate-500 px-8 py-2" 
    type="text" 
    placeholder="Task title" />

    <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
      Add Task
    </button>

  </form>
}
