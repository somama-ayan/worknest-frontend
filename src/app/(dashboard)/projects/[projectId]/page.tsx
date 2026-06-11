"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/providers/AuthProvider";


type Props = {
  params: {
    projectId: string;
  };
};

type Project = {
  _id: string;
  name: string;
  project_key: string;
  category: string;
  description?: string;
  target_completion_date: string
};

export default function ProjectDetailPage({ params }: Props) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { user } = useAuth(); // centralized state
  const router = useRouter();
  // for edititng
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    project_key: "",
    category: "",
    description: "",
    target_completion_date: ""
  });
  //  use effect to load data for the first time ., or on every change 
  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `http://localhost:5000/api/v1/projects/${params.projectId}`,
          {
            credentials: "include",
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch project");
        }

        setProject(data.data);
        setFormData({
          name: data.data.name,
          project_key: data.data.project_key,
          category: data.data.category,
          description: data.data.description || "",
          target_completion_date: data.data.target_completion_date
        });

      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [params.projectId]);

  //  handle change for updating input feilds 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  //  update project
  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/projects/${project?._id}/updateProject`,
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
      setProject(data.data);
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

  //  delete project 
  const handleDelete = async () => {
    try {

      const response = await fetch(
        `http://localhost:5000/api/v1/projects/${params.projectId}/deleteProject`,
        {
          method: "DELETE",
          credentials: "include"
        }
      )

      const data = await response.json()
      if (!response.ok) throw new Error(data.message || "Failed to Delete Project.")

      setProject(null)
      setFormData({
        name: "",
        project_key: "",
        category: "",
        description: "",
        target_completion_date: ""
      });

      alert("Project Deleted Successfully.")

    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      }
      else {
        setError("Something went wrong while Deletion.")
      }
    }
  }

  if (loading) {
    return (
      <div className="p-6">
        Loading project...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-red-500">
        {error}
      </div>
    );
  }

  if (!project) {
    router.push("/projects")
    return (
      // <div className="p-6">
      //   Project not found
      // </div>
      null
    );

  }

  return (
    <main className="min-h-screen bg-[#f5f7fc] p-6">


     {user?.role === "admin" && (
  <div className="mb-4">
    <button
      className="mt-2 rounded-lg bg-indigo-600 px-4 py-2 text-white"
      onClick={() => setIsEditing(!isEditing)}
    >
      {isEditing ? "Cancel" : "Edit Project"}
    </button>

    <button
      className="mx-4 mt-2 rounded-lg bg-red-800 px-4 py-2 text-white"
      onClick={handleDelete}
    >
      Delete
    </button>

    {isEditing && (
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleUpdate}
          className="rounded-lg bg-green-600 px-5 py-2 text-white"
        >
          Save Changes
        </button>
      </div>
    )}
  </div>
)}

      <div className="mt-6 mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-sm">
        <div className="mb-8">

          {
            isEditing ?
              (

                <div>
                  <input type="text" placeholder={project.name}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              )
              :
              (
                <h1 className="text-3xl font-bold">
                  {project.name}
                </h1>
              )
          }
          {/* // <div>{project.name}</div> */}

          <p className="mt-2 text-gray-500">
            Project Details
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-4">
            <h3 className="mb-2 text-sm font-semibold text-gray-500">
              PROJECT KEY
            </h3>

            <p className="text-lg font-medium">
              {project.project_key}
            </p>
          </div>

          <div className="rounded-xl border p-4">
            <h3 className="mb-2 text-sm font-semibold text-gray-500">
              CATEGORY
            </h3>

            <p className="text-lg font-medium">
              {project.category}
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border p-4">
          <h3 className="mb-2 text-sm font-semibold text-gray-500">
            TARGET COMPLETION DATE
          </h3>

          <p className="text-lg font-medium">
            {project.target_completion_date}
          </p>
        </div>
      </div>
      <div className="mt-6 rounded-xl border p-4">
        <h3 className="mb-3 text-sm font-semibold text-gray-500">
          DESCRIPTION
        </h3>
        {
          isEditing ?
            (
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder={project.description}
              >

              </textarea>

            ) :
            (
              <p className="text-gray-700">
                {project.description || "No description available"}
              </p>

            )

        }
      </div>

    </main >
  );
}