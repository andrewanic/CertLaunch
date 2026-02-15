import missionData from "@/data/mission-control.json";

const priorityColors: Record<string, string> = {
  critical: "bg-red-500",
  high: "bg-orange-500",
  medium: "bg-yellow-500",
  low: "bg-gray-500",
};

const statusLabels: Record<string, string> = {
  completed: "Completed",
  progress: "In Progress",
  waiting: "Waiting",
  queued: "Queued",
};

export default function MissionControlPage() {
  const { agents, tasks, stats } = missionData;
  const agentMap = Object.fromEntries(agents.map((a) => [a.id, a]));
  const luka = agents[0];
  const teamAgents = agents.slice(1);

  const columns = [
    { key: "completed", label: "Completed", accent: "#10b981" },
    { key: "progress", label: "In Progress", accent: "#3b82f6" },
    { key: "waiting", label: "Waiting", accent: "#f59e0b" },
    { key: "queued", label: "Queued", accent: "#6b7280" },
  ];

  const statCards = [
    { label: "Total Tasks", value: tasks.length, border: "#38b2ac" },
    { label: "Completed", value: stats.completed, border: "#10b981" },
    { label: "In Progress", value: stats.inProgress, border: "#3b82f6" },
    { label: "Queued", value: stats.queued, border: "#6b7280" },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6 md:p-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          🚀 CertLaunch <span className="text-[#38b2ac]">Mission Control</span>
        </h1>
        <p className="text-gray-400 mt-2 text-lg">AI-Powered Business Operations</p>
        <p className="text-gray-600 text-sm mt-1">
          Last updated: {new Date(missionData.lastUpdated).toLocaleString()}
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {statCards.map((s) => (
          <div
            key={s.label}
            className="bg-[#1e293b] rounded-xl p-5 text-center border-t-4"
            style={{ borderColor: s.border }}
          >
            <div className="text-3xl font-bold">{s.value}</div>
            <div className="text-gray-400 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Agent Org Chart */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#38b2ac]">
          Agent Organization
        </h2>

        {/* Luka - CEO */}
        <div className="flex justify-center mb-2">
          <div
            className="bg-[#1e293b] rounded-xl p-6 text-center w-72 border-2"
            style={{
              borderImage: "linear-gradient(135deg, #d69e2e, #3182ce) 1",
            }}
          >
            <div className="text-4xl mb-2">{luka.emoji}</div>
            <div className="text-xl font-bold">{luka.name}</div>
            <div className="text-[#38b2ac] text-sm font-medium">{luka.role}</div>
            <div className="text-gray-500 text-xs mt-1">{luka.model}</div>
          </div>
        </div>

        {/* Connector line */}
        <div className="flex justify-center mb-2">
          <div className="w-px h-8 bg-gray-600" />
        </div>
        <div className="hidden md:flex justify-center mb-2">
          <div className="h-px bg-gray-600" style={{ width: "70%" }} />
        </div>
        <div className="hidden md:flex justify-between mx-auto mb-2" style={{ width: "70%" }}>
          {teamAgents.map((a) => (
            <div key={a.id} className="flex justify-center flex-1">
              <div className="w-px h-6 bg-gray-600" />
            </div>
          ))}
        </div>

        {/* Team Agents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {teamAgents.map((a) => (
            <div
              key={a.id}
              className="bg-[#1e293b] rounded-xl p-4 border-l-4"
              style={{ borderColor: a.color }}
            >
              <div className="text-2xl mb-1">{a.emoji}</div>
              <div className="font-bold text-sm">{a.name}</div>
              <div className="text-xs font-medium" style={{ color: a.color }}>
                {a.role}
              </div>
              <div className="text-gray-500 text-xs mb-2">{a.model}</div>
              <ul className="text-gray-400 text-xs space-y-0.5">
                {a.responsibilities.map((r) => (
                  <li key={r}>• {r}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Task Board */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#38b2ac]">
          Task Board
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {columns.map((col) => {
            const colTasks = tasks.filter((t) => t.status === col.key);
            return (
              <div key={col.key} className="bg-[#1e293b]/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: col.accent }}
                  />
                  <h3 className="font-semibold text-sm">{col.label}</h3>
                  <span className="text-gray-500 text-xs ml-auto">
                    {colTasks.length}
                  </span>
                </div>
                <div className="space-y-3">
                  {colTasks.map((t) => {
                    const agent = agentMap[t.agent];
                    return (
                      <div
                        key={t.id}
                        className="bg-[#1e293b] rounded-lg p-3 border-l-4"
                        style={{ borderColor: agent?.color || "#6b7280" }}
                      >
                        <div className="font-medium text-sm mb-2">{t.title}</div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-xs">
                            {agent?.emoji} {agent?.name}
                          </span>
                          <span
                            className={`${priorityColors[t.priority]} text-xs px-2 py-0.5 rounded-full font-medium`}
                          >
                            {t.priority}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                  {colTasks.length === 0 && (
                    <p className="text-gray-600 text-xs text-center py-4">
                      No tasks
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="text-center text-gray-600 text-xs mt-12">
        CertLaunch Mission Control • {agents.length} Agents • {tasks.length} Tasks
      </footer>
    </div>
  );
}
