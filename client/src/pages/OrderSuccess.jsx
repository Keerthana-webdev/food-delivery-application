import React from "react";
import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🎉 Order Placed Successfully!</h1>
      <p>Your food will arrive soon.</p>

      <Link to="/">
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#a855f7",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Back to Home
        </button>
      </Link>
    </div>
  );
}

export default OrderSuccess;