import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
  render() {
    return (
      <div className="product">
        <img alt={this.props.name} src={this.props.image} />
        <span>{this.props.description}</span>
      </div>
    );
  }
}

export default Product;
