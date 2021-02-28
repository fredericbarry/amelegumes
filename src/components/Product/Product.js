import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

import Loader from "../Loader/Loader";

import "./Product.scss";

const Product = () => {
  const { slug } = useParams();
  const { isFetching, error, response: product } = useFetch(
    "wp-json/wc/v3/products?status=publish&slug=" + slug
  );
  return (
    <div className="product">
      {error && <div>{error}</div>}
      {isFetching && <Loader />}
      {product && (
        <article>
          <img
            className="product__image"
            alt={product[0].name}
            src={product[0].images[0].src}
            loading="lazy"
          />
          <div className="product__content">
            <h6 className="card__subtitle">{product[0].categories[0].name}</h6>
            <h2 className="product__name">{product[0].name}</h2>
            <div
              className="product__description"
              dangerouslySetInnerHTML={{
                __html: product[0].description,
              }}
            ></div>
            <div className="product__price">{product[0].price}$</div>
          </div>
        </article>
      )}
    </div>
  );
};

export default Product;
