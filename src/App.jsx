import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import SpecialsPage from "./pages/Specials";
import ShopAll from "./pages/ShopAll";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import ProductPage2 from "./pages/ProductPage2";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop-all" element={<ShopAll />} />
        <Route path="/specials" element={<SpecialsPage />} />
        <Route path="/product/:productTitle" element={<ProductPage />} />
        <Route
          path="/shop-all/product/:productTitle"
          element={<ProductPage2 />}
        />
      </Routes>

      <Footer />
    </Router>
  );
}

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
