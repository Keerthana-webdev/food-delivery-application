import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cart, total, setCart }) {

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleOrder = async () => {

    if (!phone || !address) {
      alert("Please enter phone number and address");
      return;
    }

    const order = {
      cartItems: cart,
      totalAmount: total,
      address,
      phone
    };

    try {

      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
      });

      const data = await res.json();

      if (res.ok) {

        // Clear cart after order
        setCart([]);

        // Go to success page
        navigate("/success");

      } else {
        alert(data.message || "Order failed");
      }

    } catch (error) {
      console.error(error);
      alert("Failed to place order");
    }

  };

  return (
    <div style={{ padding: "30px", maxWidth: "600px", margin: "auto" }}>

      <h2>Delivery Details</h2>

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{
          display: "block",
          color:"black",
          marginBottom: "15px",
          padding: "10px",
          width: "100%"
        }}
      />

      <textarea
        placeholder="Enter Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{
          display: "block",
          color:"black",
          marginBottom: "15px",
          padding: "10px",
          width: "100%"
        }}
      />

      <button
        onClick={handleOrder}
        style={{
          padding: "12px 20px",
          background: "#a855f7",
          color: "black",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Place Order
      </button>

    </div>
  );
}

export default Checkout;