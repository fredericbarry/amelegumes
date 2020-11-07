import React from "react";
import { Box, Grid } from "@material-ui/core";
import Product from "../Product/Product";

const Products = (props) => {
  return (
    <Box p={2}>
      <Grid container spacing={1}>
        {props.products.map((product, i) => {
          return (
            <Grid item key={i} xs={12} sm={6} md={4} lg={3} xl={1}>
              <Product
                name={props.products[i].name}
                image={props.products[i].image}
                description={props.products[i].description}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Products;
