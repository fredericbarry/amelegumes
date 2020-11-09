import React from "react";

import "./Product.css";

const Product = ({ name, image }) => {
  return (
    <div className="ProductContainer">
      <img
        className="ProductImage"
        alt={name}
        src={process.env.PUBLIC_URL + "/images/products/" + image}
      />
      <div className="ProductContent">
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Product;
