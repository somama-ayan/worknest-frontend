/* =========================
   BOARD VIEW
========================= */
import {
//   FiSearch,
//   FiBell,
//   FiHelpCircle,
//   FiSettings,
//   FiGrid,
//   FiList,
//   FiFolder,
  FiPlus,
  FiMoreHorizontal,
  FiCalendar,
  FiCheckCircle,
} from "react-icons/fi";

type TaskCardProps = {
  priority: string;
  priorityColor: string;
  title: string;
  date?: string;
  overdue?: boolean;
  completed?: boolean;
};
export default function BoardView() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-4">
      {/* Column */}
      <BoardColumn title="To Do" count={4}>
        <TaskCard
          priority="High"
          priorityColor="bg-orange-100 text-orange-700"
          title="Finalize brand color palette for accessibility"
          date="Oct 24"
        />

        <TaskCard
          priority="Medium"
          priorityColor="bg-gray-200 text-gray-700"
          title="Competitive analysis on logo typography"
          date="Oct 26"
        />
      </BoardColumn>

      {/* Column */}
      <BoardColumn title="In Progress" count={2}>
        <TaskCard
          priority="High"
          priorityColor="bg-orange-100 text-orange-700"
          title="Alpha brand guideline documentation draft"
          overdue
        />
      </BoardColumn>

      {/* Column */}
      <BoardColumn title="In Review" count={1}>
        <TaskCard
          priority="Low"
          priorityColor="bg-blue-100 text-blue-700"
          title="Stakeholder feedback on initial logo concepts"
          date="Oct 28"
        />
      </BoardColumn>

      {/* Column */}
      <BoardColumn title="Done" count={8}>
        <TaskCard
          priority="Completed"
          priorityColor="bg-gray-200 text-gray-600"
          title="Establish project timeline and milestones"
          date="Oct 15"
          completed
        />
      </BoardColumn>
    </div>
  );
}


/* =========================
   Board Column
========================= */

function BoardColumn({
  title,
  count,
  children,
}: {
  title: string;
  count: number;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-[#eef2fb] p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">{title}</h3>

          <span className="flex h-6 min-w-[24px] items-center justify-center rounded-full bg-[#dbe3f3] px-2 text-xs font-semibold text-gray-600">
            {count}
          </span>
        </div>

        <button className="text-xl text-gray-500">
          <FiPlus />
        </button>
      </div>

      <div className="space-y-4">{children}</div>
    </div>
  );
}


/* =========================
   Task Card
========================= */

function TaskCard({
  priority,
  priorityColor,
  title,
  date,
  overdue,
  completed,
}: TaskCardProps) {
  return (
    <div className="rounded-2xl border border-[#dce3f0] bg-white p-4 shadow-sm transition hover:shadow-md">
      {/* Top */}
      <div className="flex items-start justify-between">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityColor}`}
        >
          {priority}
        </span>

        {completed ? (
          <FiCheckCircle className="text-lg text-gray-400" />
        ) : (
          <FiMoreHorizontal className="text-lg text-gray-400" />
        )}
      </div>

      {/* Title */}
      <h4
        className={`mt-5 text-[15px] font-semibold leading-6 ${
          completed ? "text-gray-400 line-through" : "text-[#0f172a]"
        }`}
      >
        {title}
      </h4>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">
        {/* Avatars */}
        <div className="flex -space-x-2">
          <img
            src="https://i.pravatar.cc/100?img=1"
            alt=""
            className="h-7 w-7 rounded-full border-2 border-white object-cover"
          />

          {!completed && (
            <img
              src="https://i.pravatar.cc/100?img=2"
              alt=""
              className="h-7 w-7 rounded-full border-2 border-white object-cover"
            />
          )}
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-sm">
          {overdue ? (
            <span className="font-semibold text-red-500">⚠ Overdue</span>
          ) : (
            <>
              <FiCalendar className="text-gray-400" />

              <span className="text-gray-400">{date}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}