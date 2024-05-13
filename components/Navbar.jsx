"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const router = useRouter();

  const signout = () => {
    localStorage.clear();
    router.push("/");
  };
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        {" "}
        Todo List
      </Link>
      <Link className="bg-white p-2" href={"/newTask"}>
        {" "}
        New Task
      </Link>
      <button
        onClick={() => signout()}
        className="bg-slate-800 text-white font-bold  p-2"
      >
        Sign Out
      </button>
    </nav>
  );
}
