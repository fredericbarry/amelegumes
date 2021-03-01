import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

import Loader from "../Loader/Loader";

import "./Product.scss";

const Product = () => {
  const { slug } = useParams();
  const { isFetching, error, response: product } = useFetch(
    "wp-json/wc/v3/products?status=publish&slug=" + slug
  );
  //  if (product) {
  //    console.log(product);
  //  }
  return (
    <>
      {error && <div>{error}</div>}
      {isFetching && <Loader />}
      {product && (
        <div className="product__wrapper">
          <article className="product">
            <img
              className="product__image"
              alt={product[0].name}
              src={product[0].images[0].src}
              loading="lazy"
            />
            <div className="product__content">
              <h6 className="product__category">
                {product[0].categories[0].name}
              </h6>
              <div className="product__name__wrap">
                <h1 className="product__name">{product[0].name}</h1>
                <div className="product__price">
                  {new Intl.NumberFormat("fr-CA", {
                    style: "currency",
                    currency: "CAD",
                  }).format(product[0].price)}
                </div>
              </div>
              <div
                className="product__description"
                dangerouslySetInnerHTML={{
                  __html: product[0].description,
                }}
              ></div>
            </div>
          </article>
        </div>
      )}
    </>
  );
};

export default Product;
