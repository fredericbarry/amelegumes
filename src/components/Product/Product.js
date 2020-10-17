import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
  render(
    img = "https://drive.google.com/file/d/1lyvlkn1mdrk_nWLZFdC4aAmappXF6FiJ/view",
    name = "Ace 55",
    desc = "L'Ace 55 est robuste, résilient et mieux servi tout juste sorti du jardin. Faible taux d'acidité."
  ) {
    return (
      <div className="product">
        <img alt={name} src={img} />
        <span>{desc}</span>
      </div>
    );
  }
}

export default Product;
