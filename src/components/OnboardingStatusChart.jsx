import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const supabase = createClient(
  "https://adiwffecdtcjodxlmvjz.supabase.co",
  "your-public-anon-key"
);

export default function OnboardingStatusChart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("user_intro_status")
        .select("role, has_heard_intro");

      if (error) {
        console.error("Error fetching chart data:", error);
        return;
      }

      if (!data || data.length === 0) {
        // 👇 Mock data fallback
        setChartData([
          { role: "Admin", heard: 5, notHeard: 2 },
          { role: "Foreman", heard: 3, notHeard: 4 },
          { role: "Contractor", heard: 6, notHeard: 1 },
        ]);
        return;
      }

      const grouped = {};
      data.forEach(({ role, has_heard_intro }) => {
        if (!grouped[role]) grouped[role] = { heard: 0, notHeard: 0 };
        if (has_heard_intro) grouped[role].heard += 1;
        else grouped[role].notHeard += 1;
      });

      const formatted = Object.entries(grouped).map(([role, counts]) => ({
        role,
        heard: counts.heard,
        notHeard: counts.notHeard,
      }));

      setChartData(formatted);
    }

    fetchData();
  }, []);

  // 👇 CSV Export
  const exportCSV = () => {
    const headers = ["Role", "Heard Intro", "Not Heard Intro"];
    const rows = chartData.map((r) => `${r.role},${r.heard},${r.notHeard}`);
    const csvContent = [headers.join(","), ...rows].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "onboarding_chart.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button
          onClick={exportCSV}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Export Chart CSV
        </button>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="role" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="heard" fill="#4ade80" />
          <Bar dataKey="notHeard" fill="#facc15" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
