import "./HomeContent.css";
import ProductComponent from "./Product";
import { productData } from "./productData";
import "../animations.js";
import { useRef, useEffect } from "react";

export default function HomeContent() {
  const productList = productData.map((product) => {
    return (
      <ProductComponent
        productKey={product.key}
        productTitle={product.productTitle}
        productDescription={product.productDescription}
        price={product.price}
        spanPrice={product.spanPrice}
        loan={product.loan}
        image={product.image}
        width={product.width}
      />
    );
  });

  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    const sliders = document.querySelectorAll(".slide-in");

    const appearOptions = {
      threshold: 0.4,
    };

    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });

    sliders.forEach((slider) => {
      appearOnScroll.observe(slider);
    });
  });

  return (
    <>
      <section className="cards-section fade-in">
        <div className="card">
          <img src="images/bathroom-card.jpg" alt="Bathroom card" />
          <h3>Dreamy Bathroom</h3>
        </div>
        <div className="card">
          <img src="images/Quiet_card.jpg" alt="Quiet card" />
          <h3>Timeless Decor</h3>
        </div>
        <div className="card">
          <img src="images/home-card-kitchen.jpg" alt="Kitchen card" />
          <h3>The Elevated Kitchen</h3>
        </div>
      </section>

      <section className="products-section">{productList}</section>
    </>
  );
}
