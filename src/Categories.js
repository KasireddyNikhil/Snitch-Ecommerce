// src/Categories.js
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import StarIcon from "@mui/icons-material/Star";
import WcIcon from "@mui/icons-material/Wc";
import WatchIcon from "@mui/icons-material/Watch";
import BrushIcon from "@mui/icons-material/Brush";

const categories = [
  { icon: <LocalMallIcon />, label: "Bags" },
  { icon: <CheckroomIcon />, label: "Clothing" },
  { icon: <StarIcon />, label: "Accessories" },
  { icon: <WcIcon />, label: "Footwear" },
  { icon: <WatchIcon />, label: "Watches" },
  { icon: <BrushIcon />, label: "Cosmetics" },
];

function Categories() {
  return (
    <Box sx={{ flexGrow: 1, p: 2, backgroundColor: "white" }}>
      <Grid container spacing={2} justifyContent="center">
        {categories.map((category, index) => (
          <Grid item key={index}>
            <IconButton>{category.icon}</IconButton>
            <Typography variant="caption">{category.label}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Categories;
