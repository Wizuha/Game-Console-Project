import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import "./ProductDetails.css";
import { useMyContext } from "../../context/searchContext";

export default function ProductDetails() {
  const { id_console } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { handleIncrease,handleDecrease,quantity} = useMyContext();

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
        <div className="image-head">
          <img src={product.image} />
        </div>
      </div>
      <div className="information-achat">
        <div className="title-price-details">
          <h1>{product.name}</h1>
          <p>${product.price}</p>
        </div>
        <div className="availability-details">
          <h2>Availabality :</h2>
          <p className="in-stock">
            <FaCheck /> In Stock
          </p>
        </div>
        <div className="line"></div>
        <fieldset>
          <div className="color-detail">
            <h2>Color :</h2>
            <div className="color-button">
              <div className="color-green">
                <input type="radio" id="1" name="color" value="green" checked />
              </div>
              <div className="color-black">
                <input type="radio" id="2" name="color" value="black" />
              </div>
            </div>
          </div>
        </fieldset>
        <div className="quantity-details">
          <h2>Quantity :</h2>
          <div className="console-number">
            <button onClick={ () => handleDecrease(product)}>-</button>
            <p>{quantity}</p>
            <button onClick={ () => handleIncrease(product)}>+</button>
          </div>
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
          <p>20% off, 49% off, Alex remote</p>
        </div>
        <div className="share">
          <h2>Share :</h2>
          <div className="icone-share">
            <img src="/google.svg" />
            <img src="/facebook.svg" />
            <img src="/whatsapp.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
