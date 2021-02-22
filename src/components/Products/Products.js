import { Component, useEffect, useState } from "react";

import "./Products.scss";

import Loader from "../Loader/Loader";
import ProductFilters from "../ProductFilters/ProductFilters";
import ProductList from "../ProductList/ProductList";
import SearchBox from "../SearchBox/SearchBox";

const Products = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [products, setProducts] = useState(null);

  const basicAuth = (key, secret) => {
    let hash = btoa(key + ":" + secret);
    return "Basic " + hash;
  };

  useEffect(() => {
    fetch(
      process.env.REACT_APP_API_DOMAIN_URL +
        "wp-json/wc/v3/products?per_page=100&status=publish",
      {
        headers: {
          Authorization: basicAuth(
            process.env.REACT_APP_API_CLIENT_KEY,
            process.env.REACT_APP_API_CLIENT_SECRET
          ),
        },
      }
    )
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
        setIsFetching(false);
      });
  }, []);

  return (
    <>
      {isFetching && <Loader />}
      {products && <ProductList products={products} />}
    </>
  );
};

class oldProducts extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      searchInput: "",
    };
  }

  handleSearchBoxChange = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    const { products, searchInput } = this.state;
    const filteredProducts = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.description.toLowerCase().includes(searchInput.toLowerCase())
      );
    });

    return (
      <div className="products">
        <>
          <ProductFilters>
            <SearchBox
              placeholder="Rechercher"
              onChange={this.handleSearchBoxChange}
            />
          </ProductFilters>
          {!filteredProducts.length ? (
            <div className="no-results-found">
              <div className="emoji">🤷‍♀️</div>
              <p>
                Désolée, je ne trouve pas de <q>{searchInput}</q>&nbsp;…
              </p>
              <p>
                On va se le dire, mon moteur de recherche est du genre un peu
                simplet, donc soyez pas trop compliqué dans votre choix de mot
                pour ne pas trop le mêler! 😉
              </p>
            </div>
          ) : (
            <ProductList products={products} />
          )}
        </>
      </div>
    );
  }
}

export default Products;
