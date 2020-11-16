import React from "react";

import "./Product.css";

const Product = ({ name, category, image, description }) => {
  return (
    <div className="ProductContainer">
      <img
        className="ProductImage"
        alt={name}
        src={process.env.PUBLIC_URL + "/images/products/" + image}
      />
      <div className="ProductContent">
        <h2 className="ProductName">{name}</h2>
        <p>{description}</p>
      </div>
      <div className="ProductActions">
        <div className="ProductCategory">{category}</div>
      </div>
    </div>
  );
};

export default Product;
