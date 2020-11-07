import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const Product = (props) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={props.name}
        image={process.env.PUBLIC_URL + "/images/products/" + props.image}
      />
      <CardContent>
        <Typography component="h2" variant="h6" color="primary">
          {props.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
