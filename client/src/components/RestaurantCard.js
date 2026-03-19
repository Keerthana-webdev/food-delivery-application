import React from "react";
function RestaurantCard({ name, image, rating, time, price, addToCart }) {

  const cardStyle = {
    background: "white",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    transition: "0.3s",
    margin: "10px",
    cursor: "pointer"
  };

  const imageStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover"
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.1)";
      }}
    >
      <img src={image} alt={name} style={imageStyle} />

      <div style={{ padding: "15px" }}>
        <h3 style={{ color: "black", fontWeight: "bold" }}>{name}</h3>

        <p style={{ margin: "5px 0", color: "green" }}>
          ⭐ {rating}
        </p>

        <p style={{ margin: "5px 0", color: "black" }}>
          ⏱ {time}
        </p>

        <p style={{ margin: "5px 0", color: "black" }}>
          {price}
        </p>

        <button
          onClick={() => addToCart(name, price)}
          style={{
            marginTop: "10px",
            padding: "10px 14px",
            background: "#a855f7",
            color: "black",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default RestaurantCard;