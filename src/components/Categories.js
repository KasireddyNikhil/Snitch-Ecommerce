// src/components/Categories.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTshirt,
  faLaptop,
  faGem,
  faMobileAlt,
  faCouch,
  faBlender,
  faBook,
  faBaby,
  faFootballBall,
  faTools,
  faGift,
  faHeart,
  faShoePrints,
  faCar,
  faUtensils,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
import "./Categories.css";

const categoriesWithIcons = [
  { name: "All", icon: faGift },
  { name: "Electronics", icon: faLaptop },
  { name: "Jewelry", icon: faGem },
  { name: "Men's Clothing", icon: faTshirt },
  { name: "Women's Clothing", icon: faTshirt },
  { name: "Phones", icon: faMobileAlt },
  { name: "Furniture", icon: faCouch },
  { name: "Home Appliances", icon: faBlender },
  { name: "Books", icon: faBook },
  { name: "Baby Products", icon: faBaby },
  { name: "Sports", icon: faFootballBall },
  { name: "Tools", icon: faTools },
  { name: "Health & Beauty", icon: faHeart },
  { name: "Shoes", icon: faShoePrints },
  { name: "Automotive", icon: faCar },
  { name: "Pet Supplies", icon: faDog },
  { name: "Food", icon: faUtensils },
];

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="categories">
      {categoriesWithIcons.map((category) => (
        <button
          key={category.name}
          className={category.name === selectedCategory ? "selected" : ""}
          onClick={() => setSelectedCategory(category.name)}
        >
          <FontAwesomeIcon icon={category.icon} /> {category.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
