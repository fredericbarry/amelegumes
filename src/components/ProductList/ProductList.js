import "./ProductList.scss";

const ProductList = ({ products }) => {
  return (
    <section className="product-list">
      <div className="grid">
        {products.map((product) => {
          const { id, name, description, images, price } = product;
          return (
            <div key={id} className="product">
              <img
                className="image"
                alt={name}
                src={images[0].src}
                loading="lazy"
              />
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
        })}
      </div>
    </section>
  );
};

export default ProductList;
