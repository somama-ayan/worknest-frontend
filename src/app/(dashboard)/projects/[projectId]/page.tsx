"use client";

import { useEffect, useState } from "react";

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
};

export default function ProjectDetailPage({ params }: Props) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
    return (
      <div className="p-6">
        Project not found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f7fc] p-6">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-sm">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            {project.name}
          </h1>

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
          <h3 className="mb-3 text-sm font-semibold text-gray-500">
            DESCRIPTION
          </h3>

          <p className="text-gray-700">
            {project.description || "No description available"}
          </p>
        </div>
      </div>
    </main>
  );
}