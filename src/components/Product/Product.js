import React from "react";

import "./Product.css";

const Product = ({ name, category, image }) => {
  return (
    <div className="ProductContainer">
      <img
        className="ProductImage"
        alt={name}
        src={process.env.PUBLIC_URL + "/images/products/" + image}
      />
      <div className="ProductContent">
        <h2 className="ProductName">{name}</h2>
      </div>
      <div className="ProductActions">
        <div className="ProductCategory">{category}</div>
      </div>
    </div>
  );
};

export default Product;
