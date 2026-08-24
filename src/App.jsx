import { useState } from "react";
import "./App.css";

const categories = [
  "Tout",
  "Entrées",
  "Plats Complets",
  "Grillades",
  "Boissons",
  "Desserts",
  "Lunch Pack"
];

const dishes = [
  {
    id: 1,
    name: "Poulet + Foufou / Riz + Legume",
    description: "Poulet tendre, grillet ou a la sauce avec accompagnement.",
    price: 12,
    category: "Plats Complets",
    image: "/img/poulet.jpg",
  },
  {
    id: 2,
    name: "Ndakala + Foufou / Riz + Legume",
    description: "Fretins a la sauce avec accompagnement.",
    price: 12,
    category: "Plats Complets",
    image: "/img/ndakala.jpg",
  },
  {
    id: 3,
    name: "Boeuf + Foufou / Riz + Legume",
    description: "Beauf fri ou a la suace avec accompagement.",
    price: 12,
    category: "Plats Complets",
    image: "/img/boeuf.jpg",
  },
  {
    id: 4,
    name: "Michopo",
    description: "Viande de chevre grillée.",
    price: 18,
    category: "Grillades",
    image: "/img/michopo.jpg",
  },
  {
    id: 5,
    name: "Tilapia + Foufou / Riz + Legume",
    description: "Tilapia grillé; fri ou a la sauce avec accompagnement.",
    price: 15,
    category: "Plats Complets",
    image: "/img/tilapia.jpg",
  },
  {
    id: 6,
    name: "Potage Vegetarien",
    description: "A base des pommes de terre et legumes.",
    price: 9,
    category: "Entrées",
    image: "/img/potage_v.jpg",
  },
  {
    id: 7,
    name: "Jus Naturel",
    description: "Freshly prepared natural mango juice.",
    price: 4,
    category: "Boissons",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=800",
  },
  {
    id: 8,
    name: "Patisseries",
    description: "Rich chocolate cake served with vanilla ice cream.",
    price: 6,
    category: "Desserts",
    image: "/img/patisserie.webp",
  },
  {
    id: 9,
    name: "Kitoya + Foufou / Riz + Legume",
    description: "Tender grilled chicken served with fries and fresh salad.",
    price: 12,
    category: "Plats Complets",
    image: "/img/kitoyo.jpg",
  },

  {
    id: 10,
    name: "Lunch Pack",
    description: "2 Pains + 1 Sardine + 1 Jus + 1 Fruit.",
    price: 3,
    category: "Lunch Pack",
    image: "/img/launch_pack_img.jpeg"
  },

  {
    id: 11,
    name: "Coca",
    description: "Freshly prepared natural mango juice.",
    price: 1.5,
    category: "Boissons",
    image: "/img/coca.jpg",
  },
  {
    id: 12,
    name: "Fanta",
    description: "Freshly prepared natural mango juice.",
    price: 1.5,
    category: "Boissons",
    image: "/img/fanta.webp",
  },
  {
    id: 13,
    name: "Eau",
    description: "Freshly prepared natural mango juice.",
    price: 0.5,
    category: "Boissons",
    image: "/img/eau.jpg",
  },
  {
    id: 14,
    name: "Potage",
    description: "A base des pommes de terre et legumes et Viande de porc.",
    price: 7,
    category: "Entrées",
    image: "/img/potage.png",
  },
  {
    id: 15,
    name: "Creme Glacée",
    description: "Rich chocolate cake served with vanilla ice cream.",
    price: 6,
    category: "Desserts",
    image: "/img/creme.jpg",
  },
  {
    id: 16,
    name: "Poulet Mayo",
    description: "Poulet grillée à la sauce mayonnaise.",
    price: 18,
    category: "Grillades",
    image: "/img/poulet_mayo.jpg",
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Tout");

  const filteredDishes =
    selectedCategory === "Tout"
      ? dishes
      : dishes.filter((dish) => dish.category === selectedCategory);


  return (
    <div className="app">
      <header className="hero">
        <div className="hero-overlay">
          <p className="restaurant-label">Bienvenue Chez</p>

          <h1>Maison Gradie</h1>

          <p className="hero-subtitle">
            Great food. Great moments.
          </p>

          <button className="view-menu" onClick={() => {
            document.getElementById("menu").scrollIntoView({
              behavior: "smooth",
            });
          }}>
            Voir notre Menu
          </button>
        </div>
      </header>

      <main id="menu" className="menu-container">
        <div className="menu-heading">
          <p>NOTRE MENU</p>
          <h2>Decouvrez Nos Plats</h2>
          <span>
            Des ingrédients frais, des saveurs délicieuses et des plats préparés avec soin.
          </span>
        </div>

        <div className="categories">
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <section className="menu-grid">
          {filteredDishes.map((dish) => (
            <article className="dish-card" key={dish.id}>
              <div className="dish-image">
                <img src={dish.image} alt={dish.name} />
              </div>

              <div className="dish-content">
                <div className="dish-title">
                  <h3>{dish.name}</h3>
                  <strong>${dish.price}</strong>
                </div>

                <p>{dish.description}</p>

                <button className="order-button">
                  Order
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer>
        <h2>Maison Gradie</h2>
        <p>United We Stand. Divided We fall.</p>

        <div className="footer-buttons">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Maison+Gradie+Lubumbashi"
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 Location
          </a>

          <a href="tel:+243998098131">
            📞 Contact Us
          </a>
        </div>

        <small>© 2026 Maison Gradie. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;