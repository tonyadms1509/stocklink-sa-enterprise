import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function Admin() {
  const data = {
    labels: ["Contractor", "Supplier", "Logistics", "Admin"],
    datasets: [
      {
        label: "User Roles",
        data: [10, 5, 3, 2],
        backgroundColor: ["#203a43", "#d32f2f", "#4caf50", "#ff9800"],
      },
    ],
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Admin Dashboard</h2>
      <table border="1" style={{ margin: "20px auto" }}>
        <thead>
          <tr><th>User</th><th>Role</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr><td>Alice</td><td>Contractor</td><td>Active</td></tr>
          <tr><td>Bob</td><td>Supplier</td><td>Pending</td></tr>
        </tbody>
      </table>
      <Pie data={data} />
    </div>
  );
}
