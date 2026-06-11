"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"


type Props = {
    params: {
        taskId: string
    }
}

type TaskData = {
    _id: string
    title: string,
    project: string,
    status: string,
    priority: string,
    description: string
}


export default function ViewSingleTask({ params }: Props) {
    const [task, setTask] = useState<TaskData | null>(null)
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true)

    const router = useRouter()
    //  edit 
    const [isEditing, setIsEditing] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        project: "",
        status: "",
        priority: "",
        description: ""
    })
    useEffect(() => {
        const fetchTask = async () => {
            try {

                const response = await fetch(
                    `http://localhost:5000/api/v1/tasks/${params.taskId}`,
                    {
                        credentials: "include"
                    }
                )
                const data = await response.json();
                if (!response.ok) throw new Error(data.message || "Failed to fetch Task.")

                setTask(data.data);
                setFormData({
                    title: data.data.title,
                    project: data.data.project,
                    status: data.data.status,
                    priority: data.data.priority,
                    description: data.data.description,
                })
                console.log(data)
            } catch (err) {
                if (err instanceof Error) {
                    console.log(err)
                    setError(err.message);
                }
                else {
                    setError("Something went wrong");
                }
            } finally {
                setLoading(false)
            }
        }
        fetchTask();
    }, [params.taskId])
    //  for handling input feilds value 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    //  to update task
    const handleUpdate = async () => {
        try {
            const response = await fetch(
                `http://localhost:5000/api/v1/tasks/${params.taskId}/updateTask`,
                {
                    method: "PATCH",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData)
                }
            )
            const data = await response.json();
            if (!response.ok)
                throw new Error(data.message)
            setTask(data.data);
            console.log(data)
            setIsEditing(false);
        } catch (err) {
            if (err instanceof Error) {
                console.log(err)
                alert(err.message)
            }
            else {
                alert("Something went wrong while updating.")
            }
        }
    }

    //  to delete task
    const handleDelete = async () => {
        try {

            const response = await fetch(
                `http://localhost:5000/api/v1/tasks/${params.taskId}/deleteTask`,
                {
                    method: "DELETE",
                    credentials: "include"
                }
            )

            const data = await response.json()
            if (!response.ok) throw new Error(data.message || "Failed to Delete Project.")
            setTask(null)
            alert("Task Deleted Successfully.")

        } catch (err) {
            if (err instanceof Error) {
                setError(err.message)
            }
            else {
                setError("Something went wrong while Deletion.")
            }
        }
    }

    if (error) {
        return <p className="p-6 text-red-600">{error}</p>
    }

    if (loading) {
        return <p className="p-6">Loading Task ...</p>
    }
//     if (!loading && !task) {
//   router.push("/projects");
//   return null;
// }
    if (!task) {
        router.push("/tasks")
        return null
    //     return <p className="p-6">No task found</p>;
    }
    return (
        <main className="min-h-screen bg-[#f5f7fc] p-6">
            <div className="my-4">
                <button
                    className="mt-2 rounded-lg bg-indigo-600 px-4 py-2 text-white"
                    onClick={() => setIsEditing(!isEditing)}
                >
                    {isEditing ? "Cancel" : "Edit Task"}
                </button>
                <button className="mx-4 mt-2 rounded-lg bg-red-800 px-4 py-2 text-white"
                    onClick={handleDelete}
                >
                    Delete
                </button>




                {
                    isEditing && (
                        <div className="mt-2 flex justify-end">
                            <button onClick={handleUpdate}
                                className="rounded-lg bg-green-600 px-5 py-2 text-white"
                            >
                                Save Changes
                            </button>
                        </div>
                    )
                }
            </div>
            <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-sm">
                {
                    isEditing ?
                        (
                            <div>
                                <input
                                    type="text"
                                    name="title"
                                    className="w-full p-2 my-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:indigo-500"
                                    placeholder={task.title}
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                            </div>
                        ) :
                        (
                            <h2 className="my-6 text-3xl first-letter:capitalize font-medium">
                                {task.title}
                            </h2>
                        )
                }
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-xl border p-4">
                        <h3 className="mb-2 text-sm font-semibold text-gray-500">
                            PROJECT

                        </h3>
                        {

                            <p className="text-lg font-medium">
                                {task.project}
                            </p>
                        }
                    </div>


                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="mt-6 rounded-xl border p-4">
                        <h3 className="mb-2 text-sm font-semibold text-gray-500">
                            status
                        </h3>

                        <p className="text-lg font-medium">
                            {task.status}
                        </p>
                    </div>
                    <div className="mt-6 rounded-xl border p-4">
                        <h3 className="mb-2 text-sm font-semibold text-gray-500">
                            priority
                        </h3>
                        {
                            isEditing ?
                                (
                                    <div>
                                        <input
                                            type="text"
                                            name="title"
                                            className="w-full p-2 my-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:indigo-500"
                                            placeholder={task.priority}
                                            value={formData.priority}
                                            onChange={handleChange}
                                        />
                                    </div>
                                ) :
                                (
                                    <p className="text-lg font-medium">
                                        {task.priority}
                                    </p>
                                )
                        }
                    </div>
                </div>
                <div className="mt-6 rounded-xl border p-4">
                    <h3 className="mb-2 text-sm font-semibold text-gray-500">
                        Description
                    </h3>

                    {
                            isEditing ?
                                (
                                    <div>
                                        <textarea
                                            name="title"
                                            className="w-full p-2 my-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:indigo-500"
                                            placeholder={task.description}
                                            value={formData.description}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                ) :
                                (
                                    <p className="text-lg font-medium">
                                        {task.description}
                                    </p>
                                )
                        }
                </div>


            </div>
        </main >
    );
}

