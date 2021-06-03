//import react library
import React from "react";
//import Grid component
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
// product function
const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes.",
    price: "$20",
    image:
      "https://image.goat.com/crop/1000/attachments/product_template_additional_pictures/images/040/723/498/original/641088_01.jpg.jpeg?1597079367",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple macbook.",
    price: "$1000",
    image:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1603332211000",
  },
];
// initial product function
const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          //think of these as ratios
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

//only exporting the products function
export default Products;
