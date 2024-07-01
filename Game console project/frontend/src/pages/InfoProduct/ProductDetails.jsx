import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
        
      </div>
    </div>
  );
}
