const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Supplier Metrics",
      data: [12, 19, 3, 5, 2],
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
    },
  ],
};

export default function SupplierProfile() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Supplier Profile</h2>
      <Line data={data} />
    </div>
  );
}
