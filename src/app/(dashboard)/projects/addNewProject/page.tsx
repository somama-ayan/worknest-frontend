// app/projects/create/page.tsx

"use client";


import {
  // FiX,
  FiLayers,
  FiGrid,
  FiZap,
  FiList,
  FiUsers,
  // FiSend,
  FiFlag,
  FiTrash2,
  // FiPlus,
  FiCalendar,
} from "react-icons/fi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  projectSchema,
  ProjectFormData,
} from "@/schemas/project.schema";

export default function CreateProjectPage() {
  // const [name, setName] = useState("")
  // const [project_key, setProjectKey] = useState("")
  // const [category, setCategory] = useState("")
  // const [description, setDescription] = useState("")
  // const [target_completion_date, setTargetCompDate] = useState("")
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
  });
  
  const onSubmit = async (data: ProjectFormData) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/projects/addNewProject",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(data),
        }
      );
console.log("Response received");
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Failed to create project");
      }

      console.log("Success:", result);

      alert("Project created successfully");
      reset();
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);
        alert(err.message);
      } else {
        console.log("Unknown error", err);
        alert("Something went wrong");
      }
    }


  }

  return (
    <main className="min-h-screen bg-[#f5f7fc] px-4 py-6 lg:px-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#0f172a]">
                Create New Project
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Configure your workspace and set the foundation for your team’s
                success.
              </p>
            </div>

            {/* <button className="flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-700">
              <FiX />
              Dismiss
            </button> */}
          </div>

          {/* Main Layout */}
          <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_320px]">
            {/* LEFT SIDE */}
            <div className="space-y-6">
              {/* Project Identity */}
              <section className="rounded-2xl border border-[#dfe5f2] bg-white p-6 shadow-sm">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ede9fe]">
                    <FiLayers className="text-[#4f46e5]" />
                  </div>

                  <h2 className="text-xl font-semibold text-[#0f172a]">
                    Project Identity
                  </h2>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500">
                      Project Name
                    </label>

                    <input
                      type="text"
                      placeholder="e.g. Phoenix Redesign"
                      className="h-12 w-full rounded-xl border border-[#d7ddeb] bg-[#f9fbff] px-4 text-sm outline-none transition focus:border-[#4f46e5]"
                      
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500">
                      Project Key (Slug)
                    </label>

                    <input
                      type="text"
                      placeholder="ABC123"
                      className="h-12 w-full rounded-xl border border-[#d7ddeb] bg-[#f9fbff] px-4 text-sm uppercase outline-none transition focus:border-[#4f46e5]"
                      required
                      {...register("project_key")}
                    />
                    {errors.project_key && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.project_key.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500">
                    Workspace Category
                  </label>

                  <select
                    {...register("category")}
                    className="h-12 w-full rounded-xl border border-[#d7ddeb] bg-[#f9fbff] px-4 text-sm outline-none transition focus:border-[#4f46e5]">
                    <option value="web">web</option>
                    <option value="mobile">mobile</option>
                    <option value="backend">backend</option>
                    <option value="devops">devops</option>
                    <option value="other">other</option>
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.category.message}
                    </p>
                  )}
                </div>
              </section>

              {/* Project Details */}
              <section className="rounded-2xl border border-[#dfe5f2] bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ede9fe]">
                    <FiGrid className="text-[#4f46e5]" />
                  </div>

                  <h2 className="text-xl font-semibold text-[#0f172a]">
                    Project Details
                  </h2>
                </div>

                <div className="mt-6">
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500">
                    Project Description
                  </label>

                  {/* Fake Toolbar */}
                  <div className="flex items-center gap-4 rounded-t-xl border border-[#d7ddeb] bg-[#f9fbff] px-4 py-3 text-sm text-gray-500">
                    {/* <button className="font-bold">B</button>
                    <button className="italic">I</button>
                    <button className="underline">U</button>
                    <button>≡</button> */}
                  </div>

                  <textarea
                    rows={5}
                    placeholder="Outline the project objectives and scope..."
                    className="w-full rounded-b-xl border border-t-0 border-[#d7ddeb] bg-white px-4 py-4 text-sm outline-none transition focus:border-[#4f46e5]"
                    required
                    {...register("description")}
                  />

                  {errors.description && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500">
                    Target Completion Date
                  </label>

                  <div className="relative">
                    <input
                      type="date"
                      className="h-12 w-full rounded-xl border border-[#d7ddeb] bg-[#f9fbff] px-4 pr-12 text-sm outline-none transition focus:border-[#4f46e5]"
                      required
                      {...register("target_completion_date")}
                    />

                    {errors.target_completion_date && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.target_completion_date.message}
                      </p>
                    )}

                    <FiCalendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </section>

              {/* Milestones */}
              <section className="rounded-2xl border border-[#dfe5f2] bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ede9fe]">
                      <FiFlag className="text-[#4f46e5]" />
                    </div>

                    <h2 className="text-xl font-semibold text-[#0f172a]">
                      Initial Milestones
                    </h2>
                  </div>

                  {/* <button className="flex items-center gap-2 text-sm font-semibold text-[#4f46e5]">
                    <FiPlus />
                    Add Goal
                  </button> */}
                </div>

                <div className="mt-6 space-y-4">
                  <MilestoneInput
                    number="1"
                    placeholder="Project Kickoff & Requirements Gathering"
                  />

                  <MilestoneInput
                    number="2"
                    placeholder="V1 High-Fidelity Prototypes"
                  />
                </div>
              </section>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="space-y-6">
              {/* Template */}
              <section className="rounded-2xl border border-[#dfe5f2] bg-white p-5 shadow-sm">
                <h2 className="flex items-center gap-2 text-xl font-semibold text-[#0f172a]">
                  <FiGrid className="text-[#4f46e5]" />
                  Template
                </h2>

                <div className="mt-5 space-y-4">
                  <TemplateCard
                    active
                    title="Kanban Board"
                    subtitle="Visual workflow management"
                    icon={<FiGrid />}
                  />

                  <TemplateCard
                    title="Agile Sprint"
                    subtitle="Scrum-based planning"
                    icon={<FiZap />}
                  />

                  <TemplateCard
                    title="Classic Task List"
                    subtitle="Simple linear structure"
                    icon={<FiList />}
                  />
                </div>
              </section>

              {/* Visibility */}
              <section className="rounded-2xl border border-[#dfe5f2] bg-white p-5 shadow-sm">
                <h2 className="flex items-center gap-2 text-xl font-semibold text-[#0f172a]">
                  <FiUsers className="text-[#4f46e5]" />
                  Visibility
                </h2>

                {/* Access */}
                <div className="mt-6">
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500">
                    Access Level
                  </label>

                  <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-[#d7ddeb]">
                    {/* <button className="bg-[#ede9fe] py-3 text-sm font-semibold text-[#4f46e5]">
                      Public
                    </button>

                    <button className="bg-white py-3 text-sm font-medium text-gray-500">
                      Private
                    </button> */}
                  </div>
                </div>

                {/* Invite */}
                <div className="mt-6">
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500">
                    Invite via Email
                  </label>

                  <div className="flex overflow-hidden rounded-xl border border-[#d7ddeb] bg-[#f9fbff]">
                    <input
                      type="email"
                      placeholder="colleague@worknest.com"
                      className="h-12 flex-1 bg-transparent px-4 text-sm outline-none"
                    />

                    {/* <button className="flex w-14 items-center justify-center bg-[#4f46e5] text-white">
                      <FiSend />
                    </button> */}
                  </div>
                </div>

                {/* Members */}
                <div className="mt-6">
                  <label className="mb-3 block text-xs font-bold uppercase tracking-wide text-gray-500">
                    Current Members
                  </label>

                  <div className="flex -space-x-3">
                    <img
                      src="https://i.pravatar.cc/100?img=11"
                      alt=""
                      className="h-10 w-10 rounded-full border-2 border-white object-cover"
                    />

                    <img
                      src="https://i.pravatar.cc/100?img=12"
                      alt=""
                      className="h-10 w-10 rounded-full border-2 border-white object-cover"
                    />

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#ede9fe] text-sm font-semibold text-[#4f46e5]">
                      +3
                    </div>
                  </div>
                </div>
              </section>

              {/* Create Button */}
              <div>
                <button
                  className="h-14 w-full rounded-2xl bg-[#4f46e5] text-lg font-semibold text-white shadow-lg transition hover:bg-[#4338ca]"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? "Creating..." : "Create Project"}
                </button>

                <p className="mt-4 text-center text-xs leading-6 text-gray-400">
                  You can change these settings later in the Project
                  Administration panel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main >
  );
}

/* =========================
   Template Card
========================= */

function TemplateCard({
  title,
  subtitle,
  icon,
  active,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition ${active
        ? "border-[#4f46e5] bg-[#f5f3ff]"
        : "border-[#dfe5f2] bg-white hover:border-[#c7d2fe]"
        }`}
    >
      <div
        className={`mt-1 text-lg ${active ? "text-[#4f46e5]" : "text-gray-500"
          }`}
      >
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-[#0f172a]">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
      </div>
    </button>
  );
}

/* =========================
   Milestone Input
========================= */

function MilestoneInput({
  number,
  placeholder,
}: {
  number: string;
  placeholder: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-[#dfe5f2] bg-[#f9fbff] p-3">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-gray-500 shadow-sm">
        {number}
      </div>

      <input
        type="text"
        placeholder={placeholder}
        className="h-11 flex-1 rounded-xl border border-[#d7ddeb] bg-white px-4 text-sm outline-none transition focus:border-[#4f46e5]"
      />

      <button className="text-gray-400 transition hover:text-red-500">
        <FiTrash2 />
      </button>
    </div>
  );
}