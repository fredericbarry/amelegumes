import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const Product = ({ name, image }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={name}
        image={process.env.PUBLIC_URL + "/images/products/" + image}
      />
      <CardContent>
        <Typography component="h2" variant="h6" color="primary">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
