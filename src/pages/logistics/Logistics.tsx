import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ["Route A", "Route B", "Route C", "Route D"],
  datasets: [
    {
      label: "Deliveries Completed",
      data: [12, 19, 7, 14],
      backgroundColor: "rgba(54, 162, 235, 0.6)",
    },
  ],
};

export default function Logistics() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Logistics Dashboard</h2>
      <Bar data={data} />
    </div>
  );
}
