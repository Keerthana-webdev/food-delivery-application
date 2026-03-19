const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

/* MongoDB Connection */

mongoose.connect("mongodb://127.0.0.1:27017/fooddelivery");

mongoose.connection.once("open", () => {
  console.log("MongoDB connected");
});

mongoose.connection.on("error", (err) => {
  console.log("MongoDB connection error:", err);
});

/* Order Schema */

const orderSchema = new mongoose.Schema({
  cartItems: Array,
  address: String,
  phone: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model("Order", orderSchema);

/* Routes */

app.get("/", (req, res) => {
  res.send("Food Delivery Backend Running");
});

/* Place Order */

app.post("/api/orders", async (req, res) => {
  try {

    const order = new Order(req.body);

    await order.save();

    console.log("Order saved to DB");

    res.json({
      message: "Order placed successfully"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Error saving order"
    });

  }
});

/* Get All Orders */

app.get("/api/orders", async (req, res) => {
  try {

    const orders = await Order.find().sort({ createdAt: -1 });

    res.json(orders);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Error fetching orders"
    });

  }
});

/* Server */

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});