import React from "react"
import PaystackTest from "./PaystackTest"
import PayPalTest from "./PayPalTest"

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>StockLink Ferrari Sandbox</h1>
      <p>Simulate payments below to test your webhook flow.</p>
      <PaystackTest />
      <hr style={{ margin: "2rem 0" }} />
      <PayPalTest />
    </div>
  )
}

export default App
