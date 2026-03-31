import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://adiwffecdtcjodxlmvjz.supabase.co",
  "your-public-anon-key"
);

export default function OnboardingStatusCards({ showPendingOnly }) {
  const [roleStats, setRoleStats] = useState([]);

  useEffect(() => {
    async function fetchIntroStats() {
      const { data, error } = await supabase
        .from("user_intro_status")
        .select("role, has_heard_intro");

      if (error) {
        console.error("Error fetching intro status:", error);
        return;
      }

      // Group by role
      const grouped = {};
      data.forEach(({ role, has_heard_intro }) => {
        if (!grouped[role]) {
          grouped[role] = { heard: 0, notHeard: 0 };
        }
        if (has_heard_intro) {
          grouped[role].heard += 1;
        } else {
          grouped[role].notHeard += 1;
        }
      });

      const formatted = Object.entries(grouped).map(([role, counts]) => ({
        role,
        heard_intro: counts.heard,
        not_heard_intro: counts.notHeard,
      }));

      setRoleStats(formatted);
    }

    fetchIntroStats();
  }, []);

  // 🔧 Export function
  const exportCSV = () => {
    const headers = ["Role,Heard Intro,Not Heard Intro"];
    const rows = roleStats.map(
      (r) => `${r.role},${r.heard_intro},${r.not_heard_intro}`
    );
    const csvContent = [headers, ...rows].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `onboarding_status_${new Date().toISOString().slice(0,10)}.csv`);
    link.click();
  };

  return (
    <div className="p-6">
      {/* Export button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={exportCSV}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Export CSV
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roleStats
          .filter((role) =>
            showPendingOnly ? role.not_heard_intro > 0 : true
          )
          .map((role) => (
            <div
              key={role.role}
              className="bg-carbon rounded-lg p-6 border border-glow-red shadow-md text-white"
            >
              <h3 className="text-xl font-bold text-glow-red mb-2">
                {role.role}
              </h3>
              <p className="text-green-400">
                ✅ Heard Intro: {role.heard_intro}
              </p>
              <p className="text-yellow-400">
                🕒 Not Heard: {role.not_heard_intro}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
