import React from "react";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Product.css";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [rate, setRate] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching product", error));
  }, []);

  const ciblingProduct = (id, newRate) => {
    const productsUpdated = products.map((product, index) => {
      if (product.id_console == id) {
        // product.rate = rate ;
        return { ...product, rate: newRate };
      }
      return product;
    });
    setProducts(productsUpdated);
  };

  return (
    <div className="console-product">
      {products.map((product, index) => (
        <div key={index} className="product" id={product.id_console}>
          <div className="product-item">
            <div className="image">
              <img src="logo192.png" alt="Product" />
            </div>
            <div className="title-price">
              <p className="title">{product.name}</p>
              {/* <p className="description">{product.description}</p> */}
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
                          ciblingProduct(product.id_console, index)
                        }
                      />
                      <FaStar
                        id={index}
                        className="star"
                        size={20}
                        // color={
                        //   currentRating <= (hover || rating)
                        //     ? "ACACAC"
                        //     : "e4e5e9"
                        // }
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
      ))}
    </div>
  );
}
