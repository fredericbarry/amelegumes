import React from "react";

import Product from "../Product/Product";

const ProductList = ({ products }) => {
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
};

export default ProductList;
