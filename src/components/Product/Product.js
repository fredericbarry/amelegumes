import React, { Component } from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

class Product extends Component {
  render() {
    return (
      <Card raised>
        <CardMedia
          component="img"
          alt={this.props.name}
          image={
            process.env.PUBLIC_URL + "/images/products/" + this.props.image
          }
        />
        <CardContent>
          <Typography component="h2" variant="h6" color="primary">
            {this.props.name}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default Product;
