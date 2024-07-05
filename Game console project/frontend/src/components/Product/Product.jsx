import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Product.css";

export default function Product({ product, ciblingProduct }) {
  const [hover, setHover] = useState(null);
  const [rate, setRate] = useState(0);

  return (
    <div className="product">
      <div className="product-item">
        <Link to={`product/${product.id_console}`}>
          <div className="image">
            <img src="logo192.png" alt="Product" />
          </div>
        </Link>
        <div className="title-price">
          <p className="title">{product.name}</p>
          <p className="price">{product.price}€</p>
          <div className="rate">
            {[...Array(5)].map((star, index) => {
              const currentRating = product.rate;
              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => ciblingProduct(product.id_console, index)}
                  />
                  <FaStar
                    id={index}
                    className="star"
                    size={20}
                    color={index <= currentRating ? "ACACAC" : "e4e5e9"}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
