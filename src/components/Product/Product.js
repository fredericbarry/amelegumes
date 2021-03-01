import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

import Loader from "../Loader/Loader";
import Price from "../Price/Price";

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
              <h1 className="product__name">{product[0].name}</h1>
              <div
                className="product__description"
                dangerouslySetInnerHTML={{
                  __html: product[0].description,
                }}
              ></div>
              <div className="product__price">
                {product[0].price && product[0].stock_status == "instock" && (
                  <Price price={product[0].price} />
                )}
                {product[0].stock_status == "outofstock" && (
                  <div>En rupture de stock</div>
                )}
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
};

export default Product;
