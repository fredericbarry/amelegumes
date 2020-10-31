import React, { Component } from "react";
//import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";
import { products } from "./products";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        {/* <Hero /> */}
        <Products products={products} />
      </>
    );
  }
}

export default App;
