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
      <Link className="text-white font-bold cursor-default" href={""}>
        {" "}
        Todo List
      </Link>
      <Link
        className=" rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        href={"/newTask"}
      >
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
