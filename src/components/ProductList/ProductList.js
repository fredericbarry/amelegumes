import { Link } from "react-router-dom";

import "./ProductList.scss";

const ProductList = ({ products }) => {
  return (
    <section className="product-list">
      <div className="grid">
        {products.map((product) => {
          const { id, name, slug, images, price } = product;
          return (
            <div key={id} className="product">
              <Link to={`produit/semis/${slug}`}>
                <img
                  className="image"
                  alt={name}
                  src={images[0].src}
                  loading="lazy"
                />
                <h2 className="name">{name}</h2>
                <div className="meta">
                  <div className="pricing">Semis : {price}$ ch.</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;
