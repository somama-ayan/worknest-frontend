// app/profile/page.tsx

import {
//   FiMapPin,
  FiClock,
  FiMail,
  FiLink,
  FiShield,
  FiEdit2,
} from "react-icons/fi";

import {
  HiOutlineCheckCircle,
  HiOutlineShieldExclamation,
} from "react-icons/hi";

import { GoGitMerge } from "react-icons/go";

export default function Profile() {
  return (
    <main className="min-h-screen bg-[#f5f6fb] px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <section className="mb-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          {/* Left */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            {/* Avatar */}
            <div className="relative h-28 w-28 overflow-hidden rounded-2xl bg-[#1e1b16] shadow-sm">
              <div className="flex h-full w-full items-center justify-center text-5xl">
                👨
              </div>

              {/* Online dot */}
              <div className="absolute bottom-2 right-2 h-5 w-5 rounded-full border-4 border-white bg-green-500" />
            </div>

            {/* Info */}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-semibold text-[#121826]">
                  Alex Rivers
                </h1>

                <span className="rounded-md bg-[#ecebff] px-2 py-1 text-xs font-semibold text-[#4f46e5]">
                  PRO
                </span>
              </div>

              <p className="mt-1 text-lg text-gray-500">
                Product Designer
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <FiLink className="h-5 w-5 text-[#4338ff]" />
                  <span>San Francisco, CA</span>
                </div>

                <div className="flex items-center gap-2">
                  <FiClock className="h-4 w-4" />
                  <span>Local time 14:42</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-[#111827] shadow-sm transition hover:bg-gray-50">
              <FiMail className="h-5 w-5 text-[#4338ff]" />
              Edit Profile
            </button>

            <button className="flex items-center gap-2 rounded-xl bg-[#4338ff] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#3730d9]">
              <FiShield className="h-4 w-4" />
              Account Status
            </button>
          </div>
        </section>

        {/* Top Cards */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {/* Card 1 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
              Recent Commits
            </p>

            <div className="mt-5 flex items-end gap-2">
              <h2 className="text-4xl font-bold text-[#4338ff]">124</h2>
              <span className="mb-1 text-sm font-medium text-green-500">
                +12%
              </span>
            </div>

            <div className="mt-16 h-1.5 w-full rounded-full bg-gray-100">
              <div className="h-1.5 w-3/4 rounded-full bg-[#4338ff]" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
              Completed Tasks
            </p>

            <div className="mt-5 flex items-end gap-2">
              <h2 className="text-4xl font-bold text-[#121826]">48</h2>
              <span className="mb-1 text-sm font-medium text-gray-400">
                of 56
              </span>
            </div>

            <div className="mt-16 h-1.5 w-full rounded-full bg-gray-100">
              <div className="h-1.5 w-4/5 rounded-full bg-green-500" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
              Team Velocity
            </p>

            <div className="mt-5">
              <h2 className="text-4xl font-bold text-[#121826]">94%</h2>
            </div>

            <div className="mt-16 h-1.5 w-full rounded-full bg-gray-100">
              <div className="h-1.5 w-[88%] rounded-full bg-[#7c83ff]" />
            </div>
          </div>

          {/* Biography */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#121826]">
              Biography
            </h3>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              Multidisciplinary designer specializing in systemic UI patterns
              and scalable workspace environments. Passionate about minimalism,
              architectural rhythm, and digital interactions.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Product Design", "Figma", "UI Systems", "Tailwind CSS"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#f3f4f6] px-3 py-1 text-xs font-medium text-gray-600"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-[320px_1fr]">
          {/* Connect */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#121826]">
              Connect
            </h3>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eef2ff]">
                  <FiEdit2 className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase text-gray-400">
                    Email
                  </p>
                  <p className="text-sm font-medium text-[#121826]">
                    arivers@worknest.ai
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eef2ff]">
                  <HiOutlineCheckCircle className="h-5 w-5 text-green-600" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase text-gray-400">
                    Portfolio
                  </p>
                  <p className="text-sm font-medium text-[#121826]">
                    rivers.design
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex flex-col gap-3 border-b border-gray-100 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#121826]">
                Recent Activity
              </h3>

              <button className="text-sm font-medium text-[#4338ff] hover:underline">
                View All History
              </button>
            </div>

            <div className="divide-y divide-gray-100">
              {/* Item */}
              <ActivityItem
                icon={
                  <GoGitMerge className="h-5 w-5 text-[#4338ff]" />
                }
                title="Completed Task: System Icons Refresh"
                subtitle="Core Design System Project"
                time="2h ago"
                bg="bg-green-50"
              />

              <ActivityItem
                icon={<GoGitMerge className="h-5 w-5 text-[#4338ff]" />}
                title="Merged Commit: Feature/Dark-Mode-Fixes"
                subtitle="Main Repository"
                time="5h ago"
                bg="bg-indigo-50"
              />

              <ActivityItem
                icon={<HiOutlineShieldExclamation className="h-5 w-5 text-amber-600" />}
                title="Account Login: New Device Detected"
                subtitle="Chrome on macOS Monterey"
                time="Yesterday"
                bg="bg-amber-50"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

type ActivityItemProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  time: string;
  bg: string;
};

function ActivityItem({
  icon,
  title,
  subtitle,
  time,
  bg,
}: ActivityItemProps) {
  return (
    <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-4">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${bg}`}
        >
          {icon}
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[#121826]">
            {title}
          </h4>

          <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>

      <span className="text-sm text-gray-400">{time}</span>
    </div>
  );
}