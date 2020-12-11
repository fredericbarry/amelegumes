import React, { Component } from "react";

import Hero from "../components/Hero/Hero";
import Loader from "../components/Loader/Loader";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";
import SearchInput from "../components/SearchInput/SearchInput";

class App extends Component {
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

  handleSearchInputChange = (event) => {
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
      <>
        <Navbar />
        <Hero />
        {!products.length ? (
          <Loader />
        ) : (
          <>
            <SearchInput
              placeholder="Rechercher"
              onChange={this.handleSearchInputChange}
            />
            <Products products={filteredProducts} />
          </>
        )}
      </>
    );
  }
}

export default App;
