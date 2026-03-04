import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  // Diagnostic logging
  console.log("SUPABASE_URL:", process.env.SUPABASE_URL);
  console.log("SUPABASE_KEY:", process.env.SUPABASE_KEY ? "Loaded" : "Missing");

  // Initialize Supabase client
  const supabase = createClient(
    process.env.SUPABASE_URL || "",
    process.env.SUPABASE_KEY || ""
  );

  if (req.method === "POST") {
    try {
      // Ensure body is parsed
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      const { email, password } = body || {};

      console.log("Auth attempt:", email);

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Supabase auth error:", error.message);
        return res.status(400).json({ error: error.message });
      }

      return res.status(200).json({ user: data.user, session: data.session });
    } catch (err) {
      console.error("Unexpected error in /api/auth:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  res.status(405).json({ error: "Method not allowed" });
}
