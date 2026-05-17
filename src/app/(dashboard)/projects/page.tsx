// app/projects/page.tsx

"use client";

import {
  FiSearch,
  FiBell,
  FiHelpCircle,
  FiSettings,
  FiGrid,
  FiList,
  FiFolder,
  FiPlus,
  FiMoreHorizontal,
  FiCalendar,
  FiCheckCircle,
} from "react-icons/fi";

type TaskCardProps = {
  priority: string;
  priorityColor: string;
  title: string;
  date?: string;
  overdue?: boolean;
  completed?: boolean;
};

export default function ProjectsPage() {
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

            <button className="rounded-xl bg-[#4f46e5] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4338ca]">
              New Project
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
          <span>Projects</span>
          <span>›</span>
          <span className="font-medium text-[#0f172a]">
            Alpha Enterprise Rebrand
          </span>
        </div>

        {/* Title + Stats */}
        <div className="mt-4 flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Alpha Enterprise Rebrand
            </h1>

            {/* Tabs */}
            <div className="mt-8 flex flex-wrap gap-8 border-b border-[#e4e8f2] pb-4">
              <button className="flex items-center gap-2 border-b-2 border-[#4f46e5] pb-3 text-sm font-semibold text-[#4f46e5]">
                <FiGrid />
                Board
              </button>

              <button className="flex items-center gap-2 pb-3 text-sm font-medium text-gray-500">
                <FiList />
                List
              </button>

              <button className="flex items-center gap-2 pb-3 text-sm font-medium text-gray-500">
                <FiCalendar />
                Timeline
              </button>

              <button className="flex items-center gap-2 pb-3 text-sm font-medium text-gray-500">
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

        {/* Kanban Board */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-4">
          {/* Column */}
          <BoardColumn title="To Do" count={4}>
            <TaskCard
              priority="High"
              priorityColor="bg-orange-100 text-orange-700"
              title="Finalize brand color palette for accessibility"
              date="Oct 24"
            />

            <TaskCard
              priority="Medium"
              priorityColor="bg-gray-200 text-gray-700"
              title="Competitive analysis on logo typography"
              date="Oct 26"
            />
          </BoardColumn>

          {/* Column */}
          <BoardColumn title="In Progress" count={2}>
            <TaskCard
              priority="High"
              priorityColor="bg-orange-100 text-orange-700"
              title="Alpha brand guideline documentation draft"
              overdue
            />
          </BoardColumn>

          {/* Column */}
          <BoardColumn title="In Review" count={1}>
            <TaskCard
              priority="Low"
              priorityColor="bg-blue-100 text-blue-700"
              title="Stakeholder feedback on initial logo concepts"
              date="Oct 28"
            />
          </BoardColumn>

          {/* Column */}
          <BoardColumn title="Done" count={8}>
            <TaskCard
              priority="Completed"
              priorityColor="bg-gray-200 text-gray-600"
              title="Establish project timeline and milestones"
              date="Oct 15"
              completed
            />
          </BoardColumn>
        </div>
      </section>

      {/* Floating Button */}
      <button className="fixed bottom-5 right-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#4f46e5] text-3xl text-white shadow-2xl transition hover:scale-105">
        <FiPlus />
      </button>
    </main>
  );
}

/* =========================
   Board Column
========================= */

function BoardColumn({
  title,
  count,
  children,
}: {
  title: string;
  count: number;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-[#eef2fb] p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">{title}</h3>

          <span className="flex h-6 min-w-[24px] items-center justify-center rounded-full bg-[#dbe3f3] px-2 text-xs font-semibold text-gray-600">
            {count}
          </span>
        </div>

        <button className="text-xl text-gray-500">
          <FiPlus />
        </button>
      </div>

      <div className="space-y-4">{children}</div>
    </div>
  );
}

/* =========================
   Task Card
========================= */

function TaskCard({
  priority,
  priorityColor,
  title,
  date,
  overdue,
  completed,
}: TaskCardProps) {
  return (
    <div className="rounded-2xl border border-[#dce3f0] bg-white p-4 shadow-sm transition hover:shadow-md">
      {/* Top */}
      <div className="flex items-start justify-between">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityColor}`}
        >
          {priority}
        </span>

        {completed ? (
          <FiCheckCircle className="text-lg text-gray-400" />
        ) : (
          <FiMoreHorizontal className="text-lg text-gray-400" />
        )}
      </div>

      {/* Title */}
      <h4
        className={`mt-5 text-[15px] font-semibold leading-6 ${
          completed ? "text-gray-400 line-through" : "text-[#0f172a]"
        }`}
      >
        {title}
      </h4>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">
        {/* Avatars */}
        <div className="flex -space-x-2">
          <img
            src="https://i.pravatar.cc/100?img=1"
            alt=""
            className="h-7 w-7 rounded-full border-2 border-white object-cover"
          />

          {!completed && (
            <img
              src="https://i.pravatar.cc/100?img=2"
              alt=""
              className="h-7 w-7 rounded-full border-2 border-white object-cover"
            />
          )}
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-sm">
          {overdue ? (
            <span className="font-semibold text-red-500">⚠ Overdue</span>
          ) : (
            <>
              <FiCalendar className="text-gray-400" />
              <span className="text-gray-400">{date}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}