# 🛍️ ProductCard — React Component

A clean, responsive product card UI built with **React**, demonstrating core concepts of **props**, **functional components**, and **conditional rendering**.

---

## 🎯 Concepts Covered

| Concept | Usage |
|---|---|
| ✅ Props | `name`, `price`, `inStock`, `originalPrice`, `rating`, `emoji`, `category` passed from `App` to `ProductCard` |
| ✅ Functional Components | `ProductCard` is a reusable functional component |
| ✅ Conditional Rendering | Stock status shows **In Stock** (green) or **Out of Stock** (red) based on `inStock` prop |

---

## 📁 Folder Structure

```
product-card/
│
├── public/
├── src/
│   ├── components/
│   │   └── ProductCard.jsx   ← Reusable card component
│   ├── App.jsx               ← Renders multiple ProductCards
│   ├── main.jsx              ← React entry point
│   └── styles.css            ← All styles
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

### 3. Open in browser
```
http://localhost:5173
```

---

## 🧩 ProductCard Props

| Prop | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | ✅ | Product name |
| `price` | `number` | ✅ | Selling price in ₹ |
| `inStock` | `boolean` | ✅ | Stock availability |
| `originalPrice` | `number` | ❌ | MRP (shows discount badge if provided) |
| `rating` | `number` | ❌ | Star rating out of 5 |
| `emoji` | `string` | ❌ | Product image emoji |
| `category` | `string` | ❌ | Product category label |

---

## 💡 Usage Example

```jsx
<ProductCard
  name="Laptop Pro"
  price={55000}
  inStock={true}
  originalPrice={65000}
  rating={4}
  emoji="💻"
  category="Electronics"
/>

<ProductCard
  name="Headphones"
  price={2000}
  inStock={false}
  rating={3}
  emoji="🎧"
  category="Audio"
/>
```

---

## 🌟 Bonus Features

- 💰 **Discount badge** — auto-calculated from `originalPrice`
- ⭐ **Star rating** — visual 5-star display
- 🛒 **Add to Cart button** — disabled when `inStock === false`
- 🎨 **Hover animation** — card lifts on hover
- 📱 **Responsive** — works on mobile & desktop

---

## 🛠️ Built With

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- CSS Custom Properties
