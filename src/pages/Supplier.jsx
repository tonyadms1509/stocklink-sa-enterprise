import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function Supplier() {
  const data = {
    labels: ["Cement", "Steel Rods", "Bricks", "Tiles"],
    datasets: [
      {
        label: "Stock Levels",
        data: [120, 300, 450, 200],
        backgroundColor: ["#203a43", "#d32f2f", "#4caf50", "#ff9800"],
      },
    ],
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Supplier Dashboard</h2>
      <table border="1" style={{ margin: "20px auto" }}>
        <thead>
          <tr><th>Item</th><th>Stock</th><th>Reorder Level</th></tr>
        </thead>
        <tbody>
          <tr><td>Cement</td><td>120 bags</td><td>50</td></tr>
          <tr><td>Steel Rods</td><td>300 units</td><td>100</td></tr>
        </tbody>
      </table>
      <Bar data={data} />
    </div>
  );
}
