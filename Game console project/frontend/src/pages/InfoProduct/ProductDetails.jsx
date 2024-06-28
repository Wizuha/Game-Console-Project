import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
  const {id_console} = useParams();
  const [product,setProduct] = useState(null);
  
  useEffect(() => {
    fetch(`http://localhost:8000/product/${id_console}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .then((error) => console.error("Error fetching product detail",error))
  })
  console.log(product)
  return (
    <div>
      <p>{product.name}</p>
    </div>
  )
}

