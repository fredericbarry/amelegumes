import React, { Component } from "react";

import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

import { products } from "./products";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: products,
    };
  }

  groupBy = (objectArray, property) => {
    return objectArray.reduce((result, currentValue) => {
      // Create an empty array if one does not already exists for the `property` then push the `currentValue` in it.
      (result[currentValue[property]] =
        result[currentValue[property]] || []).push(currentValue);
      // Return the current `result` iteration value that will serve as the next `result` iteration value
      return result;
    }, {}); // Empty object is the initial value for `result` object
  };

  render() {
    const groupedProducts = this.groupBy(
      this.state.products.sort((a, b) => (a.name > b.name ? 1 : -1)),
      "category"
    );
    return (
      <>
        <Navbar />
        <Hero />
        <Products categories={groupedProducts} />
      </>
    );
  }
}

export default App;
