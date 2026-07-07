import {
  CheckCircleIcon,
  ClockIcon,
  Share2Icon,
  TrendingUpIcon,
} from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [stats, setStats] = useState({
    scheduled: 0,
    published: 0,
    connectedAccounts: 0,
  });
  const [activities, setActivities] = useState<any[]>([]);

  const statCards = [
    {
      label: "Scheduled Posts",
      value: stats.scheduled,
      icon: ClockIcon,
      trend: " +2 today",
    },
    {
      label: "Published Posts",
      value: stats.published,
      icon: CheckCircleIcon,
      trend: " All time",
    },
    {
      label: "Connected Accounts",
      value: stats.connectedAccounts,
      icon: Share2Icon,
      trend: "Active",
    },
  ];
  return (
    <div className="space-y-8">
      {/* Welcome Bar*/}
      <div>
        <h2 className="text-2xl text-slate-900">Good Morning! 👋</h2>
        <p className="text-slate-500 text-sm mt-0.5">
          Here's what's happening with your social accounts today.
        </p>
      </div>

      {/* Stat cards*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {statCards.map((card) => (
          <div
            key={card.label}
            className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-red-200 hover:bg-red-50 transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-medium text-slate-800 tabular-nums">
                  {card.value}
                </div>
                <p className="text-sm text-slate-500">{card.label}</p>
              </div>

              <card.icon className="size-8 text-red-500" />
            </div>

            <div className="mt-4 flex items-center gap-1 text-xs text-red-500">
              <TrendingUpIcon className="size-3" />
              {card.trend}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
