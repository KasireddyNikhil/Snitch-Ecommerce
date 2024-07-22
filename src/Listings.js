// src/Listings.js
import React, { useState, useEffect } from "react";
import ListingCard from "./components/ListingCard";
import Header from "./components/Header";
import "./Listings.css";

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setListings(data);
    };

    fetchData();
  }, []);

  const filteredListings = listings.filter(
    (listing) =>
      (selectedCategory === "All" || listing.category === selectedCategory) &&
      listing.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className="listings-container">
        {filteredListings.map((listing) => (
          <ListingCard
            key={listing.id}
            title={listing.title}
            price={listing.price}
            image={listing.image}
            rating={listing.rating.rate}
          />
        ))}
      </div>
    </div>
  );
};

export default Listings;
