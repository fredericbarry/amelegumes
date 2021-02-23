import { Component } from "react";

import "./Products.scss";

import useFetch from "../useFetch";
import Loader from "../Loader/Loader";
import ProductFilters from "../ProductFilters/ProductFilters";
import ProductList from "../ProductList/ProductList";
import SearchBox from "../SearchBox/SearchBox";

const Products = () => {
  const { isFetching, error, response: latestProducts } = useFetch(
    "wp-json/wc/v3/products?per_page=100&status=publish"
  );

  return (
    <>
      {error && <div>{error}</div>}
      {isFetching && <Loader />}
      {latestProducts && <ProductList products={latestProducts} />}
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
    );
  }
}

export default Products;
