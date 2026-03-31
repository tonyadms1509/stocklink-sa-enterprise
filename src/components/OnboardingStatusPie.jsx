import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const supabase = createClient(
  "https://adiwffecdtcjodxlmvjz.supabase.co",
  "your-public-anon-key"
);

const COLORS = ["#4ade80", "#facc15"];

export default function OnboardingStatusPie() {
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("user_intro_status")
        .select("has_heard_intro");

      if (error) {
        console.error("Error fetching pie data:", error);
        return;
      }

      if (!data || data.length === 0) {
        // 👇 Mock data fallback
        setPieData([
          { name: "Heard Intro", value: 14 },
          { name: "Not Heard Intro", value: 7 },
        ]);
        return;
      }

      let heard = 0;
      let notHeard = 0;
      data.forEach(({ has_heard_intro }) => {
        if (has_heard_intro) heard++;
        else notHeard++;
      });

      setPieData([
        { name: "Heard Intro", value: heard },
        { name: "Not Heard Intro", value: notHeard },
      ]);
    }

    fetchData();
  }, []);

  // 👇 CSV Export
  const exportCSV = () => {
    const headers = ["Status", "Count"];
    const rows = pieData.map((r) => `${r.name},${r.value}`);
    const csvContent = [headers.join(","), ...rows].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "onboarding_pie.csv");
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
          Export Pie CSV
        </button>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
