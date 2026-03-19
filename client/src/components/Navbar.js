import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
        background: "#a855f7",
        color: "black"
      }}
    >
      <h2>FoodieHub</h2>

      <div style={{ display: "flex", gap: "20px" }}>

        <Link
          to="/"
          style={{ color: "black", textDecoration: "none" }}
        >
          Home
        </Link>

        <Link
          to="/orders"
          style={{ color: "black", textDecoration: "none" }}
        >
          Orders
        </Link>

        <Link
          to="/cart"
          style={{ color: "black", textDecoration: "none" }}
        >
          Cart ({cartCount})
        </Link>

      </div>
    </div>
  );
}

export default Navbar;