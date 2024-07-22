// src/components/ListingCard.js
import React from "react";
import "./ListingCard.css";

const ListingCard = ({ title, price, image, rating }) => {
  return (
    <div className="listing-card">
      <img src={image} alt={title} />
      <div className="listing-info">
        <h3>{title}</h3>
        <p>{rating} ★</p>
        <p>£{price} total</p>
      </div>
    </div>
  );
};

export default ListingCard;
