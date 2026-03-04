// /api/dashboard.js
console.log("Dashboard function file loaded");

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      return res.status(200).json({
        users: 150,
        activePromoters: 12,
        totalPayouts: 20000,
      });
    } catch (err) {
      console.error("Error in /api/dashboard:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  res.status(405).json({ error: "Method not allowed" });
}
