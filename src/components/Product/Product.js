import React from "react";

import "./Product.scss";

const Product = ({ name, image, price, description }) => {
  const priceUnit = price?.unit ? (
    <span className="unit">{price.unit}$ ch.</span>
  ) : (
    ""
  );

  const priceHalfDozen = price?.halfDozen ? (
    <>
      <span> ou </span>
      <span className="half-dozen">6 pour {price.halfDozen}$</span>
    </>
  ) : (
    ""
  );

  return (
    <div className="product">
      <img
        className="image"
        alt={name}
        src={process.env.PUBLIC_URL + "/assets/products/" + image}
      />
      <h2 className="name">{name}</h2>
      <p className="description">{description}</p>
      <div className="meta">
        <div className="pricing">
          Semis : {priceUnit}
          {priceHalfDozen}
        </div>
      </div>
    </div>
  );
};

export default Product;
