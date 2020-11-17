import React from "react";

import "./Products.css";

import Product from "../Product/Product";

const Products = ({ products }) => {
  return (
    <section className="ProductsSection">
      <div className="ProductsGrid">
        {products.map((product, i) => {
          return (
            <Product
              key={products[i].id}
              name={products[i].name}
              image={products[i].image}
              price={products[i].price}
              description={products[i].description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Products;
