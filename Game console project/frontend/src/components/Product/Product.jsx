import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Product.css";
import { useMyContext } from "../../context/searchContext";

export default function Product({ product, ciblingProduct }) {
  const [hover, setHover] = useState(null);
  const [rate, setRate] = useState(0);
  const [rateProduct, setRateProduct] = useState("");
  const { tabLike, tabPurchase } = useMyContext();

  const handlSendReview = async (product, index, id_console) => {
    try {
      ciblingProduct(product.id_console, index);
      let response = await fetch(
        `http://localhost:8000/product/${id_console}`,
        {
          method: "PUT",
          body: JSON.stringify({
            product: product,
            rate: index,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await response.json();
      setRateProduct(data);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div className="product">
      <div className="product-item">
        <Link to={`product/${product.id_console}`}>
          <div className="image">
            <img src={product.image} alt="Product" />
          </div>
        </Link>
        <div className="title-price">
          <Link
            to={`product/${product.id_console}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <p className="title">{product.name}</p>
          </Link>
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
                    onClick={() =>
                      handlSendReview(product, index, product.id_console)
                    }
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
          <div className="add-pannier">
            <button onClick={()=> tabPurchase(product)}>Ajouter au pannier</button>
          </div>
        </div>
      </div>
    </div>
  );
}
