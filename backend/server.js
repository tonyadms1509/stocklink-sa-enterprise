// server.js
import express from "express";
import { createClient } from "@supabase/supabase-js";

const app = express();
app.use(express.json()); // built-in JSON parser

// 🔑 Replace with your actual Supabase project URL and service role key
const supabase = createClient(
  "https://YOUR_PROJECT.supabase.co",
  "YOUR_SERVICE_ROLE_KEY"
);

// ✅ Root route for health check
app.get("/", (req, res) => {
  res.send("Server is alive!");
});

// ✅ Voucher redemption route
app.post("/api/redeem-voucher", async (req, res) => {
  const { voucher } = req.body;

  try {
    // Check voucher exists and is unused
    const { data, error } = await supabase
      .from("vouchers")
      .select("*")
      .eq("code", voucher)
      .eq("status", "unused")
      .single();

    if (error || !data) {
      return res.status(400).json({ success: false, message: "Invalid voucher" });
    }

    // Mark voucher as used
    await supabase
      .from("vouchers")
      .update({ status: "used", redeemed_at: new Date() })
      .eq("id", data.id);

    // Activate contractor subscription
    await supabase
      .from("contractors")
      .update({ subscription_status: "active", payment_source: "voucher" })
      .eq("contractor_id", data.contractor_id);

    return res.json({ success: true, message: "Subscription activated!" });
  } catch (err) {
    console.error("Error redeeming voucher:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ Start server
app.listen(3000, () => {
  console.log("Voucher API running on http://localhost:3000");
});
