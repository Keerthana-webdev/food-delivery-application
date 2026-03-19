import React from "react";
import { useNavigate } from "react-router-dom";

function CartPage({ cart, increaseItem, decreaseItem }) {

  const navigate = useNavigate();

  const getPriceNumber = (price) => {
    return Number(price.replace(/[^0-9]/g, ""));
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + getPriceNumber(item.price) * item.quantity;
  }, 0);

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "800px",
        margin: "auto"
      }}
    >

      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div>

          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
                background: "white",
                color: "black",
                padding: "15px",
                borderRadius: "10px"
              }}
            >

              <div style={{ color: "black" }}>
                <h3 style={{ color: "black" }}>{item.name}</h3>

                <p style={{ color: "black" }}>
                  ₹{getPriceNumber(item.price)} × {item.quantity}
                </p>
              </div>

              <div>

                <button
                  onClick={() => decreaseItem(item.name)}
                  style={{
                    padding: "6px 12px",
                    marginRight: "10px",
                    background: "#a855f7",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                  }}
                >
                  −
                </button>

                <span style={{ color: "black", fontWeight: "bold" }}>
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseItem(item.name)}
                  style={{
                    padding: "6px 12px",
                    marginLeft: "10px",
                    background: "#a855f7",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                  }}
                >
                  +
                </button>

              </div>

            </div>
          ))}

          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              background: "#111",
              borderRadius: "10px"
            }}
          >

            <h2 style={{ color: "white" }}>
              Total: ₹{totalPrice}
            </h2>

            <button
              onClick={() => navigate("/checkout")}
              style={{
                marginTop: "15px",
                padding: "12px 20px",
                background: "#a855f7",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              Checkout
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default CartPage;