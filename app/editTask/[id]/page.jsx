import EditTaskForm from "@/components/EditTaskForm";

const getTitleById = async (id)=>{
  try {
    const res = await fetch(`http:localhost:3000/api/topics/${id}`,{
      cache:"no-store",
    })

    if(!res.ok){
      throw new Error("failed to fetch task")
    }

    return res.json();
  } catch (error) {
    console.log(error)
  }
}

export default async function EditTask({params}) {
  const {id}= params;
  const {task} = await getTitleById(id)
  const {title} = task;
  return <EditTaskForm id={id} title={title} />
}
