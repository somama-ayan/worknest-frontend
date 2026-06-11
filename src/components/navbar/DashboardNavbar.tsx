"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import Link from "next/link";
import { FiBell, FiSearch, FiLogOut } from "react-icons/fi";

export default function DashboardNavbar() {
  const [error , setError] = useState("");
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      
      const response = await fetch(
        "http://localhost:5000/api/v1/auth/signout",
        {
          method: "POST",
          credentials: "include"
        }
      )
      const data = await response.json()
      
      alert(data.message)
      router.push("/")
    } catch (err) {
      if(err instanceof Error)
        setError(err.message || "Error while Logging Out")
    }
  }

  if(error)
  {
    <p className="text-sm bg-red-600">{error}</p>
  }


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

        <button className="flex items-center gap-2 text-sm text-slate-700 hover:text-black"
        onClick={handleSignOut}
        >
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