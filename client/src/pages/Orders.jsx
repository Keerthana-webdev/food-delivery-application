import React, { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Orders</h2>

      {orders.map((order, index) => (
        <div key={index} style={{border:"1px solid gray", margin:"10px", padding:"10px"}}>
          
          <p><b>Phone:</b> {order.phone}</p>
          <p><b>Address:</b> {order.address}</p>

          <p><b>Items:</b></p>

          {order.cartItems.map((item, i) => (
            <p key={i}>
              {item.name} × {item.quantity}
            </p>
          ))}

        </div>
      ))}
    </div>
  );
}

export default Orders;