// src/Listings.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Listings() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        {" "}
        {/* Changed spacing from 3 to 2 */}
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            {" "}
            {/* Changed md from 4 to 3 */}
            <Card sx={{ maxWidth: "100%" }}>
              {" "}
              {/* Removed fixed maxWidth */}
              <CardMedia
                component="img"
                height="250"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: "contain", padding: "10px" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.price} USD
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Listings;
