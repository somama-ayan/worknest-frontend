/* =========================
   Tasks List VIEW
========================= */
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
    <div>
      {
        tasks.map((task) => {
          return(
            <div key={task._id}>
             
            <div className="shadow-sm bg-white border border-teal p-6">

              <h2>Title: {task.title}</h2>
              <h5>Project ID:{task.project}</h5>
              <h4>Status: {task.status}</h4>
              <p>Description: {task.description}</p>
            </div>
             
            </div>
          )
        })
      }
    </div>
  )
}