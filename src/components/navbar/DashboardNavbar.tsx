"use client";

import Link from "next/link";
// import Link from "next/link";
import { FiBell, FiSearch, FiLogOut } from "react-icons/fi";

export default function DashboardNavbar() {
  return (
    <nav className="w-full h-16 border-b border-slate-200 bg-white flex items-center px-6 justify-between">

      {/* Left → Logo + Nav */}
      {/* <div className="flex items-center gap-8">
        <Link href="/" className="text-xl font-bold text-slate-900">
          WorkNest
        </Link>

        <Link href="/dashboard" className="text-sm text-slate-600 hover:text-black">
          Dashboard
        </Link>

        <Link href="/projects" className="text-sm text-slate-600 hover:text-black">
          Projects
        </Link>

        <Link href="/team" className="text-sm text-slate-600 hover:text-black">
          Team
        </Link>
      </div> */}

      {/* Center → Search */}
      <div className="hidden md:flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg">
        <FiSearch className="text-slate-500" />
        <input
          placeholder="Search..."
          className="bg-transparent outline-none text-sm"
        />
      </div>

      {/* Right → Actions */}
      <div className="flex items-center gap-5">

        <FiBell className="text-xl text-slate-700 cursor-pointer" />

        <button className="flex items-center gap-2 text-sm text-slate-700 hover:text-black">
          <FiLogOut />
          Logout
        </button>
        <Link href="/profile">
        <img
          src="https://i.pravatar.cc/40"
          className="h-8 w-8 rounded-full cursor-pointer"
          />
          </Link>
      </div>

    </nav>
  );
}