"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "@/components/componentsStyles/Navbar.module.css";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation items array
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div>
      <nav className="block w-full max-w-screen px-8 py-4 mx-auto bg-[#070e1d] bg-opacity-90 sticky top-0 shadow lg:px-8 backdrop-blur-lg backdrop-saturate-150 z-[50]">
        <div className="container flex flex-wrap items-center mx-auto text-slate-800">
          {/* <Link
            href="/"
            className="mr-4 block cursor-pointer px-8 py-1.5 text-white font-bold"
          >
            WORKNEST
          </Link> */}

          <div className="lg:hidden">
            <button
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={toggleMobileMenu}
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 min-h-screen w-64 bg-slate-100 shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden z-50`}
          >
            <div className="flex flex-row items-center border-b pb-4">
              <Link
                href="/"
                className="cursor-pointer text-red-600 font-bold text-xl pt-4 ps-4"
              >
                WORKNEST
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 text-slate-600 hover:text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col h-full gap-4 p-4">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-1 text-lg gap-x-2 text-slate-600 hover:text-red-500"
                >
                  <Link
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                    href={item.href}
                    className="flex items-center"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <button className="bg-seed text-tertiary px-8 py-2 rounded-md hover:bg-red-500">
                  Sign In
                </button>
              </li>
            </ul>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* Left side (nav items) */}
            <ul className="flex flex-row items-center gap-6">
              <Link
                href="/"
                className="mr-4 block cursor-pointer px-8 py-1.5 text-white font-bold"
              >
                WORKNEST
              </Link>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-1 text-tertiary hover:text-white"
                >
                  <Link href={item.href} className="flex items-center">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Right side (button) */}
            <div className="px-1.5">
              <Link href={'/signin'}>
              <button
                className={`${styles.borderGhost} mx-3 px-2 py-1 text-gray-400 hover:text-white hover:scale-105 transition-transform duration-300`}
                >
                Sign In
              </button>
                </Link>
              <button
                className={`${styles.primaryGradient} ${styles.borderGhost} ${styles.textOnPrimary} mx-3 px-3 py-1 shadow-[0px_12px_32px_rgba(47,46,190,0.3)] hover:scale-105 transition-transform duration-300`}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
