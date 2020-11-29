import React, { Component } from "react";

import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import SearchBox from "./components/SearchBox/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    /* this.setState({ products: products }); */
    fetch(
      "https://gist.githubusercontent.com/fredericbarry/d65a89257da4ab93c9b81b19e68f3729/raw/532bc7770c2e550be7801d1ad0763f6064e31a40/products.json"
    )
      .then((response) => response.json())
      .then((products) => this.setState({ products: products }));
  }

  /*
  groupBy = (objectArray, property) => {
    return objectArray.reduce((result, currentValue) => {
      // Create an empty array if one does not already exists for the `property` then push the `currentValue` in it.
      (result[currentValue[property]] =
        result[currentValue[property]] || []).push(currentValue);
      // Return the current `result` iteration value that will serve as the next `result` iteration value
      return result;
    }, {}); // Empty object is the initial value for `result` object
  };
  */

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredProducts = this.state.products
      .sort((a, b) => {
        // If category is the same then sort by name
        if (a.category === b.category) {
          return a.name > b.name ? 1 : -1;
        }
        return a.category > b.category ? 1 : -1;
      })
      .filter((product) => {
        return product.name
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase());
      });
    /* if (this.state.products.length === 0) {
      return <>down</>;
    } else { */
    return (
      <>
        <Navbar />
        <Hero />
        <SearchBox searchChange={this.onSearchChange} />
        <Products products={filteredProducts} />
      </>
    );
    /* } */
  }
}

export default App;
