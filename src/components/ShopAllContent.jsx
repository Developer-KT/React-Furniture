import "./ShopAllContent.css";
import ProductComponent2 from "./Product2";
import { shopAllData } from "./productData";
import { useEffect } from "react";

export default function ShopAllContent() {
  const shopAllList = shopAllData.map((product) => {
    return (
      <ProductComponent2
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
      threshold: 0.5,
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
      <div className="shop-all-hero fade-in">
        <h1>Shop All</h1>
        <img src="images/living-room-png.png" alt="Living room" id="" />
      </div>
      <section className="products-section">{shopAllList}</section>
    </>
  );
}
