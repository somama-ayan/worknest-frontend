"use client";
import {
    FiGrid,
    FiLayers

} from "react-icons/fi";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TaskFormData, taskSchema } from "@/schemas/task.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {} from "zod";


type Project = {
    _id: string;
    name: string;
    project_key: string;
    category: string;
    description?: string;
}

export default function AddNewTask() {
    // const [priority, setPriority] = useState("medium");
    const [project, setProject] = useState<Project[]>([])
    const [error, setError] = useState("");

    //  getting project.
    useEffect(() => {
        const fetchProject = async () => {

            try {
                const response = await fetch("http://localhost:5000/api/v1/projects/getAll",
                    {
                        credentials: "include"
                    }
                )
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.message || "Failed to fetch project");
                }
                setProject(data.data);
                console.log(project)
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                    console.log(error)
                } else {
                    setError("Something went wrong");
                }
            }
        }// end of fetchProject
        fetchProject();
    }, [])

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<TaskFormData>(
        {
            resolver: zodResolver(taskSchema),
        }
    )

    const onSubmit = async (data: TaskFormData) => {
        try {

            const response = await fetch(
                "http://localhost:5000/api/v1/tasks/addNewTask",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify(data)
                }
            )
            console.log("Response received");
            console.log(data)
            const result = await response.json();
            console.log(result)
            if (!response.ok) {
                throw new Error(result.message || "Failed to create project");
            }

            console.log("Success:", result);

            alert("Task created successfully");
            reset();

        } catch (err: unknown) {
            if (err instanceof Error) {
                alert(err.message)
            }
            else {
                alert("something went Wrong")
            }
        }
    }











    return (
        <main className="min-h-screen bg-[#f5f7fc] px-4 py-6 lg:px-8">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mx-auto max-w-7xl">
                    {/*header */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-[#0f172a]">Create New Task</h2>
                            <p className="mt-2 text-sm text-gray-500">
                                Configure your workspace and set the foundation for your team’s
                                success.
                            </p>
                        </div>
                    </div>

                    {/* main layout */}
                    <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_320px]">
                        {/* left side */}
                        <div className="space-y-6">
                            <section className="rounded-2xl border border-[#dfe5f2] bg-white p-6 shadow-sm">
                                {/* Task identity */}
                                <h2 className="flex items-center gap-2 text-xl font-semibold text-[#0f172a]">
                                    <FiLayers className="text-[#4f46e5]" />
                                    Task Identity
                                </h2>
                                <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500">
                                            Task Name
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="e.g. Phoenix Redesign"
                                            className="h-12 w-full rounded-xl border border-[#d7ddeb] bg-[#f9fbff] px-4 text-sm outline-none transition focus:border-[#4f46e5]"
                                            {...register("title")}
                                        />
                                        {errors.title && (
                                            <p className="mt-1 text-sm text-red-500">
                                                {errors.title.message}
                                            </p>
                                        )}
                                    </div>
                                    {/* project */}
                                    <div>
                                        <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500">
                                            Project
                                        </label>

                                        <select
                                            {...register("project")}
                                            className="h-12 w-full rounded-xl border border-[#d7ddeb] bg-[#f9fbff] px-4 text-sm outline-none transition focus:border-[#4f46e5]">
                                            {
                                                project.map((project) => (
                                                    <option
                                                        key={project._id}
                                                        value={project._id}
                                                    >
                                                        {project.name}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                        {errors.project && (
                                            <p className="mt-1 text-sm text-red-500">
                                                {errors.project.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500">
                                        Task Description
                                    </label>
                                    <textarea
                                        {...register("description")}
                                        rows={5}
                                        placeholder="Outline the task objectives and scope..."
                                        className="w-full rounded-b-xl border border-t-0 border-[#d7ddeb] bg-white px-4 py-4 text-sm outline-none transition focus:border-[#4f46e5]"
                                        required
                                    />

                                    {errors.description && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {errors.description.message}
                                        </p>
                                    )}
                                </div>
                            </section>
                        </div>
                        {/* right side */}
                        <div className="space-y-6">
                            <section className="rounded-2xl border border-[#dfe5f2] bg-white p-6 shadow-sm">
                                {/* Task Meta Data */}
                                <h2 className="flex items-center gap-2 text-xl font-semibold text-[#0f172a]">
                                    <FiGrid className="text-[#4f46e5]" />
                                    Task MetaData
                                </h2>

                                <div className="mt-6">
                                    <label className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-500">
                                        Status
                                    </label>
                                    <select
                                        {...register("status")}
                                        className="h-10 w-full rounded-xl border border-[#d7ddeb] bg-[#f9fbff] px-4 text-sm outline-none transition focus:border-[#4f46e5]">
                                        <option value="todo">Todo</option>
                                        <option value="in-progress">In Progress</option>
                                        <option value="in-review">In Review</option>
                                        <option value="done">Done</option>
                                    </select>
                                    {
                                        errors.description && (
                                            <p className="mt-1 text-sm text-red-500">
                                                {
                                                    errors.description.message
                                                }
                                            </p>
                                        )
                                    }
                                </div>
                                {/* priority */}
                                {/* <div className="mt-6">
                                    <label className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-500">
                                        Priority
                                    </label>
                                    <div className="flex gap-3">
                                        {["low", "medium", "high"].map((value) => (
                                            <button
                                                key={value}
                                                type="button"
                                                onClick={() => {
                                                    setPriority(value);
                                                    setValue("priority", value as "low" | "medium" | "high");
                                                }}
                                                className={`rounded-xl border px-6 py-2 font-medium transition ${priority === value
                                                    ? "border-indigo-300 bg-indigo-100 text-indigo-600"
                                                    : "border-gray-300 bg-white text-gray-700"
                                                    }`}
                                            >
                                                {value.charAt(0).toUpperCase() + value.slice(1)}
                                            </button>
                                            
                                        ))}
                                        <input type="hidden" {...register("priority")} />
                                    </div>
                                </div> */}
                                <div className="mt-6">
                                    <label className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-500">
                                        Priority
                                    </label>
                                    <select
                                        {...register("priority")}
                                        className="h-10 w-full rounded-xl border border-[#d7ddeb] bg-[#f9fbff] px-4 text-sm outline-none transition focus:border-[#4f46e5]">
                                        <option value="medium">medium</option>
                                        <option value="low">low</option>
                                        <option value="high">high</option>
                                    </select>
                                    {
                                        errors.priority && (
                                            <p className="mt-1 text-sm text-red-500">
                                                {
                                                    errors.priority.message
                                                }
                                            </p>
                                        )
                                    }

                                </div>

                            </section>
                        </div>
                    </div>
                </div>
                {/* Create Button */}
                <div>
                    <button
                        className="h-14 w-full rounded-2xl bg-[#4f46e5] text-lg font-semibold text-white shadow-lg transition hover:bg-[#4338ca]"
                          disabled={isSubmitting}
                        type="submit"
                    >
                        {isSubmitting ? "Creating..." : "Create Task"}
                    </button>

                    <p className="mt-4 text-center text-xs leading-6 text-gray-400">
                        You can change these settings later in the Project
                        Administration panel.
                    </p>
                </div>

            </form>
        </main >
    )
}