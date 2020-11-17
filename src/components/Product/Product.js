import React from "react";

import "./Product.css";

const Product = ({ name, image, price, description }) => {
  const priceUnit = price?.unit ? (
    <div className="priceUnit">{price.unit}$ ch.</div>
  ) : (
    ""
  );

  const priceHalfDozen = price?.halfDozen ? (
    <div className="priceHalfDozen">6 pour {price.halfDozen}$</div>
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
        {priceUnit}
        {priceHalfDozen}
      </div>
    </div>
  );
};

export default Product;
