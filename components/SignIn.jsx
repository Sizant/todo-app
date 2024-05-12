"use client"
import { useRouter } from "next/navigation";


export default function Signin() {
    const router = useRouter()
  return ( <>
    <div>Signin</div>
    <button onClick={()=>router.push("tasklist")}> click here</button>
  </>)
}
