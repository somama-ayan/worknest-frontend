"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { CiGrid41 } from "react-icons/ci";
import { useAuth } from "@/app/providers/AuthProvider";



export default function Signin() {
  const router = useRouter();
  const { setUser } = useAuth(); // for centralized state
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    try {
    const res = await fetch("http://localhost:5000/api/v1/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user)
      router.push("/dashboard");
    } else {
      setError(data.message || "Something went wrong");
    }

  } catch (err) {
    setError(`Unable to connect to server: ${err}`);
  }
};

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#f6f7ff] px-4">

      {/* Card */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-lg p-8">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
            <CiGrid41 className="w-5 h-5"/>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-center">
          Welcome back
        </h1>
        <p className="text-sm text-gray-500 text-center mt-1">
          Log in to your WorkNest account to continue
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="name@company.com"
              className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between">
              <label className="text-sm font-medium">Password</label>
              <span className="text-xs text-indigo-600 cursor-pointer">
                Forgot password?
              </span>
            </div>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
          </div>

          {/* Remember */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" />
            <span>Remember me for 30 days</span>
          </div>

          {/* Button */}
          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
            Sign in to WorkNest
          </button>
              {error && (
  <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
    {error}
  </div>
)}
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-xs text-gray-400">
            OR CONTINUE WITH
          </span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* OAuth */}
        <div className="flex gap-3">
          <button className="flex-1 border py-2 rounded-lg flex items-center justify-center gap-2">
            <FcGoogle className="w-4 h-4" />
            Google
          </button>

          <button className="flex-1 border py-2 rounded-lg flex items-center justify-center gap-2">
            <FaGithub className="w-4 h-4" />
            GitHub
          </button>
        </div>

        {/* Footer */}
        <p className="text-sm text-center mt-6 text-gray-600">
          Don not have an account?{" "}
          <span className="text-indigo-600 cursor-pointer">
            Create an account
          </span>
        </p>

      </div>
    </div>
  );
}


