"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function DeleteBtn({ id, setDel }) {
  const router = useRouter();
  const removeTitle = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setDel((prev) => !prev);
        router.refresh();
      }
    }
  };
  return (
    <button onClick={removeTitle} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
