import "./ProductList.scss";

import Product from "../Product/Product";

const ProductList = ({ products }) => {
  return (
    <section className="product-list">
      <div className="grid">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
