// /api/hello.js
console.log("Hello function file loaded");

export default async function handler(req, res) {
  try {
    return res.status(200).json({ message: "Hello from StockLink backend!" });
  } catch (err) {
    console.error("Error in /api/hello:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
