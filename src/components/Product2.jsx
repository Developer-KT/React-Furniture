import { Link } from "react-router-dom";

// This is the product that appears as part of the home page (the multiplied product), not the independent page

export default function ProductComponent2(props) {
  return (
    <Link
      to={`/shop-all/product/${props.productTitle}`}
      className="section-link"
    >
      <section className="section section-prods fade-in">
        <div className="description slide-in from-left">
          <h1>{props.productTitle}</h1>
          <p className="desc-text">{props.productDescription}</p>
          <p className="price">
            {props.price} <span>{props.spanPrice}</span>
          </p>
          <p className="loan">{props.loan}</p>
        </div>
        <div className="product-image slide-in from-right">
          <img src={props.image} width={props.width} alt="2 Seat Couch" />
        </div>
      </section>
    </Link>
  );
}
