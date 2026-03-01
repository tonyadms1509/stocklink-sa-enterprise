import React, { useEffect } from "react"

export default function PayPalTest() {
  useEffect(() => {
    if (window.paypal) {
      window.paypal.Buttons({
        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{
              amount: { value: "5.00" }, // $5 test payment
              custom_id: "test-user-id" // replace with Supabase user id
            }]
          })
        },
        onApprove: function(data, actions) {
          return actions.order.capture().then(function(details) {
            console.log("Payment success:", details)
            alert("PayPal test payment completed!")
          })
        },
        onError: function(err) {
          console.error("PayPal error:", err)
          alert("Payment failed in sandbox")
        }
      }).render("#paypal-button-container")
    }
  }, [])

  return (
    <div style={{ padding: "2rem" }}>
      <h2>PayPal Sandbox Test</h2>
      <div id="paypal-button-container"></div>
    </div>
  )
}

