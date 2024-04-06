import "./HeroSection.css";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero-section fade-in">
      <img src="/images/herocopy.jpeg" />
      <h1 className="fade-in">
        Your Home <span>Decor</span>ation Centre
      </h1>
      <button className="btn" id="hero-btn">
        <Link to={"/shop-all"}>Shop Now</Link>
      </button>
    </section>
  );
}
