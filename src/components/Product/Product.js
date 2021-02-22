import "./Product.scss";

const Product = ({ product }) => {
  const { name, description, images, price } = product;
  return (
    <div className="product">
      <img className="image" alt={name} src={images[0].src} loading="lazy" />
      <h2 className="name">{name}</h2>
      <div
        className="description"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      ></div>
      <div className="meta">
        <div className="pricing">Semis : {price}$ ch.</div>
      </div>
    </div>
  );
};

export default Product;
