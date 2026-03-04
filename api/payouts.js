// /api/payouts.js
console.log("Payouts function file loaded");

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      return res.status(200).json({
        payouts: [
          { promoter: "John", amount: 1200, status: "confirmed" },
          { promoter: "Lisa", amount: 800, status: "pending" },
        ],
      });
    } catch (err) {
      console.error("Error in /api/payouts:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  res.status(405).json({ error: "Method not allowed" });
}

