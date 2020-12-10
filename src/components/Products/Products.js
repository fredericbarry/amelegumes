import React from "react";

import "./Products.scss";

import ProductList from "../ProductList/ProductList";

const Products = ({ products }) => {
  return (
    <div className="products">
      <div className="grid">
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Products;
