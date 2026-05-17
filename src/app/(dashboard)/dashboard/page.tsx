import StatCard from "@/components/dashboard/StatCard";

export default function DashboardPage() {
  return (
    <div className="space-y-6 p-5">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Alex</h1>
          <p className="text-slate-500">
            Here&apos;s what&apos;s happening in your workspace today.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 border rounded-lg text-sm">
            + New Project
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
            + New Task
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard title="Tasks Completed" value="24" extra="+12%" />
        <StatCard title="Active Projects" value="08" extra="Stable" />
        <StatCard title="Time Saved" value="14.5h" extra="+3.2h" />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          {/* Active Projects */}
          <div className="bg-white p-5 rounded-xl border">
            <h2 className="font-semibold mb-4">Active Projects</h2>

            <div className="space-y-3">
              <div>
                <p>Alpha Enterprise Rebrand</p>
                <div className="h-2 bg-slate-200 rounded">
                  <div className="h-2 bg-blue-600 w-[75%] rounded"></div>
                </div>
              </div>

              <div>
                <p>API Documentation Audit</p>
                <div className="h-2 bg-slate-200 rounded">
                  <div className="h-2 bg-green-500 w-[32%] rounded"></div>
                </div>
              </div>

              <div>
                <p>Q3 Marketing Campaign</p>
                <div className="h-2 bg-slate-200 rounded">
                  <div className="h-2 bg-orange-500 w-[90%] rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Tasks */}
          <div className="bg-white p-5 rounded-xl border">
            <h2 className="font-semibold mb-4">Recent Tasks</h2>

            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span>Update landing page assets</span>
                <span className="text-red-500">HIGH</span>
              </li>
              <li className="flex justify-between">
                <span>Draft internal memo for Q4</span>
                <span className="text-blue-500">MED</span>
              </li>
              <li className="flex justify-between line-through text-slate-400">
                <span>Review competitor dashboard UI</span>
                <span className="text-green-500">DONE</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-xl border">
            <h2 className="font-semibold mb-4">Upcoming Deadlines</h2>

            <ul className="space-y-3 text-sm">
              <li>Final Design Handoff</li>
              <li>Sprint Retrospective</li>
              <li>Brand Guidelines Final</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl border">
            <h2 className="font-semibold mb-4">Team Activity</h2>

            <ul className="space-y-3 text-sm">
              <li>Sarah uploaded 4 files</li>
              <li>Marcus completed API module</li>
              <li>Elena invited you to project</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}