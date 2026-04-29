"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { MdOutlineHub } from "react-icons/md";

export default function Signup() {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: ""
    })
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5000/api/v1/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if(res.ok){
                router.push("/dashboard")
            }else{
                console.log(data.message)
            }
        } catch (error) {
            console.log(error)
        }


    }
    return (
        <div className="w-full min-h-screen flex border">

            {/* left side */}
            <div className="hidden md:flex w-1/2 relative bg-blue-700 items-center justify-center rounded-sm text-white px-12 overflow-hidden">

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-20 pointer-events-none"></div>

                {/* Content */}
                <div className="relative max-w-md space-y-6 z-10">
                    <div className="flex items-center gap-3">
                        <MdOutlineHub className="text-3xl text-slate-400" />
                        <h3 className="text-2xl font-bold text-slate-400 tracking-tight">WorkNest</h3>
                    </div>

                    <h1 className="text-4xl font-bold text-slate-300 leading-tight">
                        Architecting high-<br />
                        performance teams.
                    </h1>

                    <p className="text-slate-400 leading-relaxed">
                        The precision of professional development tools combined with the clarity
                        of architectural minimalism.
                    </p>
                </div>

            </div>

            {/* Right side */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-white pt-20">
                <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">

                    {/* Heading */}
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-900">
                            Create your workspace
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                            Already have an account?{" "}
                            <span className="text-indigo-600 cursor-pointer">Log in</span>
                        </p>
                    </div>

                    {/* OAuth Buttons */}
                    <div className="space-y-3">
                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition"
                        >
                            <FcGoogle className="w-5 h-5" />
                            Sign up with Google
                        </button>

                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition"
                        >
                            <FaGithub className="w-5 h-5" />
                            Sign up with GitHub
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-3">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="text-xs text-gray-400">OR CONTINUE WITH EMAIL</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    {/* Inputs */}
                    <div className="space-y-4">

                        <div>
                            <label className="text-sm text-gray-600">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">Email Address</label>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                            />
                            <p className="text-xs text-gray-400 mt-1">
                                Must be at least 8 characters including a number and special character.
                            </p>
                        </div>

                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-2 text-sm text-gray-500">
                        <input type="checkbox" className="mt-1" />
                        <p>
                            I agree to the{" "}
                            <span className="text-indigo-600 cursor-pointer">Terms of Service</span>{" "}
                            and{" "}
                            <span className="text-indigo-600 cursor-pointer">Privacy Policy</span>.
                        </p>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition shadow-md"
                    >
                        Create Workspace
                    </button>

                </form>
            </div>

        </div>
    )
}