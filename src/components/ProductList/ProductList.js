import { Link } from "react-router-dom";

import "./ProductList.scss";

const ProductList = ({ products }) => {
  return (
    <section className="product-list">
      <div className="grid">
        {products.map((product) => {
          const { id, name, slug, images, price } = product;
          return (
            <Link to={`produit/semis/${slug}`} key={id} className="card">
              <img
                className="card__media"
                alt={name}
                src={images[0].src}
                loading="lazy"
              />
              <div className="card__content">
                <h2 className="card__title">{name}</h2>
              </div>
              <div className="card__meta">
                <h6 className="card__subtitle">Semis</h6>
                <div className="pricing">{price}$</div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;
