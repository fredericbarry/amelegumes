import React from "react";

import "./Products.css";

import Product from "../Product/Product";

const Products = ({ categories }) => {
  return (
    <section className="ProductsSection">
      <div className="ProductsGrid">
        {Object.entries(categories).map(([category, products]) => {
          return products.map((product) => {
            return (
              <Product
                key={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                description={product.description}
              />
            );
          });
        })}
      </div>
    </section>
  );
};

export default Products;
