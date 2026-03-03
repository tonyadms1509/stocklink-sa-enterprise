// api/dashboard.js
export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({
      users: 150,
      activePromoters: 12,
      totalPayouts: 20000,
    });
  }

  res.status(405).json({ error: "Method not allowed" });
}
