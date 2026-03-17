import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["On Time", "Delayed", "Cancelled"],
  datasets: [
    {
      label: "Delivery Status",
      data: [65, 20, 15],
      backgroundColor: [
        "rgba(75, 192, 192, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(255, 99, 132, 0.6)",
      ],
    },
  ],
};

export default function Driver() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Driver Dashboard</h2>
      <Doughnut data={data} />
    </div>
  );
}
