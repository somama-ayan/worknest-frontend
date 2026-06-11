/* =========================
   Tasks List VIEW
========================= */

import { MdEdit, MdDelete } from "react-icons/md";
type TaskList = {
  _id: string
  title: string,
  project: string,
  description: string,
  status: string,
  priority: string
}


import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TasksListView() {
  const [tasks, setTasks] = useState<TaskList[]>([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/v1/tasks/getAllTasks",
          {
            credentials: "include"
          }
        )
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Failed to fetch Tasks")
        setTasks(data.data);
      } catch (err) {
        if (err instanceof Error)
          setError(err.message)
        else
          setError("Something Went Wrong")
        console.log(error)
      } finally {
        setLoading(false)
      }

    }
    fetchTasks();
  }, [])

  if (loading) {
    return (
      <div className="mt-8">
        Loading Tasks ...
      </div>
    )
  }

  if (error) {
    return (
      <div className="mt-8 text-red-500">
        Error: {error}
      </div>
    )
  }

  return (
    <div className="mt-8 space-y-4">
      {
        tasks.map((task) => {
          return(
            <div className="" key={task._id}>
             
            <div  onClick={() => router.push(`/tasks/${task._id}`)}
            className="shadow-sm bg-white border border-teal p-6">

              <h2>Title: {task.title}</h2>
              <p className="text-sm text-gray-500">Project ID:{task.project}</p>
              <p className="text-sm text-gray-500">Status: {task.status}</p>
              <p>Description: {task.description}</p>
            </div>
             <div className="flex gap-2">
                           <button
                             onClick={() => router.push(`/tasks/${task._id}`)}
                             className="rounded-lg p-2 text-blue-600 hover:bg-blue-50"
                           >
                             <MdEdit size={18} />
                           </button>
             
                           <button
                            onClick={() => router.push(`/tasks/${task._id}`)}
                             className="rounded-lg p-2 text-red-600 hover:bg-red-50"
                           >
                             <MdDelete size={18} />
                           </button>
                         </div>
            </div>
          )
        })
      }
    </div>
  )
}