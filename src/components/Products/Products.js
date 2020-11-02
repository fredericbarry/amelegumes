import React, { Component } from "react";
import { Box, Grid } from "@material-ui/core";
import Product from "../Product/Product";

class Products extends Component {
  render() {
    return (
      <Box p={2}>
        <Grid container spacing={1}>
          {this.props.products.map((product, i) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={1}>
                <Product
                  key={i}
                  name={this.props.products[i].name}
                  image={this.props.products[i].image}
                  description={this.props.products[i].description}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    );
  }
}

export default Products;
