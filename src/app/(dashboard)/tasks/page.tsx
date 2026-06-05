// app/tasks/page.tsx

"use client";

import TasksBoard from "@/components/tasks/taskspage/TasksBoard";
import TasksListView from "@/components/tasks/taskspage/TasksListView";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  FiSearch,
  FiBell,
  FiHelpCircle,
  FiSettings,
  FiGrid,
  FiList,
  FiFolder,
  FiPlus,
  // FiMoreHorizontal,
  FiCalendar,
  // FiCheckCircle,
} from "react-icons/fi";

// type TaskCardProps = {
//   priority: string;
//   priorityColor: string;
//   title: string;
//   date?: string;
//   overdue?: boolean;
//   completed?: boolean;
// };

export default function TasksPage() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("board");

  const handleClick = () => {
    router.push("/tasks/addNewTask");
  };

  return (
    <main className="min-h-screen bg-[#f5f7fc] text-[#0f172a]">
      {/* Top Navbar */}
      <header className="border-b border-[#e4e8f2] bg-white">
        <div className="flex flex-col gap-4 px-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-6">
          {/* Search */}
          <div className="flex w-full items-center gap-3 lg:max-w-sm">
            <div className="flex h-11 w-full items-center gap-3 rounded-2xl bg-[#f3f5fb] px-4">
              <FiSearch className="text-gray-400" />

              <input
                type="text"
                placeholder="Search project files, tasks..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center justify-between gap-4 lg:justify-end">
            <div className="flex items-center gap-5 text-[20px] text-[#4b5563]">
              <FiBell className="cursor-pointer" />
              <FiHelpCircle className="cursor-pointer" />
              <FiSettings className="cursor-pointer" />
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
              className="rounded-xl bg-[#4f46e5] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4338ca]"
            >
              New Tasks
            </button>

            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="avatar"
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="px-4 py-6 lg:px-6">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <span>Worknest</span>
          <span>›</span>

          <span className="font-medium text-[#0f172a]">
            Tasks
          </span>
        </div>

        {/* Title + Stats */}
        <div className="mt-4 flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Manage Your Tasks
            </h1>

            {/* Tabs */}
            <div className="mt-8 flex flex-wrap gap-8 border-b border-[#e4e8f2] pb-4">
              <button
                onClick={() => setActiveTab("board")}
                className={`flex items-center gap-2 pb-3 text-sm font-medium transition ${
                  activeTab === "board"
                    ? "border-b-2 border-[#4f46e5] text-[#4f46e5]"
                    : "text-gray-500"
                }`}
              >
                <FiGrid />
                Board
              </button>

              <button
                onClick={() => setActiveTab("list")}
                className={`flex items-center gap-2 pb-3 text-sm font-medium transition ${
                  activeTab === "list"
                    ? "border-b-2 border-[#4f46e5] text-[#4f46e5]"
                    : "text-gray-500"
                }`}
              >
                <FiList />
                List
              </button>

              <button
                onClick={() => setActiveTab("timeline")}
                className={`flex items-center gap-2 pb-3 text-sm font-medium transition ${
                  activeTab === "timeline"
                    ? "border-b-2 border-[#4f46e5] text-[#4f46e5]"
                    : "text-gray-500"
                }`}
              >
                <FiCalendar />
                Timeline
              </button>

              <button
                onClick={() => setActiveTab("files")}
                className={`flex items-center gap-2 pb-3 text-sm font-medium transition ${
                  activeTab === "files"
                    ? "border-b-2 border-[#4f46e5] text-[#4f46e5]"
                    : "text-gray-500"
                }`}
              >
                <FiFolder />
                Files
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Remaining
              </p>

              <h2 className="mt-1 text-4xl font-bold text-[#4f46e5]">
                12 Tasks
              </h2>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Overdue
              </p>

              <h2 className="mt-1 text-4xl font-bold text-[#dc2626]">
                3 Overdue
              </h2>
            </div>
          </div>
        </div>

        {/* Dynamic Tab Content */}
        {activeTab === "board" && <TasksBoard />}

        {activeTab === "list" && <TasksListView />}

        {/* {activeTab === "timeline" && <TimelineView />} */}

        {/* {activeTab === "files" && <FilesView />} */}
      </section>

      {/* Floating Button */}
      <button className="fixed bottom-5 right-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#4f46e5] text-3xl text-white shadow-2xl transition hover:scale-105">
        <FiPlus />
      </button>
    </main>
  );
}





