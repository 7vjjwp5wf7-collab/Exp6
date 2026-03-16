import React from "react";
import ProductCard from "./components/ProductCard";
import "./styles.css";

// ✅ Product data passed as props to ProductCard
const products = [
  {
    name: "Laptop Pro",
    price: 55000,
    originalPrice: 65000,
    inStock: true,
    rating: 4,
    emoji: "💻",
    category: "Electronics",
  },
  {
    name: "Headphones",
    price: 2000,
    originalPrice: null,
    inStock: false,
    rating: 3,
    emoji: "🎧",
    category: "Audio",
  },
  {
    name: "Smartwatch",
    price: 12999,
    originalPrice: 15000,
    inStock: true,
    rating: 5,
    emoji: "⌚",
    category: "Wearables",
  },
  {
    name: "Mech Keyboard",
    price: 4500,
    originalPrice: null,
    inStock: true,
    rating: 4,
    emoji: "⌨️",
    category: "Accessories",
  },
  {
    name: "Wireless Mouse",
    price: 1299,
    originalPrice: 1800,
    inStock: false,
    rating: 4,
    emoji: "🖱️",
    category: "Accessories",
  },
];

function App() {
  return (
    <div className="app">

      {/* Page Header */}
      <header className="page-header">
        <span className="eyebrow">React Component</span>
        <h1>Our Products</h1>
        <p>Reusable <code>ProductCard</code> component using props &amp; conditional rendering.</p>
      </header>

      {/* ✅ Multiple ProductCards rendered from App using .map() */}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            price={product.price}
            inStock={product.inStock}
            originalPrice={product.originalPrice}
            rating={product.rating}
            emoji={product.emoji}
            category={product.category}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
