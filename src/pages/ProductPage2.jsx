import React from "react";
import { useParams } from "react-router-dom";
import { shopAllData } from "../components/productData";
import "../components/ProductPage.css";

export default function ProductPage() {
  window.scrollTo(0, 0);

  const { productTitle } = useParams();
  const product = shopAllData.find(
    (product) => product.productTitle == productTitle
  );

  return (
    <section className="product-page-section">
      <section className="section">
        <div className="description desc-product-page">
          <h1>{productTitle}</h1>
          <p className="desc-text">{product.productDescription}</p>
          <p className="price">
            {product.price} <span>{product.spanPrice}</span>
          </p>
          <p className="loan">{product.loan}</p>
          <button className="add-to-cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-basket"
              viewBox="0 0 16 16"
            >
              <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5" />
            </svg>
            &nbsp; Add To Cart
          </button>
        </div>
        <div className="product-page-image">
          <img src={product.image} alt={productTitle} />
        </div>
      </section>
    </section>
  );
}
