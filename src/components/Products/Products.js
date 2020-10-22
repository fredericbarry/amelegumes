import React, { Component } from "react";
import Product from "../Product/Product";
import "./Products.css";

class Products extends Component {
  render() {
    return (
      <div id="products">
        {this.props.products.map((product, i) => {
          return (
            <Product
              key={i}
              name={this.props.products[i].name}
              image={this.props.products[i].image}
              description={this.props.products[i].description}
            />
          );
        })}
      </div>
    );
  }
}

export default Products;
