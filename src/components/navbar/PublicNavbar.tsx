"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function PublicNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-slate-200 bg-white relative z-50">
      
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center">

        {/* Logo */}
        <div className="flex-1">
          <Link href="/" className="text-2xl font-bold text-slate-900">
            WorkNest
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-8 text-sm font-medium text-slate-700">
          <Link href="/features" className="hover:text-black">Features</Link>
          <Link href="/pricing" className="hover:text-black">Pricing</Link>
          <Link href="/about" className="hover:text-black">About</Link>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-end items-center gap-4">

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/signin" className="text-sm text-slate-700 hover:text-black">
              Login
            </Link>

            <Link
              href="/signup"
              className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:opacity-90"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 border border-slate-200 rounded-lg"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-5 flex flex-col gap-4 text-sm font-medium text-slate-700">

          <Link href="/features" onClick={() => setOpen(false)}>Features</Link>
          <Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>

          <div className="border-t pt-4 flex flex-col gap-3">
            <Link href="/signin" onClick={() => setOpen(false)}>Login</Link>

            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="w-full text-center px-4 py-2 bg-black text-white rounded-lg"
            >
              Get Started
            </Link>
          </div>

        </div>
      )}
    </nav>
  );
}