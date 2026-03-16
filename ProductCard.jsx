import React from "react";

// ✅ Reusable Functional Component with Props
function ProductCard({ name, price, inStock, originalPrice, rating, emoji, category }) {

  // Bonus: Discount calculation
  const discount = originalPrice
    ? Math.round((originalPrice - price) / originalPrice * 100)
    : null;

  return (
    <div className="card">

      {/* Product Image / Emoji */}
      <div className="card-img-wrap">{emoji}</div>

      {/* Category */}
      <p className="card-category">{category}</p>

      {/* ✅ Props: Product Name */}
      <h2 className="card-name">{name}</h2>

      {/* Bonus: Star Rating */}
      <div className="card-stars">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className={`star ${i <= rating ? "filled" : "empty"}`}>
            ★
          </span>
        ))}
      </div>

      {/* ✅ Props: Price + Bonus Discount Badge */}
      <div className="card-price-row">
        <span className="price">₹{price.toLocaleString("en-IN")}</span>
        {originalPrice && (
          <span className="price-original">
            ₹{originalPrice.toLocaleString("en-IN")}
          </span>
        )}
        {discount && (
          <span className="discount-badge">{discount}% off</span>
        )}
      </div>

      {/* ✅ Conditional Rendering: inStock prop */}
      <span className={`stock-status ${inStock ? "in-stock" : "out-of-stock"}`}>
        <span className="status-dot"></span>
        {inStock ? "In Stock" : "Out of Stock"}
      </span>

      {/* Bonus: Add to Cart Button — disabled when out of stock */}
      <button className="cart-btn" disabled={!inStock}>
        {inStock ? "+ Add to Cart" : "Out of Stock"}
      </button>

    </div>
  );
}

export default ProductCard;
