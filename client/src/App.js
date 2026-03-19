import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestaurantCard from "./components/RestaurantCard";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";

function App() {

  const restaurants = [
    {
      name: "Burger Hub",
      category: "Burger",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      rating: 4.5,
      time: "30 mins",
      price: "₹250 for two"
    },
    {
      name: "Pizza Palace",
      category: "Pizza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      rating: 4.3,
      time: "25 mins",
      price: "₹300 for two"
    },
    {
      name: "Sushi World",
      category: "Asian",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351",
      rating: 4.7,
      time: "35 mins",
      price: "₹500 for two"
    },
    {
      name: "Biryani House",
      category: "Indian",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
      rating: 4.6,
      time: "40 mins",
      price: "₹350 for two"
    },
    {
      name: "Taco Fiesta",
      category: "Mexican",
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
      rating: 4.2,
      time: "20 mins",
      price: "₹200 for two"
    },
    {
      name: "Pasta Corner",
      category: "Italian",
      image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb",
      rating: 4.4,
      time: "30 mins",
      price: "₹280 for two"
    },
    {
      name: "Fried Chicken Hub",
      category: "Chicken",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec",
      rating: 4.5,
      time: "28 mins",
      price: "₹320 for two"
    },
    {
      name: "Ramen Bowl",
      category: "Asian",
      image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e",
      rating: 4.6,
      time: "32 mins",
      price: "₹380 for two"
    },
    {
      name: "BBQ Grill House",
      category: "BBQ",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      rating: 4.7,
      time: "38 mins",
      price: "₹550 for two"
    },
    {
  name: "Seafood Paradise",
  category: "Seafood",
  image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62",
  rating: 4.6,
  time: "34 mins",
  price: "₹420 for two"
},
{
  name: "Sandwich Corner",
  category: "Fast Food",
  image: "https://images.unsplash.com/photo-1553909489-cd47e0907980",
  rating: 4.3,
  time: "18 mins",
  price: "₹150 for two"
},
{
  name: "Ice Cream World",
  category: "Dessert",
  image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
  rating: 4.5,
  time: "15 mins",
  price: "₹180 for two"
}
  ];

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [showTopRated, setShowTopRated] = useState(false);
  const [category, setCategory] = useState("All");

  // Add to cart
  const addToCart = (name,price) => {

    const existingItem = cart.find((item) => item.name === name);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, {name,price ,quantity: 1 }]);
    }

  };

  // Increase quantity
  const increaseItem = (name) => {

    setCart(
      cart.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

  };

  // Decrease quantity
  const decreaseItem = (name) => {

    setCart(
      cart
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  };

  // Search filter
  let filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(search.toLowerCase())
  );

  // Top rated filter
  if (showTopRated) {
    filteredRestaurants = filteredRestaurants.filter(
      (restaurant) => restaurant.rating > 4.5
    );
  }

  // Category filter
  if (category !== "All") {
    filteredRestaurants = filteredRestaurants.filter(
      (restaurant) => restaurant.category === category
    );
  }

  return (
    <Router>

      <Navbar cartCount={cart.length} />

      <Routes>

        <Route
          path="/"
          element={
            <div style={{ 
              padding: "30px",
              maxWidth:"1300px",
              margin:"auto"
            }}>

              {/* Search + Filters */}
              <div style={{ marginBottom: "20px" }}>

                <input
                  type="text"
                  placeholder="Search restaurants..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{
                    padding: "10px",
                    width: "220px",
                    marginRight: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc"
                  }}
                />

                <button
                  onClick={() => setShowTopRated(!showTopRated)}
                  style={{
                    padding: "10px",
                    marginRight: "10px",
                    background: "#a855f7",
                    color: "black",
                    border: "white",
                    borderRadius: "5px",
                    cursor: "pointer"
                  }}
                >
                  ⭐ Top Rated
                </button>

              </div>

              {/* Category buttons */}
              <div style={{ marginBottom: "20px" }}>
                {["All","Burger","Pizza","Asian","Indian","Mexican","Italian","BBQ","Chicken"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    style={{
                      marginRight: "10px",
                      marginBottom: "10px",
                      padding: "8px 12px",
                      borderRadius: "20px",
                      border: "white",
                      background: category === cat ? "#a855f7" : "white",
                      color: category === cat ? "white" : "black",
                      cursor: "pointer"
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Restaurant Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "20px"
                }}
              >

  {filteredRestaurants.map((restaurant, index) => (
    <RestaurantCard
      key={index}
      {...restaurant}
      addToCart={addToCart}
    />
  ))}
</div>
</div>
          }
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              increaseItem={increaseItem}
              decreaseItem={decreaseItem}
            />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} setCart={setCart} />}
        />
        
        <Route 
           path="/success" element={<OrderSuccess />}
        />
        <Route 
        path="/orders" element={<Orders />} 
        />

      </Routes>
      

    </Router>
  );
}

export default App;