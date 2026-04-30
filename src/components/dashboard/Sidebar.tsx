"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-slate-200 p-5">
      <h2 className="text-xl font-bold mb-8">WorkNest</h2>

      <nav className="flex flex-col gap-4 text-sm text-slate-600">
        <Link href="/dashboard" className="font-semibold text-blue-600">
          Dashboard
        </Link>
        <Link href="/tasks">Tasks</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/team">Team</Link>
        <Link href="/calendar">Calendar</Link>
        <Link href="/documents">Documents</Link>
      </nav>
    </div>
  );
}