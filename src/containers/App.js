import React, { Component } from "react";

import Hero from "../components/Hero/Hero";
import Loader from "../components/Loader/Loader";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";
import SearchBox from "../components/SearchBox/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/fredericbarry/amelegumes-api/master/db.json"
    )
      .then((response) => response.json())
      .then((products) => this.setState({ products: products }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { products, searchfield } = this.state;
    const filteredProducts = products
      .sort((a, b) => {
        // If category is the same then sort by name
        if (a.category === b.category) {
          return a.name > b.name ? 1 : -1;
        }
        return a.category > b.category ? 1 : -1;
      })
      .filter((product) => {
        return product.name.toLowerCase().includes(searchfield.toLowerCase());
      });
    return (
      <>
        <Navbar />
        <Hero />
        {!products.length ? (
          <Loader />
        ) : (
          <>
            <SearchBox
              placeholder="Rechercher"
              searchChange={this.onSearchChange}
            />
            <Products products={filteredProducts} />
          </>
        )}
      </>
    );
  }
}

export default App;
