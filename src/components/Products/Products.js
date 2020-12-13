import React from "react";

import "./Products.scss";

import Loader from "../Loader/Loader";
import ProductFilters from "../ProductFilters/ProductFilters";
import ProductList from "../ProductList/ProductList";
import SearchBox from "../SearchBox/SearchBox";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      searchInput: "",
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/fredericbarry/amelegumes-api/master/db.json"
    )
      .then((response) => response.json())
      .then((products) => this.setState({ products: products }));
  }

  handleSearchBoxChange = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    const { products, searchInput } = this.state;
    const filteredProducts = products
      .sort((a, b) => {
        // If category is the same then sort by name
        if (a.category === b.category) {
          return a.name > b.name ? 1 : -1;
        }
        return a.category > b.category ? 1 : -1;
      })
      .filter((product) => {
        return (
          product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          product.category.toLowerCase().includes(searchInput.toLowerCase()) ||
          product.description.toLowerCase().includes(searchInput.toLowerCase())
        );
      });

    return (
      <div className="products">
        {!products.length ? (
          <Loader />
        ) : (
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
              <div className="grid">
                <ProductList products={filteredProducts} />
              </div>
            )}
          </>
        )}
      </div>
    );
  }
}

export default Products;
