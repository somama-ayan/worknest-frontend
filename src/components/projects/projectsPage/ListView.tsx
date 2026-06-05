"use client";
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";
/* =========================
   LIST VIEW
========================= */
type Project = {
  _id: string,
  name: string,
  project_key: string,
  category: string
}
export default function ListView() {
  const [project, setProject] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/v1/projects/getAll",
          {
            credentials: "include",
          }
        );

        const data = await response.json();

        if (!response.ok) throw new Error(data.message || "Failed to fetch Projects")

        setProject(data.data);
        console.log(project)
      } catch (err) {
         if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
        console.log(err);
      }finally{
        setLoading(false)
      }
    };

    fetchProjects();
  }, []);
  if (loading) {
    return (
      <div className="mt-8">
        Loading projects...
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8 text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-4">
      {project.map((project) => (
        <div
          key={project._id}
          onClick={()=> router.push(`/projects/${project._id}`)}
          className="rounded-xl border bg-white p-4 shadow-sm"
        >
          <h2 className="font-semibold">
            {project.name}
          </h2>

          <p className="text-sm text-gray-500">
            Key: {project.project_key}
          </p>

          <p className="text-sm text-gray-500">
            Category: {project.category}
          </p>
        </div>
      ))}

      {project.length === 0 && (
        <div>No projects found.</div>
      )}
    </div>
  );
}


