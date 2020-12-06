import React from "react";

import "./Products.scss";

import Product from "../Product/Product";

const Products = ({ products }) => {
  return (
    <div className="products">
      <div className="grid">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
