import Sidebar from "@/components/dashboard/Sidebar";
import DashboardNavbar from "@/components/navbar/DashboardNavbar";
// import type { Metadata } from "next";
import "../globals.css";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex-1 flex flex-col">
        
        {/* Top Navbar */}
        <DashboardNavbar />

        {/* Page Content */}
        <main className="p-6 flex-1">
          {children}
        </main>

      </div>
    </div>
  );
}