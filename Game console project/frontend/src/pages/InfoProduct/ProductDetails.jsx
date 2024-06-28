import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
  const {id_console} = useParams();
  const [product,setProduct] = useState(null);
  
  useEffect(() = async() => {
    try {
      const response = await fetch(`http://localhost:8000/${id_console}`);
      const data = await response.json();
      setProduct(data)
    }catch (error){
      console.log(error)
    }
  })
  
  return (
    <div>
      
    </div>
  )
}

