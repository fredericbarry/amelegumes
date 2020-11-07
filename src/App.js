import React, { Component } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import { products } from "./products";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero />
        <Products products={products} />
      </>
    );
  }
}

export default App;
