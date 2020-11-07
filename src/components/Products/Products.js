import React from "react";
import { Box, Grid } from "@material-ui/core";
import Product from "../Product/Product";

const Products = ({ products }) => {
  return (
    <Box p={2}>
      <Grid container spacing={1}>
        {products.map((product, i) => {
          return (
            <Grid item key={products[i].id} xs={12} sm={6} md={4} lg={3} xl={1}>
              <Product
                name={products[i].name}
                image={products[i].image}
                description={products[i].description}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Products;
