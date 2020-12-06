import React, { Component } from "react";

import Hero from "../components/Hero/Hero";
import Loader from "../components/Loader/Loader";
import Logo from "../components/Logo/Logo";
import NavBar from "../components/NavBar/NavBar";
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
      "https://gist.githubusercontent.com/fredericbarry/349338aeb5e48343020f0bf9236b1e51/raw/63f22af3d046c3bdac004b20dd13a95b21b6d47f/amelegumes-products.json"
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
        <NavBar>
          <Logo className="NavBarLogo" />
          <SearchBox searchChange={this.onSearchChange} />
        </NavBar>
        {!searchfield.length ? <Hero /> : <></>}
        {!products.length ? (
          <Loader />
        ) : (
          <Products products={filteredProducts} />
        )}
      </>
    );
  }
}

export default App;
