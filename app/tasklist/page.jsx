import DeleteBtn from "@/components/DeleteBtn"
import Navbar from "@/components/Navbar"
import Link from "next/link"

import{HiPencilAlt} from "react-icons/hi"


const getTasks = async() =>{
  try {
    const res = await fetch('http://localhost:3000/api/topics',{
      cache:'no-store',
    })

    if(!res.ok){
      throw new Error("failed to fetch tasks")
    } 
    return res.json();
  } catch (error) {
    console.log('Error loading topics: ',error)
  }
}

export default async function TaskList() {
  
  const {tasks} = await getTasks();
  return( 
  <>
 
  {tasks.map((t)=>(
  <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
    <div>
        <h2 className="font-bold text-2xl">{t.title}</h2>
        
    </div>

    <div className="flex gap-2">
        <DeleteBtn id={t._id} />
        <Link href={`/editTask/${t._id}`}>
            <HiPencilAlt size={24} />
        </Link>
    </div>
  </div>
))}
  </>
  );
}
