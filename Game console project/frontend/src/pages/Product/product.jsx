import React, { useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import Product from "../../components/Product/Product";
import { Link } from "react-router-dom";
import "./product.css";
import { useMyContext } from "../../context/searchContext";

export default function Products() {
  const { products, setProducts, filterData } = useMyContext();

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching product", error));
  }, []);

  const ciblingProduct = (id, newRate) => {
    const productsUpdated = products.map((product, index) => {
      if (product.id_console == id) {
        return { ...product, rate: newRate };
      }
      return product;
    });
    setProducts(productsUpdated);
  };

  return (
    <div className="page-product">
      <div className="filter-section">
        <Filter />
      </div>
      <div className="product-section">
        {filterData?.map((product) => {
          return (
            <Link to={`/product/${product.id_console}`}>
              <Product
                product={product}
                key={product.id_console}
                ciblingProduct={ciblingProduct}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
