import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import './ProductDetails.css'

export default function ProductDetails() {
  const { id_console } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/product/${id_console}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors du fetch des données :", error.message);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id_console]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Erreur : {error}</p>;
  }
  if (!product) {
    return <p>Aucun produit trouvé.</p>;
  }

  return (
    <div className="product-details">
      <div className="images">
        <div className="image-head"></div>
        <div className="image-bottom">
          <div className="first-picture"></div>
          <div className="second-picture"></div>
        </div>
      </div>
      <div className="information-achat">
        <div className="title-price">
          <h1>{product.name}</h1>
          <p>${product.price}</p>
        </div>
        <div className="rate-product-detail">
          <p>Note</p>
          {/* {[...Array(5)].map((star, index) => {
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
          })} */}
        </div>
        <div className="availability-details">
          <h2>Availabality :</h2>
          <p className="in-stock">
            <FaCheck /> In Stock
          </p>
        </div>
        <div className="line"></div>
        <div className="color-detail">
          <h2>Color :</h2>
          <input type="radio" name="green" />
          <input type="radio" name="black" />
        </div>
        <div className="quantity">
          <h2>Quantity :</h2>
          <button>+</button>
          <p>1</p>
          <button>-</button>
        </div>
        <div className="card-buy">
          <button>Add to card</button>
          <button>Buy it now</button>
        </div>
        <div className="line"></div>
        <div className="sku">
          <h2>Sku :</h2>
          <p>01133-9-9</p>
        </div>
        <div className="category-detail">
          <h2>Category :</h2>
          <div className="pourcent" >
            <p>20% off,</p>
            <p>49% off</p>
            <p>Alex remote</p>
          </div>
        </div>
        <div className="share">
          <h2>Share :</h2>
          <img src="google.svg" />
          <img src="facebook.svg" />
          <img src="whatsapp.svg" />
        </div>
      </div>
    </div>
  );
}
