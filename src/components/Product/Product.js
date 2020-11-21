import React from "react";

import "./Product.css";

const Product = ({ name, image, price, description }) => {
  const priceUnit = price?.unit ? (
    <span className="priceUnit">{price.unit}$ ch.</span>
  ) : (
    ""
  );

  const priceHalfDozen = price?.halfDozen ? (
    <>
      <span> ou </span>
      <span className="priceHalfDozen">6 pour {price.halfDozen}$</span>
    </>
  ) : (
    ""
  );

  return (
    <div className="productContainer">
      <img
        className="productImage"
        alt={name}
        src={process.env.PUBLIC_URL + "/images/products/" + image}
      />
      <h2 className="productName">{name}</h2>
      <p className="productDescription">{description}</p>
      <div className="cardMeta">
        <div className="productPricing">
          Semis : {priceUnit}
          {priceHalfDozen}
        </div>
      </div>
    </div>
  );
};

export default Product;
