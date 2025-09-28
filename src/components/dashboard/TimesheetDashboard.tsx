import { SummaryCard } from "./SummaryCard";
import { DailyCard } from "./DailyCard";

// Mock data for demonstration
const summaryData = [
  {
    title: "Current Week",
    hours: 42,
    subtitle: "+5h from last week",
    trend: "up" as const
  },
  {
    title: "Previous Week", 
    hours: 37,
    subtitle: "-3h from avg",
    trend: "down" as const
  },
  {
    title: "This Month",
    hours: 168,
    subtitle: "2h ahead of target",
    trend: "up" as const
  }
];

const dailyData = [
  {
    day: "Monday",
    date: "Dec 23",
    totalHours: 8,
    projects: [
      { name: "Project Alpha", hours: 5, color: "#3B82F6" },
      { name: "Project Beta", hours: 3, color: "#8B5CF6" }
    ]
  },
  {
    day: "Tuesday", 
    date: "Dec 24",
    totalHours: 6,
    projects: [
      { name: "Project Alpha", hours: 4, color: "#3B82F6" },
      { name: "Admin Tasks", hours: 2, color: "#10B981" }
    ]
  },
  {
    day: "Wednesday",
    date: "Dec 25", 
    totalHours: 0,
    projects: [],
    isToday: true
  },
  {
    day: "Thursday",
    date: "Dec 26",
    totalHours: 8,
    projects: [
      { name: "Project Beta", hours: 6, color: "#8B5CF6" },
      { name: "Meetings", hours: 2, color: "#F59E0B" }
    ]
  },
  {
    day: "Friday",
    date: "Dec 27", 
    totalHours: 7,
    projects: [
      { name: "Project Alpha", hours: 4, color: "#3B82F6" },
      { name: "Project Gamma", hours: 3, color: "#EF4444" }
    ]
  },
  {
    day: "Saturday",
    date: "Dec 28",
    totalHours: 4,
    projects: [
      { name: "Project Gamma", hours: 4, color: "#EF4444" }
    ]
  },
  {
    day: "Sunday", 
    date: "Dec 29",
    totalHours: 0,
    projects: []
  }
];

export function TimesheetDashboard() {
  return (
    <div className="min-h-screen p-6 relative z-10">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground font-display">
            Timesheet Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Track your hours with Apple-inspired elegance
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          {summaryData.map((item, index) => (
            <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
              <SummaryCard {...item} />
            </div>
          ))}
        </div>

        {/* Daily Cards */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-2xl font-semibold text-foreground font-display">
              This Week
            </h2>
            <div className="flex items-center gap-4">
              {/* Week Pagination */}
              <div className="flex items-center gap-2">
                <button className="glass-card p-2 rounded-lg hover:bg-white/10 transition-all duration-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="text-sm text-muted-foreground min-w-[120px] text-center">
                  Dec 23 - Dec 29
                </span>
                <button className="glass-card p-2 rounded-lg hover:bg-white/10 transition-all duration-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              {/* Submit Button */}
              <button className="glass-card px-6 py-2 rounded-lg bg-gradient-to-r from-primary/20 to-primary-glow/20 border border-primary/30 hover:from-primary/30 hover:to-primary-glow/30 hover:border-primary/50 transition-all duration-200 text-sm font-medium">
                Submit Week
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 animate-fade-in">
            {dailyData.map((day, index) => (
              <div key={day.day} style={{ animationDelay: `${index * 50}ms` }}>
                <DailyCard {...day} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}